import { c as createLucideIcon, r as reactExports, e as reducedMotion, g as gsapWithCSS, j as jsxRuntimeExports, L as Logo, F as Footer, G as GitHubMark, a as api } from "../entry-server.js";
import { S as Stagger } from "./Stagger-BIKNmo3W.js";
import { E as ExternalLink } from "./external-link-kIMHU7-E.js";
import { M as MessageSquareCode, W as WandSparkles } from "./wand-sparkles-CDzbNRzT.js";
import { G as GitPullRequest } from "./git-pull-request-DiFH3hru.js";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconData$2 = {
  name: "arrow-right",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]
};
__iconData$2.node;
const ArrowRight = createLucideIcon(__iconData$2);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconData$1 = {
  name: "key-round",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
        key: "1s6t7t"
      }
    ],
    ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
  ]
};
__iconData$1.node;
const KeyRound = createLucideIcon(__iconData$1);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconData = {
  name: "shield-check",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
      }
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
  ]
};
__iconData.node;
const ShieldCheck = createLucideIcon(__iconData);
/*!
 * SplitText 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2026, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */
let gsap, _fonts, _splitProp = typeof Symbol === "function" ? Symbol() : "_split", _coreInitted, _initIfNecessary = () => _coreInitted || SplitText.register(window.gsap), _charSegmenter = typeof Intl !== "undefined" && "Segmenter" in Intl ? new Intl.Segmenter() : 0, _toArray = (r) => !r ? [] : typeof r === "string" ? _toArray(document.querySelectorAll(r)) : "length" in r ? Array.from(r).reduce((acc, cur) => {
  typeof cur === "string" ? acc.push(..._toArray(cur)) : acc.push(cur);
  return acc;
}, []) : [r], _elements = (targets) => _toArray(targets).filter((e) => e && e.nodeType === 1), _emptyArray = [], _context = function() {
}, _defaultContext = { add: (f) => f() }, _spacesRegEx = /\s+/g, _emojiSafeRegEx = new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"), _emptyBounds = { left: 0, top: 0, width: 0, height: 0 }, _findNextValidBounds = (allBounds, startIndex) => {
  while (++startIndex < allBounds.length && allBounds[startIndex] === _emptyBounds) {
  }
  return allBounds[startIndex] || _emptyBounds;
}, _revertOriginal = ({ element, html, ariaL, ariaH }) => {
  element.innerHTML = html;
  ariaL ? element.setAttribute("aria-label", ariaL) : element.removeAttribute("aria-label");
  ariaH ? element.setAttribute("aria-hidden", ariaH) : element.removeAttribute("aria-hidden");
}, _stretchToFitSpecialChars = (collection, specialCharsRegEx) => {
  if (specialCharsRegEx) {
    let charsFound = new Set(collection.join("").match(specialCharsRegEx) || _emptyArray), i = collection.length, slots, word, char, combined;
    if (charsFound.size) {
      while (--i > -1) {
        word = collection[i];
        for (char of charsFound) {
          if (char.startsWith(word) && char.length > word.length) {
            slots = 0;
            combined = word;
            while (char.startsWith(combined += collection[i + ++slots]) && combined.length < char.length) {
            }
            if (slots && combined.length === char.length) {
              collection[i] = char;
              collection.splice(i + 1, slots);
              break;
            }
          }
        }
      }
    }
  }
  return collection;
}, _disallowInline = (element) => window.getComputedStyle(element).display === "inline" && (element.style.display = "inline-block"), _insertNodeBefore = (newChild, parent, existingChild) => parent.insertBefore(typeof newChild === "string" ? document.createTextNode(newChild) : newChild, existingChild), _getWrapper = (type, config, collection) => {
  let className = config[type + "sClass"] || "", { tag = "div", aria = "auto", propIndex = false } = config, display = type === "line" ? "block" : "inline-block", incrementClass = className.indexOf("++") > -1, wrapper = (text) => {
    let el = document.createElement(tag), i = collection.length + 1;
    className && (el.className = className + (incrementClass ? " " + className + i : ""));
    propIndex && el.style.setProperty("--" + type, i + "");
    aria !== "none" && el.setAttribute("aria-hidden", "true");
    if (tag !== "span") {
      el.style.position = "relative";
      el.style.display = display;
    }
    el.textContent = text;
    collection.push(el);
    return el;
  };
  incrementClass && (className = className.replace("++", ""));
  wrapper.collection = collection;
  return wrapper;
}, _getLineWrapper = (element, nodes, config, collection) => {
  let lineWrapper = _getWrapper("line", config, collection), textAlign = window.getComputedStyle(element).textAlign || "left";
  return (startIndex, endIndex) => {
    let newLine = lineWrapper("");
    newLine.style.textAlign = textAlign;
    element.insertBefore(newLine, nodes[startIndex]);
    for (; startIndex < endIndex; startIndex++) {
      newLine.appendChild(nodes[startIndex]);
    }
    newLine.normalize();
  };
}, _splitWordsAndCharsRecursively = (element, config, wordWrapper, charWrapper, prepForCharsOnly, deepSlice, ignore, charSplitRegEx, specialCharsRegEx, isNested) => {
  var _a;
  let nodes = Array.from(element.childNodes), i = 0, { wordDelimiter, reduceWhiteSpace = true, prepareText } = config, elementBounds = element.getBoundingClientRect(), lastBounds = elementBounds, isPreformatted = !reduceWhiteSpace && window.getComputedStyle(element).whiteSpace.substring(0, 3) === "pre", ignoredPreviousSibling = 0, wordsCollection = wordWrapper.collection, wordDelimIsNotSpace, wordDelimString, wordDelimSplitter, curNode, words, curWordEl, startsWithSpace, endsWithSpace, j, bounds, curWordChars, clonedNode, curSubNode, tempSubNode, curTextContent, wordText, lastWordText, k;
  if (typeof wordDelimiter === "object") {
    wordDelimSplitter = wordDelimiter.delimiter || wordDelimiter;
    wordDelimString = wordDelimiter.replaceWith || "";
  } else {
    wordDelimString = wordDelimiter === "" ? "" : wordDelimiter || " ";
  }
  wordDelimIsNotSpace = wordDelimString !== " ";
  for (; i < nodes.length; i++) {
    curNode = nodes[i];
    if (curNode.nodeType === 3) {
      curTextContent = curNode.textContent || "";
      if (reduceWhiteSpace) {
        curTextContent = curTextContent.replace(_spacesRegEx, " ");
      } else if (isPreformatted) {
        curTextContent = curTextContent.replace(/\n/g, wordDelimString + "\n");
      }
      prepareText && (curTextContent = prepareText(curTextContent, element));
      curNode.textContent = curTextContent;
      words = wordDelimString || wordDelimSplitter ? curTextContent.split(wordDelimSplitter || wordDelimString) : curTextContent.match(charSplitRegEx) || _emptyArray;
      lastWordText = words[words.length - 1];
      endsWithSpace = wordDelimIsNotSpace ? lastWordText.slice(-1) === " " : !lastWordText;
      lastWordText || words.pop();
      lastBounds = elementBounds;
      startsWithSpace = wordDelimIsNotSpace ? words[0].charAt(0) === " " : !words[0];
      startsWithSpace && _insertNodeBefore(" ", element, curNode);
      words[0] || words.shift();
      _stretchToFitSpecialChars(words, specialCharsRegEx);
      deepSlice && isNested || (curNode.textContent = "");
      for (j = 1; j <= words.length; j++) {
        wordText = words[j - 1];
        if (!reduceWhiteSpace && isPreformatted && wordText.charAt(0) === "\n") {
          (_a = curNode.previousSibling) == null ? void 0 : _a.remove();
          _insertNodeBefore(document.createElement("br"), element, curNode);
          wordText = wordText.slice(1);
        }
        if (!reduceWhiteSpace && wordText === "") {
          _insertNodeBefore(wordDelimString, element, curNode);
        } else if (wordText === " ") {
          element.insertBefore(document.createTextNode(" "), curNode);
        } else {
          wordDelimIsNotSpace && wordText.charAt(0) === " " && _insertNodeBefore(" ", element, curNode);
          if (ignoredPreviousSibling && j === 1 && !startsWithSpace && wordsCollection.indexOf(ignoredPreviousSibling.parentNode) > -1) {
            curWordEl = wordsCollection[wordsCollection.length - 1];
            curWordEl.appendChild(document.createTextNode(charWrapper ? "" : wordText));
          } else {
            curWordEl = wordWrapper(charWrapper ? "" : wordText);
            _insertNodeBefore(curWordEl, element, curNode);
            ignoredPreviousSibling && j === 1 && !startsWithSpace && curWordEl.insertBefore(ignoredPreviousSibling, curWordEl.firstChild);
          }
          if (charWrapper) {
            curWordChars = _charSegmenter ? _stretchToFitSpecialChars([..._charSegmenter.segment(wordText)].map((s) => s.segment), specialCharsRegEx) : wordText.match(charSplitRegEx) || _emptyArray;
            for (k = 0; k < curWordChars.length; k++) {
              curWordEl.appendChild(curWordChars[k] === " " ? document.createTextNode(" ") : charWrapper(curWordChars[k]));
            }
          }
          if (deepSlice && isNested) {
            curTextContent = curNode.textContent = curTextContent.substring(wordText.length + 1, curTextContent.length);
            bounds = curWordEl.getBoundingClientRect();
            if (bounds.top > lastBounds.top && bounds.left <= lastBounds.left) {
              clonedNode = element.cloneNode();
              curSubNode = element.childNodes[0];
              while (curSubNode && curSubNode !== curWordEl) {
                tempSubNode = curSubNode;
                curSubNode = curSubNode.nextSibling;
                clonedNode.appendChild(tempSubNode);
              }
              element.parentNode.insertBefore(clonedNode, element);
              prepForCharsOnly && _disallowInline(clonedNode);
            }
            lastBounds = bounds;
          }
          if (j < words.length || endsWithSpace) {
            _insertNodeBefore(j >= words.length ? " " : wordDelimIsNotSpace && wordText.slice(-1) === " " ? " " + wordDelimString : wordDelimString, element, curNode);
          }
        }
      }
      element.removeChild(curNode);
      ignoredPreviousSibling = 0;
    } else if (curNode.nodeType === 1) {
      if (ignore && ignore.indexOf(curNode) > -1) {
        wordsCollection.indexOf(curNode.previousSibling) > -1 && wordsCollection[wordsCollection.length - 1].appendChild(curNode);
        ignoredPreviousSibling = curNode;
      } else {
        _splitWordsAndCharsRecursively(curNode, config, wordWrapper, charWrapper, prepForCharsOnly, deepSlice, ignore, charSplitRegEx, specialCharsRegEx, true);
        ignoredPreviousSibling = 0;
      }
      prepForCharsOnly && _disallowInline(curNode);
    }
  }
};
const _SplitText = class _SplitText2 {
  constructor(elements, config) {
    this.isSplit = false;
    _initIfNecessary();
    this.elements = _elements(elements);
    this.chars = [];
    this.words = [];
    this.lines = [];
    this.masks = [];
    this.vars = config;
    this.elements.forEach((el) => {
      var _a;
      config.overwrite !== false && ((_a = el[_splitProp]) == null ? void 0 : _a._data.orig.filter(({ element }) => element === el).forEach(_revertOriginal));
      el[_splitProp] = this;
    });
    this._split = () => this.isSplit && this.split(this.vars);
    let orig = [], timerId, checkWidths = () => {
      let i = orig.length, o;
      while (i--) {
        o = orig[i];
        let w = o.element.offsetWidth;
        if (w !== o.width) {
          o.width = w;
          this._split();
          return;
        }
      }
    };
    this._data = { orig, obs: typeof ResizeObserver !== "undefined" && new ResizeObserver(() => {
      clearTimeout(timerId);
      timerId = setTimeout(checkWidths, 200);
    }) };
    _context(this);
    this.split(config);
  }
  split(config) {
    (this._ctx || _defaultContext).add(() => {
      this.isSplit && this.revert();
      this.vars = config = config || this.vars || {};
      let { type = "chars,words,lines", aria = "auto", deepSlice = true, smartWrap, onSplit, autoSplit = false, specialChars, mask } = this.vars, splitLines = type.indexOf("lines") > -1, splitCharacters = type.indexOf("chars") > -1, splitWords = type.indexOf("words") > -1, onlySplitCharacters = splitCharacters && !splitWords && !splitLines, specialCharsRegEx = specialChars && ("push" in specialChars ? new RegExp("(?:" + specialChars.join("|") + ")", "gu") : specialChars), finalCharSplitRegEx = specialCharsRegEx ? new RegExp(specialCharsRegEx.source + "|" + _emojiSafeRegEx.source, "gu") : _emojiSafeRegEx, ignore = !!config.ignore && _elements(config.ignore), { orig, animTime, obs } = this._data, onSplitResult;
      if (splitCharacters || splitWords || splitLines) {
        this.elements.forEach((element, index) => {
          orig[index] = {
            element,
            html: element.innerHTML,
            ariaL: element.getAttribute("aria-label"),
            ariaH: element.getAttribute("aria-hidden")
          };
          aria === "auto" ? element.setAttribute("aria-label", (element.textContent || "").trim()) : aria === "hidden" && element.setAttribute("aria-hidden", "true");
          let chars = [], words = [], lines = [], charWrapper = splitCharacters ? _getWrapper("char", config, chars) : null, wordWrapper = _getWrapper("word", config, words), i, curWord, smartWrapSpan, nextSibling;
          _splitWordsAndCharsRecursively(element, config, wordWrapper, charWrapper, onlySplitCharacters, deepSlice && (splitLines || onlySplitCharacters), ignore, finalCharSplitRegEx, specialCharsRegEx, false);
          if (splitLines) {
            let nodes = _toArray(element.childNodes), wrapLine = _getLineWrapper(element, nodes, config, lines), curNode, toRemove = [], lineStartIndex = 0, allBounds = nodes.map((n) => n.nodeType === 1 ? n.getBoundingClientRect() : _emptyBounds), lastBounds = _emptyBounds, curBounds;
            for (i = 0; i < nodes.length; i++) {
              curNode = nodes[i];
              if (curNode.nodeType === 1) {
                if (curNode.nodeName === "BR") {
                  if (!i || nodes[i - 1].nodeName !== "BR") {
                    toRemove.push(curNode);
                    wrapLine(lineStartIndex, i + 1);
                  }
                  lineStartIndex = i + 1;
                  lastBounds = _findNextValidBounds(allBounds, i);
                } else {
                  curBounds = allBounds[i];
                  if (i && curBounds.top > lastBounds.top && curBounds.left < lastBounds.left + lastBounds.width - 1) {
                    wrapLine(lineStartIndex, i);
                    lineStartIndex = i;
                  }
                  lastBounds = curBounds;
                }
              }
            }
            lineStartIndex < i && wrapLine(lineStartIndex, i);
            toRemove.forEach((el) => {
              var _a;
              return (_a = el.parentNode) == null ? void 0 : _a.removeChild(el);
            });
          }
          if (!splitWords) {
            for (i = 0; i < words.length; i++) {
              curWord = words[i];
              if (splitCharacters || !curWord.nextSibling || curWord.nextSibling.nodeType !== 3) {
                if (smartWrap && !splitLines) {
                  smartWrapSpan = document.createElement("span");
                  smartWrapSpan.style.whiteSpace = "nowrap";
                  while (curWord.firstChild) {
                    smartWrapSpan.appendChild(curWord.firstChild);
                  }
                  curWord.replaceWith(smartWrapSpan);
                } else {
                  curWord.replaceWith(...curWord.childNodes);
                }
              } else {
                nextSibling = curWord.nextSibling;
                if (nextSibling && nextSibling.nodeType === 3) {
                  nextSibling.textContent = (curWord.textContent || "") + (nextSibling.textContent || "");
                  curWord.remove();
                }
              }
            }
            words.length = 0;
            element.normalize();
          }
          this.lines.push(...lines);
          this.words.push(...words);
          this.chars.push(...chars);
        });
        mask && this[mask] && this.masks.push(...this[mask].map((el) => {
          let maskEl = el.cloneNode();
          el.replaceWith(maskEl);
          maskEl.appendChild(el);
          el.className && (maskEl.className = el.className.trim().split(" ").map((s) => s + "-mask").join(" "));
          maskEl.style.overflow = "clip";
          return maskEl;
        }));
      }
      this.isSplit = true;
      _fonts && splitLines && autoSplit && _fonts.addEventListener("loadingdone", this._split);
      if ((onSplitResult = onSplit && onSplit(this)) && onSplitResult.totalTime) {
        this._data.anim = animTime ? onSplitResult.totalTime(animTime) : onSplitResult;
      }
      splitLines && autoSplit && this.elements.forEach((element, index) => {
        orig[index].width = element.offsetWidth;
        obs && obs.observe(element);
      });
    });
    return this;
  }
  kill() {
    let { obs } = this._data;
    obs && obs.disconnect();
    _fonts == null ? void 0 : _fonts.removeEventListener("loadingdone", this._split);
  }
  revert() {
    var _a, _b;
    if (this.isSplit) {
      let { orig, anim } = this._data;
      this.kill();
      orig.forEach(_revertOriginal);
      this.chars.length = this.words.length = this.lines.length = orig.length = this.masks.length = 0;
      this.isSplit = false;
      if (anim) {
        this._data.animTime = anim.totalTime();
        anim.revert();
      }
      (_b = (_a = this.vars).onRevert) == null ? void 0 : _b.call(_a, this);
    }
    return this;
  }
  static create(elements, config) {
    return new _SplitText2(elements, config);
  }
  static register(core) {
    gsap = gsap || core || window.gsap;
    if (gsap) {
      _toArray = gsap.utils.toArray;
      _context = gsap.core.context || _context;
    }
    if (!_coreInitted && window.innerWidth > 0) {
      _fonts = document.fonts;
      _coreInitted = true;
    }
  }
};
_SplitText.version = "3.15.0";
let SplitText = _SplitText;
gsapWithCSS.registerPlugin(SplitText);
const MESSAGES = {
  state: "The sign-in link expired or didn't come from this page. Please try again.",
  cancelled: "GitHub authorization was cancelled.",
  not_allowed: "Your GitHub account isn't on this SARVAS's list of allowed users. Ask an administrator to add your GitHub username."
};
const FEATURES = [
  [MessageSquareCode, "Ask the codebase", "Plain-English answers that link to the exact lines they came from."],
  [WandSparkles, "Request a change", "Describe what you want. The agent plans it and asks when something is unclear."],
  [ShieldCheck, "Sandboxed and checked", "Every change is made in an isolated container and run against your repository's checks."],
  [GitPullRequest, "Always a pull request", "Nothing touches your default branch. An engineer reviews and merges."]
];
function ConnectButton({ className = "btn-primary" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/auth/login", className: `btn ${className} h-11 px-6`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GitHubMark, {}),
    " Connect GitHub ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4", "aria-hidden": "true" })
  ] });
}
function DemoButton() {
  const [busy, setBusy] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const start = () => {
    setBusy(true);
    api.demo().then(() => window.location.assign("/"), (e) => {
      setError(e.message);
      setBusy(false);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: start, disabled: busy, className: "btn h-11 px-6", children: busy ? "Starting demo…" : "Try the demo, no GitHub needed" }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { role: "alert", className: "text-sm text-bad", children: error })
  ] });
}
function Connect({ authError, installUrl, demo }) {
  const hero = reactExports.useRef(null);
  const video = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (reducedMotion()) v.controls = true;
    else v.play().catch(() => {
    });
  }, []);
  reactExports.useLayoutEffect(() => {
    if (reducedMotion()) return void 0;
    const ctx = gsapWithCSS.context(() => {
      const split = SplitText.create("[data-split]", { type: "lines", mask: "lines", aria: "auto" });
      gsapWithCSS.timeline({ defaults: { ease: "power4.out" } }).from(split.lines, { yPercent: 110, duration: 1.1, stagger: 0.09 }).from("[data-fade]", { autoAlpha: 0, y: 18, duration: 0.8, stagger: 0.08 }, "-=0.7");
      gsapWithCSS.to("[data-float]", { y: -14, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 });
    }, hero);
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-dvh bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mx-auto flex h-16 max-w-[1200px] items-center gap-2 px-6 font-medium text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
      " SARVAS",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/auth/login", className: "btn btn-ghost hidden sm:inline-flex", children: "Sign in" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref: hero, className: "backdrop-grid mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { "data-split": true, className: "display text-[2.5rem] leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[4.25rem]", children: "Your repositories, with you in charge." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { "data-fade": true, className: "mt-6 max-w-xl text-lg text-body", children: "Describe a change; SARVAS plans, builds, tests and opens a pull request." }),
        authError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { "data-fade": true, role: "alert", className: "mt-6 rounded-md border border-bad/30 bg-bad/10 px-3.5 py-2.5 text-sm text-bad", children: MESSAGES[authError] ?? "Sign-in failed." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-fade": true, className: "mt-8 flex flex-wrap items-center gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectButton, {}),
          demo && /* @__PURE__ */ jsxRuntimeExports.jsx(DemoButton, {}),
          installUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: installUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "btn h-11 px-6",
              title: "Opens GitHub, where you choose which repositories SARVAS can access",
              children: [
                "Install the GitHub App ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-4", "aria-hidden": "true" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "size-4", "aria-hidden": "true" }),
            " Never asks for your password"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-fade": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-float": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "video",
        {
          ref: video,
          src: "/videos/sarvas-demo.mp4",
          muted: true,
          loop: true,
          playsInline: true,
          "aria-label": "SARVAS demo: from a request to a pull request",
          className: "aspect-video w-full rounded-xl border bg-dark object-cover shadow-2xl transition-[scale,box-shadow] duration-500 hover:scale-[1.03] hover:shadow-primary/30"
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1200px] px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display max-w-2xl text-4xl leading-[1.08] tracking-[-0.04em] sm:text-5xl", children: "Every change is planned, checked and reviewed." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { onScroll: true, className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: FEATURES.map(([Icon, title, text]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-background p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5 text-primary", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg font-medium text-foreground", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-body", children: text })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { onScroll: true, className: "mx-auto max-w-[1200px] px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card backdrop-grid px-8 py-14 sm:px-16 sm:py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display max-w-2xl text-3xl leading-[1.15] tracking-[-0.03em] sm:text-4xl", children: "Acts with your GitHub permissions, only where the app is installed." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl", children: "You approve the plan and the diff. An engineer merges the pull request. The agent can’t approve or merge its own work." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectButton, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Connect as default
};
