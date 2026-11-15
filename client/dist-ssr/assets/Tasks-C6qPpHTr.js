import { c as createLucideIcon, u as useServerData, r as reactExports, a as api, j as jsxRuntimeExports, P as PageLoading, t as taskStatus, b as cn, p as Link, D as firstLine, C as ChevronRight } from "../entry-server.js";
import { S as Stagger } from "./Stagger-BIKNmo3W.js";
import { S as StatusPill } from "./StatusPill-7YEMwJTS.js";
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
const __iconData = {
  name: "inbox",
  size: 24,
  node: [
    ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
    [
      "path",
      {
        d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
        key: "oot6mr"
      }
    ]
  ]
};
__iconData.node;
const Inbox = createLucideIcon(__iconData);
const FILTERS = [
  ["all", "All", () => true],
  ["attention", "Waiting on a person", (tone) => tone === "attention"],
  ["working", "In progress", (tone) => tone === "working"],
  ["done", "Pull request opened", (tone) => tone === "done"],
  ["stopped", "Stopped", (tone) => tone === "stopped" || tone === "failed"]
];
function Tasks({ onError }) {
  var _a;
  const ssr = useServerData();
  const [tasks, setTasks] = reactExports.useState(((_a = ssr.tasks) == null ? void 0 : _a.tasks) ?? null);
  const [filter, setFilter] = reactExports.useState("all");
  reactExports.useEffect(() => {
    if (!ssr.tasks) api.tasks().then((d) => setTasks(d.tasks)).catch(onError);
  }, [onError]);
  if (!tasks) return /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoading, {});
  const keep = FILTERS.find(([id]) => id === filter)[2];
  const shown = tasks.filter((t) => keep(taskStatus(t.status).tone));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Change requests" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Yours, plus (for engineers) every request on repositories you can push to." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", role: "group", "aria-label": "Filter by status", children: FILTERS.map(([id, label, test]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "aria-pressed": filter === id,
        onClick: () => setFilter(id),
        className: cn(
          "inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium",
          filter === id ? "bg-muted-strong text-foreground" : "text-muted-foreground"
        ),
        children: [
          label,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums opacity-70", children: tasks.filter((t) => test(taskStatus(t.status).tone)).length })
        ]
      },
      id
    )) }),
    shown.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card flex flex-col items-center py-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "size-8 text-muted-foreground", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-medium", children: "Nothing here" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: tasks.length ? "No request matches this filter." : "Open a repository to request a change." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { watch: `${filter}:${tasks.length}`, className: "card divide-y p-0 sm:p-0", children: shown.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: `/tasks/${encodeURIComponent(t.id)}`,
        className: "group flex items-center gap-4 px-4 py-3.5 text-foreground no-underline transition-colors first:rounded-t-lg last:rounded-b-lg hover:bg-muted hover:no-underline sm:px-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate font-medium", children: firstLine(t.request, 100) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 truncate text-xs text-muted-foreground", children: [
              t.fullName,
              " · @",
              t.requester
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: t.status, className: "hidden sm:inline-flex" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5", "aria-hidden": "true" })
        ]
      },
      t.id
    )) })
  ] });
}
export {
  Tasks as default
};
