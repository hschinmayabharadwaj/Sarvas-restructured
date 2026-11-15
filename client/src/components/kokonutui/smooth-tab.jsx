"use client";;
import { animate, useMotionValue } from "motion/react";
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Just under critical damping: a firm settle, a hint of overshoot only after
// a fast flick.
const SPRING = {
  type: "spring",
  stiffness: 420,
  damping: 38
};
const EASE_OUT = [0.23, 1, 0.32, 1];

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, min, max) =>
  Math.min(Math.max(v, min), max);

/** The indicator rectangle at a fractional tab position. */
function indicatorRect(rects, progress) {
  const last = rects.length - 1;
  if (last < 0) {
    return null;
  }
  const p = clamp(progress, 0, last);
  const i = Math.min(Math.floor(p), Math.max(last - 1, 0));
  const a = rects[i];
  const b = rects[Math.min(i + 1, last)];
  const t = p - i;
  let left = lerp(a.left, b.left, t);
  let width = lerp(a.width, b.width, t);
  // Rubber-banding past an end: the pill presses against the wall and gives
  // on the far side instead of sliding out of the track.
  const over = progress < 0 ? -progress : progress - last;
  if (over > 0) {
    const squash = width * Math.min(over, 0.5) * 0.4;
    width -= squash;
    if (progress > last) {
      left += squash;
    }
  }
  return { left, width, top: a.top, height: a.height };
}

function Stat({
  label,
  value
}) {
  return (
    <div className="rounded-lg bg-muted px-3 py-2.5">
      <p className="text-[11px] text-muted-foreground">{label}</p>
      <p className="mt-0.5 font-medium text-sm text-foreground tabular-nums">
        {value}
      </p>
    </div>
  );
}

const BARS = [38, 52, 44, 61, 57, 72, 66, 80, 74, 88, 69, 92];

const ACTIVITY = [
  ["Deploy #418 promoted to production", "2m"],
  ["Preview built for fix/auth-redirect", "14m"],
  ["Environment variable rotated", "1h"],
  ["Domain app.example.com verified", "3h"],
];

const MEMBERS = [
  ["AL", "Avery Lane", "Owner"],
  ["JR", "Jordan Reyes", "Admin"],
  ["SK", "Sam Kato", "Developer"],
  ["RM", "Riley Moss", "Viewer"],
];

const DEFAULT_TABS = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <div className="flex h-full flex-col gap-4">
        <div className="grid grid-cols-3 gap-2">
          <Stat label="Requests" value="24.1k" />
          <Stat label="Errors" value="0.12%" />
          <Stat label="p95" value="182 ms" />
        </div>
        <div aria-hidden="true" className="flex h-24 items-end gap-1.5">
          {BARS.map((h, i) => (
            <span
              className={cn(
                "flex-1 rounded-sm",
                i === BARS.length - 1
                  ? "bg-foreground"
                  : "bg-muted-strong"
              )}
              key={`bar-${i.toString()}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "activity",
    title: "Activity",
    content: (
      <ol className="flex flex-col divide-y divide-border">
        {ACTIVITY.map(([text, time]) => (
          <li
            className="flex items-center justify-between gap-3 py-2.5 first:pt-0"
            key={text}
          >
            <span className="truncate text-sm text-foreground">
              {text}
            </span>
            <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
              {time}
            </span>
          </li>
        ))}
      </ol>
    ),
  },
  {
    id: "members",
    title: "Members",
    content: (
      <ul className="flex flex-col gap-3">
        {MEMBERS.map(([initials, name, role]) => (
          <li className="flex items-center gap-3" key={name}>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted font-medium text-[11px] text-muted-foreground">
              {initials}
            </span>
            <span className="flex-1 truncate text-sm text-foreground">
              {name}
            </span>
            <span className="text-xs text-muted-foreground">
              {role}
            </span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "billing",
    title: "Billing",
    content: (
      <div className="flex h-full flex-col gap-5">
        <div className="flex items-baseline justify-between">
          <p className="font-medium text-sm text-foreground">
            Pro plan
          </p>
          <p className="text-sm text-muted-foreground tabular-nums">
            $20 / month
          </p>
        </div>
        <div>
          <div className="mb-1.5 flex justify-between text-xs text-muted-foreground">
            <span>Bandwidth</span>
            <span className="tabular-nums">64 / 100 GB</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-[64%] rounded-full bg-foreground" />
          </div>
        </div>
        <p className="mt-auto text-xs text-muted-foreground">
          Next invoice on Nov 1 · Card ending 4242
        </p>
      </div>
    ),
  },
];

export default function SmoothTab({
  items = DEFAULT_TABS,
  defaultTabId,
  value,
  onChange,
  className,
  activeColor = "bg-background",
  activeTextColor = "text-foreground",
  label = "Sections"
}) {
  const count = items.length;
  const indexOf = (id) =>
    Math.max(
      items.findIndex((item) => item.id === id),
      0
    );

  const [uncontrolled, setUncontrolled] = useState(() => indexOf(defaultTabId));
  const selected =
    value === undefined
      ? clamp(uncontrolled, 0, Math.max(count - 1, 0))
      : indexOf(value);
  // Fractional tab position: 0 … count - 1. It drives the indicator and the
  // label clip directly, without re-rendering React.
  const progress = useMotionValue(selected);

  const baseId = useId();
  const tablistRef = useRef(null);
  const overlayRef = useRef(null);
  const tabRefs = useRef([]);
  const rects = useRef([]);
  const size = useRef({ width: 0, height: 0 });
  const anim = useRef(null);
  const target = useRef(selected);
  const reducedMotion = useRef(false);
  const latest = useRef({ count, items, selected, onChange });
  latest.current = { count, items, selected, onChange };

  const paint = useCallback(
    (p) => {
      const overlay = overlayRef.current;
      const r = indicatorRect(rects.current, p);
      if (overlay && r) {
        const right = size.current.width - r.left - r.width;
        const bottom = size.current.height - r.top - r.height;
        overlay.style.clipPath = `inset(${r.top}px ${right}px ${bottom}px ${r.left}px round ${r.height / 2}px)`;
      }
    },
    []
  );

  // Measure the tabs before paint, and again on resize and font load.
  useLayoutEffect(() => {
    const tablist = tablistRef.current;
    if (!tablist) {
      return;
    }
    let alive = true;
    const measure = () => {
      if (!alive) {
        return;
      }
      // Sub-pixel rects, so the clip lines up with the labels exactly.
      // Divided by the list's scale in case an ancestor is transformed.
      const box = tablist.getBoundingClientRect();
      const ratio = box.width / (tablist.offsetWidth || 1);
      // offsetWidth is rounded: only a real transform counts as a scale.
      const scale = Math.abs(ratio - 1) < 0.01 ? 1 : ratio;
      size.current = { width: box.width / scale, height: box.height / scale };
      rects.current = tabRefs.current.slice(0, count).map((tab) => {
        const r = tab?.getBoundingClientRect();
        return r
          ? {
              left: (r.left - box.left) / scale,
              width: r.width / scale,
              top: (r.top - box.top) / scale,
              height: r.height / scale,
            }
          : { left: 0, width: 0, top: 0, height: 0 };
      });
      paint(progress.get());
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(tablist);
    document.fonts.ready.then(measure).catch(() => undefined);
    return () => {
      alive = false;
      observer.disconnect();
    };
  }, [count, paint, progress]);

  useEffect(() => {
    const unsubscribe = progress.on("change", paint);
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      reducedMotion.current = query.matches;
    };
    sync();
    query.addEventListener("change", sync);
    return () => {
      unsubscribe();
      query.removeEventListener("change", sync);
      anim.current?.stop();
    };
  }, [paint, progress]);

  /** Moves the position to a tab. `velocity` is in tabs per second. */
  const settle = useCallback(
    (index, opts = {}) => {
      target.current = index;
      anim.current?.stop();
      anim.current = null;
      if (opts.instant) {
        progress.jump(index);
        return;
      }
      anim.current = reducedMotion.current
        ? animate(progress, index, { duration: 0.15, ease: EASE_OUT })
        : animate(progress, index, { ...SPRING, velocity: opts.velocity ?? 0 });
    },
    [progress]
  );

  const select = useCallback(
    (index, opts) => {
      const { count: n, items: list, selected: current } = latest.current;
      const next = clamp(index, 0, n - 1);
      settle(next, opts);
      if (next !== current) {
        setUncontrolled(next);
        latest.current.onChange?.(list[next].id);
      }
    },
    [settle]
  );

  // A controlled `value` changed from outside: follow it.
  useEffect(() => {
    if (selected !== target.current) {
      settle(selected);
    }
  }, [selected, settle]);

  const handleKeyDown = (e, i) => {
    const keys = {
      ArrowRight: (i + 1) % count,
      ArrowLeft: (i - 1 + count) % count,
      Home: 0,
      End: count - 1,
    };
    const next = keys[e.key];
    if (next === undefined) {
      return;
    }
    e.preventDefault();
    tabRefs.current[next]?.focus();
    // A held key repeats faster than any spring settles: jump instead.
    select(next, { instant: e.repeat });
  };

  const tabId = (i) => `${baseId}-tab-${i}`;
  const panelId = (i) => `${baseId}-panel-${i}`;

  return (
    <div className={cn("flex w-full max-w-md flex-col gap-3", className)}>
      <div className="flex justify-center">
        <div
          aria-label={label}
          className="relative inline-flex max-w-full rounded-lg bg-muted p-1"
          ref={tablistRef}
          role="tablist"
        >
          {items.map((item, i) => {
            const Icon = item.icon;
            const isSelected = i === selected;
            return (
              <button
                aria-controls={panelId(i)}
                aria-selected={isSelected}
                className={cn(
                  "relative flex shrink-0 items-center gap-1.5 rounded-md px-3.5 py-1.5 font-medium text-sm",
                  "text-muted-foreground transition-colors duration-150 ease-out hover:text-foreground",
                  "outline-none focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
                )}
                id={tabId(i)}
                key={item.id}
                onClick={() => select(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                tabIndex={isSelected ? 0 : -1}
                type="button"
              >
                {Icon && <Icon aria-hidden="true" className="size-4" />}
                <span className="whitespace-nowrap">{item.title}</span>
              </button>
            );
          })}
          {/* The same labels in the active color, clipped to the indicator,
              so each label is exactly right at every point of the slide with
              no color tween. */}
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-0 flex p-1",
              activeColor
            )}
            ref={overlayRef}
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <span
                  className={cn(
                    "flex shrink-0 items-center gap-1.5 px-3.5 py-1.5 font-medium text-sm",
                    activeTextColor
                  )}
                  key={item.id}
                >
                  {Icon && <Icon className="size-4" />}
                  <span className="whitespace-nowrap">{item.title}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border bg-card">
        {/* Only the selected panel shows; the others stay mounted (hidden) so
            a half-typed question or request survives a tab switch. */}
        {items.map((item, i) => (
          <div
            aria-labelledby={tabId(i)}
            className="min-h-[220px] p-6 sm:p-8 outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset"
            hidden={i !== selected}
            id={panelId(i)}
            key={item.id}
            role="tabpanel"
            tabIndex={0}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
