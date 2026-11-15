import { c as createLucideIcon, u as useServerData, r as reactExports, a as api, j as jsxRuntimeExports, b as cn } from "../entry-server.js";
import { A as AuditTable } from "./AuditTable-CPCq-wQu.js";
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
  name: "pause",
  size: 24,
  node: [
    ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
    ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
  ]
};
__iconData$1.node;
const Pause = createLucideIcon(__iconData$1);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconData = {
  name: "play",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1"
      }
    ]
  ]
};
__iconData.node;
const Play = createLucideIcon(__iconData);
function Admin({ onError }) {
  var _a;
  const ssr = useServerData();
  const [events, setEvents] = reactExports.useState(((_a = ssr.audit) == null ? void 0 : _a.events) ?? null);
  const [me, setMe] = reactExports.useState(ssr.me ?? null);
  reactExports.useEffect(() => {
    if (!ssr.audit) api.adminAudit().then((d) => setEvents(d.events)).catch(onError);
    if (!ssr.me) api.me().then(setMe).catch(onError);
  }, [onError]);
  const toggle = async () => {
    try {
      const { killSwitch } = await api.killSwitch(!me.killSwitch);
      setMe((m) => ({ ...m, killSwitch }));
      setEvents((await api.adminAudit()).events);
    } catch (e) {
      onError(e);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Administration" }),
    me && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: cn("card flex flex-wrap items-center gap-4", me.killSwitch && "border-bad/40 bg-bad/5"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex size-3", children: [
        !me.killSwitch && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-ok opacity-60 motion-safe:animate-ping" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("relative size-3 rounded-full", me.killSwitch ? "bg-bad" : "bg-ok") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: me.killSwitch ? "The agent is paused" : "The agent is running" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: me.killSwitch ? "No new tasks, approvals or pull requests until you resume it." : "The kill switch stops all new work immediately." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: me.killSwitch ? "btn btn-primary" : "btn btn-danger", onClick: toggle, children: me.killSwitch ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-4", "aria-hidden": "true" }),
        "Resume the agent"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "size-4", "aria-hidden": "true" }),
        "Pause the agent"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Audit log (everyone)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Requests, generated changes, reviews and approvals. No secrets are stored here." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AuditTable, { events, showWho: true })
    ] })
  ] });
}
export {
  Admin as default
};
