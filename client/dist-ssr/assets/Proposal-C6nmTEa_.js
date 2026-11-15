import { u as useServerData, r as reactExports, a as api, j as jsxRuntimeExports, P as PageLoading, p as Link, w as navigate } from "../entry-server.js";
import { s as safeGitHubUrl, D as Diff } from "./Diff-DHSE0W2a.js";
import { A as ArrowLeft } from "./arrow-left-Ce5aMtRm.js";
import { G as GitPullRequest } from "./git-pull-request-DiFH3hru.js";
import { E as ExternalLink } from "./external-link-kIMHU7-E.js";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
function Proposal({ id, onError }) {
  const ssr = useServerData();
  const [p, setP] = reactExports.useState(ssr.proposal ?? null);
  const [busy, setBusy] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!ssr.proposal) api.proposal(id).then(setP).catch(onError);
  }, [id, onError]);
  const approve = async () => {
    setBusy(true);
    try {
      const res = await api.approve(id);
      setP((cur) => ({ ...cur, status: res.status, prUrl: res.prUrl }));
    } catch (e) {
      onError(e);
      api.proposal(id).then(setP).catch(() => {
      });
    } finally {
      setBusy(false);
    }
  };
  const discard = async () => {
    try {
      await api.discard(id);
      navigate("/");
    } catch (e) {
      onError(e);
    }
  };
  if (!p) return /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoading, {});
  const prUrl = safeGitHubUrl(p.prUrl);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: `/repos/${encodeURIComponent(p.owner)}/${encodeURIComponent(p.name)}`,
        className: "inline-flex items-center gap-1 text-sm text-muted-foreground no-underline hover:text-foreground hover:no-underline",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4", "aria-hidden": "true" }),
          " Back to ",
          p.fullName
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: p.fullName }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1", children: p.actionLabel }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
        "Approving opens a pull request with exactly this diff, based on ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: p.baseBranch }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Diff, { text: p.diff }) }),
      p.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3 border-t pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "btn btn-primary", disabled: busy, onClick: approve, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GitPullRequest, { className: "size-4", "aria-hidden": "true" }),
          busy ? "Opening pull request…" : "Approve & open pull request"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "btn", disabled: busy, onClick: discard, children: "Discard" })
      ] }),
      p.status === "done" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-md border border-ok/30 bg-ok/10 px-4 py-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 font-medium text-ok", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GitPullRequest, { className: "size-4", "aria-hidden": "true" }),
          "Pull request opened"
        ] }),
        prUrl ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: prUrl, target: "_blank", rel: "noreferrer noopener", className: "mt-1 inline-flex items-center gap-1", children: [
          prUrl,
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3.5", "aria-hidden": "true" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: p.prUrl })
      ] }),
      !["pending", "done"].includes(p.status) && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm text-bad", children: [
        "Status: ",
        p.status
      ] })
    ] })
  ] });
}
export {
  Proposal as default
};
