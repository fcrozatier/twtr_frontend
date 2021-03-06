var e = Object.defineProperty,
  __DEV__ = false,
  t = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  a = (t, r, n) =>
    r in t
      ? e(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[r] = n),
  s = (e, t) => {
    for (var r in t || (t = {})) i.call(t, r) && a(e, r, t[r]);
    if (n) for (var r of n(t)) o.call(t, r) && a(e, r, t[r]);
    return e;
  };
function c() {}
function u(e, t) {
  for (const r in t) e[r] = t[r];
  return e;
}
function l(e) {
  return e();
}
function f() {
  return Object.create(null);
}
function p(e) {
  e.forEach(l);
}
function h(e) {
  return "function" == typeof e;
}
function d(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && "object" == typeof e) || "function" == typeof e;
}
let y, v;
function m(e, t) {
  return y || (y = document.createElement("a")), (y.href = t), e === y.href;
}
function b(e, ...t) {
  if (null == e) return c;
  const r = e.subscribe(...t);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function g(e, t, r) {
  e.$$.on_destroy.push(b(t, r));
}
function _(e, t, r, n) {
  if (e) {
    const i = E(e, t, r, n);
    return e[0](i);
  }
}
function E(e, t, r, n) {
  return e[1] && n ? u(r.ctx.slice(), e[1](n(t))) : r.ctx;
}
function w(e, t, r, n) {
  if (e[2] && n) {
    const i = e[2](n(r));
    if (void 0 === t.dirty) return i;
    if ("object" == typeof i) {
      const e = [],
        r = Math.max(t.dirty.length, i.length);
      for (let n = 0; n < r; n += 1) e[n] = t.dirty[n] | i[n];
      return e;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function O(e, t, r, n, i, o) {
  if (i) {
    const a = E(t, r, n, o);
    e.p(a, i);
  }
}
function k(e) {
  if (e.ctx.length > 32) {
    const t = [],
      r = e.ctx.length / 32;
    for (let e = 0; e < r; e++) t[e] = -1;
    return t;
  }
  return -1;
}
function S(e) {
  const t = {};
  for (const r in e) "$" !== r[0] && (t[r] = e[r]);
  return t;
}
function T(e, t) {
  const r = {};
  t = new Set(t);
  for (const n in e) t.has(n) || "$" === n[0] || (r[n] = e[n]);
  return r;
}
function D(e) {
  return null == e ? "" : e;
}
function x(e, t, r) {
  return e.set(r), t;
}
function N(e, t) {
  e.appendChild(t);
}
function I(e, t, r) {
  e.insertBefore(t, r || null);
}
function A(e) {
  e.parentNode.removeChild(e);
}
function R(e, t) {
  for (let r = 0; r < e.length; r += 1) e[r] && e[r].d(t);
}
function C(e) {
  return document.createElement(e);
}
function F(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function P(e) {
  return document.createTextNode(e);
}
function j() {
  return P(" ");
}
function M() {
  return P("");
}
function V(e, t, r, n) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
}
function L(e) {
  return function (t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function q(e, t, r) {
  null == r
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== r && e.setAttribute(t, r);
}
function Q(e, t) {
  const r = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const n in t)
    null == t[n]
      ? e.removeAttribute(n)
      : "style" === n
      ? (e.style.cssText = t[n])
      : "__value" === n
      ? (e.value = e[n] = t[n])
      : r[n] && r[n].set
      ? (e[n] = t[n])
      : q(e, n, t[n]);
}
function B(e, t) {
  (t = "" + t), e.wholeText !== t && (e.data = t);
}
function U(e, t) {
  e.value = null == t ? "" : t;
}
function $(e, t, r, n) {
  e.style.setProperty(t, r, n ? "important" : "");
}
function z(e, t, r) {
  e.classList[r ? "add" : "remove"](t);
}
function K(e) {
  v = e;
}
function W() {
  if (!v) throw new Error("Function called outside component initialization");
  return v;
}
function G() {
  const e = W();
  return (t, r) => {
    const n = e.$$.callbacks[t];
    if (n) {
      const i = (function (e, t, r = !1) {
        const n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, r, !1, t), n;
      })(t, r);
      n.slice().forEach((t) => {
        t.call(e, i);
      });
    }
  };
}
function Y(e, t) {
  W().$$.context.set(e, t);
}
function J(e) {
  return W().$$.context.get(e);
}
const H = [],
  X = [],
  Z = [],
  ee = [],
  te = Promise.resolve();
let re = !1;
function ne(e) {
  Z.push(e);
}
function ie(e) {
  ee.push(e);
}
let oe = !1;
const ae = new Set();
function se() {
  if (!oe) {
    oe = !0;
    do {
      for (let e = 0; e < H.length; e += 1) {
        const t = H[e];
        K(t), ce(t.$$);
      }
      for (K(null), H.length = 0; X.length; ) X.pop()();
      for (let e = 0; e < Z.length; e += 1) {
        const t = Z[e];
        ae.has(t) || (ae.add(t), t());
      }
      Z.length = 0;
    } while (H.length);
    for (; ee.length; ) ee.pop()();
    (re = !1), (oe = !1), ae.clear();
  }
}
function ce(e) {
  if (null !== e.fragment) {
    e.update(), p(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(ne);
  }
}
const ue = new Set();
let le;
function fe() {
  le = { r: 0, c: [], p: le };
}
function pe() {
  le.r || p(le.c), (le = le.p);
}
function he(e, t) {
  e && e.i && (ue.delete(e), e.i(t));
}
function de(e, t, r, n) {
  if (e && e.o) {
    if (ue.has(e)) return;
    ue.add(e),
      le.c.push(() => {
        ue.delete(e), n && (r && e.d(1), n());
      }),
      e.o(t);
  }
}
function ye(e, t) {
  const r = {},
    n = {},
    i = { $$scope: 1 };
  let o = e.length;
  for (; o--; ) {
    const a = e[o],
      s = t[o];
    if (s) {
      for (const e in a) e in s || (n[e] = 1);
      for (const e in s) i[e] || ((r[e] = s[e]), (i[e] = 1));
      e[o] = s;
    } else for (const e in a) i[e] = 1;
  }
  for (const a in n) a in r || (r[a] = void 0);
  return r;
}
function ve(e) {
  return "object" == typeof e && null !== e ? e : {};
}
function me(e, t, r) {
  const n = e.$$.props[t];
  void 0 !== n && ((e.$$.bound[n] = r), r(e.$$.ctx[n]));
}
function be(e) {
  e && e.c();
}
function ge(e, t, r, n) {
  const { fragment: i, on_mount: o, on_destroy: a, after_update: s } = e.$$;
  i && i.m(t, r),
    n ||
      ne(() => {
        const t = o.map(l).filter(h);
        a ? a.push(...t) : p(t), (e.$$.on_mount = []);
      }),
    s.forEach(ne);
}
function _e(e, t) {
  const r = e.$$;
  null !== r.fragment &&
    (p(r.on_destroy),
    r.fragment && r.fragment.d(t),
    (r.on_destroy = r.fragment = null),
    (r.ctx = []));
}
function Ee(e, t) {
  -1 === e.$$.dirty[0] &&
    (H.push(e), re || ((re = !0), te.then(se)), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function we(e, t, r, n, i, o, a, s = [-1]) {
  const u = v;
  K(e);
  const l = (e.$$ = {
    fragment: null,
    ctx: null,
    props: o,
    update: c,
    not_equal: i,
    bound: f(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(u ? u.$$.context : t.context || []),
    callbacks: f(),
    dirty: s,
    skip_bound: !1,
    root: t.target || u.$$.root,
  });
  a && a(l.root);
  let h = !1;
  if (
    ((l.ctx = r
      ? r(e, t.props || {}, (t, r, ...n) => {
          const o = n.length ? n[0] : r;
          return (
            l.ctx &&
              i(l.ctx[t], (l.ctx[t] = o)) &&
              (!l.skip_bound && l.bound[t] && l.bound[t](o), h && Ee(e, t)),
            r
          );
        })
      : []),
    l.update(),
    (h = !0),
    p(l.before_update),
    (l.fragment = !!n && n(l.ctx)),
    t.target)
  ) {
    if (t.hydrate) {
      const e = ((d = t.target), Array.from(d.childNodes));
      l.fragment && l.fragment.l(e), e.forEach(A);
    } else l.fragment && l.fragment.c();
    t.intro && he(e.$$.fragment),
      ge(e, t.target, t.anchor, t.customElement),
      se();
  }
  var d;
  K(u);
}
class Oe {
  $destroy() {
    _e(this, 1), (this.$destroy = c);
  }
  $on(e, t) {
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      r.push(t),
      () => {
        const e = r.indexOf(t);
        -1 !== e && r.splice(e, 1);
      }
    );
  }
  $set(e) {
    var t;
    this.$$set &&
      ((t = e), 0 !== Object.keys(t).length) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var ke =
  function (e, t) {
    return (ke =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      })(e, t);
  };
function Se(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError(
      "Class extends value " + String(t) + " is not a constructor or null"
    );
  function r() {
    this.constructor = e;
  }
  ke(e, t),
    (e.prototype =
      null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
}
var Te = function () {
  return (Te =
    Object.assign ||
    function (e) {
      for (var t, r = 1, n = arguments.length; r < n; r++)
        for (var i in (t = arguments[r]))
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      return e;
    }).apply(this, arguments);
};
function De(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var i = 0;
    for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
        (r[n[i]] = e[n[i]]);
  }
  return r;
}
function xe(e, t, r, n) {
  return new (r || (r = Promise))(function (i, o) {
    function a(e) {
      try {
        c(n.next(e));
      } catch (t) {
        o(t);
      }
    }
    function s(e) {
      try {
        c(n.throw(e));
      } catch (t) {
        o(t);
      }
    }
    function c(e) {
      var t;
      e.done
        ? i(e.value)
        : ((t = e.value),
          t instanceof r
            ? t
            : new r(function (e) {
                e(t);
              })).then(a, s);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function Ne(e, t) {
  var r,
    n,
    i,
    o,
    a = {
      label: 0,
      sent: function () {
        if (1 & i[0]) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (o = { next: s(0), throw: s(1), return: s(2) }),
    "function" == typeof Symbol &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function s(o) {
    return function (s) {
      return (function (o) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; a; )
          try {
            if (
              ((r = 1),
              n &&
                (i =
                  2 & o[0]
                    ? n.return
                    : o[0]
                    ? n.throw || ((i = n.return) && i.call(n), 0)
                    : n.next) &&
                !(i = i.call(n, o[1])).done)
            )
              return i;
            switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
              case 0:
              case 1:
                i = o;
                break;
              case 4:
                return a.label++, { value: o[1], done: !1 };
              case 5:
                a.label++, (n = o[1]), (o = [0]);
                continue;
              case 7:
                (o = a.ops.pop()), a.trys.pop();
                continue;
              default:
                if (
                  !((i = a.trys),
                  (i = i.length > 0 && i[i.length - 1]) ||
                    (6 !== o[0] && 2 !== o[0]))
                ) {
                  a = 0;
                  continue;
                }
                if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                  a.label = o[1];
                  break;
                }
                if (6 === o[0] && a.label < i[1]) {
                  (a.label = i[1]), (i = o);
                  break;
                }
                if (i && a.label < i[2]) {
                  (a.label = i[2]), a.ops.push(o);
                  break;
                }
                i[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            o = t.call(e, a);
          } catch (s) {
            (o = [6, s]), (n = 0);
          } finally {
            r = i = 0;
          }
        if (5 & o[0]) throw o[1];
        return { value: o[0] ? o[1] : void 0, done: !0 };
      })([o, s]);
    };
  }
}
function Ie(e, t, r) {
  if (r || 2 === arguments.length)
    for (var n, i = 0, o = t.length; i < o; i++)
      (!n && i in t) ||
        (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
  return e.concat(n || Array.prototype.slice.call(t));
}
var Ae = Object.setPrototypeOf,
  Re =
    void 0 === Ae
      ? function (e, t) {
          return (e.__proto__ = t), e;
        }
      : Ae,
  Ce = (function (e) {
    function t(r) {
      void 0 === r && (r = "Invariant Violation");
      var n =
        e.call(
          this,
          "number" == typeof r
            ? "Invariant Violation: " +
                r +
                " (see https://github.com/apollographql/invariant-packages)"
            : r
        ) || this;
      return (
        (n.framesToPop = 1),
        (n.name = "Invariant Violation"),
        Re(n, t.prototype),
        n
      );
    }
    return Se(t, e), t;
  })(Error);
function Fe(e, t) {
  if (!e) throw new Ce(t);
}
var Pe,
  je = ["debug", "log", "warn", "error", "silent"],
  Me = je.indexOf("log");
function Ve(e) {
  return function () {
    if (je.indexOf(e) >= Me) {
      var t = console[e] || console.log;
      return t.apply(console, arguments);
    }
  };
}
function Le(e) {
  try {
    return e();
  } catch (t) {}
}
function qe(e) {
  try {
    return e();
  } catch (t) {}
}
((Pe = Fe || (Fe = {})).debug = Ve("debug")),
  (Pe.log = Ve("log")),
  (Pe.warn = Ve("warn")),
  (Pe.error = Ve("error"));
const Qe =
  qe(function () {
    return globalThis;
  }) ||
  qe(function () {
    return window;
  }) ||
  qe(function () {
    return self;
  }) ||
  qe(function () {
    return global;
  }) ||
  qe(function () {
    return Function("return this")();
  });
let Be = !1;
function Ue(e) {
  return (Ue =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
!Qe ||
  qe(function () {
    return "production";
  }) ||
  qe(function () {
    return process;
  }) ||
  (Object.defineProperty(Qe, "process", {
    value: { env: { NODE_ENV: "production" } },
    configurable: !0,
    enumerable: !1,
    writable: !0,
  }),
  (Be = !0));
var $e =
  "function" == typeof Symbol && null != Symbol.toStringTag
    ? Symbol.toStringTag
    : "@@toStringTag";
function ze(e, t) {
  for (
    var r, n = /\r\n|[\n\r]/g, i = 1, o = t + 1;
    (r = n.exec(e.body)) && r.index < t;

  )
    (i += 1), (o = t + 1 - (r.index + r[0].length));
  return { line: i, column: o };
}
function Ke(e) {
  return We(e.source, ze(e.source, e.start));
}
function We(e, t) {
  var r = e.locationOffset.column - 1,
    n = Ye(r) + e.body,
    i = t.line - 1,
    o = e.locationOffset.line - 1,
    a = t.line + o,
    s = 1 === t.line ? r : 0,
    c = t.column + s,
    u = "".concat(e.name, ":").concat(a, ":").concat(c, "\n"),
    l = n.split(/\r\n|[\n\r]/g),
    f = l[i];
  if (f.length > 120) {
    for (
      var p = Math.floor(c / 80), h = c % 80, d = [], y = 0;
      y < f.length;
      y += 80
    )
      d.push(f.slice(y, y + 80));
    return (
      u +
      Ge(
        [["".concat(a), d[0]]].concat(
          d.slice(1, p + 1).map(function (e) {
            return ["", e];
          }),
          [
            [" ", Ye(h - 1) + "^"],
            ["", d[p + 1]],
          ]
        )
      )
    );
  }
  return (
    u +
    Ge([
      ["".concat(a - 1), l[i - 1]],
      ["".concat(a), f],
      ["", Ye(c - 1) + "^"],
      ["".concat(a + 1), l[i + 1]],
    ])
  );
}
function Ge(e) {
  var t = e.filter(function (e) {
      return e[0], void 0 !== e[1];
    }),
    r = Math.max.apply(
      Math,
      t.map(function (e) {
        return e[0].length;
      })
    );
  return t
    .map(function (e) {
      var t,
        n = e[0],
        i = e[1];
      return Ye(r - (t = n).length) + t + (i ? " | " + i : " |");
    })
    .join("\n");
}
function Ye(e) {
  return Array(e + 1).join(" ");
}
function Je(e) {
  return (Je =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
function He(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function Xe(e, t) {
  return !t || ("object" !== Je(t) && "function" != typeof t) ? Ze(e) : t;
}
function Ze(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function et(e) {
  var t = "function" == typeof Map ? new Map() : void 0;
  return (et = function (e) {
    if (
      null === e ||
      ((r = e), -1 === Function.toString.call(r).indexOf("[native code]"))
    )
      return e;
    var r;
    if ("function" != typeof e)
      throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== t) {
      if (t.has(e)) return t.get(e);
      t.set(e, n);
    }
    function n() {
      return tt(e, arguments, it(this).constructor);
    }
    return (
      (n.prototype = Object.create(e.prototype, {
        constructor: {
          value: n,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
      nt(n, e)
    );
  })(e);
}
function tt(e, t, r) {
  return (tt = rt()
    ? Reflect.construct
    : function (e, t, r) {
        var n = [null];
        n.push.apply(n, t);
        var i = new (Function.bind.apply(e, n))();
        return r && nt(i, r.prototype), i;
      }).apply(null, arguments);
}
function rt() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;
  try {
    return (
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {})),
      !0
    );
  } catch (e) {
    return !1;
  }
}
function nt(e, t) {
  return (nt =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function it(e) {
  return (it = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
var ot = (function (e) {
  !(function (e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      t && nt(e, t);
  })(s, et(Error));
  var t,
    r,
    n,
    i,
    o,
    a =
      ((t = s),
      (r = rt()),
      function () {
        var e,
          n = it(t);
        if (r) {
          var i = it(this).constructor;
          e = Reflect.construct(n, arguments, i);
        } else e = n.apply(this, arguments);
        return Xe(this, e);
      });
  function s(e, t, r, n, i, o, c) {
    var u, l, f, p, h;
    !(function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    })(this, s),
      (h = a.call(this, e));
    var d,
      y = Array.isArray(t) ? (0 !== t.length ? t : void 0) : t ? [t] : void 0,
      v = r;
    !v &&
      y &&
      (v = null === (d = y[0].loc) || void 0 === d ? void 0 : d.source);
    var m,
      b = n;
    !b &&
      y &&
      (b = y.reduce(function (e, t) {
        return t.loc && e.push(t.loc.start), e;
      }, [])),
      b && 0 === b.length && (b = void 0),
      n && r
        ? (m = n.map(function (e) {
            return ze(r, e);
          }))
        : y &&
          (m = y.reduce(function (e, t) {
            return t.loc && e.push(ze(t.loc.source, t.loc.start)), e;
          }, []));
    var g,
      _ = c;
    if (null == _ && null != o) {
      var E = o.extensions;
      "object" == Ue((g = E)) && null !== g && (_ = E);
    }
    return (
      Object.defineProperties(Ze(h), {
        name: { value: "GraphQLError" },
        message: { value: e, enumerable: !0, writable: !0 },
        locations: {
          value: null !== (u = m) && void 0 !== u ? u : void 0,
          enumerable: null != m,
        },
        path: { value: null != i ? i : void 0, enumerable: null != i },
        nodes: { value: null != y ? y : void 0 },
        source: { value: null !== (l = v) && void 0 !== l ? l : void 0 },
        positions: { value: null !== (f = b) && void 0 !== f ? f : void 0 },
        originalError: { value: o },
        extensions: {
          value: null !== (p = _) && void 0 !== p ? p : void 0,
          enumerable: null != _,
        },
      }),
      null != o && o.stack
        ? (Object.defineProperty(Ze(h), "stack", {
            value: o.stack,
            writable: !0,
            configurable: !0,
          }),
          Xe(h))
        : (Error.captureStackTrace
            ? Error.captureStackTrace(Ze(h), s)
            : Object.defineProperty(Ze(h), "stack", {
                value: Error().stack,
                writable: !0,
                configurable: !0,
              }),
          h)
    );
  }
  return (
    (n = s),
    (i = [
      {
        key: "toString",
        value: function () {
          return (function (e) {
            var t = e.message;
            if (e.nodes)
              for (var r = 0, n = e.nodes; r < n.length; r++) {
                var i = n[r];
                i.loc && (t += "\n\n" + Ke(i.loc));
              }
            else if (e.source && e.locations)
              for (var o = 0, a = e.locations; o < a.length; o++) {
                var s = a[o];
                t += "\n\n" + We(e.source, s);
              }
            return t;
          })(this);
        },
      },
      {
        key: $e,
        get: function () {
          return "Object";
        },
      },
    ]) && He(n.prototype, i),
    o && He(n, o),
    s
  );
})();
function at(e, t, r) {
  return new ot("Syntax Error: ".concat(r), void 0, e, [t]);
}
var st = Object.freeze({
  NAME: "Name",
  DOCUMENT: "Document",
  OPERATION_DEFINITION: "OperationDefinition",
  VARIABLE_DEFINITION: "VariableDefinition",
  SELECTION_SET: "SelectionSet",
  FIELD: "Field",
  ARGUMENT: "Argument",
  FRAGMENT_SPREAD: "FragmentSpread",
  INLINE_FRAGMENT: "InlineFragment",
  FRAGMENT_DEFINITION: "FragmentDefinition",
  VARIABLE: "Variable",
  INT: "IntValue",
  FLOAT: "FloatValue",
  STRING: "StringValue",
  BOOLEAN: "BooleanValue",
  NULL: "NullValue",
  ENUM: "EnumValue",
  LIST: "ListValue",
  OBJECT: "ObjectValue",
  OBJECT_FIELD: "ObjectField",
  DIRECTIVE: "Directive",
  NAMED_TYPE: "NamedType",
  LIST_TYPE: "ListType",
  NON_NULL_TYPE: "NonNullType",
  SCHEMA_DEFINITION: "SchemaDefinition",
  OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
  SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
  OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
  FIELD_DEFINITION: "FieldDefinition",
  INPUT_VALUE_DEFINITION: "InputValueDefinition",
  INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
  UNION_TYPE_DEFINITION: "UnionTypeDefinition",
  ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
  ENUM_VALUE_DEFINITION: "EnumValueDefinition",
  INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
  DIRECTIVE_DEFINITION: "DirectiveDefinition",
  SCHEMA_EXTENSION: "SchemaExtension",
  SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
  OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
  INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
  UNION_TYPE_EXTENSION: "UnionTypeExtension",
  ENUM_TYPE_EXTENSION: "EnumTypeExtension",
  INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension",
});
var ct =
  "function" == typeof Symbol && "function" == typeof Symbol.for
    ? Symbol.for("nodejs.util.inspect.custom")
    : void 0;
function ut(e) {
  var t = e.prototype.toJSON;
  "function" == typeof t ||
    (function (e, t) {
      if (!Boolean(e))
        throw new Error(null != t ? t : "Unexpected invariant triggered.");
    })(0),
    (e.prototype.inspect = t),
    ct && (e.prototype[ct] = t);
}
var lt = (function () {
  function e(e, t, r) {
    (this.start = e.start),
      (this.end = t.end),
      (this.startToken = e),
      (this.endToken = t),
      (this.source = r);
  }
  return (
    (e.prototype.toJSON = function () {
      return { start: this.start, end: this.end };
    }),
    e
  );
})();
ut(lt);
var ft = (function () {
  function e(e, t, r, n, i, o, a) {
    (this.kind = e),
      (this.start = t),
      (this.end = r),
      (this.line = n),
      (this.column = i),
      (this.value = a),
      (this.prev = o),
      (this.next = null);
  }
  return (
    (e.prototype.toJSON = function () {
      return {
        kind: this.kind,
        value: this.value,
        line: this.line,
        column: this.column,
      };
    }),
    e
  );
})();
function pt(e) {
  return null != e && "string" == typeof e.kind;
}
ut(ft);
var ht = Object.freeze({
  SOF: "<SOF>",
  EOF: "<EOF>",
  BANG: "!",
  DOLLAR: "$",
  AMP: "&",
  PAREN_L: "(",
  PAREN_R: ")",
  SPREAD: "...",
  COLON: ":",
  EQUALS: "=",
  AT: "@",
  BRACKET_L: "[",
  BRACKET_R: "]",
  BRACE_L: "{",
  PIPE: "|",
  BRACE_R: "}",
  NAME: "Name",
  INT: "Int",
  FLOAT: "Float",
  STRING: "String",
  BLOCK_STRING: "BlockString",
  COMMENT: "Comment",
});
function dt(e) {
  return (dt =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
function yt(e) {
  return vt(e, []);
}
function vt(e, t) {
  switch (dt(e)) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? "[function ".concat(e.name, "]") : "[function]";
    case "object":
      return null === e
        ? "null"
        : (function (e, t) {
            if (-1 !== t.indexOf(e)) return "[Circular]";
            var r = [].concat(t, [e]),
              n = (function (e) {
                var t = e[String(ct)];
                if ("function" == typeof t) return t;
                if ("function" == typeof e.inspect) return e.inspect;
              })(e);
            if (void 0 !== n) {
              var i = n.call(e);
              if (i !== e) return "string" == typeof i ? i : vt(i, r);
            } else if (Array.isArray(e))
              return (function (e, t) {
                if (0 === e.length) return "[]";
                if (t.length > 2) return "[Array]";
                for (
                  var r = Math.min(10, e.length),
                    n = e.length - r,
                    i = [],
                    o = 0;
                  o < r;
                  ++o
                )
                  i.push(vt(e[o], t));
                1 === n
                  ? i.push("... 1 more item")
                  : n > 1 && i.push("... ".concat(n, " more items"));
                return "[" + i.join(", ") + "]";
              })(e, r);
            return (function (e, t) {
              var r = Object.keys(e);
              if (0 === r.length) return "{}";
              if (t.length > 2)
                return (
                  "[" +
                  (function (e) {
                    var t = Object.prototype.toString
                      .call(e)
                      .replace(/^\[object /, "")
                      .replace(/]$/, "");
                    if ("Object" === t && "function" == typeof e.constructor) {
                      var r = e.constructor.name;
                      if ("string" == typeof r && "" !== r) return r;
                    }
                    return t;
                  })(e) +
                  "]"
                );
              return (
                "{ " +
                r
                  .map(function (r) {
                    return r + ": " + vt(e[r], t);
                  })
                  .join(", ") +
                " }"
              );
            })(e, r);
          })(e, t);
    default:
      return String(e);
  }
}
function mt(e, t) {
  if (!Boolean(e)) throw new Error(t);
}
function bt(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
var gt = (function () {
  function e(e) {
    var t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "GraphQL request",
      r =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : { line: 1, column: 1 };
    "string" == typeof e ||
      mt(0, "Body must be a string. Received: ".concat(yt(e), ".")),
      (this.body = e),
      (this.name = t),
      (this.locationOffset = r),
      this.locationOffset.line > 0 ||
        mt(0, "line in locationOffset is 1-indexed and must be positive."),
      this.locationOffset.column > 0 ||
        mt(0, "column in locationOffset is 1-indexed and must be positive.");
  }
  var t, r, n;
  return (
    (t = e),
    (r = [
      {
        key: $e,
        get: function () {
          return "Source";
        },
      },
    ]) && bt(t.prototype, r),
    n && bt(t, n),
    e
  );
})();
var _t = Object.freeze({
  QUERY: "QUERY",
  MUTATION: "MUTATION",
  SUBSCRIPTION: "SUBSCRIPTION",
  FIELD: "FIELD",
  FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION",
  FRAGMENT_SPREAD: "FRAGMENT_SPREAD",
  INLINE_FRAGMENT: "INLINE_FRAGMENT",
  VARIABLE_DEFINITION: "VARIABLE_DEFINITION",
  SCHEMA: "SCHEMA",
  SCALAR: "SCALAR",
  OBJECT: "OBJECT",
  FIELD_DEFINITION: "FIELD_DEFINITION",
  ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION",
  INTERFACE: "INTERFACE",
  UNION: "UNION",
  ENUM: "ENUM",
  ENUM_VALUE: "ENUM_VALUE",
  INPUT_OBJECT: "INPUT_OBJECT",
  INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION",
});
function Et(e) {
  var t = e.split(/\r\n|[\n\r]/g),
    r = (function (e) {
      for (var t, r = !0, n = !0, i = 0, o = null, a = 0; a < e.length; ++a)
        switch (e.charCodeAt(a)) {
          case 13:
            10 === e.charCodeAt(a + 1) && ++a;
          case 10:
            (r = !1), (n = !0), (i = 0);
            break;
          case 9:
          case 32:
            ++i;
            break;
          default:
            n && !r && (null === o || i < o) && (o = i), (n = !1);
        }
      return null !== (t = o) && void 0 !== t ? t : 0;
    })(e);
  if (0 !== r) for (var n = 1; n < t.length; n++) t[n] = t[n].slice(r);
  for (var i = 0; i < t.length && wt(t[i]); ) ++i;
  for (var o = t.length; o > i && wt(t[o - 1]); ) --o;
  return t.slice(i, o).join("\n");
}
function wt(e) {
  for (var t = 0; t < e.length; ++t)
    if (" " !== e[t] && "\t" !== e[t]) return !1;
  return !0;
}
var Ot = (function () {
  function e(e) {
    var t = new ft(ht.SOF, 0, 0, 0, 0, null);
    (this.source = e),
      (this.lastToken = t),
      (this.token = t),
      (this.line = 1),
      (this.lineStart = 0);
  }
  var t = e.prototype;
  return (
    (t.advance = function () {
      return (this.lastToken = this.token), (this.token = this.lookahead());
    }),
    (t.lookahead = function () {
      var e = this.token;
      if (e.kind !== ht.EOF)
        do {
          var t;
          e =
            null !== (t = e.next) && void 0 !== t ? t : (e.next = St(this, e));
        } while (e.kind === ht.COMMENT);
      return e;
    }),
    e
  );
})();
function kt(e) {
  return isNaN(e)
    ? ht.EOF
    : e < 127
    ? JSON.stringify(String.fromCharCode(e))
    : '"\\u'.concat(("00" + e.toString(16).toUpperCase()).slice(-4), '"');
}
function St(e, t) {
  for (var r = e.source, n = r.body, i = n.length, o = t.end; o < i; ) {
    var a = n.charCodeAt(o),
      s = e.line,
      c = 1 + o - e.lineStart;
    switch (a) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++o;
        continue;
      case 10:
        ++o, ++e.line, (e.lineStart = o);
        continue;
      case 13:
        10 === n.charCodeAt(o + 1) ? (o += 2) : ++o,
          ++e.line,
          (e.lineStart = o);
        continue;
      case 33:
        return new ft(ht.BANG, o, o + 1, s, c, t);
      case 35:
        return Dt(r, o, s, c, t);
      case 36:
        return new ft(ht.DOLLAR, o, o + 1, s, c, t);
      case 38:
        return new ft(ht.AMP, o, o + 1, s, c, t);
      case 40:
        return new ft(ht.PAREN_L, o, o + 1, s, c, t);
      case 41:
        return new ft(ht.PAREN_R, o, o + 1, s, c, t);
      case 46:
        if (46 === n.charCodeAt(o + 1) && 46 === n.charCodeAt(o + 2))
          return new ft(ht.SPREAD, o, o + 3, s, c, t);
        break;
      case 58:
        return new ft(ht.COLON, o, o + 1, s, c, t);
      case 61:
        return new ft(ht.EQUALS, o, o + 1, s, c, t);
      case 64:
        return new ft(ht.AT, o, o + 1, s, c, t);
      case 91:
        return new ft(ht.BRACKET_L, o, o + 1, s, c, t);
      case 93:
        return new ft(ht.BRACKET_R, o, o + 1, s, c, t);
      case 123:
        return new ft(ht.BRACE_L, o, o + 1, s, c, t);
      case 124:
        return new ft(ht.PIPE, o, o + 1, s, c, t);
      case 125:
        return new ft(ht.BRACE_R, o, o + 1, s, c, t);
      case 34:
        return 34 === n.charCodeAt(o + 1) && 34 === n.charCodeAt(o + 2)
          ? At(r, o, s, c, t, e)
          : It(r, o, s, c, t);
      case 45:
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return xt(r, o, a, s, c, t);
      case 65:
      case 66:
      case 67:
      case 68:
      case 69:
      case 70:
      case 71:
      case 72:
      case 73:
      case 74:
      case 75:
      case 76:
      case 77:
      case 78:
      case 79:
      case 80:
      case 81:
      case 82:
      case 83:
      case 84:
      case 85:
      case 86:
      case 87:
      case 88:
      case 89:
      case 90:
      case 95:
      case 97:
      case 98:
      case 99:
      case 100:
      case 101:
      case 102:
      case 103:
      case 104:
      case 105:
      case 106:
      case 107:
      case 108:
      case 109:
      case 110:
      case 111:
      case 112:
      case 113:
      case 114:
      case 115:
      case 116:
      case 117:
      case 118:
      case 119:
      case 120:
      case 121:
      case 122:
        return Ct(r, o, s, c, t);
    }
    throw at(r, o, Tt(a));
  }
  var u = e.line,
    l = 1 + o - e.lineStart;
  return new ft(ht.EOF, i, i, u, l, t);
}
function Tt(e) {
  return e < 32 && 9 !== e && 10 !== e && 13 !== e
    ? "Cannot contain the invalid character ".concat(kt(e), ".")
    : 39 === e
    ? "Unexpected single quote character ('), did you mean to use a double quote (\")?"
    : "Cannot parse the unexpected character ".concat(kt(e), ".");
}
function Dt(e, t, r, n, i) {
  var o,
    a = e.body,
    s = t;
  do {
    o = a.charCodeAt(++s);
  } while (!isNaN(o) && (o > 31 || 9 === o));
  return new ft(ht.COMMENT, t, s, r, n, i, a.slice(t + 1, s));
}
function xt(e, t, r, n, i, o) {
  var a = e.body,
    s = r,
    c = t,
    u = !1;
  if ((45 === s && (s = a.charCodeAt(++c)), 48 === s)) {
    if ((s = a.charCodeAt(++c)) >= 48 && s <= 57)
      throw at(
        e,
        c,
        "Invalid number, unexpected digit after 0: ".concat(kt(s), ".")
      );
  } else (c = Nt(e, c, s)), (s = a.charCodeAt(c));
  if (
    (46 === s &&
      ((u = !0),
      (s = a.charCodeAt(++c)),
      (c = Nt(e, c, s)),
      (s = a.charCodeAt(c))),
    (69 !== s && 101 !== s) ||
      ((u = !0),
      (43 !== (s = a.charCodeAt(++c)) && 45 !== s) || (s = a.charCodeAt(++c)),
      (c = Nt(e, c, s)),
      (s = a.charCodeAt(c))),
    46 === s ||
      (function (e) {
        return 95 === e || (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
      })(s))
  )
    throw at(
      e,
      c,
      "Invalid number, expected digit but got: ".concat(kt(s), ".")
    );
  return new ft(u ? ht.FLOAT : ht.INT, t, c, n, i, o, a.slice(t, c));
}
function Nt(e, t, r) {
  var n = e.body,
    i = t,
    o = r;
  if (o >= 48 && o <= 57) {
    do {
      o = n.charCodeAt(++i);
    } while (o >= 48 && o <= 57);
    return i;
  }
  throw at(e, i, "Invalid number, expected digit but got: ".concat(kt(o), "."));
}
function It(e, t, r, n, i) {
  for (
    var o, a, s, c, u = e.body, l = t + 1, f = l, p = 0, h = "";
    l < u.length && !isNaN((p = u.charCodeAt(l))) && 10 !== p && 13 !== p;

  ) {
    if (34 === p)
      return (h += u.slice(f, l)), new ft(ht.STRING, t, l + 1, r, n, i, h);
    if (p < 32 && 9 !== p)
      throw at(e, l, "Invalid character within String: ".concat(kt(p), "."));
    if ((++l, 92 === p)) {
      switch (((h += u.slice(f, l - 1)), (p = u.charCodeAt(l)))) {
        case 34:
          h += '"';
          break;
        case 47:
          h += "/";
          break;
        case 92:
          h += "\\";
          break;
        case 98:
          h += "\b";
          break;
        case 102:
          h += "\f";
          break;
        case 110:
          h += "\n";
          break;
        case 114:
          h += "\r";
          break;
        case 116:
          h += "\t";
          break;
        case 117:
          var d =
            ((o = u.charCodeAt(l + 1)),
            (a = u.charCodeAt(l + 2)),
            (s = u.charCodeAt(l + 3)),
            (c = u.charCodeAt(l + 4)),
            (Rt(o) << 12) | (Rt(a) << 8) | (Rt(s) << 4) | Rt(c));
          if (d < 0) {
            var y = u.slice(l + 1, l + 5);
            throw at(
              e,
              l,
              "Invalid character escape sequence: \\u".concat(y, ".")
            );
          }
          (h += String.fromCharCode(d)), (l += 4);
          break;
        default:
          throw at(
            e,
            l,
            "Invalid character escape sequence: \\".concat(
              String.fromCharCode(p),
              "."
            )
          );
      }
      f = ++l;
    }
  }
  throw at(e, l, "Unterminated string.");
}
function At(e, t, r, n, i, o) {
  for (
    var a = e.body, s = t + 3, c = s, u = 0, l = "";
    s < a.length && !isNaN((u = a.charCodeAt(s)));

  ) {
    if (34 === u && 34 === a.charCodeAt(s + 1) && 34 === a.charCodeAt(s + 2))
      return (
        (l += a.slice(c, s)), new ft(ht.BLOCK_STRING, t, s + 3, r, n, i, Et(l))
      );
    if (u < 32 && 9 !== u && 10 !== u && 13 !== u)
      throw at(e, s, "Invalid character within String: ".concat(kt(u), "."));
    10 === u
      ? (++s, ++o.line, (o.lineStart = s))
      : 13 === u
      ? (10 === a.charCodeAt(s + 1) ? (s += 2) : ++s,
        ++o.line,
        (o.lineStart = s))
      : 92 === u &&
        34 === a.charCodeAt(s + 1) &&
        34 === a.charCodeAt(s + 2) &&
        34 === a.charCodeAt(s + 3)
      ? ((l += a.slice(c, s) + '"""'), (c = s += 4))
      : ++s;
  }
  throw at(e, s, "Unterminated string.");
}
function Rt(e) {
  return e >= 48 && e <= 57
    ? e - 48
    : e >= 65 && e <= 70
    ? e - 55
    : e >= 97 && e <= 102
    ? e - 87
    : -1;
}
function Ct(e, t, r, n, i) {
  for (
    var o = e.body, a = o.length, s = t + 1, c = 0;
    s !== a &&
    !isNaN((c = o.charCodeAt(s))) &&
    (95 === c ||
      (c >= 48 && c <= 57) ||
      (c >= 65 && c <= 90) ||
      (c >= 97 && c <= 122));

  )
    ++s;
  return new ft(ht.NAME, t, s, r, n, i, o.slice(t, s));
}
var Ft = (function () {
  function e(e, t) {
    var r = (function (e) {
      return e instanceof gt;
    })(e)
      ? e
      : new gt(e);
    (this._lexer = new Ot(r)), (this._options = t);
  }
  var t = e.prototype;
  return (
    (t.parseName = function () {
      var e = this.expectToken(ht.NAME);
      return { kind: st.NAME, value: e.value, loc: this.loc(e) };
    }),
    (t.parseDocument = function () {
      var e = this._lexer.token;
      return {
        kind: st.DOCUMENT,
        definitions: this.many(ht.SOF, this.parseDefinition, ht.EOF),
        loc: this.loc(e),
      };
    }),
    (t.parseDefinition = function () {
      if (this.peek(ht.NAME))
        switch (this._lexer.token.value) {
          case "query":
          case "mutation":
          case "subscription":
            return this.parseOperationDefinition();
          case "fragment":
            return this.parseFragmentDefinition();
          case "schema":
          case "scalar":
          case "type":
          case "interface":
          case "union":
          case "enum":
          case "input":
          case "directive":
            return this.parseTypeSystemDefinition();
          case "extend":
            return this.parseTypeSystemExtension();
        }
      else {
        if (this.peek(ht.BRACE_L)) return this.parseOperationDefinition();
        if (this.peekDescription()) return this.parseTypeSystemDefinition();
      }
      throw this.unexpected();
    }),
    (t.parseOperationDefinition = function () {
      var e = this._lexer.token;
      if (this.peek(ht.BRACE_L))
        return {
          kind: st.OPERATION_DEFINITION,
          operation: "query",
          name: void 0,
          variableDefinitions: [],
          directives: [],
          selectionSet: this.parseSelectionSet(),
          loc: this.loc(e),
        };
      var t,
        r = this.parseOperationType();
      return (
        this.peek(ht.NAME) && (t = this.parseName()),
        {
          kind: st.OPERATION_DEFINITION,
          operation: r,
          name: t,
          variableDefinitions: this.parseVariableDefinitions(),
          directives: this.parseDirectives(!1),
          selectionSet: this.parseSelectionSet(),
          loc: this.loc(e),
        }
      );
    }),
    (t.parseOperationType = function () {
      var e = this.expectToken(ht.NAME);
      switch (e.value) {
        case "query":
          return "query";
        case "mutation":
          return "mutation";
        case "subscription":
          return "subscription";
      }
      throw this.unexpected(e);
    }),
    (t.parseVariableDefinitions = function () {
      return this.optionalMany(
        ht.PAREN_L,
        this.parseVariableDefinition,
        ht.PAREN_R
      );
    }),
    (t.parseVariableDefinition = function () {
      var e = this._lexer.token;
      return {
        kind: st.VARIABLE_DEFINITION,
        variable: this.parseVariable(),
        type: (this.expectToken(ht.COLON), this.parseTypeReference()),
        defaultValue: this.expectOptionalToken(ht.EQUALS)
          ? this.parseValueLiteral(!0)
          : void 0,
        directives: this.parseDirectives(!0),
        loc: this.loc(e),
      };
    }),
    (t.parseVariable = function () {
      var e = this._lexer.token;
      return (
        this.expectToken(ht.DOLLAR),
        { kind: st.VARIABLE, name: this.parseName(), loc: this.loc(e) }
      );
    }),
    (t.parseSelectionSet = function () {
      var e = this._lexer.token;
      return {
        kind: st.SELECTION_SET,
        selections: this.many(ht.BRACE_L, this.parseSelection, ht.BRACE_R),
        loc: this.loc(e),
      };
    }),
    (t.parseSelection = function () {
      return this.peek(ht.SPREAD) ? this.parseFragment() : this.parseField();
    }),
    (t.parseField = function () {
      var e,
        t,
        r = this._lexer.token,
        n = this.parseName();
      return (
        this.expectOptionalToken(ht.COLON)
          ? ((e = n), (t = this.parseName()))
          : (t = n),
        {
          kind: st.FIELD,
          alias: e,
          name: t,
          arguments: this.parseArguments(!1),
          directives: this.parseDirectives(!1),
          selectionSet: this.peek(ht.BRACE_L)
            ? this.parseSelectionSet()
            : void 0,
          loc: this.loc(r),
        }
      );
    }),
    (t.parseArguments = function (e) {
      var t = e ? this.parseConstArgument : this.parseArgument;
      return this.optionalMany(ht.PAREN_L, t, ht.PAREN_R);
    }),
    (t.parseArgument = function () {
      var e = this._lexer.token,
        t = this.parseName();
      return (
        this.expectToken(ht.COLON),
        {
          kind: st.ARGUMENT,
          name: t,
          value: this.parseValueLiteral(!1),
          loc: this.loc(e),
        }
      );
    }),
    (t.parseConstArgument = function () {
      var e = this._lexer.token;
      return {
        kind: st.ARGUMENT,
        name: this.parseName(),
        value: (this.expectToken(ht.COLON), this.parseValueLiteral(!0)),
        loc: this.loc(e),
      };
    }),
    (t.parseFragment = function () {
      var e = this._lexer.token;
      this.expectToken(ht.SPREAD);
      var t = this.expectOptionalKeyword("on");
      return !t && this.peek(ht.NAME)
        ? {
            kind: st.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(!1),
            loc: this.loc(e),
          }
        : {
            kind: st.INLINE_FRAGMENT,
            typeCondition: t ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(e),
          };
    }),
    (t.parseFragmentDefinition = function () {
      var e,
        t = this._lexer.token;
      return (
        this.expectKeyword("fragment"),
        !0 ===
        (null === (e = this._options) || void 0 === e
          ? void 0
          : e.experimentalFragmentVariables)
          ? {
              kind: st.FRAGMENT_DEFINITION,
              name: this.parseFragmentName(),
              variableDefinitions: this.parseVariableDefinitions(),
              typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
              directives: this.parseDirectives(!1),
              selectionSet: this.parseSelectionSet(),
              loc: this.loc(t),
            }
          : {
              kind: st.FRAGMENT_DEFINITION,
              name: this.parseFragmentName(),
              typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
              directives: this.parseDirectives(!1),
              selectionSet: this.parseSelectionSet(),
              loc: this.loc(t),
            }
      );
    }),
    (t.parseFragmentName = function () {
      if ("on" === this._lexer.token.value) throw this.unexpected();
      return this.parseName();
    }),
    (t.parseValueLiteral = function (e) {
      var t = this._lexer.token;
      switch (t.kind) {
        case ht.BRACKET_L:
          return this.parseList(e);
        case ht.BRACE_L:
          return this.parseObject(e);
        case ht.INT:
          return (
            this._lexer.advance(),
            { kind: st.INT, value: t.value, loc: this.loc(t) }
          );
        case ht.FLOAT:
          return (
            this._lexer.advance(),
            { kind: st.FLOAT, value: t.value, loc: this.loc(t) }
          );
        case ht.STRING:
        case ht.BLOCK_STRING:
          return this.parseStringLiteral();
        case ht.NAME:
          switch ((this._lexer.advance(), t.value)) {
            case "true":
              return { kind: st.BOOLEAN, value: !0, loc: this.loc(t) };
            case "false":
              return { kind: st.BOOLEAN, value: !1, loc: this.loc(t) };
            case "null":
              return { kind: st.NULL, loc: this.loc(t) };
            default:
              return { kind: st.ENUM, value: t.value, loc: this.loc(t) };
          }
        case ht.DOLLAR:
          if (!e) return this.parseVariable();
      }
      throw this.unexpected();
    }),
    (t.parseStringLiteral = function () {
      var e = this._lexer.token;
      return (
        this._lexer.advance(),
        {
          kind: st.STRING,
          value: e.value,
          block: e.kind === ht.BLOCK_STRING,
          loc: this.loc(e),
        }
      );
    }),
    (t.parseList = function (e) {
      var t = this,
        r = this._lexer.token;
      return {
        kind: st.LIST,
        values: this.any(
          ht.BRACKET_L,
          function () {
            return t.parseValueLiteral(e);
          },
          ht.BRACKET_R
        ),
        loc: this.loc(r),
      };
    }),
    (t.parseObject = function (e) {
      var t = this,
        r = this._lexer.token;
      return {
        kind: st.OBJECT,
        fields: this.any(
          ht.BRACE_L,
          function () {
            return t.parseObjectField(e);
          },
          ht.BRACE_R
        ),
        loc: this.loc(r),
      };
    }),
    (t.parseObjectField = function (e) {
      var t = this._lexer.token,
        r = this.parseName();
      return (
        this.expectToken(ht.COLON),
        {
          kind: st.OBJECT_FIELD,
          name: r,
          value: this.parseValueLiteral(e),
          loc: this.loc(t),
        }
      );
    }),
    (t.parseDirectives = function (e) {
      for (var t = []; this.peek(ht.AT); ) t.push(this.parseDirective(e));
      return t;
    }),
    (t.parseDirective = function (e) {
      var t = this._lexer.token;
      return (
        this.expectToken(ht.AT),
        {
          kind: st.DIRECTIVE,
          name: this.parseName(),
          arguments: this.parseArguments(e),
          loc: this.loc(t),
        }
      );
    }),
    (t.parseTypeReference = function () {
      var e,
        t = this._lexer.token;
      return (
        this.expectOptionalToken(ht.BRACKET_L)
          ? ((e = this.parseTypeReference()),
            this.expectToken(ht.BRACKET_R),
            (e = { kind: st.LIST_TYPE, type: e, loc: this.loc(t) }))
          : (e = this.parseNamedType()),
        this.expectOptionalToken(ht.BANG)
          ? { kind: st.NON_NULL_TYPE, type: e, loc: this.loc(t) }
          : e
      );
    }),
    (t.parseNamedType = function () {
      var e = this._lexer.token;
      return { kind: st.NAMED_TYPE, name: this.parseName(), loc: this.loc(e) };
    }),
    (t.parseTypeSystemDefinition = function () {
      var e = this.peekDescription()
        ? this._lexer.lookahead()
        : this._lexer.token;
      if (e.kind === ht.NAME)
        switch (e.value) {
          case "schema":
            return this.parseSchemaDefinition();
          case "scalar":
            return this.parseScalarTypeDefinition();
          case "type":
            return this.parseObjectTypeDefinition();
          case "interface":
            return this.parseInterfaceTypeDefinition();
          case "union":
            return this.parseUnionTypeDefinition();
          case "enum":
            return this.parseEnumTypeDefinition();
          case "input":
            return this.parseInputObjectTypeDefinition();
          case "directive":
            return this.parseDirectiveDefinition();
        }
      throw this.unexpected(e);
    }),
    (t.peekDescription = function () {
      return this.peek(ht.STRING) || this.peek(ht.BLOCK_STRING);
    }),
    (t.parseDescription = function () {
      if (this.peekDescription()) return this.parseStringLiteral();
    }),
    (t.parseSchemaDefinition = function () {
      var e = this._lexer.token,
        t = this.parseDescription();
      this.expectKeyword("schema");
      var r = this.parseDirectives(!0),
        n = this.many(
          ht.BRACE_L,
          this.parseOperationTypeDefinition,
          ht.BRACE_R
        );
      return {
        kind: st.SCHEMA_DEFINITION,
        description: t,
        directives: r,
        operationTypes: n,
        loc: this.loc(e),
      };
    }),
    (t.parseOperationTypeDefinition = function () {
      var e = this._lexer.token,
        t = this.parseOperationType();
      this.expectToken(ht.COLON);
      var r = this.parseNamedType();
      return {
        kind: st.OPERATION_TYPE_DEFINITION,
        operation: t,
        type: r,
        loc: this.loc(e),
      };
    }),
    (t.parseScalarTypeDefinition = function () {
      var e = this._lexer.token,
        t = this.parseDescription();
      this.expectKeyword("scalar");
      var r = this.parseName(),
        n = this.parseDirectives(!0);
      return {
        kind: st.SCALAR_TYPE_DEFINITION,
        description: t,
        name: r,
        directives: n,
        loc: this.loc(e),
      };
    }),
    (t.parseObjectTypeDefinition = function () {
      var e = this._lexer.token,
        t = this.parseDescription();
      this.expectKeyword("type");
      var r = this.parseName(),
        n = this.parseImplementsInterfaces(),
        i = this.parseDirectives(!0),
        o = this.parseFieldsDefinition();
      return {
        kind: st.OBJECT_TYPE_DEFINITION,
        description: t,
        name: r,
        interfaces: n,
        directives: i,
        fields: o,
        loc: this.loc(e),
      };
    }),
    (t.parseImplementsInterfaces = function () {
      var e;
      if (!this.expectOptionalKeyword("implements")) return [];
      if (
        !0 ===
        (null === (e = this._options) || void 0 === e
          ? void 0
          : e.allowLegacySDLImplementsInterfaces)
      ) {
        var t = [];
        this.expectOptionalToken(ht.AMP);
        do {
          t.push(this.parseNamedType());
        } while (this.expectOptionalToken(ht.AMP) || this.peek(ht.NAME));
        return t;
      }
      return this.delimitedMany(ht.AMP, this.parseNamedType);
    }),
    (t.parseFieldsDefinition = function () {
      var e;
      return !0 ===
        (null === (e = this._options) || void 0 === e
          ? void 0
          : e.allowLegacySDLEmptyFields) &&
        this.peek(ht.BRACE_L) &&
        this._lexer.lookahead().kind === ht.BRACE_R
        ? (this._lexer.advance(), this._lexer.advance(), [])
        : this.optionalMany(ht.BRACE_L, this.parseFieldDefinition, ht.BRACE_R);
    }),
    (t.parseFieldDefinition = function () {
      var e = this._lexer.token,
        t = this.parseDescription(),
        r = this.parseName(),
        n = this.parseArgumentDefs();
      this.expectToken(ht.COLON);
      var i = this.parseTypeReference(),
        o = this.parseDirectives(!0);
      return {
        kind: st.FIELD_DEFINITION,
        description: t,
        name: r,
        arguments: n,
        type: i,
        directives: o,
        loc: this.loc(e),
      };
    }),
    (t.parseArgumentDefs = function () {
      return this.optionalMany(ht.PAREN_L, this.parseInputValueDef, ht.PAREN_R);
    }),
    (t.parseInputValueDef = function () {
      var e = this._lexer.token,
        t = this.parseDescription(),
        r = this.parseName();
      this.expectToken(ht.COLON);
      var n,
        i = this.parseTypeReference();
      this.expectOptionalToken(ht.EQUALS) && (n = this.parseValueLiteral(!0));
      var o = this.parseDirectives(!0);
      return {
        kind: st.INPUT_VALUE_DEFINITION,
        description: t,
        name: r,
        type: i,
        defaultValue: n,
        directives: o,
        loc: this.loc(e),
      };
    }),
    (t.parseInterfaceTypeDefinition = function () {
      var e = this._lexer.token,
        t = this.parseDescription();
      this.expectKeyword("interface");
      var r = this.parseName(),
        n = this.parseImplementsInterfaces(),
        i = this.parseDirectives(!0),
        o = this.parseFieldsDefinition();
      return {
        kind: st.INTERFACE_TYPE_DEFINITION,
        description: t,
        name: r,
        interfaces: n,
        directives: i,
        fields: o,
        loc: this.loc(e),
      };
    }),
    (t.parseUnionTypeDefinition = function () {
      var e = this._lexer.token,
        t = this.parseDescription();
      this.expectKeyword("union");
      var r = this.parseName(),
        n = this.parseDirectives(!0),
        i = this.parseUnionMemberTypes();
      return {
        kind: st.UNION_TYPE_DEFINITION,
        description: t,
        name: r,
        directives: n,
        types: i,
        loc: this.loc(e),
      };
    }),
    (t.parseUnionMemberTypes = function () {
      return this.expectOptionalToken(ht.EQUALS)
        ? this.delimitedMany(ht.PIPE, this.parseNamedType)
        : [];
    }),
    (t.parseEnumTypeDefinition = function () {
      var e = this._lexer.token,
        t = this.parseDescription();
      this.expectKeyword("enum");
      var r = this.parseName(),
        n = this.parseDirectives(!0),
        i = this.parseEnumValuesDefinition();
      return {
        kind: st.ENUM_TYPE_DEFINITION,
        description: t,
        name: r,
        directives: n,
        values: i,
        loc: this.loc(e),
      };
    }),
    (t.parseEnumValuesDefinition = function () {
      return this.optionalMany(
        ht.BRACE_L,
        this.parseEnumValueDefinition,
        ht.BRACE_R
      );
    }),
    (t.parseEnumValueDefinition = function () {
      var e = this._lexer.token,
        t = this.parseDescription(),
        r = this.parseName(),
        n = this.parseDirectives(!0);
      return {
        kind: st.ENUM_VALUE_DEFINITION,
        description: t,
        name: r,
        directives: n,
        loc: this.loc(e),
      };
    }),
    (t.parseInputObjectTypeDefinition = function () {
      var e = this._lexer.token,
        t = this.parseDescription();
      this.expectKeyword("input");
      var r = this.parseName(),
        n = this.parseDirectives(!0),
        i = this.parseInputFieldsDefinition();
      return {
        kind: st.INPUT_OBJECT_TYPE_DEFINITION,
        description: t,
        name: r,
        directives: n,
        fields: i,
        loc: this.loc(e),
      };
    }),
    (t.parseInputFieldsDefinition = function () {
      return this.optionalMany(ht.BRACE_L, this.parseInputValueDef, ht.BRACE_R);
    }),
    (t.parseTypeSystemExtension = function () {
      var e = this._lexer.lookahead();
      if (e.kind === ht.NAME)
        switch (e.value) {
          case "schema":
            return this.parseSchemaExtension();
          case "scalar":
            return this.parseScalarTypeExtension();
          case "type":
            return this.parseObjectTypeExtension();
          case "interface":
            return this.parseInterfaceTypeExtension();
          case "union":
            return this.parseUnionTypeExtension();
          case "enum":
            return this.parseEnumTypeExtension();
          case "input":
            return this.parseInputObjectTypeExtension();
        }
      throw this.unexpected(e);
    }),
    (t.parseSchemaExtension = function () {
      var e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("schema");
      var t = this.parseDirectives(!0),
        r = this.optionalMany(
          ht.BRACE_L,
          this.parseOperationTypeDefinition,
          ht.BRACE_R
        );
      if (0 === t.length && 0 === r.length) throw this.unexpected();
      return {
        kind: st.SCHEMA_EXTENSION,
        directives: t,
        operationTypes: r,
        loc: this.loc(e),
      };
    }),
    (t.parseScalarTypeExtension = function () {
      var e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("scalar");
      var t = this.parseName(),
        r = this.parseDirectives(!0);
      if (0 === r.length) throw this.unexpected();
      return {
        kind: st.SCALAR_TYPE_EXTENSION,
        name: t,
        directives: r,
        loc: this.loc(e),
      };
    }),
    (t.parseObjectTypeExtension = function () {
      var e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("type");
      var t = this.parseName(),
        r = this.parseImplementsInterfaces(),
        n = this.parseDirectives(!0),
        i = this.parseFieldsDefinition();
      if (0 === r.length && 0 === n.length && 0 === i.length)
        throw this.unexpected();
      return {
        kind: st.OBJECT_TYPE_EXTENSION,
        name: t,
        interfaces: r,
        directives: n,
        fields: i,
        loc: this.loc(e),
      };
    }),
    (t.parseInterfaceTypeExtension = function () {
      var e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("interface");
      var t = this.parseName(),
        r = this.parseImplementsInterfaces(),
        n = this.parseDirectives(!0),
        i = this.parseFieldsDefinition();
      if (0 === r.length && 0 === n.length && 0 === i.length)
        throw this.unexpected();
      return {
        kind: st.INTERFACE_TYPE_EXTENSION,
        name: t,
        interfaces: r,
        directives: n,
        fields: i,
        loc: this.loc(e),
      };
    }),
    (t.parseUnionTypeExtension = function () {
      var e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("union");
      var t = this.parseName(),
        r = this.parseDirectives(!0),
        n = this.parseUnionMemberTypes();
      if (0 === r.length && 0 === n.length) throw this.unexpected();
      return {
        kind: st.UNION_TYPE_EXTENSION,
        name: t,
        directives: r,
        types: n,
        loc: this.loc(e),
      };
    }),
    (t.parseEnumTypeExtension = function () {
      var e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("enum");
      var t = this.parseName(),
        r = this.parseDirectives(!0),
        n = this.parseEnumValuesDefinition();
      if (0 === r.length && 0 === n.length) throw this.unexpected();
      return {
        kind: st.ENUM_TYPE_EXTENSION,
        name: t,
        directives: r,
        values: n,
        loc: this.loc(e),
      };
    }),
    (t.parseInputObjectTypeExtension = function () {
      var e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("input");
      var t = this.parseName(),
        r = this.parseDirectives(!0),
        n = this.parseInputFieldsDefinition();
      if (0 === r.length && 0 === n.length) throw this.unexpected();
      return {
        kind: st.INPUT_OBJECT_TYPE_EXTENSION,
        name: t,
        directives: r,
        fields: n,
        loc: this.loc(e),
      };
    }),
    (t.parseDirectiveDefinition = function () {
      var e = this._lexer.token,
        t = this.parseDescription();
      this.expectKeyword("directive"), this.expectToken(ht.AT);
      var r = this.parseName(),
        n = this.parseArgumentDefs(),
        i = this.expectOptionalKeyword("repeatable");
      this.expectKeyword("on");
      var o = this.parseDirectiveLocations();
      return {
        kind: st.DIRECTIVE_DEFINITION,
        description: t,
        name: r,
        arguments: n,
        repeatable: i,
        locations: o,
        loc: this.loc(e),
      };
    }),
    (t.parseDirectiveLocations = function () {
      return this.delimitedMany(ht.PIPE, this.parseDirectiveLocation);
    }),
    (t.parseDirectiveLocation = function () {
      var e = this._lexer.token,
        t = this.parseName();
      if (void 0 !== _t[t.value]) return t;
      throw this.unexpected(e);
    }),
    (t.loc = function (e) {
      var t;
      if (
        !0 !==
        (null === (t = this._options) || void 0 === t ? void 0 : t.noLocation)
      )
        return new lt(e, this._lexer.lastToken, this._lexer.source);
    }),
    (t.peek = function (e) {
      return this._lexer.token.kind === e;
    }),
    (t.expectToken = function (e) {
      var t = this._lexer.token;
      if (t.kind === e) return this._lexer.advance(), t;
      throw at(
        this._lexer.source,
        t.start,
        "Expected ".concat(jt(e), ", found ").concat(Pt(t), ".")
      );
    }),
    (t.expectOptionalToken = function (e) {
      var t = this._lexer.token;
      if (t.kind === e) return this._lexer.advance(), t;
    }),
    (t.expectKeyword = function (e) {
      var t = this._lexer.token;
      if (t.kind !== ht.NAME || t.value !== e)
        throw at(
          this._lexer.source,
          t.start,
          'Expected "'.concat(e, '", found ').concat(Pt(t), ".")
        );
      this._lexer.advance();
    }),
    (t.expectOptionalKeyword = function (e) {
      var t = this._lexer.token;
      return t.kind === ht.NAME && t.value === e && (this._lexer.advance(), !0);
    }),
    (t.unexpected = function (e) {
      var t = null != e ? e : this._lexer.token;
      return at(this._lexer.source, t.start, "Unexpected ".concat(Pt(t), "."));
    }),
    (t.any = function (e, t, r) {
      this.expectToken(e);
      for (var n = []; !this.expectOptionalToken(r); ) n.push(t.call(this));
      return n;
    }),
    (t.optionalMany = function (e, t, r) {
      if (this.expectOptionalToken(e)) {
        var n = [];
        do {
          n.push(t.call(this));
        } while (!this.expectOptionalToken(r));
        return n;
      }
      return [];
    }),
    (t.many = function (e, t, r) {
      this.expectToken(e);
      var n = [];
      do {
        n.push(t.call(this));
      } while (!this.expectOptionalToken(r));
      return n;
    }),
    (t.delimitedMany = function (e, t) {
      this.expectOptionalToken(e);
      var r = [];
      do {
        r.push(t.call(this));
      } while (this.expectOptionalToken(e));
      return r;
    }),
    e
  );
})();
function Pt(e) {
  var t = e.value;
  return jt(e.kind) + (null != t ? ' "'.concat(t, '"') : "");
}
function jt(e) {
  return (function (e) {
    return (
      e === ht.BANG ||
      e === ht.DOLLAR ||
      e === ht.AMP ||
      e === ht.PAREN_L ||
      e === ht.PAREN_R ||
      e === ht.SPREAD ||
      e === ht.COLON ||
      e === ht.EQUALS ||
      e === ht.AT ||
      e === ht.BRACKET_L ||
      e === ht.BRACKET_R ||
      e === ht.BRACE_L ||
      e === ht.PIPE ||
      e === ht.BRACE_R
    );
  })(e)
    ? '"'.concat(e, '"')
    : e;
}
var Mt = {
    Name: [],
    Document: ["definitions"],
    OperationDefinition: [
      "name",
      "variableDefinitions",
      "directives",
      "selectionSet",
    ],
    VariableDefinition: ["variable", "type", "defaultValue", "directives"],
    Variable: ["name"],
    SelectionSet: ["selections"],
    Field: ["alias", "name", "arguments", "directives", "selectionSet"],
    Argument: ["name", "value"],
    FragmentSpread: ["name", "directives"],
    InlineFragment: ["typeCondition", "directives", "selectionSet"],
    FragmentDefinition: [
      "name",
      "variableDefinitions",
      "typeCondition",
      "directives",
      "selectionSet",
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ["values"],
    ObjectValue: ["fields"],
    ObjectField: ["name", "value"],
    Directive: ["name", "arguments"],
    NamedType: ["name"],
    ListType: ["type"],
    NonNullType: ["type"],
    SchemaDefinition: ["description", "directives", "operationTypes"],
    OperationTypeDefinition: ["type"],
    ScalarTypeDefinition: ["description", "name", "directives"],
    ObjectTypeDefinition: [
      "description",
      "name",
      "interfaces",
      "directives",
      "fields",
    ],
    FieldDefinition: ["description", "name", "arguments", "type", "directives"],
    InputValueDefinition: [
      "description",
      "name",
      "type",
      "defaultValue",
      "directives",
    ],
    InterfaceTypeDefinition: [
      "description",
      "name",
      "interfaces",
      "directives",
      "fields",
    ],
    UnionTypeDefinition: ["description", "name", "directives", "types"],
    EnumTypeDefinition: ["description", "name", "directives", "values"],
    EnumValueDefinition: ["description", "name", "directives"],
    InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
    DirectiveDefinition: ["description", "name", "arguments", "locations"],
    SchemaExtension: ["directives", "operationTypes"],
    ScalarTypeExtension: ["name", "directives"],
    ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
    InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
    UnionTypeExtension: ["name", "directives", "types"],
    EnumTypeExtension: ["name", "directives", "values"],
    InputObjectTypeExtension: ["name", "directives", "fields"],
  },
  Vt = Object.freeze({});
function Lt(e, t) {
  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Mt,
    n = void 0,
    i = Array.isArray(e),
    o = [e],
    a = -1,
    s = [],
    c = void 0,
    u = void 0,
    l = void 0,
    f = [],
    p = [],
    h = e;
  do {
    var d = ++a === o.length,
      y = d && 0 !== s.length;
    if (d) {
      if (
        ((u = 0 === p.length ? void 0 : f[f.length - 1]),
        (c = l),
        (l = p.pop()),
        y)
      ) {
        if (i) c = c.slice();
        else {
          for (var v = {}, m = 0, b = Object.keys(c); m < b.length; m++) {
            var g = b[m];
            v[g] = c[g];
          }
          c = v;
        }
        for (var _ = 0, E = 0; E < s.length; E++) {
          var w = s[E][0],
            O = s[E][1];
          i && (w -= _), i && null === O ? (c.splice(w, 1), _++) : (c[w] = O);
        }
      }
      (a = n.index), (o = n.keys), (s = n.edits), (i = n.inArray), (n = n.prev);
    } else {
      if (((u = l ? (i ? a : o[a]) : void 0), null == (c = l ? l[u] : h)))
        continue;
      l && f.push(u);
    }
    var k,
      S = void 0;
    if (!Array.isArray(c)) {
      if (!pt(c)) throw new Error("Invalid AST Node: ".concat(yt(c), "."));
      var T = qt(t, c.kind, d);
      if (T) {
        if ((S = T.call(t, c, u, l, f, p)) === Vt) break;
        if (!1 === S) {
          if (!d) {
            f.pop();
            continue;
          }
        } else if (void 0 !== S && (s.push([u, S]), !d)) {
          if (!pt(S)) {
            f.pop();
            continue;
          }
          c = S;
        }
      }
    }
    if ((void 0 === S && y && s.push([u, c]), d)) f.pop();
    else
      (n = { inArray: i, index: a, keys: o, edits: s, prev: n }),
        (o = (i = Array.isArray(c))
          ? c
          : null !== (k = r[c.kind]) && void 0 !== k
          ? k
          : []),
        (a = -1),
        (s = []),
        l && p.push(l),
        (l = c);
  } while (void 0 !== n);
  return 0 !== s.length && (h = s[s.length - 1][1]), h;
}
function qt(e, t, r) {
  var n = e[t];
  if (n) {
    if (!r && "function" == typeof n) return n;
    var i = r ? n.leave : n.enter;
    if ("function" == typeof i) return i;
  } else {
    var o = r ? e.leave : e.enter;
    if (o) {
      if ("function" == typeof o) return o;
      var a = o[t];
      if ("function" == typeof a) return a;
    }
  }
}
function Qt(e) {
  return Lt(e, { leave: Bt });
}
var Bt = {
  Name: function (e) {
    return e.value;
  },
  Variable: function (e) {
    return "$" + e.name;
  },
  Document: function (e) {
    return $t(e.definitions, "\n\n") + "\n";
  },
  OperationDefinition: function (e) {
    var t = e.operation,
      r = e.name,
      n = Kt("(", $t(e.variableDefinitions, ", "), ")"),
      i = $t(e.directives, " "),
      o = e.selectionSet;
    return r || i || n || "query" !== t ? $t([t, $t([r, n]), i, o], " ") : o;
  },
  VariableDefinition: function (e) {
    var t = e.variable,
      r = e.type,
      n = e.defaultValue,
      i = e.directives;
    return t + ": " + r + Kt(" = ", n) + Kt(" ", $t(i, " "));
  },
  SelectionSet: function (e) {
    return zt(e.selections);
  },
  Field: function (e) {
    var t = e.alias,
      r = e.name,
      n = e.arguments,
      i = e.directives,
      o = e.selectionSet,
      a = Kt("", t, ": ") + r,
      s = a + Kt("(", $t(n, ", "), ")");
    return (
      s.length > 80 && (s = a + Kt("(\n", Wt($t(n, "\n")), "\n)")),
      $t([s, $t(i, " "), o], " ")
    );
  },
  Argument: function (e) {
    return e.name + ": " + e.value;
  },
  FragmentSpread: function (e) {
    return "..." + e.name + Kt(" ", $t(e.directives, " "));
  },
  InlineFragment: function (e) {
    var t = e.typeCondition,
      r = e.directives,
      n = e.selectionSet;
    return $t(["...", Kt("on ", t), $t(r, " "), n], " ");
  },
  FragmentDefinition: function (e) {
    var t = e.name,
      r = e.typeCondition,
      n = e.variableDefinitions,
      i = e.directives,
      o = e.selectionSet;
    return (
      "fragment ".concat(t).concat(Kt("(", $t(n, ", "), ")"), " ") +
      "on ".concat(r, " ").concat(Kt("", $t(i, " "), " ")) +
      o
    );
  },
  IntValue: function (e) {
    return e.value;
  },
  FloatValue: function (e) {
    return e.value;
  },
  StringValue: function (e, t) {
    var r = e.value;
    return e.block
      ? (function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = -1 === e.indexOf("\n"),
            i = " " === e[0] || "\t" === e[0],
            o = '"' === e[e.length - 1],
            a = "\\" === e[e.length - 1],
            s = !n || o || a || r,
            c = "";
          return (
            !s || (n && i) || (c += "\n" + t),
            (c += t ? e.replace(/\n/g, "\n" + t) : e),
            s && (c += "\n"),
            '"""' + c.replace(/"""/g, '\\"""') + '"""'
          );
        })(r, "description" === t ? "" : "  ")
      : JSON.stringify(r);
  },
  BooleanValue: function (e) {
    return e.value ? "true" : "false";
  },
  NullValue: function () {
    return "null";
  },
  EnumValue: function (e) {
    return e.value;
  },
  ListValue: function (e) {
    return "[" + $t(e.values, ", ") + "]";
  },
  ObjectValue: function (e) {
    return "{" + $t(e.fields, ", ") + "}";
  },
  ObjectField: function (e) {
    return e.name + ": " + e.value;
  },
  Directive: function (e) {
    return "@" + e.name + Kt("(", $t(e.arguments, ", "), ")");
  },
  NamedType: function (e) {
    return e.name;
  },
  ListType: function (e) {
    return "[" + e.type + "]";
  },
  NonNullType: function (e) {
    return e.type + "!";
  },
  SchemaDefinition: Ut(function (e) {
    var t = e.directives,
      r = e.operationTypes;
    return $t(["schema", $t(t, " "), zt(r)], " ");
  }),
  OperationTypeDefinition: function (e) {
    return e.operation + ": " + e.type;
  },
  ScalarTypeDefinition: Ut(function (e) {
    return $t(["scalar", e.name, $t(e.directives, " ")], " ");
  }),
  ObjectTypeDefinition: Ut(function (e) {
    var t = e.name,
      r = e.interfaces,
      n = e.directives,
      i = e.fields;
    return $t(
      ["type", t, Kt("implements ", $t(r, " & ")), $t(n, " "), zt(i)],
      " "
    );
  }),
  FieldDefinition: Ut(function (e) {
    var t = e.name,
      r = e.arguments,
      n = e.type,
      i = e.directives;
    return (
      t +
      (Yt(r) ? Kt("(\n", Wt($t(r, "\n")), "\n)") : Kt("(", $t(r, ", "), ")")) +
      ": " +
      n +
      Kt(" ", $t(i, " "))
    );
  }),
  InputValueDefinition: Ut(function (e) {
    var t = e.name,
      r = e.type,
      n = e.defaultValue,
      i = e.directives;
    return $t([t + ": " + r, Kt("= ", n), $t(i, " ")], " ");
  }),
  InterfaceTypeDefinition: Ut(function (e) {
    var t = e.name,
      r = e.interfaces,
      n = e.directives,
      i = e.fields;
    return $t(
      ["interface", t, Kt("implements ", $t(r, " & ")), $t(n, " "), zt(i)],
      " "
    );
  }),
  UnionTypeDefinition: Ut(function (e) {
    var t = e.name,
      r = e.directives,
      n = e.types;
    return $t(
      ["union", t, $t(r, " "), n && 0 !== n.length ? "= " + $t(n, " | ") : ""],
      " "
    );
  }),
  EnumTypeDefinition: Ut(function (e) {
    var t = e.name,
      r = e.directives,
      n = e.values;
    return $t(["enum", t, $t(r, " "), zt(n)], " ");
  }),
  EnumValueDefinition: Ut(function (e) {
    return $t([e.name, $t(e.directives, " ")], " ");
  }),
  InputObjectTypeDefinition: Ut(function (e) {
    var t = e.name,
      r = e.directives,
      n = e.fields;
    return $t(["input", t, $t(r, " "), zt(n)], " ");
  }),
  DirectiveDefinition: Ut(function (e) {
    var t = e.name,
      r = e.arguments,
      n = e.repeatable,
      i = e.locations;
    return (
      "directive @" +
      t +
      (Yt(r) ? Kt("(\n", Wt($t(r, "\n")), "\n)") : Kt("(", $t(r, ", "), ")")) +
      (n ? " repeatable" : "") +
      " on " +
      $t(i, " | ")
    );
  }),
  SchemaExtension: function (e) {
    var t = e.directives,
      r = e.operationTypes;
    return $t(["extend schema", $t(t, " "), zt(r)], " ");
  },
  ScalarTypeExtension: function (e) {
    return $t(["extend scalar", e.name, $t(e.directives, " ")], " ");
  },
  ObjectTypeExtension: function (e) {
    var t = e.name,
      r = e.interfaces,
      n = e.directives,
      i = e.fields;
    return $t(
      ["extend type", t, Kt("implements ", $t(r, " & ")), $t(n, " "), zt(i)],
      " "
    );
  },
  InterfaceTypeExtension: function (e) {
    var t = e.name,
      r = e.interfaces,
      n = e.directives,
      i = e.fields;
    return $t(
      [
        "extend interface",
        t,
        Kt("implements ", $t(r, " & ")),
        $t(n, " "),
        zt(i),
      ],
      " "
    );
  },
  UnionTypeExtension: function (e) {
    var t = e.name,
      r = e.directives,
      n = e.types;
    return $t(
      [
        "extend union",
        t,
        $t(r, " "),
        n && 0 !== n.length ? "= " + $t(n, " | ") : "",
      ],
      " "
    );
  },
  EnumTypeExtension: function (e) {
    var t = e.name,
      r = e.directives,
      n = e.values;
    return $t(["extend enum", t, $t(r, " "), zt(n)], " ");
  },
  InputObjectTypeExtension: function (e) {
    var t = e.name,
      r = e.directives,
      n = e.fields;
    return $t(["extend input", t, $t(r, " "), zt(n)], " ");
  },
};
function Ut(e) {
  return function (t) {
    return $t([t.description, e(t)], "\n");
  };
}
function $t(e) {
  var t,
    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  return null !==
    (t =
      null == e
        ? void 0
        : e
            .filter(function (e) {
              return e;
            })
            .join(r)) && void 0 !== t
    ? t
    : "";
}
function zt(e) {
  return Kt("{\n", Wt($t(e, "\n")), "\n}");
}
function Kt(e, t) {
  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
  return null != t && "" !== t ? e + t + r : "";
}
function Wt(e) {
  return Kt("  ", e.replace(/\n/g, "\n  "));
}
function Gt(e) {
  return -1 !== e.indexOf("\n");
}
function Yt(e) {
  return null != e && e.some(Gt);
}
function Jt(e, t) {
  var r = e.directives;
  return (
    !r ||
    !r.length ||
    (function (e) {
      var t = [];
      e &&
        e.length &&
        e.forEach(function (e) {
          if (
            (function (e) {
              var t = e.name.value;
              return "skip" === t || "include" === t;
            })(e)
          ) {
            var r = e.arguments,
              n = e.name.value;
            __DEV__
              ? Fe(
                  r && 1 === r.length,
                  "Incorrect number of arguments for the @" + n + " directive."
                )
              : Fe(r && 1 === r.length, 40);
            var i = r[0];
            __DEV__
              ? Fe(
                  i.name && "if" === i.name.value,
                  "Invalid argument for the @" + n + " directive."
                )
              : Fe(i.name && "if" === i.name.value, 41);
            var o = i.value;
            __DEV__
              ? Fe(
                  o && ("Variable" === o.kind || "BooleanValue" === o.kind),
                  "Argument for the @" +
                    n +
                    " directive must be a variable or a boolean value."
                )
              : Fe(
                  o && ("Variable" === o.kind || "BooleanValue" === o.kind),
                  42
                ),
              t.push({ directive: e, ifArgument: i });
          }
        });
      return t;
    })(r).every(function (e) {
      var r = e.directive,
        n = e.ifArgument,
        i = !1;
      return (
        "Variable" === n.value.kind
          ? ((i = t && t[n.value.name.value]),
            __DEV__
              ? Fe(
                  void 0 !== i,
                  "Invalid variable referenced in @" +
                    r.name.value +
                    " directive."
                )
              : Fe(void 0 !== i, 39))
          : (i = n.value.value),
        "skip" === r.name.value ? !i : i
      );
    })
  );
}
function Ht(e, t) {
  return (function (e) {
    var t = [];
    return (
      Lt(e, {
        Directive: function (e) {
          t.push(e.name.value);
        },
      }),
      t
    );
  })(t).some(function (t) {
    return e.indexOf(t) > -1;
  });
}
function Xt(e) {
  return e && Ht(["client"], e) && Ht(["export"], e);
}
function Zt(e, t) {
  var r = t,
    n = [];
  return (
    e.definitions.forEach(function (e) {
      if ("OperationDefinition" === e.kind)
        throw __DEV__
          ? new Ce(
              "Found a " +
                e.operation +
                " operation" +
                (e.name ? " named '" + e.name.value + "'" : "") +
                ". No operations are allowed when using a fragment as a query. Only fragments are allowed."
            )
          : new Ce(43);
      "FragmentDefinition" === e.kind && n.push(e);
    }),
    void 0 === r &&
      (__DEV__
        ? Fe(
            1 === n.length,
            "Found " +
              n.length +
              " fragments. `fragmentName` must be provided when there is not exactly 1 fragment."
          )
        : Fe(1 === n.length, 44),
      (r = n[0].name.value)),
    Te(Te({}, e), {
      definitions: Ie(
        [
          {
            kind: "OperationDefinition",
            operation: "query",
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: r } },
              ],
            },
          },
        ],
        e.definitions
      ),
    })
  );
}
function er(e) {
  void 0 === e && (e = []);
  var t = {};
  return (
    e.forEach(function (e) {
      t[e.name.value] = e;
    }),
    t
  );
}
function tr(e, t) {
  switch (e.kind) {
    case "InlineFragment":
      return e;
    case "FragmentSpread":
      var r = t && t[e.name.value];
      return (
        __DEV__ ? Fe(r, "No fragment named " + e.name.value + ".") : Fe(r, 45),
        r
      );
    default:
      return null;
  }
}
function rr(e) {
  return null !== e && "object" == typeof e;
}
function nr(e) {
  return { __ref: String(e) };
}
function ir(e) {
  return Boolean(e && "object" == typeof e && "string" == typeof e.__ref);
}
function or(e, t, r, n) {
  if (
    (function (e) {
      return "IntValue" === e.kind;
    })(r) ||
    (function (e) {
      return "FloatValue" === e.kind;
    })(r)
  )
    e[t.value] = Number(r.value);
  else if (
    (function (e) {
      return "BooleanValue" === e.kind;
    })(r) ||
    (function (e) {
      return "StringValue" === e.kind;
    })(r)
  )
    e[t.value] = r.value;
  else if (
    (function (e) {
      return "ObjectValue" === e.kind;
    })(r)
  ) {
    var i = {};
    r.fields.map(function (e) {
      return or(i, e.name, e.value, n);
    }),
      (e[t.value] = i);
  } else if (
    (function (e) {
      return "Variable" === e.kind;
    })(r)
  ) {
    var o = (n || {})[r.name.value];
    e[t.value] = o;
  } else if (
    (function (e) {
      return "ListValue" === e.kind;
    })(r)
  )
    e[t.value] = r.values.map(function (e) {
      var r = {};
      return or(r, t, e, n), r[t.value];
    });
  else if (
    (function (e) {
      return "EnumValue" === e.kind;
    })(r)
  )
    e[t.value] = r.value;
  else {
    if (
      !(function (e) {
        return "NullValue" === e.kind;
      })(r)
    )
      throw __DEV__
        ? new Ce(
            'The inline argument "' +
              t.value +
              '" of kind "' +
              r.kind +
              '"is not supported. Use variables instead of inline arguments to overcome this limitation.'
          )
        : new Ce(54);
    e[t.value] = null;
  }
}
Be && (delete Qe.process, (Be = !1));
var ar = ["connection", "include", "skip", "client", "rest", "export"],
  sr = Object.assign(
    function (e, t, r) {
      if (t && r && r.connection && r.connection.key) {
        if (r.connection.filter && r.connection.filter.length > 0) {
          var n = r.connection.filter ? r.connection.filter : [];
          n.sort();
          var i = {};
          return (
            n.forEach(function (e) {
              i[e] = t[e];
            }),
            r.connection.key + "(" + cr(i) + ")"
          );
        }
        return r.connection.key;
      }
      var o = e;
      if (t) {
        var a = cr(t);
        o += "(" + a + ")";
      }
      return (
        r &&
          Object.keys(r).forEach(function (e) {
            -1 === ar.indexOf(e) &&
              (r[e] && Object.keys(r[e]).length
                ? (o += "@" + e + "(" + cr(r[e]) + ")")
                : (o += "@" + e));
          }),
        o
      );
    },
    {
      setStringify: function (e) {
        var t = cr;
        return (cr = e), t;
      },
    }
  ),
  cr = function (e) {
    return JSON.stringify(e, ur);
  };
function ur(e, t) {
  return (
    rr(t) &&
      !Array.isArray(t) &&
      (t = Object.keys(t)
        .sort()
        .reduce(function (e, r) {
          return (e[r] = t[r]), e;
        }, {})),
    t
  );
}
function lr(e, t) {
  if (e.arguments && e.arguments.length) {
    var r = {};
    return (
      e.arguments.forEach(function (e) {
        var n = e.name,
          i = e.value;
        return or(r, n, i, t);
      }),
      r
    );
  }
  return null;
}
function fr(e) {
  return e.alias ? e.alias.value : e.name.value;
}
function pr(e, t, r) {
  if ("string" == typeof e.__typename) return e.__typename;
  for (var n = 0, i = t.selections; n < i.length; n++) {
    var o = i[n];
    if (hr(o)) {
      if ("__typename" === o.name.value) return e[fr(o)];
    } else {
      var a = pr(e, tr(o, r).selectionSet, r);
      if ("string" == typeof a) return a;
    }
  }
}
function hr(e) {
  return "Field" === e.kind;
}
function dr(e) {
  return "InlineFragment" === e.kind;
}
function yr(e) {
  __DEV__
    ? Fe(
        e && "Document" === e.kind,
        'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'
      )
    : Fe(e && "Document" === e.kind, 46);
  var t = e.definitions
    .filter(function (e) {
      return "FragmentDefinition" !== e.kind;
    })
    .map(function (e) {
      if ("OperationDefinition" !== e.kind)
        throw __DEV__
          ? new Ce(
              'Schema type definitions not allowed in queries. Found: "' +
                e.kind +
                '"'
            )
          : new Ce(47);
      return e;
    });
  return (
    __DEV__
      ? Fe(
          t.length <= 1,
          "Ambiguous GraphQL document: contains " + t.length + " operations"
        )
      : Fe(t.length <= 1, 48),
    e
  );
}
function vr(e) {
  return (
    yr(e),
    e.definitions.filter(function (e) {
      return "OperationDefinition" === e.kind;
    })[0]
  );
}
function mr(e) {
  return (
    e.definitions
      .filter(function (e) {
        return "OperationDefinition" === e.kind && e.name;
      })
      .map(function (e) {
        return e.name.value;
      })[0] || null
  );
}
function br(e) {
  return e.definitions.filter(function (e) {
    return "FragmentDefinition" === e.kind;
  });
}
function gr(e) {
  var t = vr(e);
  return (
    __DEV__
      ? Fe(t && "query" === t.operation, "Must contain a query definition.")
      : Fe(t && "query" === t.operation, 49),
    t
  );
}
function _r(e) {
  var t;
  yr(e);
  for (var r = 0, n = e.definitions; r < n.length; r++) {
    var i = n[r];
    if ("OperationDefinition" === i.kind) {
      var o = i.operation;
      if ("query" === o || "mutation" === o || "subscription" === o) return i;
    }
    "FragmentDefinition" !== i.kind || t || (t = i);
  }
  if (t) return t;
  throw __DEV__
    ? new Ce(
        "Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment."
      )
    : new Ce(53);
}
function Er(e) {
  var t = Object.create(null),
    r = e && e.variableDefinitions;
  return (
    r &&
      r.length &&
      r.forEach(function (e) {
        e.defaultValue && or(t, e.variable.name, e.defaultValue);
      }),
    t
  );
}
function wr(e, t, r) {
  var n = 0;
  return (
    e.forEach(function (r, i) {
      t.call(this, r, i, e) && (e[n++] = r);
    }, r),
    (e.length = n),
    e
  );
}
var Or = { kind: "Field", name: { kind: "Name", value: "__typename" } };
function kr(e, t) {
  return e.selectionSet.selections.every(function (e) {
    return "FragmentSpread" === e.kind && kr(t[e.name.value], t);
  });
}
function Sr(e) {
  return kr(
    vr(e) ||
      (function (e) {
        __DEV__
          ? Fe(
              "Document" === e.kind,
              'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'
            )
          : Fe("Document" === e.kind, 50),
          __DEV__
            ? Fe(
                e.definitions.length <= 1,
                "Fragment must have exactly one definition."
              )
            : Fe(e.definitions.length <= 1, 51);
        var t = e.definitions[0];
        return (
          __DEV__
            ? Fe(
                "FragmentDefinition" === t.kind,
                "Must be a fragment definition."
              )
            : Fe("FragmentDefinition" === t.kind, 52),
          t
        );
      })(e),
    er(br(e))
  )
    ? null
    : e;
}
function Tr(e) {
  return function (t) {
    return e.some(function (e) {
      return (e.name && e.name === t.name.value) || (e.test && e.test(t));
    });
  };
}
function Dr(e, t) {
  var r = Object.create(null),
    n = [],
    i = Object.create(null),
    o = [],
    a = Sr(
      Lt(t, {
        Variable: {
          enter: function (e, t, n) {
            "VariableDefinition" !== n.kind && (r[e.name.value] = !0);
          },
        },
        Field: {
          enter: function (t) {
            if (
              e &&
              t.directives &&
              e.some(function (e) {
                return e.remove;
              }) &&
              t.directives &&
              t.directives.some(Tr(e))
            )
              return (
                t.arguments &&
                  t.arguments.forEach(function (e) {
                    "Variable" === e.value.kind &&
                      n.push({ name: e.value.name.value });
                  }),
                t.selectionSet &&
                  Ir(t.selectionSet).forEach(function (e) {
                    o.push({ name: e.name.value });
                  }),
                null
              );
          },
        },
        FragmentSpread: {
          enter: function (e) {
            i[e.name.value] = !0;
          },
        },
        Directive: {
          enter: function (t) {
            if (Tr(e)(t)) return null;
          },
        },
      })
    );
  return (
    a &&
      wr(n, function (e) {
        return !!e.name && !r[e.name];
      }).length &&
      (a = (function (e, t) {
        var r = (function (e) {
          return function (t) {
            return e.some(function (e) {
              return (
                t.value &&
                "Variable" === t.value.kind &&
                t.value.name &&
                (e.name === t.value.name.value || (e.test && e.test(t)))
              );
            });
          };
        })(e);
        return Sr(
          Lt(t, {
            OperationDefinition: {
              enter: function (t) {
                return Te(Te({}, t), {
                  variableDefinitions: t.variableDefinitions
                    ? t.variableDefinitions.filter(function (t) {
                        return !e.some(function (e) {
                          return e.name === t.variable.name.value;
                        });
                      })
                    : [],
                });
              },
            },
            Field: {
              enter: function (t) {
                if (
                  e.some(function (e) {
                    return e.remove;
                  })
                ) {
                  var n = 0;
                  if (
                    (t.arguments &&
                      t.arguments.forEach(function (e) {
                        r(e) && (n += 1);
                      }),
                    1 === n)
                  )
                    return null;
                }
              },
            },
            Argument: {
              enter: function (e) {
                if (r(e)) return null;
              },
            },
          })
        );
      })(n, a)),
    a &&
      wr(o, function (e) {
        return !!e.name && !i[e.name];
      }).length &&
      (a = (function (e, t) {
        function r(t) {
          if (
            e.some(function (e) {
              return e.name === t.name.value;
            })
          )
            return null;
        }
        return Sr(
          Lt(t, {
            FragmentSpread: { enter: r },
            FragmentDefinition: { enter: r },
          })
        );
      })(o, a)),
    a
  );
}
var xr = Object.assign(
    function (e) {
      return Lt(yr(e), {
        SelectionSet: {
          enter: function (e, t, r) {
            if (!r || "OperationDefinition" !== r.kind) {
              var n = e.selections;
              if (n)
                if (
                  !n.some(function (e) {
                    return (
                      hr(e) &&
                      ("__typename" === e.name.value ||
                        0 === e.name.value.lastIndexOf("__", 0))
                    );
                  })
                ) {
                  var i = r;
                  if (
                    !(
                      hr(i) &&
                      i.directives &&
                      i.directives.some(function (e) {
                        return "export" === e.name.value;
                      })
                    )
                  )
                    return Te(Te({}, e), { selections: Ie(Ie([], n), [Or]) });
                }
            }
          },
        },
      });
    },
    {
      added: function (e) {
        return e === Or;
      },
    }
  ),
  Nr = {
    test: function (e) {
      var t = "connection" === e.name.value;
      return (
        t &&
          ((e.arguments &&
            e.arguments.some(function (e) {
              return "key" === e.name.value;
            })) ||
            (__DEV__ &&
              Fe.warn(
                "Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key."
              ))),
        t
      );
    },
  };
function Ir(e) {
  var t = [];
  return (
    e.selections.forEach(function (e) {
      (hr(e) || dr(e)) && e.selectionSet
        ? Ir(e.selectionSet).forEach(function (e) {
            return t.push(e);
          })
        : "FragmentSpread" === e.kind && t.push(e);
    }),
    t
  );
}
function Ar(e) {
  return "query" === _r(e).operation
    ? e
    : Lt(e, {
        OperationDefinition: {
          enter: function (e) {
            return Te(Te({}, e), { operation: "query" });
          },
        },
      });
}
var Rr = Object.prototype.hasOwnProperty;
function Cr() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return Fr(e);
}
function Fr(e) {
  var t = e[0] || {},
    r = e.length;
  if (r > 1) for (var n = new jr(), i = 1; i < r; ++i) t = n.merge(t, e[i]);
  return t;
}
var Pr = function (e, t, r) {
    return this.merge(e[r], t[r]);
  },
  jr = (function () {
    function e(e) {
      void 0 === e && (e = Pr),
        (this.reconciler = e),
        (this.isObject = rr),
        (this.pastCopies = new Set());
    }
    return (
      (e.prototype.merge = function (e, t) {
        for (var r = this, n = [], i = 2; i < arguments.length; i++)
          n[i - 2] = arguments[i];
        return rr(t) && rr(e)
          ? (Object.keys(t).forEach(function (i) {
              if (Rr.call(e, i)) {
                var o = e[i];
                if (t[i] !== o) {
                  var a = r.reconciler.apply(r, Ie([e, t, i], n));
                  a !== o && ((e = r.shallowCopyForMerge(e))[i] = a);
                }
              } else (e = r.shallowCopyForMerge(e))[i] = t[i];
            }),
            e)
          : t;
      }),
      (e.prototype.shallowCopyForMerge = function (e) {
        return (
          rr(e) &&
            !this.pastCopies.has(e) &&
            ((e = Array.isArray(e)
              ? e.slice(0)
              : Te({ __proto__: Object.getPrototypeOf(e) }, e)),
            this.pastCopies.add(e)),
          e
        );
      }),
      e
    );
  })();
function Mr(e, t) {
  var r =
    ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (
    Array.isArray(e) ||
    (r = (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return Vr(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === r && e.constructor && (r = e.constructor.name);
      if ("Map" === r || "Set" === r) return Array.from(e);
      if (
        "Arguments" === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return Vr(e, t);
    })(e)) ||
    (t && e && "number" == typeof e.length)
  ) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(
    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function Vr(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Lr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function qr(e, t, r) {
  return t && Lr(e.prototype, t), r && Lr(e, r), e;
}
var Qr = function () {
    return "function" == typeof Symbol;
  },
  Br = function (e) {
    return Qr() && Boolean(Symbol[e]);
  },
  Ur = function (e) {
    return Br(e) ? Symbol[e] : "@@" + e;
  };
Qr() && !Br("observable") && (Symbol.observable = Symbol("observable"));
var $r = Ur("iterator"),
  zr = Ur("observable"),
  Kr = Ur("species");
function Wr(e, t) {
  var r = e[t];
  if (null != r) {
    if ("function" != typeof r) throw new TypeError(r + " is not a function");
    return r;
  }
}
function Gr(e) {
  var t = e.constructor;
  return (
    void 0 !== t && null === (t = t[Kr]) && (t = void 0), void 0 !== t ? t : nn
  );
}
function Yr(e) {
  Yr.log
    ? Yr.log(e)
    : setTimeout(function () {
        throw e;
      });
}
function Jr(e) {
  Promise.resolve().then(function () {
    try {
      e();
    } catch (t) {
      Yr(t);
    }
  });
}
function Hr(e) {
  var t = e._cleanup;
  if (void 0 !== t && ((e._cleanup = void 0), t))
    try {
      if ("function" == typeof t) t();
      else {
        var r = Wr(t, "unsubscribe");
        r && r.call(t);
      }
    } catch (n) {
      Yr(n);
    }
}
function Xr(e) {
  (e._observer = void 0), (e._queue = void 0), (e._state = "closed");
}
function Zr(e, t, r) {
  e._state = "running";
  var n = e._observer;
  try {
    var i = Wr(n, t);
    switch (t) {
      case "next":
        i && i.call(n, r);
        break;
      case "error":
        if ((Xr(e), !i)) throw r;
        i.call(n, r);
        break;
      case "complete":
        Xr(e), i && i.call(n);
    }
  } catch (o) {
    Yr(o);
  }
  "closed" === e._state
    ? Hr(e)
    : "running" === e._state && (e._state = "ready");
}
function en(e, t, r) {
  if ("closed" !== e._state) {
    if ("buffering" !== e._state)
      return "ready" !== e._state
        ? ((e._state = "buffering"),
          (e._queue = [{ type: t, value: r }]),
          void Jr(function () {
            return (function (e) {
              var t = e._queue;
              if (t) {
                (e._queue = void 0), (e._state = "ready");
                for (
                  var r = 0;
                  r < t.length &&
                  (Zr(e, t[r].type, t[r].value), "closed" !== e._state);
                  ++r
                );
              }
            })(e);
          }))
        : void Zr(e, t, r);
    e._queue.push({ type: t, value: r });
  }
}
var tn = (function () {
    function e(e, t) {
      (this._cleanup = void 0),
        (this._observer = e),
        (this._queue = void 0),
        (this._state = "initializing");
      var r = new rn(this);
      try {
        this._cleanup = t.call(void 0, r);
      } catch (n) {
        r.error(n);
      }
      "initializing" === this._state && (this._state = "ready");
    }
    return (
      (e.prototype.unsubscribe = function () {
        "closed" !== this._state && (Xr(this), Hr(this));
      }),
      qr(e, [
        {
          key: "closed",
          get: function () {
            return "closed" === this._state;
          },
        },
      ]),
      e
    );
  })(),
  rn = (function () {
    function e(e) {
      this._subscription = e;
    }
    var t = e.prototype;
    return (
      (t.next = function (e) {
        en(this._subscription, "next", e);
      }),
      (t.error = function (e) {
        en(this._subscription, "error", e);
      }),
      (t.complete = function () {
        en(this._subscription, "complete");
      }),
      qr(e, [
        {
          key: "closed",
          get: function () {
            return "closed" === this._subscription._state;
          },
        },
      ]),
      e
    );
  })(),
  nn = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Observable cannot be called as a function");
      if ("function" != typeof t)
        throw new TypeError("Observable initializer must be a function");
      this._subscriber = t;
    }
    var t = e.prototype;
    return (
      (t.subscribe = function (e) {
        return (
          ("object" == typeof e && null !== e) ||
            (e = { next: e, error: arguments[1], complete: arguments[2] }),
          new tn(e, this._subscriber)
        );
      }),
      (t.forEach = function (e) {
        var t = this;
        return new Promise(function (r, n) {
          if ("function" == typeof e)
            var i = t.subscribe({
              next: function (t) {
                try {
                  e(t, o);
                } catch (r) {
                  n(r), i.unsubscribe();
                }
              },
              error: n,
              complete: r,
            });
          else n(new TypeError(e + " is not a function"));
          function o() {
            i.unsubscribe(), r();
          }
        });
      }),
      (t.map = function (e) {
        var t = this;
        if ("function" != typeof e)
          throw new TypeError(e + " is not a function");
        return new (Gr(this))(function (r) {
          return t.subscribe({
            next: function (t) {
              try {
                t = e(t);
              } catch (n) {
                return r.error(n);
              }
              r.next(t);
            },
            error: function (e) {
              r.error(e);
            },
            complete: function () {
              r.complete();
            },
          });
        });
      }),
      (t.filter = function (e) {
        var t = this;
        if ("function" != typeof e)
          throw new TypeError(e + " is not a function");
        return new (Gr(this))(function (r) {
          return t.subscribe({
            next: function (t) {
              try {
                if (!e(t)) return;
              } catch (n) {
                return r.error(n);
              }
              r.next(t);
            },
            error: function (e) {
              r.error(e);
            },
            complete: function () {
              r.complete();
            },
          });
        });
      }),
      (t.reduce = function (e) {
        var t = this;
        if ("function" != typeof e)
          throw new TypeError(e + " is not a function");
        var r = Gr(this),
          n = arguments.length > 1,
          i = !1,
          o = arguments[1],
          a = o;
        return new r(function (r) {
          return t.subscribe({
            next: function (t) {
              var o = !i;
              if (((i = !0), !o || n))
                try {
                  a = e(a, t);
                } catch (s) {
                  return r.error(s);
                }
              else a = t;
            },
            error: function (e) {
              r.error(e);
            },
            complete: function () {
              if (!i && !n)
                return r.error(
                  new TypeError("Cannot reduce an empty sequence")
                );
              r.next(a), r.complete();
            },
          });
        });
      }),
      (t.concat = function () {
        for (
          var e = this, t = arguments.length, r = new Array(t), n = 0;
          n < t;
          n++
        )
          r[n] = arguments[n];
        var i = Gr(this);
        return new i(function (t) {
          var n,
            o = 0;
          return (
            (function e(a) {
              n = a.subscribe({
                next: function (e) {
                  t.next(e);
                },
                error: function (e) {
                  t.error(e);
                },
                complete: function () {
                  o === r.length
                    ? ((n = void 0), t.complete())
                    : e(i.from(r[o++]));
                },
              });
            })(e),
            function () {
              n && (n.unsubscribe(), (n = void 0));
            }
          );
        });
      }),
      (t.flatMap = function (e) {
        var t = this;
        if ("function" != typeof e)
          throw new TypeError(e + " is not a function");
        var r = Gr(this);
        return new r(function (n) {
          var i = [],
            o = t.subscribe({
              next: function (t) {
                if (e)
                  try {
                    t = e(t);
                  } catch (s) {
                    return n.error(s);
                  }
                var o = r.from(t).subscribe({
                  next: function (e) {
                    n.next(e);
                  },
                  error: function (e) {
                    n.error(e);
                  },
                  complete: function () {
                    var e = i.indexOf(o);
                    e >= 0 && i.splice(e, 1), a();
                  },
                });
                i.push(o);
              },
              error: function (e) {
                n.error(e);
              },
              complete: function () {
                a();
              },
            });
          function a() {
            o.closed && 0 === i.length && n.complete();
          }
          return function () {
            i.forEach(function (e) {
              return e.unsubscribe();
            }),
              o.unsubscribe();
          };
        });
      }),
      (t[zr] = function () {
        return this;
      }),
      (e.from = function (t) {
        var r = "function" == typeof this ? this : e;
        if (null == t) throw new TypeError(t + " is not an object");
        var n = Wr(t, zr);
        if (n) {
          var i = n.call(t);
          if (Object(i) !== i) throw new TypeError(i + " is not an object");
          return (function (e) {
            return e instanceof nn;
          })(i) && i.constructor === r
            ? i
            : new r(function (e) {
                return i.subscribe(e);
              });
        }
        if (Br("iterator") && (n = Wr(t, $r)))
          return new r(function (e) {
            Jr(function () {
              if (!e.closed) {
                for (var r, i = Mr(n.call(t)); !(r = i()).done; ) {
                  var o = r.value;
                  if ((e.next(o), e.closed)) return;
                }
                e.complete();
              }
            });
          });
        if (Array.isArray(t))
          return new r(function (e) {
            Jr(function () {
              if (!e.closed) {
                for (var r = 0; r < t.length; ++r)
                  if ((e.next(t[r]), e.closed)) return;
                e.complete();
              }
            });
          });
        throw new TypeError(t + " is not observable");
      }),
      (e.of = function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        var i = "function" == typeof this ? this : e;
        return new i(function (e) {
          Jr(function () {
            if (!e.closed) {
              for (var t = 0; t < r.length; ++t)
                if ((e.next(r[t]), e.closed)) return;
              e.complete();
            }
          });
        });
      }),
      qr(e, null, [
        {
          key: Kr,
          get: function () {
            return this;
          },
        },
      ]),
      e
    );
  })();
Qr() &&
  Object.defineProperty(nn, Symbol("extensions"), {
    value: { symbol: zr, hostReportError: Yr },
    configurable: !0,
  }),
  (function (e) {
    var t,
      r = e.Symbol;
    if ("function" == typeof r)
      if (r.observable) t = r.observable;
      else {
        t =
          "function" == typeof r.for
            ? r.for("https://github.com/benlesh/symbol-observable")
            : r("https://github.com/benlesh/symbol-observable");
        try {
          r.observable = t;
        } catch (n) {}
      }
    else t = "@@observable";
  })(
    "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof module
      ? module
      : Function("return this")()
  );
var on = nn.prototype;
on["@@observable"] ||
  (on["@@observable"] = function () {
    return this;
  });
var an = Object.prototype.toString;
function sn(e) {
  return cn(e);
}
function cn(e, t) {
  switch (an.call(e)) {
    case "[object Array]":
      if ((t = t || new Map()).has(e)) return t.get(e);
      var r = e.slice(0);
      return (
        t.set(e, r),
        r.forEach(function (e, n) {
          r[n] = cn(e, t);
        }),
        r
      );
    case "[object Object]":
      if ((t = t || new Map()).has(e)) return t.get(e);
      var n = Object.create(Object.getPrototypeOf(e));
      return (
        t.set(e, n),
        Object.keys(e).forEach(function (r) {
          n[r] = cn(e[r], t);
        }),
        n
      );
    default:
      return e;
  }
}
function un(e) {
  var t, r;
  return (
    __DEV__ &&
      ((t = e),
      (r = new Set([t])).forEach(function (e) {
        rr(e) &&
          (Object.isFrozen(e) || Object.freeze(e),
          Object.getOwnPropertyNames(e).forEach(function (t) {
            rr(e[t]) && r.add(e[t]);
          }));
      })),
    e
  );
}
function ln(e, t, r) {
  var n = [];
  e.forEach(function (e) {
    return e[t] && n.push(e);
  }),
    n.forEach(function (e) {
      return e[t](r);
    });
}
function fn(e, t, r) {
  return new nn(function (n) {
    var i = n.next,
      o = n.error,
      a = n.complete,
      s = 0,
      c = !1,
      u = {
        then: function (e) {
          return new Promise(function (t) {
            return t(e());
          });
        },
      };
    function l(e, t) {
      return e
        ? function (t) {
            ++s;
            var r = function () {
              return e(t);
            };
            u = u
              .then(r, r)
              .then(
                function (e) {
                  --s, i && i.call(n, e), c && f.complete();
                },
                function (e) {
                  throw (--s, e);
                }
              )
              .catch(function (e) {
                o && o.call(n, e);
              });
          }
        : function (e) {
            return t && t.call(n, e);
          };
    }
    var f = {
        next: l(t, i),
        error: l(r, o),
        complete: function () {
          (c = !0), s || (a && a.call(n));
        },
      },
      p = e.subscribe(f);
    return function () {
      return p.unsubscribe();
    };
  });
}
function pn(e) {
  function t(t) {
    Object.defineProperty(e, t, { value: nn });
  }
  return (
    "function" == typeof Symbol && Symbol.species && t(Symbol.species),
    t("@@species"),
    e
  );
}
function hn(e) {
  return e && "function" == typeof e.then;
}
var dn = (function (e) {
  function t(t) {
    var r =
      e.call(this, function (e) {
        return (
          r.addObserver(e),
          function () {
            return r.removeObserver(e);
          }
        );
      }) || this;
    return (
      (r.observers = new Set()),
      (r.addCount = 0),
      (r.promise = new Promise(function (e, t) {
        (r.resolve = e), (r.reject = t);
      })),
      (r.handlers = {
        next: function (e) {
          null !== r.sub &&
            ((r.latest = ["next", e]), ln(r.observers, "next", e));
        },
        error: function (e) {
          var t = r.sub;
          null !== t &&
            (t &&
              setTimeout(function () {
                return t.unsubscribe();
              }),
            (r.sub = null),
            (r.latest = ["error", e]),
            r.reject(e),
            ln(r.observers, "error", e));
        },
        complete: function () {
          if (null !== r.sub) {
            var e = r.sources.shift();
            e
              ? hn(e)
                ? e.then(function (e) {
                    return (r.sub = e.subscribe(r.handlers));
                  })
                : (r.sub = e.subscribe(r.handlers))
              : ((r.sub = null),
                r.latest && "next" === r.latest[0]
                  ? r.resolve(r.latest[1])
                  : r.resolve(),
                ln(r.observers, "complete"));
          }
        },
      }),
      (r.cancel = function (e) {
        r.reject(e), (r.sources = []), r.handlers.complete();
      }),
      r.promise.catch(function (e) {}),
      "function" == typeof t && (t = [new nn(t)]),
      hn(t)
        ? t.then(function (e) {
            return r.start(e);
          }, r.handlers.error)
        : r.start(t),
      r
    );
  }
  return (
    Se(t, e),
    (t.prototype.start = function (e) {
      void 0 === this.sub &&
        ((this.sources = Array.from(e)), this.handlers.complete());
    }),
    (t.prototype.deliverLastMessage = function (e) {
      if (this.latest) {
        var t = this.latest[0],
          r = e[t];
        r && r.call(e, this.latest[1]),
          null === this.sub && "next" === t && e.complete && e.complete();
      }
    }),
    (t.prototype.addObserver = function (e) {
      this.observers.has(e) ||
        (this.deliverLastMessage(e), this.observers.add(e), ++this.addCount);
    }),
    (t.prototype.removeObserver = function (e, t) {
      this.observers.delete(e) &&
        --this.addCount < 1 &&
        !t &&
        this.handlers.error(new Error("Observable cancelled prematurely"));
    }),
    (t.prototype.cleanup = function (e) {
      var t = this,
        r = !1,
        n = function () {
          r || ((r = !0), t.observers.delete(i), e());
        },
        i = { next: n, error: n, complete: n },
        o = this.addCount;
      this.addObserver(i), (this.addCount = o);
    }),
    t
  );
})(nn);
function yn(e) {
  return Array.isArray(e) && e.length > 0;
}
function vn(e) {
  return (e.errors && e.errors.length > 0) || !1;
}
pn(dn);
var mn =
    "function" == typeof WeakMap &&
    !("object" == typeof navigator && "ReactNative" === navigator.product),
  bn = "function" == typeof WeakSet;
function gn() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var r = Object.create(null);
  return (
    e.forEach(function (e) {
      e &&
        Object.keys(e).forEach(function (t) {
          var n = e[t];
          void 0 !== n && (r[t] = n);
        });
    }),
    r
  );
}
var _n = new Map();
function En(e) {
  var t = _n.get(e) || 1;
  return (
    _n.set(e, t + 1), e + ":" + t + ":" + Math.random().toString(36).slice(2)
  );
}
function wn(e) {
  var t = En("stringifyForDisplay");
  return JSON.stringify(e, function (e, r) {
    return void 0 === r ? t : r;
  })
    .split(JSON.stringify(t))
    .join("<undefined>");
}
function On(e) {
  return new nn(function (t) {
    t.error(e);
  });
}
var kn = function (e, t, r) {
  var n = new Error(r);
  throw (
    ((n.name = "ServerError"),
    (n.response = e),
    (n.statusCode = e.status),
    (n.result = t),
    n)
  );
};
function Sn(e, t) {
  return t ? t(e) : nn.of();
}
function Tn(e) {
  return "function" == typeof e ? new Nn(e) : e;
}
function Dn(e) {
  return e.request.length <= 1;
}
var xn = (function (e) {
    function t(t, r) {
      var n = e.call(this, t) || this;
      return (n.link = r), n;
    }
    return Se(t, e), t;
  })(Error),
  Nn = (function () {
    function e(e) {
      e && (this.request = e);
    }
    return (
      (e.empty = function () {
        return new e(function () {
          return nn.of();
        });
      }),
      (e.from = function (t) {
        return 0 === t.length
          ? e.empty()
          : t.map(Tn).reduce(function (e, t) {
              return e.concat(t);
            });
      }),
      (e.split = function (t, r, n) {
        var i = Tn(r),
          o = Tn(n || new e(Sn));
        return Dn(i) && Dn(o)
          ? new e(function (e) {
              return t(e) ? i.request(e) || nn.of() : o.request(e) || nn.of();
            })
          : new e(function (e, r) {
              return t(e)
                ? i.request(e, r) || nn.of()
                : o.request(e, r) || nn.of();
            });
      }),
      (e.execute = function (e, t) {
        return (
          e.request(
            (function (e, t) {
              var r = Te({}, e);
              return (
                Object.defineProperty(t, "setContext", {
                  enumerable: !1,
                  value: function (e) {
                    r = Te(Te({}, r), "function" == typeof e ? e(r) : e);
                  },
                }),
                Object.defineProperty(t, "getContext", {
                  enumerable: !1,
                  value: function () {
                    return Te({}, r);
                  },
                }),
                t
              );
            })(
              t.context,
              (function (e) {
                var t = {
                  variables: e.variables || {},
                  extensions: e.extensions || {},
                  operationName: e.operationName,
                  query: e.query,
                };
                return (
                  t.operationName ||
                    (t.operationName =
                      "string" != typeof t.query ? mr(t.query) || void 0 : ""),
                  t
                );
              })(
                (function (e) {
                  for (
                    var t = [
                        "query",
                        "operationName",
                        "variables",
                        "extensions",
                        "context",
                      ],
                      r = 0,
                      n = Object.keys(e);
                    r < n.length;
                    r++
                  ) {
                    var i = n[r];
                    if (t.indexOf(i) < 0)
                      throw __DEV__
                        ? new Ce("illegal argument: " + i)
                        : new Ce(26);
                  }
                  return e;
                })(t)
              )
            )
          ) || nn.of()
        );
      }),
      (e.concat = function (t, r) {
        var n = Tn(t);
        if (Dn(n))
          return (
            __DEV__ &&
              Fe.warn(
                new xn(
                  "You are calling concat on a terminating link, which will have no effect",
                  n
                )
              ),
            n
          );
        var i = Tn(r);
        return Dn(i)
          ? new e(function (e) {
              return (
                n.request(e, function (e) {
                  return i.request(e) || nn.of();
                }) || nn.of()
              );
            })
          : new e(function (e, t) {
              return (
                n.request(e, function (e) {
                  return i.request(e, t) || nn.of();
                }) || nn.of()
              );
            });
      }),
      (e.prototype.split = function (t, r, n) {
        return this.concat(e.split(t, r, n || new e(Sn)));
      }),
      (e.prototype.concat = function (t) {
        return e.concat(this, t);
      }),
      (e.prototype.request = function (e, t) {
        throw __DEV__ ? new Ce("request is not implemented") : new Ce(21);
      }),
      (e.prototype.onError = function (e, t) {
        if (t && t.error) return t.error(e), !1;
        throw e;
      }),
      (e.prototype.setOnError = function (e) {
        return (this.onError = e), this;
      }),
      e
    );
  })(),
  In = Nn.execute,
  An = Object.prototype.hasOwnProperty;
var Rn = function (e, t) {
    var r;
    try {
      r = JSON.stringify(e);
    } catch (i) {
      var n = __DEV__
        ? new Ce(
            "Network request failed. " +
              t +
              " is not serializable: " +
              i.message
          )
        : new Ce(23);
      throw ((n.parseError = i), n);
    }
    return r;
  },
  Cn = {
    http: { includeQuery: !0, includeExtensions: !1 },
    headers: { accept: "*/*", "content-type": "application/json" },
    options: { method: "POST" },
  };
function Fn(e) {
  if (e) {
    var t = Object.create(null);
    return (
      Object.keys(Object(e)).forEach(function (r) {
        t[r.toLowerCase()] = e[r];
      }),
      t
    );
  }
  return e;
}
var Pn = Le(function () {
    return fetch;
  }),
  jn = function (e) {
    void 0 === e && (e = {});
    var t = e.uri,
      r = void 0 === t ? "/graphql" : t,
      n = e.fetch,
      i = e.includeExtensions,
      o = e.useGETForQueries,
      a = e.includeUnusedVariables,
      s = void 0 !== a && a,
      c = De(e, [
        "uri",
        "fetch",
        "includeExtensions",
        "useGETForQueries",
        "includeUnusedVariables",
      ]);
    __DEV__ &&
      (function (e) {
        if (!e && "undefined" == typeof fetch)
          throw __DEV__
            ? new Ce(
                "\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    "
              )
            : new Ce(22);
      })(n || Pn);
    var u = {
      http: { includeExtensions: i },
      options: c.fetchOptions,
      credentials: c.credentials,
      headers: c.headers,
    };
    return new Nn(function (e) {
      var t = (function (e, t) {
          return (
            e.getContext().uri ||
            ("function" == typeof t ? t(e) : t || "/graphql")
          );
        })(e, r),
        i = e.getContext(),
        a = {};
      if (i.clientAwareness) {
        var c = i.clientAwareness,
          l = c.name,
          f = c.version;
        l && (a["apollographql-client-name"] = l),
          f && (a["apollographql-client-version"] = f);
      }
      var p,
        h = Te(Te({}, a), i.headers),
        d = {
          http: i.http,
          options: i.fetchOptions,
          credentials: i.credentials,
          headers: h,
        },
        y = (function (e, t) {
          for (var r = [], n = 2; n < arguments.length; n++)
            r[n - 2] = arguments[n];
          var i = Te(Te({}, t.options), {
              headers: t.headers,
              credentials: t.credentials,
            }),
            o = t.http || {};
          r.forEach(function (e) {
            (i = Te(Te(Te({}, i), e.options), {
              headers: Te(Te({}, i.headers), Fn(e.headers)),
            })),
              e.credentials && (i.credentials = e.credentials),
              (o = Te(Te({}, o), e.http));
          });
          var a = e.operationName,
            s = e.extensions,
            c = e.variables,
            u = e.query,
            l = { operationName: a, variables: c };
          return (
            o.includeExtensions && (l.extensions = s),
            o.includeQuery && (l.query = Qt(u)),
            { options: i, body: l }
          );
        })(e, Cn, u, d),
        v = y.options,
        m = y.body;
      if (m.variables && !s) {
        var b = new Set(Object.keys(m.variables));
        Lt(e.query, {
          Variable: function (e, t, r) {
            r && "VariableDefinition" !== r.kind && b.delete(e.name.value);
          },
        }),
          b.size &&
            ((m.variables = Te({}, m.variables)),
            b.forEach(function (e) {
              delete m.variables[e];
            }));
      }
      if (!v.signal) {
        var g = (function () {
            if ("undefined" == typeof AbortController)
              return { controller: !1, signal: !1 };
            var e = new AbortController();
            return { controller: e, signal: e.signal };
          })(),
          _ = g.controller,
          E = g.signal;
        (p = _) && (v.signal = E);
      }
      if (
        (o &&
          !e.query.definitions.some(function (e) {
            return (
              "OperationDefinition" === e.kind && "mutation" === e.operation
            );
          }) &&
          (v.method = "GET"),
        "GET" === v.method)
      ) {
        var w = (function (e, t) {
            var r = [],
              n = function (e, t) {
                r.push(e + "=" + encodeURIComponent(t));
              };
            if (
              ("query" in t && n("query", t.query),
              t.operationName && n("operationName", t.operationName),
              t.variables)
            ) {
              var i = void 0;
              try {
                i = Rn(t.variables, "Variables map");
              } catch (k) {
                return { parseError: k };
              }
              n("variables", i);
            }
            if (t.extensions) {
              var o = void 0;
              try {
                o = Rn(t.extensions, "Extensions map");
              } catch (k) {
                return { parseError: k };
              }
              n("extensions", o);
            }
            var a = "",
              s = e,
              c = e.indexOf("#");
            -1 !== c && ((a = e.substr(c)), (s = e.substr(0, c)));
            var u = -1 === s.indexOf("?") ? "?" : "&";
            return { newURI: s + u + r.join("&") + a };
          })(t, m),
          O = w.newURI,
          k = w.parseError;
        if (k) return On(k);
        t = O;
      } else
        try {
          v.body = Rn(m, "Payload");
        } catch (S) {
          return On(S);
        }
      return new nn(function (r) {
        var i;
        return (
          (
            n ||
            Le(function () {
              return fetch;
            }) ||
            Pn
          )(t, v)
            .then(function (t) {
              return e.setContext({ response: t }), t;
            })
            .then(
              ((i = e),
              function (e) {
                return e
                  .text()
                  .then(function (t) {
                    try {
                      return JSON.parse(t);
                    } catch (n) {
                      var r = n;
                      throw (
                        ((r.name = "ServerParseError"),
                        (r.response = e),
                        (r.statusCode = e.status),
                        (r.bodyText = t),
                        r)
                      );
                    }
                  })
                  .then(function (t) {
                    return (
                      e.status >= 300 &&
                        kn(
                          e,
                          t,
                          "Response not successful: Received status code " +
                            e.status
                        ),
                      Array.isArray(t) ||
                        An.call(t, "data") ||
                        An.call(t, "errors") ||
                        kn(
                          e,
                          t,
                          "Server response was missing for query '" +
                            (Array.isArray(i)
                              ? i.map(function (e) {
                                  return e.operationName;
                                })
                              : i.operationName) +
                            "'."
                        ),
                      t
                    );
                  });
              })
            )
            .then(function (e) {
              return r.next(e), r.complete(), e;
            })
            .catch(function (e) {
              "AbortError" !== e.name &&
                (e.result &&
                  e.result.errors &&
                  e.result.data &&
                  r.next(e.result),
                r.error(e));
            }),
          function () {
            p && p.abort();
          }
        );
      });
    });
  },
  Mn = (function (e) {
    function t(t) {
      void 0 === t && (t = {});
      var r = e.call(this, jn(t).request) || this;
      return (r.options = t), r;
    }
    return Se(t, e), t;
  })(Nn),
  Vn = Object.prototype,
  Ln = Vn.toString,
  qn = Vn.hasOwnProperty,
  Qn = Function.prototype.toString,
  Bn = new Map();
function Un(e, t) {
  try {
    return $n(e, t);
  } finally {
    Bn.clear();
  }
}
function $n(e, t) {
  if (e === t) return !0;
  var r,
    n,
    i,
    o = Ln.call(e);
  if (o !== Ln.call(t)) return !1;
  switch (o) {
    case "[object Array]":
      if (e.length !== t.length) return !1;
    case "[object Object]":
      if (Gn(e, t)) return !0;
      var a = zn(e),
        s = zn(t),
        c = a.length;
      if (c !== s.length) return !1;
      for (var u = 0; u < c; ++u) if (!qn.call(t, a[u])) return !1;
      for (u = 0; u < c; ++u) {
        var l = a[u];
        if (!$n(e[l], t[l])) return !1;
      }
      return !0;
    case "[object Error]":
      return e.name === t.name && e.message === t.message;
    case "[object Number]":
      if (e != e) return t != t;
    case "[object Boolean]":
    case "[object Date]":
      return +e == +t;
    case "[object RegExp]":
    case "[object String]":
      return e == "" + t;
    case "[object Map]":
    case "[object Set]":
      if (e.size !== t.size) return !1;
      if (Gn(e, t)) return !0;
      for (var f = e.entries(), p = "[object Map]" === o; ; ) {
        var h = f.next();
        if (h.done) break;
        var d = h.value,
          y = d[0],
          v = d[1];
        if (!t.has(y)) return !1;
        if (p && !$n(v, t.get(y))) return !1;
      }
      return !0;
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      (e = new Uint8Array(e)), (t = new Uint8Array(t));
    case "[object DataView]":
      var m = e.byteLength;
      if (m === t.byteLength) for (; m-- && e[m] === t[m]; );
      return -1 === m;
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]":
      var b = Qn.call(e);
      return (
        b === Qn.call(t) &&
        ((n = Wn),
        !((i = (r = b).length - n.length) >= 0 && r.indexOf(n, i) === i))
      );
  }
  return !1;
}
function zn(e) {
  return Object.keys(e).filter(Kn, e);
}
function Kn(e) {
  return void 0 !== this[e];
}
var Wn = "{ [native code] }";
function Gn(e, t) {
  var r = Bn.get(e);
  if (r) {
    if (r.has(t)) return !0;
  } else Bn.set(e, (r = new Set()));
  return r.add(t), !1;
}
var Yn = function () {
    return Object.create(null);
  },
  Jn = Array.prototype,
  Hn = Jn.forEach,
  Xn = Jn.slice,
  Zn = (function () {
    function e(e, t) {
      void 0 === e && (e = !0),
        void 0 === t && (t = Yn),
        (this.weakness = e),
        (this.makeData = t);
    }
    return (
      (e.prototype.lookup = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return this.lookupArray(e);
      }),
      (e.prototype.lookupArray = function (e) {
        var t = this;
        return (
          Hn.call(e, function (e) {
            return (t = t.getChildTrie(e));
          }),
          t.data || (t.data = this.makeData(Xn.call(e)))
        );
      }),
      (e.prototype.getChildTrie = function (t) {
        var r =
            this.weakness &&
            (function (e) {
              switch (typeof e) {
                case "object":
                  if (null === e) break;
                case "function":
                  return !0;
              }
              return !1;
            })(t)
              ? this.weak || (this.weak = new WeakMap())
              : this.strong || (this.strong = new Map()),
          n = r.get(t);
        return n || r.set(t, (n = new e(this.weakness, this.makeData))), n;
      }),
      e
    );
  })();
var ei = null,
  ti = {},
  ri = 1,
  ni = Array,
  ii =
    ni["@wry/context:Slot"] ||
    (function () {
      var e = (function () {
        function e() {
          this.id = [
            "slot",
            ri++,
            Date.now(),
            Math.random().toString(36).slice(2),
          ].join(":");
        }
        return (
          (e.prototype.hasValue = function () {
            for (var e = ei; e; e = e.parent)
              if (this.id in e.slots) {
                var t = e.slots[this.id];
                if (t === ti) break;
                return e !== ei && (ei.slots[this.id] = t), !0;
              }
            return ei && (ei.slots[this.id] = ti), !1;
          }),
          (e.prototype.getValue = function () {
            if (this.hasValue()) return ei.slots[this.id];
          }),
          (e.prototype.withValue = function (e, t, r, n) {
            var i,
              o = (((i = { __proto__: null })[this.id] = e), i),
              a = ei;
            ei = { parent: a, slots: o };
            try {
              return t.apply(n, r);
            } finally {
              ei = a;
            }
          }),
          (e.bind = function (e) {
            var t = ei;
            return function () {
              var r = ei;
              try {
                return (ei = t), e.apply(this, arguments);
              } finally {
                ei = r;
              }
            };
          }),
          (e.noContext = function (e, t, r) {
            if (!ei) return e.apply(r, t);
            var n = ei;
            try {
              return (ei = null), e.apply(r, t);
            } finally {
              ei = n;
            }
          }),
          e
        );
      })();
      try {
        Object.defineProperty(ni, "@wry/context:Slot", {
          value: (ni["@wry/context:Slot"] = e),
          enumerable: !1,
          writable: !1,
          configurable: !1,
        });
      } finally {
        return e;
      }
    })();
function oi() {}
ii.bind, ii.noContext;
var ai,
  si = (function () {
    function e(e, t) {
      void 0 === e && (e = 1 / 0),
        void 0 === t && (t = oi),
        (this.max = e),
        (this.dispose = t),
        (this.map = new Map()),
        (this.newest = null),
        (this.oldest = null);
    }
    return (
      (e.prototype.has = function (e) {
        return this.map.has(e);
      }),
      (e.prototype.get = function (e) {
        var t = this.getNode(e);
        return t && t.value;
      }),
      (e.prototype.getNode = function (e) {
        var t = this.map.get(e);
        if (t && t !== this.newest) {
          var r = t.older,
            n = t.newer;
          n && (n.older = r),
            r && (r.newer = n),
            (t.older = this.newest),
            (t.older.newer = t),
            (t.newer = null),
            (this.newest = t),
            t === this.oldest && (this.oldest = n);
        }
        return t;
      }),
      (e.prototype.set = function (e, t) {
        var r = this.getNode(e);
        return r
          ? (r.value = t)
          : ((r = { key: e, value: t, newer: null, older: this.newest }),
            this.newest && (this.newest.newer = r),
            (this.newest = r),
            (this.oldest = this.oldest || r),
            this.map.set(e, r),
            r.value);
      }),
      (e.prototype.clean = function () {
        for (; this.oldest && this.map.size > this.max; )
          this.delete(this.oldest.key);
      }),
      (e.prototype.delete = function (e) {
        var t = this.map.get(e);
        return (
          !!t &&
          (t === this.newest && (this.newest = t.older),
          t === this.oldest && (this.oldest = t.newer),
          t.newer && (t.newer.older = t.older),
          t.older && (t.older.newer = t.newer),
          this.map.delete(e),
          this.dispose(t.value, e),
          !0)
        );
      }),
      e
    );
  })(),
  ci = new ii(),
  ui = Object.prototype.hasOwnProperty,
  li =
    void 0 === (ai = Array.from)
      ? function (e) {
          var t = [];
          return (
            e.forEach(function (e) {
              return t.push(e);
            }),
            t
          );
        }
      : ai;
function fi(e) {
  var t = e.unsubscribe;
  "function" == typeof t && ((e.unsubscribe = void 0), t());
}
var pi = [];
function hi(e, t) {
  if (!e) throw new Error(t || "assertion failure");
}
function di(e) {
  switch (e.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return e[0];
    case 2:
      throw e[1];
  }
}
var yi = (function () {
  function e(t) {
    (this.fn = t),
      (this.parents = new Set()),
      (this.childValues = new Map()),
      (this.dirtyChildren = null),
      (this.dirty = !0),
      (this.recomputing = !1),
      (this.value = []),
      (this.deps = null),
      ++e.count;
  }
  return (
    (e.prototype.peek = function () {
      if (1 === this.value.length && !bi(this)) return vi(this), this.value[0];
    }),
    (e.prototype.recompute = function (e) {
      return (
        hi(!this.recomputing, "already recomputing"),
        vi(this),
        bi(this)
          ? (function (e, t) {
              Si(e),
                ci.withValue(e, mi, [e, t]),
                (function (e, t) {
                  if ("function" == typeof e.subscribe)
                    try {
                      fi(e), (e.unsubscribe = e.subscribe.apply(null, t));
                    } catch (r) {
                      return e.setDirty(), !1;
                    }
                  return !0;
                })(e, t) &&
                  (function (e) {
                    if (((e.dirty = !1), bi(e))) return;
                    _i(e);
                  })(e);
              return di(e.value);
            })(this, e)
          : di(this.value)
      );
    }),
    (e.prototype.setDirty = function () {
      this.dirty ||
        ((this.dirty = !0), (this.value.length = 0), gi(this), fi(this));
    }),
    (e.prototype.dispose = function () {
      var e = this;
      this.setDirty(),
        Si(this),
        Ei(this, function (t, r) {
          t.setDirty(), Ti(t, e);
        });
    }),
    (e.prototype.forget = function () {
      this.dispose();
    }),
    (e.prototype.dependOn = function (e) {
      e.add(this),
        this.deps || (this.deps = pi.pop() || new Set()),
        this.deps.add(e);
    }),
    (e.prototype.forgetDeps = function () {
      var e = this;
      this.deps &&
        (li(this.deps).forEach(function (t) {
          return t.delete(e);
        }),
        this.deps.clear(),
        pi.push(this.deps),
        (this.deps = null));
    }),
    (e.count = 0),
    e
  );
})();
function vi(e) {
  var t = ci.getValue();
  if (t)
    return (
      e.parents.add(t),
      t.childValues.has(e) || t.childValues.set(e, []),
      bi(e) ? wi(t, e) : Oi(t, e),
      t
    );
}
function mi(e, t) {
  (e.recomputing = !0), (e.value.length = 0);
  try {
    e.value[0] = e.fn.apply(null, t);
  } catch (r) {
    e.value[1] = r;
  }
  e.recomputing = !1;
}
function bi(e) {
  return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size);
}
function gi(e) {
  Ei(e, wi);
}
function _i(e) {
  Ei(e, Oi);
}
function Ei(e, t) {
  var r = e.parents.size;
  if (r) for (var n = li(e.parents), i = 0; i < r; ++i) t(n[i], e);
}
function wi(e, t) {
  hi(e.childValues.has(t)), hi(bi(t));
  var r = !bi(e);
  if (e.dirtyChildren) {
    if (e.dirtyChildren.has(t)) return;
  } else e.dirtyChildren = pi.pop() || new Set();
  e.dirtyChildren.add(t), r && gi(e);
}
function Oi(e, t) {
  hi(e.childValues.has(t)), hi(!bi(t));
  var r,
    n,
    i,
    o = e.childValues.get(t);
  0 === o.length
    ? e.childValues.set(t, t.value.slice(0))
    : ((r = o),
      (n = t.value),
      ((i = r.length) > 0 && i === n.length && r[i - 1] === n[i - 1]) ||
        e.setDirty()),
    ki(e, t),
    bi(e) || _i(e);
}
function ki(e, t) {
  var r = e.dirtyChildren;
  r &&
    (r.delete(t),
    0 === r.size && (pi.length < 100 && pi.push(r), (e.dirtyChildren = null)));
}
function Si(e) {
  e.childValues.size > 0 &&
    e.childValues.forEach(function (t, r) {
      Ti(e, r);
    }),
    e.forgetDeps(),
    hi(null === e.dirtyChildren);
}
function Ti(e, t) {
  t.parents.delete(e), e.childValues.delete(t), ki(e, t);
}
var Di = { setDirty: !0, dispose: !0, forget: !0 };
function xi(e) {
  var t = new Map(),
    r = e && e.subscribe;
  function n(e) {
    var n = ci.getValue();
    if (n) {
      var i = t.get(e);
      i || t.set(e, (i = new Set())),
        n.dependOn(i),
        "function" == typeof r && (fi(i), (i.unsubscribe = r(e)));
    }
  }
  return (
    (n.dirty = function (e, r) {
      var n = t.get(e);
      if (n) {
        var i = r && ui.call(Di, r) ? r : "setDirty";
        li(n).forEach(function (e) {
          return e[i]();
        }),
          t.delete(e),
          fi(n);
      }
    }),
    n
  );
}
function Ni() {
  var e = new Zn("function" == typeof WeakMap);
  return function () {
    return e.lookupArray(arguments);
  };
}
Ni();
var Ii = new Set();
function Ai(e, t) {
  void 0 === t && (t = Object.create(null));
  var r = new si(t.max || Math.pow(2, 16), function (e) {
      return e.dispose();
    }),
    n = t.keyArgs,
    i = t.makeCacheKey || Ni(),
    o = function () {
      var o = i.apply(null, n ? n.apply(null, arguments) : arguments);
      if (void 0 === o) return e.apply(null, arguments);
      var a = r.get(o);
      a ||
        (r.set(o, (a = new yi(e))),
        (a.subscribe = t.subscribe),
        (a.forget = function () {
          return r.delete(o);
        }));
      var s = a.recompute(Array.prototype.slice.call(arguments));
      return (
        r.set(o, a),
        Ii.add(r),
        ci.hasValue() ||
          (Ii.forEach(function (e) {
            return e.clean();
          }),
          Ii.clear()),
        s
      );
    };
  function a(e) {
    var t = r.get(e);
    t && t.setDirty();
  }
  function s(e) {
    var t = r.get(e);
    if (t) return t.peek();
  }
  function c(e) {
    return r.delete(e);
  }
  return (
    Object.defineProperty(o, "size", {
      get: function () {
        return r.map.size;
      },
      configurable: !1,
      enumerable: !1,
    }),
    (o.dirtyKey = a),
    (o.dirty = function () {
      a(i.apply(null, arguments));
    }),
    (o.peekKey = s),
    (o.peek = function () {
      return s(i.apply(null, arguments));
    }),
    (o.forgetKey = c),
    (o.forget = function () {
      return c(i.apply(null, arguments));
    }),
    (o.makeCacheKey = i),
    (o.getKey = n
      ? function () {
          return i.apply(null, n.apply(null, arguments));
        }
      : i),
    Object.freeze(o)
  );
}
var Ri = (function () {
    function e() {
      this.getFragmentDoc = Ai(Zt);
    }
    return (
      (e.prototype.batch = function (e) {
        var t =
          "string" == typeof e.optimistic
            ? e.optimistic
            : !1 === e.optimistic
            ? null
            : void 0;
        this.performTransaction(e.update, t);
      }),
      (e.prototype.recordOptimisticTransaction = function (e, t) {
        this.performTransaction(e, t);
      }),
      (e.prototype.transformDocument = function (e) {
        return e;
      }),
      (e.prototype.identify = function (e) {}),
      (e.prototype.gc = function () {
        return [];
      }),
      (e.prototype.modify = function (e) {
        return !1;
      }),
      (e.prototype.transformForLink = function (e) {
        return e;
      }),
      (e.prototype.readQuery = function (e, t) {
        return (
          void 0 === t && (t = !!e.optimistic),
          this.read(
            Te(Te({}, e), { rootId: e.id || "ROOT_QUERY", optimistic: t })
          )
        );
      }),
      (e.prototype.readFragment = function (e, t) {
        return (
          void 0 === t && (t = !!e.optimistic),
          this.read(
            Te(Te({}, e), {
              query: this.getFragmentDoc(e.fragment, e.fragmentName),
              rootId: e.id,
              optimistic: t,
            })
          )
        );
      }),
      (e.prototype.writeQuery = function (e) {
        var t = e.id,
          r = e.data,
          n = De(e, ["id", "data"]);
        return this.write(
          Object.assign(n, { dataId: t || "ROOT_QUERY", result: r })
        );
      }),
      (e.prototype.writeFragment = function (e) {
        var t = e.id,
          r = e.data,
          n = e.fragment,
          i = e.fragmentName,
          o = De(e, ["id", "data", "fragment", "fragmentName"]);
        return this.write(
          Object.assign(o, {
            query: this.getFragmentDoc(n, i),
            dataId: t,
            result: r,
          })
        );
      }),
      e
    );
  })(),
  Ci = (function (e) {
    function t(r, n, i, o) {
      var a = e.call(this, r) || this;
      return (
        (a.message = r),
        (a.path = n),
        (a.query = i),
        (a.variables = o),
        (a.__proto__ = t.prototype),
        a
      );
    }
    return Se(t, e), t;
  })(Error),
  Fi = Object.prototype.hasOwnProperty;
var Pi = /^[_a-z][_0-9a-z]*/i;
function ji(e) {
  var t = e.match(Pi);
  return t ? t[0] : e;
}
function Mi(e, t, r) {
  return (
    !!rr(t) &&
    (Array.isArray(t)
      ? t.every(function (t) {
          return Mi(e, t, r);
        })
      : e.selections.every(function (e) {
          if (hr(e) && Jt(e, r)) {
            var n = fr(e);
            return (
              Fi.call(t, n) && (!e.selectionSet || Mi(e.selectionSet, t[n], r))
            );
          }
          return !0;
        }))
  );
}
function Vi(e) {
  return rr(e) && !ir(e) && !Array.isArray(e);
}
var Li,
  qi,
  Qi = Object.create(null),
  Bi = function () {
    return Qi;
  },
  Ui = Object.create(null),
  $i = (function () {
    function e(e, t) {
      var r = this;
      (this.policies = e),
        (this.group = t),
        (this.data = Object.create(null)),
        (this.rootIds = Object.create(null)),
        (this.refs = Object.create(null)),
        (this.getFieldValue = function (e, t) {
          return un(ir(e) ? r.get(e.__ref, t) : e && e[t]);
        }),
        (this.canRead = function (e) {
          return ir(e) ? r.has(e.__ref) : "object" == typeof e;
        }),
        (this.toReference = function (e, t) {
          if ("string" == typeof e) return nr(e);
          if (ir(e)) return e;
          var n = r.policies.identify(e)[0];
          if (n) {
            var i = nr(n);
            return t && r.merge(n, e), i;
          }
        });
    }
    return (
      (e.prototype.toObject = function () {
        return Te({}, this.data);
      }),
      (e.prototype.has = function (e) {
        return void 0 !== this.lookup(e, !0);
      }),
      (e.prototype.get = function (e, t) {
        if ((this.group.depend(e, t), Fi.call(this.data, e))) {
          var r = this.data[e];
          if (r && Fi.call(r, t)) return r[t];
        }
        return "__typename" === t && Fi.call(this.policies.rootTypenamesById, e)
          ? this.policies.rootTypenamesById[e]
          : this instanceof Gi
          ? this.parent.get(e, t)
          : void 0;
      }),
      (e.prototype.lookup = function (e, t) {
        return (
          t && this.group.depend(e, "__exists"),
          Fi.call(this.data, e)
            ? this.data[e]
            : this instanceof Gi
            ? this.parent.lookup(e, t)
            : this.policies.rootTypenamesById[e]
            ? Object.create(null)
            : void 0
        );
      }),
      (e.prototype.merge = function (e, t) {
        var r,
          n = this;
        ir(e) && (e = e.__ref), ir(t) && (t = t.__ref);
        var i = "string" == typeof e ? this.lookup((r = e)) : e,
          o = "string" == typeof t ? this.lookup((r = t)) : t;
        if (o) {
          __DEV__
            ? Fe("string" == typeof r, "store.merge expects a string ID")
            : Fe("string" == typeof r, 1);
          var a = new jr(Ji).merge(i, o);
          if (
            ((this.data[r] = a),
            a !== i && (delete this.refs[r], this.group.caching))
          ) {
            var s = Object.create(null);
            i || (s.__exists = 1),
              Object.keys(o).forEach(function (e) {
                if (!i || i[e] !== a[e]) {
                  s[e] = 1;
                  var t = ji(e);
                  t === e ||
                    n.policies.hasKeyArgs(a.__typename, t) ||
                    (s[t] = 1),
                    void 0 !== a[e] || n instanceof Gi || delete a[e];
                }
              }),
              !s.__typename ||
                (i && i.__typename) ||
                this.policies.rootTypenamesById[r] !== a.__typename ||
                delete s.__typename,
              Object.keys(s).forEach(function (e) {
                return n.group.dirty(r, e);
              });
          }
        }
      }),
      (e.prototype.modify = function (e, t) {
        var r = this,
          n = this.lookup(e);
        if (n) {
          var i = Object.create(null),
            o = !1,
            a = !0,
            s = {
              DELETE: Qi,
              INVALIDATE: Ui,
              isReference: ir,
              toReference: this.toReference,
              canRead: this.canRead,
              readField: function (t, n) {
                return r.policies.readField(
                  "string" == typeof t ? { fieldName: t, from: n || nr(e) } : t,
                  { store: r }
                );
              },
            };
          if (
            (Object.keys(n).forEach(function (c) {
              var u = ji(c),
                l = n[c];
              if (void 0 !== l) {
                var f = "function" == typeof t ? t : t[c] || t[u];
                if (f) {
                  var p =
                    f === Bi
                      ? Qi
                      : f(
                          un(l),
                          Te(Te({}, s), {
                            fieldName: u,
                            storeFieldName: c,
                            storage: r.getStorage(e, c),
                          })
                        );
                  p === Ui
                    ? r.group.dirty(e, c)
                    : (p === Qi && (p = void 0),
                      p !== l && ((i[c] = p), (o = !0), (l = p)));
                }
                void 0 !== l && (a = !1);
              }
            }),
            o)
          )
            return (
              this.merge(e, i),
              a &&
                (this instanceof Gi
                  ? (this.data[e] = void 0)
                  : delete this.data[e],
                this.group.dirty(e, "__exists")),
              !0
            );
        }
        return !1;
      }),
      (e.prototype.delete = function (e, t, r) {
        var n,
          i = this.lookup(e);
        if (i) {
          var o = this.getFieldValue(i, "__typename"),
            a =
              t && r
                ? this.policies.getStoreFieldName({
                    typename: o,
                    fieldName: t,
                    args: r,
                  })
                : t;
          return this.modify(e, a ? (((n = {})[a] = Bi), n) : Bi);
        }
        return !1;
      }),
      (e.prototype.evict = function (e) {
        var t = !1;
        return (
          e.id &&
            (Fi.call(this.data, e.id) &&
              (t = this.delete(e.id, e.fieldName, e.args)),
            this instanceof Gi && (t = this.parent.evict(e) || t),
            (e.fieldName || t) &&
              this.group.dirty(e.id, e.fieldName || "__exists")),
          t
        );
      }),
      (e.prototype.clear = function () {
        this.replace(null);
      }),
      (e.prototype.extract = function () {
        var e = this,
          t = this.toObject(),
          r = [];
        return (
          this.getRootIdSet().forEach(function (t) {
            Fi.call(e.policies.rootTypenamesById, t) || r.push(t);
          }),
          r.length && (t.__META = { extraRootIds: r.sort() }),
          t
        );
      }),
      (e.prototype.replace = function (e) {
        var t = this;
        if (
          (Object.keys(this.data).forEach(function (r) {
            (e && Fi.call(e, r)) || t.delete(r);
          }),
          e)
        ) {
          var r = e.__META,
            n = De(e, ["__META"]);
          Object.keys(n).forEach(function (e) {
            t.merge(e, n[e]);
          }),
            r && r.extraRootIds.forEach(this.retain, this);
        }
      }),
      (e.prototype.retain = function (e) {
        return (this.rootIds[e] = (this.rootIds[e] || 0) + 1);
      }),
      (e.prototype.release = function (e) {
        if (this.rootIds[e] > 0) {
          var t = --this.rootIds[e];
          return t || delete this.rootIds[e], t;
        }
        return 0;
      }),
      (e.prototype.getRootIdSet = function (e) {
        return (
          void 0 === e && (e = new Set()),
          Object.keys(this.rootIds).forEach(e.add, e),
          this instanceof Gi
            ? this.parent.getRootIdSet(e)
            : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e),
          e
        );
      }),
      (e.prototype.gc = function () {
        var e = this,
          t = this.getRootIdSet(),
          r = this.toObject();
        t.forEach(function (n) {
          Fi.call(r, n) &&
            (Object.keys(e.findChildRefIds(n)).forEach(t.add, t), delete r[n]);
        });
        var n = Object.keys(r);
        if (n.length) {
          for (var i = this; i instanceof Gi; ) i = i.parent;
          n.forEach(function (e) {
            return i.delete(e);
          });
        }
        return n;
      }),
      (e.prototype.findChildRefIds = function (e) {
        if (!Fi.call(this.refs, e)) {
          var t = (this.refs[e] = Object.create(null)),
            r = this.data[e];
          if (!r) return t;
          var n = new Set([r]);
          n.forEach(function (e) {
            ir(e) && (t[e.__ref] = !0),
              rr(e) &&
                Object.keys(e).forEach(function (t) {
                  var r = e[t];
                  rr(r) && n.add(r);
                });
          });
        }
        return this.refs[e];
      }),
      (e.prototype.makeCacheKey = function () {
        return this.group.keyMaker.lookupArray(arguments);
      }),
      e
    );
  })(),
  zi = (function () {
    function e(e, t) {
      void 0 === t && (t = null),
        (this.caching = e),
        (this.parent = t),
        (this.d = null),
        this.resetCaching();
    }
    return (
      (e.prototype.resetCaching = function () {
        (this.d = this.caching ? xi() : null), (this.keyMaker = new Zn(mn));
      }),
      (e.prototype.depend = function (e, t) {
        if (this.d) {
          this.d(Ki(e, t));
          var r = ji(t);
          r !== t && this.d(Ki(e, r)), this.parent && this.parent.depend(e, t);
        }
      }),
      (e.prototype.dirty = function (e, t) {
        this.d &&
          this.d.dirty(Ki(e, t), "__exists" === t ? "forget" : "setDirty");
      }),
      e
    );
  })();
function Ki(e, t) {
  return t + "#" + e;
}
function Wi(e, t) {
  Hi(e) && e.group.depend(t, "__exists");
}
(Li = $i || ($i = {})),
  (qi = (function (e) {
    function t(t) {
      var r = t.policies,
        n = t.resultCaching,
        i = void 0 === n || n,
        o = t.seed,
        a = e.call(this, r, new zi(i)) || this;
      return (
        (a.stump = new Yi(a)),
        (a.storageTrie = new Zn(mn)),
        o && a.replace(o),
        a
      );
    }
    return (
      Se(t, e),
      (t.prototype.addLayer = function (e, t) {
        return this.stump.addLayer(e, t);
      }),
      (t.prototype.removeLayer = function () {
        return this;
      }),
      (t.prototype.getStorage = function () {
        return this.storageTrie.lookupArray(arguments);
      }),
      t
    );
  })(Li)),
  (Li.Root = qi);
var Gi = (function (e) {
    function t(t, r, n, i) {
      var o = e.call(this, r.policies, i) || this;
      return (o.id = t), (o.parent = r), (o.replay = n), (o.group = i), n(o), o;
    }
    return (
      Se(t, e),
      (t.prototype.addLayer = function (e, r) {
        return new t(e, this, r, this.group);
      }),
      (t.prototype.removeLayer = function (e) {
        var t = this,
          r = this.parent.removeLayer(e);
        return e === this.id
          ? (this.group.caching &&
              Object.keys(this.data).forEach(function (e) {
                var n = t.data[e],
                  i = r.lookup(e);
                i
                  ? n
                    ? n !== i &&
                      Object.keys(n).forEach(function (r) {
                        Un(n[r], i[r]) || t.group.dirty(e, r);
                      })
                    : (t.group.dirty(e, "__exists"),
                      Object.keys(i).forEach(function (r) {
                        t.group.dirty(e, r);
                      }))
                  : t.delete(e);
              }),
            r)
          : r === this.parent
          ? this
          : r.addLayer(this.id, this.replay);
      }),
      (t.prototype.toObject = function () {
        return Te(Te({}, this.parent.toObject()), this.data);
      }),
      (t.prototype.findChildRefIds = function (t) {
        var r = this.parent.findChildRefIds(t);
        return Fi.call(this.data, t)
          ? Te(Te({}, r), e.prototype.findChildRefIds.call(this, t))
          : r;
      }),
      (t.prototype.getStorage = function () {
        for (var e = this.parent; e.parent; ) e = e.parent;
        return e.getStorage.apply(e, arguments);
      }),
      t
    );
  })($i),
  Yi = (function (e) {
    function t(t) {
      return (
        e.call(
          this,
          "EntityStore.Stump",
          t,
          function () {},
          new zi(t.group.caching, t.group)
        ) || this
      );
    }
    return (
      Se(t, e),
      (t.prototype.removeLayer = function () {
        return this;
      }),
      (t.prototype.merge = function () {
        return this.parent.merge.apply(this.parent, arguments);
      }),
      t
    );
  })(Gi);
function Ji(e, t, r) {
  var n = e[r],
    i = t[r];
  return Un(n, i) ? n : i;
}
function Hi(e) {
  return !!(e instanceof $i && e.group.caching);
}
var Xi,
  Zi,
  eo = (function () {
    function e() {
      (this.known = new (bn ? WeakSet : Set)()),
        (this.pool = new Zn(mn)),
        (this.passes = new WeakMap()),
        (this.keysByJSON = new Map()),
        (this.empty = this.admit({}));
    }
    return (
      (e.prototype.isKnown = function (e) {
        return rr(e) && this.known.has(e);
      }),
      (e.prototype.pass = function (e) {
        if (rr(e)) {
          var t = (function (e) {
            return rr(e)
              ? Array.isArray(e)
                ? e.slice(0)
                : Te({ __proto__: Object.getPrototypeOf(e) }, e)
              : e;
          })(e);
          return this.passes.set(t, e), t;
        }
        return e;
      }),
      (e.prototype.admit = function (e) {
        var t = this;
        if (rr(e)) {
          var r = this.passes.get(e);
          if (r) return r;
          switch (Object.getPrototypeOf(e)) {
            case Array.prototype:
              if (this.known.has(e)) return e;
              var n = e.map(this.admit, this);
              return (
                (s = this.pool.lookupArray(n)).array ||
                  (this.known.add((s.array = n)), __DEV__ && Object.freeze(n)),
                s.array
              );
            case null:
            case Object.prototype:
              if (this.known.has(e)) return e;
              var i = Object.getPrototypeOf(e),
                o = [i],
                a = this.sortedKeys(e);
              o.push(a.json);
              var s,
                c = o.length;
              if (
                (a.sorted.forEach(function (r) {
                  o.push(t.admit(e[r]));
                }),
                !(s = this.pool.lookupArray(o)).object)
              ) {
                var u = (s.object = Object.create(i));
                this.known.add(u),
                  a.sorted.forEach(function (e, t) {
                    u[e] = o[c + t];
                  }),
                  __DEV__ && Object.freeze(u);
              }
              return s.object;
          }
        }
        return e;
      }),
      (e.prototype.sortedKeys = function (e) {
        var t = Object.keys(e),
          r = this.pool.lookupArray(t);
        if (!r.keys) {
          t.sort();
          var n = JSON.stringify(t);
          (r.keys = this.keysByJSON.get(n)) ||
            this.keysByJSON.set(n, (r.keys = { sorted: t, json: n }));
        }
        return r.keys;
      }),
      e
    );
  })(),
  to = Object.assign(
    function (e) {
      if (rr(e)) {
        void 0 === Xi && ro();
        var t = Xi.admit(e),
          r = Zi.get(t);
        return void 0 === r && Zi.set(t, (r = JSON.stringify(t))), r;
      }
      return JSON.stringify(e);
    },
    { reset: ro }
  );
function ro() {
  (Xi = new eo()), (Zi = new (mn ? WeakMap : Map)());
}
function no(e, t) {
  return new Ci(e.message, t.path.slice(), t.query, t.variables);
}
function io(e) {
  return [
    e.selectionSet,
    e.objectOrReference,
    e.context,
    e.context.canonizeResults,
  ];
}
var oo = (function () {
  function e(e) {
    var t = this;
    (this.knownResults = new (mn ? WeakMap : Map)()),
      (this.config = Te(Te({}, e), { addTypename: !1 !== e.addTypename })),
      (this.canon = e.canon || new eo()),
      (this.executeSelectionSet = Ai(
        function (e) {
          var r,
            n = e.context.canonizeResults,
            i = io(e);
          i[3] = !n;
          var o = (r = t.executeSelectionSet).peek.apply(r, i);
          return o
            ? n
              ? Te(Te({}, o), { result: t.canon.admit(o.result) })
              : o
            : (Wi(e.context.store, e.enclosingRef.__ref),
              t.execSelectionSetImpl(e));
        },
        {
          max: this.config.resultCacheMaxSize,
          keyArgs: io,
          makeCacheKey: function (e, t, r, n) {
            if (Hi(r.store))
              return r.store.makeCacheKey(
                e,
                ir(t) ? t.__ref : t,
                r.varString,
                n
              );
          },
        }
      )),
      (this.executeSubSelectedArray = Ai(
        function (e) {
          return (
            Wi(e.context.store, e.enclosingRef.__ref),
            t.execSubSelectedArrayImpl(e)
          );
        },
        {
          max: this.config.resultCacheMaxSize,
          makeCacheKey: function (e) {
            var t = e.field,
              r = e.array,
              n = e.context;
            if (Hi(n.store)) return n.store.makeCacheKey(t, r, n.varString);
          },
        }
      ));
  }
  return (
    (e.prototype.resetCanon = function () {
      this.canon = new eo();
    }),
    (e.prototype.diffQueryAgainstStore = function (e) {
      var t = e.store,
        r = e.query,
        n = e.rootId,
        i = void 0 === n ? "ROOT_QUERY" : n,
        o = e.variables,
        a = e.returnPartialData,
        s = void 0 === a || a,
        c = e.canonizeResults,
        u = void 0 === c || c,
        l = this.config.cache.policies;
      o = Te(Te({}, Er(gr(r))), o);
      var f = nr(i),
        p = this.executeSelectionSet({
          selectionSet: _r(r).selectionSet,
          objectOrReference: f,
          enclosingRef: f,
          context: {
            store: t,
            query: r,
            policies: l,
            variables: o,
            varString: to(o),
            canonizeResults: u,
            fragmentMap: er(br(r)),
            path: [],
          },
        }),
        h = p.missing && p.missing.length > 0;
      if (h && !s) throw p.missing[0];
      return { result: p.result, missing: p.missing, complete: !h };
    }),
    (e.prototype.isFresh = function (e, t, r, n) {
      if (Hi(n.store) && this.knownResults.get(e) === r) {
        var i = this.executeSelectionSet.peek(r, t, n, this.canon.isKnown(e));
        if (i && e === i.result) return !0;
      }
      return !1;
    }),
    (e.prototype.execSelectionSetImpl = function (e) {
      var t = this,
        r = e.selectionSet,
        n = e.objectOrReference,
        i = e.enclosingRef,
        o = e.context;
      if (
        ir(n) &&
        !o.policies.rootTypenamesById[n.__ref] &&
        !o.store.has(n.__ref)
      )
        return {
          result: this.canon.empty,
          missing: [
            no(
              __DEV__
                ? new Ce("Dangling reference to missing " + n.__ref + " object")
                : new Ce(5),
              o
            ),
          ],
        };
      var a = o.variables,
        s = o.policies,
        c = o.store,
        u = [],
        l = { result: null },
        f = c.getFieldValue(n, "__typename");
      function p() {
        return l.missing || (l.missing = []);
      }
      function h(e) {
        var t;
        return e.missing && (t = p()).push.apply(t, e.missing), e.result;
      }
      this.config.addTypename &&
        "string" == typeof f &&
        !s.rootIdsByTypename[f] &&
        u.push({ __typename: f });
      var d = new Set(r.selections);
      d.forEach(function (e) {
        var r;
        if (Jt(e, a))
          if (hr(e)) {
            var c = s.readField(
                {
                  fieldName: e.name.value,
                  field: e,
                  variables: o.variables,
                  from: n,
                },
                o
              ),
              l = fr(e);
            o.path.push(l),
              void 0 === c
                ? xr.added(e) ||
                  p().push(
                    no(
                      __DEV__
                        ? new Ce(
                            "Can't find field '" +
                              e.name.value +
                              "' on " +
                              (ir(n)
                                ? n.__ref + " object"
                                : "object " + JSON.stringify(n, null, 2))
                          )
                        : new Ce(6),
                      o
                    )
                  )
                : Array.isArray(c)
                ? (c = h(
                    t.executeSubSelectedArray({
                      field: e,
                      array: c,
                      enclosingRef: i,
                      context: o,
                    })
                  ))
                : e.selectionSet
                ? null != c &&
                  (c = h(
                    t.executeSelectionSet({
                      selectionSet: e.selectionSet,
                      objectOrReference: c,
                      enclosingRef: ir(c) ? c : i,
                      context: o,
                    })
                  ))
                : o.canonizeResults && (c = t.canon.pass(c)),
              void 0 !== c && u.push((((r = {})[l] = c), r)),
              Fe(o.path.pop() === l);
          } else {
            var y = tr(e, o.fragmentMap);
            y &&
              s.fragmentMatches(y, f) &&
              y.selectionSet.selections.forEach(d.add, d);
          }
      });
      var y = Fr(u);
      return (
        (l.result = o.canonizeResults ? this.canon.admit(y) : un(y)),
        this.knownResults.set(l.result, r),
        l
      );
    }),
    (e.prototype.execSubSelectedArrayImpl = function (e) {
      var t,
        r = this,
        n = e.field,
        i = e.array,
        o = e.enclosingRef,
        a = e.context;
      function s(e, r) {
        return (
          e.missing && (t = t || []).push.apply(t, e.missing),
          Fe(a.path.pop() === r),
          e.result
        );
      }
      return (
        n.selectionSet && (i = i.filter(a.store.canRead)),
        (i = i.map(function (e, t) {
          return null === e
            ? null
            : (a.path.push(t),
              Array.isArray(e)
                ? s(
                    r.executeSubSelectedArray({
                      field: n,
                      array: e,
                      enclosingRef: o,
                      context: a,
                    }),
                    t
                  )
                : n.selectionSet
                ? s(
                    r.executeSelectionSet({
                      selectionSet: n.selectionSet,
                      objectOrReference: e,
                      enclosingRef: ir(e) ? e : o,
                      context: a,
                    }),
                    t
                  )
                : (__DEV__ &&
                    (function (e, t, r) {
                      if (!t.selectionSet) {
                        var n = new Set([r]);
                        n.forEach(function (r) {
                          rr(r) &&
                            (__DEV__
                              ? Fe(
                                  !ir(r),
                                  "Missing selection set for object of type " +
                                    (function (e, t) {
                                      return ir(t)
                                        ? e.get(t.__ref, "__typename")
                                        : t && t.__typename;
                                    })(e, r) +
                                    " returned for query field " +
                                    t.name.value
                                )
                              : Fe(!ir(r), 7),
                            Object.values(r).forEach(n.add, n));
                        });
                      }
                    })(a.store, n, e),
                  Fe(a.path.pop() === t),
                  e));
        })),
        { result: a.canonizeResults ? this.canon.admit(i) : i, missing: t }
      );
    }),
    e
  );
})();
var ao = (function () {
    function e(e, t) {
      (this.cache = e), (this.reader = t);
    }
    return (
      (e.prototype.writeToStore = function (e, t) {
        var r = this,
          n = t.query,
          i = t.result,
          o = t.dataId,
          a = t.variables,
          s = t.overwrite,
          c = vr(n),
          u = new jr();
        a = Te(Te({}, Er(c)), a);
        var l = {
            store: e,
            written: Object.create(null),
            merge: function (e, t) {
              return u.merge(e, t);
            },
            variables: a,
            varString: to(a),
            fragmentMap: er(br(n)),
            overwrite: !!s,
            incomingById: new Map(),
            clientOnly: !1,
          },
          f = this.processSelectionSet({
            result: i || Object.create(null),
            dataId: o,
            selectionSet: c.selectionSet,
            mergeTree: { map: new Map() },
            context: l,
          });
        if (!ir(f))
          throw __DEV__
            ? new Ce("Could not identify object " + JSON.stringify(i))
            : new Ce(8);
        return (
          l.incomingById.forEach(function (t, n) {
            var i = t.fields,
              o = t.mergeTree,
              a = t.selections,
              s = nr(n);
            if (o && o.map.size) {
              var c = r.applyMerges(o, s, i, l);
              if (ir(c)) return;
              i = c;
            }
            if (__DEV__ && !l.overwrite) {
              var u = new Set();
              a.forEach(function (e) {
                hr(e) && e.selectionSet && u.add(e.name.value);
              });
              Object.keys(i).forEach(function (e) {
                (function (e) {
                  return u.has(ji(e));
                })(e) &&
                  !(function (e) {
                    var t = o && o.map.get(e);
                    return Boolean(t && t.info && t.info.merge);
                  })(e) &&
                  (function (e, t, r, n) {
                    var i = function (e) {
                        var t = n.getFieldValue(e, r);
                        return "object" == typeof t && t;
                      },
                      o = i(e);
                    if (!o) return;
                    var a = i(t);
                    if (!a) return;
                    if (ir(o)) return;
                    if (Un(o, a)) return;
                    if (
                      Object.keys(o).every(function (e) {
                        return void 0 !== n.getFieldValue(a, e);
                      })
                    )
                      return;
                    var s =
                        n.getFieldValue(e, "__typename") ||
                        n.getFieldValue(t, "__typename"),
                      c = ji(r),
                      u = s + "." + c;
                    if (po.has(u)) return;
                    po.add(u);
                    var l = [];
                    Array.isArray(o) ||
                      Array.isArray(a) ||
                      [o, a].forEach(function (e) {
                        var t = n.getFieldValue(e, "__typename");
                        "string" != typeof t || l.includes(t) || l.push(t);
                      });
                    __DEV__ &&
                      Fe.warn(
                        "Cache data may be lost when replacing the " +
                          c +
                          " field of a " +
                          s +
                          " object.\n\nTo address this problem (which is not a bug in Apollo Client), " +
                          (l.length
                            ? "either ensure all objects of type " +
                              l.join(" and ") +
                              " have an ID or a custom merge function, or "
                            : "") +
                          "define a custom merge function for the " +
                          u +
                          " field, so InMemoryCache can safely merge these objects:\n\n  existing: " +
                          JSON.stringify(o).slice(0, 1e3) +
                          "\n  incoming: " +
                          JSON.stringify(a).slice(0, 1e3) +
                          "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"
                      );
                  })(s, i, e, l.store);
              });
            }
            e.merge(n, i);
          }),
          e.retain(f.__ref),
          f
        );
      }),
      (e.prototype.processSelectionSet = function (e) {
        var t = this,
          r = e.dataId,
          n = e.result,
          i = e.selectionSet,
          o = e.context,
          a = e.mergeTree,
          s = this.cache.policies,
          c = s.identify(n, i, o.fragmentMap),
          u = c[0],
          l = c[1];
        if ("string" == typeof (r = r || u)) {
          var f = o.written[r] || (o.written[r] = []),
            p = nr(r);
          if (f.indexOf(i) >= 0) return p;
          if ((f.push(i), this.reader && this.reader.isFresh(n, p, i, o)))
            return p;
        }
        var h = Object.create(null);
        l && (h = o.merge(h, l));
        var d =
          (r && s.rootTypenamesById[r]) ||
          pr(n, i, o.fragmentMap) ||
          (r && o.store.get(r, "__typename"));
        "string" == typeof d && (h.__typename = d);
        var y = new Set(i.selections);
        if (
          (y.forEach(function (e) {
            var r;
            if (Jt(e, o.variables))
              if (hr(e)) {
                var i = fr(e),
                  c = n[i],
                  u = o.clientOnly;
                if (
                  ((o.clientOnly =
                    u ||
                    !(
                      !e.directives ||
                      !e.directives.some(function (e) {
                        return "client" === e.name.value;
                      })
                    )),
                  void 0 !== c)
                ) {
                  var l = s.getStoreFieldName({
                      typename: d,
                      fieldName: e.name.value,
                      field: e,
                      variables: o.variables,
                    }),
                    f = co(a, l),
                    p = t.processFieldValue(c, e, o, f),
                    v = void 0;
                  if (
                    e.selectionSet &&
                    !(v = o.store.getFieldValue(p, "__typename")) &&
                    ir(p)
                  ) {
                    var m = o.incomingById.get(p.__ref);
                    v = m && m.fields.__typename;
                  }
                  var b = s.getMergeFunction(d, e.name.value, v);
                  b ? (f.info = { field: e, typename: d, merge: b }) : fo(a, l),
                    (h = o.merge(h, (((r = {})[l] = p), r)));
                } else
                  o.clientOnly ||
                    xr.added(e) ||
                    (__DEV__ &&
                      Fe.error(
                        (
                          "Missing field '" +
                          fr(e) +
                          "' while writing result " +
                          JSON.stringify(n, null, 2)
                        ).substring(0, 1e3)
                      ));
                o.clientOnly = u;
              } else {
                var g = tr(e, o.fragmentMap);
                g &&
                  s.fragmentMatches(g, d, n, o.variables) &&
                  g.selectionSet.selections.forEach(y.add, y);
              }
          }),
          "string" == typeof r)
        ) {
          var v = o.incomingById.get(r);
          return (
            v
              ? ((v.fields = o.merge(v.fields, h)),
                (v.mergeTree = uo(v.mergeTree, a)),
                v.selections.forEach(y.add, y),
                (v.selections = y))
              : o.incomingById.set(r, {
                  fields: h,
                  mergeTree: lo(a) ? void 0 : a,
                  selections: y,
                }),
            nr(r)
          );
        }
        return h;
      }),
      (e.prototype.processFieldValue = function (e, t, r, n) {
        var i = this;
        return t.selectionSet && null !== e
          ? Array.isArray(e)
            ? e.map(function (e, o) {
                var a = i.processFieldValue(e, t, r, co(n, o));
                return fo(n, o), a;
              })
            : this.processSelectionSet({
                result: e,
                selectionSet: t.selectionSet,
                context: r,
                mergeTree: n,
              })
          : __DEV__
          ? sn(e)
          : e;
      }),
      (e.prototype.applyMerges = function (e, t, r, n, i) {
        var o,
          a = this;
        if (e.map.size && !ir(r)) {
          var s,
            c = Array.isArray(r) || (!ir(t) && !Vi(t)) ? void 0 : t,
            u = r;
          c && !i && (i = [ir(c) ? c.__ref : c]);
          var l = function (e, t) {
            return Array.isArray(e)
              ? "number" == typeof t
                ? e[t]
                : void 0
              : n.store.getFieldValue(e, String(t));
          };
          e.map.forEach(function (e, t) {
            var r = l(c, t),
              o = l(u, t);
            if (void 0 !== o) {
              i && i.push(t);
              var f = a.applyMerges(e, r, o, n, i);
              f !== o && (s = s || new Map()).set(t, f), i && Fe(i.pop() === t);
            }
          }),
            s &&
              ((r = Array.isArray(u) ? u.slice(0) : Te({}, u)),
              s.forEach(function (e, t) {
                r[t] = e;
              }));
        }
        return e.info
          ? this.cache.policies.runMergeFunction(
              t,
              r,
              e.info,
              n,
              i && (o = n.store).getStorage.apply(o, i)
            )
          : r;
      }),
      e
    );
  })(),
  so = [];
function co(e, t) {
  var r = e.map;
  return r.has(t) || r.set(t, so.pop() || { map: new Map() }), r.get(t);
}
function uo(e, t) {
  if (e === t || !t || lo(t)) return e;
  if (!e || lo(e)) return t;
  var r = e.info && t.info ? Te(Te({}, e.info), t.info) : e.info || t.info,
    n = e.map.size && t.map.size,
    i = { info: r, map: n ? new Map() : e.map.size ? e.map : t.map };
  if (n) {
    var o = new Set(t.map.keys());
    e.map.forEach(function (e, r) {
      i.map.set(r, uo(e, t.map.get(r))), o.delete(r);
    }),
      o.forEach(function (r) {
        i.map.set(r, uo(t.map.get(r), e.map.get(r)));
      });
  }
  return i;
}
function lo(e) {
  return !e || !(e.info || e.map.size);
}
function fo(e, t) {
  var r = e.map,
    n = r.get(t);
  n && lo(n) && (so.push(n), r.delete(t));
}
var po = new Set();
var ho = new ii(),
  yo = new WeakMap();
function vo(e) {
  var t = yo.get(e);
  return t || yo.set(e, (t = { vars: new Set(), dep: xi() })), t;
}
function mo(e) {
  var t = new Set(),
    r = new Set(),
    n = function (o) {
      if (arguments.length > 0) {
        if (e !== o) {
          (e = o),
            t.forEach(function (e) {
              vo(e).dep.dirty(n), bo(e);
            });
          var a = Array.from(r);
          r.clear(),
            a.forEach(function (t) {
              return t(e);
            });
        }
      } else {
        var s = ho.getValue();
        s && (i(s), vo(s).dep(n));
      }
      return e;
    };
  n.onNextChange = function (e) {
    return (
      r.add(e),
      function () {
        r.delete(e);
      }
    );
  };
  var i = (n.attachCache = function (e) {
    return t.add(e), vo(e).vars.add(n), n;
  });
  return (
    (n.forgetCache = function (e) {
      return t.delete(e);
    }),
    n
  );
}
function bo(e) {
  e.broadcastWatches && e.broadcastWatches();
}
function go(e) {
  return void 0 !== e.args ? e.args : e.field ? lr(e.field, e.variables) : null;
}
sr.setStringify(to);
var _o = function (e, t) {
    var r = e.__typename,
      n = e.id,
      i = e._id;
    if (
      "string" == typeof r &&
      (t &&
        (t.keyObject =
          void 0 !== n ? { id: n } : void 0 !== i ? { _id: i } : void 0),
      void 0 === n && (n = i),
      void 0 !== n)
    )
      return (
        r +
        ":" +
        ("number" == typeof n || "string" == typeof n ? n : JSON.stringify(n))
      );
  },
  Eo = function () {},
  wo = function (e, t) {
    return t.fieldName;
  },
  Oo = function (e, t, r) {
    return (0, r.mergeObjects)(e, t);
  },
  ko = function (e, t) {
    return t;
  },
  So = (function () {
    function e(e) {
      (this.config = e),
        (this.typePolicies = Object.create(null)),
        (this.toBeAdded = Object.create(null)),
        (this.supertypeMap = new Map()),
        (this.fuzzySubtypes = new Map()),
        (this.rootIdsByTypename = Object.create(null)),
        (this.rootTypenamesById = Object.create(null)),
        (this.usingPossibleTypes = !1),
        (this.config = Te({ dataIdFromObject: _o }, e)),
        (this.cache = this.config.cache),
        this.setRootTypename("Query"),
        this.setRootTypename("Mutation"),
        this.setRootTypename("Subscription"),
        e.possibleTypes && this.addPossibleTypes(e.possibleTypes),
        e.typePolicies && this.addTypePolicies(e.typePolicies);
    }
    return (
      (e.prototype.identify = function (e, t, r) {
        var n = t && r ? pr(e, t, r) : e.__typename;
        if (n === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
        for (
          var i,
            o = { typename: n, selectionSet: t, fragmentMap: r },
            a = n && this.getTypePolicy(n),
            s = (a && a.keyFn) || this.config.dataIdFromObject;
          s;

        ) {
          var c = s(e, o);
          if (!Array.isArray(c)) {
            i = c;
            break;
          }
          s = No(c);
        }
        return (
          (i = i ? String(i) : void 0), o.keyObject ? [i, o.keyObject] : [i]
        );
      }),
      (e.prototype.addTypePolicies = function (e) {
        var t = this;
        Object.keys(e).forEach(function (r) {
          var n = e[r],
            i = n.queryType,
            o = n.mutationType,
            a = n.subscriptionType,
            s = De(n, ["queryType", "mutationType", "subscriptionType"]);
          i && t.setRootTypename("Query", r),
            o && t.setRootTypename("Mutation", r),
            a && t.setRootTypename("Subscription", r),
            Fi.call(t.toBeAdded, r)
              ? t.toBeAdded[r].push(s)
              : (t.toBeAdded[r] = [s]);
        });
      }),
      (e.prototype.updateTypePolicy = function (e, t) {
        var r = this,
          n = this.getTypePolicy(e),
          i = t.keyFields,
          o = t.fields;
        function a(e, t) {
          e.merge =
            "function" == typeof t
              ? t
              : !0 === t
              ? Oo
              : !1 === t
              ? ko
              : e.merge;
        }
        a(n, t.merge),
          (n.keyFn =
            !1 === i
              ? Eo
              : Array.isArray(i)
              ? No(i)
              : "function" == typeof i
              ? i
              : n.keyFn),
          o &&
            Object.keys(o).forEach(function (t) {
              var n = r.getFieldPolicy(e, t, !0),
                i = o[t];
              if ("function" == typeof i) n.read = i;
              else {
                var s = i.keyArgs,
                  c = i.read,
                  u = i.merge;
                (n.keyFn =
                  !1 === s
                    ? wo
                    : Array.isArray(s)
                    ? xo(s)
                    : "function" == typeof s
                    ? s
                    : n.keyFn),
                  "function" == typeof c && (n.read = c),
                  a(n, u);
              }
              n.read && n.merge && (n.keyFn = n.keyFn || wo);
            });
      }),
      (e.prototype.setRootTypename = function (e, t) {
        void 0 === t && (t = e);
        var r = "ROOT_" + e.toUpperCase(),
          n = this.rootTypenamesById[r];
        t !== n &&
          (__DEV__
            ? Fe(
                !n || n === e,
                "Cannot change root " + e + " __typename more than once"
              )
            : Fe(!n || n === e, 2),
          n && delete this.rootIdsByTypename[n],
          (this.rootIdsByTypename[t] = r),
          (this.rootTypenamesById[r] = t));
      }),
      (e.prototype.addPossibleTypes = function (e) {
        var t = this;
        (this.usingPossibleTypes = !0),
          Object.keys(e).forEach(function (r) {
            t.getSupertypeSet(r, !0),
              e[r].forEach(function (e) {
                t.getSupertypeSet(e, !0).add(r);
                var n = e.match(Pi);
                (n && n[0] === e) || t.fuzzySubtypes.set(e, new RegExp(e));
              });
          });
      }),
      (e.prototype.getTypePolicy = function (e) {
        var t = this;
        if (!Fi.call(this.typePolicies, e)) {
          var r = (this.typePolicies[e] = Object.create(null));
          r.fields = Object.create(null);
          var n = this.supertypeMap.get(e);
          n &&
            n.size &&
            n.forEach(function (e) {
              var n = t.getTypePolicy(e),
                i = n.fields,
                o = De(n, ["fields"]);
              Object.assign(r, o), Object.assign(r.fields, i);
            });
        }
        var i = this.toBeAdded[e];
        return (
          i &&
            i.length &&
            i.splice(0).forEach(function (r) {
              t.updateTypePolicy(e, r);
            }),
          this.typePolicies[e]
        );
      }),
      (e.prototype.getFieldPolicy = function (e, t, r) {
        if (e) {
          var n = this.getTypePolicy(e).fields;
          return n[t] || (r && (n[t] = Object.create(null)));
        }
      }),
      (e.prototype.getSupertypeSet = function (e, t) {
        var r = this.supertypeMap.get(e);
        return !r && t && this.supertypeMap.set(e, (r = new Set())), r;
      }),
      (e.prototype.fragmentMatches = function (e, t, r, n) {
        var i = this;
        if (!e.typeCondition) return !0;
        if (!t) return !1;
        var o = e.typeCondition.name.value;
        if (t === o) return !0;
        if (this.usingPossibleTypes && this.supertypeMap.has(o))
          for (
            var a = this.getSupertypeSet(t, !0),
              s = [a],
              c = function (e) {
                var t = i.getSupertypeSet(e, !1);
                t && t.size && s.indexOf(t) < 0 && s.push(t);
              },
              u = !(!r || !this.fuzzySubtypes.size),
              l = !1,
              f = 0;
            f < s.length;
            ++f
          ) {
            var p = s[f];
            if (p.has(o))
              return (
                a.has(o) ||
                  (l &&
                    __DEV__ &&
                    Fe.warn("Inferring subtype " + t + " of supertype " + o),
                  a.add(o)),
                !0
              );
            p.forEach(c),
              u &&
                f === s.length - 1 &&
                Mi(e.selectionSet, r, n) &&
                ((u = !1),
                (l = !0),
                this.fuzzySubtypes.forEach(function (e, r) {
                  var n = t.match(e);
                  n && n[0] === t && c(r);
                }));
          }
        return !1;
      }),
      (e.prototype.hasKeyArgs = function (e, t) {
        var r = this.getFieldPolicy(e, t, !1);
        return !(!r || !r.keyFn);
      }),
      (e.prototype.getStoreFieldName = function (e) {
        var t,
          r = e.typename,
          n = e.fieldName,
          i = this.getFieldPolicy(r, n, !1),
          o = i && i.keyFn;
        if (o && r)
          for (
            var a = {
                typename: r,
                fieldName: n,
                field: e.field || null,
                variables: e.variables,
              },
              s = go(e);
            o;

          ) {
            var c = o(s, a);
            if (!Array.isArray(c)) {
              t = c || n;
              break;
            }
            o = xo(c);
          }
        return (
          void 0 === t &&
            (t = e.field
              ? (function (e, t) {
                  var r = null;
                  e.directives &&
                    ((r = {}),
                    e.directives.forEach(function (e) {
                      (r[e.name.value] = {}),
                        e.arguments &&
                          e.arguments.forEach(function (n) {
                            var i = n.name,
                              o = n.value;
                            return or(r[e.name.value], i, o, t);
                          });
                    }));
                  var n = null;
                  return (
                    e.arguments &&
                      e.arguments.length &&
                      ((n = {}),
                      e.arguments.forEach(function (e) {
                        var r = e.name,
                          i = e.value;
                        return or(n, r, i, t);
                      })),
                    sr(e.name.value, n, r)
                  );
                })(e.field, e.variables)
              : sr(n, go(e))),
          !1 === t ? n : n === ji(t) ? t : n + ":" + t
        );
      }),
      (e.prototype.readField = function (e, t) {
        var r = e.from;
        if (r && (e.field || e.fieldName)) {
          if (void 0 === e.typename) {
            var n = t.store.getFieldValue(r, "__typename");
            n && (e.typename = n);
          }
          var i = this.getStoreFieldName(e),
            o = ji(i),
            a = t.store.getFieldValue(r, i),
            s = this.getFieldPolicy(e.typename, o, !1),
            c = s && s.read;
          if (c) {
            var u = To(
              this,
              r,
              e,
              t,
              t.store.getStorage(ir(r) ? r.__ref : r, i)
            );
            return ho.withValue(this.cache, c, [a, u]);
          }
          return a;
        }
      }),
      (e.prototype.getMergeFunction = function (e, t, r) {
        var n = this.getFieldPolicy(e, t, !1),
          i = n && n.merge;
        return !i && r && (i = (n = this.getTypePolicy(r)) && n.merge), i;
      }),
      (e.prototype.runMergeFunction = function (e, t, r, n, i) {
        var o = r.field,
          a = r.typename,
          s = r.merge;
        return s === Oo
          ? Do(n.store)(e, t)
          : s === ko
          ? t
          : (n.overwrite && (e = void 0),
            s(
              e,
              t,
              To(
                this,
                void 0,
                {
                  typename: a,
                  fieldName: o.name.value,
                  field: o,
                  variables: n.variables,
                },
                n,
                i || Object.create(null)
              )
            ));
      }),
      e
    );
  })();
function To(e, t, r, n, i) {
  var o = e.getStoreFieldName(r),
    a = ji(o),
    s = r.variables || n.variables,
    c = n.store,
    u = c.toReference,
    l = c.canRead;
  return {
    args: go(r),
    field: r.field || null,
    fieldName: a,
    storeFieldName: o,
    variables: s,
    isReference: ir,
    toReference: u,
    storage: i,
    cache: e.cache,
    canRead: l,
    readField: function (r, i) {
      var o;
      if ("string" == typeof r)
        o = { fieldName: r, from: arguments.length > 1 ? i : t };
      else {
        if (!rr(r))
          return void (
            __DEV__ &&
            Fe.warn(
              "Unexpected readField arguments: " + wn(Array.from(arguments))
            )
          );
        (o = Te({}, r)), Fi.call(r, "from") || (o.from = t);
      }
      return (
        __DEV__ &&
          void 0 === o.from &&
          __DEV__ &&
          Fe.warn(
            "Undefined 'from' passed to readField with arguments " +
              wn(Array.from(arguments))
          ),
        void 0 === o.variables && (o.variables = s),
        e.readField(o, n)
      );
    },
    mergeObjects: Do(n.store),
  };
}
function Do(e) {
  return function (t, r) {
    if (Array.isArray(t) || Array.isArray(r))
      throw __DEV__ ? new Ce("Cannot automatically merge arrays") : new Ce(3);
    if (rr(t) && rr(r)) {
      var n = e.getFieldValue(t, "__typename"),
        i = e.getFieldValue(r, "__typename");
      if (n && i && n !== i) return r;
      if (ir(t) && Vi(r)) return e.merge(t.__ref, r), t;
      if (Vi(t) && ir(r)) return e.merge(t, r.__ref), r;
      if (Vi(t) && Vi(r)) return Te(Te({}, t), r);
    }
    return r;
  };
}
function xo(e) {
  return function (t, r) {
    return t ? r.fieldName + ":" + JSON.stringify(Ao(t, e, !1)) : r.fieldName;
  };
}
function No(e) {
  var t = new Zn(mn);
  return function (r, n) {
    var i;
    if (n.selectionSet && n.fragmentMap) {
      var o = t.lookupArray([n.selectionSet, n.fragmentMap]);
      i = o.aliasMap || (o.aliasMap = Io(n.selectionSet, n.fragmentMap));
    }
    var a = (n.keyObject = Ao(r, e, !0, i));
    return n.typename + ":" + JSON.stringify(a);
  };
}
function Io(e, t) {
  var r = Object.create(null),
    n = new Set([e]);
  return (
    n.forEach(function (e) {
      e.selections.forEach(function (e) {
        if (hr(e)) {
          if (e.alias) {
            var i = e.alias.value,
              o = e.name.value;
            if (o !== i)
              (r.aliases || (r.aliases = Object.create(null)))[o] = i;
          }
          if (e.selectionSet)
            (r.subsets || (r.subsets = Object.create(null)))[e.name.value] = Io(
              e.selectionSet,
              t
            );
        } else {
          var a = tr(e, t);
          a && n.add(a.selectionSet);
        }
      });
    }),
    r
  );
}
function Ao(e, t, r, n) {
  var i,
    o,
    a = Object.create(null);
  return (
    t.forEach(function (t) {
      if (Array.isArray(t)) {
        if ("string" == typeof o && "string" == typeof i) {
          var s = n && n.subsets,
            c = s && s[o];
          a[o] = Ao(e[i], t, r, c);
        }
      } else {
        var u = n && n.aliases,
          l = (u && u[t]) || t;
        Fi.call(e, l)
          ? (a[(o = t)] = e[(i = l)])
          : (__DEV__
              ? Fe(!r, "Missing field '" + l + "' while computing key fields")
              : Fe(!r, 4),
            (i = o = void 0));
      }
    }),
    a
  );
}
var Ro = {
    dataIdFromObject: _o,
    addTypename: !0,
    resultCaching: !0,
    typePolicies: {},
  },
  Co = (function (e) {
    function t(t) {
      void 0 === t && (t = {});
      var r = e.call(this) || this;
      return (
        (r.watches = new Set()),
        (r.typenameDocumentCache = new Map()),
        (r.makeVar = mo),
        (r.txCount = 0),
        (r.config = Te(Te({}, Ro), t)),
        (r.addTypename = !!r.config.addTypename),
        (r.policies = new So({
          cache: r,
          dataIdFromObject: r.config.dataIdFromObject,
          possibleTypes: r.config.possibleTypes,
          typePolicies: r.config.typePolicies,
        })),
        r.init(),
        r
      );
    }
    return (
      Se(t, e),
      (t.prototype.init = function () {
        var e = (this.data = new $i.Root({
          policies: this.policies,
          resultCaching: this.config.resultCaching,
        }));
        (this.optimisticData = e.stump), this.resetResultCache();
      }),
      (t.prototype.resetResultCache = function (e) {
        var t = this,
          r = this.storeReader;
        (this.storeWriter = new ao(
          this,
          (this.storeReader = new oo({
            cache: this,
            addTypename: this.addTypename,
            resultCacheMaxSize: this.config.resultCacheMaxSize,
            canon: e ? void 0 : r && r.canon,
          }))
        )),
          (this.maybeBroadcastWatch = Ai(
            function (e, r) {
              return t.broadcastWatch(e, r);
            },
            {
              max: this.config.resultCacheMaxSize,
              makeCacheKey: function (e) {
                var r = e.optimistic ? t.optimisticData : t.data;
                if (Hi(r)) {
                  var n = e.optimistic,
                    i = e.rootId,
                    o = e.variables;
                  return r.makeCacheKey(
                    e.query,
                    e.callback,
                    to({ optimistic: n, rootId: i, variables: o })
                  );
                }
              },
            }
          )),
          new Set([this.data.group, this.optimisticData.group]).forEach(
            function (e) {
              return e.resetCaching();
            }
          );
      }),
      (t.prototype.restore = function (e) {
        return this.init(), e && this.data.replace(e), this;
      }),
      (t.prototype.extract = function (e) {
        return (
          void 0 === e && (e = !1),
          (e ? this.optimisticData : this.data).extract()
        );
      }),
      (t.prototype.read = function (e) {
        var t = e.returnPartialData,
          r = void 0 !== t && t;
        try {
          return (
            this.storeReader.diffQueryAgainstStore(
              Te(Te({}, e), {
                store: e.optimistic ? this.optimisticData : this.data,
                config: this.config,
                returnPartialData: r,
              })
            ).result || null
          );
        } catch (n) {
          if (n instanceof Ci) return null;
          throw n;
        }
      }),
      (t.prototype.write = function (e) {
        try {
          return ++this.txCount, this.storeWriter.writeToStore(this.data, e);
        } finally {
          --this.txCount || !1 === e.broadcast || this.broadcastWatches();
        }
      }),
      (t.prototype.modify = function (e) {
        if (Fi.call(e, "id") && !e.id) return !1;
        var t = e.optimistic ? this.optimisticData : this.data;
        try {
          return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields);
        } finally {
          --this.txCount || !1 === e.broadcast || this.broadcastWatches();
        }
      }),
      (t.prototype.diff = function (e) {
        return this.storeReader.diffQueryAgainstStore(
          Te(Te({}, e), {
            store: e.optimistic ? this.optimisticData : this.data,
            rootId: e.id || "ROOT_QUERY",
            config: this.config,
          })
        );
      }),
      (t.prototype.watch = function (e) {
        var t,
          r = this;
        return (
          this.watches.size ||
            vo((t = this)).vars.forEach(function (e) {
              return e.attachCache(t);
            }),
          this.watches.add(e),
          e.immediate && this.maybeBroadcastWatch(e),
          function () {
            r.watches.delete(e) &&
              !r.watches.size &&
              (function (e) {
                vo(e).vars.forEach(function (t) {
                  return t.forgetCache(e);
                });
              })(r),
              r.maybeBroadcastWatch.forget(e);
          }
        );
      }),
      (t.prototype.gc = function (e) {
        to.reset();
        var t = this.optimisticData.gc();
        return (
          e &&
            !this.txCount &&
            (e.resetResultCache
              ? this.resetResultCache(e.resetResultIdentities)
              : e.resetResultIdentities && this.storeReader.resetCanon()),
          t
        );
      }),
      (t.prototype.retain = function (e, t) {
        return (t ? this.optimisticData : this.data).retain(e);
      }),
      (t.prototype.release = function (e, t) {
        return (t ? this.optimisticData : this.data).release(e);
      }),
      (t.prototype.identify = function (e) {
        return ir(e) ? e.__ref : this.policies.identify(e)[0];
      }),
      (t.prototype.evict = function (e) {
        if (!e.id) {
          if (Fi.call(e, "id")) return !1;
          e = Te(Te({}, e), { id: "ROOT_QUERY" });
        }
        try {
          return ++this.txCount, this.optimisticData.evict(e);
        } finally {
          --this.txCount || !1 === e.broadcast || this.broadcastWatches();
        }
      }),
      (t.prototype.reset = function () {
        return (
          this.init(), this.broadcastWatches(), to.reset(), Promise.resolve()
        );
      }),
      (t.prototype.removeOptimistic = function (e) {
        var t = this.optimisticData.removeLayer(e);
        t !== this.optimisticData &&
          ((this.optimisticData = t), this.broadcastWatches());
      }),
      (t.prototype.batch = function (e) {
        var t = this,
          r = e.update,
          n = e.optimistic,
          i = void 0 === n || n,
          o = e.removeOptimistic,
          a = e.onWatchUpdated,
          s = function (e) {
            var n = t,
              i = n.data,
              o = n.optimisticData;
            ++t.txCount, e && (t.data = t.optimisticData = e);
            try {
              r(t);
            } finally {
              --t.txCount, (t.data = i), (t.optimisticData = o);
            }
          },
          c = new Set();
        a &&
          !this.txCount &&
          this.broadcastWatches(
            Te(Te({}, e), {
              onWatchUpdated: function (e) {
                return c.add(e), !1;
              },
            })
          ),
          "string" == typeof i
            ? (this.optimisticData = this.optimisticData.addLayer(i, s))
            : !1 === i
            ? s(this.data)
            : s(),
          "string" == typeof o &&
            (this.optimisticData = this.optimisticData.removeLayer(o)),
          a && c.size
            ? (this.broadcastWatches(
                Te(Te({}, e), {
                  onWatchUpdated: function (e, t) {
                    var r = a.call(this, e, t);
                    return !1 !== r && c.delete(e), r;
                  },
                })
              ),
              c.size &&
                c.forEach(function (e) {
                  return t.maybeBroadcastWatch.dirty(e);
                }))
            : this.broadcastWatches(e);
      }),
      (t.prototype.performTransaction = function (e, t) {
        return this.batch({ update: e, optimistic: t || null !== t });
      }),
      (t.prototype.transformDocument = function (e) {
        if (this.addTypename) {
          var t = this.typenameDocumentCache.get(e);
          return (
            t ||
              ((t = xr(e)),
              this.typenameDocumentCache.set(e, t),
              this.typenameDocumentCache.set(t, t)),
            t
          );
        }
        return e;
      }),
      (t.prototype.broadcastWatches = function (e) {
        var t = this;
        this.txCount ||
          this.watches.forEach(function (r) {
            return t.maybeBroadcastWatch(r, e);
          });
      }),
      (t.prototype.broadcastWatch = function (e, t) {
        var r = e.lastDiff,
          n = this.diff({
            query: e.query,
            variables: e.variables,
            optimistic: e.optimistic,
          });
        (t &&
          (e.optimistic &&
            "string" == typeof t.optimistic &&
            (n.fromOptimisticTransaction = !0),
          t.onWatchUpdated && !1 === t.onWatchUpdated.call(this, e, n, r))) ||
          (r && Un(r.result, n.result)) ||
          e.callback((e.lastDiff = n), r);
      }),
      t
    );
  })(Ri);
var Fo,
  Po,
  jo = (function (e) {
    function t(r) {
      var n,
        i,
        o = r.graphQLErrors,
        a = r.clientErrors,
        s = r.networkError,
        c = r.errorMessage,
        u = r.extraInfo,
        l = e.call(this, c) || this;
      return (
        (l.graphQLErrors = o || []),
        (l.clientErrors = a || []),
        (l.networkError = s || null),
        (l.message =
          c ||
          ((i = ""),
          (yn((n = l).graphQLErrors) || yn(n.clientErrors)) &&
            (n.graphQLErrors || [])
              .concat(n.clientErrors || [])
              .forEach(function (e) {
                var t = e ? e.message : "Error message not found.";
                i += t + "\n";
              }),
          n.networkError && (i += n.networkError.message + "\n"),
          (i = i.replace(/\n$/, "")))),
        (l.extraInfo = u),
        (l.__proto__ = t.prototype),
        l
      );
    }
    return Se(t, e), t;
  })(Error);
function Mo(e) {
  return !!e && e < 7;
}
((Po = Fo || (Fo = {}))[(Po.loading = 1)] = "loading"),
  (Po[(Po.setVariables = 2)] = "setVariables"),
  (Po[(Po.fetchMore = 3)] = "fetchMore"),
  (Po[(Po.refetch = 4)] = "refetch"),
  (Po[(Po.poll = 6)] = "poll"),
  (Po[(Po.ready = 7)] = "ready"),
  (Po[(Po.error = 8)] = "error");
var Vo = Object.assign,
  Lo = Object.hasOwnProperty,
  qo = !1,
  Qo = (function (e) {
    function t(t) {
      var r = t.queryManager,
        n = t.queryInfo,
        i = t.options,
        o =
          e.call(this, function (e) {
            try {
              var t = e._subscription._observer;
              t && !t.error && (t.error = Bo);
            } catch (i) {}
            var r = !o.observers.size;
            o.observers.add(e);
            var n = o.last;
            return (
              n && n.error
                ? e.error && e.error(n.error)
                : n && n.result && e.next && e.next(n.result),
              r && o.reobserve().catch(function () {}),
              function () {
                o.observers.delete(e) && !o.observers.size && o.tearDownQuery();
              }
            );
          }) || this;
      (o.observers = new Set()),
        (o.subscriptions = new Set()),
        (o.isTornDown = !1),
        (o.options = i),
        (o.queryId = n.queryId || r.generateQueryId());
      var a = vr(i.query);
      return (
        (o.queryName = a && a.name && a.name.value),
        (o.initialFetchPolicy = i.fetchPolicy || "cache-first"),
        (o.queryManager = r),
        (o.queryInfo = n),
        o
      );
    }
    return (
      Se(t, e),
      Object.defineProperty(t.prototype, "variables", {
        get: function () {
          return this.options.variables;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.result = function () {
        var e = this;
        return new Promise(function (t, r) {
          var n = {
              next: function (r) {
                t(r),
                  e.observers.delete(n),
                  e.observers.size || e.queryManager.removeQuery(e.queryId),
                  setTimeout(function () {
                    i.unsubscribe();
                  }, 0);
              },
              error: r,
            },
            i = e.subscribe(n);
        });
      }),
      (t.prototype.getCurrentResult = function (e) {
        void 0 === e && (e = !0);
        var t = this.getLastResult(!0),
          r =
            this.queryInfo.networkStatus || (t && t.networkStatus) || Fo.ready,
          n = Te(Te({}, t), { loading: Mo(r), networkStatus: r }),
          i = this.options.fetchPolicy,
          o = void 0 === i ? "cache-first" : i;
        if (
          (t ||
            ("network-only" !== o && "no-cache" !== o && "standby" !== o)) &&
          !this.queryManager.transform(this.options.query).hasForcedResolvers
        ) {
          var a = this.queryInfo.getDiff();
          (a.complete || this.options.returnPartialData) && (n.data = a.result),
            Un(n.data, {}) && (n.data = void 0),
            a.complete
              ? (n.networkStatus !== Fo.loading ||
                  ("cache-first" !== o && "cache-only" !== o) ||
                  ((n.networkStatus = Fo.ready), (n.loading = !1)),
                delete n.partial)
              : "no-cache" !== o && (n.partial = !0),
            !__DEV__ ||
              a.complete ||
              this.options.partialRefetch ||
              n.loading ||
              n.data ||
              n.error ||
              Uo(a.missing);
        }
        return e && this.updateLastResult(n), n;
      }),
      (t.prototype.isDifferentFromLastResult = function (e) {
        return !this.last || !Un(this.last.result, e);
      }),
      (t.prototype.getLast = function (e, t) {
        var r = this.last;
        if (r && r[e] && (!t || Un(r.variables, this.variables))) return r[e];
      }),
      (t.prototype.getLastResult = function (e) {
        return this.getLast("result", e);
      }),
      (t.prototype.getLastError = function (e) {
        return this.getLast("error", e);
      }),
      (t.prototype.resetLastResults = function () {
        delete this.last, (this.isTornDown = !1);
      }),
      (t.prototype.resetQueryStoreErrors = function () {
        this.queryManager.resetErrors(this.queryId);
      }),
      (t.prototype.refetch = function (e) {
        var t,
          r = { pollInterval: 0 },
          n = this.options.fetchPolicy;
        if (
          ("no-cache" === n
            ? (r.fetchPolicy = "no-cache")
            : "cache-and-network" !== n && (r.fetchPolicy = "network-only"),
          __DEV__ && e && Lo.call(e, "variables"))
        ) {
          var i = gr(this.options.query),
            o = i.variableDefinitions;
          (o &&
            o.some(function (e) {
              return "variables" === e.variable.name.value;
            })) ||
            (__DEV__ &&
              Fe.warn(
                "Called refetch(" +
                  JSON.stringify(e) +
                  ") for query " +
                  ((null === (t = i.name) || void 0 === t ? void 0 : t.value) ||
                    JSON.stringify(i)) +
                  ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"
              ));
        }
        return (
          e &&
            !Un(this.options.variables, e) &&
            (r.variables = this.options.variables =
              Te(Te({}, this.options.variables), e)),
          this.queryInfo.resetLastWrite(),
          this.reobserve(r, Fo.refetch)
        );
      }),
      (t.prototype.fetchMore = function (e) {
        var t = this,
          r = Te(
            Te(
              {},
              e.query
                ? e
                : Te(Te(Te({}, this.options), e), {
                    variables: Te(Te({}, this.options.variables), e.variables),
                  })
            ),
            { fetchPolicy: "no-cache" }
          ),
          n = this.queryManager.generateQueryId();
        return (
          r.notifyOnNetworkStatusChange &&
            ((this.queryInfo.networkStatus = Fo.fetchMore), this.observe()),
          this.queryManager
            .fetchQuery(n, r, Fo.fetchMore)
            .then(function (n) {
              var i = n.data,
                o = e.updateQuery;
              return (
                o
                  ? (__DEV__ &&
                      !qo &&
                      (__DEV__ &&
                        Fe.warn(
                          "The updateQuery callback for fetchMore is deprecated, and will be removed\nin the next major version of Apollo Client.\n\nPlease convert updateQuery functions to field policies with appropriate\nread and merge functions, or use/adapt a helper function (such as\nconcatPagination, offsetLimitPagination, or relayStylePagination) from\n@apollo/client/utilities.\n\nThe field policy system handles pagination more effectively than a\nhand-written updateQuery function, and you only need to define the policy\nonce, rather than every time you call fetchMore."
                        ),
                      (qo = !0)),
                    t.updateQuery(function (e) {
                      return o(e, {
                        fetchMoreResult: i,
                        variables: r.variables,
                      });
                    }))
                  : t.queryManager.cache.writeQuery({
                      query: r.query,
                      variables: r.variables,
                      data: i,
                    }),
                n
              );
            })
            .finally(function () {
              t.queryManager.stopQuery(n), t.reobserve();
            })
        );
      }),
      (t.prototype.subscribeToMore = function (e) {
        var t = this,
          r = this.queryManager
            .startGraphQLSubscription({
              query: e.document,
              variables: e.variables,
              context: e.context,
            })
            .subscribe({
              next: function (r) {
                var n = e.updateQuery;
                n &&
                  t.updateQuery(function (e, t) {
                    var i = t.variables;
                    return n(e, { subscriptionData: r, variables: i });
                  });
              },
              error: function (t) {
                e.onError
                  ? e.onError(t)
                  : __DEV__ &&
                    Fe.error("Unhandled GraphQL subscription error", t);
              },
            });
        return (
          this.subscriptions.add(r),
          function () {
            t.subscriptions.delete(r) && r.unsubscribe();
          }
        );
      }),
      (t.prototype.setOptions = function (e) {
        return this.reobserve(e);
      }),
      (t.prototype.setVariables = function (e) {
        return Un(this.variables, e)
          ? this.observers.size
            ? this.result()
            : Promise.resolve()
          : ((this.options.variables = e),
            this.observers.size
              ? this.reobserve(
                  { fetchPolicy: this.initialFetchPolicy, variables: e },
                  Fo.setVariables
                )
              : Promise.resolve());
      }),
      (t.prototype.updateQuery = function (e) {
        var t = this.queryManager,
          r = e(
            t.cache.diff({
              query: this.options.query,
              variables: this.variables,
              returnPartialData: !0,
              optimistic: !1,
            }).result,
            { variables: this.variables }
          );
        r &&
          (t.cache.writeQuery({
            query: this.options.query,
            data: r,
            variables: this.variables,
          }),
          t.broadcastQueries());
      }),
      (t.prototype.startPolling = function (e) {
        (this.options.pollInterval = e), this.updatePolling();
      }),
      (t.prototype.stopPolling = function () {
        (this.options.pollInterval = 0), this.updatePolling();
      }),
      (t.prototype.fetch = function (e, t) {
        return (
          this.queryManager.setObservableQuery(this),
          this.queryManager.fetchQueryObservable(this.queryId, e, t)
        );
      }),
      (t.prototype.updatePolling = function () {
        var e = this;
        if (!this.queryManager.ssrMode) {
          var t = this.pollingInfo,
            r = this.options.pollInterval;
          if (r) {
            if (!t || t.interval !== r) {
              __DEV__
                ? Fe(
                    r,
                    "Attempted to start a polling query without a polling interval."
                  )
                : Fe(r, 12),
                ((t || (this.pollingInfo = {})).interval = r);
              var n = function () {
                  e.pollingInfo &&
                    (Mo(e.queryInfo.networkStatus)
                      ? i()
                      : e
                          .reobserve({ fetchPolicy: "network-only" }, Fo.poll)
                          .then(i, i));
                },
                i = function () {
                  var t = e.pollingInfo;
                  t &&
                    (clearTimeout(t.timeout),
                    (t.timeout = setTimeout(n, t.interval)));
                };
              i();
            }
          } else t && (clearTimeout(t.timeout), delete this.pollingInfo);
        }
      }),
      (t.prototype.updateLastResult = function (e, t) {
        return (
          void 0 === t && (t = this.variables),
          (this.last = Te(Te({}, this.last), {
            result: this.queryManager.assumeImmutableResults ? e : sn(e),
            variables: t,
          })),
          yn(e.errors) || delete this.last.error,
          this.last
        );
      }),
      (t.prototype.reobserve = function (e, t) {
        var r = this;
        this.isTornDown = !1;
        var n = t === Fo.refetch || t === Fo.fetchMore || t === Fo.poll,
          i = this.options.variables,
          o = n ? gn(this.options, e) : Vo(this.options, gn(e));
        n ||
          (this.updatePolling(),
          e &&
            e.variables &&
            !e.fetchPolicy &&
            !Un(e.variables, i) &&
            ((o.fetchPolicy = this.initialFetchPolicy),
            void 0 === t && (t = Fo.setVariables)));
        var a = o.variables && Te({}, o.variables),
          s = this.fetch(o, t),
          c = {
            next: function (e) {
              r.reportResult(e, a);
            },
            error: function (e) {
              r.reportError(e, a);
            },
          };
        return (
          n ||
            (this.concast &&
              this.observer &&
              this.concast.removeObserver(this.observer, !0),
            (this.concast = s),
            (this.observer = c)),
          s.addObserver(c),
          s.promise
        );
      }),
      (t.prototype.observe = function () {
        this.reportResult(this.getCurrentResult(!1), this.variables);
      }),
      (t.prototype.reportResult = function (e, t) {
        (this.getLastError() || this.isDifferentFromLastResult(e)) &&
          (this.updateLastResult(e, t), ln(this.observers, "next", e));
      }),
      (t.prototype.reportError = function (e, t) {
        var r = Te(Te({}, this.getLastResult()), {
          error: e,
          errors: e.graphQLErrors,
          networkStatus: Fo.error,
          loading: !1,
        });
        this.updateLastResult(r, t),
          ln(this.observers, "error", (this.last.error = e));
      }),
      (t.prototype.hasObservers = function () {
        return this.observers.size > 0;
      }),
      (t.prototype.tearDownQuery = function () {
        this.isTornDown ||
          (this.concast &&
            this.observer &&
            (this.concast.removeObserver(this.observer),
            delete this.concast,
            delete this.observer),
          this.stopPolling(),
          this.subscriptions.forEach(function (e) {
            return e.unsubscribe();
          }),
          this.subscriptions.clear(),
          this.queryManager.stopQuery(this.queryId),
          this.observers.clear(),
          (this.isTornDown = !0));
      }),
      t
    );
  })(nn);
function Bo(e) {
  __DEV__ && Fe.error("Unhandled error", e.message, e.stack);
}
function Uo(e) {
  __DEV__ &&
    yn(e) &&
    __DEV__ &&
    Fe.debug(
      "Missing cache result fields: " +
        e
          .map(function (e) {
            return e.path.join(".");
          })
          .join(", "),
      e
    );
}
pn(Qo);
var $o = (function () {
    function e(e) {
      var t = e.cache,
        r = e.client,
        n = e.resolvers,
        i = e.fragmentMatcher;
      (this.cache = t),
        r && (this.client = r),
        n && this.addResolvers(n),
        i && this.setFragmentMatcher(i);
    }
    return (
      (e.prototype.addResolvers = function (e) {
        var t = this;
        (this.resolvers = this.resolvers || {}),
          Array.isArray(e)
            ? e.forEach(function (e) {
                t.resolvers = Cr(t.resolvers, e);
              })
            : (this.resolvers = Cr(this.resolvers, e));
      }),
      (e.prototype.setResolvers = function (e) {
        (this.resolvers = {}), this.addResolvers(e);
      }),
      (e.prototype.getResolvers = function () {
        return this.resolvers || {};
      }),
      (e.prototype.runResolvers = function (e) {
        var t = e.document,
          r = e.remoteResult,
          n = e.context,
          i = e.variables,
          o = e.onlyRunForcedResolvers,
          a = void 0 !== o && o;
        return xe(this, void 0, void 0, function () {
          return Ne(this, function (e) {
            return t
              ? [
                  2,
                  this.resolveDocument(
                    t,
                    r.data,
                    n,
                    i,
                    this.fragmentMatcher,
                    a
                  ).then(function (e) {
                    return Te(Te({}, r), { data: e.result });
                  }),
                ]
              : [2, r];
          });
        });
      }),
      (e.prototype.setFragmentMatcher = function (e) {
        this.fragmentMatcher = e;
      }),
      (e.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher;
      }),
      (e.prototype.clientQuery = function (e) {
        return Ht(["client"], e) && this.resolvers ? e : null;
      }),
      (e.prototype.serverQuery = function (e) {
        return (function (e) {
          yr(e);
          var t = Dr(
            [
              {
                test: function (e) {
                  return "client" === e.name.value;
                },
                remove: !0,
              },
            ],
            e
          );
          return (
            t &&
              (t = Lt(t, {
                FragmentDefinition: {
                  enter: function (e) {
                    if (
                      e.selectionSet &&
                      e.selectionSet.selections.every(function (e) {
                        return hr(e) && "__typename" === e.name.value;
                      })
                    )
                      return null;
                  },
                },
              })),
            t
          );
        })(e);
      }),
      (e.prototype.prepareContext = function (e) {
        var t = this.cache;
        return Te(Te({}, e), {
          cache: t,
          getCacheKey: function (e) {
            return t.identify(e);
          },
        });
      }),
      (e.prototype.addExportedVariables = function (e, t, r) {
        return (
          void 0 === t && (t = {}),
          void 0 === r && (r = {}),
          xe(this, void 0, void 0, function () {
            return Ne(this, function (n) {
              return e
                ? [
                    2,
                    this.resolveDocument(
                      e,
                      this.buildRootValueFromCache(e, t) || {},
                      this.prepareContext(r),
                      t
                    ).then(function (e) {
                      return Te(Te({}, t), e.exportedVariables);
                    }),
                  ]
                : [2, Te({}, t)];
            });
          })
        );
      }),
      (e.prototype.shouldForceResolvers = function (e) {
        var t = !1;
        return (
          Lt(e, {
            Directive: {
              enter: function (e) {
                if (
                  "client" === e.name.value &&
                  e.arguments &&
                  (t = e.arguments.some(function (e) {
                    return (
                      "always" === e.name.value &&
                      "BooleanValue" === e.value.kind &&
                      !0 === e.value.value
                    );
                  }))
                )
                  return Vt;
              },
            },
          }),
          t
        );
      }),
      (e.prototype.buildRootValueFromCache = function (e, t) {
        return this.cache.diff({
          query: Ar(e),
          variables: t,
          returnPartialData: !0,
          optimistic: !1,
        }).result;
      }),
      (e.prototype.resolveDocument = function (e, t, r, n, i, o) {
        return (
          void 0 === r && (r = {}),
          void 0 === n && (n = {}),
          void 0 === i &&
            (i = function () {
              return !0;
            }),
          void 0 === o && (o = !1),
          xe(this, void 0, void 0, function () {
            var a, s, c, u, l, f, p, h, d;
            return Ne(this, function (y) {
              return (
                (a = _r(e)),
                (s = br(e)),
                (c = er(s)),
                (u = a.operation),
                (l = u ? u.charAt(0).toUpperCase() + u.slice(1) : "Query"),
                (p = (f = this).cache),
                (h = f.client),
                (d = {
                  fragmentMap: c,
                  context: Te(Te({}, r), { cache: p, client: h }),
                  variables: n,
                  fragmentMatcher: i,
                  defaultOperationType: l,
                  exportedVariables: {},
                  onlyRunForcedResolvers: o,
                }),
                [
                  2,
                  this.resolveSelectionSet(a.selectionSet, t, d).then(function (
                    e
                  ) {
                    return {
                      result: e,
                      exportedVariables: d.exportedVariables,
                    };
                  }),
                ]
              );
            });
          })
        );
      }),
      (e.prototype.resolveSelectionSet = function (e, t, r) {
        return xe(this, void 0, void 0, function () {
          var n,
            i,
            o,
            a,
            s,
            c = this;
          return Ne(this, function (u) {
            return (
              (n = r.fragmentMap),
              (i = r.context),
              (o = r.variables),
              (a = [t]),
              (s = function (e) {
                return xe(c, void 0, void 0, function () {
                  var s, c;
                  return Ne(this, function (u) {
                    return Jt(e, o)
                      ? hr(e)
                        ? [
                            2,
                            this.resolveField(e, t, r).then(function (t) {
                              var r;
                              void 0 !== t &&
                                a.push((((r = {})[fr(e)] = t), r));
                            }),
                          ]
                        : (dr(e)
                            ? (s = e)
                            : ((s = n[e.name.value]),
                              __DEV__
                                ? Fe(s, "No fragment named " + e.name.value)
                                : Fe(s, 11)),
                          s &&
                          s.typeCondition &&
                          ((c = s.typeCondition.name.value),
                          r.fragmentMatcher(t, c, i))
                            ? [
                                2,
                                this.resolveSelectionSet(
                                  s.selectionSet,
                                  t,
                                  r
                                ).then(function (e) {
                                  a.push(e);
                                }),
                              ]
                            : [2])
                      : [2];
                  });
                });
              }),
              [
                2,
                Promise.all(e.selections.map(s)).then(function () {
                  return Fr(a);
                }),
              ]
            );
          });
        });
      }),
      (e.prototype.resolveField = function (e, t, r) {
        return xe(this, void 0, void 0, function () {
          var n,
            i,
            o,
            a,
            s,
            c,
            u,
            l,
            f,
            p = this;
          return Ne(this, function (h) {
            return (
              (n = r.variables),
              (i = e.name.value),
              (o = fr(e)),
              (a = i !== o),
              (s = t[o] || t[i]),
              (c = Promise.resolve(s)),
              (r.onlyRunForcedResolvers && !this.shouldForceResolvers(e)) ||
                ((u = t.__typename || r.defaultOperationType),
                (l = this.resolvers && this.resolvers[u]) &&
                  (f = l[a ? i : o]) &&
                  (c = Promise.resolve(
                    ho.withValue(this.cache, f, [
                      t,
                      lr(e, n),
                      r.context,
                      { field: e, fragmentMap: r.fragmentMap },
                    ])
                  ))),
              [
                2,
                c.then(function (t) {
                  return (
                    void 0 === t && (t = s),
                    e.directives &&
                      e.directives.forEach(function (e) {
                        "export" === e.name.value &&
                          e.arguments &&
                          e.arguments.forEach(function (e) {
                            "as" === e.name.value &&
                              "StringValue" === e.value.kind &&
                              (r.exportedVariables[e.value.value] = t);
                          });
                      }),
                    e.selectionSet
                      ? null == t
                        ? t
                        : Array.isArray(t)
                        ? p.resolveSubSelectedArray(e, t, r)
                        : e.selectionSet
                        ? p.resolveSelectionSet(e.selectionSet, t, r)
                        : void 0
                      : t
                  );
                }),
              ]
            );
          });
        });
      }),
      (e.prototype.resolveSubSelectedArray = function (e, t, r) {
        var n = this;
        return Promise.all(
          t.map(function (t) {
            return null === t
              ? null
              : Array.isArray(t)
              ? n.resolveSubSelectedArray(e, t, r)
              : e.selectionSet
              ? n.resolveSelectionSet(e.selectionSet, t, r)
              : void 0;
          })
        );
      }),
      e
    );
  })(),
  zo = new (mn ? WeakMap : Map)();
function Ko(e, t) {
  var r = e[t];
  "function" == typeof r &&
    (e[t] = function () {
      return zo.set(e, (zo.get(e) + 1) % 1e15), r.apply(this, arguments);
    });
}
function Wo(e) {
  e.notifyTimeout &&
    (clearTimeout(e.notifyTimeout), (e.notifyTimeout = void 0));
}
var Go = (function () {
  function e(e, t) {
    void 0 === t && (t = e.generateQueryId()),
      (this.queryId = t),
      (this.listeners = new Set()),
      (this.document = null),
      (this.lastRequestId = 1),
      (this.subscriptions = new Set()),
      (this.stopped = !1),
      (this.dirty = !1),
      (this.observableQuery = null);
    var r = (this.cache = e.cache);
    zo.has(r) ||
      (zo.set(r, 0), Ko(r, "evict"), Ko(r, "modify"), Ko(r, "reset"));
  }
  return (
    (e.prototype.init = function (e) {
      var t = e.networkStatus || Fo.loading;
      return (
        this.variables &&
          this.networkStatus !== Fo.loading &&
          !Un(this.variables, e.variables) &&
          (t = Fo.setVariables),
        Un(e.variables, this.variables) || (this.lastDiff = void 0),
        Object.assign(this, {
          document: e.document,
          variables: e.variables,
          networkError: null,
          graphQLErrors: this.graphQLErrors || [],
          networkStatus: t,
        }),
        e.observableQuery && this.setObservableQuery(e.observableQuery),
        e.lastRequestId && (this.lastRequestId = e.lastRequestId),
        this
      );
    }),
    (e.prototype.reset = function () {
      Wo(this), (this.lastDiff = void 0), (this.dirty = !1);
    }),
    (e.prototype.getDiff = function (e) {
      void 0 === e && (e = this.variables);
      var t = this.getDiffOptions(e);
      if (this.lastDiff && Un(t, this.lastDiff.options))
        return this.lastDiff.diff;
      this.updateWatch((this.variables = e));
      var r = this.observableQuery;
      if (r && "no-cache" === r.options.fetchPolicy) return { complete: !1 };
      var n = this.cache.diff(t);
      return this.updateLastDiff(n, t), n;
    }),
    (e.prototype.updateLastDiff = function (e, t) {
      this.lastDiff = e
        ? { diff: e, options: t || this.getDiffOptions() }
        : void 0;
    }),
    (e.prototype.getDiffOptions = function (e) {
      void 0 === e && (e = this.variables);
      var t = this.observableQuery;
      return {
        query: this.document,
        variables: e,
        returnPartialData: !0,
        optimistic: !0,
        canonizeResults: !t || !1 !== t.options.canonizeResults,
      };
    }),
    (e.prototype.setDiff = function (e) {
      var t = this,
        r = this.lastDiff && this.lastDiff.diff;
      this.updateLastDiff(e),
        this.dirty ||
          Un(r && r.result, e && e.result) ||
          ((this.dirty = !0),
          this.notifyTimeout ||
            (this.notifyTimeout = setTimeout(function () {
              return t.notify();
            }, 0)));
    }),
    (e.prototype.setObservableQuery = function (e) {
      var t = this;
      e !== this.observableQuery &&
        (this.oqListener && this.listeners.delete(this.oqListener),
        (this.observableQuery = e),
        e
          ? ((e.queryInfo = this),
            this.listeners.add(
              (this.oqListener = function () {
                t.getDiff().fromOptimisticTransaction
                  ? e.observe()
                  : e.reobserve();
              })
            ))
          : delete this.oqListener);
    }),
    (e.prototype.notify = function () {
      var e = this;
      Wo(this),
        this.shouldNotify() &&
          this.listeners.forEach(function (t) {
            return t(e);
          }),
        (this.dirty = !1);
    }),
    (e.prototype.shouldNotify = function () {
      if (!this.dirty || !this.listeners.size) return !1;
      if (Mo(this.networkStatus) && this.observableQuery) {
        var e = this.observableQuery.options.fetchPolicy;
        if ("cache-only" !== e && "cache-and-network" !== e) return !1;
      }
      return !0;
    }),
    (e.prototype.stop = function () {
      if (!this.stopped) {
        (this.stopped = !0),
          this.reset(),
          this.cancel(),
          (this.cancel = e.prototype.cancel),
          this.subscriptions.forEach(function (e) {
            return e.unsubscribe();
          });
        var t = this.observableQuery;
        t && t.stopPolling();
      }
    }),
    (e.prototype.cancel = function () {}),
    (e.prototype.updateWatch = function (e) {
      var t = this;
      void 0 === e && (e = this.variables);
      var r = this.observableQuery;
      if (!r || "no-cache" !== r.options.fetchPolicy) {
        var n = Te(Te({}, this.getDiffOptions(e)), {
          watcher: this,
          callback: function (e) {
            return t.setDiff(e);
          },
        });
        (this.lastWatch && Un(n, this.lastWatch)) ||
          (this.cancel(),
          (this.cancel = this.cache.watch((this.lastWatch = n))));
      }
    }),
    (e.prototype.resetLastWrite = function () {
      this.lastWrite = void 0;
    }),
    (e.prototype.shouldWrite = function (e, t) {
      var r = this.lastWrite;
      return !(
        r &&
        r.dmCount === zo.get(this.cache) &&
        Un(t, r.variables) &&
        Un(e.data, r.result.data)
      );
    }),
    (e.prototype.markResult = function (e, t, r) {
      var n = this;
      (this.graphQLErrors = yn(e.errors) ? e.errors : []),
        this.reset(),
        "no-cache" === t.fetchPolicy
          ? this.updateLastDiff(
              { result: e.data, complete: !0 },
              this.getDiffOptions(t.variables)
            )
          : 0 !== r &&
            (Yo(e, t.errorPolicy)
              ? this.cache.performTransaction(function (i) {
                  if (n.shouldWrite(e, t.variables))
                    i.writeQuery({
                      query: n.document,
                      data: e.data,
                      variables: t.variables,
                      overwrite: 1 === r,
                    }),
                      (n.lastWrite = {
                        result: e,
                        variables: t.variables,
                        dmCount: zo.get(n.cache),
                      });
                  else if (n.lastDiff && n.lastDiff.diff.complete)
                    return void (e.data = n.lastDiff.diff.result);
                  var o = n.getDiffOptions(t.variables),
                    a = i.diff(o);
                  n.stopped || n.updateWatch(t.variables),
                    n.updateLastDiff(a, o),
                    a.complete && (e.data = a.result);
                })
              : (this.lastWrite = void 0));
    }),
    (e.prototype.markReady = function () {
      return (this.networkError = null), (this.networkStatus = Fo.ready);
    }),
    (e.prototype.markError = function (e) {
      return (
        (this.networkStatus = Fo.error),
        (this.lastWrite = void 0),
        this.reset(),
        e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors),
        e.networkError && (this.networkError = e.networkError),
        e
      );
    }),
    e
  );
})();
function Yo(e, t) {
  void 0 === t && (t = "none");
  var r = "ignore" === t || "all" === t,
    n = !vn(e);
  return !n && r && e.data && (n = !0), n;
}
var Jo = Object.prototype.hasOwnProperty,
  Ho = (function () {
    function e(e) {
      var t = e.cache,
        r = e.link,
        n = e.queryDeduplication,
        i = void 0 !== n && n,
        o = e.onBroadcast,
        a = e.ssrMode,
        s = void 0 !== a && a,
        c = e.clientAwareness,
        u = void 0 === c ? {} : c,
        l = e.localState,
        f = e.assumeImmutableResults;
      (this.clientAwareness = {}),
        (this.queries = new Map()),
        (this.fetchCancelFns = new Map()),
        (this.transformCache = new (mn ? WeakMap : Map)()),
        (this.queryIdCounter = 1),
        (this.requestIdCounter = 1),
        (this.mutationIdCounter = 1),
        (this.inFlightLinkObservables = new Map()),
        (this.cache = t),
        (this.link = r),
        (this.queryDeduplication = i),
        (this.clientAwareness = u),
        (this.localState = l || new $o({ cache: t })),
        (this.ssrMode = s),
        (this.assumeImmutableResults = !!f),
        (this.onBroadcast = o) && (this.mutationStore = Object.create(null));
    }
    return (
      (e.prototype.stop = function () {
        var e = this;
        this.queries.forEach(function (t, r) {
          e.stopQueryNoBroadcast(r);
        }),
          this.cancelPendingFetches(
            __DEV__
              ? new Ce("QueryManager stopped while query was in flight")
              : new Ce(13)
          );
      }),
      (e.prototype.cancelPendingFetches = function (e) {
        this.fetchCancelFns.forEach(function (t) {
          return t(e);
        }),
          this.fetchCancelFns.clear();
      }),
      (e.prototype.mutate = function (e) {
        var t = e.mutation,
          r = e.variables,
          n = e.optimisticResponse,
          i = e.updateQueries,
          o = e.refetchQueries,
          a = void 0 === o ? [] : o,
          s = e.awaitRefetchQueries,
          c = void 0 !== s && s,
          u = e.update,
          l = e.onQueryUpdated,
          f = e.errorPolicy,
          p = void 0 === f ? "none" : f,
          h = e.fetchPolicy,
          d = void 0 === h ? "network-only" : h,
          y = e.keepRootFields,
          v = e.context;
        return xe(this, void 0, void 0, function () {
          var e, o, s;
          return Ne(this, function (f) {
            switch (f.label) {
              case 0:
                return (
                  __DEV__
                    ? Fe(
                        t,
                        "mutation option is required. You must specify your GraphQL document in the mutation option."
                      )
                    : Fe(t, 14),
                  __DEV__
                    ? Fe(
                        "network-only" === d || "no-cache" === d,
                        "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write."
                      )
                    : Fe("network-only" === d || "no-cache" === d, 15),
                  (e = this.generateMutationId()),
                  (t = this.transform(t).document),
                  (r = this.getVariables(t, r)),
                  this.transform(t).hasClientExports
                    ? [4, this.localState.addExportedVariables(t, r, v)]
                    : [3, 2]
                );
              case 1:
                (r = f.sent()), (f.label = 2);
              case 2:
                return (
                  (o =
                    this.mutationStore &&
                    (this.mutationStore[e] = {
                      mutation: t,
                      variables: r,
                      loading: !0,
                      error: null,
                    })),
                  n &&
                    this.markMutationOptimistic(n, {
                      mutationId: e,
                      document: t,
                      variables: r,
                      fetchPolicy: d,
                      errorPolicy: p,
                      context: v,
                      updateQueries: i,
                      update: u,
                      keepRootFields: y,
                    }),
                  this.broadcastQueries(),
                  (s = this),
                  [
                    2,
                    new Promise(function (f, h) {
                      return fn(
                        s.getObservableFromLink(
                          t,
                          Te(Te({}, v), { optimisticResponse: n }),
                          r,
                          !1
                        ),
                        function (f) {
                          if (vn(f) && "none" === p)
                            throw new jo({ graphQLErrors: f.errors });
                          o && ((o.loading = !1), (o.error = null));
                          var h = Te({}, f);
                          return (
                            "function" == typeof a && (a = a(h)),
                            "ignore" === p && vn(h) && delete h.errors,
                            s.markMutationResult({
                              mutationId: e,
                              result: h,
                              document: t,
                              variables: r,
                              fetchPolicy: d,
                              errorPolicy: p,
                              context: v,
                              update: u,
                              updateQueries: i,
                              awaitRefetchQueries: c,
                              refetchQueries: a,
                              removeOptimistic: n ? e : void 0,
                              onQueryUpdated: l,
                              keepRootFields: y,
                            })
                          );
                        }
                      ).subscribe({
                        next: function (e) {
                          s.broadcastQueries(), f(e);
                        },
                        error: function (t) {
                          o && ((o.loading = !1), (o.error = t)),
                            n && s.cache.removeOptimistic(e),
                            s.broadcastQueries(),
                            h(
                              t instanceof jo ? t : new jo({ networkError: t })
                            );
                        },
                      });
                    }),
                  ]
                );
            }
          });
        });
      }),
      (e.prototype.markMutationResult = function (e, t) {
        var r = this;
        void 0 === t && (t = this.cache);
        var n = e.result,
          i = [],
          o = "no-cache" === e.fetchPolicy;
        if (!o && Yo(n, e.errorPolicy)) {
          i.push({
            result: n.data,
            dataId: "ROOT_MUTATION",
            query: e.document,
            variables: e.variables,
          });
          var a = e.updateQueries;
          a &&
            this.queries.forEach(function (e, o) {
              var s = e.observableQuery,
                c = s && s.queryName;
              if (c && Jo.call(a, c)) {
                var u = a[c],
                  l = r.queries.get(o),
                  f = l.document,
                  p = l.variables,
                  h = t.diff({
                    query: f,
                    variables: p,
                    returnPartialData: !0,
                    optimistic: !1,
                  }),
                  d = h.result;
                if (h.complete && d) {
                  var y = u(d, {
                    mutationResult: n,
                    queryName: (f && mr(f)) || void 0,
                    queryVariables: p,
                  });
                  y &&
                    i.push({
                      result: y,
                      dataId: "ROOT_QUERY",
                      query: f,
                      variables: p,
                    });
                }
              }
            });
        }
        if (
          i.length > 0 ||
          e.refetchQueries ||
          e.update ||
          e.onQueryUpdated ||
          e.removeOptimistic
        ) {
          var s = [];
          if (
            (this.refetchQueries({
              updateCache: function (t) {
                o ||
                  i.forEach(function (e) {
                    return t.write(e);
                  });
                var a = e.update;
                if (a) {
                  if (!o) {
                    var s = t.diff({
                      id: "ROOT_MUTATION",
                      query: r.transform(e.document).asQuery,
                      variables: e.variables,
                      optimistic: !1,
                      returnPartialData: !0,
                    });
                    s.complete && (n = Te(Te({}, n), { data: s.result }));
                  }
                  a(t, n, { context: e.context, variables: e.variables });
                }
                o ||
                  e.keepRootFields ||
                  t.modify({
                    id: "ROOT_MUTATION",
                    fields: function (e, t) {
                      var r = t.fieldName,
                        n = t.DELETE;
                      return "__typename" === r ? e : n;
                    },
                  });
              },
              include: e.refetchQueries,
              optimistic: !1,
              removeOptimistic: e.removeOptimistic,
              onQueryUpdated: e.onQueryUpdated || null,
            }).forEach(function (e) {
              return s.push(e);
            }),
            e.awaitRefetchQueries || e.onQueryUpdated)
          )
            return Promise.all(s).then(function () {
              return n;
            });
        }
        return Promise.resolve(n);
      }),
      (e.prototype.markMutationOptimistic = function (e, t) {
        var r = this,
          n = "function" == typeof e ? e(t.variables) : e;
        return this.cache.recordOptimisticTransaction(function (e) {
          try {
            r.markMutationResult(Te(Te({}, t), { result: { data: n } }), e);
          } catch (i) {
            __DEV__ && Fe.error(i);
          }
        }, t.mutationId);
      }),
      (e.prototype.fetchQuery = function (e, t, r) {
        return this.fetchQueryObservable(e, t, r).promise;
      }),
      (e.prototype.getQueryStore = function () {
        var e = Object.create(null);
        return (
          this.queries.forEach(function (t, r) {
            e[r] = {
              variables: t.variables,
              networkStatus: t.networkStatus,
              networkError: t.networkError,
              graphQLErrors: t.graphQLErrors,
            };
          }),
          e
        );
      }),
      (e.prototype.resetErrors = function (e) {
        var t = this.queries.get(e);
        t && ((t.networkError = void 0), (t.graphQLErrors = []));
      }),
      (e.prototype.transform = function (e) {
        var t,
          r = this.transformCache;
        if (!r.has(e)) {
          var n = this.cache.transformDocument(e),
            i = ((t = this.cache.transformForLink(n)), Dr([Nr], yr(t))),
            o = this.localState.clientQuery(n),
            a = i && this.localState.serverQuery(i),
            s = {
              document: n,
              hasClientExports: Xt(n),
              hasForcedResolvers: this.localState.shouldForceResolvers(n),
              clientQuery: o,
              serverQuery: a,
              defaultVars: Er(vr(n)),
              asQuery: Te(Te({}, n), {
                definitions: n.definitions.map(function (e) {
                  return "OperationDefinition" === e.kind &&
                    "query" !== e.operation
                    ? Te(Te({}, e), { operation: "query" })
                    : e;
                }),
              }),
            },
            c = function (e) {
              e && !r.has(e) && r.set(e, s);
            };
          c(e), c(n), c(o), c(a);
        }
        return r.get(e);
      }),
      (e.prototype.getVariables = function (e, t) {
        return Te(Te({}, this.transform(e).defaultVars), t);
      }),
      (e.prototype.watchQuery = function (e) {
        void 0 ===
          (e = Te(Te({}, e), {
            variables: this.getVariables(e.query, e.variables),
          })).notifyOnNetworkStatusChange &&
          (e.notifyOnNetworkStatusChange = !1);
        var t = new Go(this),
          r = new Qo({ queryManager: this, queryInfo: t, options: e });
        return (
          this.queries.set(r.queryId, t),
          t.init({
            document: e.query,
            observableQuery: r,
            variables: e.variables,
          }),
          r
        );
      }),
      (e.prototype.query = function (e, t) {
        var r = this;
        return (
          void 0 === t && (t = this.generateQueryId()),
          __DEV__
            ? Fe(
                e.query,
                "query option is required. You must specify your GraphQL document in the query option."
              )
            : Fe(e.query, 16),
          __DEV__
            ? Fe(
                "Document" === e.query.kind,
                'You must wrap the query string in a "gql" tag.'
              )
            : Fe("Document" === e.query.kind, 17),
          __DEV__
            ? Fe(
                !e.returnPartialData,
                "returnPartialData option only supported on watchQuery."
              )
            : Fe(!e.returnPartialData, 18),
          __DEV__
            ? Fe(
                !e.pollInterval,
                "pollInterval option only supported on watchQuery."
              )
            : Fe(!e.pollInterval, 19),
          this.fetchQuery(t, e).finally(function () {
            return r.stopQuery(t);
          })
        );
      }),
      (e.prototype.generateQueryId = function () {
        return String(this.queryIdCounter++);
      }),
      (e.prototype.generateRequestId = function () {
        return this.requestIdCounter++;
      }),
      (e.prototype.generateMutationId = function () {
        return String(this.mutationIdCounter++);
      }),
      (e.prototype.stopQueryInStore = function (e) {
        this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
      }),
      (e.prototype.stopQueryInStoreNoBroadcast = function (e) {
        var t = this.queries.get(e);
        t && t.stop();
      }),
      (e.prototype.clearStore = function () {
        return (
          this.cancelPendingFetches(
            __DEV__
              ? new Ce(
                  "Store reset while query was in flight (not completed in link chain)"
                )
              : new Ce(20)
          ),
          this.queries.forEach(function (e) {
            e.observableQuery ? (e.networkStatus = Fo.loading) : e.stop();
          }),
          this.mutationStore && (this.mutationStore = Object.create(null)),
          this.cache.reset()
        );
      }),
      (e.prototype.resetStore = function () {
        var e = this;
        return this.clearStore().then(function () {
          return e.reFetchObservableQueries();
        });
      }),
      (e.prototype.getObservableQueries = function (e) {
        var t = this;
        void 0 === e && (e = "active");
        var r = new Map(),
          n = new Map(),
          i = new Set();
        return (
          Array.isArray(e) &&
            e.forEach(function (e) {
              var r;
              "string" == typeof e
                ? n.set(e, !1)
                : rr((r = e)) &&
                  "Document" === r.kind &&
                  Array.isArray(r.definitions)
                ? n.set(t.transform(e).document, !1)
                : rr(e) && e.query && i.add(e);
            }),
          this.queries.forEach(function (t, i) {
            var o = t.observableQuery,
              a = t.document;
            if (o) {
              if ("all" === e) return void r.set(i, o);
              var s = o.queryName;
              if ("standby" === o.options.fetchPolicy || !o.hasObservers())
                return;
              ("active" === e || (s && n.has(s)) || (a && n.has(a))) &&
                (r.set(i, o), s && n.set(s, !0), a && n.set(a, !0));
            }
          }),
          i.size &&
            i.forEach(function (e) {
              var n = En("legacyOneTimeQuery"),
                i = t
                  .getQuery(n)
                  .init({ document: e.query, variables: e.variables }),
                o = new Qo({
                  queryManager: t,
                  queryInfo: i,
                  options: Te(Te({}, e), { fetchPolicy: "network-only" }),
                });
              Fe(o.queryId === n), i.setObservableQuery(o), r.set(n, o);
            }),
          __DEV__ &&
            n.size &&
            n.forEach(function (e, t) {
              e ||
                (__DEV__ &&
                  Fe.warn(
                    "Unknown query " +
                      ("string" == typeof t ? "named " : "") +
                      JSON.stringify(t, null, 2) +
                      " requested in refetchQueries options.include array"
                  ));
            }),
          r
        );
      }),
      (e.prototype.reFetchObservableQueries = function (e) {
        var t = this;
        void 0 === e && (e = !1);
        var r = [];
        return (
          this.getObservableQueries(e ? "all" : "active").forEach(function (
            n,
            i
          ) {
            var o = n.options.fetchPolicy;
            n.resetLastResults(),
              (e || ("standby" !== o && "cache-only" !== o)) &&
                r.push(n.refetch()),
              t.getQuery(i).setDiff(null);
          }),
          this.broadcastQueries(),
          Promise.all(r)
        );
      }),
      (e.prototype.setObservableQuery = function (e) {
        this.getQuery(e.queryId).setObservableQuery(e);
      }),
      (e.prototype.startGraphQLSubscription = function (e) {
        var t = this,
          r = e.query,
          n = e.fetchPolicy,
          i = e.errorPolicy,
          o = e.variables,
          a = e.context,
          s = void 0 === a ? {} : a;
        (r = this.transform(r).document), (o = this.getVariables(r, o));
        var c = function (e) {
          return t.getObservableFromLink(r, s, e).map(function (o) {
            if (
              ("no-cache" !== n &&
                (Yo(o, i) &&
                  t.cache.write({
                    query: r,
                    result: o.data,
                    dataId: "ROOT_SUBSCRIPTION",
                    variables: e,
                  }),
                t.broadcastQueries()),
              vn(o))
            )
              throw new jo({ graphQLErrors: o.errors });
            return o;
          });
        };
        if (this.transform(r).hasClientExports) {
          var u = this.localState.addExportedVariables(r, o, s).then(c);
          return new nn(function (e) {
            var t = null;
            return (
              u.then(function (r) {
                return (t = r.subscribe(e));
              }, e.error),
              function () {
                return t && t.unsubscribe();
              }
            );
          });
        }
        return c(o);
      }),
      (e.prototype.stopQuery = function (e) {
        this.stopQueryNoBroadcast(e), this.broadcastQueries();
      }),
      (e.prototype.stopQueryNoBroadcast = function (e) {
        this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
      }),
      (e.prototype.removeQuery = function (e) {
        this.fetchCancelFns.delete(e),
          this.getQuery(e).stop(),
          this.queries.delete(e);
      }),
      (e.prototype.broadcastQueries = function () {
        this.onBroadcast && this.onBroadcast(),
          this.queries.forEach(function (e) {
            return e.notify();
          });
      }),
      (e.prototype.getLocalState = function () {
        return this.localState;
      }),
      (e.prototype.getObservableFromLink = function (e, t, r, n) {
        var i,
          o,
          a = this;
        void 0 === n &&
          (n =
            null !== (i = null == t ? void 0 : t.queryDeduplication) &&
            void 0 !== i
              ? i
              : this.queryDeduplication);
        var s = this.transform(e).serverQuery;
        if (s) {
          var c = this.inFlightLinkObservables,
            u = this.link,
            l = {
              query: s,
              variables: r,
              operationName: mr(s) || void 0,
              context: this.prepareContext(Te(Te({}, t), { forceFetch: !n })),
            };
          if (((t = l.context), n)) {
            var f = c.get(s) || new Map();
            c.set(s, f);
            var p = to(r);
            if (!(o = f.get(p))) {
              var h = new dn([In(u, l)]);
              f.set(p, (o = h)),
                h.cleanup(function () {
                  f.delete(p) && f.size < 1 && c.delete(s);
                });
            }
          } else o = new dn([In(u, l)]);
        } else
          (o = new dn([nn.of({ data: {} })])), (t = this.prepareContext(t));
        var d = this.transform(e).clientQuery;
        return (
          d &&
            (o = fn(o, function (e) {
              return a.localState.runResolvers({
                document: d,
                remoteResult: e,
                context: t,
                variables: r,
              });
            })),
          o
        );
      }),
      (e.prototype.getResultsFromLink = function (e, t, r) {
        var n = (e.lastRequestId = this.generateRequestId());
        return fn(
          this.getObservableFromLink(e.document, r.context, r.variables),
          function (i) {
            var o = yn(i.errors);
            if (n >= e.lastRequestId) {
              if (o && "none" === r.errorPolicy)
                throw e.markError(new jo({ graphQLErrors: i.errors }));
              e.markResult(i, r, t), e.markReady();
            }
            var a = {
              data: i.data,
              loading: !1,
              networkStatus: e.networkStatus || Fo.ready,
            };
            return o && "ignore" !== r.errorPolicy && (a.errors = i.errors), a;
          },
          function (t) {
            var r = t.hasOwnProperty("graphQLErrors")
              ? t
              : new jo({ networkError: t });
            throw (n >= e.lastRequestId && e.markError(r), r);
          }
        );
      }),
      (e.prototype.fetchQueryObservable = function (e, t, r) {
        var n = this;
        void 0 === r && (r = Fo.loading);
        var i = this.transform(t.query).document,
          o = this.getVariables(i, t.variables),
          a = this.getQuery(e),
          s = t.fetchPolicy,
          c = void 0 === s ? "cache-first" : s,
          u = t.errorPolicy,
          l = void 0 === u ? "none" : u,
          f = t.returnPartialData,
          p = void 0 !== f && f,
          h = t.notifyOnNetworkStatusChange,
          d = void 0 !== h && h,
          y = t.context,
          v = void 0 === y ? {} : y,
          m = Object.assign({}, t, {
            query: i,
            variables: o,
            fetchPolicy: c,
            errorPolicy: l,
            returnPartialData: p,
            notifyOnNetworkStatusChange: d,
            context: v,
          }),
          b = function (e) {
            return (m.variables = e), n.fetchQueryByPolicy(a, m, r);
          };
        this.fetchCancelFns.set(e, function (e) {
          setTimeout(function () {
            return g.cancel(e);
          });
        });
        var g = new dn(
          this.transform(m.query).hasClientExports
            ? this.localState
                .addExportedVariables(m.query, m.variables, m.context)
                .then(b)
            : b(m.variables)
        );
        return (
          g.cleanup(function () {
            n.fetchCancelFns.delete(e),
              (function (e) {
                var t = e.fetchPolicy,
                  r = void 0 === t ? "cache-first" : t,
                  n = e.nextFetchPolicy;
                n &&
                  (e.fetchPolicy = "function" == typeof n ? n.call(e, r) : n);
              })(t);
          }),
          g
        );
      }),
      (e.prototype.refetchQueries = function (e) {
        var t = this,
          r = e.updateCache,
          n = e.include,
          i = e.optimistic,
          o = void 0 !== i && i,
          a = e.removeOptimistic,
          s = void 0 === a ? (o ? En("refetchQueries") : void 0) : a,
          c = e.onQueryUpdated,
          u = new Map();
        n &&
          this.getObservableQueries(n).forEach(function (e, r) {
            u.set(r, { oq: e, lastDiff: t.getQuery(r).getDiff() });
          });
        var l = new Map();
        return (
          r &&
            this.cache.batch({
              update: r,
              optimistic: (o && s) || !1,
              removeOptimistic: s,
              onWatchUpdated: function (e, t, r) {
                var n = e.watcher instanceof Go && e.watcher.observableQuery;
                if (n) {
                  if (c) {
                    u.delete(n.queryId);
                    var i = c(n, t, r);
                    return (
                      !0 === i && (i = n.refetch()), !1 !== i && l.set(n, i), !1
                    );
                  }
                  null !== c &&
                    u.set(n.queryId, { oq: n, lastDiff: r, diff: t });
                }
              },
            }),
          u.size &&
            u.forEach(function (e, r) {
              var n,
                i = e.oq,
                o = e.lastDiff,
                a = e.diff;
              if (c) {
                if (!a) {
                  var s = i.queryInfo;
                  s.reset(), (a = s.getDiff());
                }
                n = c(i, a, o);
              }
              (c && !0 !== n) || (n = i.refetch()),
                !1 !== n && l.set(i, n),
                r.indexOf("legacyOneTimeQuery") >= 0 &&
                  t.stopQueryNoBroadcast(r);
            }),
          s && this.cache.removeOptimistic(s),
          l
        );
      }),
      (e.prototype.fetchQueryByPolicy = function (e, t, r) {
        var n = this,
          i = t.query,
          o = t.variables,
          a = t.fetchPolicy,
          s = t.refetchWritePolicy,
          c = t.errorPolicy,
          u = t.returnPartialData,
          l = t.context,
          f = t.notifyOnNetworkStatusChange,
          p = e.networkStatus;
        e.init({ document: i, variables: o, networkStatus: r });
        var h = function () {
            return e.getDiff(o);
          },
          d = function (t, r) {
            void 0 === r && (r = e.networkStatus || Fo.loading);
            var a = t.result;
            !__DEV__ || u || Un(a, {}) || Uo(t.missing);
            var s = function (e) {
              return nn.of(
                Te(
                  { data: e, loading: Mo(r), networkStatus: r },
                  t.complete ? null : { partial: !0 }
                )
              );
            };
            return a && n.transform(i).hasForcedResolvers
              ? n.localState
                  .runResolvers({
                    document: i,
                    remoteResult: { data: a },
                    context: l,
                    variables: o,
                    onlyRunForcedResolvers: !0,
                  })
                  .then(function (e) {
                    return s(e.data || void 0);
                  })
              : s(a);
          },
          y = "no-cache" === a ? 0 : r === Fo.refetch && "merge" !== s ? 1 : 2,
          v = function () {
            return n.getResultsFromLink(e, y, {
              variables: o,
              context: l,
              fetchPolicy: a,
              errorPolicy: c,
            });
          },
          m = f && "number" == typeof p && p !== r && Mo(r);
        switch (a) {
          default:
          case "cache-first":
            return (b = h()).complete
              ? [d(b, e.markReady())]
              : u || m
              ? [d(b), v()]
              : [v()];
          case "cache-and-network":
            var b;
            return (b = h()).complete || u || m ? [d(b), v()] : [v()];
          case "cache-only":
            return [d(h(), e.markReady())];
          case "network-only":
            return m ? [d(h()), v()] : [v()];
          case "no-cache":
            return m ? [d(e.getDiff()), v()] : [v()];
          case "standby":
            return [];
        }
      }),
      (e.prototype.getQuery = function (e) {
        return (
          e && !this.queries.has(e) && this.queries.set(e, new Go(this, e)),
          this.queries.get(e)
        );
      }),
      (e.prototype.prepareContext = function (e) {
        void 0 === e && (e = {});
        var t = this.localState.prepareContext(e);
        return Te(Te({}, t), { clientAwareness: this.clientAwareness });
      }),
      e
    );
  })(),
  Xo = !1;
function Zo(e, t) {
  return gn(
    e,
    t,
    t.variables && { variables: Te(Te({}, e.variables), t.variables) }
  );
}
var ea = (function () {
    function e(e) {
      var t = this;
      (this.defaultOptions = {}),
        (this.resetStoreCallbacks = []),
        (this.clearStoreCallbacks = []);
      var r = e.uri,
        n = e.credentials,
        i = e.headers,
        o = e.cache,
        a = e.ssrMode,
        s = void 0 !== a && a,
        c = e.ssrForceFetchDelay,
        u = void 0 === c ? 0 : c,
        l = e.connectToDevTools,
        f =
          void 0 === l
            ? "object" == typeof window && !window.__APOLLO_CLIENT__ && __DEV__
            : l,
        p = e.queryDeduplication,
        h = void 0 === p || p,
        d = e.defaultOptions,
        y = e.assumeImmutableResults,
        v = void 0 !== y && y,
        m = e.resolvers,
        b = e.typeDefs,
        g = e.fragmentMatcher,
        _ = e.name,
        E = e.version,
        w = e.link;
      if (
        (w ||
          (w = r ? new Mn({ uri: r, credentials: n, headers: i }) : Nn.empty()),
        !o)
      )
        throw __DEV__
          ? new Ce(
              "To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs"
            )
          : new Ce(9);
      if (
        ((this.link = w),
        (this.cache = o),
        (this.disableNetworkFetches = s || u > 0),
        (this.queryDeduplication = h),
        (this.defaultOptions = d || {}),
        (this.typeDefs = b),
        u &&
          setTimeout(function () {
            return (t.disableNetworkFetches = !1);
          }, u),
        (this.watchQuery = this.watchQuery.bind(this)),
        (this.query = this.query.bind(this)),
        (this.mutate = this.mutate.bind(this)),
        (this.resetStore = this.resetStore.bind(this)),
        (this.reFetchObservableQueries =
          this.reFetchObservableQueries.bind(this)),
        f && "object" == typeof window && (window.__APOLLO_CLIENT__ = this),
        !Xo &&
          __DEV__ &&
          ((Xo = !0),
          "undefined" != typeof window &&
            window.document &&
            window.top === window.self &&
            !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__))
      ) {
        var O = window.navigator,
          k = O && O.userAgent,
          S = void 0;
        "string" == typeof k &&
          (k.indexOf("Chrome/") > -1
            ? (S =
                "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm")
            : k.indexOf("Firefox/") > -1 &&
              (S =
                "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),
          S &&
            __DEV__ &&
            Fe.log(
              "Download the Apollo DevTools for a better development experience: " +
                S
            );
      }
      (this.version = "3.4.10"),
        (this.localState = new $o({
          cache: o,
          client: this,
          resolvers: m,
          fragmentMatcher: g,
        })),
        (this.queryManager = new Ho({
          cache: this.cache,
          link: this.link,
          queryDeduplication: h,
          ssrMode: s,
          clientAwareness: { name: _, version: E },
          localState: this.localState,
          assumeImmutableResults: v,
          onBroadcast: f
            ? function () {
                t.devToolsHookCb &&
                  t.devToolsHookCb({
                    action: {},
                    state: {
                      queries: t.queryManager.getQueryStore(),
                      mutations: t.queryManager.mutationStore || {},
                    },
                    dataWithOptimisticResults: t.cache.extract(!0),
                  });
              }
            : void 0,
        }));
    }
    return (
      (e.prototype.stop = function () {
        this.queryManager.stop();
      }),
      (e.prototype.watchQuery = function (e) {
        return (
          this.defaultOptions.watchQuery &&
            (e = Zo(this.defaultOptions.watchQuery, e)),
          !this.disableNetworkFetches ||
            ("network-only" !== e.fetchPolicy &&
              "cache-and-network" !== e.fetchPolicy) ||
            (e = Te(Te({}, e), { fetchPolicy: "cache-first" })),
          this.queryManager.watchQuery(e)
        );
      }),
      (e.prototype.query = function (e) {
        return (
          this.defaultOptions.query && (e = Zo(this.defaultOptions.query, e)),
          __DEV__
            ? Fe(
                "cache-and-network" !== e.fetchPolicy,
                "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only."
              )
            : Fe("cache-and-network" !== e.fetchPolicy, 10),
          this.disableNetworkFetches &&
            "network-only" === e.fetchPolicy &&
            (e = Te(Te({}, e), { fetchPolicy: "cache-first" })),
          this.queryManager.query(e)
        );
      }),
      (e.prototype.mutate = function (e) {
        return (
          this.defaultOptions.mutate && (e = Zo(this.defaultOptions.mutate, e)),
          this.queryManager.mutate(e)
        );
      }),
      (e.prototype.subscribe = function (e) {
        return this.queryManager.startGraphQLSubscription(e);
      }),
      (e.prototype.readQuery = function (e, t) {
        return void 0 === t && (t = !1), this.cache.readQuery(e, t);
      }),
      (e.prototype.readFragment = function (e, t) {
        return void 0 === t && (t = !1), this.cache.readFragment(e, t);
      }),
      (e.prototype.writeQuery = function (e) {
        this.cache.writeQuery(e), this.queryManager.broadcastQueries();
      }),
      (e.prototype.writeFragment = function (e) {
        this.cache.writeFragment(e), this.queryManager.broadcastQueries();
      }),
      (e.prototype.__actionHookForDevTools = function (e) {
        this.devToolsHookCb = e;
      }),
      (e.prototype.__requestRaw = function (e) {
        return In(this.link, e);
      }),
      (e.prototype.resetStore = function () {
        var e = this;
        return Promise.resolve()
          .then(function () {
            return e.queryManager.clearStore();
          })
          .then(function () {
            return Promise.all(
              e.resetStoreCallbacks.map(function (e) {
                return e();
              })
            );
          })
          .then(function () {
            return e.reFetchObservableQueries();
          });
      }),
      (e.prototype.clearStore = function () {
        var e = this;
        return Promise.resolve()
          .then(function () {
            return e.queryManager.clearStore();
          })
          .then(function () {
            return Promise.all(
              e.clearStoreCallbacks.map(function (e) {
                return e();
              })
            );
          });
      }),
      (e.prototype.onResetStore = function (e) {
        var t = this;
        return (
          this.resetStoreCallbacks.push(e),
          function () {
            t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function (t) {
              return t !== e;
            });
          }
        );
      }),
      (e.prototype.onClearStore = function (e) {
        var t = this;
        return (
          this.clearStoreCallbacks.push(e),
          function () {
            t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function (t) {
              return t !== e;
            });
          }
        );
      }),
      (e.prototype.reFetchObservableQueries = function (e) {
        return this.queryManager.reFetchObservableQueries(e);
      }),
      (e.prototype.refetchQueries = function (e) {
        var t = this.queryManager.refetchQueries(e),
          r = [],
          n = [];
        t.forEach(function (e, t) {
          r.push(t), n.push(e);
        });
        var i = Promise.all(n);
        return (
          (i.queries = r),
          (i.results = n),
          i.catch(function (e) {
            __DEV__ &&
              Fe.debug(
                "In client.refetchQueries, Promise.all promise rejected with error " +
                  e
              );
          }),
          i
        );
      }),
      (e.prototype.getObservableQueries = function (e) {
        return (
          void 0 === e && (e = "active"),
          this.queryManager.getObservableQueries(e)
        );
      }),
      (e.prototype.extract = function (e) {
        return this.cache.extract(e);
      }),
      (e.prototype.restore = function (e) {
        return this.cache.restore(e);
      }),
      (e.prototype.addResolvers = function (e) {
        this.localState.addResolvers(e);
      }),
      (e.prototype.setResolvers = function (e) {
        this.localState.setResolvers(e);
      }),
      (e.prototype.getResolvers = function () {
        return this.localState.getResolvers();
      }),
      (e.prototype.setLocalStateFragmentMatcher = function (e) {
        this.localState.setFragmentMatcher(e);
      }),
      (e.prototype.setLink = function (e) {
        this.link = this.queryManager.link = e;
      }),
      e
    );
  })(),
  ta = new Map(),
  ra = new Map(),
  na = !0,
  ia = !1;
function oa(e) {
  return e.replace(/[\s,]+/g, " ").trim();
}
function aa(e) {
  var t = new Set(),
    r = [];
  return (
    e.definitions.forEach(function (e) {
      if ("FragmentDefinition" === e.kind) {
        var n = e.name.value,
          i = oa((a = e.loc).source.body.substring(a.start, a.end)),
          o = ra.get(n);
        o && !o.has(i)
          ? na &&
            console.warn(
              "Warning: fragment with name " +
                n +
                " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"
            )
          : o || ra.set(n, (o = new Set())),
          o.add(i),
          t.has(i) || (t.add(i), r.push(e));
      } else r.push(e);
      var a;
    }),
    Te(Te({}, e), { definitions: r })
  );
}
function sa(e) {
  var t = oa(e);
  if (!ta.has(t)) {
    var r = (function (e, t) {
      return new Ft(e, t).parseDocument();
    })(e, { experimentalFragmentVariables: ia });
    if (!r || "Document" !== r.kind)
      throw new Error("Not a valid GraphQL document.");
    ta.set(
      t,
      (function (e) {
        var t = new Set(e.definitions);
        t.forEach(function (e) {
          e.loc && delete e.loc,
            Object.keys(e).forEach(function (r) {
              var n = e[r];
              n && "object" == typeof n && t.add(n);
            });
        });
        var r = e.loc;
        return r && (delete r.startToken, delete r.endToken), e;
      })(aa(r))
    );
  }
  return ta.get(t);
}
function ca(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  "string" == typeof e && (e = [e]);
  var n = e[0];
  return (
    t.forEach(function (t, r) {
      t && "Document" === t.kind ? (n += t.loc.source.body) : (n += t),
        (n += e[r + 1]);
    }),
    sa(n)
  );
}
var ua,
  la = ca,
  fa = function () {
    ta.clear(), ra.clear();
  },
  pa = function () {
    na = !1;
  },
  ha = function () {
    ia = !0;
  },
  da = function () {
    ia = !1;
  };
((ua = ca || (ca = {})).gql = la),
  (ua.resetCaches = fa),
  (ua.disableFragmentWarnings = pa),
  (ua.enableExperimentalFragmentVariables = ha),
  (ua.disableExperimentalFragmentVariables = da),
  (ca.default = ca);
const ya = [];
function va(e, t = c) {
  let r;
  const n = new Set();
  function i(t) {
    if (d(e, t) && ((e = t), r)) {
      const t = !ya.length;
      for (const r of n) r[1](), ya.push(r, e);
      if (t) {
        for (let e = 0; e < ya.length; e += 2) ya[e][0](ya[e + 1]);
        ya.length = 0;
      }
    }
  }
  return {
    set: i,
    update: function (t) {
      i(t(e));
    },
    subscribe: function (o, a = c) {
      const s = [o, a];
      return (
        n.add(s),
        1 === n.size && (r = t(i) || c),
        o(e),
        () => {
          n.delete(s), 0 === n.size && (r(), (r = null));
        }
      );
    },
  };
}
var ma = "undefined" != typeof Symbol ? Symbol("client") : "@@client";
function ba() {
  var e = J(ma);
  if (!e)
    throw new Error(
      "ApolloClient has not been set yet, use setClient(new ApolloClient({ ... })) to define it"
    );
  return e;
}
function ga(e) {
  Y(ma, e);
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var _a =
  function () {
    return (_a =
      Object.assign ||
      function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++)
          for (var i in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }).apply(this, arguments);
  };
function Ea(e) {
  var t = ba();
  return function (r) {
    return t.mutate(_a({ mutation: e }, r));
  };
}
function wa(e, t) {
  return (
    void 0 === t && (t = { loading: !0, data: void 0, error: void 0 }),
    {
      subscribe: va(t, function (r) {
        var n = void 0 !== (null == t ? void 0 : t.data),
          i = !1,
          o = e.subscribe(
            function (e) {
              if (!n || i)
                if (e.errors) {
                  var t = new jo({ graphQLErrors: e.errors });
                  r({ loading: !1, data: void 0, error: t });
                } else r({ loading: !1, data: e.data, error: void 0 });
              else i = !0;
            },
            function (e) {
              return r({ loading: !1, data: void 0, error: e });
            }
          );
        return function () {
          return o.unsubscribe();
        };
      }).subscribe,
    }
  );
}
var Oa = [
  "fetchMore",
  "getCurrentResult",
  "getLastError",
  "getLastResult",
  "isDifferentFromLastResult",
  "refetch",
  "resetLastResults",
  "resetQueryStoreErrors",
  "result",
  "setOptions",
  "setVariables",
  "startPolling",
  "stopPolling",
  "subscribeToMore",
  "updateQuery",
];
var ka = "undefined" != typeof WeakSet ? new WeakSet() : new Set();
function Sa(e, t) {
  void 0 === t && (t = {});
  var r,
    n = ba(),
    i = _a(_a({}, t), { query: e });
  if (ka.has(n))
    try {
      r = n.readQuery(i) || void 0;
    } catch (o) {}
  return (function (e, t) {
    for (var r = wa(e, t), n = 0, i = Oa; n < i.length; n++) {
      var o = i[n];
      r[o] = e[o].bind(e);
    }
    return r;
  })(n.watchQuery(i), void 0 !== r ? { data: r } : void 0);
}
function Ta(e) {
  return new Nn(function (t, r) {
    var n = De(t, []);
    return new nn(function (i) {
      var o,
        a = !1;
      return (
        Promise.resolve(n)
          .then(function (r) {
            return e(r, t.getContext());
          })
          .then(t.setContext)
          .then(function () {
            a ||
              (o = r(t).subscribe({
                next: i.next.bind(i),
                error: i.error.bind(i),
                complete: i.complete.bind(i),
              }));
          })
          .catch(i.error.bind(i)),
        function () {
          (a = !0), o && o.unsubscribe();
        }
      );
    });
  });
}
async function Da(e) {
  if (!/(\.then|import\(.+\)|vitePreload|_+import_+)/i.test(e.toString()))
    return e;
  try {
    return (await e()).default;
  } catch (t) {
    return (
      console.warn(
        `[Easyroute] caught an error while trying to download async component: "${t.message}"`
      ),
      e
    );
  }
}
const xa = (e) => e.replace(/^\//, ""),
  Na = (e) => e.replace(/\/$/, ""),
  Ia = (e) => xa(Na(e)),
  Aa = () => Math.random().toString(36).substr(2, 9);
function Ra(e, n = null, i = 0, o = "/") {
  return e.reduce((e, a) => {
    var c;
    const u =
        (a.component && { component: a.component }) ||
        (a.components && { components: a.components }),
      l = Ia(o) + "/" + Ia(a.path),
      { pattern: f, keys: p } = (function (e, t) {
        if (e instanceof RegExp) return { keys: !1, pattern: e };
        var r,
          n,
          i,
          o,
          a = [],
          s = "",
          c = e.split("/");
        for (c[0] || c.shift(); (i = c.shift()); )
          "*" === (r = i[0])
            ? (a.push("wild"), (s += "/(.*)"))
            : ":" === r
            ? ((n = i.indexOf("?", 1)),
              (o = i.indexOf(".", 1)),
              a.push(i.substring(1, ~n ? n : ~o ? o : i.length)),
              (s += ~n && !~o ? "(?:/([^/]+?))?" : "/([^/]+?)"),
              ~o && (s += (~n ? "?" : "") + "\\" + i.substring(o)))
            : (s += "/" + i);
        return {
          keys: a,
          pattern: new RegExp("^" + s + (t ? "(?=$|/)" : "/?$"), "i"),
        };
      })(l),
      h =
        ((d = s(s({}, a), u)),
        (y = {
          parentId: n,
          nestingDepth: i,
          path: l,
          id: Aa(),
          regexpPath: f,
          pathKeys: p,
        }),
        t(d, r(y)));
    var d, y;
    return (
      Array.isArray(a.children) &&
        (e = e.concat(
          Ra(
            null !== (c = h.children) && void 0 !== c ? c : [],
            h.id,
            i + 1,
            h.path
          )
        )),
      e.concat(h)
    );
  }, []);
}
function Ca(e) {
  const t = {};
  let r = e;
  return {
    get getValue() {
      return r;
    },
    subscribe(e) {
      const n = Aa();
      return (t[n] = e), e(r), () => delete t[n];
    },
    set(e) {
      (r = e), Object.values(t).forEach((t) => t(e));
    },
  };
}
function Fa(e) {
  try {
    return decodeURIComponent(e);
  } catch (t) {
    console.warn(`[Easyroute] Could not decode query string: ${e}`);
  }
  return e;
}
function Pa(e) {
  const t = {};
  return "string" != typeof e
    ? t
    : (e = e.trim().replace(/^(\?|#|&)/, ""))
    ? (e.split("&").forEach((e) => {
        const r = e.replace(/\+/g, " ").split("="),
          n = Fa(r.shift()),
          i = r.length > 0 ? Fa(r.join("=")) : null;
        void 0 === t[n]
          ? (t[n] = i)
          : Array.isArray(t[n])
          ? null !== i && t[n].push(i)
          : null !== i && (t[n] = [t[n], i]);
      }),
      t)
    : t;
}
function ja(e, t) {
  let r = e.regexpPath.exec(t);
  if (!r) return {};
  r = r.slice(1, r.length);
  const n = {};
  for (let i = 0; i < r.length; i++) {
    const t = r[i],
      o = e.pathKeys[i];
    n[String(o)] = t;
  }
  return n;
}
function Ma(e, t) {
  var r;
  const n = e.filter(Boolean)[0];
  if (!n) return { params: {}, query: {}, fullPath: "" };
  const [i, o] = t.split("?");
  return {
    params: ja(n, i),
    query: Pa(o),
    name: n.name,
    fullPath: t,
    meta: null !== (r = n.meta) && void 0 !== r ? r : {},
  };
}
const Va = !("undefined" != typeof window && void 0 !== window.document);
class La {
  constructor(e) {
    if (
      ((this.settings = e),
      (this.routes = []),
      (this.ignoreEvents = !1),
      (this.currentUrl = ""),
      (this.beforeEachHooks = []),
      (this.afterEachHooks = []),
      (this.modeName = "hash"),
      (this.transitionOutHooks = []),
      (this.currentMatched = Ca([])),
      (this.currentRouteData = Ca({
        params: {},
        query: {},
        name: "",
        fullPath: "",
      })),
      (this.currentRouteFromData = Ca(null)),
      (this.silentControl = void 0),
      !e.mode)
    )
      throw new ReferenceError(
        '[Easyroute] Router mode is not defined: pass a function into "settings.mode"'
      );
    if (
      ((this.routes = Ra(e.routes)),
      e.mode.call(this),
      Va && "history" !== this.modeName)
    )
      throw new Error('[Easyroute] SSR only works with "history" router mode');
  }
  async parseRoute(e, t = !0) {
    e = e.replace(/^#/, "");
    const r = (function (e, t) {
      const r = [],
        n = [],
        i = [];
      return (
        e.forEach((n) => {
          n.regexpPath.test(t) &&
            r.push(
              ...(function (e, t) {
                var r;
                if (!t) return [];
                const n = [t];
                let i = t.parentId;
                do {
                  const t = e.find((e) => e.id === i);
                  t && n.push(t),
                    (i =
                      null !== (r = null == t ? void 0 : t.parentId) &&
                      void 0 !== r
                        ? r
                        : null);
                } while (i);
                return n;
              })(e, n)
            );
        }),
        r
          .filter(
            (e) =>
              !n.includes(e.id) &&
              !i.includes(e.nestingDepth) &&
              (n.push(e.id), i.push(e.nestingDepth), !0)
          )
          .sort((e, t) => t.nestingDepth - e.nestingDepth)
      );
    })(this.routes, e.split("?")[0]);
    if (!r) return;
    const n = Ma([r[0]], e),
      i = Ma([this.currentMatched.getValue[0]], this.currentUrl);
    (await this.runHooksArray(
      [...this.beforeEachHooks, ...r.map((e) => e.beforeEnter).filter(Boolean)],
      n,
      i,
      "before"
    )) &&
      (this.changeUrl(
        (function (e, t, r = !1) {
          return (
            r &&
              e.split("?")[0].length > 1 &&
              (e = ((e) => e.replace(/(\/\?)/, "?"))(Na(e))),
            !t || e.includes(t) ? e : `/${Na(t)}/${xa(e)}`
          );
        })(e, this.base, this.settings.omitTrailingSlash),
        t,
        n
      ),
      this.currentRouteData.set(n),
      this.currentRouteFromData.set(i),
      this.currentMatched.set(
        await (async function (e) {
          const t = e.map(async (e) => {
            if (
              (e.component && (e.component = await Da(e.component)),
              e.components)
            )
              for await (const t of Object.entries(e.components)) {
                const [r, n] = t;
                e.components[r] = await Da(n);
              }
            return e;
          });
          return await Promise.all(t);
        })(r)
      ),
      this.runHooksArray(this.afterEachHooks, n, i, "after"));
  }
  async executeHook(e, t, r, n) {
    return "after" === n
      ? r(e, t)
      : new Promise(async (n) => {
          r
            ? await r(e, t, (e) => {
                null != e
                  ? (!1 === e && n(!1),
                    "string" == typeof e && (this.parseRoute(e), n(!1)))
                  : n(!0);
              })
            : n(!0);
        });
  }
  async push(e) {
    (this.ignoreEvents = !0), await this.parseRoute(e);
  }
  back() {
    this.go(-1);
  }
  beforeEach(e) {
    this.beforeEachHooks.push(e);
  }
  afterEach(e) {
    this.afterEachHooks.push(e);
  }
  transitionOut(e) {
    this.transitionOutHooks.push(e);
  }
  async runHooksArray(e, t, r, n) {
    for await (const i of e) {
      if (!(await this.executeHook(t, r, i, n))) return !1;
    }
    return !0;
  }
  get base() {
    return this.settings.base ? Ia(this.settings.base) + "/" : "";
  }
  get currentRoute() {
    return this.currentRouteData.getValue;
  }
}
const qa = (e, t) => (Boolean(t) ? e.replace(t, "") : e);
function Qa() {
  (this.modeName = "hash"),
    (this.changeUrl = function (e) {
      (this.currentUrl = e), (window.location.hash = e);
    }),
    (this.go = function (e) {
      window.history.go(e);
    }),
    this.parseRoute(qa(window.location.hash, this.base) || "/"),
    window.addEventListener("hashchange", () => {
      this.ignoreEvents
        ? (this.ignoreEvents = !1)
        : this.parseRoute(qa(window.location.hash, this.base));
    });
}
function Ba(e) {
  let t = e;
  if (-1 !== t.indexOf("ms")) {
    if (-1 !== t.indexOf(",")) {
      let e = t.split(",");
      e.sort(function (e, t) {
        return (
          Number(t.trim().replace("ms", "")) -
          Number(e.trim().replace("ms", ""))
        );
      }),
        (t = e[0]);
    }
    (t = t.replace("ms", "")), (t = Number(t));
  } else if (-1 !== t.indexOf("s")) {
    if (-1 !== t.indexOf(",")) {
      let e = t.split(",");
      e.sort(function (e, t) {
        return (
          Number(t.trim().replace("s", "")) - Number(e.trim().replace("s", ""))
        );
      }),
        (t = e[0]);
    }
    0 === t.indexOf(".") && (t = "0" + t),
      (t = t.replace("s", "")),
      (t = 1e3 * Number(t));
  }
  return t;
}
function Ua(e) {
  return new Promise((t) => {
    setTimeout(() => {
      t();
    }, e);
  });
}
function $a(e) {
  let t, r, n;
  var i = e[0];
  function o(e) {
    return { props: { router: e[3] } };
  }
  return (
    i && (t = new i(o(e))),
    {
      c() {
        t && be(t.$$.fragment), (r = M());
      },
      m(e, i) {
        t && ge(t, e, i), I(e, r, i), (n = !0);
      },
      p(e, n) {
        if (i !== (i = e[0])) {
          if (t) {
            fe();
            const e = t;
            de(e.$$.fragment, 1, 0, () => {
              _e(e, 1);
            }),
              pe();
          }
          i
            ? ((t = new i(o(e))),
              be(t.$$.fragment),
              he(t.$$.fragment, 1),
              ge(t, r.parentNode, r))
            : (t = null);
        }
      },
      i(e) {
        n || (t && he(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        t && de(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        e && A(r), t && _e(t, e);
      },
    }
  );
}
function za(e) {
  let t,
    r,
    n,
    i = e[2] && $a(e);
  return {
    c() {
      (t = C("div")),
        i && i.c(),
        q(t, "class", (r = "easyroute-outlet " + e[5].class + " " + e[1]));
    },
    m(e, r) {
      I(e, t, r), i && i.m(t, null), (n = !0);
    },
    p(e, [o]) {
      e[2]
        ? i
          ? (i.p(e, o), 4 & o && he(i, 1))
          : ((i = $a(e)), i.c(), he(i, 1), i.m(t, null))
        : i &&
          (fe(),
          de(i, 1, 1, () => {
            i = null;
          }),
          pe()),
        (!n ||
          (34 & o &&
            r !== (r = "easyroute-outlet " + e[5].class + " " + e[1]))) &&
          q(t, "class", r);
    },
    i(e) {
      n || (he(i), (n = !0));
    },
    o(e) {
      de(i), (n = !1);
    },
    d(e) {
      e && A(t), i && i.d();
    },
  };
}
function Ka(e, t, r) {
  const n = ["transition", "forceRemount", "name"];
  let i,
    o = T(t, n),
    { transition: a = null, forceRemount: s = !1, name: c = "default" } = t;
  const l = !("undefined" != typeof window && void 0 !== window.document),
    f = J("easyrouteContext"),
    p = (f && f.depth + 1) || 0,
    h = f ? f.router : null,
    d = l
      ? null
      : a
      ? (function (e) {
          let t = 0,
            r = 0;
          for (let n = 0; n < document.styleSheets.length; n++) {
            let i = document.styleSheets[n].rules;
            for (let n = 0; n < i.length; n++)
              i[n].selectorText &&
                (-1 !== i[n].selectorText.indexOf(`.${e}-enter-active`) &&
                  (t = Ba(i[n].style.transitionDuration)),
                -1 !== i[n].selectorText.indexOf(`.${e}-leave-active`) &&
                  (r = Ba(i[n].style.transitionDuration)));
          }
          return { enteringDuration: t, leavingDuration: r };
        })(a)
      : null;
  let y = null,
    v = null,
    m = "",
    b = l;
  if (!h)
    throw new Error(
      "[Easyroute] RouterOutlet: no router instance found. Did you forget to wrap your root component with <EasyrouteProvider>?"
    );
  const _ = h.currentMatched;
  async function E(e, t) {
    (y !== t.id || s) &&
      (d
        ? (async function (e, t, r, n, i, o, a) {
            n(`${r}-leave-active ${r}-leave-to`),
              await Ua(a.leavingDuration + 10),
              n(`${r}-leave-active ${r}-leave-to ${r}-leave`);
            const s = [...o.transitionOutHooks];
            t.transitionOut && s.push(t.transitionOut),
              await o.runHooksArray(
                s,
                o.currentRouteData.getValue,
                o.currentRouteFromData.getValue,
                "transition"
              ),
              await Ua(5),
              n(`${r}-enter`),
              n(`${r}-enter-active`),
              i(e),
              n(`${r}-enter-active ${r}-enter-to`),
              await Ua(a.enteringDuration + 10),
              n("");
          })(
            e,
            t,
            a,
            (e) => r(1, (m = e)),
            (e) => r(0, (v = e)),
            h,
            d
          )
        : r(0, (v = e)),
      (y = t.id));
  }
  async function w(e) {
    const t = e.find((e) => e.nestingDepth === p);
    if (t) {
      let e;
      (e =
        "default" === c
          ? t.component || t.components.default
          : t.components
          ? t.components[c]
          : null),
        await E(e, t),
        r(2, (b = !0));
    } else E(null, `${Date.now()}-nonexistent-route`);
  }
  return (
    g(e, _, (e) => r(9, (i = e))),
    Y("easyrouteContext", { depth: p, router: h }),
    l && w(h.currentMatched.getValue),
    (e.$$set = (e) => {
      (t = u(u({}, t), S(e))),
        r(5, (o = T(t, n))),
        "transition" in e && r(6, (a = e.transition)),
        "forceRemount" in e && r(7, (s = e.forceRemount)),
        "name" in e && r(8, (c = e.name));
    }),
    (e.$$.update = () => {
      512 & e.$$.dirty && w(i);
    }),
    [v, m, b, h, _, o, a, s, c, i]
  );
}
class Wa extends Oe {
  constructor(e) {
    super(),
      we(this, e, Ka, za, d, { transition: 6, forceRemount: 7, name: 8 });
  }
}
function Ga(e) {
  let t, r, n, i;
  const o = e[4].default,
    a = _(o, e, e[3], null);
  let s = [{ href: e[0] }, e[1]],
    c = {};
  for (let l = 0; l < s.length; l += 1) c = u(c, s[l]);
  return {
    c() {
      (t = C("a")), a && a.c(), Q(t, c);
    },
    m(o, s) {
      I(o, t, s),
        a && a.m(t, null),
        (r = !0),
        n || ((i = V(t, "click", e[2])), (n = !0));
    },
    p(e, [n]) {
      a &&
        a.p &&
        (!r || 8 & n) &&
        O(a, o, e, e[3], r ? w(o, e[3], n, null) : k(e[3]), null),
        Q(t, (c = ye(s, [(!r || 1 & n) && { href: e[0] }, e[1]])));
    },
    i(e) {
      r || (he(a, e), (r = !0));
    },
    o(e) {
      de(a, e), (r = !1);
    },
    d(e) {
      e && A(t), a && a.d(e), (n = !1), i();
    },
  };
}
function Ya(e, t, r) {
  let { $$slots: n = {}, $$scope: i } = t,
    { to: o } = t;
  const a = J("easyrouteContext"),
    s = a ? a.router : null,
    c = Object.assign({}, t);
  if (!s)
    throw new Error(
      "[Easyroute] RouterLink: no router instance found. Did you forget to wrap your root component with <EasyrouteProvider>?"
    );
  return (
    delete c.to,
    delete c.$$slots,
    delete c.$$scope,
    (e.$$set = (e) => {
      r(8, (t = u(u({}, t), S(e)))),
        "to" in e && r(0, (o = e.to)),
        "$$scope" in e && r(3, (i = e.$$scope));
    }),
    (t = S(t)),
    [
      o,
      c,
      function (e) {
        if ((e.preventDefault(), e.stopPropagation(), !s))
          throw new Error(
            "[Easyroute] Router instance not found in RouterLink"
          );
        s.push(o);
      },
      i,
      n,
    ]
  );
}
class Ja extends Oe {
  constructor(e) {
    super(), we(this, e, Ya, Ga, d, { to: 0 });
  }
}
function Ha(e) {
  let t;
  const r = e[2].default,
    n = _(r, e, e[1], null);
  return {
    c() {
      n && n.c();
    },
    m(e, r) {
      n && n.m(e, r), (t = !0);
    },
    p(e, [i]) {
      n &&
        n.p &&
        (!t || 2 & i) &&
        O(n, r, e, e[1], t ? w(r, e[1], i, null) : k(e[1]), null);
    },
    i(e) {
      t || (he(n, e), (t = !0));
    },
    o(e) {
      de(n, e), (t = !1);
    },
    d(e) {
      n && n.d(e);
    },
  };
}
function Xa(e, t, r) {
  let { $$slots: n = {}, $$scope: i } = t,
    { router: o = null } = t;
  if (!o)
    throw new Error(
      "[Easyroute] no router instance passed into EasyrouteProvider"
    );
  return (
    Y("easyrouteContext", { depth: -1, router: o }),
    (e.$$set = (e) => {
      "router" in e && r(0, (o = e.router)),
        "$$scope" in e && r(1, (i = e.$$scope));
    }),
    [o, i, n]
  );
}
class Za extends Oe {
  constructor(e) {
    super(), we(this, e, Xa, Ha, d, { router: 0 });
  }
}
const es = () => {
  const e = J("easyrouteContext");
  if (!e) throw new Error("[Easyroute] No router context found");
  return e.router.currentRouteData;
};
export {
  Za as $,
  w as A,
  P as B,
  B as C,
  ne as D,
  u as E,
  ye as F,
  ve as G,
  ca as H,
  Sa as I,
  g as J,
  M as K,
  R as L,
  U as M,
  L as N,
  p as O,
  X as P,
  es as Q,
  Ja as R,
  Oe as S,
  Ea as T,
  b as U,
  m as V,
  me as W,
  ie as X,
  x as Y,
  La as Z,
  Qa as _,
  F as a,
  Mn as a0,
  Ta as a1,
  Co as a2,
  ea as a3,
  ga as a4,
  Wa as a5,
  q as b,
  I as c,
  N as d,
  A as e,
  be as f,
  $ as g,
  fe as h,
  we as i,
  _e as j,
  pe as k,
  he as l,
  ge as m,
  c as n,
  C as o,
  j as p,
  D as q,
  z as r,
  d as s,
  de as t,
  V as u,
  G as v,
  va as w,
  _ as x,
  O as y,
  k as z,
};
