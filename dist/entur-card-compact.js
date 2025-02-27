var e = function (t, i) {
  return (
    (e =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      }),
    e(t, i)
  );
};
function t(t, i) {
  if ("function" != typeof i && null !== i)
    throw new TypeError(
      "Class extends value " + String(i) + " is not a constructor or null"
    );
  function n() {
    this.constructor = t;
  }
  e(t, i),
    (t.prototype =
      null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
}
var i = function () {
  return (
    (i =
      Object.assign ||
      function (e) {
        for (var t, i = 1, n = arguments.length; i < n; i++)
          for (var o in (t = arguments[i]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }),
    i.apply(this, arguments)
  );
};
function n(e, t, i, n) {
  var o,
    r = arguments.length,
    a =
      r < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
    a = Reflect.decorate(e, t, i, n);
  else
    for (var s = e.length - 1; s >= 0; s--)
      (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
  return r > 3 && a && Object.defineProperty(t, i, a), a;
}
function o(e) {
  var t = "function" == typeof Symbol && Symbol.iterator,
    i = t && e[t],
    n = 0;
  if (i) return i.call(e);
  if (e && "number" == typeof e.length)
    return {
      next: function () {
        return (
          e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
const r = window,
  a =
    r.ShadowRoot &&
    (void 0 === r.ShadyCSS || r.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  s = Symbol(),
  d = new WeakMap();
let l = class {
  constructor(e, t, i) {
    if (((this._$cssResult$ = !0), i !== s))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    (this.cssText = e), (this.t = t);
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (a && void 0 === e) {
      const i = void 0 !== t && 1 === t.length;
      i && (e = d.get(t)),
        void 0 === e &&
          ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText),
          i && d.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const c = (e, ...t) => {
    const i =
      1 === e.length
        ? e[0]
        : t.reduce(
            (t, i, n) =>
              t +
              ((e) => {
                if (!0 === e._$cssResult$) return e.cssText;
                if ("number" == typeof e) return e;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    e +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(i) +
              e[n + 1],
            e[0]
          );
    return new l(i, e, s);
  },
  p = (e, t) => {
    a
      ? (e.adoptedStyleSheets = t.map((e) =>
          e instanceof CSSStyleSheet ? e : e.styleSheet
        ))
      : t.forEach((t) => {
          const i = document.createElement("style"),
            n = r.litNonce;
          void 0 !== n && i.setAttribute("nonce", n),
            (i.textContent = t.cssText),
            e.appendChild(i);
        });
  },
  u = a
    ? (e) => e
    : (e) =>
        e instanceof CSSStyleSheet
          ? ((e) => {
              let t = "";
              for (const i of e.cssRules) t += i.cssText;
              return ((e) =>
                new l("string" == typeof e ? e : e + "", void 0, s))(t);
            })(e)
          : e;
var h;
const m = window,
  f = m.trustedTypes,
  g = f ? f.emptyScript : "",
  v = m.reactiveElementPolyfillSupport,
  b = {
    toAttribute(e, t) {
      switch (t) {
        case Boolean:
          e = e ? g : null;
          break;
        case Object:
        case Array:
          e = null == e ? e : JSON.stringify(e);
      }
      return e;
    },
    fromAttribute(e, t) {
      let i = e;
      switch (t) {
        case Boolean:
          i = null !== e;
          break;
        case Number:
          i = null === e ? null : Number(e);
          break;
        case Object:
        case Array:
          try {
            i = JSON.parse(e);
          } catch (e) {
            i = null;
          }
      }
      return i;
    },
  },
  _ = (e, t) => t !== e && (t == t || e == e),
  y = { attribute: !0, type: String, converter: b, reflect: !1, hasChanged: _ };
let x = class extends HTMLElement {
  constructor() {
    super(),
      (this._$Ei = new Map()),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$El = null),
      this.u();
  }
  static addInitializer(e) {
    var t;
    this.finalize(),
      (null !== (t = this.h) && void 0 !== t ? t : (this.h = [])).push(e);
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return (
      this.elementProperties.forEach((t, i) => {
        const n = this._$Ep(i, t);
        void 0 !== n && (this._$Ev.set(n, i), e.push(n));
      }),
      e
    );
  }
  static createProperty(e, t = y) {
    if (
      (t.state && (t.attribute = !1),
      this.finalize(),
      this.elementProperties.set(e, t),
      !t.noAccessor && !this.prototype.hasOwnProperty(e))
    ) {
      const i = "symbol" == typeof e ? Symbol() : "__" + e,
        n = this.getPropertyDescriptor(e, i, t);
      void 0 !== n && Object.defineProperty(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    return {
      get() {
        return this[t];
      },
      set(n) {
        const o = this[e];
        (this[t] = n), this.requestUpdate(e, o, i);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || y;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const e = Object.getPrototypeOf(this);
    if (
      (e.finalize(),
      void 0 !== e.h && (this.h = [...e.h]),
      (this.elementProperties = new Map(e.elementProperties)),
      (this._$Ev = new Map()),
      this.hasOwnProperty("properties"))
    ) {
      const e = this.properties,
        t = [
          ...Object.getOwnPropertyNames(e),
          ...Object.getOwnPropertySymbols(e),
        ];
      for (const i of t) this.createProperty(i, e[i]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const e of i) t.unshift(u(e));
    } else void 0 !== e && t.push(u(e));
    return t;
  }
  static _$Ep(e, t) {
    const i = t.attribute;
    return !1 === i
      ? void 0
      : "string" == typeof i
      ? i
      : "string" == typeof e
      ? e.toLowerCase()
      : void 0;
  }
  u() {
    var e;
    (this._$E_ = new Promise((e) => (this.enableUpdating = e))),
      (this._$AL = new Map()),
      this._$Eg(),
      this.requestUpdate(),
      null === (e = this.constructor.h) ||
        void 0 === e ||
        e.forEach((e) => e(this));
  }
  addController(e) {
    var t, i;
    (null !== (t = this._$ES) && void 0 !== t ? t : (this._$ES = [])).push(e),
      void 0 !== this.renderRoot &&
        this.isConnected &&
        (null === (i = e.hostConnected) || void 0 === i || i.call(e));
  }
  removeController(e) {
    var t;
    null === (t = this._$ES) ||
      void 0 === t ||
      t.splice(this._$ES.indexOf(e) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((e, t) => {
      this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t]);
    });
  }
  createRenderRoot() {
    var e;
    const t =
      null !== (e = this.shadowRoot) && void 0 !== e
        ? e
        : this.attachShadow(this.constructor.shadowRootOptions);
    return p(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var e;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      null === (e = this._$ES) ||
        void 0 === e ||
        e.forEach((e) => {
          var t;
          return null === (t = e.hostConnected) || void 0 === t
            ? void 0
            : t.call(e);
        });
  }
  enableUpdating(e) {}
  disconnectedCallback() {
    var e;
    null === (e = this._$ES) ||
      void 0 === e ||
      e.forEach((e) => {
        var t;
        return null === (t = e.hostDisconnected) || void 0 === t
          ? void 0
          : t.call(e);
      });
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$EO(e, t, i = y) {
    var n;
    const o = this.constructor._$Ep(e, i);
    if (void 0 !== o && !0 === i.reflect) {
      const r = (
        void 0 !==
        (null === (n = i.converter) || void 0 === n ? void 0 : n.toAttribute)
          ? i.converter
          : b
      ).toAttribute(t, i.type);
      (this._$El = e),
        null == r ? this.removeAttribute(o) : this.setAttribute(o, r),
        (this._$El = null);
    }
  }
  _$AK(e, t) {
    var i;
    const n = this.constructor,
      o = n._$Ev.get(e);
    if (void 0 !== o && this._$El !== o) {
      const e = n.getPropertyOptions(o),
        r =
          "function" == typeof e.converter
            ? { fromAttribute: e.converter }
            : void 0 !==
              (null === (i = e.converter) || void 0 === i
                ? void 0
                : i.fromAttribute)
            ? e.converter
            : b;
      (this._$El = o),
        (this[o] = r.fromAttribute(t, e.type)),
        (this._$El = null);
    }
  }
  requestUpdate(e, t, i) {
    let n = !0;
    void 0 !== e &&
      (((i = i || this.constructor.getPropertyOptions(e)).hasChanged || _)(
        this[e],
        t
      )
        ? (this._$AL.has(e) || this._$AL.set(e, t),
          !0 === i.reflect &&
            this._$El !== e &&
            (void 0 === this._$EC && (this._$EC = new Map()),
            this._$EC.set(e, i)))
        : (n = !1)),
      !this.isUpdatePending && n && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (e) {
      Promise.reject(e);
    }
    const e = this.scheduleUpdate();
    return null != e && (await e), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e;
    if (!this.isUpdatePending) return;
    this.hasUpdated,
      this._$Ei &&
        (this._$Ei.forEach((e, t) => (this[t] = e)), (this._$Ei = void 0));
    let t = !1;
    const i = this._$AL;
    try {
      (t = this.shouldUpdate(i)),
        t
          ? (this.willUpdate(i),
            null === (e = this._$ES) ||
              void 0 === e ||
              e.forEach((e) => {
                var t;
                return null === (t = e.hostUpdate) || void 0 === t
                  ? void 0
                  : t.call(e);
              }),
            this.update(i))
          : this._$Ek();
    } catch (e) {
      throw ((t = !1), this._$Ek(), e);
    }
    t && this._$AE(i);
  }
  willUpdate(e) {}
  _$AE(e) {
    var t;
    null === (t = this._$ES) ||
      void 0 === t ||
      t.forEach((e) => {
        var t;
        return null === (t = e.hostUpdated) || void 0 === t
          ? void 0
          : t.call(e);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(e)),
      this.updated(e);
  }
  _$Ek() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    void 0 !== this._$EC &&
      (this._$EC.forEach((e, t) => this._$EO(t, this[t], e)),
      (this._$EC = void 0)),
      this._$Ek();
  }
  updated(e) {}
  firstUpdated(e) {}
};
var E;
(x.finalized = !0),
  (x.elementProperties = new Map()),
  (x.elementStyles = []),
  (x.shadowRootOptions = { mode: "open" }),
  null == v || v({ ReactiveElement: x }),
  (null !== (h = m.reactiveElementVersions) && void 0 !== h
    ? h
    : (m.reactiveElementVersions = [])
  ).push("1.6.1");
const w = window,
  A = w.trustedTypes,
  C = A ? A.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
  I = "$lit$",
  S = `lit$${(Math.random() + "").slice(9)}$`,
  T = "?" + S,
  O = `<${T}>`,
  D = document,
  R = () => D.createComment(""),
  $ = (e) => null === e || ("object" != typeof e && "function" != typeof e),
  M = Array.isArray,
  k = "[ \t\n\f\r]",
  F = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  L = /-->/g,
  N = />/g,
  P = RegExp(
    `>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,
    "g"
  ),
  B = /'/g,
  H = /"/g,
  z = /^(?:script|style|textarea|title)$/i,
  U = (
    (e) =>
    (t, ...i) => ({ _$litType$: e, strings: t, values: i })
  )(1),
  V = Symbol.for("lit-noChange"),
  j = Symbol.for("lit-nothing"),
  Y = new WeakMap(),
  W = D.createTreeWalker(D, 129, null, !1),
  G = (e, t) => {
    const i = e.length - 1,
      n = [];
    let o,
      r = 2 === t ? "<svg>" : "",
      a = F;
    for (let t = 0; t < i; t++) {
      const i = e[t];
      let s,
        d,
        l = -1,
        c = 0;
      for (; c < i.length && ((a.lastIndex = c), (d = a.exec(i)), null !== d); )
        (c = a.lastIndex),
          a === F
            ? "!--" === d[1]
              ? (a = L)
              : void 0 !== d[1]
              ? (a = N)
              : void 0 !== d[2]
              ? (z.test(d[2]) && (o = RegExp("</" + d[2], "g")), (a = P))
              : void 0 !== d[3] && (a = P)
            : a === P
            ? ">" === d[0]
              ? ((a = null != o ? o : F), (l = -1))
              : void 0 === d[1]
              ? (l = -2)
              : ((l = a.lastIndex - d[2].length),
                (s = d[1]),
                (a = void 0 === d[3] ? P : '"' === d[3] ? H : B))
            : a === H || a === B
            ? (a = P)
            : a === L || a === N
            ? (a = F)
            : ((a = P), (o = void 0));
      const p = a === P && e[t + 1].startsWith("/>") ? " " : "";
      r +=
        a === F
          ? i + O
          : l >= 0
          ? (n.push(s), i.slice(0, l) + I + i.slice(l) + S + p)
          : i + S + (-2 === l ? (n.push(void 0), t) : p);
    }
    const s = r + (e[i] || "<?>") + (2 === t ? "</svg>" : "");
    if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [void 0 !== C ? C.createHTML(s) : s, n];
  };
class X {
  constructor({ strings: e, _$litType$: t }, i) {
    let n;
    this.parts = [];
    let o = 0,
      r = 0;
    const a = e.length - 1,
      s = this.parts,
      [d, l] = G(e, t);
    if (
      ((this.el = X.createElement(d, i)),
      (W.currentNode = this.el.content),
      2 === t)
    ) {
      const e = this.el.content,
        t = e.firstChild;
      t.remove(), e.append(...t.childNodes);
    }
    for (; null !== (n = W.nextNode()) && s.length < a; ) {
      if (1 === n.nodeType) {
        if (n.hasAttributes()) {
          const e = [];
          for (const t of n.getAttributeNames())
            if (t.endsWith(I) || t.startsWith(S)) {
              const i = l[r++];
              if ((e.push(t), void 0 !== i)) {
                const e = n.getAttribute(i.toLowerCase() + I).split(S),
                  t = /([.?@])?(.*)/.exec(i);
                s.push({
                  type: 1,
                  index: o,
                  name: t[2],
                  strings: e,
                  ctor:
                    "." === t[1]
                      ? J
                      : "?" === t[1]
                      ? te
                      : "@" === t[1]
                      ? ie
                      : Q,
                });
              } else s.push({ type: 6, index: o });
            }
          for (const t of e) n.removeAttribute(t);
        }
        if (z.test(n.tagName)) {
          const e = n.textContent.split(S),
            t = e.length - 1;
          if (t > 0) {
            n.textContent = A ? A.emptyScript : "";
            for (let i = 0; i < t; i++)
              n.append(e[i], R()),
                W.nextNode(),
                s.push({ type: 2, index: ++o });
            n.append(e[t], R());
          }
        }
      } else if (8 === n.nodeType)
        if (n.data === T) s.push({ type: 2, index: o });
        else {
          let e = -1;
          for (; -1 !== (e = n.data.indexOf(S, e + 1)); )
            s.push({ type: 7, index: o }), (e += S.length - 1);
        }
      o++;
    }
  }
  static createElement(e, t) {
    const i = D.createElement("template");
    return (i.innerHTML = e), i;
  }
}
function q(e, t, i = e, n) {
  var o, r, a, s;
  if (t === V) return t;
  let d =
    void 0 !== n
      ? null === (o = i._$Co) || void 0 === o
        ? void 0
        : o[n]
      : i._$Cl;
  const l = $(t) ? void 0 : t._$litDirective$;
  return (
    (null == d ? void 0 : d.constructor) !== l &&
      (null === (r = null == d ? void 0 : d._$AO) ||
        void 0 === r ||
        r.call(d, !1),
      void 0 === l ? (d = void 0) : ((d = new l(e)), d._$AT(e, i, n)),
      void 0 !== n
        ? ((null !== (a = (s = i)._$Co) && void 0 !== a ? a : (s._$Co = []))[
            n
          ] = d)
        : (i._$Cl = d)),
    void 0 !== d && (t = q(e, d._$AS(e, t.values), d, n)),
    t
  );
}
class K {
  constructor(e, t) {
    (this.u = []), (this._$AN = void 0), (this._$AD = e), (this._$AM = t);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  v(e) {
    var t;
    const {
        el: { content: i },
        parts: n,
      } = this._$AD,
      o = (
        null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t
          ? t
          : D
      ).importNode(i, !0);
    W.currentNode = o;
    let r = W.nextNode(),
      a = 0,
      s = 0,
      d = n[0];
    for (; void 0 !== d; ) {
      if (a === d.index) {
        let t;
        2 === d.type
          ? (t = new Z(r, r.nextSibling, this, e))
          : 1 === d.type
          ? (t = new d.ctor(r, d.name, d.strings, this, e))
          : 6 === d.type && (t = new ne(r, this, e)),
          this.u.push(t),
          (d = n[++s]);
      }
      a !== (null == d ? void 0 : d.index) && ((r = W.nextNode()), a++);
    }
    return o;
  }
  p(e) {
    let t = 0;
    for (const i of this.u)
      void 0 !== i &&
        (void 0 !== i.strings
          ? (i._$AI(e, i, t), (t += i.strings.length - 2))
          : i._$AI(e[t])),
        t++;
  }
}
class Z {
  constructor(e, t, i, n) {
    var o;
    (this.type = 2),
      (this._$AH = j),
      (this._$AN = void 0),
      (this._$AA = e),
      (this._$AB = t),
      (this._$AM = i),
      (this.options = n),
      (this._$Cm =
        null === (o = null == n ? void 0 : n.isConnected) || void 0 === o || o);
  }
  get _$AU() {
    var e, t;
    return null !==
      (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) &&
      void 0 !== t
      ? t
      : this._$Cm;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return (
      void 0 !== t &&
        11 === (null == e ? void 0 : e.nodeType) &&
        (e = t.parentNode),
      e
    );
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    (e = q(this, e, t)),
      $(e)
        ? e === j || null == e || "" === e
          ? (this._$AH !== j && this._$AR(), (this._$AH = j))
          : e !== this._$AH && e !== V && this.g(e)
        : void 0 !== e._$litType$
        ? this.$(e)
        : void 0 !== e.nodeType
        ? this.T(e)
        : ((e) =>
            M(e) ||
            "function" == typeof (null == e ? void 0 : e[Symbol.iterator]))(e)
        ? this.k(e)
        : this.g(e);
  }
  S(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), (this._$AH = this.S(e)));
  }
  g(e) {
    this._$AH !== j && $(this._$AH)
      ? (this._$AA.nextSibling.data = e)
      : this.T(D.createTextNode(e)),
      (this._$AH = e);
  }
  $(e) {
    var t;
    const { values: i, _$litType$: n } = e,
      o =
        "number" == typeof n
          ? this._$AC(e)
          : (void 0 === n.el && (n.el = X.createElement(n.h, this.options)), n);
    if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === o)
      this._$AH.p(i);
    else {
      const e = new K(o, this),
        t = e.v(this.options);
      e.p(i), this.T(t), (this._$AH = e);
    }
  }
  _$AC(e) {
    let t = Y.get(e.strings);
    return void 0 === t && Y.set(e.strings, (t = new X(e))), t;
  }
  k(e) {
    M(this._$AH) || ((this._$AH = []), this._$AR());
    const t = this._$AH;
    let i,
      n = 0;
    for (const o of e)
      n === t.length
        ? t.push((i = new Z(this.S(R()), this.S(R()), this, this.options)))
        : (i = t[n]),
        i._$AI(o),
        n++;
    n < t.length && (this._$AR(i && i._$AB.nextSibling, n), (t.length = n));
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for (
      null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, t);
      e && e !== this._$AB;

    ) {
      const t = e.nextSibling;
      e.remove(), (e = t);
    }
  }
  setConnected(e) {
    var t;
    void 0 === this._$AM &&
      ((this._$Cm = e),
      null === (t = this._$AP) || void 0 === t || t.call(this, e));
  }
}
class Q {
  constructor(e, t, i, n, o) {
    (this.type = 1),
      (this._$AH = j),
      (this._$AN = void 0),
      (this.element = e),
      (this.name = t),
      (this._$AM = n),
      (this.options = o),
      i.length > 2 || "" !== i[0] || "" !== i[1]
        ? ((this._$AH = Array(i.length - 1).fill(new String())),
          (this.strings = i))
        : (this._$AH = j);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, t = this, i, n) {
    const o = this.strings;
    let r = !1;
    if (void 0 === o)
      (e = q(this, e, t, 0)),
        (r = !$(e) || (e !== this._$AH && e !== V)),
        r && (this._$AH = e);
    else {
      const n = e;
      let a, s;
      for (e = o[0], a = 0; a < o.length - 1; a++)
        (s = q(this, n[i + a], t, a)),
          s === V && (s = this._$AH[a]),
          r || (r = !$(s) || s !== this._$AH[a]),
          s === j ? (e = j) : e !== j && (e += (null != s ? s : "") + o[a + 1]),
          (this._$AH[a] = s);
    }
    r && !n && this.j(e);
  }
  j(e) {
    e === j
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, null != e ? e : "");
  }
}
class J extends Q {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(e) {
    this.element[this.name] = e === j ? void 0 : e;
  }
}
const ee = A ? A.emptyScript : "";
class te extends Q {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(e) {
    e && e !== j
      ? this.element.setAttribute(this.name, ee)
      : this.element.removeAttribute(this.name);
  }
}
class ie extends Q {
  constructor(e, t, i, n, o) {
    super(e, t, i, n, o), (this.type = 5);
  }
  _$AI(e, t = this) {
    var i;
    if ((e = null !== (i = q(this, e, t, 0)) && void 0 !== i ? i : j) === V)
      return;
    const n = this._$AH,
      o =
        (e === j && n !== j) ||
        e.capture !== n.capture ||
        e.once !== n.once ||
        e.passive !== n.passive,
      r = e !== j && (n === j || o);
    o && this.element.removeEventListener(this.name, this, n),
      r && this.element.addEventListener(this.name, this, e),
      (this._$AH = e);
  }
  handleEvent(e) {
    var t, i;
    "function" == typeof this._$AH
      ? this._$AH.call(
          null !==
            (i =
              null === (t = this.options) || void 0 === t ? void 0 : t.host) &&
            void 0 !== i
            ? i
            : this.element,
          e
        )
      : this._$AH.handleEvent(e);
  }
}
class ne {
  constructor(e, t, i) {
    (this.element = e),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = t),
      (this.options = i);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    q(this, e);
  }
}
const oe = w.litHtmlPolyfillSupport;
null == oe || oe(X, Z),
  (null !== (E = w.litHtmlVersions) && void 0 !== E
    ? E
    : (w.litHtmlVersions = [])
  ).push("2.7.0");
var re, ae;
class se extends x {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Do = void 0);
  }
  createRenderRoot() {
    var e, t;
    const i = super.createRenderRoot();
    return (
      (null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e) ||
        (t.renderBefore = i.firstChild),
      i
    );
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(e),
      (this._$Do = ((e, t, i) => {
        var n, o;
        const r =
          null !== (n = null == i ? void 0 : i.renderBefore) && void 0 !== n
            ? n
            : t;
        let a = r._$litPart$;
        if (void 0 === a) {
          const e =
            null !== (o = null == i ? void 0 : i.renderBefore) && void 0 !== o
              ? o
              : null;
          r._$litPart$ = a = new Z(
            t.insertBefore(R(), e),
            e,
            void 0,
            null != i ? i : {}
          );
        }
        return a._$AI(e), a;
      })(t, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var e;
    super.connectedCallback(),
      null === (e = this._$Do) || void 0 === e || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(),
      null === (e = this._$Do) || void 0 === e || e.setConnected(!1);
  }
  render() {
    return V;
  }
}
(se.finalized = !0),
  (se._$litElement$ = !0),
  null === (re = globalThis.litElementHydrateSupport) ||
    void 0 === re ||
    re.call(globalThis, { LitElement: se });
const de = globalThis.litElementPolyfillSupport;
null == de || de({ LitElement: se }),
  (null !== (ae = globalThis.litElementVersions) && void 0 !== ae
    ? ae
    : (globalThis.litElementVersions = [])
  ).push("3.3.0");
const le = (e) => (t) =>
    "function" == typeof t
      ? ((e, t) => (customElements.define(e, t), t))(e, t)
      : ((e, t) => {
          const { kind: i, elements: n } = t;
          return {
            kind: i,
            elements: n,
            finisher(t) {
              customElements.define(e, t);
            },
          };
        })(e, t),
  ce = (e, t) =>
    "method" === t.kind && t.descriptor && !("value" in t.descriptor)
      ? {
          ...t,
          finisher(i) {
            i.createProperty(t.key, e);
          },
        }
      : {
          kind: "field",
          key: Symbol(),
          placement: "own",
          descriptor: {},
          originalKey: t.key,
          initializer() {
            "function" == typeof t.initializer &&
              (this[t.key] = t.initializer.call(this));
          },
          finisher(i) {
            i.createProperty(t.key, e);
          },
        };
function pe(e) {
  return (t, i) =>
    void 0 !== i
      ? ((e, t, i) => {
          t.constructor.createProperty(i, e);
        })(e, t, i)
      : ce(e, t);
}
function ue(e) {
  return pe({ ...e, state: !0 });
}
const he =
  ({ finisher: e, descriptor: t }) =>
  (i, n) => {
    var o;
    if (void 0 === n) {
      const n = null !== (o = i.originalKey) && void 0 !== o ? o : i.key,
        r =
          null != t
            ? {
                kind: "method",
                placement: "prototype",
                key: n,
                descriptor: t(i.key),
              }
            : { ...i, key: n };
      return (
        null != e &&
          (r.finisher = function (t) {
            e(t, n);
          }),
        r
      );
    }
    {
      const o = i.constructor;
      void 0 !== t && Object.defineProperty(i, n, t(n)), null == e || e(o, n);
    }
  };
function me(e, t) {
  return he({
    descriptor: (i) => {
      const n = {
        get() {
          var t, i;
          return null !==
            (i =
              null === (t = this.renderRoot) || void 0 === t
                ? void 0
                : t.querySelector(e)) && void 0 !== i
            ? i
            : null;
        },
        enumerable: !0,
        configurable: !0,
      };
      if (t) {
        const t = "symbol" == typeof i ? Symbol() : "__" + i;
        n.get = function () {
          var i, n;
          return (
            void 0 === this[t] &&
              (this[t] =
                null !==
                  (n =
                    null === (i = this.renderRoot) || void 0 === i
                      ? void 0
                      : i.querySelector(e)) && void 0 !== n
                  ? n
                  : null),
            this[t]
          );
        };
      }
      return n;
    },
  });
}
var fe;
const ge =
  null !=
  (null === (fe = window.HTMLSlotElement) || void 0 === fe
    ? void 0
    : fe.prototype.assignedElements)
    ? (e, t) => e.assignedElements(t)
    : (e, t) =>
        e.assignedNodes(t).filter((e) => e.nodeType === Node.ELEMENT_NODE);
function ve(e, t, i) {
  let n,
    o = e;
  return (
    "object" == typeof e ? ((o = e.slot), (n = e)) : (n = { flatten: t }),
    i
      ? (function (e) {
          const { slot: t, selector: i } = null != e ? e : {};
          return he({
            descriptor: (n) => ({
              get() {
                var n;
                const o = "slot" + (t ? `[name=${t}]` : ":not([name])"),
                  r =
                    null === (n = this.renderRoot) || void 0 === n
                      ? void 0
                      : n.querySelector(o),
                  a = null != r ? ge(r, e) : [];
                return i ? a.filter((e) => e.matches(i)) : a;
              },
              enumerable: !0,
              configurable: !0,
            }),
          });
        })({ slot: o, flatten: t, selector: i })
      : he({
          descriptor: (e) => ({
            get() {
              var e, t;
              const i = "slot" + (o ? `[name=${o}]` : ":not([name])"),
                r =
                  null === (e = this.renderRoot) || void 0 === e
                    ? void 0
                    : e.querySelector(i);
              return null !== (t = null == r ? void 0 : r.assignedNodes(n)) &&
                void 0 !== t
                ? t
                : [];
            },
            enumerable: !0,
            configurable: !0,
          }),
        })
  );
}
var be = "2.0.1",
  _e = {
    version: "Version",
    invalid_configuration: "Invalid configuration",
    show_warning: "Show warning",
    at: "At",
    to: "To",
    arrives: "Arrives in",
    arrived: "Left about",
    departs: "Departs in",
    departing: "Departing",
    delayed: "Delayed for",
    and: "and",
    minute: "minute",
    minutes: "minutes",
    hour: "hour",
    hours: "hours",
  },
  ye = {
    name: "Name",
    title: "Edit route",
    destination: "Destination",
    display_time: "Display time",
    divide_routes: "Divide routes",
    divide_lines: "Divide lines",
    clock_icon_state: {
      title: "Clock icon",
      left: "Left aligned",
      right: "Right aligned",
    },
    extra_departures: {
      title: "Extra departures",
      next: "Include next",
      all: "Include all",
    },
    human_readable_time: {
      title: "Display time as sentence",
      all: "for all departures",
      line: "only for main departure",
      line_next: "only for next departure",
      line_extras: "only for extra departures",
    },
    remaining_time: {
      title: "Display remaning time",
      all: "for all departures",
      line: "for main departure",
      line_next: "only for next departure",
      line_extras: "only for extra departures",
    },
  },
  xe = { common: _e, editor: ye },
  Ee = {
    version: "Versjon",
    invalid_configuration: "Ugyldig oppsett",
    show_warning: "Vis advarsel",
    at: "kl",
    to: "Til",
    arrives: "om",
    arrived: "dro",
    departs: "om",
    departing: "nå",
    delayed: "sen",
    and: "og",
    minute: "m",
    minutes: "m",
    hour: "t",
    hours: "t",
  },
  we = {
    name: "Navn",
    title: "Rediger rute",
    destination: "Destinasjon",
    display_time: "Vis tid",
    divide_routes: "Separer ruter",
    divide_lines: "Separer linjer",
    clock_icon_state: {
      title: "Klokkesymbol",
      left: "Venstrestilt",
      right: "Høyrestilt",
    },
    extra_departures: {
      title: "Ekstraavganger",
      next: "inkluder neste",
      all: "inkluder alle",
    },
    human_readable_time: {
      title: "Vis tid som setning",
      all: "for alle avganger",
      line: "kun for hovedavgang",
      line_next: "kun for neste avgang",
      line_extras: "kun for ekstraavganger",
    },
    remaining_time: {
      title: "Vis gjenværende tid",
      all: "for alle avganger",
      line: "kun for hovedavgang",
      line_next: "kun for neste avgang",
      line_extras: "kun for ekstraavganger",
    },
  },
  Ae = { common: Ee, editor: we },
  Ce = {
    version: "Versjon",
    invalid_configuration: "Ugyldig oppsett",
    show_warning: "Vis åtvaring",
    at: "klokka",
    to: "Til",
    arrives: "Kjem om",
    arrived: "Gjekk for",
    departs: "Avgang om",
    departing: "Avgang nå",
    delayed: "Forseinka",
    and: "og",
    minute: "minutt",
    minutes: "minutter",
    hour: "time",
    hours: "timer",
  },
  Ie = {
    name: "Namn",
    title: "Rediger rute",
    destination: "Destinasjon",
    display_time: "Vis tid",
    divide_routes: "Separer ruter",
    divide_lines: "Separer linjer",
    clock_icon_state: {
      title: "Klokkesymbol",
      left: "Venstrestilt",
      right: "Høgrestilt",
    },
    extra_departures: {
      title: "Ekstraavgangar",
      next: "inkluder neste",
      all: "inkluder alle",
    },
    human_readable_time: {
      title: "Vis tid som setning",
      all: "for alle avgangar",
      line: "berre for hovudavgang",
      line_next: "berre for neste avgang",
      line_extras: "berre for ekstraavgangar",
    },
    remaining_time: {
      title: "Vis tida som er igjen",
      all: "for alle avgangar",
      line: "berre for hovudavgang",
      line_next: "berre for neste avgang",
      line_extras: "berre for ekstraavgangar",
    },
  },
  Se = { common: Ce, editor: Ie };
const Te = {
  en: Object.freeze({ __proto__: null, common: _e, default: xe, editor: ye }),
  nb: Object.freeze({ __proto__: null, common: Ee, default: Ae, editor: we }),
  nn: Object.freeze({ __proto__: null, common: Ce, default: Se, editor: Ie }),
};
function Oe(e, t) {
  try {
    return e.split(".").reduce((e, t) => e[t], Te[t]);
  } catch (e) {
    return;
  }
}
function De(e) {
  return function (t) {
    var i;
    let n = Oe(
      t,
      null !== (i = null == e ? void 0 : e.locale.language) && void 0 !== i
        ? i
        : "en"
    );
    return n || (n = Oe(t, "en")), null != n ? n : t;
  };
}
"undefined" != typeof globalThis
  ? globalThis
  : "undefined" != typeof window
  ? window
  : "undefined" != typeof global
  ? global
  : "undefined" != typeof self && self;
var Re = {},
  $e = {
    get exports() {
      return Re;
    },
    set exports(e) {
      Re = e;
    },
  };
$e.exports = (function () {
  var e = 1e3,
    t = 6e4,
    i = 36e5,
    n = "millisecond",
    o = "second",
    r = "minute",
    a = "hour",
    s = "day",
    d = "week",
    l = "month",
    c = "quarter",
    p = "year",
    u = "date",
    h = "Invalid Date",
    m =
      /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
    f =
      /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
    g = {
      name: "en",
      weekdays:
        "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months:
        "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_"
        ),
      ordinal: function (e) {
        var t = ["th", "st", "nd", "rd"],
          i = e % 100;
        return "[" + e + (t[(i - 20) % 10] || t[i] || t[0]) + "]";
      },
    },
    v = function (e, t, i) {
      var n = String(e);
      return !n || n.length >= t ? e : "" + Array(t + 1 - n.length).join(i) + e;
    },
    b = {
      s: v,
      z: function (e) {
        var t = -e.utcOffset(),
          i = Math.abs(t),
          n = Math.floor(i / 60),
          o = i % 60;
        return (t <= 0 ? "+" : "-") + v(n, 2, "0") + ":" + v(o, 2, "0");
      },
      m: function e(t, i) {
        if (t.date() < i.date()) return -e(i, t);
        var n = 12 * (i.year() - t.year()) + (i.month() - t.month()),
          o = t.clone().add(n, l),
          r = i - o < 0,
          a = t.clone().add(n + (r ? -1 : 1), l);
        return +(-(n + (i - o) / (r ? o - a : a - o)) || 0);
      },
      a: function (e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
      },
      p: function (e) {
        return (
          { M: l, y: p, w: d, d: s, D: u, h: a, m: r, s: o, ms: n, Q: c }[e] ||
          String(e || "")
            .toLowerCase()
            .replace(/s$/, "")
        );
      },
      u: function (e) {
        return void 0 === e;
      },
    },
    _ = "en",
    y = {};
  y[_] = g;
  var x = function (e) {
      return e instanceof C;
    },
    E = function e(t, i, n) {
      var o;
      if (!t) return _;
      if ("string" == typeof t) {
        var r = t.toLowerCase();
        y[r] && (o = r), i && ((y[r] = i), (o = r));
        var a = t.split("-");
        if (!o && a.length > 1) return e(a[0]);
      } else {
        var s = t.name;
        (y[s] = t), (o = s);
      }
      return !n && o && (_ = o), o || (!n && _);
    },
    w = function (e, t) {
      if (x(e)) return e.clone();
      var i = "object" == typeof t ? t : {};
      return (i.date = e), (i.args = arguments), new C(i);
    },
    A = b;
  (A.l = E),
    (A.i = x),
    (A.w = function (e, t) {
      return w(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
    });
  var C = (function () {
      function g(e) {
        (this.$L = E(e.locale, null, !0)), this.parse(e);
      }
      var v = g.prototype;
      return (
        (v.parse = function (e) {
          (this.$d = (function (e) {
            var t = e.date,
              i = e.utc;
            if (null === t) return new Date(NaN);
            if (A.u(t)) return new Date();
            if (t instanceof Date) return new Date(t);
            if ("string" == typeof t && !/Z$/i.test(t)) {
              var n = t.match(m);
              if (n) {
                var o = n[2] - 1 || 0,
                  r = (n[7] || "0").substring(0, 3);
                return i
                  ? new Date(
                      Date.UTC(
                        n[1],
                        o,
                        n[3] || 1,
                        n[4] || 0,
                        n[5] || 0,
                        n[6] || 0,
                        r
                      )
                    )
                  : new Date(
                      n[1],
                      o,
                      n[3] || 1,
                      n[4] || 0,
                      n[5] || 0,
                      n[6] || 0,
                      r
                    );
              }
            }
            return new Date(t);
          })(e)),
            (this.$x = e.x || {}),
            this.init();
        }),
        (v.init = function () {
          var e = this.$d;
          (this.$y = e.getFullYear()),
            (this.$M = e.getMonth()),
            (this.$D = e.getDate()),
            (this.$W = e.getDay()),
            (this.$H = e.getHours()),
            (this.$m = e.getMinutes()),
            (this.$s = e.getSeconds()),
            (this.$ms = e.getMilliseconds());
        }),
        (v.$utils = function () {
          return A;
        }),
        (v.isValid = function () {
          return !(this.$d.toString() === h);
        }),
        (v.isSame = function (e, t) {
          var i = w(e);
          return this.startOf(t) <= i && i <= this.endOf(t);
        }),
        (v.isAfter = function (e, t) {
          return w(e) < this.startOf(t);
        }),
        (v.isBefore = function (e, t) {
          return this.endOf(t) < w(e);
        }),
        (v.$g = function (e, t, i) {
          return A.u(e) ? this[t] : this.set(i, e);
        }),
        (v.unix = function () {
          return Math.floor(this.valueOf() / 1e3);
        }),
        (v.valueOf = function () {
          return this.$d.getTime();
        }),
        (v.startOf = function (e, t) {
          var i = this,
            n = !!A.u(t) || t,
            c = A.p(e),
            h = function (e, t) {
              var o = A.w(
                i.$u ? Date.UTC(i.$y, t, e) : new Date(i.$y, t, e),
                i
              );
              return n ? o : o.endOf(s);
            },
            m = function (e, t) {
              return A.w(
                i
                  .toDate()
                  [e].apply(
                    i.toDate("s"),
                    (n ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)
                  ),
                i
              );
            },
            f = this.$W,
            g = this.$M,
            v = this.$D,
            b = "set" + (this.$u ? "UTC" : "");
          switch (c) {
            case p:
              return n ? h(1, 0) : h(31, 11);
            case l:
              return n ? h(1, g) : h(0, g + 1);
            case d:
              var _ = this.$locale().weekStart || 0,
                y = (f < _ ? f + 7 : f) - _;
              return h(n ? v - y : v + (6 - y), g);
            case s:
            case u:
              return m(b + "Hours", 0);
            case a:
              return m(b + "Minutes", 1);
            case r:
              return m(b + "Seconds", 2);
            case o:
              return m(b + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }),
        (v.endOf = function (e) {
          return this.startOf(e, !1);
        }),
        (v.$set = function (e, t) {
          var i,
            d = A.p(e),
            c = "set" + (this.$u ? "UTC" : ""),
            h = ((i = {}),
            (i[s] = c + "Date"),
            (i[u] = c + "Date"),
            (i[l] = c + "Month"),
            (i[p] = c + "FullYear"),
            (i[a] = c + "Hours"),
            (i[r] = c + "Minutes"),
            (i[o] = c + "Seconds"),
            (i[n] = c + "Milliseconds"),
            i)[d],
            m = d === s ? this.$D + (t - this.$W) : t;
          if (d === l || d === p) {
            var f = this.clone().set(u, 1);
            f.$d[h](m),
              f.init(),
              (this.$d = f.set(u, Math.min(this.$D, f.daysInMonth())).$d);
          } else h && this.$d[h](m);
          return this.init(), this;
        }),
        (v.set = function (e, t) {
          return this.clone().$set(e, t);
        }),
        (v.get = function (e) {
          return this[A.p(e)]();
        }),
        (v.add = function (n, c) {
          var u,
            h = this;
          n = Number(n);
          var m = A.p(c),
            f = function (e) {
              var t = w(h);
              return A.w(t.date(t.date() + Math.round(e * n)), h);
            };
          if (m === l) return this.set(l, this.$M + n);
          if (m === p) return this.set(p, this.$y + n);
          if (m === s) return f(1);
          if (m === d) return f(7);
          var g = ((u = {}), (u[r] = t), (u[a] = i), (u[o] = e), u)[m] || 1,
            v = this.$d.getTime() + n * g;
          return A.w(v, this);
        }),
        (v.subtract = function (e, t) {
          return this.add(-1 * e, t);
        }),
        (v.format = function (e) {
          var t = this,
            i = this.$locale();
          if (!this.isValid()) return i.invalidDate || h;
          var n = e || "YYYY-MM-DDTHH:mm:ssZ",
            o = A.z(this),
            r = this.$H,
            a = this.$m,
            s = this.$M,
            d = i.weekdays,
            l = i.months,
            c = function (e, i, o, r) {
              return (e && (e[i] || e(t, n))) || o[i].slice(0, r);
            },
            p = function (e) {
              return A.s(r % 12 || 12, e, "0");
            },
            u =
              i.meridiem ||
              function (e, t, i) {
                var n = e < 12 ? "AM" : "PM";
                return i ? n.toLowerCase() : n;
              },
            m = {
              YY: String(this.$y).slice(-2),
              YYYY: this.$y,
              M: s + 1,
              MM: A.s(s + 1, 2, "0"),
              MMM: c(i.monthsShort, s, l, 3),
              MMMM: c(l, s),
              D: this.$D,
              DD: A.s(this.$D, 2, "0"),
              d: String(this.$W),
              dd: c(i.weekdaysMin, this.$W, d, 2),
              ddd: c(i.weekdaysShort, this.$W, d, 3),
              dddd: d[this.$W],
              H: String(r),
              HH: A.s(r, 2, "0"),
              h: p(1),
              hh: p(2),
              a: u(r, a, !0),
              A: u(r, a, !1),
              m: String(a),
              mm: A.s(a, 2, "0"),
              s: String(this.$s),
              ss: A.s(this.$s, 2, "0"),
              SSS: A.s(this.$ms, 3, "0"),
              Z: o,
            };
          return n.replace(f, function (e, t) {
            return t || m[e] || o.replace(":", "");
          });
        }),
        (v.utcOffset = function () {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }),
        (v.diff = function (n, u, h) {
          var m,
            f = A.p(u),
            g = w(n),
            v = (g.utcOffset() - this.utcOffset()) * t,
            b = this - g,
            _ = A.m(this, g);
          return (
            (_ =
              ((m = {}),
              (m[p] = _ / 12),
              (m[l] = _),
              (m[c] = _ / 3),
              (m[d] = (b - v) / 6048e5),
              (m[s] = (b - v) / 864e5),
              (m[a] = b / i),
              (m[r] = b / t),
              (m[o] = b / e),
              m)[f] || b),
            h ? _ : A.a(_)
          );
        }),
        (v.daysInMonth = function () {
          return this.endOf(l).$D;
        }),
        (v.$locale = function () {
          return y[this.$L];
        }),
        (v.locale = function (e, t) {
          if (!e) return this.$L;
          var i = this.clone(),
            n = E(e, t, !0);
          return n && (i.$L = n), i;
        }),
        (v.clone = function () {
          return A.w(this.$d, this);
        }),
        (v.toDate = function () {
          return new Date(this.valueOf());
        }),
        (v.toJSON = function () {
          return this.isValid() ? this.toISOString() : null;
        }),
        (v.toISOString = function () {
          return this.$d.toISOString();
        }),
        (v.toString = function () {
          return this.$d.toUTCString();
        }),
        g
      );
    })(),
    I = C.prototype;
  return (
    (w.prototype = I),
    [
      ["$ms", n],
      ["$s", o],
      ["$m", r],
      ["$H", a],
      ["$W", s],
      ["$M", l],
      ["$y", p],
      ["$D", u],
    ].forEach(function (e) {
      I[e[1]] = function (t) {
        return this.$g(t, e[0], e[1]);
      };
    }),
    (w.extend = function (e, t) {
      return e.$i || (e(t, C, w), (e.$i = !0)), w;
    }),
    (w.locale = E),
    (w.isDayjs = x),
    (w.unix = function (e) {
      return w(1e3 * e);
    }),
    (w.en = y[_]),
    (w.Ls = y),
    (w.p = {}),
    w
  );
})();
var Me = Re;
function ke(e) {
  const [t, i] = e.split(":").map(Number);
  return 60 * t + i;
}
const Fe = c`
  .entur-header {
    display: flex;
    padding: 1rem 1rem 0 1rem;
  }

  .entur-header__name {
    flex: 1;
  }

  .entur-header__time {
    align-self: flex-end;
  }

  .entur-column {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 0.3rem;
  }

  .entur-route {
  }

  .entur-route.divided {
    border-bottom: 1px solid var(--divider-color);
  }

  .entur-route:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }

  .entur-route__name {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--primary-text-color);
    font-size: 18px;
    font-weight: 300;
    margin: 0;
  }

  .entur-route__icon {
    align-self: center;
    width: 100%;
    height: auto;
    display: none;
  }

  .entur-route__lines {
    font-size: 2rem;
  }

  .entur-line__icon {
    --mdc-icon-size: 20px;
    line-height: 0;
  }

  .entur-line.divided {
    border-top: 1px solid var(--divider-color);
  }

  .entur-line {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 0.5rem;
    margin-block: 0.25rem;
    padding-block: 0.25rem;
    white-space: nowrap;
    justify-content: space-between;
  }

  .entur-line__header {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    row-gap: 0.15rem;
    margin-top: 0.3rem;
    color: var(--primary-text-color);
    font-weight: 400;
    max-width: 50%;
    overflow: hidden;
    height: 2rem;
    justify-content: center;
  }

  .entur-line__hr {
    margin: 0;
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  .entur-line__delay {
    --mdc-icon-size: 19px;
    font-size: 0.9rem;
    color: var(--error-color);
  }

  .entur-line__due {
    color: "#ffffff";
  }

  .entur-line__due.icon-right {
    flex-direction: row-reverse;
  }

  .entur-line__due.icon-hidden ha-icon {
    display: none;
  }

  .entur-line__next {
    color: var(--secondary-text-color);
    font-size: 1rem;
    margin-top: 8px;
  }
`;
let Le = class extends se {
  static get styles() {
    return [Fe];
  }
  render() {
    if (!this.due) return U``;
    let e;
    const t = De(this.hass),
      {
        minutes: i,
        hours: n,
        translationKey: o,
      } = (function (e, t) {
        const i = ke(Me().format("HH:mm"));
        let n = ke(e);
        t > 0 && (n += t);
        const o = n - i;
        if (0 === o)
          return { minutes: 0, hours: 0, translationKey: "common.departing" };
        if (o <= 5 && o > 0)
          return {
            minutes: o % 60,
            hours: Math.floor(o / 60),
            translationKey: "common.departs",
          };
        return -2 === o
          ? { minutes: 1, hours: 0, translationKey: "common.departed" }
          : {
              minutes: o % 60,
              hours: Math.floor(o / 60) % 24,
              translationKey: "common.arrives",
            };
      })(this.due, this.delay);
    let r = "";
    return (
      n > 0 &&
        ((r += `${n} ${t(1 === n ? "common.hour" : "common.hours")}`),
        i > 0 && (r += " " + t("common.and") + " ")),
      i > 0 &&
        ("" !== r && (r += " "),
        (r += `${i} ${t(1 === i ? "common.minute" : "common.minutes")}`)),
      (e =
        "common.departs" === o
          ? U`
        <p class="entur-line__hr coming-up">
          ${t(o)} ${r}
        </p>
      `
          : "common.departing" === o ||
            "common.departed" === o ||
            "common.arrives" === o
          ? U`
        <p class="entur-line__hr is-now">
          ${t(o)} ${r}
        </p>
      `
          : U``),
      U`${e}`
    );
  }
};
n([pe()], Le.prototype, "hass", void 0),
  n([pe()], Le.prototype, "due", void 0),
  n([pe()], Le.prototype, "delay", void 0),
  (Le = n([le("entur-card-human-readable")], Le));
var Ne = {},
  Pe = {
    get exports() {
      return Ne;
    },
    set exports(e) {
      Ne = e;
    },
  };
Pe.exports = (function (e) {
  function t(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }
  var i = t(e),
    n = {
      name: "nb",
      weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
      weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
      weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
      months:
        "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
          "_"
        ),
      monthsShort:
        "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split(
          "_"
        ),
      ordinal: function (e) {
        return e + ".";
      },
      weekStart: 1,
      yearStart: 4,
      formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY [kl.] HH:mm",
        LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
      },
      relativeTime: {
        future: "om %s",
        past: "%s siden",
        s: "noen sekunder",
        m: "ett minutt",
        mm: "%d minutter",
        h: "en time",
        hh: "%d timer",
        d: "en dag",
        dd: "%d dager",
        M: "en måned",
        MM: "%d måneder",
        y: "ett år",
        yy: "%d år",
      },
    };
  return i.default.locale(n, null, !0), n;
})(Re);
var Be = {},
  He = {
    get exports() {
      return Be;
    },
    set exports(e) {
      Be = e;
    },
  };
He.exports = (function () {
  var e = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A",
    },
    t =
      /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
    i = /\d\d/,
    n = /\d\d?/,
    o = /\d*[^-_:/,()\s\d]+/,
    r = {},
    a = function (e) {
      return (e = +e) + (e > 68 ? 1900 : 2e3);
    },
    s = function (e) {
      return function (t) {
        this[e] = +t;
      };
    },
    d = [
      /[+-]\d\d:?(\d\d)?|Z/,
      function (e) {
        (this.zone || (this.zone = {})).offset = (function (e) {
          if (!e) return 0;
          if ("Z" === e) return 0;
          var t = e.match(/([+-]|\d\d)/g),
            i = 60 * t[1] + (+t[2] || 0);
          return 0 === i ? 0 : "+" === t[0] ? -i : i;
        })(e);
      },
    ],
    l = function (e) {
      var t = r[e];
      return t && (t.indexOf ? t : t.s.concat(t.f));
    },
    c = function (e, t) {
      var i,
        n = r.meridiem;
      if (n) {
        for (var o = 1; o <= 24; o += 1)
          if (e.indexOf(n(o, 0, t)) > -1) {
            i = o > 12;
            break;
          }
      } else i = e === (t ? "pm" : "PM");
      return i;
    },
    p = {
      A: [
        o,
        function (e) {
          this.afternoon = c(e, !1);
        },
      ],
      a: [
        o,
        function (e) {
          this.afternoon = c(e, !0);
        },
      ],
      S: [
        /\d/,
        function (e) {
          this.milliseconds = 100 * +e;
        },
      ],
      SS: [
        i,
        function (e) {
          this.milliseconds = 10 * +e;
        },
      ],
      SSS: [
        /\d{3}/,
        function (e) {
          this.milliseconds = +e;
        },
      ],
      s: [n, s("seconds")],
      ss: [n, s("seconds")],
      m: [n, s("minutes")],
      mm: [n, s("minutes")],
      H: [n, s("hours")],
      h: [n, s("hours")],
      HH: [n, s("hours")],
      hh: [n, s("hours")],
      D: [n, s("day")],
      DD: [i, s("day")],
      Do: [
        o,
        function (e) {
          var t = r.ordinal,
            i = e.match(/\d+/);
          if (((this.day = i[0]), t))
            for (var n = 1; n <= 31; n += 1)
              t(n).replace(/\[|\]/g, "") === e && (this.day = n);
        },
      ],
      M: [n, s("month")],
      MM: [i, s("month")],
      MMM: [
        o,
        function (e) {
          var t = l("months"),
            i =
              (
                l("monthsShort") ||
                t.map(function (e) {
                  return e.slice(0, 3);
                })
              ).indexOf(e) + 1;
          if (i < 1) throw new Error();
          this.month = i % 12 || i;
        },
      ],
      MMMM: [
        o,
        function (e) {
          var t = l("months").indexOf(e) + 1;
          if (t < 1) throw new Error();
          this.month = t % 12 || t;
        },
      ],
      Y: [/[+-]?\d+/, s("year")],
      YY: [
        i,
        function (e) {
          this.year = a(e);
        },
      ],
      YYYY: [/\d{4}/, s("year")],
      Z: d,
      ZZ: d,
    };
  function u(i) {
    var n, o;
    (n = i), (o = r && r.formats);
    for (
      var a = (i = n.replace(
          /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
          function (t, i, n) {
            var r = n && n.toUpperCase();
            return (
              i ||
              o[n] ||
              e[n] ||
              o[r].replace(
                /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                function (e, t, i) {
                  return t || i.slice(1);
                }
              )
            );
          }
        )).match(t),
        s = a.length,
        d = 0;
      d < s;
      d += 1
    ) {
      var l = a[d],
        c = p[l],
        u = c && c[0],
        h = c && c[1];
      a[d] = h ? { regex: u, parser: h } : l.replace(/^\[|\]$/g, "");
    }
    return function (e) {
      for (var t = {}, i = 0, n = 0; i < s; i += 1) {
        var o = a[i];
        if ("string" == typeof o) n += o.length;
        else {
          var r = o.regex,
            d = o.parser,
            l = e.slice(n),
            c = r.exec(l)[0];
          d.call(t, c), (e = e.replace(c, ""));
        }
      }
      return (
        (function (e) {
          var t = e.afternoon;
          if (void 0 !== t) {
            var i = e.hours;
            t ? i < 12 && (e.hours += 12) : 12 === i && (e.hours = 0),
              delete e.afternoon;
          }
        })(t),
        t
      );
    };
  }
  return function (e, t, i) {
    (i.p.customParseFormat = !0),
      e && e.parseTwoDigitYear && (a = e.parseTwoDigitYear);
    var n = t.prototype,
      o = n.parse;
    n.parse = function (e) {
      var t = e.date,
        n = e.utc,
        a = e.args;
      this.$u = n;
      var s = a[1];
      if ("string" == typeof s) {
        var d = !0 === a[2],
          l = !0 === a[3],
          c = d || l,
          p = a[2];
        l && (p = a[2]),
          (r = this.$locale()),
          !d && p && (r = i.Ls[p]),
          (this.$d = (function (e, t, i) {
            try {
              if (["x", "X"].indexOf(t) > -1)
                return new Date(("X" === t ? 1e3 : 1) * e);
              var n = u(t)(e),
                o = n.year,
                r = n.month,
                a = n.day,
                s = n.hours,
                d = n.minutes,
                l = n.seconds,
                c = n.milliseconds,
                p = n.zone,
                h = new Date(),
                m = a || (o || r ? 1 : h.getDate()),
                f = o || h.getFullYear(),
                g = 0;
              (o && !r) || (g = r > 0 ? r - 1 : h.getMonth());
              var v = s || 0,
                b = d || 0,
                _ = l || 0,
                y = c || 0;
              return p
                ? new Date(Date.UTC(f, g, m, v, b, _, y + 60 * p.offset * 1e3))
                : i
                ? new Date(Date.UTC(f, g, m, v, b, _, y))
                : new Date(f, g, m, v, b, _, y);
            } catch (e) {
              return new Date("");
            }
          })(t, s, n)),
          this.init(),
          p && !0 !== p && (this.$L = this.locale(p).$L),
          c && t != this.format(s) && (this.$d = new Date("")),
          (r = {});
      } else if (s instanceof Array)
        for (var h = s.length, m = 1; m <= h; m += 1) {
          a[1] = s[m - 1];
          var f = i.apply(this, a);
          if (f.isValid()) {
            (this.$d = f.$d), (this.$L = f.$L), this.init();
            break;
          }
          m === h && (this.$d = new Date(""));
        }
      else o.call(this, e);
    };
  };
})();
var ze = Be,
  Ue = {},
  Ve = {
    get exports() {
      return Ue;
    },
    set exports(e) {
      Ue = e;
    },
  };
Ve.exports = function (e, t, i) {
  e = e || {};
  var n = t.prototype,
    o = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    };
  function r(e, t, i, o) {
    return n.fromToBase(e, t, i, o);
  }
  (i.en.relativeTime = o),
    (n.fromToBase = function (t, n, r, a, s) {
      for (
        var d,
          l,
          c,
          p = r.$locale().relativeTime || o,
          u = e.thresholds || [
            { l: "s", r: 44, d: "second" },
            { l: "m", r: 89 },
            { l: "mm", r: 44, d: "minute" },
            { l: "h", r: 89 },
            { l: "hh", r: 21, d: "hour" },
            { l: "d", r: 35 },
            { l: "dd", r: 25, d: "day" },
            { l: "M", r: 45 },
            { l: "MM", r: 10, d: "month" },
            { l: "y", r: 17 },
            { l: "yy", d: "year" },
          ],
          h = u.length,
          m = 0;
        m < h;
        m += 1
      ) {
        var f = u[m];
        f.d && (d = a ? i(t).diff(r, f.d, !0) : r.diff(t, f.d, !0));
        var g = (e.rounding || Math.round)(Math.abs(d));
        if (((c = d > 0), g <= f.r || !f.r)) {
          g <= 1 && m > 0 && (f = u[m - 1]);
          var v = p[f.l];
          s && (g = s("" + g)),
            (l = "string" == typeof v ? v.replace("%d", g) : v(g, n, f.l, c));
          break;
        }
      }
      if (n) return l;
      var b = c ? p.future : p.past;
      return "function" == typeof b ? b(l) : b.replace("%s", l);
    }),
    (n.to = function (e, t) {
      return r(e, t, this, !0);
    }),
    (n.from = function (e, t) {
      return r(e, t, this);
    });
  var a = function (e) {
    return e.$u ? i.utc() : i();
  };
  (n.toNow = function (e) {
    return this.to(a(this), e);
  }),
    (n.fromNow = function (e) {
      return this.from(a(this), e);
    });
};
var je = Ue;
Me.extend(je), Me.extend(ze);
let Ye = class extends se {
  static get styles() {
    return [Fe];
  }
  render() {
    var e;
    if (!this.departure) return U``;
    let t = this.departure;
    this.formattedDeparture = String(t).match("^(.*:..)(.*)");
    const i =
      "line_extras" === this.human_readable_time ||
      "all" === this.human_readable_time;
    return U`
      <div class="entur-line ${this.divide_lines ? "divided" : ""}">
        <div class="entur-line__header">
          ${this.formattedDeparture[2]}
          ${
            i
              ? U`
            <entur-card-human-readable
              .hass=${this.hass}
              .due=${this.formattedDeparture[1]}
            ></entur-card-human-readable>
          `
              : U``
          }
        </div>

        <div class="entur-line__due entur-column icon-${
          null !== (e = this.clock_icon_state) && void 0 !== e ? e : "hidden"
        }">
          <ha-icon class="entur-line__icon" icon="mdi:clock"></ha-icon>
          ${this._renderTimeLeft()}
        </div>
      </div>
    `;
  }
  _renderTimeLeft() {
    if (!this.formattedDeparture[1]) return U``;
    const e = Me(this.formattedDeparture[1], "H:mm");
    return "extras" == this.remaining_time || "all" == this.remaining_time
      ? U`${e.fromNow(!0)}`
      : U`${this.formattedDeparture[1]}`;
  }
};
n([pe()], Ye.prototype, "hass", void 0),
  n([pe()], Ye.prototype, "departure", void 0),
  n([pe()], Ye.prototype, "human_readable_time", void 0),
  n([pe()], Ye.prototype, "remaining_time", void 0),
  n([pe()], Ye.prototype, "clock_icon_state", void 0),
  n([pe()], Ye.prototype, "divide_lines", void 0),
  n([pe()], Ye.prototype, "formattedDeparture", void 0),
  (Ye = n([le("entur-card-line-extra")], Ye));
var We = {},
  Ge = {
    get exports() {
      return We;
    },
    set exports(e) {
      We = e;
    },
  };
Ge.exports = function (e, t, i) {
  i.updateLocale = function (e, t) {
    var n = i.Ls[e];
    if (n)
      return (
        (t ? Object.keys(t) : []).forEach(function (e) {
          n[e] = t[e];
        }),
        n
      );
  };
};
var Xe = We;
Me.extend(Xe), Me.extend(je);
let qe = class extends se {
  static get styles() {
    return [Fe];
  }
  render() {
    var e, t, i;
    if (!this.entity || !this.route) return U``;
    const n =
        "all" === this.entity.extra_departures ||
        "next" === this.entity.extra_departures,
      o =
        "line" === this.entity.human_readable_time ||
        "all" === this.entity.human_readable_time,
      r =
        "line_next" === this.entity.human_readable_time ||
        "all" === this.entity.human_readable_time;
    let a = {};
    return (
      "all" == this.entity.extra_departures &&
        (a = Object.keys(this.route.attributes)
          .filter((e) => e.startsWith("departure"))
          .map((e) => this.route.attributes[e])),
      (this.departures = a),
      U`
      <div class="entur-line">
        <div class="entur-line__header">
          ${this.route.attributes.route}
          ${
            o
              ? U`
          <entur-card-human-readable
            .hass=${this.hass}
            .due=${this.route.attributes.due_at}
            .delay=${this.route.attributes.delay}
          ></entur-card-human-readable>
          `
              : U``
          }
        </div>
        ${
          this.route.attributes.delay > 0
            ? U`
            <div class="entur-line__delay entur-column">
              <ha-icon
                class="entur-icon"
                icon="mdi:clock-alert-outline"
              ></ha-icon>
              ${this.route.attributes.delay} min.
            </div>
          `
            : U``
        }

        <div class="entur-line__due entur-column icon-${
          null !== (e = this.entity.clock_icon_state) && void 0 !== e
            ? e
            : "hidden"
        }">
          <ha-icon class="entur-line__icon" icon="mdi:clock"></ha-icon>
          ${this._renderTimeLeft("line", this.route.attributes.due_at)}
        </div>
      </div>

      ${
        n
          ? U`
        <div class="entur-line next ${
          this.entity.divide_lines ? "divided" : ""
        }">
          <div class="entur-line__header">
            ${this.route.attributes.next_route}
            ${
              r
                ? U`
              <entur-card-human-readable
                .hass=${this.hass}
                .due=${this.route.attributes.next_due_at}
                .delay=${this.route.attributes.next_delay}
              ></entur-card-human-readable>
            `
                : U``
            }
          </div>
          <div class="entur-line__due entur-column icon-${
            null !== (t = this.entity.clock_icon_state) && void 0 !== t
              ? t
              : "hidden"
          }">
            <ha-icon class="entur-line__icon" icon="mdi:clock"></ha-icon>
            ${this._renderTimeLeft(
              "line_next",
              this.route.attributes.next_due_at
            )}
          </div>
        </div>
      `
          : U``
      }

      ${
        "all" === this.entity.extra_departures
          ? U`
        ${
          null === (i = this.departures) || void 0 === i
            ? void 0
            : i.map(
                (e) => U`
          <entur-card-line-extra
            .hass=${this.hass}
            .departure="${e}"
            .human_readable_time="${this.entity.human_readable_time}"
            .remaining_time="${this.entity.remaining_time}"
            .clock_icon_state="${this.entity.clock_icon_state}"
            .divide_lines="${this.entity.divide_lines}"
          ></entur-card-line-extra>
        `
              )
        }`
          : U``
      }
    `
    );
  }
  _renderTimeLeft(e, t) {
    return t || isNaN(t)
      ? this.entity.remaining_time == e || "all" == this.entity.remaining_time
        ? U`${Me(t, "H:mm").fromNow(!0)}`
        : U`${t}`
      : U``;
  }
};
n([pe()], qe.prototype, "departures", void 0),
  n([pe()], qe.prototype, "hass", void 0),
  n([pe()], qe.prototype, "entity", void 0),
  n([pe()], qe.prototype, "route", void 0),
  (qe = n([le("entur-card-line")], qe)),
  Me.extend(je),
  Me.extend(ze),
  (window.customCards = window.customCards || []),
  window.customCards.push({
    type: "entur-card",
    name: "Entur Card Compact",
    description:
      "This card is made to work with the Entur public transport component.",
  });
let Ke = class extends se {
  static async getConfigElement() {
    return (
      await Promise.resolve().then(function () {
        return On;
      }),
      document.createElement("entur-card-editor")
    );
  }
  getCardSize() {
    return 1;
  }
  static getStubConfig() {
    return { entities: [] };
  }
  setConfig(e) {
    this.config = e;
  }
  static get styles() {
    return [Fe];
  }
  render() {
    var e, t, i;
    if (!this.config || !this.hass) return U``;
    const n =
      null !==
        (t =
          null === (e = this.hass) || void 0 === e
            ? void 0
            : e.locale.language) && void 0 !== t
        ? t
        : "en";
    return (
      Me.locale(n),
      U`
      <ha-card>
        ${this._renderHeader()}
        <div class="entur-routes">
          ${
            null === (i = this.config.entities) || void 0 === i
              ? void 0
              : i.map((e) => {
                  var t;
                  const i =
                    null === (t = this.hass) || void 0 === t
                      ? void 0
                      : t.states[e.entity];
                  return i
                    ? U`
              <div
                class="entur-route ${
                  this.config.divide_routes ? "divided" : ""
                }"
              >
                <ha-icon
                  class="entur-route__icon"
                  icon="${e.icon ? e.icon : i.attributes.icon}"
                ></ha-icon>
                <h2 class="entur-route__name">
                  ${e.name ? e.name : i.attributes.friendly_name}
                  ${
                    e.destination
                      ? U`
                        <ha-icon
                          class="entur-icon"
                          icon="mdi:chevron-right"
                        ></ha-icon>
                        ${e.destination}
                      `
                      : U``
                  }
                </h2>
                <div class="entur-route__lines">
                  <entur-card-line
                    .hass="${this.hass}"
                    .entity="${e}"
                    .route=${i}
                    .locale=${n}
                  ></entur-card-line>
                </div>
              </div>
            `
                    : U``;
                })
          }
        </div>
      </ha-card>
    `
    );
  }
  _renderHeader() {
    return this.config.name || this.config.display_time
      ? U`
            <div class="card-header entur-header">
              ${
                this.config.name
                  ? U`
                    <div class="entur-header__name">${this.config.name}</div>
                  `
                  : U``
              }
              ${
                this.config.display_time
                  ? U`<div class="entur-header__time">
                    ${Me().format("HH:mm")}
                  </div>`
                  : U``
              }
            </div>
          `
      : U``;
  }
};
n([pe({ attribute: !1 })], Ke.prototype, "hass", void 0),
  n([pe({ attribute: !1 })], Ke.prototype, "config", void 0),
  (Ke = n([le("entur-card")], Ke)),
  customElements.get("entur-card") ||
    (customElements.define("entur-card", Ke),
    console.info(
      `%c  ENTUR-CARD \n%c ${be}    `,
      "color: orange; font-weight: bold; background: black",
      "color: white; font-weight: bold; background: dimgray"
    ));
const Ze = 1,
  Qe = 3,
  Je =
    (e) =>
    (...t) => ({ _$litDirective$: e, values: t });
let et = class {
  constructor(e) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, i) {
    (this._$Ct = e), (this._$AM = t), (this._$Ci = i);
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
};
const tt = {},
  it = Je(
    class extends et {
      constructor() {
        super(...arguments), (this.ot = tt);
      }
      render(e, t) {
        return t();
      }
      update(e, [t, i]) {
        if (Array.isArray(t)) {
          if (
            Array.isArray(this.ot) &&
            this.ot.length === t.length &&
            t.every((e, t) => e === this.ot[t])
          )
            return V;
        } else if (this.ot === t) return V;
        return (
          (this.ot = Array.isArray(t) ? Array.from(t) : t), this.render(t, i)
        );
      }
    }
  );
function nt(e) {
  return class extends e {
    createRenderRoot() {
      const e = this.constructor,
        { registry: t, elementDefinitions: i, shadowRootOptions: n } = e;
      i &&
        !t &&
        ((e.registry = new CustomElementRegistry()),
        Object.entries(i).forEach(([t, i]) => e.registry.define(t, i)));
      const o = (this.renderOptions.creationScope = this.attachShadow({
        ...n,
        customElements: e.registry,
      }));
      return p(o, this.constructor.elementStyles), o;
    }
  };
}
var ot, rt;
!(function (e) {
  (e.language = "language"),
    (e.system = "system"),
    (e.comma_decimal = "comma_decimal"),
    (e.decimal_comma = "decimal_comma"),
    (e.space_comma = "space_comma"),
    (e.none = "none");
})(ot || (ot = {})),
  (function (e) {
    (e.language = "language"),
      (e.system = "system"),
      (e.am_pm = "12"),
      (e.twenty_four = "24");
  })(rt || (rt = {}));
var at = function (e, t, i, n) {
  (n = n || {}), (i = null == i ? {} : i);
  var o = new Event(t, {
    bubbles: void 0 === n.bubbles || n.bubbles,
    cancelable: Boolean(n.cancelable),
    composed: void 0 === n.composed || n.composed,
  });
  return (o.detail = i), e.dispatchEvent(o), o;
};
const st = (e, t) =>
    e.reduce(
      (e, i) => (
        i.defineId
          ? (e[i.defineId] = i)
          : i.promise.then((e) => {
              void 0 === t.registry.get(i.name) && t.registry.define(i.name, e);
            }),
        e
      ),
      {}
    ),
  dt = (e) => ({
    name: e,
    promise: customElements.whenDefined(e).then(() => customElements.get(e)),
  }),
  lt = (e) => (t, i) => {
    if (t.constructor._observers) {
      if (!t.constructor.hasOwnProperty("_observers")) {
        const e = t.constructor._observers;
        (t.constructor._observers = new Map()),
          e.forEach((e, i) => t.constructor._observers.set(i, e));
      }
    } else {
      t.constructor._observers = new Map();
      const e = t.updated;
      t.updated = function (t) {
        e.call(this, t),
          t.forEach((e, t) => {
            const i = this.constructor._observers.get(t);
            void 0 !== i && i.call(this, this[t], e);
          });
      };
    }
    t.constructor._observers.set(i, e);
  };
class ct {
  constructor(e) {
    (this.startPress = (t) => {
      e().then((e) => {
        e && e.startPress(t);
      });
    }),
      (this.endPress = () => {
        e().then((e) => {
          e && e.endPress();
        });
      }),
      (this.startFocus = () => {
        e().then((e) => {
          e && e.startFocus();
        });
      }),
      (this.endFocus = () => {
        e().then((e) => {
          e && e.endFocus();
        });
      }),
      (this.startHover = () => {
        e().then((e) => {
          e && e.startHover();
        });
      }),
      (this.endHover = () => {
        e().then((e) => {
          e && e.endHover();
        });
      });
  }
}
const pt = Je(
  class extends et {
    constructor(e) {
      var t;
      if (
        (super(e),
        e.type !== Ze ||
          "class" !== e.name ||
          (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2)
      )
        throw Error(
          "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
        );
    }
    render(e) {
      return (
        " " +
        Object.keys(e)
          .filter((t) => e[t])
          .join(" ") +
        " "
      );
    }
    update(e, [t]) {
      var i, n;
      if (void 0 === this.nt) {
        (this.nt = new Set()),
          void 0 !== e.strings &&
            (this.st = new Set(
              e.strings
                .join(" ")
                .split(/\s/)
                .filter((e) => "" !== e)
            ));
        for (const e in t)
          t[e] &&
            !(null === (i = this.st) || void 0 === i ? void 0 : i.has(e)) &&
            this.nt.add(e);
        return this.render(t);
      }
      const o = e.element.classList;
      this.nt.forEach((e) => {
        e in t || (o.remove(e), this.nt.delete(e));
      });
      for (const e in t) {
        const i = !!t[e];
        i === this.nt.has(e) ||
          (null === (n = this.st) || void 0 === n ? void 0 : n.has(e)) ||
          (i ? (o.add(e), this.nt.add(e)) : (o.remove(e), this.nt.delete(e)));
      }
      return V;
    }
  }
);
class ut extends se {
  constructor() {
    super(...arguments),
      (this.value = ""),
      (this.group = null),
      (this.tabindex = -1),
      (this.disabled = !1),
      (this.twoline = !1),
      (this.activated = !1),
      (this.graphic = null),
      (this.multipleGraphics = !1),
      (this.hasMeta = !1),
      (this.noninteractive = !1),
      (this.selected = !1),
      (this.shouldRenderRipple = !1),
      (this._managingList = null),
      (this.boundOnClick = this.onClick.bind(this)),
      (this._firstChanged = !0),
      (this._skipPropRequest = !1),
      (this.rippleHandlers = new ct(
        () => ((this.shouldRenderRipple = !0), this.ripple)
      )),
      (this.listeners = [
        {
          target: this,
          eventNames: ["click"],
          cb: () => {
            this.onClick();
          },
        },
        {
          target: this,
          eventNames: ["mouseenter"],
          cb: this.rippleHandlers.startHover,
        },
        {
          target: this,
          eventNames: ["mouseleave"],
          cb: this.rippleHandlers.endHover,
        },
        {
          target: this,
          eventNames: ["focus"],
          cb: this.rippleHandlers.startFocus,
        },
        {
          target: this,
          eventNames: ["blur"],
          cb: this.rippleHandlers.endFocus,
        },
        {
          target: this,
          eventNames: ["mousedown", "touchstart"],
          cb: (e) => {
            const t = e.type;
            this.onDown("mousedown" === t ? "mouseup" : "touchend", e);
          },
        },
      ]);
  }
  get text() {
    const e = this.textContent;
    return e ? e.trim() : "";
  }
  render() {
    const e = this.renderText(),
      t = this.graphic ? this.renderGraphic() : U``,
      i = this.hasMeta ? this.renderMeta() : U``;
    return U`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${i}`;
  }
  renderRipple() {
    return this.shouldRenderRipple
      ? U`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`
      : this.activated
      ? U`<div class="fake-activated-ripple"></div>`
      : "";
  }
  renderGraphic() {
    const e = { multi: this.multipleGraphics };
    return U`
      <span class="mdc-deprecated-list-item__graphic material-icons ${pt(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return U`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return U`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return U`<slot></slot>`;
  }
  renderTwoline() {
    return U`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `;
  }
  onClick() {
    this.fireRequestSelected(!this.selected, "interaction");
  }
  onDown(e, t) {
    const i = () => {
      window.removeEventListener(e, i), this.rippleHandlers.endPress();
    };
    window.addEventListener(e, i), this.rippleHandlers.startPress(t);
  }
  fireRequestSelected(e, t) {
    if (this.noninteractive) return;
    const i = new CustomEvent("request-selected", {
      bubbles: !0,
      composed: !0,
      detail: { source: t, selected: e },
    });
    this.dispatchEvent(i);
  }
  connectedCallback() {
    super.connectedCallback(),
      this.noninteractive || this.setAttribute("mwc-list-item", "");
    for (const e of this.listeners)
      for (const t of e.eventNames)
        e.target.addEventListener(t, e.cb, { passive: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const e of this.listeners)
      for (const t of e.eventNames) e.target.removeEventListener(t, e.cb);
    this._managingList &&
      (this._managingList.debouncedLayout
        ? this._managingList.debouncedLayout(!0)
        : this._managingList.layout(!0));
  }
  firstUpdated() {
    const e = new Event("list-item-rendered", { bubbles: !0, composed: !0 });
    this.dispatchEvent(e);
  }
}
n([me("slot")], ut.prototype, "slotElement", void 0),
  n(
    [
      (function (e) {
        return he({
          descriptor: (t) => ({
            async get() {
              var t;
              return (
                await this.updateComplete,
                null === (t = this.renderRoot) || void 0 === t
                  ? void 0
                  : t.querySelector(e)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
        });
      })("mwc-ripple"),
    ],
    ut.prototype,
    "ripple",
    void 0
  ),
  n([pe({ type: String })], ut.prototype, "value", void 0),
  n([pe({ type: String, reflect: !0 })], ut.prototype, "group", void 0),
  n([pe({ type: Number, reflect: !0 })], ut.prototype, "tabindex", void 0),
  n(
    [
      pe({ type: Boolean, reflect: !0 }),
      lt(function (e) {
        e
          ? this.setAttribute("aria-disabled", "true")
          : this.setAttribute("aria-disabled", "false");
      }),
    ],
    ut.prototype,
    "disabled",
    void 0
  ),
  n([pe({ type: Boolean, reflect: !0 })], ut.prototype, "twoline", void 0),
  n([pe({ type: Boolean, reflect: !0 })], ut.prototype, "activated", void 0),
  n([pe({ type: String, reflect: !0 })], ut.prototype, "graphic", void 0),
  n([pe({ type: Boolean })], ut.prototype, "multipleGraphics", void 0),
  n([pe({ type: Boolean })], ut.prototype, "hasMeta", void 0),
  n(
    [
      pe({ type: Boolean, reflect: !0 }),
      lt(function (e) {
        e
          ? (this.removeAttribute("aria-checked"),
            this.removeAttribute("mwc-list-item"),
            (this.selected = !1),
            (this.activated = !1),
            (this.tabIndex = -1))
          : this.setAttribute("mwc-list-item", "");
      }),
    ],
    ut.prototype,
    "noninteractive",
    void 0
  ),
  n(
    [
      pe({ type: Boolean, reflect: !0 }),
      lt(function (e) {
        const t = this.getAttribute("role"),
          i = "gridcell" === t || "option" === t || "row" === t || "tab" === t;
        i && e
          ? this.setAttribute("aria-selected", "true")
          : i && this.setAttribute("aria-selected", "false"),
          this._firstChanged
            ? (this._firstChanged = !1)
            : this._skipPropRequest || this.fireRequestSelected(e, "property");
      }),
    ],
    ut.prototype,
    "selected",
    void 0
  ),
  n([ue()], ut.prototype, "shouldRenderRipple", void 0),
  n([ue()], ut.prototype, "_managingList", void 0);
const ht = c`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
const mt = (e) => e.nodeType === Node.ELEMENT_NODE;
function ft(e) {
  return {
    addClass: (t) => {
      e.classList.add(t);
    },
    removeClass: (t) => {
      e.classList.remove(t);
    },
    hasClass: (t) => e.classList.contains(t),
  };
}
const gt = () => {},
  vt = {
    get passive() {
      return !1;
    },
  };
document.addEventListener("x", gt, vt), document.removeEventListener("x", gt);
const bt = (e = window.document) => {
    let t = e.activeElement;
    const i = [];
    if (!t) return i;
    for (; t && (i.push(t), t.shadowRoot); ) t = t.shadowRoot.activeElement;
    return i;
  },
  _t = (e) => {
    const t = bt();
    if (!t.length) return !1;
    const i = t[t.length - 1],
      n = new Event("check-if-focused", { bubbles: !0, composed: !0 });
    let o = [];
    const r = (e) => {
      o = e.composedPath();
    };
    return (
      document.body.addEventListener("check-if-focused", r),
      i.dispatchEvent(n),
      document.body.removeEventListener("check-if-focused", r),
      -1 !== o.indexOf(e)
    );
  };
class yt extends se {
  click() {
    if (this.mdcRoot) return this.mdcRoot.focus(), void this.mdcRoot.click();
    super.click();
  }
  createFoundation() {
    void 0 !== this.mdcFoundation && this.mdcFoundation.destroy(),
      this.mdcFoundationClass &&
        ((this.mdcFoundation = new this.mdcFoundationClass(
          this.createAdapter()
        )),
        this.mdcFoundation.init());
  }
  firstUpdated() {
    this.createFoundation();
  }
}
var xt = (function () {
    function e(e) {
      void 0 === e && (e = {}), (this.adapter = e);
    }
    return (
      Object.defineProperty(e, "cssClasses", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "strings", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "numbers", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.init = function () {}),
      (e.prototype.destroy = function () {}),
      e
    );
  })(),
  Et = {
    BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
    FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
    FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
    ROOT: "mdc-ripple-upgraded",
    UNBOUNDED: "mdc-ripple-upgraded--unbounded",
  },
  wt = {
    VAR_FG_SCALE: "--mdc-ripple-fg-scale",
    VAR_FG_SIZE: "--mdc-ripple-fg-size",
    VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
    VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
    VAR_LEFT: "--mdc-ripple-left",
    VAR_TOP: "--mdc-ripple-top",
  },
  At = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300,
  };
var Ct = ["touchstart", "pointerdown", "mousedown", "keydown"],
  It = ["touchend", "pointerup", "mouseup", "contextmenu"],
  St = [],
  Tt = (function (e) {
    function n(t) {
      var o = e.call(this, i(i({}, n.defaultAdapter), t)) || this;
      return (
        (o.activationAnimationHasEnded = !1),
        (o.activationTimer = 0),
        (o.fgDeactivationRemovalTimer = 0),
        (o.fgScale = "0"),
        (o.frame = { width: 0, height: 0 }),
        (o.initialSize = 0),
        (o.layoutFrame = 0),
        (o.maxRadius = 0),
        (o.unboundedCoords = { left: 0, top: 0 }),
        (o.activationState = o.defaultActivationState()),
        (o.activationTimerCallback = function () {
          (o.activationAnimationHasEnded = !0),
            o.runDeactivationUXLogicIfReady();
        }),
        (o.activateHandler = function (e) {
          o.activateImpl(e);
        }),
        (o.deactivateHandler = function () {
          o.deactivateImpl();
        }),
        (o.focusHandler = function () {
          o.handleFocus();
        }),
        (o.blurHandler = function () {
          o.handleBlur();
        }),
        (o.resizeHandler = function () {
          o.layout();
        }),
        o
      );
    }
    return (
      t(n, e),
      Object.defineProperty(n, "cssClasses", {
        get: function () {
          return Et;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "strings", {
        get: function () {
          return wt;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "numbers", {
        get: function () {
          return At;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            browserSupportsCssVars: function () {
              return !0;
            },
            computeBoundingRect: function () {
              return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0,
              };
            },
            containsEventTarget: function () {
              return !0;
            },
            deregisterDocumentInteractionHandler: function () {},
            deregisterInteractionHandler: function () {},
            deregisterResizeHandler: function () {},
            getWindowPageOffset: function () {
              return { x: 0, y: 0 };
            },
            isSurfaceActive: function () {
              return !0;
            },
            isSurfaceDisabled: function () {
              return !0;
            },
            isUnbounded: function () {
              return !0;
            },
            registerDocumentInteractionHandler: function () {},
            registerInteractionHandler: function () {},
            registerResizeHandler: function () {},
            removeClass: function () {},
            updateCssVariable: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.init = function () {
        var e = this,
          t = this.supportsPressRipple();
        if ((this.registerRootHandlers(t), t)) {
          var i = n.cssClasses,
            o = i.ROOT,
            r = i.UNBOUNDED;
          requestAnimationFrame(function () {
            e.adapter.addClass(o),
              e.adapter.isUnbounded() &&
                (e.adapter.addClass(r), e.layoutInternal());
          });
        }
      }),
      (n.prototype.destroy = function () {
        var e = this;
        if (this.supportsPressRipple()) {
          this.activationTimer &&
            (clearTimeout(this.activationTimer),
            (this.activationTimer = 0),
            this.adapter.removeClass(n.cssClasses.FG_ACTIVATION)),
            this.fgDeactivationRemovalTimer &&
              (clearTimeout(this.fgDeactivationRemovalTimer),
              (this.fgDeactivationRemovalTimer = 0),
              this.adapter.removeClass(n.cssClasses.FG_DEACTIVATION));
          var t = n.cssClasses,
            i = t.ROOT,
            o = t.UNBOUNDED;
          requestAnimationFrame(function () {
            e.adapter.removeClass(i),
              e.adapter.removeClass(o),
              e.removeCssVars();
          });
        }
        this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
      }),
      (n.prototype.activate = function (e) {
        this.activateImpl(e);
      }),
      (n.prototype.deactivate = function () {
        this.deactivateImpl();
      }),
      (n.prototype.layout = function () {
        var e = this;
        this.layoutFrame && cancelAnimationFrame(this.layoutFrame),
          (this.layoutFrame = requestAnimationFrame(function () {
            e.layoutInternal(), (e.layoutFrame = 0);
          }));
      }),
      (n.prototype.setUnbounded = function (e) {
        var t = n.cssClasses.UNBOUNDED;
        e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
      }),
      (n.prototype.handleFocus = function () {
        var e = this;
        requestAnimationFrame(function () {
          return e.adapter.addClass(n.cssClasses.BG_FOCUSED);
        });
      }),
      (n.prototype.handleBlur = function () {
        var e = this;
        requestAnimationFrame(function () {
          return e.adapter.removeClass(n.cssClasses.BG_FOCUSED);
        });
      }),
      (n.prototype.supportsPressRipple = function () {
        return this.adapter.browserSupportsCssVars();
      }),
      (n.prototype.defaultActivationState = function () {
        return {
          activationEvent: void 0,
          hasDeactivationUXRun: !1,
          isActivated: !1,
          isProgrammatic: !1,
          wasActivatedByPointer: !1,
          wasElementMadeActive: !1,
        };
      }),
      (n.prototype.registerRootHandlers = function (e) {
        var t, i;
        if (e) {
          try {
            for (var n = o(Ct), r = n.next(); !r.done; r = n.next()) {
              var a = r.value;
              this.adapter.registerInteractionHandler(a, this.activateHandler);
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              r && !r.done && (i = n.return) && i.call(n);
            } finally {
              if (t) throw t.error;
            }
          }
          this.adapter.isUnbounded() &&
            this.adapter.registerResizeHandler(this.resizeHandler);
        }
        this.adapter.registerInteractionHandler("focus", this.focusHandler),
          this.adapter.registerInteractionHandler("blur", this.blurHandler);
      }),
      (n.prototype.registerDeactivationHandlers = function (e) {
        var t, i;
        if ("keydown" === e.type)
          this.adapter.registerInteractionHandler(
            "keyup",
            this.deactivateHandler
          );
        else
          try {
            for (var n = o(It), r = n.next(); !r.done; r = n.next()) {
              var a = r.value;
              this.adapter.registerDocumentInteractionHandler(
                a,
                this.deactivateHandler
              );
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              r && !r.done && (i = n.return) && i.call(n);
            } finally {
              if (t) throw t.error;
            }
          }
      }),
      (n.prototype.deregisterRootHandlers = function () {
        var e, t;
        try {
          for (var i = o(Ct), n = i.next(); !n.done; n = i.next()) {
            var r = n.value;
            this.adapter.deregisterInteractionHandler(r, this.activateHandler);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            n && !n.done && (t = i.return) && t.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        this.adapter.deregisterInteractionHandler("focus", this.focusHandler),
          this.adapter.deregisterInteractionHandler("blur", this.blurHandler),
          this.adapter.isUnbounded() &&
            this.adapter.deregisterResizeHandler(this.resizeHandler);
      }),
      (n.prototype.deregisterDeactivationHandlers = function () {
        var e, t;
        this.adapter.deregisterInteractionHandler(
          "keyup",
          this.deactivateHandler
        );
        try {
          for (var i = o(It), n = i.next(); !n.done; n = i.next()) {
            var r = n.value;
            this.adapter.deregisterDocumentInteractionHandler(
              r,
              this.deactivateHandler
            );
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            n && !n.done && (t = i.return) && t.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
      }),
      (n.prototype.removeCssVars = function () {
        var e = this,
          t = n.strings;
        Object.keys(t).forEach(function (i) {
          0 === i.indexOf("VAR_") && e.adapter.updateCssVariable(t[i], null);
        });
      }),
      (n.prototype.activateImpl = function (e) {
        var t = this;
        if (!this.adapter.isSurfaceDisabled()) {
          var i = this.activationState;
          if (!i.isActivated) {
            var n = this.previousActivationEvent;
            if (!(n && void 0 !== e && n.type !== e.type))
              (i.isActivated = !0),
                (i.isProgrammatic = void 0 === e),
                (i.activationEvent = e),
                (i.wasActivatedByPointer =
                  !i.isProgrammatic &&
                  void 0 !== e &&
                  ("mousedown" === e.type ||
                    "touchstart" === e.type ||
                    "pointerdown" === e.type)),
                void 0 !== e &&
                St.length > 0 &&
                St.some(function (e) {
                  return t.adapter.containsEventTarget(e);
                })
                  ? this.resetActivationState()
                  : (void 0 !== e &&
                      (St.push(e.target), this.registerDeactivationHandlers(e)),
                    (i.wasElementMadeActive = this.checkElementMadeActive(e)),
                    i.wasElementMadeActive && this.animateActivation(),
                    requestAnimationFrame(function () {
                      (St = []),
                        i.wasElementMadeActive ||
                          void 0 === e ||
                          (" " !== e.key && 32 !== e.keyCode) ||
                          ((i.wasElementMadeActive =
                            t.checkElementMadeActive(e)),
                          i.wasElementMadeActive && t.animateActivation()),
                        i.wasElementMadeActive ||
                          (t.activationState = t.defaultActivationState());
                    }));
          }
        }
      }),
      (n.prototype.checkElementMadeActive = function (e) {
        return (
          void 0 === e || "keydown" !== e.type || this.adapter.isSurfaceActive()
        );
      }),
      (n.prototype.animateActivation = function () {
        var e = this,
          t = n.strings,
          i = t.VAR_FG_TRANSLATE_START,
          o = t.VAR_FG_TRANSLATE_END,
          r = n.cssClasses,
          a = r.FG_DEACTIVATION,
          s = r.FG_ACTIVATION,
          d = n.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal();
        var l = "",
          c = "";
        if (!this.adapter.isUnbounded()) {
          var p = this.getFgTranslationCoordinates(),
            u = p.startPoint,
            h = p.endPoint;
          (l = u.x + "px, " + u.y + "px"), (c = h.x + "px, " + h.y + "px");
        }
        this.adapter.updateCssVariable(i, l),
          this.adapter.updateCssVariable(o, c),
          clearTimeout(this.activationTimer),
          clearTimeout(this.fgDeactivationRemovalTimer),
          this.rmBoundedActivationClasses(),
          this.adapter.removeClass(a),
          this.adapter.computeBoundingRect(),
          this.adapter.addClass(s),
          (this.activationTimer = setTimeout(function () {
            e.activationTimerCallback();
          }, d));
      }),
      (n.prototype.getFgTranslationCoordinates = function () {
        var e,
          t = this.activationState,
          i = t.activationEvent;
        return (
          (e = t.wasActivatedByPointer
            ? (function (e, t, i) {
                if (!e) return { x: 0, y: 0 };
                var n,
                  o,
                  r = t.x,
                  a = t.y,
                  s = r + i.left,
                  d = a + i.top;
                if ("touchstart" === e.type) {
                  var l = e;
                  (n = l.changedTouches[0].pageX - s),
                    (o = l.changedTouches[0].pageY - d);
                } else {
                  var c = e;
                  (n = c.pageX - s), (o = c.pageY - d);
                }
                return { x: n, y: o };
              })(
                i,
                this.adapter.getWindowPageOffset(),
                this.adapter.computeBoundingRect()
              )
            : { x: this.frame.width / 2, y: this.frame.height / 2 }),
          {
            startPoint: (e = {
              x: e.x - this.initialSize / 2,
              y: e.y - this.initialSize / 2,
            }),
            endPoint: {
              x: this.frame.width / 2 - this.initialSize / 2,
              y: this.frame.height / 2 - this.initialSize / 2,
            },
          }
        );
      }),
      (n.prototype.runDeactivationUXLogicIfReady = function () {
        var e = this,
          t = n.cssClasses.FG_DEACTIVATION,
          i = this.activationState,
          o = i.hasDeactivationUXRun,
          r = i.isActivated;
        (o || !r) &&
          this.activationAnimationHasEnded &&
          (this.rmBoundedActivationClasses(),
          this.adapter.addClass(t),
          (this.fgDeactivationRemovalTimer = setTimeout(function () {
            e.adapter.removeClass(t);
          }, At.FG_DEACTIVATION_MS)));
      }),
      (n.prototype.rmBoundedActivationClasses = function () {
        var e = n.cssClasses.FG_ACTIVATION;
        this.adapter.removeClass(e),
          (this.activationAnimationHasEnded = !1),
          this.adapter.computeBoundingRect();
      }),
      (n.prototype.resetActivationState = function () {
        var e = this;
        (this.previousActivationEvent = this.activationState.activationEvent),
          (this.activationState = this.defaultActivationState()),
          setTimeout(function () {
            return (e.previousActivationEvent = void 0);
          }, n.numbers.TAP_DELAY_MS);
      }),
      (n.prototype.deactivateImpl = function () {
        var e = this,
          t = this.activationState;
        if (t.isActivated) {
          var n = i({}, t);
          t.isProgrammatic
            ? (requestAnimationFrame(function () {
                e.animateDeactivation(n);
              }),
              this.resetActivationState())
            : (this.deregisterDeactivationHandlers(),
              requestAnimationFrame(function () {
                (e.activationState.hasDeactivationUXRun = !0),
                  e.animateDeactivation(n),
                  e.resetActivationState();
              }));
        }
      }),
      (n.prototype.animateDeactivation = function (e) {
        var t = e.wasActivatedByPointer,
          i = e.wasElementMadeActive;
        (t || i) && this.runDeactivationUXLogicIfReady();
      }),
      (n.prototype.layoutInternal = function () {
        var e = this;
        this.frame = this.adapter.computeBoundingRect();
        var t = Math.max(this.frame.height, this.frame.width);
        this.maxRadius = this.adapter.isUnbounded()
          ? t
          : Math.sqrt(
              Math.pow(e.frame.width, 2) + Math.pow(e.frame.height, 2)
            ) + n.numbers.PADDING;
        var i = Math.floor(t * n.numbers.INITIAL_ORIGIN_SCALE);
        this.adapter.isUnbounded() && i % 2 != 0
          ? (this.initialSize = i - 1)
          : (this.initialSize = i),
          (this.fgScale = "" + this.maxRadius / this.initialSize),
          this.updateLayoutCssVars();
      }),
      (n.prototype.updateLayoutCssVars = function () {
        var e = n.strings,
          t = e.VAR_FG_SIZE,
          i = e.VAR_LEFT,
          o = e.VAR_TOP,
          r = e.VAR_FG_SCALE;
        this.adapter.updateCssVariable(t, this.initialSize + "px"),
          this.adapter.updateCssVariable(r, this.fgScale),
          this.adapter.isUnbounded() &&
            ((this.unboundedCoords = {
              left: Math.round(this.frame.width / 2 - this.initialSize / 2),
              top: Math.round(this.frame.height / 2 - this.initialSize / 2),
            }),
            this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"),
            this.adapter.updateCssVariable(o, this.unboundedCoords.top + "px"));
      }),
      n
    );
  })(xt),
  Ot = Tt;
const Dt = Je(
  class extends et {
    constructor(e) {
      var t;
      if (
        (super(e),
        e.type !== Ze ||
          "style" !== e.name ||
          (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2)
      )
        throw Error(
          "The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute."
        );
    }
    render(e) {
      return Object.keys(e).reduce((t, i) => {
        const n = e[i];
        return null == n
          ? t
          : t +
              `${(i = i
                .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&")
                .toLowerCase())}:${n};`;
      }, "");
    }
    update(e, [t]) {
      const { style: i } = e.element;
      if (void 0 === this.vt) {
        this.vt = new Set();
        for (const e in t) this.vt.add(e);
        return this.render(t);
      }
      this.vt.forEach((e) => {
        null == t[e] &&
          (this.vt.delete(e),
          e.includes("-") ? i.removeProperty(e) : (i[e] = ""));
      });
      for (const e in t) {
        const n = t[e];
        null != n &&
          (this.vt.add(e), e.includes("-") ? i.setProperty(e, n) : (i[e] = n));
      }
      return V;
    }
  }
);
class Rt extends yt {
  constructor() {
    super(...arguments),
      (this.primary = !1),
      (this.accent = !1),
      (this.unbounded = !1),
      (this.disabled = !1),
      (this.activated = !1),
      (this.selected = !1),
      (this.internalUseStateLayerCustomProperties = !1),
      (this.hovering = !1),
      (this.bgFocused = !1),
      (this.fgActivation = !1),
      (this.fgDeactivation = !1),
      (this.fgScale = ""),
      (this.fgSize = ""),
      (this.translateStart = ""),
      (this.translateEnd = ""),
      (this.leftPos = ""),
      (this.topPos = ""),
      (this.mdcFoundationClass = Ot);
  }
  get isActive() {
    return (
      (e = this.parentElement || this),
      (t = ":active"),
      (e.matches || e.webkitMatchesSelector || e.msMatchesSelector).call(e, t)
    );
    var e, t;
  }
  createAdapter() {
    return {
      browserSupportsCssVars: () => !0,
      isUnbounded: () => this.unbounded,
      isSurfaceActive: () => this.isActive,
      isSurfaceDisabled: () => this.disabled,
      addClass: (e) => {
        switch (e) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = !0;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = !0;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = !0;
        }
      },
      removeClass: (e) => {
        switch (e) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = !1;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = !1;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = !1;
        }
      },
      containsEventTarget: () => !0,
      registerInteractionHandler: () => {},
      deregisterInteractionHandler: () => {},
      registerDocumentInteractionHandler: () => {},
      deregisterDocumentInteractionHandler: () => {},
      registerResizeHandler: () => {},
      deregisterResizeHandler: () => {},
      updateCssVariable: (e, t) => {
        switch (e) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = t;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = t;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = t;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = t;
            break;
          case "--mdc-ripple-left":
            this.leftPos = t;
            break;
          case "--mdc-ripple-top":
            this.topPos = t;
        }
      },
      computeBoundingRect: () =>
        (this.parentElement || this).getBoundingClientRect(),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset,
      }),
    };
  }
  startPress(e) {
    this.waitForFoundation(() => {
      this.mdcFoundation.activate(e);
    });
  }
  endPress() {
    this.waitForFoundation(() => {
      this.mdcFoundation.deactivate();
    });
  }
  startFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleFocus();
    });
  }
  endFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleBlur();
    });
  }
  startHover() {
    this.hovering = !0;
  }
  endHover() {
    this.hovering = !1;
  }
  waitForFoundation(e) {
    this.mdcFoundation ? e() : this.updateComplete.then(e);
  }
  update(e) {
    e.has("disabled") && this.disabled && this.endHover(), super.update(e);
  }
  render() {
    const e = this.activated && (this.primary || !this.accent),
      t = this.selected && (this.primary || !this.accent),
      i = {
        "mdc-ripple-surface--accent": this.accent,
        "mdc-ripple-surface--primary--activated": e,
        "mdc-ripple-surface--accent--activated": this.accent && this.activated,
        "mdc-ripple-surface--primary--selected": t,
        "mdc-ripple-surface--accent--selected": this.accent && this.selected,
        "mdc-ripple-surface--disabled": this.disabled,
        "mdc-ripple-surface--hover": this.hovering,
        "mdc-ripple-surface--primary": this.primary,
        "mdc-ripple-surface--selected": this.selected,
        "mdc-ripple-upgraded--background-focused": this.bgFocused,
        "mdc-ripple-upgraded--foreground-activation": this.fgActivation,
        "mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
        "mdc-ripple-upgraded--unbounded": this.unbounded,
        "mdc-ripple-surface--internal-use-state-layer-custom-properties":
          this.internalUseStateLayerCustomProperties,
      };
    return U`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${pt(i)}"
          style="${Dt({
            "--mdc-ripple-fg-scale": this.fgScale,
            "--mdc-ripple-fg-size": this.fgSize,
            "--mdc-ripple-fg-translate-end": this.translateEnd,
            "--mdc-ripple-fg-translate-start": this.translateStart,
            "--mdc-ripple-left": this.leftPos,
            "--mdc-ripple-top": this.topPos,
          })}"></div>`;
  }
}
n([me(".mdc-ripple-surface")], Rt.prototype, "mdcRoot", void 0),
  n([pe({ type: Boolean })], Rt.prototype, "primary", void 0),
  n([pe({ type: Boolean })], Rt.prototype, "accent", void 0),
  n([pe({ type: Boolean })], Rt.prototype, "unbounded", void 0),
  n([pe({ type: Boolean })], Rt.prototype, "disabled", void 0),
  n([pe({ type: Boolean })], Rt.prototype, "activated", void 0),
  n([pe({ type: Boolean })], Rt.prototype, "selected", void 0),
  n(
    [pe({ type: Boolean })],
    Rt.prototype,
    "internalUseStateLayerCustomProperties",
    void 0
  ),
  n([ue()], Rt.prototype, "hovering", void 0),
  n([ue()], Rt.prototype, "bgFocused", void 0),
  n([ue()], Rt.prototype, "fgActivation", void 0),
  n([ue()], Rt.prototype, "fgDeactivation", void 0),
  n([ue()], Rt.prototype, "fgScale", void 0),
  n([ue()], Rt.prototype, "fgSize", void 0),
  n([ue()], Rt.prototype, "translateStart", void 0),
  n([ue()], Rt.prototype, "translateEnd", void 0),
  n([ue()], Rt.prototype, "leftPos", void 0),
  n([ue()], Rt.prototype, "topPos", void 0);
const $t = c`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
class Mt extends nt(Rt) {
  static get defineId() {
    return "mwc-ripple";
  }
  static get elementDefinitions() {
    return st([], Mt);
  }
  static get styles() {
    return $t;
  }
}
class kt extends nt(ut) {
  static get defineId() {
    return "mwc-list-item";
  }
  static get elementDefinitions() {
    return st([Mt], kt);
  }
  static get styles() {
    return ht;
  }
}
var Ft = {
    UNKNOWN: "Unknown",
    BACKSPACE: "Backspace",
    ENTER: "Enter",
    SPACEBAR: "Spacebar",
    PAGE_UP: "PageUp",
    PAGE_DOWN: "PageDown",
    END: "End",
    HOME: "Home",
    ARROW_LEFT: "ArrowLeft",
    ARROW_UP: "ArrowUp",
    ARROW_RIGHT: "ArrowRight",
    ARROW_DOWN: "ArrowDown",
    DELETE: "Delete",
    ESCAPE: "Escape",
    TAB: "Tab",
  },
  Lt = new Set();
Lt.add(Ft.BACKSPACE),
  Lt.add(Ft.ENTER),
  Lt.add(Ft.SPACEBAR),
  Lt.add(Ft.PAGE_UP),
  Lt.add(Ft.PAGE_DOWN),
  Lt.add(Ft.END),
  Lt.add(Ft.HOME),
  Lt.add(Ft.ARROW_LEFT),
  Lt.add(Ft.ARROW_UP),
  Lt.add(Ft.ARROW_RIGHT),
  Lt.add(Ft.ARROW_DOWN),
  Lt.add(Ft.DELETE),
  Lt.add(Ft.ESCAPE),
  Lt.add(Ft.TAB);
var Nt = 8,
  Pt = 13,
  Bt = 32,
  Ht = 33,
  zt = 34,
  Ut = 35,
  Vt = 36,
  jt = 37,
  Yt = 38,
  Wt = 39,
  Gt = 40,
  Xt = 46,
  qt = 27,
  Kt = 9,
  Zt = new Map();
Zt.set(Nt, Ft.BACKSPACE),
  Zt.set(Pt, Ft.ENTER),
  Zt.set(Bt, Ft.SPACEBAR),
  Zt.set(Ht, Ft.PAGE_UP),
  Zt.set(zt, Ft.PAGE_DOWN),
  Zt.set(Ut, Ft.END),
  Zt.set(Vt, Ft.HOME),
  Zt.set(jt, Ft.ARROW_LEFT),
  Zt.set(Yt, Ft.ARROW_UP),
  Zt.set(Wt, Ft.ARROW_RIGHT),
  Zt.set(Gt, Ft.ARROW_DOWN),
  Zt.set(Xt, Ft.DELETE),
  Zt.set(qt, Ft.ESCAPE),
  Zt.set(Kt, Ft.TAB);
var Qt,
  Jt,
  ei = new Set();
function ti(e) {
  var t = e.key;
  if (Lt.has(t)) return t;
  var i = Zt.get(e.keyCode);
  return i || Ft.UNKNOWN;
}
ei.add(Ft.PAGE_UP),
  ei.add(Ft.PAGE_DOWN),
  ei.add(Ft.END),
  ei.add(Ft.HOME),
  ei.add(Ft.ARROW_LEFT),
  ei.add(Ft.ARROW_UP),
  ei.add(Ft.ARROW_RIGHT),
  ei.add(Ft.ARROW_DOWN);
var ii = "mdc-list-item--activated",
  ni = "mdc-list-item",
  oi = "mdc-list-item--disabled",
  ri = "mdc-list-item--selected",
  ai = "mdc-list-item__text",
  si = "mdc-list-item__primary-text",
  di = "mdc-list";
((Qt = {})["" + ii] = "mdc-list-item--activated"),
  (Qt["" + ni] = "mdc-list-item"),
  (Qt["" + oi] = "mdc-list-item--disabled"),
  (Qt["" + ri] = "mdc-list-item--selected"),
  (Qt["" + si] = "mdc-list-item__primary-text"),
  (Qt["" + di] = "mdc-list");
var li,
  ci,
  pi =
    (((Jt = {})["" + ii] = "mdc-deprecated-list-item--activated"),
    (Jt["" + ni] = "mdc-deprecated-list-item"),
    (Jt["" + oi] = "mdc-deprecated-list-item--disabled"),
    (Jt["" + ri] = "mdc-deprecated-list-item--selected"),
    (Jt["" + ai] = "mdc-deprecated-list-item__text"),
    (Jt["" + si] = "mdc-deprecated-list-item__primary-text"),
    (Jt["" + di] = "mdc-deprecated-list"),
    Jt),
  ui = {
    ACTION_EVENT: "MDCList:action",
    ARIA_CHECKED: "aria-checked",
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: "aria-current",
    ARIA_DISABLED: "aria-disabled",
    ARIA_ORIENTATION: "aria-orientation",
    ARIA_ORIENTATION_HORIZONTAL: "horizontal",
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: "aria-selected",
    ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
    ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:
      "\n    ." +
      ni +
      " button:not(:disabled),\n    ." +
      ni +
      " a,\n    ." +
      pi[ni] +
      " button:not(:disabled),\n    ." +
      pi[ni] +
      " a\n  ",
    DEPRECATED_SELECTOR: ".mdc-deprecated-list",
    FOCUSABLE_CHILD_ELEMENTS:
      "\n    ." +
      ni +
      " button:not(:disabled),\n    ." +
      ni +
      " a,\n    ." +
      ni +
      ' input[type="radio"]:not(:disabled),\n    .' +
      ni +
      ' input[type="checkbox"]:not(:disabled),\n    .' +
      pi[ni] +
      " button:not(:disabled),\n    ." +
      pi[ni] +
      " a,\n    ." +
      pi[ni] +
      ' input[type="radio"]:not(:disabled),\n    .' +
      pi[ni] +
      ' input[type="checkbox"]:not(:disabled)\n  ',
    RADIO_SELECTOR: 'input[type="radio"]',
    SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]',
  },
  hi = { UNSET_INDEX: -1, TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300 },
  mi = ["input", "button", "textarea", "select"],
  fi = function (e) {
    var t = e.target;
    if (t) {
      var i = ("" + t.tagName).toLowerCase();
      -1 === mi.indexOf(i) && e.preventDefault();
    }
  };
function gi(e, t) {
  for (var i = new Map(), n = 0; n < e; n++) {
    var o = t(n).trim();
    if (o) {
      var r = o[0].toLowerCase();
      i.has(r) || i.set(r, []),
        i.get(r).push({ text: o.toLowerCase(), index: n });
    }
  }
  return (
    i.forEach(function (e) {
      e.sort(function (e, t) {
        return e.index - t.index;
      });
    }),
    i
  );
}
function vi(e, t) {
  var i,
    n = e.nextChar,
    o = e.focusItemAtIndex,
    r = e.sortedIndexByFirstChar,
    a = e.focusedItemIndex,
    s = e.skipFocus,
    d = e.isItemAtIndexDisabled;
  return (
    clearTimeout(t.bufferClearTimeout),
    (t.bufferClearTimeout = setTimeout(function () {
      !(function (e) {
        e.typeaheadBuffer = "";
      })(t);
    }, hi.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS)),
    (t.typeaheadBuffer = t.typeaheadBuffer + n),
    (i =
      1 === t.typeaheadBuffer.length
        ? (function (e, t, i, n) {
            var o = n.typeaheadBuffer[0],
              r = e.get(o);
            if (!r) return -1;
            if (
              o === n.currentFirstChar &&
              r[n.sortedIndexCursor].index === t
            ) {
              n.sortedIndexCursor = (n.sortedIndexCursor + 1) % r.length;
              var a = r[n.sortedIndexCursor].index;
              if (!i(a)) return a;
            }
            n.currentFirstChar = o;
            var s,
              d = -1;
            for (s = 0; s < r.length; s++)
              if (!i(r[s].index)) {
                d = s;
                break;
              }
            for (; s < r.length; s++)
              if (r[s].index > t && !i(r[s].index)) {
                d = s;
                break;
              }
            if (-1 !== d)
              return (n.sortedIndexCursor = d), r[n.sortedIndexCursor].index;
            return -1;
          })(r, a, d, t)
        : (function (e, t, i) {
            var n = i.typeaheadBuffer[0],
              o = e.get(n);
            if (!o) return -1;
            var r = o[i.sortedIndexCursor];
            if (0 === r.text.lastIndexOf(i.typeaheadBuffer, 0) && !t(r.index))
              return r.index;
            var a = (i.sortedIndexCursor + 1) % o.length,
              s = -1;
            for (; a !== i.sortedIndexCursor; ) {
              var d = o[a],
                l = 0 === d.text.lastIndexOf(i.typeaheadBuffer, 0),
                c = !t(d.index);
              if (l && c) {
                s = a;
                break;
              }
              a = (a + 1) % o.length;
            }
            if (-1 !== s)
              return (i.sortedIndexCursor = s), o[i.sortedIndexCursor].index;
            return -1;
          })(r, d, t)),
    -1 === i || s || o(i),
    i
  );
}
function bi(e) {
  return e.typeaheadBuffer.length > 0;
}
const _i =
  null !==
    (ci =
      null === (li = window.ShadyDOM) || void 0 === li ? void 0 : li.inUse) &&
  void 0 !== ci &&
  ci;
class yi extends yt {
  constructor() {
    super(...arguments),
      (this.disabled = !1),
      (this.containingForm = null),
      (this.formDataListener = (e) => {
        this.disabled || this.setFormData(e.formData);
      });
  }
  findFormElement() {
    if (!this.shadowRoot || _i) return null;
    const e = this.getRootNode().querySelectorAll("form");
    for (const t of Array.from(e)) if (t.contains(this)) return t;
    return null;
  }
  connectedCallback() {
    var e;
    super.connectedCallback(),
      (this.containingForm = this.findFormElement()),
      null === (e = this.containingForm) ||
        void 0 === e ||
        e.addEventListener("formdata", this.formDataListener);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(),
      null === (e = this.containingForm) ||
        void 0 === e ||
        e.removeEventListener("formdata", this.formDataListener),
      (this.containingForm = null);
  }
  click() {
    this.formElement &&
      !this.disabled &&
      (this.formElement.focus(), this.formElement.click());
  }
  firstUpdated() {
    super.firstUpdated(),
      this.shadowRoot &&
        this.mdcRoot.addEventListener("change", (e) => {
          this.dispatchEvent(new Event("change", e));
        });
  }
}
(yi.shadowRootOptions = { mode: "open", delegatesFocus: !0 }),
  n([pe({ type: Boolean })], yi.prototype, "disabled", void 0);
var xi = {
    LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
    LABEL_REQUIRED: "mdc-floating-label--required",
    LABEL_SHAKE: "mdc-floating-label--shake",
    ROOT: "mdc-floating-label",
  },
  Ei = (function (e) {
    function n(t) {
      var o = e.call(this, i(i({}, n.defaultAdapter), t)) || this;
      return (
        (o.shakeAnimationEndHandler = function () {
          o.handleShakeAnimationEnd();
        }),
        o
      );
    }
    return (
      t(n, e),
      Object.defineProperty(n, "cssClasses", {
        get: function () {
          return xi;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            getWidth: function () {
              return 0;
            },
            registerInteractionHandler: function () {},
            deregisterInteractionHandler: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.init = function () {
        this.adapter.registerInteractionHandler(
          "animationend",
          this.shakeAnimationEndHandler
        );
      }),
      (n.prototype.destroy = function () {
        this.adapter.deregisterInteractionHandler(
          "animationend",
          this.shakeAnimationEndHandler
        );
      }),
      (n.prototype.getWidth = function () {
        return this.adapter.getWidth();
      }),
      (n.prototype.shake = function (e) {
        var t = n.cssClasses.LABEL_SHAKE;
        e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
      }),
      (n.prototype.float = function (e) {
        var t = n.cssClasses,
          i = t.LABEL_FLOAT_ABOVE,
          o = t.LABEL_SHAKE;
        e
          ? this.adapter.addClass(i)
          : (this.adapter.removeClass(i), this.adapter.removeClass(o));
      }),
      (n.prototype.setRequired = function (e) {
        var t = n.cssClasses.LABEL_REQUIRED;
        e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
      }),
      (n.prototype.handleShakeAnimationEnd = function () {
        var e = n.cssClasses.LABEL_SHAKE;
        this.adapter.removeClass(e);
      }),
      n
    );
  })(xt);
const wi = Je(
  class extends et {
    constructor(e) {
      switch (
        (super(e), (this.foundation = null), (this.previousPart = null), e.type)
      ) {
        case Ze:
        case Qe:
          break;
        default:
          throw new Error(
            "FloatingLabel directive only support attribute and property parts"
          );
      }
    }
    update(e, [t]) {
      if (e !== this.previousPart) {
        this.foundation && this.foundation.destroy(), (this.previousPart = e);
        const t = e.element;
        t.classList.add("mdc-floating-label");
        const i = ((e) => ({
          addClass: (t) => e.classList.add(t),
          removeClass: (t) => e.classList.remove(t),
          getWidth: () => e.scrollWidth,
          registerInteractionHandler: (t, i) => {
            e.addEventListener(t, i);
          },
          deregisterInteractionHandler: (t, i) => {
            e.removeEventListener(t, i);
          },
        }))(t);
        (this.foundation = new Ei(i)), this.foundation.init();
      }
      return this.render(t);
    }
    render(e) {
      return this.foundation;
    }
  }
);
var Ai = {
    LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
    LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating",
  },
  Ci = (function (e) {
    function n(t) {
      var o = e.call(this, i(i({}, n.defaultAdapter), t)) || this;
      return (
        (o.transitionEndHandler = function (e) {
          o.handleTransitionEnd(e);
        }),
        o
      );
    }
    return (
      t(n, e),
      Object.defineProperty(n, "cssClasses", {
        get: function () {
          return Ai;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            hasClass: function () {
              return !1;
            },
            setStyle: function () {},
            registerEventHandler: function () {},
            deregisterEventHandler: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.init = function () {
        this.adapter.registerEventHandler(
          "transitionend",
          this.transitionEndHandler
        );
      }),
      (n.prototype.destroy = function () {
        this.adapter.deregisterEventHandler(
          "transitionend",
          this.transitionEndHandler
        );
      }),
      (n.prototype.activate = function () {
        this.adapter.removeClass(Ai.LINE_RIPPLE_DEACTIVATING),
          this.adapter.addClass(Ai.LINE_RIPPLE_ACTIVE);
      }),
      (n.prototype.setRippleCenter = function (e) {
        this.adapter.setStyle("transform-origin", e + "px center");
      }),
      (n.prototype.deactivate = function () {
        this.adapter.addClass(Ai.LINE_RIPPLE_DEACTIVATING);
      }),
      (n.prototype.handleTransitionEnd = function (e) {
        var t = this.adapter.hasClass(Ai.LINE_RIPPLE_DEACTIVATING);
        "opacity" === e.propertyName &&
          t &&
          (this.adapter.removeClass(Ai.LINE_RIPPLE_ACTIVE),
          this.adapter.removeClass(Ai.LINE_RIPPLE_DEACTIVATING));
      }),
      n
    );
  })(xt);
const Ii = Je(
  class extends et {
    constructor(e) {
      switch (
        (super(e), (this.previousPart = null), (this.foundation = null), e.type)
      ) {
        case Ze:
        case Qe:
          return;
        default:
          throw new Error(
            "LineRipple only support attribute and property parts."
          );
      }
    }
    update(e, t) {
      if (this.previousPart !== e) {
        this.foundation && this.foundation.destroy(), (this.previousPart = e);
        const t = e.element;
        t.classList.add("mdc-line-ripple");
        const i = ((e) => ({
          addClass: (t) => e.classList.add(t),
          removeClass: (t) => e.classList.remove(t),
          hasClass: (t) => e.classList.contains(t),
          setStyle: (t, i) => e.style.setProperty(t, i),
          registerEventHandler: (t, i) => {
            e.addEventListener(t, i);
          },
          deregisterEventHandler: (t, i) => {
            e.removeEventListener(t, i);
          },
        }))(t);
        (this.foundation = new Ci(i)), this.foundation.init();
      }
      return this.render();
    }
    render() {
      return this.foundation;
    }
  }
);
var Si,
  Ti,
  Oi = {
    ANCHOR: "mdc-menu-surface--anchor",
    ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
    ANIMATING_OPEN: "mdc-menu-surface--animating-open",
    FIXED: "mdc-menu-surface--fixed",
    IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
    OPEN: "mdc-menu-surface--open",
    ROOT: "mdc-menu-surface",
  },
  Di = {
    CLOSED_EVENT: "MDCMenuSurface:closed",
    CLOSING_EVENT: "MDCMenuSurface:closing",
    OPENED_EVENT: "MDCMenuSurface:opened",
    FOCUSABLE_ELEMENTS: [
      "button:not(:disabled)",
      '[href]:not([aria-disabled="true"])',
      "input:not(:disabled)",
      "select:not(:disabled)",
      "textarea:not(:disabled)",
      '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])',
    ].join(", "),
  },
  Ri = {
    TRANSITION_OPEN_DURATION: 120,
    TRANSITION_CLOSE_DURATION: 75,
    MARGIN_TO_EDGE: 32,
    ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
    TOUCH_EVENT_WAIT_MS: 30,
  };
!(function (e) {
  (e[(e.BOTTOM = 1)] = "BOTTOM"),
    (e[(e.CENTER = 2)] = "CENTER"),
    (e[(e.RIGHT = 4)] = "RIGHT"),
    (e[(e.FLIP_RTL = 8)] = "FLIP_RTL");
})(Si || (Si = {})),
  (function (e) {
    (e[(e.TOP_LEFT = 0)] = "TOP_LEFT"),
      (e[(e.TOP_RIGHT = 4)] = "TOP_RIGHT"),
      (e[(e.BOTTOM_LEFT = 1)] = "BOTTOM_LEFT"),
      (e[(e.BOTTOM_RIGHT = 5)] = "BOTTOM_RIGHT"),
      (e[(e.TOP_START = 8)] = "TOP_START"),
      (e[(e.TOP_END = 12)] = "TOP_END"),
      (e[(e.BOTTOM_START = 9)] = "BOTTOM_START"),
      (e[(e.BOTTOM_END = 13)] = "BOTTOM_END");
  })(Ti || (Ti = {}));
var $i = {
    ACTIVATED: "mdc-select--activated",
    DISABLED: "mdc-select--disabled",
    FOCUSED: "mdc-select--focused",
    INVALID: "mdc-select--invalid",
    MENU_INVALID: "mdc-select__menu--invalid",
    OUTLINED: "mdc-select--outlined",
    REQUIRED: "mdc-select--required",
    ROOT: "mdc-select",
    WITH_LEADING_ICON: "mdc-select--with-leading-icon",
  },
  Mi = {
    ARIA_CONTROLS: "aria-controls",
    ARIA_DESCRIBEDBY: "aria-describedby",
    ARIA_SELECTED_ATTR: "aria-selected",
    CHANGE_EVENT: "MDCSelect:change",
    HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
    LABEL_SELECTOR: ".mdc-floating-label",
    LEADING_ICON_SELECTOR: ".mdc-select__icon",
    LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
    MENU_SELECTOR: ".mdc-select__menu",
    OUTLINE_SELECTOR: ".mdc-notched-outline",
    SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
    SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
    VALUE_ATTR: "data-value",
  },
  ki = { LABEL_SCALE: 0.75, UNSET_INDEX: -1, CLICK_DEBOUNCE_TIMEOUT_MS: 330 },
  Fi = (function (e) {
    function n(t, o) {
      void 0 === o && (o = {});
      var r = e.call(this, i(i({}, n.defaultAdapter), t)) || this;
      return (
        (r.disabled = !1),
        (r.isMenuOpen = !1),
        (r.useDefaultValidation = !0),
        (r.customValidity = !0),
        (r.lastSelectedIndex = ki.UNSET_INDEX),
        (r.clickDebounceTimeout = 0),
        (r.recentlyClicked = !1),
        (r.leadingIcon = o.leadingIcon),
        (r.helperText = o.helperText),
        r
      );
    }
    return (
      t(n, e),
      Object.defineProperty(n, "cssClasses", {
        get: function () {
          return $i;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "numbers", {
        get: function () {
          return ki;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "strings", {
        get: function () {
          return Mi;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            hasClass: function () {
              return !1;
            },
            activateBottomLine: function () {},
            deactivateBottomLine: function () {},
            getSelectedIndex: function () {
              return -1;
            },
            setSelectedIndex: function () {},
            hasLabel: function () {
              return !1;
            },
            floatLabel: function () {},
            getLabelWidth: function () {
              return 0;
            },
            setLabelRequired: function () {},
            hasOutline: function () {
              return !1;
            },
            notchOutline: function () {},
            closeOutline: function () {},
            setRippleCenter: function () {},
            notifyChange: function () {},
            setSelectedText: function () {},
            isSelectAnchorFocused: function () {
              return !1;
            },
            getSelectAnchorAttr: function () {
              return "";
            },
            setSelectAnchorAttr: function () {},
            removeSelectAnchorAttr: function () {},
            addMenuClass: function () {},
            removeMenuClass: function () {},
            openMenu: function () {},
            closeMenu: function () {},
            getAnchorElement: function () {
              return null;
            },
            setMenuAnchorElement: function () {},
            setMenuAnchorCorner: function () {},
            setMenuWrapFocus: function () {},
            focusMenuItemAtIndex: function () {},
            getMenuItemCount: function () {
              return 0;
            },
            getMenuItemValues: function () {
              return [];
            },
            getMenuItemTextAtIndex: function () {
              return "";
            },
            isTypeaheadInProgress: function () {
              return !1;
            },
            typeaheadMatchItem: function () {
              return -1;
            },
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.getSelectedIndex = function () {
        return this.adapter.getSelectedIndex();
      }),
      (n.prototype.setSelectedIndex = function (e, t, i) {
        void 0 === t && (t = !1),
          void 0 === i && (i = !1),
          e >= this.adapter.getMenuItemCount() ||
            (e === ki.UNSET_INDEX
              ? this.adapter.setSelectedText("")
              : this.adapter.setSelectedText(
                  this.adapter.getMenuItemTextAtIndex(e).trim()
                ),
            this.adapter.setSelectedIndex(e),
            t && this.adapter.closeMenu(),
            i || this.lastSelectedIndex === e || this.handleChange(),
            (this.lastSelectedIndex = e));
      }),
      (n.prototype.setValue = function (e, t) {
        void 0 === t && (t = !1);
        var i = this.adapter.getMenuItemValues().indexOf(e);
        this.setSelectedIndex(i, !1, t);
      }),
      (n.prototype.getValue = function () {
        var e = this.adapter.getSelectedIndex(),
          t = this.adapter.getMenuItemValues();
        return e !== ki.UNSET_INDEX ? t[e] : "";
      }),
      (n.prototype.getDisabled = function () {
        return this.disabled;
      }),
      (n.prototype.setDisabled = function (e) {
        (this.disabled = e),
          this.disabled
            ? (this.adapter.addClass($i.DISABLED), this.adapter.closeMenu())
            : this.adapter.removeClass($i.DISABLED),
          this.leadingIcon && this.leadingIcon.setDisabled(this.disabled),
          this.disabled
            ? this.adapter.removeSelectAnchorAttr("tabindex")
            : this.adapter.setSelectAnchorAttr("tabindex", "0"),
          this.adapter.setSelectAnchorAttr(
            "aria-disabled",
            this.disabled.toString()
          );
      }),
      (n.prototype.openMenu = function () {
        this.adapter.addClass($i.ACTIVATED),
          this.adapter.openMenu(),
          (this.isMenuOpen = !0),
          this.adapter.setSelectAnchorAttr("aria-expanded", "true");
      }),
      (n.prototype.setHelperTextContent = function (e) {
        this.helperText && this.helperText.setContent(e);
      }),
      (n.prototype.layout = function () {
        if (this.adapter.hasLabel()) {
          var e = this.getValue().length > 0,
            t = this.adapter.hasClass($i.FOCUSED),
            i = e || t,
            n = this.adapter.hasClass($i.REQUIRED);
          this.notchOutline(i),
            this.adapter.floatLabel(i),
            this.adapter.setLabelRequired(n);
        }
      }),
      (n.prototype.layoutOptions = function () {
        var e = this.adapter.getMenuItemValues().indexOf(this.getValue());
        this.setSelectedIndex(e, !1, !0);
      }),
      (n.prototype.handleMenuOpened = function () {
        if (0 !== this.adapter.getMenuItemValues().length) {
          var e = this.getSelectedIndex(),
            t = e >= 0 ? e : 0;
          this.adapter.focusMenuItemAtIndex(t);
        }
      }),
      (n.prototype.handleMenuClosing = function () {
        this.adapter.setSelectAnchorAttr("aria-expanded", "false");
      }),
      (n.prototype.handleMenuClosed = function () {
        this.adapter.removeClass($i.ACTIVATED),
          (this.isMenuOpen = !1),
          this.adapter.isSelectAnchorFocused() || this.blur();
      }),
      (n.prototype.handleChange = function () {
        this.layout(),
          this.adapter.notifyChange(this.getValue()),
          this.adapter.hasClass($i.REQUIRED) &&
            this.useDefaultValidation &&
            this.setValid(this.isValid());
      }),
      (n.prototype.handleMenuItemAction = function (e) {
        this.setSelectedIndex(e, !0);
      }),
      (n.prototype.handleFocus = function () {
        this.adapter.addClass($i.FOCUSED),
          this.layout(),
          this.adapter.activateBottomLine();
      }),
      (n.prototype.handleBlur = function () {
        this.isMenuOpen || this.blur();
      }),
      (n.prototype.handleClick = function (e) {
        this.disabled ||
          this.recentlyClicked ||
          (this.setClickDebounceTimeout(),
          this.isMenuOpen
            ? this.adapter.closeMenu()
            : (this.adapter.setRippleCenter(e), this.openMenu()));
      }),
      (n.prototype.handleKeydown = function (e) {
        if (!this.isMenuOpen && this.adapter.hasClass($i.FOCUSED)) {
          var t = ti(e) === Ft.ENTER,
            i = ti(e) === Ft.SPACEBAR,
            n = ti(e) === Ft.ARROW_UP,
            o = ti(e) === Ft.ARROW_DOWN;
          if (
            !(e.ctrlKey || e.metaKey) &&
            ((!i && e.key && 1 === e.key.length) ||
              (i && this.adapter.isTypeaheadInProgress()))
          ) {
            var r = i ? " " : e.key,
              a = this.adapter.typeaheadMatchItem(r, this.getSelectedIndex());
            return a >= 0 && this.setSelectedIndex(a), void e.preventDefault();
          }
          (t || i || n || o) &&
            (n && this.getSelectedIndex() > 0
              ? this.setSelectedIndex(this.getSelectedIndex() - 1)
              : o &&
                this.getSelectedIndex() < this.adapter.getMenuItemCount() - 1 &&
                this.setSelectedIndex(this.getSelectedIndex() + 1),
            this.openMenu(),
            e.preventDefault());
        }
      }),
      (n.prototype.notchOutline = function (e) {
        if (this.adapter.hasOutline()) {
          var t = this.adapter.hasClass($i.FOCUSED);
          if (e) {
            var i = ki.LABEL_SCALE,
              n = this.adapter.getLabelWidth() * i;
            this.adapter.notchOutline(n);
          } else t || this.adapter.closeOutline();
        }
      }),
      (n.prototype.setLeadingIconAriaLabel = function (e) {
        this.leadingIcon && this.leadingIcon.setAriaLabel(e);
      }),
      (n.prototype.setLeadingIconContent = function (e) {
        this.leadingIcon && this.leadingIcon.setContent(e);
      }),
      (n.prototype.getUseDefaultValidation = function () {
        return this.useDefaultValidation;
      }),
      (n.prototype.setUseDefaultValidation = function (e) {
        this.useDefaultValidation = e;
      }),
      (n.prototype.setValid = function (e) {
        this.useDefaultValidation || (this.customValidity = e),
          this.adapter.setSelectAnchorAttr("aria-invalid", (!e).toString()),
          e
            ? (this.adapter.removeClass($i.INVALID),
              this.adapter.removeMenuClass($i.MENU_INVALID))
            : (this.adapter.addClass($i.INVALID),
              this.adapter.addMenuClass($i.MENU_INVALID)),
          this.syncHelperTextValidity(e);
      }),
      (n.prototype.isValid = function () {
        return this.useDefaultValidation &&
          this.adapter.hasClass($i.REQUIRED) &&
          !this.adapter.hasClass($i.DISABLED)
          ? this.getSelectedIndex() !== ki.UNSET_INDEX &&
              (0 !== this.getSelectedIndex() || Boolean(this.getValue()))
          : this.customValidity;
      }),
      (n.prototype.setRequired = function (e) {
        e
          ? this.adapter.addClass($i.REQUIRED)
          : this.adapter.removeClass($i.REQUIRED),
          this.adapter.setSelectAnchorAttr("aria-required", e.toString()),
          this.adapter.setLabelRequired(e);
      }),
      (n.prototype.getRequired = function () {
        return "true" === this.adapter.getSelectAnchorAttr("aria-required");
      }),
      (n.prototype.init = function () {
        var e = this.adapter.getAnchorElement();
        e &&
          (this.adapter.setMenuAnchorElement(e),
          this.adapter.setMenuAnchorCorner(Ti.BOTTOM_START)),
          this.adapter.setMenuWrapFocus(!1),
          this.setDisabled(this.adapter.hasClass($i.DISABLED)),
          this.syncHelperTextValidity(!this.adapter.hasClass($i.INVALID)),
          this.layout(),
          this.layoutOptions();
      }),
      (n.prototype.blur = function () {
        this.adapter.removeClass($i.FOCUSED),
          this.layout(),
          this.adapter.deactivateBottomLine(),
          this.adapter.hasClass($i.REQUIRED) &&
            this.useDefaultValidation &&
            this.setValid(this.isValid());
      }),
      (n.prototype.syncHelperTextValidity = function (e) {
        if (this.helperText) {
          this.helperText.setValidity(e);
          var t = this.helperText.isVisible(),
            i = this.helperText.getId();
          t && i
            ? this.adapter.setSelectAnchorAttr(Mi.ARIA_DESCRIBEDBY, i)
            : this.adapter.removeSelectAnchorAttr(Mi.ARIA_DESCRIBEDBY);
        }
      }),
      (n.prototype.setClickDebounceTimeout = function () {
        var e = this;
        clearTimeout(this.clickDebounceTimeout),
          (this.clickDebounceTimeout = setTimeout(function () {
            e.recentlyClicked = !1;
          }, ki.CLICK_DEBOUNCE_TIMEOUT_MS)),
          (this.recentlyClicked = !0);
      }),
      n
    );
  })(xt),
  Li = Fi;
const Ni = (e) => (null != e ? e : j),
  Pi = (e = {}) => {
    const t = {};
    for (const i in e) t[i] = e[i];
    return Object.assign(
      {
        badInput: !1,
        customError: !1,
        patternMismatch: !1,
        rangeOverflow: !1,
        rangeUnderflow: !1,
        stepMismatch: !1,
        tooLong: !1,
        tooShort: !1,
        typeMismatch: !1,
        valid: !0,
        valueMissing: !1,
      },
      t
    );
  };
class Bi extends yi {
  constructor() {
    super(...arguments),
      (this.mdcFoundationClass = Li),
      (this.disabled = !1),
      (this.outlined = !1),
      (this.label = ""),
      (this.outlineOpen = !1),
      (this.outlineWidth = 0),
      (this.value = ""),
      (this.name = ""),
      (this.selectedText = ""),
      (this.icon = ""),
      (this.menuOpen = !1),
      (this.helper = ""),
      (this.validateOnInitialRender = !1),
      (this.validationMessage = ""),
      (this.required = !1),
      (this.naturalMenuWidth = !1),
      (this.isUiValid = !0),
      (this.fixedMenuPosition = !1),
      (this.typeaheadState = {
        bufferClearTimeout: 0,
        currentFirstChar: "",
        sortedIndexCursor: 0,
        typeaheadBuffer: "",
      }),
      (this.sortedIndexByFirstChar = new Map()),
      (this.menuElement_ = null),
      (this.listeners = []),
      (this.onBodyClickBound = () => {}),
      (this._menuUpdateComplete = null),
      (this.valueSetDirectly = !1),
      (this.validityTransform = null),
      (this._validity = Pi());
  }
  get items() {
    return (
      this.menuElement_ || (this.menuElement_ = this.menuElement),
      this.menuElement_ ? this.menuElement_.items : []
    );
  }
  get selected() {
    const e = this.menuElement;
    return e ? e.selected : null;
  }
  get index() {
    const e = this.menuElement;
    return e ? e.index : -1;
  }
  get shouldRenderHelperText() {
    return !!this.helper || !!this.validationMessage;
  }
  get validity() {
    return this._checkValidity(this.value), this._validity;
  }
  render() {
    const e = {
        "mdc-select--disabled": this.disabled,
        "mdc-select--no-label": !this.label,
        "mdc-select--filled": !this.outlined,
        "mdc-select--outlined": this.outlined,
        "mdc-select--with-leading-icon": !!this.icon,
        "mdc-select--required": this.required,
        "mdc-select--invalid": !this.isUiValid,
      },
      t = { "mdc-select__menu--invalid": !this.isUiValid },
      i = this.label ? "label" : void 0,
      n = this.shouldRenderHelperText ? "helper-text" : void 0;
    return U`
      <div
          class="mdc-select ${pt(e)}">
        <input
            class="formElement"
            name="${this.name}"
            .value="${this.value}"
            hidden
            ?disabled="${this.disabled}"
            ?required=${this.required}>
        <!-- @ts-ignore -->
        <div class="mdc-select__anchor"
            aria-autocomplete="none"
            role="combobox"
            aria-expanded=${this.menuOpen}
            aria-invalid=${!this.isUiValid}
            aria-haspopup="listbox"
            aria-labelledby=${Ni(i)}
            aria-required=${this.required}
            aria-describedby=${Ni(n)}
            @click=${this.onClick}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
            @keydown=${this.onKeydown}>
          ${this.renderRipple()}
          ${this.outlined ? this.renderOutline() : this.renderLabel()}
          ${this.renderLeadingIcon()}
          <span class="mdc-select__selected-text-container">
            <span class="mdc-select__selected-text">${this.selectedText}</span>
          </span>
          <span class="mdc-select__dropdown-icon">
            <svg
                class="mdc-select__dropdown-icon-graphic"
                viewBox="7 10 10 5"
                focusable="false">
              <polygon
                  class="mdc-select__dropdown-icon-inactive"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
              <polygon
                  class="mdc-select__dropdown-icon-active"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 15 12 10 17 15">
              </polygon>
            </svg>
          </span>
          ${this.renderLineRipple()}
        </div>
        <mwc-menu
            innerRole="listbox"
            wrapFocus
            class="mdc-select__menu mdc-menu mdc-menu-surface ${pt(t)}"
            activatable
            .fullwidth=${!this.fixedMenuPosition && !this.naturalMenuWidth}
            .open=${this.menuOpen}
            .anchor=${this.anchorElement}
            .fixed=${this.fixedMenuPosition}
            @selected=${this.onSelected}
            @opened=${this.onOpened}
            @closed=${this.onClosed}
            @items-updated=${this.onItemsUpdated}
            @keydown=${this.handleTypeahead}>
          <slot></slot>
        </mwc-menu>
      </div>
      ${this.renderHelperText()}`;
  }
  renderRipple() {
    return this.outlined
      ? j
      : U`
      <span class="mdc-select__ripple"></span>
    `;
  }
  renderOutline() {
    return this.outlined
      ? U`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`
      : j;
  }
  renderLabel() {
    return this.label
      ? U`
      <span
          .floatingLabelFoundation=${wi(this.label)}
          id="label">${this.label}</span>
    `
      : j;
  }
  renderLeadingIcon() {
    return this.icon
      ? U`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>`
      : j;
  }
  renderLineRipple() {
    return this.outlined
      ? j
      : U`
      <span .lineRippleFoundation=${Ii()}></span>
    `;
  }
  renderHelperText() {
    if (!this.shouldRenderHelperText) return j;
    const e = this.validationMessage && !this.isUiValid;
    return U`
        <p
          class="mdc-select-helper-text ${pt({
            "mdc-select-helper-text--validation-msg": e,
          })}"
          id="helper-text">${e ? this.validationMessage : this.helper}</p>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, ft(this.mdcRoot)), {
      activateBottomLine: () => {
        this.lineRippleElement &&
          this.lineRippleElement.lineRippleFoundation.activate();
      },
      deactivateBottomLine: () => {
        this.lineRippleElement &&
          this.lineRippleElement.lineRippleFoundation.deactivate();
      },
      hasLabel: () => !!this.label,
      floatLabel: (e) => {
        this.labelElement && this.labelElement.floatingLabelFoundation.float(e);
      },
      getLabelWidth: () =>
        this.labelElement
          ? this.labelElement.floatingLabelFoundation.getWidth()
          : 0,
      setLabelRequired: (e) => {
        this.labelElement &&
          this.labelElement.floatingLabelFoundation.setRequired(e);
      },
      hasOutline: () => this.outlined,
      notchOutline: (e) => {
        this.outlineElement &&
          !this.outlineOpen &&
          ((this.outlineWidth = e), (this.outlineOpen = !0));
      },
      closeOutline: () => {
        this.outlineElement && (this.outlineOpen = !1);
      },
      setRippleCenter: (e) => {
        if (this.lineRippleElement) {
          this.lineRippleElement.lineRippleFoundation.setRippleCenter(e);
        }
      },
      notifyChange: async (e) => {
        if (!this.valueSetDirectly && e === this.value) return;
        (this.valueSetDirectly = !1),
          (this.value = e),
          await this.updateComplete;
        const t = new Event("change", { bubbles: !0 });
        this.dispatchEvent(t);
      },
      setSelectedText: (e) => (this.selectedText = e),
      isSelectAnchorFocused: () => {
        const e = this.anchorElement;
        if (!e) return !1;
        return e.getRootNode().activeElement === e;
      },
      getSelectAnchorAttr: (e) => {
        const t = this.anchorElement;
        return t ? t.getAttribute(e) : null;
      },
      setSelectAnchorAttr: (e, t) => {
        const i = this.anchorElement;
        i && i.setAttribute(e, t);
      },
      removeSelectAnchorAttr: (e) => {
        const t = this.anchorElement;
        t && t.removeAttribute(e);
      },
      openMenu: () => {
        this.menuOpen = !0;
      },
      closeMenu: () => {
        this.menuOpen = !1;
      },
      addMenuClass: () => {},
      removeMenuClass: () => {},
      getAnchorElement: () => this.anchorElement,
      setMenuAnchorElement: () => {},
      setMenuAnchorCorner: () => {
        const e = this.menuElement;
        e && (e.corner = "BOTTOM_START");
      },
      setMenuWrapFocus: (e) => {
        const t = this.menuElement;
        t && (t.wrapFocus = e);
      },
      focusMenuItemAtIndex: (e) => {
        const t = this.menuElement;
        if (!t) return;
        const i = t.items[e];
        i && i.focus();
      },
      getMenuItemCount: () => {
        const e = this.menuElement;
        return e ? e.items.length : 0;
      },
      getMenuItemValues: () => {
        const e = this.menuElement;
        if (!e) return [];
        return e.items.map((e) => e.value);
      },
      getMenuItemTextAtIndex: (e) => {
        const t = this.menuElement;
        if (!t) return "";
        const i = t.items[e];
        return i ? i.text : "";
      },
      getSelectedIndex: () => this.index,
      setSelectedIndex: () => {},
      isTypeaheadInProgress: () => bi(this.typeaheadState),
      typeaheadMatchItem: (e, t) => {
        if (!this.menuElement) return -1;
        const i = {
            focusItemAtIndex: (e) => {
              this.menuElement.focusItemAtIndex(e);
            },
            focusedItemIndex: t || this.menuElement.getFocusedItemIndex(),
            nextChar: e,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            skipFocus: !1,
            isItemAtIndexDisabled: (e) => this.items[e].disabled,
          },
          n = vi(i, this.typeaheadState);
        return -1 !== n && this.select(n), n;
      },
    });
  }
  checkValidity() {
    const e = this._checkValidity(this.value);
    if (!e) {
      const e = new Event("invalid", { bubbles: !1, cancelable: !0 });
      this.dispatchEvent(e);
    }
    return e;
  }
  reportValidity() {
    const e = this.checkValidity();
    return (this.isUiValid = e), e;
  }
  _checkValidity(e) {
    const t = this.formElement.validity;
    let i = Pi(t);
    if (this.validityTransform) {
      const t = this.validityTransform(e, i);
      i = Object.assign(Object.assign({}, i), t);
    }
    return (this._validity = i), this._validity.valid;
  }
  setCustomValidity(e) {
    (this.validationMessage = e), this.formElement.setCustomValidity(e);
  }
  async getUpdateComplete() {
    await this._menuUpdateComplete;
    return await super.getUpdateComplete();
  }
  async firstUpdated() {
    const e = this.menuElement;
    if (
      (e &&
        ((this._menuUpdateComplete = e.updateComplete),
        await this._menuUpdateComplete),
      super.firstUpdated(),
      (this.mdcFoundation.isValid = () => !0),
      (this.mdcFoundation.setValid = () => {}),
      this.mdcFoundation.setDisabled(this.disabled),
      this.validateOnInitialRender && this.reportValidity(),
      !this.selected)
    ) {
      !this.items.length &&
        this.slotElement &&
        this.slotElement.assignedNodes({ flatten: !0 }).length &&
        (await new Promise((e) => requestAnimationFrame(e)),
        await this.layout());
      const e = this.items.length && "" === this.items[0].value;
      if (!this.value && e) return void this.select(0);
      this.selectByValue(this.value);
    }
    this.sortedIndexByFirstChar = gi(
      this.items.length,
      (e) => this.items[e].text
    );
  }
  onItemsUpdated() {
    this.sortedIndexByFirstChar = gi(
      this.items.length,
      (e) => this.items[e].text
    );
  }
  select(e) {
    const t = this.menuElement;
    t && t.select(e);
  }
  selectByValue(e) {
    let t = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].value === e) {
        t = i;
        break;
      }
    }
    (this.valueSetDirectly = !0),
      this.select(t),
      this.mdcFoundation.handleChange();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const e of this.listeners) e.target.removeEventListener(e.name, e.cb);
  }
  focus() {
    const e = new CustomEvent("focus"),
      t = this.anchorElement;
    t && (t.dispatchEvent(e), t.focus());
  }
  blur() {
    const e = new CustomEvent("blur"),
      t = this.anchorElement;
    t && (t.dispatchEvent(e), t.blur());
  }
  onFocus() {
    this.mdcFoundation && this.mdcFoundation.handleFocus();
  }
  onBlur() {
    this.mdcFoundation && this.mdcFoundation.handleBlur();
    const e = this.menuElement;
    e && !e.open && this.reportValidity();
  }
  onClick(e) {
    if (this.mdcFoundation) {
      this.focus();
      const t = e.target.getBoundingClientRect();
      let i = 0;
      i = "touches" in e ? e.touches[0].clientX : e.clientX;
      const n = i - t.left;
      this.mdcFoundation.handleClick(n);
    }
  }
  onKeydown(e) {
    const t = ti(e) === Ft.ARROW_UP,
      i = ti(e) === Ft.ARROW_DOWN;
    if (i || t) {
      const n = t && this.index > 0,
        o = i && this.index < this.items.length - 1;
      return (
        n ? this.select(this.index - 1) : o && this.select(this.index + 1),
        e.preventDefault(),
        void this.mdcFoundation.openMenu()
      );
    }
    this.mdcFoundation.handleKeydown(e);
  }
  handleTypeahead(e) {
    if (!this.menuElement) return;
    const t = this.menuElement.getFocusedItemIndex(),
      i = mt(e.target) ? e.target : null,
      n = {
        event: e,
        focusItemAtIndex: (e) => {
          this.menuElement.focusItemAtIndex(e);
        },
        focusedItemIndex: t,
        isTargetListItem: !!i && i.hasAttribute("mwc-list-item"),
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        isItemAtIndexDisabled: (e) => this.items[e].disabled,
      };
    !(function (e, t) {
      var i = e.event,
        n = e.isTargetListItem,
        o = e.focusedItemIndex,
        r = e.focusItemAtIndex,
        a = e.sortedIndexByFirstChar,
        s = e.isItemAtIndexDisabled,
        d = "ArrowLeft" === ti(i),
        l = "ArrowUp" === ti(i),
        c = "ArrowRight" === ti(i),
        p = "ArrowDown" === ti(i),
        u = "Home" === ti(i),
        h = "End" === ti(i),
        m = "Enter" === ti(i),
        f = "Spacebar" === ti(i);
      i.ctrlKey ||
        i.metaKey ||
        d ||
        l ||
        c ||
        p ||
        u ||
        h ||
        m ||
        (f || 1 !== i.key.length
          ? f &&
            (n && fi(i),
            n &&
              bi(t) &&
              vi(
                {
                  focusItemAtIndex: r,
                  focusedItemIndex: o,
                  nextChar: " ",
                  sortedIndexByFirstChar: a,
                  skipFocus: !1,
                  isItemAtIndexDisabled: s,
                },
                t
              ))
          : (fi(i),
            vi(
              {
                focusItemAtIndex: r,
                focusedItemIndex: o,
                nextChar: i.key.toLowerCase(),
                sortedIndexByFirstChar: a,
                skipFocus: !1,
                isItemAtIndexDisabled: s,
              },
              t
            )));
    })(n, this.typeaheadState);
  }
  async onSelected(e) {
    this.mdcFoundation || (await this.updateComplete),
      this.mdcFoundation.handleMenuItemAction(e.detail.index);
    const t = this.items[e.detail.index];
    t && (this.value = t.value);
  }
  onOpened() {
    this.mdcFoundation &&
      ((this.menuOpen = !0), this.mdcFoundation.handleMenuOpened());
  }
  onClosed() {
    this.mdcFoundation &&
      ((this.menuOpen = !1), this.mdcFoundation.handleMenuClosed());
  }
  setFormData(e) {
    this.name && null !== this.selected && e.append(this.name, this.value);
  }
  async layout(e = !0) {
    this.mdcFoundation && this.mdcFoundation.layout(),
      await this.updateComplete;
    const t = this.menuElement;
    t && t.layout(e);
    const i = this.labelElement;
    if (!i) return void (this.outlineOpen = !1);
    const n = !!this.label && !!this.value;
    if ((i.floatingLabelFoundation.float(n), !this.outlined)) return;
    (this.outlineOpen = n), await this.updateComplete;
    const o = i.floatingLabelFoundation.getWidth();
    this.outlineOpen && (this.outlineWidth = o);
  }
  async layoutOptions() {
    this.mdcFoundation && this.mdcFoundation.layoutOptions();
  }
}
n([me(".mdc-select")], Bi.prototype, "mdcRoot", void 0),
  n([me(".formElement")], Bi.prototype, "formElement", void 0),
  n([me("slot")], Bi.prototype, "slotElement", void 0),
  n([me("select")], Bi.prototype, "nativeSelectElement", void 0),
  n([me("input")], Bi.prototype, "nativeInputElement", void 0),
  n([me(".mdc-line-ripple")], Bi.prototype, "lineRippleElement", void 0),
  n([me(".mdc-floating-label")], Bi.prototype, "labelElement", void 0),
  n([me("mwc-notched-outline")], Bi.prototype, "outlineElement", void 0),
  n([me(".mdc-menu")], Bi.prototype, "menuElement", void 0),
  n([me(".mdc-select__anchor")], Bi.prototype, "anchorElement", void 0),
  n(
    [
      pe({ type: Boolean, attribute: "disabled", reflect: !0 }),
      lt(function (e) {
        this.mdcFoundation && this.mdcFoundation.setDisabled(e);
      }),
    ],
    Bi.prototype,
    "disabled",
    void 0
  ),
  n(
    [
      pe({ type: Boolean }),
      lt(function (e, t) {
        void 0 !== t && this.outlined !== t && this.layout(!1);
      }),
    ],
    Bi.prototype,
    "outlined",
    void 0
  ),
  n(
    [
      pe({ type: String }),
      lt(function (e, t) {
        void 0 !== t && this.label !== t && this.layout(!1);
      }),
    ],
    Bi.prototype,
    "label",
    void 0
  ),
  n([ue()], Bi.prototype, "outlineOpen", void 0),
  n([ue()], Bi.prototype, "outlineWidth", void 0),
  n(
    [
      pe({ type: String }),
      lt(function (e) {
        if (this.mdcFoundation) {
          const t = null === this.selected && !!e,
            i = this.selected && this.selected.value !== e;
          (t || i) && this.selectByValue(e), this.reportValidity();
        }
      }),
    ],
    Bi.prototype,
    "value",
    void 0
  ),
  n([pe()], Bi.prototype, "name", void 0),
  n([ue()], Bi.prototype, "selectedText", void 0),
  n([pe({ type: String })], Bi.prototype, "icon", void 0),
  n([ue()], Bi.prototype, "menuOpen", void 0),
  n([pe({ type: String })], Bi.prototype, "helper", void 0),
  n([pe({ type: Boolean })], Bi.prototype, "validateOnInitialRender", void 0),
  n([pe({ type: String })], Bi.prototype, "validationMessage", void 0),
  n([pe({ type: Boolean })], Bi.prototype, "required", void 0),
  n([pe({ type: Boolean })], Bi.prototype, "naturalMenuWidth", void 0),
  n([ue()], Bi.prototype, "isUiValid", void 0),
  n([pe({ type: Boolean })], Bi.prototype, "fixedMenuPosition", void 0),
  n(
    [
      (function (e) {
        return he({
          finisher: (t, i) => {
            Object.assign(t.prototype[i], e);
          },
        });
      })({ capture: !0 }),
    ],
    Bi.prototype,
    "handleTypeahead",
    null
  );
const Hi = c`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,[dir=rtl] .mdc-select__menu .mdc-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl],.mdc-select__menu .mdc-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list-item__start{display:inline-flex;align-items:center}.mdc-select__option{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select__option,.mdc-select__option[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select__one-line-option.mdc-list-item--with-one-line{height:48px}.mdc-select__two-line-option.mdc-list-item--with-two-lines{height:64px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__start{margin-top:20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-select__option-with-leading-content{padding-left:0;padding-right:12px}.mdc-select__option-with-leading-content.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-select__option-with-leading-content.mdc-list-item,.mdc-select__option-with-leading-content.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-select__option-with-leading-content .mdc-list-item__start{margin-left:12px;margin-right:0}[dir=rtl] .mdc-select__option-with-leading-content .mdc-list-item__start,.mdc-select__option-with-leading-content .mdc-list-item__start[dir=rtl]{margin-left:0;margin-right:12px}.mdc-select__option-with-leading-content .mdc-list-item__start{width:36px;height:24px}[dir=rtl] .mdc-select__option-with-leading-content,.mdc-select__option-with-leading-content[dir=rtl]{padding-left:12px;padding-right:0}.mdc-select__option-with-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-select__option-with-meta.mdc-list-item,.mdc-select__option-with-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-select__option-with-meta .mdc-list-item__end{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select__option-with-meta .mdc-list-item__end,.mdc-select__option-with-meta .mdc-list-item__end[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
var zi,
  Ui = {
    MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
    MENU_SELECTION_GROUP: "mdc-menu__selection-group",
    ROOT: "mdc-menu",
  },
  Vi = {
    ARIA_CHECKED_ATTR: "aria-checked",
    ARIA_DISABLED_ATTR: "aria-disabled",
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
    SELECTED_EVENT: "MDCMenu:selected",
    SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus",
  },
  ji = { FOCUS_ROOT_INDEX: -1 };
!(function (e) {
  (e[(e.NONE = 0)] = "NONE"),
    (e[(e.LIST_ROOT = 1)] = "LIST_ROOT"),
    (e[(e.FIRST_ITEM = 2)] = "FIRST_ITEM"),
    (e[(e.LAST_ITEM = 3)] = "LAST_ITEM");
})(zi || (zi = {}));
var Yi = (function (e) {
    function n(t) {
      var o = e.call(this, i(i({}, n.defaultAdapter), t)) || this;
      return (
        (o.isSurfaceOpen = !1),
        (o.isQuickOpen = !1),
        (o.isHoistedElement = !1),
        (o.isFixedPosition = !1),
        (o.isHorizontallyCenteredOnViewport = !1),
        (o.maxHeight = 0),
        (o.openBottomBias = 0),
        (o.openAnimationEndTimerId = 0),
        (o.closeAnimationEndTimerId = 0),
        (o.animationRequestId = 0),
        (o.anchorCorner = Ti.TOP_START),
        (o.originCorner = Ti.TOP_START),
        (o.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }),
        (o.position = { x: 0, y: 0 }),
        o
      );
    }
    return (
      t(n, e),
      Object.defineProperty(n, "cssClasses", {
        get: function () {
          return Oi;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "strings", {
        get: function () {
          return Di;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "numbers", {
        get: function () {
          return Ri;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "Corner", {
        get: function () {
          return Ti;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            hasClass: function () {
              return !1;
            },
            hasAnchor: function () {
              return !1;
            },
            isElementInContainer: function () {
              return !1;
            },
            isFocused: function () {
              return !1;
            },
            isRtl: function () {
              return !1;
            },
            getInnerDimensions: function () {
              return { height: 0, width: 0 };
            },
            getAnchorDimensions: function () {
              return null;
            },
            getWindowDimensions: function () {
              return { height: 0, width: 0 };
            },
            getBodyDimensions: function () {
              return { height: 0, width: 0 };
            },
            getWindowScroll: function () {
              return { x: 0, y: 0 };
            },
            setPosition: function () {},
            setMaxHeight: function () {},
            setTransformOrigin: function () {},
            saveFocus: function () {},
            restoreFocus: function () {},
            notifyClose: function () {},
            notifyOpen: function () {},
            notifyClosing: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.init = function () {
        var e = n.cssClasses,
          t = e.ROOT,
          i = e.OPEN;
        if (!this.adapter.hasClass(t))
          throw new Error(t + " class required in root element.");
        this.adapter.hasClass(i) && (this.isSurfaceOpen = !0);
      }),
      (n.prototype.destroy = function () {
        clearTimeout(this.openAnimationEndTimerId),
          clearTimeout(this.closeAnimationEndTimerId),
          cancelAnimationFrame(this.animationRequestId);
      }),
      (n.prototype.setAnchorCorner = function (e) {
        this.anchorCorner = e;
      }),
      (n.prototype.flipCornerHorizontally = function () {
        this.originCorner = this.originCorner ^ Si.RIGHT;
      }),
      (n.prototype.setAnchorMargin = function (e) {
        (this.anchorMargin.top = e.top || 0),
          (this.anchorMargin.right = e.right || 0),
          (this.anchorMargin.bottom = e.bottom || 0),
          (this.anchorMargin.left = e.left || 0);
      }),
      (n.prototype.setIsHoisted = function (e) {
        this.isHoistedElement = e;
      }),
      (n.prototype.setFixedPosition = function (e) {
        this.isFixedPosition = e;
      }),
      (n.prototype.isFixed = function () {
        return this.isFixedPosition;
      }),
      (n.prototype.setAbsolutePosition = function (e, t) {
        (this.position.x = this.isFinite(e) ? e : 0),
          (this.position.y = this.isFinite(t) ? t : 0);
      }),
      (n.prototype.setIsHorizontallyCenteredOnViewport = function (e) {
        this.isHorizontallyCenteredOnViewport = e;
      }),
      (n.prototype.setQuickOpen = function (e) {
        this.isQuickOpen = e;
      }),
      (n.prototype.setMaxHeight = function (e) {
        this.maxHeight = e;
      }),
      (n.prototype.setOpenBottomBias = function (e) {
        this.openBottomBias = e;
      }),
      (n.prototype.isOpen = function () {
        return this.isSurfaceOpen;
      }),
      (n.prototype.open = function () {
        var e = this;
        this.isSurfaceOpen ||
          (this.adapter.saveFocus(),
          this.isQuickOpen
            ? ((this.isSurfaceOpen = !0),
              this.adapter.addClass(n.cssClasses.OPEN),
              (this.dimensions = this.adapter.getInnerDimensions()),
              this.autoposition(),
              this.adapter.notifyOpen())
            : (this.adapter.addClass(n.cssClasses.ANIMATING_OPEN),
              (this.animationRequestId = requestAnimationFrame(function () {
                (e.dimensions = e.adapter.getInnerDimensions()),
                  e.autoposition(),
                  e.adapter.addClass(n.cssClasses.OPEN),
                  (e.openAnimationEndTimerId = setTimeout(function () {
                    (e.openAnimationEndTimerId = 0),
                      e.adapter.removeClass(n.cssClasses.ANIMATING_OPEN),
                      e.adapter.notifyOpen();
                  }, Ri.TRANSITION_OPEN_DURATION));
              })),
              (this.isSurfaceOpen = !0)));
      }),
      (n.prototype.close = function (e) {
        var t = this;
        if ((void 0 === e && (e = !1), this.isSurfaceOpen)) {
          if ((this.adapter.notifyClosing(), this.isQuickOpen))
            return (
              (this.isSurfaceOpen = !1),
              e || this.maybeRestoreFocus(),
              this.adapter.removeClass(n.cssClasses.OPEN),
              this.adapter.removeClass(n.cssClasses.IS_OPEN_BELOW),
              void this.adapter.notifyClose()
            );
          this.adapter.addClass(n.cssClasses.ANIMATING_CLOSED),
            requestAnimationFrame(function () {
              t.adapter.removeClass(n.cssClasses.OPEN),
                t.adapter.removeClass(n.cssClasses.IS_OPEN_BELOW),
                (t.closeAnimationEndTimerId = setTimeout(function () {
                  (t.closeAnimationEndTimerId = 0),
                    t.adapter.removeClass(n.cssClasses.ANIMATING_CLOSED),
                    t.adapter.notifyClose();
                }, Ri.TRANSITION_CLOSE_DURATION));
            }),
            (this.isSurfaceOpen = !1),
            e || this.maybeRestoreFocus();
        }
      }),
      (n.prototype.handleBodyClick = function (e) {
        var t = e.target;
        this.adapter.isElementInContainer(t) || this.close();
      }),
      (n.prototype.handleKeydown = function (e) {
        var t = e.keyCode;
        ("Escape" === e.key || 27 === t) && this.close();
      }),
      (n.prototype.autoposition = function () {
        var e;
        this.measurements = this.getAutoLayoutmeasurements();
        var t = this.getoriginCorner(),
          i = this.getMenuSurfaceMaxHeight(t),
          o = this.hasBit(t, Si.BOTTOM) ? "bottom" : "top",
          r = this.hasBit(t, Si.RIGHT) ? "right" : "left",
          a = this.getHorizontalOriginOffset(t),
          s = this.getVerticalOriginOffset(t),
          d = this.measurements,
          l = d.anchorSize,
          c = d.surfaceSize,
          p = (((e = {})[r] = a), (e[o] = s), e);
        l.width / c.width > Ri.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO &&
          (r = "center"),
          (this.isHoistedElement || this.isFixedPosition) &&
            this.adjustPositionForHoistedElement(p),
          this.adapter.setTransformOrigin(r + " " + o),
          this.adapter.setPosition(p),
          this.adapter.setMaxHeight(i ? i + "px" : ""),
          this.hasBit(t, Si.BOTTOM) ||
            this.adapter.addClass(n.cssClasses.IS_OPEN_BELOW);
      }),
      (n.prototype.getAutoLayoutmeasurements = function () {
        var e = this.adapter.getAnchorDimensions(),
          t = this.adapter.getBodyDimensions(),
          i = this.adapter.getWindowDimensions(),
          n = this.adapter.getWindowScroll();
        return (
          e ||
            (e = {
              top: this.position.y,
              right: this.position.x,
              bottom: this.position.y,
              left: this.position.x,
              width: 0,
              height: 0,
            }),
          {
            anchorSize: e,
            bodySize: t,
            surfaceSize: this.dimensions,
            viewportDistance: {
              top: e.top,
              right: i.width - e.right,
              bottom: i.height - e.bottom,
              left: e.left,
            },
            viewportSize: i,
            windowScroll: n,
          }
        );
      }),
      (n.prototype.getoriginCorner = function () {
        var e,
          t,
          i = this.originCorner,
          o = this.measurements,
          r = o.viewportDistance,
          a = o.anchorSize,
          s = o.surfaceSize,
          d = n.numbers.MARGIN_TO_EDGE;
        this.hasBit(this.anchorCorner, Si.BOTTOM)
          ? ((e = r.top - d + this.anchorMargin.bottom),
            (t = r.bottom - d - this.anchorMargin.bottom))
          : ((e = r.top - d + this.anchorMargin.top),
            (t = r.bottom - d + a.height - this.anchorMargin.top)),
          !(t - s.height > 0) &&
            e > t + this.openBottomBias &&
            (i = this.setBit(i, Si.BOTTOM));
        var l,
          c,
          p = this.adapter.isRtl(),
          u = this.hasBit(this.anchorCorner, Si.FLIP_RTL),
          h =
            this.hasBit(this.anchorCorner, Si.RIGHT) ||
            this.hasBit(i, Si.RIGHT),
          m = !1;
        (m = p && u ? !h : h)
          ? ((l = r.left + a.width + this.anchorMargin.right),
            (c = r.right - this.anchorMargin.right))
          : ((l = r.left + this.anchorMargin.left),
            (c = r.right + a.width - this.anchorMargin.left));
        var f = l - s.width > 0,
          g = c - s.width > 0,
          v = this.hasBit(i, Si.FLIP_RTL) && this.hasBit(i, Si.RIGHT);
        return (
          (g && v && p) || (!f && v)
            ? (i = this.unsetBit(i, Si.RIGHT))
            : ((f && m && p) || (f && !m && h) || (!g && l >= c)) &&
              (i = this.setBit(i, Si.RIGHT)),
          i
        );
      }),
      (n.prototype.getMenuSurfaceMaxHeight = function (e) {
        if (this.maxHeight > 0) return this.maxHeight;
        var t = this.measurements.viewportDistance,
          i = 0,
          o = this.hasBit(e, Si.BOTTOM),
          r = this.hasBit(this.anchorCorner, Si.BOTTOM),
          a = n.numbers.MARGIN_TO_EDGE;
        return (
          o
            ? ((i = t.top + this.anchorMargin.top - a),
              r || (i += this.measurements.anchorSize.height))
            : ((i =
                t.bottom -
                this.anchorMargin.bottom +
                this.measurements.anchorSize.height -
                a),
              r && (i -= this.measurements.anchorSize.height)),
          i
        );
      }),
      (n.prototype.getHorizontalOriginOffset = function (e) {
        var t = this.measurements.anchorSize,
          i = this.hasBit(e, Si.RIGHT),
          n = this.hasBit(this.anchorCorner, Si.RIGHT);
        if (i) {
          var o = n
            ? t.width - this.anchorMargin.left
            : this.anchorMargin.right;
          return this.isHoistedElement || this.isFixedPosition
            ? o -
                (this.measurements.viewportSize.width -
                  this.measurements.bodySize.width)
            : o;
        }
        return n ? t.width - this.anchorMargin.right : this.anchorMargin.left;
      }),
      (n.prototype.getVerticalOriginOffset = function (e) {
        var t = this.measurements.anchorSize,
          i = this.hasBit(e, Si.BOTTOM),
          n = this.hasBit(this.anchorCorner, Si.BOTTOM);
        return i
          ? n
            ? t.height - this.anchorMargin.top
            : -this.anchorMargin.bottom
          : n
          ? t.height + this.anchorMargin.bottom
          : this.anchorMargin.top;
      }),
      (n.prototype.adjustPositionForHoistedElement = function (e) {
        var t,
          i,
          n = this.measurements,
          r = n.windowScroll,
          a = n.viewportDistance,
          s = n.surfaceSize,
          d = n.viewportSize,
          l = Object.keys(e);
        try {
          for (var c = o(l), p = c.next(); !p.done; p = c.next()) {
            var u = p.value,
              h = e[u] || 0;
            !this.isHorizontallyCenteredOnViewport ||
            ("left" !== u && "right" !== u)
              ? ((h += a[u]),
                this.isFixedPosition ||
                  ("top" === u
                    ? (h += r.y)
                    : "bottom" === u
                    ? (h -= r.y)
                    : "left" === u
                    ? (h += r.x)
                    : (h -= r.x)),
                (e[u] = h))
              : (e[u] = (d.width - s.width) / 2);
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            p && !p.done && (i = c.return) && i.call(c);
          } finally {
            if (t) throw t.error;
          }
        }
      }),
      (n.prototype.maybeRestoreFocus = function () {
        var e = this,
          t = this.adapter.isFocused(),
          i =
            document.activeElement &&
            this.adapter.isElementInContainer(document.activeElement);
        (t || i) &&
          setTimeout(function () {
            e.adapter.restoreFocus();
          }, Ri.TOUCH_EVENT_WAIT_MS);
      }),
      (n.prototype.hasBit = function (e, t) {
        return Boolean(e & t);
      }),
      (n.prototype.setBit = function (e, t) {
        return e | t;
      }),
      (n.prototype.unsetBit = function (e, t) {
        return e ^ t;
      }),
      (n.prototype.isFinite = function (e) {
        return "number" == typeof e && isFinite(e);
      }),
      n
    );
  })(xt),
  Wi = Yi,
  Gi = (function (e) {
    function n(t) {
      var o = e.call(this, i(i({}, n.defaultAdapter), t)) || this;
      return (
        (o.closeAnimationEndTimerId = 0),
        (o.defaultFocusState = zi.LIST_ROOT),
        (o.selectedIndex = -1),
        o
      );
    }
    return (
      t(n, e),
      Object.defineProperty(n, "cssClasses", {
        get: function () {
          return Ui;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "strings", {
        get: function () {
          return Vi;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "numbers", {
        get: function () {
          return ji;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "defaultAdapter", {
        get: function () {
          return {
            addClassToElementAtIndex: function () {},
            removeClassFromElementAtIndex: function () {},
            addAttributeToElementAtIndex: function () {},
            removeAttributeFromElementAtIndex: function () {},
            getAttributeFromElementAtIndex: function () {
              return null;
            },
            elementContainsClass: function () {
              return !1;
            },
            closeSurface: function () {},
            getElementIndex: function () {
              return -1;
            },
            notifySelected: function () {},
            getMenuItemCount: function () {
              return 0;
            },
            focusItemAtIndex: function () {},
            focusListRoot: function () {},
            getSelectedSiblingOfItemAtIndex: function () {
              return -1;
            },
            isSelectableItemAtIndex: function () {
              return !1;
            },
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.destroy = function () {
        this.closeAnimationEndTimerId &&
          clearTimeout(this.closeAnimationEndTimerId),
          this.adapter.closeSurface();
      }),
      (n.prototype.handleKeydown = function (e) {
        var t = e.key,
          i = e.keyCode;
        ("Tab" === t || 9 === i) && this.adapter.closeSurface(!0);
      }),
      (n.prototype.handleItemAction = function (e) {
        var t = this,
          i = this.adapter.getElementIndex(e);
        if (!(i < 0)) {
          this.adapter.notifySelected({ index: i });
          var n =
            "true" ===
            this.adapter.getAttributeFromElementAtIndex(
              i,
              Vi.SKIP_RESTORE_FOCUS
            );
          this.adapter.closeSurface(n),
            (this.closeAnimationEndTimerId = setTimeout(function () {
              var i = t.adapter.getElementIndex(e);
              i >= 0 &&
                t.adapter.isSelectableItemAtIndex(i) &&
                t.setSelectedIndex(i);
            }, Yi.numbers.TRANSITION_CLOSE_DURATION));
        }
      }),
      (n.prototype.handleMenuSurfaceOpened = function () {
        switch (this.defaultFocusState) {
          case zi.FIRST_ITEM:
            this.adapter.focusItemAtIndex(0);
            break;
          case zi.LAST_ITEM:
            this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
            break;
          case zi.NONE:
            break;
          default:
            this.adapter.focusListRoot();
        }
      }),
      (n.prototype.setDefaultFocusState = function (e) {
        this.defaultFocusState = e;
      }),
      (n.prototype.getSelectedIndex = function () {
        return this.selectedIndex;
      }),
      (n.prototype.setSelectedIndex = function (e) {
        if ((this.validatedIndex(e), !this.adapter.isSelectableItemAtIndex(e)))
          throw new Error(
            "MDCMenuFoundation: No selection group at specified index."
          );
        var t = this.adapter.getSelectedSiblingOfItemAtIndex(e);
        t >= 0 &&
          (this.adapter.removeAttributeFromElementAtIndex(
            t,
            Vi.ARIA_CHECKED_ATTR
          ),
          this.adapter.removeClassFromElementAtIndex(
            t,
            Ui.MENU_SELECTED_LIST_ITEM
          )),
          this.adapter.addClassToElementAtIndex(e, Ui.MENU_SELECTED_LIST_ITEM),
          this.adapter.addAttributeToElementAtIndex(
            e,
            Vi.ARIA_CHECKED_ATTR,
            "true"
          ),
          (this.selectedIndex = e);
      }),
      (n.prototype.setEnabled = function (e, t) {
        this.validatedIndex(e),
          t
            ? (this.adapter.removeClassFromElementAtIndex(e, oi),
              this.adapter.addAttributeToElementAtIndex(
                e,
                Vi.ARIA_DISABLED_ATTR,
                "false"
              ))
            : (this.adapter.addClassToElementAtIndex(e, oi),
              this.adapter.addAttributeToElementAtIndex(
                e,
                Vi.ARIA_DISABLED_ATTR,
                "true"
              ));
      }),
      (n.prototype.validatedIndex = function (e) {
        var t = this.adapter.getMenuItemCount();
        if (!(e >= 0 && e < t))
          throw new Error(
            "MDCMenuFoundation: No list item at specified index."
          );
      }),
      n
    );
  })(xt),
  Xi = Gi;
const qi = (e, t) => e - t,
  Ki = ["input", "button", "textarea", "select"];
function Zi(e) {
  return e instanceof Set;
}
const Qi = (e) => {
  const t = e === hi.UNSET_INDEX ? new Set() : e;
  return Zi(t) ? new Set(t) : new Set([t]);
};
class Ji extends xt {
  constructor(e) {
    super(Object.assign(Object.assign({}, Ji.defaultAdapter), e)),
      (this.isMulti_ = !1),
      (this.wrapFocus_ = !1),
      (this.isVertical_ = !0),
      (this.selectedIndex_ = hi.UNSET_INDEX),
      (this.focusedItemIndex_ = hi.UNSET_INDEX),
      (this.useActivatedClass_ = !1),
      (this.ariaCurrentAttrValue_ = null);
  }
  static get strings() {
    return ui;
  }
  static get numbers() {
    return hi;
  }
  static get defaultAdapter() {
    return {
      focusItemAtIndex: () => {},
      getFocusedElementIndex: () => 0,
      getListItemCount: () => 0,
      isFocusInsideList: () => !1,
      isRootFocused: () => !1,
      notifyAction: () => {},
      notifySelected: () => {},
      getSelectedStateForElementIndex: () => !1,
      setDisabledStateForElementIndex: () => {},
      getDisabledStateForElementIndex: () => !1,
      setSelectedStateForElementIndex: () => {},
      setActivatedStateForElementIndex: () => {},
      setTabIndexForElementIndex: () => {},
      setAttributeForElementIndex: () => {},
      getAttributeForElementIndex: () => null,
    };
  }
  setWrapFocus(e) {
    this.wrapFocus_ = e;
  }
  setMulti(e) {
    this.isMulti_ = e;
    const t = this.selectedIndex_;
    if (e) {
      if (!Zi(t)) {
        const e = t === hi.UNSET_INDEX;
        this.selectedIndex_ = e ? new Set() : new Set([t]);
      }
    } else if (Zi(t))
      if (t.size) {
        const e = Array.from(t).sort(qi);
        this.selectedIndex_ = e[0];
      } else this.selectedIndex_ = hi.UNSET_INDEX;
  }
  setVerticalOrientation(e) {
    this.isVertical_ = e;
  }
  setUseActivatedClass(e) {
    this.useActivatedClass_ = e;
  }
  getSelectedIndex() {
    return this.selectedIndex_;
  }
  setSelectedIndex(e) {
    this.isIndexValid_(e) &&
      (this.isMulti_
        ? this.setMultiSelectionAtIndex_(Qi(e))
        : this.setSingleSelectionAtIndex_(e));
  }
  handleFocusIn(e, t) {
    t >= 0 && this.adapter.setTabIndexForElementIndex(t, 0);
  }
  handleFocusOut(e, t) {
    t >= 0 && this.adapter.setTabIndexForElementIndex(t, -1),
      setTimeout(() => {
        this.adapter.isFocusInsideList() ||
          this.setTabindexToFirstSelectedItem_();
      }, 0);
  }
  handleKeydown(e, t, i) {
    const n = "ArrowLeft" === ti(e),
      o = "ArrowUp" === ti(e),
      r = "ArrowRight" === ti(e),
      a = "ArrowDown" === ti(e),
      s = "Home" === ti(e),
      d = "End" === ti(e),
      l = "Enter" === ti(e),
      c = "Spacebar" === ti(e);
    if (this.adapter.isRootFocused())
      return void (o || d
        ? (e.preventDefault(), this.focusLastElement())
        : (a || s) && (e.preventDefault(), this.focusFirstElement()));
    let p,
      u = this.adapter.getFocusedElementIndex();
    if (!(-1 === u && ((u = i), u < 0))) {
      if ((this.isVertical_ && a) || (!this.isVertical_ && r))
        this.preventDefaultEvent(e), (p = this.focusNextElement(u));
      else if ((this.isVertical_ && o) || (!this.isVertical_ && n))
        this.preventDefaultEvent(e), (p = this.focusPrevElement(u));
      else if (s) this.preventDefaultEvent(e), (p = this.focusFirstElement());
      else if (d) this.preventDefaultEvent(e), (p = this.focusLastElement());
      else if ((l || c) && t) {
        const t = e.target;
        if (t && "A" === t.tagName && l) return;
        this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(u, !0);
      }
      (this.focusedItemIndex_ = u),
        void 0 !== p &&
          (this.setTabindexAtIndex_(p), (this.focusedItemIndex_ = p));
    }
  }
  handleSingleSelection(e, t, i) {
    e !== hi.UNSET_INDEX &&
      (this.setSelectedIndexOnAction_(e, t, i),
      this.setTabindexAtIndex_(e),
      (this.focusedItemIndex_ = e));
  }
  focusNextElement(e) {
    let t = e + 1;
    if (t >= this.adapter.getListItemCount()) {
      if (!this.wrapFocus_) return e;
      t = 0;
    }
    return this.adapter.focusItemAtIndex(t), t;
  }
  focusPrevElement(e) {
    let t = e - 1;
    if (t < 0) {
      if (!this.wrapFocus_) return e;
      t = this.adapter.getListItemCount() - 1;
    }
    return this.adapter.focusItemAtIndex(t), t;
  }
  focusFirstElement() {
    return this.adapter.focusItemAtIndex(0), 0;
  }
  focusLastElement() {
    const e = this.adapter.getListItemCount() - 1;
    return this.adapter.focusItemAtIndex(e), e;
  }
  setEnabled(e, t) {
    this.isIndexValid_(e) &&
      this.adapter.setDisabledStateForElementIndex(e, !t);
  }
  preventDefaultEvent(e) {
    const t = `${e.target.tagName}`.toLowerCase();
    -1 === Ki.indexOf(t) && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, t = !0) {
    this.selectedIndex_ !== e &&
      (this.selectedIndex_ !== hi.UNSET_INDEX &&
        (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1),
        this.useActivatedClass_ &&
          this.adapter.setActivatedStateForElementIndex(
            this.selectedIndex_,
            !1
          )),
      t && this.adapter.setSelectedStateForElementIndex(e, !0),
      this.useActivatedClass_ &&
        this.adapter.setActivatedStateForElementIndex(e, !0),
      this.setAriaForSingleSelectionAtIndex_(e),
      (this.selectedIndex_ = e),
      this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, t = !0) {
    const i = ((e, t) => {
      const i = Array.from(e),
        n = Array.from(t),
        o = { added: [], removed: [] },
        r = i.sort(qi),
        a = n.sort(qi);
      let s = 0,
        d = 0;
      for (; s < r.length || d < a.length; ) {
        const e = r[s],
          t = a[d];
        e !== t
          ? void 0 !== e && (void 0 === t || e < t)
            ? (o.removed.push(e), s++)
            : void 0 !== t && (void 0 === e || t < e) && (o.added.push(t), d++)
          : (s++, d++);
      }
      return o;
    })(Qi(this.selectedIndex_), e);
    if (i.removed.length || i.added.length) {
      for (const e of i.removed)
        t && this.adapter.setSelectedStateForElementIndex(e, !1),
          this.useActivatedClass_ &&
            this.adapter.setActivatedStateForElementIndex(e, !1);
      for (const e of i.added)
        t && this.adapter.setSelectedStateForElementIndex(e, !0),
          this.useActivatedClass_ &&
            this.adapter.setActivatedStateForElementIndex(e, !0);
      (this.selectedIndex_ = e), this.adapter.notifySelected(e, i);
    }
  }
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === hi.UNSET_INDEX &&
      (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(
        e,
        ui.ARIA_CURRENT
      ));
    const t = null !== this.ariaCurrentAttrValue_,
      i = t ? ui.ARIA_CURRENT : ui.ARIA_SELECTED;
    this.selectedIndex_ !== hi.UNSET_INDEX &&
      this.adapter.setAttributeForElementIndex(this.selectedIndex_, i, "false");
    const n = t ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, i, n);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === hi.UNSET_INDEX && 0 !== e
      ? this.adapter.setTabIndexForElementIndex(0, -1)
      : this.focusedItemIndex_ >= 0 &&
        this.focusedItemIndex_ !== e &&
        this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1),
      this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    "number" == typeof this.selectedIndex_ &&
    this.selectedIndex_ !== hi.UNSET_INDEX
      ? (e = this.selectedIndex_)
      : Zi(this.selectedIndex_) &&
        this.selectedIndex_.size > 0 &&
        (e = Math.min(...this.selectedIndex_)),
      this.setTabindexAtIndex_(e);
  }
  isIndexValid_(e) {
    if (e instanceof Set) {
      if (!this.isMulti_)
        throw new Error(
          "MDCListFoundation: Array of index is only supported for checkbox based list"
        );
      if (0 === e.size) return !0;
      {
        let t = !1;
        for (const i of e) if (((t = this.isIndexInRange_(i)), t)) break;
        return t;
      }
    }
    if ("number" == typeof e) {
      if (this.isMulti_)
        throw new Error(
          "MDCListFoundation: Expected array of index for checkbox based list but got number: " +
            e
        );
      return e === hi.UNSET_INDEX || this.isIndexInRange_(e);
    }
    return !1;
  }
  isIndexInRange_(e) {
    const t = this.adapter.getListItemCount();
    return e >= 0 && e < t;
  }
  setSelectedIndexOnAction_(e, t, i) {
    if (this.adapter.getDisabledStateForElementIndex(e)) return;
    let n = e;
    if ((this.isMulti_ && (n = new Set([e])), this.isIndexValid_(n))) {
      if (this.isMulti_) this.toggleMultiAtIndex(e, i, t);
      else if (t || i) this.setSingleSelectionAtIndex_(e, t);
      else {
        this.selectedIndex_ === e &&
          this.setSingleSelectionAtIndex_(hi.UNSET_INDEX);
      }
      t && this.adapter.notifyAction(e);
    }
  }
  toggleMultiAtIndex(e, t, i = !0) {
    let n = !1;
    n = void 0 === t ? !this.adapter.getSelectedStateForElementIndex(e) : t;
    const o = Qi(this.selectedIndex_);
    n ? o.add(e) : o.delete(e), this.setMultiSelectionAtIndex_(o, i);
  }
}
class en extends yt {
  constructor() {
    super(...arguments),
      (this.mdcFoundationClass = Xi),
      (this.listElement_ = null),
      (this.anchor = null),
      (this.open = !1),
      (this.quick = !1),
      (this.wrapFocus = !1),
      (this.innerRole = "menu"),
      (this.innerAriaLabel = null),
      (this.corner = "TOP_START"),
      (this.x = null),
      (this.y = null),
      (this.absolute = !1),
      (this.multi = !1),
      (this.activatable = !1),
      (this.fixed = !1),
      (this.forceGroupSelection = !1),
      (this.fullwidth = !1),
      (this.menuCorner = "START"),
      (this.stayOpenOnBodyClick = !1),
      (this.defaultFocus = "LIST_ROOT"),
      (this._listUpdateComplete = null);
  }
  get listElement() {
    return (
      this.listElement_ ||
        (this.listElement_ = this.renderRoot.querySelector("mwc-list")),
      this.listElement_
    );
  }
  get items() {
    const e = this.listElement;
    return e ? e.items : [];
  }
  get index() {
    const e = this.listElement;
    return e ? e.index : -1;
  }
  get selected() {
    const e = this.listElement;
    return e ? e.selected : null;
  }
  render() {
    const e = "menu" === this.innerRole ? "menuitem" : "option";
    return U`
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          .menuCorner=${this.menuCorner}
          ?stayOpenOnBodyClick=${this.stayOpenOnBodyClick}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <mwc-list
          rootTabbable
          .innerAriaLabel=${this.innerAriaLabel}
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-deprecated-list"
          .itemRoles=${e}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`;
  }
  createAdapter() {
    return {
      addClassToElementAtIndex: (e, t) => {
        const i = this.listElement;
        if (!i) return;
        const n = i.items[e];
        n &&
          ("mdc-menu-item--selected" === t
            ? this.forceGroupSelection && !n.selected && i.toggle(e, !0)
            : n.classList.add(t));
      },
      removeClassFromElementAtIndex: (e, t) => {
        const i = this.listElement;
        if (!i) return;
        const n = i.items[e];
        n &&
          ("mdc-menu-item--selected" === t
            ? n.selected && i.toggle(e, !1)
            : n.classList.remove(t));
      },
      addAttributeToElementAtIndex: (e, t, i) => {
        const n = this.listElement;
        if (!n) return;
        const o = n.items[e];
        o && o.setAttribute(t, i);
      },
      removeAttributeFromElementAtIndex: (e, t) => {
        const i = this.listElement;
        if (!i) return;
        const n = i.items[e];
        n && n.removeAttribute(t);
      },
      getAttributeFromElementAtIndex: (e, t) => {
        const i = this.listElement;
        if (!i) return null;
        const n = i.items[e];
        return n ? n.getAttribute(t) : null;
      },
      elementContainsClass: (e, t) => e.classList.contains(t),
      closeSurface: () => {
        this.open = !1;
      },
      getElementIndex: (e) => {
        const t = this.listElement;
        return t ? t.items.indexOf(e) : -1;
      },
      notifySelected: () => {},
      getMenuItemCount: () => {
        const e = this.listElement;
        return e ? e.items.length : 0;
      },
      focusItemAtIndex: (e) => {
        const t = this.listElement;
        if (!t) return;
        const i = t.items[e];
        i && i.focus();
      },
      focusListRoot: () => {
        this.listElement && this.listElement.focus();
      },
      getSelectedSiblingOfItemAtIndex: (e) => {
        const t = this.listElement;
        if (!t) return -1;
        const i = t.items[e];
        if (!i || !i.group) return -1;
        for (let n = 0; n < t.items.length; n++) {
          if (n === e) continue;
          const o = t.items[n];
          if (o.selected && o.group === i.group) return n;
        }
        return -1;
      },
      isSelectableItemAtIndex: (e) => {
        const t = this.listElement;
        if (!t) return !1;
        const i = t.items[e];
        return !!i && i.hasAttribute("group");
      },
    };
  }
  onKeydown(e) {
    this.mdcFoundation && this.mdcFoundation.handleKeydown(e);
  }
  onAction(e) {
    const t = this.listElement;
    if (this.mdcFoundation && t) {
      const i = e.detail.index,
        n = t.items[i];
      n && this.mdcFoundation.handleItemAction(n);
    }
  }
  onOpened() {
    (this.open = !0),
      this.mdcFoundation && this.mdcFoundation.handleMenuSurfaceOpened();
  }
  onClosed() {
    this.open = !1;
  }
  async getUpdateComplete() {
    await this._listUpdateComplete;
    return await super.getUpdateComplete();
  }
  async firstUpdated() {
    super.firstUpdated();
    const e = this.listElement;
    e &&
      ((this._listUpdateComplete = e.updateComplete),
      await this._listUpdateComplete);
  }
  select(e) {
    const t = this.listElement;
    t && t.select(e);
  }
  close() {
    this.open = !1;
  }
  show() {
    this.open = !0;
  }
  getFocusedItemIndex() {
    const e = this.listElement;
    return e ? e.getFocusedItemIndex() : -1;
  }
  focusItemAtIndex(e) {
    const t = this.listElement;
    t && t.focusItemAtIndex(e);
  }
  layout(e = !0) {
    const t = this.listElement;
    t && t.layout(e);
  }
}
n([me(".mdc-menu")], en.prototype, "mdcRoot", void 0),
  n([me("slot")], en.prototype, "slotElement", void 0),
  n([pe({ type: Object })], en.prototype, "anchor", void 0),
  n([pe({ type: Boolean, reflect: !0 })], en.prototype, "open", void 0),
  n([pe({ type: Boolean })], en.prototype, "quick", void 0),
  n([pe({ type: Boolean })], en.prototype, "wrapFocus", void 0),
  n([pe({ type: String })], en.prototype, "innerRole", void 0),
  n([pe({ type: String })], en.prototype, "innerAriaLabel", void 0),
  n([pe({ type: String })], en.prototype, "corner", void 0),
  n([pe({ type: Number })], en.prototype, "x", void 0),
  n([pe({ type: Number })], en.prototype, "y", void 0),
  n([pe({ type: Boolean })], en.prototype, "absolute", void 0),
  n([pe({ type: Boolean })], en.prototype, "multi", void 0),
  n([pe({ type: Boolean })], en.prototype, "activatable", void 0),
  n([pe({ type: Boolean })], en.prototype, "fixed", void 0),
  n([pe({ type: Boolean })], en.prototype, "forceGroupSelection", void 0),
  n([pe({ type: Boolean })], en.prototype, "fullwidth", void 0),
  n([pe({ type: String })], en.prototype, "menuCorner", void 0),
  n([pe({ type: Boolean })], en.prototype, "stayOpenOnBodyClick", void 0),
  n(
    [
      pe({ type: String }),
      lt(function (e) {
        this.mdcFoundation && this.mdcFoundation.setDefaultFocusState(zi[e]);
      }),
    ],
    en.prototype,
    "defaultFocus",
    void 0
  );
const tn = c`mwc-list ::slotted([mwc-list-item]:not([twoline])),mwc-list ::slotted([noninteractive]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`,
  nn = {
    TOP_LEFT: Ti.TOP_LEFT,
    TOP_RIGHT: Ti.TOP_RIGHT,
    BOTTOM_LEFT: Ti.BOTTOM_LEFT,
    BOTTOM_RIGHT: Ti.BOTTOM_RIGHT,
    TOP_START: Ti.TOP_START,
    TOP_END: Ti.TOP_END,
    BOTTOM_START: Ti.BOTTOM_START,
    BOTTOM_END: Ti.BOTTOM_END,
  };
class on extends yt {
  constructor() {
    super(...arguments),
      (this.mdcFoundationClass = Wi),
      (this.absolute = !1),
      (this.fullwidth = !1),
      (this.fixed = !1),
      (this.x = null),
      (this.y = null),
      (this.quick = !1),
      (this.open = !1),
      (this.stayOpenOnBodyClick = !1),
      (this.bitwiseCorner = Ti.TOP_START),
      (this.previousMenuCorner = null),
      (this.menuCorner = "START"),
      (this.corner = "TOP_START"),
      (this.styleTop = ""),
      (this.styleLeft = ""),
      (this.styleRight = ""),
      (this.styleBottom = ""),
      (this.styleMaxHeight = ""),
      (this.styleTransformOrigin = ""),
      (this.anchor = null),
      (this.previouslyFocused = null),
      (this.previousAnchor = null),
      (this.onBodyClickBound = () => {});
  }
  render() {
    const e = {
        "mdc-menu-surface--fixed": this.fixed,
        "mdc-menu-surface--fullwidth": this.fullwidth,
      },
      t = {
        "top": this.styleTop,
        "left": this.styleLeft,
        "right": this.styleRight,
        "bottom": this.styleBottom,
        "max-height": this.styleMaxHeight,
        "transform-origin": this.styleTransformOrigin,
      };
    return U`
      <div
          class="mdc-menu-surface ${pt(e)}"
          style="${Dt(t)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, ft(this.mdcRoot)), {
      hasAnchor: () => !!this.anchor,
      notifyClose: () => {
        const e = new CustomEvent("closed", { bubbles: !0, composed: !0 });
        (this.open = !1), this.mdcRoot.dispatchEvent(e);
      },
      notifyClosing: () => {
        const e = new CustomEvent("closing", { bubbles: !0, composed: !0 });
        this.mdcRoot.dispatchEvent(e);
      },
      notifyOpen: () => {
        const e = new CustomEvent("opened", { bubbles: !0, composed: !0 });
        (this.open = !0), this.mdcRoot.dispatchEvent(e);
      },
      isElementInContainer: () => !1,
      isRtl: () =>
        !!this.mdcRoot && "rtl" === getComputedStyle(this.mdcRoot).direction,
      setTransformOrigin: (e) => {
        this.mdcRoot && (this.styleTransformOrigin = e);
      },
      isFocused: () => _t(this),
      saveFocus: () => {
        const e = bt(),
          t = e.length;
        t || (this.previouslyFocused = null),
          (this.previouslyFocused = e[t - 1]);
      },
      restoreFocus: () => {
        this.previouslyFocused &&
          "focus" in this.previouslyFocused &&
          this.previouslyFocused.focus();
      },
      getInnerDimensions: () => {
        const e = this.mdcRoot;
        return e
          ? { width: e.offsetWidth, height: e.offsetHeight }
          : { width: 0, height: 0 };
      },
      getAnchorDimensions: () => {
        const e = this.anchor;
        return e ? e.getBoundingClientRect() : null;
      },
      getBodyDimensions: () => ({
        width: document.body.clientWidth,
        height: document.body.clientHeight,
      }),
      getWindowDimensions: () => ({
        width: window.innerWidth,
        height: window.innerHeight,
      }),
      getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
      setPosition: (e) => {
        this.mdcRoot &&
          ((this.styleLeft = "left" in e ? `${e.left}px` : ""),
          (this.styleRight = "right" in e ? `${e.right}px` : ""),
          (this.styleTop = "top" in e ? `${e.top}px` : ""),
          (this.styleBottom = "bottom" in e ? `${e.bottom}px` : ""));
      },
      setMaxHeight: async (e) => {
        this.mdcRoot &&
          ((this.styleMaxHeight = e),
          await this.updateComplete,
          (this.styleMaxHeight = `var(--mdc-menu-max-height, ${e})`));
      },
    });
  }
  onKeydown(e) {
    this.mdcFoundation && this.mdcFoundation.handleKeydown(e);
  }
  onBodyClick(e) {
    if (this.stayOpenOnBodyClick) return;
    -1 === e.composedPath().indexOf(this) && this.close();
  }
  registerBodyClick() {
    (this.onBodyClickBound = this.onBodyClick.bind(this)),
      document.body.addEventListener("click", this.onBodyClickBound, {
        passive: !0,
        capture: !0,
      });
  }
  deregisterBodyClick() {
    document.body.removeEventListener("click", this.onBodyClickBound, {
      capture: !0,
    });
  }
  close() {
    this.open = !1;
  }
  show() {
    this.open = !0;
  }
}
n([me(".mdc-menu-surface")], on.prototype, "mdcRoot", void 0),
  n([me("slot")], on.prototype, "slotElement", void 0),
  n(
    [
      pe({ type: Boolean }),
      lt(function (e) {
        this.mdcFoundation && !this.fixed && this.mdcFoundation.setIsHoisted(e);
      }),
    ],
    on.prototype,
    "absolute",
    void 0
  ),
  n([pe({ type: Boolean })], on.prototype, "fullwidth", void 0),
  n(
    [
      pe({ type: Boolean }),
      lt(function (e) {
        this.mdcFoundation &&
          !this.absolute &&
          this.mdcFoundation.setFixedPosition(e);
      }),
    ],
    on.prototype,
    "fixed",
    void 0
  ),
  n(
    [
      pe({ type: Number }),
      lt(function (e) {
        this.mdcFoundation &&
          null !== this.y &&
          null !== e &&
          (this.mdcFoundation.setAbsolutePosition(e, this.y),
          this.mdcFoundation.setAnchorMargin({
            left: e,
            top: this.y,
            right: -e,
            bottom: this.y,
          }));
      }),
    ],
    on.prototype,
    "x",
    void 0
  ),
  n(
    [
      pe({ type: Number }),
      lt(function (e) {
        this.mdcFoundation &&
          null !== this.x &&
          null !== e &&
          (this.mdcFoundation.setAbsolutePosition(this.x, e),
          this.mdcFoundation.setAnchorMargin({
            left: this.x,
            top: e,
            right: -this.x,
            bottom: e,
          }));
      }),
    ],
    on.prototype,
    "y",
    void 0
  ),
  n(
    [
      pe({ type: Boolean }),
      lt(function (e) {
        this.mdcFoundation && this.mdcFoundation.setQuickOpen(e);
      }),
    ],
    on.prototype,
    "quick",
    void 0
  ),
  n(
    [
      pe({ type: Boolean, reflect: !0 }),
      lt(function (e, t) {
        this.mdcFoundation &&
          (e
            ? this.mdcFoundation.open()
            : void 0 !== t && this.mdcFoundation.close());
      }),
    ],
    on.prototype,
    "open",
    void 0
  ),
  n([pe({ type: Boolean })], on.prototype, "stayOpenOnBodyClick", void 0),
  n(
    [
      ue(),
      lt(function (e) {
        this.mdcFoundation && this.mdcFoundation.setAnchorCorner(e);
      }),
    ],
    on.prototype,
    "bitwiseCorner",
    void 0
  ),
  n(
    [
      pe({ type: String }),
      lt(function (e) {
        if (this.mdcFoundation) {
          const t = "START" === e || "END" === e,
            i = null === this.previousMenuCorner,
            n = !i && e !== this.previousMenuCorner;
          t &&
            (n || (i && "END" === e)) &&
            ((this.bitwiseCorner = this.bitwiseCorner ^ Si.RIGHT),
            this.mdcFoundation.flipCornerHorizontally(),
            (this.previousMenuCorner = e));
        }
      }),
    ],
    on.prototype,
    "menuCorner",
    void 0
  ),
  n(
    [
      pe({ type: String }),
      lt(function (e) {
        if (this.mdcFoundation && e) {
          let t = nn[e];
          "END" === this.menuCorner && (t ^= Si.RIGHT),
            (this.bitwiseCorner = t);
        }
      }),
    ],
    on.prototype,
    "corner",
    void 0
  ),
  n([ue()], on.prototype, "styleTop", void 0),
  n([ue()], on.prototype, "styleLeft", void 0),
  n([ue()], on.prototype, "styleRight", void 0),
  n([ue()], on.prototype, "styleBottom", void 0),
  n([ue()], on.prototype, "styleMaxHeight", void 0),
  n([ue()], on.prototype, "styleTransformOrigin", void 0);
const rn = c`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;
class an extends nt(on) {
  static get defineId() {
    return "mwc-menu-surface";
  }
  static get elementDefinitions() {
    return st([], an);
  }
  static get styles() {
    return rn;
  }
}
const sn = (e) => e.hasAttribute("mwc-list-item");
function dn() {
  const e = this.itemsReadyResolver;
  (this.itemsReady = new Promise((e) => (this.itemsReadyResolver = e))), e();
}
class ln extends yt {
  constructor() {
    super(),
      (this.mdcAdapter = null),
      (this.mdcFoundationClass = Ji),
      (this.activatable = !1),
      (this.multi = !1),
      (this.wrapFocus = !1),
      (this.itemRoles = null),
      (this.innerRole = null),
      (this.innerAriaLabel = null),
      (this.rootTabbable = !1),
      (this.previousTabindex = null),
      (this.noninteractive = !1),
      (this.itemsReadyResolver = () => {}),
      (this.itemsReady = Promise.resolve([])),
      (this.items_ = []);
    const e = (function (e, t = 50) {
      let i;
      return function (n = !0) {
        clearTimeout(i),
          (i = setTimeout(() => {
            e(n);
          }, t));
      };
    })(this.layout.bind(this));
    this.debouncedLayout = (t = !0) => {
      dn.call(this), e(t);
    };
  }
  async getUpdateComplete() {
    const e = await super.getUpdateComplete();
    return await this.itemsReady, e;
  }
  get items() {
    return this.items_;
  }
  updateItems() {
    var e;
    const t = null !== (e = this.assignedElements) && void 0 !== e ? e : [],
      i = [];
    for (const e of t)
      sn(e) && (i.push(e), (e._managingList = this)),
        e.hasAttribute("divider") &&
          !e.hasAttribute("role") &&
          e.setAttribute("role", "separator");
    this.items_ = i;
    const n = new Set();
    if (
      (this.items_.forEach((e, t) => {
        this.itemRoles
          ? e.setAttribute("role", this.itemRoles)
          : e.removeAttribute("role"),
          e.selected && n.add(t);
      }),
      this.multi)
    )
      this.select(n);
    else {
      const e = n.size ? n.entries().next().value[1] : -1;
      this.select(e);
    }
    const o = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(o);
  }
  get selected() {
    const e = this.index;
    if (!Zi(e)) return -1 === e ? null : this.items[e];
    const t = [];
    for (const i of e) t.push(this.items[i]);
    return t;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const e = null === this.innerRole ? void 0 : this.innerRole,
      t = null === this.innerAriaLabel ? void 0 : this.innerAriaLabel,
      i = this.rootTabbable ? "0" : "-1";
    return U`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${Ni(e)}"
          aria-label="${Ni(t)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
  }
  renderPlaceholder() {
    var e;
    const t = null !== (e = this.assignedElements) && void 0 !== e ? e : [];
    return void 0 !== this.emptyMessage && 0 === t.length
      ? U`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `
      : null;
  }
  firstUpdated() {
    super.firstUpdated(),
      this.items.length ||
        (this.mdcFoundation.setMulti(this.multi), this.layout());
  }
  onFocusIn(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusIn(e, t);
    }
  }
  onFocusOut(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusOut(e, t);
    }
  }
  onKeydown(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e),
        i = e.target,
        n = sn(i);
      this.mdcFoundation.handleKeydown(e, n, t);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let t = this.getIndexOfTarget(e);
      if (-1 === t && (this.layout(), (t = this.getIndexOfTarget(e)), -1 === t))
        return;
      if (this.items[t].disabled) return;
      const i = e.detail.selected,
        n = e.detail.source;
      this.mdcFoundation.handleSingleSelection(t, "interaction" === n, i),
        e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const t = this.items,
      i = e.composedPath();
    for (const e of i) {
      let i = -1;
      if ((mt(e) && sn(e) && (i = t.indexOf(e)), -1 !== i)) return i;
    }
    return -1;
  }
  createAdapter() {
    return (
      (this.mdcAdapter = {
        getListItemCount: () => (this.mdcRoot ? this.items.length : 0),
        getFocusedElementIndex: this.getFocusedItemIndex,
        getAttributeForElementIndex: (e, t) => {
          if (!this.mdcRoot) return "";
          const i = this.items[e];
          return i ? i.getAttribute(t) : "";
        },
        setAttributeForElementIndex: (e, t, i) => {
          if (!this.mdcRoot) return;
          const n = this.items[e];
          n && n.setAttribute(t, i);
        },
        focusItemAtIndex: (e) => {
          const t = this.items[e];
          t && t.focus();
        },
        setTabIndexForElementIndex: (e, t) => {
          const i = this.items[e];
          i && (i.tabindex = t);
        },
        notifyAction: (e) => {
          const t = { bubbles: !0, composed: !0 };
          t.detail = { index: e };
          const i = new CustomEvent("action", t);
          this.dispatchEvent(i);
        },
        notifySelected: (e, t) => {
          const i = { bubbles: !0, composed: !0 };
          i.detail = { index: e, diff: t };
          const n = new CustomEvent("selected", i);
          this.dispatchEvent(n);
        },
        isFocusInsideList: () => _t(this),
        isRootFocused: () => {
          const e = this.mdcRoot;
          return e.getRootNode().activeElement === e;
        },
        setDisabledStateForElementIndex: (e, t) => {
          const i = this.items[e];
          i && (i.disabled = t);
        },
        getDisabledStateForElementIndex: (e) => {
          const t = this.items[e];
          return !!t && t.disabled;
        },
        setSelectedStateForElementIndex: (e, t) => {
          const i = this.items[e];
          i && (i.selected = t);
        },
        getSelectedStateForElementIndex: (e) => {
          const t = this.items[e];
          return !!t && t.selected;
        },
        setActivatedStateForElementIndex: (e, t) => {
          const i = this.items[e];
          i && (i.activated = t);
        },
      }),
      this.mdcAdapter
    );
  }
  selectUi(e, t = !1) {
    const i = this.items[e];
    i && ((i.selected = !0), (i.activated = t));
  }
  deselectUi(e) {
    const t = this.items[e];
    t && ((t.selected = !1), (t.activated = !1));
  }
  select(e) {
    this.mdcFoundation && this.mdcFoundation.setSelectedIndex(e);
  }
  toggle(e, t) {
    this.multi && this.mdcFoundation.toggleMultiAtIndex(e, t);
  }
  onListItemConnected(e) {
    const t = e.target;
    this.layout(-1 === this.items.indexOf(t));
  }
  layout(e = !0) {
    e && this.updateItems();
    const t = this.items[0];
    for (const e of this.items) e.tabindex = -1;
    t &&
      (this.noninteractive
        ? this.previousTabindex || (this.previousTabindex = t)
        : (t.tabindex = 0)),
      this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot) return -1;
    if (!this.items.length) return -1;
    const e = bt();
    if (!e.length) return -1;
    for (let t = e.length - 1; t >= 0; t--) {
      const i = e[t];
      if (sn(i)) return this.items.indexOf(i);
    }
    return -1;
  }
  focusItemAtIndex(e) {
    for (const e of this.items)
      if (0 === e.tabindex) {
        e.tabindex = -1;
        break;
      }
    (this.items[e].tabindex = 0), this.items[e].focus();
  }
  focus() {
    const e = this.mdcRoot;
    e && e.focus();
  }
  blur() {
    const e = this.mdcRoot;
    e && e.blur();
  }
}
n([pe({ type: String })], ln.prototype, "emptyMessage", void 0),
  n([me(".mdc-deprecated-list")], ln.prototype, "mdcRoot", void 0),
  n([ve("", !0, "*")], ln.prototype, "assignedElements", void 0),
  n([ve("", !0, '[tabindex="0"]')], ln.prototype, "tabbableElements", void 0),
  n(
    [
      pe({ type: Boolean }),
      lt(function (e) {
        this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(e);
      }),
    ],
    ln.prototype,
    "activatable",
    void 0
  ),
  n(
    [
      pe({ type: Boolean }),
      lt(function (e, t) {
        this.mdcFoundation && this.mdcFoundation.setMulti(e),
          void 0 !== t && this.layout();
      }),
    ],
    ln.prototype,
    "multi",
    void 0
  ),
  n(
    [
      pe({ type: Boolean }),
      lt(function (e) {
        this.mdcFoundation && this.mdcFoundation.setWrapFocus(e);
      }),
    ],
    ln.prototype,
    "wrapFocus",
    void 0
  ),
  n(
    [
      pe({ type: String }),
      lt(function (e, t) {
        void 0 !== t && this.updateItems();
      }),
    ],
    ln.prototype,
    "itemRoles",
    void 0
  ),
  n([pe({ type: String })], ln.prototype, "innerRole", void 0),
  n([pe({ type: String })], ln.prototype, "innerAriaLabel", void 0),
  n([pe({ type: Boolean })], ln.prototype, "rootTabbable", void 0),
  n(
    [
      pe({ type: Boolean, reflect: !0 }),
      lt(function (e) {
        var t, i;
        if (e) {
          const e =
            null !==
              (i =
                null === (t = this.tabbableElements) || void 0 === t
                  ? void 0
                  : t[0]) && void 0 !== i
              ? i
              : null;
          (this.previousTabindex = e), e && e.setAttribute("tabindex", "-1");
        } else !e && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), (this.previousTabindex = null));
      }),
    ],
    ln.prototype,
    "noninteractive",
    void 0
  );
const cn = c`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;
class pn extends nt(ln) {
  static get defineId() {
    return "mwc-list";
  }
  static get elementDefinitions() {
    return st([kt], pn);
  }
  static get styles() {
    return cn;
  }
}
class un extends nt(en) {
  static get defineId() {
    return "mwc-menu";
  }
  static get elementDefinitions() {
    return st([an, pn], un);
  }
  static get styles() {
    return tn;
  }
}
var hn = { NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch" },
  mn = { NOTCH_ELEMENT_PADDING: 8 },
  fn = {
    NO_LABEL: "mdc-notched-outline--no-label",
    OUTLINE_NOTCHED: "mdc-notched-outline--notched",
    OUTLINE_UPGRADED: "mdc-notched-outline--upgraded",
  },
  gn = (function (e) {
    function n(t) {
      return e.call(this, i(i({}, n.defaultAdapter), t)) || this;
    }
    return (
      t(n, e),
      Object.defineProperty(n, "strings", {
        get: function () {
          return hn;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "cssClasses", {
        get: function () {
          return fn;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "numbers", {
        get: function () {
          return mn;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            setNotchWidthProperty: function () {},
            removeNotchWidthProperty: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.notch = function (e) {
        var t = n.cssClasses.OUTLINE_NOTCHED;
        e > 0 && (e += mn.NOTCH_ELEMENT_PADDING),
          this.adapter.setNotchWidthProperty(e),
          this.adapter.addClass(t);
      }),
      (n.prototype.closeNotch = function () {
        var e = n.cssClasses.OUTLINE_NOTCHED;
        this.adapter.removeClass(e), this.adapter.removeNotchWidthProperty();
      }),
      n
    );
  })(xt);
class vn extends yt {
  constructor() {
    super(...arguments),
      (this.mdcFoundationClass = gn),
      (this.width = 0),
      (this.open = !1),
      (this.lastOpen = this.open);
  }
  createAdapter() {
    return {
      addClass: (e) => this.mdcRoot.classList.add(e),
      removeClass: (e) => this.mdcRoot.classList.remove(e),
      setNotchWidthProperty: (e) =>
        this.notchElement.style.setProperty("width", `${e}px`),
      removeNotchWidthProperty: () =>
        this.notchElement.style.removeProperty("width"),
    };
  }
  openOrClose(e, t) {
    this.mdcFoundation &&
      (e && void 0 !== t
        ? this.mdcFoundation.notch(t)
        : this.mdcFoundation.closeNotch());
  }
  render() {
    this.openOrClose(this.open, this.width);
    const e = pt({ "mdc-notched-outline--notched": this.open });
    return U`
      <span class="mdc-notched-outline ${e}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
  }
}
n([me(".mdc-notched-outline")], vn.prototype, "mdcRoot", void 0),
  n([pe({ type: Number })], vn.prototype, "width", void 0),
  n([pe({ type: Boolean, reflect: !0 })], vn.prototype, "open", void 0),
  n([me(".mdc-notched-outline__notch")], vn.prototype, "notchElement", void 0);
const bn = c`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;
class _n extends nt(vn) {
  static get defineId() {
    return "mwc-notched-outline";
  }
  static get elementDefinitions() {
    return st([], _n);
  }
  static get styles() {
    return bn;
  }
}
const yn = c`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
class xn extends nt(se) {
  static get defineId() {
    return "mwc-icon";
  }
  static get elementDefinitions() {
    return st([], xn);
  }
  render() {
    return U`<span><slot></slot></span>`;
  }
  static get styles() {
    return yn;
  }
}
class En extends nt(Bi) {
  static get defineId() {
    return "mwc-select";
  }
  static get elementDefinitions() {
    return st([un, xn, _n], En);
  }
  static get styles() {
    return Hi;
  }
}
const wn = c`
  .entity {
    display: flex;
    align-items: center;
  }

  ha-icon {
    display: flex;
  }

  .card-title,
  mwc-select {
    width: 100%;
  }

  .entity .handle {
    padding-right: 8px;
    cursor: move;
  }

  .entity .handle > * {
    pointer-events: none;
  }

  .special-row {
    height: 60px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    overflow-x: hidden;
  }

  .special-row div {
    display: flex;
    flex-direction: column;
  }

  .remove-icon,
  .edit-icon {
    --mdc-icon-button-size: 36px;
    color: var(--secondary-text-color);
  }

  .secondary {
    font-size: 12px;
    color: var(--secondary-text-color);
  }
`;
var An;
let Cn = (An = class extends nt(se) {
  static get elementDefinitions() {
    return st(
      [
        dt("ha-checkbox"),
        dt("ha-textfield"),
        dt("ha-formfield"),
        dt("ha-icon-button"),
        dt("ha-icon"),
        kt,
        En,
      ],
      An
    );
  }
  setConfig(e) {
    this.config = Object.assign(
      {
        elementConfig: { name: "", destination: "", clock_icon_state: "left" },
      },
      e
    );
  }
  render() {
    var e, t, i, n, o, r, a, s, d;
    const l = De(this.hass);
    return U`
      <div class="header">
        <div class="back-title">
          <ha-icon-button
            .label=${this.hass.localize("ui.common.back")}
            @click=${this._goBack}
          >
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </ha-icon-button>
          <span slot="title">${l("editor.title")}</span>
        </div>
      </div>

      <div class="entity-editor">
        <ha-textfield
          class="entity-title"
          .label=${l("editor.name")}
          .value="${
            null !==
              (t =
                null === (e = this.config.elementConfig) || void 0 === e
                  ? void 0
                  : e.name) && void 0 !== t
              ? t
              : ""
          }"
          .configValue="${"name"}"
          @change="${this._valueChanged}"
        ></ha-textfield>

        <ha-textfield
          class="entity-title"
          .label=${l("editor.destination")}
          .value="${
            null !==
              (n =
                null === (i = this.config.elementConfig) || void 0 === i
                  ? void 0
                  : i.destination) && void 0 !== n
              ? n
              : ""
          }"
          .configValue="${"destination"}"
          @change="${this._valueChanged}"
        ></ha-textfield>

        <ha-formfield .label=${l("editor.divide_lines")}>
          <ha-checkbox
            @change="${this._valueChanged}"
            .checked=${
              null === (o = this.config.elementConfig) || void 0 === o
                ? void 0
                : o.divide_lines
            }
            .configValue="${"divide_lines"}"
          ></ha-checkbox>
        </ha-formfield>

        <mwc-select
          .label=${l("editor.clock_icon_state.title")}
          .configValue=${"clock_icon_state"}
          .value=${
            null === (r = this.config.elementConfig) || void 0 === r
              ? void 0
              : r.clock_icon_state
          }
          @selected="${this._valueChanged}"
          @closed="${(e) => e.stopPropagation()}"
          fixedMenuPosition
          naturalMenuWidth
        >
          <mwc-list-item></mwc-list-item>
          ${["left", "right"].map(
            (e) => U`
              <mwc-list-item .value=${e}
                >${l(`editor.clock_icon_state.${e}`)}</mwc-list-item
              >
            `
          )}
        </mwc-select>

        <mwc-select
          .label=${l("editor.extra_departures.title")}
          .configValue=${"extra_departures"}
          .value=${
            null === (a = this.config.elementConfig) || void 0 === a
              ? void 0
              : a.extra_departures
          }
          @selected="${this._valueChanged}"
          @closed="${(e) => e.stopPropagation()}"
          fixedMenuPosition
          naturalMenuWidth
        >
          <mwc-list-item></mwc-list-item>
          ${["next", "all"].map(
            (e) => U`
              <mwc-list-item .value=${e}
                >${l(`editor.extra_departures.${e}`)}</mwc-list-item
              >
            `
          )}
        </mwc-select>

        <mwc-select
          .label=${l("editor.human_readable_time.title")}
          .configValue=${"human_readable_time"}
          .value=${
            null === (s = this.config.elementConfig) || void 0 === s
              ? void 0
              : s.human_readable_time
          }
          @selected="${this._valueChanged}"
          @closed="${(e) => e.stopPropagation()}"
          fixedMenuPosition
          naturalMenuWidth
        >
          <mwc-list-item></mwc-list-item>
          ${["all", "line", "line_next", "line_extras"].map(
            (e) => U`
              <mwc-list-item .value=${e}
                >${l(`editor.human_readable_time.${e}`)}</mwc-list-item
              >
            `
          )}
        </mwc-select>
        <mwc-select
          .label=${l("editor.remaining_time.title")}
          .configValue=${"remaining_time"}
          .value=${
            null === (d = this.config.elementConfig) || void 0 === d
              ? void 0
              : d.remaining_time
          }
          @selected="${this._valueChanged}"
          @closed="${(e) => e.stopPropagation()}"
          fixedMenuPosition
          naturalMenuWidth
        >
          <mwc-list-item></mwc-list-item>
          ${["all", "line", "line_next", "line_extras"].map(
            (e) => U`
              <mwc-list-item .value=${e}
                >${l(`editor.remaining_time.${e}`)}</mwc-list-item
              >
            `
          )}
        </mwc-select>
      </div>
    `;
  }
  _goBack() {
    at(this, "go-back");
  }
  _valueChanged(e) {
    if (!this.config || !this.hass) return;
    const t = e.target;
    if (t.configValue)
      if ("" === t.value) {
        const e = Object.assign({}, this.config.elementConfig);
        delete e[t.configValue], (this.config.elementConfig = e);
      } else {
        const e = Object.assign(Object.assign({}, this.config.elementConfig), {
          [t.configValue]: void 0 !== t.checked ? t.checked : t.value,
        });
        this.config.elementConfig = Object.assign({}, e);
      }
    at(this, "config-changed", { config: this.config.elementConfig });
  }
  static get styles() {
    return c`
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .back-title {
        display: flex;
        align-items: center;
        font-size: 18px;
      }

      .entity-editor {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }

      mwc-select {
        width: 100%;
      }

      ha-icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;
  }
});
var In;
let Sn;
n([pe({ attribute: !1 })], Cn.prototype, "hass", void 0),
  n([pe({ attribute: !1 })], Cn.prototype, "config", void 0),
  (Cn = An = n([le("entur-card-entity-editor")], Cn));
let Tn = (In = class extends nt(se) {
  constructor() {
    super(...arguments),
      (this._attached = !1),
      (this._renderEmptySortable = !1);
  }
  static get elementDefinitions() {
    return st(
      [
        dt("ha-checkbox"),
        dt("ha-textfield"),
        dt("ha-formfield"),
        dt("ha-icon-button"),
        dt("ha-icon"),
        dt("entur-card-entity-editor"),
        kt,
        En,
      ],
      In
    );
  }
  static get styles() {
    return [wn];
  }
  setConfig(e) {
    (this._config = Object.assign({ name: "" }, e)),
      (this._entities = e.entities);
  }
  render() {
    if (!this.hass || !this._entities) return U``;
    const e = De(this.hass);
    if (this._subElementEditorConfig)
      return U`
        <entur-card-entity-editor
          .hass=${this.hass}
          .config=${this._subElementEditorConfig}
          @go-back=${this._goBack}
          @config-changed=${this._handleSubElementChanged}
          @edit-detail-element=${this._editDetailElement}
        >
        </entur-card-entity-editor>
      `;
    const t = Object.values(this.hass.states)
      .filter((e) => e.entity_id.startsWith("sensor."))
      .filter((e) =>
        Object.keys(e.attributes).some((e) =>
          e.toLowerCase().includes("route_id")
        )
      )
      .map((e) => e.entity_id);
    return U`
      <div class="card-config">
        <ha-textfield
          class="card-title"
          .label=${e("editor.name")}
          .value="${this._config.name}"
          .configValue="${"name"}"
          @change="${this._valueChanged}"
        ></ha-textfield>

        <ha-formfield .label=${e("editor.display_time")}>
          <ha-checkbox
            @change="${this._valueChanged}"
            .checked=${this._config.display_time}
            .configValue="${"display_time"}"
          ></ha-checkbox>
        </ha-formfield>

        <ha-formfield .label=${e("editor.divide_routes")}>
          <ha-checkbox
            @change="${this._valueChanged}"
            .checked=${this._config.divide_routes}
            .configValue="${"divide_routes"}"
          ></ha-checkbox>
        </ha-formfield>

        <div class="entities">
          ${it([this._entities, this._renderEmptySortable], () => {
            var e;
            return this._renderEmptySortable
              ? ""
              : null === (e = this._entities) || void 0 === e
              ? void 0
              : e.map(
                  (e, t) => U`
                    <div class="entity">
                      <div class="handle">
                        <ha-icon icon="mdi:drag"></ha-icon>
                      </div>
                      ${U`
                        <div class="special-row">
                          <div>
                            <span
                              >${e.name ? e.name : e.entity}</span
                            >
                            <span class="secondary">${e.entity}</span>
                          </div>
                        </div>
                      `}
                      <ha-icon-button
                        label="Remove"
                        class="remove-icon"
                        .index=${t}
                        @click=${this._removeRow}
                      >
                        <ha-icon icon="mdi:close"></ha-icon>
                      </ha-icon-button>

                      <ha-icon-button
                        label="Edit"
                        class="edit-icon"
                        .index=${t}
                        @click=${this._editRow}
                      >
                        <ha-icon icon="mdi:pencil"></ha-icon>
                      </ha-icon-button>
                    </div>
                  `
                );
          })}
        </div>

        <mwc-select
          label="Entity"
          @selected="${this._addEntity}"
          @closed="${(e) => e.stopPropagation()}"
          fixedMenuPosition
          naturalMenuWidth
        >
          ${t.map(
            (e) => U`
              <mwc-list-item .value=${e}> ${e} </mwc-list-item>
            `
          )}
        </mwc-select>
      </div>
    `;
  }
  _valueChanged(e) {
    if (!this._config || !this.hass) return;
    const t = e.target;
    this[`_${t.configValue}`] !== t.value &&
      (t.configValue &&
        ("" === t.value
          ? delete this._config[t.configValue]
          : (this._config = Object.assign(Object.assign({}, this._config), {
              [t.configValue]: void 0 !== t.checked ? t.checked : t.value,
            }))),
      at(this, "config-changed", { config: this._config }));
  }
  _handleSubElementChanged(e) {
    if ((e.stopPropagation(), !this._config || !this.hass)) return;
    const t = e.detail.config,
      i = this._config.entities.concat();
    t
      ? (i[this._subElementEditorConfig.index] = t)
      : (i.splice(this._subElementEditorConfig.index, 1), this._goBack()),
      (this._config = Object.assign(Object.assign({}, this._config), {
        entities: i,
      })),
      (this._subElementEditorConfig = Object.assign(
        Object.assign({}, this._subElementEditorConfig),
        { elementConfig: t }
      )),
      at(this, "config-changed", { config: this._config });
  }
  connectedCallback() {
    super.connectedCallback(), (this._attached = !0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), (this._attached = !1);
  }
  updated(e) {
    var t;
    super.updated(e);
    const i = e.has("_attached"),
      n = e.has("entities");
    if (n || i)
      return i && !this._attached
        ? (null === (t = this._sortable) || void 0 === t || t.destroy(),
          void (this._sortable = void 0))
        : void (this._sortable || !this._entities
            ? n && this._handleEntitiesChanged()
            : this._createSortable());
  }
  async _handleEntitiesChanged() {
    var e;
    (this._renderEmptySortable = !0), await this.updateComplete;
    const t =
      null === (e = this.shadowRoot) || void 0 === e
        ? void 0
        : e.querySelector(".entities");
    for (; t.lastElementChild; ) t.removeChild(t.lastElementChild);
    this._renderEmptySortable = !1;
  }
  async _createSortable() {
    var e;
    if (!Sn) {
      const e = await Promise.resolve().then(function () {
        return Qr;
      });
      (Sn = e.Sortable), Sn.mount(e.OnSpill), Sn.mount(e.AutoScroll());
    }
    const t =
      null === (e = this.shadowRoot) || void 0 === e
        ? void 0
        : e.querySelector(".entities");
    t &&
      (this._sortable = new Sn(t, {
        animation: 150,
        fallbackClass: "sortable-fallback",
        handle: ".handle",
        onEnd: async (e) => this._rowMoved(e),
      }));
  }
  _rowMoved(e) {
    if (e.oldIndex === e.newIndex) return;
    const t = this._entities.concat();
    t.splice(e.newIndex, 0, t.splice(e.oldIndex, 1)[0]),
      this._valueChanged({ target: { configValue: "entities", value: t } });
  }
  _removeRow(e) {
    var t, i;
    const n =
        (null === (t = e.currentTarget) || void 0 === t ? void 0 : t.index) ||
        0,
      o = null === (i = this._entities) || void 0 === i ? void 0 : i.concat();
    null == o || o.splice(n, 1),
      this._valueChanged({ target: { configValue: "entities", value: o } });
  }
  async _addEntity(e) {
    const t = e.target.value;
    if ("" === t) return;
    const i = this._entities.concat({ entity: t });
    (e.target.value = ""),
      this._valueChanged({ target: { configValue: "entities", value: i } });
  }
  _editRow(e) {
    const t = e.currentTarget.index;
    this._subElementEditorConfig = {
      index: t,
      elementConfig: this._entities[t],
    };
  }
  _goBack() {
    this._subElementEditorConfig = void 0;
  }
  _editDetailElement(e) {
    this._subElementEditorConfig = e.detail.subElementConfig;
  }
});
n([pe({ attribute: !1 })], Tn.prototype, "hass", void 0),
  n([ue()], Tn.prototype, "_config", void 0),
  n([ue()], Tn.prototype, "_attached", void 0),
  n([ue()], Tn.prototype, "_renderEmptySortable", void 0),
  n([ue()], Tn.prototype, "_subElementEditorConfig", void 0),
  (Tn = In = n([le("entur-card-editor")], Tn));
var On = Object.freeze({
  __proto__: null,
  get EnturCardEditor() {
    return Tn;
  },
});
function Dn(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      i.push.apply(i, n);
  }
  return i;
}
function Rn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? Dn(Object(i), !0).forEach(function (t) {
          Mn(e, t, i[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
      : Dn(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
  }
  return e;
}
function $n(e) {
  return (
    ($n =
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
          }),
    $n(e)
  );
}
function Mn(e, t, i) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = i),
    e
  );
}
function kn() {
  return (
    (kn =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
        return e;
      }),
    kn.apply(this, arguments)
  );
}
function Fn(e, t) {
  if (null == e) return {};
  var i,
    n,
    o = (function (e, t) {
      if (null == e) return {};
      var i,
        n,
        o = {},
        r = Object.keys(e);
      for (n = 0; n < r.length; n++)
        (i = r[n]), t.indexOf(i) >= 0 || (o[i] = e[i]);
      return o;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (n = 0; n < r.length; n++)
      (i = r[n]),
        t.indexOf(i) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, i) && (o[i] = e[i]));
  }
  return o;
}
function Ln(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return Nn(e);
    })(e) ||
    (function (e) {
      if (
        ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
        null != e["@@iterator"]
      )
        return Array.from(e);
    })(e) ||
    (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return Nn(e, t);
      var i = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === i && e.constructor && (i = e.constructor.name);
      if ("Map" === i || "Set" === i) return Array.from(e);
      if (
        "Arguments" === i ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
      )
        return Nn(e, t);
    })(e) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function Nn(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function Pn(e) {
  if ("undefined" != typeof window && window.navigator)
    return !!navigator.userAgent.match(e);
}
var Bn = Pn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
  Hn = Pn(/Edge/i),
  zn = Pn(/firefox/i),
  Un = Pn(/safari/i) && !Pn(/chrome/i) && !Pn(/android/i),
  Vn = Pn(/iP(ad|od|hone)/i),
  jn = Pn(/chrome/i) && Pn(/android/i),
  Yn = { capture: !1, passive: !1 };
function Wn(e, t, i) {
  e.addEventListener(t, i, !Bn && Yn);
}
function Gn(e, t, i) {
  e.removeEventListener(t, i, !Bn && Yn);
}
function Xn(e, t) {
  if (t) {
    if ((">" === t[0] && (t = t.substring(1)), e))
      try {
        if (e.matches) return e.matches(t);
        if (e.msMatchesSelector) return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t);
      } catch (e) {
        return !1;
      }
    return !1;
  }
}
function qn(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function Kn(e, t, i, n) {
  if (e) {
    i = i || document;
    do {
      if (
        (null != t &&
          (">" === t[0] ? e.parentNode === i && Xn(e, t) : Xn(e, t))) ||
        (n && e === i)
      )
        return e;
      if (e === i) break;
    } while ((e = qn(e)));
  }
  return null;
}
var Zn,
  Qn = /\s+/g;
function Jn(e, t, i) {
  if (e && t)
    if (e.classList) e.classList[i ? "add" : "remove"](t);
    else {
      var n = (" " + e.className + " ")
        .replace(Qn, " ")
        .replace(" " + t + " ", " ");
      e.className = (n + (i ? " " + t : "")).replace(Qn, " ");
    }
}
function eo(e, t, i) {
  var n = e && e.style;
  if (n) {
    if (void 0 === i)
      return (
        document.defaultView && document.defaultView.getComputedStyle
          ? (i = document.defaultView.getComputedStyle(e, ""))
          : e.currentStyle && (i = e.currentStyle),
        void 0 === t ? i : i[t]
      );
    t in n || -1 !== t.indexOf("webkit") || (t = "-webkit-" + t),
      (n[t] = i + ("string" == typeof i ? "" : "px"));
  }
}
function to(e, t) {
  var i = "";
  if ("string" == typeof e) i = e;
  else
    do {
      var n = eo(e, "transform");
      n && "none" !== n && (i = n + " " + i);
    } while (!t && (e = e.parentNode));
  var o =
    window.DOMMatrix ||
    window.WebKitCSSMatrix ||
    window.CSSMatrix ||
    window.MSCSSMatrix;
  return o && new o(i);
}
function io(e, t, i) {
  if (e) {
    var n = e.getElementsByTagName(t),
      o = 0,
      r = n.length;
    if (i) for (; o < r; o++) i(n[o], o);
    return n;
  }
  return [];
}
function no() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function oo(e, t, i, n, o) {
  if (e.getBoundingClientRect || e === window) {
    var r, a, s, d, l, c, p;
    if (
      (e !== window && e.parentNode && e !== no()
        ? ((a = (r = e.getBoundingClientRect()).top),
          (s = r.left),
          (d = r.bottom),
          (l = r.right),
          (c = r.height),
          (p = r.width))
        : ((a = 0),
          (s = 0),
          (d = window.innerHeight),
          (l = window.innerWidth),
          (c = window.innerHeight),
          (p = window.innerWidth)),
      (t || i) && e !== window && ((o = o || e.parentNode), !Bn))
    )
      do {
        if (
          o &&
          o.getBoundingClientRect &&
          ("none" !== eo(o, "transform") ||
            (i && "static" !== eo(o, "position")))
        ) {
          var u = o.getBoundingClientRect();
          (a -= u.top + parseInt(eo(o, "border-top-width"))),
            (s -= u.left + parseInt(eo(o, "border-left-width"))),
            (d = a + r.height),
            (l = s + r.width);
          break;
        }
      } while ((o = o.parentNode));
    if (n && e !== window) {
      var h = to(o || e),
        m = h && h.a,
        f = h && h.d;
      h && ((d = (a /= f) + (c /= f)), (l = (s /= m) + (p /= m)));
    }
    return { top: a, left: s, bottom: d, right: l, width: p, height: c };
  }
}
function ro(e, t, i) {
  for (var n = po(e, !0), o = oo(e)[t]; n; ) {
    var r = oo(n)[i];
    if (!("top" === i || "left" === i ? o >= r : o <= r)) return n;
    if (n === no()) break;
    n = po(n, !1);
  }
  return !1;
}
function ao(e, t, i, n) {
  for (var o = 0, r = 0, a = e.children; r < a.length; ) {
    if (
      "none" !== a[r].style.display &&
      a[r] !== vr.ghost &&
      (n || a[r] !== vr.dragged) &&
      Kn(a[r], i.draggable, e, !1)
    ) {
      if (o === t) return a[r];
      o++;
    }
    r++;
  }
  return null;
}
function so(e, t) {
  for (
    var i = e.lastElementChild;
    i && (i === vr.ghost || "none" === eo(i, "display") || (t && !Xn(i, t)));

  )
    i = i.previousElementSibling;
  return i || null;
}
function lo(e, t) {
  var i = 0;
  if (!e || !e.parentNode) return -1;
  for (; (e = e.previousElementSibling); )
    "TEMPLATE" === e.nodeName.toUpperCase() ||
      e === vr.clone ||
      (t && !Xn(e, t)) ||
      i++;
  return i;
}
function co(e) {
  var t = 0,
    i = 0,
    n = no();
  if (e)
    do {
      var o = to(e),
        r = o.a,
        a = o.d;
      (t += e.scrollLeft * r), (i += e.scrollTop * a);
    } while (e !== n && (e = e.parentNode));
  return [t, i];
}
function po(e, t) {
  if (!e || !e.getBoundingClientRect) return no();
  var i = e,
    n = !1;
  do {
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var o = eo(i);
      if (
        (i.clientWidth < i.scrollWidth &&
          ("auto" == o.overflowX || "scroll" == o.overflowX)) ||
        (i.clientHeight < i.scrollHeight &&
          ("auto" == o.overflowY || "scroll" == o.overflowY))
      ) {
        if (!i.getBoundingClientRect || i === document.body) return no();
        if (n || t) return i;
        n = !0;
      }
    }
  } while ((i = i.parentNode));
  return no();
}
function uo(e, t) {
  return (
    Math.round(e.top) === Math.round(t.top) &&
    Math.round(e.left) === Math.round(t.left) &&
    Math.round(e.height) === Math.round(t.height) &&
    Math.round(e.width) === Math.round(t.width)
  );
}
function ho(e, t) {
  return function () {
    if (!Zn) {
      var i = arguments;
      1 === i.length ? e.call(this, i[0]) : e.apply(this, i),
        (Zn = setTimeout(function () {
          Zn = void 0;
        }, t));
    }
  };
}
function mo(e, t, i) {
  (e.scrollLeft += t), (e.scrollTop += i);
}
function fo(e) {
  var t = window.Polymer,
    i = window.jQuery || window.Zepto;
  return t && t.dom
    ? t.dom(e).cloneNode(!0)
    : i
    ? i(e).clone(!0)[0]
    : e.cloneNode(!0);
}
function go(e, t) {
  eo(e, "position", "absolute"),
    eo(e, "top", t.top),
    eo(e, "left", t.left),
    eo(e, "width", t.width),
    eo(e, "height", t.height);
}
function vo(e) {
  eo(e, "position", ""),
    eo(e, "top", ""),
    eo(e, "left", ""),
    eo(e, "width", ""),
    eo(e, "height", "");
}
var bo = "Sortable" + new Date().getTime();
function _o() {
  var e,
    t = [];
  return {
    captureAnimationState: function () {
      ((t = []), this.options.animation) &&
        [].slice.call(this.el.children).forEach(function (e) {
          if ("none" !== eo(e, "display") && e !== vr.ghost) {
            t.push({ target: e, rect: oo(e) });
            var i = Rn({}, t[t.length - 1].rect);
            if (e.thisAnimationDuration) {
              var n = to(e, !0);
              n && ((i.top -= n.f), (i.left -= n.e));
            }
            e.fromRect = i;
          }
        });
    },
    addAnimationState: function (e) {
      t.push(e);
    },
    removeAnimationState: function (e) {
      t.splice(
        (function (e, t) {
          for (var i in e)
            if (e.hasOwnProperty(i))
              for (var n in t)
                if (t.hasOwnProperty(n) && t[n] === e[i][n]) return Number(i);
          return -1;
        })(t, { target: e }),
        1
      );
    },
    animateAll: function (i) {
      var n = this;
      if (!this.options.animation)
        return clearTimeout(e), void ("function" == typeof i && i());
      var o = !1,
        r = 0;
      t.forEach(function (e) {
        var t = 0,
          i = e.target,
          a = i.fromRect,
          s = oo(i),
          d = i.prevFromRect,
          l = i.prevToRect,
          c = e.rect,
          p = to(i, !0);
        p && ((s.top -= p.f), (s.left -= p.e)),
          (i.toRect = s),
          i.thisAnimationDuration &&
            uo(d, s) &&
            !uo(a, s) &&
            (c.top - s.top) / (c.left - s.left) ==
              (a.top - s.top) / (a.left - s.left) &&
            (t = (function (e, t, i, n) {
              return (
                (Math.sqrt(
                  Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)
                ) /
                  Math.sqrt(
                    Math.pow(t.top - i.top, 2) + Math.pow(t.left - i.left, 2)
                  )) *
                n.animation
              );
            })(c, d, l, n.options)),
          uo(s, a) ||
            ((i.prevFromRect = a),
            (i.prevToRect = s),
            t || (t = n.options.animation),
            n.animate(i, c, s, t)),
          t &&
            ((o = !0),
            (r = Math.max(r, t)),
            clearTimeout(i.animationResetTimer),
            (i.animationResetTimer = setTimeout(function () {
              (i.animationTime = 0),
                (i.prevFromRect = null),
                (i.fromRect = null),
                (i.prevToRect = null),
                (i.thisAnimationDuration = null);
            }, t)),
            (i.thisAnimationDuration = t));
      }),
        clearTimeout(e),
        o
          ? (e = setTimeout(function () {
              "function" == typeof i && i();
            }, r))
          : "function" == typeof i && i(),
        (t = []);
    },
    animate: function (e, t, i, n) {
      if (n) {
        eo(e, "transition", ""), eo(e, "transform", "");
        var o = to(this.el),
          r = o && o.a,
          a = o && o.d,
          s = (t.left - i.left) / (r || 1),
          d = (t.top - i.top) / (a || 1);
        (e.animatingX = !!s),
          (e.animatingY = !!d),
          eo(e, "transform", "translate3d(" + s + "px," + d + "px,0)"),
          (this.forRepaintDummy = (function (e) {
            return e.offsetWidth;
          })(e)),
          eo(
            e,
            "transition",
            "transform " +
              n +
              "ms" +
              (this.options.easing ? " " + this.options.easing : "")
          ),
          eo(e, "transform", "translate3d(0,0,0)"),
          "number" == typeof e.animated && clearTimeout(e.animated),
          (e.animated = setTimeout(function () {
            eo(e, "transition", ""),
              eo(e, "transform", ""),
              (e.animated = !1),
              (e.animatingX = !1),
              (e.animatingY = !1);
          }, n));
      }
    },
  };
}
var yo = [],
  xo = { initializeByDefault: !0 },
  Eo = {
    mount: function (e) {
      for (var t in xo) xo.hasOwnProperty(t) && !(t in e) && (e[t] = xo[t]);
      yo.forEach(function (t) {
        if (t.pluginName === e.pluginName)
          throw "Sortable: Cannot mount plugin ".concat(
            e.pluginName,
            " more than once"
          );
      }),
        yo.push(e);
    },
    pluginEvent: function (e, t, i) {
      var n = this;
      (this.eventCanceled = !1),
        (i.cancel = function () {
          n.eventCanceled = !0;
        });
      var o = e + "Global";
      yo.forEach(function (n) {
        t[n.pluginName] &&
          (t[n.pluginName][o] && t[n.pluginName][o](Rn({ sortable: t }, i)),
          t.options[n.pluginName] &&
            t[n.pluginName][e] &&
            t[n.pluginName][e](Rn({ sortable: t }, i)));
      });
    },
    initializePlugins: function (e, t, i, n) {
      for (var o in (yo.forEach(function (n) {
        var o = n.pluginName;
        if (e.options[o] || n.initializeByDefault) {
          var r = new n(e, t, e.options);
          (r.sortable = e),
            (r.options = e.options),
            (e[o] = r),
            kn(i, r.defaults);
        }
      }),
      e.options))
        if (e.options.hasOwnProperty(o)) {
          var r = this.modifyOption(e, o, e.options[o]);
          void 0 !== r && (e.options[o] = r);
        }
    },
    getEventProperties: function (e, t) {
      var i = {};
      return (
        yo.forEach(function (n) {
          "function" == typeof n.eventProperties &&
            kn(i, n.eventProperties.call(t[n.pluginName], e));
        }),
        i
      );
    },
    modifyOption: function (e, t, i) {
      var n;
      return (
        yo.forEach(function (o) {
          e[o.pluginName] &&
            o.optionListeners &&
            "function" == typeof o.optionListeners[t] &&
            (n = o.optionListeners[t].call(e[o.pluginName], i));
        }),
        n
      );
    },
  };
function wo(e) {
  var t = e.sortable,
    i = e.rootEl,
    n = e.name,
    o = e.targetEl,
    r = e.cloneEl,
    a = e.toEl,
    s = e.fromEl,
    d = e.oldIndex,
    l = e.newIndex,
    c = e.oldDraggableIndex,
    p = e.newDraggableIndex,
    u = e.originalEvent,
    h = e.putSortable,
    m = e.extraEventProperties;
  if ((t = t || (i && i[bo]))) {
    var f,
      g = t.options,
      v = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    !window.CustomEvent || Bn || Hn
      ? (f = document.createEvent("Event")).initEvent(n, !0, !0)
      : (f = new CustomEvent(n, { bubbles: !0, cancelable: !0 })),
      (f.to = a || i),
      (f.from = s || i),
      (f.item = o || i),
      (f.clone = r),
      (f.oldIndex = d),
      (f.newIndex = l),
      (f.oldDraggableIndex = c),
      (f.newDraggableIndex = p),
      (f.originalEvent = u),
      (f.pullMode = h ? h.lastPutMode : void 0);
    var b = Rn(Rn({}, m), Eo.getEventProperties(n, t));
    for (var _ in b) f[_] = b[_];
    i && i.dispatchEvent(f), g[v] && g[v].call(t, f);
  }
}
var Ao = ["evt"],
  Co = function (e, t) {
    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      n = i.evt,
      o = Fn(i, Ao);
    Eo.pluginEvent.bind(vr)(
      e,
      t,
      Rn(
        {
          dragEl: So,
          parentEl: To,
          ghostEl: Oo,
          rootEl: Do,
          nextEl: Ro,
          lastDownEl: $o,
          cloneEl: Mo,
          cloneHidden: ko,
          dragStarted: Go,
          putSortable: Ho,
          activeSortable: vr.active,
          originalEvent: n,
          oldIndex: Fo,
          oldDraggableIndex: No,
          newIndex: Lo,
          newDraggableIndex: Po,
          hideGhostForTarget: hr,
          unhideGhostForTarget: mr,
          cloneNowHidden: function () {
            ko = !0;
          },
          cloneNowShown: function () {
            ko = !1;
          },
          dispatchSortableEvent: function (e) {
            Io({ sortable: t, name: e, originalEvent: n });
          },
        },
        o
      )
    );
  };
function Io(e) {
  wo(
    Rn(
      {
        putSortable: Ho,
        cloneEl: Mo,
        targetEl: So,
        rootEl: Do,
        oldIndex: Fo,
        oldDraggableIndex: No,
        newIndex: Lo,
        newDraggableIndex: Po,
      },
      e
    )
  );
}
var So,
  To,
  Oo,
  Do,
  Ro,
  $o,
  Mo,
  ko,
  Fo,
  Lo,
  No,
  Po,
  Bo,
  Ho,
  zo,
  Uo,
  Vo,
  jo,
  Yo,
  Wo,
  Go,
  Xo,
  qo,
  Ko,
  Zo,
  Qo = !1,
  Jo = !1,
  er = [],
  tr = !1,
  ir = !1,
  nr = [],
  or = !1,
  rr = [],
  ar = "undefined" != typeof document,
  sr = Vn,
  dr = Hn || Bn ? "cssFloat" : "float",
  lr = ar && !jn && !Vn && "draggable" in document.createElement("div"),
  cr = (function () {
    if (ar) {
      if (Bn) return !1;
      var e = document.createElement("x");
      return (
        (e.style.cssText = "pointer-events:auto"),
        "auto" === e.style.pointerEvents
      );
    }
  })(),
  pr = function (e, t) {
    var i = eo(e),
      n =
        parseInt(i.width) -
        parseInt(i.paddingLeft) -
        parseInt(i.paddingRight) -
        parseInt(i.borderLeftWidth) -
        parseInt(i.borderRightWidth),
      o = ao(e, 0, t),
      r = ao(e, 1, t),
      a = o && eo(o),
      s = r && eo(r),
      d = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + oo(o).width,
      l = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + oo(r).width;
    if ("flex" === i.display)
      return "column" === i.flexDirection ||
        "column-reverse" === i.flexDirection
        ? "vertical"
        : "horizontal";
    if ("grid" === i.display)
      return i.gridTemplateColumns.split(" ").length <= 1
        ? "vertical"
        : "horizontal";
    if (o && a.float && "none" !== a.float) {
      var c = "left" === a.float ? "left" : "right";
      return !r || ("both" !== s.clear && s.clear !== c)
        ? "horizontal"
        : "vertical";
    }
    return o &&
      ("block" === a.display ||
        "flex" === a.display ||
        "table" === a.display ||
        "grid" === a.display ||
        (d >= n && "none" === i[dr]) ||
        (r && "none" === i[dr] && d + l > n))
      ? "vertical"
      : "horizontal";
  },
  ur = function (e) {
    function t(e, i) {
      return function (n, o, r, a) {
        var s =
          n.options.group.name &&
          o.options.group.name &&
          n.options.group.name === o.options.group.name;
        if (null == e && (i || s)) return !0;
        if (null == e || !1 === e) return !1;
        if (i && "clone" === e) return e;
        if ("function" == typeof e) return t(e(n, o, r, a), i)(n, o, r, a);
        var d = (i ? n : o).options.group.name;
        return (
          !0 === e ||
          ("string" == typeof e && e === d) ||
          (e.join && e.indexOf(d) > -1)
        );
      };
    }
    var i = {},
      n = e.group;
    (n && "object" == $n(n)) || (n = { name: n }),
      (i.name = n.name),
      (i.checkPull = t(n.pull, !0)),
      (i.checkPut = t(n.put)),
      (i.revertClone = n.revertClone),
      (e.group = i);
  },
  hr = function () {
    !cr && Oo && eo(Oo, "display", "none");
  },
  mr = function () {
    !cr && Oo && eo(Oo, "display", "");
  };
ar &&
  !jn &&
  document.addEventListener(
    "click",
    function (e) {
      if (Jo)
        return (
          e.preventDefault(),
          e.stopPropagation && e.stopPropagation(),
          e.stopImmediatePropagation && e.stopImmediatePropagation(),
          (Jo = !1),
          !1
        );
    },
    !0
  );
var fr = function (e) {
    if (So) {
      var t = (function (e, t) {
        var i;
        return (
          er.some(function (n) {
            var o = n[bo].options.emptyInsertThreshold;
            if (o && !so(n)) {
              var r = oo(n),
                a = e >= r.left - o && e <= r.right + o,
                s = t >= r.top - o && t <= r.bottom + o;
              return a && s ? (i = n) : void 0;
            }
          }),
          i
        );
      })((e = e.touches ? e.touches[0] : e).clientX, e.clientY);
      if (t) {
        var i = {};
        for (var n in e) e.hasOwnProperty(n) && (i[n] = e[n]);
        (i.target = i.rootEl = t),
          (i.preventDefault = void 0),
          (i.stopPropagation = void 0),
          t[bo]._onDragOver(i);
      }
    }
  },
  gr = function (e) {
    So && So.parentNode[bo]._isOutsideThisEl(e.target);
  };
function vr(e, t) {
  if (!e || !e.nodeType || 1 !== e.nodeType)
    throw "Sortable: `el` must be an HTMLElement, not ".concat(
      {}.toString.call(e)
    );
  (this.el = e), (this.options = t = kn({}, t)), (e[bo] = this);
  var i = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function () {
      return pr(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function (e, t) {
      e.setData("Text", t.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold:
      (Number.parseInt ? Number : window).parseInt(
        window.devicePixelRatio,
        10
      ) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: { x: 0, y: 0 },
    supportPointer: !1 !== vr.supportPointer && "PointerEvent" in window && !Un,
    emptyInsertThreshold: 5,
  };
  for (var n in (Eo.initializePlugins(this, e, i), i))
    !(n in t) && (t[n] = i[n]);
  for (var o in (ur(t), this))
    "_" === o.charAt(0) &&
      "function" == typeof this[o] &&
      (this[o] = this[o].bind(this));
  (this.nativeDraggable = !t.forceFallback && lr),
    this.nativeDraggable && (this.options.touchStartThreshold = 1),
    t.supportPointer
      ? Wn(e, "pointerdown", this._onTapStart)
      : (Wn(e, "mousedown", this._onTapStart),
        Wn(e, "touchstart", this._onTapStart)),
    this.nativeDraggable && (Wn(e, "dragover", this), Wn(e, "dragenter", this)),
    er.push(this.el),
    t.store && t.store.get && this.sort(t.store.get(this) || []),
    kn(this, _o());
}
function br(e, t, i, n, o, r, a, s) {
  var d,
    l,
    c = e[bo],
    p = c.options.onMove;
  return (
    !window.CustomEvent || Bn || Hn
      ? (d = document.createEvent("Event")).initEvent("move", !0, !0)
      : (d = new CustomEvent("move", { bubbles: !0, cancelable: !0 })),
    (d.to = t),
    (d.from = e),
    (d.dragged = i),
    (d.draggedRect = n),
    (d.related = o || t),
    (d.relatedRect = r || oo(t)),
    (d.willInsertAfter = s),
    (d.originalEvent = a),
    e.dispatchEvent(d),
    p && (l = p.call(c, d, a)),
    l
  );
}
function _r(e) {
  e.draggable = !1;
}
function yr() {
  or = !1;
}
function xr(e) {
  for (
    var t = e.tagName + e.className + e.src + e.href + e.textContent,
      i = t.length,
      n = 0;
    i--;

  )
    n += t.charCodeAt(i);
  return n.toString(36);
}
function Er(e) {
  return setTimeout(e, 0);
}
function wr(e) {
  return clearTimeout(e);
}
(vr.prototype = {
  constructor: vr,
  _isOutsideThisEl: function (e) {
    this.el.contains(e) || e === this.el || (Xo = null);
  },
  _getDirection: function (e, t) {
    return "function" == typeof this.options.direction
      ? this.options.direction.call(this, e, t, So)
      : this.options.direction;
  },
  _onTapStart: function (e) {
    if (e.cancelable) {
      var t = this,
        i = this.el,
        n = this.options,
        o = n.preventOnFilter,
        r = e.type,
        a =
          (e.touches && e.touches[0]) ||
          (e.pointerType && "touch" === e.pointerType && e),
        s = (a || e).target,
        d =
          (e.target.shadowRoot &&
            ((e.path && e.path[0]) ||
              (e.composedPath && e.composedPath()[0]))) ||
          s,
        l = n.filter;
      if (
        ((function (e) {
          rr.length = 0;
          var t = e.getElementsByTagName("input"),
            i = t.length;
          for (; i--; ) {
            var n = t[i];
            n.checked && rr.push(n);
          }
        })(i),
        !So &&
          !(
            (/mousedown|pointerdown/.test(r) && 0 !== e.button) ||
            n.disabled
          ) &&
          !d.isContentEditable &&
          (this.nativeDraggable ||
            !Un ||
            !s ||
            "SELECT" !== s.tagName.toUpperCase()) &&
          !(((s = Kn(s, n.draggable, i, !1)) && s.animated) || $o === s))
      ) {
        if (((Fo = lo(s)), (No = lo(s, n.draggable)), "function" == typeof l)) {
          if (l.call(this, e, s, this))
            return (
              Io({
                sortable: t,
                rootEl: d,
                name: "filter",
                targetEl: s,
                toEl: i,
                fromEl: i,
              }),
              Co("filter", t, { evt: e }),
              void (o && e.cancelable && e.preventDefault())
            );
        } else if (
          l &&
          (l = l.split(",").some(function (n) {
            if ((n = Kn(d, n.trim(), i, !1)))
              return (
                Io({
                  sortable: t,
                  rootEl: n,
                  name: "filter",
                  targetEl: s,
                  fromEl: i,
                  toEl: i,
                }),
                Co("filter", t, { evt: e }),
                !0
              );
          }))
        )
          return void (o && e.cancelable && e.preventDefault());
        (n.handle && !Kn(d, n.handle, i, !1)) ||
          this._prepareDragStart(e, a, s);
      }
    }
  },
  _prepareDragStart: function (e, t, i) {
    var n,
      o = this,
      r = o.el,
      a = o.options,
      s = r.ownerDocument;
    if (i && !So && i.parentNode === r) {
      var d = oo(i);
      if (
        ((Do = r),
        (To = (So = i).parentNode),
        (Ro = So.nextSibling),
        ($o = i),
        (Bo = a.group),
        (vr.dragged = So),
        (zo = {
          target: So,
          clientX: (t || e).clientX,
          clientY: (t || e).clientY,
        }),
        (Yo = zo.clientX - d.left),
        (Wo = zo.clientY - d.top),
        (this._lastX = (t || e).clientX),
        (this._lastY = (t || e).clientY),
        (So.style["will-change"] = "all"),
        (n = function () {
          Co("delayEnded", o, { evt: e }),
            vr.eventCanceled
              ? o._onDrop()
              : (o._disableDelayedDragEvents(),
                !zn && o.nativeDraggable && (So.draggable = !0),
                o._triggerDragStart(e, t),
                Io({ sortable: o, name: "choose", originalEvent: e }),
                Jn(So, a.chosenClass, !0));
        }),
        a.ignore.split(",").forEach(function (e) {
          io(So, e.trim(), _r);
        }),
        Wn(s, "dragover", fr),
        Wn(s, "mousemove", fr),
        Wn(s, "touchmove", fr),
        Wn(s, "mouseup", o._onDrop),
        Wn(s, "touchend", o._onDrop),
        Wn(s, "touchcancel", o._onDrop),
        zn &&
          this.nativeDraggable &&
          ((this.options.touchStartThreshold = 4), (So.draggable = !0)),
        Co("delayStart", this, { evt: e }),
        !a.delay ||
          (a.delayOnTouchOnly && !t) ||
          (this.nativeDraggable && (Hn || Bn)))
      )
        n();
      else {
        if (vr.eventCanceled) return void this._onDrop();
        Wn(s, "mouseup", o._disableDelayedDrag),
          Wn(s, "touchend", o._disableDelayedDrag),
          Wn(s, "touchcancel", o._disableDelayedDrag),
          Wn(s, "mousemove", o._delayedDragTouchMoveHandler),
          Wn(s, "touchmove", o._delayedDragTouchMoveHandler),
          a.supportPointer &&
            Wn(s, "pointermove", o._delayedDragTouchMoveHandler),
          (o._dragStartTimer = setTimeout(n, a.delay));
      }
    }
  },
  _delayedDragTouchMoveHandler: function (e) {
    var t = e.touches ? e.touches[0] : e;
    Math.max(
      Math.abs(t.clientX - this._lastX),
      Math.abs(t.clientY - this._lastY)
    ) >=
      Math.floor(
        this.options.touchStartThreshold /
          ((this.nativeDraggable && window.devicePixelRatio) || 1)
      ) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function () {
    So && _r(So),
      clearTimeout(this._dragStartTimer),
      this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function () {
    var e = this.el.ownerDocument;
    Gn(e, "mouseup", this._disableDelayedDrag),
      Gn(e, "touchend", this._disableDelayedDrag),
      Gn(e, "touchcancel", this._disableDelayedDrag),
      Gn(e, "mousemove", this._delayedDragTouchMoveHandler),
      Gn(e, "touchmove", this._delayedDragTouchMoveHandler),
      Gn(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function (e, t) {
    (t = t || ("touch" == e.pointerType && e)),
      !this.nativeDraggable || t
        ? this.options.supportPointer
          ? Wn(document, "pointermove", this._onTouchMove)
          : Wn(document, t ? "touchmove" : "mousemove", this._onTouchMove)
        : (Wn(So, "dragend", this), Wn(Do, "dragstart", this._onDragStart));
    try {
      document.selection
        ? Er(function () {
            document.selection.empty();
          })
        : window.getSelection().removeAllRanges();
    } catch (e) {}
  },
  _dragStarted: function (e, t) {
    if (((Qo = !1), Do && So)) {
      Co("dragStarted", this, { evt: t }),
        this.nativeDraggable && Wn(document, "dragover", gr);
      var i = this.options;
      !e && Jn(So, i.dragClass, !1),
        Jn(So, i.ghostClass, !0),
        (vr.active = this),
        e && this._appendGhost(),
        Io({ sortable: this, name: "start", originalEvent: t });
    } else this._nulling();
  },
  _emulateDragOver: function () {
    if (Uo) {
      (this._lastX = Uo.clientX), (this._lastY = Uo.clientY), hr();
      for (
        var e = document.elementFromPoint(Uo.clientX, Uo.clientY), t = e;
        e &&
        e.shadowRoot &&
        (e = e.shadowRoot.elementFromPoint(Uo.clientX, Uo.clientY)) !== t;

      )
        t = e;
      if ((So.parentNode[bo]._isOutsideThisEl(e), t))
        do {
          if (t[bo]) {
            if (
              t[bo]._onDragOver({
                clientX: Uo.clientX,
                clientY: Uo.clientY,
                target: e,
                rootEl: t,
              }) &&
              !this.options.dragoverBubble
            )
              break;
          }
          e = t;
        } while ((t = t.parentNode));
      mr();
    }
  },
  _onTouchMove: function (e) {
    if (zo) {
      var t = this.options,
        i = t.fallbackTolerance,
        n = t.fallbackOffset,
        o = e.touches ? e.touches[0] : e,
        r = Oo && to(Oo, !0),
        a = Oo && r && r.a,
        s = Oo && r && r.d,
        d = sr && Zo && co(Zo),
        l =
          (o.clientX - zo.clientX + n.x) / (a || 1) +
          (d ? d[0] - nr[0] : 0) / (a || 1),
        c =
          (o.clientY - zo.clientY + n.y) / (s || 1) +
          (d ? d[1] - nr[1] : 0) / (s || 1);
      if (!vr.active && !Qo) {
        if (
          i &&
          Math.max(
            Math.abs(o.clientX - this._lastX),
            Math.abs(o.clientY - this._lastY)
          ) < i
        )
          return;
        this._onDragStart(e, !0);
      }
      if (Oo) {
        r
          ? ((r.e += l - (Vo || 0)), (r.f += c - (jo || 0)))
          : (r = { a: 1, b: 0, c: 0, d: 1, e: l, f: c });
        var p = "matrix("
          .concat(r.a, ",")
          .concat(r.b, ",")
          .concat(r.c, ",")
          .concat(r.d, ",")
          .concat(r.e, ",")
          .concat(r.f, ")");
        eo(Oo, "webkitTransform", p),
          eo(Oo, "mozTransform", p),
          eo(Oo, "msTransform", p),
          eo(Oo, "transform", p),
          (Vo = l),
          (jo = c),
          (Uo = o);
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function () {
    if (!Oo) {
      var e = this.options.fallbackOnBody ? document.body : Do,
        t = oo(So, !0, sr, !0, e),
        i = this.options;
      if (sr) {
        for (
          Zo = e;
          "static" === eo(Zo, "position") &&
          "none" === eo(Zo, "transform") &&
          Zo !== document;

        )
          Zo = Zo.parentNode;
        Zo !== document.body && Zo !== document.documentElement
          ? (Zo === document && (Zo = no()),
            (t.top += Zo.scrollTop),
            (t.left += Zo.scrollLeft))
          : (Zo = no()),
          (nr = co(Zo));
      }
      Jn((Oo = So.cloneNode(!0)), i.ghostClass, !1),
        Jn(Oo, i.fallbackClass, !0),
        Jn(Oo, i.dragClass, !0),
        eo(Oo, "transition", ""),
        eo(Oo, "transform", ""),
        eo(Oo, "box-sizing", "border-box"),
        eo(Oo, "margin", 0),
        eo(Oo, "top", t.top),
        eo(Oo, "left", t.left),
        eo(Oo, "width", t.width),
        eo(Oo, "height", t.height),
        eo(Oo, "opacity", "0.8"),
        eo(Oo, "position", sr ? "absolute" : "fixed"),
        eo(Oo, "zIndex", "100000"),
        eo(Oo, "pointerEvents", "none"),
        (vr.ghost = Oo),
        e.appendChild(Oo),
        eo(
          Oo,
          "transform-origin",
          (Yo / parseInt(Oo.style.width)) * 100 +
            "% " +
            (Wo / parseInt(Oo.style.height)) * 100 +
            "%"
        );
    }
  },
  _onDragStart: function (e, t) {
    var i = this,
      n = e.dataTransfer,
      o = i.options;
    Co("dragStart", this, { evt: e }),
      vr.eventCanceled
        ? this._onDrop()
        : (Co("setupClone", this),
          vr.eventCanceled ||
            ((Mo = fo(So)).removeAttribute("id"),
            (Mo.draggable = !1),
            (Mo.style["will-change"] = ""),
            this._hideClone(),
            Jn(Mo, this.options.chosenClass, !1),
            (vr.clone = Mo)),
          (i.cloneId = Er(function () {
            Co("clone", i),
              vr.eventCanceled ||
                (i.options.removeCloneOnHide || Do.insertBefore(Mo, So),
                i._hideClone(),
                Io({ sortable: i, name: "clone" }));
          })),
          !t && Jn(So, o.dragClass, !0),
          t
            ? ((Jo = !0), (i._loopId = setInterval(i._emulateDragOver, 50)))
            : (Gn(document, "mouseup", i._onDrop),
              Gn(document, "touchend", i._onDrop),
              Gn(document, "touchcancel", i._onDrop),
              n &&
                ((n.effectAllowed = "move"),
                o.setData && o.setData.call(i, n, So)),
              Wn(document, "drop", i),
              eo(So, "transform", "translateZ(0)")),
          (Qo = !0),
          (i._dragStartId = Er(i._dragStarted.bind(i, t, e))),
          Wn(document, "selectstart", i),
          (Go = !0),
          Un && eo(document.body, "user-select", "none"));
  },
  _onDragOver: function (e) {
    var t,
      i,
      n,
      o,
      r = this.el,
      a = e.target,
      s = this.options,
      d = s.group,
      l = vr.active,
      c = Bo === d,
      p = s.sort,
      u = Ho || l,
      h = this,
      m = !1;
    if (!or) {
      if (
        (void 0 !== e.preventDefault && e.cancelable && e.preventDefault(),
        (a = Kn(a, s.draggable, r, !0)),
        O("dragOver"),
        vr.eventCanceled)
      )
        return m;
      if (
        So.contains(e.target) ||
        (a.animated && a.animatingX && a.animatingY) ||
        h._ignoreWhileAnimating === a
      )
        return R(!1);
      if (
        ((Jo = !1),
        l &&
          !s.disabled &&
          (c
            ? p || (n = To !== Do)
            : Ho === this ||
              ((this.lastPutMode = Bo.checkPull(this, l, So, e)) &&
                d.checkPut(this, l, So, e))))
      ) {
        if (
          ((o = "vertical" === this._getDirection(e, a)),
          (t = oo(So)),
          O("dragOverValid"),
          vr.eventCanceled)
        )
          return m;
        if (n)
          return (
            (To = Do),
            D(),
            this._hideClone(),
            O("revert"),
            vr.eventCanceled ||
              (Ro ? Do.insertBefore(So, Ro) : Do.appendChild(So)),
            R(!0)
          );
        var f = so(r, s.draggable);
        if (
          !f ||
          ((function (e, t, i) {
            var n = oo(so(i.el, i.options.draggable)),
              o = 10;
            return t
              ? e.clientX > n.right + o ||
                  (e.clientX <= n.right &&
                    e.clientY > n.bottom &&
                    e.clientX >= n.left)
              : (e.clientX > n.right && e.clientY > n.top) ||
                  (e.clientX <= n.right && e.clientY > n.bottom + o);
          })(e, o, this) &&
            !f.animated)
        ) {
          if (f === So) return R(!1);
          if (
            (f && r === e.target && (a = f),
            a && (i = oo(a)),
            !1 !== br(Do, r, So, t, a, i, e, !!a))
          )
            return (
              D(),
              f && f.nextSibling
                ? r.insertBefore(So, f.nextSibling)
                : r.appendChild(So),
              (To = r),
              $(),
              R(!0)
            );
        } else if (
          f &&
          (function (e, t, i) {
            var n = oo(ao(i.el, 0, i.options, !0)),
              o = 10;
            return t
              ? e.clientX < n.left - o ||
                  (e.clientY < n.top && e.clientX < n.right)
              : e.clientY < n.top - o ||
                  (e.clientY < n.bottom && e.clientX < n.left);
          })(e, o, this)
        ) {
          var g = ao(r, 0, s, !0);
          if (g === So) return R(!1);
          if (((i = oo((a = g))), !1 !== br(Do, r, So, t, a, i, e, !1)))
            return D(), r.insertBefore(So, g), (To = r), $(), R(!0);
        } else if (a.parentNode === r) {
          i = oo(a);
          var v,
            b,
            _,
            y = So.parentNode !== r,
            x = !(function (e, t, i) {
              var n = i ? e.left : e.top,
                o = i ? e.right : e.bottom,
                r = i ? e.width : e.height,
                a = i ? t.left : t.top,
                s = i ? t.right : t.bottom,
                d = i ? t.width : t.height;
              return n === a || o === s || n + r / 2 === a + d / 2;
            })(
              (So.animated && So.toRect) || t,
              (a.animated && a.toRect) || i,
              o
            ),
            E = o ? "top" : "left",
            w = ro(a, "top", "top") || ro(So, "top", "top"),
            A = w ? w.scrollTop : void 0;
          if (
            (Xo !== a &&
              ((b = i[E]), (tr = !1), (ir = (!x && s.invertSwap) || y)),
            (v = (function (e, t, i, n, o, r, a, s) {
              var d = n ? e.clientY : e.clientX,
                l = n ? i.height : i.width,
                c = n ? i.top : i.left,
                p = n ? i.bottom : i.right,
                u = !1;
              if (!a)
                if (s && Ko < l * o) {
                  if (
                    (!tr &&
                      (1 === qo ? d > c + (l * r) / 2 : d < p - (l * r) / 2) &&
                      (tr = !0),
                    tr)
                  )
                    u = !0;
                  else if (1 === qo ? d < c + Ko : d > p - Ko) return -qo;
                } else if (
                  d > c + (l * (1 - o)) / 2 &&
                  d < p - (l * (1 - o)) / 2
                )
                  return (function (e) {
                    return lo(So) < lo(e) ? 1 : -1;
                  })(t);
              if ((u = u || a) && (d < c + (l * r) / 2 || d > p - (l * r) / 2))
                return d > c + l / 2 ? 1 : -1;
              return 0;
            })(
              e,
              a,
              i,
              o,
              x ? 1 : s.swapThreshold,
              null == s.invertedSwapThreshold
                ? s.swapThreshold
                : s.invertedSwapThreshold,
              ir,
              Xo === a
            )),
            0 !== v)
          ) {
            var C = lo(So);
            do {
              (C -= v), (_ = To.children[C]);
            } while (_ && ("none" === eo(_, "display") || _ === Oo));
          }
          if (0 === v || _ === a) return R(!1);
          (Xo = a), (qo = v);
          var I = a.nextElementSibling,
            S = !1,
            T = br(Do, r, So, t, a, i, e, (S = 1 === v));
          if (!1 !== T)
            return (
              (1 !== T && -1 !== T) || (S = 1 === T),
              (or = !0),
              setTimeout(yr, 30),
              D(),
              S && !I
                ? r.appendChild(So)
                : a.parentNode.insertBefore(So, S ? I : a),
              w && mo(w, 0, A - w.scrollTop),
              (To = So.parentNode),
              void 0 === b || ir || (Ko = Math.abs(b - oo(a)[E])),
              $(),
              R(!0)
            );
        }
        if (r.contains(So)) return R(!1);
      }
      return !1;
    }
    function O(s, d) {
      Co(
        s,
        h,
        Rn(
          {
            evt: e,
            isOwner: c,
            axis: o ? "vertical" : "horizontal",
            revert: n,
            dragRect: t,
            targetRect: i,
            canSort: p,
            fromSortable: u,
            target: a,
            completed: R,
            onMove: function (i, n) {
              return br(Do, r, So, t, i, oo(i), e, n);
            },
            changed: $,
          },
          d
        )
      );
    }
    function D() {
      O("dragOverAnimationCapture"),
        h.captureAnimationState(),
        h !== u && u.captureAnimationState();
    }
    function R(t) {
      return (
        O("dragOverCompleted", { insertion: t }),
        t &&
          (c ? l._hideClone() : l._showClone(h),
          h !== u &&
            (Jn(So, Ho ? Ho.options.ghostClass : l.options.ghostClass, !1),
            Jn(So, s.ghostClass, !0)),
          Ho !== h && h !== vr.active
            ? (Ho = h)
            : h === vr.active && Ho && (Ho = null),
          u === h && (h._ignoreWhileAnimating = a),
          h.animateAll(function () {
            O("dragOverAnimationComplete"), (h._ignoreWhileAnimating = null);
          }),
          h !== u && (u.animateAll(), (u._ignoreWhileAnimating = null))),
        ((a === So && !So.animated) || (a === r && !a.animated)) && (Xo = null),
        s.dragoverBubble ||
          e.rootEl ||
          a === document ||
          (So.parentNode[bo]._isOutsideThisEl(e.target), !t && fr(e)),
        !s.dragoverBubble && e.stopPropagation && e.stopPropagation(),
        (m = !0)
      );
    }
    function $() {
      (Lo = lo(So)),
        (Po = lo(So, s.draggable)),
        Io({
          sortable: h,
          name: "change",
          toEl: r,
          newIndex: Lo,
          newDraggableIndex: Po,
          originalEvent: e,
        });
    }
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function () {
    Gn(document, "mousemove", this._onTouchMove),
      Gn(document, "touchmove", this._onTouchMove),
      Gn(document, "pointermove", this._onTouchMove),
      Gn(document, "dragover", fr),
      Gn(document, "mousemove", fr),
      Gn(document, "touchmove", fr);
  },
  _offUpEvents: function () {
    var e = this.el.ownerDocument;
    Gn(e, "mouseup", this._onDrop),
      Gn(e, "touchend", this._onDrop),
      Gn(e, "pointerup", this._onDrop),
      Gn(e, "touchcancel", this._onDrop),
      Gn(document, "selectstart", this);
  },
  _onDrop: function (e) {
    var t = this.el,
      i = this.options;
    (Lo = lo(So)),
      (Po = lo(So, i.draggable)),
      Co("drop", this, { evt: e }),
      (To = So && So.parentNode),
      (Lo = lo(So)),
      (Po = lo(So, i.draggable)),
      vr.eventCanceled ||
        ((Qo = !1),
        (ir = !1),
        (tr = !1),
        clearInterval(this._loopId),
        clearTimeout(this._dragStartTimer),
        wr(this.cloneId),
        wr(this._dragStartId),
        this.nativeDraggable &&
          (Gn(document, "drop", this), Gn(t, "dragstart", this._onDragStart)),
        this._offMoveEvents(),
        this._offUpEvents(),
        Un && eo(document.body, "user-select", ""),
        eo(So, "transform", ""),
        e &&
          (Go &&
            (e.cancelable && e.preventDefault(),
            !i.dropBubble && e.stopPropagation()),
          Oo && Oo.parentNode && Oo.parentNode.removeChild(Oo),
          (Do === To || (Ho && "clone" !== Ho.lastPutMode)) &&
            Mo &&
            Mo.parentNode &&
            Mo.parentNode.removeChild(Mo),
          So &&
            (this.nativeDraggable && Gn(So, "dragend", this),
            _r(So),
            (So.style["will-change"] = ""),
            Go &&
              !Qo &&
              Jn(So, Ho ? Ho.options.ghostClass : this.options.ghostClass, !1),
            Jn(So, this.options.chosenClass, !1),
            Io({
              sortable: this,
              name: "unchoose",
              toEl: To,
              newIndex: null,
              newDraggableIndex: null,
              originalEvent: e,
            }),
            Do !== To
              ? (Lo >= 0 &&
                  (Io({
                    rootEl: To,
                    name: "add",
                    toEl: To,
                    fromEl: Do,
                    originalEvent: e,
                  }),
                  Io({
                    sortable: this,
                    name: "remove",
                    toEl: To,
                    originalEvent: e,
                  }),
                  Io({
                    rootEl: To,
                    name: "sort",
                    toEl: To,
                    fromEl: Do,
                    originalEvent: e,
                  }),
                  Io({
                    sortable: this,
                    name: "sort",
                    toEl: To,
                    originalEvent: e,
                  })),
                Ho && Ho.save())
              : Lo !== Fo &&
                Lo >= 0 &&
                (Io({
                  sortable: this,
                  name: "update",
                  toEl: To,
                  originalEvent: e,
                }),
                Io({
                  sortable: this,
                  name: "sort",
                  toEl: To,
                  originalEvent: e,
                })),
            vr.active &&
              ((null != Lo && -1 !== Lo) || ((Lo = Fo), (Po = No)),
              Io({ sortable: this, name: "end", toEl: To, originalEvent: e }),
              this.save())))),
      this._nulling();
  },
  _nulling: function () {
    Co("nulling", this),
      (Do =
        So =
        To =
        Oo =
        Ro =
        Mo =
        $o =
        ko =
        zo =
        Uo =
        Go =
        Lo =
        Po =
        Fo =
        No =
        Xo =
        qo =
        Ho =
        Bo =
        vr.dragged =
        vr.ghost =
        vr.clone =
        vr.active =
          null),
      rr.forEach(function (e) {
        e.checked = !0;
      }),
      (rr.length = Vo = jo = 0);
  },
  handleEvent: function (e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        So &&
          (this._onDragOver(e),
          (function (e) {
            e.dataTransfer && (e.dataTransfer.dropEffect = "move");
            e.cancelable && e.preventDefault();
          })(e));
        break;
      case "selectstart":
        e.preventDefault();
    }
  },
  toArray: function () {
    for (
      var e,
        t = [],
        i = this.el.children,
        n = 0,
        o = i.length,
        r = this.options;
      n < o;
      n++
    )
      Kn((e = i[n]), r.draggable, this.el, !1) &&
        t.push(e.getAttribute(r.dataIdAttr) || xr(e));
    return t;
  },
  sort: function (e, t) {
    var i = {},
      n = this.el;
    this.toArray().forEach(function (e, t) {
      var o = n.children[t];
      Kn(o, this.options.draggable, n, !1) && (i[e] = o);
    }, this),
      t && this.captureAnimationState(),
      e.forEach(function (e) {
        i[e] && (n.removeChild(i[e]), n.appendChild(i[e]));
      }),
      t && this.animateAll();
  },
  save: function () {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  closest: function (e, t) {
    return Kn(e, t || this.options.draggable, this.el, !1);
  },
  option: function (e, t) {
    var i = this.options;
    if (void 0 === t) return i[e];
    var n = Eo.modifyOption(this, e, t);
    (i[e] = void 0 !== n ? n : t), "group" === e && ur(i);
  },
  destroy: function () {
    Co("destroy", this);
    var e = this.el;
    (e[bo] = null),
      Gn(e, "mousedown", this._onTapStart),
      Gn(e, "touchstart", this._onTapStart),
      Gn(e, "pointerdown", this._onTapStart),
      this.nativeDraggable &&
        (Gn(e, "dragover", this), Gn(e, "dragenter", this)),
      Array.prototype.forEach.call(
        e.querySelectorAll("[draggable]"),
        function (e) {
          e.removeAttribute("draggable");
        }
      ),
      this._onDrop(),
      this._disableDelayedDragEvents(),
      er.splice(er.indexOf(this.el), 1),
      (this.el = e = null);
  },
  _hideClone: function () {
    if (!ko) {
      if ((Co("hideClone", this), vr.eventCanceled)) return;
      eo(Mo, "display", "none"),
        this.options.removeCloneOnHide &&
          Mo.parentNode &&
          Mo.parentNode.removeChild(Mo),
        (ko = !0);
    }
  },
  _showClone: function (e) {
    if ("clone" === e.lastPutMode) {
      if (ko) {
        if ((Co("showClone", this), vr.eventCanceled)) return;
        So.parentNode != Do || this.options.group.revertClone
          ? Ro
            ? Do.insertBefore(Mo, Ro)
            : Do.appendChild(Mo)
          : Do.insertBefore(Mo, So),
          this.options.group.revertClone && this.animate(So, Mo),
          eo(Mo, "display", ""),
          (ko = !1);
      }
    } else this._hideClone();
  },
}),
  ar &&
    Wn(document, "touchmove", function (e) {
      (vr.active || Qo) && e.cancelable && e.preventDefault();
    }),
  (vr.utils = {
    on: Wn,
    off: Gn,
    css: eo,
    find: io,
    is: function (e, t) {
      return !!Kn(e, t, e, !1);
    },
    extend: function (e, t) {
      if (e && t) for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
      return e;
    },
    throttle: ho,
    closest: Kn,
    toggleClass: Jn,
    clone: fo,
    index: lo,
    nextTick: Er,
    cancelNextTick: wr,
    detectDirection: pr,
    getChild: ao,
  }),
  (vr.get = function (e) {
    return e[bo];
  }),
  (vr.mount = function () {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    t[0].constructor === Array && (t = t[0]),
      t.forEach(function (e) {
        if (!e.prototype || !e.prototype.constructor)
          throw "Sortable: Mounted plugin must be a constructor function, not ".concat(
            {}.toString.call(e)
          );
        e.utils && (vr.utils = Rn(Rn({}, vr.utils), e.utils)), Eo.mount(e);
      });
  }),
  (vr.create = function (e, t) {
    return new vr(e, t);
  }),
  (vr.version = "1.15.0");
var Ar,
  Cr,
  Ir,
  Sr,
  Tr,
  Or,
  Dr = [],
  Rr = !1;
function $r() {
  Dr.forEach(function (e) {
    clearInterval(e.pid);
  }),
    (Dr = []);
}
function Mr() {
  clearInterval(Or);
}
var kr = ho(function (e, t, i, n) {
    if (t.scroll) {
      var o,
        r = (e.touches ? e.touches[0] : e).clientX,
        a = (e.touches ? e.touches[0] : e).clientY,
        s = t.scrollSensitivity,
        d = t.scrollSpeed,
        l = no(),
        c = !1;
      Cr !== i &&
        ((Cr = i),
        $r(),
        (Ar = t.scroll),
        (o = t.scrollFn),
        !0 === Ar && (Ar = po(i, !0)));
      var p = 0,
        u = Ar;
      do {
        var h = u,
          m = oo(h),
          f = m.top,
          g = m.bottom,
          v = m.left,
          b = m.right,
          _ = m.width,
          y = m.height,
          x = void 0,
          E = void 0,
          w = h.scrollWidth,
          A = h.scrollHeight,
          C = eo(h),
          I = h.scrollLeft,
          S = h.scrollTop;
        h === l
          ? ((x =
              _ < w &&
              ("auto" === C.overflowX ||
                "scroll" === C.overflowX ||
                "visible" === C.overflowX)),
            (E =
              y < A &&
              ("auto" === C.overflowY ||
                "scroll" === C.overflowY ||
                "visible" === C.overflowY)))
          : ((x =
              _ < w && ("auto" === C.overflowX || "scroll" === C.overflowX)),
            (E =
              y < A && ("auto" === C.overflowY || "scroll" === C.overflowY)));
        var T =
            x &&
            (Math.abs(b - r) <= s && I + _ < w) - (Math.abs(v - r) <= s && !!I),
          O =
            E &&
            (Math.abs(g - a) <= s && S + y < A) - (Math.abs(f - a) <= s && !!S);
        if (!Dr[p]) for (var D = 0; D <= p; D++) Dr[D] || (Dr[D] = {});
        (Dr[p].vx == T && Dr[p].vy == O && Dr[p].el === h) ||
          ((Dr[p].el = h),
          (Dr[p].vx = T),
          (Dr[p].vy = O),
          clearInterval(Dr[p].pid),
          (0 == T && 0 == O) ||
            ((c = !0),
            (Dr[p].pid = setInterval(
              function () {
                n && 0 === this.layer && vr.active._onTouchMove(Tr);
                var t = Dr[this.layer].vy ? Dr[this.layer].vy * d : 0,
                  i = Dr[this.layer].vx ? Dr[this.layer].vx * d : 0;
                ("function" == typeof o &&
                  "continue" !==
                    o.call(
                      vr.dragged.parentNode[bo],
                      i,
                      t,
                      e,
                      Tr,
                      Dr[this.layer].el
                    )) ||
                  mo(Dr[this.layer].el, i, t);
              }.bind({ layer: p }),
              24
            )))),
          p++;
      } while (t.bubbleScroll && u !== l && (u = po(u, !1)));
      Rr = c;
    }
  }, 30),
  Fr = function (e) {
    var t = e.originalEvent,
      i = e.putSortable,
      n = e.dragEl,
      o = e.activeSortable,
      r = e.dispatchSortableEvent,
      a = e.hideGhostForTarget,
      s = e.unhideGhostForTarget;
    if (t) {
      var d = i || o;
      a();
      var l =
          t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t,
        c = document.elementFromPoint(l.clientX, l.clientY);
      s(),
        d &&
          !d.el.contains(c) &&
          (r("spill"), this.onSpill({ dragEl: n, putSortable: i }));
    }
  };
function Lr() {}
function Nr() {}
(Lr.prototype = {
  startIndex: null,
  dragStart: function (e) {
    var t = e.oldDraggableIndex;
    this.startIndex = t;
  },
  onSpill: function (e) {
    var t = e.dragEl,
      i = e.putSortable;
    this.sortable.captureAnimationState(), i && i.captureAnimationState();
    var n = ao(this.sortable.el, this.startIndex, this.options);
    n ? this.sortable.el.insertBefore(t, n) : this.sortable.el.appendChild(t),
      this.sortable.animateAll(),
      i && i.animateAll();
  },
  drop: Fr,
}),
  kn(Lr, { pluginName: "revertOnSpill" }),
  (Nr.prototype = {
    onSpill: function (e) {
      var t = e.dragEl,
        i = e.putSortable || this.sortable;
      i.captureAnimationState(),
        t.parentNode && t.parentNode.removeChild(t),
        i.animateAll();
    },
    drop: Fr,
  }),
  kn(Nr, { pluginName: "removeOnSpill" });
var Pr,
  Br = [Nr, Lr];
var Hr,
  zr,
  Ur,
  Vr,
  jr,
  Yr = [],
  Wr = [],
  Gr = !1,
  Xr = !1,
  qr = !1;
function Kr(e, t) {
  Wr.forEach(function (i, n) {
    var o = t.children[i.sortableIndex + (e ? Number(n) : 0)];
    o ? t.insertBefore(i, o) : t.appendChild(i);
  });
}
function Zr() {
  Yr.forEach(function (e) {
    e !== Ur && e.parentNode && e.parentNode.removeChild(e);
  });
}
var Qr = Object.freeze({
  __proto__: null,
  AutoScroll: function () {
    function e() {
      for (var e in ((this.defaults = {
        scroll: !0,
        forceAutoScrollFallback: !1,
        scrollSensitivity: 30,
        scrollSpeed: 10,
        bubbleScroll: !0,
      }),
      this))
        "_" === e.charAt(0) &&
          "function" == typeof this[e] &&
          (this[e] = this[e].bind(this));
    }
    return (
      (e.prototype = {
        dragStarted: function (e) {
          var t = e.originalEvent;
          this.sortable.nativeDraggable
            ? Wn(document, "dragover", this._handleAutoScroll)
            : this.options.supportPointer
            ? Wn(document, "pointermove", this._handleFallbackAutoScroll)
            : t.touches
            ? Wn(document, "touchmove", this._handleFallbackAutoScroll)
            : Wn(document, "mousemove", this._handleFallbackAutoScroll);
        },
        dragOverCompleted: function (e) {
          var t = e.originalEvent;
          this.options.dragOverBubble || t.rootEl || this._handleAutoScroll(t);
        },
        drop: function () {
          this.sortable.nativeDraggable
            ? Gn(document, "dragover", this._handleAutoScroll)
            : (Gn(document, "pointermove", this._handleFallbackAutoScroll),
              Gn(document, "touchmove", this._handleFallbackAutoScroll),
              Gn(document, "mousemove", this._handleFallbackAutoScroll)),
            Mr(),
            $r(),
            clearTimeout(Zn),
            (Zn = void 0);
        },
        nulling: function () {
          (Tr = Cr = Ar = Rr = Or = Ir = Sr = null), (Dr.length = 0);
        },
        _handleFallbackAutoScroll: function (e) {
          this._handleAutoScroll(e, !0);
        },
        _handleAutoScroll: function (e, t) {
          var i = this,
            n = (e.touches ? e.touches[0] : e).clientX,
            o = (e.touches ? e.touches[0] : e).clientY,
            r = document.elementFromPoint(n, o);
          if (
            ((Tr = e),
            t || this.options.forceAutoScrollFallback || Hn || Bn || Un)
          ) {
            kr(e, this.options, r, t);
            var a = po(r, !0);
            !Rr ||
              (Or && n === Ir && o === Sr) ||
              (Or && Mr(),
              (Or = setInterval(function () {
                var r = po(document.elementFromPoint(n, o), !0);
                r !== a && ((a = r), $r()), kr(e, i.options, r, t);
              }, 10)),
              (Ir = n),
              (Sr = o));
          } else {
            if (!this.options.bubbleScroll || po(r, !0) === no())
              return void $r();
            kr(e, this.options, po(r, !1), !1);
          }
        },
      }),
      kn(e, { pluginName: "scroll", initializeByDefault: !0 })
    );
  },
  MultiDrag: function () {
    function e(e) {
      for (var t in this)
        "_" === t.charAt(0) &&
          "function" == typeof this[t] &&
          (this[t] = this[t].bind(this));
      e.options.avoidImplicitDeselect ||
        (e.options.supportPointer
          ? Wn(document, "pointerup", this._deselectMultiDrag)
          : (Wn(document, "mouseup", this._deselectMultiDrag),
            Wn(document, "touchend", this._deselectMultiDrag))),
        Wn(document, "keydown", this._checkKeyDown),
        Wn(document, "keyup", this._checkKeyUp),
        (this.defaults = {
          selectedClass: "sortable-selected",
          multiDragKey: null,
          avoidImplicitDeselect: !1,
          setData: function (t, i) {
            var n = "";
            Yr.length && zr === e
              ? Yr.forEach(function (e, t) {
                  n += (t ? ", " : "") + e.textContent;
                })
              : (n = i.textContent),
              t.setData("Text", n);
          },
        });
    }
    return (
      (e.prototype = {
        multiDragKeyDown: !1,
        isMultiDrag: !1,
        delayStartGlobal: function (e) {
          var t = e.dragEl;
          Ur = t;
        },
        delayEnded: function () {
          this.isMultiDrag = ~Yr.indexOf(Ur);
        },
        setupClone: function (e) {
          var t = e.sortable,
            i = e.cancel;
          if (this.isMultiDrag) {
            for (var n = 0; n < Yr.length; n++)
              Wr.push(fo(Yr[n])),
                (Wr[n].sortableIndex = Yr[n].sortableIndex),
                (Wr[n].draggable = !1),
                (Wr[n].style["will-change"] = ""),
                Jn(Wr[n], this.options.selectedClass, !1),
                Yr[n] === Ur && Jn(Wr[n], this.options.chosenClass, !1);
            t._hideClone(), i();
          }
        },
        clone: function (e) {
          var t = e.sortable,
            i = e.rootEl,
            n = e.dispatchSortableEvent,
            o = e.cancel;
          this.isMultiDrag &&
            (this.options.removeCloneOnHide ||
              (Yr.length && zr === t && (Kr(!0, i), n("clone"), o())));
        },
        showClone: function (e) {
          var t = e.cloneNowShown,
            i = e.rootEl,
            n = e.cancel;
          this.isMultiDrag &&
            (Kr(!1, i),
            Wr.forEach(function (e) {
              eo(e, "display", "");
            }),
            t(),
            (jr = !1),
            n());
        },
        hideClone: function (e) {
          var t = this;
          e.sortable;
          var i = e.cloneNowHidden,
            n = e.cancel;
          this.isMultiDrag &&
            (Wr.forEach(function (e) {
              eo(e, "display", "none"),
                t.options.removeCloneOnHide &&
                  e.parentNode &&
                  e.parentNode.removeChild(e);
            }),
            i(),
            (jr = !0),
            n());
        },
        dragStartGlobal: function (e) {
          e.sortable,
            !this.isMultiDrag && zr && zr.multiDrag._deselectMultiDrag(),
            Yr.forEach(function (e) {
              e.sortableIndex = lo(e);
            }),
            (Yr = Yr.sort(function (e, t) {
              return e.sortableIndex - t.sortableIndex;
            })),
            (qr = !0);
        },
        dragStarted: function (e) {
          var t = this,
            i = e.sortable;
          if (this.isMultiDrag) {
            if (
              this.options.sort &&
              (i.captureAnimationState(), this.options.animation)
            ) {
              Yr.forEach(function (e) {
                e !== Ur && eo(e, "position", "absolute");
              });
              var n = oo(Ur, !1, !0, !0);
              Yr.forEach(function (e) {
                e !== Ur && go(e, n);
              }),
                (Xr = !0),
                (Gr = !0);
            }
            i.animateAll(function () {
              (Xr = !1),
                (Gr = !1),
                t.options.animation &&
                  Yr.forEach(function (e) {
                    vo(e);
                  }),
                t.options.sort && Zr();
            });
          }
        },
        dragOver: function (e) {
          var t = e.target,
            i = e.completed,
            n = e.cancel;
          Xr && ~Yr.indexOf(t) && (i(!1), n());
        },
        revert: function (e) {
          var t = e.fromSortable,
            i = e.rootEl,
            n = e.sortable,
            o = e.dragRect;
          Yr.length > 1 &&
            (Yr.forEach(function (e) {
              n.addAnimationState({ target: e, rect: Xr ? oo(e) : o }),
                vo(e),
                (e.fromRect = o),
                t.removeAnimationState(e);
            }),
            (Xr = !1),
            (function (e, t) {
              Yr.forEach(function (i, n) {
                var o = t.children[i.sortableIndex + (e ? Number(n) : 0)];
                o ? t.insertBefore(i, o) : t.appendChild(i);
              });
            })(!this.options.removeCloneOnHide, i));
        },
        dragOverCompleted: function (e) {
          var t = e.sortable,
            i = e.isOwner,
            n = e.insertion,
            o = e.activeSortable,
            r = e.parentEl,
            a = e.putSortable,
            s = this.options;
          if (n) {
            if (
              (i && o._hideClone(),
              (Gr = !1),
              s.animation &&
                Yr.length > 1 &&
                (Xr || (!i && !o.options.sort && !a)))
            ) {
              var d = oo(Ur, !1, !0, !0);
              Yr.forEach(function (e) {
                e !== Ur && (go(e, d), r.appendChild(e));
              }),
                (Xr = !0);
            }
            if (!i)
              if ((Xr || Zr(), Yr.length > 1)) {
                var l = jr;
                o._showClone(t),
                  o.options.animation &&
                    !jr &&
                    l &&
                    Wr.forEach(function (e) {
                      o.addAnimationState({ target: e, rect: Vr }),
                        (e.fromRect = Vr),
                        (e.thisAnimationDuration = null);
                    });
              } else o._showClone(t);
          }
        },
        dragOverAnimationCapture: function (e) {
          var t = e.dragRect,
            i = e.isOwner,
            n = e.activeSortable;
          if (
            (Yr.forEach(function (e) {
              e.thisAnimationDuration = null;
            }),
            n.options.animation && !i && n.multiDrag.isMultiDrag)
          ) {
            Vr = kn({}, t);
            var o = to(Ur, !0);
            (Vr.top -= o.f), (Vr.left -= o.e);
          }
        },
        dragOverAnimationComplete: function () {
          Xr && ((Xr = !1), Zr());
        },
        drop: function (e) {
          var t = e.originalEvent,
            i = e.rootEl,
            n = e.parentEl,
            o = e.sortable,
            r = e.dispatchSortableEvent,
            a = e.oldIndex,
            s = e.putSortable,
            d = s || this.sortable;
          if (t) {
            var l = this.options,
              c = n.children;
            if (!qr)
              if (
                (l.multiDragKey &&
                  !this.multiDragKeyDown &&
                  this._deselectMultiDrag(),
                Jn(Ur, l.selectedClass, !~Yr.indexOf(Ur)),
                ~Yr.indexOf(Ur))
              )
                Yr.splice(Yr.indexOf(Ur), 1),
                  (Hr = null),
                  wo({
                    sortable: o,
                    rootEl: i,
                    name: "deselect",
                    targetEl: Ur,
                    originalEvent: t,
                  });
              else {
                if (
                  (Yr.push(Ur),
                  wo({
                    sortable: o,
                    rootEl: i,
                    name: "select",
                    targetEl: Ur,
                    originalEvent: t,
                  }),
                  t.shiftKey && Hr && o.el.contains(Hr))
                ) {
                  var p,
                    u,
                    h = lo(Hr),
                    m = lo(Ur);
                  if (~h && ~m && h !== m)
                    for (
                      m > h ? ((u = h), (p = m)) : ((u = m), (p = h + 1));
                      u < p;
                      u++
                    )
                      ~Yr.indexOf(c[u]) ||
                        (Jn(c[u], l.selectedClass, !0),
                        Yr.push(c[u]),
                        wo({
                          sortable: o,
                          rootEl: i,
                          name: "select",
                          targetEl: c[u],
                          originalEvent: t,
                        }));
                } else Hr = Ur;
                zr = d;
              }
            if (qr && this.isMultiDrag) {
              if (
                ((Xr = !1), (n[bo].options.sort || n !== i) && Yr.length > 1)
              ) {
                var f = oo(Ur),
                  g = lo(Ur, ":not(." + this.options.selectedClass + ")");
                if (
                  (!Gr && l.animation && (Ur.thisAnimationDuration = null),
                  d.captureAnimationState(),
                  !Gr &&
                    (l.animation &&
                      ((Ur.fromRect = f),
                      Yr.forEach(function (e) {
                        if (((e.thisAnimationDuration = null), e !== Ur)) {
                          var t = Xr ? oo(e) : f;
                          (e.fromRect = t),
                            d.addAnimationState({ target: e, rect: t });
                        }
                      })),
                    Zr(),
                    Yr.forEach(function (e) {
                      c[g] ? n.insertBefore(e, c[g]) : n.appendChild(e), g++;
                    }),
                    a === lo(Ur)))
                ) {
                  var v = !1;
                  Yr.forEach(function (e) {
                    e.sortableIndex === lo(e) || (v = !0);
                  }),
                    v && r("update");
                }
                Yr.forEach(function (e) {
                  vo(e);
                }),
                  d.animateAll();
              }
              zr = d;
            }
            (i === n || (s && "clone" !== s.lastPutMode)) &&
              Wr.forEach(function (e) {
                e.parentNode && e.parentNode.removeChild(e);
              });
          }
        },
        nullingGlobal: function () {
          (this.isMultiDrag = qr = !1), (Wr.length = 0);
        },
        destroyGlobal: function () {
          this._deselectMultiDrag(),
            Gn(document, "pointerup", this._deselectMultiDrag),
            Gn(document, "mouseup", this._deselectMultiDrag),
            Gn(document, "touchend", this._deselectMultiDrag),
            Gn(document, "keydown", this._checkKeyDown),
            Gn(document, "keyup", this._checkKeyUp);
        },
        _deselectMultiDrag: function (e) {
          if (
            !(
              (void 0 !== qr && qr) ||
              zr !== this.sortable ||
              (e &&
                Kn(e.target, this.options.draggable, this.sortable.el, !1)) ||
              (e && 0 !== e.button)
            )
          )
            for (; Yr.length; ) {
              var t = Yr[0];
              Jn(t, this.options.selectedClass, !1),
                Yr.shift(),
                wo({
                  sortable: this.sortable,
                  rootEl: this.sortable.el,
                  name: "deselect",
                  targetEl: t,
                  originalEvent: e,
                });
            }
        },
        _checkKeyDown: function (e) {
          e.key === this.options.multiDragKey && (this.multiDragKeyDown = !0);
        },
        _checkKeyUp: function (e) {
          e.key === this.options.multiDragKey && (this.multiDragKeyDown = !1);
        },
      }),
      kn(e, {
        pluginName: "multiDrag",
        utils: {
          select: function (e) {
            var t = e.parentNode[bo];
            t &&
              t.options.multiDrag &&
              !~Yr.indexOf(e) &&
              (zr && zr !== t && (zr.multiDrag._deselectMultiDrag(), (zr = t)),
              Jn(e, t.options.selectedClass, !0),
              Yr.push(e));
          },
          deselect: function (e) {
            var t = e.parentNode[bo],
              i = Yr.indexOf(e);
            t &&
              t.options.multiDrag &&
              ~i &&
              (Jn(e, t.options.selectedClass, !1), Yr.splice(i, 1));
          },
        },
        eventProperties: function () {
          var e = this,
            t = [],
            i = [];
          return (
            Yr.forEach(function (n) {
              var o;
              t.push({ multiDragElement: n, index: n.sortableIndex }),
                (o =
                  Xr && n !== Ur
                    ? -1
                    : Xr
                    ? lo(n, ":not(." + e.options.selectedClass + ")")
                    : lo(n)),
                i.push({ multiDragElement: n, index: o });
            }),
            {
              items: Ln(Yr),
              clones: [].concat(Wr),
              oldIndicies: t,
              newIndicies: i,
            }
          );
        },
        optionListeners: {
          multiDragKey: function (e) {
            return (
              "ctrl" === (e = e.toLowerCase())
                ? (e = "Control")
                : e.length > 1 && (e = e.charAt(0).toUpperCase() + e.substr(1)),
              e
            );
          },
        },
      })
    );
  },
  OnSpill: Br,
  Sortable: vr,
  Swap: function () {
    function e() {
      this.defaults = { swapClass: "sortable-swap-highlight" };
    }
    return (
      (e.prototype = {
        dragStart: function (e) {
          var t = e.dragEl;
          Pr = t;
        },
        dragOverValid: function (e) {
          var t = e.completed,
            i = e.target,
            n = e.onMove,
            o = e.activeSortable,
            r = e.changed,
            a = e.cancel;
          if (o.options.swap) {
            var s = this.sortable.el,
              d = this.options;
            if (i && i !== s) {
              var l = Pr;
              !1 !== n(i) ? (Jn(i, d.swapClass, !0), (Pr = i)) : (Pr = null),
                l && l !== Pr && Jn(l, d.swapClass, !1);
            }
            r(), t(!0), a();
          }
        },
        drop: function (e) {
          var t = e.activeSortable,
            i = e.putSortable,
            n = e.dragEl,
            o = i || this.sortable,
            r = this.options;
          Pr && Jn(Pr, r.swapClass, !1),
            Pr &&
              (r.swap || (i && i.options.swap)) &&
              n !== Pr &&
              (o.captureAnimationState(),
              o !== t && t.captureAnimationState(),
              (function (e, t) {
                var i,
                  n,
                  o = e.parentNode,
                  r = t.parentNode;
                if (!o || !r || o.isEqualNode(t) || r.isEqualNode(e)) return;
                (i = lo(e)), (n = lo(t)), o.isEqualNode(r) && i < n && n++;
                o.insertBefore(t, o.children[i]),
                  r.insertBefore(e, r.children[n]);
              })(n, Pr),
              o.animateAll(),
              o !== t && t.animateAll());
        },
        nulling: function () {
          Pr = null;
        },
      }),
      kn(e, {
        pluginName: "swap",
        eventProperties: function () {
          return { swapItem: Pr };
        },
      })
    );
  },
  default: vr,
});
export { Ke as EnturCard };
