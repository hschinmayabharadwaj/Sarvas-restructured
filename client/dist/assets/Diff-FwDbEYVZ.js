import{j as r}from"./index-C4Incm8a.js";function i(t){return t.startsWith("@@")||t.startsWith("---")||t.startsWith("+++")||t.startsWith("diff ")?"hunk":t.startsWith("+")?"add":t.startsWith("-")?"del":""}function f({text:t}){return r.jsx("pre",{className:"diff",children:(t||"").replace(/\n$/,"").split(`
`).map((s,a)=>r.jsxs("span",{className:i(s),children:[s,`
`]},a))})}const e=t=>typeof t=="string"&&t.startsWith("https://github.com/")?t:null;export{f as D,e as s};
