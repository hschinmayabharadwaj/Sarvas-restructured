import { j as jsxRuntimeExports, L as Logo, p as Link } from "../entry-server.js";
import { A as ArrowLeft } from "./arrow-left-Ce5aMtRm.js";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
function NotFound() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid place-items-center py-16 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { className: "size-16" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label mt-8 text-primary", children: "Error 404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3", children: "This page doesn't exist" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md", children: "The link may be broken, or the page may have moved. Check the address, or head back to the start." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "btn btn-primary mt-8 h-11 px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4", "aria-hidden": "true" }),
      " Back to SARVAS"
    ] })
  ] });
}
export {
  NotFound as default
};
