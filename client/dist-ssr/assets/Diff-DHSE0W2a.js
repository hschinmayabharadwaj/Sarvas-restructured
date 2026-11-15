import { j as jsxRuntimeExports } from "../entry-server.js";
function lineClass(line) {
  if (line.startsWith("@@") || line.startsWith("---") || line.startsWith("+++") || line.startsWith("diff ")) return "hunk";
  if (line.startsWith("+")) return "add";
  if (line.startsWith("-")) return "del";
  return "";
}
function Diff({ text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "diff", children: (text || "").replace(/\n$/, "").split("\n").map((line, i) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: lineClass(line), children: [
      line,
      "\n"
    ] }, i)
  )) });
}
const safeGitHubUrl = (url) => typeof url === "string" && url.startsWith("https://github.com/") ? url : null;
export {
  Diff as D,
  safeGitHubUrl as s
};
