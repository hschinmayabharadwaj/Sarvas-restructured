import { c as createLucideIcon, u as useServerData, r as reactExports, a as api, j as jsxRuntimeExports, P as PageLoading, p as Link, D as firstLine, z as ShimmerText, b as cn, w as navigate, g as gsapWithCSS, e as reducedMotion, v as Check } from "../entry-server.js";
import { s as safeGitHubUrl, D as Diff } from "./Diff-DHSE0W2a.js";
import { M as Markdown } from "./Markdown-myAMqy6d.js";
import { S as StatusPill } from "./StatusPill-7YEMwJTS.js";
import { A as ArrowLeft } from "./arrow-left-Ce5aMtRm.js";
import { G as GitPullRequest } from "./git-pull-request-DiFH3hru.js";
import { E as ExternalLink } from "./external-link-kIMHU7-E.js";
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
const __iconData$1 = {
  name: "circle-check",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m16 9-5.5 5.5L8 12", key: "xofnsj" }]
  ],
  aliases: ["check-circle-2"]
};
__iconData$1.node;
const CircleCheck = createLucideIcon(__iconData$1);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconData = {
  name: "circle-x",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }]
  ],
  aliases: ["x-circle"]
};
__iconData.node;
const CircleX = createLucideIcon(__iconData);
const STEPS = [
  ["plan", "Plan", ["pending", "planning"]],
  ["approve-plan", "Scope approval", ["awaiting_plan_approval"]],
  ["build", "Change + checks", ["plan_approved", "implementing", "verifying"]],
  ["approve-diff", "Review diff", ["awaiting_impl_approval"]],
  ["pr", "Pull request", ["impl_approved", "creating_pr"]],
  ["review", "Engineer review", ["completed"]]
];
const ENDED = {
  needs_info: "The agent needs more information",
  declined: "The agent declined this request",
  plan_rejected: "Plan rejected",
  impl_rejected: "Changes rejected",
  failed: "Failed",
  cancelled: "Cancelled",
  lost: "Lost (the agent restarted)"
};
const WORKING = /* @__PURE__ */ new Set(["pending", "planning", "plan_approved", "implementing", "verifying", "impl_approved", "creating_pr"]);
const RISK = { low: "bg-ok/12 text-ok", medium: "bg-warn/12 text-warn", high: "bg-bad/10 text-bad" };
function Stepper({ index, done }) {
  const bar = reactExports.useRef(null);
  const pct = done ? 100 : index / (STEPS.length - 1) * 100;
  reactExports.useEffect(() => {
    const tween = gsapWithCSS.to(bar.current, { width: `${pct}%`, duration: reducedMotion() ? 0 : 0.9, ease: "expo.out" });
    return () => tween.kill();
  }, [pct]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "relative mt-6 grid grid-cols-6 gap-1", "aria-label": "Progress", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "absolute top-3 right-[8.33%] left-[8.33%] h-0.5 bg-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref: bar, className: "block h-full w-0 bg-primary" }) }),
    STEPS.map(([key, label], i) => {
      const state = i < index || done ? "done" : i === index ? "now" : "next";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative flex flex-col items-center text-center", "aria-current": state === "now" ? "step" : void 0, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(
          "grid size-6 place-items-center rounded-full border-2 bg-card text-[11px] font-semibold transition-colors",
          state === "done" && "border-primary bg-primary text-primary-foreground",
          state === "now" && "border-primary text-primary ring-4 ring-primary/20",
          state === "next" && "text-muted-foreground"
        ), children: state === "done" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5", "aria-hidden": "true" }) : i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("mt-2 hidden text-xs sm:block", state === "next" ? "text-muted-foreground" : "text-foreground"), children: label })
      ] }, key);
    })
  ] });
}
function Task({ id, onError }) {
  var _a, _b, _c;
  const ssr = useServerData();
  const [t, setT] = reactExports.useState(ssr.task ?? null);
  const [busy, setBusy] = reactExports.useState(false);
  const [answers, setAnswers] = reactExports.useState("");
  const load = reactExports.useCallback(() => api.task(id).then(setT).catch(onError), [id, onError]);
  reactExports.useEffect(() => {
    if (!ssr.task) load();
  }, [load]);
  reactExports.useEffect(() => {
    if (!t || !WORKING.has(t.status)) return void 0;
    const timer = setTimeout(load, 3e3);
    return () => clearTimeout(timer);
  }, [t, load]);
  const act = (fn) => async () => {
    setBusy(true);
    try {
      setT(await fn());
    } catch (e) {
      onError(e);
      load();
    } finally {
      setBusy(false);
    }
  };
  const clarify = async () => {
    setBusy(true);
    try {
      const { id: next } = await api.clarify(id, answers);
      navigate(`/tasks/${encodeURIComponent(next)}`);
    } catch (e) {
      onError(e);
    } finally {
      setBusy(false);
    }
  };
  if (!t) return /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoading, {});
  const plan = t.plan || {};
  const stepIndex = STEPS.findIndex(([, , statuses]) => statuses.includes(t.status));
  const prUrl = safeGitHubUrl(t.prUrl);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/tasks", className: "inline-flex items-center gap-1 text-sm text-muted-foreground no-underline hover:text-foreground hover:no-underline", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4", "aria-hidden": "true" }),
      " All requests"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/repos/${encodeURIComponent(t.owner)}/${encodeURIComponent(t.name)}`, children: t.fullName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "· requested by @",
          t.requester
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: t.status })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3", children: firstLine(t.request) }),
      stepIndex >= 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { index: stepIndex, done: t.status === "completed" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 flex items-center gap-2 rounded-md border border-bad/30 bg-bad/10 px-3 py-2 text-sm text-bad", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "size-4", "aria-hidden": "true" }),
        ENDED[t.status] || t.status
      ] }),
      t.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: t.message }),
      WORKING.has(t.status) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShimmerText, { text: "Working… this page updates by itself.", className: "text-sm font-medium" }) })
    ] }),
    plan.summary && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "flex-1", children: "Plan" }),
        plan.risk && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("tag", RISK[plan.risk]), children: [
          plan.risk,
          " risk"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { text: plan.summary }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-4 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-[max-content_1fr]", children: [
        plan.risk_reason && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Why this risk" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: plan.risk_reason })
        ] }),
        ((_a = plan.files) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Files" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "flex flex-wrap gap-1.5", children: plan.files.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "rounded bg-muted px-1.5 py-0.5", children: f }, f)) })
        ] }),
        plan.how_to_verify && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "How to verify" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: plan.how_to_verify })
        ] })
      ] }),
      ((_b = plan.acceptance_criteria) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Acceptance criteria" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 text-sm", children: plan.acceptance_criteria.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 size-4 shrink-0 text-ok", "aria-hidden": "true" }),
          c
        ] }, c)) })
      ] }),
      ((_c = plan.questions) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Questions from the agent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc space-y-1 pl-5 text-sm", children: plan.questions.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: q }, q)) })
      ] }),
      t.status === "awaiting_plan_approval" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-3 border-t pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-primary",
            disabled: busy || !t.can.decidePlan,
            onClick: act(() => api.decidePlan(id, true)),
            children: "Approve plan"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "btn",
            disabled: busy || !t.can.rejectPlan,
            onClick: act(() => api.decidePlan(id, false)),
            children: "Reject"
          }
        ),
        t.can.why && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: t.can.why })
      ] }),
      t.can.clarify && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-t pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "answers", className: "mb-1.5 block text-sm font-medium", children: "Your answers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            id: "answers",
            className: "field min-h-24",
            value: answers,
            maxLength: 1500,
            onChange: (e) => setAnswers(e.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "btn btn-primary mt-3", disabled: busy || !answers.trim(), onClick: clarify, children: "Send answers and try again" })
      ] })
    ] }),
    t.diff && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Proposed change" }),
      t.summary && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { text: t.summary }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground", children: [
        (t.files || []).map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "rounded bg-muted px-1.5 py-0.5", children: f }, f)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "· diff sha256 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: (t.diffSha256 || "").slice(0, 12) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Diff, { text: t.diff }) }),
      t.diffTruncated && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "Diff truncated for display; the pull request has all of it." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2", children: [
        "Checks ",
        t.checksOk ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag bg-ok/12 text-ok", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-3", "aria-hidden": "true" }),
          "passed"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag bg-bad/10 text-bad", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "size-3", "aria-hidden": "true" }),
          "failed"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "code max-h-80", children: t.checks }),
      t.status === "awaiting_impl_approval" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-3 border-t pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "btn btn-primary",
            disabled: busy || !t.can.decideChanges,
            onClick: act(() => api.decideChanges(id, true)),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GitPullRequest, { className: "size-4", "aria-hidden": "true" }),
              busy ? "Opening pull request…" : "Approve diff & open pull request"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "btn",
            disabled: busy || !t.can.decideChanges,
            onClick: act(() => api.decideChanges(id, false)),
            children: "Reject"
          }
        ),
        t.can.why && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: t.can.why })
      ] })
    ] }),
    t.status === "completed" && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "card border-ok/30 bg-ok/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 font-medium text-ok", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GitPullRequest, { className: "size-5", "aria-hidden": "true" }),
        " Pull request opened"
      ] }),
      prUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: prUrl, target: "_blank", rel: "noreferrer noopener", className: "mt-2 inline-flex items-center gap-1 text-sm", children: [
        prUrl,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3.5", "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Nothing has been merged. An engineer reviews it on GitHub; the repository's branch protection decides who can approve and merge. The agent can't approve or merge its own pull requests." })
    ] })
  ] });
}
export {
  Task as default
};
