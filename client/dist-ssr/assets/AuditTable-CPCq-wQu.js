import { j as jsxRuntimeExports, d as utc } from "../entry-server.js";
function AuditTable({ events, showWho = false }) {
  if (!events) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Loading…" });
  if (!events.length) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Nothing yet." });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-mx-5 mt-4 overflow-x-auto px-5 sm:-mx-6 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "table min-w-[560px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "When (UTC)" }),
      showWho && /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Who" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Event" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Details" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: events.map((e, i) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "whitespace-nowrap font-mono text-xs text-muted-foreground", children: utc(e.at) }),
        showWho && /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: e.login || "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag font-mono", children: e.event }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-xs text-muted-foreground", children: Object.entries(e.detail).filter(([, v]) => v != null).map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground/70", children: [
            k,
            ":"
          ] }),
          " ",
          String(v)
        ] }, k)) })
      ] }, i)
    )) })
  ] }) });
}
export {
  AuditTable as A
};
