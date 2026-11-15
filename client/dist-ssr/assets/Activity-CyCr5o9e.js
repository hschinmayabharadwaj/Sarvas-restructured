import { u as useServerData, r as reactExports, a as api, j as jsxRuntimeExports } from "../entry-server.js";
import { A as AuditTable } from "./AuditTable-CPCq-wQu.js";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
function Activity({ onError }) {
  var _a;
  const ssr = useServerData();
  const [events, setEvents] = reactExports.useState(((_a = ssr.activity) == null ? void 0 : _a.events) ?? null);
  reactExports.useEffect(() => {
    if (!ssr.activity) api.activity().then((d) => setEvents(d.events)).catch(onError);
  }, [onError]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Your activity" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Audit log of everything done with your account through this page." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AuditTable, { events })
  ] });
}
export {
  Activity as default
};
