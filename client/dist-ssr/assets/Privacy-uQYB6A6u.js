import { j as jsxRuntimeExports } from "../entry-server.js";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
const SECTIONS = [
  ["What we collect", [
    "Your GitHub profile as GitHub shares it at sign-in: username, name, verified email, organizations, and the repositories the SARVAS GitHub App can access.",
    "The questions you ask, the changes you request, and your approvals and refusals.",
    "Anonymous page-view statistics through Vercel Analytics."
  ]],
  ["How we keep it", [
    "Sign-in uses GitHub OAuth. SARVAS never sees or asks for your GitHub password.",
    "Your GitHub access token is stored encrypted (AES-256-GCM). Your browser holds only a random session ID in an HttpOnly cookie, and the server stores only a hash of it.",
    "Sessions expire after a few hours, by default 8.",
    "An audit log records every sign-in, question, proposal, refusal and approval, so actions can be checked later."
  ]],
  ["Who sees your code", [
    "To answer questions and make changes, SARVAS sends excerpts of repository code to an AI provider, but only if the operator of this site allows it. Your dashboard shows which model is used and whether code leaves the servers.",
    "Requested changes run in an isolated sandbox. On the hosted site, sandboxes run on Modal.",
    "Every change ends as a pull request on GitHub, visible to everyone who can see that repository."
  ]],
  ["What we never do", [
    "Sell your data or use it for advertising.",
    "Push to your default branch, or approve or merge pull requests.",
    "Access repositories where the SARVAS GitHub App is not installed."
  ]],
  ["Your choices", [
    "Disconnect at any time to end your session.",
    "Revoke SARVAS in your GitHub settings under Applications, or uninstall the GitHub App, to remove its access.",
    "To have your records deleted, contact this site's administrator."
  ]]
];
function Privacy() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mx-auto max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label text-muted-foreground", children: "Last updated November 8, 2026" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3", children: "Privacy policy" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg", children: "SARVAS works on your GitHub repositories, so it handles some of your data. This page explains what it collects and how it is used." }),
    SECTIONS.map(([title, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 list-disc space-y-2 pl-5", children: items.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t }, t)) })
    ] }, title))
  ] });
}
export {
  Privacy as default
};
