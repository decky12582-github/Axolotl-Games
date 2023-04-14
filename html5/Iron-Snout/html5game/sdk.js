! function(t) {
    var n = {};

    function e(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    e.m = t, e.c = n, e.d = function(t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: i
        })
    }, e.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, e.t = function(t, n) {
        if (1 & n && (t = e(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (e.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t)
            for (var r in t) e.d(i, r, function(n) {
                return t[n]
            }.bind(null, r));
        return i
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, e.p = "", e(e.s = 108)
}([function(t, n, e) {
    (function(n) {
        var e = function(t) {
            return t && t.Math == Math && t
        };
        t.exports = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof n && n) || Function("return this")()
    }).call(this, e(68))
}, function(t, n, e) {
    var i = e(0),
        r = e(41),
        o = e(3),
        a = e(42),
        s = e(49),
        d = e(78),
        c = r("wks"),
        A = i.Symbol,
        u = d ? A : a;
    t.exports = function(t) {
        return o(c, t) || (s && o(A, t) ? c[t] = A[t] : c[t] = u("Symbol." + t)), c[t]
    }
}, function(t, n) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, n) {
    var e = {}.hasOwnProperty;
    t.exports = function(t, n) {
        return e.call(t, n)
    }
}, function(t, n, e) {
    var i = e(7),
        r = e(10),
        o = e(18);
    t.exports = i ? function(t, n, e) {
        return r.f(t, n, o(1, e))
    } : function(t, n, e) {
        return t[n] = e, t
    }
}, function(t, n, e) {
    var i = e(8);
    t.exports = function(t) {
        if (!i(t)) throw TypeError(String(t) + " is not an object");
        return t
    }
}, function(t, n, e) {
    var i = e(0),
        r = e(22).f,
        o = e(4),
        a = e(11),
        s = e(25),
        d = e(70),
        c = e(46);
    t.exports = function(t, n) {
        var e, A, u, l, m, p = t.target,
            f = t.global,
            g = t.stat;
        if (e = f ? i : g ? i[p] || s(p, {}) : (i[p] || {}).prototype)
            for (A in n) {
                if (l = n[A], u = t.noTargetGet ? (m = r(e, A)) && m.value : e[A], !c(f ? A : p + (g ? "." : "#") + A, t.forced) && void 0 !== u) {
                    if (typeof l == typeof u) continue;
                    d(l, u)
                }(t.sham || u && u.sham) && o(l, "sham", !0), a(e, A, l, t)
            }
    }
}, function(t, n, e) {
    var i = e(2);
    t.exports = !i((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, n) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, n, e) {
    var i = e(29),
        r = e(0),
        o = function(t) {
            return "function" == typeof t ? t : void 0
        };
    t.exports = function(t, n) {
        return arguments.length < 2 ? o(i[t]) || o(r[t]) : i[t] && i[t][n] || r[t] && r[t][n]
    }
}, function(t, n, e) {
    var i = e(7),
        r = e(39),
        o = e(5),
        a = e(38),
        s = Object.defineProperty;
    n.f = i ? s : function(t, n, e) {
        if (o(t), n = a(n, !0), o(e), r) try {
            return s(t, n, e)
        } catch (t) {}
        if ("get" in e || "set" in e) throw TypeError("Accessors not supported");
        return "value" in e && (t[n] = e.value), t
    }
}, function(t, n, e) {
    var i = e(0),
        r = e(4),
        o = e(3),
        a = e(25),
        s = e(26),
        d = e(14),
        c = d.get,
        A = d.enforce,
        u = String(String).split("String");
    (t.exports = function(t, n, e, s) {
        var d = !!s && !!s.unsafe,
            c = !!s && !!s.enumerable,
            l = !!s && !!s.noTargetGet;
        "function" == typeof e && ("string" != typeof n || o(e, "name") || r(e, "name", n), A(e).source = u.join("string" == typeof n ? n : "")), t !== i ? (d ? !l && t[n] && (c = !0) : delete t[n], c ? t[n] = e : r(t, n, e)) : c ? t[n] = e : a(n, e)
    })(Function.prototype, "toString", (function() {
        return "function" == typeof this && c(this).source || s(this)
    }))
}, function(t, n) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        return t
    }
}, function(t, n) {
    var e = {}.toString;
    t.exports = function(t) {
        return e.call(t).slice(8, -1)
    }
}, function(t, n, e) {
    var i, r, o, a = e(69),
        s = e(0),
        d = e(8),
        c = e(4),
        A = e(3),
        u = e(27),
        l = e(28),
        m = s.WeakMap;
    if (a) {
        var p = new m,
            f = p.get,
            g = p.has,
            h = p.set;
        i = function(t, n) {
            return h.call(p, t, n), n
        }, r = function(t) {
            return f.call(p, t) || {}
        }, o = function(t) {
            return g.call(p, t)
        }
    } else {
        var w = u("state");
        l[w] = !0, i = function(t, n) {
            return c(t, w, n), n
        }, r = function(t) {
            return A(t, w) ? t[w] : {}
        }, o = function(t) {
            return A(t, w)
        }
    }
    t.exports = {
        set: i,
        get: r,
        has: o,
        enforce: function(t) {
            return o(t) ? r(t) : i(t, {})
        },
        getterFor: function(t) {
            return function(n) {
                var e;
                if (!d(n) || (e = r(n)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return e
            }
        }
    }
}, function(t, n) {
    t.exports = !1
}, function(t, n) {
    t.exports = {}
}, function(t, n, e) {
    "use strict";
    var i = e(12),
        r = function(t) {
            var n, e;
            this.promise = new t((function(t, i) {
                if (void 0 !== n || void 0 !== e) throw TypeError("Bad Promise constructor");
                n = t, e = i
            })), this.resolve = i(n), this.reject = i(e)
        };
    t.exports.f = function(t) {
        return new r(t)
    }
}, function(t, n) {
    t.exports = function(t, n) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: n
        }
    }
}, function(t, n, e) {
    var i = e(37),
        r = e(23);
    t.exports = function(t) {
        return i(r(t))
    }
}, function(t, n, e) {
    var i = e(5),
        r = e(94),
        o = e(44),
        a = e(56),
        s = e(95),
        d = e(96),
        c = function(t, n) {
            this.stopped = t, this.result = n
        };
    (t.exports = function(t, n, e, A, u) {
        var l, m, p, f, g, h, w, y = a(n, e, A ? 2 : 1);
        if (u) l = t;
        else {
            if ("function" != typeof(m = s(t))) throw TypeError("Target is not iterable");
            if (r(m)) {
                for (p = 0, f = o(t.length); f > p; p++)
                    if ((g = A ? y(i(w = t[p])[0], w[1]) : y(t[p])) && g instanceof c) return g;
                return new c(!1)
            }
            l = m.call(t)
        }
        for (h = l.next; !(w = h.call(l)).done;)
            if ("object" == typeof(g = d(l, y, w.value, A)) && g && g instanceof c) return g;
        return new c(!1)
    }).stop = function(t) {
        return new c(!0, t)
    }
}, function(t, n) {
    t.exports = function(t) {
        try {
            return {
                error: !1,
                value: t()
            }
        } catch (t) {
            return {
                error: !0,
                value: t
            }
        }
    }
}, function(t, n, e) {
    var i = e(7),
        r = e(36),
        o = e(18),
        a = e(19),
        s = e(38),
        d = e(3),
        c = e(39),
        A = Object.getOwnPropertyDescriptor;
    n.f = i ? A : function(t, n) {
        if (t = a(t), n = s(n, !0), c) try {
            return A(t, n)
        } catch (t) {}
        if (d(t, n)) return o(!r.f.call(t, n), t[n])
    }
}, function(t, n) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t
    }
}, function(t, n, e) {
    var i = e(0),
        r = e(8),
        o = i.document,
        a = r(o) && r(o.createElement);
    t.exports = function(t) {
        return a ? o.createElement(t) : {}
    }
}, function(t, n, e) {
    var i = e(0),
        r = e(4);
    t.exports = function(t, n) {
        try {
            r(i, t, n)
        } catch (e) {
            i[t] = n
        }
        return n
    }
}, function(t, n, e) {
    var i = e(40),
        r = Function.toString;
    "function" != typeof i.inspectSource && (i.inspectSource = function(t) {
        return r.call(t)
    }), t.exports = i.inspectSource
}, function(t, n, e) {
    var i = e(41),
        r = e(42),
        o = i("keys");
    t.exports = function(t) {
        return o[t] || (o[t] = r(t))
    }
}, function(t, n) {
    t.exports = {}
}, function(t, n, e) {
    var i = e(0);
    t.exports = i
}, function(t, n) {
    var e = Math.ceil,
        i = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? i : e)(t)
    }
}, function(t, n) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, n, e) {
    var i = {};
    i[e(1)("toStringTag")] = "z", t.exports = "[object z]" === String(i)
}, function(t, n, e) {
    var i = e(3),
        r = e(48),
        o = e(27),
        a = e(83),
        s = o("IE_PROTO"),
        d = Object.prototype;
    t.exports = a ? Object.getPrototypeOf : function(t) {
        return t = r(t), i(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? d : null
    }
}, function(t, n, e) {
    var i = e(5),
        r = e(84),
        o = e(31),
        a = e(28),
        s = e(53),
        d = e(24),
        c = e(27)("IE_PROTO"),
        A = function() {},
        u = function() {
            var t, n = d("iframe"),
                e = o.length;
            for (n.style.display = "none", s.appendChild(n), n.src = String("javascript:"), (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; e--;) delete u.prototype[o[e]];
            return u()
        };
    t.exports = Object.create || function(t, n) {
        var e;
        return null !== t ? (A.prototype = i(t), e = new A, A.prototype = null, e[c] = t) : e = u(), void 0 === n ? e : r(e, n)
    }, a[c] = !0
}, function(t, n, e) {
    var i = e(10).f,
        r = e(3),
        o = e(1)("toStringTag");
    t.exports = function(t, n, e) {
        t && !r(t = e ? t : t.prototype, o) && i(t, o, {
            configurable: !0,
            value: n
        })
    }
}, function(t, n, e) {
    "use strict";
    var i = {}.propertyIsEnumerable,
        r = Object.getOwnPropertyDescriptor,
        o = r && !i.call({
            1: 2
        }, 1);
    n.f = o ? function(t) {
        var n = r(this, t);
        return !!n && n.enumerable
    } : i
}, function(t, n, e) {
    var i = e(2),
        r = e(13),
        o = "".split;
    t.exports = i((function() {
        return !Object("z").propertyIsEnumerable(0)
    })) ? function(t) {
        return "String" == r(t) ? o.call(t, "") : Object(t)
    } : Object
}, function(t, n, e) {
    var i = e(8);
    t.exports = function(t, n) {
        if (!i(t)) return t;
        var e, r;
        if (n && "function" == typeof(e = t.toString) && !i(r = e.call(t))) return r;
        if ("function" == typeof(e = t.valueOf) && !i(r = e.call(t))) return r;
        if (!n && "function" == typeof(e = t.toString) && !i(r = e.call(t))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, n, e) {
    var i = e(7),
        r = e(2),
        o = e(24);
    t.exports = !i && !r((function() {
        return 7 != Object.defineProperty(o("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, n, e) {
    var i = e(0),
        r = e(25),
        o = i["__core-js_shared__"] || r("__core-js_shared__", {});
    t.exports = o
}, function(t, n, e) {
    var i = e(15),
        r = e(40);
    (t.exports = function(t, n) {
        return r[t] || (r[t] = void 0 !== n ? n : {})
    })("versions", []).push({
        version: "3.5.0",
        mode: i ? "pure" : "global",
        copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, n) {
    var e = 0,
        i = Math.random();
    t.exports = function(t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++e + i).toString(36)
    }
}, function(t, n, e) {
    var i = e(3),
        r = e(19),
        o = e(73).indexOf,
        a = e(28);
    t.exports = function(t, n) {
        var e, s = r(t),
            d = 0,
            c = [];
        for (e in s) !i(a, e) && i(s, e) && c.push(e);
        for (; n.length > d;) i(s, e = n[d++]) && (~o(c, e) || c.push(e));
        return c
    }
}, function(t, n, e) {
    var i = e(30),
        r = Math.min;
    t.exports = function(t) {
        return t > 0 ? r(i(t), 9007199254740991) : 0
    }
}, function(t, n) {
    n.f = Object.getOwnPropertySymbols
}, function(t, n, e) {
    var i = e(2),
        r = /#|\.prototype\./,
        o = function(t, n) {
            var e = s[a(t)];
            return e == c || e != d && ("function" == typeof n ? i(n) : !!n)
        },
        a = o.normalize = function(t) {
            return String(t).replace(r, ".").toLowerCase()
        },
        s = o.data = {},
        d = o.NATIVE = "N",
        c = o.POLYFILL = "P";
    t.exports = o
}, function(t, n, e) {
    var i = e(43),
        r = e(31);
    t.exports = Object.keys || function(t) {
        return i(t, r)
    }
}, function(t, n, e) {
    var i = e(23);
    t.exports = function(t) {
        return Object(i(t))
    }
}, function(t, n, e) {
    var i = e(2);
    t.exports = !!Object.getOwnPropertySymbols && !i((function() {
        return !String(Symbol())
    }))
}, function(t, n, e) {
    var i = e(32),
        r = e(13),
        o = e(1)("toStringTag"),
        a = "Arguments" == r(function() {
            return arguments
        }());
    t.exports = i ? r : function(t) {
        var n, e, i;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = function(t, n) {
            try {
                return t[n]
            } catch (t) {}
        }(n = Object(t), o)) ? e : a ? r(n) : "Object" == (i = r(n)) && "function" == typeof n.callee ? "Arguments" : i
    }
}, function(t, n, e) {
    "use strict";
    var i = e(6),
        r = e(82),
        o = e(33),
        a = e(54),
        s = e(35),
        d = e(4),
        c = e(11),
        A = e(1),
        u = e(15),
        l = e(16),
        m = e(52),
        p = m.IteratorPrototype,
        f = m.BUGGY_SAFARI_ITERATORS,
        g = A("iterator"),
        h = function() {
            return this
        };
    t.exports = function(t, n, e, A, m, w, y) {
        r(e, n, A);
        var k, b, v, S = function(t) {
                if (t === m && C) return C;
                if (!f && t in x) return x[t];
                switch (t) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function() {
                            return new e(this, t)
                        }
                }
                return function() {
                    return new e(this)
                }
            },
            E = n + " Iterator",
            z = !1,
            x = t.prototype,
            T = x[g] || x["@@iterator"] || m && x[m],
            C = !f && T || S(m),
            B = "Array" == n && x.entries || T;
        if (B && (k = o(B.call(new t)), p !== Object.prototype && k.next && (u || o(k) === p || (a ? a(k, p) : "function" != typeof k[g] && d(k, g, h)), s(k, E, !0, !0), u && (l[E] = h))), "values" == m && T && "values" !== T.name && (z = !0, C = function() {
                return T.call(this)
            }), u && !y || x[g] === C || d(x, g, C), l[n] = C, m)
            if (b = {
                    values: S("values"),
                    keys: w ? C : S("keys"),
                    entries: S("entries")
                }, y)
                for (v in b) !f && !z && v in x || c(x, v, b[v]);
            else i({
                target: n,
                proto: !0,
                forced: f || z
            }, b);
        return b
    }
}, function(t, n, e) {
    "use strict";
    var i, r, o, a = e(33),
        s = e(4),
        d = e(3),
        c = e(1),
        A = e(15),
        u = c("iterator"),
        l = !1;
    [].keys && ("next" in (o = [].keys()) ? (r = a(a(o))) !== Object.prototype && (i = r) : l = !0), null == i && (i = {}), A || d(i, u) || s(i, u, (function() {
        return this
    })), t.exports = {
        IteratorPrototype: i,
        BUGGY_SAFARI_ITERATORS: l
    }
}, function(t, n, e) {
    var i = e(9);
    t.exports = i("document", "documentElement")
}, function(t, n, e) {
    var i = e(5),
        r = e(85);
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var t, n = !1,
            e = {};
        try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), n = e instanceof Array
        } catch (t) {}
        return function(e, o) {
            return i(e), r(o), n ? t.call(e, o) : e.__proto__ = o, e
        }
    }() : void 0)
}, function(t, n, e) {
    var i = e(0);
    t.exports = i.Promise
}, function(t, n, e) {
    var i = e(12);
    t.exports = function(t, n, e) {
        if (i(t), void 0 === n) return t;
        switch (e) {
            case 0:
                return function() {
                    return t.call(n)
                };
            case 1:
                return function(e) {
                    return t.call(n, e)
                };
            case 2:
                return function(e, i) {
                    return t.call(n, e, i)
                };
            case 3:
                return function(e, i, r) {
                    return t.call(n, e, i, r)
                }
        }
        return function() {
            return t.apply(n, arguments)
        }
    }
}, function(t, n, e) {
    var i = e(5),
        r = e(12),
        o = e(1)("species");
    t.exports = function(t, n) {
        var e, a = i(t).constructor;
        return void 0 === a || null == (e = i(a)[o]) ? n : r(e)
    }
}, function(t, n, e) {
    var i, r, o, a = e(0),
        s = e(2),
        d = e(13),
        c = e(56),
        A = e(53),
        u = e(24),
        l = e(59),
        m = a.location,
        p = a.setImmediate,
        f = a.clearImmediate,
        g = a.process,
        h = a.MessageChannel,
        w = a.Dispatch,
        y = 0,
        k = {},
        b = function(t) {
            if (k.hasOwnProperty(t)) {
                var n = k[t];
                delete k[t], n()
            }
        },
        v = function(t) {
            return function() {
                b(t)
            }
        },
        S = function(t) {
            b(t.data)
        },
        E = function(t) {
            a.postMessage(t + "", m.protocol + "//" + m.host)
        };
    p && f || (p = function(t) {
        for (var n = [], e = 1; arguments.length > e;) n.push(arguments[e++]);
        return k[++y] = function() {
            ("function" == typeof t ? t : Function(t)).apply(void 0, n)
        }, i(y), y
    }, f = function(t) {
        delete k[t]
    }, "process" == d(g) ? i = function(t) {
        g.nextTick(v(t))
    } : w && w.now ? i = function(t) {
        w.now(v(t))
    } : h && !l ? (o = (r = new h).port2, r.port1.onmessage = S, i = c(o.postMessage, o, 1)) : !a.addEventListener || "function" != typeof postMessage || a.importScripts || s(E) ? i = "onreadystatechange" in u("script") ? function(t) {
        A.appendChild(u("script")).onreadystatechange = function() {
            A.removeChild(this), b(t)
        }
    } : function(t) {
        setTimeout(v(t), 0)
    } : (i = E, a.addEventListener("message", S, !1))), t.exports = {
        set: p,
        clear: f
    }
}, function(t, n, e) {
    var i = e(60);
    t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(i)
}, function(t, n, e) {
    var i = e(9);
    t.exports = i("navigator", "userAgent") || ""
}, function(t, n, e) {
    var i = e(5),
        r = e(8),
        o = e(17);
    t.exports = function(t, n) {
        if (i(t), r(n) && n.constructor === t) return n;
        var e = o.f(t);
        return (0, e.resolve)(n), e.promise
    }
}, function(t, n, e) {
    "use strict";
    var i = e(6),
        r = e(12),
        o = e(17),
        a = e(21),
        s = e(20);
    i({
        target: "Promise",
        stat: !0
    }, {
        allSettled: function(t) {
            var n = this,
                e = o.f(n),
                i = e.resolve,
                d = e.reject,
                c = a((function() {
                    var e = r(n.resolve),
                        o = [],
                        a = 0,
                        d = 1;
                    s(t, (function(t) {
                        var r = a++,
                            s = !1;
                        o.push(void 0), d++, e.call(n, t).then((function(t) {
                            s || (s = !0, o[r] = {
                                status: "fulfilled",
                                value: t
                            }, --d || i(o))
                        }), (function(t) {
                            s || (s = !0, o[r] = {
                                status: "rejected",
                                reason: t
                            }, --d || i(o))
                        }))
                    })), --d || i(o)
                }));
            return c.error && d(c.value), e.promise
        }
    })
}, function(t, n, e) {
    var i = e(66);
    t.exports = i
}, function(t, n, e) {
    var i = e(76);
    e(102), e(103), e(104), e(105), t.exports = i
}, function(t) {
    t.exports = JSON.parse('{"a":""}')
}, function(t, n, e) {
    e(67);
    var i = e(29);
    t.exports = i.Object.assign
}, function(t, n, e) {
    var i = e(6),
        r = e(75);
    i({
        target: "Object",
        stat: !0,
        forced: Object.assign !== r
    }, {
        assign: r
    })
}, function(t, n) {
    var e;
    e = function() {
        return this
    }();
    try {
        e = e || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (e = window)
    }
    t.exports = e
}, function(t, n, e) {
    var i = e(0),
        r = e(26),
        o = i.WeakMap;
    t.exports = "function" == typeof o && /native code/.test(r(o))
}, function(t, n, e) {
    var i = e(3),
        r = e(71),
        o = e(22),
        a = e(10);
    t.exports = function(t, n) {
        for (var e = r(n), s = a.f, d = o.f, c = 0; c < e.length; c++) {
            var A = e[c];
            i(t, A) || s(t, A, d(n, A))
        }
    }
}, function(t, n, e) {
    var i = e(9),
        r = e(72),
        o = e(45),
        a = e(5);
    t.exports = i("Reflect", "ownKeys") || function(t) {
        var n = r.f(a(t)),
            e = o.f;
        return e ? n.concat(e(t)) : n
    }
}, function(t, n, e) {
    var i = e(43),
        r = e(31).concat("length", "prototype");
    n.f = Object.getOwnPropertyNames || function(t) {
        return i(t, r)
    }
}, function(t, n, e) {
    var i = e(19),
        r = e(44),
        o = e(74),
        a = function(t) {
            return function(n, e, a) {
                var s, d = i(n),
                    c = r(d.length),
                    A = o(a, c);
                if (t && e != e) {
                    for (; c > A;)
                        if ((s = d[A++]) != s) return !0
                } else
                    for (; c > A; A++)
                        if ((t || A in d) && d[A] === e) return t || A || 0; return !t && -1
            }
        };
    t.exports = {
        includes: a(!0),
        indexOf: a(!1)
    }
}, function(t, n, e) {
    var i = e(30),
        r = Math.max,
        o = Math.min;
    t.exports = function(t, n) {
        var e = i(t);
        return e < 0 ? r(e + n, 0) : o(e, n)
    }
}, function(t, n, e) {
    "use strict";
    var i = e(7),
        r = e(2),
        o = e(47),
        a = e(45),
        s = e(36),
        d = e(48),
        c = e(37),
        A = Object.assign,
        u = Object.defineProperty;
    t.exports = !A || r((function() {
        if (i && 1 !== A({
                b: 1
            }, A(u({}, "a", {
                enumerable: !0,
                get: function() {
                    u(this, "b", {
                        value: 3,
                        enumerable: !1
                    })
                }
            }), {
                b: 2
            })).b) return !0;
        var t = {},
            n = {},
            e = Symbol();
        return t[e] = 7, "abcdefghijklmnopqrst".split("").forEach((function(t) {
            n[t] = t
        })), 7 != A({}, t)[e] || "abcdefghijklmnopqrst" != o(A({}, n)).join("")
    })) ? function(t, n) {
        for (var e = d(t), r = arguments.length, A = 1, u = a.f, l = s.f; r > A;)
            for (var m, p = c(arguments[A++]), f = u ? o(p).concat(u(p)) : o(p), g = f.length, h = 0; g > h;) m = f[h++], i && !l.call(p, m) || (e[m] = p[m]);
        return e
    } : A
}, function(t, n, e) {
    e(77), e(80), e(86), e(90), e(62), e(101);
    var i = e(29);
    t.exports = i.Promise
}, function(t, n, e) {
    var i = e(32),
        r = e(11),
        o = e(79);
    i || r(Object.prototype, "toString", o, {
        unsafe: !0
    })
}, function(t, n, e) {
    var i = e(49);
    t.exports = i && !Symbol.sham && "symbol" == typeof Symbol()
}, function(t, n, e) {
    "use strict";
    var i = e(32),
        r = e(50);
    t.exports = i ? {}.toString : function() {
        return "[object " + r(this) + "]"
    }
}, function(t, n, e) {
    "use strict";
    var i = e(81).charAt,
        r = e(14),
        o = e(51),
        a = r.set,
        s = r.getterFor("String Iterator");
    o(String, "String", (function(t) {
        a(this, {
            type: "String Iterator",
            string: String(t),
            index: 0
        })
    }), (function() {
        var t, n = s(this),
            e = n.string,
            r = n.index;
        return r >= e.length ? {
            value: void 0,
            done: !0
        } : (t = i(e, r), n.index += t.length, {
            value: t,
            done: !1
        })
    }))
}, function(t, n, e) {
    var i = e(30),
        r = e(23),
        o = function(t) {
            return function(n, e) {
                var o, a, s = String(r(n)),
                    d = i(e),
                    c = s.length;
                return d < 0 || d >= c ? t ? "" : void 0 : (o = s.charCodeAt(d)) < 55296 || o > 56319 || d + 1 === c || (a = s.charCodeAt(d + 1)) < 56320 || a > 57343 ? t ? s.charAt(d) : o : t ? s.slice(d, d + 2) : a - 56320 + (o - 55296 << 10) + 65536
            }
        };
    t.exports = {
        codeAt: o(!1),
        charAt: o(!0)
    }
}, function(t, n, e) {
    "use strict";
    var i = e(52).IteratorPrototype,
        r = e(34),
        o = e(18),
        a = e(35),
        s = e(16),
        d = function() {
            return this
        };
    t.exports = function(t, n, e) {
        var c = n + " Iterator";
        return t.prototype = r(i, {
            next: o(1, e)
        }), a(t, c, !1, !0), s[c] = d, t
    }
}, function(t, n, e) {
    var i = e(2);
    t.exports = !i((function() {
        function t() {}
        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    }))
}, function(t, n, e) {
    var i = e(7),
        r = e(10),
        o = e(5),
        a = e(47);
    t.exports = i ? Object.defineProperties : function(t, n) {
        o(t);
        for (var e, i = a(n), s = i.length, d = 0; s > d;) r.f(t, e = i[d++], n[e]);
        return t
    }
}, function(t, n, e) {
    var i = e(8);
    t.exports = function(t) {
        if (!i(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
        return t
    }
}, function(t, n, e) {
    var i = e(0),
        r = e(87),
        o = e(88),
        a = e(4),
        s = e(1),
        d = s("iterator"),
        c = s("toStringTag"),
        A = o.values;
    for (var u in r) {
        var l = i[u],
            m = l && l.prototype;
        if (m) {
            if (m[d] !== A) try {
                a(m, d, A)
            } catch (t) {
                m[d] = A
            }
            if (m[c] || a(m, c, u), r[u])
                for (var p in o)
                    if (m[p] !== o[p]) try {
                        a(m, p, o[p])
                    } catch (t) {
                        m[p] = o[p]
                    }
        }
    }
}, function(t, n) {
    t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
}, function(t, n, e) {
    "use strict";
    var i = e(19),
        r = e(89),
        o = e(16),
        a = e(14),
        s = e(51),
        d = a.set,
        c = a.getterFor("Array Iterator");
    t.exports = s(Array, "Array", (function(t, n) {
        d(this, {
            type: "Array Iterator",
            target: i(t),
            index: 0,
            kind: n
        })
    }), (function() {
        var t = c(this),
            n = t.target,
            e = t.kind,
            i = t.index++;
        return !n || i >= n.length ? (t.target = void 0, {
            value: void 0,
            done: !0
        }) : "keys" == e ? {
            value: i,
            done: !1
        } : "values" == e ? {
            value: n[i],
            done: !1
        } : {
            value: [i, n[i]],
            done: !1
        }
    }), "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
}, function(t, n, e) {
    var i = e(1),
        r = e(34),
        o = e(4),
        a = i("unscopables"),
        s = Array.prototype;
    null == s[a] && o(s, a, r(null)), t.exports = function(t) {
        s[a][t] = !0
    }
}, function(t, n, e) {
    "use strict";
    var i, r, o, a, s = e(6),
        d = e(15),
        c = e(0),
        A = e(9),
        u = e(55),
        l = e(11),
        m = e(91),
        p = e(35),
        f = e(92),
        g = e(8),
        h = e(12),
        w = e(93),
        y = e(13),
        k = e(26),
        b = e(20),
        v = e(97),
        S = e(57),
        E = e(58).set,
        z = e(98),
        x = e(61),
        T = e(99),
        C = e(17),
        B = e(21),
        P = e(14),
        I = e(46),
        _ = e(1),
        D = e(100),
        O = _("species"),
        L = "Promise",
        j = P.get,
        M = P.set,
        R = P.getterFor(L),
        Z = u,
        G = c.TypeError,
        F = c.document,
        Q = c.process,
        N = A("fetch"),
        X = C.f,
        H = X,
        U = "process" == y(Q),
        V = !!(F && F.createEvent && c.dispatchEvent),
        W = I(L, (function() {
            if (!(k(Z) !== String(Z))) {
                if (66 === D) return !0;
                if (!U && "function" != typeof PromiseRejectionEvent) return !0
            }
            if (d && !Z.prototype.finally) return !0;
            if (D >= 51 && /native code/.test(Z)) return !1;
            var t = Z.resolve(1),
                n = function(t) {
                    t((function() {}), (function() {}))
                };
            return (t.constructor = {})[O] = n, !(t.then((function() {})) instanceof n)
        })),
        K = W || !v((function(t) {
            Z.all(t).catch((function() {}))
        })),
        J = function(t) {
            var n;
            return !(!g(t) || "function" != typeof(n = t.then)) && n
        },
        q = function(t, n, e) {
            if (!n.notified) {
                n.notified = !0;
                var i = n.reactions;
                z((function() {
                    for (var r = n.value, o = 1 == n.state, a = 0; i.length > a;) {
                        var s, d, c, A = i[a++],
                            u = o ? A.ok : A.fail,
                            l = A.resolve,
                            m = A.reject,
                            p = A.domain;
                        try {
                            u ? (o || (2 === n.rejection && nt(t, n), n.rejection = 1), !0 === u ? s = r : (p && p.enter(), s = u(r), p && (p.exit(), c = !0)), s === A.promise ? m(G("Promise-chain cycle")) : (d = J(s)) ? d.call(s, l, m) : l(s)) : m(r)
                        } catch (t) {
                            p && !c && p.exit(), m(t)
                        }
                    }
                    n.reactions = [], n.notified = !1, e && !n.rejection && $(t, n)
                }))
            }
        },
        Y = function(t, n, e) {
            var i, r;
            V ? ((i = F.createEvent("Event")).promise = n, i.reason = e, i.initEvent(t, !1, !0), c.dispatchEvent(i)) : i = {
                promise: n,
                reason: e
            }, (r = c["on" + t]) ? r(i) : "unhandledrejection" === t && T("Unhandled promise rejection", e)
        },
        $ = function(t, n) {
            E.call(c, (function() {
                var e, i = n.value;
                if (tt(n) && (e = B((function() {
                        U ? Q.emit("unhandledRejection", i, t) : Y("unhandledrejection", t, i)
                    })), n.rejection = U || tt(n) ? 2 : 1, e.error)) throw e.value
            }))
        },
        tt = function(t) {
            return 1 !== t.rejection && !t.parent
        },
        nt = function(t, n) {
            E.call(c, (function() {
                U ? Q.emit("rejectionHandled", t) : Y("rejectionhandled", t, n.value)
            }))
        },
        et = function(t, n, e, i) {
            return function(r) {
                t(n, e, r, i)
            }
        },
        it = function(t, n, e, i) {
            n.done || (n.done = !0, i && (n = i), n.value = e, n.state = 2, q(t, n, !0))
        },
        rt = function(t, n, e, i) {
            if (!n.done) {
                n.done = !0, i && (n = i);
                try {
                    if (t === e) throw G("Promise can't be resolved itself");
                    var r = J(e);
                    r ? z((function() {
                        var i = {
                            done: !1
                        };
                        try {
                            r.call(e, et(rt, t, i, n), et(it, t, i, n))
                        } catch (e) {
                            it(t, i, e, n)
                        }
                    })) : (n.value = e, n.state = 1, q(t, n, !1))
                } catch (e) {
                    it(t, {
                        done: !1
                    }, e, n)
                }
            }
        };
    W && (Z = function(t) {
        w(this, Z, L), h(t), i.call(this);
        var n = j(this);
        try {
            t(et(rt, this, n), et(it, this, n))
        } catch (t) {
            it(this, n, t)
        }
    }, (i = function(t) {
        M(this, {
            type: L,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = m(Z.prototype, {
        then: function(t, n) {
            var e = R(this),
                i = X(S(this, Z));
            return i.ok = "function" != typeof t || t, i.fail = "function" == typeof n && n, i.domain = U ? Q.domain : void 0, e.parent = !0, e.reactions.push(i), 0 != e.state && q(this, e, !1), i.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), r = function() {
        var t = new i,
            n = j(t);
        this.promise = t, this.resolve = et(rt, t, n), this.reject = et(it, t, n)
    }, C.f = X = function(t) {
        return t === Z || t === o ? new r(t) : H(t)
    }, d || "function" != typeof u || (a = u.prototype.then, l(u.prototype, "then", (function(t, n) {
        var e = this;
        return new Z((function(t, n) {
            a.call(e, t, n)
        })).then(t, n)
    }), {
        unsafe: !0
    }), "function" == typeof N && s({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(t) {
            return x(Z, N.apply(c, arguments))
        }
    }))), s({
        global: !0,
        wrap: !0,
        forced: W
    }, {
        Promise: Z
    }), p(Z, L, !1, !0), f(L), o = A(L), s({
        target: L,
        stat: !0,
        forced: W
    }, {
        reject: function(t) {
            var n = X(this);
            return n.reject.call(void 0, t), n.promise
        }
    }), s({
        target: L,
        stat: !0,
        forced: d || W
    }, {
        resolve: function(t) {
            return x(d && this === o ? Z : this, t)
        }
    }), s({
        target: L,
        stat: !0,
        forced: K
    }, {
        all: function(t) {
            var n = this,
                e = X(n),
                i = e.resolve,
                r = e.reject,
                o = B((function() {
                    var e = h(n.resolve),
                        o = [],
                        a = 0,
                        s = 1;
                    b(t, (function(t) {
                        var d = a++,
                            c = !1;
                        o.push(void 0), s++, e.call(n, t).then((function(t) {
                            c || (c = !0, o[d] = t, --s || i(o))
                        }), r)
                    })), --s || i(o)
                }));
            return o.error && r(o.value), e.promise
        },
        race: function(t) {
            var n = this,
                e = X(n),
                i = e.reject,
                r = B((function() {
                    var r = h(n.resolve);
                    b(t, (function(t) {
                        r.call(n, t).then(e.resolve, i)
                    }))
                }));
            return r.error && i(r.value), e.promise
        }
    })
}, function(t, n, e) {
    var i = e(11);
    t.exports = function(t, n, e) {
        for (var r in n) i(t, r, n[r], e);
        return t
    }
}, function(t, n, e) {
    "use strict";
    var i = e(9),
        r = e(10),
        o = e(1),
        a = e(7),
        s = o("species");
    t.exports = function(t) {
        var n = i(t),
            e = r.f;
        a && n && !n[s] && e(n, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, n) {
    t.exports = function(t, n, e) {
        if (!(t instanceof n)) throw TypeError("Incorrect " + (e ? e + " " : "") + "invocation");
        return t
    }
}, function(t, n, e) {
    var i = e(1),
        r = e(16),
        o = i("iterator"),
        a = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (r.Array === t || a[o] === t)
    }
}, function(t, n, e) {
    var i = e(50),
        r = e(16),
        o = e(1)("iterator");
    t.exports = function(t) {
        if (null != t) return t[o] || t["@@iterator"] || r[i(t)]
    }
}, function(t, n, e) {
    var i = e(5);
    t.exports = function(t, n, e, r) {
        try {
            return r ? n(i(e)[0], e[1]) : n(e)
        } catch (n) {
            var o = t.return;
            throw void 0 !== o && i(o.call(t)), n
        }
    }
}, function(t, n, e) {
    var i = e(1)("iterator"),
        r = !1;
    try {
        var o = 0,
            a = {
                next: function() {
                    return {
                        done: !!o++
                    }
                },
                return: function() {
                    r = !0
                }
            };
        a[i] = function() {
            return this
        }, Array.from(a, (function() {
            throw 2
        }))
    } catch (t) {}
    t.exports = function(t, n) {
        if (!n && !r) return !1;
        var e = !1;
        try {
            var o = {};
            o[i] = function() {
                return {
                    next: function() {
                        return {
                            done: e = !0
                        }
                    }
                }
            }, t(o)
        } catch (t) {}
        return e
    }
}, function(t, n, e) {
    var i, r, o, a, s, d, c, A, u = e(0),
        l = e(22).f,
        m = e(13),
        p = e(58).set,
        f = e(59),
        g = u.MutationObserver || u.WebKitMutationObserver,
        h = u.process,
        w = u.Promise,
        y = "process" == m(h),
        k = l(u, "queueMicrotask"),
        b = k && k.value;
    b || (i = function() {
        var t, n;
        for (y && (t = h.domain) && t.exit(); r;) {
            n = r.fn, r = r.next;
            try {
                n()
            } catch (t) {
                throw r ? a() : o = void 0, t
            }
        }
        o = void 0, t && t.enter()
    }, y ? a = function() {
        h.nextTick(i)
    } : g && !f ? (s = !0, d = document.createTextNode(""), new g(i).observe(d, {
        characterData: !0
    }), a = function() {
        d.data = s = !s
    }) : w && w.resolve ? (c = w.resolve(void 0), A = c.then, a = function() {
        A.call(c, i)
    }) : a = function() {
        p.call(u, i)
    }), t.exports = b || function(t) {
        var n = {
            fn: t,
            next: void 0
        };
        o && (o.next = n), r || (r = n, a()), o = n
    }
}, function(t, n, e) {
    var i = e(0);
    t.exports = function(t, n) {
        var e = i.console;
        e && e.error && (1 === arguments.length ? e.error(t) : e.error(t, n))
    }
}, function(t, n, e) {
    var i, r, o = e(0),
        a = e(60),
        s = o.process,
        d = s && s.versions,
        c = d && d.v8;
    c ? r = (i = c.split("."))[0] + i[1] : a && (!(i = a.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = a.match(/Chrome\/(\d+)/)) && (r = i[1]), t.exports = r && +r
}, function(t, n, e) {
    "use strict";
    var i = e(6),
        r = e(15),
        o = e(55),
        a = e(2),
        s = e(9),
        d = e(57),
        c = e(61),
        A = e(11);
    i({
        target: "Promise",
        proto: !0,
        real: !0,
        forced: !!o && a((function() {
            o.prototype.finally.call({
                then: function() {}
            }, (function() {}))
        }))
    }, {
        finally: function(t) {
            var n = d(this, s("Promise")),
                e = "function" == typeof t;
            return this.then(e ? function(e) {
                return c(n, t()).then((function() {
                    return e
                }))
            } : t, e ? function(e) {
                return c(n, t()).then((function() {
                    throw e
                }))
            } : t)
        }
    }), r || "function" != typeof o || o.prototype.finally || A(o.prototype, "finally", s("Promise").prototype.finally)
}, function(t, n, e) {
    "use strict";
    var i = e(6),
        r = e(7),
        o = e(33),
        a = e(54),
        s = e(34),
        d = e(10),
        c = e(18),
        A = e(20),
        u = e(4),
        l = e(14),
        m = l.set,
        p = l.getterFor("AggregateError"),
        f = function(t, n) {
            var e = this;
            if (!(e instanceof f)) return new f(t, n);
            a && (e = a(new Error(n), o(e)));
            var i = [];
            return A(t, i.push, i), r ? m(e, {
                errors: i,
                type: "AggregateError"
            }) : e.errors = i, void 0 !== n && u(e, "message", String(n)), e
        };
    f.prototype = s(Error.prototype, {
        constructor: c(5, f),
        message: c(5, ""),
        name: c(5, "AggregateError")
    }), r && d.f(f.prototype, "errors", {
        get: function() {
            return p(this).errors
        },
        configurable: !0
    }), i({
        global: !0
    }, {
        AggregateError: f
    })
}, function(t, n, e) {
    e(62)
}, function(t, n, e) {
    "use strict";
    var i = e(6),
        r = e(17),
        o = e(21);
    i({
        target: "Promise",
        stat: !0
    }, {
        try: function(t) {
            var n = r.f(this),
                e = o(t);
            return (e.error ? n.reject : n.resolve)(e.value), n.promise
        }
    })
}, function(t, n, e) {
    "use strict";
    var i = e(6),
        r = e(12),
        o = e(9),
        a = e(17),
        s = e(21),
        d = e(20);
    i({
        target: "Promise",
        stat: !0
    }, {
        any: function(t) {
            var n = this,
                e = a.f(n),
                i = e.resolve,
                c = e.reject,
                A = s((function() {
                    var e = r(n.resolve),
                        a = [],
                        s = 0,
                        A = 1,
                        u = !1;
                    d(t, (function(t) {
                        var r = s++,
                            d = !1;
                        a.push(void 0), A++, e.call(n, t).then((function(t) {
                            d || u || (u = !0, i(t))
                        }), (function(t) {
                            d || u || (d = !0, a[r] = t, --A || c(new(o("AggregateError"))(a, "No one promise resolved")))
                        }))
                    })), --A || c(new(o("AggregateError"))(a, "No one promise resolved"))
                }));
            return A.error && c(A.value), e.promise
        }
    })
}, function(t, n) {
    ! function(t) {
        "use strict";
        if (!t.fetch) {
            var n = "URLSearchParams" in t,
                e = "Symbol" in t && "iterator" in Symbol,
                i = "FileReader" in t && "Blob" in t && function() {
                    try {
                        return new Blob, !0
                    } catch (t) {
                        return !1
                    }
                }(),
                r = "FormData" in t,
                o = "ArrayBuffer" in t;
            if (o) var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                s = function(t) {
                    return t && DataView.prototype.isPrototypeOf(t)
                },
                d = ArrayBuffer.isView || function(t) {
                    return t && a.indexOf(Object.prototype.toString.call(t)) > -1
                };
            p.prototype.append = function(t, n) {
                t = u(t), n = l(n);
                var e = this.map[t];
                this.map[t] = e ? e + "," + n : n
            }, p.prototype.delete = function(t) {
                delete this.map[u(t)]
            }, p.prototype.get = function(t) {
                return t = u(t), this.has(t) ? this.map[t] : null
            }, p.prototype.has = function(t) {
                return this.map.hasOwnProperty(u(t))
            }, p.prototype.set = function(t, n) {
                this.map[u(t)] = l(n)
            }, p.prototype.forEach = function(t, n) {
                for (var e in this.map) this.map.hasOwnProperty(e) && t.call(n, this.map[e], e, this)
            }, p.prototype.keys = function() {
                var t = [];
                return this.forEach((function(n, e) {
                    t.push(e)
                })), m(t)
            }, p.prototype.values = function() {
                var t = [];
                return this.forEach((function(n) {
                    t.push(n)
                })), m(t)
            }, p.prototype.entries = function() {
                var t = [];
                return this.forEach((function(n, e) {
                    t.push([e, n])
                })), m(t)
            }, e && (p.prototype[Symbol.iterator] = p.prototype.entries);
            var c = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            k.prototype.clone = function() {
                return new k(this, {
                    body: this._bodyInit
                })
            }, y.call(k.prototype), y.call(v.prototype), v.prototype.clone = function() {
                return new v(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new p(this.headers),
                    url: this.url
                })
            }, v.error = function() {
                var t = new v(null, {
                    status: 0,
                    statusText: ""
                });
                return t.type = "error", t
            };
            var A = [301, 302, 303, 307, 308];
            v.redirect = function(t, n) {
                if (-1 === A.indexOf(n)) throw new RangeError("Invalid status code");
                return new v(null, {
                    status: n,
                    headers: {
                        location: t
                    }
                })
            }, t.Headers = p, t.Request = k, t.Response = v, t.fetch = function(t, n) {
                return new Promise((function(e, r) {
                    var o = new k(t, n),
                        a = new XMLHttpRequest;
                    a.onload = function() {
                        var t, n, i = {
                            status: a.status,
                            statusText: a.statusText,
                            headers: (t = a.getAllResponseHeaders() || "", n = new p, t.split(/\r?\n/).forEach((function(t) {
                                var e = t.split(":"),
                                    i = e.shift().trim();
                                if (i) {
                                    var r = e.join(":").trim();
                                    n.append(i, r)
                                }
                            })), n)
                        };
                        i.url = "responseURL" in a ? a.responseURL : i.headers.get("X-Request-URL");
                        var r = "response" in a ? a.response : a.responseText;
                        e(new v(r, i))
                    }, a.onerror = function() {
                        r(new TypeError("Network request failed"))
                    }, a.ontimeout = function() {
                        r(new TypeError("Network request failed"))
                    }, a.open(o.method, o.url, !0), "include" === o.credentials && (a.withCredentials = !0), "responseType" in a && i && (a.responseType = "blob"), o.headers.forEach((function(t, n) {
                        a.setRequestHeader(n, t)
                    })), a.send(void 0 === o._bodyInit ? null : o._bodyInit)
                }))
            }, t.fetch.polyfill = !0
        }

        function u(t) {
            if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }

        function l(t) {
            return "string" != typeof t && (t = String(t)), t
        }

        function m(t) {
            var n = {
                next: function() {
                    var n = t.shift();
                    return {
                        done: void 0 === n,
                        value: n
                    }
                }
            };
            return e && (n[Symbol.iterator] = function() {
                return n
            }), n
        }

        function p(t) {
            this.map = {}, t instanceof p ? t.forEach((function(t, n) {
                this.append(n, t)
            }), this) : Array.isArray(t) ? t.forEach((function(t) {
                this.append(t[0], t[1])
            }), this) : t && Object.getOwnPropertyNames(t).forEach((function(n) {
                this.append(n, t[n])
            }), this)
        }

        function f(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }

        function g(t) {
            return new Promise((function(n, e) {
                t.onload = function() {
                    n(t.result)
                }, t.onerror = function() {
                    e(t.error)
                }
            }))
        }

        function h(t) {
            var n = new FileReader,
                e = g(n);
            return n.readAsArrayBuffer(t), e
        }

        function w(t) {
            if (t.slice) return t.slice(0);
            var n = new Uint8Array(t.byteLength);
            return n.set(new Uint8Array(t)), n.buffer
        }

        function y() {
            return this.bodyUsed = !1, this._initBody = function(t) {
                if (this._bodyInit = t, t)
                    if ("string" == typeof t) this._bodyText = t;
                    else if (i && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                else if (r && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                else if (n && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                else if (o && i && s(t)) this._bodyArrayBuffer = w(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!o || !ArrayBuffer.prototype.isPrototypeOf(t) && !d(t)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = w(t)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, i && (this.blob = function() {
                var t = f(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(h)
            }), this.text = function() {
                var t, n, e, i = f(this);
                if (i) return i;
                if (this._bodyBlob) return t = this._bodyBlob, n = new FileReader, e = g(n), n.readAsText(t), e;
                if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                    for (var n = new Uint8Array(t), e = new Array(n.length), i = 0; i < n.length; i++) e[i] = String.fromCharCode(n[i]);
                    return e.join("")
                }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, r && (this.formData = function() {
                return this.text().then(b)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function k(t, n) {
            var e, i, r = (n = n || {}).body;
            if (t instanceof k) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, n.headers || (this.headers = new p(t.headers)), this.method = t.method, this.mode = t.mode, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0)
            } else this.url = String(t);
            if (this.credentials = n.credentials || this.credentials || "omit", !n.headers && this.headers || (this.headers = new p(n.headers)), this.method = (e = n.method || this.method || "GET", i = e.toUpperCase(), c.indexOf(i) > -1 ? i : e), this.mode = n.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(r)
        }

        function b(t) {
            var n = new FormData;
            return t.trim().split("&").forEach((function(t) {
                if (t) {
                    var e = t.split("="),
                        i = e.shift().replace(/\+/g, " "),
                        r = e.join("=").replace(/\+/g, " ");
                    n.append(decodeURIComponent(i), decodeURIComponent(r))
                }
            })), n
        }

        function v(t, n) {
            n || (n = {}), this.type = "default", this.status = "status" in n ? n.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in n ? n.statusText : "OK", this.headers = new p(n.headers), this.url = n.url || "", this._initBody(t)
        }
    }("undefined" != typeof self ? self : this)
}, function(t, n) {
    /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
    "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function(t) {
        "use strict";
        if ("Element" in t) {
            var n = t.Element.prototype,
                e = Object,
                i = String.prototype.trim || function() {
                    return this.replace(/^\s+|\s+$/g, "")
                },
                r = Array.prototype.indexOf || function(t) {
                    for (var n = 0, e = this.length; n < e; n++)
                        if (n in this && this[n] === t) return n;
                    return -1
                },
                o = function(t, n) {
                    this.name = t, this.code = DOMException[t], this.message = n
                },
                a = function(t, n) {
                    if ("" === n) throw new o("SYNTAX_ERR", "An invalid or illegal string was specified");
                    if (/\s/.test(n)) throw new o("INVALID_CHARACTER_ERR", "String contains an invalid character");
                    return r.call(t, n)
                },
                s = function(t) {
                    for (var n = i.call(t.getAttribute("class") || ""), e = n ? n.split(/\s+/) : [], r = 0, o = e.length; r < o; r++) this.push(e[r]);
                    this._updateClassName = function() {
                        t.setAttribute("class", this.toString())
                    }
                },
                d = s.prototype = [],
                c = function() {
                    return new s(this)
                };
            if (o.prototype = Error.prototype, d.item = function(t) {
                    return this[t] || null
                }, d.contains = function(t) {
                    return -1 !== a(this, t += "")
                }, d.add = function() {
                    var t, n = arguments,
                        e = 0,
                        i = n.length,
                        r = !1;
                    do {
                        t = n[e] + "", -1 === a(this, t) && (this.push(t), r = !0)
                    } while (++e < i);
                    r && this._updateClassName()
                }, d.remove = function() {
                    var t, n, e = arguments,
                        i = 0,
                        r = e.length,
                        o = !1;
                    do {
                        for (t = e[i] + "", n = a(this, t); - 1 !== n;) this.splice(n, 1), o = !0, n = a(this, t)
                    } while (++i < r);
                    o && this._updateClassName()
                }, d.toggle = function(t, n) {
                    t += "";
                    var e = this.contains(t),
                        i = e ? !0 !== n && "remove" : !1 !== n && "add";
                    return i && this[i](t), !0 === n || !1 === n ? n : !e
                }, d.toString = function() {
                    return this.join(" ")
                }, e.defineProperty) {
                var A = {
                    get: c,
                    enumerable: !0,
                    configurable: !0
                };
                try {
                    e.defineProperty(n, "classList", A)
                } catch (t) {
                    void 0 !== t.number && -2146823252 !== t.number || (A.enumerable = !1, e.defineProperty(n, "classList", A))
                }
            } else e.prototype.__defineGetter__ && n.__defineGetter__("classList", c)
        }
    }(window.self), function() {
        "use strict";
        var t = document.createElement("_");
        if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
            var n = function(t) {
                var n = DOMTokenList.prototype[t];
                DOMTokenList.prototype[t] = function(t) {
                    var e, i = arguments.length;
                    for (e = 0; e < i; e++) t = arguments[e], n.call(this, t)
                }
            };
            n("add"), n("remove")
        }
        if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
            var e = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(t, n) {
                return 1 in arguments && !this.contains(t) == !n ? n : e.call(this, t)
            }
        }
        t = null
    }())
}, function(t, n, e) {
    "use strict";
    e.r(n);
    var i = e(63),
        r = e.n(i),
        o = e(64),
        a = e.n(o);
    e(106), e(107);
    void 0 === Object.assign && (Object.assign = r.a), "undefined" == typeof Promise && (window.Promise = a.a);
    var s = {
            ready: "pokiAppReady",
            adblocked: "pokiAppAdblocked",
            ads: {
                completed: "pokiAdsCompleted",
                error: "pokiAdsError",
                displayError: "pokiAdsDisplayError",
                impression: "pokiAdsImpression",
                durationChange: "pokiAdsDurationChange",
                limit: "pokiAdsLimit",
                ready: "pokiAdsReady",
                requested: "pokiAdsRequested",
                skipped: "pokiAdsSkipped",
                started: "pokiAdsStarted",
                stopped: "pokiAdsStopped",
                busy: "pokiAdsBusy",
                pushedToPlatform: "pokiPushedToPlatform",
                position: {
                    preroll: "PP",
                    midroll: "PM",
                    rewarded: "PR"
                },
                video: {
                    clicked: "pokiVideoAdsClicked",
                    firstQuartile: "pokiVideoAdsFirstQuartile",
                    midPoint: "pokiVideoAdsMidPoint",
                    thirdQuartile: "pokiVideoAdsThirdQuartile",
                    error: "pokiVideoAdsError",
                    paused: "pokiVideoAdsPauseTriggered",
                    resumed: "pokiVideoAdsResumedTriggered",
                    progress: "pokiVideoAdsProgress"
                }
            },
            info: {
                messages: {
                    timeLimit: "The ad-request was not processed, because of a time constraint",
                    prerollLimit: "The ad-request was cancelled, because we're not allowed to show a preroll"
                }
            },
            message: {
                event: "pokiMessageEvent",
                sdkDetails: "pokiMessageSdkDetails",
                toggleProgrammaticAds: "pokiMessageToggleProgrammaticAds",
                runAdOnPlatform: "pokiMessageRunAdOnPlatform",
                minimizeAd: "pokiMessageMinimizeAd"
            },
            tracking: {
                custom: "pokiTrackingCustom",
                setPlayerAge: "pokiTrackingSetPlayerAge",
                togglePlayerAdvertisingConsent: "pokiTrackingTogglePlayerAdvertisingConsent",
                manualSkipButton: "pokiTrackingManualSkipButton",
                minimizeButton: "pokiTrackingMinimizeButton",
                screen: {
                    gameplayStart: "pokiTrackingScreenGameplayStart",
                    gameplayStop: "pokiTrackingScreenGameplayStop",
                    gameLoadingStarted: "pokiTrackingScreenGameLoadingStarted",
                    gameLoadingProgress: "pokiTrackingScreenGameLoadingProgress",
                    gameLoadingFinished: "pokiTrackingScreenGameLoadingFinished",
                    commercialBreak: "pokiTrackingScreenCommercialBreak",
                    rewardedBreak: "pokiTrackingScreenRewardedBreak",
                    happyTime: "pokiTrackingScreenHappyTime",
                    firstRound: "pokiTrackingScreenFirstRound",
                    roundStart: "pokiTrackingScreenRoundStart",
                    roundEnd: "pokiTrackingScreenRoundEnd",
                    gameInteractive: "pokiTrackingScreenGameInteractive",
                    displayAd: "pokiTrackingScreenDisplayAdRequest",
                    destroyAd: "pokiTrackingScreenDisplayAdDestroy"
                },
                sdk: {
                    status: {
                        initialized: "pokiTrackingSdkStatusInitialized",
                        failed: "pokiTrackingSdkStatusFailed"
                    }
                },
                ads: {
                    status: {
                        busy: "pokiTrackingAdsStatusBusy",
                        completed: "pokiTrackingAdsStatusCompleted",
                        error: "pokiTrackingAdsStatusError",
                        displayError: "pokiTrackingAdsStatusDisplayError",
                        impression: "pokiTrackingAdsStatusImpression",
                        limit: "pokiTrackingAdsStatusLimit",
                        ready: "pokiTrackingAdsStatusReady",
                        requested: "pokiTrackingAdsStatusRequested",
                        skipped: "pokiTrackingAdsStatusSkipped",
                        started: "pokiTrackingAdsStatusStarted"
                    },
                    video: {
                        clicked: "pokiTrackingAdsVideoClicked"
                    }
                }
            }
        },
        d = function() {
            return (d = Object.assign || function(t) {
                for (var n, e = 1, i = arguments.length; e < i; e++)
                    for (var r in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                return t
            }).apply(this, arguments)
        },
        c = function() {
            function t() {}
            return t.clearEventListeners = function() {
                this.listeners = {}
            }, t.removeEventListener = function(t, n) {
                if (Object.prototype.hasOwnProperty.call(this.listeners, t)) {
                    var e = this.listeners[t].indexOf(n); - 1 !== e && this.listeners[t].splice(e, 1)
                }
            }, t.addEventListener = function(t, n, e) {
                var i = this;
                if (void 0 === e && (e = !1), e = !!e, Object.prototype.hasOwnProperty.call(this.listeners, t) || (this.listeners[t] = []), e) {
                    var r = function(e) {
                        i.removeEventListener.bind(i)(t, r), n(e)
                    };
                    this.listeners[t].push(r)
                } else this.listeners[t].push(n)
            }, t.dispatchEvent = function(t, n) {
                void 0 === n && (n = {}), !this.debug || window.process && window.process.env && "test" === window.process.env.NODE_ENV || console.info(t, n);
                for (var e = Object.keys(this.listeners), i = 0; i < e.length; i++) {
                    var r = e[i];
                    if (t === r)
                        for (var o = this.listeners[r], a = 0; a < o.length; a++) o[a](d(d({}, this.dataAnnotations), n))
                }
            }, t.setDebug = function(t) {
                this.debug = t
            }, t.setDataAnnotations = function(t) {
                this.dataAnnotations = d(d({}, this.dataAnnotations), t)
            }, t.clearAnnotations = function() {
                this.dataAnnotations = {}
            }, t.listeners = {}, t.debug = !1, t.dataAnnotations = {}, t
        }(),
        A = function(t, n) {
            var e = !1;
            return Object.keys(n).forEach((function(i) {
                n[i] === t && (e = !0)
            })), e
        },
        u = function() {
            function t() {}
            return t.sendMessage = function(t, n) {
                void 0 === n && (n = {});
                var e = window.parent;
                if (!A(t, s.message)) {
                    var i = Object.keys(s.message).map((function(t) {
                        return "poki.message." + t
                    }));
                    throw new TypeError("Argument 'type' must be one of " + i.join(", "))
                }
                e.postMessage({
                    type: t,
                    content: n
                }, "*")
            }, t
        }(),
        l = function(t) {
            var n = new Array;
            return Object.keys(t).forEach((function(e) {
                "object" == typeof t[e] ? n = n.concat(l(t[e])) : n.push(t[e])
            })), n
        },
        m = l(s.tracking),
        p = function() {
            function t() {}
            return t.setDebug = function(t) {
                this.debug = t
            }, t.track = function(t, n) {
                if (void 0 === n && (n = {}), -1 === m.indexOf(t)) throw new TypeError("Invalid 'event', must be one of " + m.join(", "));
                if ("object" != typeof n) throw new TypeError("Invalid data, must be an object");
                if (this.debug) {
                    if (window.process && window.process.env && "test" === window.process.env.NODE_ENV) return;
                    Object.keys(n).length ? console.info("%cPOKI_TRACKER: %cTracked event '" + t + "' with data:", "font-weight: bold", "", n) : console.info("%cPOKI_TRACKER: %cTracked event '" + t + "'", "font-weight: bold", "")
                }
                u.sendMessage(s.message.event, {
                    event: t,
                    data: n
                })
            }, t.setupDefaultEvents = function() {
                var n, e = ((n = {})[s.ready] = s.tracking.sdk.status.initialized, n[s.adblocked] = s.tracking.sdk.status.failed, n[s.ads.busy] = s.tracking.ads.status.busy, n[s.ads.completed] = s.tracking.ads.status.completed, n[s.ads.error] = s.tracking.ads.status.error, n[s.ads.displayError] = s.tracking.ads.status.displayError, n[s.ads.impression] = s.tracking.ads.status.impression, n[s.ads.limit] = s.tracking.ads.status.limit, n[s.ads.ready] = s.tracking.ads.status.ready, n[s.ads.requested] = s.tracking.ads.status.requested, n[s.ads.skipped] = s.tracking.ads.status.skipped, n[s.ads.started] = s.tracking.ads.status.started, n[s.ads.video.clicked] = s.tracking.ads.video.clicked, n[s.tracking.screen.gameplayStart] = s.tracking.screen.gameplayStart, n[s.tracking.screen.gameplayStop] = s.tracking.screen.gameplayStop, n[s.tracking.screen.loadingProgress] = s.tracking.screen.loadingProgress, n[s.tracking.screen.commercialBreak] = s.tracking.screen.commercialBreak, n[s.tracking.screen.rewardedBreak] = s.tracking.screen.rewardedBreak, n[s.tracking.screen.happyTime] = s.tracking.screen.happyTime, n);
                Object.keys(e).forEach((function(n) {
                    c.addEventListener(n, (function(i) {
                        t.track(e[n], i)
                    }))
                }))
            }, t.debug = !1, t
        }(),
        f = {
            hash: "G1L1",
            adTagUrl: "",
            adTiming: {
                preroll: !1,
                timeBetweenAds: 12e4,
                timePerTry: 7e3,
                startAdsAfter: 12e4
            },
            waterfallRetries: 2,
            country: "NL"
        },
        g = function(t) {
            return t instanceof Array ? t : [t]
        },
        h = function() {
            function t(t) {
                void 0 === t && (t = {}), this.setTimings(t), this.timingIdx = {
                    timePerTry: 0
                }, this.timers = {
                    timePerTry: void 0,
                    timeBetweenAds: void 0,
                    startAdsAfter: void 0
                }, c.addEventListener(s.ads.requested, this.startTimeBetweenAdsTimer.bind(this)), c.addEventListener(s.ads.completed, this.startTimeBetweenAdsTimer.bind(this)), c.addEventListener(s.ads.stopped, this.startTimeBetweenAdsTimer.bind(this))
            }
            return t.prototype.setTimings = function(t) {
                var n = f.adTiming,
                    e = t.preroll,
                    i = void 0 === e ? n.preroll : e,
                    r = t.timePerTry,
                    o = void 0 === r ? n.timePerTry : r,
                    a = t.timeBetweenAds,
                    s = void 0 === a ? n.timeBetweenAds : a,
                    d = t.startAdsAfter,
                    c = void 0 === d ? n.startAdsAfter : d;
                this.timings = {
                    preroll: !1 !== i,
                    timePerTry: g(o),
                    timeBetweenAds: s,
                    startAdsAfter: c
                }
            }, t.prototype.startTimeBetweenAdsTimer = function() {
                this.startTimer("timeBetweenAds")
            }, t.prototype.startStartAdsAfterTimer = function() {
                this.startTimer("startAdsAfter")
            }, t.prototype.requestPossible = function() {
                return !this.timers.timeBetweenAds && !this.timers.startAdsAfter
            }, t.prototype.startWaterfallTimer = function(t) {
                this.startTimer("timePerTry", t)
            }, t.prototype.stopWaterfallTimer = function() {
                this.stopTimer("timePerTry")
            }, t.prototype.nextWaterfallTimer = function() {
                this.nextTiming("timePerTry")
            }, t.prototype.resetWaterfallTimerIdx = function() {
                this.resetTimingIdx("timePerTry")
            }, t.prototype.stopTimer = function(t) {
                this.timers[t] && (clearTimeout(this.timers[t]), this.timers[t] = void 0)
            }, t.prototype.startTimer = function(t, n) {
                var e = this;
                void 0 === n && (n = function() {}), this.getTiming(t) <= 0 ? n() : (this.timers[t] && clearTimeout(this.timers[t]), this.timers[t] = setTimeout((function() {
                    e.stopTimer(t), n()
                }), this.getTiming(t)))
            }, t.prototype.getTiming = function(t) {
                var n = this.timings[t];
                return n instanceof Array ? n[this.timingIdx[t]] : n
            }, t.prototype.nextTiming = function(t) {
                if (void 0 === this.timingIdx[t]) throw new Error("AdTimings Error: " + t + " does not have multiple timers");
                this.timingIdx[t] = (this.timingIdx[t] + 1) % this.timings[t].length
            }, t.prototype.resetTimingIdx = function(t) {
                if (void 0 === this.timingIdx[t]) throw new Error("AdTimings Error: " + t + " does not have multiple timers");
                this.timingIdx[t] = 0
            }, t.prototype.prerollPossible = function() {
                return this.timings.preroll
            }, t
        }(),
        w = function() {
            return window.location.href
        },
        y = function() {
            return "undefined" != typeof navigator && /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera\smini|avantgo|mobilesafari|docomo)/i.test(navigator.userAgent)
        },
        k = function() {
            return "undefined" != typeof navigator && /(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i.test(navigator.userAgent)
        },
        b = function(t, n) {
            t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(n || window.location.search);
            return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
        },
        v = function() {
            return (v = Object.assign || function(t) {
                for (var n, e = 1, i = arguments.length; e < i; e++)
                    for (var r in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                return t
            }).apply(this, arguments)
        },
        S = function() {
            for (var t = 0, n = 0, e = arguments.length; n < e; n++) t += arguments[n].length;
            var i = Array(t),
                r = 0;
            for (n = 0; n < e; n++)
                for (var o = arguments[n], a = 0, s = o.length; a < s; a++, r++) i[r] = o[a];
            return i
        },
        E = {
            allowSmallerSizes: !0,
            frameworks: [2],
            h: 480,
            maxduration: 15,
            mimes: "undefined" != typeof navigator && /MSIE \\d|Trident.*rv:/i.test(navigator.userAgent) || y() || k() ? ["video/mp4"] : ["video/mp4", "video/webm", "video/ogg"],
            startdelay: 0,
            w: 640,
            video: {
                playback_method: ["auto_play_sound_on", "auto_play_sound_off", "auto_play_sound_unknown"]
            }
        },
        z = [{
            bidder: "appnexus",
            params: v(v({
                placementId: 13184250
            }, E), {
                video: v(v({}, E.video), {
                    skippable: !0
                })
            })
        }, {
            bidder: "appnexus",
            params: v(v({
                placementId: 13184309
            }, E), {
                video: v(v({}, E.video), {
                    skippable: !1,
                    maxduration: 15
                })
            })
        }, {
            bidder: "openx",
            params: {
                unit: "540105196",
                delDomain: "poki-d.openx.net",
                openrtb: {
                    imp: [{
                        video: {
                            mimes: [E.mimes.join(",")],
                            protocols: [2, 3, 5, 6, 7, 8],
                            maxduration: 15,
                            skip: 1,
                            skipafter: 5,
                            w: 640,
                            h: 480
                        }
                    }]
                }
            }
        }, {
            bidder: "openx",
            params: {
                unit: "540719065",
                delDomain: "poki-d.openx.net",
                openrtb: {
                    imp: [{
                        video: {
                            mimes: [E.mimes.join(",")],
                            protocols: [2, 3, 5, 6, 7, 8],
                            maxduration: 15,
                            skip: 0,
                            w: 640,
                            h: 480
                        }
                    }]
                }
            }
        }, {
            bidder: "districtm",
            params: v(v({
                placementId: 12906789
            }, E), {
                video: v(v({}, E.video), {
                    skippable: !1,
                    maxduration: 15
                })
            })
        }, {
            bidder: "spotx",
            params: {
                channel_id: "265590",
                ad_unit: "instream",
                secure: !0,
                mimes: E.mimes,
                hide_skin: !0
            }
        }, {
            bidder: "ix",
            params: {
                siteId: "436284",
                size: [640, 480],
                video: {
                    mimes: E.mimes,
                    protocols: [2, 3, 5, 6, 7, 8],
                    minduration: 0,
                    maxduration: 15
                }
            }
        }],
        x = {
            video: {
                context: "instream",
                playerSize: [640, 480],
                mimes: E.mimes,
                protocols: [2, 3, 5, 6, 7, 8],
                maxduration: 15,
                skip: 1,
                linearity: 1,
                api: [2]
            }
        },
        T = [{
            code: "video",
            mediaTypes: x,
            bids: S(z, [{
                bidder: "rubicon",
                params: {
                    accountId: "18608",
                    siteId: "266914",
                    zoneId: "1322034",
                    video: {
                        size_id: 204
                    }
                }
            }])
        }, {
            code: "rewarded",
            mediaTypes: x,
            bids: S(z, [{
                bidder: "rubicon",
                params: {
                    accountId: "18608",
                    siteId: "266916",
                    zoneId: "1322048",
                    video: {
                        size_id: 202
                    }
                }
            }])
        }],
        C = {
            EUR: {
                EUR: 1,
                GBP: .858595,
                USD: 1.13151
            },
            GBP: {
                EUR: 1.164693481792929,
                GBP: 1,
                USD: 1.3178623215835172
            },
            USD: {
                EUR: .8837747788353616,
                GBP: .7588046062341472,
                USD: 1
            }
        },
        B = {
            debug: !1,
            enableSendAllBids: !0,
            usePrebidCache: !0,
            bidderTimeout: 1e3,
            priceGranularity: "dense",
            currency: {
                adServerCurrency: "EUR",
                rates: C,
                defaultRates: C,
                bidderCurrencyDefault: {
                    openx: "EUR"
                }
            },
            cache: {
                url: "https://prebid.adnxs.com/pbc/v1/cache"
            },
            userSync: {
                iframeEnabled: !0
            }
        };
    var P = function() {
            function t(t, n) {
                void 0 === n && (n = {}), this.retries = 0, this.running = !1, this.ima = t, this.siteID = n.siteID || 3, 0 === n.siteID && (n.siteID = 3), this.totalRetries = n.totalRetries || f.waterfallRetries || 1, this.timing = n.timing || new h(f.adTiming), this.overwriteAdTagUrls = n.adTagUrl ? g(n.adTagUrl) : [], this.disableHB = n.disableHB || !1, this.opportunityId = "", c.addEventListener(s.ads.video.error, this.moveThroughWaterfall.bind(this)), c.addEventListener(s.ads.ready, this.timing.stopWaterfallTimer.bind(this.timing)), c.addEventListener(s.ads.started, this.stopWaterfall.bind(this))
            }
            return t.prototype.moveThroughWaterfall = function() {
                if (!1 !== this.running) {
                    if (this.timing.stopWaterfallTimer(), this.retries < this.totalRetries) return this.timing.nextWaterfallTimer(), void this.requestAd();
                    this.running = !1, this.timing.resetWaterfallTimerIdx(), c.dispatchEvent(s.ads.error, {
                        message: "No ads"
                    })
                }
            }, t.prototype.cutOffWaterfall = function() {
                this.ima.stopPlayback(), this.moveThroughWaterfall()
            }, t.prototype.buildAdTagUrls = function(t) {
                if (this.debug) return [""];
                if (this.overwriteAdTagUrls.length > 0 && st.GetIsPokiPlatform()) return this.overwriteAdTagUrls;
                var n = "desktop",
                    e = "midroll";
                y() ? n = "mobile" : k() && (n = "tablet"), t === s.ads.position.rewarded && (e = "rewarded");
                var i = "",
                    r = "&ciu_szs&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}";
                return st.GetIsPokiIFrame() ? ["" + i + n + "_ingame_" + e + "_1/" + this.siteID + "_" + n + "_ingame_" + e + "_1" + r, "" + i + n + "_ingame_" + e + "_2/" + this.siteID + "_" + n + "_ingame_" + e + "_2" + r] : [i + "external_" + n + "_video_1/external_" + n + "_ingame_" + e + "_1" + r, i + "external_" + n + "_video_2/external_" + n + "_ingame_" + e + "_2" + r]
            }, t.prototype.start = function(t, n, e, i) {
                void 0 === t && (t = {}), this.running = !0, this.retries = 0, this.criteria = t, this.timing.resetWaterfallTimerIdx(), (e || []).length > 0 && (this.overwriteAdTagUrls = e || []), this.opportunityId = Math.random().toString(36).substring(2), this.rewarded = n === s.ads.position.rewarded, this.runAdOnPlatform = i || !1, this.adTagUrls = this.buildAdTagUrls(n), this.requestAd()
            }, t.prototype.requestAd = function() {
                this.timing.startWaterfallTimer(this.cutOffWaterfall.bind(this)), this.retries++, st.GetIsPokiPlatform() || (this.criteria.waterfall = this.retries);
                var t = (this.retries - 1) % this.adTagUrls.length,
                    n = this.adTagUrls[t],
                    e = this.criteria ? this.criteria.position : void 0;
                if (st.consentString && st.consentString.length > 0 && (this.criteria.consent_string = st.consentString), this.runAdOnPlatform) return u.sendMessage(s.message.runAdOnPlatform, {
                    position: e,
                    adTagUrls: this.adTagUrls,
                    criteria: this.criteria
                }), this.stopWaterfall(), void c.dispatchEvent(s.ads.pushedToPlatform);
                var i, r, o = function(t) {
                    var n = w().split("?"),
                        e = encodeURIComponent(n[0]);
                    return t = (t = t.split("{descriptionUrl}").join(e)).split("{timestamp}").join((new Date).getTime().toString())
                }(n) + (i = this.criteria, r = "", Object.keys(i).forEach((function(t) {
                    if (Object.prototype.hasOwnProperty.call(i, t)) {
                        var n = i[t];
                        Array.isArray(n) && (n = n.join()), r += t + "=" + n + "&"
                    }
                })), "&cust_params=" + (r = encodeURIComponent(r)) + "&");
                st.childDirected && (o += "&tfcd=1"), st.nonPersonalized && (o += "&npa=1"), c.setDataAnnotations({
                    adTagUrl: o,
                    opportunityId: this.opportunityId,
                    position: e,
                    waterfall: this.retries
                }), c.dispatchEvent(s.ads.requested), 1 !== this.retries || y() || k() || this.disableHB ? (console.debug("adRequest started in plain mode"), this.ima.requestAd(o)) : (console.debug("adRequest started with Prebid Video enabled"), function(t, n, e, i) {
                    if (window.pbjs && window.pbjs.que && window.pbjs.getConfig) {
                        var r = w().split("?"),
                            o = encodeURIComponent(r[0]),
                            a = i ? "rewarded" : "video";
                        window.pbjs.que.push((function() {
                            window.pbjs.requestBids({
                                adUnitCodes: [a],
                                bidsBackHandler: function() {
                                    try {
                                        var i = window.pbjs.adUnits.filter((function(t) {
                                            return t.code === a
                                        }))[0];
                                        if ("undefined" === i) return console.error("Video-ad-unit not found, did you give it the adunit.code='video' value?"), void t.requestAd(n);
                                        var r = window.pbjs.adServers.dfp.buildVideoUrl({
                                            adUnit: i,
                                            params: {
                                                iu: b("iu", n),
                                                sz: "640x360|640x480",
                                                output: "vast",
                                                cust_params: e,
                                                description_url: o
                                            }
                                        });
                                        window.pbjs.markWinningBidAsUsed({
                                            adUnitCode: a
                                        }), t.requestAd(r)
                                    } catch (e) {
                                        t.requestAd(n)
                                    }
                                }
                            })
                        }))
                    } else t.requestAd(n)
                }(this.ima, o, this.criteria, this.rewarded))
            }, t.prototype.isRunning = function() {
                return this.running
            }, t.prototype.stopWaterfall = function() {
                this.running = !1, this.timing.stopWaterfallTimer(), this.timing.resetWaterfallTimerIdx()
            }, t.prototype.setDebug = function(t) {
                this.debug = t
            }, t
        }(),
        I = "pokiSdkSkipCountdownContainer",
        _ = "pokiSdkPauseButton",
        D = "pokiSdkProgressBar",
        O = "pokiSdkSkipContainer",
        L = "pokiSdkSpinnerContainer",
        j = "pokiSdkVisible",
        M = function() {
            function t(t) {
                var n = this;
                if (this.hideElement = function(t) {
                        t.classList.add("pokiSdkHidden"), t.classList.remove(j)
                    }, this.showElement = function(t) {
                        t.classList.add(j), t.classList.remove("pokiSdkHidden")
                    }, this.wrapper = t.wrapper, this.skipFeature = t.skipFeature, this.minimizeFeature = t.minimizeFeature, c.addEventListener(s.ads.video.progress, (function(t) {
                        var e = t.currentTime / t.duration * 100;
                        e < 100 && (n.progressBar.style.width = e + "%")
                    })), c.addEventListener(s.ads.started, (function(e) {
                        var i = e.adSystem.toLowerCase();
                        if ((n.skipFeature || n.minimizeFeature) && "adsense" !== i && "bdm" !== i && e.remainingTime > 14e3) {
                            n.adSkippable = !1, n.countdownValue = t.countdownStart || 15, n.skipContainer.classList.remove("complete");
                            var r = st.GetIsMinimizeTestCountry() || n.minimizeFeature;
                            n.countdownDiv.innerHTML = r ? "Skip in " + n.countdownValue : (t.renderSkipButton ? "Skip in " : "Play in ") + n.countdownValue, n.skipCountdown = window.setInterval((function() {
                                if (n.countdownValue > 1) return n.countdownValue--, void(n.countdownDiv.innerHTML = r ? "Skip in " + n.countdownValue : (t.renderSkipButton ? "Skip in " : "Play in ") + n.countdownValue);
                                t.renderSkipButton && (n.adSkippable = !0, n.countdownDiv.innerHTML = r ? "Skip" : "Skip Ad"), n.skipContainer.classList.add("complete"), window.clearInterval(n.skipCountdown)
                            }), 1e3), n.showSkipButton()
                        }
                    })), this.wrapper instanceof HTMLElement || (console.error("POKI-SDK: wrapper is not a HTMLElement, falling back to document.body"), this.wrapper = document.body), this.createElements(), "undefined" != typeof window && document) {
                    var e = document.createElement("style");
                    e.innerHTML = "\n@font-face {\n\tfont-display: swap;\n\tfont-family: 'Proxima Nova';\n\tfont-weight: 700;\n\tsrc: url(https://a.poki.com/fonts/proxima-nova-bold-latin.woff2) format('woff2'), url(https://a.poki.com/fonts/proxima-nova-bold-latin.woff) format('woff');\n\tunicode-range: U+0020-007F, U+00A0-00FF\n}\n\n@font-face {\n\tfont-display: swap;\n\tfont-family: 'Proxima Nova';\n\tfont-weight: 700;\n\tsrc: url(https://a.poki.com/fonts/proxima-nova-bold-latin-ext-a.woff2) format('woff2'), url(https://a.poki.com/fonts/proxima-nova-bold-latin-ext-a.woff) format('woff');\n\tunicode-range: U+0100-017F\n}\n\n@font-face {\n\tfont-display: swap;\n\tfont-family: 'Proxima Nova';\n\tfont-weight: 700;\n\tsrc: url(https://a.poki.com/fonts/proxima-nova-bold-latin-ext-b.woff2) format('woff2'), url(https://a.poki.com/fonts/proxima-nova-bold-latin-ext-b.woff) format('woff');\n\tunicode-range: U+0180-024F\n}\n\n.pokiSdkContainer {\n\toverflow: hidden;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 1000;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.pokiSdkContainer.pokiSdkFixed {\n\tposition: fixed;\n}\n\n.pokiSdkContainer.pokiSdkVisible {\n\tdisplay: block;\n}\n\n.pokiSdkContainer.pokiSdkHidden, .pokiSdkSpinnerContainer.pokiSdkHidden {\n\tdisplay: none;\n}\n\n.pokiSdkContainer.pokiSdkHidden, .pokiSdkSpinnerContainer, .pokiSdkSpinnerContainer div, .pokiSdkSpinnerContainer img {\n\tpointer-events: none;\n}\n\n.pokiSdkInsideContainer {\n\tbackground: #000;\n\tposition: relative;\n\tz-index: 1;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\topacity: 0;\n\t-webkit-transition: opacity 0.5s ease-in-out;\n\t-moz-transition: opacity 0.5s ease-in-out;\n\t-ms-transition: opacity 0.5s ease-in-out;\n\t-o-transition: opacity 0.5s ease-in-out;\n\ttransition: opacity 0.5s ease-in-out;\n}\n\n.pokiSdkContainer.pokiSdkVisible .pokiSdkInsideContainer {\n\topacity: 1;\n}\n\n.pokiSDKAdContainer, .pokiSdkVideoContainer {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.pokiSdkStartAdButton, .pokiSdkPauseButton {\n\tposition: absolute;\n\tz-index: 9999;\n\ttop: 0;\n\n\tpadding-top: 10%;\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n\tcolor: #FFF;\n\n\tfont: 700 16pt 'Proxima Nova', sans-serif;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttransition: 0.1s ease-in-out;\n\tline-height: 1em;\n}\n\n.pokiSdkProgressContainer {\n\tbackground: #002B50;\n\twidth: 100%;\n\theight: 5px;\n\tposition: absolute;\n\tbottom: 0;\n\tz-index: 9999;\n}\n\n.pokiSdkProgressBar {\n\tposition:relative;\n\tbottom:0px;\n\tbackground: #009CFF;\n\theight: 100%;\n\twidth: 0%;\n\ttransition: width 0.5s;\n\ttransition-timing-function: linear;\n}\n\n.pokiSdkSkipContainer {\n\tbackground: #009cff;\n\tborder-bottom-left-radius: 16px;\n\tborder-top-left-radius: 16px;\n\tbottom: 10%;\n\tbox-shadow: 0 6px 12px 0 rgba(0,0,0,.24);\n\tcolor: #FFF;\n\tcursor: pointer;\n\tfont: 700 16pt 'Proxima Nova', sans-serif;\n\theight: 42px;\n\tline-height: 42px;\n\topacity: 0.6;\n\tpadding-left: 15px;\n\tposition: absolute;\n\tright: 0;\n\ttransition: opacity 0.2s;\n\twidth: 115px;\n\tz-index: 9999;\n}\n\n.pokiSdkSkipContainer.complete {\n\topacity: 1;\n}\n\n.pokiSdkSkipContainer .pokiSdkSkipCountdownContainer {\n\t-webkit-touch-callout: none;\n\t-webkit-user-select: none;\n\t-khtml-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n.pokiSdkSkipContainer.pokiSdkVisible:hover {\n\topacity: 1;\n}\n\n.pokiSdkProgressBar.pokiSdkVisible, .pokiSdkPauseButton.pokiSdkVisible, .pokiSdkSkipContainer.pokiSdkVisible, .pokiSdkStartAdButton.pokiSdkVisible {\n\tdisplay: block;\n\tpointer-events: auto;\n}\n\n.pokiSdkProgressBar.pokiSdkHidden, .pokiSdkPauseButton.pokiSdkHidden, .pokiSdkSkipContainer.pokiSdkHidden, .pokiSdkStartAdButton.pokiSdkHidden {\n\tdisplay: none;\n\tpointer-events: none;\n}\n\n\n@keyframes gwd-gen-no02gwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}35%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}40%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-no02gwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}35%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}40%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-no02gwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}35%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}40%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-no02gwdanimation{animation:gwd-gen-no02gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-no02gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-no02gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-4pvrgwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}40%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}45%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-4pvrgwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}40%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}45%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-4pvrgwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}40%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}45%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-4pvrgwdanimation{animation:gwd-gen-4pvrgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-4pvrgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-4pvrgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-kw40gwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}45%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}50%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-kw40gwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}45%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}50%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-kw40gwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}45%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}50%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-kw40gwdanimation{animation:gwd-gen-kw40gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-kw40gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-kw40gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-2uv8gwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}50%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}55%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-2uv8gwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}50%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}55%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-2uv8gwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}50%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}55%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-2uv8gwdanimation{animation:gwd-gen-2uv8gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-2uv8gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-2uv8gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-1x97gwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}55%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}60%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-1x97gwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}55%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}60%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-1x97gwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}55%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}60%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-1x97gwdanimation{animation:gwd-gen-1x97gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-1x97gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-1x97gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-1i1egwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}60%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}65%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-1i1egwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}60%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}65%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-1i1egwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}60%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}65%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-1i1egwdanimation{animation:gwd-gen-1i1egwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-1i1egwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-1i1egwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-1sapgwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}65%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}70%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-1sapgwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}65%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}70%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-1sapgwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}65%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}70%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-1sapgwdanimation{animation:gwd-gen-1sapgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-1sapgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-1sapgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-5qotgwdanimation_gwd-keyframes{0%{transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}12.5%{transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}25%{transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}37.5%{transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}50%{transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}62.5%{transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}75%{transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}87.5%{transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-5qotgwdanimation_gwd-keyframes{0%{-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}12.5%{-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}25%{-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}37.5%{-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}50%{-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}62.5%{-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}75%{-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}87.5%{-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{-webkit-transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-5qotgwdanimation_gwd-keyframes{0%{-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}12.5%{-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}25%{-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}37.5%{-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}50%{-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}62.5%{-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}75%{-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}87.5%{-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{-moz-transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-5qotgwdanimation{animation:gwd-gen-5qotgwdanimation_gwd-keyframes 4s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-5qotgwdanimation_gwd-keyframes 4s linear 0s infinite normal forwards;-moz-animation:gwd-gen-5qotgwdanimation_gwd-keyframes 4s linear 0s infinite normal forwards}@keyframes gwd-gen-faadgwdanimation_gwd-keyframes{0%{opacity:.2;transform:scale3d(.5,.8,1);-webkit-transform:scale3d(.5,.8,1);-moz-transform:scale3d(.5,.8,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}50%{opacity:.5;transform:scale3d(1,.8,1);-webkit-transform:scale3d(1,.8,1);-moz-transform:scale3d(1,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{opacity:.2;transform:scale3d(.5,.8,1);-webkit-transform:scale3d(.5,.8,1);-moz-transform:scale3d(.5,.8,1);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-faadgwdanimation_gwd-keyframes{0%{opacity:.2;-webkit-transform:scale3d(.5,.8,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}50%{opacity:.5;-webkit-transform:scale3d(1,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{opacity:.2;-webkit-transform:scale3d(.5,.8,1);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-faadgwdanimation_gwd-keyframes{0%{opacity:.2;-moz-transform:scale3d(.5,.8,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}50%{opacity:.5;-moz-transform:scale3d(1,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{opacity:.2;-moz-transform:scale3d(.5,.8,1);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-faadgwdanimation{animation:gwd-gen-faadgwdanimation_gwd-keyframes 1s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-faadgwdanimation_gwd-keyframes 1s linear 0s infinite normal forwards;-moz-animation:gwd-gen-faadgwdanimation_gwd-keyframes 1s linear 0s infinite normal forwards}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1653{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-alsm{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-f0mu{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1sr3{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1ffn{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-16f3{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1rrs{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1dhi{position:absolute;transform-origin:283.711px 283.516px 0;-webkit-transform-origin:283.711px 283.516px 0;-moz-transform-origin:283.711px 283.516px 0;height:568px;width:568px;top:0;transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);transform-style:preserve-3d;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1izg{position:absolute;width:568px;height:604.02px;opacity:.2;transform-style:preserve-3d;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform:scale3d(.5,.8,1);-webkit-transform:scale3d(.5,.8,1);-moz-transform:scale3d(.5,.8,1);top:55px;left:0}[data-gwd-group=SpinnerGroup]{width:611.979px;height:598.605px}.gwd-div-1v1s{transform:scale(.5,.5)}\n", document.head.appendChild(e)
                }
            }
            return t.prototype.setPosition = function(t) {
                this.position = t
            }, t.prototype.skipAdCheck = function() {
                this.adSkippable && (st.GetIsMinimizeTestCountry() || this.minimizeFeature ? (this.hideElement(this.skipContainer), p.track(s.tracking.minimizeButton, {
                    position: this.position
                }), u.sendMessage(s.message.minimizeAd)) : (p.track(s.tracking.manualSkipButton, {
                    position: this.position
                }), this.internalSDK.skipAd()))
            }, t.prototype.setupEvents = function(t) {
                this.internalSDK = t, this.skipContainer.addEventListener("click", this.skipAdCheck.bind(this))
            }, t.prototype.hide = function() {
                window.clearTimeout(this.skipTimeout), window.clearInterval(this.skipCountdown), this.hideElement(this.containerDiv), this.hideElement(this.progressContainer), this.hideSkipButton(), this.hidePauseButton(), this.hideElement(this.startAdButton), this.containerDiv.classList.remove("pokiSdkOverlay"), this.progressBar.style.width = "0%"
            }, t.prototype.hideSpinner = function() {
                this.hideElement(this.spinnerContainer)
            }, t.prototype.showWithOpacity = function() {
                this.showElement(this.spinnerContainer), this.showElement(this.containerDiv), this.showElement(this.progressContainer)
            }, t.prototype.show = function() {
                this.containerDiv.classList.add("pokiSdkOverlay"), this.showElement(this.containerDiv), this.showElement(this.progressContainer)
            }, t.prototype.getVideoBounds = function() {
                return this.adContainer.getBoundingClientRect()
            }, t.prototype.getAdContainer = function() {
                return this.adContainer
            }, t.prototype.getVideoContainer = function() {
                return this.videoContainer
            }, t.prototype.showPauseButton = function() {
                this.showElement(this.pauseButton), this.internalSDK && this.pauseButton.addEventListener("click", this.internalSDK.resumeAd.bind(this.internalSDK))
            }, t.prototype.hidePauseButton = function() {
                this.hideElement(this.pauseButton), this.internalSDK && this.pauseButton.removeEventListener("click", this.internalSDK.resumeAd.bind(this.internalSDK))
            }, t.prototype.showStartAdButton = function() {
                this.showElement(this.startAdButton), this.internalSDK && this.startAdButton.addEventListener("click", this.internalSDK.startAdClicked.bind(this.internalSDK))
            }, t.prototype.hideStartAdButton = function() {
                this.hideElement(this.startAdButton), this.internalSDK && this.startAdButton.removeEventListener("click", this.internalSDK.startAdClicked.bind(this.internalSDK))
            }, t.prototype.showSkipButton = function() {
                this.showElement(this.skipContainer)
            }, t.prototype.hideSkipButton = function() {
                this.hideElement(this.skipContainer)
            }, t.prototype.createElements = function() {
                if (this.containerDiv = document.createElement("div"), this.countdownDiv = document.createElement("div"), this.insideContainer = document.createElement("div"), this.pauseButton = document.createElement("div"), this.startAdButton = document.createElement("div"), this.progressBar = document.createElement("div"), this.progressContainer = document.createElement("div"), this.skipContainer = document.createElement("div"), this.spinnerContainer = document.createElement("div"), this.adContainer = document.createElement("div"), this.videoContainer = document.createElement("video"), this.adContainer.id = "pokiSDKAdContainer", this.videoContainer.id = "pokiSDKVideoContainer", this.containerDiv.className = "pokiSdkContainer", this.countdownDiv.className = I, this.insideContainer.className = "pokiSdkInsideContainer", this.pauseButton.className = _, this.pauseButton.innerHTML = "Tap anywhere to â–¶ï¸", this.startAdButton.className = "pokiSdkStartAdButton", this.startAdButton.innerHTML = "Tap anywhere to play ad", this.progressBar.className = D, this.progressContainer.className = "pokiSdkProgressContainer", this.skipContainer.className = O, this.spinnerContainer.className = L, this.adContainer.className = "pokiSDKAdContainer", this.videoContainer.className = "pokiSdkVideoContainer", this.spinnerContainer.innerHTML = '\n\t\t\t<div id="new-progress-spinner" style="z-index:10;position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale3d(0.5, 0.5, 0.5);">\n\t\t\t\t<div class="gwd-div-1v1s" data-gwd-group="SpinnerGroup">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_1.svg" class="gwd-img-1653 gwd-gen-no02gwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_1">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_2.svg" class="gwd-img-alsm gwd-gen-4pvrgwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_2">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_3.svg" class="gwd-img-f0mu gwd-gen-kw40gwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_3">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_4.svg" class="gwd-img-1sr3 gwd-gen-2uv8gwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_4">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_5.svg" class="gwd-img-1ffn gwd-gen-1x97gwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_5">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_6.svg" class="gwd-img-16f3 gwd-gen-1i1egwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_6">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_7.svg" class="gwd-img-1rrs gwd-gen-1sapgwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_7">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2.0/static/hand_fingers_isolated.svg" class="gwd-img-1dhi gwd-gen-5qotgwdanimation gwd-grp-13td" data-gwd-grp-id="heart">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/shadow_new_3.svg" class="gwd-img-1izg gwd-gen-faadgwdanimation gwd-grp-13td" data-gwd-grp-id="shadow_new_3">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t', this.hide(), this.videoContainer.setAttribute("playsinline", "playsinline"), this.videoContainer.setAttribute("muted", "muted"), this.containerDiv.appendChild(this.insideContainer), this.containerDiv.appendChild(this.skipContainer), this.containerDiv.appendChild(this.spinnerContainer), this.insideContainer.appendChild(this.progressContainer), this.insideContainer.appendChild(this.videoContainer), this.insideContainer.appendChild(this.adContainer), this.containerDiv.appendChild(this.pauseButton), this.containerDiv.appendChild(this.startAdButton), this.progressContainer.appendChild(this.progressBar), this.wrapper.appendChild(this.containerDiv), this.skipContainer.appendChild(this.countdownDiv), this.wrapper === document.body) this.containerDiv.classList.add("pokiSdkFixed");
                else {
                    var t = window.getComputedStyle(this.wrapper).position;
                    t && -1 !== ["absolute", "fixed", "relative"].indexOf(t) || (this.wrapper.style.position = "relative")
                }
            }, t
        }(),
        R = !0,
        Z = {};
    var G = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB", "IS", "LI", "NO"],
        F = ["US"],
        Q = ["ZZ"];

    function N(t) {
        return Q.includes(t)
    }
    var X = function(t, n, e, i) {
            return new(e || (e = Promise))((function(r, o) {
                function a(t) {
                    try {
                        d(i.next(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function s(t) {
                    try {
                        d(i.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function d(t) {
                    var n;
                    t.done ? r(t.value) : (n = t.value, n instanceof e ? n : new e((function(t) {
                        t(n)
                    }))).then(a, s)
                }
                d((i = i.apply(t, n || [])).next())
            }))
        },
        H = function(t, n) {
            var e, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function s(o) {
                return function(s) {
                    return function(o) {
                        if (e) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (e = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1], r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2], a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = n.call(t, a)
                        } catch (t) {
                            o = [6, t], i = 0
                        } finally {
                            e = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        },
        U = function() {
            function t() {
                var t = this;
                this.bannerTimeout = null, this.allowedToPlayAd = !1, this.runningAd = !1, this.currentWidth = 640, this.currentHeight = 480, this.currentRequestIsMuted = !1, this.canWeAutoPlayWithSound = function() {
                    return X(t, void 0, void 0, (function() {
                        return H(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!this.blankVideo) return [2, !1];
                                    t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, , 4]), [4, this.blankVideo.play()];
                                case 2:
                                    return t.sent(), [2, !0];
                                case 3:
                                    return t.sent(), [2, !1];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }, this.videoElement = document.getElementById("pokiSDKVideoContainer"), this.adsManager = null, this.initAdDisplayContainer(), this.initBlankVideo(), this.initAdsLoader()
            }
            return t.prototype.initAdDisplayContainer = function() {
                this.adDisplayContainer || (this.adDisplayContainer = new google.ima.AdDisplayContainer(document.getElementById("pokiSDKAdContainer"), this.videoElement))
            }, t.prototype.initBlankVideo = function() {
                this.blankVideo = document.createElement("video"), this.blankVideo.setAttribute("playsinline", "playsinline");
                var t = document.createElement("source");
                t.src = "data:video/mp4;base64, AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw", this.blankVideo.appendChild(t)
            }, t.prototype.initAdsLoader = function() {
                var t = this;
                this.adsLoader || (this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer), this.adsLoader.getSettings().setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE), this.adsLoader.getSettings().setDisableCustomPlaybackForIOS10Plus(!0), this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded, !1, this), this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError, !1, this), this.videoElement.addEventListener("onended", (function() {
                    return t.adsLoader.contentComplete()
                })))
            }, t.prototype.requestAd = function(t) {
                return X(this, void 0, void 0, (function() {
                    var n;
                    return H(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return this.runningAd ? [2] : (this.runningAd = !0, this.adDisplayContainer.initialize(), this.videoElement.src = "", (n = new google.ima.AdsRequest).adTagUrl = t, n.linearAdSlotWidth = this.currentWidth, n.linearAdSlotHeight = this.currentHeight, n.nonLinearAdSlotWidth = this.currentWidth, n.nonLinearAdSlotHeight = this.currentHeight, n.forceNonLinearFullSlot = !0, [4, this.canWeAutoPlayWithSound()]);
                            case 1:
                                return e.sent() ? (n.setAdWillPlayMuted(!1), this.currentRequestIsMuted = !1) : (n.setAdWillPlayMuted(!0), this.currentRequestIsMuted = !0), this.allowedToPlayAd = !0, this.adsLoader.requestAds(n), [2]
                        }
                    }))
                }))
            }, t.prototype.resize = function(t, n, e) {
                void 0 === e && (e = google.ima.ViewMode.NORMAL), this.currentWidth = t, this.currentHeight = n, this.adsManager && this.adsManager.resize(t, n, e)
            }, t.prototype.onAdsManagerLoaded = function(t) {
                var n = new google.ima.AdsRenderingSettings;
                n.enablePreloading = !0, n.restoreCustomPlaybackStateOnAdBreakComplete = !0, this.adsManager = t.getAdsManager(this.videoElement, n), this.currentRequestIsMuted && this.adsManager.setVolume(0), this.allowedToPlayAd ? (this.attachAdEvents(), c.dispatchEvent(s.ads.ready)) : this.tearDown()
            }, t.prototype.startPlayback = function() {
                try {
                    this.adsManager.init(this.currentWidth, this.currentHeight, google.ima.ViewMode.NORMAL), this.adsManager.start()
                } catch (t) {
                    this.videoElement.play()
                }
            }, t.prototype.startIOSPlayback = function() {
                this.adsManager.start()
            }, t.prototype.stopPlayback = function() {
                c.dispatchEvent(s.ads.stopped), this.tearDown()
            }, t.prototype.resumeAd = function() {
                c.dispatchEvent(s.ads.video.resumed), this.adsManager && this.adsManager.resume()
            }, t.prototype.tearDown = function() {
                this.adsManager && (this.adsManager.stop(), this.adsManager.destroy(), this.adsManager = null), null !== this.bannerTimeout && (clearTimeout(this.bannerTimeout), this.bannerTimeout = null), this.adsLoader && (this.adsLoader.contentComplete(), this.adsLoader.destroy(), this.adsLoader = null, this.initAdsLoader()), this.runningAd = !1
            }, t.prototype.attachAdEvents = function() {
                var t = this,
                    n = google.ima.AdEvent.Type;
                this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError, !1, this), [n.AD_PROGRESS, n.ALL_ADS_COMPLETED, n.CLICK, n.COMPLETE, n.IMPRESSION, n.PAUSED, n.SKIPPED, n.STARTED, n.USER_CLOSE].forEach((function(n) {
                    t.adsManager.addEventListener(n, t.onAdEvent, !1, t)
                }))
            }, t.prototype.onAdEvent = function(t) {
                var n = this,
                    e = t.getAd();
                switch (t.type) {
                    case google.ima.AdEvent.Type.AD_PROGRESS:
                        c.dispatchEvent(s.ads.video.progress, t.getAdData());
                        break;
                    case google.ima.AdEvent.Type.STARTED:
                        t.remainingTime = this.adsManager.getRemainingTime(), t.remainingTime <= 0 && (t.remainingTime = 15), e.isLinear() || (this.bannerTimeout = window.setTimeout((function() {
                            c.dispatchEvent(s.ads.completed, {
                                rewardAllowed: !!t.rewardAllowed
                            }), n.tearDown()
                        }), 1e3 * (t.remainingTime + 1))), c.dispatchEvent(s.ads.started, {
                            remainingTime: 1e3 * (t.remainingTime || 0),
                            adId: e.getAdId(),
                            adSystem: e.getAdSystem(),
                            advertiserName: e.getAdvertiserName(),
                            apiFramework: e.getApiFramework(),
                            creativeAdId: e.getCreativeAdId(),
                            creativeId: e.getCreativeId(),
                            description: e.getDescription(),
                            mediaUrl: e.getMediaUrl(),
                            title: e.getTitle()
                        });
                        break;
                    case google.ima.AdEvent.Type.COMPLETE:
                        c.dispatchEvent(s.ads.completed, {
                            rewardAllowed: !0
                        }), this.tearDown();
                        break;
                    case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                    case google.ima.AdEvent.Type.USER_CLOSE:
                        this.tearDown();
                        break;
                    case google.ima.AdEvent.Type.PAUSED:
                        this.adsManager.pause(), c.dispatchEvent(s.ads.video.paused);
                        break;
                    case google.ima.AdEvent.Type.CLICK:
                        c.dispatchEvent(s.ads.video.clicked);
                        break;
                    case google.ima.AdEvent.Type.SKIPPED:
                        c.dispatchEvent(s.ads.skipped), c.dispatchEvent(s.ads.completed);
                        break;
                    case google.ima.AdEvent.Type.IMPRESSION:
                        c.dispatchEvent(s.ads.impression)
                }
            }, t.prototype.onAdError = function(t) {
                this.tearDown();
                var n = t.getError && t.getError().toString() || "Unknown";
                c.dispatchEvent(s.ads.video.error, {
                    message: n
                })
            }, t.prototype.muteAd = function() {
                void 0 !== this.adsManager && null != this.adsManager && this.adsManager.setVolume(0)
            }, t.prototype.isAdRunning = function() {
                return this.runningAd
            }, t
        }(),
        V = function(t) {
            return new Promise((function(n, e) {
                var i = document.createElement("script");
                i.type = "text/javascript", i.async = !0, i.src = t;
                var r = function() {
                    i.readyState && "loaded" !== i.readyState && "complete" !== i.readyState || (n(), i.onload = null, i.onreadystatechange = null)
                };
                i.onload = r, i.onreadystatechange = r, i.onerror = e, document.head.appendChild(i)
            }))
        },
        W = function(t) {
            return Object.keys(t).map((function(n) {
                return encodeURIComponent(n) + "=" + encodeURIComponent(t[n])
            })).join("&")
        },
        K = function() {
            return (K = Object.assign || function(t) {
                for (var n, e = 1, i = arguments.length; e < i; e++)
                    for (var r in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                return t
            }).apply(this, arguments)
        },
        J = function(t, n, e, i) {
            return new(e || (e = Promise))((function(r, o) {
                function a(t) {
                    try {
                        d(i.next(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function s(t) {
                    try {
                        d(i.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function d(t) {
                    var n;
                    t.done ? r(t.value) : (n = t.value, n instanceof e ? n : new e((function(t) {
                        t(n)
                    }))).then(a, s)
                }
                d((i = i.apply(t, n || [])).next())
            }))
        },
        q = function(t, n) {
            var e, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function s(o) {
                return function(s) {
                    return function(o) {
                        if (e) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (e = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1], r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2], a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = n.call(t, a)
                        } catch (t) {
                            o = [6, t], i = 0
                        } finally {
                            e = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        };
    var Y = function() {
            var t = W({
                host: window.location.host || window.location.hostname,
                href: window.location.href,
                pathname: window.location.pathname,
                referrer: document.referrer,
                "ref-id": b("ref")
            });
            return fetch("", {
                method: "POST",
                body: t,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            }).then((function(t) {
                return J(void 0, void 0, void 0, (function() {
                    var n;
                    return q(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return t.status >= 200 && t.status < 400 ? [4, t.json()] : [3, 2];
                            case 1:
                                return n = e.sent(), [2, K(K({}, n), {
                                    hash: 1 === n.distributorId || 2 === n.distributorId ? n.hash : n.hash.replace(/(G[0-9]+L)([0-9]*)/gi, "$11")
                                })];
                            case 2:
                                throw t
                        }
                    }))
                }))
            })).catch((function(t) {
                return function(t) {
                    return J(this, void 0, void 0, (function() {
                        var n, e, i, r, o, a, s, d, c, A, u;
                        return q(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return l.trys.push([0, 3, , 4]), i = (e = JSON).stringify, r = {
                                        c: "sdk-hit-error",
                                        ve: 7
                                    }, o = {
                                        k: "error"
                                    }, s = (a = JSON).stringify, d = {
                                        status: t.status
                                    }, (c = t.json) ? [4, t.json()] : [3, 2];
                                case 1:
                                    c = l.sent(), l.label = 2;
                                case 2:
                                    if (n = i.apply(e, [(r.d = [(o.v = s.apply(a, [(d.json = c, d.body = W({
                                            host: window.location.host || window.location.hostname,
                                            href: window.location.href,
                                            pathname: window.location.pathname,
                                            referrer: document.referrer,
                                            "ref-id": b("ref")
                                        }), d.name = t.name, d.message = t.message, d)]), o)], r)]), A = "", navigator.sendBeacon) navigator.sendBeacon(A, n);
                                    else try {
                                        (u = new XMLHttpRequest).open("POST", A, !0), u.send(n)
                                    } catch (t) {}
                                    return [3, 4];
                                case 3:
                                    return l.sent(), [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }(t)
            }))
        },
        $ = function(t, n, e, i) {
            return new(e || (e = Promise))((function(r, o) {
                function a(t) {
                    try {
                        d(i.next(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function s(t) {
                    try {
                        d(i.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function d(t) {
                    var n;
                    t.done ? r(t.value) : (n = t.value, n instanceof e ? n : new e((function(t) {
                        t(n)
                    }))).then(a, s)
                }
                d((i = i.apply(t, n || [])).next())
            }))
        },
        tt = function(t, n) {
            var e, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function s(o) {
                return function(s) {
                    return function(o) {
                        if (e) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (e = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1], r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2], a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = n.call(t, a)
                        } catch (t) {
                            o = [6, t], i = 0
                        } finally {
                            e = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        };
    var nt = function() {
            var t = window.location.pathname;
            "/" !== t[0] && (t = "/" + t);
            var n = JSON.stringify({
                href: window.location.protocol + "//" + window.location.host + t + window.location.search
            });
            return fetch("", {
                method: "POST",
                body: n,
                headers: {
                    "Content-Type": "text/plain"
                }
            }).then((function(t) {
                return $(void 0, void 0, void 0, (function() {
                    var n;
                    return tt(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return t.status >= 200 && t.status < 400 ? [4, t.json()] : [3, 2];
                            case 1:
                                return [2, {
                                    gameId: (n = e.sent()).game_id,
                                    country: n.country,
                                    adTiming: {
                                        preroll: n.ad_settings.preroll,
                                        timePerTry: n.ad_settings.time_per_try,
                                        timeBetweenAds: n.ad_settings.time_between_ads,
                                        startAdsAfter: n.ad_settings.start_ads_after
                                    }
                                }];
                            case 2:
                                throw t
                        }
                    }))
                }))
            })).catch((function(t) {
                return function(t) {
                    return $(this, void 0, void 0, (function() {
                        var n, e, i, r, o, a, s, d, c, A, u, l;
                        return tt(this, (function(m) {
                            switch (m.label) {
                                case 0:
                                    return m.trys.push([0, 3, , 4]), "/" !== (n = window.location.pathname)[0] && (n = "/" + n), r = (i = JSON).stringify, o = {
                                        c: "sdk-p4d-error",
                                        ve: 7
                                    }, a = {
                                        k: "error"
                                    }, d = (s = JSON).stringify, c = {
                                        status: t.status
                                    }, (A = t.json) ? [4, t.json()] : [3, 2];
                                case 1:
                                    A = m.sent(), m.label = 2;
                                case 2:
                                    if (e = r.apply(i, [(o.d = [(a.v = d.apply(s, [(c.json = A, c.body = JSON.stringify({
                                            href: window.location.protocol + "//" + window.location.host + n + window.location.search
                                        }), c.name = t.name, c.message = t.message, c)]), a)], o)]), u = "", navigator.sendBeacon) navigator.sendBeacon(u, e);
                                    else try {
                                        (l = new XMLHttpRequest).open("POST", u, !0), l.send(e)
                                    } catch (t) {}
                                    return [3, 4];
                                case 3:
                                    return m.sent(), [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }(t)
            }))
        },
        et = e(65),
        it = function() {
            return (it = Object.assign || function(t) {
                for (var n, e = 1, i = arguments.length; e < i; e++)
                    for (var r in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                return t
            }).apply(this, arguments)
        },
        rt = {},
        ot = function(t) {
            return "poki-display-" + t[0] + "x" + t[1] + "-" + document.body.querySelectorAll('[data-poki-ad-size="' + t.join("x") + '"] .poki-ad-slot').length
        },
        at = function() {
            function t() {
                var n = this;
                this.autoStartOnReady = !1, this.criteria = {}, this.debug = !1, this.debugIsOverwritten = !1, this.handlers = {}, this.isInitialized = !1, this.programmaticAdsEnabled = !0, this.sdkBooted = !1, this.sdkImaError = !1, this.startAdEnabled = !1, this.adReady = !1, this.setPlayerAge = function(t) {
                    t && function(t, n) {
                        if (R) try {
                            localStorage.setItem(t, n)
                        } catch (e) {
                            R = !1, Z[t] = n
                        } else Z[t] = n
                    }("playerAge", t)
                }, this.toggleNonPersonalized = function(n) {
                    t.nonPersonalized = n
                }, this.setConsentString = function(n) {
                    t.consentString = n
                }, this.sdkNotBootedButCalled = function() {
                    console.error("The Poki SDK has not yet been initialized")
                }, this.defineSlot = function(t) {
                    var e = ot(t.size),
                        i = n.googletag.defineSlot("/21682198607/" + t.id, t.size, e);
                    return i.addService(n.googletag.pubads()), rt[e] = i, n.googletag.enableServices(), i
                }
            }
            return t.prototype.init = function(n) {
                var e = this;
                if (void 0 === n && (n = {}), "undefined" != typeof window) {
                    if (this.isInitialized) return console.error("Poki SDK has already been initialized");
                    var i = n.adTagUrl,
                        r = n.adTiming,
                        o = void 0 === r ? {} : r,
                        a = n.customCriteria,
                        d = void 0 === a ? {} : a,
                        A = n.debug,
                        u = void 0 !== A && A,
                        l = n.onReady,
                        m = void 0 === l ? null : l,
                        g = n.onAdblocked,
                        h = void 0 === g ? null : g,
                        w = n.prebid,
                        y = void 0 === w ? {} : w,
                        k = n.waterfallRetries,
                        S = n.wrapper,
                        E = void 0 === S ? document.body : S,
                        z = n.skipFeature,
                        x = void 0 !== z && z,
                        C = n.minimizeFeature,
                        I = void 0 !== C && C,
                        _ = n.countdownStart,
                        D = void 0 === _ ? 15 : _,
                        O = n.renderSkipButton,
                        L = void 0 !== O && O,
                        j = n.forceDisableHB,
                        R = void 0 !== j && j,
                        Z = V(et.a).then((function() {
                            var t;
                            t = y, window.pbjs = window.pbjs || {}, window.pbjs.que = window.pbjs.que || [], window.pbjs.que.push((function() {
                                window.pbjs.addAdUnits(t.adUnits || T), window.pbjs.setConfig(v(v({}, B), t.config))
                            }))
                        }));
                    m && this.registerHandler("onReady", m), h && this.registerHandler("onAdblocked", h);
                    var G = parseInt(b("site_id"), 10) || 0;
                    this.setupDefaultEvents(), this.debug = !!u;
                    var F = it({}, f);
                    i ? (t.isPokiPlatform = !0, F = it(it({}, F), {
                        adTagUrl: i,
                        customCriteria: d,
                        adTiming: o
                    })) : t.isPokiPlatform = !1;
                    var Q = Y,
                        N = nt;
                    (t.isPokiPlatform || this.debug) && (Q = function() {
                        return Promise.resolve(F)
                    }, N = function() {
                        return Promise.resolve()
                    }), window.addEventListener("resize", this.resize.bind(this), !1), window.addEventListener("message", this.onMessage.bind(this), !1), p.setupDefaultEvents();
                    var X = b("pokiDebug");
                    return X ? (this.setDebug("true" === X), this.debugIsOverwritten = !0) : this.setDebug(u), Promise.all([N(), Q(), V(""), V(""), Z]).catch((function() {
                        c.dispatchEvent(s.adblocked)
                    })).then((function(n) {
                        if (void 0 !== n) {
                            var i = n[0],
                                r = n[1],
                                o = it(it({}, f), r);
                            i && (o.customCriteria = it(it({}, o.customCriteria), {
                                p4d_game_id: i.gameId
                            })), e.enableSettings(o), e.adTimings.startStartAdsAfterTimer(), (x || I) && t.isPokiPlatform ? e.playerSkin = new M({
                                wrapper: E,
                                minimizeFeature: I,
                                skipFeature: x,
                                countdownStart: D,
                                renderSkipButton: L
                            }) : e.playerSkin = new M({
                                wrapper: E,
                                minimizeFeature: !1,
                                skipFeature: !1
                            }), e.ima = new U, e.playerSkin.setupEvents(e), e.waterfall = new P(e.ima, {
                                timing: e.adTimings,
                                totalRetries: k,
                                adTagUrl: o.adTagUrl,
                                siteID: G,
                                disableHB: 21 === G || R
                            }), e.googletag = window.googletag || {
                                cmd: []
                            }, c.dispatchEvent(s.ready)
                        }
                    }))
                }
            }, t.prototype.requestAd = function(n) {
                void 0 === n && (n = {});
                var e = n.autoStart,
                    i = void 0 === e || e,
                    r = n.customCriteria,
                    o = void 0 === r ? {} : r,
                    a = n.onFinish,
                    d = void 0 === a ? null : a,
                    u = n.onStart,
                    l = void 0 === u ? null : u,
                    m = n.position,
                    p = void 0 === m ? null : m,
                    f = n.runOnPlatform,
                    g = void 0 !== f && f,
                    h = n.overwriteAdTag,
                    w = void 0 === h ? void 0 : h;
                if (c.clearAnnotations(), this.autoStartOnReady = !1 !== i, d && this.registerHandler("onFinish", d), l && this.registerHandler("onStart", l), !this.sdkBooted) return c.dispatchEvent(s.ads.error, {
                    message: "Requesting ad on unbooted SDK"
                }), void this.sdkNotBootedButCalled();
                if (this.sdkImaError) c.dispatchEvent(s.ads.error, {
                    message: "Adblocker has been detected"
                });
                else {
                    if ((y() || k()) && p !== s.ads.position.rewarded) return c.dispatchEvent(s.ads.error, {
                        reason: "Interstitials are disabled on mobile"
                    });
                    if (null === p || !A(p, s.ads.position)) return console.error("POKI-SDK: Invalid position");
                    if (this.ima.isAdRunning() || this.waterfall.isRunning()) return c.dispatchEvent(s.ads.busy);
                    if (this.adReady) return c.dispatchEvent(s.ads.ready);
                    if (p === s.ads.position.preroll && !this.adTimings.prerollPossible()) return c.dispatchEvent(s.ads.limit, {
                        reason: s.info.messages.prerollLimit
                    });
                    if (p !== s.ads.position.rewarded && !this.adTimings.requestPossible()) return c.dispatchEvent(s.ads.limit, {
                        reason: s.info.messages.timeLimit
                    });
                    var b = it(it({}, this.criteria), {
                        position: p
                    });
                    this.debug && (p === s.ads.position.rewarded ? b.debug = "ad-sdk-test-rewarded" : b.debug = "ad-sdk-test-video"), (t.isPokiPlatform || p === s.ads.position.rewarded) && (b = it(it({}, b), o)), b = it(it({}, b), this.genericCriteria()), this.resize(), this.playerSkin.showWithOpacity(), this.playerSkin.setPosition(p), this.waterfall.start(b, p, w ? [w] : [], g)
                }
            }, t.prototype.runWaterfallChain = function(t) {
                void 0 === t && (t = {});
                var n = t.customCriteria,
                    e = void 0 === n ? {} : n,
                    i = t.onFinish,
                    r = void 0 === i ? null : i,
                    o = t.onStart,
                    a = void 0 === o ? null : o,
                    d = t.overwriteAdTags,
                    u = void 0 === d ? [] : d,
                    l = t.position,
                    m = void 0 === l ? null : l;
                if (c.clearAnnotations(), r && this.registerHandler("onFinish", r), a && this.registerHandler("onStart", a), !this.sdkBooted) return c.dispatchEvent(s.ads.error, {
                    message: "Requesting ad on unbooted SDK"
                }), void this.sdkNotBootedButCalled();
                if (this.sdkImaError) c.dispatchEvent(s.ads.error, {
                    message: "Adblocker has been detected"
                });
                else {
                    if (null === m || !A(m, s.ads.position)) return console.error("POKI-SDK: Invalid position");
                    if (this.ima.isAdRunning() || this.waterfall.isRunning()) return c.dispatchEvent(s.ads.busy);
                    if (this.adReady) return c.dispatchEvent(s.ads.ready);
                    this.autoStartOnReady = !0;
                    var p = it(it(it(it({}, this.criteria), {
                        position: m
                    }), e), this.genericCriteria());
                    this.resize(), this.playerSkin.showWithOpacity(), this.playerSkin.setPosition(m), this.waterfall.start(p, m, u, !1)
                }
            }, t.prototype.displayAd = function(t, n) {
                var e = this;
                if (n) {
                    if (!this.sdkBooted) return c.dispatchEvent(s.ads.displayError, {
                        message: "Requesting ad on unbooted SDK"
                    }), void this.sdkNotBootedButCalled();
                    if (t)
                        if (this.sdkImaError) c.dispatchEvent(s.ads.displayError, {
                            message: "Adblocker has been detected"
                        });
                        else {
                            var i = function(t) {
                                if ((y() || k() || ["970x250", "300x250", "728x90", "160x600"].includes(t)) && (!y() && !k() || ["320x50"].includes(t))) {
                                    var n = "desktop";
                                    y() && (n = "mobile"), k() && (n = "tablet");
                                    var e = parseInt(b("site_id"), 10) || 0;
                                    return {
                                        id: at.GetIsPokiIFrame() ? n + "_ingame_" + t + "/" + e + "_" + n + "_ingame_" + t : "external_" + n + "_display_ingame/external_" + n + "_ingame_" + t,
                                        size: t.split("x").map((function(t) {
                                            return parseInt(t, 10)
                                        }))
                                    }
                                }
                            }(n);
                            if (!i) return c.dispatchEvent(s.ads.displayError, {
                                reason: "Display size " + n + " is not supported on this device"
                            });
                            var r = it(it(it({}, this.criteria), this.genericCriteria()), {
                                debug: this.debug ? "ad-sdk-test-display" : void 0
                            });
                            t.getAttribute("data-poki-ad-size") && (console.warn("Poki-SDK: Container already has a display ad in it. Destroying."), this.destroyAd(t)), this.googletag.cmd.push((function() {
                                var t = e.defineSlot(i);
                                t.clearTargeting(), Object.keys(r).forEach((function(n) {
                                    t.setTargeting(n, r[n])
                                }))
                            })), this.googletag.cmd.push((function() {
                                var n = document.createElement("div");
                                n.id = ot(i.size), n.className = "poki-ad-slot", n.style.width = i.size[0] + "px", n.style.height = i.size[1] + "px", t.appendChild(n), t.setAttribute("data-poki-ad-size", i.size.join("x")), e.googletag.display(n.id)
                            }))
                        } else c.dispatchEvent(s.ads.displayError, {
                        message: "Provided container does not exist"
                    })
                } else c.dispatchEvent(s.ads.displayError, {
                    message: "No ad size given, usage: displayAd(<container>, <size>)"
                })
            }, t.prototype.destroyAd = function(t) {
                var n = this;
                if (!this.sdkBooted) return c.dispatchEvent(s.ads.displayError, {
                    message: "Attempting destroyAd on unbooted SDK"
                }), void this.sdkNotBootedButCalled();
                this.sdkImaError ? c.dispatchEvent(s.ads.displayError, {
                    message: "Adblocker has been detected"
                }) : (t || (t = document.body), Array.from(t.getElementsByClassName("poki-ad-slot")).filter((function(t) {
                    return rt[t.id]
                })).forEach((function(t) {
                    var e = rt[t.id];
                    n.googletag.cmd.push((function() {
                        t.parentElement && t.parentElement.removeChild(t), n.googletag.destroySlots([e])
                    }))
                })))
            }, t.prototype.enableSettings = function(n) {
                this.criteria = it({}, n.customCriteria), t.isPokiPlatform || (this.criteria.pdata = n.hash), this.adTimings = new h(n.adTiming), this.country = n.country
            }, t.prototype.togglePlayerAdvertisingConsent = function(t) {
                if (t) {
                    var n, e = parseInt(function(t) {
                            if (!R) return Z[t];
                            try {
                                return localStorage.getItem(t)
                            } catch (n) {
                                return Z[t]
                            }
                        }("playerAge"), 10) || 0,
                        i = this.country,
                        r = (n = i, G.includes(n)),
                        o = function(t) {
                            return F.includes(t)
                        }(i),
                        a = N(i);
                    (r || o || N) && (r && e <= 12 || o && e <= 16 || a && e <= 16) ? this.disableProgrammatic(): this.enableProgrammatic()
                } else this.disableProgrammatic()
            }, t.prototype.disableProgrammatic = function() {
                t.childDirected = !0, this.programmaticAdsEnabled = !1
            }, t.prototype.enableProgrammatic = function() {
                t.childDirected = !1, this.programmaticAdsEnabled = !0
            }, t.prototype.getProgrammaticAdsEnabled = function() {
                return this.programmaticAdsEnabled
            }, t.prototype.setDebug = function(t) {
                var n = this;
                this.debugIsOverwritten || (p.setDebug(t), c.setDebug(t), this.waterfall ? this.waterfall.setDebug(t) : c.addEventListener(s.ready, (function() {
                    n.waterfall && n.waterfall.setDebug(t)
                })), this.debug = t)
            }, t.prototype.resize = function() {
                if (!this.sdkBooted) return this.sdkNotBootedButCalled();
                if (!this.sdkImaError) {
                    var t = this.playerSkin.getVideoBounds();
                    this.ima.resize(t.width, t.height)
                }
            }, t.prototype.onMessage = function(t) {
                if ("string" == typeof t.data.type) switch (t.data.type) {
                    case "toggleNonPersonalized":
                        this.toggleNonPersonalized(!(!t.data.content || !t.data.content.nonPersonalized));
                        break;
                    case "setPersonalizedADConsent":
                        this.toggleNonPersonalized(!(t.data.content && t.data.content.consent)), this.setConsentString(t.data.content ? t.data.content.consentString : "")
                }
            }, t.prototype.startAd = function() {
                if (!this.sdkBooted) return this.sdkNotBootedButCalled();
                this.sdkImaError || (this.adReady ? (this.resize(), this.playerSkin.show(), this.ima.startPlayback()) : c.dispatchEvent(s.ads.error, {
                    message: "No ads ready to start"
                }))
            }, t.prototype.startAdClicked = function() {
                "undefined" != typeof navigator && /(iPad|iPhone|iPod)/gi.test(navigator.userAgent) && this.startAdEnabled && (this.startAdEnabled = !1, this.playerSkin.hideStartAdButton(), this.ima.startIOSPlayback())
            }, t.prototype.stopAd = function() {
                if (!this.sdkBooted) return this.sdkNotBootedButCalled();
                this.sdkImaError || (this.waterfall.stopWaterfall(), this.ima.stopPlayback(), this.playerSkin.hide())
            }, t.prototype.resumeAd = function() {
                if (!this.sdkBooted) return this.sdkNotBootedButCalled();
                this.sdkImaError || (this.playerSkin.hidePauseButton(), this.ima.resumeAd())
            }, t.prototype.skipAd = function() {
                this.stopAd(), this.callHandler("onFinish", {
                    type: s.ads.completed,
                    rewardAllowed: !0
                })
            }, t.prototype.muteAd = function() {
                if (!this.sdkBooted) return this.sdkNotBootedButCalled();
                this.sdkImaError || this.ima.muteAd()
            }, t.prototype.registerHandler = function(t, n) {
                this.handlers[t] = n
            }, t.prototype.callHandler = function(t) {
                for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
                "function" == typeof this.handlers[t] && this.handlers[t](n)
            }, t.prototype.setupDefaultEvents = function() {
                var t = this;
                c.addEventListener(s.ready, (function() {
                    t.sdkBooted = !0, t.callHandler("onReady")
                })), c.addEventListener(s.adblocked, (function() {
                    t.sdkBooted = !0, t.sdkImaError = !0, t.callHandler("onAdblocked")
                })), c.addEventListener(s.ads.ready, (function() {
                    t.adReady = !0, t.autoStartOnReady && t.startAd()
                })), c.addEventListener(s.ads.started, (function() {
                    t.playerSkin.hideSpinner(), t.callHandler("onStart", {
                        type: s.ads.limit
                    })
                })), c.addEventListener(s.ads.video.paused, (function() {
                    t.playerSkin.showPauseButton()
                })), c.addEventListener(s.ads.limit, (function() {
                    t.callHandler("onFinish", {
                        type: s.ads.limit,
                        rewardAllowed: !1
                    })
                })), c.addEventListener(s.ads.stopped, (function() {
                    t.callHandler("onFinish", {
                        type: s.ads.stopped,
                        rewardAllowed: !1
                    })
                })), c.addEventListener(s.ads.error, (function() {
                    t.callHandler("onFinish", {
                        type: s.ads.error,
                        rewardAllowed: !1
                    })
                })), c.addEventListener(s.ads.busy, (function() {
                    t.callHandler("onFinish", {
                        type: s.ads.busy,
                        rewardAllowed: !1
                    })
                })), c.addEventListener(s.ads.completed, (function(n) {
                    t.callHandler("onFinish", {
                        type: s.ads.completed,
                        rewardAllowed: !!n.rewardAllowed
                    })
                })), c.addEventListener(s.ads.pushedToPlatform, (function() {
                    t.callHandler("onFinish", {
                        type: s.ads.pushedToPlatform,
                        rewardAllowed: !1
                    })
                })), [s.ads.limit, s.ads.stopped, s.ads.error, s.ads.busy, s.ads.completed, s.ads.pushedToPlatform].forEach((function(n) {
                    c.addEventListener(n, (function() {
                        t.playerSkin && t.playerSkin.hide(), t.adReady = !1
                    }))
                }))
            }, t.prototype.genericCriteria = function() {
                var t = {},
                    n = encodeURIComponent(b("tag") || ""),
                    e = encodeURIComponent(b("site_id") || ""),
                    i = encodeURIComponent(b("categories") || "");
                return t.tag = n, t.tag_site = n + "|" + e, t.site_id = e, t.categories = i, n.includes("exp-countdown-1") ? t.coutdown_test = 1 : n.includes("exp-countdown-2") ? t.coutdown_test = 2 : n.includes("exp-countdown-3") ? t.coutdown_test = 3 : n.includes("exp-countdown-4") && (t.coutdown_test = 4), this.programmaticAdsEnabled || (t.disable_programmatic = 1), t
            }, t.GetIsPokiPlatform = function() {
                return t.isPokiPlatform
            }, t.GetIsPokiIFrame = function() {
                return (parseInt(b("site_id"), 10) || 0) > 0
            }, t.GetIsMinimizeTestCountry = function() {
                var t = parseInt(b("site_id"), 10) || 0,
                    n = encodeURIComponent(b("tag") || ""),
                    e = y() || k();
                return (26 === t || 2 === t || 5 === t) && n.includes("-exp-minimize-ads.") && !e
            }, t.childDirected = !1, t.isPokiPlatform = !1, t.nonPersonalized = !1, t.consentString = "", t
        }(),
        st = at,
        dt = function() {
            return (dt = Object.assign || function(t) {
                for (var n, e = 1, i = arguments.length; e < i; e++)
                    for (var r in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                return t
            }).apply(this, arguments)
        },
        ct = function() {
            function t() {
                var t = this;
                this.gameStarted = !1, this.SDK = new st, this.init = function() {
                    return new Promise((function(n, e) {
                        t.SDK.init({
                            onReady: n,
                            onAdblocked: e
                        }), u.sendMessage(s.message.sdkDetails, {
                            version: "2.71.6"
                        })
                    }))
                }, this.initWithVideoHB = function() {
                    return t.init()
                }, this.gameLoadingProgress = function() {}, this.gameLoadingStart = function() {
                    p.track(s.tracking.screen.gameLoadingStarted)
                }, this.gameLoadingFinished = function() {
                    p.track(s.tracking.screen.gameLoadingFinished)
                }, this.gameplayStart = function() {
                    t.gameStarted || (t.gameStarted = !0, p.track(s.tracking.screen.firstRound)), p.track(s.tracking.screen.gameplayStart)
                }, this.gameInteractive = function() {
                    p.track(s.tracking.screen.gameInteractive)
                }, this.gameplayStop = function() {
                    p.track(s.tracking.screen.gameplayStop)
                }, this.roundStart = function(t) {
                    void 0 === t && (t = ""), t = String(t), p.track(s.tracking.screen.roundStart, {
                        identifier: t
                    })
                }, this.roundEnd = function(t) {
                    void 0 === t && (t = ""), t = String(t), p.track(s.tracking.screen.roundEnd, {
                        identifier: t
                    })
                }, this.customEvent = function(n, e, i) {
                    if (void 0 === i && (i = {}), !n || !e) return t.error("customEvent", "customEvent needs at least a noun and a verb");
                    n = String(n), e = String(e), i = dt({}, i), p.track(s.tracking.custom, {
                        eventNoun: n,
                        eventVerb: e,
                        eventData: i
                    })
                }, this.commercialBreak = function() {
                    return new Promise((function(n) {
                        p.track(s.tracking.screen.commercialBreak);
                        var e = t.gameStarted ? s.ads.position.midroll : s.ads.position.preroll;
                        st.GetIsMinimizeTestCountry() ? t.runPlatformVideo(e).then((function() {
                            return n()
                        })) : t.SDK.requestAd({
                            position: e,
                            onFinish: n
                        })
                    }))
                }, this.rewardedBreak = function() {
                    return new Promise((function(n) {
                        p.track(s.tracking.screen.rewardedBreak), st.GetIsMinimizeTestCountry() ? t.runPlatformVideo(s.ads.position.rewarded).then(n) : t.SDK.requestAd({
                            position: s.ads.position.rewarded,
                            onFinish: function(t) {
                                t.length > 0 ? n(t[0].rewardAllowed) : n(!1)
                            }
                        })
                    }))
                }, this.runPlatformVideo = function(n) {
                    return new Promise((function(e) {
                        if ("undefined" != typeof window) {
                            var i = function(t) {
                                if ("string" == typeof t.data.type) switch (t.data.type) {
                                    case "videoAdResult":
                                        window.removeEventListener("message", i, !1), e(t.data.content && t.data.content.rewardAllowed)
                                }
                            };
                            window.addEventListener("message", i, !1), t.SDK.requestAd({
                                position: n,
                                runOnPlatform: !0
                            })
                        } else e()
                    }))
                }, this.happyTime = function(n) {
                    void 0 === n && (n = 1), ((n = Number(n)) < 0 || n > 1) && (n = Math.max(0, Math.min(1, n)), t.warning("happyTime", "Intensity should be a value between 0 and 1, adjusted to " + n)), p.track(s.tracking.screen.happyTime, {
                        intensity: n
                    })
                }, this.muteAd = function() {
                    t.SDK.muteAd()
                }, this.setPlayerAge = function(n) {
                    p.track(s.tracking.setPlayerAge, {
                        age: n
                    }), n && t.SDK.setPlayerAge(n)
                }, this.togglePlayerAdvertisingConsent = function(n) {
                    p.track(s.tracking.togglePlayerAdvertisingConsent, {
                        didConsent: n
                    }), t.SDK.togglePlayerAdvertisingConsent(n), u.sendMessage(s.message.toggleProgrammaticAds, {
                        enabled: t.SDK.getProgrammaticAdsEnabled()
                    })
                }, this.warning = function(t, n) {
                    console.warn("PokiSDK." + t + ": " + n)
                }, this.error = function(t, n) {
                    console.error("PokiSDK." + t + ": " + n)
                }
            }
            return t.prototype.setDebug = function(t) {
                void 0 === t && (t = !0), this.SDK.setDebug(t)
            }, t.prototype.disableProgrammatic = function() {
                this.SDK.disableProgrammatic()
            }, t.prototype.toggleNonPersonalized = function(t) {
                void 0 === t && (t = !1), this.SDK.toggleNonPersonalized(t)
            }, t.prototype.setConsentString = function(t) {
                this.SDK.setConsentString(t)
            }, t.prototype.displayAd = function(t, n) {
                p.track(s.tracking.screen.displayAd, {
                    size: n
                }), this.SDK.displayAd(t, n)
            }, t.prototype.destroyAd = function(t) {
                p.track(s.tracking.screen.destroyAd), this.SDK.destroyAd(t)
            }, t
        }();
    window.PokiSDK = new ct
}]);
