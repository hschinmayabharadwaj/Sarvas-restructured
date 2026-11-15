import { r as reactExports, e as reducedMotion, g as gsapWithCSS, j as jsxRuntimeExports } from "../entry-server.js";
function Stagger({ watch, onScroll = false, className, children }) {
  const ref = reactExports.useRef(null);
  reactExports.useLayoutEffect(() => {
    var _a;
    const els = [...((_a = ref.current) == null ? void 0 : _a.children) || []];
    if (!els.length || reducedMotion()) return void 0;
    const ctx = gsapWithCSS.context(() => {
      const to = { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" };
      if (onScroll) {
        els.forEach((el) => gsapWithCSS.fromTo(el, { autoAlpha: 0, y: 32 }, { ...to, scrollTrigger: { trigger: el, start: "top 88%" } }));
      } else {
        gsapWithCSS.fromTo(els, { autoAlpha: 0, y: 16 }, { ...to, stagger: 0.07 });
      }
    }, ref);
    return () => ctx.revert();
  }, [watch, onScroll]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className, children });
}
export {
  Stagger as S
};
