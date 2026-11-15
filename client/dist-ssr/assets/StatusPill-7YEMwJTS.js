import { t as taskStatus, j as jsxRuntimeExports, b as cn, T as TONE_CLASS } from "../entry-server.js";
function StatusPill({ status, className }) {
  const { label, tone } = taskStatus(status);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("tag whitespace-nowrap", TONE_CLASS[tone], className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("size-1.5 rounded-full bg-current", tone === "working" && "motion-safe:animate-pulse") }),
    label
  ] });
}
export {
  StatusPill as S
};
