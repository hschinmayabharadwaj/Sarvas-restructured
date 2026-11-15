import { c as createLucideIcon, i as interpolate, f as useIsomorphicLayoutEffect$1, h as cancelFrame, k as frame, l as collectMotionValues, m as useConstant, r as reactExports, e as reducedMotion, g as gsapWithCSS, j as jsxRuntimeExports, n as animate, o as motion, b as cn, S as Search, p as Link, q as FolderGit2, C as ChevronRight, u as useServerData, a as api, P as PageLoading, s as CircleAlert, t as taskStatus, v as Check } from "../entry-server.js";
import { s as safeGitHubUrl } from "./Diff-DHSE0W2a.js";
import { S as Stagger } from "./Stagger-BIKNmo3W.js";
import { u as useMotionValue, L as Lock } from "./use-motion-value-qh4U7FxK.js";
import { E as ExternalLink } from "./external-link-kIMHU7-E.js";
import { G as GitPullRequest } from "./git-pull-request-DiFH3hru.js";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconData = {
  name: "loader",
  size: 24,
  node: [
    ["path", { d: "M12 2v4", key: "3427ic" }],
    ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
    ["path", { d: "M18 12h4", key: "wj9ykh" }],
    ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
    ["path", { d: "M12 18v4", key: "jadmvz" }],
    ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
    ["path", { d: "M2 12h4", key: "j09sii" }],
    ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }]
  ]
};
__iconData.node;
const Loader = createLucideIcon(__iconData);
function transform(...args) {
  const useImmediate = !Array.isArray(args[0]);
  const argOffset = useImmediate ? 0 : -1;
  const inputValue = args[0 + argOffset];
  const inputRange = args[1 + argOffset];
  const outputRange = args[2 + argOffset];
  const options = args[3 + argOffset];
  const interpolator = interpolate(inputRange, outputRange, options);
  return useImmediate ? interpolator(inputValue) : interpolator;
}
function useCombineMotionValues(values, combineValues) {
  const value = useMotionValue(combineValues());
  const updateValue = () => value.set(combineValues());
  updateValue();
  useIsomorphicLayoutEffect$1(() => {
    const scheduleUpdate = () => frame.preRender(updateValue, false, true);
    const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
    updateValue();
    return () => {
      subscriptions.forEach((unsubscribe) => unsubscribe());
      cancelFrame(updateValue);
    };
  });
  return value;
}
function useComputed(compute) {
  collectMotionValues.current = [];
  compute();
  const value = useCombineMotionValues(collectMotionValues.current, compute);
  collectMotionValues.current = void 0;
  return value;
}
function useTransform(input, inputRangeOrTransformer, outputRangeOrMap, options) {
  if (typeof input === "function") {
    return useComputed(input);
  }
  const isOutputMap = outputRangeOrMap !== void 0 && !Array.isArray(outputRangeOrMap) && typeof inputRangeOrTransformer !== "function";
  if (isOutputMap) {
    return useMapTransform(input, inputRangeOrTransformer, outputRangeOrMap, options);
  }
  const outputRange = outputRangeOrMap;
  const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
  const result = Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
  const inputAccelerate = !Array.isArray(input) ? input.accelerate : void 0;
  if (inputAccelerate && !inputAccelerate.isTransformed && typeof inputRangeOrTransformer !== "function" && Array.isArray(outputRangeOrMap) && (options == null ? void 0 : options.clamp) !== false) {
    result.accelerate = {
      ...inputAccelerate,
      times: [0, ...inputRangeOrTransformer, 1],
      keyframes: [
        outputRangeOrMap[0],
        ...outputRangeOrMap,
        outputRangeOrMap[outputRangeOrMap.length - 1]
      ],
      isTransformed: true,
      ...{}
    };
  }
  return result;
}
function useListTransform(values, transformer) {
  const latest = useConstant(() => []);
  return useCombineMotionValues(values, () => {
    latest.length = 0;
    const numValues = values.length;
    for (let i = 0; i < numValues; i++) {
      latest[i] = values[i].get();
    }
    return transformer(latest);
  });
}
function useMapTransform(inputValue, inputRange, outputMap, options) {
  const keys = useConstant(() => Object.keys(outputMap));
  const output = useConstant(() => ({}));
  for (const key of keys) {
    output[key] = useTransform(inputValue, inputRange, outputMap[key], options);
  }
  return output;
}
const plain = (n) => Math.round(n).toLocaleString();
function CountUp({ value, format = plain, className }) {
  const ref = reactExports.useRef(null);
  const state = reactExports.useRef({ n: 0 });
  const fmt = reactExports.useRef(format);
  fmt.current = format;
  reactExports.useEffect(() => {
    const el = ref.current;
    const draw = () => {
      el.textContent = fmt.current(state.current.n);
    };
    if (reducedMotion()) {
      state.current.n = value;
      draw();
      return void 0;
    }
    const tween = gsapWithCSS.to(state.current, { n: value, duration: 1.1, ease: "expo.out", onUpdate: draw });
    return () => tween.kill();
  }, [value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref, className, children: format(0) });
}
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var hasRequiredClassnames;
function requireClassnames() {
  if (hasRequiredClassnames) return classnames.exports;
  hasRequiredClassnames = 1;
  (function(module) {
    (function() {
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames);
  return classnames.exports;
}
var classnamesExports = requireClassnames();
const cx = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
function constant(x) {
  return function constant2() {
    return x;
  };
}
const abs = Math.abs;
const atan2 = Math.atan2;
const cos = Math.cos;
const max = Math.max;
const min = Math.min;
const sin = Math.sin;
const sqrt = Math.sqrt;
const epsilon$1 = 1e-12;
const pi$1 = Math.PI;
const halfPi = pi$1 / 2;
const tau$1 = 2 * pi$1;
function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi$1 : Math.acos(x);
}
function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}
const pi = Math.PI, tau = 2 * pi, epsilon = 1e-6, tauEpsilon = tau - epsilon;
function append(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
  if (d > 15) return append;
  const k = 10 ** d;
  return function(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k) / k + strings[i];
    }
  };
}
class Path {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
    this._append = digits == null ? append : appendRound(digits);
  }
  moveTo(x, y) {
    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x, y) {
    this._append`L${this._x1 = +x},${this._y1 = +y}`;
  }
  quadraticCurveTo(x1, y1, x, y) {
    this._append`Q${+x1},${+y1},${this._x1 = +x},${this._y1 = +y}`;
  }
  bezierCurveTo(x1, y1, x2, y2, x, y) {
    this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x},${this._y1 = +y}`;
  }
  arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (this._x1 === null) {
      this._append`M${this._x1 = x1},${this._y1 = y1}`;
    } else if (!(l01_2 > epsilon)) ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._append`L${this._x1 = x1},${this._y1 = y1}`;
    } else {
      let x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon) {
        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
      }
      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (this._x1 === null) {
      this._append`M${x0},${y0}`;
    } else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._append`L${x0},${y0}`;
    }
    if (!r) return;
    if (da < 0) da = da % tau + tau;
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    } else if (da > epsilon) {
      this._append`A${r},${r},0,${+(da >= pi)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
    }
  }
  rect(x, y, w, h) {
    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
}
function withPath(shape) {
  let digits = 3;
  shape.digits = function(_) {
    if (!arguments.length) return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    return shape;
  };
  return () => new Path(digits);
}
function arcInnerRadius(d) {
  return d.innerRadius;
}
function arcOuterRadius(d) {
  return d.outerRadius;
}
function arcStartAngle(d) {
  return d.startAngle;
}
function arcEndAngle(d) {
  return d.endAngle;
}
function arcPadAngle(d) {
  return d && d.padAngle;
}
function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0, x32 = x3 - x2, y32 = y3 - y2, t = y32 * x10 - x32 * y10;
  if (t * t < epsilon$1) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1, y01 = y0 - y1, lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x0 + ox, y11 = y0 + oy, x10 = x1 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * sqrt(max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}
function d3Arc() {
  var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null, path = withPath(arc2);
  function arc2() {
    var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi, a1 = endAngle.apply(this, arguments) - halfPi, da = abs(a1 - a0), cw = a1 > a0;
    if (!context) context = buffer = path();
    if (r1 < r0) r = r1, r1 = r0, r0 = r;
    if (!(r1 > epsilon$1)) context.moveTo(0, 0);
    else if (da > tau$1 - epsilon$1) {
      context.moveTo(r1 * cos(a0), r1 * sin(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > epsilon$1) {
        context.moveTo(r0 * cos(a1), r0 * sin(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    } else {
      var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > epsilon$1 && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)), rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t0, t1;
      if (rp > epsilon$1) {
        var p0 = asin(rp / r0 * sin(ap)), p1 = asin(rp / r1 * sin(ap));
        if ((da0 -= p0 * 2) > epsilon$1) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon$1) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }
      var x01 = r1 * cos(a01), y01 = r1 * sin(a01), x10 = r0 * cos(a10), y10 = r0 * sin(a10);
      if (rc > epsilon$1) {
        var x11 = r1 * cos(a11), y11 = r1 * sin(a11), x00 = r0 * cos(a00), y00 = r0 * sin(a00), oc;
        if (da < pi$1) {
          if (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10)) {
            var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2), lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
            rc0 = min(rc, (r0 - lc) / (kc - 1));
            rc1 = min(rc, (r1 - lc) / (kc + 1));
          } else {
            rc0 = rc1 = 0;
          }
        }
      }
      if (!(da1 > epsilon$1)) context.moveTo(x01, y01);
      else if (rc1 > epsilon$1) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);
        else {
          context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      } else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
      if (!(r0 > epsilon$1) || !(da0 > epsilon$1)) context.lineTo(x10, y10);
      else if (rc0 > epsilon$1) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);
        else {
          context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      } else context.arc(0, 0, r0, a10, a00, cw);
    }
    context.closePath();
    if (buffer) return context = null, buffer + "" || null;
  }
  arc2.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi$1 / 2;
    return [cos(a) * r, sin(a) * r];
  };
  arc2.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant(+_), arc2) : innerRadius;
  };
  arc2.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant(+_), arc2) : outerRadius;
  };
  arc2.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant(+_), arc2) : cornerRadius;
  };
  arc2.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant(+_), arc2) : padRadius;
  };
  arc2.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), arc2) : startAngle;
  };
  arc2.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), arc2) : endAngle;
  };
  arc2.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), arc2) : padAngle;
  };
  arc2.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, arc2) : context;
  };
  return arc2;
}
function setNumberOrNumberAccessor(func, value) {
  if (typeof value === "number") func(value);
  else func(value);
}
function arc() {
  let {
    innerRadius,
    outerRadius,
    cornerRadius,
    startAngle,
    endAngle,
    padAngle,
    padRadius
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const path = d3Arc();
  if (innerRadius != null) setNumberOrNumberAccessor(path.innerRadius, innerRadius);
  if (outerRadius != null) setNumberOrNumberAccessor(path.outerRadius, outerRadius);
  if (cornerRadius != null) setNumberOrNumberAccessor(path.cornerRadius, cornerRadius);
  if (startAngle != null) setNumberOrNumberAccessor(path.startAngle, startAngle);
  if (endAngle != null) setNumberOrNumberAccessor(path.endAngle, endAngle);
  if (padAngle != null) setNumberOrNumberAccessor(path.padAngle, padAngle);
  if (padRadius != null) setNumberOrNumberAccessor(path.padRadius, padRadius);
  return path;
}
function Group(_ref) {
  let {
    top = 0,
    left = 0,
    transform: transform2,
    className,
    children,
    innerRef,
    ...restProps
  } = _ref;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("g", {
    ref: innerRef,
    className: cx("visx-group", className),
    transform: transform2 || `translate(${left}, ${top})`,
    ...restProps,
    children
  });
}
const ringCssVars = {
  ringBackground: "var(--border)",
  // Default ring colors from chart palette
  ring1: "var(--chart-1)",
  ring2: "var(--chart-2)",
  ring3: "var(--chart-3)",
  ring4: "var(--chart-4)",
  ring5: "var(--chart-5)"
};
const defaultRingColors = [
  ringCssVars.ring1,
  ringCssVars.ring2,
  ringCssVars.ring3,
  ringCssVars.ring4,
  ringCssVars.ring5
];
function getRingHitRadii(index, baseInnerRadius, strokeWidth, ringGap) {
  const halfGap = Math.max(0, ringGap) / 2;
  const bandInner = baseInnerRadius + index * (strokeWidth + ringGap);
  return {
    innerRadius: Math.max(0, bandInner - halfGap),
    outerRadius: bandInner + strokeWidth + halfGap
  };
}
const RingStableContext = reactExports.createContext(null);
const RingHoverContext = reactExports.createContext(null);
function RingProvider({
  children,
  value
}) {
  const stable = reactExports.useMemo(() => ({
    data: value.data,
    size: value.size,
    center: value.center,
    strokeWidth: value.strokeWidth,
    ringGap: value.ringGap,
    baseInnerRadius: value.baseInnerRadius,
    animationKey: value.animationKey,
    isLoaded: value.isLoaded,
    enterTransition: value.enterTransition,
    enterStaggerScale: value.enterStaggerScale,
    containerRef: value.containerRef,
    totalValue: value.totalValue,
    getColor: value.getColor,
    getRingRadii: value.getRingRadii,
    startAngle: value.startAngle,
    endAngle: value.endAngle,
    geometryScrubbing: value.geometryScrubbing
  }), [
    value.data,
    value.size,
    value.center,
    value.strokeWidth,
    value.ringGap,
    value.baseInnerRadius,
    value.animationKey,
    value.isLoaded,
    value.enterTransition,
    value.enterStaggerScale,
    value.containerRef,
    value.totalValue,
    value.getColor,
    value.getRingRadii,
    value.startAngle,
    value.endAngle,
    value.geometryScrubbing
  ]);
  const hover = reactExports.useMemo(() => ({
    hoveredIndex: value.hoveredIndex,
    setHoveredIndex: value.setHoveredIndex
  }), [value.hoveredIndex, value.setHoveredIndex]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RingStableContext.Provider, { value: stable, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RingHoverContext.Provider, { value: hover, children }) });
}
function useRingStable() {
  const context = reactExports.useContext(RingStableContext);
  if (!context) {
    throw new Error(
      "useRingStable must be used within a RingProvider. Make sure your component is wrapped in <RingChart>."
    );
  }
  return context;
}
function useRingHover() {
  const context = reactExports.useContext(RingHoverContext);
  if (!context) {
    throw new Error(
      "useRingHover must be used within a RingProvider. Make sure your component is wrapped in <RingChart>."
    );
  }
  return context;
}
function useEnterComplete(mountProgress) {
  const subscribe = reactExports.useCallback(
    (onStoreChange) => mountProgress.on("change", onStoreChange),
    [mountProgress]
  );
  const getSnapshot = () => mountProgress.get() >= 1;
  const reachedEnd = reactExports.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const [latched, setLatched] = reactExports.useState(reachedEnd);
  if (reachedEnd && !latched) {
    setLatched(true);
  }
  return latched || reachedEnd;
}
const DEFAULT_ANIMATION_DURATION_MS = 1100;
const DEFAULT_CHART_ENTER_TRANSITION = {
  type: "tween",
  duration: DEFAULT_ANIMATION_DURATION_MS / 1e3,
  ease: [0.85, 0, 0.15, 1]
};
function useMountProgress(enterTransition, delaySeconds, replayKey) {
  const progress = useMotionValue(0);
  const transitionRef = reactExports.useRef(enterTransition);
  reactExports.useEffect(() => {
    transitionRef.current = enterTransition;
  });
  reactExports.useEffect(() => {
    progress.set(0);
    const controls = animate(progress, 1, {
      ...transitionRef.current ?? DEFAULT_CHART_ENTER_TRANSITION,
      delay: delaySeconds
    });
    return () => controls.stop();
  }, [delaySeconds, replayKey, progress]);
  return progress;
}
function generateArcPath(innerRadius, outerRadius, startAngle, endAngle, cornerRadius) {
  const generator = arc({
    innerRadius,
    outerRadius,
    cornerRadius
  });
  return generator({
    startAngle,
    endAngle
  }) || "";
}
function ringHoverScale(isHovered, isPushedOut) {
  if (isHovered) {
    return 1.03;
  }
  if (isPushedOut) {
    return 1.02;
  }
  return 1;
}
function RingProgressPath({
  progressComplete,
  progressPath,
  animatedProgressPath,
  color
}) {
  if (progressComplete) {
    if (!progressPath) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: progressPath, fill: color });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.path, { d: animatedProgressPath, fill: color });
}
const Ring = reactExports.memo(function Ring2({
  index,
  color: colorProp,
  animate: animate2 = true,
  showGlow = true,
  lineCap = "round"
}) {
  const {
    data,
    getColor,
    getRingRadii,
    startAngle,
    endAngle,
    enterTransition,
    enterStaggerScale,
    animationKey,
    baseInnerRadius,
    strokeWidth,
    ringGap
  } = useRingStable();
  const { hoveredIndex, setHoveredIndex } = useRingHover();
  const expandDelay = index * 0.08 * enterStaggerScale;
  const expandProgress = useMountProgress(
    enterTransition,
    expandDelay,
    `${animationKey}-expand-${index}`
  );
  const expandComplete = useEnterComplete(expandProgress);
  const progressDelay = (0.6 + index * 0.1) * enterStaggerScale;
  const progressMount = useMountProgress(
    enterTransition,
    progressDelay,
    `${animationKey}-progress-${index}`
  );
  const progressComplete = useEnterComplete(progressMount);
  const ringData = data[index];
  const progress = ringData ? ringData.value / ringData.maxValue : 0;
  const arcRange = endAngle - startAngle;
  const animatedProgressPath = useTransform(progressMount, (v) => {
    if (!ringData) {
      return "";
    }
    const currentEndAngle = startAngle + arcRange * progress * v;
    if (currentEndAngle <= startAngle + 0.01) {
      return "";
    }
    const radii = getRingRadii(index);
    const corner = lineCap === "round" ? (radii.outerRadius - radii.innerRadius) / 2 : 0;
    return generateArcPath(
      radii.innerRadius,
      radii.outerRadius,
      startAngle,
      currentEndAngle,
      corner
    );
  });
  const enterScale = useTransform(expandProgress, [0, 1], [0, 1]);
  const handleMouseEnter = reactExports.useCallback(
    () => setHoveredIndex(index),
    [index, setHoveredIndex]
  );
  const handleMouseLeave = reactExports.useCallback(
    () => setHoveredIndex(null),
    [setHoveredIndex]
  );
  if (!ringData) {
    return null;
  }
  const { innerRadius, outerRadius } = getRingRadii(index);
  const color = colorProp || getColor(index);
  const isHovered = hoveredIndex === index;
  const isFaded = hoveredIndex !== null && hoveredIndex !== index;
  const isPushedOut = hoveredIndex !== null && hoveredIndex < index;
  const cornerRadius = lineCap === "round" ? (outerRadius - innerRadius) / 2 : 0;
  const bgPath = generateArcPath(
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    cornerRadius
  );
  const progressEndAngle = startAngle + arcRange * progress;
  const progressPath = progressEndAngle <= startAngle + 0.01 ? "" : generateArcPath(
    innerRadius,
    outerRadius,
    startAngle,
    progressEndAngle,
    cornerRadius
  );
  const hoverScale = ringHoverScale(isHovered, isPushedOut);
  const layerOpacity = isFaded ? 0.35 : 1;
  const enterDone = !animate2 || expandComplete && progressComplete;
  const groupStyle = {
    transformOrigin: "0px 0px",
    filter: showGlow && isHovered ? `drop-shadow(0 0 12px ${color})` : "none"
  };
  const hitRadii = getRingHitRadii(
    index,
    baseInnerRadius,
    strokeWidth,
    ringGap
  );
  const hitboxPath = generateArcPath(
    hitRadii.innerRadius,
    hitRadii.outerRadius,
    startAngle,
    endAngle,
    0
  );
  const hitbox = (
    // biome-ignore lint/a11y/noStaticElementInteractions: SVG path used as hover hitbox for visualization
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: hitboxPath,
        fill: "transparent",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        style: { cursor: "pointer" }
      }
    )
  );
  if (enterDone) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      hitbox,
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.g,
        {
          animate: { scale: hoverScale, opacity: layerOpacity },
          initial: false,
          pointerEvents: "none",
          style: groupStyle,
          transition: {
            scale: { type: "spring", stiffness: 400, damping: 25 },
            opacity: { duration: 0.15 }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: bgPath, fill: ringCssVars.ringBackground }),
            progressPath ? /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: progressPath, fill: color }) : null
          ]
        }
      )
    ] });
  }
  if (!expandComplete) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      hitbox,
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.g,
        {
          pointerEvents: "none",
          style: {
            ...groupStyle,
            scale: enterScale,
            opacity: layerOpacity
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: bgPath, fill: ringCssVars.ringBackground })
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
    hitbox,
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.g,
      {
        animate: { scale: hoverScale, opacity: layerOpacity },
        initial: false,
        pointerEvents: "none",
        style: groupStyle,
        transition: {
          scale: { type: "spring", stiffness: 400, damping: 25 },
          opacity: { duration: 0.15 }
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: bgPath, fill: ringCssVars.ringBackground }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            RingProgressPath,
            {
              animatedProgressPath,
              color,
              progressComplete,
              progressPath
            }
          )
        ]
      }
    )
  ] });
});
Ring.displayName = "Ring";
const chartCenterContainerClassName = "@container/chart-center size-full min-w-0";
const chartCenterValueClassName = "font-bold tabular-nums leading-none text-[clamp(0.75rem,22cqw,1.875rem)]";
const chartCenterLabelClassName = "max-w-full truncate leading-tight text-[clamp(0.625rem,9cqw,0.75rem)]";
const defaultChartStatFlowFormat = {
  notation: "standard",
  maximumFractionDigits: 0
};
function formatStatValue(value, formatOptions, prefix, suffix) {
  const formatted = new Intl.NumberFormat(void 0, formatOptions).format(
    value
  );
  return `${prefix ?? ""}${formatted}${suffix ?? ""}`;
}
function ChartStatFlow({
  value,
  label,
  formatOptions = defaultChartStatFlowFormat,
  prefix,
  suffix,
  valueClassName = "text-2xl font-bold",
  labelClassName = "text-xs",
  icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    icon ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-muted/50", children: icon }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-foreground tabular-nums", valueClassName), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { value, format: (n) => formatStatValue(n, formatOptions, prefix, suffix) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("mt-0.5 text-chart-label", labelClassName), children: label })
  ] });
}
ChartStatFlow.displayName = "ChartStatFlow";
function RingCenter({
  defaultLabel = "Total",
  formatOptions = defaultChartStatFlowFormat,
  children,
  className = "",
  valueClassName = chartCenterValueClassName,
  labelClassName = chartCenterLabelClassName,
  prefix,
  suffix
}) {
  const { data, totalValue, baseInnerRadius } = useRingStable();
  const { hoveredIndex } = useRingHover();
  const hoveredData = hoveredIndex === null ? null : data[hoveredIndex];
  const displayValue = hoveredData ? hoveredData.value : totalValue;
  const displayLabel = hoveredData ? hoveredData.label : defaultLabel;
  const centerSize = baseInnerRadius * 2 - 16;
  if (children && hoveredData) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          chartCenterContainerClassName,
          "flex items-center justify-center",
          className
        ),
        style: { width: centerSize, height: centerSize },
        children: children({
          value: displayValue,
          label: displayLabel,
          isHovered: hoveredIndex !== null,
          data: hoveredData
        })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        chartCenterContainerClassName,
        "flex flex-col items-center justify-center text-center",
        className
      ),
      style: { width: centerSize, height: centerSize },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChartStatFlow,
        {
          formatOptions,
          label: displayLabel,
          labelClassName,
          prefix,
          suffix,
          value: displayValue,
          valueClassName
        }
      )
    }
  );
}
RingCenter.displayName = "RingCenter";
const useIsomorphicLayoutEffect = typeof window === "undefined" ? reactExports.useEffect : reactExports.useLayoutEffect;
const ZERO_SIZE = { width: 0, height: 0 };
function readElementSize(element) {
  const style = getComputedStyle(element);
  const width = Number.parseFloat(style.width);
  const height = Number.parseFloat(style.height);
  return {
    width: Number.isFinite(width) ? width : element.clientWidth,
    height: Number.isFinite(height) ? height : element.clientHeight
  };
}
function useElementSize(ref, debounceTime = 0) {
  const [size, setSize] = reactExports.useState(ZERO_SIZE);
  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    const apply = () => {
      const next = readElementSize(element);
      setSize(
        (prev) => prev.width === next.width && prev.height === next.height ? prev : next
      );
    };
    apply();
    if (typeof ResizeObserver === "undefined") {
      return;
    }
    let timeout = null;
    let trailing = false;
    const observer = new ResizeObserver(() => {
      if (debounceTime <= 0) {
        apply();
        return;
      }
      if (timeout !== null) {
        trailing = true;
        return;
      }
      apply();
      const flush = () => {
        if (trailing) {
          trailing = false;
          apply();
          timeout = setTimeout(flush, debounceTime);
          return;
        }
        timeout = null;
      };
      timeout = setTimeout(flush, debounceTime);
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [ref, debounceTime]);
  return size;
}
function ParentSize({
  children,
  className,
  debounceTime,
  style
}) {
  const parentRef = reactExports.useRef(null);
  const { width, height } = useElementSize(parentRef, debounceTime ?? 300);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className,
      style: { position: "relative", width: "100%", height: "100%", ...style },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: parentRef, style: { position: "absolute", inset: 0 }, children: children({ width, height }) })
    }
  );
}
function generateRingArcPath(innerRadius, outerRadius, startAngle, endAngle, cornerRadius) {
  const generator = arc({
    innerRadius,
    outerRadius,
    cornerRadius
  });
  return generator({
    startAngle,
    endAngle
  }) || "";
}
function isRing(child) {
  return reactExports.isValidElement(child) && typeof child.type === "function" && (child.type.displayName === "Ring" || child.type.name === "Ring");
}
function isRingCenter(child) {
  return reactExports.isValidElement(child) && typeof child.type === "function" && (child.type.displayName === "RingCenter" || child.type.name === "RingCenter");
}
function RingChartInner(props) {
  const size = Math.min(props.width, props.height);
  if (size < 10) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RingChartCore, { ...props });
}
const RingChartCore = reactExports.memo(function RingChartCore2({
  width,
  height,
  data,
  strokeWidth: strokeWidthProp,
  ringGap: ringGapProp,
  baseInnerRadius: baseInnerRadiusProp,
  children,
  containerRef,
  hoveredIndexProp,
  onHoverChange,
  startAngle,
  endAngle,
  enterTransition,
  enterStaggerScale,
  geometryScrubbing
}) {
  const [internalHoveredIndex, setInternalHoveredIndex] = reactExports.useState(null);
  const [animationKey] = reactExports.useState(0);
  const [isLoaded, setIsLoaded] = reactExports.useState(false);
  const isControlled = hoveredIndexProp !== void 0;
  const hoveredIndex = isControlled ? hoveredIndexProp : internalHoveredIndex;
  const setHoveredIndex = reactExports.useCallback(
    (index) => {
      if (isControlled) {
        onHoverChange == null ? void 0 : onHoverChange(index);
      } else {
        setInternalHoveredIndex(index);
      }
    },
    [isControlled, onHoverChange]
  );
  const size = Math.min(width, height);
  const center = size / 2;
  const ringCount = data.length;
  const padding = 8;
  const availableRadius = center - padding;
  const designOuterRadius = baseInnerRadiusProp + (ringCount - 1) * (strokeWidthProp + ringGapProp) + strokeWidthProp;
  const scale = Math.min(1, availableRadius / designOuterRadius);
  const strokeWidth = strokeWidthProp * scale;
  const ringGap = ringGapProp * scale;
  const baseInnerRadius = baseInnerRadiusProp * scale;
  const totalValue = reactExports.useMemo(
    () => data.reduce((sum, d) => sum + d.value, 0),
    [data]
  );
  const getColor = reactExports.useCallback(
    (index) => {
      const item = data[index];
      if (item == null ? void 0 : item.color) {
        return item.color;
      }
      return defaultRingColors[index % defaultRingColors.length];
    },
    [data]
  );
  const getRingRadii = reactExports.useCallback(
    (index) => {
      const innerRadius = baseInnerRadius + index * (strokeWidth + ringGap);
      const outerRadius = innerRadius + strokeWidth;
      return { innerRadius, outerRadius };
    },
    [baseInnerRadius, strokeWidth, ringGap]
  );
  const arcRange = endAngle - startAngle;
  const scrubRingLayers = reactExports.useMemo(() => {
    if (!geometryScrubbing) {
      return null;
    }
    return data.map((ringData, index) => {
      const { innerRadius, outerRadius } = getRingRadii(index);
      const cornerRadius = (outerRadius - innerRadius) / 2;
      const progress = ringData.value / ringData.maxValue;
      const progressEndAngle = startAngle + arcRange * progress;
      return {
        bgPath: generateRingArcPath(
          innerRadius,
          outerRadius,
          startAngle,
          endAngle,
          cornerRadius
        ),
        progressPath: progressEndAngle <= startAngle + 0.01 ? "" : generateRingArcPath(
          innerRadius,
          outerRadius,
          startAngle,
          progressEndAngle,
          cornerRadius
        ),
        color: getColor(index)
      };
    });
  }, [
    geometryScrubbing,
    data,
    getRingRadii,
    getColor,
    startAngle,
    endAngle,
    arcRange
  ]);
  const effectiveIsLoaded = geometryScrubbing || isLoaded;
  const [enterKey, setEnterKey] = reactExports.useState({
    enterTransition,
    enterStaggerScale,
    geometryScrubbing
  });
  if (enterKey.enterTransition !== enterTransition || enterKey.enterStaggerScale !== enterStaggerScale || enterKey.geometryScrubbing !== geometryScrubbing) {
    setEnterKey({ enterTransition, enterStaggerScale, geometryScrubbing });
    if (!geometryScrubbing) {
      setIsLoaded(false);
    }
  }
  reactExports.useEffect(() => {
    if (geometryScrubbing) {
      return;
    }
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [enterTransition, enterStaggerScale, geometryScrubbing]);
  const { svgChildren, centerChildren } = reactExports.useMemo(() => {
    const svgNodes = [];
    const centerNodes = [];
    reactExports.Children.forEach(children, (child) => {
      if (isRingCenter(child)) {
        centerNodes.push(child);
      } else if (geometryScrubbing && isRing(child)) {
        return;
      } else {
        svgNodes.push(child);
      }
    });
    return { svgChildren: svgNodes, centerChildren: centerNodes };
  }, [children, geometryScrubbing]);
  const contextValue = reactExports.useMemo(
    () => ({
      data,
      size,
      center,
      strokeWidth,
      ringGap,
      baseInnerRadius,
      hoveredIndex,
      setHoveredIndex,
      animationKey,
      isLoaded: effectiveIsLoaded,
      enterTransition,
      enterStaggerScale,
      containerRef,
      totalValue,
      getColor,
      getRingRadii,
      startAngle,
      endAngle,
      geometryScrubbing
    }),
    [
      data,
      size,
      center,
      strokeWidth,
      ringGap,
      baseInnerRadius,
      hoveredIndex,
      setHoveredIndex,
      animationKey,
      effectiveIsLoaded,
      enterTransition,
      enterStaggerScale,
      containerRef,
      totalValue,
      getColor,
      getRingRadii,
      startAngle,
      endAngle,
      geometryScrubbing
    ]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RingProvider, { value: contextValue, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "grid",
      style: {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr",
        width: size,
        height: size
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "svg",
          {
            "aria-hidden": "true",
            height: size,
            style: {
              gridArea: "1 / 1",
              // No `paint` containment: it clips hover glow at the svg box.
              contain: "layout style",
              overflow: "visible"
            },
            width: size,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Group, { left: center, top: center, children: [
              scrubRingLayers ? scrubRingLayers.map((layer, index) => {
                var _a;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: layer.bgPath, fill: ringCssVars.ringBackground }),
                  layer.progressPath ? /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: layer.progressPath, fill: layer.color }) : null
                ] }, ((_a = data[index]) == null ? void 0 : _a.label) ?? index);
              }) : null,
              svgChildren
            ] })
          }
        ),
        centerChildren.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none flex items-center justify-center",
            style: { gridArea: "1 / 1" },
            children: centerChildren
          }
        )
      ]
    }
  ) });
}, ringChartCorePropsEqual);
function ringChartCorePropsEqual(prev, next) {
  return prev.width === next.width && prev.height === next.height && prev.data === next.data && prev.strokeWidth === next.strokeWidth && prev.ringGap === next.ringGap && prev.baseInnerRadius === next.baseInnerRadius && prev.hoveredIndexProp === next.hoveredIndexProp && prev.onHoverChange === next.onHoverChange && prev.startAngle === next.startAngle && prev.endAngle === next.endAngle && prev.enterTransition === next.enterTransition && prev.enterStaggerScale === next.enterStaggerScale && prev.geometryScrubbing === next.geometryScrubbing && prev.children === next.children;
}
function RingChart({
  data,
  size: fixedSize,
  strokeWidth = 12,
  ringGap = 6,
  baseInnerRadius = 60,
  className = "",
  hoveredIndex,
  onHoverChange,
  startAngle = -Math.PI / 2,
  endAngle = 3 * Math.PI / 2,
  enterTransition,
  enterStaggerScale = 1,
  geometryScrubbing = false,
  children
}) {
  const containerRef = reactExports.useRef(null);
  if (fixedSize) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn("relative flex items-center justify-center", className),
        ref: containerRef,
        style: { width: fixedSize, height: fixedSize },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          RingChartInner,
          {
            baseInnerRadius,
            containerRef,
            data,
            endAngle,
            enterStaggerScale,
            enterTransition,
            geometryScrubbing,
            height: fixedSize,
            hoveredIndexProp: hoveredIndex,
            onHoverChange,
            ringGap,
            startAngle,
            strokeWidth,
            width: fixedSize,
            children
          }
        )
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn("relative aspect-square w-full", className),
      ref: containerRef,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ParentSize, { debounceTime: 10, children: ({ width, height }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        RingChartInner,
        {
          baseInnerRadius,
          containerRef,
          data,
          endAngle,
          enterStaggerScale,
          enterTransition,
          geometryScrubbing,
          height,
          hoveredIndexProp: hoveredIndex,
          onHoverChange,
          ringGap,
          startAngle,
          strokeWidth,
          width,
          children
        }
      ) })
    }
  );
}
function Repos({ repos, installUrl, className }) {
  const [filter, setFilter] = reactExports.useState("");
  const shown = (repos || []).filter((r) => r.fullName.toLowerCase().includes(filter.trim().toLowerCase()));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: cn("card", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "flex-1", children: "Your repositories" }),
      (repos == null ? void 0 : repos.length) > 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Filter repositories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "field w-48 py-1.5 pl-8", value: filter, onChange: (e) => setFilter(e.target.value), placeholder: "Filter…" })
      ] }),
      installUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: installUrl, target: "_blank", rel: "noopener noreferrer", className: "btn h-9 px-3.5", children: [
        "Choose repositories ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-4", "aria-hidden": "true" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Where the app is installed and you have access. Missing one? “Choose repositories” opens GitHub in a new tab to pick which ones SARVAS can access." }),
    repos === null && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Loading…" }),
    (repos == null ? void 0 : repos.length) === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm", children: "No repositories yet." }),
    shown.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 divide-y rounded-md border", children: shown.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: `/repos/${encodeURIComponent(r.owner)}/${encodeURIComponent(r.name)}`,
        className: "group flex items-center gap-3 px-3 py-2.5 text-foreground no-underline transition-colors hover:bg-muted hover:no-underline",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FolderGit2, { className: "size-4 text-muted-foreground", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0 flex-1 truncate", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              r.owner,
              "/"
            ] }),
            r.name
          ] }),
          r.private && /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "size-3.5 text-muted-foreground", "aria-label": "private" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: r.access }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5", "aria-hidden": "true" })
        ]
      }
    ) }, r.fullName)) }),
    (repos == null ? void 0 : repos.length) > 0 && shown.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm text-muted-foreground", children: [
      "No repository matches “",
      filter,
      "”."
    ] })
  ] });
}
const returnedFromGitHub = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("setup_action");
const ROLE_HELP = {
  requester: "You can ask questions and request changes. Engineers review and merge every pull request.",
  engineer: "You can also approve medium-risk plans on repositories where you have push access.",
  admin: "You can also see the full audit log and pause the agent."
};
const ROLE_CLASS = { admin: "bg-bad/10 text-bad", engineer: "bg-primary/12 text-link", requester: "" };
const SLICES = [
  ["working", "In progress", "var(--chart-1)"],
  ["attention", "Waiting on a person", "var(--chart-4)"],
  ["done", "Pull request opened", "var(--chart-3)"],
  ["stopped", "Stopped or failed", "var(--chart-5)"]
];
function Dashboard({ onError, installUrl }) {
  var _a, _b, _c, _d, _e;
  const ssr = useServerData();
  const [me, setMe] = reactExports.useState(ssr.me ?? null);
  const [repos, setRepos] = reactExports.useState(((_a = ssr.repos) == null ? void 0 : _a.repos) ?? null);
  const [tasks, setTasks] = reactExports.useState(((_b = ssr.tasks) == null ? void 0 : _b.tasks) ?? null);
  reactExports.useEffect(() => {
    if (!ssr.me) api.me().then(setMe).catch(onError);
    if (!ssr.repos) api.repos().then((d) => setRepos(d.repos)).catch(onError);
    if (!ssr.tasks) api.tasks().then((d) => setTasks(d.tasks)).catch(onError);
    if (returnedFromGitHub) window.history.replaceState({}, "", "/");
  }, [onError]);
  if (!me) return /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoading, {});
  const count = (tone) => (tasks || []).filter((t) => {
    const s = taskStatus(t.status).tone;
    return tone === "stopped" ? s === "stopped" || s === "failed" : s === tone;
  }).length;
  const total = (tasks == null ? void 0 : tasks.length) ?? 0;
  const ring = SLICES.map(([tone, label, color]) => ({ label, value: count(tone), maxValue: Math.max(total, 1), color }));
  const stats = [
    [FolderGit2, "Repositories", (repos == null ? void 0 : repos.length) ?? 0, null],
    [Loader, "In progress", ring[0].value, "/tasks"],
    [CircleAlert, "Waiting on a person", ring[1].value, "/tasks"],
    [GitPullRequest, "Pull requests opened", ring[2].value, "/tasks"]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { watch: me, className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-wrap items-center gap-4", children: [
      me.avatarUrl.startsWith("https://avatars.githubusercontent.com/") && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: me.avatarUrl, alt: "", className: "size-14 rounded-full border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { children: [
          "Welcome back, ",
          me.name || me.login
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground", children: [
          "@",
          me.login,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `tag ${ROLE_CLASS[me.role] || ""}`, children: me.role }),
          ((_c = me.build) == null ? void 0 : _c.enabled) ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag bg-ok/12 text-ok", children: "Build tasks on" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Build tasks off" })
        ] })
      ] })
    ] }),
    returnedFromGitHub && me.installations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { role: "status", className: "rounded-lg border border-ok/30 bg-ok/10 px-4 py-3 text-sm text-ok", children: "GitHub saved your repository choice. They’re listed below." }),
    me.installations.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(InstallApp, { login: me.login, installUrl }),
    me.killSwitch && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { role: "status", className: "rounded-lg border border-bad/30 bg-bad/10 px-4 py-3 text-sm text-bad", children: "The agent is paused by an administrator. No new tasks, approvals or pull requests until it resumes." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "grid grid-cols-2 gap-3 lg:grid-cols-4", children: stats.map(([Icon, label, value, to]) => {
      const body = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4 text-muted-foreground", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { value, className: "mt-4 block font-display text-5xl font-semibold leading-none tracking-[-0.04em] tabular-nums text-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: label })
      ] });
      return to ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "card-cream block p-5 no-underline hover:no-underline active:bg-muted-strong sm:p-6", children: body }, label) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-cream p-5 sm:p-6", children: body }, label);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "card lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Change requests" }),
        tasks === null && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Loading…" }),
        (tasks == null ? void 0 : tasks.length) === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Nothing yet. Open a repository to ask a question or request a change." }),
        total > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-4 max-w-[240px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RingChart, { data: ring, strokeWidth: 10, ringGap: 5, baseInnerRadius: 52, children: [
            ring.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ring, { index: i }, d.label)),
            /* @__PURE__ */ jsxRuntimeExports.jsx(RingCenter, { defaultLabel: "Requests" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-1.5 text-sm", children: ring.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2.5 rounded-full", style: { background: d.color } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-muted-foreground", children: d.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums", children: d.value })
          ] }, d.label)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Repos, { repos, installUrl, className: "lg:col-span-2" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Account and access" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-4 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-[max-content_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Verified email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: me.emails === null ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "muted", children: "not shared with this app" }) : me.emails.length ? me.emails.join(", ") : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "muted", children: "none verified" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Organizations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: me.orgs.length ? me.orgs.join(", ") : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "muted", children: "none" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "App installed on" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: me.installations.map((i) => i.account).join(", ") || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "muted", children: "nowhere yet" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Your role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: ROLE_HELP[me.role] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "AI model" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: me.ai.disclosure }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Build tasks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: ((_d = me.build) == null ? void 0 : _d.enabled) ? "Available" : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "muted", children: [
          "Off: ",
          (((_e = me.build) == null ? void 0 : _e.problems) || []).join("; ")
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-xs text-muted-foreground", children: [
        "Revoke this app’s access to your account at any time from",
        " ",
        safeGitHubUrl(me.revokeUrl) && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: me.revokeUrl, target: "_blank", rel: "noreferrer noopener", children: "GitHub → Settings → Applications" }),
        ", or use Disconnect above."
      ] })
    ] })
  ] });
}
function InstallApp({ login, installUrl }) {
  const steps = [
    [true, `Signed in as @${login}`],
    [false, "Install the GitHub App and choose All repositories, or only the ones you pick"],
    [false, "You'll come straight back here with your repositories ready"]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "card backdrop-grid sm:p-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl", children: "Connect your repositories" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-6 space-y-3", children: steps.map(([done, text], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-6 shrink-0 place-items-center rounded-full border bg-muted font-mono text-xs text-link", children: done ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5", "aria-hidden": "true" }) : i + 1 }),
      text
    ] }, text)) }),
    installUrl ? (
      // New tab: GitHub's own page, where the user picks all or selected repositories; it returns via the App's Setup URL.
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: installUrl, target: "_blank", rel: "noopener noreferrer", className: "btn btn-primary mt-8 h-11 px-6", children: [
        "Install the GitHub App ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-4", "aria-hidden": "true" })
      ] })
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-sm text-muted-foreground", children: "Ask your administrator for the App's install link (they can show it here by setting GITHUB_APP_SLUG)." })
  ] });
}
export {
  Dashboard as default
};
