import { c as createLucideIcon, x as requireReactDom, r as reactExports, n as animate, j as jsxRuntimeExports, b as cn, u as useServerData, a as api, P as PageLoading, p as Link, q as FolderGit2, y as PlaceholdersAndVanishInput, z as ShimmerText, A as AnimatePresence, o as motion, w as navigate, X } from "../entry-server.js";
import { M as Markdown } from "./Markdown-myAMqy6d.js";
import { u as useMotionValue, L as Lock } from "./use-motion-value-qh4U7FxK.js";
import { A as ArrowLeft } from "./arrow-left-Ce5aMtRm.js";
import { M as MessageSquareCode, W as WandSparkles } from "./wand-sparkles-CDzbNRzT.js";
import { G as GitPullRequest } from "./git-pull-request-DiFH3hru.js";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconData$3 = {
  name: "file-text",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6"
      }
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }]
  ]
};
__iconData$3.node;
const FileText = createLucideIcon(__iconData$3);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconData$2 = {
  name: "git-branch",
  size: 24,
  node: [
    ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
    ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
  ]
};
__iconData$2.node;
const GitBranch = createLucideIcon(__iconData$2);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconData$1 = {
  name: "maximize-2",
  size: 24,
  node: [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "m21 3-7 7", key: "1l2asr" }],
    ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
    ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
  ]
};
__iconData$1.node;
const Maximize2 = createLucideIcon(__iconData$1);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconData = {
  name: "refresh-cw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }]
  ]
};
__iconData.node;
const RefreshCw = createLucideIcon(__iconData);
var reactDomExports = requireReactDom();
const SPRING = {
  type: "spring",
  stiffness: 420,
  damping: 38
};
const EASE_OUT = [0.23, 1, 0.32, 1];
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-muted px-3 py-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 font-medium text-sm text-foreground tabular-nums", children: value })
  ] });
}
const BARS = [38, 52, 44, 61, 57, 72, 66, 80, 74, 88, 69, 92];
const ACTIVITY = [
  ["Deploy #418 promoted to production", "2m"],
  ["Preview built for fix/auth-redirect", "14m"],
  ["Environment variable rotated", "1h"],
  ["Domain app.example.com verified", "3h"]
];
const MEMBERS = [
  ["AL", "Avery Lane", "Owner"],
  ["JR", "Jordan Reyes", "Admin"],
  ["SK", "Sam Kato", "Developer"],
  ["RM", "Riley Moss", "Viewer"]
];
const DEFAULT_TABS = [
  {
    id: "overview",
    title: "Overview",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Requests", value: "24.1k" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Errors", value: "0.12%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "p95", value: "182 ms" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true", className: "flex h-24 items-end gap-1.5", children: BARS.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: cn(
            "flex-1 rounded-sm",
            i === BARS.length - 1 ? "bg-foreground" : "bg-muted-strong"
          ),
          style: { height: `${h}%` }
        },
        `bar-${i.toString()}`
      )) })
    ] })
  },
  {
    id: "activity",
    title: "Activity",
    content: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "flex flex-col divide-y divide-border", children: ACTIVITY.map(([text, time]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "li",
      {
        className: "flex items-center justify-between gap-3 py-2.5 first:pt-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-sm text-foreground", children: text }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-xs text-muted-foreground tabular-nums", children: time })
        ]
      },
      text
    )) })
  },
  {
    id: "members",
    title: "Members",
    content: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-3", children: MEMBERS.map(([initials, name, role]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex size-8 shrink-0 items-center justify-center rounded-full bg-muted font-medium text-[11px] text-muted-foreground", children: initials }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 truncate text-sm text-foreground", children: name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: role })
    ] }, name)) })
  },
  {
    id: "billing",
    title: "Billing",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm text-foreground", children: "Pro plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground tabular-nums", children: "$20 / month" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1.5 flex justify-between text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Bandwidth" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums", children: "64 / 100 GB" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-[64%] rounded-full bg-foreground" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-auto text-xs text-muted-foreground", children: "Next invoice on Nov 1 · Card ending 4242" })
    ] })
  }
];
function SmoothTab({
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
  const indexOf = (id) => Math.max(
    items.findIndex((item) => item.id === id),
    0
  );
  const [uncontrolled, setUncontrolled] = reactExports.useState(() => indexOf(defaultTabId));
  const selected = value === void 0 ? clamp(uncontrolled, 0, Math.max(count - 1, 0)) : indexOf(value);
  const progress = useMotionValue(selected);
  const baseId = reactExports.useId();
  const tablistRef = reactExports.useRef(null);
  const overlayRef = reactExports.useRef(null);
  const tabRefs = reactExports.useRef([]);
  const rects = reactExports.useRef([]);
  const size = reactExports.useRef({ width: 0, height: 0 });
  const anim = reactExports.useRef(null);
  const target = reactExports.useRef(selected);
  const reducedMotion = reactExports.useRef(false);
  const latest = reactExports.useRef({ count, items, selected, onChange });
  latest.current = { count, items, selected, onChange };
  const paint = reactExports.useCallback(
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
  reactExports.useLayoutEffect(() => {
    const tablist = tablistRef.current;
    if (!tablist) {
      return;
    }
    let alive = true;
    const measure = () => {
      if (!alive) {
        return;
      }
      const box = tablist.getBoundingClientRect();
      const ratio = box.width / (tablist.offsetWidth || 1);
      const scale = Math.abs(ratio - 1) < 0.01 ? 1 : ratio;
      size.current = { width: box.width / scale, height: box.height / scale };
      rects.current = tabRefs.current.slice(0, count).map((tab) => {
        const r = tab == null ? void 0 : tab.getBoundingClientRect();
        return r ? {
          left: (r.left - box.left) / scale,
          width: r.width / scale,
          top: (r.top - box.top) / scale,
          height: r.height / scale
        } : { left: 0, width: 0, top: 0, height: 0 };
      });
      paint(progress.get());
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(tablist);
    document.fonts.ready.then(measure).catch(() => void 0);
    return () => {
      alive = false;
      observer.disconnect();
    };
  }, [count, paint, progress]);
  reactExports.useEffect(() => {
    const unsubscribe = progress.on("change", paint);
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      reducedMotion.current = query.matches;
    };
    sync();
    query.addEventListener("change", sync);
    return () => {
      var _a;
      unsubscribe();
      query.removeEventListener("change", sync);
      (_a = anim.current) == null ? void 0 : _a.stop();
    };
  }, [paint, progress]);
  const settle = reactExports.useCallback(
    (index, opts = {}) => {
      var _a;
      target.current = index;
      (_a = anim.current) == null ? void 0 : _a.stop();
      anim.current = null;
      if (opts.instant) {
        progress.jump(index);
        return;
      }
      anim.current = reducedMotion.current ? animate(progress, index, { duration: 0.15, ease: EASE_OUT }) : animate(progress, index, { ...SPRING, velocity: opts.velocity ?? 0 });
    },
    [progress]
  );
  const select = reactExports.useCallback(
    (index, opts) => {
      var _a, _b;
      const { count: n, items: list, selected: current } = latest.current;
      const next = clamp(index, 0, n - 1);
      settle(next, opts);
      if (next !== current) {
        setUncontrolled(next);
        (_b = (_a = latest.current).onChange) == null ? void 0 : _b.call(_a, list[next].id);
      }
    },
    [settle]
  );
  reactExports.useEffect(() => {
    if (selected !== target.current) {
      settle(selected);
    }
  }, [selected, settle]);
  const handleKeyDown = (e, i) => {
    var _a;
    const keys = {
      ArrowRight: (i + 1) % count,
      ArrowLeft: (i - 1 + count) % count,
      Home: 0,
      End: count - 1
    };
    const next = keys[e.key];
    if (next === void 0) {
      return;
    }
    e.preventDefault();
    (_a = tabRefs.current[next]) == null ? void 0 : _a.focus();
    select(next, { instant: e.repeat });
  };
  const tabId = (i) => `${baseId}-tab-${i}`;
  const panelId = (i) => `${baseId}-panel-${i}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex w-full max-w-md flex-col gap-3", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "aria-label": label,
        className: "relative inline-flex max-w-full rounded-lg bg-muted p-1",
        ref: tablistRef,
        role: "tablist",
        children: [
          items.map((item, i) => {
            const Icon = item.icon;
            const isSelected = i === selected;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                "aria-controls": panelId(i),
                "aria-selected": isSelected,
                className: cn(
                  "relative flex shrink-0 items-center gap-1.5 rounded-md px-3.5 py-1.5 font-medium text-sm",
                  "text-muted-foreground transition-colors duration-150 ease-out hover:text-foreground",
                  "outline-none focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
                ),
                id: tabId(i),
                onClick: () => select(i),
                onKeyDown: (e) => handleKeyDown(e, i),
                ref: (el) => {
                  tabRefs.current[i] = el;
                },
                role: "tab",
                tabIndex: isSelected ? 0 : -1,
                type: "button",
                children: [
                  Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { "aria-hidden": "true", className: "size-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap", children: item.title })
                ]
              },
              item.id
            );
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: cn(
                "pointer-events-none absolute inset-0 flex p-1",
                activeColor
              ),
              ref: overlayRef,
              style: { clipPath: "inset(0 100% 0 0)" },
              children: items.map((item) => {
                const Icon = item.icon;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: cn(
                      "flex shrink-0 items-center gap-1.5 px-3.5 py-1.5 font-medium text-sm",
                      activeTextColor
                    ),
                    children: [
                      Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap", children: item.title })
                    ]
                  },
                  item.id
                );
              })
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-lg border bg-card", children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-labelledby": tabId(i),
        className: "min-h-[220px] p-6 sm:p-8 outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset",
        hidden: i !== selected,
        id: panelId(i),
        role: "tabpanel",
        tabIndex: 0,
        children: item.content
      },
      item.id
    )) })
  ] });
}
function Repo({ owner, name, onError }) {
  const ssr = useServerData();
  const [data, setData] = reactExports.useState(ssr.repo ?? null);
  const [tab, setTab] = reactExports.useState("ask");
  const [draft, setDraft] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!ssr.repo) api.repo(owner, name).then(setData).catch(onError);
  }, [owner, name, onError]);
  if (!data) return /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoading, {});
  const { repo } = data;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-1 text-sm text-muted-foreground no-underline hover:text-foreground hover:no-underline", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4", "aria-hidden": "true" }),
      " Dashboard"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-wrap items-start gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-11 place-items-center rounded-lg border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderGit2, { className: "size-5 text-primary", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "truncate", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            repo.owner,
            "/"
          ] }),
          repo.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { className: "size-3", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: repo.defaultBranch })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag", children: [
            repo.access,
            " access"
          ] }),
          repo.private && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "size-3", "aria-hidden": "true" }),
            "private"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SmoothTab,
      {
        label: "Repository tools",
        className: "max-w-none",
        value: tab,
        onChange: setTab,
        items: [
          { id: "ask", title: "Ask", icon: MessageSquareCode, content: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ask,
            {
              owner,
              name,
              onError,
              onRequestChange: (text) => {
                setDraft({ id: Date.now(), text });
                setTab("build");
              }
            }
          ) },
          { id: "build", title: "Request a change", icon: WandSparkles, content: /* @__PURE__ */ jsxRuntimeExports.jsx(Build, { initial: draft == null ? void 0 : draft.text, owner, name, onError }, draft == null ? void 0 : draft.id) },
          { id: "readme", title: "README", icon: FileText, content: /* @__PURE__ */ jsxRuntimeExports.jsx(Readme, { owner, name, data, onError }) }
        ]
      }
    )
  ] });
}
function IndexBar({ owner, name, onError }) {
  const [st, setSt] = reactExports.useState(null);
  const load = reactExports.useCallback(() => api.indexStatus(owner, name).then(setSt).catch(onError), [owner, name, onError]);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  reactExports.useEffect(() => {
    if ((st == null ? void 0 : st.state) !== "indexing") return void 0;
    const t = setTimeout(load, 2500);
    return () => clearTimeout(t);
  }, [st, load]);
  const reindex = () => api.reindex(owner, name).then(setSt).catch(onError);
  if (!st) return null;
  const dot = { ready: st.stale ? "bg-warn" : "bg-ok", indexing: "bg-primary motion-safe:animate-pulse", missing: "bg-muted-foreground" }[st.state];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("size-2 rounded-full", dot), "aria-hidden": "true" }),
    st.state === "missing" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Not indexed yet." }),
    st.state === "indexing" && /* @__PURE__ */ jsxRuntimeExports.jsx(ShimmerText, { text: "Reading the repository…", className: "text-xs font-medium" }),
    st.state === "ready" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      "Indexed ",
      st.files,
      " files at ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: st.commit.slice(0, 7) }),
      st.stale ? " · new commits since, refreshed automatically when you ask" : " · up to date"
    ] }),
    st.error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bad", children: st.error }),
    st.state !== "indexing" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: reindex, className: "inline-flex items-center gap-1 text-link hover:underline", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "size-3", "aria-hidden": "true" }),
      st.state === "missing" ? "Index now" : "Refresh"
    ] })
  ] });
}
const STATUS_NOTE = {
  outside_context: "Outside the available context",
  needs_clarification: "Needs clarification",
  low_confidence: "Not confident enough to answer",
  indexing: "Indexing"
};
const PLACEHOLDERS = [
  "Where is the checkout total calculated?",
  "How does sign-in work?",
  "Which files handle payments?",
  "What happens when a user signs up?",
  "Where are environment variables read?"
];
function Sources({ title, items }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 text-sm", children: items.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.url, target: "_blank", rel: "noreferrer noopener", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: c.path }),
      " lines ",
      c.startLine,
      " to ",
      c.endLine
    ] }) }, `${c.path}:${c.startLine}`)) })
  ] });
}
function requestFromAnswer(a) {
  const files = [...new Set((a.citations || []).map((c) => c.path))].slice(0, 10);
  const text = files.length ? `${a.question}

Relevant files: ${files.join(", ")}` : a.question;
  return text.slice(0, 2e3);
}
function Ask({ owner, name, onError, onRequestChange }) {
  const [answers, setAnswers] = reactExports.useState([]);
  const [busy, setBusy] = reactExports.useState("");
  const ask = async (question) => {
    setBusy(question);
    try {
      const res = await api.ask(owner, name, question);
      setAnswers((a) => [{ id: Date.now(), question, ...res }, ...a]);
    } catch (err) {
      onError(err);
    } finally {
      setBusy("");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Ask about this repository" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Answers cite the files and lines they come from." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IndexBar, { owner, name, onError }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PlaceholdersAndVanishInput,
      {
        placeholders: PLACEHOLDERS,
        ariaLabel: "Question",
        maxLength: 2e3,
        disabled: Boolean(busy),
        onSubmit: (_, q) => ask(q)
      }
    ),
    busy && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: busy }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShimmerText, { text: "Reading the code…", className: "mt-1 text-sm font-medium" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: answers.map((a) => {
      var _a, _b;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          className: "border-t pt-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: a.question }),
            STATUS_NOTE[a.status] && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("tag mt-2", a.status === "outside_context" ? "bg-bad/10 text-bad" : ""), children: STATUS_NOTE[a.status] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { text: a.answer }) }),
            ((_a = a.citations) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Sources, { title: "Sources", items: a.citations }),
            a.status !== "answered" && ((_b = a.sources) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Sources, { title: "Closest matches", items: a.sources.slice(0, 5) }),
            a.disclosure && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs text-muted-foreground", children: [
              a.disclosure,
              a.commit && ` · commit ${a.commit.slice(0, 7)}`
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "btn mt-4 h-9 px-3.5", onClick: () => onRequestChange(requestFromAnswer(a)), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GitPullRequest, { className: "size-4", "aria-hidden": "true" }),
              "Turn into a change request"
            ] })
          ]
        },
        a.id
      );
    }) })
  ] });
}
const HOW = ["You describe it", "Agent plans, you approve", "Built and checked in a sandbox", "You approve the diff", "Engineer merges the PR"];
function Build({ owner, name, onError, initial = "" }) {
  const [request, setRequest] = reactExports.useState(initial);
  const [criteria, setCriteria] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      const { id } = await api.createTask(owner, name, request, criteria);
      navigate(`/tasks/${encodeURIComponent(id)}`);
    } catch (err) {
      onError(err);
    } finally {
      setBusy(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Request a change" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
        "Describe a feature, a bug or a UI change and how it should behave. The agent asks if anything is unclear.",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "An engineer must review and merge the pull request." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "flex flex-wrap gap-2 text-xs", children: HOW.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "tag", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-link", children: i + 1 }),
      s
    ] }, s)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "req", className: "mb-1.5 block text-sm font-medium", children: "What should change?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            id: "req",
            className: "field min-h-28",
            value: request,
            maxLength: 2e3,
            onChange: (e) => setRequest(e.target.value),
            placeholder: "On the pricing page, the yearly plan should show the monthly equivalent price under it."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-right text-xs text-muted-foreground tabular-nums", children: [
          request.length,
          "/2000"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "crit", className: "mb-1.5 block text-sm font-medium", children: [
          "How will we know it’s done? ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-normal text-muted-foreground", children: "(optional, one per line)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            id: "crit",
            className: "field min-h-24",
            value: criteria,
            maxLength: 3e3,
            onChange: (e) => setCriteria(e.target.value),
            placeholder: 'Yearly plan shows "$8/month billed yearly"\nMonthly plan is unchanged'
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "btn btn-primary", disabled: busy || request.trim().length < 10, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "size-4", "aria-hidden": "true" }),
        busy ? "Starting…" : "Start"
      ] }),
      request.trim().length > 0 && request.trim().length < 10 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 text-xs text-muted-foreground", children: "A few more words, please." })
    ] })
  ] });
}
function ReadmeWindow({ title, text, onClose }) {
  const close = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a;
    const opener = document.activeElement;
    (_a = close.current) == null ? void 0 : _a.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      var _a2;
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      (_a2 = opener == null ? void 0 : opener.focus) == null ? void 0 : _a2.call(opener);
    };
  }, [onClose]);
  return reactDomExports.createPortal(
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-dark/50 p-3 sm:p-6", onClick: (e) => e.target === e.currentTarget && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        "aria-label": title,
        className: "mx-auto flex h-full max-w-[1600px] flex-col overflow-hidden rounded-xl border bg-card shadow-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b bg-muted px-4 py-2.5 text-sm font-medium text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-4 text-primary", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                ref: close,
                type: "button",
                onClick: onClose,
                "aria-label": "Close README window",
                className: "rounded-md p-1 text-muted-foreground hover:bg-muted-strong hover:text-foreground",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "pre",
            {
              "data-lenis-prevent": true,
              tabIndex: 0,
              className: "m-0 flex-1 overflow-auto whitespace-pre-wrap break-words bg-card p-6 font-mono text-[13px] leading-relaxed text-body sm:px-10",
              children: text
            }
          )
        ]
      }
    ) }),
    document.body
  );
}
function Readme({ owner, name, data, onError }) {
  const [content, setContent] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState("");
  const [full, setFull] = reactExports.useState(false);
  const closeWindow = reactExports.useCallback(() => setFull(false), []);
  const { repo, readme } = data;
  const long = readme.exists && (readme.text.split("\n").length > 16 || readme.text.length > 1200);
  const run = (label, fn) => async () => {
    setBusy(label);
    try {
      await fn();
    } catch (e) {
      onError(e);
    } finally {
      setBusy("");
    }
  };
  const draft = run("draft", async () => setContent((await api.draft(owner, name)).markdown));
  const propose = (action) => run("propose", async () => {
    const { id } = await api.propose(owner, name, action, content);
    navigate(`/changes/${encodeURIComponent(id)}`);
  });
  if (repo.access === "read") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "README" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Adding or deleting the README directly needs write access. Use “Request a change” instead." })
    ] });
  }
  return readme.exists ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "README.md exists" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "pre",
      {
        className: "code bg-card text-body h-96 min-h-40 resize-y overflow-auto whitespace-pre-wrap break-words",
        tabIndex: 0,
        "aria-label": "README.md contents (drag the corner to resize)",
        children: readme.text
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
      long && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "btn", onClick: () => setFull(true), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "size-4", "aria-hidden": "true" }),
        "Open in a window"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "btn btn-danger", disabled: Boolean(busy), onClick: propose("delete_readme"), children: "Preview deleting README.md" })
    ] }),
    full && /* @__PURE__ */ jsxRuntimeExports.jsx(ReadmeWindow, { title: `${owner}/${name} · README.md`, text: readme.text, onClose: closeWindow })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Add a README.md" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Write it yourself, or let the AI draft one from the repository’s files and edit it." })
    ] }),
    busy === "draft" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "field grid min-h-72 place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShimmerText, { text: "Drafting from the repository…", className: "text-sm font-medium" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: "field min-h-72 font-mono text-[13px]",
        value: content,
        maxLength: 5e4,
        placeholder: `# ${repo.name}`,
        onChange: (e) => setContent(e.target.value),
        "aria-label": "README content"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "btn btn-primary", disabled: Boolean(busy) || !content.trim(), onClick: propose("create_readme"), children: busy === "propose" ? "Preparing…" : "Preview change" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "btn", disabled: Boolean(busy), onClick: draft, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "size-4", "aria-hidden": "true" }),
        "Draft with AI"
      ] })
    ] })
  ] });
}
export {
  Repo as default
};
