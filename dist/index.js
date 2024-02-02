function Cg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
    r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function r(o) {
    if (o.ep)
      return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Ru(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function bg(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Ls = { exports: {} }, uo = {}, Fs = { exports: {} }, ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qc;
function kg() {
  if (qc)
    return ne;
  qc = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), d = Symbol.iterator;
  function f(b) {
    return b === null || typeof b != "object" ? null : (b = d && b[d] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var g = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, x = Object.assign, v = {};
  function R(b, I, U) {
    this.props = b, this.context = I, this.refs = v, this.updater = U || g;
  }
  R.prototype.isReactComponent = {}, R.prototype.setState = function(b, I) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, I, "setState");
  }, R.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function h() {
  }
  h.prototype = R.prototype;
  function p(b, I, U) {
    this.props = b, this.context = I, this.refs = v, this.updater = U || g;
  }
  var m = p.prototype = new h();
  m.constructor = p, x(m, R.prototype), m.isPureReactComponent = !0;
  var y = Array.isArray, w = Object.prototype.hasOwnProperty, E = { current: null }, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(b, I, U) {
    var G, W = {}, Y = null, Q = null;
    if (I != null)
      for (G in I.ref !== void 0 && (Q = I.ref), I.key !== void 0 && (Y = "" + I.key), I)
        w.call(I, G) && !k.hasOwnProperty(G) && (W[G] = I[G]);
    var ee = arguments.length - 2;
    if (ee === 1)
      W.children = U;
    else if (1 < ee) {
      for (var te = Array(ee), ie = 0; ie < ee; ie++)
        te[ie] = arguments[ie + 2];
      W.children = te;
    }
    if (b && b.defaultProps)
      for (G in ee = b.defaultProps, ee)
        W[G] === void 0 && (W[G] = ee[G]);
    return { $$typeof: e, type: b, key: Y, ref: Q, props: W, _owner: E.current };
  }
  function M(b, I) {
    return { $$typeof: e, type: b.type, key: I, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function T(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }
  function j(b) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(U) {
      return I[U];
    });
  }
  var B = /\/+/g;
  function F(b, I) {
    return typeof b == "object" && b !== null && b.key != null ? j("" + b.key) : I.toString(36);
  }
  function z(b, I, U, G, W) {
    var Y = typeof b;
    (Y === "undefined" || Y === "boolean") && (b = null);
    var Q = !1;
    if (b === null)
      Q = !0;
    else
      switch (Y) {
        case "string":
        case "number":
          Q = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case e:
            case t:
              Q = !0;
          }
      }
    if (Q)
      return Q = b, W = W(Q), b = G === "" ? "." + F(Q, 0) : G, y(W) ? (U = "", b != null && (U = b.replace(B, "$&/") + "/"), z(W, I, U, "", function(ie) {
        return ie;
      })) : W != null && (T(W) && (W = M(W, U + (!W.key || Q && Q.key === W.key ? "" : ("" + W.key).replace(B, "$&/") + "/") + b)), I.push(W)), 1;
    if (Q = 0, G = G === "" ? "." : G + ":", y(b))
      for (var ee = 0; ee < b.length; ee++) {
        Y = b[ee];
        var te = G + F(Y, ee);
        Q += z(Y, I, U, te, W);
      }
    else if (te = f(b), typeof te == "function")
      for (b = te.call(b), ee = 0; !(Y = b.next()).done; )
        Y = Y.value, te = G + F(Y, ee++), Q += z(Y, I, U, te, W);
    else if (Y === "object")
      throw I = String(b), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return Q;
  }
  function L(b, I, U) {
    if (b == null)
      return b;
    var G = [], W = 0;
    return z(b, G, "", "", function(Y) {
      return I.call(U, Y, W++);
    }), G;
  }
  function D(b) {
    if (b._status === -1) {
      var I = b._result;
      I = I(), I.then(function(U) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = U);
      }, function(U) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = U);
      }), b._status === -1 && (b._status = 0, b._result = I);
    }
    if (b._status === 1)
      return b._result.default;
    throw b._result;
  }
  var A = { current: null }, $ = { transition: null }, N = { ReactCurrentDispatcher: A, ReactCurrentBatchConfig: $, ReactCurrentOwner: E };
  return ne.Children = { map: L, forEach: function(b, I, U) {
    L(b, function() {
      I.apply(this, arguments);
    }, U);
  }, count: function(b) {
    var I = 0;
    return L(b, function() {
      I++;
    }), I;
  }, toArray: function(b) {
    return L(b, function(I) {
      return I;
    }) || [];
  }, only: function(b) {
    if (!T(b))
      throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, ne.Component = R, ne.Fragment = n, ne.Profiler = o, ne.PureComponent = p, ne.StrictMode = r, ne.Suspense = a, ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N, ne.cloneElement = function(b, I, U) {
    if (b == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var G = x({}, b.props), W = b.key, Y = b.ref, Q = b._owner;
    if (I != null) {
      if (I.ref !== void 0 && (Y = I.ref, Q = E.current), I.key !== void 0 && (W = "" + I.key), b.type && b.type.defaultProps)
        var ee = b.type.defaultProps;
      for (te in I)
        w.call(I, te) && !k.hasOwnProperty(te) && (G[te] = I[te] === void 0 && ee !== void 0 ? ee[te] : I[te]);
    }
    var te = arguments.length - 2;
    if (te === 1)
      G.children = U;
    else if (1 < te) {
      ee = Array(te);
      for (var ie = 0; ie < te; ie++)
        ee[ie] = arguments[ie + 2];
      G.children = ee;
    }
    return { $$typeof: e, type: b.type, key: W, ref: Y, props: G, _owner: Q };
  }, ne.createContext = function(b) {
    return b = { $$typeof: l, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: i, _context: b }, b.Consumer = b;
  }, ne.createElement = _, ne.createFactory = function(b) {
    var I = _.bind(null, b);
    return I.type = b, I;
  }, ne.createRef = function() {
    return { current: null };
  }, ne.forwardRef = function(b) {
    return { $$typeof: s, render: b };
  }, ne.isValidElement = T, ne.lazy = function(b) {
    return { $$typeof: c, _payload: { _status: -1, _result: b }, _init: D };
  }, ne.memo = function(b, I) {
    return { $$typeof: u, type: b, compare: I === void 0 ? null : I };
  }, ne.startTransition = function(b) {
    var I = $.transition;
    $.transition = {};
    try {
      b();
    } finally {
      $.transition = I;
    }
  }, ne.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, ne.useCallback = function(b, I) {
    return A.current.useCallback(b, I);
  }, ne.useContext = function(b) {
    return A.current.useContext(b);
  }, ne.useDebugValue = function() {
  }, ne.useDeferredValue = function(b) {
    return A.current.useDeferredValue(b);
  }, ne.useEffect = function(b, I) {
    return A.current.useEffect(b, I);
  }, ne.useId = function() {
    return A.current.useId();
  }, ne.useImperativeHandle = function(b, I, U) {
    return A.current.useImperativeHandle(b, I, U);
  }, ne.useInsertionEffect = function(b, I) {
    return A.current.useInsertionEffect(b, I);
  }, ne.useLayoutEffect = function(b, I) {
    return A.current.useLayoutEffect(b, I);
  }, ne.useMemo = function(b, I) {
    return A.current.useMemo(b, I);
  }, ne.useReducer = function(b, I, U) {
    return A.current.useReducer(b, I, U);
  }, ne.useRef = function(b) {
    return A.current.useRef(b);
  }, ne.useState = function(b) {
    return A.current.useState(b);
  }, ne.useSyncExternalStore = function(b, I, U) {
    return A.current.useSyncExternalStore(b, I, U);
  }, ne.useTransition = function() {
    return A.current.useTransition();
  }, ne.version = "18.2.0", ne;
}
var Zc;
function Pu() {
  return Zc || (Zc = 1, Fs.exports = kg()), Fs.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jc;
function wg() {
  if (Jc)
    return uo;
  Jc = 1;
  var e = Pu(), t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(s, a, u) {
    var c, d = {}, f = null, g = null;
    u !== void 0 && (f = "" + u), a.key !== void 0 && (f = "" + a.key), a.ref !== void 0 && (g = a.ref);
    for (c in a)
      r.call(a, c) && !i.hasOwnProperty(c) && (d[c] = a[c]);
    if (s && s.defaultProps)
      for (c in a = s.defaultProps, a)
        d[c] === void 0 && (d[c] = a[c]);
    return { $$typeof: t, type: s, key: f, ref: g, props: d, _owner: o.current };
  }
  return uo.Fragment = n, uo.jsx = l, uo.jsxs = l, uo;
}
var ed;
function Al() {
  return ed || (ed = 1, Ls.exports = wg()), Ls.exports;
}
var P = Al();
function Eg(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Rg(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Pg = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Rg(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Eg(o);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Ye = "-ms-", il = "-moz-", ce = "-webkit-", cp = "comm", Tu = "rule", $u = "decl", Tg = "@import", dp = "@keyframes", $g = "@layer", fp = Math.abs, jl = String.fromCharCode, _g = Object.assign;
function Ig(e, t) {
  return Ve(e, 0) ^ 45 ? (((t << 2 ^ Ve(e, 0)) << 2 ^ Ve(e, 1)) << 2 ^ Ve(e, 2)) << 2 ^ Ve(e, 3) : 0;
}
function pp(e) {
  return e.trim();
}
function Og(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function de(e, t, n) {
  return e.replace(t, n);
}
function Sa(e, t, n) {
  return e.indexOf(t, n);
}
function Ve(e, t) {
  return e.charCodeAt(t) | 0;
}
function Vo(e, t, n) {
  return e.slice(t, n);
}
function jt(e) {
  return e.length;
}
function mp(e) {
  return e.length;
}
function Ci(e, t) {
  return t.push(e), e;
}
function Mg(e, t) {
  return e.map(t).join("");
}
var Bl = 1, Hr = 1, hp = 0, dt = 0, ze = 0, ro = "";
function Dl(e, t, n, r, o, i, l, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Bl, column: Hr, length: l, return: "", siblings: s };
}
function co(e, t) {
  return _g(Dl("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ng() {
  return ze;
}
function zg() {
  return ze = dt > 0 ? Ve(ro, --dt) : 0, Hr--, ze === 10 && (Hr = 1, Bl--), ze;
}
function ht() {
  return ze = dt < hp ? Ve(ro, dt++) : 0, Hr++, ze === 10 && (Hr = 1, Bl++), ze;
}
function Xt() {
  return Ve(ro, dt);
}
function Hi() {
  return dt;
}
function pi(e, t) {
  return Vo(ro, e, t);
}
function Ho(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function gp(e) {
  return Bl = Hr = 1, hp = jt(ro = e), dt = 0, [];
}
function vp(e) {
  return ro = "", e;
}
function Ki(e) {
  return pp(pi(dt - 1, Ca(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Lg(e) {
  for (; (ze = Xt()) && ze < 33; )
    ht();
  return Ho(e) > 2 || Ho(ze) > 3 ? "" : " ";
}
function Fg(e, t) {
  for (; --t && ht() && !(ze < 48 || ze > 102 || ze > 57 && ze < 65 || ze > 70 && ze < 97); )
    ;
  return pi(e, Hi() + (t < 6 && Xt() == 32 && ht() == 32));
}
function Ca(e) {
  for (; ht(); )
    switch (ze) {
      case e:
        return dt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ca(ze);
        break;
      case 40:
        e === 41 && Ca(e);
        break;
      case 92:
        ht();
        break;
    }
  return dt;
}
function Ag(e, t) {
  for (; ht() && e + ze !== 57; )
    if (e + ze === 84 && Xt() === 47)
      break;
  return "/*" + pi(t, dt - 1) + "*" + jl(e === 47 ? e : ht());
}
function jg(e) {
  for (; !Ho(Xt()); )
    ht();
  return pi(e, dt);
}
function Bg(e) {
  return vp(Gi("", null, null, null, [""], e = gp(e), 0, [0], e));
}
function Gi(e, t, n, r, o, i, l, s, a) {
  for (var u = 0, c = 0, d = l, f = 0, g = 0, x = 0, v = 1, R = 1, h = 1, p = 0, m = "", y = o, w = i, E = r, k = m; R; )
    switch (x = p, p = ht()) {
      case 40:
        if (x != 108 && Ve(k, d - 1) == 58) {
          Sa(k += de(Ki(p), "&", "&\f"), "&\f", fp(u ? s[u - 1] : 0)) != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Ki(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Lg(x);
        break;
      case 92:
        k += Fg(Hi() - 1, 7);
        continue;
      case 47:
        switch (Xt()) {
          case 42:
          case 47:
            Ci(Dg(Ag(ht(), Hi()), t, n, a), a);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * v:
        s[u++] = jt(k) * h;
      case 125 * v:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            R = 0;
          case 59 + c:
            h == -1 && (k = de(k, /\f/g, "")), g > 0 && jt(k) - d && Ci(g > 32 ? nd(k + ";", r, n, d - 1, a) : nd(de(k, " ", "") + ";", r, n, d - 2, a), a);
            break;
          case 59:
            k += ";";
          default:
            if (Ci(E = td(k, t, n, u, c, o, s, m, y = [], w = [], d, i), i), p === 123)
              if (c === 0)
                Gi(k, t, E, E, y, i, d, s, w);
              else
                switch (f === 99 && Ve(k, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Gi(e, E, E, r && Ci(td(e, E, E, 0, 0, o, s, m, o, y = [], d, w), w), o, w, d, s, r ? y : w);
                    break;
                  default:
                    Gi(k, E, E, E, [""], w, 0, s, w);
                }
        }
        u = c = g = 0, v = h = 1, m = k = "", d = l;
        break;
      case 58:
        d = 1 + jt(k), g = x;
      default:
        if (v < 1) {
          if (p == 123)
            --v;
          else if (p == 125 && v++ == 0 && zg() == 125)
            continue;
        }
        switch (k += jl(p), p * v) {
          case 38:
            h = c > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            s[u++] = (jt(k) - 1) * h, h = 1;
            break;
          case 64:
            Xt() === 45 && (k += Ki(ht())), f = Xt(), c = d = jt(m = k += jg(Hi())), p++;
            break;
          case 45:
            x === 45 && jt(k) == 2 && (v = 0);
        }
    }
  return i;
}
function td(e, t, n, r, o, i, l, s, a, u, c, d) {
  for (var f = o - 1, g = o === 0 ? i : [""], x = mp(g), v = 0, R = 0, h = 0; v < r; ++v)
    for (var p = 0, m = Vo(e, f + 1, f = fp(R = l[v])), y = e; p < x; ++p)
      (y = pp(R > 0 ? g[p] + " " + m : de(m, /&\f/g, g[p]))) && (a[h++] = y);
  return Dl(e, t, n, o === 0 ? Tu : s, a, u, c, d);
}
function Dg(e, t, n, r) {
  return Dl(e, t, n, cp, jl(Ng()), Vo(e, 2, -2), 0, r);
}
function nd(e, t, n, r, o) {
  return Dl(e, t, n, $u, Vo(e, 0, r), Vo(e, r + 1, -1), r, o);
}
function Fr(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Ug(e, t, n, r) {
  switch (e.type) {
    case $g:
      if (e.children.length)
        break;
    case Tg:
    case $u:
      return e.return = e.return || e.value;
    case cp:
      return "";
    case dp:
      return e.return = e.value + "{" + Fr(e.children, r) + "}";
    case Tu:
      if (!jt(e.value = e.props.join(",")))
        return "";
  }
  return jt(n = Fr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Wg(e) {
  var t = mp(e);
  return function(n, r, o, i) {
    for (var l = "", s = 0; s < t; s++)
      l += e[s](n, r, o, i) || "";
    return l;
  };
}
function Vg(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function yp(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Hg = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Xt(), o === 38 && i === 12 && (n[r] = 1), !Ho(i); )
    ht();
  return pi(t, dt);
}, Kg = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ho(o)) {
      case 0:
        o === 38 && Xt() === 12 && (n[r] = 1), t[r] += Hg(dt - 1, n, r);
        break;
      case 2:
        t[r] += Ki(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Xt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += jl(o);
    }
  while (o = ht());
  return t;
}, Gg = function(t, n) {
  return vp(Kg(gp(t), n));
}, rd = /* @__PURE__ */ new WeakMap(), Qg = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !rd.get(r)) && !o) {
      rd.set(t, !0);
      for (var i = [], l = Gg(n, i), s = r.props, a = 0, u = 0; a < l.length; a++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[a] ? l[a].replace(/&\f/g, s[c]) : s[c] + " " + l[a];
    }
  }
}, Xg = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function xp(e, t) {
  switch (Ig(e, t)) {
    case 5103:
      return ce + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ce + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ce + e + il + e + Ye + e + e;
    case 6828:
    case 4268:
      return ce + e + Ye + e + e;
    case 6165:
      return ce + e + Ye + "flex-" + e + e;
    case 5187:
      return ce + e + de(e, /(\w+).+(:[^]+)/, ce + "box-$1$2" + Ye + "flex-$1$2") + e;
    case 5443:
      return ce + e + Ye + "flex-item-" + de(e, /flex-|-self/, "") + e;
    case 4675:
      return ce + e + Ye + "flex-line-pack" + de(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ce + e + Ye + de(e, "shrink", "negative") + e;
    case 5292:
      return ce + e + Ye + de(e, "basis", "preferred-size") + e;
    case 6060:
      return ce + "box-" + de(e, "-grow", "") + ce + e + Ye + de(e, "grow", "positive") + e;
    case 4554:
      return ce + de(e, /([^-])(transform)/g, "$1" + ce + "$2") + e;
    case 6187:
      return de(de(de(e, /(zoom-|grab)/, ce + "$1"), /(image-set)/, ce + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return de(e, /(image-set\([^]*)/, ce + "$1$`$1");
    case 4968:
      return de(de(e, /(.+:)(flex-)?(.*)/, ce + "box-pack:$3" + Ye + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ce + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return de(e, /(.+)-inline(.+)/, ce + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (jt(e) - 1 - t > 6)
        switch (Ve(e, t + 1)) {
          case 109:
            if (Ve(e, t + 4) !== 45)
              break;
          case 102:
            return de(e, /(.+:)(.+)-([^]+)/, "$1" + ce + "$2-$3$1" + il + (Ve(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Sa(e, "stretch") ? xp(de(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Ve(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Ve(e, jt(e) - 3 - (~Sa(e, "!important") && 10))) {
        case 107:
          return de(e, ":", ":" + ce) + e;
        case 101:
          return de(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ce + (Ve(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ce + "$2$3$1" + Ye + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ve(e, t + 11)) {
        case 114:
          return ce + e + Ye + de(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ce + e + Ye + de(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ce + e + Ye + de(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ce + e + Ye + e + e;
  }
  return e;
}
var Yg = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case $u:
        t.return = xp(t.value, t.length);
        break;
      case dp:
        return Fr([co(t, {
          value: de(t.value, "@", "@" + ce)
        })], o);
      case Tu:
        if (t.length)
          return Mg(t.props, function(i) {
            switch (Og(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Fr([co(t, {
                  props: [de(i, /:(read-\w+)/, ":" + il + "$1")]
                })], o);
              case "::placeholder":
                return Fr([co(t, {
                  props: [de(i, /:(plac\w+)/, ":" + ce + "input-$1")]
                }), co(t, {
                  props: [de(i, /:(plac\w+)/, ":" + il + "$1")]
                }), co(t, {
                  props: [de(i, /:(plac\w+)/, Ye + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, qg = [Yg], Sp = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(v) {
      var R = v.getAttribute("data-emotion");
      R.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || qg, i = {}, l, s = [];
  l = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(v) {
      for (var R = v.getAttribute("data-emotion").split(" "), h = 1; h < R.length; h++)
        i[R[h]] = !0;
      s.push(v);
    }
  );
  var a, u = [Qg, Xg];
  {
    var c, d = [Ug, Vg(function(v) {
      c.insert(v);
    })], f = Wg(u.concat(o, d)), g = function(R) {
      return Fr(Bg(R), f);
    };
    a = function(R, h, p, m) {
      c = p, g(R ? R + "{" + h.styles + "}" : h.styles), m && (x.inserted[h.name] = !0);
    };
  }
  var x = {
    key: n,
    sheet: new Pg({
      key: n,
      container: l,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: a
  };
  return x.sheet.hydrate(s), x;
}, C = Pu();
const Pt = /* @__PURE__ */ Ru(C), ba = /* @__PURE__ */ Cg({
  __proto__: null,
  default: Pt
}, [C]);
function S() {
  return S = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, S.apply(this, arguments);
}
var Cp = { exports: {} }, me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _u = Symbol.for("react.element"), Iu = Symbol.for("react.portal"), Ul = Symbol.for("react.fragment"), Wl = Symbol.for("react.strict_mode"), Vl = Symbol.for("react.profiler"), Hl = Symbol.for("react.provider"), Kl = Symbol.for("react.context"), Zg = Symbol.for("react.server_context"), Gl = Symbol.for("react.forward_ref"), Ql = Symbol.for("react.suspense"), Xl = Symbol.for("react.suspense_list"), Yl = Symbol.for("react.memo"), ql = Symbol.for("react.lazy"), Jg = Symbol.for("react.offscreen"), bp;
bp = Symbol.for("react.module.reference");
function Ot(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case _u:
        switch (e = e.type, e) {
          case Ul:
          case Vl:
          case Wl:
          case Ql:
          case Xl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Zg:
              case Kl:
              case Gl:
              case ql:
              case Yl:
              case Hl:
                return e;
              default:
                return t;
            }
        }
      case Iu:
        return t;
    }
  }
}
me.ContextConsumer = Kl;
me.ContextProvider = Hl;
me.Element = _u;
me.ForwardRef = Gl;
me.Fragment = Ul;
me.Lazy = ql;
me.Memo = Yl;
me.Portal = Iu;
me.Profiler = Vl;
me.StrictMode = Wl;
me.Suspense = Ql;
me.SuspenseList = Xl;
me.isAsyncMode = function() {
  return !1;
};
me.isConcurrentMode = function() {
  return !1;
};
me.isContextConsumer = function(e) {
  return Ot(e) === Kl;
};
me.isContextProvider = function(e) {
  return Ot(e) === Hl;
};
me.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === _u;
};
me.isForwardRef = function(e) {
  return Ot(e) === Gl;
};
me.isFragment = function(e) {
  return Ot(e) === Ul;
};
me.isLazy = function(e) {
  return Ot(e) === ql;
};
me.isMemo = function(e) {
  return Ot(e) === Yl;
};
me.isPortal = function(e) {
  return Ot(e) === Iu;
};
me.isProfiler = function(e) {
  return Ot(e) === Vl;
};
me.isStrictMode = function(e) {
  return Ot(e) === Wl;
};
me.isSuspense = function(e) {
  return Ot(e) === Ql;
};
me.isSuspenseList = function(e) {
  return Ot(e) === Xl;
};
me.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ul || e === Vl || e === Wl || e === Ql || e === Xl || e === Jg || typeof e == "object" && e !== null && (e.$$typeof === ql || e.$$typeof === Yl || e.$$typeof === Hl || e.$$typeof === Kl || e.$$typeof === Gl || e.$$typeof === bp || e.getModuleId !== void 0);
};
me.typeOf = Ot;
Cp.exports = me;
var ev = Cp.exports, kp = ev, tv = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, nv = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, wp = {};
wp[kp.ForwardRef] = tv;
wp[kp.Memo] = nv;
var rv = !0;
function ov(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var Ep = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  rv === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Rp = function(t, n, r) {
  Ep(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function iv(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var lv = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, sv = /[A-Z]|^ms/g, av = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Pp = function(t) {
  return t.charCodeAt(1) === 45;
}, od = function(t) {
  return t != null && typeof t != "boolean";
}, As = /* @__PURE__ */ yp(function(e) {
  return Pp(e) ? e : e.replace(sv, "-$&").toLowerCase();
}), id = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(av, function(r, o, i) {
          return Gt = {
            name: o,
            styles: i,
            next: Gt
          }, o;
        });
  }
  return lv[t] !== 1 && !Pp(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Ko(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return Gt = {
          name: n.name,
          styles: n.styles,
          next: Gt
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            Gt = {
              name: r.name,
              styles: r.styles,
              next: Gt
            }, r = r.next;
        var o = n.styles + ";";
        return o;
      }
      return uv(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Gt, l = n(e);
        return Gt = i, Ko(e, t, l);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function uv(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Ko(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != "object")
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : od(l) && (r += As(i) + ":" + id(i, l) + ";");
      else if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
        for (var s = 0; s < l.length; s++)
          od(l[s]) && (r += As(i) + ":" + id(i, l[s]) + ";");
      else {
        var a = Ko(e, t, l);
        switch (i) {
          case "animation":
          case "animationName": {
            r += As(i) + ":" + a + ";";
            break;
          }
          default:
            r += i + "{" + a + "}";
        }
      }
    }
  return r;
}
var ld = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Gt, Ou = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Gt = void 0;
  var l = t[0];
  l == null || l.raw === void 0 ? (o = !1, i += Ko(r, n, l)) : i += l[0];
  for (var s = 1; s < t.length; s++)
    i += Ko(r, n, t[s]), o && (i += l[s]);
  ld.lastIndex = 0;
  for (var a = "", u; (u = ld.exec(i)) !== null; )
    a += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = iv(i) + a;
  return {
    name: c,
    styles: i,
    next: Gt
  };
}, cv = function(t) {
  return t();
}, Tp = ba.useInsertionEffect ? ba.useInsertionEffect : !1, dv = Tp || cv, sd = Tp || C.useLayoutEffect, $p = /* @__PURE__ */ C.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Sp({
    key: "css"
  }) : null
), fv = $p.Provider, _p = function(t) {
  return /* @__PURE__ */ C.forwardRef(function(n, r) {
    var o = C.useContext($p);
    return t(n, o, r);
  });
}, Zl = /* @__PURE__ */ C.createContext({}), pv = /* @__PURE__ */ _p(function(e, t) {
  var n = e.styles, r = Ou([n], void 0, C.useContext(Zl)), o = C.useRef();
  return sd(function() {
    var i = t.key + "-global", l = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (l.before = t.sheet.tags[0]), a !== null && (s = !0, a.setAttribute("data-emotion", i), l.hydrate([a])), o.current = [l, s], function() {
      l.flush();
    };
  }, [t]), sd(function() {
    var i = o.current, l = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Rp(t, r.next, !0), l.tags.length) {
      var a = l.tags[l.tags.length - 1].nextElementSibling;
      l.before = a, l.flush();
    }
    t.insert("", r, l, !1);
  }, [t, r.name]), null;
});
function mv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Ou(t);
}
var Mu = function() {
  var t = mv.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function Ln(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const or = "$$material";
function H(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var hv = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, gv = /* @__PURE__ */ yp(
  function(e) {
    return hv.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), vv = gv, yv = function(t) {
  return t !== "theme";
}, ad = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? vv : yv;
}, ud = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(l) {
      return t.__emotion_forwardProp(l) && i(l);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, xv = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Ep(n, r, o), dv(function() {
    return Rp(n, r, o);
  }), null;
}, Sv = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, l;
  n !== void 0 && (i = n.label, l = n.target);
  var s = ud(t, n, r), a = s || ad(o), u = !a("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, g = 1; g < f; g++)
        d.push(c[g], c[0][g]);
    }
    var x = _p(function(v, R, h) {
      var p = u && v.as || o, m = "", y = [], w = v;
      if (v.theme == null) {
        w = {};
        for (var E in v)
          w[E] = v[E];
        w.theme = C.useContext(Zl);
      }
      typeof v.className == "string" ? m = ov(R.registered, y, v.className) : v.className != null && (m = v.className + " ");
      var k = Ou(d.concat(y), R.registered, w);
      m += R.key + "-" + k.name, l !== void 0 && (m += " " + l);
      var _ = u && s === void 0 ? ad(p) : a, M = {};
      for (var T in v)
        u && T === "as" || // $FlowFixMe
        _(T) && (M[T] = v[T]);
      return M.className = m, M.ref = h, /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(xv, {
        cache: R,
        serialized: k,
        isStringTag: typeof p == "string"
      }), /* @__PURE__ */ C.createElement(p, M));
    });
    return x.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", x.defaultProps = t.defaultProps, x.__emotion_real = x, x.__emotion_base = o, x.__emotion_styles = d, x.__emotion_forwardProp = s, Object.defineProperty(x, "toString", {
      value: function() {
        return "." + l;
      }
    }), x.withComponent = function(v, R) {
      return e(v, S({}, n, R, {
        shouldForwardProp: ud(x, R, !0)
      })).apply(void 0, d);
    }, x;
  };
}, Cv = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], ka = Sv.bind();
Cv.forEach(function(e) {
  ka[e] = ka(e);
});
function bv(e) {
  return e == null || Object.keys(e).length === 0;
}
function kv(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(bv(o) ? n : o) : t;
  return /* @__PURE__ */ P.jsx(pv, {
    styles: r
  });
}
function Ip(e, t) {
  return ka(e, t);
}
const wv = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
};
function on(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Op(e) {
  if (!on(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Op(e[n]);
  }), t;
}
function lt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? S({}, e) : e;
  return on(e) && on(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (on(t[o]) && o in e && on(e[o]) ? r[o] = lt(e[o], t[o], n) : n.clone ? r[o] = on(t[o]) ? Op(t[o]) : t[o] : r[o] = t[o]);
  }), r;
}
function X(e) {
  if (typeof e != "string")
    throw new Error(Ln(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function wa(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Nu(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function Ev(e, t) {
  return () => null;
}
function _o(e, t) {
  var n, r;
  return /* @__PURE__ */ C.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function st(e) {
  return e && e.ownerDocument || document;
}
function Fn(e) {
  return st(e).defaultView || window;
}
function Rv(e, t) {
  return () => null;
}
function ll(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Zt = typeof window < "u" ? C.useLayoutEffect : C.useEffect;
let cd = 0;
function Pv(e) {
  const [t, n] = C.useState(e), r = e || t;
  return C.useEffect(() => {
    t == null && (cd += 1, n(`mui-${cd}`));
  }, [t]), r;
}
const dd = ba.useId;
function zu(e) {
  if (dd !== void 0) {
    const t = dd();
    return e ?? t;
  }
  return Pv(e);
}
function Tv(e, t, n, r, o) {
  return null;
}
function Ea({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = C.useRef(e !== void 0), [i, l] = C.useState(t), s = o ? e : i, a = C.useCallback((u) => {
    o || l(u);
  }, []);
  return [s, a];
}
function Yn(e) {
  const t = C.useRef(e);
  return Zt(() => {
    t.current = e;
  }), C.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function De(...e) {
  return C.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      ll(n, t);
    });
  }, e);
}
let Jl = !0, Ra = !1, fd;
const $v = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function _v(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && $v[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Iv(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Jl = !0);
}
function js() {
  Jl = !1;
}
function Ov() {
  this.visibilityState === "hidden" && Ra && (Jl = !0);
}
function Mv(e) {
  e.addEventListener("keydown", Iv, !0), e.addEventListener("mousedown", js, !0), e.addEventListener("pointerdown", js, !0), e.addEventListener("touchstart", js, !0), e.addEventListener("visibilitychange", Ov, !0);
}
function Nv(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Jl || _v(t);
}
function Lu() {
  const e = C.useCallback((o) => {
    o != null && Mv(o.ownerDocument);
  }, []), t = C.useRef(!1);
  function n() {
    return t.current ? (Ra = !0, window.clearTimeout(fd), fd = window.setTimeout(() => {
      Ra = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(o) {
    return Nv(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function Mp(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Fu(e, t) {
  const n = S({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = S({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = S({}, i), Object.keys(o).forEach((l) => {
        n[r][l] = Fu(o[l], i[l]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function ae(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      r[o] = e[o].reduce((i, l) => {
        if (l) {
          const s = t(l);
          s !== "" && i.push(s), n && n[l] && i.push(n[l]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
const pd = (e) => e, zv = () => {
  let e = pd;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = pd;
    }
  };
}, Lv = zv(), Au = Lv, Fv = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function se(e, t, n = "Mui") {
  const r = Fv[t];
  return r ? `${n}-${r}` : `${Au.generate(e)}-${t}`;
}
function oe(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = se(e, o, n);
  }), r;
}
function Av(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const jv = ["values", "unit", "step"], Bv = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => S({}, n, {
    [r.key]: r.val
  }), {});
};
function Dv(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5
  } = e, o = H(e, jv), i = Bv(t), l = Object.keys(i);
  function s(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function a(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function u(f, g) {
    const x = l.indexOf(g);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(x !== -1 && typeof t[l[x]] == "number" ? t[l[x]] : g) - r / 100}${n})`;
  }
  function c(f) {
    return l.indexOf(f) + 1 < l.length ? u(f, l[l.indexOf(f) + 1]) : s(f);
  }
  function d(f) {
    const g = l.indexOf(f);
    return g === 0 ? s(l[1]) : g === l.length - 1 ? a(l[g]) : u(f, l[l.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return S({
    keys: l,
    values: i,
    up: s,
    down: a,
    between: u,
    only: c,
    not: d,
    unit: n
  }, o);
}
const Uv = {
  borderRadius: 4
}, Wv = Uv;
function Io(e, t) {
  return t ? lt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ju = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, md = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ju[e]}px)`
};
function un(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || md;
    return t.reduce((l, s, a) => (l[i.up(i.keys[a])] = n(t[a]), l), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || md;
    return Object.keys(t).reduce((l, s) => {
      if (Object.keys(i.values || ju).indexOf(s) !== -1) {
        const a = i.up(s);
        l[a] = n(t[s], s);
      } else {
        const a = s;
        l[a] = t[a];
      }
      return l;
    }, {});
  }
  return n(t);
}
function Vv(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function Hv(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Kr(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function sl(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Kr(e, n) || r, t && (o = t(o, r, e)), o;
}
function Ne(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (l) => {
    if (l[t] == null)
      return null;
    const s = l[t], a = l.theme, u = Kr(a, r) || {};
    return un(l, s, (d) => {
      let f = sl(u, o, d);
      return d === f && typeof d == "string" && (f = sl(u, o, `${t}${d === "default" ? "" : X(d)}`, d)), n === !1 ? f : {
        [n]: f
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function Kv(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Gv = {
  m: "margin",
  p: "padding"
}, Qv = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, hd = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Xv = Kv((e) => {
  if (e.length > 2)
    if (hd[e])
      e = hd[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Gv[t], o = Qv[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Bu = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Du = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Bu, ...Du];
function mi(e, t, n, r) {
  var o;
  const i = (o = Kr(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (l) => typeof l == "string" ? l : i * l : Array.isArray(i) ? (l) => typeof l == "string" ? l : i[l] : typeof i == "function" ? i : () => {
  };
}
function Np(e) {
  return mi(e, "spacing", 8);
}
function hi(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Yv(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = hi(t, n), r), {});
}
function qv(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = Xv(n), i = Yv(o, r), l = e[n];
  return un(e, l, i);
}
function zp(e, t) {
  const n = Np(e.theme);
  return Object.keys(e).map((r) => qv(e, t, r, n)).reduce(Io, {});
}
function _e(e) {
  return zp(e, Bu);
}
_e.propTypes = {};
_e.filterProps = Bu;
function Ie(e) {
  return zp(e, Du);
}
Ie.propTypes = {};
Ie.filterProps = Du;
function Zv(e = 8) {
  if (e.mui)
    return e;
  const t = Np({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const l = t(i);
    return typeof l == "number" ? `${l}px` : l;
  }).join(" ");
  return n.mui = !0, n;
}
function es(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? Io(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function wt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Mt(e, t) {
  return Ne({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Jv = Mt("border", wt), e0 = Mt("borderTop", wt), t0 = Mt("borderRight", wt), n0 = Mt("borderBottom", wt), r0 = Mt("borderLeft", wt), o0 = Mt("borderColor"), i0 = Mt("borderTopColor"), l0 = Mt("borderRightColor"), s0 = Mt("borderBottomColor"), a0 = Mt("borderLeftColor"), u0 = Mt("outline", wt), c0 = Mt("outlineColor"), ts = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = mi(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: hi(t, r)
    });
    return un(e, e.borderRadius, n);
  }
  return null;
};
ts.propTypes = {};
ts.filterProps = ["borderRadius"];
es(Jv, e0, t0, n0, r0, o0, i0, l0, s0, a0, ts, u0, c0);
const ns = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = mi(e.theme, "spacing", 8), n = (r) => ({
      gap: hi(t, r)
    });
    return un(e, e.gap, n);
  }
  return null;
};
ns.propTypes = {};
ns.filterProps = ["gap"];
const rs = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = mi(e.theme, "spacing", 8), n = (r) => ({
      columnGap: hi(t, r)
    });
    return un(e, e.columnGap, n);
  }
  return null;
};
rs.propTypes = {};
rs.filterProps = ["columnGap"];
const os = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = mi(e.theme, "spacing", 8), n = (r) => ({
      rowGap: hi(t, r)
    });
    return un(e, e.rowGap, n);
  }
  return null;
};
os.propTypes = {};
os.filterProps = ["rowGap"];
const d0 = Ne({
  prop: "gridColumn"
}), f0 = Ne({
  prop: "gridRow"
}), p0 = Ne({
  prop: "gridAutoFlow"
}), m0 = Ne({
  prop: "gridAutoColumns"
}), h0 = Ne({
  prop: "gridAutoRows"
}), g0 = Ne({
  prop: "gridTemplateColumns"
}), v0 = Ne({
  prop: "gridTemplateRows"
}), y0 = Ne({
  prop: "gridTemplateAreas"
}), x0 = Ne({
  prop: "gridArea"
});
es(ns, rs, os, d0, f0, p0, m0, h0, g0, v0, y0, x0);
function Ar(e, t) {
  return t === "grey" ? t : e;
}
const S0 = Ne({
  prop: "color",
  themeKey: "palette",
  transform: Ar
}), C0 = Ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ar
}), b0 = Ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ar
});
es(S0, C0, b0);
function pt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const k0 = Ne({
  prop: "width",
  transform: pt
}), Uu = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || ju[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: pt(n)
      };
    };
    return un(e, e.maxWidth, t);
  }
  return null;
};
Uu.filterProps = ["maxWidth"];
const w0 = Ne({
  prop: "minWidth",
  transform: pt
}), E0 = Ne({
  prop: "height",
  transform: pt
}), R0 = Ne({
  prop: "maxHeight",
  transform: pt
}), P0 = Ne({
  prop: "minHeight",
  transform: pt
});
Ne({
  prop: "size",
  cssProperty: "width",
  transform: pt
});
Ne({
  prop: "size",
  cssProperty: "height",
  transform: pt
});
const T0 = Ne({
  prop: "boxSizing"
});
es(k0, Uu, w0, E0, R0, P0, T0);
const $0 = {
  // borders
  border: {
    themeKey: "borders",
    transform: wt
  },
  borderTop: {
    themeKey: "borders",
    transform: wt
  },
  borderRight: {
    themeKey: "borders",
    transform: wt
  },
  borderBottom: {
    themeKey: "borders",
    transform: wt
  },
  borderLeft: {
    themeKey: "borders",
    transform: wt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: wt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ts
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ar
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ar
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ar
  },
  // spacing
  p: {
    style: Ie
  },
  pt: {
    style: Ie
  },
  pr: {
    style: Ie
  },
  pb: {
    style: Ie
  },
  pl: {
    style: Ie
  },
  px: {
    style: Ie
  },
  py: {
    style: Ie
  },
  padding: {
    style: Ie
  },
  paddingTop: {
    style: Ie
  },
  paddingRight: {
    style: Ie
  },
  paddingBottom: {
    style: Ie
  },
  paddingLeft: {
    style: Ie
  },
  paddingX: {
    style: Ie
  },
  paddingY: {
    style: Ie
  },
  paddingInline: {
    style: Ie
  },
  paddingInlineStart: {
    style: Ie
  },
  paddingInlineEnd: {
    style: Ie
  },
  paddingBlock: {
    style: Ie
  },
  paddingBlockStart: {
    style: Ie
  },
  paddingBlockEnd: {
    style: Ie
  },
  m: {
    style: _e
  },
  mt: {
    style: _e
  },
  mr: {
    style: _e
  },
  mb: {
    style: _e
  },
  ml: {
    style: _e
  },
  mx: {
    style: _e
  },
  my: {
    style: _e
  },
  margin: {
    style: _e
  },
  marginTop: {
    style: _e
  },
  marginRight: {
    style: _e
  },
  marginBottom: {
    style: _e
  },
  marginLeft: {
    style: _e
  },
  marginX: {
    style: _e
  },
  marginY: {
    style: _e
  },
  marginInline: {
    style: _e
  },
  marginInlineStart: {
    style: _e
  },
  marginInlineEnd: {
    style: _e
  },
  marginBlock: {
    style: _e
  },
  marginBlockStart: {
    style: _e
  },
  marginBlockEnd: {
    style: _e
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: ns
  },
  rowGap: {
    style: os
  },
  columnGap: {
    style: rs
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: pt
  },
  maxWidth: {
    style: Uu
  },
  minWidth: {
    transform: pt
  },
  height: {
    transform: pt
  },
  maxHeight: {
    transform: pt
  },
  minHeight: {
    transform: pt
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, is = $0;
function _0(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function I0(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function O0() {
  function e(n, r, o, i) {
    const l = {
      [n]: r,
      theme: o
    }, s = i[n];
    if (!s)
      return {
        [n]: r
      };
    const {
      cssProperty: a = n,
      themeKey: u,
      transform: c,
      style: d
    } = s;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const f = Kr(o, u) || {};
    return d ? d(l) : un(l, r, (x) => {
      let v = sl(f, c, x);
      return x === v && typeof x == "string" && (v = sl(f, c, `${n}${x === "default" ? "" : X(x)}`, x)), a === !1 ? v : {
        [a]: v
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: o,
      theme: i = {}
    } = n || {};
    if (!o)
      return null;
    const l = (r = i.unstable_sxConfig) != null ? r : is;
    function s(a) {
      let u = a;
      if (typeof a == "function")
        u = a(i);
      else if (typeof a != "object")
        return a;
      if (!u)
        return null;
      const c = Vv(i.breakpoints), d = Object.keys(c);
      let f = c;
      return Object.keys(u).forEach((g) => {
        const x = I0(u[g], i);
        if (x != null)
          if (typeof x == "object")
            if (l[g])
              f = Io(f, e(g, x, i, l));
            else {
              const v = un({
                theme: i
              }, x, (R) => ({
                [g]: R
              }));
              _0(v, x) ? f[g] = t({
                sx: x,
                theme: i
              }) : f = Io(f, v);
            }
          else
            f = Io(f, e(g, x, i, l));
      }), Hv(d, f);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const gi = O0();
gi.filterProps = ["sx"];
const M0 = ["breakpoints", "palette", "spacing", "shape"];
function Wu(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, l = H(e, M0), s = Dv(n), a = Zv(o);
  let u = lt({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: S({
      mode: "light"
    }, r),
    spacing: a,
    shape: S({}, Wv, i)
  }, l);
  return u = t.reduce((c, d) => lt(c, d), u), u.unstable_sxConfig = S({}, is, l == null ? void 0 : l.unstable_sxConfig), u.unstable_sx = function(d) {
    return gi({
      sx: d,
      theme: this
    });
  }, u;
}
function N0(e) {
  return Object.keys(e).length === 0;
}
function Lp(e = null) {
  const t = C.useContext(Zl);
  return !t || N0(t) ? e : t;
}
const z0 = Wu();
function ls(e = z0) {
  return Lp(e);
}
function L0({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = ls(n), o = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ P.jsx(kv, {
    styles: o
  });
}
const F0 = ["sx"], A0 = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : is;
  return Object.keys(e).forEach((i) => {
    o[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i];
  }), r;
};
function Fp(e) {
  const {
    sx: t
  } = e, n = H(e, F0), {
    systemProps: r,
    otherProps: o
  } = A0(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...l) => {
    const s = t(...l);
    return on(s) ? S({}, r, s) : r;
  } : i = S({}, r, t), S({}, o, {
    sx: i
  });
}
function Ap(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Ap(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function Z() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Ap(e)) && (r && (r += " "), r += t);
  return r;
}
const j0 = ["className", "component"];
function B0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = Ip("div", {
    shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as"
  })(gi);
  return /* @__PURE__ */ C.forwardRef(function(a, u) {
    const c = ls(n), d = Fp(a), {
      className: f,
      component: g = "div"
    } = d, x = H(d, j0);
    return /* @__PURE__ */ P.jsx(i, S({
      as: g,
      ref: u,
      className: Z(f, o ? o(r) : r),
      theme: t && c[t] || c
    }, x));
  });
}
const D0 = ["variant"];
function gd(e) {
  return e.length === 0;
}
function jp(e) {
  const {
    variant: t
  } = e, n = H(e, D0);
  let r = t || "";
  return Object.keys(n).sort().forEach((o) => {
    o === "color" ? r += gd(r) ? e[o] : X(e[o]) : r += `${gd(r) ? o : X(o)}${X(e[o].toString())}`;
  }), r;
}
const U0 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function W0(e) {
  return Object.keys(e).length === 0;
}
function V0(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const H0 = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, al = (e) => {
  let t = 0;
  const n = {};
  return e && e.forEach((r) => {
    let o = "";
    typeof r.props == "function" ? (o = `callback${t}`, t += 1) : o = jp(r.props), n[o] = r.style;
  }), n;
}, K0 = (e, t) => {
  let n = [];
  return t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants), al(n);
}, ul = (e, t, n) => {
  const {
    ownerState: r = {}
  } = e, o = [];
  let i = 0;
  return n && n.forEach((l) => {
    let s = !0;
    if (typeof l.props == "function") {
      const a = S({}, e, r);
      s = l.props(a);
    } else
      Object.keys(l.props).forEach((a) => {
        r[a] !== l.props[a] && e[a] !== l.props[a] && (s = !1);
      });
    s && (typeof l.props == "function" ? o.push(t[`callback${i}`]) : o.push(t[jp(l.props)])), typeof l.props == "function" && (i += 1);
  }), o;
}, G0 = (e, t, n, r) => {
  var o;
  const i = n == null || (o = n.components) == null || (o = o[r]) == null ? void 0 : o.variants;
  return ul(e, t, i);
};
function Oo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Q0 = Wu(), X0 = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Qi({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return W0(t) ? e : t[n] || t;
}
function Y0(e) {
  return e ? (t, n) => n[e] : null;
}
const vd = ({
  styledArg: e,
  props: t,
  defaultTheme: n,
  themeId: r
}) => {
  const o = e(S({}, t, {
    theme: Qi(S({}, t, {
      defaultTheme: n,
      themeId: r
    }))
  }));
  let i;
  if (o && o.variants && (i = o.variants, delete o.variants), i) {
    const l = ul(t, al(i), i);
    return [o, ...l];
  }
  return o;
};
function q0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Q0,
    rootShouldForwardProp: r = Oo,
    slotShouldForwardProp: o = Oo
  } = e, i = (l) => gi(S({}, l, {
    theme: Qi(S({}, l, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (l, s = {}) => {
    wv(l, (y) => y.filter((w) => !(w != null && w.__mui_systemSx)));
    const {
      name: a,
      slot: u,
      skipVariantsResolver: c,
      skipSx: d,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = Y0(X0(u))
    } = s, g = H(s, U0), x = c !== void 0 ? c : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), v = d || !1;
    let R, h = Oo;
    u === "Root" || u === "root" ? h = r : u ? h = o : V0(l) && (h = void 0);
    const p = Ip(l, S({
      shouldForwardProp: h,
      label: R
    }, g)), m = (y, ...w) => {
      const E = w ? w.map((T) => {
        if (typeof T == "function" && T.__emotion_real !== T)
          return (j) => vd({
            styledArg: T,
            props: j,
            defaultTheme: n,
            themeId: t
          });
        if (on(T)) {
          let j = T, B;
          return T && T.variants && (B = T.variants, delete j.variants, j = (F) => {
            let z = T;
            return ul(F, al(B), B).forEach((D) => {
              z = lt(z, D);
            }), z;
          }), j;
        }
        return T;
      }) : [];
      let k = y;
      if (on(y)) {
        let T;
        y && y.variants && (T = y.variants, delete k.variants, k = (j) => {
          let B = y;
          return ul(j, al(T), T).forEach((z) => {
            B = lt(B, z);
          }), B;
        });
      } else
        typeof y == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        y.__emotion_real !== y && (k = (T) => vd({
          styledArg: y,
          props: T,
          defaultTheme: n,
          themeId: t
        }));
      a && f && E.push((T) => {
        const j = Qi(S({}, T, {
          defaultTheme: n,
          themeId: t
        })), B = H0(a, j);
        if (B) {
          const F = {};
          return Object.entries(B).forEach(([z, L]) => {
            F[z] = typeof L == "function" ? L(S({}, T, {
              theme: j
            })) : L;
          }), f(T, F);
        }
        return null;
      }), a && !x && E.push((T) => {
        const j = Qi(S({}, T, {
          defaultTheme: n,
          themeId: t
        }));
        return G0(T, K0(a, j), j, a);
      }), v || E.push(i);
      const _ = E.length - w.length;
      if (Array.isArray(y) && _ > 0) {
        const T = new Array(_).fill("");
        k = [...y, ...T], k.raw = [...y.raw, ...T];
      }
      const M = p(k, ...E);
      return l.muiName && (M.muiName = l.muiName), M;
    };
    return p.withConfig && (m.withConfig = p.withConfig), m;
  };
}
function Z0(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Fu(t.components[n].defaultProps, r);
}
function J0({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = ls(n);
  return r && (o = o[r] || o), Z0({
    theme: o,
    name: t,
    props: e
  });
}
function Vu(e, t = 0, n = 1) {
  return Av(e, t, n);
}
function ey(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ir(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return ir(ey(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(Ln(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(Ln(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
function ss(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function ty(e) {
  e = ir(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), l = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let s = "rgb";
  const a = [Math.round(l(0) * 255), Math.round(l(8) * 255), Math.round(l(4) * 255)];
  return e.type === "hsla" && (s += "a", a.push(t[3])), ss({
    type: s,
    values: a
  });
}
function yd(e) {
  e = ir(e);
  let t = e.type === "hsl" || e.type === "hsla" ? ir(ty(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ny(e, t) {
  const n = yd(e), r = yd(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function He(e, t) {
  return e = ir(e), t = Vu(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ss(e);
}
function ry(e, t) {
  if (e = ir(e), t = Vu(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return ss(e);
}
function oy(e, t) {
  if (e = ir(e), t = Vu(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return ss(e);
}
const iy = /* @__PURE__ */ C.createContext(null), Bp = iy;
function Dp() {
  return C.useContext(Bp);
}
const ly = typeof Symbol == "function" && Symbol.for, sy = ly ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function ay(e, t) {
  return typeof t == "function" ? t(e) : S({}, e, t);
}
function uy(e) {
  const {
    children: t,
    theme: n
  } = e, r = Dp(), o = C.useMemo(() => {
    const i = r === null ? n : ay(r, n);
    return i != null && (i[sy] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ P.jsx(Bp.Provider, {
    value: o,
    children: t
  });
}
const xd = {};
function Sd(e, t, n, r = !1) {
  return C.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), l = e ? S({}, t, {
        [e]: i
      }) : i;
      return r ? () => l : l;
    }
    return e ? S({}, t, {
      [e]: n
    }) : S({}, t, n);
  }, [e, t, n, r]);
}
function cy(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Lp(xd), i = Dp() || xd, l = Sd(r, o, n), s = Sd(r, i, n, !0);
  return /* @__PURE__ */ P.jsx(uy, {
    theme: s,
    children: /* @__PURE__ */ P.jsx(Zl.Provider, {
      value: l,
      children: t
    })
  });
}
function dy(e, t) {
  return S({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
const fy = {
  black: "#000",
  white: "#fff"
}, Go = fy, py = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, my = py, hy = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, hr = hy, gy = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, gr = gy, vy = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, fo = vy, yy = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, vr = yy, xy = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, yr = xy, Sy = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, xr = Sy, Cy = ["mode", "contrastThreshold", "tonalOffset"], Cd = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Go.white,
    default: Go.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Bs = {
  text: {
    primary: Go.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Go.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function bd(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = oy(e.main, o) : t === "dark" && (e.dark = ry(e.main, i)));
}
function by(e = "light") {
  return e === "dark" ? {
    main: vr[200],
    light: vr[50],
    dark: vr[400]
  } : {
    main: vr[700],
    light: vr[400],
    dark: vr[800]
  };
}
function ky(e = "light") {
  return e === "dark" ? {
    main: hr[200],
    light: hr[50],
    dark: hr[400]
  } : {
    main: hr[500],
    light: hr[300],
    dark: hr[700]
  };
}
function wy(e = "light") {
  return e === "dark" ? {
    main: gr[500],
    light: gr[300],
    dark: gr[700]
  } : {
    main: gr[700],
    light: gr[400],
    dark: gr[800]
  };
}
function Ey(e = "light") {
  return e === "dark" ? {
    main: yr[400],
    light: yr[300],
    dark: yr[700]
  } : {
    main: yr[700],
    light: yr[500],
    dark: yr[900]
  };
}
function Ry(e = "light") {
  return e === "dark" ? {
    main: xr[400],
    light: xr[300],
    dark: xr[700]
  } : {
    main: xr[800],
    light: xr[500],
    dark: xr[900]
  };
}
function Py(e = "light") {
  return e === "dark" ? {
    main: fo[400],
    light: fo[300],
    dark: fo[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: fo[500],
    dark: fo[900]
  };
}
function Ty(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = H(e, Cy), i = e.primary || by(t), l = e.secondary || ky(t), s = e.error || wy(t), a = e.info || Ey(t), u = e.success || Ry(t), c = e.warning || Py(t);
  function d(v) {
    return ny(v, Bs.text.primary) >= n ? Bs.text.primary : Cd.text.primary;
  }
  const f = ({
    color: v,
    name: R,
    mainShade: h = 500,
    lightShade: p = 300,
    darkShade: m = 700
  }) => {
    if (v = S({}, v), !v.main && v[h] && (v.main = v[h]), !v.hasOwnProperty("main"))
      throw new Error(Ln(11, R ? ` (${R})` : "", h));
    if (typeof v.main != "string")
      throw new Error(Ln(12, R ? ` (${R})` : "", JSON.stringify(v.main)));
    return bd(v, "light", p, r), bd(v, "dark", m, r), v.contrastText || (v.contrastText = d(v.main)), v;
  }, g = {
    dark: Bs,
    light: Cd
  };
  return lt(S({
    // A collection of common colors.
    common: S({}, Go),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: f({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: f({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: f({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: f({
      color: c,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: f({
      color: a,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: my,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: f,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, g[t]), o);
}
const $y = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function _y(e) {
  return Math.round(e * 1e5) / 1e5;
}
const kd = {
  textTransform: "uppercase"
}, wd = '"Roboto", "Helvetica", "Arial", sans-serif';
function Iy(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = wd,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: l = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: c,
    pxToRem: d
  } = n, f = H(n, $y), g = o / 14, x = d || ((h) => `${h / u * g}rem`), v = (h, p, m, y, w) => S({
    fontFamily: r,
    fontWeight: h,
    fontSize: x(p),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: m
  }, r === wd ? {
    letterSpacing: `${_y(y / p)}em`
  } : {}, w, c), R = {
    h1: v(i, 96, 1.167, -1.5),
    h2: v(i, 60, 1.2, -0.5),
    h3: v(l, 48, 1.167, 0),
    h4: v(l, 34, 1.235, 0.25),
    h5: v(l, 24, 1.334, 0),
    h6: v(s, 20, 1.6, 0.15),
    subtitle1: v(l, 16, 1.75, 0.15),
    subtitle2: v(s, 14, 1.57, 0.1),
    body1: v(l, 16, 1.5, 0.15),
    body2: v(l, 14, 1.43, 0.15),
    button: v(s, 14, 1.75, 0.4, kd),
    caption: v(l, 12, 1.66, 0.4),
    overline: v(l, 12, 2.66, 1, kd),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return lt(S({
    htmlFontSize: u,
    pxToRem: x,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: l,
    fontWeightMedium: s,
    fontWeightBold: a
  }, R), f, {
    clone: !1
    // No need to clone deep
  });
}
const Oy = 0.2, My = 0.14, Ny = 0.12;
function ke(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Oy})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${My})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ny})`].join(",");
}
const zy = ["none", ke(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ke(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ke(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ke(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ke(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ke(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ke(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ke(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ke(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ke(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ke(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ke(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ke(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ke(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ke(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ke(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ke(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ke(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ke(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ke(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ke(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ke(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ke(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ke(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ly = ["duration", "easing", "delay"], Fy = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ay = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Ed(e) {
  return `${Math.round(e)}ms`;
}
function jy(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function By(e) {
  const t = S({}, Fy, e.easing), n = S({}, Ay, e.duration);
  return S({
    getAutoHeightDuration: jy,
    create: (o = ["all"], i = {}) => {
      const {
        duration: l = n.standard,
        easing: s = t.easeInOut,
        delay: a = 0
      } = i;
      return H(i, Ly), (Array.isArray(o) ? o : [o]).map((u) => `${u} ${typeof l == "string" ? l : Ed(l)} ${s} ${typeof a == "string" ? a : Ed(a)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const Dy = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Uy = Dy, Wy = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Hu(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, l = H(e, Wy);
  if (e.vars)
    throw new Error(Ln(18));
  const s = Ty(r), a = Wu(e);
  let u = lt(a, {
    mixins: dy(a.breakpoints, n),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: zy.slice(),
    typography: Iy(s, i),
    transitions: By(o),
    zIndex: S({}, Uy),
    applyDarkStyles(c) {
      return this.vars ? {
        [this.getColorSchemeSelector("dark").replace(/(\[[^\]]+\])/, ":where($1)")]: c
      } : this.palette.mode === "dark" ? c : {};
    }
  });
  return u = lt(u, l), u = t.reduce((c, d) => lt(c, d), u), u.unstable_sxConfig = S({}, is, l == null ? void 0 : l.unstable_sxConfig), u.unstable_sx = function(d) {
    return gi({
      sx: d,
      theme: this
    });
  }, u;
}
const Vy = Hu(), as = Vy;
function Ku() {
  const e = ls(as);
  return e[or] || e;
}
function ue({
  props: e,
  name: t
}) {
  return J0({
    props: e,
    name: t,
    defaultTheme: as,
    themeId: or
  });
}
const Nt = (e) => Oo(e) && e !== "classes", Hy = Oo, K = q0({
  themeId: or,
  defaultTheme: as,
  rootShouldForwardProp: Nt
}), Ky = ["theme"];
function Gy(e) {
  let {
    theme: t
  } = e, n = H(e, Ky);
  const r = t[or];
  return /* @__PURE__ */ P.jsx(cy, S({}, n, {
    themeId: r ? or : void 0,
    theme: r || t
  }));
}
const Rd = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
};
var Up = { exports: {} }, yt = {}, Wp = { exports: {} }, Vp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t($, N) {
    var b = $.length;
    $.push(N);
    e:
      for (; 0 < b; ) {
        var I = b - 1 >>> 1, U = $[I];
        if (0 < o(U, N))
          $[I] = N, $[b] = U, b = I;
        else
          break e;
      }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0)
      return null;
    var N = $[0], b = $.pop();
    if (b !== N) {
      $[0] = b;
      e:
        for (var I = 0, U = $.length, G = U >>> 1; I < G; ) {
          var W = 2 * (I + 1) - 1, Y = $[W], Q = W + 1, ee = $[Q];
          if (0 > o(Y, b))
            Q < U && 0 > o(ee, Y) ? ($[I] = ee, $[Q] = b, I = Q) : ($[I] = Y, $[W] = b, I = W);
          else if (Q < U && 0 > o(ee, b))
            $[I] = ee, $[Q] = b, I = Q;
          else
            break e;
        }
    }
    return N;
  }
  function o($, N) {
    var b = $.sortIndex - N.sortIndex;
    return b !== 0 ? b : $.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var l = Date, s = l.now();
    e.unstable_now = function() {
      return l.now() - s;
    };
  }
  var a = [], u = [], c = 1, d = null, f = 3, g = !1, x = !1, v = !1, R = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m($) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null)
        r(u);
      else if (N.startTime <= $)
        r(u), N.sortIndex = N.expirationTime, t(a, N);
      else
        break;
      N = n(u);
    }
  }
  function y($) {
    if (v = !1, m($), !x)
      if (n(a) !== null)
        x = !0, D(w);
      else {
        var N = n(u);
        N !== null && A(y, N.startTime - $);
      }
  }
  function w($, N) {
    x = !1, v && (v = !1, h(_), _ = -1), g = !0;
    var b = f;
    try {
      for (m(N), d = n(a); d !== null && (!(d.expirationTime > N) || $ && !j()); ) {
        var I = d.callback;
        if (typeof I == "function") {
          d.callback = null, f = d.priorityLevel;
          var U = I(d.expirationTime <= N);
          N = e.unstable_now(), typeof U == "function" ? d.callback = U : d === n(a) && r(a), m(N);
        } else
          r(a);
        d = n(a);
      }
      if (d !== null)
        var G = !0;
      else {
        var W = n(u);
        W !== null && A(y, W.startTime - N), G = !1;
      }
      return G;
    } finally {
      d = null, f = b, g = !1;
    }
  }
  var E = !1, k = null, _ = -1, M = 5, T = -1;
  function j() {
    return !(e.unstable_now() - T < M);
  }
  function B() {
    if (k !== null) {
      var $ = e.unstable_now();
      T = $;
      var N = !0;
      try {
        N = k(!0, $);
      } finally {
        N ? F() : (E = !1, k = null);
      }
    } else
      E = !1;
  }
  var F;
  if (typeof p == "function")
    F = function() {
      p(B);
    };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(), L = z.port2;
    z.port1.onmessage = B, F = function() {
      L.postMessage(null);
    };
  } else
    F = function() {
      R(B, 0);
    };
  function D($) {
    k = $, E || (E = !0, F());
  }
  function A($, N) {
    _ = R(function() {
      $(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) {
    $.callback = null;
  }, e.unstable_continueExecution = function() {
    x || g || (x = !0, D(w));
  }, e.unstable_forceFrameRate = function($) {
    0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < $ ? Math.floor(1e3 / $) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function($) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = f;
    }
    var b = f;
    f = N;
    try {
      return $();
    } finally {
      f = b;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function($, N) {
    switch ($) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        $ = 3;
    }
    var b = f;
    f = $;
    try {
      return N();
    } finally {
      f = b;
    }
  }, e.unstable_scheduleCallback = function($, N, b) {
    var I = e.unstable_now();
    switch (typeof b == "object" && b !== null ? (b = b.delay, b = typeof b == "number" && 0 < b ? I + b : I) : b = I, $) {
      case 1:
        var U = -1;
        break;
      case 2:
        U = 250;
        break;
      case 5:
        U = 1073741823;
        break;
      case 4:
        U = 1e4;
        break;
      default:
        U = 5e3;
    }
    return U = b + U, $ = { id: c++, callback: N, priorityLevel: $, startTime: b, expirationTime: U, sortIndex: -1 }, b > I ? ($.sortIndex = b, t(u, $), n(a) === null && $ === n(u) && (v ? (h(_), _ = -1) : v = !0, A(y, b - I))) : ($.sortIndex = U, t(a, $), x || g || (x = !0, D(w))), $;
  }, e.unstable_shouldYield = j, e.unstable_wrapCallback = function($) {
    var N = f;
    return function() {
      var b = f;
      f = N;
      try {
        return $.apply(this, arguments);
      } finally {
        f = b;
      }
    };
  };
})(Vp);
Wp.exports = Vp;
var Qy = Wp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hp = Pu(), vt = Qy;
function O(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Kp = /* @__PURE__ */ new Set(), Qo = {};
function dr(e, t) {
  Gr(e, t), Gr(e + "Capture", t);
}
function Gr(e, t) {
  for (Qo[e] = t, e = 0; e < t.length; e++)
    Kp.add(t[e]);
}
var cn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pa = Object.prototype.hasOwnProperty, Xy = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Pd = {}, Td = {};
function Yy(e) {
  return Pa.call(Td, e) ? !0 : Pa.call(Pd, e) ? !1 : Xy.test(e) ? Td[e] = !0 : (Pd[e] = !0, !1);
}
function qy(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Zy(e, t, n, r) {
  if (t === null || typeof t > "u" || qy(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function tt(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var Ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ge[e] = new tt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ge[t] = new tt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ge[e] = new tt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ge[e] = new tt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ge[e] = new tt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ge[e] = new tt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ge[e] = new tt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ge[e] = new tt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ge[e] = new tt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Gu = /[\-:]([a-z])/g;
function Qu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Gu,
    Qu
  );
  Ge[t] = new tt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Gu, Qu);
  Ge[t] = new tt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Gu, Qu);
  Ge[t] = new tt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ge[e] = new tt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ge.xlinkHref = new tt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ge[e] = new tt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xu(e, t, n, r) {
  var o = Ge.hasOwnProperty(t) ? Ge[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Zy(t, n, o, r) && (n = null), r || o === null ? Yy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var hn = Hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, bi = Symbol.for("react.element"), Er = Symbol.for("react.portal"), Rr = Symbol.for("react.fragment"), Yu = Symbol.for("react.strict_mode"), Ta = Symbol.for("react.profiler"), Gp = Symbol.for("react.provider"), Qp = Symbol.for("react.context"), qu = Symbol.for("react.forward_ref"), $a = Symbol.for("react.suspense"), _a = Symbol.for("react.suspense_list"), Zu = Symbol.for("react.memo"), bn = Symbol.for("react.lazy"), Xp = Symbol.for("react.offscreen"), $d = Symbol.iterator;
function po(e) {
  return e === null || typeof e != "object" ? null : (e = $d && e[$d] || e["@@iterator"], typeof e == "function" ? e : null);
}
var $e = Object.assign, Ds;
function wo(e) {
  if (Ds === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ds = t && t[1] || "";
    }
  return `
` + Ds + e;
}
var Us = !1;
function Ws(e, t) {
  if (!e || Us)
    return "";
  Us = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), l = o.length - 1, s = i.length - 1; 1 <= l && 0 <= s && o[l] !== i[s]; )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if (l--, s--, 0 > s || o[l] !== i[s]) {
                var a = `
` + o[l].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    Us = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? wo(e) : "";
}
function Jy(e) {
  switch (e.tag) {
    case 5:
      return wo(e.type);
    case 16:
      return wo("Lazy");
    case 13:
      return wo("Suspense");
    case 19:
      return wo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ws(e.type, !1), e;
    case 11:
      return e = Ws(e.type.render, !1), e;
    case 1:
      return e = Ws(e.type, !0), e;
    default:
      return "";
  }
}
function Ia(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Rr:
      return "Fragment";
    case Er:
      return "Portal";
    case Ta:
      return "Profiler";
    case Yu:
      return "StrictMode";
    case $a:
      return "Suspense";
    case _a:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Qp:
        return (e.displayName || "Context") + ".Consumer";
      case Gp:
        return (e._context.displayName || "Context") + ".Provider";
      case qu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Zu:
        return t = e.displayName || null, t !== null ? t : Ia(e.type) || "Memo";
      case bn:
        t = e._payload, e = e._init;
        try {
          return Ia(e(t));
        } catch {
        }
    }
  return null;
}
function e1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ia(t);
    case 8:
      return t === Yu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function An(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Yp(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function t1(e) {
  var t = Yp(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(l) {
      r = "" + l, i.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ki(e) {
  e._valueTracker || (e._valueTracker = t1(e));
}
function qp(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Yp(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function cl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Oa(e, t) {
  var n = t.checked;
  return $e({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function _d(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = An(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Zp(e, t) {
  t = t.checked, t != null && Xu(e, "checked", t, !1);
}
function Ma(e, t) {
  Zp(e, t);
  var n = An(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Na(e, t.type, n) : t.hasOwnProperty("defaultValue") && Na(e, t.type, An(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Id(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Na(e, t, n) {
  (t !== "number" || cl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Eo = Array.isArray;
function jr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + An(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function za(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(O(91));
  return $e({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Od(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(O(92));
      if (Eo(n)) {
        if (1 < n.length)
          throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: An(n) };
}
function Jp(e, t) {
  var n = An(t.value), r = An(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Md(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function em(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function La(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? em(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var wi, tm = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (wi = wi || document.createElement("div"), wi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = wi.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Xo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mo = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, n1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mo).forEach(function(e) {
  n1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Mo[t] = Mo[e];
  });
});
function nm(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Mo.hasOwnProperty(e) && Mo[e] ? ("" + t).trim() : t + "px";
}
function rm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = nm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var r1 = $e({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Fa(e, t) {
  if (t) {
    if (r1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(O(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(O(62));
  }
}
function Aa(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ja = null;
function Ju(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ba = null, Br = null, Dr = null;
function Nd(e) {
  if (e = xi(e)) {
    if (typeof Ba != "function")
      throw Error(O(280));
    var t = e.stateNode;
    t && (t = ps(t), Ba(e.stateNode, e.type, t));
  }
}
function om(e) {
  Br ? Dr ? Dr.push(e) : Dr = [e] : Br = e;
}
function im() {
  if (Br) {
    var e = Br, t = Dr;
    if (Dr = Br = null, Nd(e), t)
      for (e = 0; e < t.length; e++)
        Nd(t[e]);
  }
}
function lm(e, t) {
  return e(t);
}
function sm() {
}
var Vs = !1;
function am(e, t, n) {
  if (Vs)
    return e(t, n);
  Vs = !0;
  try {
    return lm(e, t, n);
  } finally {
    Vs = !1, (Br !== null || Dr !== null) && (sm(), im());
  }
}
function Yo(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = ps(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(O(231, t, typeof n));
  return n;
}
var Da = !1;
if (cn)
  try {
    var mo = {};
    Object.defineProperty(mo, "passive", { get: function() {
      Da = !0;
    } }), window.addEventListener("test", mo, mo), window.removeEventListener("test", mo, mo);
  } catch {
    Da = !1;
  }
function o1(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var No = !1, dl = null, fl = !1, Ua = null, i1 = { onError: function(e) {
  No = !0, dl = e;
} };
function l1(e, t, n, r, o, i, l, s, a) {
  No = !1, dl = null, o1.apply(i1, arguments);
}
function s1(e, t, n, r, o, i, l, s, a) {
  if (l1.apply(this, arguments), No) {
    if (No) {
      var u = dl;
      No = !1, dl = null;
    } else
      throw Error(O(198));
    fl || (fl = !0, Ua = u);
  }
}
function fr(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function um(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function zd(e) {
  if (fr(e) !== e)
    throw Error(O(188));
}
function a1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = fr(e), t === null)
      throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null)
      break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n)
          return zd(o), e;
        if (i === r)
          return zd(o), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return)
      n = o, r = i;
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          l = !0, n = o, r = i;
          break;
        }
        if (s === r) {
          l = !0, r = o, n = i;
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            l = !0, n = i, r = o;
            break;
          }
          if (s === r) {
            l = !0, r = i, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!l)
          throw Error(O(189));
      }
    }
    if (n.alternate !== r)
      throw Error(O(190));
  }
  if (n.tag !== 3)
    throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function cm(e) {
  return e = a1(e), e !== null ? dm(e) : null;
}
function dm(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = dm(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var fm = vt.unstable_scheduleCallback, Ld = vt.unstable_cancelCallback, u1 = vt.unstable_shouldYield, c1 = vt.unstable_requestPaint, Me = vt.unstable_now, d1 = vt.unstable_getCurrentPriorityLevel, ec = vt.unstable_ImmediatePriority, pm = vt.unstable_UserBlockingPriority, pl = vt.unstable_NormalPriority, f1 = vt.unstable_LowPriority, mm = vt.unstable_IdlePriority, us = null, Yt = null;
function p1(e) {
  if (Yt && typeof Yt.onCommitFiberRoot == "function")
    try {
      Yt.onCommitFiberRoot(us, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Dt = Math.clz32 ? Math.clz32 : g1, m1 = Math.log, h1 = Math.LN2;
function g1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (m1(e) / h1 | 0) | 0;
}
var Ei = 64, Ri = 4194304;
function Ro(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ml(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? r = Ro(s) : (i &= l, i !== 0 && (r = Ro(i)));
  } else
    l = n & ~o, l !== 0 ? r = Ro(l) : i !== 0 && (r = Ro(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Dt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function v1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function y1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - Dt(i), s = 1 << l, a = o[l];
    a === -1 ? (!(s & n) || s & r) && (o[l] = v1(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Wa(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function hm() {
  var e = Ei;
  return Ei <<= 1, !(Ei & 4194240) && (Ei = 64), e;
}
function Hs(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function vi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Dt(t), e[t] = n;
}
function x1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Dt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function tc(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Dt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var pe = 0;
function gm(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var vm, nc, ym, xm, Sm, Va = !1, Pi = [], Tn = null, $n = null, _n = null, qo = /* @__PURE__ */ new Map(), Zo = /* @__PURE__ */ new Map(), wn = [], S1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Fd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Tn = null;
      break;
    case "dragenter":
    case "dragleave":
      $n = null;
      break;
    case "mouseover":
    case "mouseout":
      _n = null;
      break;
    case "pointerover":
    case "pointerout":
      qo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zo.delete(t.pointerId);
  }
}
function ho(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = xi(t), t !== null && nc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function C1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Tn = ho(Tn, e, t, n, r, o), !0;
    case "dragenter":
      return $n = ho($n, e, t, n, r, o), !0;
    case "mouseover":
      return _n = ho(_n, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return qo.set(i, ho(qo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Zo.set(i, ho(Zo.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Cm(e) {
  var t = qn(e.target);
  if (t !== null) {
    var n = fr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = um(n), t !== null) {
          e.blockedOn = t, Sm(e.priority, function() {
            ym(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Xi(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ha(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ja = r, n.target.dispatchEvent(r), ja = null;
    } else
      return t = xi(n), t !== null && nc(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ad(e, t, n) {
  Xi(e) && n.delete(t);
}
function b1() {
  Va = !1, Tn !== null && Xi(Tn) && (Tn = null), $n !== null && Xi($n) && ($n = null), _n !== null && Xi(_n) && (_n = null), qo.forEach(Ad), Zo.forEach(Ad);
}
function go(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Va || (Va = !0, vt.unstable_scheduleCallback(vt.unstable_NormalPriority, b1)));
}
function Jo(e) {
  function t(o) {
    return go(o, e);
  }
  if (0 < Pi.length) {
    go(Pi[0], e);
    for (var n = 1; n < Pi.length; n++) {
      var r = Pi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Tn !== null && go(Tn, e), $n !== null && go($n, e), _n !== null && go(_n, e), qo.forEach(t), Zo.forEach(t), n = 0; n < wn.length; n++)
    r = wn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < wn.length && (n = wn[0], n.blockedOn === null); )
    Cm(n), n.blockedOn === null && wn.shift();
}
var Ur = hn.ReactCurrentBatchConfig, hl = !0;
function k1(e, t, n, r) {
  var o = pe, i = Ur.transition;
  Ur.transition = null;
  try {
    pe = 1, rc(e, t, n, r);
  } finally {
    pe = o, Ur.transition = i;
  }
}
function w1(e, t, n, r) {
  var o = pe, i = Ur.transition;
  Ur.transition = null;
  try {
    pe = 4, rc(e, t, n, r);
  } finally {
    pe = o, Ur.transition = i;
  }
}
function rc(e, t, n, r) {
  if (hl) {
    var o = Ha(e, t, n, r);
    if (o === null)
      ta(e, t, r, gl, n), Fd(e, r);
    else if (C1(o, e, t, n, r))
      r.stopPropagation();
    else if (Fd(e, r), t & 4 && -1 < S1.indexOf(e)) {
      for (; o !== null; ) {
        var i = xi(o);
        if (i !== null && vm(i), i = Ha(e, t, n, r), i === null && ta(e, t, r, gl, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      ta(e, t, r, null, n);
  }
}
var gl = null;
function Ha(e, t, n, r) {
  if (gl = null, e = Ju(r), e = qn(e), e !== null)
    if (t = fr(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = um(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return gl = e, null;
}
function bm(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (d1()) {
        case ec:
          return 1;
        case pm:
          return 4;
        case pl:
        case f1:
          return 16;
        case mm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Rn = null, oc = null, Yi = null;
function km() {
  if (Yi)
    return Yi;
  var e, t = oc, n = t.length, r, o = "value" in Rn ? Rn.value : Rn.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++)
    ;
  return Yi = o.slice(e, 1 < r ? 1 - r : void 0);
}
function qi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ti() {
  return !0;
}
function jd() {
  return !1;
}
function xt(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ti : jd, this.isPropagationStopped = jd, this;
  }
  return $e(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ti);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ti);
  }, persist: function() {
  }, isPersistent: Ti }), t;
}
var oo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ic = xt(oo), yi = $e({}, oo, { view: 0, detail: 0 }), E1 = xt(yi), Ks, Gs, vo, cs = $e({}, yi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: lc, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== vo && (vo && e.type === "mousemove" ? (Ks = e.screenX - vo.screenX, Gs = e.screenY - vo.screenY) : Gs = Ks = 0, vo = e), Ks);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Gs;
} }), Bd = xt(cs), R1 = $e({}, cs, { dataTransfer: 0 }), P1 = xt(R1), T1 = $e({}, yi, { relatedTarget: 0 }), Qs = xt(T1), $1 = $e({}, oo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), _1 = xt($1), I1 = $e({}, oo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), O1 = xt(I1), M1 = $e({}, oo, { data: 0 }), Dd = xt(M1), N1 = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, z1 = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, L1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function F1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = L1[e]) ? !!t[e] : !1;
}
function lc() {
  return F1;
}
var A1 = $e({}, yi, { key: function(e) {
  if (e.key) {
    var t = N1[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = qi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? z1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: lc, charCode: function(e) {
  return e.type === "keypress" ? qi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? qi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), j1 = xt(A1), B1 = $e({}, cs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ud = xt(B1), D1 = $e({}, yi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: lc }), U1 = xt(D1), W1 = $e({}, oo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), V1 = xt(W1), H1 = $e({}, cs, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), K1 = xt(H1), G1 = [9, 13, 27, 32], sc = cn && "CompositionEvent" in window, zo = null;
cn && "documentMode" in document && (zo = document.documentMode);
var Q1 = cn && "TextEvent" in window && !zo, wm = cn && (!sc || zo && 8 < zo && 11 >= zo), Wd = " ", Vd = !1;
function Em(e, t) {
  switch (e) {
    case "keyup":
      return G1.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Rm(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Pr = !1;
function X1(e, t) {
  switch (e) {
    case "compositionend":
      return Rm(t);
    case "keypress":
      return t.which !== 32 ? null : (Vd = !0, Wd);
    case "textInput":
      return e = t.data, e === Wd && Vd ? null : e;
    default:
      return null;
  }
}
function Y1(e, t) {
  if (Pr)
    return e === "compositionend" || !sc && Em(e, t) ? (e = km(), Yi = oc = Rn = null, Pr = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return wm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var q1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Hd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!q1[e.type] : t === "textarea";
}
function Pm(e, t, n, r) {
  om(r), t = vl(t, "onChange"), 0 < t.length && (n = new ic("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Lo = null, ei = null;
function Z1(e) {
  Am(e, 0);
}
function ds(e) {
  var t = _r(e);
  if (qp(t))
    return e;
}
function J1(e, t) {
  if (e === "change")
    return t;
}
var Tm = !1;
if (cn) {
  var Xs;
  if (cn) {
    var Ys = "oninput" in document;
    if (!Ys) {
      var Kd = document.createElement("div");
      Kd.setAttribute("oninput", "return;"), Ys = typeof Kd.oninput == "function";
    }
    Xs = Ys;
  } else
    Xs = !1;
  Tm = Xs && (!document.documentMode || 9 < document.documentMode);
}
function Gd() {
  Lo && (Lo.detachEvent("onpropertychange", $m), ei = Lo = null);
}
function $m(e) {
  if (e.propertyName === "value" && ds(ei)) {
    var t = [];
    Pm(t, ei, e, Ju(e)), am(Z1, t);
  }
}
function ex(e, t, n) {
  e === "focusin" ? (Gd(), Lo = t, ei = n, Lo.attachEvent("onpropertychange", $m)) : e === "focusout" && Gd();
}
function tx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ds(ei);
}
function nx(e, t) {
  if (e === "click")
    return ds(t);
}
function rx(e, t) {
  if (e === "input" || e === "change")
    return ds(t);
}
function ox(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Wt = typeof Object.is == "function" ? Object.is : ox;
function ti(e, t) {
  if (Wt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Pa.call(t, o) || !Wt(e[o], t[o]))
      return !1;
  }
  return !0;
}
function Qd(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Xd(e, t) {
  var n = Qd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Qd(n);
  }
}
function _m(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _m(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Im() {
  for (var e = window, t = cl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = cl(e.document);
  }
  return t;
}
function ac(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function ix(e) {
  var t = Im(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && _m(n.ownerDocument.documentElement, n)) {
    if (r !== null && ac(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Xd(n, i);
        var l = Xd(
          n,
          r
        );
        o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var lx = cn && "documentMode" in document && 11 >= document.documentMode, Tr = null, Ka = null, Fo = null, Ga = !1;
function Yd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ga || Tr == null || Tr !== cl(r) || (r = Tr, "selectionStart" in r && ac(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Fo && ti(Fo, r) || (Fo = r, r = vl(Ka, "onSelect"), 0 < r.length && (t = new ic("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Tr)));
}
function $i(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var $r = { animationend: $i("Animation", "AnimationEnd"), animationiteration: $i("Animation", "AnimationIteration"), animationstart: $i("Animation", "AnimationStart"), transitionend: $i("Transition", "TransitionEnd") }, qs = {}, Om = {};
cn && (Om = document.createElement("div").style, "AnimationEvent" in window || (delete $r.animationend.animation, delete $r.animationiteration.animation, delete $r.animationstart.animation), "TransitionEvent" in window || delete $r.transitionend.transition);
function fs(e) {
  if (qs[e])
    return qs[e];
  if (!$r[e])
    return e;
  var t = $r[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Om)
      return qs[e] = t[n];
  return e;
}
var Mm = fs("animationend"), Nm = fs("animationiteration"), zm = fs("animationstart"), Lm = fs("transitionend"), Fm = /* @__PURE__ */ new Map(), qd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Bn(e, t) {
  Fm.set(e, t), dr(t, [e]);
}
for (var Zs = 0; Zs < qd.length; Zs++) {
  var Js = qd[Zs], sx = Js.toLowerCase(), ax = Js[0].toUpperCase() + Js.slice(1);
  Bn(sx, "on" + ax);
}
Bn(Mm, "onAnimationEnd");
Bn(Nm, "onAnimationIteration");
Bn(zm, "onAnimationStart");
Bn("dblclick", "onDoubleClick");
Bn("focusin", "onFocus");
Bn("focusout", "onBlur");
Bn(Lm, "onTransitionEnd");
Gr("onMouseEnter", ["mouseout", "mouseover"]);
Gr("onMouseLeave", ["mouseout", "mouseover"]);
Gr("onPointerEnter", ["pointerout", "pointerover"]);
Gr("onPointerLeave", ["pointerout", "pointerover"]);
dr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
dr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
dr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
dr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
dr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
dr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Po = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ux = new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));
function Zd(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, s1(r, t, void 0, e), e.currentTarget = null;
}
function Am(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l], a = s.instance, u = s.currentTarget;
          if (s = s.listener, a !== i && o.isPropagationStopped())
            break e;
          Zd(o, s, u), i = a;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== i && o.isPropagationStopped())
            break e;
          Zd(o, s, u), i = a;
        }
    }
  }
  if (fl)
    throw e = Ua, fl = !1, Ua = null, e;
}
function xe(e, t) {
  var n = t[Za];
  n === void 0 && (n = t[Za] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (jm(t, e, 2, !1), n.add(r));
}
function ea(e, t, n) {
  var r = 0;
  t && (r |= 4), jm(n, e, r, t);
}
var _i = "_reactListening" + Math.random().toString(36).slice(2);
function ni(e) {
  if (!e[_i]) {
    e[_i] = !0, Kp.forEach(function(n) {
      n !== "selectionchange" && (ux.has(n) || ea(n, !1, e), ea(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_i] || (t[_i] = !0, ea("selectionchange", !1, t));
  }
}
function jm(e, t, n, r) {
  switch (bm(t)) {
    case 1:
      var o = k1;
      break;
    case 4:
      o = w1;
      break;
    default:
      o = rc;
  }
  n = o.bind(null, t, n, e), o = void 0, !Da || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function ta(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var l = r.tag;
        if (l === 3 || l === 4) {
          var s = r.stateNode.containerInfo;
          if (s === o || s.nodeType === 8 && s.parentNode === o)
            break;
          if (l === 4)
            for (l = r.return; l !== null; ) {
              var a = l.tag;
              if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o))
                return;
              l = l.return;
            }
          for (; s !== null; ) {
            if (l = qn(s), l === null)
              return;
            if (a = l.tag, a === 5 || a === 6) {
              r = i = l;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
  am(function() {
    var u = i, c = Ju(n), d = [];
    e: {
      var f = Fm.get(e);
      if (f !== void 0) {
        var g = ic, x = e;
        switch (e) {
          case "keypress":
            if (qi(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = j1;
            break;
          case "focusin":
            x = "focus", g = Qs;
            break;
          case "focusout":
            x = "blur", g = Qs;
            break;
          case "beforeblur":
          case "afterblur":
            g = Qs;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = P1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = U1;
            break;
          case Mm:
          case Nm:
          case zm:
            g = _1;
            break;
          case Lm:
            g = V1;
            break;
          case "scroll":
            g = E1;
            break;
          case "wheel":
            g = K1;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = O1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Ud;
        }
        var v = (t & 4) !== 0, R = !v && e === "scroll", h = v ? f !== null ? f + "Capture" : null : f;
        v = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var y = m.stateNode;
          if (m.tag === 5 && y !== null && (m = y, h !== null && (y = Yo(p, h), y != null && v.push(ri(p, y, m)))), R)
            break;
          p = p.return;
        }
        0 < v.length && (f = new g(f, x, null, n, c), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", f && n !== ja && (x = n.relatedTarget || n.fromElement) && (qn(x) || x[dn]))
          break e;
        if ((g || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, g ? (x = n.relatedTarget || n.toElement, g = u, x = x ? qn(x) : null, x !== null && (R = fr(x), x !== R || x.tag !== 5 && x.tag !== 6) && (x = null)) : (g = null, x = u), g !== x)) {
          if (v = Bd, y = "onMouseLeave", h = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (v = Ud, y = "onPointerLeave", h = "onPointerEnter", p = "pointer"), R = g == null ? f : _r(g), m = x == null ? f : _r(x), f = new v(y, p + "leave", g, n, c), f.target = R, f.relatedTarget = m, y = null, qn(c) === u && (v = new v(h, p + "enter", x, n, c), v.target = m, v.relatedTarget = R, y = v), R = y, g && x)
            t: {
              for (v = g, h = x, p = 0, m = v; m; m = Sr(m))
                p++;
              for (m = 0, y = h; y; y = Sr(y))
                m++;
              for (; 0 < p - m; )
                v = Sr(v), p--;
              for (; 0 < m - p; )
                h = Sr(h), m--;
              for (; p--; ) {
                if (v === h || h !== null && v === h.alternate)
                  break t;
                v = Sr(v), h = Sr(h);
              }
              v = null;
            }
          else
            v = null;
          g !== null && Jd(d, f, g, v, !1), x !== null && R !== null && Jd(d, R, x, v, !0);
        }
      }
      e: {
        if (f = u ? _r(u) : window, g = f.nodeName && f.nodeName.toLowerCase(), g === "select" || g === "input" && f.type === "file")
          var w = J1;
        else if (Hd(f))
          if (Tm)
            w = rx;
          else {
            w = tx;
            var E = ex;
          }
        else
          (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (w = nx);
        if (w && (w = w(e, u))) {
          Pm(d, w, n, c);
          break e;
        }
        E && E(e, f, u), e === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && Na(f, "number", f.value);
      }
      switch (E = u ? _r(u) : window, e) {
        case "focusin":
          (Hd(E) || E.contentEditable === "true") && (Tr = E, Ka = u, Fo = null);
          break;
        case "focusout":
          Fo = Ka = Tr = null;
          break;
        case "mousedown":
          Ga = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ga = !1, Yd(d, n, c);
          break;
        case "selectionchange":
          if (lx)
            break;
        case "keydown":
        case "keyup":
          Yd(d, n, c);
      }
      var k;
      if (sc)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Pr ? Em(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ && (wm && n.locale !== "ko" && (Pr || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Pr && (k = km()) : (Rn = c, oc = "value" in Rn ? Rn.value : Rn.textContent, Pr = !0)), E = vl(u, _), 0 < E.length && (_ = new Dd(_, e, null, n, c), d.push({ event: _, listeners: E }), k ? _.data = k : (k = Rm(n), k !== null && (_.data = k)))), (k = Q1 ? X1(e, n) : Y1(e, n)) && (u = vl(u, "onBeforeInput"), 0 < u.length && (c = new Dd("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = k));
    }
    Am(d, t);
  });
}
function ri(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function vl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Yo(e, n), i != null && r.unshift(ri(e, i, o)), i = Yo(e, t), i != null && r.push(ri(e, i, o))), e = e.return;
  }
  return r;
}
function Sr(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Jd(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (a = Yo(n, i), a != null && l.unshift(ri(n, a, s))) : o || (a = Yo(n, i), a != null && l.push(ri(n, a, s)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var cx = /\r\n?/g, dx = /\u0000|\uFFFD/g;
function ef(e) {
  return (typeof e == "string" ? e : "" + e).replace(cx, `
`).replace(dx, "");
}
function Ii(e, t, n) {
  if (t = ef(t), ef(e) !== t && n)
    throw Error(O(425));
}
function yl() {
}
var Qa = null, Xa = null;
function Ya(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var qa = typeof setTimeout == "function" ? setTimeout : void 0, fx = typeof clearTimeout == "function" ? clearTimeout : void 0, tf = typeof Promise == "function" ? Promise : void 0, px = typeof queueMicrotask == "function" ? queueMicrotask : typeof tf < "u" ? function(e) {
  return tf.resolve(null).then(e).catch(mx);
} : qa;
function mx(e) {
  setTimeout(function() {
    throw e;
  });
}
function na(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Jo(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Jo(t);
}
function In(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function nf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var io = Math.random().toString(36).slice(2), Qt = "__reactFiber$" + io, oi = "__reactProps$" + io, dn = "__reactContainer$" + io, Za = "__reactEvents$" + io, hx = "__reactListeners$" + io, gx = "__reactHandles$" + io;
function qn(e) {
  var t = e[Qt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[dn] || n[Qt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = nf(e); e !== null; ) {
          if (n = e[Qt])
            return n;
          e = nf(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function xi(e) {
  return e = e[Qt] || e[dn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function _r(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(O(33));
}
function ps(e) {
  return e[oi] || null;
}
var Ja = [], Ir = -1;
function Dn(e) {
  return { current: e };
}
function Se(e) {
  0 > Ir || (e.current = Ja[Ir], Ja[Ir] = null, Ir--);
}
function ve(e, t) {
  Ir++, Ja[Ir] = e.current, e.current = t;
}
var jn = {}, Ze = Dn(jn), at = Dn(!1), lr = jn;
function Qr(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return jn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function ut(e) {
  return e = e.childContextTypes, e != null;
}
function xl() {
  Se(at), Se(Ze);
}
function rf(e, t, n) {
  if (Ze.current !== jn)
    throw Error(O(168));
  ve(Ze, t), ve(at, n);
}
function Bm(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(O(108, e1(e) || "Unknown", o));
  return $e({}, n, r);
}
function Sl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || jn, lr = Ze.current, ve(Ze, e), ve(at, at.current), !0;
}
function of(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(O(169));
  n ? (e = Bm(e, t, lr), r.__reactInternalMemoizedMergedChildContext = e, Se(at), Se(Ze), ve(Ze, e)) : Se(at), ve(at, n);
}
var rn = null, ms = !1, ra = !1;
function Dm(e) {
  rn === null ? rn = [e] : rn.push(e);
}
function vx(e) {
  ms = !0, Dm(e);
}
function Un() {
  if (!ra && rn !== null) {
    ra = !0;
    var e = 0, t = pe;
    try {
      var n = rn;
      for (pe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      rn = null, ms = !1;
    } catch (o) {
      throw rn !== null && (rn = rn.slice(e + 1)), fm(ec, Un), o;
    } finally {
      pe = t, ra = !1;
    }
  }
  return null;
}
var Or = [], Mr = 0, Cl = null, bl = 0, Et = [], Rt = 0, sr = null, ln = 1, sn = "";
function Kn(e, t) {
  Or[Mr++] = bl, Or[Mr++] = Cl, Cl = e, bl = t;
}
function Um(e, t, n) {
  Et[Rt++] = ln, Et[Rt++] = sn, Et[Rt++] = sr, sr = e;
  var r = ln;
  e = sn;
  var o = 32 - Dt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Dt(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, ln = 1 << 32 - Dt(t) + o | n << o | r, sn = i + e;
  } else
    ln = 1 << i | n << o | r, sn = e;
}
function uc(e) {
  e.return !== null && (Kn(e, 1), Um(e, 1, 0));
}
function cc(e) {
  for (; e === Cl; )
    Cl = Or[--Mr], Or[Mr] = null, bl = Or[--Mr], Or[Mr] = null;
  for (; e === sr; )
    sr = Et[--Rt], Et[Rt] = null, sn = Et[--Rt], Et[Rt] = null, ln = Et[--Rt], Et[Rt] = null;
}
var gt = null, mt = null, we = !1, Bt = null;
function Wm(e, t) {
  var n = Tt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function lf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, gt = e, mt = In(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, gt = e, mt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = sr !== null ? { id: ln, overflow: sn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Tt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, gt = e, mt = null, !0) : !1;
    default:
      return !1;
  }
}
function eu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function tu(e) {
  if (we) {
    var t = mt;
    if (t) {
      var n = t;
      if (!lf(e, t)) {
        if (eu(e))
          throw Error(O(418));
        t = In(n.nextSibling);
        var r = gt;
        t && lf(e, t) ? Wm(r, n) : (e.flags = e.flags & -4097 | 2, we = !1, gt = e);
      }
    } else {
      if (eu(e))
        throw Error(O(418));
      e.flags = e.flags & -4097 | 2, we = !1, gt = e;
    }
  }
}
function sf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  gt = e;
}
function Oi(e) {
  if (e !== gt)
    return !1;
  if (!we)
    return sf(e), we = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ya(e.type, e.memoizedProps)), t && (t = mt)) {
    if (eu(e))
      throw Vm(), Error(O(418));
    for (; t; )
      Wm(e, t), t = In(t.nextSibling);
  }
  if (sf(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              mt = In(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      mt = null;
    }
  } else
    mt = gt ? In(e.stateNode.nextSibling) : null;
  return !0;
}
function Vm() {
  for (var e = mt; e; )
    e = In(e.nextSibling);
}
function Xr() {
  mt = gt = null, we = !1;
}
function dc(e) {
  Bt === null ? Bt = [e] : Bt.push(e);
}
var yx = hn.ReactCurrentBatchConfig;
function Ft(e, t) {
  if (e && e.defaultProps) {
    t = $e({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var kl = Dn(null), wl = null, Nr = null, fc = null;
function pc() {
  fc = Nr = wl = null;
}
function mc(e) {
  var t = kl.current;
  Se(kl), e._currentValue = t;
}
function nu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Wr(e, t) {
  wl = e, fc = Nr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (it = !0), e.firstContext = null);
}
function _t(e) {
  var t = e._currentValue;
  if (fc !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Nr === null) {
      if (wl === null)
        throw Error(O(308));
      Nr = e, wl.dependencies = { lanes: 0, firstContext: e };
    } else
      Nr = Nr.next = e;
  return t;
}
var Zn = null;
function hc(e) {
  Zn === null ? Zn = [e] : Zn.push(e);
}
function Hm(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, hc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, fn(e, r);
}
function fn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var kn = !1;
function gc(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Km(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function an(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function On(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, le & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, fn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, hc(r)) : (t.next = o.next, o.next = t), r.interleaved = t, fn(e, n);
}
function Zi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, tc(e, n);
  }
}
function af(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = l : i = i.next = l, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else
      o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function El(e, t, n, r) {
  var o = e.updateQueue;
  kn = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s, u = a.next;
    a.next = null, l === null ? i = u : l.next = u, l = a;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== l && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = a));
  }
  if (i !== null) {
    var d = o.baseState;
    l = 0, c = u = a = null, s = i;
    do {
      var f = s.lane, g = s.eventTime;
      if ((r & f) === f) {
        c !== null && (c = c.next = {
          eventTime: g,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var x = e, v = s;
          switch (f = t, g = n, v.tag) {
            case 1:
              if (x = v.payload, typeof x == "function") {
                d = x.call(g, d, f);
                break e;
              }
              d = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = v.payload, f = typeof x == "function" ? x.call(g, d, f) : x, f == null)
                break e;
              d = $e({}, d, f);
              break e;
            case 2:
              kn = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [s] : f.push(s));
      } else
        g = { eventTime: g, lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = g, a = d) : c = c.next = g, l |= f;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null)
          break;
        f = s, s = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (a = d), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    ur |= l, e.lanes = l, e.memoizedState = d;
  }
}
function uf(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(O(191, o));
        o.call(r);
      }
    }
}
var Gm = new Hp.Component().refs;
function ru(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : $e({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hs = { isMounted: function(e) {
  return (e = e._reactInternals) ? fr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = et(), o = Nn(e), i = an(r, o);
  i.payload = t, n != null && (i.callback = n), t = On(e, i, o), t !== null && (Ut(t, e, o, r), Zi(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = et(), o = Nn(e), i = an(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = On(e, i, o), t !== null && (Ut(t, e, o, r), Zi(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = et(), r = Nn(e), o = an(n, r);
  o.tag = 2, t != null && (o.callback = t), t = On(e, o, r), t !== null && (Ut(t, e, r, n), Zi(t, e, r));
} };
function cf(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !ti(n, r) || !ti(o, i) : !0;
}
function Qm(e, t, n) {
  var r = !1, o = jn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = _t(i) : (o = ut(t) ? lr : Ze.current, r = t.contextTypes, i = (r = r != null) ? Qr(e, o) : jn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function df(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hs.enqueueReplaceState(t, t.state, null);
}
function ou(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = Gm, gc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = _t(i) : (i = ut(t) ? lr : Ze.current, o.context = Qr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ru(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && hs.enqueueReplaceState(o, o.state, null), El(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function yo(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(O(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var s = o.refs;
        s === Gm && (s = o.refs = {}), l === null ? delete s[i] : s[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(O(284));
    if (!n._owner)
      throw Error(O(290, e));
  }
  return e;
}
function Mi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ff(e) {
  var t = e._init;
  return t(e._payload);
}
function Xm(e) {
  function t(h, p) {
    if (e) {
      var m = h.deletions;
      m === null ? (h.deletions = [p], h.flags |= 16) : m.push(p);
    }
  }
  function n(h, p) {
    if (!e)
      return null;
    for (; p !== null; )
      t(h, p), p = p.sibling;
    return null;
  }
  function r(h, p) {
    for (h = /* @__PURE__ */ new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), p = p.sibling;
    return h;
  }
  function o(h, p) {
    return h = zn(h, p), h.index = 0, h.sibling = null, h;
  }
  function i(h, p, m) {
    return h.index = m, e ? (m = h.alternate, m !== null ? (m = m.index, m < p ? (h.flags |= 2, p) : m) : (h.flags |= 2, p)) : (h.flags |= 1048576, p);
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, p, m, y) {
    return p === null || p.tag !== 6 ? (p = ca(m, h.mode, y), p.return = h, p) : (p = o(p, m), p.return = h, p);
  }
  function a(h, p, m, y) {
    var w = m.type;
    return w === Rr ? c(h, p, m.props.children, y, m.key) : p !== null && (p.elementType === w || typeof w == "object" && w !== null && w.$$typeof === bn && ff(w) === p.type) ? (y = o(p, m.props), y.ref = yo(h, p, m), y.return = h, y) : (y = ol(m.type, m.key, m.props, null, h.mode, y), y.ref = yo(h, p, m), y.return = h, y);
  }
  function u(h, p, m, y) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = da(m, h.mode, y), p.return = h, p) : (p = o(p, m.children || []), p.return = h, p);
  }
  function c(h, p, m, y, w) {
    return p === null || p.tag !== 7 ? (p = nr(m, h.mode, y, w), p.return = h, p) : (p = o(p, m), p.return = h, p);
  }
  function d(h, p, m) {
    if (typeof p == "string" && p !== "" || typeof p == "number")
      return p = ca("" + p, h.mode, m), p.return = h, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case bi:
          return m = ol(p.type, p.key, p.props, null, h.mode, m), m.ref = yo(h, null, p), m.return = h, m;
        case Er:
          return p = da(p, h.mode, m), p.return = h, p;
        case bn:
          var y = p._init;
          return d(h, y(p._payload), m);
      }
      if (Eo(p) || po(p))
        return p = nr(p, h.mode, m, null), p.return = h, p;
      Mi(h, p);
    }
    return null;
  }
  function f(h, p, m, y) {
    var w = p !== null ? p.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return w !== null ? null : s(h, p, "" + m, y);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case bi:
          return m.key === w ? a(h, p, m, y) : null;
        case Er:
          return m.key === w ? u(h, p, m, y) : null;
        case bn:
          return w = m._init, f(
            h,
            p,
            w(m._payload),
            y
          );
      }
      if (Eo(m) || po(m))
        return w !== null ? null : c(h, p, m, y, null);
      Mi(h, m);
    }
    return null;
  }
  function g(h, p, m, y, w) {
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return h = h.get(m) || null, s(p, h, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case bi:
          return h = h.get(y.key === null ? m : y.key) || null, a(p, h, y, w);
        case Er:
          return h = h.get(y.key === null ? m : y.key) || null, u(p, h, y, w);
        case bn:
          var E = y._init;
          return g(h, p, m, E(y._payload), w);
      }
      if (Eo(y) || po(y))
        return h = h.get(m) || null, c(p, h, y, w, null);
      Mi(p, y);
    }
    return null;
  }
  function x(h, p, m, y) {
    for (var w = null, E = null, k = p, _ = p = 0, M = null; k !== null && _ < m.length; _++) {
      k.index > _ ? (M = k, k = null) : M = k.sibling;
      var T = f(h, k, m[_], y);
      if (T === null) {
        k === null && (k = M);
        break;
      }
      e && k && T.alternate === null && t(h, k), p = i(T, p, _), E === null ? w = T : E.sibling = T, E = T, k = M;
    }
    if (_ === m.length)
      return n(h, k), we && Kn(h, _), w;
    if (k === null) {
      for (; _ < m.length; _++)
        k = d(h, m[_], y), k !== null && (p = i(k, p, _), E === null ? w = k : E.sibling = k, E = k);
      return we && Kn(h, _), w;
    }
    for (k = r(h, k); _ < m.length; _++)
      M = g(k, h, _, m[_], y), M !== null && (e && M.alternate !== null && k.delete(M.key === null ? _ : M.key), p = i(M, p, _), E === null ? w = M : E.sibling = M, E = M);
    return e && k.forEach(function(j) {
      return t(h, j);
    }), we && Kn(h, _), w;
  }
  function v(h, p, m, y) {
    var w = po(m);
    if (typeof w != "function")
      throw Error(O(150));
    if (m = w.call(m), m == null)
      throw Error(O(151));
    for (var E = w = null, k = p, _ = p = 0, M = null, T = m.next(); k !== null && !T.done; _++, T = m.next()) {
      k.index > _ ? (M = k, k = null) : M = k.sibling;
      var j = f(h, k, T.value, y);
      if (j === null) {
        k === null && (k = M);
        break;
      }
      e && k && j.alternate === null && t(h, k), p = i(j, p, _), E === null ? w = j : E.sibling = j, E = j, k = M;
    }
    if (T.done)
      return n(
        h,
        k
      ), we && Kn(h, _), w;
    if (k === null) {
      for (; !T.done; _++, T = m.next())
        T = d(h, T.value, y), T !== null && (p = i(T, p, _), E === null ? w = T : E.sibling = T, E = T);
      return we && Kn(h, _), w;
    }
    for (k = r(h, k); !T.done; _++, T = m.next())
      T = g(k, h, _, T.value, y), T !== null && (e && T.alternate !== null && k.delete(T.key === null ? _ : T.key), p = i(T, p, _), E === null ? w = T : E.sibling = T, E = T);
    return e && k.forEach(function(B) {
      return t(h, B);
    }), we && Kn(h, _), w;
  }
  function R(h, p, m, y) {
    if (typeof m == "object" && m !== null && m.type === Rr && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case bi:
          e: {
            for (var w = m.key, E = p; E !== null; ) {
              if (E.key === w) {
                if (w = m.type, w === Rr) {
                  if (E.tag === 7) {
                    n(h, E.sibling), p = o(E, m.props.children), p.return = h, h = p;
                    break e;
                  }
                } else if (E.elementType === w || typeof w == "object" && w !== null && w.$$typeof === bn && ff(w) === E.type) {
                  n(h, E.sibling), p = o(E, m.props), p.ref = yo(h, E, m), p.return = h, h = p;
                  break e;
                }
                n(h, E);
                break;
              } else
                t(h, E);
              E = E.sibling;
            }
            m.type === Rr ? (p = nr(m.props.children, h.mode, y, m.key), p.return = h, h = p) : (y = ol(m.type, m.key, m.props, null, h.mode, y), y.ref = yo(h, p, m), y.return = h, h = y);
          }
          return l(h);
        case Er:
          e: {
            for (E = m.key; p !== null; ) {
              if (p.key === E)
                if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                  n(h, p.sibling), p = o(p, m.children || []), p.return = h, h = p;
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else
                t(h, p);
              p = p.sibling;
            }
            p = da(m, h.mode, y), p.return = h, h = p;
          }
          return l(h);
        case bn:
          return E = m._init, R(h, p, E(m._payload), y);
      }
      if (Eo(m))
        return x(h, p, m, y);
      if (po(m))
        return v(h, p, m, y);
      Mi(h, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, p !== null && p.tag === 6 ? (n(h, p.sibling), p = o(p, m), p.return = h, h = p) : (n(h, p), p = ca(m, h.mode, y), p.return = h, h = p), l(h)) : n(h, p);
  }
  return R;
}
var Yr = Xm(!0), Ym = Xm(!1), Si = {}, qt = Dn(Si), ii = Dn(Si), li = Dn(Si);
function Jn(e) {
  if (e === Si)
    throw Error(O(174));
  return e;
}
function vc(e, t) {
  switch (ve(li, t), ve(ii, e), ve(qt, Si), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : La(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = La(t, e);
  }
  Se(qt), ve(qt, t);
}
function qr() {
  Se(qt), Se(ii), Se(li);
}
function qm(e) {
  Jn(li.current);
  var t = Jn(qt.current), n = La(t, e.type);
  t !== n && (ve(ii, e), ve(qt, n));
}
function yc(e) {
  ii.current === e && (Se(qt), Se(ii));
}
var Pe = Dn(0);
function Rl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var oa = [];
function xc() {
  for (var e = 0; e < oa.length; e++)
    oa[e]._workInProgressVersionPrimary = null;
  oa.length = 0;
}
var Ji = hn.ReactCurrentDispatcher, ia = hn.ReactCurrentBatchConfig, ar = 0, Te = null, Fe = null, je = null, Pl = !1, Ao = !1, si = 0, xx = 0;
function Qe() {
  throw Error(O(321));
}
function Sc(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Wt(e[n], t[n]))
      return !1;
  return !0;
}
function Cc(e, t, n, r, o, i) {
  if (ar = i, Te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ji.current = e === null || e.memoizedState === null ? kx : wx, e = n(r, o), Ao) {
    i = 0;
    do {
      if (Ao = !1, si = 0, 25 <= i)
        throw Error(O(301));
      i += 1, je = Fe = null, t.updateQueue = null, Ji.current = Ex, e = n(r, o);
    } while (Ao);
  }
  if (Ji.current = Tl, t = Fe !== null && Fe.next !== null, ar = 0, je = Fe = Te = null, Pl = !1, t)
    throw Error(O(300));
  return e;
}
function bc() {
  var e = si !== 0;
  return si = 0, e;
}
function Kt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return je === null ? Te.memoizedState = je = e : je = je.next = e, je;
}
function It() {
  if (Fe === null) {
    var e = Te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = Fe.next;
  var t = je === null ? Te.memoizedState : je.next;
  if (t !== null)
    je = t, Fe = e;
  else {
    if (e === null)
      throw Error(O(310));
    Fe = e, e = { memoizedState: Fe.memoizedState, baseState: Fe.baseState, baseQueue: Fe.baseQueue, queue: Fe.queue, next: null }, je === null ? Te.memoizedState = je = e : je = je.next = e;
  }
  return je;
}
function ai(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function la(e) {
  var t = It(), n = t.queue;
  if (n === null)
    throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = Fe, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      o.next = i.next, i.next = l;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var s = l = null, a = null, u = i;
    do {
      var c = u.lane;
      if ((ar & c) === c)
        a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (s = a = d, l = r) : a = a.next = d, Te.lanes |= c, ur |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? l = r : a.next = s, Wt(r, t.memoizedState) || (it = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Te.lanes |= i, ur |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function sa(e) {
  var t = It(), n = t.queue;
  if (n === null)
    throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    Wt(i, t.memoizedState) || (it = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Zm() {
}
function Jm(e, t) {
  var n = Te, r = It(), o = t(), i = !Wt(r.memoizedState, o);
  if (i && (r.memoizedState = o, it = !0), r = r.queue, kc(nh.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || je !== null && je.memoizedState.tag & 1) {
    if (n.flags |= 2048, ui(9, th.bind(null, n, r, o, t), void 0, null), Be === null)
      throw Error(O(349));
    ar & 30 || eh(n, t, o);
  }
  return o;
}
function eh(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function th(e, t, n, r) {
  t.value = n, t.getSnapshot = r, rh(t) && oh(e);
}
function nh(e, t, n) {
  return n(function() {
    rh(t) && oh(e);
  });
}
function rh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Wt(e, n);
  } catch {
    return !0;
  }
}
function oh(e) {
  var t = fn(e, 1);
  t !== null && Ut(t, e, 1, -1);
}
function pf(e) {
  var t = Kt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ai, lastRenderedState: e }, t.queue = e, e = e.dispatch = bx.bind(null, Te, e), [t.memoizedState, e];
}
function ui(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ih() {
  return It().memoizedState;
}
function el(e, t, n, r) {
  var o = Kt();
  Te.flags |= e, o.memoizedState = ui(1 | t, n, void 0, r === void 0 ? null : r);
}
function gs(e, t, n, r) {
  var o = It();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Fe !== null) {
    var l = Fe.memoizedState;
    if (i = l.destroy, r !== null && Sc(r, l.deps)) {
      o.memoizedState = ui(t, n, i, r);
      return;
    }
  }
  Te.flags |= e, o.memoizedState = ui(1 | t, n, i, r);
}
function mf(e, t) {
  return el(8390656, 8, e, t);
}
function kc(e, t) {
  return gs(2048, 8, e, t);
}
function lh(e, t) {
  return gs(4, 2, e, t);
}
function sh(e, t) {
  return gs(4, 4, e, t);
}
function ah(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function uh(e, t, n) {
  return n = n != null ? n.concat([e]) : null, gs(4, 4, ah.bind(null, t, e), n);
}
function wc() {
}
function ch(e, t) {
  var n = It();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function dh(e, t) {
  var n = It();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function fh(e, t, n) {
  return ar & 21 ? (Wt(n, t) || (n = hm(), Te.lanes |= n, ur |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, it = !0), e.memoizedState = n);
}
function Sx(e, t) {
  var n = pe;
  pe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ia.transition;
  ia.transition = {};
  try {
    e(!1), t();
  } finally {
    pe = n, ia.transition = r;
  }
}
function ph() {
  return It().memoizedState;
}
function Cx(e, t, n) {
  var r = Nn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, mh(e))
    hh(t, n);
  else if (n = Hm(e, t, n, r), n !== null) {
    var o = et();
    Ut(n, e, r, o), gh(n, t, r);
  }
}
function bx(e, t, n) {
  var r = Nn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (mh(e))
    hh(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var l = t.lastRenderedState, s = i(l, n);
        if (o.hasEagerState = !0, o.eagerState = s, Wt(s, l)) {
          var a = t.interleaved;
          a === null ? (o.next = o, hc(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = Hm(e, t, o, r), n !== null && (o = et(), Ut(n, e, r, o), gh(n, t, r));
  }
}
function mh(e) {
  var t = e.alternate;
  return e === Te || t !== null && t === Te;
}
function hh(e, t) {
  Ao = Pl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function gh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, tc(e, n);
  }
}
var Tl = { readContext: _t, useCallback: Qe, useContext: Qe, useEffect: Qe, useImperativeHandle: Qe, useInsertionEffect: Qe, useLayoutEffect: Qe, useMemo: Qe, useReducer: Qe, useRef: Qe, useState: Qe, useDebugValue: Qe, useDeferredValue: Qe, useTransition: Qe, useMutableSource: Qe, useSyncExternalStore: Qe, useId: Qe, unstable_isNewReconciler: !1 }, kx = { readContext: _t, useCallback: function(e, t) {
  return Kt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: _t, useEffect: mf, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, el(
    4194308,
    4,
    ah.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return el(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return el(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Kt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Kt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Cx.bind(null, Te, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Kt();
  return e = { current: e }, t.memoizedState = e;
}, useState: pf, useDebugValue: wc, useDeferredValue: function(e) {
  return Kt().memoizedState = e;
}, useTransition: function() {
  var e = pf(!1), t = e[0];
  return e = Sx.bind(null, e[1]), Kt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Te, o = Kt();
  if (we) {
    if (n === void 0)
      throw Error(O(407));
    n = n();
  } else {
    if (n = t(), Be === null)
      throw Error(O(349));
    ar & 30 || eh(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, mf(nh.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ui(9, th.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Kt(), t = Be.identifierPrefix;
  if (we) {
    var n = sn, r = ln;
    n = (r & ~(1 << 32 - Dt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = si++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = xx++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, wx = {
  readContext: _t,
  useCallback: ch,
  useContext: _t,
  useEffect: kc,
  useImperativeHandle: uh,
  useInsertionEffect: lh,
  useLayoutEffect: sh,
  useMemo: dh,
  useReducer: la,
  useRef: ih,
  useState: function() {
    return la(ai);
  },
  useDebugValue: wc,
  useDeferredValue: function(e) {
    var t = It();
    return fh(t, Fe.memoizedState, e);
  },
  useTransition: function() {
    var e = la(ai)[0], t = It().memoizedState;
    return [e, t];
  },
  useMutableSource: Zm,
  useSyncExternalStore: Jm,
  useId: ph,
  unstable_isNewReconciler: !1
}, Ex = { readContext: _t, useCallback: ch, useContext: _t, useEffect: kc, useImperativeHandle: uh, useInsertionEffect: lh, useLayoutEffect: sh, useMemo: dh, useReducer: sa, useRef: ih, useState: function() {
  return sa(ai);
}, useDebugValue: wc, useDeferredValue: function(e) {
  var t = It();
  return Fe === null ? t.memoizedState = e : fh(t, Fe.memoizedState, e);
}, useTransition: function() {
  var e = sa(ai)[0], t = It().memoizedState;
  return [e, t];
}, useMutableSource: Zm, useSyncExternalStore: Jm, useId: ph, unstable_isNewReconciler: !1 };
function Zr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Jy(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function aa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function iu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Rx = typeof WeakMap == "function" ? WeakMap : Map;
function vh(e, t, n) {
  n = an(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    _l || (_l = !0, hu = r), iu(e, t);
  }, n;
}
function yh(e, t, n) {
  n = an(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      iu(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    iu(e, t), typeof r != "function" && (Mn === null ? Mn = /* @__PURE__ */ new Set([this]) : Mn.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function hf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Rx();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Bx.bind(null, e, t, n), t.then(e, e));
}
function gf(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vf(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = an(-1, 1), t.tag = 2, On(n, t, 1))), n.lanes |= 1), e);
}
var Px = hn.ReactCurrentOwner, it = !1;
function Je(e, t, n, r) {
  t.child = e === null ? Ym(t, null, n, r) : Yr(t, e.child, n, r);
}
function yf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Wr(t, o), r = Cc(e, t, n, r, i, o), n = bc(), e !== null && !it ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, pn(e, t, o)) : (we && n && uc(t), t.flags |= 1, Je(e, t, r, o), t.child);
}
function xf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Oc(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, xh(e, t, i, r, o)) : (e = ol(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ti, n(l, r) && e.ref === t.ref)
      return pn(e, t, o);
  }
  return t.flags |= 1, e = zn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function xh(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ti(i, r) && e.ref === t.ref)
      if (it = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (it = !0);
      else
        return t.lanes = e.lanes, pn(e, t, o);
  }
  return lu(e, t, n, r, o);
}
function Sh(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ve(Lr, ft), ft |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ve(Lr, ft), ft |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ve(Lr, ft), ft |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ve(Lr, ft), ft |= r;
  return Je(e, t, o, n), t.child;
}
function Ch(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function lu(e, t, n, r, o) {
  var i = ut(n) ? lr : Ze.current;
  return i = Qr(t, i), Wr(t, o), n = Cc(e, t, n, r, i, o), r = bc(), e !== null && !it ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, pn(e, t, o)) : (we && r && uc(t), t.flags |= 1, Je(e, t, n, o), t.child);
}
function Sf(e, t, n, r, o) {
  if (ut(n)) {
    var i = !0;
    Sl(t);
  } else
    i = !1;
  if (Wr(t, o), t.stateNode === null)
    tl(e, t), Qm(t, n, r), ou(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = _t(u) : (u = ut(n) ? lr : Ze.current, u = Qr(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    d || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && df(t, l, r, u), kn = !1;
    var f = t.memoizedState;
    l.state = f, El(t, r, l, o), a = t.memoizedState, s !== r || f !== a || at.current || kn ? (typeof c == "function" && (ru(t, n, c, r), a = t.memoizedState), (s = kn || cf(t, n, s, r, f, a, u)) ? (d || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, Km(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Ft(t.type, s), l.props = u, d = t.pendingProps, f = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = _t(a) : (a = ut(n) ? lr : Ze.current, a = Qr(t, a));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== d || f !== a) && df(t, l, r, a), kn = !1, f = t.memoizedState, l.state = f, El(t, r, l, o);
    var x = t.memoizedState;
    s !== d || f !== x || at.current || kn ? (typeof g == "function" && (ru(t, n, g, r), x = t.memoizedState), (u = kn || cf(t, n, u, r, f, x, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, x, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, x, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), l.props = r, l.state = x, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return su(e, t, n, r, i, o);
}
function su(e, t, n, r, o, i) {
  Ch(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return o && of(t, n, !1), pn(e, t, i);
  r = t.stateNode, Px.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = Yr(t, e.child, null, i), t.child = Yr(t, null, s, i)) : Je(e, t, s, i), t.memoizedState = r.state, o && of(t, n, !0), t.child;
}
function bh(e) {
  var t = e.stateNode;
  t.pendingContext ? rf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && rf(e, t.context, !1), vc(e, t.containerInfo);
}
function Cf(e, t, n, r, o) {
  return Xr(), dc(o), t.flags |= 256, Je(e, t, n, r), t.child;
}
var au = { dehydrated: null, treeContext: null, retryLane: 0 };
function uu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function kh(e, t, n) {
  var r = t.pendingProps, o = Pe.current, i = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ve(Pe, o & 1), e === null)
    return tu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = xs(l, r, 0, null), e = nr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = uu(n), t.memoizedState = au, e) : Ec(t, l));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return Tx(e, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, s = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = zn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = zn(s, i) : (i = nr(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? uu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = au, r;
  }
  return i = e.child, e = i.sibling, r = zn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ec(e, t) {
  return t = xs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ni(e, t, n, r) {
  return r !== null && dc(r), Yr(t, e.child, null, n), e = Ec(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Tx(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = aa(Error(O(422))), Ni(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = xs({ mode: "visible", children: r.children }, o, 0, null), i = nr(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Yr(t, e.child, null, l), t.child.memoizedState = uu(l), t.memoizedState = au, i);
  if (!(t.mode & 1))
    return Ni(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, i = Error(O(419)), r = aa(i, r, void 0), Ni(e, t, l, r);
  }
  if (s = (l & e.childLanes) !== 0, it || s) {
    if (r = Be, r !== null) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, fn(e, o), Ut(r, e, o, -1));
    }
    return Ic(), r = aa(Error(O(421))), Ni(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Dx.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, mt = In(o.nextSibling), gt = t, we = !0, Bt = null, e !== null && (Et[Rt++] = ln, Et[Rt++] = sn, Et[Rt++] = sr, ln = e.id, sn = e.overflow, sr = t), t = Ec(t, r.children), t.flags |= 4096, t);
}
function bf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), nu(e.return, t, n);
}
function ua(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function wh(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Je(e, t, r.children, n), r = Pe.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && bf(e, n, t);
          else if (e.tag === 19)
            bf(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (ve(Pe, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Rl(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ua(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Rl(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        ua(t, !0, n, null, i);
        break;
      case "together":
        ua(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function tl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function pn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), ur |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(O(153));
  if (t.child !== null) {
    for (e = t.child, n = zn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = zn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function $x(e, t, n) {
  switch (t.tag) {
    case 3:
      bh(t), Xr();
      break;
    case 5:
      qm(t);
      break;
    case 1:
      ut(t.type) && Sl(t);
      break;
    case 4:
      vc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ve(kl, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ve(Pe, Pe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? kh(e, t, n) : (ve(Pe, Pe.current & 1), e = pn(e, t, n), e !== null ? e.sibling : null);
      ve(Pe, Pe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return wh(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ve(Pe, Pe.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Sh(e, t, n);
  }
  return pn(e, t, n);
}
var Eh, cu, Rh, Ph;
Eh = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
cu = function() {
};
Rh = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Jn(qt.current);
    var i = null;
    switch (n) {
      case "input":
        o = Oa(e, o), r = Oa(e, r), i = [];
        break;
      case "select":
        o = $e({}, o, { value: void 0 }), r = $e({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = za(e, o), r = za(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = yl);
    }
    Fa(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (l in s)
            s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Qo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null))
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
            for (l in a)
              a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
          } else
            n || (i || (i = []), i.push(
              u,
              n
            )), n = a;
        else
          u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Qo.hasOwnProperty(u) ? (a != null && u === "onScroll" && xe("scroll", e), i || s === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ph = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xo(e, t) {
  if (!we)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function Xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function _x(e, t, n) {
  var r = t.pendingProps;
  switch (cc(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Xe(t), null;
    case 1:
      return ut(t.type) && xl(), Xe(t), null;
    case 3:
      return r = t.stateNode, qr(), Se(at), Se(Ze), xc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Oi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Bt !== null && (yu(Bt), Bt = null))), cu(e, t), Xe(t), null;
    case 5:
      yc(t);
      var o = Jn(li.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Rh(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(O(166));
          return Xe(t), null;
        }
        if (e = Jn(qt.current), Oi(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Qt] = t, r[oi] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              xe("cancel", r), xe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              xe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Po.length; o++)
                xe(Po[o], r);
              break;
            case "source":
              xe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              xe(
                "error",
                r
              ), xe("load", r);
              break;
            case "details":
              xe("toggle", r);
              break;
            case "input":
              _d(r, i), xe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, xe("invalid", r);
              break;
            case "textarea":
              Od(r, i), xe("invalid", r);
          }
          Fa(n, i), o = null;
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Ii(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Ii(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : Qo.hasOwnProperty(l) && s != null && l === "onScroll" && xe("scroll", r);
            }
          switch (n) {
            case "input":
              ki(r), Id(r, i, !0);
              break;
            case "textarea":
              ki(r), Md(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = yl);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = em(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Qt] = t, e[oi] = r, Eh(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Aa(n, r), n) {
              case "dialog":
                xe("cancel", e), xe("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                xe("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Po.length; o++)
                  xe(Po[o], e);
                o = r;
                break;
              case "source":
                xe("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                xe(
                  "error",
                  e
                ), xe("load", e), o = r;
                break;
              case "details":
                xe("toggle", e), o = r;
                break;
              case "input":
                _d(e, r), o = Oa(e, r), xe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = $e({}, r, { value: void 0 }), xe("invalid", e);
                break;
              case "textarea":
                Od(e, r), o = za(e, r), xe("invalid", e);
                break;
              default:
                o = r;
            }
            Fa(n, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style" ? rm(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && tm(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Xo(e, a) : typeof a == "number" && Xo(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Qo.hasOwnProperty(i) ? a != null && i === "onScroll" && xe("scroll", e) : a != null && Xu(e, i, a, l));
              }
            switch (n) {
              case "input":
                ki(e), Id(e, r, !1);
                break;
              case "textarea":
                ki(e), Md(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + An(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? jr(e, !!r.multiple, i, !1) : r.defaultValue != null && jr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = yl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Xe(t), null;
    case 6:
      if (e && t.stateNode != null)
        Ph(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(O(166));
        if (n = Jn(li.current), Jn(qt.current), Oi(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Qt] = t, (i = r.nodeValue !== n) && (e = gt, e !== null))
            switch (e.tag) {
              case 3:
                Ii(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ii(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Qt] = t, t.stateNode = r;
      }
      return Xe(t), null;
    case 13:
      if (Se(Pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (we && mt !== null && t.mode & 1 && !(t.flags & 128))
          Vm(), Xr(), t.flags |= 98560, i = !1;
        else if (i = Oi(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(O(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(O(317));
            i[Qt] = t;
          } else
            Xr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Xe(t), i = !1;
        } else
          Bt !== null && (yu(Bt), Bt = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Pe.current & 1 ? Ae === 0 && (Ae = 3) : Ic())), t.updateQueue !== null && (t.flags |= 4), Xe(t), null);
    case 4:
      return qr(), cu(e, t), e === null && ni(t.stateNode.containerInfo), Xe(t), null;
    case 10:
      return mc(t.type._context), Xe(t), null;
    case 17:
      return ut(t.type) && xl(), Xe(t), null;
    case 19:
      if (Se(Pe), i = t.memoizedState, i === null)
        return Xe(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null)
        if (r)
          xo(i, !1);
        else {
          if (Ae !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (l = Rl(e), l !== null) {
                for (t.flags |= 128, xo(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return ve(Pe, Pe.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Me() > Jr && (t.flags |= 128, r = !0, xo(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Rl(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), xo(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !we)
              return Xe(t), null;
          } else
            2 * Me() - i.renderingStartTime > Jr && n !== 1073741824 && (t.flags |= 128, r = !0, xo(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Me(), t.sibling = null, n = Pe.current, ve(Pe, r ? n & 1 | 2 : n & 1), t) : (Xe(t), null);
    case 22:
    case 23:
      return _c(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ft & 1073741824 && (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Xe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function Ix(e, t) {
  switch (cc(t), t.tag) {
    case 1:
      return ut(t.type) && xl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return qr(), Se(at), Se(Ze), xc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return yc(t), null;
    case 13:
      if (Se(Pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(O(340));
        Xr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Se(Pe), null;
    case 4:
      return qr(), null;
    case 10:
      return mc(t.type._context), null;
    case 22:
    case 23:
      return _c(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zi = !1, qe = !1, Ox = typeof WeakSet == "function" ? WeakSet : Set, V = null;
function zr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Oe(e, t, r);
      }
    else
      n.current = null;
}
function du(e, t, n) {
  try {
    n();
  } catch (r) {
    Oe(e, t, r);
  }
}
var kf = !1;
function Mx(e, t) {
  if (Qa = hl, e = Im(), ac(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0, s = -1, a = -1, u = 0, c = 0, d = e, f = null;
          t:
            for (; ; ) {
              for (var g; d !== n || o !== 0 && d.nodeType !== 3 || (s = l + o), d !== i || r !== 0 && d.nodeType !== 3 || (a = l + r), d.nodeType === 3 && (l += d.nodeValue.length), (g = d.firstChild) !== null; )
                f = d, d = g;
              for (; ; ) {
                if (d === e)
                  break t;
                if (f === n && ++u === o && (s = l), f === i && ++c === r && (a = l), (g = d.nextSibling) !== null)
                  break;
                d = f, f = d.parentNode;
              }
              d = g;
            }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Xa = { focusedElem: e, selectionRange: n }, hl = !1, V = t; V !== null; )
    if (t = V, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, V = e;
    else
      for (; V !== null; ) {
        t = V;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var v = x.memoizedProps, R = x.memoizedState, h = t.stateNode, p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Ft(t.type, v), R);
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (y) {
          Oe(t, t.return, y);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, V = e;
          break;
        }
        V = t.return;
      }
  return x = kf, kf = !1, x;
}
function jo(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && du(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function vs(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function fu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Th(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Th(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Qt], delete t[oi], delete t[Za], delete t[hx], delete t[gx])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function $h(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wf(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || $h(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function pu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = yl));
  else if (r !== 4 && (e = e.child, e !== null))
    for (pu(e, t, n), e = e.sibling; e !== null; )
      pu(e, t, n), e = e.sibling;
}
function mu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (mu(e, t, n), e = e.sibling; e !== null; )
      mu(e, t, n), e = e.sibling;
}
var We = null, At = !1;
function xn(e, t, n) {
  for (n = n.child; n !== null; )
    _h(e, t, n), n = n.sibling;
}
function _h(e, t, n) {
  if (Yt && typeof Yt.onCommitFiberUnmount == "function")
    try {
      Yt.onCommitFiberUnmount(us, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      qe || zr(n, t);
    case 6:
      var r = We, o = At;
      We = null, xn(e, t, n), We = r, At = o, We !== null && (At ? (e = We, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : We.removeChild(n.stateNode));
      break;
    case 18:
      We !== null && (At ? (e = We, n = n.stateNode, e.nodeType === 8 ? na(e.parentNode, n) : e.nodeType === 1 && na(e, n), Jo(e)) : na(We, n.stateNode));
      break;
    case 4:
      r = We, o = At, We = n.stateNode.containerInfo, At = !0, xn(e, t, n), We = r, At = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!qe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && du(n, t, l), o = o.next;
        } while (o !== r);
      }
      xn(e, t, n);
      break;
    case 1:
      if (!qe && (zr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          Oe(n, t, s);
        }
      xn(e, t, n);
      break;
    case 21:
      xn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (qe = (r = qe) || n.memoizedState !== null, xn(e, t, n), qe = r) : xn(e, t, n);
      break;
    default:
      xn(e, t, n);
  }
}
function Ef(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ox()), t.forEach(function(r) {
      var o = Ux.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Lt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e, l = t, s = l;
        e:
          for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                We = s.stateNode, At = !1;
                break e;
              case 3:
                We = s.stateNode.containerInfo, At = !0;
                break e;
              case 4:
                We = s.stateNode.containerInfo, At = !0;
                break e;
            }
            s = s.return;
          }
        if (We === null)
          throw Error(O(160));
        _h(i, l, o), We = null, At = !1;
        var a = o.alternate;
        a !== null && (a.return = null), o.return = null;
      } catch (u) {
        Oe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Ih(t, e), t = t.sibling;
}
function Ih(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Lt(t, e), Ht(e), r & 4) {
        try {
          jo(3, e, e.return), vs(3, e);
        } catch (v) {
          Oe(e, e.return, v);
        }
        try {
          jo(5, e, e.return);
        } catch (v) {
          Oe(e, e.return, v);
        }
      }
      break;
    case 1:
      Lt(t, e), Ht(e), r & 512 && n !== null && zr(n, n.return);
      break;
    case 5:
      if (Lt(t, e), Ht(e), r & 512 && n !== null && zr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Xo(o, "");
        } catch (v) {
          Oe(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && Zp(o, i), Aa(s, l);
            var u = Aa(s, i);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l], d = a[l + 1];
              c === "style" ? rm(o, d) : c === "dangerouslySetInnerHTML" ? tm(o, d) : c === "children" ? Xo(o, d) : Xu(o, c, d, u);
            }
            switch (s) {
              case "input":
                Ma(o, i);
                break;
              case "textarea":
                Jp(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null ? jr(o, !!i.multiple, g, !1) : f !== !!i.multiple && (i.defaultValue != null ? jr(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : jr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[oi] = i;
          } catch (v) {
            Oe(e, e.return, v);
          }
      }
      break;
    case 6:
      if (Lt(t, e), Ht(e), r & 4) {
        if (e.stateNode === null)
          throw Error(O(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (v) {
          Oe(e, e.return, v);
        }
      }
      break;
    case 3:
      if (Lt(t, e), Ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Jo(t.containerInfo);
        } catch (v) {
          Oe(e, e.return, v);
        }
      break;
    case 4:
      Lt(t, e), Ht(e);
      break;
    case 13:
      Lt(t, e), Ht(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Tc = Me())), r & 4 && Ef(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (qe = (u = qe) || c, Lt(t, e), qe = u) : Lt(t, e), Ht(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (V = e, c = e.child; c !== null; ) {
            for (d = V = c; V !== null; ) {
              switch (f = V, g = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  jo(4, f, f.return);
                  break;
                case 1:
                  zr(f, f.return);
                  var x = f.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    r = f, n = f.return;
                    try {
                      t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                    } catch (v) {
                      Oe(r, n, v);
                    }
                  }
                  break;
                case 5:
                  zr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Pf(d);
                    continue;
                  }
              }
              g !== null ? (g.return = f, V = g) : Pf(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, a = d.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = nm("display", l));
                } catch (v) {
                  Oe(e, e.return, v);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (v) {
                  Oe(e, e.return, v);
                }
            } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
              d.child.return = d, d = d.child;
              continue;
            }
            if (d === e)
              break e;
            for (; d.sibling === null; ) {
              if (d.return === null || d.return === e)
                break e;
              c === d && (c = null), d = d.return;
            }
            c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
          }
      }
      break;
    case 19:
      Lt(t, e), Ht(e), r & 4 && Ef(e);
      break;
    case 21:
      break;
    default:
      Lt(
        t,
        e
      ), Ht(e);
  }
}
function Ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($h(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Xo(o, ""), r.flags &= -33);
          var i = wf(e);
          mu(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = wf(e);
          pu(e, s, l);
          break;
        default:
          throw Error(O(161));
      }
    } catch (a) {
      Oe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Nx(e, t, n) {
  V = e, Oh(e);
}
function Oh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var o = V, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || zi;
      if (!l) {
        var s = o.alternate, a = s !== null && s.memoizedState !== null || qe;
        s = zi;
        var u = qe;
        if (zi = l, (qe = a) && !u)
          for (V = o; V !== null; )
            l = V, a = l.child, l.tag === 22 && l.memoizedState !== null ? Tf(o) : a !== null ? (a.return = l, V = a) : Tf(o);
        for (; i !== null; )
          V = i, Oh(i), i = i.sibling;
        V = o, zi = s, qe = u;
      }
      Rf(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, V = i) : Rf(e);
  }
}
function Rf(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              qe || vs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !qe)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : Ft(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && uf(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                uf(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Jo(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        qe || t.flags & 512 && fu(t);
      } catch (f) {
        Oe(t, t.return, f);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, V = n;
      break;
    }
    V = t.return;
  }
}
function Pf(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, V = n;
      break;
    }
    V = t.return;
  }
}
function Tf(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vs(4, t);
          } catch (a) {
            Oe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Oe(t, o, a);
            }
          }
          var i = t.return;
          try {
            fu(t);
          } catch (a) {
            Oe(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            fu(t);
          } catch (a) {
            Oe(t, l, a);
          }
      }
    } catch (a) {
      Oe(t, t.return, a);
    }
    if (t === e) {
      V = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, V = s;
      break;
    }
    V = t.return;
  }
}
var zx = Math.ceil, $l = hn.ReactCurrentDispatcher, Rc = hn.ReactCurrentOwner, $t = hn.ReactCurrentBatchConfig, le = 0, Be = null, Le = null, Ke = 0, ft = 0, Lr = Dn(0), Ae = 0, ci = null, ur = 0, ys = 0, Pc = 0, Bo = null, ot = null, Tc = 0, Jr = 1 / 0, nn = null, _l = !1, hu = null, Mn = null, Li = !1, Pn = null, Il = 0, Do = 0, gu = null, nl = -1, rl = 0;
function et() {
  return le & 6 ? Me() : nl !== -1 ? nl : nl = Me();
}
function Nn(e) {
  return e.mode & 1 ? le & 2 && Ke !== 0 ? Ke & -Ke : yx.transition !== null ? (rl === 0 && (rl = hm()), rl) : (e = pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : bm(e.type)), e) : 1;
}
function Ut(e, t, n, r) {
  if (50 < Do)
    throw Do = 0, gu = null, Error(O(185));
  vi(e, n, r), (!(le & 2) || e !== Be) && (e === Be && (!(le & 2) && (ys |= n), Ae === 4 && En(e, Ke)), ct(e, r), n === 1 && le === 0 && !(t.mode & 1) && (Jr = Me() + 500, ms && Un()));
}
function ct(e, t) {
  var n = e.callbackNode;
  y1(e, t);
  var r = ml(e, e === Be ? Ke : 0);
  if (r === 0)
    n !== null && Ld(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ld(n), t === 1)
      e.tag === 0 ? vx($f.bind(null, e)) : Dm($f.bind(null, e)), px(function() {
        !(le & 6) && Un();
      }), n = null;
    else {
      switch (gm(r)) {
        case 1:
          n = ec;
          break;
        case 4:
          n = pm;
          break;
        case 16:
          n = pl;
          break;
        case 536870912:
          n = mm;
          break;
        default:
          n = pl;
      }
      n = Bh(n, Mh.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Mh(e, t) {
  if (nl = -1, rl = 0, le & 6)
    throw Error(O(327));
  var n = e.callbackNode;
  if (Vr() && e.callbackNode !== n)
    return null;
  var r = ml(e, e === Be ? Ke : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Ol(e, r);
  else {
    t = r;
    var o = le;
    le |= 2;
    var i = zh();
    (Be !== e || Ke !== t) && (nn = null, Jr = Me() + 500, tr(e, t));
    do
      try {
        Ax();
        break;
      } catch (s) {
        Nh(e, s);
      }
    while (!0);
    pc(), $l.current = i, le = o, Le !== null ? t = 0 : (Be = null, Ke = 0, t = Ae);
  }
  if (t !== 0) {
    if (t === 2 && (o = Wa(e), o !== 0 && (r = o, t = vu(e, o))), t === 1)
      throw n = ci, tr(e, 0), En(e, r), ct(e, Me()), n;
    if (t === 6)
      En(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Lx(o) && (t = Ol(e, r), t === 2 && (i = Wa(e), i !== 0 && (r = i, t = vu(e, i))), t === 1))
        throw n = ci, tr(e, 0), En(e, r), ct(e, Me()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          Gn(e, ot, nn);
          break;
        case 3:
          if (En(e, r), (r & 130023424) === r && (t = Tc + 500 - Me(), 10 < t)) {
            if (ml(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              et(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = qa(Gn.bind(null, e, ot, nn), t);
            break;
          }
          Gn(e, ot, nn);
          break;
        case 4:
          if (En(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Dt(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = Me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * zx(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = qa(Gn.bind(null, e, ot, nn), r);
            break;
          }
          Gn(e, ot, nn);
          break;
        case 5:
          Gn(e, ot, nn);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return ct(e, Me()), e.callbackNode === n ? Mh.bind(null, e) : null;
}
function vu(e, t) {
  var n = Bo;
  return e.current.memoizedState.isDehydrated && (tr(e, t).flags |= 256), e = Ol(e, t), e !== 2 && (t = ot, ot = n, t !== null && yu(t)), e;
}
function yu(e) {
  ot === null ? ot = e : ot.push.apply(ot, e);
}
function Lx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!Wt(i(), o))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function En(e, t) {
  for (t &= ~Pc, t &= ~ys, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Dt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function $f(e) {
  if (le & 6)
    throw Error(O(327));
  Vr();
  var t = ml(e, 0);
  if (!(t & 1))
    return ct(e, Me()), null;
  var n = Ol(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Wa(e);
    r !== 0 && (t = r, n = vu(e, r));
  }
  if (n === 1)
    throw n = ci, tr(e, 0), En(e, t), ct(e, Me()), n;
  if (n === 6)
    throw Error(O(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Gn(e, ot, nn), ct(e, Me()), null;
}
function $c(e, t) {
  var n = le;
  le |= 1;
  try {
    return e(t);
  } finally {
    le = n, le === 0 && (Jr = Me() + 500, ms && Un());
  }
}
function cr(e) {
  Pn !== null && Pn.tag === 0 && !(le & 6) && Vr();
  var t = le;
  le |= 1;
  var n = $t.transition, r = pe;
  try {
    if ($t.transition = null, pe = 1, e)
      return e();
  } finally {
    pe = r, $t.transition = n, le = t, !(le & 6) && Un();
  }
}
function _c() {
  ft = Lr.current, Se(Lr);
}
function tr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, fx(n)), Le !== null)
    for (n = Le.return; n !== null; ) {
      var r = n;
      switch (cc(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && xl();
          break;
        case 3:
          qr(), Se(at), Se(Ze), xc();
          break;
        case 5:
          yc(r);
          break;
        case 4:
          qr();
          break;
        case 13:
          Se(Pe);
          break;
        case 19:
          Se(Pe);
          break;
        case 10:
          mc(r.type._context);
          break;
        case 22:
        case 23:
          _c();
      }
      n = n.return;
    }
  if (Be = e, Le = e = zn(e.current, null), Ke = ft = t, Ae = 0, ci = null, Pc = ys = ur = 0, ot = Bo = null, Zn !== null) {
    for (t = 0; t < Zn.length; t++)
      if (n = Zn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var l = i.next;
          i.next = o, r.next = l;
        }
        n.pending = r;
      }
    Zn = null;
  }
  return e;
}
function Nh(e, t) {
  do {
    var n = Le;
    try {
      if (pc(), Ji.current = Tl, Pl) {
        for (var r = Te.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Pl = !1;
      }
      if (ar = 0, je = Fe = Te = null, Ao = !1, si = 0, Rc.current = null, n === null || n.return === null) {
        Ae = 1, ci = t, Le = null;
        break;
      }
      e: {
        var i = e, l = n.return, s = n, a = t;
        if (t = Ke, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var g = gf(l);
          if (g !== null) {
            g.flags &= -257, vf(g, l, s, i, t), g.mode & 1 && hf(i, u, t), t = g, a = u;
            var x = t.updateQueue;
            if (x === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(a), t.updateQueue = v;
            } else
              x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              hf(i, u, t), Ic();
              break e;
            }
            a = Error(O(426));
          }
        } else if (we && s.mode & 1) {
          var R = gf(l);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), vf(R, l, s, i, t), dc(Zr(a, s));
            break e;
          }
        }
        i = a = Zr(a, s), Ae !== 4 && (Ae = 2), Bo === null ? Bo = [i] : Bo.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var h = vh(i, a, t);
              af(i, h);
              break e;
            case 1:
              s = a;
              var p = i.type, m = i.stateNode;
              if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Mn === null || !Mn.has(m)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var y = yh(i, s, t);
                af(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Fh(n);
    } catch (w) {
      t = w, Le === n && n !== null && (Le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function zh() {
  var e = $l.current;
  return $l.current = Tl, e === null ? Tl : e;
}
function Ic() {
  (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4), Be === null || !(ur & 268435455) && !(ys & 268435455) || En(Be, Ke);
}
function Ol(e, t) {
  var n = le;
  le |= 2;
  var r = zh();
  (Be !== e || Ke !== t) && (nn = null, tr(e, t));
  do
    try {
      Fx();
      break;
    } catch (o) {
      Nh(e, o);
    }
  while (!0);
  if (pc(), le = n, $l.current = r, Le !== null)
    throw Error(O(261));
  return Be = null, Ke = 0, Ae;
}
function Fx() {
  for (; Le !== null; )
    Lh(Le);
}
function Ax() {
  for (; Le !== null && !u1(); )
    Lh(Le);
}
function Lh(e) {
  var t = jh(e.alternate, e, ft);
  e.memoizedProps = e.pendingProps, t === null ? Fh(e) : Le = t, Rc.current = null;
}
function Fh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ix(n, t), n !== null) {
        n.flags &= 32767, Le = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ae = 6, Le = null;
        return;
      }
    } else if (n = _x(n, t, ft), n !== null) {
      Le = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Le = t;
      return;
    }
    Le = t = e;
  } while (t !== null);
  Ae === 0 && (Ae = 5);
}
function Gn(e, t, n) {
  var r = pe, o = $t.transition;
  try {
    $t.transition = null, pe = 1, jx(e, t, n, r);
  } finally {
    $t.transition = o, pe = r;
  }
  return null;
}
function jx(e, t, n, r) {
  do
    Vr();
  while (Pn !== null);
  if (le & 6)
    throw Error(O(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(O(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (x1(e, i), e === Be && (Le = Be = null, Ke = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Li || (Li = !0, Bh(pl, function() {
    return Vr(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = $t.transition, $t.transition = null;
    var l = pe;
    pe = 1;
    var s = le;
    le |= 4, Rc.current = null, Mx(e, n), Ih(n, e), ix(Xa), hl = !!Qa, Xa = Qa = null, e.current = n, Nx(n), c1(), le = s, pe = l, $t.transition = i;
  } else
    e.current = n;
  if (Li && (Li = !1, Pn = e, Il = o), i = e.pendingLanes, i === 0 && (Mn = null), p1(n.stateNode), ct(e, Me()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (_l)
    throw _l = !1, e = hu, hu = null, e;
  return Il & 1 && e.tag !== 0 && Vr(), i = e.pendingLanes, i & 1 ? e === gu ? Do++ : (Do = 0, gu = e) : Do = 0, Un(), null;
}
function Vr() {
  if (Pn !== null) {
    var e = gm(Il), t = $t.transition, n = pe;
    try {
      if ($t.transition = null, pe = 16 > e ? 16 : e, Pn === null)
        var r = !1;
      else {
        if (e = Pn, Pn = null, Il = 0, le & 6)
          throw Error(O(331));
        var o = le;
        for (le |= 4, V = e.current; V !== null; ) {
          var i = V, l = i.child;
          if (V.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jo(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, V = d;
                  else
                    for (; V !== null; ) {
                      c = V;
                      var f = c.sibling, g = c.return;
                      if (Th(c), c === u) {
                        V = null;
                        break;
                      }
                      if (f !== null) {
                        f.return = g, V = f;
                        break;
                      }
                      V = g;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var v = x.child;
                if (v !== null) {
                  x.child = null;
                  do {
                    var R = v.sibling;
                    v.sibling = null, v = R;
                  } while (v !== null);
                }
              }
              V = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null)
            l.return = i, V = l;
          else
            e:
              for (; V !== null; ) {
                if (i = V, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jo(9, i, i.return);
                  }
                var h = i.sibling;
                if (h !== null) {
                  h.return = i.return, V = h;
                  break e;
                }
                V = i.return;
              }
        }
        var p = e.current;
        for (V = p; V !== null; ) {
          l = V;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null)
            m.return = l, V = m;
          else
            e:
              for (l = p; V !== null; ) {
                if (s = V, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vs(9, s);
                    }
                  } catch (w) {
                    Oe(s, s.return, w);
                  }
                if (s === l) {
                  V = null;
                  break e;
                }
                var y = s.sibling;
                if (y !== null) {
                  y.return = s.return, V = y;
                  break e;
                }
                V = s.return;
              }
        }
        if (le = o, Un(), Yt && typeof Yt.onPostCommitFiberRoot == "function")
          try {
            Yt.onPostCommitFiberRoot(us, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      pe = n, $t.transition = t;
    }
  }
  return !1;
}
function _f(e, t, n) {
  t = Zr(n, t), t = vh(e, t, 1), e = On(e, t, 1), t = et(), e !== null && (vi(e, 1, t), ct(e, t));
}
function Oe(e, t, n) {
  if (e.tag === 3)
    _f(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        _f(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Mn === null || !Mn.has(r))) {
          e = Zr(n, e), e = yh(t, e, 1), t = On(t, e, 1), e = et(), t !== null && (vi(t, 1, e), ct(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Bx(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = et(), e.pingedLanes |= e.suspendedLanes & n, Be === e && (Ke & n) === n && (Ae === 4 || Ae === 3 && (Ke & 130023424) === Ke && 500 > Me() - Tc ? tr(e, 0) : Pc |= n), ct(e, t);
}
function Ah(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ri, Ri <<= 1, !(Ri & 130023424) && (Ri = 4194304)) : t = 1);
  var n = et();
  e = fn(e, t), e !== null && (vi(e, t, n), ct(e, n));
}
function Dx(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Ah(e, n);
}
function Ux(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), Ah(e, n);
}
var jh;
jh = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || at.current)
      it = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return it = !1, $x(e, t, n);
      it = !!(e.flags & 131072);
    }
  else
    it = !1, we && t.flags & 1048576 && Um(t, bl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      tl(e, t), e = t.pendingProps;
      var o = Qr(t, Ze.current);
      Wr(t, n), o = Cc(null, t, r, e, o, n);
      var i = bc();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ut(r) ? (i = !0, Sl(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, gc(t), o.updater = hs, t.stateNode = o, o._reactInternals = t, ou(t, r, e, n), t = su(null, t, r, !0, i, n)) : (t.tag = 0, we && i && uc(t), Je(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (tl(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Vx(r), e = Ft(r, e), o) {
          case 0:
            t = lu(null, t, r, e, n);
            break e;
          case 1:
            t = Sf(null, t, r, e, n);
            break e;
          case 11:
            t = yf(null, t, r, e, n);
            break e;
          case 14:
            t = xf(null, t, r, Ft(r.type, e), n);
            break e;
        }
        throw Error(O(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ft(r, o), lu(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ft(r, o), Sf(e, t, r, o, n);
    case 3:
      e: {
        if (bh(t), e === null)
          throw Error(O(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Km(e, t), El(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Zr(Error(O(423)), t), t = Cf(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Zr(Error(O(424)), t), t = Cf(e, t, r, n, o);
            break e;
          } else
            for (mt = In(t.stateNode.containerInfo.firstChild), gt = t, we = !0, Bt = null, n = Ym(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Xr(), r === o) {
            t = pn(e, t, n);
            break e;
          }
          Je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return qm(t), e === null && tu(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, Ya(r, o) ? l = null : i !== null && Ya(r, i) && (t.flags |= 32), Ch(e, t), Je(e, t, l, n), t.child;
    case 6:
      return e === null && tu(t), null;
    case 13:
      return kh(e, t, n);
    case 4:
      return vc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Yr(t, null, r, n) : Je(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ft(r, o), yf(e, t, r, o, n);
    case 7:
      return Je(e, t, t.pendingProps, n), t.child;
    case 8:
      return Je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, ve(kl, r._currentValue), r._currentValue = l, i !== null)
          if (Wt(i.value, l)) {
            if (i.children === o.children && !at.current) {
              t = pn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      a = an(-1, n & -n), a.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                      }
                    }
                    i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), nu(
                      i.return,
                      n,
                      t
                    ), s.lanes |= n;
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10)
                l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (l = i.return, l === null)
                  throw Error(O(341));
                l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), nu(l, n, t), l = i.sibling;
              } else
                l = i.child;
              if (l !== null)
                l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (i = l.sibling, i !== null) {
                    i.return = l.return, l = i;
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Je(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Wr(t, n), o = _t(o), r = r(o), t.flags |= 1, Je(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Ft(r, t.pendingProps), o = Ft(r.type, o), xf(e, t, r, o, n);
    case 15:
      return xh(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ft(r, o), tl(e, t), t.tag = 1, ut(r) ? (e = !0, Sl(t)) : e = !1, Wr(t, n), Qm(t, r, o), ou(t, r, o, n), su(null, t, r, !0, e, n);
    case 19:
      return wh(e, t, n);
    case 22:
      return Sh(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function Bh(e, t) {
  return fm(e, t);
}
function Wx(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Tt(e, t, n, r) {
  return new Wx(e, t, n, r);
}
function Oc(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Vx(e) {
  if (typeof e == "function")
    return Oc(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === qu)
      return 11;
    if (e === Zu)
      return 14;
  }
  return 2;
}
function zn(e, t) {
  var n = e.alternate;
  return n === null ? (n = Tt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ol(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function")
    Oc(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case Rr:
          return nr(n.children, o, i, t);
        case Yu:
          l = 8, o |= 8;
          break;
        case Ta:
          return e = Tt(12, n, t, o | 2), e.elementType = Ta, e.lanes = i, e;
        case $a:
          return e = Tt(13, n, t, o), e.elementType = $a, e.lanes = i, e;
        case _a:
          return e = Tt(19, n, t, o), e.elementType = _a, e.lanes = i, e;
        case Xp:
          return xs(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Gp:
                l = 10;
                break e;
              case Qp:
                l = 9;
                break e;
              case qu:
                l = 11;
                break e;
              case Zu:
                l = 14;
                break e;
              case bn:
                l = 16, r = null;
                break e;
            }
          throw Error(O(130, e == null ? e : typeof e, ""));
      }
  return t = Tt(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function nr(e, t, n, r) {
  return e = Tt(7, e, r, t), e.lanes = n, e;
}
function xs(e, t, n, r) {
  return e = Tt(22, e, r, t), e.elementType = Xp, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ca(e, t, n) {
  return e = Tt(6, e, null, t), e.lanes = n, e;
}
function da(e, t, n) {
  return t = Tt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Hx(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Hs(0), this.expirationTimes = Hs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hs(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Mc(e, t, n, r, o, i, l, s, a) {
  return e = new Hx(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Tt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gc(i), e;
}
function Kx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Er, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Dh(e) {
  if (!e)
    return jn;
  e = e._reactInternals;
  e: {
    if (fr(e) !== e || e.tag !== 1)
      throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ut(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ut(n))
      return Bm(e, n, t);
  }
  return t;
}
function Uh(e, t, n, r, o, i, l, s, a) {
  return e = Mc(n, r, !0, e, o, i, l, s, a), e.context = Dh(null), n = e.current, r = et(), o = Nn(n), i = an(r, o), i.callback = t ?? null, On(n, i, o), e.current.lanes = o, vi(e, o, r), ct(e, r), e;
}
function Ss(e, t, n, r) {
  var o = t.current, i = et(), l = Nn(o);
  return n = Dh(n), t.context === null ? t.context = n : t.pendingContext = n, t = an(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = On(o, t, l), e !== null && (Ut(e, o, l, i), Zi(e, o, l)), l;
}
function Ml(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function If(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Nc(e, t) {
  If(e, t), (e = e.alternate) && If(e, t);
}
function Gx() {
  return null;
}
var Wh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function zc(e) {
  this._internalRoot = e;
}
Cs.prototype.render = zc.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(O(409));
  Ss(e, t, null, null);
};
Cs.prototype.unmount = zc.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    cr(function() {
      Ss(null, e, null, null);
    }), t[dn] = null;
  }
};
function Cs(e) {
  this._internalRoot = e;
}
Cs.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = xm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wn.length && t !== 0 && t < wn[n].priority; n++)
      ;
    wn.splice(n, 0, e), n === 0 && Cm(e);
  }
};
function Lc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function bs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Of() {
}
function Qx(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Ml(l);
        i.call(u);
      };
    }
    var l = Uh(t, r, e, 0, null, !1, !1, "", Of);
    return e._reactRootContainer = l, e[dn] = l.current, ni(e.nodeType === 8 ? e.parentNode : e), cr(), l;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Ml(a);
      s.call(u);
    };
  }
  var a = Mc(e, 0, !1, null, null, !1, !1, "", Of);
  return e._reactRootContainer = a, e[dn] = a.current, ni(e.nodeType === 8 ? e.parentNode : e), cr(function() {
    Ss(t, a, n, r);
  }), a;
}
function ks(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var a = Ml(l);
        s.call(a);
      };
    }
    Ss(t, l, e, o);
  } else
    l = Qx(n, t, e, o, r);
  return Ml(l);
}
vm = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ro(t.pendingLanes);
        n !== 0 && (tc(t, n | 1), ct(t, Me()), !(le & 6) && (Jr = Me() + 500, Un()));
      }
      break;
    case 13:
      cr(function() {
        var r = fn(e, 1);
        if (r !== null) {
          var o = et();
          Ut(r, e, 1, o);
        }
      }), Nc(e, 1);
  }
};
nc = function(e) {
  if (e.tag === 13) {
    var t = fn(e, 134217728);
    if (t !== null) {
      var n = et();
      Ut(t, e, 134217728, n);
    }
    Nc(e, 134217728);
  }
};
ym = function(e) {
  if (e.tag === 13) {
    var t = Nn(e), n = fn(e, t);
    if (n !== null) {
      var r = et();
      Ut(n, e, t, r);
    }
    Nc(e, t);
  }
};
xm = function() {
  return pe;
};
Sm = function(e, t) {
  var n = pe;
  try {
    return pe = e, t();
  } finally {
    pe = n;
  }
};
Ba = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ma(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ps(r);
            if (!o)
              throw Error(O(90));
            qp(r), Ma(r, o);
          }
        }
      }
      break;
    case "textarea":
      Jp(e, n);
      break;
    case "select":
      t = n.value, t != null && jr(e, !!n.multiple, t, !1);
  }
};
lm = $c;
sm = cr;
var Xx = { usingClientEntryPoint: !1, Events: [xi, _r, ps, om, im, $c] }, So = { findFiberByHostInstance: qn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Yx = { bundleType: So.bundleType, version: So.version, rendererPackageName: So.rendererPackageName, rendererConfig: So.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: hn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = cm(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: So.findFiberByHostInstance || Gx, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fi.isDisabled && Fi.supportsFiber)
    try {
      us = Fi.inject(Yx), Yt = Fi;
    } catch {
    }
}
yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xx;
yt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lc(t))
    throw Error(O(200));
  return Kx(e, t, null, n);
};
yt.createRoot = function(e, t) {
  if (!Lc(e))
    throw Error(O(299));
  var n = !1, r = "", o = Wh;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Mc(e, 1, !1, null, null, n, !1, r, o), e[dn] = t.current, ni(e.nodeType === 8 ? e.parentNode : e), new zc(t);
};
yt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
  return e = cm(t), e = e === null ? null : e.stateNode, e;
};
yt.flushSync = function(e) {
  return cr(e);
};
yt.hydrate = function(e, t, n) {
  if (!bs(t))
    throw Error(O(200));
  return ks(null, e, t, !0, n);
};
yt.hydrateRoot = function(e, t, n) {
  if (!Lc(e))
    throw Error(O(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = Wh;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Uh(t, null, e, 1, n ?? null, o, !1, i, l), e[dn] = t.current, ni(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new Cs(t);
};
yt.render = function(e, t, n) {
  if (!bs(t))
    throw Error(O(200));
  return ks(null, e, t, !1, n);
};
yt.unmountComponentAtNode = function(e) {
  if (!bs(e))
    throw Error(O(40));
  return e._reactRootContainer ? (cr(function() {
    ks(null, null, e, !1, function() {
      e._reactRootContainer = null, e[dn] = null;
    });
  }), !0) : !1;
};
yt.unstable_batchedUpdates = $c;
yt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!bs(n))
    throw Error(O(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(O(38));
  return ks(e, t, n, !1, r);
};
yt.version = "18.2.0-next-9e3b772b8-20220608";
function Vh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vh);
    } catch (e) {
      console.error(e);
    }
}
Vh(), Up.exports = yt;
var ws = Up.exports;
const Ai = /* @__PURE__ */ Ru(ws);
var Hh, Mf = ws;
Hh = Mf.createRoot, Mf.hydrateRoot;
var qx = Object.defineProperty, Zx = (e, t, n) => t in e ? qx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ji = (e, t, n) => (Zx(e, typeof t != "symbol" ? t + "" : t, n), n);
const Jx = {
  stringify: (e) => e,
  parse: (e) => e
}, eS = {
  stringify: (e) => `${e}`,
  parse: (e) => parseFloat(e)
}, tS = {
  stringify: (e) => e ? "true" : "false",
  parse: (e) => /^[ty1-9]/i.test(e)
}, nS = {
  stringify: (e) => e.name,
  parse: (e, t) => {
    const n = (() => {
      if (typeof window < "u" && e in window)
        return window[e];
      if (typeof global < "u" && e in global)
        return global[e];
    })();
    return typeof n == "function" ? n.bind(t) : void 0;
  }
}, rS = {
  stringify: (e) => JSON.stringify(e),
  parse: (e) => JSON.parse(e)
}, fa = {
  string: Jx,
  number: eS,
  boolean: tS,
  function: nS,
  json: rS
}, pa = Symbol.for("r2wc.render"), Bi = Symbol.for("r2wc.connected"), Wn = Symbol.for("r2wc.context"), Sn = Symbol.for("r2wc.props");
function oS(e, t, n) {
  var r, o, i;
  t.props || (t.props = e.propTypes ? Object.keys(e.propTypes) : []);
  const l = (Array.isArray(t.props) ? t.props.slice() : Object.keys(t.props)).filter((d) => d !== "container"), s = {}, a = {}, u = {};
  for (const d of l) {
    s[d] = Array.isArray(t.props) ? "string" : t.props[d];
    const f = iS(d);
    a[d] = f, u[f] = d;
  }
  class c extends HTMLElement {
    constructor() {
      super(), ji(this, r, !0), ji(this, o), ji(this, i, {}), ji(this, "container"), t.shadow ? this.container = this.attachShadow({
        mode: t.shadow
      }) : this.container = this, this[Sn].container = this.container;
      for (const f of l) {
        const g = a[f], x = this.getAttribute(g), v = s[f], R = fa[v];
        x && R != null && R.parse && (this[Sn][f] = R.parse(x, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(u);
    }
    connectedCallback() {
      this[Bi] = !0, this[pa]();
    }
    disconnectedCallback() {
      this[Bi] = !1, this[Wn] && n.unmount(this[Wn]), delete this[Wn];
    }
    attributeChangedCallback(f, g, x) {
      const v = u[f], R = s[v], h = fa[R];
      v in s && h != null && h.parse && (this[Sn][v] = h.parse(x, this), this[pa]());
    }
    [(r = Bi, o = Wn, i = Sn, pa)]() {
      this[Bi] && (this[Wn] ? n.update(this[Wn], this[Sn]) : this[Wn] = n.mount(
        this.container,
        e,
        this[Sn]
      ));
    }
  }
  for (const d of l) {
    const f = a[d], g = s[d];
    Object.defineProperty(c.prototype, d, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Sn][d];
      },
      set(x) {
        this[Sn][d] = x;
        const v = fa[g];
        if (v != null && v.stringify) {
          const R = v.stringify(x);
          this.getAttribute(f) !== R && this.setAttribute(f, R);
        }
      }
    });
  }
  return c;
}
function iS(e = "") {
  return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function lS(e, t, n) {
  const r = Hh(e), o = Pt.createElement(t, n);
  return r.render(o), {
    root: r,
    ReactComponent: t
  };
}
function sS({ root: e, ReactComponent: t }, n) {
  const r = Pt.createElement(t, n);
  e.render(r);
}
function aS({ root: e }) {
  e.unmount();
}
function uS(e, t = {}) {
  return oS(e, t, { mount: lS, update: sS, unmount: aS });
}
const cS = Hu({
  // テーマの設定
}), dS = Sp({
  key: "css",
  prepend: !0
});
class Es extends C.Component {
  render() {
    return /* @__PURE__ */ P.jsx(fv, { value: dS, children: /* @__PURE__ */ P.jsx(Gy, { theme: cS, children: this.props.children }) });
  }
}
const Rs = (e, t) => {
  customElements.get(e) || customElements.define(e, uS(t));
};
var Fc = {}, Kh = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Kh);
var Ac = Kh.exports, ma = {};
function fS(e) {
  return se("MuiSvgIcon", e);
}
oe("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const pS = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], mS = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${X(t)}`, `fontSize${X(n)}`]
  };
  return ae(o, fS, r);
}, hS = K("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${X(n.color)}`], t[`fontSize${X(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, o, i, l, s, a, u, c, d, f, g, x;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (l = i.pxToRem) == null ? void 0 : l.call(i, 20)) || "1.25rem",
      medium: ((s = e.typography) == null || (a = s.pxToRem) == null ? void 0 : a.call(s, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (c = u.pxToRem) == null ? void 0 : c.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (d = (f = (e.vars || e).palette) == null || (f = f[t.color]) == null ? void 0 : f.main) != null ? d : {
      action: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.active,
      disabled: (x = (e.vars || e).palette) == null || (x = x.action) == null ? void 0 : x.disabled,
      inherit: void 0
    }[t.color]
  };
}), xu = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: l = "inherit",
    component: s = "svg",
    fontSize: a = "medium",
    htmlColor: u,
    inheritViewBox: c = !1,
    titleAccess: d,
    viewBox: f = "0 0 24 24"
  } = r, g = H(r, pS), x = /* @__PURE__ */ C.isValidElement(o) && o.type === "svg", v = S({}, r, {
    color: l,
    component: s,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: c,
    viewBox: f,
    hasSvgAsChild: x
  }), R = {};
  c || (R.viewBox = f);
  const h = mS(v);
  return /* @__PURE__ */ P.jsxs(hS, S({
    as: s,
    className: Z(h.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": d ? void 0 : !0,
    role: d ? "img" : void 0,
    ref: n
  }, R, g, x && o.props, {
    ownerState: v,
    children: [x ? o.props.children : o, d ? /* @__PURE__ */ P.jsx("title", {
      children: d
    }) : null]
  }));
});
xu.muiName = "SvgIcon";
function Gh(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ P.jsx(xu, S({
      "data-testid": `${t}Icon`,
      ref: o
    }, r, {
      children: e
    }));
  }
  return n.muiName = xu.muiName, /* @__PURE__ */ C.memo(/* @__PURE__ */ C.forwardRef(n));
}
const gS = {
  configure: (e) => {
    Au.configure(e);
  }
}, vS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: X,
  createChainedFunction: wa,
  createSvgIcon: Gh,
  debounce: Nu,
  deprecatedPropType: Ev,
  isMuiElement: _o,
  ownerDocument: st,
  ownerWindow: Fn,
  requirePropFactory: Rv,
  setRef: ll,
  unstable_ClassNameGenerator: gS,
  unstable_useEnhancedEffect: Zt,
  unstable_useId: zu,
  unsupportedProp: Tv,
  useControlled: Ea,
  useEventCallback: Yn,
  useForkRef: De,
  useIsFocusVisible: Lu
}, Symbol.toStringTag, { value: "Module" })), yS = /* @__PURE__ */ bg(vS);
var Nf;
function jc() {
  return Nf || (Nf = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = yS;
  }(ma)), ma;
}
var xS = Ac;
Object.defineProperty(Fc, "__esModule", {
  value: !0
});
var Qh = Fc.default = void 0, SS = xS(jc()), CS = Al();
Qh = Fc.default = (0, SS.default)(/* @__PURE__ */ (0, CS.jsx)("path", {
  d: "M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3"
}), "Key");
var Bc = {}, bS = Ac;
Object.defineProperty(Bc, "__esModule", {
  value: !0
});
var Xh = Bc.default = void 0, kS = bS(jc()), wS = Al();
Xh = Bc.default = (0, kS.default)(/* @__PURE__ */ (0, wS.jsx)("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
}), "Person");
function Su(e, t) {
  return Su = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Su(e, t);
}
function Yh(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Su(e, t);
}
const zf = {
  disabled: !1
}, Nl = Pt.createContext(null);
var ES = function(t) {
  return t.scrollTop;
}, To = "unmounted", Qn = "exited", Xn = "entering", br = "entered", Cu = "exiting", gn = /* @__PURE__ */ function(e) {
  Yh(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var l = o, s = l && !l.isMounting ? r.enter : r.appear, a;
    return i.appearStatus = null, r.in ? s ? (a = Qn, i.appearStatus = Xn) : a = br : r.unmountOnExit || r.mountOnEnter ? a = To : a = Qn, i.state = {
      status: a
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var l = o.in;
    return l && i.status === To ? {
      status: Qn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== Xn && l !== br && (i = Xn) : (l === Xn || l === br) && (i = Cu);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, l, s;
    return i = l = s = o, o != null && typeof o != "number" && (i = o.exit, l = o.enter, s = o.appear !== void 0 ? o.appear : l), {
      exit: i,
      enter: l,
      appear: s
    };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === Xn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : Ai.findDOMNode(this);
          l && ES(l);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Qn && this.setState({
        status: To
      });
  }, n.performEnter = function(o) {
    var i = this, l = this.props.enter, s = this.context ? this.context.isMounting : o, a = this.props.nodeRef ? [s] : [Ai.findDOMNode(this), s], u = a[0], c = a[1], d = this.getTimeouts(), f = s ? d.appear : d.enter;
    if (!o && !l || zf.disabled) {
      this.safeSetState({
        status: br
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: Xn
    }, function() {
      i.props.onEntering(u, c), i.onTransitionEnd(f, function() {
        i.safeSetState({
          status: br
        }, function() {
          i.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, l = this.getTimeouts(), s = this.props.nodeRef ? void 0 : Ai.findDOMNode(this);
    if (!i || zf.disabled) {
      this.safeSetState({
        status: Qn
      }, function() {
        o.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: Cu
    }, function() {
      o.props.onExiting(s), o.onTransitionEnd(l.exit, function() {
        o.safeSetState({
          status: Qn
        }, function() {
          o.props.onExited(s);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, l = !0;
    return this.nextCallback = function(s) {
      l && (l = !1, i.nextCallback = null, o(s));
    }, this.nextCallback.cancel = function() {
      l = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var l = this.props.nodeRef ? this.props.nodeRef.current : Ai.findDOMNode(this), s = o == null && !this.props.addEndListener;
    if (!l || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var a = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], u = a[0], c = a[1];
      this.props.addEndListener(u, c);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === To)
      return null;
    var i = this.props, l = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var s = H(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Pt.createElement(Nl.Provider, {
        value: null
      }, typeof l == "function" ? l(o, s) : Pt.cloneElement(Pt.Children.only(l), s))
    );
  }, t;
}(Pt.Component);
gn.contextType = Nl;
gn.propTypes = {};
function Cr() {
}
gn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Cr,
  onEntering: Cr,
  onEntered: Cr,
  onExit: Cr,
  onExiting: Cr,
  onExited: Cr
};
gn.UNMOUNTED = To;
gn.EXITED = Qn;
gn.ENTERING = Xn;
gn.ENTERED = br;
gn.EXITING = Cu;
const qh = gn;
function RS(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Dc(e, t) {
  var n = function(i) {
    return t && C.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && C.Children.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function PS(e, t) {
  e = e || {}, t = t || {};
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var l, s = {};
  for (var a in t) {
    if (r[a])
      for (l = 0; l < r[a].length; l++) {
        var u = r[a][l];
        s[r[a][l]] = n(u);
      }
    s[a] = n(a);
  }
  for (l = 0; l < o.length; l++)
    s[o[l]] = n(o[l]);
  return s;
}
function er(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function TS(e, t) {
  return Dc(e.children, function(n) {
    return C.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: er(n, "appear", e),
      enter: er(n, "enter", e),
      exit: er(n, "exit", e)
    });
  });
}
function $S(e, t, n) {
  var r = Dc(e.children), o = PS(t, r);
  return Object.keys(o).forEach(function(i) {
    var l = o[i];
    if (C.isValidElement(l)) {
      var s = i in t, a = i in r, u = t[i], c = C.isValidElement(u) && !u.props.in;
      a && (!s || c) ? o[i] = C.cloneElement(l, {
        onExited: n.bind(null, l),
        in: !0,
        exit: er(l, "exit", e),
        enter: er(l, "enter", e)
      }) : !a && s && !c ? o[i] = C.cloneElement(l, {
        in: !1
      }) : a && s && C.isValidElement(u) && (o[i] = C.cloneElement(l, {
        onExited: n.bind(null, l),
        in: u.props.in,
        exit: er(l, "exit", e),
        enter: er(l, "enter", e)
      }));
    }
  }), o;
}
var _S = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, IS = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Uc = /* @__PURE__ */ function(e) {
  Yh(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var l = i.handleExited.bind(RS(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: l,
      firstRender: !0
    }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var l = i.children, s = i.handleExited, a = i.firstRender;
    return {
      children: a ? TS(o, s) : $S(o, l, s),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var l = Dc(this.props.children);
    o.key in l || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var a = S({}, s.children);
      return delete a[o.key], {
        children: a
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, l = o.childFactory, s = H(o, ["component", "childFactory"]), a = this.state.contextValue, u = _S(this.state.children).map(l);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ Pt.createElement(Nl.Provider, {
      value: a
    }, u) : /* @__PURE__ */ Pt.createElement(Nl.Provider, {
      value: a
    }, /* @__PURE__ */ Pt.createElement(i, s, u));
  }, t;
}(Pt.Component);
Uc.propTypes = {};
Uc.defaultProps = IS;
const OS = Uc, Zh = (e) => e.scrollTop;
function zl(e, t) {
  var n, r;
  const {
    timeout: o,
    easing: i,
    style: l = {}
  } = e;
  return {
    duration: (n = l.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (r = l.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: l.transitionDelay
  };
}
function MS(e) {
  return se("MuiPaper", e);
}
oe("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const NS = ["className", "component", "elevation", "square", "variant"], zS = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return ae(i, MS, o);
}, LS = K("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  return S({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && S({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${He("#fff", Rd(t.elevation))}, ${He("#fff", Rd(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), FS = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: l = 1,
    square: s = !1,
    variant: a = "elevation"
  } = r, u = H(r, NS), c = S({}, r, {
    component: i,
    elevation: l,
    square: s,
    variant: a
  }), d = zS(c);
  return /* @__PURE__ */ P.jsx(LS, S({
    as: i,
    ownerState: c,
    className: Z(d.root, o),
    ref: n
  }, u));
}), Wc = FS;
function eo(e) {
  return typeof e == "string";
}
function AS(e, t, n) {
  return e === void 0 || eo(e) ? t : S({}, t, {
    ownerState: S({}, t.ownerState, n)
  });
}
function Jh(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function jS(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Lf(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function BS(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const g = Z(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), x = S({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), v = S({}, n, o, r);
    return g.length > 0 && (v.className = g), Object.keys(x).length > 0 && (v.style = x), {
      props: v,
      internalRef: void 0
    };
  }
  const l = Jh(S({}, o, r)), s = Lf(r), a = Lf(o), u = t(l), c = Z(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), d = S({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), f = S({}, u, n, a, s);
  return c.length > 0 && (f.className = c), Object.keys(d).length > 0 && (f.style = d), {
    props: f,
    internalRef: u.ref
  };
}
const DS = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function to(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, l = H(e, DS), s = i ? {} : jS(r, o), {
    props: a,
    internalRef: u
  } = BS(S({}, l, {
    externalSlotProps: s
  })), c = De(u, s == null ? void 0 : s.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return AS(n, S({}, a, {
    ref: c
  }), o);
}
function US(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: l,
    in: s,
    onExited: a,
    timeout: u
  } = e, [c, d] = C.useState(!1), f = Z(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: l,
    height: l,
    top: -(l / 2) + i,
    left: -(l / 2) + o
  }, x = Z(n.child, c && n.childLeaving, r && n.childPulsate);
  return !s && !c && d(!0), C.useEffect(() => {
    if (!s && a != null) {
      const v = setTimeout(a, u);
      return () => {
        clearTimeout(v);
      };
    }
  }, [a, s, u]), /* @__PURE__ */ P.jsx("span", {
    className: f,
    style: g,
    children: /* @__PURE__ */ P.jsx("span", {
      className: x
    })
  });
}
const kt = oe("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), WS = ["center", "classes", "className"];
let Ps = (e) => e, Ff, Af, jf, Bf;
const bu = 550, VS = 80, HS = Mu(Ff || (Ff = Ps`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), KS = Mu(Af || (Af = Ps`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), GS = Mu(jf || (jf = Ps`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), QS = K("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), XS = K(US, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Bf || (Bf = Ps`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), kt.rippleVisible, HS, bu, ({
  theme: e
}) => e.transitions.easing.easeInOut, kt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, kt.child, kt.childLeaving, KS, bu, ({
  theme: e
}) => e.transitions.easing.easeInOut, kt.childPulsate, GS, ({
  theme: e
}) => e.transitions.easing.easeInOut), YS = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: l
  } = r, s = H(r, WS), [a, u] = C.useState([]), c = C.useRef(0), d = C.useRef(null);
  C.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [a]);
  const f = C.useRef(!1), g = C.useRef(0), x = C.useRef(null), v = C.useRef(null);
  C.useEffect(() => () => {
    g.current && clearTimeout(g.current);
  }, []);
  const R = C.useCallback((y) => {
    const {
      pulsate: w,
      rippleX: E,
      rippleY: k,
      rippleSize: _,
      cb: M
    } = y;
    u((T) => [...T, /* @__PURE__ */ P.jsx(XS, {
      classes: {
        ripple: Z(i.ripple, kt.ripple),
        rippleVisible: Z(i.rippleVisible, kt.rippleVisible),
        ripplePulsate: Z(i.ripplePulsate, kt.ripplePulsate),
        child: Z(i.child, kt.child),
        childLeaving: Z(i.childLeaving, kt.childLeaving),
        childPulsate: Z(i.childPulsate, kt.childPulsate)
      },
      timeout: bu,
      pulsate: w,
      rippleX: E,
      rippleY: k,
      rippleSize: _
    }, c.current)]), c.current += 1, d.current = M;
  }, [i]), h = C.useCallback((y = {}, w = {}, E = () => {
  }) => {
    const {
      pulsate: k = !1,
      center: _ = o || w.pulsate,
      fakeElement: M = !1
      // For test purposes
    } = w;
    if ((y == null ? void 0 : y.type) === "mousedown" && f.current) {
      f.current = !1;
      return;
    }
    (y == null ? void 0 : y.type) === "touchstart" && (f.current = !0);
    const T = M ? null : v.current, j = T ? T.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let B, F, z;
    if (_ || y === void 0 || y.clientX === 0 && y.clientY === 0 || !y.clientX && !y.touches)
      B = Math.round(j.width / 2), F = Math.round(j.height / 2);
    else {
      const {
        clientX: L,
        clientY: D
      } = y.touches && y.touches.length > 0 ? y.touches[0] : y;
      B = Math.round(L - j.left), F = Math.round(D - j.top);
    }
    if (_)
      z = Math.sqrt((2 * j.width ** 2 + j.height ** 2) / 3), z % 2 === 0 && (z += 1);
    else {
      const L = Math.max(Math.abs((T ? T.clientWidth : 0) - B), B) * 2 + 2, D = Math.max(Math.abs((T ? T.clientHeight : 0) - F), F) * 2 + 2;
      z = Math.sqrt(L ** 2 + D ** 2);
    }
    y != null && y.touches ? x.current === null && (x.current = () => {
      R({
        pulsate: k,
        rippleX: B,
        rippleY: F,
        rippleSize: z,
        cb: E
      });
    }, g.current = setTimeout(() => {
      x.current && (x.current(), x.current = null);
    }, VS)) : R({
      pulsate: k,
      rippleX: B,
      rippleY: F,
      rippleSize: z,
      cb: E
    });
  }, [o, R]), p = C.useCallback(() => {
    h({}, {
      pulsate: !0
    });
  }, [h]), m = C.useCallback((y, w) => {
    if (clearTimeout(g.current), (y == null ? void 0 : y.type) === "touchend" && x.current) {
      x.current(), x.current = null, g.current = setTimeout(() => {
        m(y, w);
      });
      return;
    }
    x.current = null, u((E) => E.length > 0 ? E.slice(1) : E), d.current = w;
  }, []);
  return C.useImperativeHandle(n, () => ({
    pulsate: p,
    start: h,
    stop: m
  }), [p, h, m]), /* @__PURE__ */ P.jsx(QS, S({
    className: Z(kt.root, i.root, l),
    ref: v
  }, s, {
    children: /* @__PURE__ */ P.jsx(OS, {
      component: null,
      exit: !0,
      children: a
    })
  }));
}), qS = YS;
function ZS(e) {
  return se("MuiButtonBase", e);
}
const JS = oe("MuiButtonBase", ["root", "disabled", "focusVisible"]), eC = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], tC = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, l = ae({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, ZS, o);
  return n && r && (l.root += ` ${r}`), l;
}, nC = K("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${JS.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), rC = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: l,
    className: s,
    component: a = "button",
    disabled: u = !1,
    disableRipple: c = !1,
    disableTouchRipple: d = !1,
    focusRipple: f = !1,
    LinkComponent: g = "a",
    onBlur: x,
    onClick: v,
    onContextMenu: R,
    onDragLeave: h,
    onFocus: p,
    onFocusVisible: m,
    onKeyDown: y,
    onKeyUp: w,
    onMouseDown: E,
    onMouseLeave: k,
    onMouseUp: _,
    onTouchEnd: M,
    onTouchMove: T,
    onTouchStart: j,
    tabIndex: B = 0,
    TouchRippleProps: F,
    touchRippleRef: z,
    type: L
  } = r, D = H(r, eC), A = C.useRef(null), $ = C.useRef(null), N = De($, z), {
    isFocusVisibleRef: b,
    onFocus: I,
    onBlur: U,
    ref: G
  } = Lu(), [W, Y] = C.useState(!1);
  u && W && Y(!1), C.useImperativeHandle(o, () => ({
    focusVisible: () => {
      Y(!0), A.current.focus();
    }
  }), []);
  const [Q, ee] = C.useState(!1);
  C.useEffect(() => {
    ee(!0);
  }, []);
  const te = Q && !c && !u;
  C.useEffect(() => {
    W && f && !c && Q && $.current.pulsate();
  }, [c, f, W, Q]);
  function ie(J, tn, so = d) {
    return Yn((ao) => (tn && tn(ao), !so && $.current && $.current[J](ao), !0));
  }
  const nt = ie("start", E), fe = ie("stop", R), Ee = ie("stop", h), re = ie("stop", _), he = ie("stop", (J) => {
    W && J.preventDefault(), k && k(J);
  }), Ce = ie("start", j), vn = ie("stop", M), St = ie("stop", T), Ct = ie("stop", (J) => {
    U(J), b.current === !1 && Y(!1), x && x(J);
  }, !1), zt = Yn((J) => {
    A.current || (A.current = J.currentTarget), I(J), b.current === !0 && (Y(!0), m && m(J)), p && p(J);
  }), bt = () => {
    const J = A.current;
    return a && a !== "button" && !(J.tagName === "A" && J.href);
  }, Re = C.useRef(!1), Jt = Yn((J) => {
    f && !Re.current && W && $.current && J.key === " " && (Re.current = !0, $.current.stop(J, () => {
      $.current.start(J);
    })), J.target === J.currentTarget && bt() && J.key === " " && J.preventDefault(), y && y(J), J.target === J.currentTarget && bt() && J.key === "Enter" && !u && (J.preventDefault(), v && v(J));
  }), rt = Yn((J) => {
    f && J.key === " " && $.current && W && !J.defaultPrevented && (Re.current = !1, $.current.stop(J, () => {
      $.current.pulsate(J);
    })), w && w(J), v && J.target === J.currentTarget && bt() && J.key === " " && !J.defaultPrevented && v(J);
  });
  let be = a;
  be === "button" && (D.href || D.to) && (be = g);
  const Vt = {};
  be === "button" ? (Vt.type = L === void 0 ? "button" : L, Vt.disabled = u) : (!D.href && !D.to && (Vt.role = "button"), u && (Vt["aria-disabled"] = u));
  const yn = De(n, G, A), en = S({}, r, {
    centerRipple: i,
    component: a,
    disabled: u,
    disableRipple: c,
    disableTouchRipple: d,
    focusRipple: f,
    tabIndex: B,
    focusVisible: W
  }), ge = tC(en);
  return /* @__PURE__ */ P.jsxs(nC, S({
    as: be,
    className: Z(ge.root, s),
    ownerState: en,
    onBlur: Ct,
    onClick: v,
    onContextMenu: fe,
    onFocus: zt,
    onKeyDown: Jt,
    onKeyUp: rt,
    onMouseDown: nt,
    onMouseLeave: he,
    onMouseUp: re,
    onDragLeave: Ee,
    onTouchEnd: vn,
    onTouchMove: St,
    onTouchStart: Ce,
    ref: yn,
    tabIndex: u ? -1 : B,
    type: L
  }, Vt, D, {
    children: [l, te ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ P.jsx(qS, S({
        ref: N,
        center: i
      }, F))
    ) : null]
  }));
}), Ts = rC;
function oC(e) {
  return se("MuiIconButton", e);
}
const iC = oe("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), lC = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], sC = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i
  } = e, l = {
    root: ["root", n && "disabled", r !== "default" && `color${X(r)}`, o && `edge${X(o)}`, `size${X(i)}`]
  };
  return ae(l, oC, t);
}, aC = K(Ts, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${X(n.color)}`], n.edge && t[`edge${X(n.edge)}`], t[`size${X(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => S({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
  return S({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && S({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": S({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : He(r.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${iC.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), uC = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: l,
    color: s = "default",
    disabled: a = !1,
    disableFocusRipple: u = !1,
    size: c = "medium"
  } = r, d = H(r, lC), f = S({}, r, {
    edge: o,
    color: s,
    disabled: a,
    disableFocusRipple: u,
    size: c
  }), g = sC(f);
  return /* @__PURE__ */ P.jsx(aC, S({
    className: Z(g.root, l),
    centerRipple: !0,
    focusRipple: !u,
    disabled: a,
    ref: n,
    ownerState: f
  }, d, {
    children: i
  }));
});
function cC(e) {
  return se("MuiTypography", e);
}
oe("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const dC = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], fC = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: o,
    variant: i,
    classes: l
  } = e, s = {
    root: ["root", i, e.align !== "inherit" && `align${X(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
  };
  return ae(s, cC, l);
}, pC = K("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${X(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => S({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), Df = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, mC = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, hC = (e) => mC[e] || e, Vc = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiTypography"
  }), o = hC(r.color), i = Fp(S({}, r, {
    color: o
  })), {
    align: l = "inherit",
    className: s,
    component: a,
    gutterBottom: u = !1,
    noWrap: c = !1,
    paragraph: d = !1,
    variant: f = "body1",
    variantMapping: g = Df
  } = i, x = H(i, dC), v = S({}, i, {
    align: l,
    color: o,
    className: s,
    component: a,
    gutterBottom: u,
    noWrap: c,
    paragraph: d,
    variant: f,
    variantMapping: g
  }), R = a || (d ? "p" : g[f] || Df[f]) || "span", h = fC(v);
  return /* @__PURE__ */ P.jsx(pC, S({
    as: R,
    ref: n,
    ownerState: v,
    className: Z(h.root, s)
  }, x));
});
function gC(e) {
  return se("MuiAppBar", e);
}
oe("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const vC = ["className", "color", "enableColorOnDark", "position"], yC = (e) => {
  const {
    color: t,
    position: n,
    classes: r
  } = e, o = {
    root: ["root", `color${X(t)}`, `position${X(n)}`]
  };
  return ae(o, gC, r);
}, Di = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, xC = K(Wc, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`position${X(n.position)}`], t[`color${X(n.color)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
  return S({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
    // Prevent padding issue with the Modal and fixed positioned AppBar.
    flexShrink: 0
  }, t.position === "fixed" && {
    position: "fixed",
    zIndex: (e.vars || e).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0,
    "@media print": {
      // Prevent the app bar to be visible on each printed page.
      position: "absolute"
    }
  }, t.position === "absolute" && {
    position: "absolute",
    zIndex: (e.vars || e).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0
  }, t.position === "sticky" && {
    // ⚠️ sticky is not supported by IE11.
    position: "sticky",
    zIndex: (e.vars || e).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0
  }, t.position === "static" && {
    position: "static"
  }, t.position === "relative" && {
    position: "relative"
  }, !e.vars && S({}, t.color === "default" && {
    backgroundColor: n,
    color: e.palette.getContrastText(n)
  }, t.color && t.color !== "default" && t.color !== "inherit" && t.color !== "transparent" && {
    backgroundColor: e.palette[t.color].main,
    color: e.palette[t.color].contrastText
  }, t.color === "inherit" && {
    color: "inherit"
  }, e.palette.mode === "dark" && !t.enableColorOnDark && {
    backgroundColor: null,
    color: null
  }, t.color === "transparent" && S({
    backgroundColor: "transparent",
    color: "inherit"
  }, e.palette.mode === "dark" && {
    backgroundImage: "none"
  })), e.vars && S({}, t.color === "default" && {
    "--AppBar-background": t.enableColorOnDark ? e.vars.palette.AppBar.defaultBg : Di(e.vars.palette.AppBar.darkBg, e.vars.palette.AppBar.defaultBg),
    "--AppBar-color": t.enableColorOnDark ? e.vars.palette.text.primary : Di(e.vars.palette.AppBar.darkColor, e.vars.palette.text.primary)
  }, t.color && !t.color.match(/^(default|inherit|transparent)$/) && {
    "--AppBar-background": t.enableColorOnDark ? e.vars.palette[t.color].main : Di(e.vars.palette.AppBar.darkBg, e.vars.palette[t.color].main),
    "--AppBar-color": t.enableColorOnDark ? e.vars.palette[t.color].contrastText : Di(e.vars.palette.AppBar.darkColor, e.vars.palette[t.color].contrastText)
  }, {
    backgroundColor: "var(--AppBar-background)",
    color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)"
  }, t.color === "transparent" && {
    backgroundImage: "none",
    backgroundColor: "transparent",
    color: "inherit"
  }));
}), SC = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiAppBar"
  }), {
    className: o,
    color: i = "primary",
    enableColorOnDark: l = !1,
    position: s = "fixed"
  } = r, a = H(r, vC), u = S({}, r, {
    color: i,
    position: s,
    enableColorOnDark: l
  }), c = yC(u);
  return /* @__PURE__ */ P.jsx(xC, S({
    square: !0,
    component: "header",
    ownerState: u,
    elevation: 4,
    className: Z(c.root, o, s === "fixed" && "mui-fixed"),
    ref: n
  }, a));
}), CC = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function bC(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function kC(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function wC(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || kC(e));
}
function EC(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(CC)).forEach((r, o) => {
    const i = bC(r);
    i === -1 || !wC(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function RC() {
  return !0;
}
function PC(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = EC,
    isEnabled: l = RC,
    open: s
  } = e, a = C.useRef(!1), u = C.useRef(null), c = C.useRef(null), d = C.useRef(null), f = C.useRef(null), g = C.useRef(!1), x = C.useRef(null), v = De(t.ref, x), R = C.useRef(null);
  C.useEffect(() => {
    !s || !x.current || (g.current = !n);
  }, [n, s]), C.useEffect(() => {
    if (!s || !x.current)
      return;
    const m = st(x.current);
    return x.current.contains(m.activeElement) || (x.current.hasAttribute("tabIndex") || x.current.setAttribute("tabIndex", "-1"), g.current && x.current.focus()), () => {
      o || (d.current && d.current.focus && (a.current = !0, d.current.focus()), d.current = null);
    };
  }, [s]), C.useEffect(() => {
    if (!s || !x.current)
      return;
    const m = st(x.current), y = (k) => {
      R.current = k, !(r || !l() || k.key !== "Tab") && m.activeElement === x.current && k.shiftKey && (a.current = !0, c.current && c.current.focus());
    }, w = () => {
      const k = x.current;
      if (k === null)
        return;
      if (!m.hasFocus() || !l() || a.current) {
        a.current = !1;
        return;
      }
      if (k.contains(m.activeElement) || r && m.activeElement !== u.current && m.activeElement !== c.current)
        return;
      if (m.activeElement !== f.current)
        f.current = null;
      else if (f.current !== null)
        return;
      if (!g.current)
        return;
      let _ = [];
      if ((m.activeElement === u.current || m.activeElement === c.current) && (_ = i(x.current)), _.length > 0) {
        var M, T;
        const j = !!((M = R.current) != null && M.shiftKey && ((T = R.current) == null ? void 0 : T.key) === "Tab"), B = _[0], F = _[_.length - 1];
        typeof B != "string" && typeof F != "string" && (j ? F.focus() : B.focus());
      } else
        k.focus();
    };
    m.addEventListener("focusin", w), m.addEventListener("keydown", y, !0);
    const E = setInterval(() => {
      m.activeElement && m.activeElement.tagName === "BODY" && w();
    }, 50);
    return () => {
      clearInterval(E), m.removeEventListener("focusin", w), m.removeEventListener("keydown", y, !0);
    };
  }, [n, r, o, l, s, i]);
  const h = (m) => {
    d.current === null && (d.current = m.relatedTarget), g.current = !0, f.current = m.target;
    const y = t.props.onFocus;
    y && y(m);
  }, p = (m) => {
    d.current === null && (d.current = m.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ P.jsxs(C.Fragment, {
    children: [/* @__PURE__ */ P.jsx("div", {
      tabIndex: s ? 0 : -1,
      onFocus: p,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ C.cloneElement(t, {
      ref: v,
      onFocus: h
    }), /* @__PURE__ */ P.jsx("div", {
      tabIndex: s ? 0 : -1,
      onFocus: p,
      ref: c,
      "data-testid": "sentinelEnd"
    })]
  });
}
function TC(e) {
  return typeof e == "function" ? e() : e;
}
const $C = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [l, s] = C.useState(null), a = De(/* @__PURE__ */ C.isValidElement(r) ? r.ref : null, n);
  if (Zt(() => {
    i || s(TC(o) || document.body);
  }, [o, i]), Zt(() => {
    if (l && !i)
      return ll(n, l), () => {
        ll(n, null);
      };
  }, [n, l, i]), i) {
    if (/* @__PURE__ */ C.isValidElement(r)) {
      const u = {
        ref: a
      };
      return /* @__PURE__ */ C.cloneElement(r, u);
    }
    return /* @__PURE__ */ P.jsx(C.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ P.jsx(C.Fragment, {
    children: l && /* @__PURE__ */ ws.createPortal(r, l)
  });
});
function _C(e) {
  const t = st(e);
  return t.body === e ? Fn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Uo(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Uf(e) {
  return parseInt(Fn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function IC(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Wf(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (l) => {
    const s = i.indexOf(l) === -1, a = !IC(l);
    s && a && Uo(l, o);
  });
}
function ha(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function OC(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (_C(r)) {
      const l = Mp(st(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Uf(r) + l}px`;
      const s = st(r).querySelectorAll(".mui-fixed");
      [].forEach.call(s, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${Uf(a) + l}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = st(r).body;
    else {
      const l = r.parentElement, s = Fn(r);
      i = (l == null ? void 0 : l.nodeName) === "HTML" && s.getComputedStyle(l).overflowY === "scroll" ? l : r;
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: l,
      property: s
    }) => {
      i ? l.style.setProperty(s, i) : l.style.removeProperty(s);
    });
  };
}
function MC(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class NC {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Uo(t.modalRef, !1);
    const o = MC(n);
    Wf(n, t.mount, t.modalRef, o, !0);
    const i = ha(this.containers, (l) => l.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = ha(this.containers, (i) => i.modals.indexOf(t) !== -1), o = this.containers[r];
    o.restore || (o.restore = OC(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = ha(this.containers, (l) => l.modals.indexOf(t) !== -1), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Uo(t.modalRef, n), Wf(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const l = i.modals[i.modals.length - 1];
      l.modalRef && Uo(l.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function zC(e) {
  return typeof e == "function" ? e() : e;
}
function LC(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const FC = new NC();
function AC(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: o = FC,
    closeAfterTransition: i = !1,
    onTransitionEnter: l,
    onTransitionExited: s,
    children: a,
    onClose: u,
    open: c,
    rootRef: d
  } = e, f = C.useRef({}), g = C.useRef(null), x = C.useRef(null), v = De(x, d), [R, h] = C.useState(!c), p = LC(a);
  let m = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (m = !1);
  const y = () => st(g.current), w = () => (f.current.modalRef = x.current, f.current.mount = g.current, f.current), E = () => {
    o.mount(w(), {
      disableScrollLock: r
    }), x.current && (x.current.scrollTop = 0);
  }, k = Yn(() => {
    const D = zC(t) || y().body;
    o.add(w(), D), x.current && E();
  }), _ = C.useCallback(() => o.isTopModal(w()), [o]), M = Yn((D) => {
    g.current = D, D && (c && _() ? E() : x.current && Uo(x.current, m));
  }), T = C.useCallback(() => {
    o.remove(w(), m);
  }, [m, o]);
  C.useEffect(() => () => {
    T();
  }, [T]), C.useEffect(() => {
    c ? k() : (!p || !i) && T();
  }, [c, T, p, i, k]);
  const j = (D) => (A) => {
    var $;
    ($ = D.onKeyDown) == null || $.call(D, A), !(A.key !== "Escape" || A.which === 229 || // Wait until IME is settled.
    !_()) && (n || (A.stopPropagation(), u && u(A, "escapeKeyDown")));
  }, B = (D) => (A) => {
    var $;
    ($ = D.onClick) == null || $.call(D, A), A.target === A.currentTarget && u && u(A, "backdropClick");
  };
  return {
    getRootProps: (D = {}) => {
      const A = Jh(e);
      delete A.onTransitionEnter, delete A.onTransitionExited;
      const $ = S({}, A, D);
      return S({
        role: "presentation"
      }, $, {
        onKeyDown: j($),
        ref: v
      });
    },
    getBackdropProps: (D = {}) => {
      const A = D;
      return S({
        "aria-hidden": !0
      }, A, {
        onClick: B(A),
        open: c
      });
    },
    getTransitionProps: () => {
      const D = () => {
        h(!1), l && l();
      }, A = () => {
        h(!0), s && s(), i && T();
      };
      return {
        onEnter: wa(D, a == null ? void 0 : a.props.onEnter),
        onExited: wa(A, a == null ? void 0 : a.props.onExited)
      };
    },
    rootRef: v,
    portalRef: M,
    isTopModal: _,
    exited: R,
    hasTransition: p
  };
}
const jC = ["onChange", "maxRows", "minRows", "style", "value"];
function Ui(e) {
  return parseInt(e, 10) || 0;
}
const BC = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function Vf(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflow;
}
const DC = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: l,
    value: s
  } = t, a = H(t, jC), {
    current: u
  } = C.useRef(s != null), c = C.useRef(null), d = De(n, c), f = C.useRef(null), g = C.useRef(0), [x, v] = C.useState({
    outerHeightStyle: 0
  }), R = C.useCallback(() => {
    const y = c.current, E = Fn(y).getComputedStyle(y);
    if (E.width === "0px")
      return {
        outerHeightStyle: 0
      };
    const k = f.current;
    k.style.width = E.width, k.value = y.value || t.placeholder || "x", k.value.slice(-1) === `
` && (k.value += " ");
    const _ = E.boxSizing, M = Ui(E.paddingBottom) + Ui(E.paddingTop), T = Ui(E.borderBottomWidth) + Ui(E.borderTopWidth), j = k.scrollHeight;
    k.value = "x";
    const B = k.scrollHeight;
    let F = j;
    i && (F = Math.max(Number(i) * B, F)), o && (F = Math.min(Number(o) * B, F)), F = Math.max(F, B);
    const z = F + (_ === "border-box" ? M + T : 0), L = Math.abs(F - j) <= 1;
    return {
      outerHeightStyle: z,
      overflow: L
    };
  }, [o, i, t.placeholder]), h = (y, w) => {
    const {
      outerHeightStyle: E,
      overflow: k
    } = w;
    return g.current < 20 && (E > 0 && Math.abs((y.outerHeightStyle || 0) - E) > 1 || y.overflow !== k) ? (g.current += 1, {
      overflow: k,
      outerHeightStyle: E
    }) : y;
  }, p = C.useCallback(() => {
    const y = R();
    Vf(y) || v((w) => h(w, y));
  }, [R]);
  Zt(() => {
    const y = () => {
      const j = R();
      Vf(j) || ws.flushSync(() => {
        v((B) => h(B, j));
      });
    }, w = () => {
      g.current = 0, y();
    };
    let E;
    const k = Nu(w), _ = c.current, M = Fn(_);
    M.addEventListener("resize", k);
    let T;
    return typeof ResizeObserver < "u" && (T = new ResizeObserver(w), T.observe(_)), () => {
      k.clear(), cancelAnimationFrame(E), M.removeEventListener("resize", k), T && T.disconnect();
    };
  }, [R]), Zt(() => {
    p();
  }), C.useEffect(() => {
    g.current = 0;
  }, [s]);
  const m = (y) => {
    g.current = 0, u || p(), r && r(y);
  };
  return /* @__PURE__ */ P.jsxs(C.Fragment, {
    children: [/* @__PURE__ */ P.jsx("textarea", S({
      value: s,
      onChange: m,
      ref: d,
      rows: i,
      style: S({
        height: x.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: x.overflow ? "hidden" : void 0
      }, l)
    }, a)), /* @__PURE__ */ P.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: f,
      tabIndex: -1,
      style: S({}, BC.shadow, l, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
function lo({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, o) => (r[o] = e[o], n && typeof e[o] > "u" && (r[o] = n[o]), r), {});
}
const UC = /* @__PURE__ */ C.createContext(void 0), $s = UC;
function pr() {
  return C.useContext($s);
}
function WC(e) {
  return /* @__PURE__ */ P.jsx(L0, S({}, e, {
    defaultTheme: as,
    themeId: or
  }));
}
function Hf(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Ll(e, t = !1) {
  return e && (Hf(e.value) && e.value !== "" || t && Hf(e.defaultValue) && e.defaultValue !== "");
}
function VC(e) {
  return e.startAdornment;
}
function HC(e) {
  return se("MuiInputBase", e);
}
const KC = oe("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), no = KC, GC = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], _s = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${X(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Is = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, QC = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: o,
    endAdornment: i,
    focused: l,
    formControl: s,
    fullWidth: a,
    hiddenLabel: u,
    multiline: c,
    readOnly: d,
    size: f,
    startAdornment: g,
    type: x
  } = e, v = {
    root: ["root", `color${X(n)}`, r && "disabled", o && "error", a && "fullWidth", l && "focused", s && "formControl", f && f !== "medium" && `size${X(f)}`, c && "multiline", g && "adornedStart", i && "adornedEnd", u && "hiddenLabel", d && "readOnly"],
    input: ["input", r && "disabled", x === "search" && "inputTypeSearch", c && "inputMultiline", f === "small" && "inputSizeSmall", u && "inputHiddenLabel", g && "inputAdornedStart", i && "inputAdornedEnd", d && "readOnly"]
  };
  return ae(v, HC, t);
}, Os = K("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: _s
})(({
  theme: e,
  ownerState: t
}) => S({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${no.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && S({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), Ms = K("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Is
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light", r = S({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), o = {
    opacity: "0 !important"
  }, i = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  };
  return S({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&:-ms-input-placeholder": r,
    // IE11
    "&::-ms-input-placeholder": r,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${no.formControl} &`]: {
      "&::-webkit-input-placeholder": o,
      "&::-moz-placeholder": o,
      // Firefox 19+
      "&:-ms-input-placeholder": o,
      // IE11
      "&::-ms-input-placeholder": o,
      // Edge
      "&:focus::-webkit-input-placeholder": i,
      "&:focus::-moz-placeholder": i,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": i,
      // IE11
      "&:focus::-ms-input-placeholder": i
      // Edge
    },
    [`&.${no.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, t.size === "small" && {
    paddingTop: 1
  }, t.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, t.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), XC = /* @__PURE__ */ P.jsx(WC, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), YC = /* @__PURE__ */ C.forwardRef(function(t, n) {
  var r;
  const o = ue({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: l,
    autoFocus: s,
    className: a,
    components: u = {},
    componentsProps: c = {},
    defaultValue: d,
    disabled: f,
    disableInjectingGlobalStyles: g,
    endAdornment: x,
    fullWidth: v = !1,
    id: R,
    inputComponent: h = "input",
    inputProps: p = {},
    inputRef: m,
    maxRows: y,
    minRows: w,
    multiline: E = !1,
    name: k,
    onBlur: _,
    onChange: M,
    onClick: T,
    onFocus: j,
    onKeyDown: B,
    onKeyUp: F,
    placeholder: z,
    readOnly: L,
    renderSuffix: D,
    rows: A,
    slotProps: $ = {},
    slots: N = {},
    startAdornment: b,
    type: I = "text",
    value: U
  } = o, G = H(o, GC), W = p.value != null ? p.value : U, {
    current: Y
  } = C.useRef(W != null), Q = C.useRef(), ee = C.useCallback((ge) => {
  }, []), te = De(Q, m, p.ref, ee), [ie, nt] = C.useState(!1), fe = pr(), Ee = lo({
    props: o,
    muiFormControl: fe,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  Ee.focused = fe ? fe.focused : ie, C.useEffect(() => {
    !fe && f && ie && (nt(!1), _ && _());
  }, [fe, f, ie, _]);
  const re = fe && fe.onFilled, he = fe && fe.onEmpty, Ce = C.useCallback((ge) => {
    Ll(ge) ? re && re() : he && he();
  }, [re, he]);
  Zt(() => {
    Y && Ce({
      value: W
    });
  }, [W, Ce, Y]);
  const vn = (ge) => {
    if (Ee.disabled) {
      ge.stopPropagation();
      return;
    }
    j && j(ge), p.onFocus && p.onFocus(ge), fe && fe.onFocus ? fe.onFocus(ge) : nt(!0);
  }, St = (ge) => {
    _ && _(ge), p.onBlur && p.onBlur(ge), fe && fe.onBlur ? fe.onBlur(ge) : nt(!1);
  }, Ct = (ge, ...J) => {
    if (!Y) {
      const tn = ge.target || Q.current;
      if (tn == null)
        throw new Error(Ln(1));
      Ce({
        value: tn.value
      });
    }
    p.onChange && p.onChange(ge, ...J), M && M(ge, ...J);
  };
  C.useEffect(() => {
    Ce(Q.current);
  }, []);
  const zt = (ge) => {
    Q.current && ge.currentTarget === ge.target && Q.current.focus(), T && T(ge);
  };
  let bt = h, Re = p;
  E && bt === "input" && (A ? Re = S({
    type: void 0,
    minRows: A,
    maxRows: A
  }, Re) : Re = S({
    type: void 0,
    maxRows: y,
    minRows: w
  }, Re), bt = DC);
  const Jt = (ge) => {
    Ce(ge.animationName === "mui-auto-fill-cancel" ? Q.current : {
      value: "x"
    });
  };
  C.useEffect(() => {
    fe && fe.setAdornedStart(!!b);
  }, [fe, b]);
  const rt = S({}, o, {
    color: Ee.color || "primary",
    disabled: Ee.disabled,
    endAdornment: x,
    error: Ee.error,
    focused: Ee.focused,
    formControl: fe,
    fullWidth: v,
    hiddenLabel: Ee.hiddenLabel,
    multiline: E,
    size: Ee.size,
    startAdornment: b,
    type: I
  }), be = QC(rt), Vt = N.root || u.Root || Os, yn = $.root || c.root || {}, en = N.input || u.Input || Ms;
  return Re = S({}, Re, (r = $.input) != null ? r : c.input), /* @__PURE__ */ P.jsxs(C.Fragment, {
    children: [!g && XC, /* @__PURE__ */ P.jsxs(Vt, S({}, yn, !eo(Vt) && {
      ownerState: S({}, rt, yn.ownerState)
    }, {
      ref: n,
      onClick: zt
    }, G, {
      className: Z(be.root, yn.className, a, L && "MuiInputBase-readOnly"),
      children: [b, /* @__PURE__ */ P.jsx($s.Provider, {
        value: null,
        children: /* @__PURE__ */ P.jsx(en, S({
          ownerState: rt,
          "aria-invalid": Ee.error,
          "aria-describedby": i,
          autoComplete: l,
          autoFocus: s,
          defaultValue: d,
          disabled: Ee.disabled,
          id: R,
          onAnimationStart: Jt,
          name: k,
          placeholder: z,
          readOnly: L,
          required: Ee.required,
          rows: A,
          value: W,
          onKeyDown: B,
          onKeyUp: F,
          type: I
        }, Re, !eo(en) && {
          as: bt,
          ownerState: S({}, rt, Re.ownerState)
        }, {
          ref: te,
          className: Z(be.input, Re.className, L && "MuiInputBase-readOnly"),
          onBlur: St,
          onChange: Ct,
          onFocus: vn
        }))
      }), x, D ? D(S({}, Ee, {
        startAdornment: b
      })) : null]
    }))]
  });
}), Hc = YC;
function qC(e) {
  return se("MuiInput", e);
}
const ZC = S({}, no, oe("MuiInput", ["root", "underline", "input"])), Co = ZC;
function JC(e) {
  return se("MuiOutlinedInput", e);
}
const eb = S({}, no, oe("MuiOutlinedInput", ["root", "notchedOutline", "input"])), Cn = eb;
function tb(e) {
  return se("MuiFilledInput", e);
}
const nb = S({}, no, oe("MuiFilledInput", ["root", "underline", "input"])), Vn = nb, rb = Gh(/* @__PURE__ */ P.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), ob = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], ib = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, lb = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = Ku(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: l = !0,
    children: s,
    easing: a,
    in: u,
    onEnter: c,
    onEntered: d,
    onEntering: f,
    onExit: g,
    onExited: x,
    onExiting: v,
    style: R,
    timeout: h = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: p = qh
  } = t, m = H(t, ob), y = C.useRef(null), w = De(y, s.ref, n), E = (z) => (L) => {
    if (z) {
      const D = y.current;
      L === void 0 ? z(D) : z(D, L);
    }
  }, k = E(f), _ = E((z, L) => {
    Zh(z);
    const D = zl({
      style: R,
      timeout: h,
      easing: a
    }, {
      mode: "enter"
    });
    z.style.webkitTransition = r.transitions.create("opacity", D), z.style.transition = r.transitions.create("opacity", D), c && c(z, L);
  }), M = E(d), T = E(v), j = E((z) => {
    const L = zl({
      style: R,
      timeout: h,
      easing: a
    }, {
      mode: "exit"
    });
    z.style.webkitTransition = r.transitions.create("opacity", L), z.style.transition = r.transitions.create("opacity", L), g && g(z);
  }), B = E(x), F = (z) => {
    i && i(y.current, z);
  };
  return /* @__PURE__ */ P.jsx(p, S({
    appear: l,
    in: u,
    nodeRef: y,
    onEnter: _,
    onEntered: M,
    onEntering: k,
    onExit: j,
    onExited: B,
    onExiting: T,
    addEndListener: F,
    timeout: h
  }, m, {
    children: (z, L) => /* @__PURE__ */ C.cloneElement(s, S({
      style: S({
        opacity: 0,
        visibility: z === "exited" && !u ? "hidden" : void 0
      }, ib[z], R, s.props.style),
      ref: w
    }, L))
  }));
}), sb = lb;
function ab(e) {
  return se("MuiBackdrop", e);
}
oe("MuiBackdrop", ["root", "invisible"]);
const ub = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], cb = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return ae({
    root: ["root", n && "invisible"]
  }, ab, t);
}, db = K("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => S({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), fb = /* @__PURE__ */ C.forwardRef(function(t, n) {
  var r, o, i;
  const l = ue({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: s,
    className: a,
    component: u = "div",
    components: c = {},
    componentsProps: d = {},
    invisible: f = !1,
    open: g,
    slotProps: x = {},
    slots: v = {},
    TransitionComponent: R = sb,
    transitionDuration: h
  } = l, p = H(l, ub), m = S({}, l, {
    component: u,
    invisible: f
  }), y = cb(m), w = (r = x.root) != null ? r : d.root;
  return /* @__PURE__ */ P.jsx(R, S({
    in: g,
    timeout: h
  }, p, {
    children: /* @__PURE__ */ P.jsx(db, S({
      "aria-hidden": !0
    }, w, {
      as: (o = (i = v.root) != null ? i : c.Root) != null ? o : u,
      className: Z(y.root, a, w == null ? void 0 : w.className),
      ownerState: S({}, m, w == null ? void 0 : w.ownerState),
      classes: y,
      ref: n,
      children: s
    }))
  }));
}), pb = fb, mb = oe("MuiBox", ["root"]), hb = mb, gb = Hu(), $o = B0({
  themeId: or,
  defaultTheme: gb,
  defaultClassName: hb.root,
  generateClassName: Au.generate
});
function vb(e) {
  return se("MuiButton", e);
}
const yb = oe("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Wi = yb, xb = /* @__PURE__ */ C.createContext({}), Sb = xb, Cb = /* @__PURE__ */ C.createContext(void 0), bb = Cb, kb = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], wb = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    classes: l
  } = e, s = {
    root: ["root", i, `${i}${X(t)}`, `size${X(o)}`, `${i}Size${X(o)}`, t === "inherit" && "colorInherit", n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${X(o)}`],
    endIcon: ["endIcon", `iconSize${X(o)}`]
  }, a = ae(s, vb, l);
  return S({}, l, a);
}, eg = (e) => S({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), Eb = K(Ts, {
  shouldForwardProp: (e) => Nt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${X(n.color)}`], t[`size${X(n.size)}`], t[`${n.variant}Size${X(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return S({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": S({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": S({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${Wi.focusVisible}`]: S({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Wi.disabled}`]: S({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${He(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (n = (r = e.palette).getContrastText) == null ? void 0 : n.call(r, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${Wi.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Wi.disabled}`]: {
    boxShadow: "none"
  }
}), Rb = K("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${X(n.size)}`]];
  }
})(({
  ownerState: e
}) => S({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, eg(e))), Pb = K("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${X(n.size)}`]];
  }
})(({
  ownerState: e
}) => S({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, eg(e))), Tb = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = C.useContext(Sb), o = C.useContext(bb), i = Fu(r, t), l = ue({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: a = "primary",
    component: u = "button",
    className: c,
    disabled: d = !1,
    disableElevation: f = !1,
    disableFocusRipple: g = !1,
    endIcon: x,
    focusVisibleClassName: v,
    fullWidth: R = !1,
    size: h = "medium",
    startIcon: p,
    type: m,
    variant: y = "text"
  } = l, w = H(l, kb), E = S({}, l, {
    color: a,
    component: u,
    disabled: d,
    disableElevation: f,
    disableFocusRipple: g,
    fullWidth: R,
    size: h,
    type: m,
    variant: y
  }), k = wb(E), _ = p && /* @__PURE__ */ P.jsx(Rb, {
    className: k.startIcon,
    ownerState: E,
    children: p
  }), M = x && /* @__PURE__ */ P.jsx(Pb, {
    className: k.endIcon,
    ownerState: E,
    children: x
  }), T = o || "";
  return /* @__PURE__ */ P.jsxs(Eb, S({
    ownerState: E,
    className: Z(r.className, k.root, c, T),
    component: u,
    disabled: d,
    focusRipple: !g,
    focusVisibleClassName: Z(k.focusVisible, v),
    ref: n,
    type: m
  }, w, {
    classes: k,
    children: [_, s, M]
  }));
}), $b = Tb;
function _b(e) {
  return se("MuiCard", e);
}
oe("MuiCard", ["root"]);
const Ib = ["className", "raised"], Ob = (e) => {
  const {
    classes: t
  } = e;
  return ae({
    root: ["root"]
  }, _b, t);
}, Mb = K(Wc, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(() => ({
  overflow: "hidden"
})), Nb = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiCard"
  }), {
    className: o,
    raised: i = !1
  } = r, l = H(r, Ib), s = S({}, r, {
    raised: i
  }), a = Ob(s);
  return /* @__PURE__ */ P.jsx(Mb, S({
    className: Z(a.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: s
  }, l));
}), zb = Nb;
function Lb(e) {
  return se("MuiCardActions", e);
}
oe("MuiCardActions", ["root", "spacing"]);
const Fb = ["disableSpacing", "className"], Ab = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return ae({
    root: ["root", !n && "spacing"]
  }, Lb, t);
}, jb = K("div", {
  name: "MuiCardActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableSpacing && t.spacing];
  }
})(({
  ownerState: e
}) => S({
  display: "flex",
  alignItems: "center",
  padding: 8
}, !e.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
})), Bb = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiCardActions"
  }), {
    disableSpacing: o = !1,
    className: i
  } = r, l = H(r, Fb), s = S({}, r, {
    disableSpacing: o
  }), a = Ab(s);
  return /* @__PURE__ */ P.jsx(jb, S({
    className: Z(a.root, i),
    ownerState: s,
    ref: n
  }, l));
}), Db = Bb;
function Ub(e) {
  return se("MuiCardContent", e);
}
oe("MuiCardContent", ["root"]);
const Wb = ["className", "component"], Vb = (e) => {
  const {
    classes: t
  } = e;
  return ae({
    root: ["root"]
  }, Ub, t);
}, Hb = K("div", {
  name: "MuiCardContent",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(() => ({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
})), Kb = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiCardContent"
  }), {
    className: o,
    component: i = "div"
  } = r, l = H(r, Wb), s = S({}, r, {
    component: i
  }), a = Vb(s);
  return /* @__PURE__ */ P.jsx(Hb, S({
    as: i,
    className: Z(a.root, o),
    ownerState: s,
    ref: n
  }, l));
}), Gb = Kb;
function Qb(e) {
  return se("MuiModal", e);
}
oe("MuiModal", ["root", "hidden", "backdrop"]);
const Xb = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], Yb = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return ae({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Qb, r);
}, qb = K("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => S({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), Zb = K(pb, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Jb = /* @__PURE__ */ C.forwardRef(function(t, n) {
  var r, o, i, l, s, a;
  const u = ue({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: c = Zb,
    BackdropProps: d,
    className: f,
    closeAfterTransition: g = !1,
    children: x,
    container: v,
    component: R,
    components: h = {},
    componentsProps: p = {},
    disableAutoFocus: m = !1,
    disableEnforceFocus: y = !1,
    disableEscapeKeyDown: w = !1,
    disablePortal: E = !1,
    disableRestoreFocus: k = !1,
    disableScrollLock: _ = !1,
    hideBackdrop: M = !1,
    keepMounted: T = !1,
    onBackdropClick: j,
    open: B,
    slotProps: F,
    slots: z
    // eslint-disable-next-line react/prop-types
  } = u, L = H(u, Xb), D = S({}, u, {
    closeAfterTransition: g,
    disableAutoFocus: m,
    disableEnforceFocus: y,
    disableEscapeKeyDown: w,
    disablePortal: E,
    disableRestoreFocus: k,
    disableScrollLock: _,
    hideBackdrop: M,
    keepMounted: T
  }), {
    getRootProps: A,
    getBackdropProps: $,
    getTransitionProps: N,
    portalRef: b,
    isTopModal: I,
    exited: U,
    hasTransition: G
  } = AC(S({}, D, {
    rootRef: n
  })), W = S({}, D, {
    exited: U
  }), Y = Yb(W), Q = {};
  if (x.props.tabIndex === void 0 && (Q.tabIndex = "-1"), G) {
    const {
      onEnter: re,
      onExited: he
    } = N();
    Q.onEnter = re, Q.onExited = he;
  }
  const ee = (r = (o = z == null ? void 0 : z.root) != null ? o : h.Root) != null ? r : qb, te = (i = (l = z == null ? void 0 : z.backdrop) != null ? l : h.Backdrop) != null ? i : c, ie = (s = F == null ? void 0 : F.root) != null ? s : p.root, nt = (a = F == null ? void 0 : F.backdrop) != null ? a : p.backdrop, fe = to({
    elementType: ee,
    externalSlotProps: ie,
    externalForwardedProps: L,
    getSlotProps: A,
    additionalProps: {
      ref: n,
      as: R
    },
    ownerState: W,
    className: Z(f, ie == null ? void 0 : ie.className, Y == null ? void 0 : Y.root, !W.open && W.exited && (Y == null ? void 0 : Y.hidden))
  }), Ee = to({
    elementType: te,
    externalSlotProps: nt,
    additionalProps: d,
    getSlotProps: (re) => $(S({}, re, {
      onClick: (he) => {
        j && j(he), re != null && re.onClick && re.onClick(he);
      }
    })),
    className: Z(nt == null ? void 0 : nt.className, d == null ? void 0 : d.className, Y == null ? void 0 : Y.backdrop),
    ownerState: W
  });
  return !T && !B && (!G || U) ? null : /* @__PURE__ */ P.jsx($C, {
    ref: b,
    container: v,
    disablePortal: E,
    children: /* @__PURE__ */ P.jsxs(ee, S({}, fe, {
      children: [!M && c ? /* @__PURE__ */ P.jsx(te, S({}, Ee)) : null, /* @__PURE__ */ P.jsx(PC, {
        disableEnforceFocus: y,
        disableAutoFocus: m,
        disableRestoreFocus: k,
        isEnabled: I,
        open: B,
        children: /* @__PURE__ */ C.cloneElement(x, Q)
      })]
    }))
  });
}), ek = Jb, tk = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], nk = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = ae({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, tb, t);
  return S({}, t, o);
}, rk = K(Os, {
  shouldForwardProp: (e) => Nt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [..._s(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = e.palette.mode === "light", o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", l = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", s = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return S({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : l,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
      }
    },
    [`&.${Vn.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
    },
    [`&.${Vn.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : s
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(n = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : n.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${Vn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Vn.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : o}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${Vn.disabled}, .${Vn.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${Vn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && S({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, t.hiddenLabel && t.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
}), ok = K(Ms, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Is
})(({
  theme: e,
  ownerState: t
}) => S({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, t.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
}, t.hiddenLabel && t.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, t.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
})), tg = /* @__PURE__ */ C.forwardRef(function(t, n) {
  var r, o, i, l;
  const s = ue({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: a = {},
    componentsProps: u,
    fullWidth: c = !1,
    // declare here to prevent spreading to DOM
    inputComponent: d = "input",
    multiline: f = !1,
    slotProps: g,
    slots: x = {},
    type: v = "text"
  } = s, R = H(s, tk), h = S({}, s, {
    fullWidth: c,
    inputComponent: d,
    multiline: f,
    type: v
  }), p = nk(s), m = {
    root: {
      ownerState: h
    },
    input: {
      ownerState: h
    }
  }, y = g ?? u ? lt(m, g ?? u) : m, w = (r = (o = x.root) != null ? o : a.Root) != null ? r : rk, E = (i = (l = x.input) != null ? l : a.Input) != null ? i : ok;
  return /* @__PURE__ */ P.jsx(Hc, S({
    slots: {
      root: w,
      input: E
    },
    componentsProps: y,
    fullWidth: c,
    inputComponent: d,
    multiline: f,
    ref: n,
    type: v
  }, R, {
    classes: p
  }));
});
tg.muiName = "Input";
const ng = tg;
function ik(e) {
  return se("MuiFormControl", e);
}
oe("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const lk = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], sk = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${X(n)}`, r && "fullWidth"]
  };
  return ae(o, ik, t);
}, ak = K("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => S({}, t.root, t[`margin${X(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => S({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, e.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, e.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, e.fullWidth && {
  width: "100%"
})), uk = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: i,
    color: l = "primary",
    component: s = "div",
    disabled: a = !1,
    error: u = !1,
    focused: c,
    fullWidth: d = !1,
    hiddenLabel: f = !1,
    margin: g = "none",
    required: x = !1,
    size: v = "medium",
    variant: R = "outlined"
  } = r, h = H(r, lk), p = S({}, r, {
    color: l,
    component: s,
    disabled: a,
    error: u,
    fullWidth: d,
    hiddenLabel: f,
    margin: g,
    required: x,
    size: v,
    variant: R
  }), m = sk(p), [y, w] = C.useState(() => {
    let F = !1;
    return o && C.Children.forEach(o, (z) => {
      if (!_o(z, ["Input", "Select"]))
        return;
      const L = _o(z, ["Select"]) ? z.props.input : z;
      L && VC(L.props) && (F = !0);
    }), F;
  }), [E, k] = C.useState(() => {
    let F = !1;
    return o && C.Children.forEach(o, (z) => {
      _o(z, ["Input", "Select"]) && (Ll(z.props, !0) || Ll(z.props.inputProps, !0)) && (F = !0);
    }), F;
  }), [_, M] = C.useState(!1);
  a && _ && M(!1);
  const T = c !== void 0 && !a ? c : _;
  let j;
  const B = C.useMemo(() => ({
    adornedStart: y,
    setAdornedStart: w,
    color: l,
    disabled: a,
    error: u,
    filled: E,
    focused: T,
    fullWidth: d,
    hiddenLabel: f,
    size: v,
    onBlur: () => {
      M(!1);
    },
    onEmpty: () => {
      k(!1);
    },
    onFilled: () => {
      k(!0);
    },
    onFocus: () => {
      M(!0);
    },
    registerEffect: j,
    required: x,
    variant: R
  }), [y, l, a, u, E, T, d, f, j, x, v, R]);
  return /* @__PURE__ */ P.jsx($s.Provider, {
    value: B,
    children: /* @__PURE__ */ P.jsx(ak, S({
      as: s,
      ownerState: p,
      className: Z(m.root, i),
      ref: n
    }, h, {
      children: o
    }))
  });
}), ck = uk;
function dk(e) {
  return se("MuiFormHelperText", e);
}
const fk = oe("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), Kf = fk;
var Gf;
const pk = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], mk = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: o,
    error: i,
    filled: l,
    focused: s,
    required: a
  } = e, u = {
    root: ["root", o && "disabled", i && "error", r && `size${X(r)}`, n && "contained", s && "focused", l && "filled", a && "required"]
  };
  return ae(u, dk, t);
}, hk = K("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${X(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => S({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Kf.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Kf.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), gk = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: i,
    component: l = "p"
  } = r, s = H(r, pk), a = pr(), u = lo({
    props: r,
    muiFormControl: a,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), c = S({}, r, {
    component: l,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), d = mk(c);
  return /* @__PURE__ */ P.jsx(hk, S({
    as: l,
    ownerState: c,
    className: Z(d.root, i),
    ref: n
  }, s, {
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Gf || (Gf = /* @__PURE__ */ P.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : o
  }));
}), vk = gk;
function yk(e) {
  return se("MuiFormLabel", e);
}
const xk = oe("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Wo = xk, Sk = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], Ck = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: l,
    required: s
  } = e, a = {
    root: ["root", `color${X(n)}`, o && "disabled", i && "error", l && "filled", r && "focused", s && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return ae(a, yk, t);
}, bk = K("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => S({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => S({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${Wo.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${Wo.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Wo.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), kk = K("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Wo.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), wk = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: i,
    component: l = "label"
  } = r, s = H(r, Sk), a = pr(), u = lo({
    props: r,
    muiFormControl: a,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), c = S({}, r, {
    color: u.color || "primary",
    component: l,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), d = Ck(c);
  return /* @__PURE__ */ P.jsxs(bk, S({
    as: l,
    ownerState: c,
    className: Z(d.root, i),
    ref: n
  }, s, {
    children: [o, u.required && /* @__PURE__ */ P.jsxs(kk, {
      ownerState: c,
      "aria-hidden": !0,
      className: d.asterisk,
      children: [" ", "*"]
    })]
  }));
}), Ek = wk, Rk = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function ku(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Pk = {
  entering: {
    opacity: 1,
    transform: ku(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, ga = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), rg = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: l,
    in: s,
    onEnter: a,
    onEntered: u,
    onEntering: c,
    onExit: d,
    onExited: f,
    onExiting: g,
    style: x,
    timeout: v = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: R = qh
  } = t, h = H(t, Rk), p = C.useRef(), m = C.useRef(), y = Ku(), w = C.useRef(null), E = De(w, i.ref, n), k = (L) => (D) => {
    if (L) {
      const A = w.current;
      D === void 0 ? L(A) : L(A, D);
    }
  }, _ = k(c), M = k((L, D) => {
    Zh(L);
    const {
      duration: A,
      delay: $,
      easing: N
    } = zl({
      style: x,
      timeout: v,
      easing: l
    }, {
      mode: "enter"
    });
    let b;
    v === "auto" ? (b = y.transitions.getAutoHeightDuration(L.clientHeight), m.current = b) : b = A, L.style.transition = [y.transitions.create("opacity", {
      duration: b,
      delay: $
    }), y.transitions.create("transform", {
      duration: ga ? b : b * 0.666,
      delay: $,
      easing: N
    })].join(","), a && a(L, D);
  }), T = k(u), j = k(g), B = k((L) => {
    const {
      duration: D,
      delay: A,
      easing: $
    } = zl({
      style: x,
      timeout: v,
      easing: l
    }, {
      mode: "exit"
    });
    let N;
    v === "auto" ? (N = y.transitions.getAutoHeightDuration(L.clientHeight), m.current = N) : N = D, L.style.transition = [y.transitions.create("opacity", {
      duration: N,
      delay: A
    }), y.transitions.create("transform", {
      duration: ga ? N : N * 0.666,
      delay: ga ? A : A || N * 0.333,
      easing: $
    })].join(","), L.style.opacity = 0, L.style.transform = ku(0.75), d && d(L);
  }), F = k(f), z = (L) => {
    v === "auto" && (p.current = setTimeout(L, m.current || 0)), r && r(w.current, L);
  };
  return C.useEffect(() => () => {
    clearTimeout(p.current);
  }, []), /* @__PURE__ */ P.jsx(R, S({
    appear: o,
    in: s,
    nodeRef: w,
    onEnter: M,
    onEntered: T,
    onEntering: _,
    onExit: B,
    onExited: F,
    onExiting: j,
    addEndListener: z,
    timeout: v === "auto" ? null : v
  }, h, {
    children: (L, D) => /* @__PURE__ */ C.cloneElement(i, S({
      style: S({
        opacity: 0,
        transform: ku(0.75),
        visibility: L === "exited" && !s ? "hidden" : void 0
      }, Pk[L], x, i.props.style),
      ref: E
    }, D))
  }));
});
rg.muiSupportAuto = !0;
const Tk = rg, $k = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], _k = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = ae({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, qC, t);
  return S({}, t, o);
}, Ik = K(Os, {
  shouldForwardProp: (e) => Nt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [..._s(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), S({
    position: "relative"
  }, t.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${Co.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Co.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${r}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${Co.disabled}, .${Co.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${Co.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), Ok = K(Ms, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Is
})({}), og = /* @__PURE__ */ C.forwardRef(function(t, n) {
  var r, o, i, l;
  const s = ue({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: a,
    components: u = {},
    componentsProps: c,
    fullWidth: d = !1,
    inputComponent: f = "input",
    multiline: g = !1,
    slotProps: x,
    slots: v = {},
    type: R = "text"
  } = s, h = H(s, $k), p = _k(s), y = {
    root: {
      ownerState: {
        disableUnderline: a
      }
    }
  }, w = x ?? c ? lt(x ?? c, y) : y, E = (r = (o = v.root) != null ? o : u.Root) != null ? r : Ik, k = (i = (l = v.input) != null ? l : u.Input) != null ? i : Ok;
  return /* @__PURE__ */ P.jsx(Hc, S({
    slots: {
      root: E,
      input: k
    },
    slotProps: w,
    fullWidth: d,
    inputComponent: f,
    multiline: g,
    ref: n,
    type: R
  }, h, {
    classes: p
  }));
});
og.muiName = "Input";
const ig = og;
function Mk(e) {
  return se("MuiInputAdornment", e);
}
const Nk = oe("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), Qf = Nk;
var Xf;
const zk = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"], Lk = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${X(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, Fk = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: o,
    size: i,
    variant: l
  } = e, s = {
    root: ["root", n && "disablePointerEvents", o && `position${X(o)}`, l, r && "hiddenLabel", i && `size${X(i)}`]
  };
  return ae(s, Mk, t);
}, Ak = K("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: Lk
})(({
  theme: e,
  ownerState: t
}) => S({
  display: "flex",
  height: "0.01em",
  // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (e.vars || e).palette.action.active
}, t.variant === "filled" && {
  // Styles applied to the root element if `variant="filled"`.
  [`&.${Qf.positionStart}&:not(.${Qf.hiddenLabel})`]: {
    marginTop: 16
  }
}, t.position === "start" && {
  // Styles applied to the root element if `position="start"`.
  marginRight: 8
}, t.position === "end" && {
  // Styles applied to the root element if `position="end"`.
  marginLeft: 8
}, t.disablePointerEvents === !0 && {
  // Styles applied to the root element if `disablePointerEvents={true}`.
  pointerEvents: "none"
})), jk = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: o,
    className: i,
    component: l = "div",
    disablePointerEvents: s = !1,
    disableTypography: a = !1,
    position: u,
    variant: c
  } = r, d = H(r, zk), f = pr() || {};
  let g = c;
  c && f.variant, f && !g && (g = f.variant);
  const x = S({}, r, {
    hiddenLabel: f.hiddenLabel,
    size: f.size,
    disablePointerEvents: s,
    position: u,
    variant: g
  }), v = Fk(x);
  return /* @__PURE__ */ P.jsx($s.Provider, {
    value: null,
    children: /* @__PURE__ */ P.jsx(Ak, S({
      as: l,
      ownerState: x,
      className: Z(v.root, i),
      ref: n
    }, d, {
      children: typeof o == "string" && !a ? /* @__PURE__ */ P.jsx(Vc, {
        color: "text.secondary",
        children: o
      }) : /* @__PURE__ */ P.jsxs(C.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          Xf || (Xf = /* @__PURE__ */ P.jsx("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, o]
      })
    }))
  });
}), Yf = jk;
function Bk(e) {
  return se("MuiInputLabel", e);
}
oe("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const Dk = ["disableAnimation", "margin", "shrink", "variant", "className"], Uk = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: l,
    required: s
  } = e, a = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "normal" && `size${X(r)}`, l],
    asterisk: [s && "asterisk"]
  }, u = ae(a, Bk, t);
  return S({}, t, u);
}, Wk = K(Ek, {
  shouldForwardProp: (e) => Nt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Wo.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => S({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, t.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, t.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, t.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !t.disableAnimation && {
  transition: e.transitions.create(["color", "transform", "max-width"], {
    duration: e.transitions.duration.shorter,
    easing: e.transitions.easing.easeOut
  })
}, t.variant === "filled" && S({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, t.shrink && S({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && S({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, t.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), Vk = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    shrink: i,
    className: l
  } = r, s = H(r, Dk), a = pr();
  let u = i;
  typeof u > "u" && a && (u = a.filled || a.focused || a.adornedStart);
  const c = lo({
    props: r,
    muiFormControl: a,
    states: ["size", "variant", "required", "focused"]
  }), d = S({}, r, {
    disableAnimation: o,
    formControl: a,
    shrink: u,
    size: c.size,
    variant: c.variant,
    required: c.required,
    focused: c.focused
  }), f = Uk(d);
  return /* @__PURE__ */ P.jsx(Wk, S({
    "data-shrink": u,
    ownerState: d,
    ref: n,
    className: Z(f.root, l)
  }, s, {
    classes: f
  }));
}), Hk = Vk;
function Kk(e) {
  return se("MuiLink", e);
}
const Gk = oe("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]), Qk = Gk, lg = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Xk = (e) => lg[e] || e, Yk = ({
  theme: e,
  ownerState: t
}) => {
  const n = Xk(t.color), r = Kr(e, `palette.${n}`, !1) || t.color, o = Kr(e, `palette.${n}Channel`);
  return "vars" in e && o ? `rgba(${o} / 0.4)` : He(r, 0.4);
}, qk = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"], Zk = (e) => {
  const {
    classes: t,
    component: n,
    focusVisible: r,
    underline: o
  } = e, i = {
    root: ["root", `underline${X(o)}`, n === "button" && "button", r && "focusVisible"]
  };
  return ae(i, Kk, t);
}, Jk = K(Vc, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`underline${X(n.underline)}`], n.component === "button" && t.button];
  }
})(({
  theme: e,
  ownerState: t
}) => S({}, t.underline === "none" && {
  textDecoration: "none"
}, t.underline === "hover" && {
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline"
  }
}, t.underline === "always" && S({
  textDecoration: "underline"
}, t.color !== "inherit" && {
  textDecorationColor: Yk({
    theme: e,
    ownerState: t
  })
}, {
  "&:hover": {
    textDecorationColor: "inherit"
  }
}), t.component === "button" && {
  position: "relative",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Qk.focusVisible}`]: {
    outline: "auto"
  }
})), ew = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiLink"
  }), {
    className: o,
    color: i = "primary",
    component: l = "a",
    onBlur: s,
    onFocus: a,
    TypographyClasses: u,
    underline: c = "always",
    variant: d = "inherit",
    sx: f
  } = r, g = H(r, qk), {
    isFocusVisibleRef: x,
    onBlur: v,
    onFocus: R,
    ref: h
  } = Lu(), [p, m] = C.useState(!1), y = De(n, h), w = (M) => {
    v(M), x.current === !1 && m(!1), s && s(M);
  }, E = (M) => {
    R(M), x.current === !0 && m(!0), a && a(M);
  }, k = S({}, r, {
    color: i,
    component: l,
    focusVisible: p,
    underline: c,
    variant: d
  }), _ = Zk(k);
  return /* @__PURE__ */ P.jsx(Jk, S({
    color: i,
    className: Z(_.root, o),
    classes: u,
    component: l,
    onBlur: w,
    onFocus: E,
    ref: y,
    ownerState: k,
    variant: d,
    sx: [...Object.keys(lg).includes(i) ? [] : [{
      color: i
    }], ...Array.isArray(f) ? f : [f]]
  }, g));
}), tw = ew, nw = /* @__PURE__ */ C.createContext({}), rr = nw;
function rw(e) {
  return se("MuiList", e);
}
oe("MuiList", ["root", "padding", "dense", "subheader"]);
const ow = ["children", "className", "component", "dense", "disablePadding", "subheader"], iw = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return ae({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, rw, t);
}, lw = K("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => S({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), sg = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: l = "ul",
    dense: s = !1,
    disablePadding: a = !1,
    subheader: u
  } = r, c = H(r, ow), d = C.useMemo(() => ({
    dense: s
  }), [s]), f = S({}, r, {
    component: l,
    dense: s,
    disablePadding: a
  }), g = iw(f);
  return /* @__PURE__ */ P.jsx(rr.Provider, {
    value: d,
    children: /* @__PURE__ */ P.jsxs(lw, S({
      as: l,
      className: Z(g.root, i),
      ref: n,
      ownerState: f
    }, c, {
      children: [u, o]
    }))
  });
});
function sw(e) {
  return se("MuiListItem", e);
}
const aw = oe("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]), kr = aw;
function uw(e) {
  return se("MuiListItemButton", e);
}
const cw = oe("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), wr = cw, dw = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"], fw = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters];
}, pw = (e) => {
  const {
    alignItems: t,
    classes: n,
    dense: r,
    disabled: o,
    disableGutters: i,
    divider: l,
    selected: s
  } = e, u = ae({
    root: ["root", r && "dense", !i && "gutters", l && "divider", o && "disabled", t === "flex-start" && "alignItemsFlexStart", s && "selected"]
  }, uw, n);
  return S({}, n, u);
}, mw = K(Ts, {
  shouldForwardProp: (e) => Nt(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: fw
})(({
  theme: e,
  ownerState: t
}) => S({
  display: "flex",
  flexGrow: 1,
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minWidth: 0,
  boxSizing: "border-box",
  textAlign: "left",
  paddingTop: 8,
  paddingBottom: 8,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${wr.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : He(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${wr.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : He(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${wr.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : He(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : He(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${wr.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${wr.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, t.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.dense && {
  paddingTop: 4,
  paddingBottom: 4
})), qf = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiListItemButton"
  }), {
    alignItems: o = "center",
    autoFocus: i = !1,
    component: l = "div",
    children: s,
    dense: a = !1,
    disableGutters: u = !1,
    divider: c = !1,
    focusVisibleClassName: d,
    selected: f = !1,
    className: g
  } = r, x = H(r, dw), v = C.useContext(rr), R = C.useMemo(() => ({
    dense: a || v.dense || !1,
    alignItems: o,
    disableGutters: u
  }), [o, v.dense, a, u]), h = C.useRef(null);
  Zt(() => {
    i && h.current && h.current.focus();
  }, [i]);
  const p = S({}, r, {
    alignItems: o,
    dense: R.dense,
    disableGutters: u,
    divider: c,
    selected: f
  }), m = pw(p), y = De(h, n);
  return /* @__PURE__ */ P.jsx(rr.Provider, {
    value: R,
    children: /* @__PURE__ */ P.jsx(mw, S({
      ref: y,
      href: x.href || x.to,
      component: (x.href || x.to) && l === "div" ? "button" : l,
      focusVisibleClassName: Z(m.focusVisible, d),
      ownerState: p,
      className: Z(m.root, g)
    }, x, {
      classes: m,
      children: s
    }))
  });
});
function hw(e) {
  return se("MuiListItemSecondaryAction", e);
}
oe("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const gw = ["className"], vw = (e) => {
  const {
    disableGutters: t,
    classes: n
  } = e;
  return ae({
    root: ["root", t && "disableGutters"]
  }, hw, n);
}, yw = K("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.disableGutters && t.disableGutters];
  }
})(({
  ownerState: e
}) => S({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)"
}, e.disableGutters && {
  right: 0
})), ag = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: o
  } = r, i = H(r, gw), l = C.useContext(rr), s = S({}, r, {
    disableGutters: l.disableGutters
  }), a = vw(s);
  return /* @__PURE__ */ P.jsx(yw, S({
    className: Z(a.root, o),
    ownerState: s,
    ref: n
  }, i));
});
ag.muiName = "ListItemSecondaryAction";
const xw = ag, Sw = ["className"], Cw = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"], bw = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters, !n.disablePadding && t.padding, n.button && t.button, n.hasSecondaryAction && t.secondaryAction];
}, kw = (e) => {
  const {
    alignItems: t,
    button: n,
    classes: r,
    dense: o,
    disabled: i,
    disableGutters: l,
    disablePadding: s,
    divider: a,
    hasSecondaryAction: u,
    selected: c
  } = e;
  return ae({
    root: ["root", o && "dense", !l && "gutters", !s && "padding", a && "divider", i && "disabled", n && "button", t === "flex-start" && "alignItemsFlexStart", u && "secondaryAction", c && "selected"],
    container: ["container"]
  }, sw, r);
}, ww = K("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: bw
})(({
  theme: e,
  ownerState: t
}) => S({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left"
}, !t.disablePadding && S({
  paddingTop: 8,
  paddingBottom: 8
}, t.dense && {
  paddingTop: 4,
  paddingBottom: 4
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, !!t.secondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}), !!t.secondaryAction && {
  [`& > .${wr.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${kr.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${kr.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : He(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${kr.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : He(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${kr.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, t.button && {
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${kr.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : He(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : He(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  }
}, t.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
})), Ew = K("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (e, t) => t.container
})({
  position: "relative"
}), Zf = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiListItem"
  }), {
    alignItems: o = "center",
    autoFocus: i = !1,
    button: l = !1,
    children: s,
    className: a,
    component: u,
    components: c = {},
    componentsProps: d = {},
    ContainerComponent: f = "li",
    ContainerProps: {
      className: g
    } = {},
    dense: x = !1,
    disabled: v = !1,
    disableGutters: R = !1,
    disablePadding: h = !1,
    divider: p = !1,
    focusVisibleClassName: m,
    secondaryAction: y,
    selected: w = !1,
    slotProps: E = {},
    slots: k = {}
  } = r, _ = H(r.ContainerProps, Sw), M = H(r, Cw), T = C.useContext(rr), j = C.useMemo(() => ({
    dense: x || T.dense || !1,
    alignItems: o,
    disableGutters: R
  }), [o, T.dense, x, R]), B = C.useRef(null);
  Zt(() => {
    i && B.current && B.current.focus();
  }, [i]);
  const F = C.Children.toArray(s), z = F.length && _o(F[F.length - 1], ["ListItemSecondaryAction"]), L = S({}, r, {
    alignItems: o,
    autoFocus: i,
    button: l,
    dense: j.dense,
    disabled: v,
    disableGutters: R,
    disablePadding: h,
    divider: p,
    hasSecondaryAction: z,
    selected: w
  }), D = kw(L), A = De(B, n), $ = k.root || c.Root || ww, N = E.root || d.root || {}, b = S({
    className: Z(D.root, N.className, a),
    disabled: v
  }, M);
  let I = u || "li";
  return l && (b.component = u || "div", b.focusVisibleClassName = Z(kr.focusVisible, m), I = Ts), z ? (I = !b.component && !u ? "div" : I, f === "li" && (I === "li" ? I = "div" : b.component === "li" && (b.component = "div")), /* @__PURE__ */ P.jsx(rr.Provider, {
    value: j,
    children: /* @__PURE__ */ P.jsxs(Ew, S({
      as: f,
      className: Z(D.container, g),
      ref: A,
      ownerState: L
    }, _, {
      children: [/* @__PURE__ */ P.jsx($, S({}, N, !eo($) && {
        as: I,
        ownerState: S({}, L, N.ownerState)
      }, b, {
        children: F
      })), F.pop()]
    }))
  })) : /* @__PURE__ */ P.jsx(rr.Provider, {
    value: j,
    children: /* @__PURE__ */ P.jsxs($, S({}, N, {
      as: I,
      ref: A
    }, !eo($) && {
      ownerState: S({}, L, N.ownerState)
    }, b, {
      children: [F, y && /* @__PURE__ */ P.jsx(xw, {
        children: y
      })]
    }))
  });
}), Rw = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function va(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Jf(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function ug(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function bo(e, t, n, r, o, i) {
  let l = !1, s = o(e, t, t ? n : !1);
  for (; s; ) {
    if (s === e.firstChild) {
      if (l)
        return !1;
      l = !0;
    }
    const a = r ? !1 : s.disabled || s.getAttribute("aria-disabled") === "true";
    if (!s.hasAttribute("tabindex") || !ug(s, i) || a)
      s = o(e, s, n);
    else
      return s.focus(), !0;
  }
  return !1;
}
const Pw = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: i = !1,
    children: l,
    className: s,
    disabledItemsFocusable: a = !1,
    disableListWrap: u = !1,
    onKeyDown: c,
    variant: d = "selectedMenu"
  } = t, f = H(t, Rw), g = C.useRef(null), x = C.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Zt(() => {
    o && g.current.focus();
  }, [o]), C.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (m, y) => {
      const w = !g.current.style.width;
      if (m.clientHeight < g.current.clientHeight && w) {
        const E = `${Mp(st(m))}px`;
        g.current.style[y.direction === "rtl" ? "paddingLeft" : "paddingRight"] = E, g.current.style.width = `calc(100% + ${E})`;
      }
      return g.current;
    }
  }), []);
  const v = (m) => {
    const y = g.current, w = m.key, E = st(y).activeElement;
    if (w === "ArrowDown")
      m.preventDefault(), bo(y, E, u, a, va);
    else if (w === "ArrowUp")
      m.preventDefault(), bo(y, E, u, a, Jf);
    else if (w === "Home")
      m.preventDefault(), bo(y, null, u, a, va);
    else if (w === "End")
      m.preventDefault(), bo(y, null, u, a, Jf);
    else if (w.length === 1) {
      const k = x.current, _ = w.toLowerCase(), M = performance.now();
      k.keys.length > 0 && (M - k.lastTime > 500 ? (k.keys = [], k.repeating = !0, k.previousKeyMatched = !0) : k.repeating && _ !== k.keys[0] && (k.repeating = !1)), k.lastTime = M, k.keys.push(_);
      const T = E && !k.repeating && ug(E, k);
      k.previousKeyMatched && (T || bo(y, E, !1, a, va, k)) ? m.preventDefault() : k.previousKeyMatched = !1;
    }
    c && c(m);
  }, R = De(g, n);
  let h = -1;
  C.Children.forEach(l, (m, y) => {
    if (!/* @__PURE__ */ C.isValidElement(m)) {
      h === y && (h += 1, h >= l.length && (h = -1));
      return;
    }
    m.props.disabled || (d === "selectedMenu" && m.props.selected || h === -1) && (h = y), h === y && (m.props.disabled || m.props.muiSkipListHighlight || m.type.muiSkipListHighlight) && (h += 1, h >= l.length && (h = -1));
  });
  const p = C.Children.map(l, (m, y) => {
    if (y === h) {
      const w = {};
      return i && (w.autoFocus = !0), m.props.tabIndex === void 0 && d === "selectedMenu" && (w.tabIndex = 0), /* @__PURE__ */ C.cloneElement(m, w);
    }
    return m;
  });
  return /* @__PURE__ */ P.jsx(sg, S({
    role: "menu",
    ref: R,
    className: s,
    onKeyDown: v,
    tabIndex: o ? 0 : -1
  }, f, {
    children: p
  }));
}), Tw = Pw;
function $w(e) {
  return se("MuiPopover", e);
}
oe("MuiPopover", ["root", "paper"]);
const _w = ["onEntering"], Iw = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], Ow = ["slotProps"];
function ep(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function tp(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function np(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function ya(e) {
  return typeof e == "function" ? e() : e;
}
const Mw = (e) => {
  const {
    classes: t
  } = e;
  return ae({
    root: ["root"],
    paper: ["paper"]
  }, $w, t);
}, Nw = K(ek, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), cg = K(Wc, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), zw = /* @__PURE__ */ C.forwardRef(function(t, n) {
  var r, o, i;
  const l = ue({
    props: t,
    name: "MuiPopover"
  }), {
    action: s,
    anchorEl: a,
    anchorOrigin: u = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: c,
    anchorReference: d = "anchorEl",
    children: f,
    className: g,
    container: x,
    elevation: v = 8,
    marginThreshold: R = 16,
    open: h,
    PaperProps: p = {},
    slots: m,
    slotProps: y,
    transformOrigin: w = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: E = Tk,
    transitionDuration: k = "auto",
    TransitionProps: {
      onEntering: _
    } = {},
    disableScrollLock: M = !1
  } = l, T = H(l.TransitionProps, _w), j = H(l, Iw), B = (r = y == null ? void 0 : y.paper) != null ? r : p, F = C.useRef(), z = De(F, B.ref), L = S({}, l, {
    anchorOrigin: u,
    anchorReference: d,
    elevation: v,
    marginThreshold: R,
    externalPaperSlotProps: B,
    transformOrigin: w,
    TransitionComponent: E,
    transitionDuration: k,
    TransitionProps: T
  }), D = Mw(L), A = C.useCallback(() => {
    if (d === "anchorPosition")
      return c;
    const re = ya(a), Ce = (re && re.nodeType === 1 ? re : st(F.current).body).getBoundingClientRect();
    return {
      top: Ce.top + ep(Ce, u.vertical),
      left: Ce.left + tp(Ce, u.horizontal)
    };
  }, [a, u.horizontal, u.vertical, c, d]), $ = C.useCallback((re) => ({
    vertical: ep(re, w.vertical),
    horizontal: tp(re, w.horizontal)
  }), [w.horizontal, w.vertical]), N = C.useCallback((re) => {
    const he = {
      width: re.offsetWidth,
      height: re.offsetHeight
    }, Ce = $(he);
    if (d === "none")
      return {
        top: null,
        left: null,
        transformOrigin: np(Ce)
      };
    const vn = A();
    let St = vn.top - Ce.vertical, Ct = vn.left - Ce.horizontal;
    const zt = St + he.height, bt = Ct + he.width, Re = Fn(ya(a)), Jt = Re.innerHeight - R, rt = Re.innerWidth - R;
    if (R !== null && St < R) {
      const be = St - R;
      St -= be, Ce.vertical += be;
    } else if (R !== null && zt > Jt) {
      const be = zt - Jt;
      St -= be, Ce.vertical += be;
    }
    if (R !== null && Ct < R) {
      const be = Ct - R;
      Ct -= be, Ce.horizontal += be;
    } else if (bt > rt) {
      const be = bt - rt;
      Ct -= be, Ce.horizontal += be;
    }
    return {
      top: `${Math.round(St)}px`,
      left: `${Math.round(Ct)}px`,
      transformOrigin: np(Ce)
    };
  }, [a, d, A, $, R]), [b, I] = C.useState(h), U = C.useCallback(() => {
    const re = F.current;
    if (!re)
      return;
    const he = N(re);
    he.top !== null && (re.style.top = he.top), he.left !== null && (re.style.left = he.left), re.style.transformOrigin = he.transformOrigin, I(!0);
  }, [N]);
  C.useEffect(() => (M && window.addEventListener("scroll", U), () => window.removeEventListener("scroll", U)), [a, M, U]);
  const G = (re, he) => {
    _ && _(re, he), U();
  }, W = () => {
    I(!1);
  };
  C.useEffect(() => {
    h && U();
  }), C.useImperativeHandle(s, () => h ? {
    updatePosition: () => {
      U();
    }
  } : null, [h, U]), C.useEffect(() => {
    if (!h)
      return;
    const re = Nu(() => {
      U();
    }), he = Fn(a);
    return he.addEventListener("resize", re), () => {
      re.clear(), he.removeEventListener("resize", re);
    };
  }, [a, h, U]);
  let Y = k;
  k === "auto" && !E.muiSupportAuto && (Y = void 0);
  const Q = x || (a ? st(ya(a)).body : void 0), ee = (o = m == null ? void 0 : m.root) != null ? o : Nw, te = (i = m == null ? void 0 : m.paper) != null ? i : cg, ie = to({
    elementType: te,
    externalSlotProps: S({}, B, {
      style: b ? B.style : S({}, B.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: v,
      ref: z
    },
    ownerState: L,
    className: Z(D.paper, B == null ? void 0 : B.className)
  }), nt = to({
    elementType: ee,
    externalSlotProps: (y == null ? void 0 : y.root) || {},
    externalForwardedProps: j,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: Q,
      open: h
    },
    ownerState: L,
    className: Z(D.root, g)
  }), {
    slotProps: fe
  } = nt, Ee = H(nt, Ow);
  return /* @__PURE__ */ P.jsx(ee, S({}, Ee, !eo(ee) && {
    slotProps: fe,
    disableScrollLock: M
  }, {
    children: /* @__PURE__ */ P.jsx(E, S({
      appear: !0,
      in: h,
      onEntering: G,
      onExited: W,
      timeout: Y
    }, T, {
      children: /* @__PURE__ */ P.jsx(te, S({}, ie, {
        children: f
      }))
    }))
  }));
}), Lw = zw;
function Fw(e) {
  return se("MuiMenu", e);
}
oe("MuiMenu", ["root", "paper", "list"]);
const Aw = ["onEntering"], jw = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], Bw = {
  vertical: "top",
  horizontal: "right"
}, Dw = {
  vertical: "top",
  horizontal: "left"
}, Uw = (e) => {
  const {
    classes: t
  } = e;
  return ae({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Fw, t);
}, Ww = K(Lw, {
  shouldForwardProp: (e) => Nt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Vw = K(cg, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), Hw = K(Tw, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Kw = /* @__PURE__ */ C.forwardRef(function(t, n) {
  var r, o;
  const i = ue({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: l = !0,
    children: s,
    className: a,
    disableAutoFocusItem: u = !1,
    MenuListProps: c = {},
    onClose: d,
    open: f,
    PaperProps: g = {},
    PopoverClasses: x,
    transitionDuration: v = "auto",
    TransitionProps: {
      onEntering: R
    } = {},
    variant: h = "selectedMenu",
    slots: p = {},
    slotProps: m = {}
  } = i, y = H(i.TransitionProps, Aw), w = H(i, jw), E = Ku(), k = E.direction === "rtl", _ = S({}, i, {
    autoFocus: l,
    disableAutoFocusItem: u,
    MenuListProps: c,
    onEntering: R,
    PaperProps: g,
    transitionDuration: v,
    TransitionProps: y,
    variant: h
  }), M = Uw(_), T = l && !u && f, j = C.useRef(null), B = (N, b) => {
    j.current && j.current.adjustStyleForScrollbar(N, E), R && R(N, b);
  }, F = (N) => {
    N.key === "Tab" && (N.preventDefault(), d && d(N, "tabKeyDown"));
  };
  let z = -1;
  C.Children.map(s, (N, b) => {
    /* @__PURE__ */ C.isValidElement(N) && (N.props.disabled || (h === "selectedMenu" && N.props.selected || z === -1) && (z = b));
  });
  const L = (r = p.paper) != null ? r : Vw, D = (o = m.paper) != null ? o : g, A = to({
    elementType: p.root,
    externalSlotProps: m.root,
    ownerState: _,
    className: [M.root, a]
  }), $ = to({
    elementType: L,
    externalSlotProps: D,
    ownerState: _,
    className: M.paper
  });
  return /* @__PURE__ */ P.jsx(Ww, S({
    onClose: d,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: k ? "right" : "left"
    },
    transformOrigin: k ? Bw : Dw,
    slots: {
      paper: L,
      root: p.root
    },
    slotProps: {
      root: A,
      paper: $
    },
    open: f,
    ref: n,
    transitionDuration: v,
    TransitionProps: S({
      onEntering: B
    }, y),
    ownerState: _
  }, w, {
    classes: x,
    children: /* @__PURE__ */ P.jsx(Hw, S({
      onKeyDown: F,
      actions: j,
      autoFocus: l && (z === -1 || u),
      autoFocusItem: T,
      variant: h
    }, c, {
      className: Z(M.list, c.className),
      children: s
    }))
  }));
}), Gw = Kw;
function Qw(e) {
  return se("MuiNativeSelect", e);
}
const Xw = oe("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Kc = Xw, Yw = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], qw = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: l
  } = e, s = {
    select: ["select", n, r && "disabled", o && "multiple", l && "error"],
    icon: ["icon", `icon${X(n)}`, i && "iconOpen", r && "disabled"]
  };
  return ae(s, Qw, t);
}, dg = ({
  ownerState: e,
  theme: t
}) => S({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": S({}, t.vars ? {
    backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${Kc.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (t.vars || t).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, e.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, e.variant === "outlined" && {
  borderRadius: (t.vars || t).shape.borderRadius,
  "&:focus": {
    borderRadius: (t.vars || t).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), Zw = K("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Nt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Kc.multiple}`]: t.multiple
    }];
  }
})(dg), fg = ({
  ownerState: e,
  theme: t
}) => S({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${Kc.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), Jw = K("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${X(n.variant)}`], n.open && t.iconOpen];
  }
})(fg), e2 = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: i,
    IconComponent: l,
    inputRef: s,
    variant: a = "standard"
  } = t, u = H(t, Yw), c = S({}, t, {
    disabled: o,
    variant: a,
    error: i
  }), d = qw(c);
  return /* @__PURE__ */ P.jsxs(C.Fragment, {
    children: [/* @__PURE__ */ P.jsx(Zw, S({
      ownerState: c,
      className: Z(d.select, r),
      disabled: o,
      ref: s || n
    }, u)), t.multiple ? null : /* @__PURE__ */ P.jsx(Jw, {
      as: l,
      ownerState: c,
      className: d.icon
    })]
  });
}), t2 = e2;
var rp;
const n2 = ["children", "classes", "className", "label", "notched"], r2 = K("fieldset", {
  shouldForwardProp: Nt
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), o2 = K("legend", {
  shouldForwardProp: Nt
})(({
  ownerState: e,
  theme: t
}) => S({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !e.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: t.transitions.create("width", {
    duration: 150,
    easing: t.transitions.easing.easeOut
  })
}, e.withLabel && S({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: t.transitions.create("max-width", {
    duration: 50,
    easing: t.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, e.notched && {
  maxWidth: "100%",
  transition: t.transitions.create("max-width", {
    duration: 100,
    easing: t.transitions.easing.easeOut,
    delay: 50
  })
})));
function i2(e) {
  const {
    className: t,
    label: n,
    notched: r
  } = e, o = H(e, n2), i = n != null && n !== "", l = S({}, e, {
    notched: r,
    withLabel: i
  });
  return /* @__PURE__ */ P.jsx(r2, S({
    "aria-hidden": !0,
    className: t,
    ownerState: l
  }, o, {
    children: /* @__PURE__ */ P.jsx(o2, {
      ownerState: l,
      children: i ? /* @__PURE__ */ P.jsx("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        rp || (rp = /* @__PURE__ */ P.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
const l2 = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], s2 = (e) => {
  const {
    classes: t
  } = e, r = ae({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, JC, t);
  return S({}, t, r);
}, a2 = K(Os, {
  shouldForwardProp: (e) => Nt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: _s
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return S({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Cn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Cn.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${Cn.focused} .${Cn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${Cn.error} .${Cn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${Cn.disabled} .${Cn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && S({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), u2 = K(i2, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
}), c2 = K(Ms, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Is
})(({
  theme: e,
  ownerState: t
}) => S({
  padding: "16.5px 14px"
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  padding: "8.5px 14px"
}, t.multiline && {
  padding: 0
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
})), pg = /* @__PURE__ */ C.forwardRef(function(t, n) {
  var r, o, i, l, s;
  const a = ue({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: c = !1,
    inputComponent: d = "input",
    label: f,
    multiline: g = !1,
    notched: x,
    slots: v = {},
    type: R = "text"
  } = a, h = H(a, l2), p = s2(a), m = pr(), y = lo({
    props: a,
    muiFormControl: m,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), w = S({}, a, {
    color: y.color || "primary",
    disabled: y.disabled,
    error: y.error,
    focused: y.focused,
    formControl: m,
    fullWidth: c,
    hiddenLabel: y.hiddenLabel,
    multiline: g,
    size: y.size,
    type: R
  }), E = (r = (o = v.root) != null ? o : u.Root) != null ? r : a2, k = (i = (l = v.input) != null ? l : u.Input) != null ? i : c2;
  return /* @__PURE__ */ P.jsx(Hc, S({
    slots: {
      root: E,
      input: k
    },
    renderSuffix: (_) => /* @__PURE__ */ P.jsx(u2, {
      ownerState: w,
      className: p.notchedOutline,
      label: f != null && f !== "" && y.required ? s || (s = /* @__PURE__ */ P.jsxs(C.Fragment, {
        children: [f, " ", "*"]
      })) : f,
      notched: typeof x < "u" ? x : !!(_.startAdornment || _.filled || _.focused)
    }),
    fullWidth: c,
    inputComponent: d,
    multiline: g,
    ref: n,
    type: R
  }, h, {
    classes: S({}, p, {
      notchedOutline: null
    })
  }));
});
pg.muiName = "Input";
const mg = pg;
function d2(e) {
  return se("MuiSelect", e);
}
const ko = oe("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var op;
const f2 = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], p2 = K("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${ko.select}`]: t.select
      },
      {
        [`&.${ko.select}`]: t[n.variant]
      },
      {
        [`&.${ko.error}`]: t.error
      },
      {
        [`&.${ko.multiple}`]: t.multiple
      }
    ];
  }
})(dg, {
  // Win specificity over the input base
  [`&.${ko.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), m2 = K("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${X(n.variant)}`], n.open && t.iconOpen];
  }
})(fg), h2 = K("input", {
  shouldForwardProp: (e) => Hy(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function ip(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function g2(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const v2 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: l
  } = e, s = {
    select: ["select", n, r && "disabled", o && "multiple", l && "error"],
    icon: ["icon", `icon${X(n)}`, i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return ae(s, d2, t);
}, y2 = /* @__PURE__ */ C.forwardRef(function(t, n) {
  var r;
  const {
    "aria-describedby": o,
    "aria-label": i,
    autoFocus: l,
    autoWidth: s,
    children: a,
    className: u,
    defaultOpen: c,
    defaultValue: d,
    disabled: f,
    displayEmpty: g,
    error: x = !1,
    IconComponent: v,
    inputRef: R,
    labelId: h,
    MenuProps: p = {},
    multiple: m,
    name: y,
    onBlur: w,
    onChange: E,
    onClose: k,
    onFocus: _,
    onOpen: M,
    open: T,
    readOnly: j,
    renderValue: B,
    SelectDisplayProps: F = {},
    tabIndex: z,
    value: L,
    variant: D = "standard"
  } = t, A = H(t, f2), [$, N] = Ea({
    controlled: L,
    default: d,
    name: "Select"
  }), [b, I] = Ea({
    controlled: T,
    default: c,
    name: "Select"
  }), U = C.useRef(null), G = C.useRef(null), [W, Y] = C.useState(null), {
    current: Q
  } = C.useRef(T != null), [ee, te] = C.useState(), ie = De(n, R), nt = C.useCallback((q) => {
    G.current = q, q && Y(q);
  }, []), fe = W == null ? void 0 : W.parentNode;
  C.useImperativeHandle(ie, () => ({
    focus: () => {
      G.current.focus();
    },
    node: U.current,
    value: $
  }), [$]), C.useEffect(() => {
    c && b && W && !Q && (te(s ? null : fe.clientWidth), G.current.focus());
  }, [W, s]), C.useEffect(() => {
    l && G.current.focus();
  }, [l]), C.useEffect(() => {
    if (!h)
      return;
    const q = st(G.current).getElementById(h);
    if (q) {
      const ye = () => {
        getSelection().isCollapsed && G.current.focus();
      };
      return q.addEventListener("click", ye), () => {
        q.removeEventListener("click", ye);
      };
    }
  }, [h]);
  const Ee = (q, ye) => {
    q ? M && M(ye) : k && k(ye), Q || (te(s ? null : fe.clientWidth), I(q));
  }, re = (q) => {
    q.button === 0 && (q.preventDefault(), G.current.focus(), Ee(!0, q));
  }, he = (q) => {
    Ee(!1, q);
  }, Ce = C.Children.toArray(a), vn = (q) => {
    const ye = Ce.find((Ue) => Ue.props.value === q.target.value);
    ye !== void 0 && (N(ye.props.value), E && E(q, ye));
  }, St = (q) => (ye) => {
    let Ue;
    if (ye.currentTarget.hasAttribute("tabindex")) {
      if (m) {
        Ue = Array.isArray($) ? $.slice() : [];
        const mr = $.indexOf(q.props.value);
        mr === -1 ? Ue.push(q.props.value) : Ue.splice(mr, 1);
      } else
        Ue = q.props.value;
      if (q.props.onClick && q.props.onClick(ye), $ !== Ue && (N(Ue), E)) {
        const mr = ye.nativeEvent || ye, Yc = new mr.constructor(mr.type, mr);
        Object.defineProperty(Yc, "target", {
          writable: !0,
          value: {
            value: Ue,
            name: y
          }
        }), E(Yc, q);
      }
      m || Ee(!1, ye);
    }
  }, Ct = (q) => {
    j || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(q.key) !== -1 && (q.preventDefault(), Ee(!0, q));
  }, zt = W !== null && b, bt = (q) => {
    !zt && w && (Object.defineProperty(q, "target", {
      writable: !0,
      value: {
        value: $,
        name: y
      }
    }), w(q));
  };
  delete A["aria-invalid"];
  let Re, Jt;
  const rt = [];
  let be = !1;
  (Ll({
    value: $
  }) || g) && (B ? Re = B($) : be = !0);
  const Vt = Ce.map((q) => {
    if (!/* @__PURE__ */ C.isValidElement(q))
      return null;
    let ye;
    if (m) {
      if (!Array.isArray($))
        throw new Error(Ln(2));
      ye = $.some((Ue) => ip(Ue, q.props.value)), ye && be && rt.push(q.props.children);
    } else
      ye = ip($, q.props.value), ye && be && (Jt = q.props.children);
    return /* @__PURE__ */ C.cloneElement(q, {
      "aria-selected": ye ? "true" : "false",
      onClick: St(q),
      onKeyUp: (Ue) => {
        Ue.key === " " && Ue.preventDefault(), q.props.onKeyUp && q.props.onKeyUp(Ue);
      },
      role: "option",
      selected: ye,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": q.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  be && (m ? rt.length === 0 ? Re = null : Re = rt.reduce((q, ye, Ue) => (q.push(ye), Ue < rt.length - 1 && q.push(", "), q), []) : Re = Jt);
  let yn = ee;
  !s && Q && W && (yn = fe.clientWidth);
  let en;
  typeof z < "u" ? en = z : en = f ? null : 0;
  const ge = F.id || (y ? `mui-component-select-${y}` : void 0), J = S({}, t, {
    variant: D,
    value: $,
    open: zt,
    error: x
  }), tn = v2(J), so = S({}, p.PaperProps, (r = p.slotProps) == null ? void 0 : r.paper), ao = zu();
  return /* @__PURE__ */ P.jsxs(C.Fragment, {
    children: [/* @__PURE__ */ P.jsx(p2, S({
      ref: nt,
      tabIndex: en,
      role: "combobox",
      "aria-controls": ao,
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": zt ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [h, ge].filter(Boolean).join(" ") || void 0,
      "aria-describedby": o,
      onKeyDown: Ct,
      onMouseDown: f || j ? null : re,
      onBlur: bt,
      onFocus: _
    }, F, {
      ownerState: J,
      className: Z(F.className, tn.select, u),
      id: ge,
      children: g2(Re) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        op || (op = /* @__PURE__ */ P.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Re
    })), /* @__PURE__ */ P.jsx(h2, S({
      "aria-invalid": x,
      value: Array.isArray($) ? $.join(",") : $,
      name: y,
      ref: U,
      "aria-hidden": !0,
      onChange: vn,
      tabIndex: -1,
      disabled: f,
      className: tn.nativeInput,
      autoFocus: l,
      ownerState: J
    }, A)), /* @__PURE__ */ P.jsx(m2, {
      as: v,
      className: tn.icon,
      ownerState: J
    }), /* @__PURE__ */ P.jsx(Gw, S({
      id: `menu-${y || ""}`,
      anchorEl: fe,
      open: zt,
      onClose: he,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, p, {
      MenuListProps: S({
        "aria-labelledby": h,
        role: "listbox",
        "aria-multiselectable": m ? "true" : void 0,
        disableListWrap: !0,
        id: ao
      }, p.MenuListProps),
      slotProps: S({}, p.slotProps, {
        paper: S({}, so, {
          style: S({
            minWidth: yn
          }, so != null ? so.style : null)
        })
      }),
      children: Vt
    }))]
  });
}), x2 = y2, S2 = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], C2 = ["root"], b2 = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Gc = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => Nt(e) && e !== "variant",
  slot: "Root"
}, k2 = K(ig, Gc)(""), w2 = K(mg, Gc)(""), E2 = K(ng, Gc)(""), hg = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: l = {},
    className: s,
    defaultOpen: a = !1,
    displayEmpty: u = !1,
    IconComponent: c = rb,
    id: d,
    input: f,
    inputProps: g,
    label: x,
    labelId: v,
    MenuProps: R,
    multiple: h = !1,
    native: p = !1,
    onClose: m,
    onOpen: y,
    open: w,
    renderValue: E,
    SelectDisplayProps: k,
    variant: _ = "outlined"
  } = r, M = H(r, S2), T = p ? t2 : x2, j = pr(), B = lo({
    props: r,
    muiFormControl: j,
    states: ["variant", "error"]
  }), F = B.variant || _, z = S({}, r, {
    variant: F,
    classes: l
  }), L = b2(z), D = H(L, C2), A = f || {
    standard: /* @__PURE__ */ P.jsx(k2, {
      ownerState: z
    }),
    outlined: /* @__PURE__ */ P.jsx(w2, {
      label: x,
      ownerState: z
    }),
    filled: /* @__PURE__ */ P.jsx(E2, {
      ownerState: z
    })
  }[F], $ = De(n, A.ref);
  return /* @__PURE__ */ P.jsx(C.Fragment, {
    children: /* @__PURE__ */ C.cloneElement(A, S({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: T,
      inputProps: S({
        children: i,
        error: B.error,
        IconComponent: c,
        variant: F,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: h
      }, p ? {
        id: d
      } : {
        autoWidth: o,
        defaultOpen: a,
        displayEmpty: u,
        labelId: v,
        MenuProps: R,
        onClose: m,
        onOpen: y,
        open: w,
        renderValue: E,
        SelectDisplayProps: S({
          id: d
        }, k)
      }, g, {
        classes: g ? lt(D, g.classes) : D
      }, f ? f.props.inputProps : {})
    }, h && p && F === "outlined" ? {
      notched: !0
    } : {}, {
      ref: $,
      className: Z(A.props.className, s, L.root)
    }, !f && {
      variant: F
    }, M))
  });
});
hg.muiName = "Select";
const R2 = hg;
function P2(e) {
  return se("MuiToolbar", e);
}
oe("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const T2 = ["className", "component", "disableGutters", "variant"], $2 = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: r
  } = e;
  return ae({
    root: ["root", !n && "gutters", r]
  }, P2, t);
}, _2 = K("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => S({
  position: "relative",
  display: "flex",
  alignItems: "center"
}, !t.disableGutters && {
  paddingLeft: e.spacing(2),
  paddingRight: e.spacing(2),
  [e.breakpoints.up("sm")]: {
    paddingLeft: e.spacing(3),
    paddingRight: e.spacing(3)
  }
}, t.variant === "dense" && {
  minHeight: 48
}), ({
  theme: e,
  ownerState: t
}) => t.variant === "regular" && e.mixins.toolbar), I2 = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiToolbar"
  }), {
    className: o,
    component: i = "div",
    disableGutters: l = !1,
    variant: s = "regular"
  } = r, a = H(r, T2), u = S({}, r, {
    component: i,
    disableGutters: l,
    variant: s
  }), c = $2(u);
  return /* @__PURE__ */ P.jsx(_2, S({
    as: i,
    className: Z(c.root, o),
    ref: n,
    ownerState: u
  }, a));
});
function O2(e) {
  return se("MuiTextField", e);
}
oe("MuiTextField", ["root"]);
const M2 = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], N2 = {
  standard: ig,
  filled: ng,
  outlined: mg
}, z2 = (e) => {
  const {
    classes: t
  } = e;
  return ae({
    root: ["root"]
  }, O2, t);
}, L2 = K(ck, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), F2 = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ue({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: i = !1,
    children: l,
    className: s,
    color: a = "primary",
    defaultValue: u,
    disabled: c = !1,
    error: d = !1,
    FormHelperTextProps: f,
    fullWidth: g = !1,
    helperText: x,
    id: v,
    InputLabelProps: R,
    inputProps: h,
    InputProps: p,
    inputRef: m,
    label: y,
    maxRows: w,
    minRows: E,
    multiline: k = !1,
    name: _,
    onBlur: M,
    onChange: T,
    onFocus: j,
    placeholder: B,
    required: F = !1,
    rows: z,
    select: L = !1,
    SelectProps: D,
    type: A,
    value: $,
    variant: N = "outlined"
  } = r, b = H(r, M2), I = S({}, r, {
    autoFocus: i,
    color: a,
    disabled: c,
    error: d,
    fullWidth: g,
    multiline: k,
    required: F,
    select: L,
    variant: N
  }), U = z2(I), G = {};
  N === "outlined" && (R && typeof R.shrink < "u" && (G.notched = R.shrink), G.label = y), L && ((!D || !D.native) && (G.id = void 0), G["aria-describedby"] = void 0);
  const W = zu(v), Y = x && W ? `${W}-helper-text` : void 0, Q = y && W ? `${W}-label` : void 0, ee = N2[N], te = /* @__PURE__ */ P.jsx(ee, S({
    "aria-describedby": Y,
    autoComplete: o,
    autoFocus: i,
    defaultValue: u,
    fullWidth: g,
    multiline: k,
    name: _,
    rows: z,
    maxRows: w,
    minRows: E,
    type: A,
    value: $,
    id: W,
    inputRef: m,
    onBlur: M,
    onChange: T,
    onFocus: j,
    placeholder: B,
    inputProps: h
  }, G, p));
  return /* @__PURE__ */ P.jsxs(L2, S({
    className: Z(U.root, s),
    disabled: c,
    error: d,
    fullWidth: g,
    ref: n,
    required: F,
    color: a,
    variant: N,
    ownerState: I
  }, b, {
    children: [y != null && y !== "" && /* @__PURE__ */ P.jsx(Hk, S({
      htmlFor: W,
      id: Q
    }, R, {
      children: y
    })), L ? /* @__PURE__ */ P.jsx(R2, S({
      "aria-describedby": Y,
      id: W,
      labelId: Q,
      value: $,
      input: te
    }, D, {
      children: l
    })) : te, x && /* @__PURE__ */ P.jsx(vk, S({
      id: Y
    }, f, {
      children: x
    }))]
  }));
}), lp = F2, A2 = () => /* @__PURE__ */ P.jsx(Es, { children: /* @__PURE__ */ P.jsx($o, { sx: { maxWidth: 460, margin: "auto", marginTop: 4 }, children: /* @__PURE__ */ P.jsxs(zb, { variant: "outlined", sx: { paddingX: 2, paddingY: 2 }, children: [
  /* @__PURE__ */ P.jsxs(Gb, { children: [
    /* @__PURE__ */ P.jsx($o, { sx: { paddingY: 2 }, children: /* @__PURE__ */ P.jsx(
      "img",
      {
        src: "images/logo_mdvap_login.png",
        width: "220",
        alt: "MDV Application platform",
        style: {
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "16px"
        }
      }
    ) }),
    /* @__PURE__ */ P.jsxs($o, { sx: { maxWidth: 270, margin: "auto" }, children: [
      /* @__PURE__ */ P.jsx(
        lp,
        {
          label: "ユーザ名",
          variant: "outlined",
          fullWidth: !0,
          margin: "normal",
          size: "small",
          placeholder: "ユーザ名",
          InputProps: {
            startAdornment: /* @__PURE__ */ P.jsx(Yf, { position: "start", children: /* @__PURE__ */ P.jsx(Xh, {}) })
          }
        }
      ),
      /* @__PURE__ */ P.jsx(
        lp,
        {
          label: "パスワード",
          type: "password",
          variant: "outlined",
          fullWidth: !0,
          margin: "normal",
          size: "small",
          placeholder: "パスワード",
          InputProps: {
            startAdornment: /* @__PURE__ */ P.jsx(Yf, { position: "start", children: /* @__PURE__ */ P.jsx(Qh, {}) })
          }
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ P.jsx(Db, { sx: { justifyContent: "center" }, children: /* @__PURE__ */ P.jsx($b, { color: "primary", disabled: !1, variant: "contained", sx: { width: 270 }, children: "ログイン" }) }),
  /* @__PURE__ */ P.jsx($o, { sx: { textAlign: "center", padding: 2 }, children: /* @__PURE__ */ P.jsx(tw, { href: "#", color: "primary", children: "パスワードを忘れた場合" }) })
] }) }) });
Rs("mdvap-login", A2);
var Qc = {}, j2 = Ac;
Object.defineProperty(Qc, "__esModule", {
  value: !0
});
var gg = Qc.default = void 0, B2 = j2(jc()), D2 = Al();
gg = Qc.default = (0, B2.default)(/* @__PURE__ */ (0, D2.jsx)("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu");
class vg extends Es {
  render() {
    const { isOpen: t, onToggleSidebar: n } = this.props;
    return /* @__PURE__ */ P.jsx(SC, { position: "static", sx: { bgcolor: "gray.800" }, children: /* @__PURE__ */ P.jsxs(I2, { children: [
      /* @__PURE__ */ P.jsx(
        uC,
        {
          edge: "start",
          color: "inherit",
          "aria-label": "menu",
          onClick: n,
          sx: { mr: 2 },
          children: /* @__PURE__ */ P.jsx(gg, {})
        }
      ),
      /* @__PURE__ */ P.jsx(Vc, { variant: "h6", color: "inherit", component: "div", children: t ? "Open" : "Close" })
    ] }) });
  }
}
Rs("mdvap-header", vg);
class yg extends Es {
  render() {
    const { isOpen: t } = this.props;
    return /* @__PURE__ */ P.jsx(
      $o,
      {
        sx: {
          bgcolor: "gray.700",
          color: "black",
          width: t ? 256 : 10,
          minHeight: "100vh",
          p: 2,
          transition: "all 0.2s"
        },
        children: /* @__PURE__ */ P.jsxs(sg, { children: [
          /* @__PURE__ */ P.jsx(Zf, { disablePadding: !0, children: /* @__PURE__ */ P.jsx(qf, { children: "リンク1" }) }),
          /* @__PURE__ */ P.jsx(Zf, { disablePadding: !0, children: /* @__PURE__ */ P.jsx(qf, { children: "リンク2" }) })
        ] })
      }
    );
  }
}
Rs("mdvap-sidebar", yg);
var Ns = { exports: {} };
function U2(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return '"[Circular]"';
  }
}
var W2 = V2;
function V2(e, t, n) {
  var r = n && n.stringify || U2, o = 1;
  if (typeof e == "object" && e !== null) {
    var i = t.length + o;
    if (i === 1)
      return e;
    var l = new Array(i);
    l[0] = r(e);
    for (var s = 1; s < i; s++)
      l[s] = r(t[s]);
    return l.join(" ");
  }
  if (typeof e != "string")
    return e;
  var a = t.length;
  if (a === 0)
    return e;
  for (var u = "", c = 1 - o, d = -1, f = e && e.length || 0, g = 0; g < f; ) {
    if (e.charCodeAt(g) === 37 && g + 1 < f) {
      switch (d = d > -1 ? d : 0, e.charCodeAt(g + 1)) {
        case 100:
        case 102:
          if (c >= a || t[c] == null)
            break;
          d < g && (u += e.slice(d, g)), u += Number(t[c]), d = g + 2, g++;
          break;
        case 105:
          if (c >= a || t[c] == null)
            break;
          d < g && (u += e.slice(d, g)), u += Math.floor(Number(t[c])), d = g + 2, g++;
          break;
        case 79:
        case 111:
        case 106:
          if (c >= a || t[c] === void 0)
            break;
          d < g && (u += e.slice(d, g));
          var x = typeof t[c];
          if (x === "string") {
            u += "'" + t[c] + "'", d = g + 2, g++;
            break;
          }
          if (x === "function") {
            u += t[c].name || "<anonymous>", d = g + 2, g++;
            break;
          }
          u += r(t[c]), d = g + 2, g++;
          break;
        case 115:
          if (c >= a)
            break;
          d < g && (u += e.slice(d, g)), u += String(t[c]), d = g + 2, g++;
          break;
        case 37:
          d < g && (u += e.slice(d, g)), u += "%", d = g + 2, g++, c--;
          break;
      }
      ++c;
    }
    ++g;
  }
  return d === -1 ? e : (d < f && (u += e.slice(d)), u);
}
const sp = W2;
Ns.exports = mn;
const di = iE().console || {}, H2 = {
  mapHttpRequest: Vi,
  mapHttpResponse: Vi,
  wrapRequestSerializer: xa,
  wrapResponseSerializer: xa,
  wrapErrorSerializer: xa,
  req: Vi,
  res: Vi,
  err: up,
  errWithCause: up
};
function Fl(e, t) {
  return e === "silent" ? 1 / 0 : t.levels.values[e];
}
const Xc = Symbol("pino.logFuncs"), wu = Symbol("pino.hierarchy"), K2 = {
  error: "log",
  fatal: "error",
  warn: "error",
  info: "log",
  debug: "log",
  trace: "log"
};
function ap(e, t) {
  const n = {
    logger: t,
    parent: e[wu]
  };
  t[wu] = n;
}
function G2(e, t, n) {
  const r = {};
  t.forEach((o) => {
    r[o] = n[o] ? n[o] : di[o] || di[K2[o] || "log"] || fi;
  }), e[Xc] = r;
}
function Q2(e, t) {
  return Array.isArray(e) ? e.filter(function(r) {
    return r !== "!stdSerializers.err";
  }) : e === !0 ? Object.keys(t) : !1;
}
function mn(e) {
  e = e || {}, e.browser = e.browser || {};
  const t = e.browser.transmit;
  if (t && typeof t.send != "function")
    throw Error("pino: transmit option must have a send function");
  const n = e.browser.write || di;
  e.browser.write && (e.browser.asObject = !0);
  const r = e.serializers || {}, o = Q2(e.browser.serialize, r);
  let i = e.browser.serialize;
  Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (i = !1);
  const l = Object.keys(e.customLevels || {}), s = ["error", "fatal", "warn", "info", "debug", "trace"].concat(l);
  typeof n == "function" && s.forEach(function(v) {
    n[v] = n;
  }), (e.enabled === !1 || e.browser.disabled) && (e.level = "silent");
  const a = e.level || "info", u = Object.create(n);
  u.log || (u.log = fi), G2(u, s, n), ap({}, u), Object.defineProperty(u, "levelVal", {
    get: d
  }), Object.defineProperty(u, "level", {
    get: f,
    set: g
  });
  const c = {
    transmit: t,
    serialize: o,
    asObject: e.browser.asObject,
    levels: s,
    timestamp: nE(e)
  };
  u.levels = X2(e), u.level = a, u.setMaxListeners = u.getMaxListeners = u.emit = u.addListener = u.on = u.prependListener = u.once = u.prependOnceListener = u.removeListener = u.removeAllListeners = u.listeners = u.listenerCount = u.eventNames = u.write = u.flush = fi, u.serializers = r, u._serialize = o, u._stdErrSerialize = i, u.child = x, t && (u._logEvent = Eu());
  function d() {
    return Fl(this.level, this);
  }
  function f() {
    return this._level;
  }
  function g(v) {
    if (v !== "silent" && !this.levels.values[v])
      throw Error("unknown level " + v);
    this._level = v, Hn(this, c, u, "error"), Hn(this, c, u, "fatal"), Hn(this, c, u, "warn"), Hn(this, c, u, "info"), Hn(this, c, u, "debug"), Hn(this, c, u, "trace"), l.forEach((R) => {
      Hn(this, c, u, R);
    });
  }
  function x(v, R) {
    if (!v)
      throw new Error("missing bindings for child Pino");
    R = R || {}, o && v.serializers && (R.serializers = v.serializers);
    const h = R.serializers;
    if (o && h) {
      var p = Object.assign({}, r, h), m = e.browser.serialize === !0 ? Object.keys(p) : o;
      delete v.serializers, zs([v], m, p, this._stdErrSerialize);
    }
    function y(E) {
      this._childLevel = (E._childLevel | 0) + 1, this.bindings = v, p && (this.serializers = p, this._serialize = m), t && (this._logEvent = Eu(
        [].concat(E._logEvent.bindings, v)
      ));
    }
    y.prototype = this;
    const w = new y(this);
    return ap(this, w), w.level = this.level, w;
  }
  return u;
}
function X2(e) {
  const t = e.customLevels || {}, n = Object.assign({}, mn.levels.values, t), r = Object.assign({}, mn.levels.labels, Y2(t));
  return {
    values: n,
    labels: r
  };
}
function Y2(e) {
  const t = {};
  return Object.keys(e).forEach(function(n) {
    t[e[n]] = n;
  }), t;
}
mn.levels = {
  values: {
    fatal: 60,
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
    trace: 10
  },
  labels: {
    10: "trace",
    20: "debug",
    30: "info",
    40: "warn",
    50: "error",
    60: "fatal"
  }
};
mn.stdSerializers = H2;
mn.stdTimeFunctions = Object.assign({}, { nullTime: xg, epochTime: Sg, unixTime: rE, isoTime: oE });
function q2(e) {
  const t = [];
  e.bindings && t.push(e.bindings);
  let n = e[wu];
  for (; n.parent; )
    n = n.parent, n.logger.bindings && t.push(n.logger.bindings);
  return t.reverse();
}
function Hn(e, t, n, r) {
  if (e[r] = Fl(e.level, n) > Fl(r, n) ? fi : n[Xc][r], !t.transmit && e[r] === fi)
    return;
  e[r] = J2(e, t, n, r);
  const o = q2(e);
  o.length !== 0 && (e[r] = Z2(o, e[r]));
}
function Z2(e, t) {
  return function() {
    return t.apply(this, [...e, ...arguments]);
  };
}
function J2(e, t, n, r) {
  return /* @__PURE__ */ function(o) {
    return function() {
      const l = t.timestamp(), s = new Array(arguments.length), a = Object.getPrototypeOf && Object.getPrototypeOf(this) === di ? di : this;
      for (var u = 0; u < s.length; u++)
        s[u] = arguments[u];
      if (t.serialize && !t.asObject && zs(s, this._serialize, this.serializers, this._stdErrSerialize), t.asObject ? o.call(a, eE(this, r, s, l)) : o.apply(a, s), t.transmit) {
        const c = t.transmit.level || e._level, d = n.levels.values[c], f = n.levels.values[r];
        if (f < d)
          return;
        tE(this, {
          ts: l,
          methodLevel: r,
          methodValue: f,
          transmitLevel: c,
          transmitValue: n.levels.values[t.transmit.level || e._level],
          send: t.transmit.send,
          val: Fl(e._level, n)
        }, s);
      }
    };
  }(e[Xc][r]);
}
function eE(e, t, n, r) {
  e._serialize && zs(n, e._serialize, e.serializers, e._stdErrSerialize);
  const o = n.slice();
  let i = o[0];
  const l = {};
  r && (l.time = r), l.level = e.levels.values[t];
  let s = (e._childLevel | 0) + 1;
  if (s < 1 && (s = 1), i !== null && typeof i == "object") {
    for (; s-- && typeof o[0] == "object"; )
      Object.assign(l, o.shift());
    i = o.length ? sp(o.shift(), o) : void 0;
  } else
    typeof i == "string" && (i = sp(o.shift(), o));
  return i !== void 0 && (l.msg = i), l;
}
function zs(e, t, n, r) {
  for (const o in e)
    if (r && e[o] instanceof Error)
      e[o] = mn.stdSerializers.err(e[o]);
    else if (typeof e[o] == "object" && !Array.isArray(e[o]))
      for (const i in e[o])
        t && t.indexOf(i) > -1 && i in n && (e[o][i] = n[i](e[o][i]));
}
function tE(e, t, n) {
  const r = t.send, o = t.ts, i = t.methodLevel, l = t.methodValue, s = t.val, a = e._logEvent.bindings;
  zs(
    n,
    e._serialize || Object.keys(e.serializers),
    e.serializers,
    e._stdErrSerialize === void 0 ? !0 : e._stdErrSerialize
  ), e._logEvent.ts = o, e._logEvent.messages = n.filter(function(u) {
    return a.indexOf(u) === -1;
  }), e._logEvent.level.label = i, e._logEvent.level.value = l, r(i, e._logEvent, s), e._logEvent = Eu(a);
}
function Eu(e) {
  return {
    ts: 0,
    messages: [],
    bindings: e || [],
    level: { label: "", value: 0 }
  };
}
function up(e) {
  const t = {
    type: e.constructor.name,
    msg: e.message,
    stack: e.stack
  };
  for (const n in e)
    t[n] === void 0 && (t[n] = e[n]);
  return t;
}
function nE(e) {
  return typeof e.timestamp == "function" ? e.timestamp : e.timestamp === !1 ? xg : Sg;
}
function Vi() {
  return {};
}
function xa(e) {
  return e;
}
function fi() {
}
function xg() {
  return !1;
}
function Sg() {
  return Date.now();
}
function rE() {
  return Math.round(Date.now() / 1e3);
}
function oE() {
  return new Date(Date.now()).toISOString();
}
function iE() {
  function e(t) {
    return typeof t < "u" && t;
  }
  try {
    return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
      get: function() {
        return delete Object.prototype.globalThis, this.globalThis = this;
      },
      configurable: !0
    }), globalThis;
  } catch {
    return e(self) || e(window) || e(this) || {};
  }
}
Ns.exports.default = mn;
Ns.exports.pino = mn;
var lE = Ns.exports;
const sE = /* @__PURE__ */ Ru(lE), aE = {
  browser: {
    asObject: !0
  },
  transport: {
    target: "pino-pretty"
  }
}, uE = sE(aE);
class cE extends Es {
  constructor() {
    super(...arguments), this.state = { isOpen: !1 }, this.toggleSidebar = () => {
      this.setState((t) => {
        const n = !t.isOpen;
        return this.saveToLocalStorage(String(n)), { isOpen: n };
      });
    };
  }
  componentDidMount() {
    this.loadFromLocalStorage();
  }
  loadFromLocalStorage() {
    const t = localStorage.getItem("sidebarOpen");
    t && this.setState({ isOpen: t === "true" });
  }
  saveToLocalStorage(t) {
    localStorage.setItem("sidebarOpen", t);
  }
  render() {
    const { isOpen: t } = this.state;
    return uE.info("render Navigations"), /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
      /* @__PURE__ */ P.jsx(vg, { isOpen: t, onToggleSidebar: this.toggleSidebar }),
      /* @__PURE__ */ P.jsxs("div", { style: { display: "flex" }, children: [
        /* @__PURE__ */ P.jsx(yg, { isOpen: t }),
        /* @__PURE__ */ P.jsx("div", { className: "py-3 px-6", children: this.props.children })
      ] })
    ] });
  }
}
Rs("mdvap-navigations", cE);
