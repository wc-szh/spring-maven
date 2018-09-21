/* Zepto v1.1.4 - zepto event ajax form ie - zeptojs.com/license */
var Zepto = function () {
    function L(t) {
        return null == t ? String(t) : j[S.call(t)] || "object"
    }

    function Z(t) {
        return "function" == L(t)
    }

    function $(t) {
        return null != t && t == t.window
    }

    function _(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }

    function D(t) {
        return "object" == L(t)
    }

    function R(t) {
        return D(t) && !$(t) && Object.getPrototypeOf(t) == Object.prototype
    }

    function M(t) {
        return "number" == typeof t.length
    }

    function k(t) {
        return s.call(t, function (t) {
            return null != t
        })
    }

    function z(t) {
        return t.length > 0 ? n.fn.concat.apply([], t) : t
    }

    function F(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function q(t) {
        return t in f ? f[t] : f[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }

    function H(t, e) {
        return "number" != typeof e || c[F(t)] ? e : e + "px"
    }

    function I(t) {
        var e, n;
        return u[t] || (e = a.createElement(t), a.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), u[t] = n), u[t]
    }

    function V(t) {
        return "children" in t ? o.call(t.children) : n.map(t.childNodes, function (t) {
            return 1 == t.nodeType ? t : void 0
        })
    }

    function B(n, i, r) {
        for (e in i)r && (R(i[e]) || A(i[e])) ? (R(i[e]) && !R(n[e]) && (n[e] = {}), A(i[e]) && !A(n[e]) && (n[e] = []), B(n[e], i[e], r)) : i[e] !== t && (n[e] = i[e])
    }

    function U(t, e) {
        return null == e ? n(t) : n(t).filter(e)
    }

    function J(t, e, n, i) {
        return Z(e) ? e.call(t, n, i) : e
    }

    function X(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }

    function W(e, n) {
        var i = e.className, r = i && i.baseVal !== t;
        return n === t ? r ? i.baseVal : i : void(r ? i.baseVal = n : e.className = n)
    }

    function Y(t) {
        var e;
        try {
            return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? n.parseJSON(t) : t : e) : t
        } catch (i) {
            return t
        }
    }

    function G(t, e) {
        e(t);
        for (var n = 0, i = t.childNodes.length; i > n; n++)G(t.childNodes[n], e)
    }

    var t, e, n, i, C, N, r = [], o = r.slice, s = r.filter, a = window.document, u = {}, f = {}, c = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    }, l = /^\s*<(\w+|!)[^>]*>/, h = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, d = /^(?:body|html)$/i, m = /([A-Z])/g, g = ["val", "css", "html", "text", "data", "width", "height", "offset"], v = ["after", "prepend", "before", "append"], y = a.createElement("table"), x = a.createElement("tr"), b = {
        tr: a.createElement("tbody"),
        tbody: y,
        thead: y,
        tfoot: y,
        td: x,
        th: x,
        "*": a.createElement("div")
    }, w = /complete|loaded|interactive/, E = /^[\w-]*$/, j = {}, S = j.toString, T = {}, O = a.createElement("div"), P = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    }, A = Array.isArray || function (t) {
            return t instanceof Array
        };
    return T.matches = function (t, e) {
        if (!e || !t || 1 !== t.nodeType)return !1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n)return n.call(t, e);
        var i, r = t.parentNode, o = !r;
        return o && (r = O).appendChild(t), i = ~T.qsa(r, e).indexOf(t), o && O.removeChild(t), i
    }, C = function (t) {
        return t.replace(/-+(.)?/g, function (t, e) {
            return e ? e.toUpperCase() : ""
        })
    }, N = function (t) {
        return s.call(t, function (e, n) {
            return t.indexOf(e) == n
        })
    }, T.fragment = function (e, i, r) {
        var s, u, f;
        return h.test(e) && (s = n(a.createElement(RegExp.$1))), s || (e.replace && (e = e.replace(p, "<$1></$2>")), i === t && (i = l.test(e) && RegExp.$1), i in b || (i = "*"), f = b[i], f.innerHTML = "" + e, s = n.each(o.call(f.childNodes), function () {
            f.removeChild(this)
        })), R(r) && (u = n(s), n.each(r, function (t, e) {
            g.indexOf(t) > -1 ? u[t](e) : u.attr(t, e)
        })), s
    }, T.Z = function (t, e) {
        return t = t || [], t.__proto__ = n.fn, t.selector = e || "", t
    }, T.isZ = function (t) {
        return t instanceof T.Z
    }, T.init = function (e, i) {
        var r;
        if (!e)return T.Z();
        if ("string" == typeof e)if (e = e.trim(), "<" == e[0] && l.test(e))r = T.fragment(e, RegExp.$1, i), e = null; else {
            if (i !== t)return n(i).find(e);
            r = T.qsa(a, e)
        } else {
            if (Z(e))return n(a).ready(e);
            if (T.isZ(e))return e;
            if (A(e))r = k(e); else if (D(e))r = [e], e = null; else if (l.test(e))r = T.fragment(e.trim(), RegExp.$1, i), e = null; else {
                if (i !== t)return n(i).find(e);
                r = T.qsa(a, e)
            }
        }
        return T.Z(r, e)
    }, n = function (t, e) {
        return T.init(t, e)
    }, n.extend = function (t) {
        var e, n = o.call(arguments, 1);
        return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
            B(t, n, e)
        }), t
    }, T.qsa = function (t, e) {
        var n, i = "#" == e[0], r = !i && "." == e[0], s = i || r ? e.slice(1) : e, a = E.test(s);
        return _(t) && a && i ? (n = t.getElementById(s)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : o.call(a && !i ? r ? t.getElementsByClassName(s) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    }, n.contains = a.documentElement.contains ? function (t, e) {
        return t !== e && t.contains(e)
    } : function (t, e) {
        for (; e && (e = e.parentNode);)if (e === t)return !0;
        return !1
    }, n.type = L, n.isFunction = Z, n.isWindow = $, n.isArray = A, n.isPlainObject = R, n.isEmptyObject = function (t) {
        var e;
        for (e in t)return !1;
        return !0
    }, n.inArray = function (t, e, n) {
        return r.indexOf.call(e, t, n)
    }, n.camelCase = C, n.trim = function (t) {
        return null == t ? "" : String.prototype.trim.call(t)
    }, n.uuid = 0, n.support = {}, n.expr = {}, n.map = function (t, e) {
        var n, r, o, i = [];
        if (M(t))for (r = 0; r < t.length; r++)n = e(t[r], r), null != n && i.push(n); else for (o in t)n = e(t[o], o), null != n && i.push(n);
        return z(i)
    }, n.each = function (t, e) {
        var n, i;
        if (M(t)) {
            for (n = 0; n < t.length; n++)if (e.call(t[n], n, t[n]) === !1)return t
        } else for (i in t)if (e.call(t[i], i, t[i]) === !1)return t;
        return t
    }, n.grep = function (t, e) {
        return s.call(t, e)
    }, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        j["[object " + e + "]"] = e.toLowerCase()
    }), n.fn = {
        forEach: r.forEach,
        reduce: r.reduce,
        push: r.push,
        sort: r.sort,
        indexOf: r.indexOf,
        concat: r.concat,
        map: function (t) {
            return n(n.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function () {
            return n(o.apply(this, arguments))
        },
        ready: function (t) {
            return w.test(a.readyState) && a.body ? t(n) : a.addEventListener("DOMContentLoaded", function () {
                t(n)
            }, !1), this
        },
        get: function (e) {
            return e === t ? o.call(this) : this[e >= 0 ? e : e + this.length]
        },
        toArray: function () {
            return this.get()
        },
        size: function () {
            return this.length
        },
        remove: function () {
            return this.each(function () {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function (t) {
            return r.every.call(this, function (e, n) {
                return t.call(e, n, e) !== !1
            }), this
        },
        filter: function (t) {
            return Z(t) ? this.not(this.not(t)) : n(s.call(this, function (e) {
                return T.matches(e, t)
            }))
        },
        add: function (t, e) {
            return n(N(this.concat(n(t, e))))
        },
        is: function (t) {
            return this.length > 0 && T.matches(this[0], t)
        },
        not: function (e) {
            var i = [];
            if (Z(e) && e.call !== t)this.each(function (t) {
                e.call(this, t) || i.push(this)
            }); else {
                var r = "string" == typeof e ? this.filter(e) : M(e) && Z(e.item) ? o.call(e) : n(e);
                this.forEach(function (t) {
                    r.indexOf(t) < 0 && i.push(t)
                })
            }
            return n(i)
        },
        has: function (t) {
            return this.filter(function () {
                return D(t) ? n.contains(this, t) : n(this).find(t).size()
            })
        },
        eq: function (t) {
            return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function () {
            var t = this[0];
            return t && !D(t) ? t : n(t)
        },
        last: function () {
            var t = this[this.length - 1];
            return t && !D(t) ? t : n(t)
        },
        find: function (t) {
            var e, i = this;
            return e = t ? "object" == typeof t ? n(t).filter(function () {
                var t = this;
                return r.some.call(i, function (e) {
                    return n.contains(e, t)
                })
            }) : 1 == this.length ? n(T.qsa(this[0], t)) : this.map(function () {
                return T.qsa(this, t)
            }) : []
        },
        closest: function (t, e) {
            var i = this[0], r = !1;
            for ("object" == typeof t && (r = n(t)); i && !(r ? r.indexOf(i) >= 0 : T.matches(i, t));)i = i !== e && !_(i) && i.parentNode;
            return n(i)
        },
        parents: function (t) {
            for (var e = [], i = this; i.length > 0;)i = n.map(i, function (t) {
                return (t = t.parentNode) && !_(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
            });
            return U(e, t)
        },
        parent: function (t) {
            return U(N(this.pluck("parentNode")), t)
        },
        children: function (t) {
            return U(this.map(function () {
                return V(this)
            }), t)
        },
        contents: function () {
            return this.map(function () {
                return o.call(this.childNodes)
            })
        },
        siblings: function (t) {
            return U(this.map(function (t, e) {
                return s.call(V(e.parentNode), function (t) {
                    return t !== e
                })
            }), t)
        },
        empty: function () {
            return this.each(function () {
                this.innerHTML = ""
            })
        },
        pluck: function (t) {
            return n.map(this, function (e) {
                return e[t]
            })
        },
        show: function () {
            return this.each(function () {
                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = I(this.nodeName))
            })
        },
        replaceWith: function (t) {
            return this.before(t).remove()
        },
        wrap: function (t) {
            var e = Z(t);
            if (this[0] && !e)var i = n(t).get(0), r = i.parentNode || this.length > 1;
            return this.each(function (o) {
                n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i)
            })
        },
        wrapAll: function (t) {
            if (this[0]) {
                n(this[0]).before(t = n(t));
                for (var e; (e = t.children()).length;)t = e.first();
                n(t).append(this)
            }
            return this
        },
        wrapInner: function (t) {
            var e = Z(t);
            return this.each(function (i) {
                var r = n(this), o = r.contents(), s = e ? t.call(this, i) : t;
                o.length ? o.wrapAll(s) : r.append(s)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                n(this).replaceWith(n(this).children())
            }), this
        },
        clone: function () {
            return this.map(function () {
                return this.cloneNode(!0)
            })
        },
        hide: function () {
            return this.css("display", "none")
        },
        toggle: function (e) {
            return this.each(function () {
                var i = n(this);
                (e === t ? "none" == i.css("display") : e) ? i.show() : i.hide()
            })
        },
        prev: function (t) {
            return n(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function (t) {
            return n(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function (t) {
            return 0 in arguments ? this.each(function (e) {
                var i = this.innerHTML;
                n(this).empty().append(J(this, t, e, i))
            }) : 0 in this ? this[0].innerHTML : null
        },
        text: function (t) {
            return 0 in arguments ? this.each(function (e) {
                var n = J(this, t, e, this.textContent);
                this.textContent = null == n ? "" : "" + n
            }) : 0 in this ? this[0].textContent : null
        },
        attr: function (n, i) {
            var r;
            return "string" != typeof n || 1 in arguments ? this.each(function (t) {
                if (1 === this.nodeType)if (D(n))for (e in n)X(this, e, n[e]); else X(this, n, J(this, i, t, this.getAttribute(n)))
            }) : this.length && 1 === this[0].nodeType ? !(r = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : r : t
        },
        removeAttr: function (t) {
            return this.each(function () {
                1 === this.nodeType && X(this, t)
            })
        },
        prop: function (t, e) {
            return t = P[t] || t, 1 in arguments ? this.each(function (n) {
                this[t] = J(this, e, n, this[t])
            }) : this[0] && this[0][t]
        },
        data: function (e, n) {
            var i = "data-" + e.replace(m, "-$1").toLowerCase(), r = 1 in arguments ? this.attr(i, n) : this.attr(i);
            return null !== r ? Y(r) : t
        },
        val: function (t) {
            return 0 in arguments ? this.each(function (e) {
                this.value = J(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function () {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function (t) {
            if (t)return this.each(function (e) {
                var i = n(this), r = J(this, t, e, i.offset()), o = i.offsetParent().offset(), s = {
                    top: r.top - o.top,
                    left: r.left - o.left
                };
                "static" == i.css("position") && (s.position = "relative"), i.css(s)
            });
            if (!this.length)return null;
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        },
        css: function (t, i) {
            if (arguments.length < 2) {
                var r = this[0], o = getComputedStyle(r, "");
                if (!r)return;
                if ("string" == typeof t)return r.style[C(t)] || o.getPropertyValue(t);
                if (A(t)) {
                    var s = {};
                    return n.each(A(t) ? t : [t], function (t, e) {
                        s[e] = r.style[C(e)] || o.getPropertyValue(e)
                    }), s
                }
            }
            var a = "";
            if ("string" == L(t))i || 0 === i ? a = F(t) + ":" + H(t, i) : this.each(function () {
                this.style.removeProperty(F(t))
            }); else for (e in t)t[e] || 0 === t[e] ? a += F(e) + ":" + H(e, t[e]) + ";" : this.each(function () {
                this.style.removeProperty(F(e))
            });
            return this.each(function () {
                this.style.cssText += ";" + a
            })
        },
        index: function (t) {
            return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function (t) {
            return t ? r.some.call(this, function (t) {
                return this.test(W(t))
            }, q(t)) : !1
        },
        addClass: function (t) {
            return t ? this.each(function (e) {
                i = [];
                var r = W(this), o = J(this, t, e, r);
                o.split(/\s+/g).forEach(function (t) {
                    n(this).hasClass(t) || i.push(t)
                }, this), i.length && W(this, r + (r ? " " : "") + i.join(" "))
            }) : this
        },
        removeClass: function (e) {
            return this.each(function (n) {
                return e === t ? W(this, "") : (i = W(this), J(this, e, n, i).split(/\s+/g).forEach(function (t) {
                    i = i.replace(q(t), " ")
                }), void W(this, i.trim()))
            })
        },
        toggleClass: function (e, i) {
            return e ? this.each(function (r) {
                var o = n(this), s = J(this, e, r, W(this));
                s.split(/\s+/g).forEach(function (e) {
                    (i === t ? !o.hasClass(e) : i) ? o.addClass(e) : o.removeClass(e)
                })
            }) : this
        },
        scrollTop: function (e) {
            if (this.length) {
                var n = "scrollTop" in this[0];
                return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function () {
                    this.scrollTop = e
                } : function () {
                    this.scrollTo(this.scrollX, e)
                })
            }
        },
        scrollLeft: function (e) {
            if (this.length) {
                var n = "scrollLeft" in this[0];
                return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function () {
                    this.scrollLeft = e
                } : function () {
                    this.scrollTo(e, this.scrollY)
                })
            }
        },
        position: function () {
            if (this.length) {
                var t = this[0], e = this.offsetParent(), i = this.offset(), r = d.test(e[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : e.offset();
                return i.top -= parseFloat(n(t).css("margin-top")) || 0, i.left -= parseFloat(n(t).css("margin-left")) || 0, r.top += parseFloat(n(e[0]).css("border-top-width")) || 0, r.left += parseFloat(n(e[0]).css("border-left-width")) || 0, {
                    top: i.top - r.top,
                    left: i.left - r.left
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || a.body; t && !d.test(t.nodeName) && "static" == n(t).css("position");)t = t.offsetParent;
                return t
            })
        }
    }, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function (e) {
        var i = e.replace(/./, function (t) {
            return t[0].toUpperCase()
        });
        n.fn[e] = function (r) {
            var o, s = this[0];
            return r === t ? $(s) ? s["inner" + i] : _(s) ? s.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each(function (t) {
                s = n(this), s.css(e, J(this, r, t, s[e]()))
            })
        }
    }), v.forEach(function (t, e) {
        var i = e % 2;
        n.fn[t] = function () {
            var t, o, r = n.map(arguments, function (e) {
                return t = L(e), "object" == t || "array" == t || null == e ? e : T.fragment(e)
            }), s = this.length > 1;
            return r.length < 1 ? this : this.each(function (t, u) {
                o = i ? u : u.parentNode, u = 0 == e ? u.nextSibling : 1 == e ? u.firstChild : 2 == e ? u : null;
                var f = n.contains(a.documentElement, o);
                r.forEach(function (t) {
                    if (s)t = t.cloneNode(!0); else if (!o)return n(t).remove();
                    o.insertBefore(t, u), f && G(t, function (t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        }, n.fn[i ? t + "To" : "insert" + (e ? "Before" : "After")] = function (e) {
            return n(e)[t](this), this
        }
    }), T.Z.prototype = n.fn, T.uniq = N, T.deserializeValue = Y, n.zepto = T, n
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function (t) {
    function l(t) {
        return t._zid || (t._zid = e++)
    }

    function h(t, e, n, i) {
        if (e = p(e), e.ns)var r = d(e.ns);
        return (s[l(t)] || []).filter(function (t) {
            return !(!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i)
        })
    }

    function p(t) {
        var e = ("" + t).split(".");
        return {e: e[0], ns: e.slice(1).sort().join(" ")}
    }

    function d(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
    }

    function m(t, e) {
        return t.del && !u && t.e in f || !!e
    }

    function g(t) {
        return c[t] || u && f[t] || t
    }

    function v(e, i, r, o, a, u, f) {
        var h = l(e), d = s[h] || (s[h] = []);
        i.split(/\s/).forEach(function (i) {
            if ("ready" == i)return t(document).ready(r);
            var s = p(i);
            s.fn = r, s.sel = a, s.e in c && (r = function (e) {
                var n = e.relatedTarget;
                return !n || n !== this && !t.contains(this, n) ? s.fn.apply(this, arguments) : void 0
            }), s.del = u;
            var l = u || r;
            s.proxy = function (t) {
                if (t = j(t), !t.isImmediatePropagationStopped()) {
                    t.data = o;
                    var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));
                    return i === !1 && (t.preventDefault(), t.stopPropagation()), i
                }
            }, s.i = d.length, d.push(s), "addEventListener" in e && e.addEventListener(g(s.e), s.proxy, m(s, f))
        })
    }

    function y(t, e, n, i, r) {
        var o = l(t);
        (e || "").split(/\s/).forEach(function (e) {
            h(t, e, n, i).forEach(function (e) {
                delete s[o][e.i], "removeEventListener" in t && t.removeEventListener(g(e.e), e.proxy, m(e, r))
            })
        })
    }

    function j(e, i) {
        return (i || !e.isDefaultPrevented) && (i || (i = e), t.each(E, function (t, n) {
            var r = i[t];
            e[t] = function () {
                return this[n] = x, r && r.apply(i, arguments)
            }, e[n] = b
        }), (i.defaultPrevented !== n ? i.defaultPrevented : "returnValue" in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = x)), e
    }

    function S(t) {
        var e, i = {originalEvent: t};
        for (e in t)w.test(e) || t[e] === n || (i[e] = t[e]);
        return j(i, t)
    }

    var n, e = 1, i = Array.prototype.slice, r = t.isFunction, o = function (t) {
        return "string" == typeof t
    }, s = {}, a = {}, u = "onfocusin" in window, f = {
        focus: "focusin",
        blur: "focusout"
    }, c = {mouseenter: "mouseover", mouseleave: "mouseout"};
    a.click = a.mousedown = a.mouseup = a.mousemove = "MouseEvents", t.event = {
        add: v,
        remove: y
    }, t.proxy = function (e, n) {
        var s = 2 in arguments && i.call(arguments, 2);
        if (r(e)) {
            var a = function () {
                return e.apply(n, s ? s.concat(i.call(arguments)) : arguments)
            };
            return a._zid = l(e), a
        }
        if (o(n))return s ? (s.unshift(e[n], e), t.proxy.apply(null, s)) : t.proxy(e[n], e);
        throw new TypeError("expected function")
    }, t.fn.bind = function (t, e, n) {
        return this.on(t, e, n)
    }, t.fn.unbind = function (t, e) {
        return this.off(t, e)
    }, t.fn.one = function (t, e, n, i) {
        return this.on(t, e, n, i, 1)
    };
    var x = function () {
        return !0
    }, b = function () {
        return !1
    }, w = /^([A-Z]|returnValue$|layer[XY]$)/, E = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    t.fn.delegate = function (t, e, n) {
        return this.on(e, t, n)
    }, t.fn.undelegate = function (t, e, n) {
        return this.off(e, t, n)
    }, t.fn.live = function (e, n) {
        return t(document.body).delegate(this.selector, e, n), this
    }, t.fn.die = function (e, n) {
        return t(document.body).undelegate(this.selector, e, n), this
    }, t.fn.on = function (e, s, a, u, f) {
        var c, l, h = this;
        return e && !o(e) ? (t.each(e, function (t, e) {
            h.on(t, s, a, e, f)
        }), h) : (o(s) || r(u) || u === !1 || (u = a, a = s, s = n), (r(a) || a === !1) && (u = a, a = n), u === !1 && (u = b), h.each(function (n, r) {
            f && (c = function (t) {
                return y(r, t.type, u), u.apply(this, arguments)
            }), s && (l = function (e) {
                var n, o = t(e.target).closest(s, r).get(0);
                return o && o !== r ? (n = t.extend(S(e), {
                    currentTarget: o,
                    liveFired: r
                }), (c || u).apply(o, [n].concat(i.call(arguments, 1)))) : void 0
            }), v(r, e, u, a, s, l || c)
        }))
    }, t.fn.off = function (e, i, s) {
        var a = this;
        return e && !o(e) ? (t.each(e, function (t, e) {
            a.off(t, i, e)
        }), a) : (o(i) || r(s) || s === !1 || (s = i, i = n), s === !1 && (s = b), a.each(function () {
            y(this, e, s, i)
        }))
    }, t.fn.trigger = function (e, n) {
        return e = o(e) || t.isPlainObject(e) ? t.Event(e) : j(e), e._args = n, this.each(function () {
            "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
        })
    }, t.fn.triggerHandler = function (e, n) {
        var i, r;
        return this.each(function (s, a) {
            i = S(o(e) ? t.Event(e) : e), i._args = n, i.target = a, t.each(h(a, e.type || e), function (t, e) {
                return r = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0
            })
        }), r
    }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
        t.fn[e] = function (t) {
            return t ? this.bind(e, t) : this.trigger(e)
        }
    }), ["focus", "blur"].forEach(function (e) {
        t.fn[e] = function (t) {
            return t ? this.bind(e, t) : this.each(function () {
                try {
                    this[e]()
                } catch (t) {
                }
            }), this
        }
    }), t.Event = function (t, e) {
        o(t) || (e = t, t = e.type);
        var n = document.createEvent(a[t] || "Events"), i = !0;
        if (e)for (var r in e)"bubbles" == r ? i = !!e[r] : n[r] = e[r];
        return n.initEvent(t, i, !0), j(n)
    }
}(Zepto), function (t) {
    function l(e, n, i) {
        var r = t.Event(n);
        return t(e).trigger(r, i), !r.isDefaultPrevented()
    }

    function h(t, e, i, r) {
        return t.global ? l(e || n, i, r) : void 0
    }

    function p(e) {
        e.global && 0 === t.active++ && h(e, null, "ajaxStart")
    }

    function d(e) {
        e.global && !--t.active && h(e, null, "ajaxStop")
    }

    function m(t, e) {
        var n = e.context;
        return e.beforeSend.call(n, t, e) === !1 || h(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void h(e, n, "ajaxSend", [t, e])
    }

    function g(t, e, n, i) {
        var r = n.context, o = "success";
        n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), h(n, r, "ajaxSuccess", [e, n, t]), y(o, e, n)
    }

    function v(t, e, n, i, r) {
        var o = i.context;
        i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), h(i, o, "ajaxError", [n, i, t || e]), y(e, n, i)
    }

    function y(t, e, n) {
        var i = n.context;
        n.complete.call(i, e, t), h(n, i, "ajaxComplete", [e, n]), d(n)
    }

    function x() {
    }

    function b(t) {
        return t && (t = t.split(";", 2)[0]), t && (t == f ? "html" : t == u ? "json" : s.test(t) ? "script" : a.test(t) && "xml") || "text"
    }

    function w(t, e) {
        return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
    }

    function E(e) {
        e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = w(e.url, e.data), e.data = void 0)
    }

    function j(e, n, i, r) {
        return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
            url: e,
            data: n,
            success: i,
            dataType: r
        }
    }

    function T(e, n, i, r) {
        var o, s = t.isArray(n), a = t.isPlainObject(n);
        t.each(n, function (n, u) {
            o = t.type(u), r && (n = i ? r : r + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !r && s ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? T(e, u, i, n) : e.add(n, u)
        })
    }

    var i, r, e = 0, n = window.document, o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, s = /^(?:text|application)\/javascript/i, a = /^(?:text|application)\/xml/i, u = "application/json", f = "text/html", c = /^\s*$/;
    t.active = 0, t.ajaxJSONP = function (i, r) {
        if (!("type" in i))return t.ajax(i);
        var f, h, o = i.jsonpCallback, s = (t.isFunction(o) ? o() : o) || "jsonp" + ++e, a = n.createElement("script"), u = window[s], c = function (e) {
            t(a).triggerHandler("error", e || "abort")
        }, l = {abort: c};
        return r && r.promise(l), t(a).on("load error", function (e, n) {
            clearTimeout(h), t(a).off().remove(), "error" != e.type && f ? g(f[0], l, i, r) : v(null, n || "error", l, i, r), window[s] = u, f && t.isFunction(u) && u(f[0]), u = f = void 0
        }), m(l, i) === !1 ? (c("abort"), l) : (window[s] = function () {
            f = arguments
        }, a.src = i.url.replace(/\?(.+)=\?/, "?$1=" + s), n.head.appendChild(a), i.timeout > 0 && (h = setTimeout(function () {
            c("timeout")
        }, i.timeout)), l)
    }, t.ajaxSettings = {
        type: "GET",
        beforeSend: x,
        success: x,
        error: x,
        complete: x,
        context: null,
        global: !0,
        xhr: function () {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: u,
            xml: "application/xml, text/xml",
            html: f,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    }, t.ajax = function (e) {
        var n = t.extend({}, e || {}), o = t.Deferred && t.Deferred();
        for (i in t.ajaxSettings)void 0 === n[i] && (n[i] = t.ajaxSettings[i]);
        p(n), n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host), n.url || (n.url = window.location.toString()), E(n);
        var s = n.dataType, a = /\?.+=\?/.test(n.url);
        if (a && (s = "jsonp"), n.cache !== !1 && (e && e.cache === !0 || "script" != s && "jsonp" != s) || (n.url = w(n.url, "_=" + Date.now())), "jsonp" == s)return a || (n.url = w(n.url, n.jsonp ? n.jsonp + "=?" : n.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(n, o);
        var j, u = n.accepts[s], f = {}, l = function (t, e) {
            f[t.toLowerCase()] = [t, e]
        }, h = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1 : window.location.protocol, d = n.xhr(), y = d.setRequestHeader;
        if (o && o.promise(d), n.crossDomain || l("X-Requested-With", "XMLHttpRequest"), l("Accept", u || "*/*"), (u = n.mimeType || u) && (u.indexOf(",") > -1 && (u = u.split(",", 2)[0]), d.overrideMimeType && d.overrideMimeType(u)), (n.contentType || n.contentType !== !1 && n.data && "GET" != n.type.toUpperCase()) && l("Content-Type", n.contentType || "application/x-www-form-urlencoded"), n.headers)for (r in n.headers)l(r, n.headers[r]);
        if (d.setRequestHeader = l, d.onreadystatechange = function () {
                if (4 == d.readyState) {
                    d.onreadystatechange = x, clearTimeout(j);
                    var e, i = !1;
                    if (d.status >= 200 && d.status < 300 || 304 == d.status || 0 == d.status && "file:" == h) {
                        s = s || b(n.mimeType || d.getResponseHeader("content-type")), e = d.responseText;
                        try {
                            "script" == s ? (1, eval)(e) : "xml" == s ? e = d.responseXML : "json" == s && (e = c.test(e) ? null : t.parseJSON(e))
                        } catch (r) {
                            i = r
                        }
                        i ? v(i, "parsererror", d, n, o) : g(e, d, n, o)
                    } else v(d.statusText || null, d.status ? "error" : "abort", d, n, o)
                }
            }, m(d, n) === !1)return d.abort(), v(null, "abort", d, n, o), d;
        if (n.xhrFields)for (r in n.xhrFields)d[r] = n.xhrFields[r];
        var S = "async" in n ? n.async : !0;
        d.open(n.type, n.url, S, n.username, n.password);
        for (r in f)y.apply(d, f[r]);
        return n.timeout > 0 && (j = setTimeout(function () {
            d.onreadystatechange = x, d.abort(), v(null, "timeout", d, n, o)
        }, n.timeout)), d.send(n.data ? n.data : null), d
    }, t.get = function () {
        return t.ajax(j.apply(null, arguments))
    }, t.post = function () {
        var e = j.apply(null, arguments);
        return e.type = "POST", t.ajax(e)
    }, t.getJSON = function () {
        var e = j.apply(null, arguments);
        return e.dataType = "json", t.ajax(e)
    }, t.fn.load = function (e, n, i) {
        if (!this.length)return this;
        var a, r = this, s = e.split(/\s/), u = j(e, n, i), f = u.success;
        return s.length > 1 && (u.url = s[0], a = s[1]), u.success = function (e) {
            r.html(a ? t("<div>").html(e.replace(o, "")).find(a) : e), f && f.apply(r, arguments)
        }, t.ajax(u), this
    };
    var S = encodeURIComponent;
    t.param = function (t, e) {
        var n = [];
        return n.add = function (t, e) {
            this.push(S(t) + "=" + S(e))
        }, T(n, t, e), n.join("&").replace(/%20/g, "+")
    }
}(Zepto), function (t) {
    t.fn.serializeArray = function () {
        var n, e = [];
        return t([].slice.call(this.get(0).elements)).each(function () {
            n = t(this);
            var i = n.attr("type");
            "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && e.push({
                name: n.attr("name"),
                value: n.val()
            })
        }), e
    }, t.fn.serialize = function () {
        var t = [];
        return this.serializeArray().forEach(function (e) {
            t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
        }), t.join("&")
    }, t.fn.submit = function (e) {
        if (e)this.bind("submit", e); else if (this.length) {
            var n = t.Event("submit");
            this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
}(Zepto), function (t) {
    "__proto__" in {} || t.extend(t.zepto, {
        Z: function (e, n) {
            return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e
        }, isZ: function (e) {
            return "array" === t.type(e) && "__Z" in e
        }
    });
    try {
        getComputedStyle(void 0)
    } catch (e) {
        var n = getComputedStyle;
        window.getComputedStyle = function (t) {
            try {
                return n(t)
            } catch (e) {
                return null
            }
        }
    }
}(Zepto);
// animate.js
;(function (b, C) {
    function n(b) {
        return g ? g + b : b.toLowerCase()
    }

    var c = "", g, l = window.document.createElement("div"), B = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, s, t, u, v, w, x, y, z, A, d = {};
    b.each({Webkit: "webkit", Moz: "", O: "o"}, function (b, a) {
        if (void 0 !== l.style[b + "TransitionProperty"])return c = "-" + b.toLowerCase() + "-", g = a, !1
    });
    s = c + "transform";
    d[t = c + "transition-property"] = d[u = c + "transition-duration"] = d[w = c + "transition-delay"] = d[v = c + "transition-timing-function"] = d[x = c + "animation-name"] = d[y = c + "animation-duration"] = d[A = c + "animation-delay"] = d[z = c + "animation-timing-function"] = "";
    b.fx = {
        off: void 0 === g && void 0 === l.style.transitionProperty,
        speeds: {_default: 400, fast: 200, slow: 600},
        cssPrefix: c,
        transitionEnd: n("TransitionEnd"),
        animationEnd: n("AnimationEnd")
    };
    b.fn.animate = function (c, a, d, h, f) {
        b.isFunction(a) && (h = a, a = d = void 0);
        b.isFunction(d) && (h = d, d = void 0);
        b.isPlainObject(a) && (d = a.easing, h = a.complete, f = a.delay, a = a.duration);
        a && (a = ("number" == typeof a ? a : b.fx.speeds[a] || b.fx.speeds._default) / 1E3);
        f && (f = parseFloat(f) / 1E3);
        return this.anim(c, a, d, h, f)
    };
    b.fn.anim = function (c, a, g, h, f) {
        var k, e = {}, p, q = "", l = this, m, r = b.fx.transitionEnd, n = !1;
        void 0 === a && (a = b.fx.speeds._default / 1E3);
        void 0 === f && (f = 0);
        b.fx.off && (a = 0);
        if ("string" == typeof c)e[x] = c, e[y] = a + "s", e[A] = f + "s", e[z] = g || "linear", r = b.fx.animationEnd; else {
            p = [];
            for (k in c)B.test(k) ? q += k + "(" + c[k] + ") " : (e[k] = c[k], p.push(k.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()));
            q && (e[s] = q, p.push(s));
            0 < a && "object" === typeof c && (e[t] = p.join(", "), e[u] = a + "s", e[w] = f + "s", e[v] = g || "linear")
        }
        m = function (a) {
            if ("undefined" !== typeof a) {
                if (a.target !== a.currentTarget)return;
                b(a.target).unbind(r, m)
            } else b(this).unbind(r, m);
            n = !0;
            b(this).css(d);
            h && h.call(this)
        };
        0 < a && (this.bind(r, m), setTimeout(function () {
            n || m.call(l)
        }, 1E3 * a + 25));
        this.size() && this.get(0).clientLeft;
        this.css(e);
        0 >= a && setTimeout(function () {
            l.each(function () {
                m.call(this)
            })
        }, 0);
        return this
    };
    l = null
})(Zepto);
;(function (d, m) {
    function e(a, b, c, f, e) {
        "function" != typeof b || e || (e = b, b = void 0);
        c = {opacity: c};
        f && (c.scale = f, a.css(d.fx.cssPrefix + "transform-origin", "0 0"));
        return a.animate(c, b, null, e)
    }

    function g(a, b, c, f) {
        return e(a, b, 0, c, function () {
            h.call(d(this));
            f && f.call(this)
        })
    }

    var k = d.fn.show, h = d.fn.hide, l = d.fn.toggle;
    d.fn.toggle = function (a, b) {
        return void 0 === a || "boolean" == typeof a ? l.call(this, a) : this.each(function () {
            var c = d(this);
            c["none" == c.css("display") ? "show" : "hide"](a, b)
        })
    };
    d.fn.fadeTo = function (a, b, c) {
        return e(this, a, b, null, c)
    };
    d.fn.fadeIn = function (a, b) {
        var c = this.css("opacity");
        0 < c ? this.css("opacity", 0) : c = 1;
        return k.call(this).fadeTo(a, c, b)
    };
    d.fn.fadeOut = function (a, b) {
        return g(this, a, null, b)
    };
    d.fn.fadeToggle = function (a, b) {
        return this.each(function () {
            var c = d(this);
            c[0 == c.css("opacity") || "none" == c.css("display") ? "fadeIn" : "fadeOut"](a, b)
        })
    }
})(Zepto);
//     touch.js
;(function (g) {
    function u(a, c, d, f) {
        return Math.abs(a - c) >= Math.abs(d - f) ? 0 < a - c ? "Left" : "Right" : 0 < d - f ? "Up" : "Down"
    }

    function v() {
        c = null;
        a.last && (a.el.trigger("longTap"), a = {})
    }

    function r() {
        d && clearTimeout(d);
        m && clearTimeout(m);
        n && clearTimeout(n);
        c && clearTimeout(c);
        d = m = n = c = null;
        a = {}
    }

    function s(a) {
        return ("touch" == a.pointerType || a.pointerType == a.MSPOINTER_TYPE_TOUCH) && a.isPrimary
    }

    function t(a, c) {
        return a.type == "pointer" + c || a.type.toLowerCase() == "mspointer" + c
    }

    var a = {}, d, m, n, c, p;
    g(document).ready(function () {
        var k, q, l = 0, f = 0, e, h;
        "MSGesture" in window && (p = new MSGesture, p.target = document.body);
        g(document).bind("MSGestureEnd", function (b) {
            if (b = 1 < b.velocityX ? "Right" : -1 > b.velocityX ? "Left" : 1 < b.velocityY ? "Down" : -1 > b.velocityY ? "Up" : null)a.el.trigger("swipe"), a.el.trigger("swipe" + b)
        }).on("touchstart MSPointerDown pointerdown", function (b) {
            if (!(h = t(b, "down")) || s(b))e = h ? b : b.touches[0], b.touches && 1 === b.touches.length && a.x2 && (a.x2 = void 0, a.y2 = void 0), k = Date.now(), q = k - (a.last || k), a.el = g("tagName" in e.target ? e.target : e.target.parentNode), d && clearTimeout(d), a.x1 = e.pageX, a.y1 = e.pageY, 0 < q && 250 >= q && (a.isDoubleTap = !0), a.last = k, c = setTimeout(v, 750), p && h && p.addPointer(b.pointerId)
        }).on("touchmove MSPointerMove pointermove", function (b) {
            if (!(h = t(b, "move")) || s(b))e = h ? b : b.touches[0], c && clearTimeout(c), c = null, a.x2 = e.pageX, a.y2 = e.pageY, l += Math.abs(a.x1 - a.x2), f += Math.abs(a.y1 - a.y2)
        }).on("touchend MSPointerUp pointerup", function (b) {
            if (!(h = t(b, "up")) || s(b))c && clearTimeout(c), c = null, a.x2 && 30 < Math.abs(a.x1 - a.x2) || a.y2 && 30 < Math.abs(a.y1 - a.y2) ? n = setTimeout(function () {
                a.el.trigger("swipe");
                a.el.trigger("swipe" + u(a.x1, a.x2, a.y1, a.y2));
                a = {}
            }, 0) : "last" in a && (30 > l && 30 > f ? m = setTimeout(function () {
                var b = g.Event("tap");
                b.cancelTouch = r;
                a.el.trigger(b);
                a.isDoubleTap ? (a.el && a.el.trigger("doubleTap"), a = {}) : d = setTimeout(function () {
                    d = null;
                    a.el && a.el.trigger("singleTap");
                    a = {}
                }, 250)
            }, 0) : a = {}), l = f = 0
        }).on("touchcancel MSPointerCancel pointercancel", r);
        g(window).on("scroll", r)
    });
    "swipe swipeLeft swipeRight swipeUp swipeDown doubleTap tap singleTap longTap".split(" ").forEach(function (a) {
        g.fn[a] = function (c) {
            return this.on(a, c)
        }
    })
})(Zepto);
//     $.fn.data
;(function (d) {
    function l(a, b) {
        var c = a[f], c = c && g[c];
        if (void 0 === b)return c || k(a);
        if (c) {
            if (b in c)return c[b];
            var e = h(b);
            if (e in c)return c[e]
        }
        return m.call(d(a), b)
    }

    function k(a, b, c) {
        var e = a[f] || (a[f] = ++d.uuid);
        a = g[e] || (g[e] = n(a));
        void 0 !== b && (a[h(b)] = c);
        return a
    }

    function n(a) {
        var b = {};
        d.each(a.attributes || p, function (a, e) {
            0 == e.name.indexOf("data-") && (b[h(e.name.replace("data-", ""))] = d.zepto.deserializeValue(e.value))
        });
        return b
    }

    var g = {}, m = d.fn.data, h = d.camelCase, f = d.expando = "Zepto" + +new Date, p = [];
    d.fn.data = function (a, b) {
        return void 0 === b ? d.isPlainObject(a) ? this.each(function (c, b) {
            d.each(a, function (a, c) {
                k(b, a, c)
            })
        }) : 0 in this ? l(this[0], a) : void 0 : this.each(function () {
            k(this, a, b)
        })
    };
    d.fn.removeData = function (a) {
        "string" == typeof a && (a = a.split(/\s+/));
        return this.each(function () {
            var b = this[f], c = b && g[b];
            c && d.each(a || c, function (b) {
                delete c[a ? h(this) : b]
            })
        })
    };
    ["remove", "empty"].forEach(function (a) {
        var b = d.fn[a];
        d.fn[a] = function () {
            var c = this.find("*");
            "remove" === a && (c = c.add(this));
            c.removeData();
            return b.call(this)
        }
    })
})(Zepto);
// selector.extends.js
;(function (a) {
    a.fn.end = function () {
        return this.prevObject || a()
    };
    a.fn.andSelf = function () {
        return this.add(this.prevObject || a())
    };
    "filter add not eq first last find closest parents parent children siblings".split(" ").forEach(function (b) {
        var c = a.fn[b];
        a.fn[b] = function () {
            var a = c.apply(this, arguments);
            a.prevObject = this;
            return a
        }
    })
})(Zepto);
;(function ($) {
    var zepto = $.zepto, oldQsa = zepto.qsa, oldMatches = zepto.matches;

    function visible(elem) {
        elem = $(elem);
        return !!(elem.width() || elem.height()) && elem.css("display") !== "none"
    }

    var filters = $.expr[":"] = {
        visible: function () {
            if (visible(this)) {
                return this
            }
        }, hidden: function () {
            if (!visible(this)) {
                return this
            }
        }, selected: function () {
            if (this.selected) {
                return this
            }
        }, checked: function () {
            if (this.checked) {
                return this
            }
        }, parent: function () {
            return this.parentNode
        }, first: function (idx) {
            if (idx === 0) {
                return this
            }
        }, last: function (idx, nodes) {
            if (idx === nodes.length - 1) {
                return this
            }
        }, eq: function (idx, _, value) {
            if (idx === value) {
                return this
            }
        }, contains: function (idx, _, text) {
            if ($(this).text().indexOf(text) > -1) {
                return this
            }
        }, has: function (idx, _, sel) {
            if (zepto.qsa(this, sel).length) {
                return this
            }
        }
    };
    var filterRe = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"), childRe = /^\s*>/, classTag = "Zepto" + (+new Date());

    function process(sel, fn) {
        sel = sel.replace(/=#\]/g, '="#"]');
        var filter, arg, match = filterRe.exec(sel);
        if (match && match[2] in filters) {
            filter = filters[match[2]], arg = match[3];
            sel = match[1];
            if (arg) {
                var num = Number(arg);
                if (isNaN(num)) {
                    arg = arg.replace(/^["']|["']$/g, "")
                } else {
                    arg = num
                }
            }
        }
        return fn(sel, filter, arg)
    }

    zepto.qsa = function (node, selector) {
        return process(selector, function (sel, filter, arg) {
            try {
                var taggedParent;
                if (!sel && filter) {
                    sel = "*"
                } else {
                    if (childRe.test(sel)) {
                        taggedParent = $(node).addClass(classTag), sel = "." + classTag + " " + sel
                    }
                }
                var nodes = oldQsa(node, sel)
            } catch (e) {
                console.error("error performing selector: %o", selector);
                throw e
            } finally {
                if (taggedParent) {
                    taggedParent.removeClass(classTag)
                }
            }
            return !filter ? nodes : zepto.uniq($.map(nodes, function (n, i) {
                return filter.call(n, i, nodes, arg)
            }))
        })
    };
    zepto.matches = function (node, selector) {
        return process(selector, function (sel, filter, arg) {
            return (!sel || oldMatches(node, sel)) && (!filter || filter.call(node, null, arg) === node)
        })
    }
})(Zepto);
// css3
;(function (a) {
    a.fn.css3 = function (c, e) {
        if (!this.length) {
            return
        }
        var h = {
            Webkit: "webkit",
            Moz: "",
            O: "o"
        }, d = "", g = this, f = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
        a.each(h, function (i) {
            if (g[0].style[i + "TransitionProperty"] !== undefined) {
                d = "-" + i.toLowerCase() + "-"
            }
        });
        if (typeof c == "string" && e === undefined) {
            if (f.test(c)) {
                e = c + "(" + e + ") ";
                c = "transform"
            }
            c = c.replace(/([A-Z])/g, "-$1");
            return this.css(d + c.toLowerCase())
        } else {
            if (typeof c == "object") {
                var b = [];
                a.each(c, function (j, i) {
                    if (f.test(j)) {
                        b.push(j + "(" + i + ") ")
                    } else {
                        g.css3(j, i)
                    }
                });
                if (b.length > 0) {
                    this.css(d + "transform".toLowerCase(), b.join(" "))
                }
            } else {
                if (typeof c == "string" && e !== undefined) {
                    if (f.test(c)) {
                        e = c + "(" + e + ") ";
                        c = "transform"
                    }
                    c = c.replace(/([A-Z])/g, "-$1");
                    this.css(d + c.toLowerCase(), e)
                } else {
                    return undefined
                }
            }
        }
        return this
    }
})(Zepto);

/*! iScroll v5.1.2 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
;(function (d, a, c) {
    var f = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.mozRequestAnimationFrame || d.oRequestAnimationFrame || d.msRequestAnimationFrame || function (g) {
            d.setTimeout(g, 1000 / 60)
        };
    var b = (function () {
        var k = {};
        var l = a.createElement("div").style;
        var i = (function () {
            var p = ["t", "webkitT", "MozT", "msT", "OT"], n, o = 0, m = p.length;
            for (; o < m; o++) {
                n = p[o] + "ransform";
                if (n in l) {
                    return p[o].substr(0, p[o].length - 1)
                }
            }
            return false
        })();

        function j(m) {
            if (i === false) {
                return false
            }
            if (i === "") {
                return m
            }
            return i + m.charAt(0).toUpperCase() + m.substr(1)
        }

        k.getTime = Date.now || function g() {
                return new Date().getTime()
            };
        k.extend = function (o, n) {
            for (var m in n) {
                o[m] = n[m]
            }
        };
        k.addEvent = function (p, o, n, m) {
            p.addEventListener(o, n, !!m)
        };
        k.removeEvent = function (p, o, n, m) {
            p.removeEventListener(o, n, !!m)
        };
        k.prefixPointerEvent = function (m) {
            return d.MSPointerEvent ? "MSPointer" + m.charAt(9).toUpperCase() + m.substr(10) : m
        };
        k.momentum = function (s, o, p, m, t, u) {
            var n = s - o, q = c.abs(n) / p, v, r;
            u = u === undefined ? 0.0006 : u;
            v = s + (q * q) / (2 * u) * (n < 0 ? -1 : 1);
            r = q / u;
            if (v < m) {
                v = t ? m - (t / 2.5 * (q / 8)) : m;
                n = c.abs(v - s);
                r = n / q
            } else {
                if (v > 0) {
                    v = t ? t / 2.5 * (q / 8) : 0;
                    n = c.abs(s) + v;
                    r = n / q
                }
            }
            return {destination: c.round(v), duration: r}
        };
        var h = j("transform");
        k.extend(k, {
            hasTransform: h !== false,
            hasPerspective: j("perspective") in l,
            hasTouch: "ontouchstart" in d,
            hasPointer: d.PointerEvent || d.MSPointerEvent,
            hasTransition: j("transition") in l
        });
        k.isBadAndroid = /Android /.test(d.navigator.appVersion) && !(/Chrome\/\d/.test(d.navigator.appVersion));
        k.extend(k.style = {}, {
            transform: h,
            transitionTimingFunction: j("transitionTimingFunction"),
            transitionDuration: j("transitionDuration"),
            transitionDelay: j("transitionDelay"),
            transformOrigin: j("transformOrigin")
        });
        k.hasClass = function (n, o) {
            var m = new RegExp("(^|\\s)" + o + "(\\s|$)");
            return m.test(n.className)
        };
        k.addClass = function (n, o) {
            if (k.hasClass(n, o)) {
                return
            }
            var m = n.className.split(" ");
            m.push(o);
            n.className = m.join(" ")
        };
        k.removeClass = function (n, o) {
            if (!k.hasClass(n, o)) {
                return
            }
            var m = new RegExp("(^|\\s)" + o + "(\\s|$)", "g");
            n.className = n.className.replace(m, " ")
        };
        k.offset = function (m) {
            var o = -m.offsetLeft, n = -m.offsetTop;
            while (m = m.offsetParent) {
                o -= m.offsetLeft;
                n -= m.offsetTop
            }
            return {left: o, top: n}
        };
        k.preventDefaultException = function (o, n) {
            for (var m in n) {
                if (n[m].test(o[m])) {
                    return true
                }
            }
            return false
        };
        k.extend(k.eventType = {}, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        });
        k.extend(k.ease = {}, {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function (m) {
                    return m * (2 - m)
                }
            }, circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function (m) {
                    return c.sqrt(1 - (--m * m))
                }
            }, back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", fn: function (n) {
                    var m = 4;
                    return (n = n - 1) * n * ((m + 1) * n + m) + 1
                }
            }, bounce: {
                style: "", fn: function (m) {
                    if ((m /= 1) < (1 / 2.75)) {
                        return 7.5625 * m * m
                    } else {
                        if (m < (2 / 2.75)) {
                            return 7.5625 * (m -= (1.5 / 2.75)) * m + 0.75
                        } else {
                            if (m < (2.5 / 2.75)) {
                                return 7.5625 * (m -= (2.25 / 2.75)) * m + 0.9375
                            } else {
                                return 7.5625 * (m -= (2.625 / 2.75)) * m + 0.984375
                            }
                        }
                    }
                }
            }, elastic: {
                style: "", fn: function (m) {
                    var n = 0.22, o = 0.4;
                    if (m === 0) {
                        return 0
                    }
                    if (m == 1) {
                        return 1
                    }
                    return (o * c.pow(2, -10 * m) * c.sin((m - n / 4) * (2 * c.PI) / n) + 1)
                }
            }
        });
        k.tap = function (o, m) {
            var n = a.createEvent("Event");
            n.initEvent(m, true, true);
            n.pageX = o.pageX;
            n.pageY = o.pageY;
            o.target.dispatchEvent(n)
        };
        k.click = function (o) {
            var n = o.target, m;
            if (!(/(SELECT|INPUT|TEXTAREA)/i).test(n.tagName)) {
                m = a.createEvent("MouseEvents");
                m.initMouseEvent("click", true, true, o.view, 1, n.screenX, n.screenY, n.clientX, n.clientY, o.ctrlKey, o.altKey, o.shiftKey, o.metaKey, 0, null);
                m._constructed = true;
                n.dispatchEvent(m)
            }
        };
        return k
    })();

    function e(j, g) {
        this.wrapper = typeof j == "string" ? a.querySelector(j) : j;
        this.scroller = this.wrapper.children[0];
        this.scrollerStyle = this.scroller.style;
        this.options = {
            startX: 0,
            startY: 0,
            scrollY: true,
            directionLockThreshold: 5,
            momentum: true,
            bounce: true,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: true,
            preventDefaultException: {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/},
            HWCompositing: true,
            useTransition: true,
            useTransform: true
        };
        for (var h in g) {
            this.options[h] = g[h]
        }
        this.translateZ = this.options.HWCompositing && b.hasPerspective ? " translateZ(0)" : "";
        this.options.useTransition = b.hasTransition && this.options.useTransition;
        this.options.useTransform = b.hasTransform && this.options.useTransform;
        this.options.eventPassthrough = this.options.eventPassthrough === true ? "vertical" : this.options.eventPassthrough;
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
        this.options.scrollY = this.options.eventPassthrough == "vertical" ? false : this.options.scrollY;
        this.options.scrollX = this.options.eventPassthrough == "horizontal" ? false : this.options.scrollX;
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
        this.options.bounceEasing = typeof this.options.bounceEasing == "string" ? b.ease[this.options.bounceEasing] || b.ease.circular : this.options.bounceEasing;
        this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
        if (this.options.tap === true) {
            this.options.tap = "tap"
        }
        this.x = 0;
        this.y = 0;
        this.directionX = 0;
        this.directionY = 0;
        this._events = {};
        this._init();
        this.refresh();
        this.scrollTo(this.options.startX, this.options.startY);
        this.enable()
    }

    e.prototype = {
        version: "5.1.2", _init: function () {
            this._initEvents()
        }, destroy: function () {
            this._initEvents(true);
            this._execEvent("destroy")
        }, _transitionEnd: function (g) {
            if (g.target != this.scroller || !this.isInTransition) {
                return
            }
            this._transitionTime();
            if (!this.resetPosition(this.options.bounceTime)) {
                this.isInTransition = false;
                this._execEvent("scrollEnd")
            }
        }, _start: function (h) {
            if (b.eventType[h.type] != 1) {
                if (h.button !== 0) {
                    return
                }
            }
            if (!this.enabled || (this.initiated && b.eventType[h.type] !== this.initiated)) {
                return
            }
            if (this.options.preventDefault && !b.isBadAndroid && !b.preventDefaultException(h.target, this.options.preventDefaultException)) {
                h.preventDefault()
            }
            var g = h.touches ? h.touches[0] : h, i;
            this.initiated = b.eventType[h.type];
            this.moved = false;
            this.distX = 0;
            this.distY = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.directionLocked = 0;
            this._transitionTime();
            this.startTime = b.getTime();
            if (this.options.useTransition && this.isInTransition) {
                this.isInTransition = false;
                i = this.getComputedPosition();
                this._translate(c.round(i.x), c.round(i.y));
                this._execEvent("scrollEnd")
            } else {
                if (!this.options.useTransition && this.isAnimating) {
                    this.isAnimating = false;
                    this._execEvent("scrollEnd")
                }
            }
            this.startX = this.x;
            this.startY = this.y;
            this.absStartX = this.x;
            this.absStartY = this.y;
            this.pointX = g.pageX;
            this.pointY = g.pageY;
            this._execEvent("beforeScrollStart")
        }, _move: function (l) {
            if (!this.enabled || b.eventType[l.type] !== this.initiated) {
                return
            }
            if (this.options.preventDefault) {
                l.preventDefault()
            }
            var n = l.touches ? l.touches[0] : l, i = n.pageX - this.pointX, h = n.pageY - this.pointY, m = b.getTime(), g, o, k, j;
            this.pointX = n.pageX;
            this.pointY = n.pageY;
            this.distX += i;
            this.distY += h;
            k = c.abs(this.distX);
            j = c.abs(this.distY);
            if (m - this.endTime > 300 && (k < 10 && j < 10)) {
                return
            }
            if (!this.directionLocked && !this.options.freeScroll) {
                if (k > j + this.options.directionLockThreshold) {
                    this.directionLocked = "h"
                } else {
                    if (j >= k + this.options.directionLockThreshold) {
                        this.directionLocked = "v"
                    } else {
                        this.directionLocked = "n"
                    }
                }
            }
            if (this.directionLocked == "h") {
                if (this.options.eventPassthrough == "vertical") {
                    l.preventDefault()
                } else {
                    if (this.options.eventPassthrough == "horizontal") {
                        this.initiated = false;
                        return
                    }
                }
                h = 0
            } else {
                if (this.directionLocked == "v") {
                    if (this.options.eventPassthrough == "horizontal") {
                        l.preventDefault()
                    } else {
                        if (this.options.eventPassthrough == "vertical") {
                            this.initiated = false;
                            return
                        }
                    }
                    i = 0
                }
            }
            i = this.hasHorizontalScroll ? i : 0;
            h = this.hasVerticalScroll ? h : 0;
            g = this.x + i;
            o = this.y + h;
            if (g > 0 || g < this.maxScrollX) {
                g = this.options.bounce ? this.x + i / 3 : g > 0 ? 0 : this.maxScrollX
            }
            if (o > 0 || o < this.maxScrollY) {
                o = this.options.bounce ? this.y + h / 3 : o > 0 ? 0 : this.maxScrollY
            }
            this.directionX = i > 0 ? -1 : i < 0 ? 1 : 0;
            this.directionY = h > 0 ? -1 : h < 0 ? 1 : 0;
            if (!this.moved) {
                this._execEvent("scrollStart")
            }
            this.moved = true;
            this._translate(g, o);
            if (m - this.startTime > 300) {
                this.startTime = m;
                this.startX = this.x;
                this.startY = this.y
            }
            if (this.moved) {
                this._execEvent("scrollMove")
            }
        }, _end: function (l) {
            if (!this.enabled || b.eventType[l.type] !== this.initiated) {
                return
            }
            if (this.options.preventDefault && !b.preventDefaultException(l.target, this.options.preventDefaultException)) {
                l.preventDefault()
            }
            var n = l.changedTouches ? l.changedTouches[0] : l, i, h, k = b.getTime() - this.startTime, g = c.round(this.x), q = c.round(this.y), p = c.abs(g - this.startX), o = c.abs(q - this.startY), j = 0, m = "";
            this.isInTransition = 0;
            this.initiated = 0;
            this.endTime = b.getTime();
            if (this.resetPosition(this.options.bounceTime)) {
                return
            }
            this.scrollTo(g, q);
            if (!this.moved) {
                if (this.options.tap) {
                    b.tap(l, this.options.tap)
                }
                if (this.options.click) {
                    b.click(l)
                }
                this._execEvent("scrollCancel");
                return
            }
            if (this._events.flick && k < 200 && p < 100 && o < 100) {
                this._execEvent("flick");
                return
            }
            if (this.options.momentum && k < 300) {
                i = this.hasHorizontalScroll ? b.momentum(this.x, this.startX, k, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                    destination: g,
                    duration: 0
                };
                h = this.hasVerticalScroll ? b.momentum(this.y, this.startY, k, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                    destination: q,
                    duration: 0
                };
                g = i.destination;
                q = h.destination;
                j = c.max(i.duration, h.duration);
                this.isInTransition = 1
            }
            if (g != this.x || q != this.y) {
                if (g > 0 || g < this.maxScrollX || q > 0 || q < this.maxScrollY) {
                    m = b.ease.quadratic
                }
                this.scrollTo(g, q, j, m);
                return
            }
            this._execEvent("scrollEnd")
        }, _resize: function () {
            var g = this;
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(function () {
                g.refresh()
            }, this.options.resizePolling)
        }, resetPosition: function (h) {
            var g = this.x, i = this.y;
            h = h || 0;
            if (!this.hasHorizontalScroll || this.x > 0) {
                g = 0
            } else {
                if (this.x < this.maxScrollX) {
                    g = this.maxScrollX
                }
            }
            if (!this.hasVerticalScroll || this.y > 0) {
                i = 0
            } else {
                if (this.y < this.maxScrollY) {
                    i = this.maxScrollY
                }
            }
            if (g == this.x && i == this.y) {
                return false
            }
            this.scrollTo(g, i, h, this.options.bounceEasing);
            return true
        }, disable: function () {
            this.enabled = false
        }, enable: function () {
            this.enabled = true
        }, refresh: function () {
            var g = this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth;
            this.wrapperHeight = this.wrapper.clientHeight;
            this.scrollerWidth = this.scroller.offsetWidth;
            this.scrollerHeight = this.scroller.offsetHeight;
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
            if (!this.hasHorizontalScroll) {
                this.maxScrollX = 0;
                this.scrollerWidth = this.wrapperWidth
            }
            if (!this.hasVerticalScroll) {
                this.maxScrollY = 0;
                this.scrollerHeight = this.wrapperHeight
            }
            this.endTime = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.wrapperOffset = b.offset(this.wrapper);
            this._execEvent("refresh");
            this.resetPosition()
        }, on: function (h, g) {
            if (!this._events[h]) {
                this._events[h] = []
            }
            this._events[h].push(g)
        }, off: function (i, h) {
            if (!this._events[i]) {
                return
            }
            var g = this._events[i].indexOf(h);
            if (g > -1) {
                this._events[i].splice(g, 1)
            }
        }, _execEvent: function (j) {
            if (!this._events[j]) {
                return
            }
            var h = 0, g = this._events[j].length;
            if (!g) {
                return
            }
            for (; h < g; h++) {
                this._events[j][h].apply(this, [].slice.call(arguments, 1))
            }
        }, scrollBy: function (g, j, h, i) {
            g = this.x + g;
            j = this.y + j;
            h = h || 0;
            this.scrollTo(g, j, h, i)
        }, scrollTo: function (g, j, h, i) {
            i = i || b.ease.circular;
            this.isInTransition = this.options.useTransition && h > 0;
            if (!h || (this.options.useTransition && i.style)) {
                this._transitionTimingFunction(i.style);
                this._transitionTime(h);
                this._translate(g, j)
            } else {
                this._animate(g, j, h, i.fn)
            }
        }, scrollToElement: function (h, i, g, l, k) {
            h = h.nodeType ? h : this.scroller.querySelector(h);
            if (!h) {
                return
            }
            var j = b.offset(h);
            j.left -= this.wrapperOffset.left;
            j.top -= this.wrapperOffset.top;
            if (g === true) {
                g = c.round(h.offsetWidth / 2 - this.wrapper.offsetWidth / 2)
            }
            if (l === true) {
                l = c.round(h.offsetHeight / 2 - this.wrapper.offsetHeight / 2)
            }
            j.left -= g || 0;
            j.top -= l || 0;
            j.left = j.left > 0 ? 0 : j.left < this.maxScrollX ? this.maxScrollX : j.left;
            j.top = j.top > 0 ? 0 : j.top < this.maxScrollY ? this.maxScrollY : j.top;
            i = i === undefined || i === null || i === "auto" ? c.max(c.abs(this.x - j.left), c.abs(this.y - j.top)) : i;
            this.scrollTo(j.left, j.top, i, k)
        }, _transitionTime: function (g) {
            g = g || 0;
            this.scrollerStyle[b.style.transitionDuration] = g + "ms";
            if (!g && b.isBadAndroid) {
                this.scrollerStyle[b.style.transitionDuration] = "0.001s"
            }
        }, _transitionTimingFunction: function (g) {
            this.scrollerStyle[b.style.transitionTimingFunction] = g
        }, _translate: function (g, h) {
            if (this.options.useTransform) {
                this.scrollerStyle[b.style.transform] = "translate(" + g + "px," + h + "px)" + this.translateZ
            } else {
                g = c.round(g);
                h = c.round(h);
                this.scrollerStyle.left = g + "px";
                this.scrollerStyle.top = h + "px"
            }
            this.x = g;
            this.y = h
        }, _initEvents: function (g) {
            var h = g ? b.removeEvent : b.addEvent, i = this.options.bindToWrapper ? this.wrapper : d;
            h(d, "orientationchange", this);
            h(d, "resize", this);
            if (this.options.click) {
                h(this.wrapper, "click", this, true)
            }
            if (!this.options.disableMouse) {
                h(this.wrapper, "mousedown", this);
                h(i, "mousemove", this);
                h(i, "mousecancel", this);
                h(i, "mouseup", this)
            }
            if (b.hasPointer && !this.options.disablePointer) {
                h(this.wrapper, b.prefixPointerEvent("pointerdown"), this);
                h(i, b.prefixPointerEvent("pointermove"), this);
                h(i, b.prefixPointerEvent("pointercancel"), this);
                h(i, b.prefixPointerEvent("pointerup"), this)
            }
            if (b.hasTouch && !this.options.disableTouch) {
                h(this.wrapper, "touchstart", this);
                h(i, "touchmove", this);
                h(i, "touchcancel", this);
                h(i, "touchend", this)
            }
            h(this.scroller, "transitionend", this);
            h(this.scroller, "webkitTransitionEnd", this);
            h(this.scroller, "oTransitionEnd", this);
            h(this.scroller, "MSTransitionEnd", this)
        }, getComputedPosition: function () {
            var h = d.getComputedStyle(this.scroller, null), g, i;
            if (this.options.useTransform) {
                h = h[b.style.transform].split(")")[0].split(", ");
                g = +(h[12] || h[4]);
                i = +(h[13] || h[5])
            } else {
                g = +h.left.replace(/[^-\d.]/g, "");
                i = +h.top.replace(/[^-\d.]/g, "")
            }
            return {x: g, y: i}
        }, _animate: function (p, o, j, g) {
            var m = this, l = this.x, k = this.y, h = b.getTime(), n = h + j;

            function i() {
                var q = b.getTime(), s, r, t;
                if (q >= n) {
                    m.isAnimating = false;
                    m._translate(p, o);
                    if (!m.resetPosition(m.options.bounceTime)) {
                        m._execEvent("scrollEnd")
                    }
                    return
                }
                q = (q - h) / j;
                t = g(q);
                s = (p - l) * t + l;
                r = (o - k) * t + k;
                m._translate(s, r);
                if (m.isAnimating) {
                    f(i)
                }
            }

            this.isAnimating = true;
            i()
        }, handleEvent: function (g) {
            switch (g.type) {
                case"touchstart":
                case"pointerdown":
                case"MSPointerDown":
                case"mousedown":
                    this._start(g);
                    break;
                case"touchmove":
                case"pointermove":
                case"MSPointerMove":
                case"mousemove":
                    this._move(g);
                    break;
                case"touchend":
                case"pointerup":
                case"MSPointerUp":
                case"mouseup":
                case"touchcancel":
                case"pointercancel":
                case"MSPointerCancel":
                case"mousecancel":
                    this._end(g);
                    break;
                case"orientationchange":
                case"resize":
                    this._resize();
                    break;
                case"transitionend":
                case"webkitTransitionEnd":
                case"oTransitionEnd":
                case"MSTransitionEnd":
                    this._transitionEnd(g);
                    break;
                case"wheel":
                case"DOMMouseScroll":
                case"mousewheel":
                    this._wheel(g);
                    break;
                case"keydown":
                    this._key(g);
                    break;
                case"click":
                    if (!g._constructed) {
                        g.preventDefault();
                        g.stopPropagation()
                    }
                    break
            }
        }
    };
    e.utils = b;
    if (typeof module != "undefined" && module.exports) {
        module.exports = e
    } else {
        d.IScroll = e
    }
})(window, document, Math);
// howler.js v1.1.25
;!function () {
    var e = {}, t = null, n = !0, r = !1;
    try {
        "undefined" != typeof AudioContext ? t = new AudioContext : "undefined" != typeof webkitAudioContext ? t = new webkitAudioContext : n = !1
    } catch (i) {
        n = !1
    }
    if (!n)if ("undefined" != typeof Audio)try {
        new Audio
    } catch (i) {
        r = !0
    } else r = !0;
    if (n) {
        var s = void 0 === t.createGain ? t.createGainNode() : t.createGain();
        s.gain.value = 1, s.connect(t.destination)
    }
    var o = function (e) {
        this._volume = 1, this._muted = !1, this.usingWebAudio = n, this.ctx = t, this.noAudio = r, this._howls = [], this._codecs = e, this.iOSAutoEnable = !0
    };
    o.prototype = {
        volume: function (e) {
            var t = this;
            if (e = parseFloat(e), e >= 0 && 1 >= e) {
                t._volume = e, n && (s.gain.value = e);
                for (var r in t._howls)if (t._howls.hasOwnProperty(r) && t._howls[r]._webAudio === !1)for (var i = 0; i < t._howls[r]._audioNode.length; i++)t._howls[r]._audioNode[i].volume = t._howls[r]._volume * t._volume;
                return t
            }
            return n ? s.gain.value : t._volume
        }, mute: function () {
            return this._setMuted(!0), this
        }, unmute: function () {
            return this._setMuted(!1), this
        }, _setMuted: function (e) {
            var t = this;
            t._muted = e, n && (s.gain.value = e ? 0 : t._volume);
            for (var r in t._howls)if (t._howls.hasOwnProperty(r) && t._howls[r]._webAudio === !1)for (var i = 0; i < t._howls[r]._audioNode.length; i++)t._howls[r]._audioNode[i].muted = e
        }, codecs: function (e) {
            return this._codecs[e]
        }, _enableiOSAudio: function () {
            var e = this;
            if (!t || !e._iOSEnabled && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                e._iOSEnabled = !1;
                var n = function () {
                    var r = t.createBuffer(1, 1, 22050), i = t.createBufferSource();
                    i.buffer = r, i.connect(t.destination), void 0 === i.start ? i.noteOn(0) : i.start(0), setTimeout(function () {
                        (i.playbackState === i.PLAYING_STATE || i.playbackState === i.FINISHED_STATE) && (e._iOSEnabled = !0, e.iOSAutoEnable = !1, window.removeEventListener("touchstart", n, !1))
                    }, 0)
                };
                return window.addEventListener("touchstart", n, !1), e
            }
        }
    };
    var u = null, a = {};
    r || (u = new Audio, a = {
        mp3: !!u.canPlayType("audio/mpeg;").replace(/^no$/, ""),
        opus: !!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
        ogg: !!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
        wav: !!u.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
        aac: !!u.canPlayType("audio/aac;").replace(/^no$/, ""),
        m4a: !!(u.canPlayType("audio/x-m4a;") || u.canPlayType("audio/m4a;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
        mp4: !!(u.canPlayType("audio/x-mp4;") || u.canPlayType("audio/mp4;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
        weba: !!u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
    });
    var f = new o(a), l = function (e) {
        var r = this;
        r._autoplay = e.autoplay || !1, r._buffer = e.buffer || !1, r._duration = e.duration || 0, r._format = e.format || null, r._loop = e.loop || !1, r._loaded = !1, r._sprite = e.sprite || {}, r._src = e.src || "", r._pos3d = e.pos3d || [0, 0, -.5], r._volume = void 0 !== e.volume ? e.volume : 1, r._urls = e.urls || [], r._rate = e.rate || 1, r._model = e.model || null, r._onload = [e.onload || function () {
        }], r._onloaderror = [e.onloaderror || function () {
        }], r._onend = [e.onend || function () {
        }], r._onpause = [e.onpause || function () {
        }], r._onplay = [e.onplay || function () {
        }], r._onendTimer = [], r._webAudio = n && !r._buffer, r._audioNode = [], r._webAudio && r._setupAudioNode(), void 0 !== t && t && f.iOSAutoEnable && f._enableiOSAudio(), f._howls.push(r), r.load()
    };
    if (l.prototype = {
            load: function () {
                var e = this, t = null;
                if (r)return void e.on("loaderror");
                for (var n = 0; n < e._urls.length; n++) {
                    var i, s;
                    if (e._format)i = e._format; else {
                        if (s = e._urls[n], i = /^data:audio\/([^;,]+);/i.exec(s), i || (i = /\.([^.]+)$/.exec(s.split("?", 1)[0])), !i)return void e.on("loaderror");
                        i = i[1].toLowerCase()
                    }
                    if (a[i]) {
                        t = e._urls[n];
                        break
                    }
                }
                if (!t)return void e.on("loaderror");
                if (e._src = t, e._webAudio)c(e, t); else {
                    var u = new Audio;
                    u.addEventListener("error", function () {
                        u.error && 4 === u.error.code && (o.noAudio = !0), e.on("loaderror", {type: u.error ? u.error.code : 0})
                    }, !1), e._audioNode.push(u), u.src = t, u._pos = 0, u.preload = "auto", u.volume = f._muted ? 0 : e._volume * f.volume();
                    var l = function () {
                        e._duration = Math.ceil(10 * u.duration) / 10, 0 === Object.getOwnPropertyNames(e._sprite).length && (e._sprite = {_default: [0, 1e3 * e._duration]}), e._loaded || (e._loaded = !0, e.on("load")), e._autoplay && e.play(), u.removeEventListener("canplaythrough", l, !1)
                    };
                    u.addEventListener("canplaythrough", l, !1), u.load()
                }
                return e
            }, urls: function (e) {
                var t = this;
                return e ? (t.stop(), t._urls = "string" == typeof e ? [e] : e, t._loaded = !1, t.load(), t) : t._urls
            }, play: function (e, n) {
                var r = this;
                return "function" == typeof e && (n = e), e && "function" != typeof e || (e = "_default"), r._loaded ? r._sprite[e] ? (r._inactiveNode(function (i) {
                    i._sprite = e;
                    var s = i._pos > 0 ? i._pos : r._sprite[e][0] / 1e3, o = 0;
                    r._webAudio ? (o = r._sprite[e][1] / 1e3 - i._pos, i._pos > 0 && (s = r._sprite[e][0] / 1e3 + s)) : o = r._sprite[e][1] / 1e3 - (s - r._sprite[e][0] / 1e3);
                    var u, a = !(!r._loop && !r._sprite[e][2]), l = "string" == typeof n ? n : Math.round(Date.now() * Math.random()) + "";
                    if (function () {
                            var t = {id: l, sprite: e, loop: a};
                            u = setTimeout(function () {
                                !r._webAudio && a && r.stop(t.id).play(e, t.id), r._webAudio && !a && (r._nodeById(t.id).paused = !0, r._nodeById(t.id)._pos = 0, r._clearEndTimer(t.id)), r._webAudio || a || r.stop(t.id), r.on("end", l)
                            }, 1e3 * o), r._onendTimer.push({timer: u, id: t.id})
                        }(), r._webAudio) {
                        var c = r._sprite[e][0] / 1e3, h = r._sprite[e][1] / 1e3;
                        i.id = l, i.paused = !1, d(r, [a, c, h], l), r._playStart = t.currentTime, i.gain.value = r._volume, void 0 === i.bufferSource.start ? i.bufferSource.noteGrainOn(0, s, o) : i.bufferSource.start(0, s, o)
                    } else {
                        if (4 !== i.readyState && (i.readyState || !navigator.isCocoonJS))return r._clearEndTimer(l), function () {
                            var t = r, s = e, o = n, u = i, a = function () {
                                t.play(s, o), u.removeEventListener("canplaythrough", a, !1)
                            };
                            u.addEventListener("canplaythrough", a, !1)
                        }(), r;
                        i.readyState = 4, i.id = l, i.currentTime = s, i.muted = f._muted || i.muted, i.volume = r._volume * f.volume(), setTimeout(function () {
                            i.play()
                        }, 0)
                    }
                    return r.on("play"), "function" == typeof n && n(l), r
                }), r) : ("function" == typeof n && n(), r) : (r.on("load", function () {
                    r.play(e, n)
                }), r)
            }, pause: function (e) {
                var t = this;
                if (!t._loaded)return t.on("play", function () {
                    t.pause(e)
                }), t;
                t._clearEndTimer(e);
                var n = e ? t._nodeById(e) : t._activeNode();
                if (n)if (n._pos = t.pos(null, e), t._webAudio) {
                    if (!n.bufferSource || n.paused)return t;
                    n.paused = !0, void 0 === n.bufferSource.stop ? n.bufferSource.noteOff(0) : n.bufferSource.stop(0)
                } else n.pause();
                return t.on("pause"), t
            }, stop: function (e) {
                var t = this;
                if (!t._loaded)return t.on("play", function () {
                    t.stop(e)
                }), t;
                t._clearEndTimer(e);
                var n = e ? t._nodeById(e) : t._activeNode();
                if (n)if (n._pos = 0, t._webAudio) {
                    if (!n.bufferSource || n.paused)return t;
                    n.paused = !0, void 0 === n.bufferSource.stop ? n.bufferSource.noteOff(0) : n.bufferSource.stop(0)
                } else isNaN(n.duration) || (n.pause(), n.currentTime = 0);
                return t
            }, mute: function (e) {
                var t = this;
                if (!t._loaded)return t.on("play", function () {
                    t.mute(e)
                }), t;
                var n = e ? t._nodeById(e) : t._activeNode();
                return n && (t._webAudio ? n.gain.value = 0 : n.muted = !0), t
            }, unmute: function (e) {
                var t = this;
                if (!t._loaded)return t.on("play", function () {
                    t.unmute(e)
                }), t;
                var n = e ? t._nodeById(e) : t._activeNode();
                return n && (t._webAudio ? n.gain.value = t._volume : n.muted = !1), t
            }, volume: function (e, t) {
                var n = this;
                if (e = parseFloat(e), e >= 0 && 1 >= e) {
                    if (n._volume = e, !n._loaded)return n.on("play", function () {
                        n.volume(e, t)
                    }), n;
                    var r = t ? n._nodeById(t) : n._activeNode();
                    return r && (n._webAudio ? r.gain.value = e : r.volume = e * f.volume()), n
                }
                return n._volume
            }, loop: function (e) {
                var t = this;
                return "boolean" == typeof e ? (t._loop = e, t) : t._loop
            }, sprite: function (e) {
                var t = this;
                return "object" == typeof e ? (t._sprite = e, t) : t._sprite
            }, pos: function (e, n) {
                var r = this;
                if (!r._loaded)return r.on("load", function () {
                    r.pos(e)
                }), "number" == typeof e ? r : r._pos || 0;
                e = parseFloat(e);
                var i = n ? r._nodeById(n) : r._activeNode();
                if (i)return e >= 0 ? (r.pause(n), i._pos = e, r.play(i._sprite, n), r) : r._webAudio ? i._pos + (t.currentTime - r._playStart) : i.currentTime;
                if (e >= 0)return r;
                for (var s = 0; s < r._audioNode.length; s++)if (r._audioNode[s].paused && 4 === r._audioNode[s].readyState)return r._webAudio ? r._audioNode[s]._pos : r._audioNode[s].currentTime
            }, pos3d: function (e, t, n, r) {
                var i = this;
                if (t = void 0 !== t && t ? t : 0, n = void 0 !== n && n ? n : -.5, !i._loaded)return i.on("play", function () {
                    i.pos3d(e, t, n, r)
                }), i;
                if (!(e >= 0 || 0 > e))return i._pos3d;
                if (i._webAudio) {
                    var s = r ? i._nodeById(r) : i._activeNode();
                    s && (i._pos3d = [e, t, n], s.panner.setPosition(e, t, n), s.panner.panningModel = i._model || "HRTF")
                }
                return i
            }, fade: function (e, t, n, r, i) {
                var s = this, o = Math.abs(e - t), u = e > t ? "down" : "up", a = o / .01, f = n / a;
                if (!s._loaded)return s.on("load", function () {
                    s.fade(e, t, n, r, i)
                }), s;
                s.volume(e, i);
                for (var l = 1; a >= l; l++)!function () {
                    var e = s._volume + ("up" === u ? .01 : -.01) * l, n = Math.round(1e3 * e) / 1e3, o = t;
                    setTimeout(function () {
                        s.volume(n, i), n === o && r && r()
                    }, f * l)
                }()
            }, fadeIn: function (e, t, n) {
                return this.volume(0).play().fade(0, e, t, n)
            }, fadeOut: function (e, t, n, r) {
                var i = this;
                return i.fade(i._volume, e, t, function () {
                    n && n(), i.pause(r), i.on("end")
                }, r)
            }, _nodeById: function (e) {
                for (var t = this, n = t._audioNode[0], r = 0; r < t._audioNode.length; r++)if (t._audioNode[r].id === e) {
                    n = t._audioNode[r];
                    break
                }
                return n
            }, _activeNode: function () {
                for (var e = this, t = null, n = 0; n < e._audioNode.length; n++)if (!e._audioNode[n].paused) {
                    t = e._audioNode[n];
                    break
                }
                return e._drainPool(), t
            }, _inactiveNode: function (e) {
                for (var t = this, n = null, r = 0; r < t._audioNode.length; r++)if (t._audioNode[r].paused && 4 === t._audioNode[r].readyState) {
                    e(t._audioNode[r]), n = !0;
                    break
                }
                if (t._drainPool(), !n) {
                    var i;
                    if (t._webAudio)i = t._setupAudioNode(), e(i); else {
                        t.load(), i = t._audioNode[t._audioNode.length - 1];
                        var s = navigator.isCocoonJS ? "canplaythrough" : "loadedmetadata", o = function () {
                            i.removeEventListener(s, o, !1), e(i)
                        };
                        i.addEventListener(s, o, !1)
                    }
                }
            }, _drainPool: function () {
                var e, t = this, n = 0;
                for (e = 0; e < t._audioNode.length; e++)t._audioNode[e].paused && n++;
                for (e = t._audioNode.length - 1; e >= 0 && !(5 >= n); e--)t._audioNode[e].paused && (t._webAudio && t._audioNode[e].disconnect(0), n--, t._audioNode.splice(e, 1))
            }, _clearEndTimer: function (e) {
                for (var t = this, n = 0, r = 0; r < t._onendTimer.length; r++)if (t._onendTimer[r].id === e) {
                    n = r;
                    break
                }
                var i = t._onendTimer[n];
                i && (clearTimeout(i.timer), t._onendTimer.splice(n, 1))
            }, _setupAudioNode: function () {
                var e = this, n = e._audioNode, r = e._audioNode.length;
                return n[r] = void 0 === t.createGain ? t.createGainNode() : t.createGain(), n[r].gain.value = e._volume, n[r].paused = !0, n[r]._pos = 0, n[r].readyState = 4, n[r].connect(s), n[r].panner = t.createPanner(), n[r].panner.panningModel = e._model || "equalpower", n[r].panner.setPosition(e._pos3d[0], e._pos3d[1], e._pos3d[2]), n[r].panner.connect(n[r]), n[r]
            }, on: function (e, t) {
                var n = this, r = n["_on" + e];
                if ("function" == typeof t)r.push(t); else for (var i = 0; i < r.length; i++)t ? r[i].call(n, t) : r[i].call(n);
                return n
            }, off: function (e, t) {
                var n = this, r = n["_on" + e], i = t ? "" + t : null;
                if (i) {
                    for (var s = 0; s < r.length; s++)if (i === "" + r[s]) {
                        r.splice(s, 1);
                        break
                    }
                } else n["_on" + e] = [];
                return n
            }, unload: function () {
                for (var t = this, n = t._audioNode, r = 0; r < t._audioNode.length; r++)n[r].paused || (t.stop(n[r].id), t.on("end", n[r].id)), t._webAudio ? n[r].disconnect(0) : n[r].src = "";
                for (r = 0; r < t._onendTimer.length; r++)clearTimeout(t._onendTimer[r].timer);
                var i = f._howls.indexOf(t);
                null !== i && i >= 0 && f._howls.splice(i, 1), delete e[t._src], t = null
            }
        }, n)var c = function (t, n) {
        if (n in e)return t._duration = e[n].duration, void p(t);
        if (/^data:[^;]+;base64,/.test(n)) {
            for (var r = atob(n.split(",")[1]), i = new Uint8Array(r.length), s = 0; s < r.length; ++s)i[s] = r.charCodeAt(s);
            h(i.buffer, t, n)
        } else {
            var o = new XMLHttpRequest;
            o.open("GET", n, !0), o.responseType = "arraybuffer", o.onload = function () {
                h(o.response, t, n)
            }, o.onerror = function () {
                t._webAudio && (t._buffer = !0, t._webAudio = !1, t._audioNode = [], delete t._gainNode, delete e[n], t.load())
            };
            try {
                o.send()
            } catch (u) {
                o.onerror()
            }
        }
    }, h = function (n, r, i) {
        t.decodeAudioData(n, function (t) {
            t && (e[i] = t, p(r, t))
        }, function () {
            r.on("loaderror")
        })
    }, p = function (e, t) {
        e._duration = t ? t.duration : e._duration, 0 === Object.getOwnPropertyNames(e._sprite).length && (e._sprite = {_default: [0, 1e3 * e._duration]}), e._loaded || (e._loaded = !0, e.on("load")), e._autoplay && e.play()
    }, d = function (n, r, i) {
        var s = n._nodeById(i);
        s.bufferSource = t.createBufferSource(), s.bufferSource.buffer = e[n._src], s.bufferSource.connect(s.panner), s.bufferSource.loop = r[0], r[0] && (s.bufferSource.loopStart = r[1], s.bufferSource.loopEnd = r[1] + r[2]), s.bufferSource.playbackRate.value = n._rate
    };
    "function" == typeof define && define.amd && define(function () {
        return {Howler: f, Howl: l}
    }), "undefined" != typeof exports && (exports.Howler = f, exports.Howl = l), "undefined" != typeof window && (window.Howler = f, window.Howl = l)
}();
/* weixinAPi.js */
WeixinApi = {};
WeixinApi.ready = function () {
    console.log('微信js-sdk发布，不再使用此js支持分享等功能');
    return;
}
;
(function (a, d) {
    a.getWinSize = function () {
        var b, c;
        if (a.innerWidth) {
            b = parseInt(a.innerWidth) > parseInt(d.documentElement.clientWidth) ? parseInt(d.documentElement.clientWidth) : parseInt(a.innerWidth);
            c = parseInt(a.innerHeight) > parseInt(d.documentElement.clientHeight) ? parseInt(d.documentElement.clientHeight) : parseInt(a.innerHeight);
        } else {
            b = parseInt(d.body.clientWidth) > parseInt(d.documentElement.clientWidth) ? parseInt(d.documentElement.clientWidth) : parseInt(d.body.clientWidth);
            c = parseInt(d.body.clientHeight) > parseInt(d.documentElement.clientHeight) ? parseInt(d.documentElement.clientHeight) : parseInt(d.body.clientHeight);
        }
        return [b, c];
    }
})(window, document);
document.write('<style>\
#dialogPop {display:none;position: fixed;z-index:1010;width: 100%;height: 100%;background: rgba(0,0,0, 0.3);top:0;color: #fff;text-align: center;font-size: 16px;text-align: center;}\
.alertMain {width: 60%;color: #000;background: #fff;display: inline-block;border-radius: 5px;border: 1px solid #ccc;margin-top: 50px;}\
.alertMain .alertTitle {text-align: left;position: relative;padding: 5px;border-bottom: 1px solid #ccc;}\
.alertMain .alertTitle #title{color:#898989;}\
.alertMain .alertTitle .alertCloseBtn {position: absolute;right: 5px;display: inline-block;width: 24px;height: 24px;text-align:center;line-height: 24px;font-size: 24px;top: 0;color:#898989;}\
.alertMain .msg {padding: 10px;text-align: center;font-size: 14px;color:#898989;}\
.alertMain .btns {padding:5px 0;color: #ff7700;}\
</style>');
window.alert = function (msg, callback) {
    var dialog = document.getElementById('dialogPop');

    function close() {
        document.getElementById('dialogPop').style.display = 'none';
        if (callback && typeof callback == 'function') {
            callback.call(dialog);
        }
    }

    if (!dialog) {
        dialog = document.createElement('div');
        document.body.appendChild(dialog);
        dialog.innerHTML = '<div class="alertMain">\
                                <div class="alertTitle">\
                                <span id="title"> 提示</span>\
                                <span class="alertCloseBtn">×</span>\
                            </div>\
                                <div class="msg" id="alertMsgBox">错误提示</div>\
                        </div>'
        dialog.id = 'dialogPop';

        $('.alertCloseBtn', dialog).off('touchend').on('touchend', function () {
            close();
        });
        $('.btns', dialog).off('touchend').on('touchend', function () {
            close();
        });
    }
    var msgPanel = document.getElementById('alertMsgBox');
    msgPanel.innerHTML = msg;
    dialog.style.display = 'block';
}

var debug = false;

function phoneDebugLog(msg) {
    if (!debug) {
        return;
    }
    $.ajax({
        type: 'post',
        url: '/debuglog',
        data: {msg: msg}
    });
}

;Zepto.isMobile = function (tel) {
    return /^1[34578][0-9]{9}$/g.test(tel);
};
;Zepto.isANDROID = function () {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('android') > -1) {
        return true;
    } else {
        return false;
    }
};
;Zepto.isIPHONE = function () {
    var ua = navigator.userAgent.toLowerCase();

    if (ua.indexOf('iphone') > -1) {
        return true;
    } else {
        return false;
    }
};
;Zepto.isName = function (name) {
    var reg = /((^[\u4E00-\u9FA5]{2,12}$)|(^[a-zA-Z]+[\s\.]?([a-zA-Z]+[\s\.]?){0,4}[a-zA-Z]$))/;
    return reg.test(name);
};
;Zepto.isWeixinHao = function (name) {
    var reg = /^[a-zA-Z\d_]{5,}$/;
    return reg.test(name);
};
(function ($) {
    $.fn.loadImages = function (option) {
        if (option.loadHtml) {
            $(this).append(option.loadHtml)
        }
        this.each(function () {
            var imgs = $('img', this), length = imgs.length, self = this, total = length;

            function loadImg() {
                length--;

                // 鐧惧垎姣�
                if (option.progress) {
                    option.progress.call(self, total, total - length);
                }

                if (length <= 0) {
                    if (option.callback && typeof option.callback == 'function') {
                        option.callback.call(self);
                    }
                }
            }

            if (length > 0) {
                imgs.each(function () {
                    var dsrc = $(this).attr('dsrc');
                    if (dsrc) {
                        $(this).attr('dsrc', null);
                        this.src = dsrc;
                    }

                    if (this.complete) {
                        loadImg();
                    } else {
                        this.onload = loadImg;
                        this.onerror = loadImg;
                    }
                });
            } else {
                loadImg();
            }
        });
        return this;
    }
})(Zepto);

;(function () {
    // 鍔ㄧ敾鏂规硶
    window.fetchAttr = function (obj, property) {
        var pro = property.charAt(0).toLocaleUpperCase() + property.substr(1);
        return obj[property] || obj['ms' + pro] || obj['moz' + pro] || obj['webkit' + pro] || obj['o' + pro];
    };
    window.checkAttr = function (obj, property) {
        if (obj.hasOwnProperty(property)) {
            return property;
        } else {
            property = property.charAt(0).toLocaleUpperCase() + property.substr(1);
            var prefixes = ['ms', 'moz', 'webkit', 'o'];
            for (var i = 0, l = prefixes.length; i < l; i++) {
                if (obj.hasOwnProperty(prefixes[i] + property)) {
                    return prefixes[i] + property;
                }
            }
        }

        return null;
    }
    window.requestAnimationFrame = fetchAttr(window, 'requestAnimationFrame');
// 鏄惁瀛樺湪绯荤粺鍔ㄧ敾鏂规硶
    if (window.requestAnimationFrame) {
        window.animationNext = 1, window.animations = {};

        window.animation = function (callback, element) {
            var current = animationNext++;
            animations[current] = true;

            var animate = function () {
                if (!animations[current]) {
                    return;
                } // deleted?
                window.requestAnimationFrame(animate, element);
                callback();
            };
            window.requestAnimationFrame(animate, element);
            return current;
        };

        window.clearAnimation = function (id) {
            if (animations[id]) {
                delete animations[id];
            }
        };
    } else {
        window.animation = function (callback, element) {
            return window.setInterval(callback, 1000 / 60);
        };
        window.clearAnimation = function (id) {
            window.clearInterval(id);
        };
    }
})();