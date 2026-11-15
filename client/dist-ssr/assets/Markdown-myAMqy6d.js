import { j as jsxRuntimeExports } from "../entry-server.js";
function inline(text) {
  return text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) return /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: part.slice(1, -1) }, i);
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) return /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: part.slice(2, -2) }, i);
    return part;
  });
}
function Markdown({ text }) {
  const blocks = [];
  let list = null;
  for (const line of (text || "").split("\n")) {
    const item = line.match(/^\s*(?:[-*•]|\d+\.)\s+(.*)$/);
    if (item) {
      if (!list) blocks.push(list = { type: "list", items: [] });
      list.items.push(item[1]);
      continue;
    }
    list = null;
    if (line.trim()) blocks.push({ type: "p", text: line.replace(/^#+\s*/, "") });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md", children: blocks.map((b, i) => b.type === "list" ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: b.items.map((it, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: inline(it) }, j)) }, i) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: inline(b.text) }, i)) });
}
export {
  Markdown as M
};
