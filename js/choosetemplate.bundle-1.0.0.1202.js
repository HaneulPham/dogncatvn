(self.webpackChunkRWZ_V2 = self.webpackChunkRWZ_V2 || []).push([[9182], {
    84183: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = t.ChooseTemplatePage = void 0;
        var a = n(47354)
            , o = z(n(36049))
            , r = z(n(96540))
            , s = n(67851)
            , l = n(34819)
            , p = n(82960)
            , i = n(95385)
            , m = A(n(4672))
            , c = A(n(88288))
            , d = A(n(44950))
            , g = z(n(87364))
            , u = z(n(51904))
            , h = z(n(27888))
            , k = z(n(51434))
            , f = n(10700)
            , b = n(68341)
            , x = n(81641)
            , v = A(n(8204))
            , T = n(55882)
            , C = n(4623)
            , S = z(n(42692))
            , y = z(n(87541))
            , E = n(11617)
            , w = n(9127)
            , L = z(n(19656))
            , _ = z(n(40974))
            , O = z(n(43473))
            , P = z(n(18452))
            , N = ["photo"];
        function F(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
                , n = new WeakMap;
            return (F = function (e) {
                return e ? n : t
            }
            )(e)
        }
        function A(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != R(e) && "function" != typeof e)
                return {
                    default: e
                };
            var n = F(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {
                __proto__: null
            }
                , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && {}.hasOwnProperty.call(e, r)) {
                    var s = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    s && (s.get || s.set) ? Object.defineProperty(a, r, s) : a[r] = e[r]
                }
            return a.default = e,
                n && n.set(e, a),
                a
        }
        function z(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function R(e) {
            return R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                R(e)
        }
        function I() {
            return I = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
                ,
                I.apply(null, arguments)
        }
        function D(e) {
            return function (e) {
                if (Array.isArray(e))
                    return V(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function (e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return V(e, t);
                    var n = {}.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? V(e, t) : void 0
                }
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function V(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        function U() {
            U = function () {
                return t
            }
                ;
            var e, t = {}, n = Object.prototype, a = n.hasOwnProperty, o = Object.defineProperty || function (e, t, n) {
                e[t] = n.value
            }
                , r = "function" == typeof Symbol ? Symbol : {}, s = r.iterator || "@@iterator", l = r.asyncIterator || "@@asyncIterator", p = r.toStringTag || "@@toStringTag";
            function i(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                    e[t]
            }
            try {
                i({}, "")
            } catch (e) {
                i = function (e, t, n) {
                    return e[t] = n
                }
            }
            function m(e, t, n, a) {
                var r = t && t.prototype instanceof f ? t : f
                    , s = Object.create(r.prototype)
                    , l = new P(a || []);
                return o(s, "_invoke", {
                    value: w(e, n, l)
                }),
                    s
            }
            function c(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = m;
            var d = "suspendedStart"
                , g = "suspendedYield"
                , u = "executing"
                , h = "completed"
                , k = {};
            function f() { }
            function b() { }
            function x() { }
            var v = {};
            i(v, s, (function () {
                return this
            }
            ));
            var T = Object.getPrototypeOf
                , C = T && T(T(N([])));
            C && C !== n && a.call(C, s) && (v = C);
            var S = x.prototype = f.prototype = Object.create(v);
            function y(e) {
                ["next", "throw", "return"].forEach((function (t) {
                    i(e, t, (function (e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function E(e, t) {
                function n(o, r, s, l) {
                    var p = c(e[o], e, r);
                    if ("throw" !== p.type) {
                        var i = p.arg
                            , m = i.value;
                        return m && "object" == R(m) && a.call(m, "__await") ? t.resolve(m.__await).then((function (e) {
                            n("next", e, s, l)
                        }
                        ), (function (e) {
                            n("throw", e, s, l)
                        }
                        )) : t.resolve(m).then((function (e) {
                            i.value = e,
                                s(i)
                        }
                        ), (function (e) {
                            return n("throw", e, s, l)
                        }
                        ))
                    }
                    l(p.arg)
                }
                var r;
                o(this, "_invoke", {
                    value: function (e, a) {
                        function o() {
                            return new t((function (t, o) {
                                n(e, a, t, o)
                            }
                            ))
                        }
                        return r = r ? r.then(o, o) : o()
                    }
                })
            }
            function w(t, n, a) {
                var o = d;
                return function (r, s) {
                    if (o === u)
                        throw Error("Generator is already running");
                    if (o === h) {
                        if ("throw" === r)
                            throw s;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (a.method = r,
                        a.arg = s; ;) {
                        var l = a.delegate;
                        if (l) {
                            var p = L(l, a);
                            if (p) {
                                if (p === k)
                                    continue;
                                return p
                            }
                        }
                        if ("next" === a.method)
                            a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if (o === d)
                                throw o = h,
                                a.arg;
                            a.dispatchException(a.arg)
                        } else
                            "return" === a.method && a.abrupt("return", a.arg);
                        o = u;
                        var i = c(t, n, a);
                        if ("normal" === i.type) {
                            if (o = a.done ? h : g,
                                i.arg === k)
                                continue;
                            return {
                                value: i.arg,
                                done: a.done
                            }
                        }
                        "throw" === i.type && (o = h,
                            a.method = "throw",
                            a.arg = i.arg)
                    }
                }
            }
            function L(t, n) {
                var a = n.method
                    , o = t.iterator[a];
                if (o === e)
                    return n.delegate = null,
                        "throw" === a && t.iterator.return && (n.method = "return",
                            n.arg = e,
                            L(t, n),
                            "throw" === n.method) || "return" !== a && (n.method = "throw",
                                n.arg = new TypeError("The iterator does not provide a '" + a + "' method")),
                        k;
                var r = c(o, t.iterator, n.arg);
                if ("throw" === r.type)
                    return n.method = "throw",
                        n.arg = r.arg,
                        n.delegate = null,
                        k;
                var s = r.arg;
                return s ? s.done ? (n[t.resultName] = s.value,
                    n.next = t.nextLoc,
                    "return" !== n.method && (n.method = "next",
                        n.arg = e),
                    n.delegate = null,
                    k) : s : (n.method = "throw",
                        n.arg = new TypeError("iterator result is not an object"),
                        n.delegate = null,
                        k)
            }
            function _(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                    2 in e && (t.finallyLoc = e[2],
                        t.afterLoc = e[3]),
                    this.tryEntries.push(t)
            }
            function O(e) {
                var t = e.completion || {};
                t.type = "normal",
                    delete t.arg,
                    e.completion = t
            }
            function P(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                    e.forEach(_, this),
                    this.reset(!0)
            }
            function N(t) {
                if (t || "" === t) {
                    var n = t[s];
                    if (n)
                        return n.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var o = -1
                            , r = function n() {
                                for (; ++o < t.length;)
                                    if (a.call(t, o))
                                        return n.value = t[o],
                                            n.done = !1,
                                            n;
                                return n.value = e,
                                    n.done = !0,
                                    n
                            };
                        return r.next = r
                    }
                }
                throw new TypeError(R(t) + " is not iterable")
            }
            return b.prototype = x,
                o(S, "constructor", {
                    value: x,
                    configurable: !0
                }),
                o(x, "constructor", {
                    value: b,
                    configurable: !0
                }),
                b.displayName = i(x, p, "GeneratorFunction"),
                t.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
                }
                ,
                t.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x,
                        i(e, p, "GeneratorFunction")),
                        e.prototype = Object.create(S),
                        e
                }
                ,
                t.awrap = function (e) {
                    return {
                        __await: e
                    }
                }
                ,
                y(E.prototype),
                i(E.prototype, l, (function () {
                    return this
                }
                )),
                t.AsyncIterator = E,
                t.async = function (e, n, a, o, r) {
                    void 0 === r && (r = Promise);
                    var s = new E(m(e, n, a, o), r);
                    return t.isGeneratorFunction(n) ? s : s.next().then((function (e) {
                        return e.done ? e.value : s.next()
                    }
                    ))
                }
                ,
                y(S),
                i(S, p, "Generator"),
                i(S, s, (function () {
                    return this
                }
                )),
                i(S, "toString", (function () {
                    return "[object Generator]"
                }
                )),
                t.keys = function (e) {
                    var t = Object(e)
                        , n = [];
                    for (var a in t)
                        n.push(a);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var a = n.pop();
                                if (a in t)
                                    return e.value = a,
                                        e.done = !1,
                                        e
                            }
                            return e.done = !0,
                                e
                        }
                }
                ,
                t.values = N,
                P.prototype = {
                    constructor: P,
                    reset: function (t) {
                        if (this.prev = 0,
                            this.next = 0,
                            this.sent = this._sent = e,
                            this.done = !1,
                            this.delegate = null,
                            this.method = "next",
                            this.arg = e,
                            this.tryEntries.forEach(O),
                            !t)
                            for (var n in this)
                                "t" === n.charAt(0) && a.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type)
                            throw e.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done)
                            throw t;
                        var n = this;
                        function o(a, o) {
                            return l.type = "throw",
                                l.arg = t,
                                n.next = a,
                                o && (n.method = "next",
                                    n.arg = e),
                                !!o
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var s = this.tryEntries[r]
                                , l = s.completion;
                            if ("root" === s.tryLoc)
                                return o("end");
                            if (s.tryLoc <= this.prev) {
                                var p = a.call(s, "catchLoc")
                                    , i = a.call(s, "finallyLoc");
                                if (p && i) {
                                    if (this.prev < s.catchLoc)
                                        return o(s.catchLoc, !0);
                                    if (this.prev < s.finallyLoc)
                                        return o(s.finallyLoc)
                                } else if (p) {
                                    if (this.prev < s.catchLoc)
                                        return o(s.catchLoc, !0)
                                } else {
                                    if (!i)
                                        throw Error("try statement without catch or finally");
                                    if (this.prev < s.finallyLoc)
                                        return o(s.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && a.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var s = r ? r.completion : {};
                        return s.type = e,
                            s.arg = t,
                            r ? (this.method = "next",
                                this.next = r.finallyLoc,
                                k) : this.complete(s)
                    },
                    complete: function (e, t) {
                        if ("throw" === e.type)
                            throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                            this.method = "return",
                            this.next = "end") : "normal" === e.type && t && (this.next = t),
                            k
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e)
                                return this.complete(n.completion, n.afterLoc),
                                    O(n),
                                    k
                        }
                    },
                    catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var o = a.arg;
                                    O(n)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function (t, n, a) {
                        return this.delegate = {
                            iterator: N(t),
                            resultName: n,
                            nextLoc: a
                        },
                            "next" === this.method && (this.arg = e),
                            k
                    }
                },
                t
        }
        function M(e, t, n, a, o, r, s) {
            try {
                var l = e[r](s)
                    , p = l.value
            } catch (e) {
                return void n(e)
            }
            l.done ? t(p) : Promise.resolve(p).then(a, o)
        }
        function B(e) {
            return function () {
                var t = this
                    , n = arguments;
                return new Promise((function (a, o) {
                    var r = e.apply(t, n);
                    function s(e) {
                        M(r, a, o, s, l, "next", e)
                    }
                    function l(e) {
                        M(r, a, o, s, l, "throw", e)
                    }
                    s(void 0)
                }
                ))
            }
        }
        function H(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                    n.push.apply(n, a)
            }
            return n
        }
        function j(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? H(Object(n), !0).forEach((function (t) {
                    K(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function G(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, J(a.key), a)
            }
        }
        function W(e, t, n) {
            return t = Y(t),
                function (e, t) {
                    if (t && ("object" == R(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(e, q() ? Reflect.construct(t, n || [], Y(e).constructor) : t.apply(e, n))
        }
        function q() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (q = function () {
                return !!e
            }
            )()
        }
        function Y(e) {
            return Y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                Y(e)
        }
        function Z(e, t) {
            return Z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                Z(e, t)
        }
        function K(e, t, n) {
            return (t = J(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function J(e) {
            var t = function (e, t) {
                if ("object" != R(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, t || "default");
                    if ("object" != R(a))
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" == R(t) ? t : t + ""
        }
        var X = n(79142)
            , Q = !1
            , $ = window.RDL
            , ee = t.ChooseTemplatePage = function (e) {
                function t(e) {
                    var n;
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                        K(n = W(this, t, [e]), "conductEducationalPlaceHolder", (function () {
                            $.portalExperiments.educationalPlaceholderTest && $.getExperimentVariant($.portalExperiments.educationalPlaceholderTest) < 1 && !(0,
                                b.isCountryMexico)() && n.props.userActions.ConductSpaExperiment($.getUserUId(), $.portalExperiments.educationalPlaceholderTest, $.cultureCD),
                                $.getExperimentVariant($.portalExperiments.educationalPlaceholderTest) > 2 && !(0,
                                    b.isCountryMexico)() && ($.educationalPlaceholder = !0,
                                        document.documentElement.classList.add("f-educ-placeholder-template"))
                        }
                        )),
                        K(n, "conductOptimalSkinOrder", (function () {
                            var e = $.portalExperiments.optimalSkinOrder;
                            e && $.getExperimentVariant(e) < 1 && (0,
                                b.isCountryMexico)() && n.props.userActions.ConductSpaExperiment($.getUserUId(), e, $.cultureCD),
                                $.getExperimentVariant(e) > 2 && ($.optimalSkinOrder = !0)
                        }
                        )),
                        K(n, "conductChooseTemplateFiltersV2Test", (function () {
                            var e = $.portalExperiments.chooseTemplateFiltersV2Test;
                            e && (null != e && e.isFR ? !(0,
                                b.isCountryCA)() : null == e ? void 0 : e.isIT) && $.getExperimentVariant(e) < 1 && n.props.userActions.ConductSpaExperiment($.getUserUId(), e, $.cultureCD),
                                $.getExperimentVariant(e) > 2 && ($.chooseTemplateFiltersV2 = !0,
                                    $.skinSliceNumber = 4,
                                    e.isFR && ($.ctFiltersFR = !0),
                                    null != e && e.isIT && ($.chooseTmplatsFilter = !0,
                                        $.sideBarFilters = !0,
                                        window.document.documentElement.classList.add("f-filter-ct")),
                                    window.document.documentElement.classList.add("f-filter-templates-v2"))
                        }
                        )),
                        K(n, "conductBundleImprovementsTest", (function () {
                            var e = $.portalExperiments.mpitBundleImprovementsTest;
                            if (e && $.getExperimentVariant(e) < 1) {
                                var t = {
                                    ExprId: e.id,
                                    StageID: v.userStages.ChooseTemplate
                                };
                                (0,
                                    b.conductExperimentViaProfileJS)(t, e)
                            }
                            $.getExperimentVariant(e) > 2 && ($.chooseTemplateFiltersV2 = !0,
                                $.skinSliceNumber = 4,
                                $.chooseTmplatsFilter = !0,
                                $.bundleImprovements = !0,
                                $.sideBarFilters = !0,
                                window.document.documentElement.classList.add("f-filter-ct"),
                                window.document.documentElement.classList.add("f-filter-templates-v2"),
                                window.document.documentElement.classList.add("f-bundle-impr"),
                                $.miniColorDisplay = $.colorsList)
                        }
                        )),
                        K(n, "initCompareTemplateCT", (function () {
                            $.compareTemplateCT && ($.useRendererForCT = !0,
                                $.compareTemplates = !0,
                                v.CHOOSETEMPLATE_LOCALIZATION.add_to_compare = $.Localization.add_to_compare,
                                v.CHOOSETEMPLATE_LOCALIZATION.select_Label = $.Localization.select_Label,
                                v.CHOOSETEMPLATE_LOCALIZATION.remove_from_compare = $.Localization.remove_from_compare,
                                v.CHOOSETEMPLATE_LOCALIZATION.choose_and_compare = $.Localization.choose_and_compare,
                                v.CHOOSETEMPLATE_LOCALIZATION.choose_and_compare_disabledTip = $.Localization.choose_and_compare_disabledTip,
                                v.CHOOSETEMPLATE_LOCALIZATION.compare_lbl = $.Localization.compare_lbl,
                                v.CHOOSETEMPLATE_LOCALIZATION.caps_compare_lbl = $.Localization.caps_compare_lbl,
                                v.CHOOSETEMPLATE_LOCALIZATION.clear_all_txt = $.Localization.clear_all_txt,
                                v.CHOOSETEMPLATE_LOCALIZATION.up_to_3_templates = $.Localization.up_to_3_templates,
                                v.CHOOSETEMPLATE_LOCALIZATION.continue_Label = $.Localization.continue_Label,
                                v.CHOOSETEMPLATE_LOCALIZATION.choose_templates_lbl = $.Localization.choose_templates_lbl,
                                v.CHOOSETEMPLATE_LOCALIZATION.toggle_tool_tip = $.Localization.toggle_tool_tip,
                                $.Localization.change_template_later = $.Localization.compare_subheading,
                                $.getExperimentVariant($.portalExperiments.mprChooseTemplateShoppingV2) > 2 && (v.CHOOSETEMPLATE_LOCALIZATION.lbl_compare_templates = $.Localization.lbl_compare_templates),
                                document.documentElement.classList.add("f-compare-templates"))
                        }
                        )),
                        K(n, "updateHeadshotSkins", (function () {
                            var e = [];
                            return $.newSkinsLCA.forEach((function (e, t) {
                                $.skins.find((function (t) {
                                    return t.skinCD == e.skinCD
                                }
                                )) || (e.blobURL = $.configServiceBlobUrl + "SkinImages/" + e.skinCD.toLowerCase() + (e.skinCD.startsWith("SRZ") || e.skinCD.startsWith("TRZ") ? ".png" : ".svg"),
                                    e.imageURL = $.configServiceBlobUrl + "SkinImages/" + e.skinCD.toLowerCase() + (e.skinCD.startsWith("SRZ") || e.skinCD.startsWith("TRZ") ? ".png" : ".svg"),
                                    $.skins.splice(t, 0, e),
                                    "FCN4" != e.id && ($.photoSkins.find((function (t) {
                                        return t == e.skinCD
                                    }
                                    )) || $.photoSkins.splice(t, 0, e.id)))
                            }
                            )),
                                $.HeadshotSkins || $.photoSkins.forEach((function (t) {
                                    var n = $.skins.find((function (e) {
                                        return e.skinCD == t
                                    }
                                    ));
                                    n && e.push(n)
                                }
                                )),
                                $.HeadshotSkins || e
                        }
                        )),
                        K(n, "conductCTNewSkinsTest", (function () {
                            var e = $.portalExperiments.ctNewSkinsTest;
                            if (e && $.getExperimentVariant(e) < 1 && n.props.userActions.ConductSpaExperiment($.getUserUId(), e),
                                $.getExperimentVariant(e) > 2) {
                                var t, a, o;
                                $.ctNewSkinsTest = !0,
                                    $.alternativeToTabsOnChooseTemplate = !0,
                                    $.NewSkins = [],
                                    $.PopularSkins = " ",
                                    $.skinSliceNumber = 5,
                                    document.documentElement.classList.add("f-ct-select-recom-skin"),
                                    document.documentElement.classList.add("f-alternative-to-tabs"),
                                    (null === (t = $.portalExperiments.ctNewSkinsTest) || void 0 === t ? void 0 : t.isUK) && document.documentElement.classList.add("f-choose-template-v2");
                                ((null === (a = $.portalExperiments.ctNewSkinsTest) || void 0 === a ? void 0 : a.isFR) && !(0,
                                    b.isCountryCA)() || (null === (o = $.portalExperiments.ctNewSkinsTest) || void 0 === o ? void 0 : o.isUK) && $.isCountrySA_AE_IN) && document.documentElement.classList.add("f-ct-select-new-recom-skin")
                            }
                        }
                        )),
                        K(n, "slideInAnimation", (function () {
                            document.querySelectorAll("div.js-thumbnail-animation").forEach((function (e) {
                                (e.classList.contains("slide-in") || e.classList.contains("slide-ins")) && (e.classList.remove("slide-in"),
                                    e.classList.remove("slide-ins"),
                                    setTimeout((function () {
                                        e.classList.add("slide-ins")
                                    }
                                    ), 200))
                            }
                            ))
                        }
                        )),
                        K(n, "setTemplateFilters", (function (e, t) {
                            var o = $.getExperimentVariant($.portalExperiments.ztyPhotoToggleOption);
                            $.startPageLoader();
                            var r, s = j({}, n.state.selectedCTFilters);
                            r = e,
                                n.setState({
                                    resetSidebarFilter: !1
                                }),
                                r ? (o > 3 && t == v.ChooseTemplateFilter.PHOTO && n.setState({
                                    enablePhotoToggle: "1" == r
                                }),
                                    3 == o && t == v.ChooseTemplateFilter.PHOTO && n.slideInAnimation(),
                                    o > 3 && t == v.ChooseTemplateFilter.COLUMN && (s.photo = n.state.enablePhotoToggle ? "1" : "0"),
                                    s[t] = r) : (!n.state.enablePhotoToggle && o > 3 && t == v.ChooseTemplateFilter.PHOTO && n.setState({
                                        enablePhotoToggle: !0
                                    }),
                                        delete s[t],
                                        3 == o && t == v.ChooseTemplateFilter.PHOTO && setTimeout((function () {
                                            n.slideInAnimation()
                                        }
                                        ), 100)),
                                n.setState({
                                    selectedCTFilters: j({}, s),
                                    pageLoadComplete: !0
                                }, (function () {
                                    $.closePageLoader()
                                }
                                )),
                                a.CommonHelper.setStorageValue(v.CONSTS.TEMPLATE_SELECTED_FILTER, s, a.TypeCodes.storageType.sessionStorage)
                        }
                        )),
                        K(n, "resetTemplateFilters", (function (e) {
                            $.startPageLoader(),
                                e.preventDefault();
                            var t = $.getExperimentVariant($.portalExperiments.ztyPhotoToggleOption);
                            $.TrackEvents("builder usage", {
                                action: "clicked",
                                "click option": "clear filters",
                                "screen name": "choose template"
                            }, $.getUserUId(), a.CommonHelper.isLoggedInUser($.UserClaims), !1),
                                a.CommonHelper.deleteStorageValue(v.CONSTS.TEMPLATE_SELECTED_FILTER, a.TypeCodes.storageType.sessionStorage),
                                n.setState({
                                    selectedCTFilters: {},
                                    resetSidebarFilter: !0,
                                    enablePhotoToggle: 5 != t
                                }, (function () {
                                    $.closePageLoader()
                                }
                                ))
                        }
                        )),
                        K(n, "conductPlaceholderAndImprovementsTest", (function () {
                            var e = $.portalExperiments.placeholderAndImprovementsTest;
                            e && $.getExperimentVariant(e) < 1 && n.props.userActions.ConductSpaExperiment($.getUserUId(), e),
                                $.getExperimentVariant(e) > 2 && (document.documentElement.classList.add("f-bundle-imps"),
                                    $.isOptionalEmployer = !0,
                                    $.addDummyAdditionalSections = !0,
                                    $.isTemplateChangeOnAllProxies = !0,
                                    $.isTemplateChangeOnAllProxiesBR = !0,
                                    $.stopLogoClickForNonPremUsers = !0,
                                    $.showTTCJustifyOptions = !0,
                                    $.justifyOptionsTtcV2 = !0)
                        }
                        )),
                        K(n, "conductCTFilterNFavTest", (function () {
                            var e = $.portalExperiments.CTFilterNFavTest;
                            e && $.getExperimentVariant(e) < 1 && n.props.userActions.ConductSpaExperiment($.getUserUId(), e, $.cultureCD),
                                $.getExperimentVariant(e) > 2 && ($.chooseTemplateFiltersV2 = !0,
                                    $.skinSliceNumber = 4,
                                    document.documentElement.classList.add("f-filter-templates", "f-filter-fav-ct-card"),
                                    document.documentElement.classList.add("f-filter-templates-v2"),
                                    document.documentElement.classList.add("f-alternative-to-tabs"),
                                    $.alternativeToTabsOnChooseTemplate = !0,
                                    $.filterTemplates = !0,
                                    $.hideRecommWithFilters = !0,
                                    $.sideBarFilters = !0,
                                    $.showTemplateFilters = !0,
                                    (0,
                                        b.isCountryUK_IE)() ? ($.templateFiltersUKIE = !0,
                                            $.favoriteTemplate = !0) : $.mpintlCountryRowSelector || ($.favoriteTemplate = !0),
                                    $.favTemplates = !0,
                                    $.favTemplatesV2 = !0,
                                    document.documentElement.classList.add("f-favorite-temp"),
                                    $.favTemplatesV4 = !0,
                                    $.isTS = !0)
                        }
                        )),
                        K(n, "conductNewSkinsTest", (function () {
                            var e = $.portalExperiments.newSkinsTest;
                            !(0,
                                b.isCountryMexico)() && e && $.getExperimentVariant(e) < 1 && n.props.userActions.ConductSpaExperiment($.getUserUId(), e),
                                $.getExperimentVariant(e) > 2 && ($.newSkinsTest = !0,
                                    $.hideSkinName = !0)
                        }
                        )),
                        K(n, "conductShowSocialProof", (function () {
                            var e = $.portalExperiments.lcaShowSocialProofNudgeOnTemplate
                                , t = (0,
                                    b.checkDocCreationFlow)(v.DOCUMENTCREATIONFLOWS.TEMPLATEFLOW)
                                , a = (0,
                                    b.checkDocCreationFlow)(v.DOCUMENTCREATIONFLOWS.RDUSFLOW);
                            e && (0,
                                b.isGuestUser)() && !t && !a && $.getExperimentVariant(e) < 1 && n.props.userActions.ConductSpaExperiment($.getUserUId(), e)
                        }
                        )),
                        K(n, "conductRecomSkinsInitially", (function () {
                            var e = $.portalExperiments.showRecommendedTmpltsInitially;
                            if (e && $.getExperimentVariant(e) < 1) {
                                var t = {
                                    ExprId: e.id,
                                    StageID: v.userStages.ChooseTemplate,
                                    ExcludedCountry: null == e ? void 0 : e.excludedCountry
                                };
                                (0,
                                    b.conductExperimentViaProfileJS)(t, e)
                            }
                            $.getExperimentVariant(e) > 2 && ($.recomSkinsInitially = !0)
                        }
                        )),
                        K(n, "conductRemoteWorkPopup", (function () {
                            var e = $.portalExperiments.remoteWorkPopup;
                            if (e && $.getExperimentVariant(e) < 1) {
                                var t = {
                                    ExprId: e.id,
                                    StageID: v.userStages.ChooseTemplate
                                };
                                (0,
                                    b.conductExperimentViaProfileJS)(t, e)
                            }
                            $.getExperimentVariant(e) > 2 && ($.remoteWorkPopup = !0)
                        }
                        )),
                        K(n, "conductCompareTemplateOnFunnel", (function () {
                            var e = $.portalExperiments.compareTemplateOnFunnel;
                            if (e && $.getExperimentVariant(e) < 1) {
                                var t = {
                                    ExprId: e.id,
                                    StageID: v.userStages.ChooseTemplate,
                                    ExcludedCountry: null == e ? void 0 : e.excludedCountry
                                };
                                (0,
                                    b.conductExperimentViaProfileJS)(t, e)
                            }
                            var n = $.getExperimentVariant(e);
                            n > 2 && ($.comparatorSlider = !0,
                                $.comparatorWelcomePoupChanges = !0,
                                $.skinsRequiredForCompToggler = 3,
                                4 == n && ($.bypassTemplateConditionForModal = !0),
                                (0,
                                    b.prefetchFiles)($.Paths.ResourcePath + "images/bg-multiple-templates.svg"),
                                (0,
                                    b.prefetchFiles)($.Paths.ResourcePath + "images/bg-dual-templates.svg"),
                                (0,
                                    b.prefetchFiles)($.Paths.ResourcePath + "images/bg-multitemplates-border.png"),
                                (0,
                                    b.prefetchFiles)($.Paths.ResourcePath + "images/toolTip_bg.svg"))
                        }
                        )),
                        K(n, "templateFiltersOnCT", (function () {
                            var e = $.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_FILTERS_CT);
                            ($.isFeaturePresent(v.FeatureSet.TEMPLATE_FILTERS_CT) || e) && ($.sideBarFilters = !0,
                                $.useRendererForCT = !0,
                                v.CHOOSETEMPLATE_LOCALIZATION.recommended_lbl = $.Localization.recommended_lbl,
                                v.CHOOSETEMPLATE_LOCALIZATION.no_templets_found = $.Localization.no_templets_found,
                                v.CHOOSETEMPLATE_LOCALIZATION.reset_filters_lbl = $.Localization.reset_filters_lbl,
                                $.isFeaturePresent(v.FeatureSet.TEMPLATE_FILTERS_CT) ? (document.documentElement.classList.add("e-filter-templates"),
                                    document.documentElement.classList.add("e-filter-templates-v5")) : (document.documentElement.classList.add("f-filter-choose-templates"),
                                        document.documentElement.classList.add("f-tc-redesign"),
                                        document.documentElement.classList.add("f-tc-redesign-v4")),
                                $.Localization.ColorPickerList = [{
                                    key: $.Localization.lkl_ColorPickerList_keycolor_1,
                                    value: "#7d7d7d",
                                    subColor: [{
                                        key: $.Localization.lkl_ColorPickerList_subcolor_1_1,
                                        value: "#34383c"
                                    }, {
                                        key: $.Localization.lkl_ColorPickerList_subcolor_1_2,
                                        value: "#e4e2de"
                                    }, {
                                        key: $.Localization.lkl_ColorPickerList_subcolor_1_3,
                                        value: "#000000"
                                    }]
                                }, {
                                    key: $.Localization.lkl_ColorPickerList_keycolor_2,
                                    value: "#102a73",
                                    subColor: [{
                                        key: $.Localization.lkl_ColorPickerList_subcolor_2_2,
                                        value: "#394d6b"
                                    }, {
                                        key: $.Localization.lkl_ColorPickerList_subcolor_2_1,
                                        value: "#a3b8de"
                                    }, {
                                        key: $.Localization.lkl_ColorPickerList_subcolor_2_3,
                                        value: "#26a7ff"
                                    }]
                                }, {
                                    key: $.Localization.lkl_ColorPickerList_keycolor_9,
                                    value: "#7d47b2",
                                    subColor: [{
                                        key: $.Localization.lkl_ColorPickerList_keycolor_9_1,
                                        value: "#9987ff"
                                    }, {
                                        key: $.Localization.lkl_ColorPickerList_keycolor_9_2,
                                        value: "#f3c2f8"
                                    }, {
                                        key: $.Localization.lkl_ColorPickerList_keycolor_9_3,
                                        value: "#e360ca"
                                    }]
                                }, {
                                    key: $.Localization.lkl_ColorPickerList_keycolor_3,
                                    value: "#2b98de",
                                    subColor: [{
                                        key: $.Localization.lkl_ColorPickerList_subcolor_3_1,
                                        value: "#094d73"
                                    }, {
                                        key: $.Localization.lkl_ColorPickerList_subcolor_3_2,
                                        value: "#8ac3f5"
                                    }, {
                                        key: $.Localization.lkl_ColorPickerList_subcolor_3_3,
                                        value: "#26cee4"
                                    }]
                                }, {
                                    key: $.Localization.lkl_ColorPickerList_keycolor_4,
                                    value: "#00bca3",
                                    subColor: [{
                                        key: $.Localization.lkl_ColorPickerList_subcolor_4_1,
                                        value: "#016b5d"
                                    }, {
                                        key: $.Localization.lkl_ColorPickerList_subcolor_4_2,
                                        value: "#b5e8e2"
                                    }, {
                                        key: $.Localization.lkl_ColorPickerList_subcolor_4_3,
                                        value: "#2cd87a"
                                    }]
                                }, {
                                    key: $.Localization.lkl_ColorPickerList_keycolor_5,
                                    value: "#075700",
                                    subColor: [{
                                        key: $.Localization.lkl_ColorPickerList_subcolor_5_1,
                                        value: "#b7d1ad"
                                    }, {
                                        key: $.Localization.lkl_ColorPickerList_subcolor_5_2,
                                        value: "#789c30"
                                    }, {
                                        key: $.Localization.lkl_ColorPickerList_subcolor_5_3,
                                        value: "#aaed5c"
                                    }]
                                }, {
                                    key: $.Localization.lkl_ColorPickerList_keycolor_7,
                                    value: "#9b3016",
                                    subColor: [{
                                        key: $.Localization.lkl_ColorPickerList_subcolor_7_1,
                                        value: "#e37929"
                                    }, {
                                        key: $.Localization.lkl_ColorPickerList_subcolor_7_2,
                                        value: "#c46531"
                                    }, {
                                        key: $.Localization.lkl_ColorPickerList_subcolor_7_3,
                                        value: "#ff640d"
                                    }]
                                }, {
                                    key: $.Localization.lkl_ColorPickerList_keycolor_8,
                                    value: "#f98c79",
                                    subColor: [{
                                        key: $.Localization.lkl_ColorPickerList_subcolor_8_1,
                                        value: "#8c3c4b"
                                    }, {
                                        key: $.Localization.lkl_ColorPickerList_subcolor_8_2,
                                        value: "#f7bfb5"
                                    }, {
                                        key: $.Localization.lkl_ColorPickerList_subcolor_8_3,
                                        value: "#f3323e"
                                    }]
                                }, {
                                    key: $.Localization.lkl_ColorPickerList_keycolor_6,
                                    value: "#facd05",
                                    subColor: [{
                                        key: $.Localization.lkl_ColorPickerList_subcolor_6_1,
                                        value: "#cd8b00"
                                    }, {
                                        key: $.Localization.lkl_ColorPickerList_subcolor_6_2,
                                        value: "#c4b08f"
                                    }, {
                                        key: $.Localization.lkl_ColorPickerList_subcolor_6_3,
                                        value: "#fff126"
                                    }]
                                }],
                                !(0,
                                    b.isCountryUS)() || e || $.isRBL || $.isRTL || !$.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_ON_MPR) || (0,
                                        b.addNewCTFilterskinsForUS)(),
                                a.CommonHelper.deleteStorageValue(v.CONSTS.TEMPLATE_SELECTED_FILTER, a.TypeCodes.storageType.sessionStorage),
                                n.conductRealPhotoHeadShotExperimentZety())
                        }
                        )),
                        K(n, "conductAutoCoverLetterExperiment", (function () {
                            n.mpfrAutoCoverLetterTest && (0,
                                b.isGuestUser)() && $.getExperimentVariant(n.mpfrAutoCoverLetterTest) < 1 && n.props.userActions.ConductSpaExperiment($.getUserUId(), n.mpfrAutoCoverLetterTest)
                        }
                        )),
                        K(n, "conductDesktopDropBoxAndGDriveExperiment", (function () {
                            n.mpfrDesktopUploadTest && (0,
                                b.isGuestUser)() && $.getExperimentVariant(n.mpfrDesktopUploadTest) < 1 && n.props.userActions.ConductSpaExperiment($.getUserUId(), n.mpfrDesktopUploadTest)
                        }
                        )),
                        K(n, "conductNameSurnameTest", (function () {
                            var e = $.portalExperiments.chooseTemplateNameAndSurname;
                            e && $.getExperimentVariant(e) < 1 && n.props.userActions.ConductSpaExperiment($.getUserUId(), e),
                                $.getExperimentVariant(e) > 2 && ($.chooseTemplateNameAndSurname = !0)
                        }
                        )),
                        K(n, "modifySubHeader", (function () {
                            if ($.onBoardingFlowIT || $.isExperienceLevelOnCt || $.onBoardingPopupV4) {
                                var e = (0,
                                    b.getExperienceLevel)(!1);
                                ($.onBoardingFlowIT || $.isExperienceLevelOnCt || $.onBoardingPopupV4) && ([v.experienceLevel.ZeroYear, v.experienceLevel.zeroToThreeYears, v.experienceLevel.oneToThreeYears].includes(e) ? (($.isExperienceLevelOnCt || $.onBoardingPopupV4) && ($.Localization.resumeLookLike_Text_html = $.Localization.chooseTemplate_no_student_header),
                                    $.Localization.scrolToView_Text = $.uploadFromLPFlow ? $.Localization.chooseTemplateSubheading_low_expr : $.isExperienceLevelOnCt || $.onBoardingPopupV4 ? $.Localization.chooseTemplate_no_student_subheader : "Questi sono i modelli approvati da recruiter per chi ha poca esperienza lavorativa.") : v.experienceLevel.student == e ? (($.isExperienceLevelOnCt || $.onBoardingPopupV4) && ($.Localization.resumeLookLike_Text_html = $.Localization.chooseTemplate_student_header),
                                        $.Localization.scrolToView_Text = $.uploadFromLPFlow ? $.Localization.chooseTemplateSubheading_student : $.studentOnboardingFlowChanges || $.isExperienceLevelOnCt || $.onBoardingPopupV4 ? $.Localization.chooseTemplate_student_subheader : "Questi sono i modelli approvati da recruiter per studenti.") : ($.Localization.resumeLookLike_Text_html = $.Localization.resumeLookLike_Text,
                                            $.Localization.scrolToView_Text = $.uploadFromLPFlow ? $.Localization.chooseTemplateSubheading : "Guarda tutti i modelli e scegli lo stile che preferisci <br/>Se non sei convinto della tua scelta, nei prossimi step potrai cambiare il modello."))
                            }
                        }
                        )),
                        K(n, "modifyExpLevelCTAOnCT", (function () {
                            if ($.isExperienceLevelOnCt || $.onBoardingPopupV4) {
                                var e = (0,
                                    b.getExperienceLevel)(!1);
                                [v.experienceLevel.ZeroYear, v.experienceLevel.oneToThreeYears, v.experienceLevel.fourToNineYears, v.experienceLevel.tenPlusYears, v.experienceLevel.student].includes(e) ? ($.Localization.experienceLevelCTAOnCTModify = $.Localization.experienceLevelCTAOnCT,
                                    $.Localization.experienceLevelCTALinkOnCTModify = $.Localization.experienceLevelCTALinkOnCT) : ($.Localization.experienceLevelCTAOnCTModify = $.Localization.experienceLevelCTASkipOnCT,
                                        $.Localization.experienceLevelCTALinkOnCTModify = $.Localization.experienceLevelCTALinkSkipOnCT)
                            }
                        }
                        )),
                        K(n, "trackAnimatedCTAClickOnCT", (function () {
                            if ($.isExperienceLevelOnCt || $.onBoardingPopupV4) {
                                var e = (0,
                                    b.getExperienceLevel)(!1);
                                [v.experienceLevel.ZeroYear, v.experienceLevel.oneToThreeYears, v.experienceLevel.fourToNineYears, v.experienceLevel.tenPlusYears, v.experienceLevel.student].includes(e) ? (0,
                                    C.trackBuilderUsagewithClickedOption)("clicked", "change the answers", "choose template") : (0,
                                        C.trackBuilderUsagewithClickedOption)("clicked", "recommended templates", "choose template")
                            }
                        }
                        )),
                        K(n, "conductChangeTemplate", (function () {
                            var e = $.portalExperiments.changeTemplateFeature;
                            (0,
                                b.isGuestUser)() && e && (null != e && e.isBR || null != e && e.isFR) && $.getExperimentVariant(e) < 1 && n.props.userActions.ConductSpaExperiment($.getUserUId(), e),
                                $.getExperimentVariant(e) > 2 && (null != e && e.isBR || null != e && e.isFR) && ($.isTS = !0,
                                    $.colorPickerUnderOpen = !0,
                                    null != e && e.isFR && ($.skipChooseeTemplateINTL = !0))
                        }
                        )),
                        K(n, "conductNewColorPickerPalette", (function () {
                            $.isNewColorPickerPalette && document.documentElement.classList.add("f-new-color-palette")
                        }
                        )),
                        K(n, "conductNewSkinsFilterTest", (function () {
                            var e = $.portalExperiments.newSkinsFilterTest;
                            e && $.getExperimentVariant(e) < 1 && n.props.userActions.ConductSpaExperiment($.getUserUId(), e, $.cultureCD);
                            var t = $.getExperimentVariant(e);
                            t > 2 && ($.showTemplateFilters = !0,
                                $.sideBarFilters = !0,
                                $.templateOrderFilter = !0,
                                (0,
                                    b.isCountryUK)() || !$.isCountrySA_AE_IN ? $.PopularSkins = 3 == t ? null == e ? void 0 : e.UKCVRPopular : null == e ? void 0 : e.UKCTRPopular : $.PopularSkins = 3 == t ? null == e ? void 0 : e.CVRPopular : null == e ? void 0 : e.CTRPopular,
                                $.NewSkins = null == e ? void 0 : e.newSkins)
                        }
                        )),
                        K(n, "conductChooseTemplateFilterTest", (function () {
                            var e = $.portalExperiments.chooseTemplateFilterTest;
                            e && $.getExperimentVariant(e) < 1 && n.props.userActions.ConductSpaExperiment($.getUserUId(), e, $.cultureCD),
                                $.getExperimentVariant(e) > 2 && ($.showTemplateFilters = !0,
                                    $.sideBarFilters = !0,
                                    $.skinsFilterCriteria = null == e ? void 0 : e.skinsFilterCriteria)
                        }
                        )),
                        K(n, "conductChooseTemplateUpdates", (function () {
                            var e = $.portalExperiments.mprChooseTemplateUpdates;
                            e && (0,
                                b.isGuestUser)() && !window.isExcludedTraffic() && $.getExperimentVariant(e) < 1 && n.props.userActions.ConductSpaExperiment($.getUserUId(), e, $.cultureCD);
                            var t = $.getExperimentVariant(e);
                            t > 2 && (document.documentElement.classList.add("e-ct-updates"),
                                document.documentElement.classList.add("e-ct-updates-v" + t))
                        }
                        )),
                        K(n, "conductCTSortingAlgorithm", (function () {
                            var e = $.portalExperiments.mprCTSortingAlgorithm;
                            e && (0,
                                b.isGuestUser)() && !window.isExcludedTraffic() && $.getExperimentVariant(e) < 1 && (n.props.userActions.ConductSpaExperiment($.getUserUId(), e, $.cultureCD),
                                    $.originalRDLSkins = JSON.parse(JSON.stringify($.skins))),
                                JSON.parse(sessionStorage.getItem("randomizationAlgoData")) || ($.originalRDLSkins = JSON.parse(JSON.stringify($.skins))),
                                $.getExperimentVariant(e) > 2 && ((0,
                                    b.doModificationsForCTSortingAlgorithm)(),
                                    $.localizationResumeRenderer.skillDef = $.Localization.skillDef_TemplateSorting,
                                    $.localizationResumeRenderer.skillDef2 = $.Localization.skillDef2_TemplateSorting,
                                    $.localizationResumeRenderer.skillDef3 = $.Localization.skillDef3_TemplateSorting)
                        }
                        )),
                        K(n, "conductChooseTemplatePhotoToggle", (function () {
                            var e = $.portalExperiments.chooseTemplatePhotoToggle;
                            if (e && $.getExperimentVariant(e) < 1) {
                                var t = {
                                    ExprId: e.id,
                                    StageID: v.userStages.ChooseTemplate
                                };
                                (0,
                                    b.conductExperimentViaProfileJS)(t, e)
                            }
                            $.getExperimentVariant(e) > 2 && ($.chooseTemplatePhotoToggle = !0)
                        }
                        )),
                        K(n, "conductCtTriStatePhotoToggle", (function () {
                            var e = $.portalExperiments.ctTriStatePhotoToggle;
                            if (e && $.getExperimentVariant(e) < 1) {
                                var t = {
                                    ExprId: e.id,
                                    StageID: v.userStages.ChooseTemplate
                                };
                                (0,
                                    b.conductExperimentViaProfileJS)(t, e)
                            }
                            var n = $.getExperimentVariant(e);
                            n > 2 && ($.ctTriStatePhotoToggle = !0,
                                4 == n && ($.ctTriStateOnlyPhotoSkin = !0),
                                5 == n && ($.ctTriStateNoPhotoSkin = !0))
                        }
                        )),
                        K(n, "conductFavoriteTemplatesV2", (function () {
                            var e = $.portalExperiments.favoriteTemplatesTestV2;
                            if (e && $.getExperimentVariant(e) < 1) {
                                var t = {
                                    ExprId: e.id,
                                    StageID: v.userStages.ChooseTemplate
                                };
                                (0,
                                    b.conductExperimentViaProfileJS)(t, e)
                            }
                            $.getExperimentVariant(e) > 2 && ($.favTemplates = !0,
                                $.favTemplatesV2 = !0,
                                $.addTopFiveSkinToRecom = !0,
                                $.hidePreviewBtn = !0,
                                $.alternativeToTabsOnChooseTemplate = !0,
                                document.documentElement.classList.add("f-favorite-temp", "f-favorite-templates-v2", "f-alternative-to-tabs"))
                        }
                        )),
                        K(n, "conductPreviewOnChooseTemplate", (function () {
                            var e = $.portalExperiments.mprPreviewOnChooseTemplate;
                            if (e && $.getExperimentVariant(e) < 1 && !window.isExcludedTraffic()) {
                                var t = {
                                    ExprId: e.id,
                                    StageID: v.userStages.ChooseTemplate
                                };
                                (0,
                                    b.conductExperimentViaProfileJS)(t, e)
                            }
                            var n = $.getExperimentVariant(e);
                            n > 2 && (document.documentElement.classList.add("e-choose-template-preview"),
                                document.documentElement.classList.add("e-choose-template-preview-v" + n))
                        }
                        )),
                        K(n, "executeIconFeature", (function () {
                            $.isFeaturePresent(v.FeatureSet.TEMPLATES_WITH_ICONS_MONOGRAMS) && (document.documentElement.classList.add("f-monogram", "f-temp-icons"),
                                $.iconSkins = ["CNT1", "MLI5", "MLI4", "MTP2"],
                                $.monogramSkins = ["MLT6", "TML4", "MNG4", "MLT8"],
                                $.skinsFilterCriteria.forEach((function (e) {
                                    $.iconSkins.includes(e.skinCD) && (e.graphics = $.Localization.iconCustomize_FilterGraphicsValue_Icon),
                                        $.monogramSkins.includes(e.skinCD) && (e.graphics = $.Localization.iconCustomize_FilterGraphicsValue_Monogram)
                                }
                                )))
                        }
                        )),
                        K(n, "conductRealPhotoOnHeadshotTemplates", (function () {
                            var e = $.portalExperiments.mprRealPhotosOnHeadshottemplates;
                            e && (0,
                                b.isGuestUser)() && !window.isExcludedTraffic() && $.getExperimentVariant(e) < 1 && n.props.userActions.ConductSpaExperiment($.getUserUId(), e, $.cultureCD)
                        }
                        )),
                        K(n, "conductPhotoToggleOption", (function () {
                            var e = $.portalExperiments.ztyPhotoToggleOption;
                            e && $.getExperimentVariant(e) < 1 && (0,
                                b.conductExperimentViaProfileJS)({
                                    ExprId: e.id,
                                    StageID: v.userStages.ChooseTemplate
                                }, e),
                                $.getExperimentVariant(e) > 2 && (document.documentElement.classList.add("e-photo-toggle-option"),
                                    document.documentElement.classList.add("e-photo-toggle-option-v".concat($.getExperimentVariant(e))))
                        }
                        )),
                        K(n, "conductSkinEngineTest", (function () {
                            var e = $.portalExperiments.ztySkinEngineTest;
                            e && $.getExperimentVariant(e) < 1 && (0,
                                b.conductExperimentViaProfileJS)({
                                    ExprId: e.id,
                                    StageID: v.userStages.ChooseTemplate
                                }, e),
                                $.getExperimentVariant(e) > 2 && ($.useSkinEngineCT = !0,
                                    $.skins = (0,
                                        b.updateSkinsUsingSkinEngine)($.importedSkins))
                        }
                        )),
                        K(n, "conductRealPhotoHeadShotExperimentZety", (function () {
                            var e = $.portalExperiments.realPhotosChooseTemplate;
                            e && $.getExperimentVariant(e) < 1 && (0,
                                b.conductExperimentViaProfileJS)({
                                    ExprId: e.id,
                                    StageID: v.userStages.ChooseTemplate
                                }, e)
                        }
                        )),
                        K(n, "conductLabelOnChosetemplate", (function () {
                            var e = $.portalExperiments.labelOnCT;
                            e && $.getExperimentVariant(e) < 1 && n.props.userActions.ConductSpaExperiment($.getUserUId(), e),
                                $.getExperimentVariant(e) > 2 && ($.labelOnChooseTemplate = !0,
                                    $.experienceWiseSkinLabel = null == e ? void 0 : e.experienceWiseSkinLabel)
                        }
                        )),
                        K(n, "conductCTOptimization", (function () {
                            $.chooseTemplateOptimization && (document.documentElement.classList.add("f-ct-optimization"),
                                document.documentElement.classList.add("f-ct-optimization-v3"))
                        }
                        )),
                        K(n, "conductChooseTemplateShopping", (function () {
                            var e = $.portalExperiments.mprTemplateShopping;
                            if (e && $.getExperimentVariant(e) < 1 && !window.isExcludedTraffic()) {
                                var t = {
                                    ExprId: e.id,
                                    StageID: v.userStages.ChooseTemplate
                                };
                                (0,
                                    b.conductExperimentViaProfileJS)(t, e)
                            }
                            if ($.getExperimentVariant($.portalExperiments.mprTemplateShopping) > 2) {
                                var a = $.getExperimentVariant($.portalExperiments.mprTemplateShopping);
                                n.htmlClassList.add("e-ct-shopping"),
                                    n.htmlClassList.add("e-ct-shopping-v".concat(a)),
                                    document.body.classList.add("template-shopping-page"),
                                    (0,
                                        b.updateSkinDataForTemplateShopping)()
                            }
                        }
                        )),
                        K(n, "conductMPRAdditionalTemplateFiltersOnCT", (function () {
                            var e = $.portalExperiments.mprAdditionalTemplateFiltersOnCT;
                            if (e && $.getExperimentVariant(e) < 1) {
                                var t = {
                                    ExprId: e.id,
                                    StageID: v.userStages.ChooseTemplate
                                };
                                (0,
                                    b.conductExperimentViaProfileJS)(t, e)
                            }
                        }
                        )),
                        K(n, "conductChooseTemplateShoppingV2", (function () {
                            var e = $.portalExperiments.mprChooseTemplateShoppingV2;
                            if (e && $.getExperimentVariant(e) < 1) {
                                var t = {
                                    ExprId: e.id,
                                    StageID: v.userStages.ChooseTemplate
                                };
                                (0,
                                    b.conductExperimentViaProfileJS)(t, e)
                            }
                            var a = $.getExperimentVariant(e);
                            a > 2 && (n.htmlClassList.add("e-ct-shopping"),
                                n.htmlClassList.add("e-ct-v2-shopping"),
                                n.htmlClassList.add("e-ct-v2-shopping-v".concat(a)),
                                document.body.classList.add("template-shopping-page"),
                                6 == a && ($.showChooseLaterPopup = !1))
                        }
                        )),
                        K(n, "conductFlexibleLayout", (function () {
                            var e = $.portalExperiments.flexibleLayoutTest;
                            if (e && $.getExperimentVariant(e) < 1) {
                                var t = {
                                    ExprId: e.id,
                                    StageID: v.userStages.ChooseTemplate
                                };
                                (0,
                                    b.conductExperimentViaProfileJS)(t, e)
                            }
                            $.getExperimentVariant(e) > 2 && ($.skipChooseeTemplateINTL = !0,
                                $.flexibleCTLayout = !0,
                                $.filterSticky = !0,
                                document.body.classList.add("e-ct-filter-sticky"))
                        }
                        )),
                        K(n, "conductConversationalUI", (function () {
                            var e = $.portalExperiments.mpitConversationalUIDesktopTest;
                            if (e && $.getExperimentVariant(e) < 1) {
                                var t = {
                                    ExprId: e.id,
                                    StageID: v.userStages.ChooseTemplate
                                };
                                (0,
                                    b.conductExperimentViaProfileJS)(t, e)
                            }
                            $.getExperimentVariant(e) > 2 && ($.showConversationalUI = !0,
                                $.lottieOptions = e.lottiePlayerOptions)
                        }
                        )),
                        K(n, "cleanFilterData", (function () {
                            var e = JSON.parse(JSON.stringify($.templatesOrderForFilter));
                            Object.keys($.templatesOrderForFilter).forEach((function (t) {
                                e[t].forEach((function (e) {
                                    -1 == $.skins.findIndex((function (t) {
                                        return t.id == e
                                    }
                                    )) && $.templatesOrderForFilter[t].splice($.templatesOrderForFilter[t].indexOf(e), 1)
                                }
                                ))
                            }
                            ))
                        }
                        )),
                        K(n, "saveTemplate", (function (e, t) {
                            var o, r, s = (null === (o = n.state.selectedFilter) || void 0 === o ? void 0 : o.toLowerCase()) || "", l = JSON.parse(localStorage.getItem("savedTemplates")) || [], p = l.findIndex((function (e) {
                                return e == t
                            }
                            ));
                            p > -1 ? (l.splice(p, 1),
                                (0,
                                    C.trackSaveTemplate)(e, t.toLowerCase(), s, !1, "choose template")) : (l.unshift(t),
                                        (0,
                                            C.trackSaveTemplate)(e, t.toLowerCase(), s, !0, "choose template")),
                                localStorage.setItem("savedTemplates", JSON.stringify(l));
                            var i = (null === (r = n.state.skins) || void 0 === r ? void 0 : r.length) || 0
                                , m = (null == l ? void 0 : l.length) || 0
                                , c = {
                                    "selected template": m,
                                    "unselected  template": i - m
                                };
                            $.TrackEvents("identify", c, $.getUserUId(), a.CommonHelper.isLoggedInUser($.UserClaims), !1),
                                n.setState({
                                    skins: n.state.skins
                                })
                        }
                        )),
                        K(n, "set0YOEFlow", (function () {
                            var e, t = null != (0,
                                b.getRecommendedAction)(null === (e = $.recommendedActions) || void 0 === e ? void 0 : e.ZeroYearsExperienceFlow, v.SCREEN_NAME.ChooseTemplate);
                            $.getExperimentVariant($.portalExperiments.mprOnboardingRedesignV2) > 2 && ((0,
                                b.GetClientSettingValue)(n.props.common.clientSettings, v.ClientSettings.ExperienceRange) == v.experienceLevel.ZeroYear && (t = !0));
                            t || n.props.experienceLevelValue == v.experienceLevel.student && ($.isRBL || $.isRTL) ? ($.zeroYOEFlowFeature = !0,
                                document.documentElement.classList.add("c-0yoe"),
                                $.isMPR || $.isMPCL || ($.Localization = j(j({}, $.Localization), v.LocalFor0YOEFlow),
                                    $.UseRWZParity && ($.Localization.professionalExperienceNavbar_Text = v.LocalFor0YOEFlow.professionalExperienceHeading)),
                                $.isEnableRWZParity && ($.Localization.mpr0YOEFlow_add_your_own_Text = $.Localization.createSections_Text,
                                    $.Localization.mpr0YOEFlow_skip_for_now_Text = $.Localization.lbl_skip_for_now,
                                    $.Localization.endDateLessValidation_Text = "In order to proceed, your end date can't be before the start date."),
                                v.CONTAINER_HEADER["PROF-EXPR"].tipSectionHeaderTitle = $.Localization.mpr0YOEFlow_profExp_tips_page2_heading,
                                (0,
                                    b.modifyStepsFor0YOE)()) : ($.isMPR || $.isMPCL) && ((0,
                                        f.removeStepByName)(v.SCREEN.PROFESSIONAL_EXPERIENCE),
                                        (0,
                                            f.removeStepByName)(v.SCREEN.PROF_EXPERIENCE_TIPS),
                                        $.zeroYOEFlowFeature = !1,
                                        (0,
                                            b.resetLocalizationonExprChange)("zeroYOEFlowFeature"))
                        }
                        )),
                        K(n, "setScalingFactorOnResize", (function () {
                            n.scaleSkinsSVGWidthHeight()
                        }
                        )),
                        K(n, "setScalingFactorLoop", (function (e, t) {
                            e.forEach((function (e) {
                                e = j(j({}, e), {}, {
                                    isPreviewModal: t
                                }),
                                    (0,
                                        b.setSkinScalingFactor)(e)
                            }
                            ))
                        }
                        )),
                        K(n, "setScalingFactor", (function (e, t, a) {
                            if ($.useRendererForCT && e[0].isPreviewModal)
                                n.setScalingFactorLoop(e);
                            else if ($.useRendererForCT || t)
                                n.setScalingFactorLoop(e, a);
                            else if (window.isNewEdge())
                                n.setScalingFactorLoop(e);
                            else if ($.isZTUK || $.isZFR || $.useDynamicScaling)
                                setTimeout(n.setScalingFactorLoop, 0, e);
                            else
                                var o = setInterval((function () {
                                    n.isSkinCssApplied() && (clearInterval(o),
                                        setTimeout(n.setScalingFactorLoop, 0, e))
                                }
                                ), 200)
                        }
                        )),
                        K(n, "isSkinCssApplied", (function () {
                            var e = document.querySelector(".document-ctnr")
                                , t = document.querySelector(".document-ctnr > div");
                            if (e && t)
                                return t.offsetWidth != e.offsetWidth
                        }
                        )),
                        K(n, "setHtmlSkins", B(U().mark((function e() {
                            var t, a, o, r;
                            return U().wrap((function (e) {
                                for (; ;)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return t = n.state.skins,
                                                e.next = 3,
                                                (0,
                                                    w.loadHtmlSkins)();
                                        case 3:
                                            a = e.sent,
                                                o = 0;
                                        case 5:
                                            if (!(o < t.length)) {
                                                e.next = 15;
                                                break
                                            }
                                            if (r = t[o],
                                                a && a[r.id] && (t[o].htmlSkin = a[r.id]),
                                                t[o].htmlSkin) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.next = 11,
                                                (0,
                                                    w.loadHtmlbySkinCD)(r.id);
                                        case 11:
                                            t[o].htmlSkin = e.sent;
                                        case 12:
                                            o++,
                                                e.next = 5;
                                            break;
                                        case 15:
                                            n.setState({
                                                skins: t
                                            }, (function () {
                                                $.templateFlowValue == v.SCREEN.CHOOSE_TEMPLATE && ($.closePageLoader(),
                                                    document.getElementsByClassName("page-wrapper")[0] && document.getElementsByClassName("page-wrapper")[0].classList.remove("hide"))
                                            }
                                            ));
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))),
                        K(n, "findCategoryOfSkin", (function (e) {
                            for (; e && e.parentElement;) {
                                if (e.parentElement.getAttribute("data-skin-category")) {
                                    var t = e.parentElement.getAttribute("data-skin-category");
                                    return t = t || v.TemplateFilter.All
                                }
                                e = e.parentElement
                            }
                        }
                        )),
                        K(n, "bindViewPortWatcher", (function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                                , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                                , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            n.skinTracked && Object.keys(n.skinTracked).length > 0 || (n.skinTracked = {});
                            var o = $.fireTemplateTaggingEvents ? "div.card div.document" : "div.card"
                                , r = document.querySelectorAll(o);
                            if ($.fireTemplateTaggingEvents && !$.isZTUK && (r = Array.from(r).slice(e, t)),
                                r) {
                                var s = 0
                                    , l = document.querySelector(".btn-group-footer");
                                l && (s = -l.clientHeight),
                                    r.forEach((function (e) {
                                        (0,
                                            b.inViewportWithCallback)(e, (function () {
                                                n.inViewportCallback(e, a)
                                            }
                                            ), {
                                                threshold: $.alternativeToTabsOnChooseTemplate || $.isROWCanadaBuilderTest ? .7 : .95,
                                                rootMargin: "0px 0px ".concat(s, "px 0px")
                                            })
                                    }
                                    ))
                            }
                        }
                        )),
                        K(n, "trackSkinViewedFromModal", (function (e) {
                            var t = !n.skinTracked[e]
                                , a = document.querySelector(".skn-" + (null == e ? void 0 : e.toLowerCase()));
                            if (t) {
                                n.skinTracked[e] = !0;
                                var o = n.findCategoryOfSkin(a)
                                    , r = (0,
                                        b.findDisplayPosition)(a)
                                    , s = {
                                        arrPhotoSkin: n.arrPhotoSkin,
                                        templateCategory: o,
                                        screenName: "choose template",
                                        displayPosition: r
                                    };
                                (0,
                                    C.trackSkinViewed)(e, null, s)
                            }
                        }
                        )),
                        K(n, "addToComparison", (function (e, t) {
                            var o, r, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "", p = arguments.length > 5 ? arguments[5] : void 0, i = arguments.length > 6 ? arguments[6] : void 0;
                            l || (e.stopPropagation(),
                                l = null === (r = e.currentTarget.attributes["data-skin-category"]) || void 0 === r ? void 0 : r.value);
                            $.favTemplatesV2 && window.scrollTo({
                                top: 150,
                                behavior: "smooth"
                            });
                            var m = $.skins.filter((function (e) {
                                if (e.id == t)
                                    return e.displayPosition = s,
                                        e
                            }
                            ))
                                , c = [].concat(D(n.state.favoriteSkinsArr), D(m))
                                , d = [].concat(D(n.state.favoriteSkinCD), [t])
                                , g = j(j({}, n.state.favoriteSkinThemes), i ? K({}, t, i) : {});
                            if ((null === (o = n.state.favoriteSkinsArr) || void 0 === o ? void 0 : o.length) < 3) {
                                n.setState({
                                    favoriteSkinsArr: c,
                                    favoriteSkinCD: d,
                                    favoriteSkinThemes: g
                                }, (function () {
                                    a.CommonHelper.setStorageValue(v.CONSTS.FAVORITE_SKINS, n.state.favoriteSkinsArr, a.TypeCodes.storageType.localStorage),
                                        a.CommonHelper.setStorageValue(v.CONSTS.FAVORITE_SKINS_SKINCD, n.state.favoriteSkinCD, a.TypeCodes.storageType.localStorage),
                                        a.CommonHelper.setStorageValue(v.CONSTS.FAVORITE_SKINS_THEMES, n.state.favoriteSkinThemes, a.TypeCodes.storageType.localStorage)
                                }
                                ));
                                var u = "";
                                e.target && e.target.attributes["data-skin-category"] && e.target.attributes["data-skin-category"].value && (u = e.target.attributes["data-skin-category"].value);
                                var h = $.getExperimentVariant($.portalExperiments.mprTemplateShopping)
                                    , k = $.getExperimentVariant($.portalExperiments.mprChooseTemplateShoppingV2);
                                (h > 2 || k > 2) && p ? (0,
                                    C.trackPopupUsageWithClickOption)("clicked", "add for comparison", "choose template", "pdp modal") : (0,
                                        T.trackFavoriteCTAs)("builder usage", t, "add for comparison", "clicked", u ? u.toLowerCase() : "all", "", "", "")
                            }
                        }
                        )),
                        K(n, "updateShowComparisonBladeInParent", (function (e) {
                            n.isComparisonBladeOn = e,
                                $.getExperimentVariant($.portalExperiments.mprChooseTemplateShoppingV2) > 2 && n.setState({
                                    isComparisonBladeOn: e
                                })
                        }
                        )),
                        K(n, "triggerPhotoToggleEvent", (function (e) {
                            var t = {
                                action: "clicked",
                                "click option": e ? "photo toggle on" : "photo toggle off",
                                "screen name": "choose template"
                            };
                            $.TrackEvents("builder usage", t, $.getUserUId(), a.CommonHelper.isLoggedInUser($.UserClaims), !1)
                        }
                        )),
                        K(n, "updateTemplatesOnPhotoToggle", (function () {
                            n.setState((function (e) {
                                var t = e.selectedCTFilters
                                    , n = (t.photo,
                                        function (e, t) {
                                            if (null == e)
                                                return {};
                                            var n, a, o = function (e, t) {
                                                if (null == e)
                                                    return {};
                                                var n = {};
                                                for (var a in e)
                                                    if ({}.hasOwnProperty.call(e, a)) {
                                                        if (t.includes(a))
                                                            continue;
                                                        n[a] = e[a]
                                                    }
                                                return n
                                            }(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                                var r = Object.getOwnPropertySymbols(e);
                                                for (a = 0; a < r.length; a++)
                                                    n = r[a],
                                                        t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                                            }
                                            return o
                                        }(t, N));
                                return {
                                    enablePhotoToggle: !e.enablePhotoToggle,
                                    updateFilterTemplates: !e.updateFilterTemplates,
                                    selectedCTFilters: n
                                }
                            }
                            ), (function () {
                                n.triggerPhotoToggleEvent(n.state.enablePhotoToggle)
                            }
                            ));
                            var e = j({}, n.state.selectedCTFilters)
                                , t = a.CommonHelper.getStorageValue(v.CONSTS.TEMPLATE_SELECTED_FILTER, a.TypeCodes.storageType.sessionStorage);
                            null != t && t.columns && (3 == $.getExperimentVariant($.portalExperiments.ztyPhotoToggleOption) ? n.state.enablePhotoToggle ? e.photo = "0" : delete e.photo : e.photo = n.state.enablePhotoToggle ? "0" : "1",
                                n.setState({
                                    selectedCTFilters: j({}, e)
                                }))
                        }
                        )),
                        K(n, "updateFiltersOnPhotoToggle", (function (e) {
                            var t = {
                                "with photo checked": !0,
                                "without photo checked": !1
                            }[e];
                            void 0 !== t && n.setState({
                                enablePhotoToggle: t
                            })
                        }
                        )),
                        K(n, "deleteFromCompare", (function (e, t, o) {
                            e.stopPropagation();
                            var r = n.state.favoriteSkinsArr.filter((function (e) {
                                return e.id != t
                            }
                            ))
                                , s = n.state.favoriteSkinCD.filter((function (e) {
                                    return e != t
                                }
                                ))
                                , l = JSON.parse(JSON.stringify(n.state.favoriteSkinThemes));
                            l[t] && delete l[t],
                                n.setState({
                                    favoriteSkinsArr: D(r),
                                    favoriteSkinCD: s,
                                    favoriteSkinThemes: l
                                }, (function () {
                                    ($.favSkinsWithoutMenu || $.favTemplatesV2) && (n.props.scaleSkinsSVGWidthHeight(0, 3),
                                        n.props.bindViewPortWatcher(0, 3, n.state.favoriteSkinsArr)),
                                        n.state.favoriteSkinCD.length,
                                        a.CommonHelper.setStorageValue(v.CONSTS.FAVORITE_SKINS, r, a.TypeCodes.storageType.localStorage),
                                        a.CommonHelper.setStorageValue(v.CONSTS.FAVORITE_SKINS_SKINCD, s, a.TypeCodes.storageType.localStorage),
                                        a.CommonHelper.setStorageValue(v.CONSTS.FAVORITE_SKINS_THEMES, l, a.TypeCodes.storageType.localStorage)
                                }
                                )),
                                (0,
                                    T.trackFavoriteCTAs)("builder usage", t, "remove from comparison" + (o ? " x" : ""), null, null, null, "", "")
                        }
                        )),
                        K(n, "resetComparedTemplate", (function (e) {
                            e.stopPropagation(),
                                n.setState({
                                    favoriteSkinsArr: [],
                                    favoriteSkinCD: []
                                }, (function () {
                                    ($.favSkinsWithoutMenu || $.favTemplatesV2) && (n.props.scaleSkinsSVGWidthHeight(0, 3),
                                        n.props.bindViewPortWatcher(0, 3, n.state.favoriteSkinsArr)),
                                        n.state.favoriteSkinCD.length,
                                        a.CommonHelper.setStorageValue(v.CONSTS.FAVORITE_SKINS, [], a.TypeCodes.storageType.localStorage),
                                        a.CommonHelper.setStorageValue(v.CONSTS.FAVORITE_SKINS_SKINCD, [], a.TypeCodes.storageType.localStorage),
                                        a.CommonHelper.setStorageValue(v.CONSTS.FAVORITE_SKINS_THEMES, {}, a.TypeCodes.storageType.localStorage)
                                }
                                ));
                            $.TrackEvents("builder usage", {
                                action: "clicked",
                                "click option": "clear all",
                                "screen name": "choose template"
                            }, $.getUserUId(), a.CommonHelper.isLoggedInUser($.UserClaims), !1)
                        }
                        )),
                        K(n, "skipTemplateTest", (function () {
                            var e = $.isUploadFlowChooseTemplate;
                            $.skipChooseTemplateImprovements && ($.updateSkinContent = !0,
                                n.htmlClassList.add("skip-choose-template-improvements"),
                                v.CHOOSETEMPLATE_LOCALIZATION.previewTemplate_Text = $.Localization.previewTemplate_Text,
                                v.CHOOSETEMPLATE_LOCALIZATION.selectTemplate_Text = $.Localization.selectTemplate_Text,
                                $.Localization.chooseTemp_Label = $.Localization.skip_ChooseTemp_Label,
                                $.Localization.previewTemp_lbl = $.Localization.previewTemplate_Text),
                                $.isUploadFlow && !e && n.htmlClassList.remove("upload-flow-ver4")
                        }
                        )),
                        K(n, "setUpdatedTheme", (function (e) {
                            n.selectedTheme = e
                        }
                        )),
                        K(n, "renderProtip", (function () {
                            var e = $.Localization.protip_for_select_resume;
                            return r.default.createElement(y.default, {
                                description: e
                            })
                        }
                        )),
                        K(n, "scaleSkinsSVGWidthHeight", (function (e, t) {
                            if ($.htmlSkinRendering || $.useRendererForCT || $.useDynamicScaling) {
                                if ($.getExperimentVariant($.portalExperiments.mprCTSortingAlgorithm) > 2 || $.isRBL || $.isRTL || $.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_ON_MPR)) {
                                    var a = JSON.parse(JSON.stringify(n.props.document))
                                        , o = ["MLX1", "MLX4", "MLA8"];
                                    ($.isRBL || $.isRTL) && (o = ["M007", "M013"]),
                                        o.forEach((function (e) {
                                            $.addPICTSectiononCT && (a = (0,
                                                x.addPhotoSection)(a)),
                                                a = (0,
                                                    b.manageDocStyles)(a, v.styleTypeCD.SDCL, n.selectedTheme && "reset" != n.selectedTheme ? n.selectedTheme : v.skinDefaultColors[e], $.getTemplateFromSkin),
                                                (0,
                                                    b.resolveRootClassUpdateScript)({
                                                        document: a,
                                                        skinCD: e
                                                    })
                                        }
                                        ))
                                }
                                n.setScalingFactor(e && e.length ? e : $.getExperimentVariant($.portalExperiments.mprCTSortingAlgorithm) > 2 ? $.skins : n.state.skins, t)
                            }
                        }
                        )),
                        K(n, "loadPreLoadFonts", (function () {
                            ["https://fonts.googleapis.com/css?family=PT+Sans+Caption:400,700", "https://fonts.googleapis.com/css?family=Oswald:300,400", "https://fonts.googleapis.com/css?family=Oswald:400", "https://fonts.googleapis.com/css?family=Saira:200,300,400,500,600,700", "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600;1,700", "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700", "https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@700;900", "https://fonts.googleapis.com/css2?family=Lato:wght@400;700", "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700", "https://fonts.googleapis.com/css?family=Fira+Sans:300,500,700", "https://fonts.googleapis.com/css?family=Blinker:400,600,700", "https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@700", "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700", "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700", "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;1,500;1,600;1,700", "https://fonts.googleapis.com/css2?family=Montserrat:wght@700", "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900", "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700", "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700", "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700"].forEach((function (e) {
                                var t = document.createElement("link");
                                t.as = "font",
                                    t.rel = "preload",
                                    t.crossOrigin = "anonymous",
                                    t.href = e,
                                    document.getElementsByTagName("head")[0].appendChild(t)
                            }
                            ))
                        }
                        )),
                        K(n, "getFilterValue", (function (e, t) {
                            return null != e && e[t] ? {
                                1: "yes",
                                0: "no",
                                all: "all"
                            }[e[t]] || e[t] : ""
                        }
                        )),
                        K(n, "createDocumentWithTemplate", (function (e) {
                            var t, o, r, s, l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], p = arguments.length > 2 ? arguments[2] : void 0, m = arguments.length > 3 ? arguments[3] : void 0, c = arguments.length > 4 ? arguments[4] : void 0;
                            $.isAddNewSkinLCA && n.setPrefForHeadshotToggle();
                            var d, g = JSON.parse((0,
                                b.getStorage)(v.CONSTS.FAVORITE_SKINS)), u = p ? p.name : e.currentTarget.attributes["data-displayName"].value.toLowerCase(), h = p ? m : e.currentTarget.attributes["data-color"].value, k = p ? p.skinCD : e.currentTarget.attributes["data-skin"].value.toUpperCase(), x = (0,
                                    b.getColorNameFromCode)(h), S = !!g && g.find((function (e) {
                                        return e.skinCD == k
                                    }
                                    )), y = $.getExperimentVariant($.portalExperiments.mprChooseTemplateShoppingV2);
                            if ((3 == $.getExperimentVariant($.portalExperiments.mprTemplateShopping) || y > 2) && null != c && c.length && localStorage.setItem(v.CONSTS.SKINS_THEME_ARRAY, JSON.stringify(c)),
                                $.newOnboardingFlowUK) {
                                var w = (0,
                                    b.ExprRange)().replace(" ", "_")
                                    , L = $.portalExperiments.onBoardingQuestionTest.templateArray[w].filter((function (e) {
                                        return e.name.toLowerCase() == u
                                    }
                                    ));
                                d = L.length > 0 ? L[0].skinCD.toLowerCase() : $.skins.find((function (e) {
                                    return e.name.toLowerCase() === u
                                }
                                )).skinCD.toLowerCase()
                            }
                            var _ = 3 == $.getExperimentVariant($.portalExperiments.mprCTSortingAlgorithm) ? n.allRandomisedSkins : $.skins;
                            "undefined" == typeof MetricsUtil || p || MetricsUtil.sendTemplateClickEvent($.newOnboardingFlowUK ? d : _.find((function (e) {
                                return e.name.toLowerCase() === u
                            }
                            )).skinCD.toLowerCase()),
                                n.props.commonActions.SetClientSetting(v.ClientSettings.Infographics, !1),
                                n.props.commonActions.SetClientSetting(v.ClientSettings.LanguageInfographics, !1);
                            var O, P = $.alternativeToTabsOnChooseTemplate || (0,
                                b.isChooseTemplateAlternativeTabs)() || $.ZTYBaselineAllAndRecommendedAlternativeTabs || $.templateOrderFilter ? p ? v.TemplateFilter.Favorite : null === (t = e.currentTarget.attributes["data-skin-category"]) || void 0 === t ? void 0 : t.value : (null === (o = n.state.selectedFilter) || void 0 === o ? void 0 : o.toLowerCase()) || "";
                            $.compareTemplates && e.currentTarget.attributes && e.currentTarget.attributes["data-skin-category"] && !p && (P = e.currentTarget.attributes["data-skin-category"].value),
                                (0,
                                    C.trackBuilderUsagewithClickedOption)("clicked", "choose template", "choose template page"),
                                $.startPageLoader(),
                                O = $.newOnboardingFlowUK ? d : p ? null == k ? void 0 : k.toLowerCase() : k ? k.toLowerCase() : _.find((function (e) {
                                    return e.name.toLowerCase() === u
                                }
                                )).skinCD.toLowerCase();
                            var N, F = {
                                "template name": u,
                                "screen name": v.SCREEN_NAME.HowItWorks,
                                "template id": O,
                                "template color": x,
                                "template with photo section": n.arrPhotoSkin.includes(k) ? "TRUE" : "FALSE",
                                "template style": "List Style"
                            };
                            $.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_FILTERS_CT) && (F["template with photo section"] = "true" == (null === (N = e.currentTarget.attributes["data-photo-skin"]) || void 0 === N ? void 0 : N.value) ? "TRUE" : "FALSE");
                            $.UseRWZParity && (F["atomic skin"] = (0,
                                E.isAtomicSkin)(O.toUpperCase()) ? "yes" : "no"),
                                !$.favTemplatesV2 && !$.compareTemplates || p || (F = j(j({}, F), {}, {
                                    "comparison ribbon selection": P == v.TemplateFilter.Favorite ? "yes" : "no",
                                    "added for comparison": S ? "yes" : "no"
                                })),
                                $.compareTemplates && p && (F = j(j({}, F), {}, {
                                    "comparison ribbon selection": "yes",
                                    "added for comparison": "yes"
                                }));
                            var A = {
                                selectedTemplate: document.querySelector(".selected-template"),
                                event: e,
                                trackData: F,
                                isSkip: l,
                                selectedColor: x,
                                templateCategory: P
                            };
                            if (P === v.TemplateFilter.Favorite && (A.displayPosition = (0,
                                b.findTemplateLastPostition)(null == k ? void 0 : k.toLowerCase())),
                                $.isLCA && (A.ResumeTargetCountry = n.state.selectedCountryCode),
                                ($.favTemplates || $.compareTemplates) && (0,
                                    b.continueWithFav)(k, p, !0),
                                $.showTemplateFilters || $.isFeaturePresent(v.FeatureSet.TEMPLATE_FILTERS_CT) || $.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_FILTERS_CT)) {
                                var z = a.CommonHelper.getStorageValue(v.CONSTS.TEMPLATE_SELECTED_FILTER, a.TypeCodes.storageType.sessionStorage)
                                    , R = n.getFilterValue(z, v.ChooseTemplateFilter.PHOTO)
                                    , I = n.getFilterValue(z, v.ChooseTemplateFilter.COLORED)
                                    , D = n.getFilterValue(z, v.ChooseTemplateFilter.DESIGN)
                                    , V = null != z && z.columns ? "all" != (null == z ? void 0 : z.columns) ? (null == z ? void 0 : z.columns) + " column" : "all" : "";
                                if (A = j(j({}, A), {}, {
                                    isPhoto: R,
                                    isColor: I,
                                    columns: V,
                                    designs: D
                                }),
                                    $.templateOrderFilter && null != z && z.category) {
                                    var U = null == z ? void 0 : z.category.split(",").join("&");
                                    A = j(j({}, A), {}, {
                                        category: U
                                    })
                                }
                            }
                            (0,
                                T.trackDocumentCreationwithTemplate)(A);
                            var M = p ? p.skinCD : e.currentTarget.attributes["data-skin"].value.toUpperCase()
                                , B = $.useSkinEngineCT ? "" : p ? p.htmlURL : e.currentTarget.attributes["data-htmlurl"].value
                                , H = $.useSkinEngineCT ? "" : p ? p.blobURL : e.currentTarget.attributes["data-svgurl"].value
                                , G = p ? m : null === (r = e.currentTarget.attributes["data-color"]) || void 0 === r ? void 0 : r.value
                                , W = e.currentTarget.getAttribute(a.TypeCodes.fieldCd.FirstName)
                                , q = e.currentTarget.getAttribute(a.TypeCodes.fieldCd.LastName)
                                , Y = e.currentTarget.getAttribute(a.TypeCodes.fieldCd.DocumentTitle);
                            if (e.preventDefault(),
                                "eup1" == M.toLowerCase())
                                return (0,
                                    b.isGuestUser)() ? window.location.href = "/generar-cv-europass/informacion-personal?normalfunnel=1" : window.location.href = "/generar-cv-europass/informacion-personal?create=1&normalfunnel=1",
                                    !1;
                            if (a.CommonHelper.setStorageValue("skinCD", M, a.TypeCodes.storageType.localStorage),
                                $.favTemplatesV4 && a.CommonHelper.setStorageValue("selectedSkinCategory", P, a.TypeCodes.storageType.localStorage),
                                $.compareTemplates && (a.CommonHelper.setStorageValue("skinCdSelected", M, a.TypeCodes.storageType.localStorage),
                                    $.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_FILTERS_CT) && p && localStorage.setItem("isPhotoSkin", null == p ? void 0 : p.isPhoto)),
                                $.skipChooseeTemplateINTL || n.props.commonActions.SetClientSetting(v.ClientSettings.SkipChooseTemplateTipShown, !0),
                                null !== (s = n.props.document) && void 0 !== s && s.id ? n.setSelectedTemplate(M, G) : $.useSkinEngineCT ? n.props.documentActions.updateSkinCD({
                                    skinCD: M
                                }) : n.props.documentActions.updateSkinCD({
                                    skinSvgUrl: H,
                                    skinHtmlUrl: B,
                                    skinCD: M
                                }),
                                n.state.isUpdatedChooseTempate || $.chooseTemplateNameAndSurname) {
                                var Z = (0,
                                    i.getDummyDocument)()
                                    , K = JSON.parse(JSON.stringify(Z)).sections.find((function (e) {
                                        return e.sectionTypeCD === a.TypeCodes.sectionTypeCd.Name
                                    }
                                    )).paragraphs[0].docDatas;
                                K.find((function (e) {
                                    return e.fieldCD === a.TypeCodes.fieldCd.FirstName
                                }
                                )).charValue = W,
                                    K.find((function (e) {
                                        return e.fieldCD === a.TypeCodes.fieldCd.LastName
                                    }
                                    )).charValue = q,
                                    K.find((function (e) {
                                        return e.fieldCD === a.TypeCodes.fieldCd.DocumentTitle
                                    }
                                    )) && (K.find((function (e) {
                                        return e.fieldCD === a.TypeCodes.fieldCd.DocumentTitle
                                    }
                                    )).charValue = Y || ""),
                                    $.isCVUploadFlow || localStorage.setItem(v.CONSTS.NAME_DOC_DATA, JSON.stringify(K))
                            }
                            ((0,
                                f.removeStepByName)("uploadphoto"),
                                4 == $.getExperimentVariant(n.mpfrAutoCoverLetterTest) && (0,
                                    f.addNewStepAfterFromStart)(v.SCREEN.CHOOSE_TEMPLATE, v.SCREEN.AUTO_COVER_LETTER),
                                n.navigationPath = (0,
                                    f.GetNextBackUrl)(v.SCREEN.CHOOSE_TEMPLATE),
                                n.nextPageUrl = window.appendQueryString(n.navigationPath.nextPageUrl),
                                localStorage.removeItem(v.CONSTS.SELECTED_FROM_INDUSTRY),
                                "By Industry" == n.state.selectedFilter) && (v.industrySkinDefaultColors[k] && localStorage.setItem(v.CONSTS.SELECTED_FROM_INDUSTRY, k));
                            var J = localStorage.getItem(v.CONSTS.SELECTED_FROM_INDUSTRY);
                            if (n.showColorSelector) {
                                G = "#000000" == G || "reset" == G ? "" : G,
                                    J && v.industrySkinDefaultColors[J] && G == v.industrySkinDefaultColors[J] ? localStorage.setItem(v.CONSTS.SELECTED_SKIN_THEME, JSON.stringify("")) : localStorage.setItem(v.CONSTS.SELECTED_SKIN_THEME, JSON.stringify(G));
                                var X = {
                                    id: a.CommonHelper.guid(),
                                    styleTypeCD: v.styleTypeCD.SDCL,
                                    value: G
                                };
                                n.props.documentActions.updateDocStyleSuccess([X])
                            }
                            n.moveToNextScreen()
                        }
                        )),
                        K(n, "setPrefForHeadshotToggle", (function () {
                            n.props.userActions.SaveUserPreference($.getUserUId(), v.UserPreferenceConstant.HeadShotToggle, n.state.showHeadshotTemplates, window.RDL.PortalSettings.ConfigurePortalCd)
                        }
                        )),
                        K(n, "chooseLaterClicked", (function () {
                            localStorage.removeItem(v.CONSTS.IS_CONTACT_BACK_BUTTON_CLICKED),
                                localStorage.removeItem(v.CONSTS.IS_GPTUPLOAD_BACK_BUTTON_CLICKED),
                                $.isAddNewSkinLCA && n.setPrefForHeadshotToggle();
                            var e = null;
                            $.isLCA && (e = n.state.selectedCountryCode),
                                (0,
                                    C.trackBuilderUsagewithClickedOption)("clicked", "choose later", "choose template", e),
                                (0,
                                    b.getStorage)("skinCD") || ($.defaultSkin = $.isZTYUS || $.isZBR ? "SRZ1" : "CBG2",
                                        ($.isRBL || $.isRTL) && ($.defaultSkin = "M001"),
                                        $.isChooseLaterClicked = !0,
                                        $.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_FILTERS_CT) && localStorage.setItem("isPhotoSkin", $.getExperimentVariant($.portalExperiments.realPhotosChooseTemplate) > 2),
                                        a.CommonHelper.setStorageValue("skinCD", $.defaultSkin, a.TypeCodes.storageType.localStorage),
                                        $.compareTemplates && a.CommonHelper.setStorageValue("skinCdSelected", $.defaultSkin, a.TypeCodes.storageType.localStorage)),
                                n.moveToNextScreen(!0)
                        }
                        )),
                        K(n, "conductFavoriteTemplatesV3", (function () {
                            var e = $.portalExperiments.favoriteTemplatesV3;
                            !(0,
                                b.isCountryCA)() && e && $.getExperimentVariant(e) < 1 && n.props.userActions.ConductSpaExperiment($.getUserUId(), e, $.cultureCD);
                            var t = $.getExperimentVariant(e);
                            t > 2 && ($.favTemplatesV3 = !0,
                                3 == t && ($.favoriteTips = !0),
                                4 == t && ($.favComparison = !0,
                                    $.templatePairs = null == e ? void 0 : e.templatePairs))
                        }
                        )),
                        K(n, "conductSkipChooseTemplateTest", (function () {
                            var e = $.portalExperiments.skipChooseTemplateTest;
                            e && $.getExperimentVariant(e) < 1 && n.props.userActions.ConductSpaExperiment($.getUserUId(), e, $.cultureCD),
                                $.getExperimentVariant(e) > 2 && ($.skipChooseeTemplateINTL = !0,
                                    $.skipTemplateSelection = !0,
                                    document.documentElement.classList.add("f-choose-template-v2"))
                        }
                        )),
                        K(n, "conductFavoriteTemplatesTest", (function () {
                            var e, t, n = $.portalExperiments.favoriteTemplates;
                            if (n && $.getExperimentVariant(n) < 1) {
                                var a = {
                                    ExprId: n.id,
                                    StageID: v.userStages.ChooseTemplate
                                };
                                (0,
                                    b.conductExperimentViaProfileJS)(a, n)
                            }
                            $.getExperimentVariant(n) > 2 && ($.favTemplates = !0,
                                $.showRecommendedTab = !0,
                                $.alternativeToTabsOnChooseTemplate = !0,
                                $.favTemplatesV2 = !0,
                                $.isfavoriteTemplates = !0,
                                $.hideRecommWithFilters = !0,
                                document.documentElement.classList.add("f-favorite-temp"),
                                document.documentElement.classList.add("f-favorite-templates-v2"),
                                document.documentElement.classList.add("f-favorite-temp-redesign"),
                                document.documentElement.classList.add("f-fav-temp-modal"),
                                $.templateFilters = null === (e = $.portalExperiments) || void 0 === e || null === (t = e.favoriteTemplates) || void 0 === t ? void 0 : t.templateFilters)
                        }
                        )),
                        K(n, "moveToNextScreen", (function () {
                            n.set0YOEFlow(),
                                $.closePageLoader(),
                                $.templateRecommendWidget && n.htmlClassList.remove("ct-onboarding-animate");
                            var e = $.getExperimentVariant($.portalExperiments.mprUploadChooseTemplate);
                            if (3 != e && 4 != e || n.changeUploadFlow(),
                                localStorage.removeItem(v.CONSTS.IS_CONTACT_BACK_BUTTON_CLICKED),
                                localStorage.removeItem(v.CONSTS.IS_GPTUPLOAD_BACK_BUTTON_CLICKED),
                                $.getExperimentVariant($.portalExperiments.lcaRdusChangeLandingPageFlow) > 2)
                                window.pref = f.ROUTING_PATH.FINALIZE,
                                    n.props.history.push(f.ROUTING_PATH.FINALIZE);
                            else if ($.onboardingRevamp) {
                                n.chooseTemplateINTL.ctContainerRef.current.classList.remove("fade-in"),
                                    n.chooseTemplateINTL.ctContainerRef.current.classList.add("fade-out"),
                                    document.querySelector("#footer").classList.add("fade-out"),
                                    n.props.commonActions.SetClientSetting(v.ClientSettings.progressStepCount, 2),
                                    setTimeout((function () {
                                        n.props.history.push(n.nextPageUrl, {
                                            fromPrevStep: !0
                                        })
                                    }
                                    ), 300)
                            } else
                                n.props.history.push(n.nextPageUrl);
                            var t = $.getExperimentVariant($.portalExperiments.mprPreviewOnChooseTemplate);
                            t > 2 && (document.documentElement.classList.remove("e-choose-template-preview"),
                                document.documentElement.classList.remove("e-choose-template-preview-v" + t))
                        }
                        )),
                        K(n, "changeUploadFlow", (function () {
                            (0,
                                b.getUploadedFileOnCT)() ? ((0,
                                    f.removeStepByName)(v.SCREEN.SELECT_RESUME),
                                    (0,
                                        f.addNewStepAfterFromStart)(v.SCREEN.CHOOSE_TEMPLATE, v.SCREEN.CONTACT),
                                    $.getExperimentVariant($.portalExperiments.mprEditInPlace) > 2 && (0,
                                        f.insertAfterOrBefore)(v.SCREEN.CONTACT, v.SCREEN.RESUME_REVIEW),
                                    n.navigationPath = (0,
                                        f.GetNextBackUrl)(v.SCREEN.CHOOSE_TEMPLATE)) : ((0,
                                            f.removeStepByName)(v.SCREEN.SELECT_RESUME),
                                            (0,
                                                f.addNewStepAfterFromStart)(v.SCREEN.CHOOSE_TEMPLATE, v.SCREEN.SELECT_RESUME)),
                                n.nextPageUrl = window.appendQueryString(n.navigationPath.nextPageUrl)
                        }
                        )),
                        K(n, "setSelectedTemplate", (function (e, t) {
                            var o = e || "CBG2"
                                , r = Object.assign({}, n.props.document);
                            $.featurePhoto && $.photoSkins && $.photoSkins.indexOf(o) > -1 && (r = (0,
                                x.addPhotoSection)(r));
                            var s = (r = (0,
                                b.UpdateDocumentBySkinCD)(o, r)).sections
                                , l = a.DocumentHelper.GetDefaultSectionContainerIndexes($.getTemplateFromSkin(o), s, (0,
                                    E.isAtomicSkin)(o));
                            null == s || s.forEach((function (e) {
                                var t = null == l ? void 0 : l.find((function (t) {
                                    return t.sectionCode == e.sectionTypeCD
                                }
                                ));
                                t && (e.sectionContainerIndex = t.value)
                            }
                            ));
                            var p = a.DocumentHelper.updateDocumentSkinandStyles(r, o, $.getTemplateFromSkin)
                                , i = p.docStyles.find((function (e) {
                                    return e.styleTypeCD == v.styleTypeCD.PGSZ
                                }
                                ))
                                , m = p.docStyles.find((function (e) {
                                    return e.styleTypeCD == v.styleTypeCD.SDCL
                                }
                                ));
                            $.useDefaultPageSizeA4 && i && (i.value = "A4"),
                                m && "" != t && (m.value = t),
                                $.intlPhotoSkins && $.intlPhotoSkins.indexOf(o) > -1 && !$.isFR ? (0,
                                    f.addNewStepAfterFromStart)(v.SCREEN.SELECT_RESUME, "uploadphoto") : $.intlPhotoSkins && (0,
                                        f.removeStepByName)("uploadphoto");
                            var c = a.DocumentHelper.GetOrderedSectionsArray(s, ["ALNK"]);
                            (null == c ? void 0 : c.length) > 0 ? p.sections = c : p.sections = s,
                                n.props.documentActions.UpdateDocument($.getUserUId(), p),
                                setTimeout((function () {
                                    a.CommonHelper.overlayDynamicWidth()
                                }
                                ), 300)
                        }
                        )),
                        K(n, "moveBack", (function () {
                            var e = document.getElementsByClassName("loader-icons");
                            e && e.length > 0 && e[0].classList.remove("d-none"),
                                document.getElementsByClassName("step1")[0].innerHTML = "Error!",
                                $.animateJS(document.getElementsByClassName("animateWidth")[0], "width", 100, 400, !1, "%", "");
                            var t = n.navigationPath.backPageUrl;
                            setTimeout(function () {
                                $.closePageLoader(),
                                    this.props.history.push(t)
                            }
                                .bind(n), 300)
                        }
                        )),
                        K(n, "getSubHeadingExprLevelTemplates", (function (e) {
                            var t = e || n.experienceLevel
                                , a = ""
                                , o = ""
                                , r = "";
                            if (t == v.experienceLevel.student ? (o = $.Localization.students_text,
                                r = $.getResourceValue("zeroToThreeYears_lbl", "zeroToThreeYears_txt")) : (o = $.Localization.people,
                                    r = v.experienceLevelText[t]),
                                a = $.Localization.templates_are_great_for_Text.replace("{0}", o).replace("{1}", r ? r.toLowerCase() : ""),
                                $.isZTY0YOE) {
                                var s = (0,
                                    b.getExperienceRange)(!1);
                                s && s == v.experienceLevel.ZeroYear && (t == v.experienceLevel.student ? a = $.Localization.choose_No_Experience_templates_students : t == v.experienceLevel.ZeroYear && (a = $.Localization.choose_No_Experience_templates_Non_students))
                            }
                            return a
                        }
                        )),
                        K(n, "showAllTemplates", (function () {
                            ($.htmlSkinRendering || $.useRendererForCT) && n.setScalingFactor(n.state.skins);
                            var e = null;
                            $.isLCA && (e = n.state.selectedCountryCode),
                                (0,
                                    C.trackBuilderUsagewithClickedOption)("clicked", "see all templates", "choose template", e)
                        }
                        )),
                        K(n, "previewTemplates", (function (e, t) {
                            var o, r, s = "default", l = $.Localization.ColorSelectorList || [];
                            t && l && l.length > 0 && (s = null === (r = l.find((function (e) {
                                return e.value.toLowerCase() == t.toLowerCase()
                            }
                            ))) || void 0 === r ? void 0 : r.key);
                            var p = null;
                            $.isLCA && (p = n.state.selectedCountryCode),
                                (0,
                                    C.trackBuilderUsagewithClickedOption)("clicked", "preview template", "choose template", p),
                                $.TrackEvents("preview template", {
                                    action: "clicked",
                                    "template name": null == e ? void 0 : e.toLowerCase(),
                                    color: null === (o = s) || void 0 === o ? void 0 : o.toLowerCase()
                                }, $.getUserUId(), a.CommonHelper.isLoggedInUser($.UserClaims), !1)
                        }
                        )),
                        K(n, "setCarousalDetails", (function (e, t) {
                            n.currentSlideIndex = e,
                                n.isPreview = t
                        }
                        )),
                        K(n, "onFilterClick", (function (e, t) {
                            var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            $.startPageLoader(),
                                t && t.preventDefault(),
                                $.templateRecommendWidget && n.htmlClassList.remove("ct-onboarding-animate"),
                                $.isFeaturePresent(v.FeatureSet.TEMPLATE_CATEGORIES_REDESIGN) && window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                }),
                                $.isAddNewSkinLCA ? (e.toLowerCase() != v.TemplateFilter.All.toLowerCase() ? $.HeadshotSkins.forEach((function (e, t) {
                                    var n = ".svg";
                                    (e.skinCD.startsWith("SRZ") || e.skinCD.startsWith("TRZ")) && (n = ".png"),
                                        e.blobURL = $.configServiceBlobUrl + "SkinImages/" + n,
                                        e.imageURL = $.configServiceBlobUrl + "SkinImages/" + n,
                                        $.skins.find((function (t) {
                                            return t.skinCD == e.skinCD
                                        }
                                        )) || $.skins.splice(t, 0, e)
                                }
                                )) : n.state.showHeadshotTemplates || $.HeadshotSkins.forEach((function (e) {
                                    var t = $.skins.findIndex((function (t) {
                                        return t.skinCD == e.skinCD
                                    }
                                    ));
                                    t > -1 && $.skins.splice(t, 1)
                                }
                                )),
                                    n.props.commonActions.SetClientSetting(v.ClientSettings.ChooseTempFilterValue, e),
                                    n.setState({
                                        selectedFilter: e,
                                        skins: $.skins
                                    }, (function () {
                                        n.skinTrackedINTL = {},
                                            $.isFeaturePresent(v.FeatureSet.TEMPLATE_PAGE_FILTER) && (n.onFilterClickTracking(e),
                                                setTimeout((function () {
                                                    n.bindViewPortWatcher()
                                                }
                                                ), 50)),
                                            $.closePageLoader()
                                    }
                                    ))) : (n.addRemoveSocialProofNudge(e),
                                        n.props.commonActions.SetClientSetting(v.ClientSettings.ChooseTempFilterValue, e),
                                        n.setState({
                                            selectedFilter: e,
                                            isExprLvlFilter: a,
                                            selectedCTFilters: {},
                                            resetSidebarFilter: !0,
                                            enablePhotoToggle: !0
                                        }, (function () {
                                            n.skinTrackedINTL = {},
                                                $.isFeaturePresent(v.FeatureSet.TEMPLATE_PAGE_FILTER) && (n.onFilterClickTracking(e),
                                                    setTimeout((function () {
                                                        n.bindViewPortWatcher()
                                                    }
                                                    ), 50)),
                                                $.closePageLoader()
                                        }
                                        )))
                        }
                        )),
                        K(n, "addRemoveSocialProofNudge", (function (e) {
                            var t = $.getExperimentVariant($.portalExperiments.lcaShowSocialProofNudgeOnTemplate);
                            e.toLowerCase() != v.TemplateFilter.Recommended.toLowerCase() ? (n.htmlClassList.remove("e-show-social-proof-nudge-p"),
                                n.htmlClassList.remove("e-show-social-proof-nudge-piw")) : 3 == t ? n.htmlClassList.add("e-show-social-proof-nudge-p") : 4 == t && n.htmlClassList.add("e-show-social-proof-nudge-piw")
                        }
                        )),
                        K(n, "onFilterClickTracking", (function (e) {
                            var t = {
                                action: "clicked",
                                "click option": "template categories",
                                "template category": e,
                                "screen name": "choose template"
                            };
                            $.isLCA && (t["Resume Target Country"] = n.state.selectedCountryCode),
                                $.TrackEvents("builder usage", t, $.getUserUId(), a.CommonHelper.isLoggedInUser($.UserClaims), !1)
                        }
                        )),
                        K(n, "onBasicClick", (function () {
                            n.setState({
                                isBasicSelected: !n.state.isBasicSelected
                            })
                        }
                        )),
                        K(n, "onPremiumClick", (function () {
                            n.setState({
                                isPremiumSelected: !n.state.isPremiumSelected
                            })
                        }
                        )),
                        K(n, "onCountryChange", (function (e) {
                            n.setState({
                                selectedCountryCode: e
                            })
                        }
                        )),
                        K(n, "resetFilters", (function () {
                            $.TrackEvents("builder usage", {
                                action: "reset filters",
                                "photo option": "all",
                                columns: "all",
                                "color option": "all"
                            }, $.getUserUId(), a.CommonHelper.isLoggedInUser($.UserClaims), !1),
                                n.setState({
                                    sideTemplateFilters: K(K({}, v.TemplateCategory.PHOTO, ""), v.TemplateCategory.COLUMNS, "")
                                }, (function () {
                                    n.props.commonActions.SetClientSetting(v.ClientSettings.ChooseTemplateFilterOptions, n.state.sideTemplateFilters)
                                }
                                ))
                        }
                        )),
                        K(n, "assignRef", (function (e, t) {
                            null != t && (n[e] = t)
                        }
                        )),
                        K(n, "updateSkins", (function () {
                            n.state.showHeadshotTemplates ? ($.HeadshotSkins.forEach((function (e, t) {
                                var n = ".svg";
                                (e.skinCD.startsWith("SRZ") || e.skinCD.startsWith("TRZ")) && (n = ".png"),
                                    e.blobURL = $.configServiceBlobUrl + "SkinImages/" + e.skinCD.toLowerCase() + n,
                                    e.imageURL = $.configServiceBlobUrl + "SkinImages/" + e.skinCD.toLowerCase() + n;
                                var a = $.skins.findIndex((function (t) {
                                    return t.skinCD == e.skinCD
                                }
                                ));
                                a > -1 && $.skins.splice(a, 1),
                                    $.skins.splice(t, 0, e)
                            }
                            )),
                                n.setState({
                                    skins: $.skins
                                }, (function () {
                                    return setTimeout((function () {
                                        n.bindViewPortWatcher()
                                    }
                                    ), 50)
                                }
                                )),
                                $.showFilterOnPhotoUpload = !0,
                                window.Caman || window.loadJs("https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.1/caman.full.min.js", !1, null, null, !0)) : ($.HeadshotSkins.forEach((function (e) {
                                    var t = $.skins.findIndex((function (t) {
                                        return t.skinCD == e.skinCD
                                    }
                                    ));
                                    t > -1 && $.skins.splice(t, 1)
                                }
                                )),
                                    n.setState({
                                        skins: $.skins
                                    }, (function () {
                                        return setTimeout((function () {
                                            n.bindViewPortWatcher()
                                        }
                                        ), 50)
                                    }
                                    )),
                                    $.showFilterOnPhotoUpload = !1)
                        }
                        )),
                        K(n, "goToOnboardingPage", (function () {
                            var e;
                            $.templateRecommendWidget && ($.TrackEvents("builder usage", {
                                action: "clicked",
                                "click option": "edit answer",
                                "template category": (null === (e = n.state.selectedFilter) || void 0 === e ? void 0 : e.toLowerCase()) || "",
                                "screen name": "choose template"
                            }, $.getUserUId(), a.CommonHelper.isLoggedInUser($.UserClaims), !1),
                                n.props.history.push(f.ROUTING_PATH.ONBOARDING_REDESIGN))
                        }
                        )),
                        K(n, "toggleShowHeadshotTemplates", (function () {
                            var e = !n.state.showHeadshotTemplates;
                            $.showHeadshotTemplates = e ? "true" : "false";
                            var t = "";
                            e ? ($.HeadshotSkins.forEach((function (e, t) {
                                e.blobURL = $.configServiceBlobUrl + "SkinImages/" + e.skinCD.toLowerCase() + (e.skinCD.startsWith("SRZ") || e.skinCD.startsWith("TRZ") ? ".png" : ".svg"),
                                    e.imageURL = $.configServiceBlobUrl + "SkinImages/" + e.skinCD.toLowerCase() + (e.skinCD.startsWith("SRZ") || e.skinCD.startsWith("TRZ") ? ".png" : ".svg"),
                                    $.skins.find((function (t) {
                                        return t.skinCD == e.skinCD
                                    }
                                    )) || $.skins.splice(t, 0, e)
                            }
                            )),
                                n.setHtmlSkins().then((function () {
                                    n.setState({
                                        skins: $.skins,
                                        showHeadshotTemplates: e
                                    }, (function () {
                                        return setTimeout((function () {
                                            n.bindViewPortWatcher()
                                        }
                                        ), 50)
                                    }
                                    ))
                                }
                                )),
                                $.showFilterOnPhotoUpload = !0,
                                window.Caman || window.loadJs("https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.1/caman.full.min.js", !1, null, null, !0),
                                t = "Show Headshot Templates") : ($.HeadshotSkins.forEach((function (e) {
                                    var t = $.skins.findIndex((function (t) {
                                        return t.skinCD == e.skinCD
                                    }
                                    ));
                                    t > -1 && $.skins.splice(t, 1)
                                }
                                )),
                                    n.setState({
                                        skins: $.skins,
                                        showHeadshotTemplates: e
                                    }, (function () {
                                        return setTimeout((function () {
                                            n.bindViewPortWatcher()
                                        }
                                        ), 50)
                                    }
                                    )),
                                    $.showFilterOnPhotoUpload = !1,
                                    t = "Hide Headshot Templates");
                            var o, r = {
                                action: "clicked",
                                "screen name": "choose template",
                                "click option": t,
                                "template with photo section": e ? "TRUE" : "FALSE",
                                "template style": "List Style",
                                "Resume Target Country": n.state.selectedCountryCode
                            };
                            $.isFeaturePresent(v.FeatureSet.TEMPLATE_PAGE_FILTER) && (r["template category"] = (null === (o = n.state.selectedFilter) || void 0 === o ? void 0 : o.toLowerCase()) || "");
                            $.TrackEvents("builder usage", r, $.getUserUId(), a.CommonHelper.isLoggedInUser($.UserClaims), !1)
                        }
                        )),
                        K(n, "handelResumeUploadOnCT", (function (e, t) {
                            if (e) {
                                var a = "";
                                "upload-btn" == t && (a = "import resume"),
                                    "file-btn" == t && (a = "change resume"),
                                    a && (0,
                                        C.trackBuilderUsagewithClickedOption)("clicked", a, "choose template")
                            } else
                                document.documentElement.classList.remove("setting-imported-file"),
                                    document.documentElement.classList.remove("error-mode-true");
                            n.setProgressBarPercentageOnCT(30),
                                n.setState({
                                    showUploadPopup: e
                                }),
                                n.htmlClassList.remove("hide-importing-modal"),
                                n.htmlClassList.remove("error-mode-true")
                        }
                        )),
                        K(n, "setuploadedFileNameOnCT", (function (e) {
                            e && (document.documentElement.classList.add("uploaded-imported-file"),
                                n.setState({
                                    isClearImport: !1
                                })),
                                e ? n.setState({
                                    uploadedFileNameOnCT: e
                                }) : n.setState({
                                    uploadedFileNameOnCT: ""
                                })
                        }
                        )),
                        K(n, "handleClearImport", (function () {
                            document.documentElement.classList.remove("uploaded-imported-file"),
                                sessionStorage.removeItem(v.CONSTS.UPLOAD_FILE_ON_TEMPLATES),
                                sessionStorage.removeItem(v.CONSTS.UPLOAD_FILE_ON_RESUME_OPTION),
                                (0,
                                    C.trackBuilderUsagewithClickedOption)("clicked", "clear import", "choose template"),
                                n.setuploadedFileNameOnCT(""),
                                n.setState({
                                    isClearImport: !0
                                }),
                                n.deleteDocumentData(),
                                n.setState({
                                    useActualResumeContent: !1
                                }),
                                n.setProgressBarOnCT(!1),
                                n.setProgressBarPercentageOnCT(30),
                                $.GPTParserData = {}
                        }
                        )),
                        K(n, "deleteDocumentData", (function () {
                            var e = n.props.document;
                            e.sections.forEach((function (t) {
                                t.paragraphs.forEach((function (n) {
                                    e = a.DocumentHelper.removeParagraph(e, t.id, n.id)
                                }
                                ))
                            }
                            )),
                                n.props.documentActions.UpdateDocument($.getUserUId(), e)
                        }
                        )),
                        K(n, "toggleActualResumeContent", (function (e) {
                            $.TrackEvents("identify", {
                                "use my resume content": e.target.checked ? "true" : "false"
                            }, $.getUserUId(), a.CommonHelper.isLoggedInUser($.UserClaims), !1),
                                (0,
                                    C.trackBuilderUsagewithClickedOption)("clicked", "use my resume content", "choose template"),
                                n.setState({
                                    useActualResumeContent: !n.state.useActualResumeContent
                                })
                        }
                        )),
                        K(n, "setDocumentCreated", (function (e) {
                            n.setState({
                                useActualResumeContent: e
                            })
                        }
                        )),
                        K(n, "setLoaderOnParsingResume", (function (e) {
                            n.setState({
                                showLoaderOnParsingResume: e
                            })
                        }
                        )),
                        K(n, "setProgressBarOnCT", (function (e) {
                            n.setState({
                                showProgressBarOnCT: e
                            })
                        }
                        )),
                        K(n, "setProgressBarPercentageOnCT", (function (e) {
                            n.setState({
                                progressBarPercentageOnCT: e
                            })
                        }
                        )),
                        K(n, "calculateProgressBarPercentage", (function () {
                            var e = 30
                                , t = setInterval((function () {
                                    (e += 20) >= 90 && (clearInterval(t),
                                        e = 90),
                                        n.setProgressBarPercentageOnCT(e)
                                }
                                ), 2e3)
                        }
                        )),
                        K(n, "hideUploadPopup", (function (e) {
                            n.htmlClassList.add("hide-importing-modal"),
                                n.htmlClassList.add("uploaded-imported-file"),
                                n.startTimeParsing = Date.now(),
                                n.setProgressBarOnCT(!0),
                                n.calculateProgressBarPercentage(),
                                n.processingForUploadOnCT(e)
                        }
                        )),
                        K(n, "setParsingErrorMessage", (function (e) {
                            n.setState({
                                showParsingErrorMessage: e
                            })
                        }
                        )),
                        K(n, "processingForUploadOnCT", (function (e) {
                            return new Promise((function (t) {
                                var o = 3
                                    , r = function () {
                                        if (0 == --o && t(),
                                            o > 0 && setTimeout(r, 1e3),
                                            2 == o)
                                            var s = setInterval((function () {
                                                var t, o, r, l, p;
                                                $.GPTParserData[a.TypeCodes.GPT.isBGParseFailed] || null !== (t = $.GPTParserData) && void 0 !== t && t.isCompleteFailed && null !== (o = $.GPTParserData) && void 0 !== o && o.isContactFailed ? (clearInterval(s),
                                                    n.setParsingErrorMessage(!0),
                                                    n.setProgressBarOnCT(!1),
                                                    n.htmlClassList.add("parsing-error")) : (null !== (r = $.GPTParserData) && void 0 !== r && r[a.TypeCodes.GPT.cntcSection] || null !== (l = $.GPTParserData) && void 0 !== l && l[a.TypeCodes.GPT.isContactFailed] && null !== (p = $.GPTParserData) && void 0 !== p && p[a.TypeCodes.GPT.completeSections] || $.GPTParserData.successMessage) && 90 == n.state.progressBarPercentageOnCT && (clearInterval(s),
                                                        setTimeout((function () {
                                                            n.setProgressBarPercentageOnCT(100),
                                                                setTimeout((function () {
                                                                    n.setProgressBarOnCT(!1)
                                                                }
                                                                ), 1e3),
                                                                n.setDocumentCreated(!0);
                                                            var t = Date.now() - n.startTimeParsing;
                                                            $.logParsingTimeOnChooseTemplate && t > 1e3 && $.LogError("parsing time taken on choose template page in miliseconds: " + t, "", !0),
                                                                n.setParsingErrorMessage(!1),
                                                                n.showUploadOnChooseTemplate = !0,
                                                                n.setLoaderOnParsingResume(!0),
                                                                n.setuploadedFileNameOnCT(e),
                                                                setTimeout((function () {
                                                                    n.setLoaderOnParsingResume(!1)
                                                                }
                                                                ), 1e3)
                                                        }
                                                        ), 400))
                                            }
                                            ), 10)
                                    };
                                setTimeout(r, 2e3)
                            }
                            ))
                        }
                        )),
                        K(n, "onSkinColorChange", (function (e) {
                            if ($.getExperimentVariant($.portalExperiments.mprCTSortingAlgorithm) > 2 || $.isRBL || $.isRTL) {
                                var t = JSON.parse(JSON.stringify(n.props.document));
                                n.selectedTheme = e && "reset" != e ? e : "",
                                    ["MLX1", "MLX4", "MLA8", "M007", "M013"].forEach((function (n) {
                                        $.addPICTSectiononCT && (t = (0,
                                            x.addPhotoSection)(t)),
                                            t = (0,
                                                b.manageDocStyles)(t, v.styleTypeCD.SDCL, e && "reset" != e ? e : v.skinDefaultColors[n], $.getTemplateFromSkin),
                                            (0,
                                                b.resolveRootClassUpdateScript)({
                                                    document: t,
                                                    skinCD: n
                                                })
                                    }
                                    ))
                            }
                        }
                        )),
                        K(n, "handleChooseLaterPopupOpen", (function () {
                            n.setState({
                                showChooseLaterPopup: !0
                            }),
                                (0,
                                    C.trackBuilderUsagewithClickedOption)("clicked", "choose later", "choose template page")
                        }
                        )),
                        K(n, "handleChooseLaterPopupClose", (function () {
                            var e = document.querySelector("#skipTemplates");
                            n.setState({
                                showChooseLaterPopup: !1
                            }, (function () {
                                e && e.blur()
                            }
                            ))
                        }
                        )),
                        K(n, "goToNextPopupStep", (function (e) {
                            var t;
                            if ("step1" == e && (t = "step2"),
                                "step2" == e && (t = "step3"),
                                "step3" == e && (n.setState({
                                    showBroadResumeIntentPopup: !1
                                }),
                                    document.documentElement.classList.remove("page-broad-intent"),
                                    n.bindViewPortWatcher()),
                                n.setState({
                                    broadIntentStep: t
                                }),
                                "step2" == t || "step3" == t) {
                                var a = {}
                                    , o = JSON.parse(localStorage.getItem(v.CONSTS.BROAD_RESUME_INTENT_DATA));
                                o && (a = j({}, o)),
                                    a.intentPopupCurrentStep = t,
                                    localStorage.setItem(v.CONSTS.BROAD_RESUME_INTENT_DATA, JSON.stringify(a))
                            }
                        }
                        )),
                        K(n, "onBackStepClick", (function (e) {
                            var t;
                            "step2" == e && (t = "step1",
                                $.TrackEvents(v.eventTypeCd.POPUP, {
                                    action: v.evtProperties.clicked,
                                    "click option": "back",
                                    "popup name": "intent survey step 2",
                                    "screen name": v.SCREEN_NAME.ChooseTemplate
                                }, $.getUserUId(), a.CommonHelper.isLoggedInUser($.UserClaims), !1)),
                                "step3" == e && (t = "step2",
                                    $.TrackEvents(v.eventTypeCd.POPUP, {
                                        action: v.evtProperties.clicked,
                                        "click option": "back",
                                        "popup name": "intent survey step 3",
                                        "screen name": v.SCREEN_NAME.ChooseTemplate
                                    }, $.getUserUId(), a.CommonHelper.isLoggedInUser($.UserClaims), !1)),
                                n.setState({
                                    broadIntentStep: t
                                });
                            var o = {}
                                , r = JSON.parse(localStorage.getItem(v.CONSTS.BROAD_RESUME_INTENT_DATA));
                            r && (o = j({}, r)),
                                o.intentPopupCurrentStep = t,
                                localStorage.setItem(v.CONSTS.BROAD_RESUME_INTENT_DATA, JSON.stringify(o))
                        }
                        )),
                        K(n, "renderStepWiseBroadIntentComponent", (function () {
                            var e = n.state.broadIntentStep
                                , t = {
                                    isInPopup: !0,
                                    popupStep: e,
                                    goToNextPopupStep: n.goToNextPopupStep
                                };
                            return "step1" == e ? r.default.createElement(_.default, I({}, t, {
                                popupStepLbl: $.Localization.lbl_Step1of3
                            })) : "step2" == e ? r.default.createElement(O.default, I({}, t, {
                                onBackStepClick: n.onBackStepClick,
                                popupStepLbl: $.Localization.lbl_Step2of3
                            })) : "step3" == e ? r.default.createElement(L.default, I({}, t, {
                                onBackStepClick: n.onBackStepClick,
                                popupStepLbl: $.Localization.lbl_Step3of3
                            })) : void 0
                        }
                        )),
                        K(n, "closeIntentPopup", (function () {
                            var e = JSON.parse(localStorage.getItem(v.CONSTS.BROAD_RESUME_INTENT_DATA))
                                , t = {};
                            e && (t = j({}, e)),
                                t.intentPopupShown = !0,
                                localStorage.setItem(v.CONSTS.BROAD_RESUME_INTENT_DATA, JSON.stringify(t)),
                                n.setState({
                                    showBroadResumeIntentPopup: !1
                                }),
                                document.documentElement.classList.remove("page-broad-intent"),
                                n.bindViewPortWatcher();
                            var o = n.state.broadIntentStep;
                            $.TrackEvents(v.eventTypeCd.POPUP, {
                                action: v.evtProperties.clicked,
                                "click option": "close",
                                "popup name": "intent survey ".concat("step1" == o ? "step 1" : "step2" == o ? "step 2" : "step 3"),
                                "screen name": v.SCREEN_NAME.ChooseTemplate
                            }, $.getUserUId(), a.CommonHelper.isLoggedInUser($.UserClaims), !1)
                        }
                        )),
                        n.htmlClassList = document.documentElement.classList,
                        n.conductCTOptimization(),
                        n.conductNewColorPickerPalette(),
                        n.conductChangeTemplate(),
                        n.modifySubHeader(),
                        n.conductChooseTemplateUpdates(),
                        n.conductSkipChooseTemplateTest(),
                        n.conductCTNewSkinsTest(),
                        n.conductNewSkinsTest(),
                        n.conductCTFilterNFavTest(),
                        n.conductOptimalSkinOrder(),
                        n.conductChooseTemplateFiltersV2Test(),
                        n.conductBundleImprovementsTest(),
                        n.conductFavoriteTemplatesV3(),
                        n.conductNewSkinsFilterTest(),
                        n.conductChooseTemplateFilterTest(),
                        n.conductShowSocialProof(),
                        n.templateFiltersOnCT(),
                        n.conductRecomSkinsInitially(),
                        n.conductCTSortingAlgorithm(),
                        n.conductChooseTemplatePhotoToggle(),
                        n.conductCtTriStatePhotoToggle(),
                        n.conductPreviewOnChooseTemplate(),
                        n.executeIconFeature(),
                        n.conductRealPhotoOnHeadshotTemplates(),
                        n.conductFlexibleLayout(),
                        n.conductPhotoToggleOption(),
                        n.conductFavoriteTemplatesTest(),
                        $.importedSkins && $.importedSkins.length > 0 && n.conductSkinEngineTest(),
                        n.conductChooseTemplateShopping(),
                        n.conductChooseTemplateShoppingV2(),
                        n.conductMPRAdditionalTemplateFiltersOnCT(),
                        n.showColorSelector = !0,
                        n.isPreview = !1,
                        n.currentSlideIndex = 0,
                        n.personalizeBuilder20PlusYOEVar = $.getExperimentVariant($.portalExperiments.mprPersonalizeBuilderFor20PluseYoeV2),
                        n.skinClassName = "document fontsize fontface vmargins hmargins pagesize skn-",
                        n.mpfrAutoCoverLetterTest = $.portalExperiments.mpfrAutoCoverLetter,
                        n.mpfrDesktopUploadTest = $.portalExperiments.mpfrDesktopDropBoxAndGDriveUpload,
                        n.skinTrackedINTL = {},
                        n.selectedTheme = "",
                        n.arrPhotoSkin = [],
                        $.ctPhotoToggle && ($.chooseTemplatePhotoToggle = !0),
                        n.conductLabelOnChosetemplate(),
                        n.conductFavoriteTemplatesV2(),
                        n.conductConversationalUI(),
                        n.conductRemoteWorkPopup(),
                        n.conductCompareTemplateOnFunnel(),
                        n.ZTYRWZAddingAllAndRecommendedEXPTemplates = {
                            v1: ["Cascade", "Concept", "Crisp", "Diamond", "Cubic", "Iconic"],
                            v2: ["Cascade", "Concept", "Crisp", "Diamond", "Cubic", "Iconic"],
                            v3: ["Cascade", "Concept", "Crisp", "Diamond", "Cubic"],
                            v4: ["Cascade", "Concept", "Crisp", "Diamond", "Cubic"],
                            v5: ["Cascade", "Concept", "Crisp", "Diamond", "Cubic"],
                            v6: ["Cascade", "Concept", "Crisp", "Diamond", "Cubic", "Iconic"]
                        },
                        $.getExperimentVariant($.portalExperiments.lcaRdusChangeLandingPageFlow) > 2 && ((0,
                            b.setBlankExprLvl)(),
                            n.props.commonActions.SetClientSetting(v.ClientSettings.ExperienceLevel, "")),
                        n.initCompareTemplateCT(),
                        $.featurePhoto ? n.arrPhotoSkin = $.photoSkins : $.intlPhotoSkins && (n.arrPhotoSkin = $.intlPhotoSkins),
                        localStorage.getItem(v.CONSTS.SELECTED_SKIN_THEME) && JSON.parse(localStorage.getItem(v.CONSTS.SELECTED_SKIN_THEME)) && (n.selectedTheme = JSON.parse(localStorage.getItem(v.CONSTS.SELECTED_SKIN_THEME)));
                    var o = (0,
                        b.getExperienceLevel)(!1) == v.experienceLevel.student;
                    n.isStudentSectionReorder = o && $.isFeaturePresent(v.FeatureSet.STUDENT_SECTION_REORDER),
                        $.isFeaturePresent(v.FeatureSet.Experience_Personalization) && (n.experienceLevel = (0,
                            b.getExperienceLevel)(!1),
                            n.experienceRange = (0,
                                b.getExperienceRange)(!1)),
                        n.educationLevel = (0,
                            b.GetClientSettingValue)(n.props.common.clientSettings, v.ClientSettings.EducationLevel);
                    var s = (0,
                        b.GetClientSettingValue)(n.props.common.clientSettings, v.ClientSettings.ChooseTempFilterValue);
                    s = n.getSelectedFilter(s),
                        $.isFeaturePresent(v.FeatureSet.SKIP_TEMPLATE) && document.documentElement.classList.add("c-skip-ct");
                    var l = $.getExperimentVariant($.portalExperiments.mprUploadChooseTemplate);
                    n.uploadedFileNameOnCT = (0,
                        b.getUploadedFileOnCT)();
                    var p, m = [], c = [], d = {}, g = !1;
                    $.compareTemplates && (m = (0,
                        b.getStorage)(v.CONSTS.FAVORITE_SKINS) ? JSON.parse((0,
                            b.getStorage)(v.CONSTS.FAVORITE_SKINS)) : [],
                        c = (0,
                            b.getStorage)(v.CONSTS.FAVORITE_SKINS_SKINCD) ? JSON.parse((0,
                                b.getStorage)(v.CONSTS.FAVORITE_SKINS_SKINCD)) : [],
                        d = (0,
                            b.getStorage)(v.CONSTS.FAVORITE_SKINS_THEMES) ? JSON.parse((0,
                                b.getStorage)(v.CONSTS.FAVORITE_SKINS_THEMES)) : [],
                        g = (null === (p = m) || void 0 === p ? void 0 : p.length) > 0);
                    return n.state = {
                        skins: $.useSkinEngineCT ? $.skins : (0,
                            b.getSkinData)().all,
                        selectedFilter: s,
                        selectedSideFilters: K(K({}, v.TemplateCategory.PHOTO, ""), v.TemplateCategory.COLUMNS, ""),
                        isBasicSelected: !1,
                        isPremiumSelected: !1,
                        indexOptimalTemplateTestV2: !!$.optimalTemplateOrderV2 && 3,
                        rowCanadaBuilder: $.isROWCanadaBuilderTest ? 3 : 0,
                        colorPickerTestVar: 0,
                        showHeadshotTemplates: !$.showHeadshotTemplates || "false" != $.showHeadshotTemplates,
                        tabsAlternative: $.alternativeToTabsOnChooseTemplate,
                        showUploadPopup: !1,
                        uploadedFileNameOnCT: n.uploadedFileNameOnCT,
                        isClearImport: !1,
                        useActualResumeContent: !1,
                        showLoaderOnParsingResume: !1,
                        showProgressBarOnCT: !1,
                        progressBarPercentageOnCT: 30,
                        selectedCTFilters: {},
                        isExprLvlFilter: !1,
                        favoriteSkinsArr: m,
                        favoriteSkinCD: c,
                        favoriteSkinThemes: d,
                        isFavSkinsOption: g,
                        showFavTooltip: !1,
                        showComparator: !1,
                        enablePhotoToggle: !0,
                        updateFilterTemplates: !1,
                        showBroadResumeIntentPopup: !1,
                        broadIntentStep: "step1"
                    },
                        n.recommendedAfterRandomised = [],
                        n.allRandomisedSkins = [],
                        $.isAddNewSkinLCA && ($.HeadshotSkins = n.updateHeadshotSkins(),
                            n.updateSkins()),
                        n.isComparisonBladeOn = c && c.length > 0,
                        n.state.selectedCountryCode = (0,
                            b.GetClientSettingValue)(n.props.common.clientSettings, v.ClientSettings.SelectedCountry),
                        n.initializeComponent(),
                        n.skinTracked = {},
                        !$.rowLocalization && $.isFeaturePresent(v.FeatureSet.IP_BASED_CITY_STATE) && ($.localizationResumeRenderer = j(j({}, $.localizationResumeRenderer), {}, {
                            cityDefaultText: $.countryDetails.city || $.Localization.default_preview_city,
                            stateDefaultText: $.countryDetails.state || $.Localization.default_preview_state,
                            zipDefaultText: $.countryDetails.zip || $.Localization.default_preview_zipcode
                        })),
                        $.countrySpecificData && $.countrySpecificData[$.PortalSettings.ConfigurePortalCd] && ($.localizationResumeRenderer = j(j({}, $.localizationResumeRenderer), {}, {
                            cityDefaultText: "",
                            stateDefaultText: $.Localization[$.countrySpecificData[$.PortalSettings.ConfigurePortalCd].default_preview_state],
                            zipDefaultText: "",
                            streetAddressDefaultText: ""
                        })),
                        $.localizationResumeRenderer = j(j({}, $.localizationResumeRenderer), {}, {
                            noImagePicPath: $.blobImageUrl ? $.blobImageUrl + "images/" : $.noImagePicturePath,
                            noImagePicName: $.noImagePictureName
                        }),
                        $.clearHiwExperiment(),
                        $.templatesOrderForFilter && n.cleanFilterData(),
                        n.conductAutoCoverLetterExperiment(),
                        n.conductDesktopDropBoxAndGDriveExperiment(),
                        n.conductPlaceholderAndImprovementsTest(),
                        n.conductEducationalPlaceHolder(),
                        n.conductNameSurnameTest(),
                        $.isFiveTemplatePerRow && (document.documentElement.classList.add("upload-flow-ver4"),
                            document.documentElement.classList.add("ct-5-flow"),
                            !$.chooseTemplateFiltersV2 && ($.skinSliceNumber = 5)),
                        l > 2 && l < 5 ? (n.showUploadOnChooseTemplate = !0,
                            4 == l && (n.isUploadBannerOnCT = !0),
                            $.useRendererForCT = !0,
                            n.uploadedFileNameOnCT && document.documentElement.classList.add("uploaded-imported-file")) : 5 == l && ($.useRendererForCT = !0,
                                n.uploadedFileNameOnCT && document.documentElement.classList.add("uploaded-imported-file")),
                        document.documentElement.classList.remove("error-mode-true"),
                        $.expandedColorPicker && (document.documentElement.classList.add("color-picker-dropdown"),
                            document.documentElement.classList.add("ct-color-picker-test"),
                            $.colorPickerUnderOpen = !0),
                        (0,
                            b.isChooseTemplateAlternativeTabs)() && ($.loadFile(),
                                $.useRendererForCT = !0),
                        $.chooseTemplatePreview && document.documentElement.classList.add("f-choose-template-v2"),
                        $.sideBarFilters && document.documentElement.classList.add("f-filter-templates"),
                        $.isFeaturePresent(v.FeatureSet.TEMPLATE_CATEGORIES_REDESIGN) && (document.documentElement.classList.add("f-tc-redesign"),
                            document.documentElement.classList.add("f-tc-redesign-v4")),
                        n.startTimeParsing = 0,
                        $.chooseTemplateFiltersV2 && n.htmlClassList.add("f-filter-templates-v2"),
                        $.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_ON_MPR) && ((0,
                            b.doZetySkinsOnMPRModifications)(),
                            n.htmlClassList.add("f-zety-skins-in-mpr")),
                        n
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        Object.defineProperty(e, "prototype", {
                            writable: !1
                        }),
                        t && Z(e, t)
                }(t, e),
                    n = t,
                    (s = [{
                        key: "getSelectedFilter",
                        value: function (e) {
                            var t = (0,
                                b.GetClientSettingValue)(this.props.common.clientSettings, v.ClientSettings.SelectedCountry)
                                , n = $.portalExperiments.mprDSAPI
                                , a = $.getExperimentVariant(n) > 2;
                            return e || ($.isFeaturePresent(v.FeatureSet.TEMPLATE_FILTERS_CT) || $.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_FILTERS_CT) || a || $.isAddNewSkinLCA ? v.TemplateFilter.All : this.experienceLevel && !$.isZTY || $.mpintlCountryRowSelector && t || $.newOnBoardingFlowFR && (0,
                                b.getExperienceRange)() || $.isZTY && $.ZTYBaselineAllAndRecommendedAlternativeTabs ? v.TemplateFilter.Recommended : v.TemplateFilter.All)
                        }
                    }, {
                        key: "initializeComponent",
                        value: function () {
                            $.useRendererForCT || $.loadCTSkinCSS(),
                                (0,
                                    b.setPageSpecificClass)("choose-template"),
                                this.experienceLevel && document.documentElement.classList.add("f-experience-level"),
                                this.navigationPath = (0,
                                    f.GetNextBackUrl)(v.SCREEN.CHOOSE_TEMPLATE),
                                this.nextPageUrl = window.appendQueryString(this.navigationPath.nextPageUrl)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function () {
                            if ($.htmlSkinRendering) {
                                var e = 3 == $.getExperimentVariant($.portalExperiments.mprCTSortingAlgorithm) ? $.skins : this.state.skins;
                                this.setScalingFactor(e)
                            }
                        }
                    }, {
                        key: "inViewportCallback",
                        value: function (e, t) {
                            var n = e.dataset.skin
                                , a = e.querySelector(".skn-" + (null == n ? void 0 : n.toLowerCase()));
                            $.fireTemplateTaggingEvents && (a = e);
                            var o = (0,
                                b.getSkinNameFromClassList)(a)
                                , r = !this.skinTracked[o] && !this.skinTrackedINTL[o];
                            if ($.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_FILTERS_CT) && (r = !this.skinTracked[o + (e.dataset.photoSkin ? "-photo" : "")]),
                                r) {
                                var s;
                                $.fireTemplateTaggingEvents ? this.skinTrackedINTL[o] = !0 : $.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_FILTERS_CT) ? this.skinTracked[o + (e.dataset.photoSkin ? "-photo" : "")] = !0 : this.skinTracked[o] = !0;
                                var l = $.alternativeToTabsOnChooseTemplate || (0,
                                    b.isChooseTemplateAlternativeTabs)() || $.ZTYBaselineAllAndRecommendedAlternativeTabs || $.templateOrderFilter || $.compareTemplates ? this.findCategoryOfSkin(a) : (null === (s = this.state.selectedFilter) || void 0 === s ? void 0 : s.toLowerCase()) || ""
                                    , p = (0,
                                        b.findDisplayPosition)(a);
                                l === v.TemplateFilter.Favorite && (p = (0,
                                    b.findTemplateLastPostition)(o.toLowerCase()));
                                var i = {
                                    arrPhotoSkin: this.arrPhotoSkin,
                                    templateCategory: l,
                                    screenName: "choose template",
                                    displayPosition: p
                                }
                                    , m = this.state.selectedCountryCode;
                                $.isLCA && m && (i.ResumeTargetCountry = m),
                                    $.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_FILTERS_CT) && (i.isPhotoSkin = e.dataset.photoSkin),
                                    (0,
                                        C.trackSkinViewed)(o, t, i)
                            }
                        }
                    }, {
                        key: "componentDidMount",
                        value: function () {
                            var e, t = this, n = $.getExperimentVariant($.portalExperiments.mprOnboardingCollectBroadResumeIntent);
                            if (5 == $.getExperimentVariant($.portalExperiments.ztyPhotoToggleOption) && this.setState({
                                enablePhotoToggle: !1
                            }),
                                4 == n || 6 == n) {
                                var a = JSON.parse(localStorage.getItem(v.CONSTS.BROAD_RESUME_INTENT_DATA));
                                if (null == a || !a.intentPopupShown) {
                                    var o = (null == a ? void 0 : a.intentPopupCurrentStep) || this.state.broadIntentStep;
                                    this.setState({
                                        showBroadResumeIntentPopup: !0,
                                        broadIntentStep: o
                                    })
                                }
                            }
                            if (3 != n && 5 != n || document.documentElement.classList.remove("page-broad-intent"),
                                3 != $.getExperimentVariant($.portalExperiments.mprOnboarding20YoeDesktop) && 4 != $.getExperimentVariant($.portalExperiments.mprOnboarding20YoeDesktop) || sessionStorage.setItem(v.CONSTS.SHOW_STUDENT_PAGE, !1),
                                $.mprTemplatesOnZTY && ($.skins = $.skins.concat($.newSkins)),
                                $.CVPreviewUpdates && document.documentElement.classList.add("ctpage-sign-ppdt"),
                                5 == $.getExperimentVariant($.portalExperiments.mprUploadChooseTemplate)) {
                                var r = sessionStorage.getItem(v.CONSTS.UPLOAD_FILE_ON_RESUME_OPTION)
                                    , s = (0,
                                        b.getUploadedFileOnCT)();
                                !s && r || (!r && this.htmlClassList.remove("uploaded-imported-file"),
                                    s && this.htmlClassList.add("uploaded-imported-file"),
                                    this.showUploadOnChooseTemplate = !0),
                                    r && (sessionStorage.removeItem(v.CONSTS.UPLOAD_FILE_ON_RESUME_OPTION),
                                        this.hideUploadPopup(r))
                            }
                            $.isUploadFlow && this.htmlClassList.add("upload-flow-ver4"),
                                $.chooseTemplateNameAndSurname && this.setState({
                                    chooseTemplateFNLName: !0
                                }),
                                $.isVerticalProgressBarRWZ && this.htmlClassList.add("vertical-no-progressbar"),
                                $.optimalTemplateOrder && this.loadPreLoadFonts(),
                                $.skipChooseeTemplateINTL && this.htmlClassList.add("ct-skip-template"),
                                $.adaCtFocus && this.htmlClassList.add("ada-ct-focus"),
                                $.isTS && $.colorPickerUnderOpen && null !== (e = $.portalExperiments.changeTemplateFeature) && void 0 !== e && e.isBR && !$.addTopFiveSkinToRecom && (this.htmlClassList.add("f-change-template"),
                                    this.htmlClassList.add("ct-color-picker-test"),
                                    this.htmlClassList.add("color-picker-dropdown")),
                                $.templateFlowValue == v.SCREEN.CHOOSE_TEMPLATE && ($.useRendererForCT ? $.closePageLoader() : document.getElementsByClassName("page-wrapper")[0] && document.getElementsByClassName("page-wrapper")[0].classList.add("hide")),
                                $.templatePerRowChangeTest && (document.documentElement.classList.add("upload-flow-ver4"),
                                    document.documentElement.classList.add("ct-5-flow")),
                                $.skipChooseeTemplateINTL && !$.isCountrySA_AE_IN && this.setState({
                                    selectedFilter: v.TemplateFilter.All
                                }),
                                $.rowQ2Bundle && document.documentElement.classList.add("f-row-q2-bundle-test"),
                                this.skipTemplateTest(),
                                $.useRendererForCT && this.htmlClassList.add("e-renderer-ct"),
                                $.showChooseLaterPopup && "true" !== localStorage.getItem(v.CONSTS.IS_CALLED_FROM_FINALIZE) && (document.documentElement.classList.add("f-choose-template-choose-later"),
                                    $.isMPROrMPCL && (0,
                                        b.prefetchFiles)("".concat($.Paths.RWZAssetsDomain, "/blobimages/").concat($.portalCd, "/rwz/desktop/images/choose-later-updated-popup.png"))),
                                $.templateFlowValue && $.templateFlowValue == v.SCREEN.CHOOSE_TEMPLATE && !(0,
                                    b.getStorage)(v.CONSTS.SHOW_TNC_LINK) && (0,
                                        b.setStorage)(v.CONSTS.SHOW_TNC_LINK, v.SCREEN.SELECT_RESUME),
                                $.htmlSkinRendering && !$.useRendererForCT && this.setScalingFactor(this.state.skins),
                                3 == $.getExperimentVariant($.portalExperiments.mprCTSortingAlgorithm) && $.htmlSkinRendering && setTimeout((function () {
                                    t.setScalingFactor($.skins),
                                        t.forceUpdate()
                                }
                                ), 3e3),
                                $.chooseTemplateFirstLastName && (this.setState({
                                    isUpdatedChooseTempate: !0
                                }),
                                    document.documentElement.classList.add("color-picker-dropdown")),
                                $.templateFlowValue != v.SCREEN.CHOOSE_TEMPLATE && $.closePageLoader(),
                                window.hideHIWPage();
                            var l = $.getUserUId() ? 0 : 200
                                , p = setInterval((function () {
                                    if ($.UserClaims) {
                                        clearInterval(p);
                                        var e = null
                                            , n = null
                                            , a = null;
                                        $.isLCA && (e = t.state.selectedCountryCode),
                                            $.isJoshuaRedesign && (n = window.devicePixelRatio,
                                                a = parseInt(window.screen.width * window.devicePixelRatio),
                                                Number.isInteger(n) || (n = n.toFixed(2))),
                                            (0,
                                                C.trackBuilderUsagewithClickedOption)("viewed", null, "choose template", e, n, a),
                                            t.props.userActions.SaveUserStages($.getUserUId(), v.userStages.ChooseTemplate, $.PortalSettings.ConfigureProductCd, $.PortalSettings.ConfigurePortalCd)
                                    }
                                }
                                ), l);
                            if (document.title = $.Localization.mbe_Wizard_Choose_title + $.portalTitle,
                                ($.htmlSkinRendering || $.useRendererForCT) && (window.addEventListener("resize", this.setScalingFactorOnResize),
                                    window.addEventListener("scroll", this.setScalingFactorOnResize)),
                                $.isINTL && (0,
                                    b.prefetchFiles)($.imageOptimization ? $.Paths.ResourcePath + "images/NoImage.jpg" : $.Paths.BasePath + "/images/rwzv2/wlb/NoImage.jpg"),
                                $.isMPR && ((0,
                                    b.prefetchFiles)($.Paths.BasePath + "/images/rwzv2/wlb/jt/man-pc.svg", null, !0),
                                    (0,
                                        b.prefetchFiles)($.Paths.BasePath + "/images/rwzv2/wlb/jt/women-pc.svg", null, !0),
                                    (0,
                                        b.prefetchFiles)($.Paths.BasePath + "/images/rwzv2/wlb/jt/jobs.svg", null, !0)),
                                $.htmlSkinRendering && !$.useRendererForCT && this.setHtmlSkins().then((function () {
                                    ($.isFeaturePresent(v.FeatureSet.TEMPLATE_PAGE_FILTER) || $.isZTY) && t.bindViewPortWatcher()
                                }
                                )),
                                $.useRendererForCT && setTimeout((function () {
                                    (4 != n && 6 != n || !t.state.showBroadResumeIntentPopup) && t.bindViewPortWatcher()
                                }
                                ), 50),
                                $.alternativeToTabsOnChooseTemplate && this.htmlClassList.add("f-alternative-to-tabs"),
                                ((0,
                                    b.isChooseTemplateAlternativeTabs)() || $.ZTYBaselineAllAndRecommendedAlternativeTabs) && (0,
                                        b.getStorage)("skinCD") && setTimeout((function () {
                                            var e = (0,
                                                b.getStorage)("skinCD");
                                            if (e) {
                                                var t = document.querySelector("[data-skinid=" + e + "]");
                                                t && t.scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "center"
                                                })
                                            }
                                        }
                                        ), 100),
                                (0,
                                    b.isChooseTemplateAlternativeTabs)() && this.htmlClassList.add("f-alternative-to-tabs"),
                                $.ZTYBaselineAllAndRecommendedAlternativeTabs && this.htmlClassList.add("f-alternative-to-tabs"),
                                $.getExperimentVariant($.portalExperiments.lcaShowSocialProofNudgeOnTemplate) > 2) {
                                var i = $.getExperimentVariant($.portalExperiments.lcaShowSocialProofNudgeOnTemplate);
                                this.state.selectedFilter.toLowerCase() == v.TemplateFilter.Recommended.toLowerCase() && (3 == i && this.htmlClassList.add("e-show-social-proof-nudge-p"),
                                    4 == i && this.htmlClassList.add("e-show-social-proof-nudge-piw"))
                            }
                            if ($.getExperimentVariant($.portalExperiments.lcaRdusChangeLandingPageFlow) > 2) {
                                var m = document.getElementById("template-page-loader");
                                m && !m.classList.contains("hide") && m.classList.add("hide")
                            }
                            if ($.onboardingExpLevelModalUI && this.htmlClassList.add("f-onboarding-explevel-modal-ui"),
                                $.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_FILTERS_CT) && !$.useSkinEngineCT) {
                                var c = $.getExperimentVariant($.portalExperiments.ztyPhotoToggleOption);
                                if (($.mprTemplatesOnZTY || c < 3) && (0,
                                    b.updateSkinsOrder)(),
                                    3 == $.getExperimentVariant($.portalExperiments.realPhotosChooseTemplate)) {
                                    var d = (0,
                                        b.getMappedCountryCodeIfNotPresentForHeadshotExp)($.countryDetails.countryCode, "RH");
                                    $.skins = (0,
                                        b.changeSkinsOrderCountrywise)($.skins, d)
                                }
                                !$.mprTemplatesOnZTY && c > 2 && (0,
                                    b.updateSkinsOrderforToggleOption)(),
                                    this.setState({
                                        skins: $.skins
                                    })
                            }
                            $.favTemplatesV4 && document.documentElement.classList.remove("f-change-template")
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            if ($.getExperimentVariant($.portalExperiments.lcaShowSocialProofNudgeOnTemplate) > 2 && (this.htmlClassList.remove("e-show-social-proof-nudge-p"),
                                this.htmlClassList.remove("e-show-social-proof-nudge-piw")),
                                $.getExperimentVariant($.portalExperiments.mprTemplateShopping) > 2) {
                                var e = $.getExperimentVariant($.portalExperiments.mprTemplateShopping);
                                this.htmlClassList.remove("e-ct-shopping"),
                                    this.htmlClassList.remove("e-ct-shopping-v".concat(e)),
                                    document.body.classList.remove("template-shopping-page")
                            }
                            var t = $.getExperimentVariant($.portalExperiments.mprChooseTemplateShoppingV2);
                            t > 2 && (this.htmlClassList.remove("e-ct-shopping"),
                                this.htmlClassList.remove("e-ct-v2-shopping"),
                                this.htmlClassList.remove("e-ct-v2-shopping-v".concat(t)),
                                document.body.classList.remove("template-shopping-page"));
                            var n = $.getExperimentVariant($.portalExperiments.ztyPhotoToggleOption);
                            if (n > 2 && (this.htmlClassList.remove("e-photo-toggle-option"),
                                this.htmlClassList.remove("e-photo-toggle-option-v".concat(n))),
                                $.filterSticky && document.body.classList.remove("e-ct-filter-sticky"),
                                $.chooseTmplatsFilter && this.htmlClassList.remove("f-filter-ct"),
                                $.doShowMoreButton && (this.htmlClassList.remove("skip-choose-template-improvements"),
                                    this.htmlClassList.remove("upload-flow-ver4")),
                                $.isFeaturePresent(v.FeatureSet.TEMPLATE_CATEGORIES_REDESIGN) && (this.htmlClassList.remove("f-tc-redesign"),
                                    this.htmlClassList.remove("f-tc-redesign-v4")),
                                !$.alternativeToTabsOnChooseTemplate || $.filterTabsAlternative || $.favoriteTemplate || this.htmlClassList.remove("f-alternative-to-tabs"),
                                $.templatePerRowChangeTest && (this.htmlClassList.remove("upload-flow-ver4"),
                                    this.htmlClassList.remove("ct-5-flow")),
                                this.htmlClassList.remove("f-choose-template-v2"),
                                $.templateFlowValue = null,
                                $.chooseTemplatePhotoToggle = !1,
                                $.ctTriStatePhotoToggle = !1,
                                (0,
                                    b.setPageSpecificClass)("choose-template", !0),
                                document.body.classList.remove("ReactModal__Body--open"),
                                $.useRendererForCT && this.htmlClassList.remove("e-renderer-ct"),
                                this.experienceLevel && document.documentElement.classList.remove("f-experience-level"),
                                $.chooseTemplateFiltersV2 && this.htmlClassList.remove("f-filter-templates-v2"),
                                ($.htmlSkinRendering || $.useRendererForCT) && (window.removeEventListener("resize", this.setScalingFactorOnResize),
                                    window.removeEventListener("scroll", this.setScalingFactorOnResize)),
                                $.adaCtFocus && this.htmlClassList.remove("ada-ct-focus"),
                                (0,
                                    b.isChooseTemplateAlternativeTabs)() && this.htmlClassList.remove("f-alternative-to-tabs"),
                                $.ZTYBaselineAllAndRecommendedAlternativeTabs && this.htmlClassList.remove("f-alternative-to-tabs"),
                                $.CVPreviewUpdates && document.documentElement.classList.remove("ctpage-sign-ppdt"),
                                $.rowQ2Bundle && document.documentElement.classList.remove("f-row-q2-bundle-test"),
                                $.isVerticalProgressBarRWZ && (5 == $.getExperimentVariant($.portalExperiments.mprUploadChooseTemplate) || $.isImportFlow || $.isATSFlow) && this.htmlClassList.remove("vertical-no-progressbar"),
                                $.sideBarFilters && this.htmlClassList.remove("f-filter-templates"),
                                ($.showChooseLaterPopup || $.showChooseLaterTooltip) && document.documentElement.classList.remove("f-choose-template-choose-later"),
                                $.onboardingExpLevelModalUI && this.htmlClassList.remove("f-onboarding-explevel-modal-ui"),
                                $.isATSFlow && (0,
                                    b.setFlowOptimizationsLocalization)(),
                                $.comparatorSlider) {
                                var a = (0,
                                    b.getStorage)(v.CONSTS.FAVORITE_SKINS_SKINCD);
                                a = a ? JSON.parse(a) : [];
                                var o = $.getExperimentVariant($.portalExperiments.compareTemplateOnFunnel);
                                3 == o && a.length > 0 && ($.comparatorOnFinalize = !0,
                                    $.comparatorDocumentChanges = !0),
                                    4 == o && a.length > 1 && ($.comparatorOnFinalize = !0,
                                        $.comparatorDocumentChanges = !0)
                            }
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this
                                , t = null
                                , n = $.Localization.resumeLookLike_Text_html
                                , a = $.Localization.scrolToView_Text;
                            this.experienceLevel && !$.isFR && (a = t = this.getSubHeadingExprLevelTemplates());
                            var s = r.default.createElement("div", {
                                className: "page-title-wrap"
                            }, r.default.createElement("h1", {
                                className: "page-title",
                                dangerouslySetInnerHTML: {
                                    __html: n
                                }
                            }), r.default.createElement("p", {
                                className: "sub-title",
                                id: "subheadCT",
                                dangerouslySetInnerHTML: {
                                    __html: a
                                }
                            }))
                                , l = {
                                    isStudentSectionReorder: this.isStudentSectionReorder,
                                    localizationData: $.localizationResumeRenderer,
                                    skipRerender: !0,
                                    sectionDynamicPrefrences: $.sectionDynamicPrefrences
                                }
                                , p = this.props.templateRandomization
                                , i = null
                                , m = !1
                                , c = []
                                , d = !1;
                            if ($.isFeaturePresent(v.FeatureSet.TEMPLATE_PAGE_FILTER) || $.mpintlCountryRowSelector || $.ZTYBaselineAllAndRecommendedAlternativeTabs) {
                                var f, x;
                                if (i = $.useSkinEngineCT ? {
                                    recommendedSkins: $.skins.filter((function (e) {
                                        return 1 == e.isRecommended
                                    }
                                    )),
                                    selectedTemplates: [],
                                    heading: (0,
                                        b.setRecommendedHeaderChooseTemplate)(this.experienceLevel, te)
                                } : $.mprTemplatesOnZTY ? {
                                    recommendedSkins: (0,
                                        b.updateRecommendedSkins)(),
                                    selectedTemplates: [],
                                    heading: (0,
                                        b.setRecommendedHeaderChooseTemplate)(this.experienceLevel, te)
                                } : ne(this.state.selectedFilter, this.experienceLevel, this.state.selectedCountryCode, this.experienceRange),
                                    this.state.isExprLvlFilter && (i = ne(v.TemplateFilter.Recommended, this.state.selectedFilter, this.state.selectedCountryCode, this.state.selectedFilter, !0)),
                                    3 == $.getExperimentVariant($.portalExperiments.mprCTSortingAlgorithm)) {
                                    var T, C = i.recommendedSkins, y = JSON.parse(sessionStorage.getItem("randomizationAlgoData")) || {};
                                    if (y && null !== (T = y[this.experienceLevel]) && void 0 !== T && T.length)
                                        this.allRandomisedSkins = (0,
                                            b.getAdjustedSkinsForRandomizationExp)(i.recommendedSkins, y[this.experienceLevel]),
                                            i.recommendedSkins = y[this.experienceLevel],
                                            this.recommendedAfterRandomised = y[this.experienceLevel];
                                    else {
                                        var E = [].concat(D(i.recommendedSkins), ["MLA8", "MLA9", "MLX1", "MLX2", "MLX3", "MLX4"])
                                            , w = (0,
                                                o.default)(E).slice(0, 6);
                                        this.allRandomisedSkins = (0,
                                            b.getAdjustedSkinsForRandomizationExp)(i.recommendedSkins, w),
                                            i.recommendedSkins = w,
                                            this.recommendedAfterRandomised = w,
                                            y[this.experienceLevel] = w
                                    }
                                    y.recommendedBeforeRandomisation = C,
                                        y.skinCds = this.allRandomisedSkins.map((function (e) {
                                            return e.id
                                        }
                                        )),
                                        sessionStorage.setItem("randomizationAlgoData", JSON.stringify(y)),
                                        (0,
                                            b.updateRDLSkins)(this.allRandomisedSkins),
                                        (0,
                                            b.updateSkinDataForTemplateShopping)()
                                }
                                var L = $.portalExperiments.mprDSAPI;
                                if ($.getExperimentVariant(L) > 2 && i.selectedOrder.toLowerCase() != v.TemplateFilter.All.toLowerCase() && $.skinReorderingData && $.skinReorderingData[i.selectedOrder.toLowerCase()]) {
                                    var _ = 0;
                                    for (var O in i.selectedTemplates = [],
                                        $.skinReorderingData[i.selectedOrder.toLowerCase()])
                                        i.selectedTemplates.splice(_, 0, $.skinReorderingData[i.selectedOrder.toLowerCase()][O]),
                                            _++
                                }
                                if ((null === (f = i) || void 0 === f || null === (x = f.selectedOrder) || void 0 === x ? void 0 : x.toLowerCase()) != v.TemplateFilter.Recommended.toLowerCase() && (p = {
                                    order: "",
                                    showTemplateRandomization: !1
                                }),
                                    $.getExperimentVariant($.portalExperiments.mprChooseTemplateUpdates) > 3) {
                                    var N = localStorage.getItem("savedTemplates");
                                    N && i.selectedTemplates.length > 0 && (i = JSON.parse(JSON.stringify(i)),
                                        (N = JSON.parse(N)).forEach((function (e) {
                                            "object" == R(i.selectedTemplates[0]) ? i.selectedTemplates.sort((function (t, n) {
                                                var a = 0;
                                                return t.skinCd == e ? a = -1 : n.skinCd == e && (a = 1),
                                                    a
                                            }
                                            )) : i.selectedTemplates.sort((function (t, n) {
                                                var a = 0;
                                                return t == e ? a = -1 : n == e && (a = 1),
                                                    a
                                            }
                                            ))
                                        }
                                        )))
                                }
                                if ($.isFeaturePresent(v.FeatureSet.TEMPLATE_FILTERS_CT) || $.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_FILTERS_CT)) {
                                    var F, A = $.getExperimentVariant($.portalExperiments.ztyPhotoToggleOption);
                                    if ((null === (F = Object.keys(this.state.selectedCTFilters)) || void 0 === F ? void 0 : F.length) > 0 || A) {
                                        var z, I, V, U, M, B = [];
                                        if ($.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_FILTERS_CT))
                                            this.state.skins.map((function (t) {
                                                var n, a = 0;
                                                null === (n = Object.keys(e.state.selectedCTFilters)) || void 0 === n || n.forEach((function (n) {
                                                    if ("columns" == n) {
                                                        var o, r = null === (o = $.useSkinEngineCT ? $.skins : $.skinsFilterCriteria) || void 0 === o ? void 0 : o.find((function (e) {
                                                            return e.skinCD == t.skinCD
                                                        }
                                                        ));
                                                        (isNaN(Number(r[n])) ? r[n] : Number(r[n])) == e.state.selectedCTFilters[n] && (a += 1)
                                                    } else
                                                        ("1" == e.state.selectedCTFilters[n] && t.isPhoto || "0" == e.state.selectedCTFilters[n] && !t.isPhoto) && (a += 1)
                                                }
                                                )),
                                                    a === Object.keys(e.state.selectedCTFilters).length && (c.push(t),
                                                        m = !0)
                                            }
                                            ));
                                        else if (null === (M = $.skinsFilterCriteria) || void 0 === M || M.map((function (t) {
                                            var n, a = 0;
                                            null === (n = Object.keys(e.state.selectedCTFilters)) || void 0 === n || n.forEach((function (n) {
                                                var o = isNaN(Number(t[n])) ? t[n] : Number(t[n]);
                                                $.isFeaturePresent(v.FeatureSet.TEMPLATES_WITH_ICONS_MONOGRAMS) && n == v.ChooseTemplateFilter.GRAPHICS ? e.state.selectedCTFilters[n].includes(o) && (a += 1) : o == e.state.selectedCTFilters[n] && (a += 1),
                                                    a === Object.keys(e.state.selectedCTFilters).length && B.push(t.skinCD.toUpperCase())
                                            }
                                            ))
                                        }
                                        )),
                                            B.length > 0)
                                            if (i.selectedOrder == v.TemplateFilter.All) {
                                                m = !0;
                                                var H = 3 == $.getExperimentVariant($.portalExperiments.mprCTSortingAlgorithm) ? this.allRandomisedSkins : this.state.skins;
                                                c = H.filter((function (e) {
                                                    return B.includes(e.skinCD)
                                                }
                                                ))
                                            } else
                                                i.selectedTemplates = i.selectedTemplates.filter((function (e) {
                                                    return B.includes(e.toUpperCase())
                                                }
                                                ));
                                        0 == (null === (z = c) || void 0 === z ? void 0 : z.length) && 0 == (null === (I = i.selectedTemplates) || void 0 === I ? void 0 : I.length) && (d = !0),
                                            3 == A && (null === (V = Object.keys(this.state.selectedCTFilters)) || void 0 === V ? void 0 : V.length) < 1 && (c = this.state.enablePhotoToggle ? $.skins : $.skins.filter((function (e) {
                                                return 0 == e.isPhoto
                                            }
                                            ))),
                                            A > 3 && (null === (U = Object.keys(this.state.selectedCTFilters)) || void 0 === U ? void 0 : U.length) < 1 && (c = this.state.enablePhotoToggle ? $.skins.filter((function (e) {
                                                return 1 == e.isPhoto
                                            }
                                            )) : $.skins.filter((function (e) {
                                                return 0 == e.isPhoto
                                            }
                                            )))
                                    }
                                }
                            }
                            var j, G, W = null;
                            $.isZTY && $.chooseTemplateOptimization && (j = this.experienceLevel,
                                G = !1,
                                $.recommendedActions && $.recommendedActions.PersonalizedSubheading && (G = null != (0,
                                    b.getRecommendedAction)($.recommendedActions.PersonalizedSubheading, v.SCREEN_NAME.ChooseTemplate)),
                                W = G ? $.isNoExperienceTab ? j == v.experienceLevel.student ? $.Localization.choose_best_templates_students : j == v.experienceLevel.zeroToThreeYears ? $.Localization.LessThan3YearsHeading : j == v.experienceLevel.ZeroYear ? j == v.experienceLevel.student ? $.Localization.choose_best_templates_students : $.Localization.zeroYearExprHeading : j == v.experienceLevel.student ? $.Localization.choose_best_templates_students : $.Localization.choose_best_templates_nonStudents.replace("{0}", j) : j == v.experienceLevel.student ? $.Localization.choose_best_templates_students : $.Localization.choose_best_templates_nonStudents.replace("{0}", j) : $.isNoExperienceTab ? j == v.experienceLevel.student ? $.Localization.choose_best_templates_students : j == v.experienceLevel.zeroToThreeYears ? $.Localization.LessThan3YearsHeading : j == v.experienceLevel.ZeroYear ? $.Localization.zeroYearExprHeading : j == v.experienceLevel.student ? $.Localization.choose_best_templates_students : $.Localization.choose_best_templates_nonStudents.replace("{0}", j.toLowerCase()) : "student" == j ? v.TemplateFilterHeading.Recommended + "<strong>students</strong>" : v.TemplateFilterHeading.Recommended + "<strong>" + j.toLowerCase() + " of experience</strong>");
                            var q = $.getExperimentVariant($.portalExperiments.mprTemplateShopping)
                                , Y = $.getExperimentVariant($.portalExperiments.mprChooseTemplateShoppingV2)
                                , Z = $.getExperimentVariant($.portalExperiments.mprOnboardingCollectBroadResumeIntent);
                            return r.default.createElement(r.default.Fragment, null, $.isINTL || $.useChooseTemplateINTL ? r.default.createElement(g.default, {
                                wrappedComponentRef: function (t) {
                                    return t && e.assignRef("chooseTemplateINTL", t.getWrappedInstance())
                                },
                                Localization: v.CHOOSETEMPLATE_LOCALIZATION,
                                skins: this.state.skins,
                                headingJSX: s,
                                defaultDocument: k.default.Document,
                                skinColor: this.props.skinColor,
                                document: this.props.document,
                                colors: $.Localization.ColorSelectorList || [],
                                createDocumentWithTemplate: this.createDocumentWithTemplate,
                                getDocStyleValue: b.GetDocStyleValue,
                                trackEvents: $.TrackEvents,
                                closePreviewModelOnBodyClick: !0,
                                showColorSelector: this.showColorSelector,
                                templatePageFilter: i,
                                onFilterClick: this.onFilterClick,
                                experienceLevel: this.experienceLevel,
                                subHeadingForExprPersonalization: t,
                                showAllTemplates: this.showAllTemplates,
                                mpfrMultivariantChooseTemplate: this.mpfrMultivariantChooseTemplate,
                                bindViewPortWatcher: this.bindViewPortWatcher,
                                resetFilters: this.resetFilters,
                                selectedSideFilters: this.state.selectedSideFilters,
                                selectedCountryCode: this.state.selectedCountryCode,
                                indexOptimalTemplateTestV2: this.state.indexOptimalTemplateTestV2,
                                rowCanadaBuilder: this.state.rowCanadaBuilder,
                                isTemplateSkipped: this.props.isTemplateSkipped,
                                isUpdatedChooseTempate: this.state.isUpdatedChooseTempate,
                                tabsAlternative: this.state.tabsAlternative,
                                colorsDrop: $.extendedColorList || X.ColorPickerDropDownIntl[$.portalCd.toLowerCase()] || [],
                                skipChooseTemplateVar: this.state.skipChooseTemplateVar,
                                isUploadOrStandardFlow: (0,
                                    b.GetClientSettingValue)(this.props.common.clientSettings, v.ClientSettings.NewUploadFlow),
                                scaleSkinsSVGWidthHeight: this.scaleSkinsSVGWidthHeight,
                                popularChoiceSubHeading: this.props.popularChoiceSubHeading,
                                useSignature: $.CVPreviewUpdates,
                                setCarousalDetails: this.setCarousalDetails,
                                modifySubHeader: this.modifySubHeader,
                                modifyExpLevelCTAOnCT: this.modifyExpLevelCTAOnCT,
                                trackAnimatedCTAClickOnCT: this.trackAnimatedCTAClickOnCT,
                                chooseTemplateFNLName: this.state.chooseTemplateFNLName,
                                setScalingFactor: this.setScalingFactor
                            }) : r.default.createElement(r.default.Fragment, null, this.showUploadOnChooseTemplate && this.state.showUploadPopup && r.default.createElement(S.default, {
                                isOpen: !0,
                                hideCloseButton: $.showFloatingRegister,
                                cssClass: {
                                    portalClassName: "modal-backdrop modal-backdrop-upload",
                                    modalDialog: "modal-dialog-common modal-upload"
                                },
                                isHeaderIcon: !1,
                                hasHeader: !0,
                                closeModal: function () {
                                    return e.handelResumeUploadOnCT(!1)
                                },
                                hasFooter: !1
                            }, r.default.createElement(u.default, {
                                isPopup: !0,
                                hideFooter: !0,
                                showCancelBtn: !0,
                                hideBackButton: !0,
                                hideCloseIcon: !0,
                                toggleUploadResumePopup: !0,
                                showPopup: !0,
                                uploadChooseTemplateVar: $.getExperimentVariant($.portalExperiments.mprUploadChooseTemplate),
                                showUploadOnChooseTemplate: this.showUploadOnChooseTemplate,
                                handelResumeUploadOnCT: this.handelResumeUploadOnCT,
                                setuploadedFileNameOnCT: this.setuploadedFileNameOnCT,
                                uploadedFileNameOnCT: this.state.uploadedFileNameOnCT,
                                setDocumentCreated: this.setDocumentCreated,
                                setLoaderOnParsingResume: this.setLoaderOnParsingResume,
                                showLoaderOnParsingResume: this.state.showLoaderOnParsingResume,
                                chooseTemplatePageState: this.state.chooseTemplatePageState,
                                setProgressBarOnCT: this.setProgressBarOnCT,
                                setProgressBarPercentageOnCT: this.setProgressBarPercentageOnCT,
                                calculateProgressBarPercentage: this.calculateProgressBarPercentage,
                                hideUploadPopup: this.showUploadOnChooseTemplate ? this.hideUploadPopup : "",
                                progressBarPercentageOnCT: this.state.progressBarPercentageOnCT,
                                setParsingErrorMessage: this.setParsingErrorMessage
                            })), this.state.showChooseLaterPopup && r.default.createElement(P.default, {
                                onCloseClick: this.handleChooseLaterPopupClose,
                                onSkipForNowClick: this.chooseLaterClicked,
                                onChooseTemplateClick: this.handleChooseLaterPopupClose
                            }), r.default.createElement(h.default, {
                                document: this.props.document,
                                history: this.props.history,
                                showNameColorPanel: !0,
                                skins: m ? c : 3 == $.getExperimentVariant($.portalExperiments.mprCTSortingAlgorithm) && this.allRandomisedSkins.length ? this.allRandomisedSkins : this.state.skins,
                                experienceLevel: this.experienceLevel,
                                subHeadingForExprPersonalization: t,
                                selectedCountryCode: this.state.selectedCountryCode,
                                scaleSkinsSVGWidthHeight: this.scaleSkinsSVGWidthHeight,
                                createDocumentWithTemplate: this.createDocumentWithTemplate,
                                getDocStyleValue: b.GetDocStyleValue,
                                trackEvents: $.TrackEvents,
                                headingZTY: W,
                                userRole: $.UserClaims && $.UserClaims.role,
                                showAllTemplates: this.showAllTemplates,
                                previewTemplates: this.previewTemplates,
                                dynamicContent: l,
                                isHtmlSkinRendering: $.htmlSkinRendering,
                                templateRandomization: p,
                                templatePageFilter: i,
                                onFilterClick: this.onFilterClick,
                                onBasicClick: this.onBasicClick,
                                onPremiumClick: this.onPremiumClick,
                                isBasicSelected: this.state.isBasicSelected,
                                isPremiumSelected: this.state.isPremiumSelected,
                                commonActions: this.props.commonActions,
                                onCountryChange: function (t) {
                                    e.onCountryChange(t)
                                },
                                IsPremium: this.props.IsPremium,
                                chooseLaterClicked: $.showChooseLaterPopup ? this.handleChooseLaterPopupOpen : this.chooseLaterClicked,
                                hideChooseLaterBtn: $.hideChooseLaterBtn,
                                showChooseLaterTooltip: $.showChooseLaterTooltip,
                                useRendererForCT: $.useRendererForCT,
                                selectedTheme: this.selectedTheme,
                                colorPickerDropDown: $.isNewColorPickerPalette,
                                popularChoiceSubHeading: this.props.popularChoiceSubHeading,
                                isAddNewSkinLCA: $.isAddNewSkinLCA,
                                showHeadshotTemplates: this.state.showHeadshotTemplates,
                                toggleShowHeadshotTemplates: this.toggleShowHeadshotTemplates,
                                saveTemplate: this.saveTemplate,
                                goToOnboardingPage: this.goToOnboardingPage,
                                showUploadOnChooseTemplate: this.showUploadOnChooseTemplate,
                                handelResumeUploadOnCT: this.handelResumeUploadOnCT,
                                showUploadPopup: this.state.showUploadPopup,
                                uploadedFileNameOnCT: this.state.uploadedFileNameOnCT,
                                isClearImport: this.state.isClearImport,
                                handleClearImport: this.handleClearImport,
                                isUploadBannerOnCT: this.isUploadBannerOnCT,
                                useActualResumeContent: this.state.useActualResumeContent,
                                toggleActualResumeContent: this.toggleActualResumeContent,
                                progressBarPercentageOnCT: this.state.progressBarPercentageOnCT,
                                uploadChooseTemplateVar: $.getExperimentVariant($.portalExperiments.mprUploadChooseTemplate),
                                showLoaderOnParsingResume: this.state.showLoaderOnParsingResume,
                                showProgressBarOnCT: this.state.showProgressBarOnCT,
                                chooseTemplateAlternativeTabs: (0,
                                    b.isChooseTemplateAlternativeTabs)(),
                                selectedFilter: this.state.selectedFilter,
                                isSocialNudges: $.isSocialNudges,
                                onSkinColorChange: this.onSkinColorChange,
                                replaceIdAttr: $.replaceIdAttributeFromSkins,
                                templateCategoriesRedesign: $.isFeaturePresent(v.FeatureSet.TEMPLATE_CATEGORIES_REDESIGN),
                                showTemplateFiltersVar: $.isFeaturePresent(v.FeatureSet.TEMPLATE_FILTERS_CT),
                                Common: this.props.common,
                                setTemplateFilters: this.setTemplateFilters,
                                sideTemplateFilters: this.state.selectedCTFilters,
                                resetSidebarFilter: this.state.resetSidebarFilter,
                                resetTemplateFilters: this.resetTemplateFilters,
                                showNoTemplatesFound: d,
                                addToComparison: this.addToComparison,
                                deleteFromCompare: this.deleteFromCompare,
                                resetComparedTemplate: this.resetComparedTemplate,
                                comparedSkinsCD: this.state.favoriteSkinCD,
                                comparedSkins: this.state.favoriteSkinsArr,
                                favoriteSkinThemes: this.state.favoriteSkinThemes,
                                showParsingErrorMessage: this.state.showParsingErrorMessage,
                                updateShowComparisonBladeInParent: this.updateShowComparisonBladeInParent,
                                updateTemplatesOnPhotoToggle: this.updateTemplatesOnPhotoToggle,
                                updateFiltersOnPhotoToggle: this.updateFiltersOnPhotoToggle,
                                enablePhotoToggle: this.state.enablePhotoToggle,
                                updateFilterTemplates: this.state.updateFilterTemplates,
                                showTemplateFiltersOnCT: $.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_FILTERS_CT),
                                templateShoppingVar: q,
                                ctShoppingV2Var: Y,
                                isComparisonBladeOn: this.state.isComparisonBladeOn,
                                trackSkinViewedFromModal: this.trackSkinViewedFromModal,
                                experienceRange: this.props.experienceRange,
                                showRecommendedBadgeOnPhotoTemplates: $.getExperimentVariant($.portalExperiments.realPhotosChooseTemplate) > 2,
                                useSkinEngineCT: $.useSkinEngineCT,
                                changeNewMprTemplateImage: this.changeNewMprTemplateImage,
                                personalizeBuilder20PlusYOEVar: this.personalizeBuilder20PlusYOEVar,
                                renderProtip: this.renderProtip,
                                setUpdatedTheme: this.setUpdatedTheme
                            }), (4 == Z || 6 == Z) && this.state.showBroadResumeIntentPopup && r.default.createElement(S.default, {
                                isOpen: !0,
                                hideCloseButton: !1,
                                cssClass: {
                                    portalClassName: "modal-backdrop",
                                    modalDialog: "modal-dialog-common modal-broad-resume"
                                },
                                isHeaderIcon: !1,
                                hasHeader: !0,
                                closeModal: this.closeIntentPopup,
                                hasFooter: !1
                            }, this.renderStepWiseBroadIntentComponent())))
                        }
                    }]) && G(n.prototype, s),
                    l && G(n, l),
                    Object.defineProperty(n, "prototype", {
                        writable: !1
                    }),
                    n;
                var n, s, l
            }(r.default.Component);
        function te(e) {
            return $.isJoshuaThemeWLB && $.isLCA && e == $.getResourceValue("tenPlusYears_lbl", "tenPlusYears_txt") && (e = "10<span>+</span> Years"),
                e
        }
        function ne(e, t, n, a, o) {
            var r, s = ["Cascade", "Concept", "Crisp", "Diamond", "Cubic"], l = [], p = "", i = [], m = sessionStorage.getItem(v.CONSTS.RECOMMENDED_SKINS_FEEDBACKCODE), c = sessionStorage.getItem(m);
            if (c) {
                var d = JSON.parse(c);
                if (d) {
                    var g = d.skins;
                    g = g.sort((function (e, t) {
                        return g.indexOf(e.classificationRank) - g.indexOf(t.classificationRank)
                    }
                    ));
                    for (var u = 0; u < g.length; u++)
                        i[u] = g[u].skinCD
                }
                i.length > 0 ? Q || (Q = !0) : (t == v.experienceLevel.student && window.RDL.useScreenBasedRecommendation && 0 == i.length && !Q && (Q = !0),
                    i = (0,
                        b.getSkinData)(t, a).recommended)
            } else
                t == v.experienceLevel.student && window.RDL.useScreenBasedRecommendation && !Q && (Q = !0),
                    i = (0,
                        b.getSkinData)(t, a).recommended;
            var h = o ? (0,
                b.getSkinData)(t) : (0,
                    b.getSkinData)();
            switch (e) {
                case v.TemplateFilter.All:
                    var k;
                    if (p = v.TemplateFilterHeading.All,
                        l = null !== (r = $.templatesOrderForFilter) && void 0 !== r && r.All ? $.templatesOrderForFilter.All : [],
                        $.getExperimentVariant($.portalExperiments.mprChooseTemplateUpdates) > 3)
                        l = null === (k = h.all) || void 0 === k ? void 0 : k.map((function (e) {
                            return e.id
                        }
                        ));
                    $.ZTYBaselineAllAndRecommendedAlternativeTabs && !$.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_FILTERS_CT) && (h.recommended = (0,
                        b.extracTemplatesByValMatch)($.skins, s)),
                        !$.mprTemplatesOnZTY && $.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_FILTERS_CT) && $.getExperimentVariant($.portalExperiments.ztyPhotoToggleOption) < 3 && (p = (0,
                            b.setRecommendedHeaderChooseTemplate)(t, te),
                            (0,
                                b.updateRecommendedSkins)()),
                        $.isFeaturePresent(v.FeatureSet.ZTY_TEMPLATE_FILTERS_CT) && $.getExperimentVariant($.portalExperiments.ztyPhotoToggleOption) > 2 && (p = (0,
                            b.setRecommendedHeaderChooseTemplate)(t, te));
                    break;
                case v.TemplateFilter.Creative:
                    p = v.TemplateFilterHeading.Creative,
                        l = h.creative;
                    break;
                case v.TemplateFilter.Traditional:
                    p = v.TemplateFilterHeading.Traditional,
                        l = h.traditional;
                    break;
                case v.TemplateFilter.Modern:
                    p = v.TemplateFilterHeading.Modern,
                        l = h.modern;
                    break;
                case v.TemplateFilter.Recommended:
                case v.experienceLevel.ZeroYear:
                case v.experienceLevel.zeroToThreeYears:
                case v.experienceLevel.threeToFiveYears:
                case v.experienceLevel.fiveToTenYears:
                case v.experienceLevel.tenPlusYears:
                    if ($.mpintlCountryRowSelector)
                        l = h.recommended;
                    else {
                        var f = !1;
                        if ($.recommendedActions && $.recommendedActions.PersonalizedSubheading && (f = null != (0,
                            b.getRecommendedAction)($.recommendedActions.PersonalizedSubheading, v.SCREEN_NAME.ChooseTemplate)),
                            f ? $.isNoExperienceTab ? t == v.experienceLevel.student ? p = $.Localization.choose_best_templates_students : t == v.experienceLevel.zeroToThreeYears ? p = $.Localization.LessThan3YearsHeading : t == v.experienceLevel.ZeroYear ? p = t == v.experienceLevel.student ? $.Localization.choose_best_templates_students : $.Localization.zeroYearExprHeading : (p = t == v.experienceLevel.student ? $.Localization.choose_best_templates_students : $.Localization.choose_best_templates_nonStudents.replace("{0}", te(t)),
                                !t && $.ZTYBaselineAllAndRecommendedAlternativeTabs && (p = $.Localization.template_recommneded_header_text)) : p = t == v.experienceLevel.student ? $.Localization.choose_best_templates_students : $.Localization.choose_best_templates_nonStudents.replace("{0}", t) : p = $.isNoExperienceTab ? (0,
                                    b.setRecommendedHeaderChooseTemplate)(t, te) : "student" == t ? v.TemplateFilterHeading.Recommended + "<strong>students</strong>" : v.TemplateFilterHeading.Recommended + "<strong>" + t.toLowerCase() + " of experience</strong>",
                            l = !$.rowLocalization || a == v.experienceLevel.ZeroYear && !$.isZTY && $.isFeaturePresent(v.FeatureSet.ZERO_YOE_ONBOARD_ROW) ? Object.assign([], i) : h.recommended,
                            $.getExperimentVariant($.portalExperiments.randomizationDummyEntry) > 2) {
                            var x = JSON.parse(localStorage.getItem(v.CONSTS.TEMPLATE_RANDOM_ORDER));
                            x ? l = JSON.parse(JSON.stringify(x)) : (l = (0,
                                b.shuffleArray)(l),
                                localStorage.setItem(v.CONSTS.TEMPLATE_RANDOM_ORDER, JSON.stringify(l)))
                        }
                        $.ZTYBaselineAllAndRecommendedAlternativeTabs && (h.recommended = (0,
                            b.extracTemplatesByValMatch)($.skins, s)),
                            $.isFeaturePresent(v.FeatureSet.TEMPLATE_FILTERS_CT) && ((0,
                                b.isCountryUS)() || (0,
                                    b.isCountryAU)() || (0,
                                        b.isCountryCA)() || (0,
                                            b.isCountryNZ)()) && (l = (0,
                                                b.addHeadshotRecommenededSkins)(l, t))
                    }
                    break;
                case v.TemplateFilter.Classic:
                    p = v.TemplateFilterHeading.Classic,
                        l = h.classic;
                    break;
                case v.TemplateFilter.Simple:
                    p = v.TemplateFilterHeading.Simple,
                        l = h.simple;
                    break;
                case v.TemplateFilter.Industry:
                    p = v.TemplateFilterHeading.Industry,
                        l = h.industry
            }
            return $.compareTemplates && (p = $.Localization.compare_heading),
                $.getExperimentVariant($.portalExperiments.mprPersonalizeBuilderFor20PluseYoeV2) > 2 && ("20+ Years" === (0,
                    b.getExperienceLevel)() ? p = $.Localization.template_heading_20_pluseEOY : "10+ Years" == (0,
                        b.getExperienceLevel)() ? p = $.Localization.template_heading_10_pluseEOY : "10-20 Years" == (0,
                            b.getExperienceLevel)() && (p = $.Localization.template_heading_10_to_20_EOY,
                                i = (0,
                                    b.getSkinData)("10+ Years", "10+ Years").recommended)),
            {
                selectedTemplates: l,
                heading: p,
                selectedOrder: e,
                recommendedSkins: i,
                skinData: (0,
                    b.isChooseTemplateAlternativeTabs)() || $.ZTYBaselineAllAndRecommendedAlternativeTabs ? h : ""
            }
        }
        t.default = (0,
            l.withRouter)((0,
                s.connect)((function (e) {
                    var t = (0,
                        b.getExperienceLevel)(!1)
                        , n = function (e) {
                            return (0,
                                b.isCountryAU)() || (0,
                                    b.isCountryNZ)() || !$.isFeaturePresent(v.FeatureSet.TEMPLATE_PAGE_FILTER) ? {
                                order: "",
                                showTemplateRandomization: !1
                            } : {
                                order: (0,
                                    b.GetClientSettingValue)(e.Common.clientSettings, v.ClientSettings.TemplateRandomizationOrder),
                                showTemplateRandomization: !0
                            }
                        }(e)
                        , a = (0,
                            b.getExperienceRange)(!1)
                        , o = (0,
                            b.GetUserPreferenceValue)(e.User, v.UserPreferenceConstant.SocialCardWebSite)
                        , r = JSON.parse(localStorage.getItem(v.CONSTS.SELECTED_SKIN_THEME)) || "";
                    return {
                        document: e.Document,
                        common: e.Common,
                        skinColor: r,
                        chooseTemplate: e.ChooseTemplate,
                        user: e.User,
                        portalId: $.PortalSettings.ConfigurePortal,
                        experienceLevelValue: t,
                        templateRandomization: n,
                        IsPremium: (0,
                            b.GetClientSettingValue)(e.Common.clientSettings, v.ClientSettings.IsPremium),
                        experienceRange: a,
                        socialCardWebSitePref: o,
                        isTemplateSkipped: e.Common.isSkipTemplate,
                        popularChoiceSubHeading: ""
                    }
                }
                ), (function (e) {
                    return {
                        userActions: (0,
                            p.bindActionCreators)(d, e),
                        documentActions: (0,
                            p.bindActionCreators)(c, e),
                        commonActions: (0,
                            p.bindActionCreators)(m, e)
                    }
                }
                ))(ee))
    },
    87541: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a, o = (a = n(96540)) && a.__esModule ? a : {
            default: a
        };
        t.default = function (e) {
            return o.default.createElement("div", {
                id: "protip",
                className: "protip-box"
            }, o.default.createElement("p", {
                className: "protip-description"
            }, o.default.createElement("span", {
                className: "protip-title"
            }, "Pro Tip"), e.description))
        }
    },
    44647: function (e, t, n) {
        "use strict";
        function a(e) {
            return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                a(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = function (e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != a(e) && "function" != typeof e)
                return {
                    default: e
                };
            var n = r(t);
            if (n && n.has(e))
                return n.get(e);
            var o = {
                __proto__: null
            }
                , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var l in e)
                if ("default" !== l && {}.hasOwnProperty.call(e, l)) {
                    var p = s ? Object.getOwnPropertyDescriptor(e, l) : null;
                    p && (p.get || p.set) ? Object.defineProperty(o, l, p) : o[l] = e[l]
                }
            return o.default = e,
                n && n.set(e, o),
                o
        }(n(96540));
        function r(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
                , n = new WeakMap;
            return (r = function (e) {
                return e ? n : t
            }
            )(e)
        }
        var s = (0,
            o.forwardRef)((function (e, t) {
                var n = (0,
                    o.useMemo)((function () {
                        return crypto.randomUUID()
                    }
                    ), [])
                    , a = (0,
                        o.useRef)();
                function r() {
                    a.current.classList.remove("open"),
                        a.current.classList.add("close")
                }
                return (0,
                    o.useImperativeHandle)(t, (function () {
                        return {
                            openPanel: function () {
                                a.current.classList.add("open"),
                                    a.current.classList.remove("close")
                            },
                            closePanel: r
                        }
                    }
                    ), [r]),
                    o.default.createElement("div", {
                        ref: a,
                        id: n,
                        className: "panel".concat(e.cssClasses.panelContainer ? " " + e.cssClasses.panelContainer : ""),
                        onClick: function (e) {
                            e.target.id === n && r()
                        }
                    }, o.default.createElement("div", {
                        className: "panel-content"
                    }, e.children))
            }
            ));
        s.displayName = "SlideInPanel",
            s.defaultProps = {
                cssClasses: {
                    panelContainer: ""
                }
            };
        t.default = s
    },
    87364: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = t.ChooseTemplateINTL = void 0,
            t.mapStateToProps = ee;
        var a = n(47354)
            , o = R(n(32724))
            , r = R(n(38221))
            , s = z(n(96540))
            , l = n(67851)
            , p = n(34819)
            , i = n(82960)
            , m = z(n(4672))
            , c = R(n(95332))
            , d = n(10700)
            , g = R(n(42692))
            , u = R(n(59335))
            , h = R(n(74261))
            , k = R(n(68621))
            , f = n(97128)
            , b = n(68341)
            , x = z(n(24824))
            , v = n(95385)
            , T = z(n(8204))
            , C = n(55882)
            , S = n(4623)
            , y = R(n(70607))
            , E = R(n(53710))
            , w = R(n(29134))
            , L = R(n(75421))
            , _ = R(n(823))
            , O = R(n(38623))
            , P = R(n(2891))
            , N = R(n(62758))
            , F = R(n(44647));
        function A(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
                , n = new WeakMap;
            return (A = function (e) {
                return e ? n : t
            }
            )(e)
        }
        function z(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != I(e) && "function" != typeof e)
                return {
                    default: e
                };
            var n = A(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {
                __proto__: null
            }
                , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && {}.hasOwnProperty.call(e, r)) {
                    var s = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    s && (s.get || s.set) ? Object.defineProperty(a, r, s) : a[r] = e[r]
                }
            return a.default = e,
                n && n.set(e, a),
                a
        }
        function R(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function I(e) {
            return I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                I(e)
        }
        function D(e, t) {
            return function (e) {
                if (Array.isArray(e))
                    return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var a, o, r, s, l = [], p = !0, i = !1;
                    try {
                        if (r = (n = n.call(e)).next,
                            0 === t) {
                            if (Object(n) !== n)
                                return;
                            p = !1
                        } else
                            for (; !(p = (a = r.call(n)).done) && (l.push(a.value),
                                l.length !== t); p = !0)
                                ;
                    } catch (e) {
                        i = !0,
                            o = e
                    } finally {
                        try {
                            if (!p && null != n.return && (s = n.return(),
                                Object(s) !== s))
                                return
                        } finally {
                            if (i)
                                throw o
                        }
                    }
                    return l
                }
            }(e, t) || H(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function V() {
            return V = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
                ,
                V.apply(null, arguments)
        }
        function U(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                    n.push.apply(n, a)
            }
            return n
        }
        function M(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? U(Object(n), !0).forEach((function (t) {
                    K(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function B(e) {
            return function (e) {
                if (Array.isArray(e))
                    return j(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || H(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function H(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return j(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? j(e, t) : void 0
            }
        }
        function j(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        function G(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, J(a.key), a)
            }
        }
        function W(e, t, n) {
            return t = Y(t),
                function (e, t) {
                    if (t && ("object" == I(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(e, q() ? Reflect.construct(t, n || [], Y(e).constructor) : t.apply(e, n))
        }
        function q() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (q = function () {
                return !!e
            }
            )()
        }
        function Y(e) {
            return Y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                Y(e)
        }
        function Z(e, t) {
            return Z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                Z(e, t)
        }
        function K(e, t, n) {
            return (t = J(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function J(e) {
            var t = function (e, t) {
                if ("object" != I(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, t || "default");
                    if ("object" != I(a))
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" == I(t) ? t : t + ""
        }
        var X = n(79142)
            , Q = window.RDL
            , $ = t.ChooseTemplateINTL = function (e) {
                function t(e) {
                    var n, l, p;
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                        K(p = W(this, t, [e]), "isChooseLaterPopupSkipForNow", (function (e) {
                            p.onSkipTemplate(e, !0),
                                (0,
                                    S.trackPopupUsageWithClickOption)("clicked", "close", "choose template", "choose later", "popup")
                        }
                        )),
                        K(p, "completeLottieAnim", (function () {
                            p.setState({
                                showLottieAnimation: !1
                            }),
                                p.closeExperienceModal("", "", 500, 1e3, 1500, 2200)
                        }
                        )),
                        K(p, "changeLayout", (function (e, t, n) {
                            if (Q.startPageLoader(),
                                e.preventDefault(),
                                p.state.templatePerRow != t || p.state.skinPreviewEnabled != n) {
                                var o = {
                                    action: "clicked",
                                    "click option": "",
                                    "screen name": "choose template"
                                };
                                n ? (Q.selectedLayout = T.chooseTemplateLayout.preview,
                                    p.setState({
                                        skinPreviewEnabled: n,
                                        templatePerRow: t
                                    }),
                                    o["click option"] = "preview grid view") : 2 != t || n ? 4 == t && (Q.selectedLayout = T.chooseTemplateLayout.grid4,
                                        p.setState({
                                            skinPreviewEnabled: !1,
                                            templatePerRow: t
                                        }),
                                        o["click option"] = "4 grid view") : (Q.selectedLayout = T.chooseTemplateLayout.grid2,
                                            p.setState({
                                                skinPreviewEnabled: !1,
                                                templatePerRow: t
                                            }),
                                            o["click option"] = "2 grid view"),
                                    setTimeout((function () {
                                        Q.closePageLoader()
                                    }
                                    ), 1e3),
                                    Q.TrackEvents("builder usage", o, Q.getUserUId(), a.CommonHelper.isLoggedInUser(Q.UserClaims), !1)
                            }
                        }
                        )),
                        K(p, "getSkins", (function (e) {
                            var t;
                            if (Q.newTemplatesOrder)
                                return (0,
                                    b.cvrOrderSkins)(p.props.skins);
                            if (Q.templateOrderFilter) {
                                var n = Q.portalExperiments.newSkinsFilterTest
                                    , a = Q.getExperimentVariant(n);
                                if (a > 2) {
                                    var o, r = [];
                                    r = (0,
                                        b.isCountryUK)() || !Q.isCountrySA_AE_IN ? 3 == a ? null == n ? void 0 : n.UKCVROrder : null == n ? void 0 : n.UKCTROrder : 3 == a ? null == n ? void 0 : n.CVROrder : null == n ? void 0 : n.CTROrder;
                                    var s = [];
                                    return null === (o = r) || void 0 === o || o.forEach((function (e) {
                                        var t = p.props.skins.find((function (t) {
                                            var n;
                                            return (null == t || null === (n = t.id) || void 0 === n ? void 0 : n.toLowerCase()) == e.toLowerCase()
                                        }
                                        ));
                                        t && s.push(t)
                                    }
                                    )),
                                        (0,
                                            b.updateRDLSkins)(s),
                                        (0,
                                            b.addNewskins)(null == n ? void 0 : n.newSkins, !0),
                                        Q.skins
                                }
                            }
                            if (Q.mpintlCountryRowSelector && !(0,
                                b.is0YOEMUK)()) {
                                if (p.props.indexOptimalTemplateTestV2 > 2 || Q.optimalTemplateOrder) {
                                    var l = Q.otherPortalSkins;
                                    l && (0,
                                        b.addNewskins)(l),
                                        Q.includeMXskins && (0,
                                            b.addNewMXskins)()
                                }
                                return p.getFilteredTemplatesByStyle()
                            }
                            if (Q.ctNewSkinsTest && Q.portalExperiments.ctNewSkinsTest.isFR) {
                                var i, m, c = ((0,
                                    b.getExprRange)() || "0 Years").replace(" ", "_"), d = null === (i = Q.portalExperiments.ctNewSkinsTest) || void 0 === i ? void 0 : i.newSkins;
                                (0,
                                    b.addNewskins)(d);
                                var g = Q.skins
                                    , u = [];
                                return u = null === (m = Q.portalExperiments.ctNewSkinsTest) || void 0 === m ? void 0 : m.remainingSkinOrder[c],
                                    g = (g = g.filter((function (e) {
                                        return u.includes(e.skinCD)
                                    }
                                    ))).sort((0,
                                        b.sortOrder)(u, "skinCD"))
                            }
                            if (Q.ctNewSkinsTest && Q.portalExperiments.ctNewSkinsTest.isUK) {
                                var h, k = null === (h = Q.portalExperiments.ctNewSkinsTest) || void 0 === h ? void 0 : h.newSkins, f = k.map((function (e) {
                                    return e.skinCD
                                }
                                ));
                                return (0,
                                    b.addNewskins)(k),
                                    p.props.skins.filter((function (e) {
                                        return f.indexOf(e.skinCD) < 0
                                    }
                                    ))
                            }
                            if (Q.alternativeToTabsOnChooseTemplate && (null !== (t = Q.portalExperiments.ctNewSkinsTest) && void 0 !== t && t.isFR || Q.favTemplates && !Q.favoriteTemplate && !Q.isfavoriteTemplates) && !Q.addTopFiveSkinToRecom) {
                                var x = Q.alternativeToTabsOnChooseTemplate;
                                (0,
                                    b.updateRDLSkins)(Q.tempSkinData);
                                var v = (0,
                                    b.getOptimalTemplateSkins)({
                                        alternativeToTabsOnChooseTemplate: x
                                    }, e);
                                return (0,
                                    b.updateRDLSkins)(v),
                                    Q.templateReorder ? v.slice(5) : v
                            }
                            if (p.props.indexOptimalTemplateTestV2 > 2 || Q.optimalTemplateOrder || Q.newOnboardingFlowES || Q.newOnboardingFlowBR || p.props.rowCanadaBuilder > 2) {
                                var C = Q.otherPortalSkins;
                                Q.optimalTemplateOrder && Q.otherPortalSkins ? C && Object.keys(C).forEach((function (e) {
                                    var t, n;
                                    null !== (t = C[e]) && void 0 !== t && t.include && null !== (n = C[e]) && void 0 !== n && n.skins && (0,
                                        b.addNewskins)(C[e].skins, !0)
                                }
                                )) : C && (0,
                                    b.addNewskins)(C),
                                    Q.includeMXskins && (0,
                                        b.addNewMXskins)();
                                var S = (0,
                                    b.getOptimalTemplateSkins)(p.props, e);
                                if (Q.isfavoriteTemplates) {
                                    var y, E = (0,
                                        b.getExperienceRange)(!1).replace(" ", "_"), w = E ? Q.templateFilters[E] : null === (y = Q.portalExperiments.favoriteTemplates) || void 0 === y ? void 0 : y.skipExprLevelTemplate;
                                    S = S.filter((function (e) {
                                        return !(null != w && w.includes(e.id))
                                    }
                                    ))
                                }
                                if (Q.onBoardingFlowIT || Q.isExperienceLevelOnCt || Q.onBoardingPopupV4) {
                                    var L, _, O = (0,
                                        b.getExperienceLevel)(!1).replace(" ", "_"), P = Q.templateStartOrder[O] && B(Q.templateStartOrder[O]) || [];
                                    if (Q.isExperienceLevelOnCt && (0,
                                        b.getExperienceLevel)(!1) == T.experienceLevel.oneToThreeYears)
                                        P = (null === (L = Q.portalExperiments.onBoardingPopup) || void 0 === L ? void 0 : L.templateStartOrder[O]) && B(null === (_ = Q.portalExperiments.onBoardingPopup) || void 0 === _ ? void 0 : _.templateStartOrder[O]);
                                    Q.onBoardingPopupV4 && (0,
                                        b.getExperienceLevel)(!1) == T.experienceLevel.oneToThreeYears && (P = Q.templateStartOrder[O] && B(Q.templateStartOrder[O])),
                                        (P = P.reverse()).forEach((function (e) {
                                            var t = S.findIndex((function (t) {
                                                return t.id == e
                                            }
                                            ));
                                            if (t > -1) {
                                                var n = S.splice(t, 1)[0];
                                                S.unshift(n)
                                            }
                                        }
                                        ))
                                }
                                if (Q.ctNewSkinsTest && (Q.portalExperiments.ctNewSkinsTest.isES || Q.portalExperiments.ctNewSkinsTest.isBR)) {
                                    var N, F = null === (N = Q.portalExperiments.ctNewSkinsTest) || void 0 === N ? void 0 : N.newSkins, A = F.map((function (e) {
                                        return e.skinCD
                                    }
                                    ));
                                    (0,
                                        b.addNewskins)(F),
                                        S = S.filter((function (e) {
                                            return A.indexOf(e.skinCD) < 0
                                        }
                                        ))
                                }
                                return S
                            }
                            return Q.newOnBoardingFlowFR && !Q.alternativeToTabsOnChooseTemplate || Q.newOnboardingFlowUK ? p.get0YOEOnboardingSkins() : p.props.skins
                        }
                        )),
                        K(p, "get0YOEOnboardingReorderSkins", (function (e, t) {
                            var n = e[(0,
                                b.getExperienceLevel)(!1).replace(" ", "_")] || []
                                , a = [];
                            return t || (0,
                                b.updateRDLSkins)(Q.tempSkinData),
                                n.length > 0 && n.forEach((function (e) {
                                    return (0,
                                        b.addNewskins)([e])
                                }
                                )),
                                n.map((function (e) {
                                    var t = Q.skins.findIndex((function (t) {
                                        return t.id == e.id
                                    }
                                    ));
                                    if (t > -1) {
                                        var n = Q.skins.splice(t, 1)[0];
                                        a.push(n)
                                    }
                                }
                                )),
                                (0,
                                    b.updateRDLSkins)([].concat(a, B(Q.skins))),
                                Q.skins
                        }
                        )),
                        K(p, "showRecommendedSkins", (function () {
                            var e = [];
                            return (0,
                                b.getSkinData)().recommended.forEach((function (t) {
                                    Q.skins.forEach((function (n) {
                                        (Q.filterTemplates ? n.id == t : n.name == t) && e.push(n)
                                    }
                                    ))
                                }
                                )),
                                e
                        }
                        )),
                        K(p, "get0YOEOnboardingSkins", (function (e, t) {
                            var n, a, o;
                            !Q.alternativeToTabsOnChooseTemplate || (null === (n = Q.portalExperiments.ctNewSkinsTest) || void 0 === n || !n.isFR) && (!Q.favTemplates || Q.filterTabsAlternative || Q.favoriteTemplate || Q.favTemplatesV4 || Q.isfavoriteTemplates) || Q.templateReorder || Q.addTopFiveSkinToRecom || ((0,
                                b.updateRDLSkins)(Q.tempSkinData),
                                Q.ctNewSkinsTest && (0,
                                    b.addNewskins)(null === (o = Q.portalExperiments.ctNewSkinsTest) || void 0 === o ? void 0 : o.newSkins));
                            var r = Q.alternativeToTabsOnChooseTemplate ? (0,
                                b.getExprRange)() : (0,
                                    b.getExperienceRange)()
                                , s = r ? r.replace(" ", "_") : "";
                            (Q.ctFiltersFR && (0,
                                b.getExperienceLevelFilter)() || t) && (s = (0,
                                    b.getExperienceLevelFilter)().replace(" ", "_")),
                                Q.newOnboardingFlowUK && (s = (0,
                                    b.ExprRange)().replace(" ", "_"));
                            var l, i = Q.newOnboardingFlowUK ? Q.portalExperiments.onBoardingQuestionTest.templateArray[s] : Q.templateFilters && s ? Q.templateFilters[s] : [];
                            !Q.isfavoriteTemplates || s && "onboardingSkip" != s || (i = null === (l = Q.portalExperiments.favoriteTemplates) || void 0 === l ? void 0 : l.skipExprLevelTemplate);
                            if (Q.ctNewSkinsTest) {
                                var m, c, d, g, u = Q.portalExperiments.ctNewSkinsTest.newSkins, h = u.map((function (e) {
                                    return e.skinCD
                                }
                                )), k = [];
                                (null !== (m = Q.portalExperiments.ctNewSkinsTest) && void 0 !== m && m.isES || null !== (c = Q.portalExperiments.ctNewSkinsTest) && void 0 !== c && c.isBR) && (localStorage.getItem(T.CONSTS.NEW_SKINS_ORDER) ? h = localStorage.getItem(T.CONSTS.NEW_SKINS_ORDER).split(",") : (h = (0,
                                    b.shuffleArray)(Q.portalExperiments.ctNewSkinsTest.newSkins.map((function (e) {
                                        return e.skinCD
                                    }
                                    ))),
                                    localStorage.setItem(T.CONSTS.NEW_SKINS_ORDER, h))),
                                    null !== (d = Q.portalExperiments.ctNewSkinsTest) && void 0 !== d && d.isUK && ((0,
                                        b.addNewskins)(u),
                                        k = (k = (k = Q.skins.filter((function (e) {
                                            return (0,
                                                b.getSkinData)().recommended.indexOf(e.name) > -1
                                        }
                                        ))).map((function (e) {
                                            return e.skinCD
                                        }
                                        ))).slice(0, 4)),
                                    null !== (g = Q.portalExperiments.ctNewSkinsTest) && void 0 !== g && g.isFR && (k = s ? Q.portalExperiments.ctNewSkinsTest.recommSkins[s] : []),
                                    i = e ? h : k
                            }
                            var f = (null === (a = p.state) || void 0 === a ? void 0 : a.currentExpFilter) || "recommended";
                            ((Q.alternativeToTabsOnChooseTemplate || Q.isFiveTemplateForFR && "recommended" == f) && (i = i.slice(0, Q.skinSliceNumber)),
                                Q.filterTabsAlternative || Q.filterTemplates && !Q.templateFiltersUKIE) && (i = p.showRecommendedSkins().map((function (e) {
                                    return e.skinCD
                                }
                                )));
                            var x = p.getFilteredSkins(Q.skins, i);
                            return Q.newOnboardingFlowUK && (s == T.experienceLevel.fiveToTenYears.replace(" ", "_") ? Q.PopularSkins = "MLI1 MLI2 MLF1" : Q.PopularSkins = "CBA2 MLI1 MLI2",
                                x = i),
                                (Q.isExperienceLevelOnCt || Q.templateReorder || Q.addTopFiveSkinToRecom) && (x = Q.skins.slice(0, 5)),
                                Q.filterTemplates && (x = x.slice(0, Q.skinSliceNumber)),
                                x
                        }
                        )),
                        K(p, "showRecommInAllSkins", (function () {
                            var e = p.getFilteredSkins(Q.skins, p.recommendedSkins)
                                , t = []
                                , n = [];
                            return e.forEach((function (e) {
                                n = p.getSkins(),
                                    t = [].concat(B(t), [e]),
                                    n = [].concat(B(t), B(n))
                            }
                            )),
                                n
                        }
                        )),
                        K(p, "toggleNewSkinsOption", (function (e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                                , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                                , o = p.get0YOEOnboardingSkins(e);
                            p.setState({
                                isNewSkinsOption: e,
                                showRecomSkins: o,
                                animateLine: t
                            }, (function () {
                                p.props.scaleSkinsSVGWidthHeight(o, n),
                                    setTimeout((function () {
                                        p.setState({
                                            animateLine: !1
                                        })
                                    }
                                    ), 2e3)
                            }
                            )),
                                p.props.bindViewPortWatcher(0, 4, o);
                            var r = {
                                action: "clicked",
                                clickOption: e ? "show novelties category" : "show recommended category",
                                "screen name": "choose template"
                            };
                            Q.TrackEvents("builder usage", r, Q.getUserUId(), a.CommonHelper.isLoggedInUser(Q.UserClaims), !1)
                        }
                        )),
                        K(p, "getFilteredTemplatesByStyle", (function () {
                            var e, t = [], n = p.templatePageFilter && p.templatePageFilter.selectedTemplates, a = p.props.skins;
                            if ((p.props.indexOptimalTemplateTestV2 > 2 || Q.optimalTemplateOrder) && (a = (0,
                                b.getOptimalTemplateSkins)(p.props)),
                                Q.filterTabsAlternative) {
                                var o = p.showRecommendedSkins().map((function (e) {
                                    return e.skinCD
                                }
                                ));
                                return a = a.filter((function (e) {
                                    return o.indexOf(e.skinCD) < 0
                                }
                                ))
                            }
                            if (Q.ctNewSkinsTest && null !== (e = Q.portalExperiments.ctNewSkinsTest) && void 0 !== e && e.isUK) {
                                var r, s = (null === (r = Q.portalExperiments.ctNewSkinsTest) || void 0 === r ? void 0 : r.newSkins).map((function (e) {
                                    return e.skinCD
                                }
                                ));
                                return a = a.filter((function (e) {
                                    return s.indexOf(e.skinCD) < 0
                                }
                                ))
                            }
                            return Q.newTemplatesOrder && (a = p.getSkins()),
                                n && n.length > 0 && !Q.filterTabsAlternative && !Q.filterTemplates ? (n.forEach((function (e) {
                                    a.forEach((function (n) {
                                        n[Q.newTemplatesOrder ? "skinCD" : "name"] == e && t.push(n)
                                    }
                                    ))
                                }
                                )),
                                    t) : a
                        }
                        )),
                        K(p, "updateCTComponent", (function () {
                            Q.startPageLoader();
                            var e = JSON.parse(JSON.stringify(p.getSkins(!0)));
                            if (p.state.selectedTemplateFilter && 0 != Object.keys(p.state.selectedTemplateFilter).length)
                                p.setTemplateFilters(null, p.state.selectedTemplateFilter, !1, !0);
                            else {
                                var t = {
                                    skins: e,
                                    skinsToRender: e,
                                    pageLoadComplete: !0
                                };
                                Q.ctFiltersFR && (t.showRecomSkins = p.get0YOEOnboardingSkins(!0)),
                                    Q.isfavoriteTemplates && (t.showRecomSkins = p.get0YOEOnboardingSkins(!1, !0)),
                                    p.setState(t, (function () {
                                        (p.props.isUpdatedChooseTempate || Q.chooseTemplateNameAndSurname) && (p.onNameChange({
                                            value: p.state.firstName,
                                            name: a.TypeCodes.fieldCd.FirstName
                                        }),
                                            p.onNameChange({
                                                value: p.state.lastName,
                                                name: a.TypeCodes.fieldCd.LastName
                                            }))
                                    }
                                    ))
                            }
                            setTimeout((function () {
                                Q.closePageLoader()
                            }
                            ), 200)
                        }
                        )),
                        K(p, "getLocAsPerExpLevel", (function () {
                            var e = "";
                            switch ((0,
                                b.getExperienceLevel)(!1)) {
                                case T.experienceLevel.student:
                                    e = Q.Localization.recommended_text_student;
                                    break;
                                case T.experienceLevel.ZeroYear:
                                    e = Q.Localization.recommended_text_ZeroYear;
                                    break;
                                case T.experienceLevel.zeroToThreeYears:
                                    e = Q.Localization.recommended_text_zeroToThreeYears;
                                    break;
                                case T.experienceLevel.threeToFiveYears:
                                    e = Q.Localization.recommended_text_threeToFiveYears;
                                    break;
                                case T.experienceLevel.fiveToTenYears:
                                    e = Q.Localization.recommended_text_fiveToTenYears;
                                    break;
                                case T.experienceLevel.tenPlusYears:
                                    e = Q.Localization.recommended_text_tenPlusYears
                            }
                            return e
                        }
                        )),
                        K(p, "handleCTModals", (function () {
                            var e = Q.GetQueryString("modalState");
                            1 == e && p.setState({
                                showHiwModal: !0,
                                showExperienceModal: !1
                            }),
                                2 == e && p.setState({
                                    showHiwModal: !1,
                                    showExperienceModal: !0
                                })
                        }
                        )),
                        K(p, "addScrollClass", (function () {
                            var e = Q.onboardingRevamp ? 5e3 : Q.recomSkinsInitially ? 3e3 : 2e3;
                            setTimeout((function () {
                                p.setState({
                                    scrollClass: "scroll"
                                })
                            }
                            ), e),
                                setTimeout((function () {
                                    p.setState({
                                        fadeInClass: "fadein"
                                    }),
                                        Q.recomSkinsInitially && localStorage.setItem("showNotification", !0)
                                }
                                ), 7e3),
                                window.removeEventListener("scroll", p.addScrollClass)
                        }
                        )),
                        K(p, "onSkipTemplate", (function (e) {
                            var t, n, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            p.props.commonActions.setSkipTemplate(o);
                            var r = "preview" == e.target.getAttribute("data-buttontype")
                                , s = "";
                            s = null !== (t = Q.portalExperiments) && void 0 !== t && null !== (n = t.changeTemplateFeature) && void 0 !== n && n.isFR ? "MLI5" : Q.setDefaultSkin || p.state.skins[0].id;
                            var l = p.state.selectedSkinCD;
                            o && (l = s);
                            var i = Q.skins.find((function (e) {
                                return e.id == l
                            }
                            ));
                            if (Q.newOnboardingFlowUK) {
                                var m = (0,
                                    b.ExprRange)().replace(" ", "_")
                                    , c = Q.portalExperiments.onBoardingQuestionTest.templateArray[m].find((function (e) {
                                        return e.id == l
                                    }
                                    ));
                                i = c || Q.skins.find((function (e) {
                                    return e.id == l
                                }
                                ))
                            }
                            if (r && !o || (e.target.setAttribute("data-color", p.state.selectedSmallSkinColor),
                                e.target.setAttribute("data-displayName", i.name),
                                e.target.setAttribute("data-skin", l),
                                e.target.setAttribute("data-htmlurl", i.htmlURL),
                                e.target.setAttribute("data-svgurl", i.imageURL)),
                                o)
                                (0,
                                    S.trackBuilderUsagewithClickedOption)("clicked", "skip_for_now", "choose template");
                            else {
                                var d = {
                                    action: "clicked",
                                    "screen name": "choose template",
                                    "click option": "Choose template button",
                                    "template name": i.name,
                                    "template id": l,
                                    "template color": p.state.selectedSmallSkinColor ? p.state.selectedSkinColorName : "default"
                                };
                                Q.TrackEvents("builder usage", d, Q.getUserUId(), a.CommonHelper.isLoggedInUser(Q.UserClaims), !1)
                            }
                            p.createDocument(e, o)
                        }
                        )),
                        K(p, "onBackClick", (function () {
                            if (Q.onboardingRevamp && p.props.commonActions.SetClientSetting(T.ClientSettings.progressStepCount, (0,
                                b.GetClientSettingValue)(p.props.Common.clientSettings, T.ClientSettings.progressStepCount) - 1),
                                Q.uploadDoppleganger || Q.skipTemplateSelection || Q.onboardingRevamp) {
                                var e, t = (0,
                                    d.GetNextBackUrl)(T.SCREEN.CHOOSE_TEMPLATE).backPageUrl;
                                (0,
                                    S.trackBuilderUsagewithClickedOption)("clicked", "return", "choose template");
                                var n = a.CommonHelper.getStorageValue(T.CONSTS.PESONALISATION_CURRENT_SCREEN, a.TypeCodes.storageType.localStorage);
                                (0,
                                    b.isPersonalisedFlow)() && null !== (e = t) && void 0 !== e && e.includes("personalisation-flow") && n && (t += "/".concat(n)),
                                    p.props.history.push(t)
                            }
                            (Q.isExperienceLevelOnCt || Q.onBoardingPopupV4) && (p.setState({
                                experienceModal: !0,
                                showModalForStudentFlow: !0
                            }, (function () {
                                var e, t, n, a;
                                null === (e = document.getElementsByClassName("icon-dart-arrow")[0]) || void 0 === e || e.classList.remove("slide-top-down"),
                                    null === (t = document.getElementsByClassName("dart-arrow-outer-container")[0]) || void 0 === t || t.classList.remove("move-left"),
                                    null === (n = document.getElementsByClassName("section-select-explevel-outline")[0]) || void 0 === n || n.classList.remove("slide-left"),
                                    null === (a = document.getElementsByClassName("section-select-explevel-container")[0]) || void 0 === a || a.classList.remove("fade-in-view")
                            }
                            )),
                                p.props.trackAnimatedCTAClickOnCT())
                        }
                        )),
                        K(p, "onSkinSelection", (function (e) {
                            var t, n, o, r, s, l = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = arguments.length > 2 ? arguments[2] : void 0, m = Q.getExperimentVariant(Q.portalExperiments.changeTemplateFeature) > 2 && (null === (t = Q.portalExperiments.changeTemplateFeature) || void 0 === t ? void 0 : t.isFR), c = {
                                action: "clicked",
                                "screen name": "choose template",
                                "template name": null === (n = Q.skins.find((function (t) {
                                    return t.skinCD === e
                                }
                                ))) || void 0 === n ? void 0 : n.name,
                                "template id": e,
                                "template color": p.state.selectedSmallSkinColor ? p.state.selectedSkinColorName : "default"
                            };
                            if (e == p.state.selectedSkinCD && Q.disableToggleSelect)
                                return !0;
                            Q.flexibleCTLayout && e && p.setState({
                                selectedSkinCD: e
                            });
                            var d = "skn-" + (null == e ? void 0 : e.toLowerCase())
                                , g = "skn-" + (null === (o = p.state.selectedSkinCD) || void 0 === o ? void 0 : o.toLowerCase())
                                , u = (null == i || null === (r = i.currentTarget) || void 0 === r || null === (s = r.dataset) || void 0 === s ? void 0 : s.skinCategory) || a.CommonHelper.getStorageValue("selectedSkinCategory", a.TypeCodes.storageType.localStorage);
                            if (p.state.selectedSkinCD) {
                                var h, k, f = document.getElementsByClassName(g);
                                if (Q.favTemplatesV4 || Q.addTopFiveSkinToRecom)
                                    null === (h = Array.from(f)) || void 0 === h || h.forEach((function (e) {
                                        null == e || e.parentNode.parentNode.parentNode.classList.remove("selected-template")
                                    }
                                    ));
                                else
                                    null === (k = f[0]) || void 0 === k || k.parentNode.parentNode.parentNode.classList.remove("selected-template");
                                m && (document.getElementsByClassName(g)[0].parentNode.parentNode.nextSibling.childNodes[0].childNodes[0].innerHTML = p.props.Localization.selectTemplate_Text)
                            }
                            if (document.getElementsByClassName(d)[0] && e != p.state.selectedSkinCD) {
                                var b, x = document.getElementsByClassName(d);
                                if (!Q.flexibleCTLayout)
                                    if (Q.favTemplatesV4 || Q.addTopFiveSkinToRecom)
                                        null === (b = Array.from(x)) || void 0 === b || b.forEach((function (e) {
                                            null == e || e.parentNode.parentNode.parentNode.classList.add("selected-template")
                                        }
                                        ));
                                    else
                                        x[0].parentNode.parentNode.parentNode.classList.add("selected-template");
                                var v = document.getElementsByClassName(d)[0].parentNode.parentNode.parentNode.getAttribute("data-skin-category");
                                return p.setState({
                                    selectedTemplateCat: Q.favTemplatesV4 ? u : v
                                }),
                                    m && (document.getElementsByClassName(d)[0].parentNode.parentNode.nextSibling.childNodes[0].childNodes[0].innerHTML = p.props.Localization.template_selected_text),
                                    p.setState({
                                        selectedSkinCD: e
                                    }),
                                    c["click option"] = "template image",
                                    l && (0,
                                        C.trackSkinSelection)(c),
                                    !0
                            }
                            if (document.getElementsByClassName("selected-template")) {
                                var T, S = null === (T = document.getElementsByClassName("selected-template")) || void 0 === T ? void 0 : T[0];
                                S && S.classList.remove("selected-template")
                            }
                            p.setState({
                                selectedSkinCD: ""
                            }),
                                c["click option"] = "unselect template",
                                l && (0,
                                    C.trackSkinSelection)(c)
                        }
                        )),
                        K(p, "updateFirstNLastName", (function () {
                            if (p.props.isUpdatedChooseTempate || Q.isCVUploadFlow || Q.chooseTemplateNameAndSurname) {
                                var e = (0,
                                    b.GetCharValueFromLocalStorage)("NamedocData", a.TypeCodes.fieldCd.FirstName)
                                    , t = (0,
                                        b.GetCharValueFromLocalStorage)("NamedocData", a.TypeCodes.fieldCd.LastName)
                                    , n = (0,
                                        b.GetCharValueFromLocalStorage)("NamedocData", a.TypeCodes.fieldCd.DocumentTitle)
                                    , o = e || (Q.UserClaims.firstName ? Q.UserClaims.firstName : "")
                                    , r = t || (Q.UserClaims.lastName ? Q.UserClaims.lastName : "");
                                if (Q.isCVUploadFlow) {
                                    var s, l, i, m = null === (s = p.props.document) || void 0 === s || null === (l = s.sections.filter((function (e) {
                                        return "NAME" == e.sectionTypeCD
                                    }
                                    ))[0]) || void 0 === l || null === (i = l.paragraphs[0]) || void 0 === i ? void 0 : i.docDatas;
                                    o = e = a.CommonHelper.getCharValue(m, a.TypeCodes.fieldCd.FirstName),
                                        r = t = a.CommonHelper.getCharValue(m, a.TypeCodes.fieldCd.LastName)
                                }
                                p.onNameChange({
                                    value: o,
                                    name: a.TypeCodes.fieldCd.FirstName
                                }, "first", !0),
                                    p.onNameChange({
                                        value: r,
                                        name: a.TypeCodes.fieldCd.LastName
                                    }, "last", !0),
                                    p.onDocTitleChange({
                                        value: n || p.state.docTitle
                                    })
                            }
                        }
                        )),
                        K(p, "renderRecommSkins", (function () {
                            setTimeout((function () {
                                var e = p.state.skins.slice(0, 3);
                                p.setState({
                                    skinsToRender: e,
                                    pageLoadComplete: !0
                                }),
                                    p.props.scaleSkinsSVGWidthHeight(0, 3),
                                    p.props.bindViewPortWatcher(0, 3, p.state.skins)
                            }
                            ), 100)
                        }
                        )),
                        K(p, "callLazyLoadSkins", (function () {
                            var e = 0
                                , t = !1;
                            switch (Q.PortalSettings.ConfigurePortalCd) {
                                case "MIT":
                                    e = 250;
                                    break;
                                case "MES":
                                    e = 500
                            }
                            p.selectSkinInterval && clearInterval(p.selectSkinInterval),
                                p.selectSkinInterval = setInterval((function () {
                                    if (Q.skipChooseeTemplateINTL && !t) {
                                        var e = a.CommonHelper.getStorageValue("skinCD", a.TypeCodes.storageType.localStorage);
                                        (e = e && !p.props.isTemplateSkipped ? e : "") && !p.state.selectedSkinCD && (t = p.onSkinSelection(e || Q.SkinFromWP, !1)) && clearInterval(p.selectSkinInterval)
                                    }
                                    p.state.pageLoadComplete && clearInterval(p.selectSkinInterval)
                                }
                                ), 100);
                            var n = 2500;
                            Q.isFiveTemplateForFR && 1 == p.counter && (n = 200),
                                setTimeout((function () {
                                    Q.recomSkinsInitially && p.state.showMoreButton || p.lazyLoadSkins(),
                                        (Q.getExperimentVariant(Q.portalExperiments.templatesPerRowChangeTestV2) > 2 || Q.templatesPerRowChange) && p.lazyLoadSkins()
                                }
                                ), e),
                                p.interval && clearInterval(p.interval),
                                p.interval = setInterval((function () {
                                    p.state.pageLoadComplete || (Q.doShowMoreButton && 2 == p.counter && p.state.skinsToRender.length > 2 ? (p.setState({
                                        showMoreButton: !0,
                                        pageLoadComplete: !0
                                    }),
                                        clearInterval(p.interval),
                                        clearInterval(p.selectSkinInterval)) : !Q.filterTemplates && !Q.isfavoriteTemplates && Q.alternativeToTabsOnChooseTemplate && 3 == p.counter && p.state.skins.length > 18 && !Q.addTopFiveSkinToRecom ? (p.setState({
                                            showMoreButton: !0,
                                            pageLoadComplete: !0
                                        }),
                                            p.props.bindViewPortWatcher(p.skinSliceNumber * (p.counter - 1), p.skinSliceNumber * p.counter, p.state.skins),
                                            clearInterval(p.interval)) : (p.lazyLoadSkins(),
                                                !Q.alternativeToTabsOnChooseTemplate && p.props.isUpdatedChooseTempate && 4 == p.counter && p.state.skins.length > 18 && (p.setState({
                                                    showMoreButton: !0,
                                                    pageLoadComplete: !0
                                                }),
                                                    clearInterval(p.interval)),
                                                p.skinSliceNumber * (p.counter - 1) > p.state.skins.length && (p.setState({
                                                    pageLoadComplete: !0
                                                }),
                                                    clearInterval(p.interval))))
                                }
                                ), n)
                        }
                        )),
                        K(p, "removeSelectedOnFilter", (function () {
                            var e = p.state.selectedSkinCD;
                            if (e) {
                                if (document.getElementsByClassName("selected-template")) {
                                    var t, n = null === (t = document.getElementsByClassName("selected-template")) || void 0 === t ? void 0 : t[0];
                                    n && n.classList.remove("selected-template")
                                }
                            } else if (Q.SkinFromWP && !e && document.getElementsByClassName("selected-template")) {
                                var a, o = null === (a = document.getElementsByClassName("selected-template")) || void 0 === a ? void 0 : a[0];
                                o && o.classList.remove("selected-template")
                            }
                        }
                        )),
                        K(p, "showAllTemplates", (function () {
                            if (Q.mpintlCountryRowSelector) {
                                Q.isUploadFlowChooseTemplate && Q.isCountrySA_AE_IN && p.onShowMoreTemplates(),
                                    p.removeSelectedOnFilter(),
                                    p.setState({
                                        selectedSkinCD: "",
                                        doShowAllTemplates: !0,
                                        pageLoadComplete: !1
                                    }, (function () {
                                        p.props.onFilterClick(T.TemplateFilter.All),
                                            Q.SkinFromWP && !p.state.selectedSkinCD && (p.onSkinSelection(Q.SkinFromWP),
                                                p.removeSelectedOnFilter())
                                    }
                                    ));
                                Q.TrackEvents("builder usage", {
                                    action: "clicked",
                                    "click option": "template categories",
                                    "template category": "all",
                                    "screen name": "choose template"
                                }, Q.getUserUId(), a.CommonHelper.isLoggedInUser(Q.UserClaims), !1)
                            } else if (!p.state.doShowAllTemplates) {
                                var e = {
                                    doShowAllTemplates: !0,
                                    pageLoadComplete: !1,
                                    skins: p.state.skins
                                };
                                p.setState(e),
                                    (0,
                                        S.trackBuilderUsagewithClickedOption)("clicked", "see all templates", "choose template")
                            }
                        }
                        )),
                        K(p, "assignRef", (function (e, t) {
                            null != t && (p[e] = t)
                        }
                        )),
                        K(p, "onTextFieldsBlur", (function (e) {
                            var t = e.target.name
                                , n = !1
                                , o = {
                                    action: "clicked",
                                    "screen name": "choose template"
                                };
                            if (p.props.isUpdatedChooseTempate || Q.chooseTemplateNameAndSurname) {
                                var r = "";
                                t == a.TypeCodes.fieldCd.FirstName ? (r = "first name entered",
                                    p.state.firstName && (n = !0)) : t == a.TypeCodes.fieldCd.LastName ? (r = "last name entered",
                                        p.state.lastName && (n = !0)) : (r = "job title entered",
                                            o["job title"] = p.state.docTitle,
                                            p.state.docTitle && (n = !0)),
                                    n && Q.TrackEvents(r, o)
                            } else {
                                var s = p.state.firstName && p.state.firstName.length > 0 && p.state.lastName && p.state.lastName.length > 0;
                                p.setState({
                                    exprLevelFlag: s
                                })
                            }
                        }
                        )),
                        K(p, "toggleDrawer", (function () {
                            p.setState((function (e) {
                                return {
                                    isDrawerOpen: !e.isDrawerOpen
                                }
                            }
                            ), (function () {
                                p.props.scaleSkinsSVGWidthHeight(p.state.favoriteSkinsArr, !1),
                                    setTimeout((function () {
                                        p.updatePageWrapperPadding()
                                    }
                                    ), 500)
                            }
                            ))
                        }
                        )),
                        K(p, "handleDelete", (function (e) {
                            var t = e.skinCD
                                , n = p.state.favoriteSkinsArr.filter((function (e) {
                                    return e.id != t
                                }
                                ))
                                , o = p.state.favoriteSkinCD.filter((function (e) {
                                    return e != t
                                }
                                ));
                            p.setState({
                                favoriteSkinsArr: B(n),
                                favoriteSkinCD: o
                            }, (function () {
                                a.CommonHelper.setStorageValue(T.CONSTS.FAVORITE_SKINS, n, a.TypeCodes.storageType.localStorage),
                                    a.CommonHelper.setStorageValue(T.CONSTS.FAVORITE_SKINS_SKINCD, o, a.TypeCodes.storageType.localStorage),
                                    p.setState({
                                        drawerTemplates: p.getTemplatesForComparatorToggler()
                                    }, (function () {
                                        p.props.scaleSkinsSVGWidthHeight(p.state.favoriteSkinsArr, !1)
                                    }
                                    ))
                            }
                            ))
                        }
                        )),
                        K(p, "updatePageWrapperPadding", (function () {
                            var e = document.querySelector(".drawer-bottom")
                                , t = document.querySelector(".footer-bottom")
                                , n = document.querySelector(".page-wrap")
                                , a = e ? e.offsetHeight : 0
                                , o = a + (t ? t.offsetHeight : 0);
                            n.style.paddingBottom = n && a > 0 ? "".concat(o, "px") : "0px"
                        }
                        )),
                        K(p, "resetTemplates", (function () {
                            p.setState({
                                favoriteSkinsArr: [],
                                favoriteSkinCD: []
                            }, (function () {
                                a.CommonHelper.deleteStorageValue(T.CONSTS.FAVORITE_SKINS, a.TypeCodes.storageType.localStorage),
                                    a.CommonHelper.deleteStorageValue(T.CONSTS.FAVORITE_SKINS_SKINCD, a.TypeCodes.storageType.localStorage),
                                    p.setState({
                                        drawerTemplates: p.getTemplatesForComparatorToggler()
                                    })
                            }
                            )),
                                setTimeout((function () {
                                    p.updatePageWrapperPadding()
                                }
                                ), 500)
                        }
                        )),
                        K(p, "renderFirstNLastName", (function (e, t) {
                            return s.default.createElement(s.default.Fragment, null, s.default.createElement("div", {
                                className: "row ".concat(Q.flexibleCTLayout ? "row-names" : "justify-content-center", " ")
                            }, s.default.createElement("div", {
                                className: p.props.isUpdatedChooseTempate || Q.chooseTemplateNameAndSurname ? Q.flexibleCTLayout ? "col-md-6" : "col-md-4" : "col-md-3"
                            }, s.default.createElement(o.default, {
                                inputType: {
                                    labelName: Q.Localization.firstName_Label,
                                    value: p.state.firstName,
                                    name: a.TypeCodes.fieldCd.FirstName,
                                    maxLength: T.firstName.maxLength,
                                    placeholderLabel: e || (Q.chooseTemplateNameAndSurname ? Q.Localization.placeholder_fname : Q.Localization.fNamePlaceholder)
                                },
                                onChange: function (e) {
                                    p.onNameChange(e, "first", !1, !0)
                                },
                                onBlur: p.onTextFieldsBlur
                            })), s.default.createElement("div", {
                                className: p.props.isUpdatedChooseTempate || Q.chooseTemplateNameAndSurname ? Q.flexibleCTLayout ? "col-md-6" : "col-md-4" : "col-md-3"
                            }, s.default.createElement(o.default, {
                                inputType: {
                                    labelName: Q.Localization.lastName_Label,
                                    value: p.state.lastName,
                                    name: a.TypeCodes.fieldCd.LastName,
                                    maxLength: T.lastName.maxLength,
                                    placeholderLabel: t || (Q.chooseTemplateNameAndSurname ? Q.Localization.placeholder_lname : Q.Localization.lNamePlaceholder)
                                },
                                onChange: function (e) {
                                    p.onNameChange(e, "last", !1, !0)
                                },
                                onBlur: p.onTextFieldsBlur
                            }))))
                        }
                        )),
                        K(p, "lazyLoadSkins", (function () {
                            var e = p.state.skins;
                            Q.ctTriStatePhotoToggle && p.state.photoToggleState === x.PHOTO_TOGGLE_STATES.onlyPhoto && (e = e.filter((function (e) {
                                return e.isPhoto
                            }
                            ))),
                                p.setState({
                                    skinsToRender: e.slice(0, p.skinSliceNumber * p.counter)
                                }, (function () {
                                    p.props.scaleSkinsSVGWidthHeight(p.skinSliceNumber * (p.counter - 2), p.skinSliceNumber),
                                        p.props.bindViewPortWatcher(p.skinSliceNumber * (p.counter - 2), p.skinSliceNumber * p.counter, p.state.skins)
                                }
                                )),
                                (p.props.isUpdatedChooseTempate || Q.chooseTemplateNameAndSurname) && (p.onNameChange({
                                    value: p.state.firstName,
                                    name: a.TypeCodes.fieldCd.FirstName
                                }),
                                    p.onNameChange({
                                        value: p.state.lastName,
                                        name: a.TypeCodes.fieldCd.LastName
                                    }),
                                    p.onDocTitleChange({
                                        value: p.state.docTitle
                                    })),
                                p.counter++
                        }
                        )),
                        K(p, "stickyElement", (function (e, t) {
                            e && (window.pageYOffset >= e.getBoundingClientRect().top ? e.classList.add(t) : e.classList.remove(t))
                        }
                        )),
                        K(p, "onSortingOptionChange", (function (e) {
                            var t = (null == e ? void 0 : e.value) || "All"
                                , n = JSON.parse(JSON.stringify(Q.skins));
                            "All" != t && (n = n.filter((function (e) {
                                return Q.templatesMappingToFilters[t].includes(e.id)
                            }
                            ))),
                                Q.TrackEvents("sorting options selected", {
                                    action: "clicked",
                                    "click option": e.label,
                                    "screen name": "choose template"
                                }),
                                p.setState({
                                    skins: n,
                                    currentFilter: t,
                                    showMoreButton: !1,
                                    pageLoadComplete: !1
                                }, (function () {
                                    p.counter = 1,
                                        p.callLazyLoadSkins(!0)
                                }
                                ))
                        }
                        )),
                        K(p, "onShowMoreTemplates", (function () {
                            p.counter = 4,
                                p.setState({
                                    showMoreButton: !1,
                                    pageLoadComplete: !1,
                                    showInitalLoaderShowMore: !0
                                }),
                                Q.recomSkinsInitially && (localStorage.setItem(T.CONSTS.SHOW_RECOM_SKINS_INITIALLY, !0),
                                    p.setState({
                                        renderFilters: localStorage.getItem(T.CONSTS.SHOW_RECOM_SKINS_INITIALLY)
                                    }, (function () {
                                        localStorage.getItem(T.CONSTS.SHOW_NOTIFICATION) || p.addScrollClass()
                                    }
                                    ))),
                                p.callLazyLoadSkins(!0);
                            var e = {
                                action: "clicked",
                                "click option": "see all templates",
                                "template category": "all",
                                "screen name": "choose template"
                            };
                            Q.TrackEvents("builder usage", e, Q.getUserUId(), a.CommonHelper.isLoggedInUser(Q.UserClaims), !1)
                        }
                        )),
                        K(p, "onBackToTopClick", (function () {
                            window.scroll({
                                top: 0,
                                left: 0,
                                behavior: "smooth"
                            }),
                                (0,
                                    S.trackBuilderUsagewithClickedOption)("clicked", "top of the page", "choose template");
                            var e = document.querySelectorAll(".bottom-btn-wrap .btn-default")[0];
                            setTimeout((function () {
                                e.blur()
                            }
                            ), 1e3)
                        }
                        )),
                        K(p, "onSortingOptionClick", (function () {
                            Q.TrackEvents("sorting options viewed", {
                                action: "clicked",
                                "screen name": "choose template"
                            })
                        }
                        )),
                        K(p, "createDocument", (function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (Q.onboardingRevamp && e.stopPropagation(),
                                !Q.flexibleCTLayout && p.preview.showHideTemplatePreview(!1, e),
                                e.currentTarget.setAttribute("data-color", p.state.selectedSmallSkinColor),
                                e.currentTarget.setAttribute(a.TypeCodes.fieldCd.FirstName, p.state.firstName),
                                e.currentTarget.setAttribute(a.TypeCodes.fieldCd.LastName, p.state.lastName),
                                e.currentTarget.setAttribute(a.TypeCodes.fieldCd.DocumentTitle, p.state.docTitle),
                                e.currentTarget.setAttribute("exprLevel", p.state.experienceLevel),
                                e.currentTarget.getAttribute("data-skin-category") || e.currentTarget.setAttribute("data-skin-category", p.state.selectedTemplateCat),
                                Q.skinSpecificData && !p.state.selectedSmallSkinColor) {
                                var n = e.currentTarget.attributes["data-skin"].value.toUpperCase()
                                    , o = Q.skins.find((function (e) {
                                        return e.skinCD == n && e.defaultColor
                                    }
                                    ));
                                o && e.currentTarget.setAttribute("data-color", o.defaultColor)
                            }
                            p.props.createDocumentWithTemplate(e, t),
                                (0,
                                    b.getExperienceLevel)(!1)
                        }
                        )),
                        K(p, "renderRecommendedSkin", (function () {
                            var e = p.state.showRecomSkins;
                            (Q.isExperienceLevelOnCt || Q.addTopFiveSkinToRecom) && (e = Q.skins.slice(0, 5));
                            var t = (0,
                                b.getSvgsArray)(e, p.state.selectedSmallSkinColor, v.getSkinComponent, p.props.indexOptimalTemplateTestV2, null, null, p.state.isPhotoToggleOn);
                            if (t && t.length > 0)
                                return t.map((function (e, t) {
                                    return p.renderSkin(e, t, !0, !0)
                                }
                                ))
                        }
                        )),
                        K(p, "renderAllSkins", (function (e) {
                            var t = p.state.skinsToRender;
                            p.props.scaleSkinsSVGWidthHeight(t, !1),
                                e && (t = Q.skins,
                                    setTimeout((function () {
                                        p.props.bindViewPortWatcher(0, 3, t)
                                    }
                                    ), 400)),
                                (Q.isExperienceLevelOnCt || Q.addTopFiveSkinToRecom) && (t = Q.skins.slice(5)),
                                Q.filterTemplates && Q.mpintlCountryRowSelector && 0 === Object.entries(p.state.selectedTemplateFilter).length && (t = t.slice(Q.skinSliceNumber));
                            var n = null
                                , o = null;
                            if (Q.flexibleCTLayout) {
                                var r, l, i, m = null === (r = p.props.document) || void 0 === r || null === (l = r.sections.filter((function (e) {
                                    return "PRFL" == e.sectionTypeCD
                                }
                                ))[0]) || void 0 === l || null === (i = l.paragraphs[0]) || void 0 === i ? void 0 : i.docDatas, c = a.CommonHelper.getCharValue(m, a.TypeCodes.fieldCd.FirstName), d = a.CommonHelper.getCharValue(m, a.TypeCodes.fieldCd.LastName);
                                n = p.state.firstName ? p.state.firstName : c,
                                    o = p.state.lastName ? p.state.lastName : d
                            }
                            var g = (0,
                                b.getSvgsArray)(t, p.state.selectedSmallSkinColor, v.getSkinComponent, p.props.indexOptimalTemplateTestV2, n, o, p.state.isPhotoToggleOn);
                            if (g && g.length > 0) {
                                if (p.state.skinPreviewEnabled) {
                                    for (var u = [], h = 0; h < g.length; h += p.state.templatePerRow) {
                                        var k = g.slice(h, h + p.state.templatePerRow)
                                            , f = s.default.createElement("div", {
                                                key: "wrapper-".concat(h / p.state.templatePerRow),
                                                className: "wrapper"
                                            }, k.map((function (e, t) {
                                                return p.renderSkin(e, t, !0, !0)
                                            }
                                            )));
                                        u.push(f)
                                    }
                                    return u
                                }
                                return g.map((function (e, t) {
                                    return p.renderSkin(e, t, !0)
                                }
                                ))
                            }
                        }
                        )),
                        K(p, "renderSkinOnPopup", (function () {
                            var e = p.props.indexOptimalTemplateTestV2 > 2 || Q.optimalTemplateOrder
                                , t = (0,
                                    v.getSkinComponent)(p.dummyDoc.skinCD, "", "", "", null, null, e, null, null, null, null, null, Q.useDynamicScaling)
                                , n = {
                                    component: null,
                                    data: p.skinOnPopup
                                };
                            if (t)
                                return n = M(M({}, n), {}, {
                                    component: t
                                }),
                                    p.renderSkinPopup(n, 0, !0)
                        }
                        )),
                        K(p, "renderNewSkin", (function (e) {
                            return s.default.createElement("div", null, (0,
                                b.isNewSkin)(e) && s.default.createElement("span", {
                                    className: "newbadgeLabel"
                                }, Q.Localization.new_ImageText))
                        }
                        )),
                        K(p, "renderCatLabel", (function (e) {
                            var t = p.findSkinLabelType(e);
                            return s.default.createElement(s.default.Fragment, null, t && s.default.createElement("div", {
                                className: "new-label-wrap"
                            }, s.default.createElement("div", {
                                className: "new-label-body"
                            }, t)))
                        }
                        )),
                        K(p, "renderMostPopularSkin", (function (e) {
                            return s.default.createElement("div", null, (0,
                                b.isPopularSkin)(e) && s.default.createElement("span", {
                                    className: Q.showPopularLabel ? "newbadgeLabel" : "mostpopular-badgeLabel"
                                }, (0,
                                    b.isPersonalisedFlow)() ? Q.Localization.recmnded_Text : Q.Localization.mostpopular_Text))
                        }
                        )),
                        K(p, "renderNewSkinTag", (function (e) {
                            return s.default.createElement("div", null, Q.NewSkins.find((function (t) {
                                return t.id == e
                            }
                            )) && s.default.createElement("span", {
                                className: "mostpopular-badgeLabel"
                            }, Q.Localization.NewText_label))
                        }
                        )),
                        K(p, "renderFavoriteSkins", (function () {
                            var e = p.state.favoriteSkinsArr
                                , t = Q.favTemplatesV2 ? p.state.firstName : ""
                                , n = Q.favTemplatesV2 ? p.state.lastName : ""
                                , a = (0,
                                    b.getSvgsArray)(e, p.state.selectedSmallSkinColor, v.getSkinComponent, p.props.indexOptimalTemplateTestV2, t, n, p.state.isPhotoToggleOn);
                            if (a && a.length > 0)
                                return a.map((function (e, t) {
                                    return p.renderSkin(e, t, !0, !0, !0)
                                }
                                ))
                        }
                        )),
                        K(p, "getTemplatesForComparatorToggler", (function () {
                            var e = p.state.favoriteSkinsArr
                                , t = Q.favTemplatesV2 ? p.state.firstName : ""
                                , n = Q.favTemplatesV2 ? p.state.lastName : ""
                                , a = (0,
                                    b.getSvgsArray)(e, p.state.selectedSmallSkinColor, v.getSkinComponent, p.props.indexOptimalTemplateTestV2, t, n, p.state.isPhotoToggleOn)
                                , o = [];
                            if ((o = null == a ? void 0 : a.map((function (e, t) {
                                var n, a;
                                return {
                                    template: p.renderSkin(e, t, !0, !0, !0, !1, !0),
                                    isEmpty: !1,
                                    skinCD: null == e || null === (n = e.data) || void 0 === n ? void 0 : n.skinCD,
                                    name: null == e || null === (a = e.data) || void 0 === a ? void 0 : a.name
                                }
                            }
                            ))).length < Q.skinsRequiredForCompToggler)
                                for (var r = o.length; r < Q.skinsRequiredForCompToggler; r++)
                                    o.push({
                                        isEmpty: !0
                                    });
                            return o
                        }
                        )),
                        K(p, "findSkinLabelType", (function (e) {
                            var t, n = null === (t = (0,
                                b.getExperienceRange)(!1)) || void 0 === t ? void 0 : t.toLowerCase(), a = "";
                            if (n) {
                                var o, r = null == Q ? void 0 : Q.experienceWiseSkinLabel[n];
                                null === (o = Object.keys(r)) || void 0 === o || o.map((function (t) {
                                    var n;
                                    null !== (n = r[t]) && void 0 !== n && n.includes(e) && (a = t)
                                }
                                ))
                            }
                            return a
                        }
                        )),
                        K(p, "getPairedSkin", (function (e, t) {
                            var n, a = Object.keys(Q.templatePairs).reduce((function (e, t) {
                                return e[Q.templatePairs[t]] = t,
                                    e
                            }
                            ), {}), o = "";
                            if (o = (null === (n = Q.templatePairs) || void 0 === n ? void 0 : n[e]) || a[e],
                                t || !o) {
                                var r, s = [];
                                null === (r = p.state.showRecomSkins) || void 0 === r || r.forEach((function (e) {
                                    var t;
                                    null !== (t = p.state.favoriteSkinCD) && void 0 !== t && t.includes(null == e ? void 0 : e.skinCD) || null == s || s.push(e.skinCD)
                                }
                                ));
                                var l = Math.floor(Math.random() * s.length);
                                o = s[l]
                            }
                            return o
                        }
                        )),
                        K(p, "getPairedSkinSvg", (function () {
                            var e, t, n = p.state.favoriteSkinsArr[p.state.favoriteSkinsArr.length - 1], a = p.getPairedSkin(null == n || null === (e = n.skinCD) || void 0 === e ? void 0 : e.toLowerCase(), p.state.favoriteSkinsArr.length > 1), o = null === (t = Q.skins) || void 0 === t ? void 0 : t.filter((function (e) {
                                var t;
                                return (null == e || null === (t = e.skinCD) || void 0 === t ? void 0 : t.toLowerCase()) == (null == a ? void 0 : a.toLowerCase())
                            }
                            ));
                            return (0,
                                b.getSvgsArray)(o, p.state.selectedSmallSkinColor, v.getSkinComponent, p.props.indexOptimalTemplateTestV2, p.state.firstName, p.state.lastName, p.state.isPhotoToggleOn)[0]
                        }
                        )),
                        K(p, "addComparisonToFav", (function (e) {
                            var t = a.CommonHelper.getStorageValue(T.CONSTS.CURRENT_COMPAIRED_TEMPLATE, a.TypeCodes.storageType.localStorage)
                                , n = t.skinCD
                                , o = p.state.showRecomSkins.find((function (e) {
                                    return e.skinCD == n
                                }
                                )) ? T.TemplateFilter.Recommended : T.TemplateFilter.All;
                            p.setState({
                                showComparator: !1
                            }, (function () {
                                p.addTofavorite(e, t.skinCD, 0, t.name, !0, o)
                            }
                            ))
                        }
                        )),
                        K(p, "renderComparator", (function () {
                            var e, t, n, o = p.getPairedSkinSvg();
                            (a.CommonHelper.setStorageValue(T.CONSTS.CURRENT_COMPAIRED_TEMPLATE, null == o ? void 0 : o.data, a.TypeCodes.storageType.localStorage),
                                p.state.showComparator) && (0,
                                    C.trackComparatorEvents)("popup", null == o || null === (e = o.data) || void 0 === e ? void 0 : e.skinCD, "viewed", null === (t = p.state.favoriteSkinsArr) || void 0 === t ? void 0 : t.length, null == o || null === (n = o.data) || void 0 === n ? void 0 : n.name, "", "viewed recommended template");
                            return s.default.createElement(s.default.Fragment, null, p.renderSkin(o, 0, !0, !0, !0, !0))
                        }
                        )),
                        K(p, "createDocWithTemp", (function (e) {
                            e.currentTarget.setAttribute(a.TypeCodes.fieldCd.FirstName, p.state.firstName),
                                e.currentTarget.setAttribute(a.TypeCodes.fieldCd.LastName, p.state.lastName),
                                e.currentTarget.setAttribute(a.TypeCodes.fieldCd.DocumentTitle, p.state.docTitle),
                                p.props.createDocumentWithTemplate(e, !1, p.state.favoriteSkinsArr[0], p.state.selectedSmallSkinColor)
                        }
                        )),
                        K(p, "addTofavorite", (function (e, t) {
                            var n, o, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "", l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
                            i || (e.stopPropagation(),
                                i = null === (o = e.currentTarget.attributes["data-skin-category"]) || void 0 === o ? void 0 : o.value);
                            Q.favTemplatesV2 && !Q.comparatorSlider && window.scrollTo({
                                top: 150,
                                behavior: "smooth"
                            });
                            var m = Q.skins.filter((function (e) {
                                if (e.id == t)
                                    return e.displayPosition = r,
                                        e
                            }
                            ))
                                , c = [].concat(B(p.state.favoriteSkinsArr), B(m))
                                , d = [].concat(B(p.state.favoriteSkinCD), [t]);
                            if ((null === (n = p.state.favoriteSkinsArr) || void 0 === n ? void 0 : n.length) < 3) {
                                var g, u;
                                if (p.setState({
                                    favoriteSkinsArr: c,
                                    favoriteSkinCD: d
                                }, (function () {
                                    (Q.favSkinsWithoutMenu || Q.favTemplatesV2) && (p.props.scaleSkinsSVGWidthHeight(0, 3),
                                        p.props.bindViewPortWatcher(0, 3, p.state.favoriteSkinsArr),
                                        Q.favTemplatesV2 && (p.onNameChange({
                                            value: p.state.firstName,
                                            name: a.TypeCodes.fieldCd.FirstName
                                        }),
                                            p.onNameChange({
                                                value: p.state.lastName,
                                                name: a.TypeCodes.fieldCd.LastName
                                            }))),
                                        Q.comparatorSlider && (p.state.showMoreButton && p.onShowMoreTemplates(),
                                            p.setState({
                                                drawerTemplates: p.getTemplatesForComparatorToggler()
                                            }),
                                            p.props.scaleSkinsSVGWidthHeight(c, !1),
                                            p.updatePageWrapperPadding()),
                                        a.CommonHelper.setStorageValue(T.CONSTS.SHOW_FAV_TEMPLATES_POPUP, !0, a.TypeCodes.storageType.localStorage),
                                        a.CommonHelper.setStorageValue(T.CONSTS.FAVORITE_SKINS, p.state.favoriteSkinsArr, a.TypeCodes.storageType.localStorage),
                                        a.CommonHelper.setStorageValue(T.CONSTS.FAVORITE_SKINS_SKINCD, p.state.favoriteSkinCD, a.TypeCodes.storageType.localStorage)
                                }
                                )),
                                    l)
                                    (0,
                                        C.trackComparatorEvents)("builder usage", t, "clicked", null === (u = p.state.favoriteSkinsArr) || void 0 === u ? void 0 : u.length, s, "view more suggestion");
                                (0,
                                    C.trackFavoriteCTAs)("builder usage", t, "add for comparison", "clicked", null === (g = i) || void 0 === g ? void 0 : g.toLowerCase())
                            }
                        }
                        )),
                        K(p, "deleteFromFavorite", (function (e, t, n) {
                            var o;
                            e.stopPropagation();
                            var r = p.state.favoriteSkinsArr.filter((function (e) {
                                return e.id != t
                            }
                            ))
                                , s = p.state.favoriteSkinCD.filter((function (e) {
                                    return e != t
                                }
                                ));
                            p.setState({
                                favoriteSkinsArr: B(r),
                                favoriteSkinCD: s
                            }, (function () {
                                (Q.favSkinsWithoutMenu || Q.favTemplatesV2) && (p.props.scaleSkinsSVGWidthHeight(0, 3),
                                    p.props.bindViewPortWatcher(0, 3, p.state.favoriteSkinsArr)),
                                    0 == p.state.favoriteSkinCD.length && a.CommonHelper.setStorageValue(T.CONSTS.SHOW_FAV_TEMPLATES_POPUP, !1, a.TypeCodes.storageType.localStorage),
                                    Q.comparatorSlider && (p.setState({
                                        drawerTemplates: p.getTemplatesForComparatorToggler()
                                    }),
                                        p.props.scaleSkinsSVGWidthHeight(p.state.favoriteSkinsArr, !1)),
                                    a.CommonHelper.setStorageValue(T.CONSTS.FAVORITE_SKINS, r, a.TypeCodes.storageType.localStorage),
                                    a.CommonHelper.setStorageValue(T.CONSTS.FAVORITE_SKINS_SKINCD, s, a.TypeCodes.storageType.localStorage)
                            }
                            )),
                                (0,
                                    C.trackFavoriteCTAs)("builder usage", t, "remove from comparison", null, null, null, n, null === (o = p.state.favoriteSkinsArr) || void 0 === o ? void 0 : o.length)
                        }
                        )),
                        K(p, "renderSkinName", (function (e) {
                            return s.default.createElement("div", {
                                className: "skin-title-box"
                            }, s.default.createElement("h3", {
                                className: "h3 resume-title resume-title-remove-tag m-0"
                            }, e.name), !p.props.isUploadOrStandardFlow && p.renderMostPopularSkin(e.skinCD), Q.templateOrderFilter && p.renderNewSkinTag(e.skinCD))
                        }
                        )),
                        K(p, "handleCTAHover", (function () {
                            Q.favTemplatesV4 ? (!p.state.compSkinBubbles.isAddShown || !p.state.compSkinBubbles.isRemoveShown && 3 === p.state.favoriteSkinsArr.length) && (0,
                                C.trackFavoriteCTAs)("popup", null, null, "viewed", null, "favorite bubble") : (0,
                                    C.trackFavoriteCTAs)("popup", null, null, "viewed", null, "favorite bubble")
                        }
                        )),
                        K(p, "handleCTALeave", (function () {
                            if (Q.favTemplatesV4) {
                                var e = M({}, p.state.compSkinBubbles);
                                p.state.compSkinBubbles.isAddShown || (e.isAddShown = !0),
                                    3 !== p.state.favoriteSkinsArr.length || p.state.compSkinBubbles.isRemoveShown || (e.isRemoveShown = !0),
                                    p.setState({
                                        compSkinBubbles: e
                                    })
                            }
                        }
                        )),
                        K(p, "handleSkinMouseOver", (function (e) {
                            Q.flexibleCTLayout && (p.setState({
                                hoveredSkinCD: e.skinCD
                            }),
                                clearTimeout(p.mouseLeaveTimeout))
                        }
                        )),
                        K(p, "handleSkinMouseLeave", (function () {
                            Q.flexibleCTLayout && (p.mouseLeaveTimeout = setTimeout((function () {
                                p.setState({
                                    hoveredSkinCD: ""
                                })
                            }
                            ), 150))
                        }
                        )),
                        K(p, "isMarkerAvailable", (function (e) {
                            return Q.comparatorSlider && !e && p.state.favoriteSkinsArr.length > 0
                        }
                        )),
                        K(p, "isMarkerSelected", (function (e, t) {
                            return Q.comparatorSlider && !t && p.isFavoriteSkin(e)
                        }
                        )),
                        K(p, "isFavoriteSkin", (function (e) {
                            return p.state.favoriteSkinsArr.find((function (t) {
                                return t.id === e
                            }
                            ))
                        }
                        )),
                        K(p, "renderSkin", (function (e, t, n, a, o) {
                            var r, l = arguments.length > 5 && void 0 !== arguments[5] && arguments[5], i = arguments.length > 6 && void 0 !== arguments[6] && arguments[6], m = n ? e.data : e, c = null === (r = p.state.favoriteSkinsArr) || void 0 === r ? void 0 : r.findIndex((function (e) {
                                return e.skinCD == m.skinCD
                            }
                            )), d = Q.hideSkinName, g = !Q.mpintlCountryRowSelector || Q.newTemplatesOrder, u = !Q.flexibleCTLayout && !p.props.isUpdatedChooseTempate && g && !d && !p.props.tabsAlternative && null == p.state.experienceLevel, h = Q.isITJTRedesign || Q.isESJTRedesign || Q.isBRJTRedesign;
                            Q.ctNewSkinsTest && !a && (t += 4);
                            var k = !0;
                            Q.favTemplates && (k = !!Q.showRecommendedTab),
                                !Q.alternativeToTabsOnChooseTemplate || a || o || Q.ctNewSkinsTest || !k || (t += p.skinSliceNumber);
                            var f = o ? T.TemplateFilter.Favorite : a ? T.TemplateFilter.Recommended : T.TemplateFilter.All
                                , b = s.default.createElement("button", {
                                    type: "button",
                                    className: "btn btn-primary",
                                    onClick: function (e) {
                                        return p.onSkinSelection(m.skinCD, !0, e)
                                    }
                                }, Q.Localization.select_Label)
                                , x = s.default.createElement("div", {
                                    className: "favorite-btn-wrapper"
                                }, Q.favTemplatesV4 && b, s.default.createElement("button", {
                                    type: "button",
                                    className: "btn btn-favorite ".concat(3 == p.state.favoriteSkinsArr.length ? "btn-disabled" : ""),
                                    "data-buttontype": "thumbnail",
                                    "data-index": t,
                                    "data-skin": m.skinCD,
                                    "data-htmlurl": m.htmlURL,
                                    "data-svgurl": m.imageURL,
                                    "data-skin-category": f,
                                    "data-displayname": m.name,
                                    "data-color": p.state.selectedSmallSkinColor || "",
                                    onClick: function (e) {
                                        return p.state.favoriteSkinsArr.length < 3 ? p.addTofavorite(e, m.skinCD, t) : null
                                    },
                                    onMouseOver: p.handleCTAHover,
                                    onMouseLeave: p.handleCTALeave
                                }, Q.comparatorSlider && p.state.favoriteSkinsArr.length > 0 ? Q.Localization.addTemplateToComparatorText : Q.Localization.addTofavoriteCTA), !(p.state.favoriteSkinsArr.length < 3) || Q.favTemplatesV4 && p.state.compSkinBubbles.isAddShown ? (!Q.favTemplatesV4 || !p.state.compSkinBubbles.isRemoveShown && 3 === p.state.favoriteSkinsArr.length) && s.default.createElement("div", {
                                    className: "custom-tooltip custom-tooltip-primary ".concat(!Q.favoriteTemplate && !Q.filterTabsAlternative || Q.favTemplatesV4 ? "custom-tooltip-bottom" : "custom-tooltip-top")
                                }, s.default.createElement("span", {
                                    className: "custom-tooltip-content-wrap",
                                    dangerouslySetInnerHTML: {
                                        __html: Q.Localization.bubbleTextOnLimitReached
                                    }
                                })) : s.default.createElement("div", {
                                    className: "custom-tooltip custom-tooltip-primary ".concat(!Q.favoriteTemplate && !Q.filterTabsAlternative || Q.favTemplatesV4 ? "custom-tooltip-bottom" : "custom-tooltip-top")
                                }, s.default.createElement("span", {
                                    className: "custom-tooltip-content-wrap",
                                    dangerouslySetInnerHTML: {
                                        __html: Q.Localization.BubbleTxtOnHoverfavoriteCTA
                                    }
                                })))
                                , v = s.default.createElement("div", {
                                    className: "favorite-btn-wrapper"
                                }, Q.favTemplatesV4 && b, s.default.createElement("button", {
                                    type: "button",
                                    className: "btn btn-delete-favorite",
                                    "data-buttontype": "thumbnail",
                                    "data-index": t,
                                    "data-skin": m.skinCD,
                                    "data-htmlurl": m.htmlURL,
                                    "data-svgurl": m.imageURL,
                                    "data-displayname": m.name,
                                    "data-color": p.state.selectedSmallSkinColor || "",
                                    onClick: function (e) {
                                        return p.deleteFromFavorite(e, m.skinCD, m.name)
                                    }
                                }, Q.Localization.deleteFromFavoriteCTA))
                                , C = {
                                    "data-buttontype": "thumbnail",
                                    "data-index": t,
                                    "data-skin": m.skinCD,
                                    "data-htmlurl": m.htmlURL,
                                    "data-svgurl": m.imageURL,
                                    "data-displayname": m.name,
                                    "data-color": p.state.selectedSmallSkinColor || "",
                                    "data-skin-category": f
                                };
                            return s.default.createElement(s.default.Fragment, null, s.default.createElement("div", {
                                className: "card-wrap js-thumbnail-animation".concat(Q.onboardingRevamp ? "" : " slide-in", " ").concat(l || i ? "no-animation" : ""),
                                key: e.data.id,
                                onClick: !Q.skipChooseeTemplateINTL || Q.skipTemplateSelection || Q.favTemplatesV4 ? void 0 : function (e) {
                                    return p.onSkinSelection(m.skinCD, !0, e)
                                }
                                ,
                                "data-skin-category": f
                            }, Q.labelOnChooseTemplate && p.renderCatLabel(m.skinCD), s.default.createElement("div", {
                                className: "skins-card-container",
                                style: "MFR" == Q.PortalSettings.ConfigurePortalCd ? M({}, {
                                    flexDirection: "column-reverse"
                                }) : {}
                            }, u && h ? p.renderSkinName(m) : null, s.default.createElement("div", {
                                className: "card js-thumbnail-index modal-preview-user-select-state ".concat((Q.favTemplatesV4 || Q.flexibleCTLayout || Q.ctTriStatePhotoToggle) && p.state.selectedSkinCD == m.skinCD ? "selected-template" : ""),
                                key: t,
                                "data-index": t,
                                "data-skin-category": f
                            }, Q.showPopularLabel && !Q.labelOnChooseTemplate && p.renderMostPopularSkin(m.skinCD), null == p.state.experienceLevel && !Q.labelOnChooseTemplate && !Q.flexibleCTLayout && !i && p.renderNewSkin(m.skinCD), n && e.component ? s.default.createElement("div", {
                                className: "svg-skin ".concat(p.isMarkerSelected(e.data.id, i) ? "selected" : "")
                            }, s.default.createElement(L.default, {
                                component: e.component
                            })) : s.default.createElement("img", {
                                src: m.imageURL,
                                className: "svg-skin"
                            }), (Q.onboardingRevamp || Q.isfavoriteTemplates && !o && p.isFavoriteSkin(e.data.id) || p.isMarkerAvailable(i)) && s.default.createElement("i", {
                                className: "fav-skin-marker ".concat(p.isMarkerSelected(e.data.id, i) ? "selected" : "")
                            }), s.default.createElement("div", V({
                                className: "card-img-overlay",
                                onMouseOver: function () {
                                    return p.handleSkinMouseOver(m)
                                },
                                onMouseOut: function () {
                                    return p.handleSkinMouseLeave()
                                },
                                onClick: Q.onboardingRevamp && p.createDocument,
                                "data-buttontype": "thumbnail"
                            }, C), Q.favTemplatesV4 && !o && c < 0 && !i && x, Q.favTemplatesV4 && c > -1 && !i && v, s.default.createElement("div", {
                                className: "content"
                            }, Q.showTemplatePreview && s.default.createElement("button", {
                                type: "button",
                                onClick: function (e) {
                                    return !Q.flexibleCTLayout && p.preview.showHideTemplatePreview(!0, e, !1, o)
                                },
                                className: "btn btn-link",
                                "data-index": t,
                                "data-skin": m.skinCD
                            }, p.props.Localization.previewTemplate_Text), !l && !Q.flexibleCTLayout && !i && !(Q.comparatorSlider && p.state.favoriteSkinsArr.length > 0) && s.default.createElement("button", V({
                                type: "button",
                                className: "btn ".concat(p.changeTemplateFeature ? "btn-default" : "btn-primary", " ").concat(Q.comparatorSlider ? "full-width" : "")
                            }, C, {
                                onClick: function (e) {
                                    p.changeTemplateFeature || Q.skipTemplateSelection ? p.onSkinSelection(m.skinCD) : p.createDocument(e)
                                }
                            }), p.props.Localization.selectTemplate_Text), Q.comparatorSlider && !p.state.favoriteSkinsArr.length > 0 && s.default.createElement("span", {
                                className: "btn-separator"
                            }, Q.Localization.seperatorText), !Q.favTemplatesV4 && Q.favTemplates && !o && c < 0 && !i && x, !Q.favTemplatesV4 && Q.favTemplates && c > -1 && !i && v)), (Q.ctSkinChanges || Q.showPDFBadge) && !Q.onboardingRevamp && !i && s.default.createElement("ul", {
                                className: "list-badge"
                            }, s.default.createElement("li", {
                                className: "list-item-badge"
                            }, Q.Localization.PDF_txt), s.default.createElement("li", {
                                className: "list-item-badge"
                            }, Q.Localization.Word_txt))), u && !h ? p.renderSkinName(m) : null, Q.templateOrderFilter && Q.isCountrySA_AE_IN && !Q.labelOnChooseTemplate && s.default.createElement("div", {
                                className: "skin-title-box"
                            }, p.renderNewSkinTag(m.skinCD)))))
                        }
                        )),
                        K(p, "renderSkinPopup", (function (e, t, n) {
                            var a = n ? e.data : e;
                            return s.default.createElement("div", {
                                className: "resume-preview"
                            }, s.default.createElement("div", {
                                className: "skin-loader-img ct-modal-loader"
                            }), n && e.component ? s.default.createElement("div", {
                                className: "svg-skin"
                            }, s.default.createElement(L.default, {
                                component: e.component
                            })) : s.default.createElement("img", {
                                src: a.imageURL,
                                className: "svg-skin"
                            }))
                        }
                        )),
                        K(p, "setSmallSkinSelectedColor", (function (e, t) {
                            var n = !1;
                            if ("click" == t) {
                                localStorage.setItem(T.CONSTS.SELECTED_SKIN_THEME, JSON.stringify(e)),
                                    n = !0;
                                for (var a = document.querySelectorAll(".skins-card-container .card-img-overlay .btn.btn-primary"), o = 0; o < a.length; o++)
                                    a[o].setAttribute("data-color", e)
                            }
                            p.setState({
                                selectedSmallSkinColor: e,
                                skinClicked: n
                            })
                        }
                        )),
                        K(p, "setSelectedColorName", (function (e) {
                            p.setState({
                                selectedSkinColorName: e
                            })
                        }
                        )),
                        K(p, "onNameChange", (function (e) {
                            var t = e.target ? e.target.value : e.value
                                , n = e.target ? e.target.name : e.name
                                , o = (0,
                                    v.getDummyDocument)().sections.find((function (e) {
                                        return e.sectionTypeCD === a.TypeCodes.sectionTypeCd.Name
                                    }
                                    )).paragraphs[0].docDatas
                                , r = a.CommonHelper.getCharValue(o, a.TypeCodes.fieldCd.FirstName)
                                , s = a.CommonHelper.getCharValue(o, a.TypeCodes.fieldCd.LastName)
                                , l = p.state.firstName ? p.state.firstName : r
                                , i = p.state.lastName ? p.state.lastName : s;
                            n === a.TypeCodes.fieldCd.FirstName ? (document.querySelectorAll(".page-choose-template #FIELD_FNAM").forEach((function (e) {
                                e.innerHTML = t || r
                            }
                            )),
                                document.querySelectorAll(".page-choose-template #SUBSTR_FALN").forEach((function (e) {
                                    e.innerHTML = (t ? t.split("")[0] : r.split("")[0]) + i.split("")[0]
                                }
                                )),
                                document.querySelectorAll(".page-choose-template #SUBSTR_FELL, .page-choose-template #SUBSTR_FNAM").forEach((function (e) {
                                    e.innerHTML = t ? t.split("")[0] : r.split("")[0]
                                }
                                )),
                                p.setState({
                                    firstName: t
                                })) : (document.querySelectorAll(".page-choose-template #FIELD_LNAM").forEach((function (e) {
                                    e.innerHTML = t || s
                                }
                                )),
                                    document.querySelectorAll(".page-choose-template #SUBSTR_FALN").forEach((function (e) {
                                        e.innerHTML = l.split("")[0] + (t ? t.split("")[0] : s.split("")[0])
                                    }
                                    )),
                                    document.querySelectorAll(".page-choose-template #SUBSTR_LNAM").forEach((function (e) {
                                        e.innerHTML = t ? t.split("")[0] : s.split("")[0]
                                    }
                                    )),
                                    p.setState({
                                        lastName: t
                                    })),
                                p.props.useSignature && p.setSignature && p.setSignature(r, s)
                        }
                        )),
                        K(p, "onDocTitleChange", (function (e) {
                            var t = e.target ? e.target.value : e.value
                                , n = (0,
                                    v.getDummyDocument)().sections.find((function (e) {
                                        return e.sectionTypeCD === a.TypeCodes.sectionTypeCd.Name
                                    }
                                    )).paragraphs[0].docDatas
                                , o = a.CommonHelper.getCharValue(n, a.TypeCodes.fieldCd.DocumentTitle);
                            document.querySelectorAll(".page-choose-template #FIELD_DCTL").forEach((function (e) {
                                e.innerHTML = t || o
                            }
                            )),
                                p.setState({
                                    docTitle: t
                                })
                        }
                        )),
                        K(p, "expeLevelRecommSkins", (function () {
                            if (Q.mpintlCountryRowSelector) {
                                p.removeSelectedOnFilter(),
                                    p.setState({
                                        selectedSkinCD: "",
                                        doShowAllTemplates: !1
                                    }, (function () {
                                        p.props.onFilterClick(T.TemplateFilter.Recommended),
                                            Q.SkinFromWP && !p.state.selectedSkinCD && (p.onSkinSelection(Q.SkinFromWP),
                                                p.removeSelectedOnFilter())
                                    }
                                    ));
                                Q.TrackEvents("builder usage", {
                                    action: "clicked",
                                    "click option": "template categories",
                                    "template category": "recommended",
                                    "screen name": "choose template"
                                }, Q.getUserUId(), a.CommonHelper.isLoggedInUser(Q.UserClaims), !1)
                            }
                        }
                        )),
                        K(p, "setHeadingText", (function () {
                            var e, t, n, a = p.props.headingJSX, o = !1, r = Q.Localization.countryList || X.Countries;
                            if (Q.mpintlCountryRowSelector && p.templatePageFilter.selectedOrder == T.TemplateFilter.Recommended) {
                                var l = r[p.props.selectedCountryCode] && r[p.props.selectedCountryCode].countryName;
                                l && (t = Q.Localization.heading_Recommended.replace("{0}", "<strong>" + l.toUpperCase() + "</strong>"),
                                    t = (0,
                                        b.isPersonalisedFlow)() ? Q.Localization.resumeLookLike_Text : t,
                                    o = !0)
                            }
                            if (p.props.isUpdatedChooseTempate && (t = Q.Localization.updated_heading,
                                n = Q.Localization.updated_subheading,
                                o = !0),
                                Q.newOnboardingFlowES || Q.newOnboardingFlowBR) {
                                var i = (0,
                                    b.getExperienceLevel)(!1).replace(" ", "_");
                                if (["student", "0_Years", "0-3_Years"].includes(i)) {
                                    var m = "heading_".concat(i)
                                        , c = "subheading_".concat(i);
                                    t = Q.Localization[m],
                                        n = Q.Localization[c],
                                        o = !0
                                }
                            }
                            if (p.showNewUploadChanges && (t = Q.Localization.resumeLookLikeUploadFlow_Text,
                                n = Q.Localization.scrolToViewUploadFlow_Text,
                                o = !0),
                                o && (a = s.default.createElement("div", {
                                    className: "page-title-wrap"
                                }, s.default.createElement("h1", {
                                    className: "page-title",
                                    dangerouslySetInnerHTML: {
                                        __html: t
                                    }
                                }), s.default.createElement("p", {
                                    className: "sub-title",
                                    id: "subheadCT",
                                    dangerouslySetInnerHTML: {
                                        __html: n
                                    }
                                }))),
                                Q.newOnBoardingFlowFR) {
                                var d = (0,
                                    b.getExperienceLevel)(!1).replace(" ", "_");
                                if (d) {
                                    var g = "heading_".concat(d);
                                    t = Q.Localization[g],
                                        n = Q.Localization.updated_subheading,
                                        a = s.default.createElement("div", {
                                            className: "page-title-wrap"
                                        }, s.default.createElement("h1", {
                                            className: "page-title",
                                            dangerouslySetInnerHTML: {
                                                __html: t
                                            }
                                        }), s.default.createElement("p", {
                                            className: "sub-title",
                                            id: "subheadCT",
                                            dangerouslySetInnerHTML: {
                                                __html: n
                                            }
                                        }))
                                }
                            }
                            if ((Q.getExperimentVariant(Q.portalExperiments.templatesPerRowChangeTest) > 2 && null !== (e = Q.portalExperiments.templatesPerRowChangeTest) && void 0 !== e && e.isBR || Q.templatesPerRowChange) && (t = Q.Localization.ct_heading_5_flow,
                                n = Q.Localization.ct_subheading_5_flow,
                                Q.addTopFiveSkinToRecom && (n = Q.Localization.updated_subheading),
                                a = s.default.createElement("div", {
                                    className: "page-title-wrap"
                                }, s.default.createElement("h1", {
                                    className: "page-title",
                                    dangerouslySetInnerHTML: {
                                        __html: t
                                    }
                                }), s.default.createElement("p", {
                                    className: "sub-title",
                                    id: "subheadCT",
                                    dangerouslySetInnerHTML: {
                                        __html: n
                                    }
                                }))),
                                (0,
                                    b.is0YOEMUK)() && 3 != Q.getExperimentVariant(Q.portalExperiments.onBoardingQuestionTest)) {
                                var u = (0,
                                    b.getExperienceLevel)(!1).replace(" ", "_");
                                if (u) {
                                    var h = "heading_".concat(u);
                                    t = Q.Localization[h],
                                        n = Q.isUploadFlow ? Q.Localization.clickToViewCTSubheading : Q.Localization.scrolToView_Text
                                }
                            }
                            return Q.filterTemplates && (a = s.default.createElement("div", {
                                className: "page-title-wrap"
                            }, s.default.createElement("h1", {
                                className: "page-title",
                                dangerouslySetInnerHTML: {
                                    __html: Q.Localization.resumeLookLike_Text
                                }
                            }), s.default.createElement("p", {
                                className: "sub-title",
                                id: "subheadCT"
                            }, Q.Localization.scrolToView_Text))),
                                a
                        }
                        )),
                        K(p, "getFilteredSkins", (function (e, t) {
                            return t ? t.map((function (t) {
                                return e.find((function (e) {
                                    return e.skinCD == t
                                }
                                ))
                            }
                            )).filter((function (e) {
                                return !!e
                            }
                            )) : e
                        }
                        )),
                        K(p, "showConversationalPopUp", (function (e, t) {
                            e || t ? p.closeExperienceModal(e, t) : (p.setState({
                                showLottieAnimation: !0,
                                experienceModal: !1,
                                showModalForStudentFlow: !1
                            }),
                                setTimeout((function () {
                                    document.querySelector(".modal-conversational-UI-anim").classList.add("active"),
                                        document.querySelector(".animation-text").innerHTML = Q.Localization.ctLottieLoaderText2
                                }
                                ), 4e3))
                        }
                        )),
                        K(p, "closeExperienceModal", (function (e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3
                                , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2e3
                                , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2500
                                , s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 3500
                                , l = p.getSkins();
                            p.setState({
                                skinsToRender: l,
                                skins: l,
                                selectedSkinCD: ""
                            }, (function () {
                                var e, t;
                                p.callLazyLoadSkins(!0),
                                    null === (e = document.getElementsByClassName("selected-template")[0]) || void 0 === e || null === (t = e.classList) || void 0 === t || t.remove("selected-template")
                            }
                            )),
                                p.props.modifySubHeader(),
                                p.props.modifyExpLevelCTAOnCT(),
                                document.documentElement.scrollTop > 300 && window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                }),
                                p.setState({
                                    experienceModal: !1,
                                    showModalForStudentFlow: !1
                                }, (function () {
                                    setTimeout((function () {
                                        var e;
                                        null === (e = document.getElementsByClassName("icon-dart-arrow")[0]) || void 0 === e || e.classList.add("slide-top-down")
                                    }
                                    ), n),
                                        setTimeout((function () {
                                            var e;
                                            null === (e = document.getElementsByClassName("dart-arrow-outer-container")[0]) || void 0 === e || e.classList.add("move-left")
                                        }
                                        ), o),
                                        setTimeout((function () {
                                            var e;
                                            null === (e = document.getElementsByClassName("section-select-explevel-outline")[0]) || void 0 === e || e.classList.add("slide-left")
                                        }
                                        ), r),
                                        setTimeout((function () {
                                            var e;
                                            null === (e = document.getElementsByClassName("section-select-explevel-container")[0]) || void 0 === e || e.classList.add("fade-in-view")
                                        }
                                        ), s)
                                }
                                ));
                            e && Q.TrackEvents("builder usage", {
                                action: "clicked",
                                "screen name": "experience level",
                                "click option": "close"
                            }, Q.getUserUId(), a.CommonHelper.isLoggedInUser(Q.UserClaims), !1)
                        }
                        )),
                        K(p, "onYOEFilterChange", (function (e) {
                            var t = p.state.skins
                                , n = Q.skins
                                , a = (0,
                                    b.getExperienceRange)().replace(" ", "_");
                            Q.newOnboardingFlowUK && (a = (0,
                                b.ExprRange)().replace(" ", "_"));
                            var o = Q.newOnboardingFlowUK ? Q.portalExperiments.onBoardingQuestionTest.templateArray[a] : Q.templateFilters[a];
                            "recommended" == e && Q.isFiveTemplateForFR && (o = o.slice(0, Q.skinSliceNumber)),
                                p.removeSelectedOnFilter(),
                                "all" == e ? (Q.mpfrROWCACHBE && ((0,
                                    b.isCountryBE)() || (0,
                                        b.isCountryCH)()) && (n = (0,
                                            b.getOptimalTemplateSkins)(p.props)),
                                    t = n) : t = Q.newOnboardingFlowUK ? o : p.getFilteredSkins(n, o),
                                p.setState({
                                    selectedSkinCD: "",
                                    skins: t,
                                    currentExpFilter: e,
                                    showMoreButton: !1,
                                    pageLoadComplete: !1
                                }, (function () {
                                    p.props.onFilterClick(e),
                                        p.counter = 1,
                                        p.callLazyLoadSkins(!0)
                                }
                                ))
                        }
                        )),
                        K(p, "trackFilterValueSelected", (function (e, t) {
                            var n = "";
                            switch (t) {
                                case T.ChooseTemplateFilter.COLORED:
                                    n = Q.chooseTemplateFiltersV2 ? 1 == e ? "colorful" : "classic" : 1 == e ? "Colour" : "Black&White";
                                    break;
                                case T.ChooseTemplateFilter.COLUMN:
                                    n = e + " column";
                                    break;
                                case T.ChooseTemplateFilter.PHOTO:
                                    n = 1 == e ? "With photo" : "Without photo";
                                    break;
                                case T.ChooseTemplateFilter.DESIGN:
                                    n = "modern" == e ? "modern" : "classic";
                                    break;
                                case T.ChooseTemplateFilter.CATEGORY:
                                    n = e
                            }
                            var o = {
                                action: "clicked",
                                "click option": "".concat(n),
                                "screen name": "choose template"
                            };
                            Q.TrackEvents("builder usage", o, Q.getUserUId(), a.CommonHelper.isLoggedInUser(Q.UserClaims), !1)
                        }
                        )),
                        K(p, "setTemplateFilters", (function (e, t) {
                            var n, o, r, s, l, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], m = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], c = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], d = null === (n = document.getElementById("page-loader")) || void 0 === n ? void 0 : n.classList;
                            null == d || d.remove("hide");
                            var g = ""
                                , u = M({}, p.state.selectedTemplateFilter);
                            m || (Q.sideBarFilters ? (g = e,
                                p.setState({
                                    resetSidebarFilter: !1
                                }),
                                g ? u[t] = g : delete u[t]) : (g = e.value,
                                    p.trackFilterValueSelected(e.value, t),
                                    u[t] = g)),
                                Q.chooseTemplatePhotoToggle && "photo" == t && !c && p.setState({
                                    isPhotoToggleOn: "0" != g
                                }),
                                p.setState({
                                    selectedTemplateFilter: M({}, u),
                                    pageLoadComplete: !0
                                });
                            var h = a.CommonHelper.getStorageValue(T.CONSTS.TEMPLATE_SELECTED_FILTER, a.TypeCodes.storageType.sessionStorage)
                                , k = M(M({}, h), u);
                            i && (k = M(M(M({}, h), u), {}, K({}, t, "all"))),
                                a.CommonHelper.setStorageValue(T.CONSTS.TEMPLATE_SELECTED_FILTER, k, a.TypeCodes.storageType.sessionStorage);
                            var f = Q.templateOrderFilter ? Q.portalExperiments.newSkinsFilterTest.skinsFilterCriteria : Q.filterTemplates ? null === (o = Q.portalExperiments.CTFilterNFavTest) || void 0 === o ? void 0 : o.skinsFilterCriteria : Q.chooseTmplatsFilter ? (null === (r = Q.portalExperiments.mpitBundleImprovementsTest) || void 0 === r ? void 0 : r.skinsFilterCriteria) || (null === (s = Q.portalExperiments.chooseTemplateFiltersV2Test) || void 0 === s ? void 0 : s.skinsFilterCriteria) : null == Q ? void 0 : Q.skinsFilterCriteria;
                            if (Q.templateOrderFilter && u[T.ChooseTemplateFilter.CATEGORY]) {
                                var b = Q.NewSkins
                                    , x = Q.PopularSkins.split(" ")
                                    , v = u[T.ChooseTemplateFilter.CATEGORY].split(",");
                                if (null == v || !v.includes(T.chooseTemplateFilterValue.ALL))
                                    if (v.length > 1) {
                                        var C = []
                                            , S = null == b ? void 0 : b.map((function (e) {
                                                return e.skinCD
                                            }
                                            ))
                                            , y = [].concat(B(S), B(x));
                                        null == y || y.forEach((function (e) {
                                            var t, n = null === (t = f) || void 0 === t ? void 0 : t.find((function (t) {
                                                var n;
                                                return (null === (n = t.skinCD) || void 0 === n ? void 0 : n.toLowerCase()) == (null == e ? void 0 : e.toLowerCase())
                                            }
                                            ));
                                            n && C.push(n)
                                        }
                                        )),
                                            f = C
                                    } else {
                                        var E = [];
                                        v[0] == T.chooseTemplateFilterValue.NEW && (null == b || b.forEach((function (e) {
                                            var t, n = null === (t = f) || void 0 === t ? void 0 : t.find((function (t) {
                                                var n, a;
                                                return (null === (n = t.skinCD) || void 0 === n ? void 0 : n.toLowerCase()) == (null == e || null === (a = e.skinCD) || void 0 === a ? void 0 : a.toLowerCase())
                                            }
                                            ));
                                            n && E.push(n)
                                        }
                                        ))),
                                            v[0] == T.chooseTemplateFilterValue.POPULAR && (null == x || x.forEach((function (e) {
                                                var t, n = null === (t = f) || void 0 === t ? void 0 : t.find((function (t) {
                                                    var n;
                                                    return (null === (n = t.skinCD) || void 0 === n ? void 0 : n.toLowerCase()) == (null == e ? void 0 : e.toLowerCase())
                                                }
                                                ));
                                                n && E.push(n)
                                            }
                                            ))),
                                            f = E
                                    }
                                delete u[T.ChooseTemplateFilter.CATEGORY]
                            }
                            var w = [];
                            null === (l = f) || void 0 === l || l.map((function (e) {
                                var t = 0;
                                Object.entries(u).forEach((function (n) {
                                    var a = D(n, 2)
                                        , o = a[0]
                                        , r = a[1]
                                        , s = Q.chooseTemplatePhotoToggle && "photo" === o && "0" === r;
                                    ((isNaN(Number(e[o])) ? e[o] : Number(e[o])) == r || s) && (t += 1)
                                }
                                )),
                                    t === Object.keys(u).length && w.push(e.skinCD.toLowerCase())
                            }
                            ));
                            var L = Object.keys(k).length > 0 && (Q.hideRecommWithFilters || Q.chooseTemplateFiltersV2) ? Q.skins : p.state.skins
                                , _ = null == L ? void 0 : L.filter((function (e) {
                                    return w.includes(e.skinCD.toLowerCase())
                                }
                                ));
                            0 == _.length ? p.setState({
                                noDataFound: !0
                            }) : p.setState({
                                noDataFound: !1
                            }),
                                p.setState((function (e) {
                                    return M(M({}, e), {}, {
                                        skinsToRender: _,
                                        pageLoadComplete: !0,
                                        showMoreButton: !1
                                    })
                                }
                                ), (function () {
                                    (p.props.isUpdatedChooseTempate || Q.chooseTemplateNameAndSurname) && (p.onNameChange({
                                        value: p.state.firstName,
                                        name: a.TypeCodes.fieldCd.FirstName
                                    }),
                                        p.onNameChange({
                                            value: p.state.lastName,
                                            name: a.TypeCodes.fieldCd.LastName
                                        }))
                                }
                                )),
                                p.renderAllSkins(),
                                setTimeout((function () {
                                    d.add("hide")
                                }
                                ), 1e3)
                        }
                        )),
                        K(p, "resetTemplateFilters", (function () {
                            var e = document.getElementById("page-loader").classList;
                            null == e || e.remove("hide"),
                                a.CommonHelper.deleteStorageValue(T.CONSTS.TEMPLATE_SELECTED_FILTER, a.TypeCodes.storageType.sessionStorage),
                                p.setState({
                                    skinsToRender: B(p.state.skins),
                                    selectedTemplateFilter: {},
                                    noDataFound: !1,
                                    isPhotoToggleOn: Q.chooseTemplatePhotoToggle
                                }, (function () {
                                    (p.props.isUpdatedChooseTempate || Q.chooseTemplateNameAndSurname) && (p.onNameChange({
                                        value: p.state.firstName,
                                        name: a.TypeCodes.fieldCd.FirstName
                                    }),
                                        p.onNameChange({
                                            value: p.state.lastName,
                                            name: a.TypeCodes.fieldCd.LastName
                                        }))
                                }
                                )),
                                Q.sideBarFilters && p.setState({
                                    resetSidebarFilter: !0
                                }),
                                setTimeout((function () {
                                    e.add("hide")
                                }
                                ), 100)
                        }
                        )),
                        K(p, "toggleFilters", (function (e) {
                            e.preventDefault();
                            var t, n, o, r, s = document.getElementsByClassName("color-selector-main")[0];
                            (p.setState((function (e) {
                                return {
                                    showFilters: !e.showFilters
                                }
                            }
                            )),
                                p.state.showFilters) ? (null == s || null === (t = s.classList) || void 0 === t || t.remove("hide-filters"),
                                    null == s || null === (n = s.classList) || void 0 === n || n.add("show-filters")) : (null == s || null === (o = s.classList) || void 0 === o || o.remove("show-filters"),
                                        null == s || null === (r = s.classList) || void 0 === r || r.add("hide-filters"));
                            var l = p.state.showFilters ? T.CONSTS.SHOW_FILTER_TEXT : T.CONSTS.HIDE_FILTER_TEXT
                                , i = {
                                    action: "clicked",
                                    "click option": "".concat(l),
                                    "screen name": "choose template"
                                };
                            Q.TrackEvents("builder usage", i, Q.getUserUId(), a.CommonHelper.isLoggedInUser(Q.UserClaims), !1)
                        }
                        )),
                        K(p, "handleComparatorHover", (function (e) {
                            p.setState({
                                showComparator: e
                            })
                        }
                        )),
                        K(p, "renderColorPanel", (function () {
                            return s.default.createElement("div", {
                                className: "color-panel"
                            }, s.default.createElement("span", {
                                className: "color-panel-title"
                            }, Q.Localization.change_color), s.default.createElement("div", {
                                className: "color-selector-main"
                            }, s.default.createElement("div", {
                                className: "color-list-wrap"
                            }, s.default.createElement(O.default, {
                                ref: function (e) {
                                    return p.colorpicker = e
                                },
                                trackEvents: p.props.trackEvents,
                                colorselectorlocation: "choose template",
                                colorThemes: Q.colorPickerUnderOpen ? p.props.colorsDrop : p.props.colors,
                                skinColor: p.props.skinColor,
                                docTheme: p.state.selectedSmallSkinColor,
                                skinClicked: p.state.skinClicked,
                                setSmallSkinSelectedColor: p.setSmallSkinSelectedColor,
                                isUpdatedChooseTempate: p.props.isUpdatedChooseTempate,
                                setSelectedColorName: p.setSelectedColorName
                            }))))
                        }
                        )),
                        K(p, "renderLayoutSwitcher", (function () {
                            return s.default.createElement("div", {
                                className: "layout-switcher"
                            }, s.default.createElement("label", {
                                className: "layout-switcher-label"
                            }, Q.Localization.templateView_title_caps), s.default.createElement("div", {
                                className: "layout-switcher-actions"
                            }, s.default.createElement("button", {
                                className: "layout-switch switch-layout-big-preview ".concat(2 === p.state.templatePerRow && p.state.skinPreviewEnabled ? "active" : ""),
                                onClick: function (e) {
                                    return p.changeLayout(e, 2, !0)
                                },
                                "data-title": Q.Localization.previewLayoutTip
                            }, s.default.createElement("i", {
                                className: "icon-layout-big-preview"
                            })), s.default.createElement("button", {
                                className: "layout-switch switch-layout-side-by-side-view ".concat(2 !== p.state.templatePerRow || p.state.skinPreviewEnabled ? "" : "active"),
                                onClick: function (e) {
                                    return p.changeLayout(e, 2, !1)
                                },
                                "data-title": Q.Localization.gridLayout2Tip
                            }, s.default.createElement("i", {
                                className: "icon-layout-side-by-side-view"
                            })), s.default.createElement("button", {
                                className: "layout-switch switch-layout-grid-view ".concat(4 === p.state.templatePerRow ? "active" : ""),
                                onClick: function (e) {
                                    return p.changeLayout(e, 4, !1)
                                },
                                "data-title": Q.Localization.gridLayout4Tip
                            }, s.default.createElement("i", {
                                className: "icon-layout-grid-view"
                            }))))
                        }
                        )),
                        K(p, "togglePhoto", (function () {
                            var e = {
                                action: "clicked",
                                "click option": p.state.isPhotoToggleOn ? "switched off photo filter" : "switched on photo filter",
                                "screen name": "choose template"
                            };
                            Q.TrackEvents("builder usage", e, Q.getUserUId(), a.CommonHelper.isLoggedInUser(Q.UserClaims), !1),
                                Q.startPageLoader(),
                                p.state.selectedTemplateFilter.photo && p.setTemplateFilters("", "photo", !1, !1, !0),
                                p.setState({
                                    isPhotoToggleOn: !p.state.isPhotoToggleOn,
                                    updateFilterTemplates: !p.state.updateFilterTemplates
                                }, (function () {
                                    Q.closePageLoader()
                                }
                                ))
                        }
                        )),
                        K(p, "setPhotoToggleState", (function (e) {
                            var t = {
                                photoToggleState: e,
                                pageLoadComplete: !0
                            };
                            e === x.PHOTO_TOGGLE_STATES.onlyPhoto ? (t.skinsToRender = p.state.skins.filter((function (e) {
                                return e.isPhoto
                            }
                            )),
                                t.isPhotoToggleOn = !0) : (t.skinsToRender = p.state.skins,
                                    t.isPhotoToggleOn = e === x.PHOTO_TOGGLE_STATES.all),
                                p.setState(t);
                            var n = K(K(K({}, x.PHOTO_TOGGLE_STATES.all, "toggle all"), x.PHOTO_TOGGLE_STATES.noPhoto, "toggle non photo"), x.PHOTO_TOGGLE_STATES.onlyPhoto, "toggle photo");
                            (0,
                                S.trackBuilderUsagewithClickedOption)("clicked", n[e], "choose template")
                        }
                        )),
                        K(p, "onFiltersBtnClick", (function () {
                            p.filterPanelRef.current.openPanel(),
                                (0,
                                    S.trackBuilderUsagewithClickedOption)("clicked", "show filters", "choose template")
                        }
                        )),
                        K(p, "onShowTemplatesClick", (function () {
                            p.filterPanelRef.current.closePanel(),
                                (0,
                                    S.trackBuilderUsagewithClickedOption)("clicked", "show templates", "choose template")
                        }
                        )),
                        K(p, "onResetTemplatesClick", (function () {
                            p.resetTemplateFilters(),
                                p.filterPanelRef.current.closePanel(),
                                (0,
                                    S.trackBuilderUsagewithClickedOption)("clicked", "view all", "choose template")
                        }
                        )),
                        K(p, "getTriStatePhotoToggleLabel", (function () {
                            return p.state.photoToggleState === x.PHOTO_TOGGLE_STATES.onlyPhoto ? Q.Localization.labelOnlyPhotoSkins : p.state.photoToggleState === x.PHOTO_TOGGLE_STATES.all ? Q.Localization.labelAllSkins : Q.Localization.labelNoPhotoSkins
                        }
                        )),
                        K(p, "getTriStatePhotoToggleButtons", (function () {
                            return Object.values(x.PHOTO_TOGGLE_STATES).map((function (e, t) {
                                var n, a = ["btn-three-state"];
                                return p.state.photoToggleState === e && a.push("active"),
                                    e === x.PHOTO_TOGGLE_STATES.onlyPhoto ? a.push("btn-photo") : e === x.PHOTO_TOGGLE_STATES.all ? (a.push("btn-all"),
                                        n = Q.Localization.allText) : a.push("btn-no-photo"),
                                    s.default.createElement("button", {
                                        key: t,
                                        type: "button",
                                        className: a.join(" "),
                                        onClick: function () {
                                            return p.setPhotoToggleState(e)
                                        }
                                    }, n)
                            }
                            ))
                        }
                        )),
                        p.docTheme = "",
                        p.counter = 1,
                        p.skinSliceNumber = Q.skinSliceNumber ? Q.skinSliceNumber : 6,
                        p.templatePageFilter = p.props.templatePageFilter,
                        p.changeTemplateFeature = Q.getExperimentVariant(Q.portalExperiments.changeTemplateFeature) > 2 && (null === (n = Q.portalExperiments.changeTemplateFeature) || void 0 === n ? void 0 : n.isFR),
                        p.showBackOnCT = Q.isUploadFlowChooseTemplate || Q.skipTemplateSelection,
                        p.htmlClassList = document.documentElement.classList,
                        p.showNewUploadChanges = Q.newUploadFlowES,
                        p.recommendedSkins = [];
                    var i = JSON.parse((0,
                        b.getStorage)(T.CONSTS.FAVORITE_SKINS))
                        , m = (0,
                            b.getExperienceLevel)(!1);
                    return p.state = {
                        selectedSmallSkinColor: p.props.skinColor || Q.skinColorFromLP || "",
                        skinClicked: !0,
                        firstName: "",
                        lastName: "",
                        skinsToRender: [],
                        pageLoadComplete: !1,
                        scrollClass: "",
                        fadeInClass: "",
                        doShowAllTemplates: !(Q.mpintlCountryRowSelector && !Q.ctNewSkinsTest && !Q.filterTabsAlternative && p.templatePageFilter.selectedOrder != T.TemplateFilter.All || Q.doShowMoreButton),
                        experienceLevel: p.props.experienceLevel,
                        exprLevelFlag: !1,
                        skins: p.getSkins(),
                        isPhotoToggleOn: !Q.hiwPageAnimationIteration && (Q.chooseTemplatePhotoToggle || Q.ctTriStatePhotoToggle && !Q.ctTriStateNoPhotoSkin),
                        photoToggleState: Q.ctTriStateNoPhotoSkin ? x.PHOTO_TOGGLE_STATES.noPhoto : Q.ctTriStateOnlyPhotoSkin ? x.PHOTO_TOGGLE_STATES.onlyPhoto : x.PHOTO_TOGGLE_STATES.all,
                        isNewSkinsOption: !1,
                        isFavSkinsOption: (null == i ? void 0 : i.length) > 0,
                        showRecomSkins: Q.alternativeToTabsOnChooseTemplate && p.get0YOEOnboardingSkins(!0),
                        showLoadMoreButton: !1,
                        showOverlay: !1,
                        selectedSkinCD: "",
                        hoveredSkinCD: "",
                        docTitle: "",
                        currentFilter: "",
                        currentCVFilter: "all",
                        showInitalLoaderShowMore: !1,
                        currentExpFilter: "recommended",
                        showMoreButton: !!Q.doShowMoreButton,
                        selectedSkinColorName: "",
                        experienceModal: Q.isExperienceLevelOnCt || Q.onBoardingPopupV4,
                        animateLine: !1,
                        favoriteSkinsArr: [],
                        favoriteSkinCD: [],
                        showFavTooltip: !1,
                        showComparator: !1,
                        selectedTemplateFilter: {},
                        updateFilterTemplates: !1,
                        showModalForStudentFlow: !1,
                        templatePerRow: 4,
                        skinPreviewEnabled: !1,
                        compSkinBubbles: {
                            isAddShown: !1,
                            isRemoveShown: !1
                        },
                        currentExpLevel: localStorage.getItem(T.CONSTS.EXPR_LEVEL),
                        contentVisible: !1,
                        showMsg: !(!Q.yoeWithCTPersonalization || m != localStorage.getItem(T.CONSTS.EXPR_LEVEL)) || void 0,
                        showLottieAnimation: !1,
                        isPageAnimationComplete: !(null !== (l = p.props.location.state) && void 0 !== l && l.fromPrevStep),
                        isDrawerOpen: !1,
                        drawerTemplates: [{
                            id: 1,
                            isEmpty: !1
                        }, {
                            id: 2,
                            isEmpty: !1
                        }, {
                            id: 3,
                            isEmpty: !1
                        }]
                    },
                        p.dummyDoc = (0,
                            v.getDummyDocument)(Q.SkinFromPortal),
                        p.skinOnPopup = Q.skins.filter((function (e) {
                            return e.id == p.dummyDoc.skinCD
                        }
                        )),
                        p.showNewContent = (0,
                            b.showNewChooseTemplateContent)(),
                        e.useSignature && (p.setSignature = (0,
                            r.default)((function (e, t) {
                                var n = p.state.firstName || e
                                    , a = p.state.lastName || t
                                    , o = (0,
                                        v.getSignImageUrl)(n + " " + a);
                                document.querySelectorAll(".page-choose-template #FIELD_SURL img").forEach((function (e) {
                                    e.src = o
                                }
                                ))
                            }
                            ), 500)),
                        p.filterPanelRef = s.default.createRef(),
                        p.ctContainerRef = s.default.createRef(),
                        p
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        Object.defineProperty(e, "prototype", {
                            writable: !1
                        }),
                        t && Z(e, t)
                }(t, e),
                    l = t,
                    p = [{
                        key: "componentDidUpdate",
                        value: function (e, t) {
                            var n = this;
                            if (this.props.templatePageFilter != e.templatePageFilter && Q.mpintlCountryRowSelector || this.props.indexOptimalTemplateTestV2 != e.indexOptimalTemplateTestV2 && this.props.indexOptimalTemplateTestV2 > 2 || this.props.rowCanadaBuilder != e.rowCanadaBuilder && this.props.rowCanadaBuilder > 2) {
                                var a = Object.assign([], this.props.skins);
                                this.counter = 1,
                                    this.templatePageFilter = Object.assign({}, this.props.templatePageFilter),
                                    (this.props.indexOptimalTemplateTestV2 > 2 || this.props.rowCanadaBuilder > 2) && Q.includeMXskins && (0,
                                        b.addNewMXskins)(),
                                    a = this.getFilteredTemplatesByStyle(),
                                    this.setState({
                                        skins: a
                                    }, this.callLazyLoadSkins)
                            }
                            if (this.props.indexOptimalTemplateTestV2 == e.indexOptimalTemplateTestV2 && this.props.rowCanadaBuilder == e.rowCanadaBuilder || (this.props.indexOptimalTemplateTestV2 || this.props.rowCanadaBuilder) && this.setState({
                                skins: this.getSkins()
                            }),
                                this.props.isUpdatedChooseTempate != e.isUpdatedChooseTempate) {
                                if (this.counter = 1,
                                    Q.onboardingRevamp)
                                    var o = setInterval((function () {
                                        n.state.isPageAnimationComplete && (clearInterval(o),
                                            n.callLazyLoadSkins(n.props.isUpdatedChooseTempate))
                                    }
                                    ), 300);
                                else
                                    this.callLazyLoadSkins(this.props.isUpdatedChooseTempate);
                                this.updateFirstNLastName()
                            }
                            this.props.chooseTemplateFNLName != e.chooseTemplateFNLName && (this.counter = 1,
                                this.callLazyLoadSkins(this.props.isUpdatedChooseTempate),
                                this.updateFirstNLastName()),
                                Q.comparatorSlider && t.isPhotoToggleOn != this.state.isPhotoToggleOn && this.setState({
                                    drawerTemplates: this.getTemplatesForComparatorToggler()
                                }, (function () {
                                    n.updatePageWrapperPadding()
                                }
                                ))
                        }
                    }, {
                        key: "componentDidMount",
                        value: function () {
                            var e, t = this;
                            if (Q.isLPStudentFlow && (this.props.modifyExpLevelCTAOnCT(),
                                setTimeout((function () {
                                    var e;
                                    null === (e = document.getElementsByClassName("icon-dart-arrow")[0]) || void 0 === e || e.classList.add("slide-top-down")
                                }
                                ), 1e3),
                                setTimeout((function () {
                                    var e;
                                    null === (e = document.getElementsByClassName("dart-arrow-outer-container")[0]) || void 0 === e || e.classList.add("move-left")
                                }
                                ), 2e3),
                                setTimeout((function () {
                                    var e;
                                    null === (e = document.getElementsByClassName("section-select-explevel-outline")[0]) || void 0 === e || e.classList.add("slide-left")
                                }
                                ), 2500),
                                setTimeout((function () {
                                    var e;
                                    null === (e = document.getElementsByClassName("section-select-explevel-container")[0]) || void 0 === e || e.classList.add("fade-in-view")
                                }
                                ), 3500)),
                                Q.favTemplatesV2 && !Q.recomSkinsInitially && window.addEventListener("scroll", this.addScrollClass),
                                Q.favTemplates) {
                                var o = JSON.parse((0,
                                    b.getStorage)(T.CONSTS.FAVORITE_SKINS))
                                    , r = JSON.parse((0,
                                        b.getStorage)(T.CONSTS.FAVORITE_SKINS_SKINCD));
                                o && (this.setState({
                                    favoriteSkinsArr: o,
                                    favoriteSkinCD: r,
                                    isFavSkinsOption: (null == o ? void 0 : o.length) > 0
                                }, (function () {
                                    Q.comparatorSlider && t.setState({
                                        drawerTemplates: t.getTemplatesForComparatorToggler()
                                    }, (function () {
                                        t.updatePageWrapperPadding()
                                    }
                                    ))
                                }
                                )),
                                    a.CommonHelper.setStorageValue(T.CONSTS.SHOW_FAV_TEMPLATES_POPUP, !0, a.TypeCodes.storageType.localStorage))
                            }
                            this.htmlClassList.remove("page-add-section"),
                                Q.intlPhotoSkins && !Q.isRefactorJTCss && n(63515),
                                Q.mpitUpdateSampleNPhotoTest && document.documentElement.classList.add("mpitUpdateSampleNPhotoTest"),
                                (0,
                                    b.isCountryBRPT)() && this.htmlClassList.add("mpt"),
                                Q.ctNewSkinsTest && this.toggleNewSkinsOption(!0, !1, !1),
                                setTimeout((function () {
                                    if ((!Q.skipChooseeTemplateINTL || Q.fixColorPalletInHeader) && !Q.chooseTemplateFiltersV2) {
                                        var e = t.stickyElement;
                                        window.onscroll = function () {
                                            var t = document.getElementsByClassName("color-selector-main");
                                            t && e(t[0], "fixed-top")
                                        }
                                    }
                                }
                                ), 500),
                                null != document.querySelector(".single-carousel-main") && null != document.querySelector(".single-carousel-main") && document.querySelector(".single-carousel-main").addEventListener("click", (function (e) {
                                    if (e.target) {
                                        var n = e.target;
                                        if (e.target.hasAttribute("data-color"))
                                            return !1;
                                        do {
                                            if (null != n && n.classList && ["slick-next", "slick-prev", "slick-slider", "btn-largeSkin", "color-selector-radio"].some((function (e) {
                                                return n.classList.contains(e)
                                            }
                                            )))
                                                return !1
                                        } while (n == n.parentNode)
                                    }
                                    !Q.flexibleCTLayout && t.preview.showHideTemplatePreview(!1, e, "previewClose" == e.target.id)
                                }
                                )),
                                this.docTheme = JSON.parse(localStorage.getItem(T.CONSTS.SELECTED_SKIN_THEME)) || "";
                            var s = this.props.colors.find((function (e) {
                                return e.value == t.docTheme.toLowerCase()
                            }
                            ));
                            if (this.docTheme && s && s.value ? this.docTheme = s.value : this.docTheme = "",
                                this.setState({
                                    selectedSmallSkinColor: this.docTheme || this.props.skinColor
                                }),
                                Q.recomSkinsInitially && (this.counter = 1,
                                    this.setState({
                                        showMoreButton: !0,
                                        pageLoadComplete: !0,
                                        showFilters: !1,
                                        renderFilters: !1
                                    }, (function () {
                                        t.callLazyLoadSkins()
                                    }
                                    )),
                                    localStorage.getItem(T.CONSTS.SHOW_RECOM_SKINS_INITIALLY))) {
                                this.counter = 4,
                                    this.setState({
                                        showMoreButton: !1,
                                        pageLoadComplete: !1,
                                        showInitalLoaderShowMore: !0,
                                        renderFilters: localStorage.getItem(T.CONSTS.SHOW_RECOM_SKINS_INITIALLY)
                                    });
                                var l = (0,
                                    b.getExperienceLevel)(!1);
                                Q.yoeWithCTPersonalization && this.state.currentExpLevel != l ? setTimeout((function () {
                                    t.setState({
                                        contentVisible: !0
                                    }, (function () {
                                        t.callLazyLoadSkins(!0)
                                    }
                                    ))
                                }
                                ), 100) : this.callLazyLoadSkins(!0)
                            }
                            if (!Q.mpintlCountryRowSelector || Q.ctNewSkinsTest || Q.templateOrderFilter)
                                this.state.experienceLevel || Q.templateFiltersUKIE ? !Q.templateFiltersUKIE && this.renderRecommSkins() : !Q.onboardingRevamp && this.callLazyLoadSkins();
                            else {
                                var p = Object.assign([], this.props.skins);
                                this.counter = 1,
                                    this.templatePageFilter = Object.assign({}, this.props.templatePageFilter),
                                    p = this.getFilteredTemplatesByStyle(),
                                    this.setState({
                                        skins: p
                                    }, (function () {
                                        t.callLazyLoadSkins()
                                    }
                                    ))
                            }
                            if (this.updateFirstNLastName(),
                                Q.skinColorFromLP && !Q.customizationFlow && !Q.skipHiwPage) {
                                this.setState({
                                    selectedSmallSkinColor: Q.skinColorFromLP
                                });
                                var i = (0,
                                    b.getEnglishColorName)(Q.skinColorFromLP.toUpperCase());
                                this.setSelectedColorName(i),
                                    this.setSmallSkinSelectedColor(Q.skinColorFromLP, "click")
                            }
                            if (Q.showTemplateFilters && a.CommonHelper.deleteStorageValue(T.CONSTS.TEMPLATE_SELECTED_FILTER, a.TypeCodes.storageType.sessionStorage),
                                (Q.templateOrderFilter || Q.addTopFiveSkinToRecom) && this.setState({
                                    skinsToRender: this.state.skins
                                }),
                                Q.chooseTemplateNameAndSurname && this.htmlClassList.add("e-ct-name"),
                                Q.selectedLayout == T.chooseTemplateLayout.preview || !Q.selectedLayout && 4 == Q.getExperimentVariant(Q.portalExperiments.flexibleLayoutTest) ? (this.setState({
                                    skinPreviewEnabled: !0
                                }),
                                    this.setState({
                                        templatePerRow: 2
                                    })) : Q.selectedLayout == T.chooseTemplateLayout.grid2 ? (this.setState({
                                        skinPreviewEnabled: !1
                                    }),
                                        this.setState({
                                            templatePerRow: 2
                                        })) : (Q.selectedLayout == T.chooseTemplateLayout.grid4 || !Q.selectedLayout && 3 == Q.getExperimentVariant(Q.portalExperiments.flexibleLayoutTest)) && (this.setState({
                                            skinPreviewEnabled: !1
                                        }),
                                            this.setState({
                                                templatePerRow: 4
                                            })),
                                Q.flexibleCTLayout) {
                                var m = a.CommonHelper.getStorageValue("skinCD", a.TypeCodes.storageType.localStorage);
                                m && this.setState({
                                    selectedSkinCD: m
                                })
                            }
                            if (Q.yoeWithCTPersonalization) {
                                var c = (0,
                                    b.getExperienceLevel)(!1);
                                this.state.currentExpLevel != c && (this.setState({
                                    currentExpLevel: c
                                }, (function () {
                                    localStorage.setItem(T.CONSTS.EXPR_LEVEL, t.state.currentExpLevel)
                                }
                                )),
                                    localStorage.getItem(T.CONSTS.SHOW_RECOM_SKINS_INITIALLY) || setTimeout((function () {
                                        t.setState({
                                            contentVisible: !0
                                        })
                                    }
                                    ), 2e3))
                            }
                            Q.onboardingRevamp && null !== (e = this.props.location.state) && void 0 !== e && e.fromPrevStep && (setTimeout((function () {
                                document.querySelector("#footer").classList.remove("fade-out"),
                                    t.ctContainerRef.current.classList.add("fade-in")
                            }
                            ), 0),
                                setTimeout((function () {
                                    t.setState({
                                        isPageAnimationComplete: !0
                                    })
                                }
                                ), 700)),
                                this.updatePageWrapperPadding()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            this.interval && clearInterval(this.interval),
                                this.selectSkinInterval && clearInterval(this.selectSkinInterval),
                                Q.showTemplateFilters && a.CommonHelper.deleteStorageValue(T.CONSTS.TEMPLATE_SELECTED_FILTER, a.TypeCodes.storageType.sessionStorage),
                                Q.chooseTemplateNameAndSurname && this.htmlClassList.remove("e-ct-name"),
                                Q.favComparison && a.CommonHelper.deleteStorageValue(T.CONSTS.CURRENT_COMPAIRED_TEMPLATE, a.TypeCodes.storageType.localStorage)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e, t = this;
                            this.dummyDoc.skinCD = Q.SkinFromPortal;
                            var n = x.colorTags;
                            (Q.isZFR || Q.isZTUK) && (n = ".svg-skin .document.skn-srz1 .left-box{background:SDCL}.svg-skin .document.skn-srz1 .left-box .heading:before{background:SDCL}.svg-skin .document.skn-srz1 .left-box .outer-square:before{background:SDCL}.svg-skin .document.skn-srz1 .right-box .sectiontitle{color:SDCL}.svg-skin .document.skn-srz1 .right-box .inner-square{background:SDCL}.svg-skin .document.skn-srz1 .left-box .sortable-item.active .inner-square{background:SDCL}.svg-skin .document.skn-srz1._single-parent-drag .inner-square{background:SDCL}.svg-skin .document.skn-srz1 .left-box:before{background:SDCL}.svg-skin .document.skn-srz2{border-left-color:SDCL!important}.svg-skin .document.skn-srz2 .name{color:SDCL}.svg-skin .document.skn-srz2 .resumeTitle,.svg-skin .document.skn-srz2 .sectiontitle{color:SDCL}.svg-skin .document.skn-srz2 .singlecolumn:before{background:SDCL}.svg-skin .document.skn-srz2 .headingIcon svg circle{fill:SDCL}.svg-skin .document.skn-srz2 .iconRow svg circle{fill:SDCL}.svg-skin .document.skn-srz2 .ratingWrapper svg .default-fill{fill:SDCL}.svg-skin .document.skn-srz3 .name{color:SDCL}.svg-skin .document.skn-srz3 .resumeTitle,.svg-skin .document.skn-srz3 .sectiontitle{color:SDCL}.svg-skin .document.skn-srz3 .ratingWrapper svg{stroke:SDCL}.svg-skin .document.skn-srz3 .headingIcon svg circle,.svg-skin .document.skn-srz3 .ratingWrapper svg .default-fill{fill:SDCL}.svg-skin .document.skn-srz4 .topsection{background-color:SDCL}.svg-skin .document.skn-srz4 .sectiontitle{color:SDCL}.svg-skin .document.skn-srz4 .ratingWrapper .default-fill{fill:SDCL}.svg-skin .document.skn-srz5 .heading{color:SDCL}.svg-skin .document.skn-srz5 .SECTION_CNTC:before,.svg-skin .document.skn-srz5 .nameSec:before{background:SDCL}.svg-skin .document.skn-srz5 .singlecolumn:before{background:SDCL}.svg-skin .document.skn-srz5 .headingIcon svg rect{fill:SDCL}.svg-skin .document.skn-srz5 .ratingRect .default-fill{fill:SDCL}.svg-skin .document.skn-srz5 .headingIcon:before{background:SDCL}.svg-skin .document.skn-srz5 .topsection{background: SDCL}.svg-skin #documeznt.skn-srz6 .right-box .heading:before{background:SDCL}.svg-skin .document.skn-srz6 .right-box{background:SDCL}.svg-skin .document.skn-srz6 .right-box .outer-square:before{background:SDCL}.svg-skin .document.skn-srz6 .left-box .inner-square{background:SDCL}.svg-skin .document.skn-srz6 .left-box .sectiontitle{color:SDCL}.svg-skin .document.skn-srz6 .right-box .heading:before,.svg-skin .document.skn-srz6 .right-box .sortable-item.active .inner-square{background:SDCL}.svg-skin .document.skn-srz6._single-parent-drag .inner-square{background:SDCL}\n      .svg-skin .document.skn-srz6 .right-box:before{background:SDCL}.svg-skin .document.skn-srz7 .name,.svg-skin .document.skn-srz7 .resumeTitle,.svg-skin .document.skn-srz7 .sectiontitle{color:SDCL}.svg-skin .document.skn-srz7 .headingIcon svg rect,.svg-skin .document.skn-srz7 .iconRow svg rect{fill:SDCL}.svg-skin .document.skn-srz7 .ratingWrapper .default-fill{fill:SDCL}.svg-skin .document.skn-srz8 .heading{color:SDCL}.svg-skin .document.skn-srz8 .SECTION_CNTC:before,.svg-skin .document.skn-srz8 .inner-square,.svg-skin .document.skn-srz8 .right-box,.svg-skin .document.skn-srz8 .topsection, .svg-skin .document.skn-srz8 .left-box,.svg-skin .document.skn-srz8 .nameSec:before{background:SDCL}.svg-skin .document.skn-srz8 .topsection{background:SDCL}.svg-skin .document.skn-srz9 .name{color:SDCL}.svg-skin .document.skn-srz9 .iconRow svg circle,.svg-skin .document.skn-srz9 .monogram svg circle{fill:SDCL}.svg-skin .document.skn-srz9 .heading:before,.svg-skin .document.skn-srz9 .resumeTitle,.svg-skin .document.skn-srz9 .sectiontitle{color:SDCL}.svg-skin .document.skn-srz9 .crcl,.svg-skin .document.skn-srz9 .heading:before{background:SDCL}.svg-skin .document.skn-srz9 .ratingWrapper .default-fill{fill:SDCL}.svg-skin .document.skn-trz1 .name,.svg-skin .document.skn-trz1 .resumeTitle,.svg-skin .document.skn-trz1 .sectiontitle{color:SDCL}.svg-skin .document.skn-trz1 .inner-square{background:SDCL}.svg-skin .document.skn-trz2 .name{color:SDCL}.svg-skin .document.skn-trz2 .sectiontitle{color:SDCL}.svg-skin .document.skn-trz2 .right-box .section .icon1,.svg-skin .document.skn-trz2 .right-box .section .icon2{fill:SDCL}.svg-skin .document.skn-trz2 .topbg{background-color:SDCL}.svg-skin .document.skn-trz2 .topbgborder svg polyline{fill:SDCL}.svg-skin .document.skn-trz2 .topsection .left-box:before,.svg-skin .document.skn-trz2 .topsection .right-box:before{background-color:SDCL}.svg-skin .document.skn-trz2 .topsection .left-box:after,.svg-skin .document.skn-trz2 .topsection .right-box:after{color:SDCL}.svg-skin .document.skn-trz2 .resumeTitle{color:SDCL}.svg-skin .document.skn-trz2 .rating .default-fill{fill:SDCL}.svg-skin .document.skn-trz3 .name{color:SDCL}.svg-skin .document.skn-trz3 .sectiontitle{color:SDCL}.svg-skin .document.skn-trz3 .right-box .section .icon1,.svg-skin .document.skn-trz3 .right-box .section .icon2{fill:SDCL}.svg-skin .document.skn-trz3 .resumeTitle{color:SDCL}.svg-skin .document.skn-trz3 .rating .default-fill{fill:SDCL}.svg-skin .document.skn-trz4 .name,.svg-skin .document.skn-trz4 .resumeTitle,.svg-skin .document.skn-trz4 .sectiontitle{color:SDCL}.svg-skin .document.skn-trz4 .rating .default-fill{fill:SDCL}.svg-skin .document.skn-trz5 .resumeTitle,.svg-skin .document.skn-trz5 .sectiontitle{color:SDCL}.svg-skin .document.skn-trz5 .name{color:SDCL}.svg-skin .document.skn-trz5 .headingIcon svg rect{fill:SDCL}.svg-skin .document.skn-trz5 .innerRating{background-color:SDCL}.svg-skin .document.skn-trz6 .name{color:SDCL}.svg-skin .document.skn-trz6 .monogram svg circle{fill:SDCL}.svg-skin .document.skn-trz6 .sectiontitle{color:SDCL}.svg-skin .document.skn-trz6 .left-box .heading~.paragraph .date-content:before{background:SDCL}.svg-skin .document.skn-trz6 .left-box .singlecolumn:before{background:SDCL}.svg-skin .document.skn-trz6 .headingIcon svg circle{fill:SDCL}.svg-skin .document.skn-trz6 .ratingWrapper .default-fill{fill:SDCL}.svg-skin .document.skn-trz7 .name{color:SDCL}.svg-skin .document.skn-trz7 .sectiontitle{color:SDCL}.svg-skin .document.skn-trz7 svg{stroke:SDCL}.svg-skin .document.skn-trz7 .resumeTitle{color:SDCL}.svg-skin .document.skn-trz7 .ratingWrapper svg{stroke:SDCL}.svg-skin .document.skn-trz7 .headingIcon svg circle,.svg-skin .document.skn-trz7 .ratingWrapper svg .default-fill{fill:SDCL}.svg-skin .document.skn-trz8 .name,.svg-skin .document.skn-trz8 .resumeTitle,.svg-skin .document.skn-trz8 .sectiontitle{color:SDCL}.svg-skin .document.skn-trz8 .rating-wrapper .default-fill{fill:SDCL}.svg-skin .document.skn-trz9 .name{color:SDCL}.svg-skin .document.skn-trz9 .resumeTitle,.svg-skin .document.skn-trz9 .sectiontitle{color:SDCL}.svg-skin .document.skn-trz9 .headingIcon svg rect{fill:SDCL}.svg-skin .document.skn-trz9 .innerRating{background-color:SDCL}");
                            var o = this.state.selectedSmallSkinColor
                                , r = this.setHeadingText()
                                , l = this.showNewContent ? "mpintlNewContent" : ""
                                , p = ""
                                , i = a.CommonHelper.getStorageValue(T.CONSTS.TEMPLATE_SELECTED_FILTER, a.TypeCodes.storageType.sessionStorage)
                                , m = !Q.hideRecommWithFilters || !i || 0 === Object.keys(i).length;
                            "MX" == Q.countryDetails.countryCode && (l += " mpmx "),
                                Q.skipChooseeTemplateINTL && Q.showSelectButtonOnHover && (p = "ct-skip-template-var-3"),
                                Q.skipChooseeTemplateINTL && this.props.skipChooseTemplateVar > 2 && (p = "ct-skip-template-var-" + this.props.skipChooseTemplateVar);
                            var d = "";
                            !(Q.recomSkinsInitially ? this.state.renderFilters : Q.sideBarFilters) || Q.chooseTemplateFiltersV2 || Q.panelFilters || (d += " aside-filters-container");
                            var C = "";
                            Q.flexibleCTLayout && (C += "f-layout-switcher-container");
                            var S = "true" === new URLSearchParams(this.props.history.location.search).get("showBanner")
                                , L = s.default.createElement(_.default, {
                                    renderSkins: this.renderAllSkins,
                                    skins: this.state.skins,
                                    skinsToRender: this.state.skinsToRender,
                                    doShowAllTemplates: this.state.doShowAllTemplates,
                                    showAllTemplates: this.showAllTemplates,
                                    experienceLevel: this.state.experienceLevel,
                                    mpfrMultivariantChooseTemplate: this.props.mpfrMultivariantChooseTemplate,
                                    templatePageFilter: this.templatePageFilter,
                                    selectedSkinCD: this.state.selectedSkinCD,
                                    hoveredSkinCD: this.state.hoveredSkinCD,
                                    renderRecomSkin: Q.alternativeToTabsOnChooseTemplate && this.renderRecommendedSkin,
                                    showRecomSkins: Q.alternativeToTabsOnChooseTemplate && this.state.showRecomSkins,
                                    alternativeToTabsOnChooseTemplate: Q.alternativeToTabsOnChooseTemplate,
                                    selectedColor: this.state.selectedSmallSkinColor,
                                    toggleNewSkinsOption: this.toggleNewSkinsOption,
                                    isNewSkinsOption: this.state.isNewSkinsOption,
                                    animateLine: this.state.animateLine,
                                    favoriteSkinsArr: this.state.favoriteSkinsArr,
                                    renderFavoriteSkins: this.renderFavoriteSkins,
                                    renderComparator: this.renderComparator,
                                    showComparator: this.state.showComparator,
                                    handleComparatorHover: this.handleComparatorHover,
                                    createDocumentWithTemplate: this.createDocWithTemp,
                                    showFavTooltip: this.state.showFavTooltip,
                                    isFavSkinsOption: this.state.isFavSkinsOption,
                                    noDataFound: this.state.noDataFound,
                                    resetTemplateFilters: this.resetTemplateFilters,
                                    addComparisonToFav: this.addComparisonToFav,
                                    compSkinBubbles: this.state.compSkinBubbles,
                                    isPhotoToggleOn: this.state.isPhotoToggleOn,
                                    renderFilters: this.state.renderFilters,
                                    skinPreviewEnabled: this.state.skinPreviewEnabled,
                                    templatePerRow: this.state.templatePerRow,
                                    currentExpLevel: this.state.currentExpLevel,
                                    contentVisible: this.state.contentVisible,
                                    getLocAsPerExpLevel: this.getLocAsPerExpLevel,
                                    showMsg: this.state.showMsg
                                })
                                , A = s.default.createElement(w.default, {
                                    updateCTComponent: this.updateCTComponent,
                                    commonActions: this.props.commonActions,
                                    Common: this.props.Common,
                                    setTemplateFilters: this.setTemplateFilters,
                                    resetTemplateFilters: this.resetTemplateFilters,
                                    selectedTemplateFilter: this.state.selectedTemplateFilter,
                                    updateFilterTemplates: this.state.updateFilterTemplates,
                                    toggleFilters: this.toggleFilters,
                                    showFilters: this.state.showFilters,
                                    resetSidebarFilter: this.state.resetSidebarFilter,
                                    trackFilterValueSelected: this.trackFilterValueSelected,
                                    trackEvents: this.props.trackEvents,
                                    colorThemes: Q.colorPickerUnderOpen ? this.props.colorsDrop : this.props.colors,
                                    skinColor: this.props.skinColor,
                                    docTheme: this.state.selectedSmallSkinColor,
                                    skinClicked: this.state.skinClicked,
                                    setSmallSkinSelectedColor: this.setSmallSkinSelectedColor,
                                    isUpdatedChooseTempate: this.props.isUpdatedChooseTempate,
                                    setSelectedColorName: this.setSelectedColorName
                                })
                                , z = "page-choose-template ".concat(l, " ").concat(p, " ").concat(d, " ").concat(C);
                            Q.onboardingRevamp && null !== (e = this.props.location.state) && void 0 !== e && e.fromPrevStep && (z += " transparent");
                            var R = Object.keys(this.state.selectedTemplateFilter).length;
                            return s.default.createElement(s.default.Fragment, null, !Q.skipChooseeTemplateINTL && Q.mpintlCountryRowSelector ? s.default.createElement(E.default, {
                                showColorSelector: this.props.showColorSelector,
                                trackEvents: this.props.trackEvents,
                                colorselectorlocation: "preview",
                                colors: this.props.colors,
                                smallSkinSelctedColor: this.state.selectedSmallSkinColor,
                                skinClicked: this.state.skinClicked,
                                setSmallSkinSelectedColor: this.setSmallSkinSelectedColor,
                                renderSkins: this.renderAllSkins,
                                skinsToRender: this.state.skinsToRender,
                                doShowAllTemplates: this.state.doShowAllTemplates,
                                showAllTemplates: this.showAllTemplates,
                                experienceLevel: this.state.experienceLevel,
                                mpfrMultivariantChooseTemplate: this.props.mpfrMultivariantChooseTemplate,
                                templatePageFilter: this.templatePageFilter,
                                pageLoadComplete: this.state.pageLoadComplete,
                                skins: this.state.skins,
                                getSvgsArray: function (e) {
                                    return (0,
                                        b.getSvgsArray)(e, t.state.selectedSmallSkinColor, v.getSkinComponent, t.props.indexOptimalTemplateTestV2)
                                },
                                createDocument: this.createDocument,
                                colorTags: n,
                                SDCL_COLOR: o,
                                headingJSX: r,
                                resetFilters: this.props.resetFilters,
                                onFilterClick: this.props.onFilterClick,
                                assignRef: this.assignRef,
                                selectedSideFilters: this.props.selectedSideFilters,
                                docTheme: this.state.selectedSmallSkinColor,
                                filterclassName: l,
                                setCarousalDetails: this.props.setCarousalDetails,
                                expeLevelRecommSkins: this.expeLevelRecommSkins,
                                Localization: this.props.Localization,
                                isFilterSelected: this.props.isFilterSelected,
                                renderFirstNLastName: this.renderFirstNLastName,
                                showLoadMoreButton: this.state.showLoadMoreButton,
                                selectedCountryCode: this.props.selectedCountryCode,
                                currentCVFilter: this.state.currentCVFilter,
                                setSelectedColorName: this.setSelectedColorName
                            }) : s.default.createElement(s.default.Fragment, null, !Q.onboardingRevamp && s.default.createElement(y.default, {
                                cssClass: {
                                    headerClass: "fixed-top"
                                },
                                hideSaveChangeCta: !0
                            }), s.default.createElement("section", {
                                className: z,
                                id: "chooseTemplateWrap",
                                ref: this.ctContainerRef
                            }, s.default.createElement("div", {
                                className: "container"
                            }, Q.displayEsMxBanner && S && s.default.createElement(P.default, null), r, !Q.flexibleCTLayout && !Q.onboardingRevamp && s.default.createElement(s.default.Fragment, null, (this.props.isUpdatedChooseTempate || Q.chooseTemplateNameAndSurname) && this.renderFirstNLastName()), Q.flexibleCTLayout && s.default.createElement("div", {
                                className: "header-templates"
                            }, s.default.createElement(s.default.Fragment, null, (this.props.isUpdatedChooseTempate || Q.chooseTemplateNameAndSurname) && this.renderFirstNLastName()), this.renderLayoutSwitcher()), s.default.createElement(c.default, {
                                condition: Q.chooseTemplatePhotoToggle,
                                wrapper: function (e) {
                                    return s.default.createElement("div", {
                                        className: "color-selector-with-toggle-wrap"
                                    }, e)
                                }
                            }, this.props.showColorSelector && (!Q.chooseTemplateFiltersV2 || !!Q.chooseTmplatsFilter) && !Q.bundleImprovements && s.default.createElement("div", {
                                className: "color-selector-main ".concat(Q.chooseTemplatePhotoToggle ? "f-photo-toggle" : "").concat(Q.ctTriStatePhotoToggle ? " tristate-photo-toggle" : "")
                            }, (Q.recomSkinsInitially && this.state.renderFilters || Q.showTemplateFilters && Q.sideBarFilters && !Q.chooseTemplateFiltersV2 && !Q.recomSkinsInitially) && !Q.panelFilters && A, s.default.createElement("div", {
                                className: "color-list-wrap"
                            }, (Q.chooseTemplatePhotoToggle || Q.ctTriStatePhotoToggle) && s.default.createElement("span", {
                                className: "color-selector-label"
                            }, Q.Localization.colors_label), s.default.createElement(O.default, {
                                ref: function (e) {
                                    return t.colorpicker = e
                                },
                                trackEvents: this.props.trackEvents,
                                colorselectorlocation: "choose template",
                                colorThemes: Q.colorPickerUnderOpen ? this.props.colorsDrop : this.props.colors,
                                skinColor: this.props.skinColor,
                                docTheme: this.state.selectedSmallSkinColor,
                                skinClicked: this.state.skinClicked,
                                setSmallSkinSelectedColor: this.setSmallSkinSelectedColor,
                                isUpdatedChooseTempate: this.props.isUpdatedChooseTempate,
                                setSelectedColorName: this.setSelectedColorName
                            })), Q.chooseTemplatePhotoToggle && s.default.createElement("div", {
                                className: "switch-checkbox"
                            }, s.default.createElement("label", {
                                className: "switch"
                            }, s.default.createElement("input", {
                                type: "checkbox",
                                className: "form-check-input",
                                name: "toggle_chkPagebreak",
                                id: "toggle_chkPagebreak",
                                onChange: function (e) {
                                    return t.togglePhoto(e)
                                },
                                checked: this.state.isPhotoToggleOn
                            }), s.default.createElement("span", {
                                className: "slider"
                            }), s.default.createElement("span", {
                                className: "switch-icons"
                            })), s.default.createElement("span", {
                                className: "slider-label"
                            }, Q.Localization.photoToggleText)), Q.ctTriStatePhotoToggle && s.default.createElement("div", {
                                className: "photo-toggle-container"
                            }, s.default.createElement("div", {
                                className: "toggle-buttons"
                            }, this.getTriStatePhotoToggleButtons()), s.default.createElement("div", {
                                className: "photo-toggle-text"
                            }, this.getTriStatePhotoToggleLabel()), s.default.createElement("div", {
                                className: "icon-info"
                            }, s.default.createElement("div", {
                                className: "info-text"
                            }, Q.Localization.tooltipTextPhotoToggler))), Q.panelFilters && s.default.createElement("button", {
                                type: "button",
                                className: "btn btn-link btn-filters",
                                onClick: this.onFiltersBtnClick
                            }, s.default.createElement("i", {
                                className: "icon-filters"
                            }), s.default.createElement("span", {
                                className: "btn-text"
                            }, Q.Localization.quick_filters, R ? " (".concat(R, ")") : null), R > 0 && s.default.createElement("button", {
                                type: "button",
                                className: "btn btn-link icon-close",
                                onClick: function (e) {
                                    e.stopPropagation(),
                                        t.onResetTemplatesClick()
                                }
                            })))), Q.skipChooseeTemplateINTL && Q.mpintlCountryRowSelector && !Q.ctNewSkinsTest && !Q.filterTabsAlternative && !Q.templateOrderFilter && !Q.filterTemplates && s.default.createElement("div", {
                                className: "tab-heading"
                            }, s.default.createElement("ul", null, s.default.createElement("li", {
                                className: this.state.doShowAllTemplates ? "active" : ""
                            }, s.default.createElement("button", {
                                type: "button",
                                onClick: this.showAllTemplates
                            }, Q.getResourceValue("allTab", "templateFiltering_All"))), s.default.createElement("li", {
                                className: this.state.doShowAllTemplates ? "" : "active"
                            }, s.default.createElement("button", {
                                type: "button",
                                onClick: this.expeLevelRecommSkins
                            }, Q.getResourceValue("recommended_Text", "recmnded_Text"))))), (Q.newOnBoardingFlowFR && !Q.alternativeToTabsOnChooseTemplate || Q.newOnboardingFlowUK) && (0,
                                b.getExperienceRange)() && s.default.createElement("div", {
                                    className: "tab-heading"
                                }, s.default.createElement("ul", null, s.default.createElement("li", {
                                    className: "all" != this.state.currentExpFilter ? "active" : ""
                                }, s.default.createElement("button", {
                                    type: "button",
                                    onClick: this.onYOEFilterChange.bind(this, "recommended")
                                }, Q.newOnboardingFlowUK ? Q.getResourceValue("recommended_Text", "recmnded_Text") : Q.Localization.label_recommended_tab)), s.default.createElement("li", {
                                    className: "all" == this.state.currentExpFilter ? "active" : ""
                                }, s.default.createElement("button", {
                                    type: "button",
                                    onClick: this.onYOEFilterChange.bind(this, "all")
                                }, Q.newOnboardingFlowUK ? Q.getResourceValue("allTab", "templateFiltering_All") : Q.Localization.label_all_tab)))), (Q.isExperienceLevelOnCt || Q.onBoardingPopupV4) && s.default.createElement("section", {
                                    className: "section-select-explevel ".concat(Q.showConversationalUI ? "section-v2" : "")
                                }, s.default.createElement("span", {
                                    className: "section-select-explevel-content"
                                }, s.default.createElement("span", {
                                    className: "dart-arrow-outer-container"
                                }, s.default.createElement("span", {
                                    className: "dart-arrow-container"
                                }, s.default.createElement("i", {
                                    className: "icon-dart-arrow"
                                }))), s.default.createElement("span", {
                                    className: "section-select-explevel-container"
                                }, Q.Localization.experienceLevelCTAOnCTModify, s.default.createElement("a", {
                                    href: "javascript:void(0)",
                                    role: "button",
                                    className: "btn btn-link",
                                    onClick: this.onBackClick
                                }, Q.Localization.experienceLevelCTALinkOnCTModify)), s.default.createElement("span", {
                                    className: "section-select-explevel-outline"
                                }))), Q.chooseTemplateFiltersV2 && s.default.createElement("div", {
                                    className: "filters-row"
                                }, s.default.createElement("div", {
                                    className: "".concat(Q.filterSticky ? "" : "custom-scroll", " filters-actions")
                                }, A), s.default.createElement("div", {
                                    className: "filters-templates"
                                }, L)), Q.onboardingRevamp && !this.state.isPageAnimationComplete && s.default.createElement("div", {
                                    className: "skin-loader-img bigger-loader"
                                }), !Q.chooseTemplateFiltersV2 && (!Q.onboardingRevamp || this.state.isPageAnimationComplete) && L, !Q.favTemplatesV4 && Q.favTemplatesV2 && (!Q.recomSkinsInitially || this.state.renderFilters) && !Q.comparatorSlider && s.default.createElement(u.default, {
                                    scrollClass: this.state.scrollClass,
                                    fadeInClass: this.state.fadeInClass,
                                    notificationContent: Q.Localization.snackBarNotification
                                }), !this.state.pageLoadComplete && (this.state.showInitalLoaderShowMore || Q.ctNewSkinsTest) && !this.state.showMoreButton && s.default.createElement("div", {
                                    className: "skin-loader-img"
                                }), (this.props.isUpdatedChooseTempate || Q.doShowMoreButton || Q.ctNewSkinsTest || Q.favTemplates && !Q.isfavoriteTemplates || Q.filterTemplates) && m && !Q.favTemplatesV4 && !Q.addTopFiveSkinToRecom && (!Q.onboardingRevamp || this.state.isPageAnimationComplete) && s.default.createElement("div", {
                                    className: "row"
                                }, s.default.createElement("div", {
                                    className: "col-12"
                                }, s.default.createElement("div", {
                                    className: "bottom-btn-wrap"
                                }, this.state.pageLoadComplete && this.state.showMoreButton && s.default.createElement("button", {
                                    type: "button",
                                    className: "btn btn-default ".concat(!(Q.templatePerRowChangeTest || Q.isFiveTemplatePerRow || Q.onboardingRevamp) || !Q.onboardingRevamp && Q.isFiveTemplateForFR || Q.ctNewSkinsTest || Q.filterTabsAlternative || Q.filterTemplates ? "" : "btn-link"),
                                    onClick: function (e) {
                                        t.onShowMoreTemplates(e)
                                    }
                                }, Q.Localization.showMoreTemplatesText), this.state.pageLoadComplete && (!Q.templatePerRowChangeTest && !this.state.showMoreButton && !Q.isFiveTemplatePerRow || Q.alternativeToTabsOnChooseTemplate && !this.state.showMoreButton) && s.default.createElement("button", {
                                    type: "button",
                                    className: "btn btn-default default-blue",
                                    onClick: function (e) {
                                        t.onBackToTopClick(e)
                                    }
                                }, Q.Localization.backToTopText)))), Q.onboardingRevamp && this.state.isPageAnimationComplete && s.default.createElement("div", {
                                    className: "btn-group-footer"
                                }, s.default.createElement("button", {
                                    type: "button",
                                    className: "btn btn-default btn-back",
                                    onClick: this.onBackClick
                                }, "Retour")), !Q.flexibleCTLayout && s.default.createElement(N.default, {
                                    ref: function (e) {
                                        return t.preview = e
                                    },
                                    skins: this.state.skins,
                                    skinsToRender: this.state.skinsToRender,
                                    doShowAllTemplates: this.state.doShowAllTemplates,
                                    experienceLevel: this.state.experienceLevel,
                                    trackEvents: this.props.trackEvents,
                                    colorselectorlocation: "preview",
                                    colors: Q.colorPickerUnderOpen ? this.props.colorsDrop : this.props.colors,
                                    getSvgsArray: function (e) {
                                        return (0,
                                            b.getSvgsArray)(e, t.state.selectedSmallSkinColor, v.getSkinComponent, t.props.indexOptimalTemplateTestV2)
                                    },
                                    Localization: this.props.Localization,
                                    createDocument: this.createDocument,
                                    smallSkinSelctedColor: this.state.selectedSmallSkinColor,
                                    setSmallSkinSelectedColor: this.setSmallSkinSelectedColor,
                                    showColorSelector: this.props.showColorSelector,
                                    skinClicked: this.state.skinClicked,
                                    setCarousalDetails: this.props.setCarousalDetails,
                                    onSkipTemplate: this.onSkipTemplate,
                                    isSkipTemplateTest: Q.skipChooseeTemplateINTL,
                                    setSelectedColorName: this.setSelectedColorName,
                                    isNewSkinsOption: this.state.isNewSkinsOption,
                                    showRecommendedSkins: this.showRecommendedSkins,
                                    setScalingFactor: this.props.setScalingFactor,
                                    enableManualLazyLoad: Q.enableManualLazyLoad,
                                    favoriteSkinsArr: this.state.favoriteSkinsArr,
                                    selectedTemplateFilter: this.state.selectedTemplateFilter,
                                    photoToggleState: this.state.photoToggleState
                                }), Q.skipChooseeTemplateINTL && s.default.createElement("div", {
                                    className: "skip-template-row"
                                }, s.default.createElement("div", {
                                    className: "container"
                                }, s.default.createElement("div", {
                                    className: "row btn-wrapper"
                                }, this.showBackOnCT && s.default.createElement("div", {
                                    className: "col-md-auto ct-back-btn"
                                }, s.default.createElement("button", {
                                    type: "button",
                                    className: "btn btn-back",
                                    onClick: this.onBackClick
                                }, Q.Localization.back_Label)), s.default.createElement("div", {
                                    className: "col-md-auto fixed-bar"
                                }, s.default.createElement("button", {
                                    type: "button",
                                    className: "btn btn-default",
                                    onClick: function (e) {
                                        t.onSkipTemplate(e, !0)
                                    }
                                }, Q.Localization.skipTemplateText), s.default.createElement("button", {
                                    type: "button",
                                    className: "btn btn-primary",
                                    disabled: !this.state.selectedSkinCD || this.state.selectedSkinCD && !this.state.skinsToRender.some((function (e) {
                                        return e.skinCD == t.state.selectedSkinCD
                                    }
                                    )),
                                    onClick: this.onSkipTemplate
                                }, Q.Localization.useThisTemplateText))))), s.default.createElement("style", {
                                    id: "dynamicOuter",
                                    "data-time": new Date,
                                    dangerouslySetInnerHTML: {
                                        __html: n.replace(/SDCL/gi, o)
                                    }
                                })))), Q.isExperienceLevelOnCt || Q.onBoardingPopupV4 ? s.default.createElement(g.default, {
                                    isOpen: Q.isLPStudentFlow ? this.state.showModalForStudentFlow : this.state.experienceModal,
                                    closeModalIcon: !0,
                                    closeModal: Q.showConversationalUI ? function () {
                                        return t.showConversationalPopUp(!0)
                                    }
                                        : function () {
                                            return t.closeExperienceModal(!0)
                                        }
                                    ,
                                    hasHeader: !0,
                                    hasFooter: !1,
                                    hideCloseButton: !1,
                                    cssClass: {
                                        modalDialog: "modal-dialog-common ".concat(Q.showConversationalUI ? "modal-conversation-ui" : "modal-exp-level")
                                    }
                                }, s.default.createElement(h.default, {
                                    closeCTModal: Q.showConversationalUI ? this.showConversationalPopUp : this.closeExperienceModal
                                })) : "", this.state.showLottieAnimation ? s.default.createElement(g.default, {
                                    isOpen: !0,
                                    closeModalIcon: !1,
                                    hasHeader: !1,
                                    hasFooter: !1,
                                    hideCloseButton: !0,
                                    hasAnimation: !0,
                                    animationText: Q.Localization.ctLottieLoaderText1,
                                    cssClass: {
                                        modalDialog: "modal-dialog-common modal-conversational-UI-anim"
                                    }
                                }, s.default.createElement(f.Player, {
                                    autoplay: !0,
                                    loop: !1,
                                    src: k.default,
                                    style: {
                                        height: Q.lottieOptions.height,
                                        width: Q.lottieOptions.width
                                    },
                                    onEvent: function (e) {
                                        "complete" === e && t.completeLottieAnim()
                                    }
                                })) : "", Q.panelFilters && s.default.createElement(F.default, {
                                    ref: this.filterPanelRef,
                                    cssClasses: {
                                        panelContainer: "panel-filters"
                                    }
                                }, s.default.createElement("div", {
                                    className: "panel-filter-container"
                                }, s.default.createElement("header", {
                                    className: "panel-filter-header"
                                }, s.default.createElement("span", {
                                    className: "panel-filter-title"
                                }, Q.Localization.quick_filters), s.default.createElement("button", {
                                    type: "button",
                                    className: "btn btn-link btn-clear-filter",
                                    onClick: this.onResetTemplatesClick
                                }, Q.Localization.templateReset_filter)), A, s.default.createElement("footer", {
                                    className: "panel-filter-footer"
                                }, s.default.createElement("button", {
                                    type: "button",
                                    className: "btn btn-primary",
                                    onClick: this.onShowTemplatesClick
                                }, Q.Localization.see_templates_txt)))), Q.comparatorSlider && this.state.favoriteSkinsArr.length > 0 && s.default.createElement("div", {
                                    className: "drawer-bottom ".concat(this.state.isDrawerOpen ? "expanded" : "collapsed")
                                }, s.default.createElement("div", {
                                    className: "drawer-container"
                                }, s.default.createElement("button", {
                                    className: "drawer-handle",
                                    onClick: this.toggleDrawer
                                }, this.state.isDrawerOpen ? s.default.createElement("i", {
                                    className: "fas fa-chevron-down"
                                }) : s.default.createElement("i", {
                                    className: "fas fa-chevron-up"
                                })), s.default.createElement("div", {
                                    className: "drawer-content"
                                }, s.default.createElement("div", {
                                    className: "drawer-actions"
                                }, s.default.createElement("button", {
                                    className: "btn btn-link",
                                    onClick: this.resetTemplates
                                }, Q.Localization.resetComparatorText)), s.default.createElement("div", {
                                    className: "drawer-inner-content"
                                }, s.default.createElement("span", {
                                    className: "templates-count"
                                }, this.state.favoriteSkinsArr.length, "/", Q.skinsRequiredForCompToggler), s.default.createElement("div", {
                                    className: "templates-views-container"
                                }, this.state.drawerTemplates.map((function (e, n) {
                                    return s.default.createElement("div", {
                                        key: n,
                                        className: "templates-views ".concat(e.isEmpty ? "empty-view" : "", " ").concat(t.state.isDrawerOpen ? "lg" : "xs")
                                    }, e.isEmpty ? s.default.createElement("span", {
                                        className: "icon-empty-template"
                                    }) : s.default.createElement(s.default.Fragment, null, s.default.createElement("div", {
                                        className: "templates-overlay",
                                        onClick: function () {
                                            return t.handleDelete(e)
                                        }
                                    }, s.default.createElement("span", {
                                        className: "icon-delete"
                                    })), null == e ? void 0 : e.template))
                                }
                                )), s.default.createElement("button", {
                                    className: "btn btn-primary",
                                    onClick: this.createDocWithTemp
                                }, Q.Localization.continue_Label)))))))
                        }
                    }],
                    p && G(l.prototype, p),
                    i && G(l, i),
                    Object.defineProperty(l, "prototype", {
                        writable: !1
                    }),
                    l;
                var l, p, i
            }(s.Component);
        function ee(e) {
            return {
                Common: e.Common
            }
        }
        t.default = (0,
            p.withRouter)((0,
                l.connect)(ee, (function (e) {
                    return {
                        commonActions: (0,
                            i.bindActionCreators)(m, e)
                    }
                }
                ), null, {
                    withRef: !0
                })($))
    },
    53710: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                var t = {
                    renderSkins: e.renderSkins,
                    skinsToRender: e.skinsToRender,
                    doShowAllTemplates: e.doShowAllTemplates,
                    showAllTemplates: e.showAllTemplates,
                    experienceLevel: e.experienceLevel,
                    mpfrMultivariantChooseTemplate: e.mpfrMultivariantChooseTemplate,
                    templatePageFilter: e.templatePageFilter,
                    isFilterSelected: e.isFilterSelected,
                    selectedSideFilters: e.selectedSideFilters,
                    initialSkinsOnly: !1
                };
                return a.default.createElement(a.default.Fragment, null, a.default.createElement(s.default, {
                    cssClass: {
                        headerClass: "fixed-top"
                    },
                    hideSaveChangeCta: !0
                }), a.default.createElement("section", {
                    className: "page-choose-template choose-template-filter " + (i.mpintlCountryRowSelector ? i.countryDetails.countryCode : ""),
                    id: "chooseTemplateWrap"
                }, a.default.createElement("div", {
                    className: "container"
                }, a.default.createElement("div", {
                    className: i.mpintlCountryRowSelector ? "row" : "row justify-content-center"
                }, a.default.createElement("div", {
                    className: i.mpintlCountryRowSelector ? "col-md-12" : "col-md-9 offset-md-2 text-align"
                }, e.headingJSX)), i.mpintlCountryRowSelector && a.default.createElement("div", {
                    className: "tab-heading"
                }, a.default.createElement("ul", null, a.default.createElement("li", {
                    className: e.doShowAllTemplates ? "active" : ""
                }, a.default.createElement("button", {
                    type: "button",
                    onClick: e.showAllTemplates
                }, i.getResourceValue("allTab", "templateFiltering_All"))), a.default.createElement("li", {
                    className: e.doShowAllTemplates ? "" : "active"
                }, a.default.createElement("button", {
                    type: "button",
                    onClick: e.expeLevelRecommSkins
                }, i.getResourceValue("recommended_Text", "recmnded_Text"))))), a.default.createElement("div", {
                    className: "row filter justify-content-center"
                }, a.default.createElement("div", {
                    className: i.mpintlCountryRowSelector ? "col-md-12" : "col-md-9"
                }, a.default.createElement(l.default, t), !e.pageLoadComplete && a.default.createElement("div", {
                    className: "skin-loader-img"
                }), a.default.createElement(r.default, {
                    ref: function (t) {
                        return e.assignRef("preview", t)
                    },
                    skins: e.skins,
                    skinsToRender: e.skinsToRender,
                    doShowAllTemplates: e.doShowAllTemplates,
                    experienceLevel: e.experienceLevel,
                    trackEvents: e.trackEvents,
                    colorselectorlocation: "preview",
                    colors: e.colors,
                    getSvgsArray: e.getSvgsArray,
                    Localization: e.Localization,
                    createDocument: e.createDocument,
                    smallSkinSelctedColor: e.smallSkinSelctedColor,
                    setSmallSkinSelectedColor: e.setSmallSkinSelectedColor,
                    showColorSelector: e.showColorSelector,
                    skinClicked: e.skinClicked,
                    setCarousalDetails: e.setCarousalDetails,
                    isFilterSelected: e.isFilterSelected,
                    setSelectedColorName: e.setSelectedColorName
                }), a.default.createElement("style", {
                    id: "dynamicOuter",
                    "data-time": new Date,
                    dangerouslySetInnerHTML: {
                        __html: e.colorTags.replace(/SDCL/gi, e.SDCL_COLOR)
                    }
                }), a.default.createElement("div", {
                    className: "choose-template-filter-animation-loader d-none"
                }))), i.mpintlCountryRowSelector && a.default.createElement("div", {
                    className: "row"
                }, a.default.createElement("div", {
                    className: "filter-box color-selector-box"
                }, e.showColorSelector && a.default.createElement("div", {
                    className: "color-selector-main"
                }, a.default.createElement("div", {
                    className: "color-list-wrap"
                }, a.default.createElement(o.default, {
                    ref: function (t) {
                        return e.assignRef("colorpicker", t)
                    },
                    trackEvents: e.trackEvents,
                    colorselectorlocation: "choose template",
                    colorThemes: e.colors,
                    docTheme: e.docTheme,
                    skinClicked: e.skinClicked,
                    setSmallSkinSelectedColor: e.setSmallSkinSelectedColor,
                    clickedColor: e.docTheme || "",
                    setSelectedColorName: e.setSelectedColorName
                }))))))))
            }
            ;
        var a = p(n(96540))
            , o = p(n(38623))
            , r = p(n(62758))
            , s = p(n(70607))
            , l = p(n(823));
        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = window.RDL
    },
    27888: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                var t = !1
                    , n = T.chooseTemplateOptimization
                    , u = T.chooseTemplateOptimization ? 3 : 0;
                T.isZTY && T.ZTYBaselineAllAndRecommendedAlternativeTabs && (t = !0);
                var h = r.default.createElement("div", {
                    className: "page-title-wrap"
                }, r.default.createElement("h1", {
                    className: "page-title",
                    dangerouslySetInnerHTML: {
                        __html: C.resumeLookLike_Text_html
                    }
                }), r.default.createElement("p", {
                    className: "sub-title",
                    id: "subheadCT"
                }, C.choose_template_subheading));
                e.experienceLevel && (h = r.default.createElement("div", {
                    className: "page-title-wrap"
                }, u ? r.default.createElement(r.default.Fragment, null, r.default.createElement("h1", {
                    className: "page-title",
                    dangerouslySetInnerHTML: {
                        __html: e.headingZTY
                    }
                }), r.default.createElement("h2", {
                    className: "page-subtitle"
                }, e.popularChoiceSubHeading ? e.popularChoiceSubHeading : T.Localization.change_template_later)) : r.default.createElement(r.default.Fragment, null, r.default.createElement("h1", {
                    className: "page-title",
                    dangerouslySetInnerHTML: {
                        __html: C.here_are_templates_Text
                    }
                }), r.default.createElement("p", {
                    className: "sub-title"
                }, e.subHeadingForExprPersonalization))));
                if (e.showJobTitleFlowPersonalization) {
                    var k = r.default.createElement("h1", {
                        className: " page-title",
                        dangerouslySetInnerHTML: {
                            __html: C.here_are_templates_Text
                        }
                    });
                    h = r.default.createElement("div", {
                        className: "page-title-wrap"
                    }, k, null)
                }
                var b = function () {
                    var t, n = "";
                    (T.isFeaturePresent(i.FeatureSet.TEMPLATE_FILTERS_CT) || T.isFeaturePresent(i.FeatureSet.ZTY_TEMPLATE_FILTERS_CT) || e.templateCategoriesRedesign) && (n = T.Localization.template_category_label);
                    var a = null === (t = e.templatePageFilter) || void 0 === t ? void 0 : t.selectedOrder;
                    return T.isFeaturePresent(i.FeatureSet.TEMPLATE_FILTERS_CT) || T.isFeaturePresent(i.FeatureSet.ZTY_TEMPLATE_FILTERS_CT) ? "" : r.default.createElement(r.default.Fragment, null, r.default.createElement("h3", {
                        className: "category-head"
                    }, n), r.default.createElement("div", {
                        className: "template-selection-tab",
                        role: "tablist"
                    }, r.default.createElement("div", {
                        className: a == i.TemplateFilter.All ? "tab-link active" : "tab-link",
                        onClick: function (t) {
                            e.onFilterClick(i.TemplateFilter.All, t)
                        }
                    }, r.default.createElement("button", {
                        className: T.isJoshuaThemeWLB ? "tab-link-text" : "",
                        "aria-selected": a == i.TemplateFilter.All,
                        role: "tab"
                    }, T.getResourceValue("allTab", "templateFiltering_All"))), (e.experienceLevel || T.getExperimentVariant(T.portalExperiments.ZTYRWZAddingAllAndRecommendedTabs) > 2) && r.default.createElement("div", {
                        className: a == i.TemplateFilter.Recommended ? "tab-link active" : "tab-link",
                        onClick: function (t) {
                            return e.onFilterClick(i.TemplateFilter.Recommended, t)
                        }
                    }, r.default.createElement("button", {
                        className: T.isJoshuaThemeWLB ? "tab-link-text" : "",
                        "aria-selected": a == i.TemplateFilter.Recommended,
                        role: "tab"
                    }, T.getResourceValue("recommended_Text", "templateFiltering_Recommended"))), T.getExperimentVariant(T.portalExperiments.lcaRdusChangeLandingPageFlow) > 2 || T.ZTYBaselineAllAndRecommendedAlternativeTabs ? r.default.createElement(r.default.Fragment, null) : !T.rowLocalization && !(T.isTemplateFlow() && (0,
                        l.isCountryUS)()) && r.default.createElement(r.default.Fragment, null, r.default.createElement("div", {
                            className: a == i.TemplateFilter.Traditional ? "tab-link active" : "tab-link",
                            onClick: function (t) {
                                return e.onFilterClick(i.TemplateFilter.Traditional, t)
                            }
                        }, r.default.createElement("button", {
                            className: T.isJoshuaThemeWLB ? "tab-link-text" : "",
                            "aria-selected": a == i.TemplateFilter.Traditional,
                            role: "tab"
                        }, T.Localization.templateFiltering_Traditional)), r.default.createElement("div", {
                            className: a == i.TemplateFilter.Modern ? "tab-link active" : "tab-link",
                            onClick: function (t) {
                                return e.onFilterClick(i.TemplateFilter.Modern, t)
                            }
                        }, r.default.createElement("button", {
                            className: T.isJoshuaThemeWLB ? "tab-link-text" : "",
                            "aria-selected": a == i.TemplateFilter.Modern,
                            role: "tab"
                        }, T.Localization.templateFiltering_Modern)), r.default.createElement("div", {
                            className: a == i.TemplateFilter.Creative ? "tab-link active" : "tab-link",
                            onClick: function (t) {
                                return e.onFilterClick(i.TemplateFilter.Creative, t)
                            }
                        }, r.default.createElement("button", {
                            className: T.isJoshuaThemeWLB ? "tab-link-text" : "",
                            "aria-selected": a == i.TemplateFilter.Creative,
                            role: "tab"
                        }, T.Localization.templateFiltering_Creative))), (3 == T.getExperimentVariant(T.portalExperiments.mprChooseTemplateUpdates) || 5 == T.getExperimentVariant(T.portalExperiments.mprChooseTemplateUpdates)) && r.default.createElement("div", {
                            className: a == i.TemplateFilter.Industry ? "tab-link active" : "tab-link",
                            onClick: function (t) {
                                return e.onFilterClick(i.TemplateFilter.Industry, t)
                            }
                        }, r.default.createElement("button", {
                            className: T.isJoshuaThemeWLB ? "tab-link-text" : "",
                            "aria-selected": a == i.TemplateFilter.Industry,
                            role: "tab"
                        }, T.Localization.by_industry_txt), r.default.createElement("div", {
                            className: "new-section-badge"
                        }, T.Localization.add_new_section))))
                };
                if (e.templatePageFilter)
                    if (T.isFeaturePresent(i.FeatureSet.SKIP_TEMPLATE)) {
                        var v = function () {
                            var t = e.popularChoiceSubHeading ? e.popularChoiceSubHeading : T.getExperimentVariant(T.portalExperiments.mprPreviewOnChooseTemplate) > 2 ? T.Localization.change_it_later : T.Localization.change_template_later;
                            return (T.isFeaturePresent(i.FeatureSet.TEMPLATES_WITH_ICONS_MONOGRAMS) || e.templateShoppingVar > 2) && (t = T.Localization.iconCustomize_Label_ct_subheading),
                                t
                        };
                        h = r.default.createElement(r.default.Fragment, null, r.default.createElement("div", {
                            className: "page-title-wrap"
                        }, r.default.createElement("h1", {
                            className: "page-title",
                            dangerouslySetInnerHTML: {
                                __html: function () {
                                    var t = e.templatePageFilter.heading;
                                    if (T.isFeaturePresent(i.FeatureSet.TEMPLATES_WITH_ICONS_MONOGRAMS) || T.getExperimentVariant(T.portalExperiments.mprPreviewOnChooseTemplate) > 2 || e.templateShoppingVar > 2)
                                        switch (e.experienceLevel) {
                                            case i.experienceLevel.student:
                                                t = T.Localization.iconCustomize_Label_ct_student,
                                                    T.getExperimentVariant(T.portalExperiments.mprPreviewOnChooseTemplate) > 2 && "us" != T.countryDetails.countryCode.toLowerCase() && "ca" != T.countryDetails.countryCode.toLowerCase() && (t = e.experienceRange == i.experienceLevel.zeroToThreeYears ? T.Localization.label_ct_upto_three_year : T.Localization.label_ct_zero_year);
                                                break;
                                            case i.experienceLevel.zeroToThreeYears:
                                                t = T.Localization.iconCustomize_Label_ct_upto3,
                                                    (T.getExperimentVariant(T.portalExperiments.mprPreviewOnChooseTemplate) > 2 && "us" != T.countryDetails.countryCode.toLowerCase() && "ca" != T.countryDetails.countryCode.toLowerCase() || e.templateShoppingVar > 2) && (t = T.Localization.label_ct_upto_three_year);
                                                break;
                                            case i.experienceLevel.ZeroYear:
                                                t = T.Localization.iconCustomize_Label_ct_upto3,
                                                    (T.getExperimentVariant(T.portalExperiments.mprPreviewOnChooseTemplate) > 2 && "us" != T.countryDetails.countryCode.toLowerCase() && "ca" != T.countryDetails.countryCode.toLowerCase() || e.templateShoppingVar > 2) && (t = T.Localization.label_ct_zero_year);
                                                break;
                                            case i.experienceLevel.threeToFiveYears:
                                                t = T.Localization.iconCustomize_Label_ct_3to5;
                                                break;
                                            case i.experienceLevel.fiveToTenYears:
                                                t = T.Localization.iconCustomize_Label_ct_5to10;
                                                break;
                                            case i.experienceLevel.tenPlusYears:
                                                t = T.Localization.iconCustomize_Label_ct_10Plus
                                        }
                                    return t
                                }()
                            }
                        }), 4 != e.ctShoppingV2Var && n && r.default.createElement("h2", {
                            className: "page-subtitle",
                            dangerouslySetInnerHTML: {
                                __html: v()
                            }
                        }), 4 == e.ctShoppingV2Var && n && r.default.createElement("h2", {
                            className: "page-subtitle"
                        }, r.default.createElement("span", {
                            dangerouslySetInnerHTML: {
                                __html: v()
                            }
                        }), r.default.createElement("button", {
                            type: "button",
                            className: "choose-later-btn",
                            id: "skipTemplates",
                            onClick: e.chooseLaterClicked,
                            disabled: e.isComparisonBladeOn
                        }, r.default.createElement("span", {
                            className: "btn-text"
                        }, T.Localization.choose_later_btn_lbl)))), t ? "" : !T.adaCtFocus && b(), T.getExperimentVariant(T.portalExperiments.mprChooseTemplateUpdates) > 3 && r.default.createElement("span", {
                            className: "save-template-subheading"
                        }, T.Localization.save_template_subheading))
                    } else
                        h = r.default.createElement("div", {
                            className: "page-title-wrap"
                        }, r.default.createElement("h1", {
                            className: "page-title",
                            dangerouslySetInnerHTML: {
                                __html: e.templatePageFilter.heading
                            }
                        }), n && r.default.createElement("h2", {
                            className: "page-subtitle"
                        }, e.popularChoiceSubHeading ? e.popularChoiceSubHeading : T.Localization.change_template_later), !T.adaCtFocus && b());
                var y = "";
                (0,
                    l.getStorage)("skinCD") && (y = (0,
                        l.getStorage)("skinCD"));
                y = y.replace(/"/g, "");
                var E = T.Localization.ColorSelectorList || [];
                T.isFeaturePresent(i.FeatureSet.COLOR_PICKER_PALETTE) && (T.isNewColorPickerPalette = !0);
                T.isNewColorPickerPalette && (E = T.Localization.ColorPickerList || S.ColorPickerDropDown);
                var w = {};
                T.adaCtFocus && (w.adaCtFocus = T.adaCtFocus,
                    w.templateSelectionTabJSX = b);
                var L = x({}, i.CHOOSETEMPLATE_LOCALIZATION);
                T.isSocialNudges && (L = x(x({}, L), {}, {
                    alreadyGottenFunPart: T.Localization.alreadyGottenFunPart
                }));
                (e.templateShoppingVar > 2 || e.ctShoppingV2Var > 2) && (w.getSkinRecommendedColors = l.getSkinRecommendedColors,
                    w.templateShoppingVar = e.templateShoppingVar,
                    w.coverLetterMatchingSkins = T.coverLetterMatchingSkins,
                    w.getThemeArrayFromLocalStorage = l.getThemeArrayFromLocalStorage,
                    w.trackSkinViewedFromModal = e.trackSkinViewedFromModal,
                    L = x(x({}, L), {}, {
                        choose_and_compare: T.Localization.chooseUpToThreeTemplatesTxt,
                        choose_and_compare_disabledTip: T.Localization.removeAtLeastOneTemplateTxt,
                        toggle_tool_tip: T.Localization.toCompareTemplatesButtonOnTxt,
                        clear_all_txt: T.Localization.clear_all_txt_updated,
                        choose_templates_lbl: T.Localization.choose_templates_lbl_updated,
                        remove_from_compare: T.Localization.remove_from_compare_updated,
                        use_this_template_txt: T.Localization.mbe_choose_template_heading
                    }));
                var _ = r.default.createElement(g.default, {
                    commonActions: e.commonActions,
                    Common: e.Common,
                    setTemplateFilters: e.setTemplateFilters,
                    resetTemplateFilters: e.resetTemplateFilters,
                    selectedTemplateFilter: e.sideTemplateFilters,
                    resetSidebarFilter: e.resetSidebarFilter,
                    trackFilterValueSelected: function (t, n, a) {
                        var r = "";
                        switch (n) {
                            case i.ChooseTemplateFilter.COLORED:
                                r = T.chooseTemplateFiltersV2 ? 1 == t ? "colorful" : "classic" : 1 == t ? "Colour" : "Black&White";
                                break;
                            case i.ChooseTemplateFilter.COLUMN:
                                r = t + " column " + (a ? "checked" : "unchecked");
                                break;
                            case i.ChooseTemplateFilter.PHOTO:
                                r = (1 == t ? "with photo " : "without photo ") + (a ? "checked" : "unchecked");
                                break;
                            case i.ChooseTemplateFilter.DESIGN:
                                r = "modern" == t ? "modern" : "classic";
                                break;
                            case i.ChooseTemplateFilter.CATEGORY:
                                r = t;
                                break;
                            case i.ChooseTemplateFilter.GRAPHICS:
                                "icon" == t && (t = "icons"),
                                    "monogram" == t && (t = "monograms"),
                                    r = t + (a ? " checked" : " unchecked")
                        }
                        var s = {
                            action: "clicked",
                            "click option": "".concat(r),
                            "screen name": "choose template"
                        };
                        3 == T.getExperimentVariant(T.portalExperiments.ztyPhotoToggleOption) && e.updateFiltersOnPhotoToggle(r),
                            T.TrackEvents("builder usage", s, T.getUserUId(), o.CommonHelper.isLoggedInUser(T.UserClaims), !1)
                    },
                    enablePhotoToggle: e.enablePhotoToggle,
                    updateFilterTemplates: e.updateFilterTemplates,
                    updateTemplatesOnPhotoToggle: e.updateTemplatesOnPhotoToggle,
                    resumeHeadshot: T.Localization.resumeHeadshot,
                    showPhotoToggleOption: T.getExperimentVariant(T.portalExperiments.ztyPhotoToggleOption),
                    trackEvents: e.trackEvents,
                    colorThemes: T.colorPickerUnderOpen ? e.colorsDrop : e.colors,
                    hideColorFilter: !0
                });
                return r.default.createElement(r.default.Fragment, null, r.default.createElement(c.default, f({
                    cssClass: {
                        headerClass: !(0,
                            l.isChooseTemplateAlternativeTabs)() && "fixed-top"
                    },
                    hideSaveChangeCta: !0
                }, {}, {
                    Document: e.document,
                    screenName: "choose-template",
                    isSignUpBanner: T.isSaveWorkEarlier
                })), r.default.createElement("div", {
                    className: "container container-body",
                    id: "content"
                }, T.showCountryDropDown && e.templatePageFilter.selectedOrder == i.TemplateFilter.Recommended && r.default.createElement(d.default, {
                    isAutoSuggestInDropdown: !0,
                    onCountryChange: e.onCountryChange,
                    selectedCountryCode: e.selectedCountryCode,
                    commonActions: e.commonActions,
                    screenName: "choose template",
                    labelText: T.Localization.country_label
                }), r.default.createElement(a.default, f({}, w, {
                    showZTYAlternativeTabs: t,
                    selectedTemplate: y,
                    Localization: L,
                    skins: e.skins,
                    showComparedTemplatesActualColors: T.showComparedTemplatesActualColors,
                    headingJSX: h,
                    defaultDocument: s.default.Document,
                    document: e.document,
                    colors: E,
                    showNameColorPanel: !1,
                    getDefaultDocStyle: l.getDefaultDocStyle,
                    experienceLevel: e.experienceLevel,
                    scaleSkinsSVGWidthHeight: e.scaleSkinsSVGWidthHeight,
                    getSkinComponent: e.useRendererForCT ? p.GetSkinComponentMemo : p.getSkinComponent,
                    getClientSettingValue: l.GetClientSettingValue,
                    createDocumentWithTemplate: e.createDocumentWithTemplate,
                    getDocStyleValue: e.getDocStyleValue,
                    trackEvents: e.trackEvents,
                    userRole: e.userRole,
                    closePreviewModelOnBodyClick: !0,
                    showAllTemplates: e.showAllTemplates,
                    showColorPanel: !T.isWhiteLabel,
                    previewTemplates: e.previewTemplates,
                    showColorSelector: !0,
                    isHtmlSkinRendering: e.isHtmlSkinRendering,
                    dynamicContent: e.dynamicContent,
                    templateRandomization: e.templateRandomization,
                    templatePageFilter: e.templatePageFilter,
                    isBasicSelected: e.isBasicSelected,
                    isPremiumSelected: e.isPremiumSelected,
                    filterTemplatesByCode: !0,
                    carouselSettings: T.sliderNotInfinite && {
                        dots: !1,
                        infinite: !1,
                        speed: 450,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    },
                    getSVG: l.getSVG,
                    infographicsVar: 0,
                    infographicSkins: T.infographicSkins,
                    onInfographicSwitchChange: m.onInfographicSwitchChange,
                    showSkipChooseTemplateCTA: T.isFeaturePresent(i.FeatureSet.SKIP_TEMPLATE) ? {
                        isExperiment: !0,
                        variant: 4
                    } : null,
                    chooseLaterClicked: e.chooseLaterClicked,
                    hideChooseLaterBtn: e.hideChooseLaterBtn,
                    hideFooter: 4 == e.ctShoppingV2Var,
                    showChooseLaterTooltip: e.showChooseLaterTooltip,
                    useRendererForCT: e.useRendererForCT,
                    hidePreview: n && !(e.templateShoppingVar > 2 || e.ctShoppingV2Var > 2),
                    selectedTheme: e.selectedTheme,
                    ztyCtOptimizationVariant: u,
                    colorPickerDropDown: e.colorPickerDropDown,
                    isAddNewSkinLCA: e.isAddNewSkinLCA,
                    showHeadshotTemplates: e.showHeadshotTemplates,
                    toggleShowHeadshotTemplates: e.toggleShowHeadshotTemplates,
                    selectedCountryCode: T.isLCA && e.selectedCountryCode,
                    allowSaveTemplates: T.getExperimentVariant(T.portalExperiments.mprChooseTemplateUpdates) > 3,
                    saveTemplate: e.saveTemplate,
                    mprOnboardingRedesignV2Var: T.getExperimentVariant(T.portalExperiments.mprOnboardingRedesignV2),
                    goToOnboardingPage: e.goToOnboardingPage,
                    showUploadOnChooseTemplate: e.showUploadOnChooseTemplate,
                    handelResumeUploadOnCT: e.handelResumeUploadOnCT,
                    showUploadPopup: e.showUploadPopup,
                    uploadedFileNameOnCT: e.uploadedFileNameOnCT,
                    isClearImport: e.isClearImport,
                    handleClearImport: e.handleClearImport,
                    isUploadBannerOnCT: e.isUploadBannerOnCT,
                    useActualResumeContent: e.useActualResumeContent,
                    toggleActualResumeContent: e.toggleActualResumeContent,
                    uploadChooseTemplateVar: e.uploadChooseTemplateVar,
                    showLoaderOnParsingResume: e.showLoaderOnParsingResume,
                    showProgressBarOnCT: e.showProgressBarOnCT,
                    progressBarPercentageOnCT: e.progressBarPercentageOnCT,
                    chooseTemplateAlternativeTabs: e.chooseTemplateAlternativeTabs,
                    isSocialNudges: e.isSocialNudges,
                    onSkinColorChange: e.onSkinColorChange,
                    replaceIdAttr: e.replaceIdAttr,
                    templateCategoriesRedesign: e.templateCategoriesRedesign,
                    showTemplateFilters: e.showTemplateFiltersVar || e.showTemplateFiltersOnCT,
                    renderTemplateFiltersJSX: _,
                    showRecommendedOnTop: e.showTemplateFiltersVar || e.showTemplateFiltersOnCT,
                    showNoTemplatesFound: e.showNoTemplatesFound,
                    resetTemplateFilters: e.resetTemplateFilters,
                    comparedSkinCD: e.comparedSkinsCD,
                    showPhotoToggleOption: T.getExperimentVariant(T.portalExperiments.ztyPhotoToggleOption),
                    enablePhotoToggle: e.enablePhotoToggle,
                    updateTemplatesOnPhotoToggle: e.updateTemplatesOnPhotoToggle,
                    resumeWithHeadshot: T.Localization.resumeWithHeadshot,
                    comparedSkins: e.comparedSkins,
                    showComparisonBladeOnTop: !1,
                    favoriteSkinThemes: e.favoriteSkinThemes,
                    addToComparison: e.addToComparison,
                    deleteFromCompare: e.deleteFromCompare,
                    resetComparedTemplate: e.resetComparedTemplate,
                    showCompareTemplate: T.compareTemplateCT,
                    templatePlaceholderArray: ["1", "2", "3"],
                    showParsingErrorMessage: e.showParsingErrorMessage,
                    updateShowComparisonBladeInParent: e.updateShowComparisonBladeInParent,
                    showTemplateFiltersOnCT: e.showTemplateFiltersOnCT,
                    isIconSkin: T.isFeaturePresent(i.FeatureSet.TEMPLATES_WITH_ICONS_MONOGRAMS),
                    isTemplatePreviewOnchooseTemplateVar: T.getExperimentVariant(T.portalExperiments.mprPreviewOnChooseTemplate),
                    useRendererForColorChanges: T.isFeaturePresent(i.FeatureSet.RENDERER_FOR_COLOR_CHANGES),
                    trackPreviewPopupEvents: function (e, t) {
                        var n = "builder usage"
                            , a = {
                                action: e ? "clicked" : "viewed",
                                "screen name": "choose template"
                            };
                        e && (a = x(x({}, a), {
                            "click option": e
                        })),
                            t && (n = "popup",
                                a = x(x({}, a), {
                                    "popup name": t
                                })),
                            T.TrackEvents(n, a, T.getUserUId(), o.CommonHelper.isLoggedInUser(T.UserClaims), !1)
                    },
                    updateColorAttributesInPreview: T.getExperimentVariant(T.portalExperiments.mprPreviewOnChooseTemplate) > 2 || T.isFeaturePresent(i.FeatureSet.TEMPLATES_WITH_ICONS_MONOGRAMS),
                    showRecommendedBadgeOnPhotoTemplates: e.showRecommendedBadgeOnPhotoTemplates,
                    useSkinEngineCT: e.useSkinEngineCT,
                    personalizeBuilder20PlusYOEVar: e.personalizeBuilder20PlusYOEVar,
                    renderProtip: e.renderProtip,
                    showZetyNewMprSkins: T.isFeaturePresent(i.FeatureSet.ZTY_TEMPLATE_ON_MPR),
                    setUpdatedTheme: e.setUpdatedTheme,
                    ctShoppingV2Var: e.ctShoppingV2Var
                }))))
            }
            ;
        var a = h(n(16882))
            , o = n(47354)
            , r = h(n(96540))
            , s = h(n(51434))
            , l = n(68341)
            , p = n(95385)
            , i = function (e, t) {
                if (!t && e && e.__esModule)
                    return e;
                if (null === e || "object" != k(e) && "function" != typeof e)
                    return {
                        default: e
                    };
                var n = u(t);
                if (n && n.has(e))
                    return n.get(e);
                var a = {
                    __proto__: null
                }
                    , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if ("default" !== r && {}.hasOwnProperty.call(e, r)) {
                        var s = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, r, s) : a[r] = e[r]
                    }
                return a.default = e,
                    n && n.set(e, a),
                    a
            }(n(8204))
            , m = n(55882)
            , c = h(n(70607))
            , d = h(n(76386))
            , g = h(n(29134));
        function u(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
                , n = new WeakMap;
            return (u = function (e) {
                return e ? n : t
            }
            )(e)
        }
        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function k(e) {
            return k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                k(e)
        }
        function f() {
            return f = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
                ,
                f.apply(null, arguments)
        }
        function b(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                    n.push.apply(n, a)
            }
            return n
        }
        function x(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? b(Object(n), !0).forEach((function (t) {
                    v(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function v(e, t, n) {
            return (t = function (e) {
                var t = function (e, t) {
                    if ("object" != k(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var a = n.call(e, t || "default");
                        if ("object" != k(a))
                            return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == k(t) ? t : t + ""
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        var T = window.RDL
            , C = T.Localization
            , S = n(79142)
    },
    29134: function (e, t, n) {
        "use strict";
        function a(e) {
            return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                a(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = n(47354)
            , r = u(n(96540))
            , s = n(68341)
            , l = u(n(8204))
            , p = n(40034)
            , i = d(n(95332))
            , m = d(n(74404))
            , c = d(n(38623));
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function g(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
                , n = new WeakMap;
            return (g = function (e) {
                return e ? n : t
            }
            )(e)
        }
        function u(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != a(e) && "function" != typeof e)
                return {
                    default: e
                };
            var n = g(t);
            if (n && n.has(e))
                return n.get(e);
            var o = {
                __proto__: null
            }
                , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var s in e)
                if ("default" !== s && {}.hasOwnProperty.call(e, s)) {
                    var l = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                    l && (l.get || l.set) ? Object.defineProperty(o, s, l) : o[s] = e[s]
                }
            return o.default = e,
                n && n.set(e, o),
                o
        }
        function h() {
            return h = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
                ,
                h.apply(null, arguments)
        }
        function k(e) {
            return function (e) {
                if (Array.isArray(e))
                    return C(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || T(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                    n.push.apply(n, a)
            }
            return n
        }
        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(n), !0).forEach((function (t) {
                    x(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function x(e, t, n) {
            return (t = function (e) {
                var t = function (e, t) {
                    if ("object" != a(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != a(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == a(t) ? t : t + ""
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function v(e, t) {
            return function (e) {
                if (Array.isArray(e))
                    return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var a, o, r, s, l = [], p = !0, i = !1;
                    try {
                        if (r = (n = n.call(e)).next,
                            0 === t) {
                            if (Object(n) !== n)
                                return;
                            p = !1
                        } else
                            for (; !(p = (a = r.call(n)).done) && (l.push(a.value),
                                l.length !== t); p = !0)
                                ;
                    } catch (e) {
                        i = !0,
                            o = e
                    } finally {
                        try {
                            if (!p && null != n.return && (s = n.return(),
                                Object(s) !== s))
                                return
                        } finally {
                            if (i)
                                throw o
                        }
                    }
                    return l
                }
            }(e, t) || T(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function T(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return C(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? C(e, t) : void 0
            }
        }
        function C(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        var S = window.RDL;
        t.default = function (e) {
            var t, n, a = v(r.default.useState({}), 2), d = a[0], g = a[1], u = v(r.default.useState({}), 2), f = u[0], T = u[1], C = v(r.default.useState({}), 2), y = C[0], E = C[1], w = v(r.default.useState({}), 2), L = w[0], _ = w[1], O = v(r.default.useState((0,
                s.getExperienceLevelFilter)()), 2), P = O[0], N = O[1], F = (0,
                    s.GetClientSettingValue)(e.Common.clientSettings, l.ClientSettings.ExperienceRange), A = S.isFeaturePresent(l.FeatureSet.TEMPLATE_FILTERS_CT) || S.isFeaturePresent(l.FeatureSet.ZTY_TEMPLATE_FILTERS_CT), z = function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dropdown"
                            , n = {
                                action: "clicked",
                                "click option": "".concat(e).concat(t ? " " : "").concat(t),
                                "screen name": "choose template"
                            };
                        S.TrackEvents("builder usage", n, S.getUserUId(), o.CommonHelper.isLoggedInUser(S.UserClaims), !1)
                    }, R = (0,
                        r.useRef)([0, 1, 2, 3]);
            (0,
                p.useConstructor)((function () {
                    var t = x(x(x({}, l.ChooseTemplateFilter.PHOTO, [S.Localization.photoOption_photo, S.Localization.photoOption_nophoto]), l.ChooseTemplateFilter.COLORED, [S.Localization.colorOption_nocolor, S.Localization.colorOption_color]), l.ChooseTemplateFilter.COLUMN, [S.Localization.columnOption_one, S.Localization.columnOption_two]);
                    e.hideColorFilter && (t = x(x({}, l.ChooseTemplateFilter.PHOTO, [S.Localization.photoOption_photo, S.Localization.photoOption_nophoto]), l.ChooseTemplateFilter.COLUMN, [S.Localization.columnOption_one, S.Localization.columnOption_two]));
                    var n = x(x(x(x({}, l.ChooseTemplateFilter.PHOTO, S.Localization.photoFilter_label), l.ChooseTemplateFilter.COLORED, S.Localization.colorFilter_label), l.ChooseTemplateFilter.COLUMN, S.Localization.columnFilter_label), l.ChooseTemplateFilter.DESIGN, S.Localization.designFilter_label)
                        , a = x(x(x(x({}, l.ChooseTemplateFilter.PHOTO, ["1", "0"]), l.ChooseTemplateFilter.COLORED, ["0", "1"]), l.ChooseTemplateFilter.COLUMN, ["1", "2"]), l.ChooseTemplateFilter.DESIGN, ["modern", "classic"]);
                    S.getExperimentVariant(S.portalExperiments.newSkinsFilterTest) > 2 && (t = b(x({}, l.ChooseTemplateFilter.CATEGORY, [S.Localization.categotyOption_all, S.Localization.categoryOption_most_popular, S.Localization.categoryOption_new]), t),
                        n = b(x({}, l.ChooseTemplateFilter.CATEGORY, S.Localization.categoryFilter_label), n),
                        a = b(x({}, l.ChooseTemplateFilter.CATEGORY, [l.chooseTemplateFilterValue.ALL, l.chooseTemplateFilterValue.POPULAR, l.chooseTemplateFilterValue.NEW]), a)),
                        S.hideRecommWithFilters && !S.isfavoriteTemplates && (t = x(x(x({}, l.ChooseTemplateFilter.PHOTO, [S.Localization.photoOption_photo, S.Localization.photoOption_nophoto]), l.ChooseTemplateFilter.DESIGN, [S.Localization.designOption_modern, S.Localization.designOption_classic]), l.ChooseTemplateFilter.COLUMN, [S.Localization.columnOption_one, S.Localization.columnOption_two])),
                        (S.ctFiltersFR || S.filterTemplates) && (t = x(x(x({}, l.ChooseTemplateFilter.DESIGN, [S.Localization.designOption_modern, S.Localization.designOption_classic]), l.ChooseTemplateFilter.PHOTO, [S.Localization.photoOption_photo, S.Localization.photoOption_nophoto]), l.ChooseTemplateFilter.COLUMN, [S.Localization.columnOption_one, S.Localization.columnOption_two])),
                        T(t),
                        _(a),
                        E(n)
                }
                )),
                (0,
                    r.useEffect)((function () {
                        null != e && e.resetSidebarFilter && g({})
                    }
                    ), [null == e ? void 0 : e.resetSidebarFilter]),
                (0,
                    r.useEffect)((function () {
                        var e = JSON.parse(JSON.stringify(d));
                        e.photo && delete e.photo,
                            g(e)
                    }
                    ), [null == e ? void 0 : e.updateFilterTemplates]),
                (0,
                    r.useEffect)((function () {
                        var t = function () {
                            if (S.chooseTemplateFiltersV2) {
                                var e, t, n, a, o = null === (e = document.querySelector(".filters-templates")) || void 0 === e || null === (t = e.getBoundingClientRect()) || void 0 === t ? void 0 : t.top, r = null !== (n = null === (a = document.querySelector("#app .header")) || void 0 === a ? void 0 : a.offsetHeight) && void 0 !== n ? n : 60, s = r;
                                o > r && (s = o);
                                var l = document.querySelector(".filters-actions");
                                l && (l.style.top = s + "px")
                            }
                        };
                        if (S.templateFiltersUKIE) {
                            o.CommonHelper.setStorageValue(l.CONSTS.TEMPLATE_SELECTED_FILTER, {
                                photo: "0"
                            }, o.TypeCodes.storageType.sessionStorage),
                                e.setTemplateFilters("0", "photo"),
                                g({
                                    photo: ["0"]
                                })
                        }
                        return j(),
                            window.addEventListener("scroll", t),
                            function () {
                                window.removeEventListener("scroll", t)
                            }
                    }
                    ), []);
            var I = function (t, n) {
                var a, r, s = t.currentTarget.value, p = b({}, d);
                if (e.trackFilterValueSelected(s, n, null == t || null === (a = t.target) || void 0 === a ? void 0 : a.checked),
                    null != t && null !== (r = t.target) && void 0 !== r && r.checked) {
                    var i;
                    p[n] && (null === (i = p[n]) || void 0 === i ? void 0 : i.length) > 0 ? p[n].includes(s) || (S.chooseTemplatePhotoToggle || 3 == e.showPhotoToggleOption && n == l.ChooseTemplateFilter.PHOTO ? p[n] = [s] : p[n].push(s),
                        g((function (e) {
                            return b(b({}, e), {}, x({}, n, k(p[n])))
                        }
                        )),
                        S.chooseTemplatePhotoToggle || 3 == e.showPhotoToggleOption && n == l.ChooseTemplateFilter.PHOTO || S.templateOrderFilter && n == l.ChooseTemplateFilter.CATEGORY ? e.setTemplateFilters(p[n].toString(), n, !1) : S.isFeaturePresent(l.FeatureSet.TEMPLATES_WITH_ICONS_MONOGRAMS) && n == l.ChooseTemplateFilter.GRAPHICS ? e.setTemplateFilters(p[n], n) : e.setTemplateFilters("", n, !0)) : (S.isFeaturePresent(l.FeatureSet.TEMPLATES_WITH_ICONS_MONOGRAMS) && n == l.ChooseTemplateFilter.GRAPHICS ? e.setTemplateFilters([s], n) : e.setTemplateFilters(s, n),
                            g((function (e) {
                                return b(b({}, e), {}, x({}, n, [s]))
                            }
                            )))
                } else {
                    var m, c = null === (m = p[n]) || void 0 === m ? void 0 : m.filter((function (e) {
                        return e != s
                    }
                    ));
                    if (c.length > 0)
                        S.templateOrderFilter && n == l.ChooseTemplateFilter.CATEGORY ? e.setTemplateFilters(c.toString(), n, !1) : S.isFeaturePresent(l.FeatureSet.TEMPLATES_WITH_ICONS_MONOGRAMS) && n == l.ChooseTemplateFilter.GRAPHICS ? e.setTemplateFilters(c, n) : e.setTemplateFilters(c[0], n);
                    else {
                        var u = o.CommonHelper.getStorageValue(l.CONSTS.TEMPLATE_SELECTED_FILTER, o.TypeCodes.storageType.sessionStorage);
                        delete u[n],
                            o.CommonHelper.setStorageValue(l.CONSTS.TEMPLATE_SELECTED_FILTER, u, o.TypeCodes.storageType.sessionStorage),
                            e.setTemplateFilters("", n)
                    }
                    g((function (e) {
                        return c.length > 0 ? b(b({}, e), {}, x({}, n, k(c))) : (delete e[n],
                            b({}, e))
                    }
                    ))
                }
            }
                , D = function (e, t) {
                    return !!d[t] && (!!d[t].includes(e) || void 0)
                }
                , V = function () {
                    var t, n, a, o = !1;
                    S.sideBarFilters ? (o = !d || !((null === (t = Object.keys(d)) || void 0 === t ? void 0 : t.length) > 0),
                        (S.ctFiltersFR || S.favTemplatesV4) && (o = (null === (n = Object.keys(d)) || void 0 === n ? void 0 : n.length) > 0)) : o = null == e || !e.selectedTemplateFilter || !((null === (a = Object.keys(null == e ? void 0 : e.selectedTemplateFilter)) || void 0 === a ? void 0 : a.length) > 0);
                    return o
                }
                , U = x(x(x(x(x(x({}, l.experienceLevel.onBoardingSkip, S.Localization.allTemplates_txt), l.experienceLevel.ZeroYear, S.Localization.noExperience), l.experienceLevel.zeroToThreeYears, S.Localization.zeroToThreeYears_lbl), l.experienceLevel.threeToFiveYears, S.Localization.threeToFiveYears_lbl), l.experienceLevel.fiveToTenYears, S.Localization.fiveToTenYears_lbl), l.experienceLevel.tenPlusYears, S.Localization.tenPlusYears_lbl);
            S.ctFiltersFR && delete U[l.experienceLevel.onBoardingSkip];
            var M = P || F || l.experienceLevel.onBoardingSkip
                , B = [{
                    title: S.Localization.yearsOfExprience,
                    additionalContent: U[M],
                    content: r.default.createElement("ul", {
                        className: "list-experience"
                    }, Object.entries(U).map((function (t, n) {
                        var a = v(t, 2)
                            , p = a[0]
                            , i = a[1];
                        return r.default.createElement("li", {
                            className: "list-experience-item " + (M == p ? "active" : ""),
                            key: n,
                            onClick: function () {
                                return function (t) {
                                    var n = (0,
                                        s.getExperienceLevelFilter)();
                                    e.commonActions.SetClientSetting(l.ClientSettings.ExperienceLevelFilter, t),
                                        e.commonActions.SetClientSetting(l.ClientSettings.ExperienceLevelFilterPrev, n),
                                        (0,
                                            s.changeSteps)((0,
                                                s.getExperienceLevel)()),
                                        e.updateCTComponent(t),
                                        N(t);
                                    var a = {
                                        action: "clicked",
                                        "click option": t == l.experienceLevel.onBoardingSkip ? "All templates" : t,
                                        "screen name": "choose template"
                                    };
                                    S.TrackEvents("builder usage", a, S.getUserUId(), o.CommonHelper.isLoggedInUser(S.UserClaims), !1)
                                }(p)
                            }
                        }, i)
                    }
                    )))
                }, {
                    title: S.Localization.colors_label,
                    content: r.default.createElement("div", {
                        className: "color-selector-main"
                    }, r.default.createElement("div", {
                        className: "color-list-wrap"
                    }, r.default.createElement(c.default, {
                        trackEvents: e.trackEvents,
                        colorselectorlocation: "choose template",
                        colorThemes: S.experimentalColorPickerDropDownIntl,
                        miniColorDisplay: (!S.chooseTmplatsFilter || S.bundleImprovements) && S.miniColorDisplay,
                        skinColor: e.skinColor,
                        docTheme: e.docTheme,
                        skinClicked: e.skinClicked,
                        setSmallSkinSelectedColor: e.setSmallSkinSelectedColor,
                        isUpdatedChooseTempate: e.isUpdatedChooseTempate,
                        setSelectedColorName: e.setSelectedColorName,
                        hideColorDropDown: !0
                    })))
                }]
                , H = null === (t = Object.keys(f)) || void 0 === t ? void 0 : t.map((function (e) {
                    var t;
                    return {
                        title: y[e],
                        content: null === (t = f[e]) || void 0 === t ? void 0 : t.map((function (t, n) {
                            return r.default.createElement("div", {
                                className: "custom-control custom-checkbox custom-checkbox-sm",
                                key: n
                            }, r.default.createElement("input", {
                                type: "checkbox",
                                id: "".concat(e, "filtercheckbox_").concat(e).concat(n),
                                name: "".concat(e, "filtercheckbox"),
                                value: L[e][n],
                                className: "custom-control-input",
                                onChange: function (t) {
                                    return I(t, e)
                                },
                                checked: D(L[e][n], e)
                            }), r.default.createElement("label", {
                                htmlFor: "".concat(e, "filtercheckbox_").concat(e).concat(n),
                                className: "custom-control-label"
                            }, t))
                        }
                        ))
                    }
                }
                ));
            B = [].concat(k(B), k(H)),
                (S.filterTemplates || S.bundleImprovements) && (B = B.filter((function (e) {
                    return e.title == S.Localization.colors_label
                }
                )),
                    B = [].concat(k(B), k(H))),
                S.chooseTmplatsFilter && !S.bundleImprovements && (B = H);
            var j = function () {
                if (S.chooseTemplateFiltersV2) {
                    var e = document.querySelector(".page-choose-template .page-wrap")
                        , t = 20;
                    S.ctFiltersFR && (t = 110);
                    var n = document.querySelector("#app .header").offsetHeight + t;
                    window.onscroll = function () {
                        e && window.scrollY > n ? e.classList.add("filter-sticky") : e.classList.remove("filter-sticky")
                    }
                }
            }
                , G = S.getExperimentVariant(S.portalExperiments.mprOnboardingCollectBroadResumeIntent);
            return r.default.createElement(r.default.Fragment, null, r.default.createElement("section", {
                className: S.chooseTemplateFiltersV2 ? "aside-filters-v2" : (S.sideBarFilters ? "aside-filters" : "section-filters") + (S.filtersWithWhiteBckgrnd ? " aside-filters-v2" : "")
            }, r.default.createElement(i.default, {
                condition: S.sideBarFilters,
                wrapper: function (e) {
                    return r.default.createElement("div", {
                        className: "aside-filters-wrapper ".concat(S.filterSticky ? "custom-scroll" : "")
                    }, e)
                }
            }, S.chooseTemplateFiltersV2 ? r.default.createElement(r.default.Fragment, null, r.default.createElement(m.default, {
                data: B,
                defaultOpen: S.filterTemplates ? R.current : S.chooseTmplatsFilter ? [0, 1, 2] : [1, 2],
                multiple: !0
            }), r.default.createElement("div", {
                className: "filter-reset"
            }, r.default.createElement("button", {
                className: "btn btn-link ".concat(V() ? "is-active" : ""),
                onClick: function (t) {
                    t.preventDefault(),
                        e.resetTemplateFilters(),
                        z(S.chooseTemplateFiltersV2 ? "clear filters" : "all", "")
                }
            }, r.default.createElement("i", {
                className: "icon-erase"
            }), r.default.createElement("span", null, S.Localization.resetBtn_text)))) : r.default.createElement(r.default.Fragment, null, A ? r.default.createElement("div", {
                className: "filter-wrap"
            }, r.default.createElement("h3", {
                className: "category-head"
            }, S.Localization.filter_label), r.default.createElement("button", h({
                className: "clear-filter"
            }, (4 == G || 6 == G) && {
                type: "button"
            }, {
                onClick: e.resetTemplateFilters,
                disabled: 0 === Object.keys(d).length
            }), S.Localization.clearFilterText)) : !S.panelFilters && r.default.createElement(r.default.Fragment, null, S.sideBarFilters ? r.default.createElement("div", {
                className: "btn btn-link"
            }, r.default.createElement("i", {
                className: "icon-filter"
            }), r.default.createElement("span", {
                className: "filter-text"
            }, S.Localization.filter_label)) : r.default.createElement("button", {
                className: "btn btn-link",
                onClick: e.toggleFilters
            }, r.default.createElement("i", {
                className: "icon-filter"
            }), r.default.createElement("span", {
                className: "filter-text"
            }, e.showFilters ? S.Localization.showFilter_text : S.Localization.HideFilter_text))), r.default.createElement("ul", {
                className: "filter-lists"
            }, !A && !S.panelFilters && r.default.createElement("li", {
                className: "filter-lists-item"
            }, r.default.createElement("button", {
                className: "btn btn-default ".concat(V() ? "is-active" : ""),
                onClick: function (t) {
                    t.preventDefault(),
                        e.resetTemplateFilters(),
                        z("all", "")
                }
            }, S.Localization.resetBtn_text)), S.sideBarFilters && r.default.createElement(r.default.Fragment, null, null === (n = Object.keys(f)) || void 0 === n ? void 0 : n.map((function (t, n) {
                var a;
                return r.default.createElement("li", {
                    className: "filter-lists-item",
                    key: n
                }, r.default.createElement("fieldset", null, !(t == l.ChooseTemplateFilter.PHOTO && e.showPhotoToggleOption > 3) && r.default.createElement("legend", null, r.default.createElement("label", {
                    className: "lbl-filter-".concat(t.toLowerCase()).concat(A ? " category-head" : "")
                }, y[t])), null === (a = f[t]) || void 0 === a ? void 0 : a.map((function (n, a) {
                    return t == l.ChooseTemplateFilter.PHOTO && e.showPhotoToggleOption > 3 ? function (t) {
                        return 0 !== t ? null : r.default.createElement("div", {
                            className: "form-group switch-checkbox"
                        }, r.default.createElement("span", {
                            className: "switch-label"
                        }, e.resumeHeadshot), r.default.createElement("label", {
                            className: "switch"
                        }, r.default.createElement("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "photoToggleSwitch",
                            id: "photoToggleSwitch",
                            onChange: function () {
                                return e.updateTemplatesOnPhotoToggle()
                            },
                            checked: e.enablePhotoToggle
                        }), r.default.createElement("span", {
                            className: "slider"
                        }), r.default.createElement("span", {
                            className: "switch-icons"
                        })))
                    }(a) : r.default.createElement("div", {
                        className: "custom-control custom-checkbox",
                        key: a
                    }, r.default.createElement("input", {
                        type: "checkbox",
                        id: "".concat(t, "filtercheckbox_").concat(t).concat(a),
                        name: "".concat(t, "filtercheckbox"),
                        value: L[t][a],
                        className: "custom-control-input",
                        onChange: function (e) {
                            return I(e, t)
                        },
                        checked: D(L[t][a], t)
                    }), r.default.createElement("label", {
                        htmlFor: "".concat(t, "filtercheckbox_").concat(t).concat(a),
                        className: "custom-control-label"
                    }, n))
                }
                ))))
            }
            ))))))))
        }
    },
    59335: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a, o = (a = n(96540)) && a.__esModule ? a : {
            default: a
        };
        t.default = function (e) {
            return o.default.createElement("div", {
                className: "notification-bar ".concat(e.scrollClass, " ").concat(e.fadeInClass ? e.fadeInClass : "")
            }, o.default.createElement("p", {
                className: "notification-cntt ".concat(e.contentClass ? e.contentClass : ""),
                dangerouslySetInnerHTML: {
                    __html: e.notificationContent
                }
            }))
        }
    },
    18452: function (e, t, n) {
        "use strict";
        function a(e) {
            return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                a(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                (0,
                    r.useEffect)((function () {
                        (0,
                            l.trackPopupUsageWithClickOption)("viewed", !1, "choose template", "choose later", "popup")
                    }
                    ), []);
                var t = function () {
                    return i.Paths.rootURL + i.Paths.BasePath + "/images/rwzv2/zty/choose-later-popup-7.png"
                };
                return r.default.createElement(s.default, {
                    isOpen: !0,
                    closeModal: function () {
                        e.onCloseClick(),
                            (0,
                                l.trackPopupUsageWithClickOption)("clicked", "close", "choose template", "choose later", "popup")
                    },
                    hasHeader: !0,
                    hasFooter: !0,
                    btnPrimaryLabel: i.Localization.chooseLaterPopupSkipForNowBtnText,
                    onPrimaryClick: function () {
                        e.onSkipForNowClick(),
                            (0,
                                l.trackPopupUsageWithClickOption)("clicked", "skip for now", "choose template", "choose later", "popup")
                    },
                    btnSecondaryLabel: i.Localization.chooseLaterPopupChooseTemplateBtnText,
                    onSecondaryClick: function () {
                        e.onChooseTemplateClick(),
                            (0,
                                l.trackPopupUsageWithClickOption)("clicked", "choose template", "choose template", "choose later", "popup")
                    },
                    cssClass: {
                        btnPrimary: "btn-secondary",
                        btnSecondary: "btn-primary",
                        modalDialog: "modal-choose-later-popup"
                    }
                }, r.default.createElement("div", {
                    className: "modal-body"
                }, r.default.createElement("div", {
                    className: "modal-img-block"
                }, !i.isMPROrMPCL && !i.isHLM && r.default.createElement("picture", null, r.default.createElement("source", {
                    srcSet: t()
                }), r.default.createElement("img", {
                    src: t(),
                    alt: "choose-later popup img",
                    className: "choose-later-img-v7"
                }))), r.default.createElement("h1", {
                    className: "choose-later-heading"
                }, i.Localization.chooseLaterPopupHeadText), r.default.createElement("p", {
                    className: "choose-later-paragraph"
                }, i.Localization.chooseLaterPopupBodyText)))
            }
            ;
        var o, r = function (e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != a(e) && "function" != typeof e)
                return {
                    default: e
                };
            var n = p(t);
            if (n && n.has(e))
                return n.get(e);
            var o = {
                __proto__: null
            }
                , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var s in e)
                if ("default" !== s && {}.hasOwnProperty.call(e, s)) {
                    var l = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                    l && (l.get || l.set) ? Object.defineProperty(o, s, l) : o[s] = e[s]
                }
            return o.default = e,
                n && n.set(e, o),
                o
        }(n(96540)), s = (o = n(42692)) && o.__esModule ? o : {
            default: o
        }, l = n(4623);
        function p(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
                , n = new WeakMap;
            return (p = function (e) {
                return e ? n : t
            }
            )(e)
        }
        var i = window.RDL
    },
    44867: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(31601)
            , o = n.n(a)
            , r = n(76314)
            , s = n.n(r)
            , l = n(4417)
            , p = n.n(l)
            , i = new URL(n(78879), n.b)
            , m = s()(o())
            , c = p()(i);
        m.push([e.id, "/* .page-choose-template .skn-ata1.document html, .page-choose-template .skn-ata1.document body, .page-choose-template .skn-ata1.document div, .page-choose-template .skn-ata1.document span, .page-choose-template .skn-ata1.document applet, .page-choose-template .skn-ata1.document object, .page-choose-template .skn-ata1.document iframe, .page-choose-template .skn-ata1.document h1, .page-choose-template .skn-ata1.document h2, .page-choose-template .skn-ata1.document h3, .page-choose-template .skn-ata1.document h4, .page-choose-template .skn-ata1.document h5, .page-choose-template .skn-ata1.document h6, .page-choose-template .skn-ata1.document p, .page-choose-template .skn-ata1.document blockquote, .page-choose-template .skn-ata1.document pre, .page-choose-template .skn-ata1.document a, .page-choose-template .skn-ata1.document abbr, .page-choose-template .skn-ata1.document acronym, .page-choose-template .skn-ata1.document address, .page-choose-template .skn-ata1.document big, .page-choose-template .skn-ata1.document cite, .page-choose-template .skn-ata1.document code, .page-choose-template .skn-ata1.document del, .page-choose-template .skn-ata1.document dfn, .page-choose-template .skn-ata1.document em, .page-choose-template .skn-ata1.document font, .page-choose-template .skn-ata1.document img, .page-choose-template .skn-ata1.document ins, .page-choose-template .skn-ata1.document kbd, .page-choose-template .skn-ata1.document q, .page-choose-template .skn-ata1.document s, .page-choose-template .skn-ata1.document samp, .page-choose-template .skn-ata1.document small, .page-choose-template .skn-ata1.document strike, .page-choose-template .skn-ata1.document strong, .page-choose-template .skn-ata1.document sub, .page-choose-template .skn-ata1.document sup, .page-choose-template .skn-ata1.document tt, .page-choose-template .skn-ata1.document var, .page-choose-template .skn-ata1.document b, .page-choose-template .skn-ata1.document u, .page-choose-template .skn-ata1.document i, .page-choose-template .skn-ata1.document center, .page-choose-template .skn-ata1.document dl, .page-choose-template .skn-ata1.document dt, .page-choose-template .skn-ata1.document dd, .page-choose-template .skn-ata1.document ol, .page-choose-template .skn-ata1.document ul, .page-choose-template .skn-ata1.document li, .page-choose-template .skn-ata1.document fieldset, .page-choose-template .skn-ata1.document form, .page-choose-template .skn-ata1.document label, .page-choose-template .skn-ata1.document legend, .page-choose-template .skn-ata1.document table, .page-choose-template .skn-ata1.document caption, .page-choose-template .skn-ata1.document tbody, .page-choose-template .skn-ata1.document tfoot, .page-choose-template .skn-ata1.document thead, .page-choose-template .skn-ata1.document tr, .page-choose-template .skn-ata1.document th, .page-choose-template .skn-ata1.document td{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    background: transparent;\r\n}\r\n.page-choose-template .skn-ata1.document #SECTION_CERT{\r\n    display: none\r\n}\r\n.mes .page-choose-template .skn-ata1.document #SECTION_EDUC,.mes .page-choose-template .skn-ata1.document #SECTION_AWAR{\r\n    display: none;\r\n}\r\n.mfr .page-choose-template .skn-ata1.document #SECTION_EDUC,.mfr .page-choose-template .skn-ata1.document #SECTION_AWAR{\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-ata1.document table{\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n.page-choose-template .skn-ata1.document ul{\r\n    margin-left: 13px;\r\n}\r\n.page-choose-template .skn-ata1.document ul li{\r\n    margin-left: 16px;\r\n    list-style-type: disc;\r\n}\r\n.page-choose-template .skn-ata1.document div.name{\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    font-weight: bold;\r\n    padding: 0;\r\n    text-align: left;\r\n    word-wrap: break-word;\r\n}\r\n.page-choose-template .skn-ata1.document div.logo{\r\n    display: none;\r\n}\r\n.page-choose-template .skn-ata1.document div.paragraph{\r\n    position: relative;\r\n    clear: both;\r\n}\r\n.page-choose-template .skn-ata1.document div.heading{\r\n    clear: both;\r\n    font-weight: bold;\r\n}\r\n.page-choose-template .skn-ata1.document div.address{\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin-top: 11px;\r\n    word-wrap: break-word;\r\n}\r\n.page-choose-template .skn-ata1.document div.address2{\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n.page-choose-template .skn-ata1.document div.adnlLnks{\r\n    margin-bottom: 10px;\r\n}\r\n.page-choose-template .skn-ata1.document div.adnlLnks ul, .page-choose-template .skn-ata1.document div.adnlLnks li{\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n.page-choose-template .skn-ata1.document div.adnlLnks li{\r\n    display: inline;\r\n    margin-right: 10px;\r\n}\r\n.page-choose-template .skn-ata1.document span.paddedline{\r\n    display: block;\r\n}\r\n.page-choose-template .skn-ata1.document span.jobtitle, .page-choose-template .skn-ata1.document span.companyname, .page-choose-template .skn-ata1.document span.degree, .page-choose-template .skn-ata1.document span.programline{\r\n    font-weight: bold;\r\n}\r\n.page-choose-template .skn-ata1.document div.dates_wrapper{\r\n    display: block;\r\n    float: left;\r\n    text-align: center;\r\n}\r\n.page-choose-template .skn-ata1.document span.statesWrapper{\r\n    float: right;\r\n}\r\n.page-choose-template .skn-ata1.document span.cdesc{\r\n    font-style: italic;\r\n}\r\n.page-choose-template .skn-ata1.document  table{\r\n    width: 100%;\r\n}\r\n.page-choose-template .skn-ata1.document .table_wrapper{\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n.page-choose-template .skn-ata1.document table.twocol td{\r\n    width: 50%;\r\n}\r\n.page-choose-template .skn-ata1.document table.skills{\r\n    width: 100%;\r\n}\r\n.page-choose-template .skn-ata1.document table.skills th, .page-choose-template .skn-ata1.document table.skills td{\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n.page-choose-template .skn-ata1.document table.skills th{\r\n    text-decoration: underline;\r\n}\r\n.page-choose-template .skn-ata1.document table.skills .skillname, .page-choose-template .skn-ata1.document table.skills .skillrating{\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n.page-choose-template .skn-ata1.document table.skills .skillrating{\r\n    width: 20%;\r\n}\r\n.page-choose-template .skn-ata1.document table.skills .skillyears, .page-choose-template .skn-ata1.document table.skills .skilllast{\r\n    width: 19%;\r\n}\r\n.page-choose-template .skn-ata1.document table.skills .pad1{\r\n    width: 5%;\r\n}\r\n.page-choose-template .skn-ata1.document table.skills .pad2, .page-choose-template .skn-ata1.document table.skills .pad3{\r\n    width: 1%;\r\n}\r\n.page-choose-template .skn-ata1.document .nodisplay{\r\n    display: none;\r\n}\r\n.page-choose-template .skn-ata1.document div.resumeTitle, .page-choose-template .skn-ata1.document div.execRsmTitle{\r\n    font-weight: bold;\r\n    text-align: left;\r\n}\r\n.page-choose-template .skn-ata1.document td.twocol_2{\r\n    border-left: 1px solid #fefdfd;\r\n}\r\n.page-choose-template .skn-ata1.document .prflPic{\r\n    float: left;\r\n    padding-bottom: 10px;\r\n}\r\n.page-choose-template .skn-ata1.document .prflPic img{\r\n    vertical-align: top;\r\n    width: 99px;\r\n    height: 128px;\r\n}\r\n.page-choose-template .skn-ata1.document  div.sectiontitle{\r\n    border-bottom: 1px solid;\r\n}\r\n.page-choose-template .skn-ata1.document  .sectionCL .paragraph{\r\n    margin-top: 0 !important;\r\n}\r\n.page-choose-template .skn-ata1.document .PARAGRAPH_CLPRFL .myLftIndnt{\r\n    margin: 0;\r\n    padding-bottom: 10px;\r\n}\r\n.page-choose-template .skn-ata1.document  .disclaim .singlecolumn, .page-choose-template .skn-ata1.document  .signPic>.field_sign{\r\n    margin-left: 0 !important;\r\n}\r\n.page-choose-template .skn-ata1.document  .disclaim .singlecolumn, .page-choose-template .skn-ata1.document  .disclaim .singlecolumn li, .page-choose-template .skn-ata1.document  .disclaim .singlecolumn p, .page-choose-template .skn-ata1.document  .disclaim .singlecolumn span{\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n.page-choose-template .skn-ata1.document  .field_sign{\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n.page-choose-template .skn-ata1.document  .txtleft+.field_sign{\r\n    text-align: left;\r\n}\r\n.page-choose-template .skn-ata1.document  .txtcenter+.field_sign{\r\n    text-align: center;\r\n}\r\n.page-choose-template .skn-ata1.document  .txtright+.field_sign{\r\n    text-align: right;\r\n}\r\n.page-choose-template .skn-ata1.document  .signPic span:first-child{\r\n    padding-right: 6px;\r\n}\r\n.page-choose-template .skn-ata1.document  .signPic img{\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n.page-choose-template .skn-ata1.document {\r\n    line-height: 17px;\r\n}\r\n.page-choose-template .skn-ata1.document  table{\r\n    line-height: 17px;\r\n}\r\n.page-choose-template .skn-ata1.pagesize{\r\n    width: 536px;\r\n}\r\n.page-choose-template .skn-ata1.vmargins{\r\n    padding-top: 42px;\r\n    padding-bottom: 42px;\r\n}\r\n.page-choose-template .skn-ata1.hmargins{\r\n    padding-left: 62px;\r\n    padding-right: 62px;\r\n}\r\n.page-choose-template .skn-ata1.document  .section{\r\n    margin-top: 5px;\r\n}\r\n.page-choose-template .skn-ata1.document  .disclaim{\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 50px;\r\n}\r\n.page-choose-template .skn-ata1.document  div.firstsection{\r\n    margin-top: 0;\r\n}\r\n.page-choose-template .skn-ata1.document  div.SECTION_CNTC, .page-choose-template .skn-ata1.document  div.SECTION_ALNK{\r\n    margin-top: 0;\r\n}\r\n.page-choose-template .skn-ata1.document  div.heading{\r\n    margin-bottom: 8px;\r\n} */\r\n/* .page-choose-template .skn-ata1.document  div.paragraph{\r\n    margin-top: 16px;\r\n} */\r\n/* .page-choose-template .skn-ata1.document  div.firstparagraph{\r\n    margin-top: 0;\r\n}\r\n.page-choose-template .skn-ata1.document  .singlecolumn, .page-choose-template .skn-ata1.document  .maincolumn, .page-choose-template .skn-ata1.document .myLftIndnt{\r\n    margin-left: 105px;\r\n}\r\n.page-choose-template .skn-ata1.document div.dates_wrapper{\r\n    width: 105px;\r\n    font-size: 10px;\r\n}\r\n.page-choose-template .skn-ata1.fontsize{\r\n    font-size: 11px;\r\n}\r\n.page-choose-template .skn-ata1.fontface{\r\n    font-family: Palatino Linotype;\r\n}\r\n.page-choose-template .skn-ata1.document  div.sectiontitle{\r\n    font-size: 13px;\r\n    line-height: 19px;\r\n}\r\n.page-choose-template .skn-ata1.document div.name{\r\n    font-size: 21px;\r\n    line-height: 33px;\r\n}\r\n.page-choose-template .skn-ata1.document div.address{\r\n    font-size: 11px;\r\n    line-height: 17px;\r\n    margin-top: 12px;\r\n}\r\n.page-choose-template .skn-ata1.document  table.skills td{\r\n    padding-top: 8px;\r\n}\r\n.page-choose-template .skn-ata1.document div.resumeTitle{\r\n    font-size: 13px;\r\n    line-height: 25px;\r\n}\r\n.page-choose-template .skn-ata1.document div.execRsmTitle{\r\n    font-size: 12px;\r\n    line-height: 18px;\r\n}\r\n.page-choose-template .skn-ata1.document span.compDescWrap{\r\n    margin-bottom: 8px;\r\n}\r\n.page-choose-template .skn-ata1.document  div.name, .page-choose-template .skn-ata1.document  div.sectiontitle{\r\n    color: SDCL;\r\n}\r\n.page-choose-template .skn-ata1.document  .sectionCL .singlecolumn{\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n    font-size: 11px;\r\n}\r\n.page-choose-template .skn-ata1.document div.address2{\r\n    font-size: 11px;\r\n    line-height: 17px;\r\n}\r\n.page-choose-template .skn-ata1.document  div.disclaim div.heading{\r\n    margin-bottom: 6px;\r\n} */\r\n.page-choose-template .skn-cba1.document html,\r\n.page-choose-template .skn-cba1.document body,\r\n.page-choose-template .skn-cba1.document div,\r\n.page-choose-template .skn-cba1.document span,\r\n.page-choose-template .skn-cba1.document applet,\r\n.page-choose-template .skn-cba1.document object,\r\n.page-choose-template .skn-cba1.document iframe,\r\n.page-choose-template .skn-cba1.document h1,\r\n.page-choose-template .skn-cba1.document h2,\r\n.page-choose-template .skn-cba1.document h3,\r\n.page-choose-template .skn-cba1.document h4,\r\n.page-choose-template .skn-cba1.document h5,\r\n.page-choose-template .skn-cba1.document h6,\r\n.page-choose-template .skn-cba1.document p,\r\n.page-choose-template .skn-cba1.document blockquote,\r\n.page-choose-template .skn-cba1.document pre,\r\n.page-choose-template .skn-cba1.document a,\r\n.page-choose-template .skn-cba1.document abbr,\r\n.page-choose-template .skn-cba1.document acronym,\r\n.page-choose-template .skn-cba1.document address,\r\n.page-choose-template .skn-cba1.document big,\r\n.page-choose-template .skn-cba1.document cite,\r\n.page-choose-template .skn-cba1.document code,\r\n.page-choose-template .skn-cba1.document del,\r\n.page-choose-template .skn-cba1.document dfn,\r\n.page-choose-template .skn-cba1.document em,\r\n.page-choose-template .skn-cba1.document font,\r\n.page-choose-template .skn-cba1.document img,\r\n.page-choose-template .skn-cba1.document ins,\r\n.page-choose-template .skn-cba1.document kbd,\r\n.page-choose-template .skn-cba1.document q,\r\n.page-choose-template .skn-cba1.document s,\r\n.page-choose-template .skn-cba1.document samp,\r\n.page-choose-template .skn-cba1.document small,\r\n.page-choose-template .skn-cba1.document strike,\r\n.page-choose-template .skn-cba1.document strong,\r\n.page-choose-template .skn-cba1.document sub,\r\n.page-choose-template .skn-cba1.document sup,\r\n.page-choose-template .skn-cba1.document tt,\r\n.page-choose-template .skn-cba1.document var,\r\n.page-choose-template .skn-cba1.document b,\r\n.page-choose-template .skn-cba1.document u,\r\n.page-choose-template .skn-cba1.document i,\r\n.page-choose-template .skn-cba1.document center,\r\n.page-choose-template .skn-cba1.document dl,\r\n.page-choose-template .skn-cba1.document dt,\r\n.page-choose-template .skn-cba1.document dd,\r\n.page-choose-template .skn-cba1.document ol,\r\n.page-choose-template .skn-cba1.document ul,\r\n.page-choose-template .skn-cba1.document li,\r\n.page-choose-template .skn-cba1.document fieldset,\r\n.page-choose-template .skn-cba1.document form,\r\n.page-choose-template .skn-cba1.document label,\r\n.page-choose-template .skn-cba1.document legend,\r\n.page-choose-template .skn-cba1.document table,\r\n.page-choose-template .skn-cba1.document caption,\r\n.page-choose-template .skn-cba1.document tbody,\r\n.page-choose-template .skn-cba1.document tfoot,\r\n.page-choose-template .skn-cba1.document thead,\r\n.page-choose-template .skn-cba1.document tr,\r\n.page-choose-template .skn-cba1.document th,\r\n.page-choose-template .skn-cba1.document td {\r\n    /* margin: 0; */\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    /* background: transparent; */\r\n}\r\n\r\n.page-choose-template .skn-cba1.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document ul,\r\n.page-choose-template .skn-cba1.document li {\r\n    list-style-type: disc;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document ul li {\r\n    margin: 0 0 0 13px;\r\n}\r\n\r\n.mfr .page-choose-template .skn-cba1.document #SECTION_CERT {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.lowerborder {\r\n    border-bottom: 3px solid;\r\n    margin-top: 2px;\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.SECTION_CNTC,\r\n.page-choose-template .skn-cba1.document div.SECTION_ALNK {\r\n    padding-bottom: 6px;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.name {\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    font-weight: bold;\r\n    padding: 0 0 1px 0;\r\n    border-bottom: 1px solid;\r\n    font-variant: small-caps;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.heading {\r\n    clear: both;\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.address {\r\n    position: relative;\r\n    text-align: center;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin-top: 11px;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.adnlLnks {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.adnlLnks ul {\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.address li,\r\n.page-choose-template .skn-cba1.document div.address ul,\r\n.page-choose-template .skn-cba1.document div.adnlLnks li {\r\n    display: inline;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.adnlLnks li {\r\n    display: inline;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.adnlLnks li:first-child {\r\n    margin-left: 0;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.address li:before,\r\n.page-choose-template .skn-cba1.document div.adnlLnks li:before {\r\n    content: '• ';\r\n    vertical-align: bottom;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.address li.first:before,\r\n.page-choose-template .skn-cba1.document div.adnlLnks li.first:before {\r\n    content: '';\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document span.jobtitle,\r\n.page-choose-template .skn-cba1.document span.companyname,\r\n.page-choose-template .skn-cba1.document span.degree {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document table.twocol td {\r\n    width: 50%;\r\n    vertical-align: top;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document table.skills,\r\n.page-choose-template .skn-cba1.document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document table.skills th,\r\n.page-choose-template .skn-cba1.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document table.skills .skillname,\r\n.page-choose-template .skn-cba1.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document table.skills .skillyears,\r\n.page-choose-template .skn-cba1.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document table.skills .pad2,\r\n.page-choose-template .skn-cba1.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document td.twocol_2 {\r\n    border-left: 1px solid #fefdfd;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-cba1.document .signPic>.field_sign {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-cba1.document .disclaim .singlecolumn li,\r\n.page-choose-template .skn-cba1.document .disclaim .singlecolumn p,\r\n.page-choose-template .skn-cba1.document .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document {\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document table {\r\n    line-height: 17px;\r\n}\r\n\r\n/* .page-choose-template .skn-cba1.pagesize {\r\n    width: 576px;\r\n}\r\n\r\n.page-choose-template .skn-cba1.vmargins {\r\n    padding-top: 26px;\r\n    padding-bottom: 26px;\r\n}\r\n\r\n.page-choose-template .skn-cba1.hmargins {\r\n    padding-left: 42px;\r\n    padding-right: 42px;\r\n} */\r\n\r\n.page-choose-template .skn-cba1.document .section {\r\n    margin-top: 12px;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 60px;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.sectiontitle {\r\n    font-size: 14px;\r\n    line-height: 19px;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.heading {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n/* .page-choose-template .skn-cba1.document  div.paragraph{\r\n    margin-top: 10px;\r\n} */\r\n/* .page-choose-template .skn-cba1.document  div.firstparagraph{\r\n    margin-top: 0;\r\n} */\r\n.page-choose-template .skn-cba1.document .singlecolumn,\r\n.page-choose-template .skn-cba1.document .maincolumn {\r\n    margin-left: 0;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document table.skills td {\r\n    padding-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-cba1.fontsize {\r\n    font-size: 12px;\r\n}\r\n\r\n.page-choose-template .skn-cba1.fontface {\r\n    font-family: 'Palatino Linotype', sans-serif;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.name {\r\n    font-size: 24px;\r\n    line-height: 44px;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document .PARAGRAPH_PRFL div.address,\r\n.page-choose-template .skn-cba1.document .PARAGRAPH_CLPRFL div.address {\r\n    font-size: 11px;\r\n    line-height: 16px;\r\n    margin-top: 7px;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.address li:before {\r\n    font-size: 14px;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.name,\r\n.page-choose-template .skn-cba1.document div.sectiontitle {\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.lowerborder {\r\n    border-color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document div.address2 {\r\n    font-size: 12px;\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-cba1.document body {\r\n    font-feature-settings: 'liga' 0;\r\n    -moz-font-feature-settings: 'liga' off;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document html,\r\n.page-choose-template .skn-cba2.document body,\r\n.page-choose-template .skn-cba2.document div,\r\n.page-choose-template .skn-cba2.document span,\r\n.page-choose-template .skn-cba2.document applet,\r\n.page-choose-template .skn-cba2.document object,\r\n.page-choose-template .skn-cba2.document iframe,\r\n.page-choose-template .skn-cba2.document h1,\r\n.page-choose-template .skn-cba2.document h2,\r\n.page-choose-template .skn-cba2.document h3,\r\n.page-choose-template .skn-cba2.document h4,\r\n.page-choose-template .skn-cba2.document h5,\r\n.page-choose-template .skn-cba2.document h6,\r\n.page-choose-template .skn-cba2.document p,\r\n.page-choose-template .skn-cba2.document blockquote,\r\n.page-choose-template .skn-cba2.document pre,\r\n.page-choose-template .skn-cba2.document a,\r\n.page-choose-template .skn-cba2.document abbr,\r\n.page-choose-template .skn-cba2.document acronym,\r\n.page-choose-template .skn-cba2.document address,\r\n.page-choose-template .skn-cba2.document big,\r\n.page-choose-template .skn-cba2.document cite,\r\n.page-choose-template .skn-cba2.document code,\r\n.page-choose-template .skn-cba2.document del,\r\n.page-choose-template .skn-cba2.document dfn,\r\n.page-choose-template .skn-cba2.document em,\r\n.page-choose-template .skn-cba2.document font,\r\n.page-choose-template .skn-cba2.document img,\r\n.page-choose-template .skn-cba2.document ins,\r\n.page-choose-template .skn-cba2.document kbd,\r\n.page-choose-template .skn-cba2.document q,\r\n.page-choose-template .skn-cba2.document s,\r\n.page-choose-template .skn-cba2.document samp,\r\n.page-choose-template .skn-cba2.document small,\r\n.page-choose-template .skn-cba2.document strike,\r\n.page-choose-template .skn-cba2.document strong,\r\n.page-choose-template .skn-cba2.document sub,\r\n.page-choose-template .skn-cba2.document sup,\r\n.page-choose-template .skn-cba2.document tt,\r\n.page-choose-template .skn-cba2.document var,\r\n.page-choose-template .skn-cba2.document b,\r\n.page-choose-template .skn-cba2.document u,\r\n.page-choose-template .skn-cba2.document i,\r\n.page-choose-template .skn-cba2.document center,\r\n.page-choose-template .skn-cba2.document dl,\r\n.page-choose-template .skn-cba2.document dt,\r\n.page-choose-template .skn-cba2.document dd,\r\n.page-choose-template .skn-cba2.document ol,\r\n.page-choose-template .skn-cba2.document ul,\r\n.page-choose-template .skn-cba2.document li,\r\n.page-choose-template .skn-cba2.document fieldset,\r\n.page-choose-template .skn-cba2.document form,\r\n.page-choose-template .skn-cba2.document label,\r\n.page-choose-template .skn-cba2.document legend,\r\n.page-choose-template .skn-cba2.document table,\r\n.page-choose-template .skn-cba2.document caption,\r\n.page-choose-template .skn-cba2.document tbody,\r\n.page-choose-template .skn-cba2.document tfoot,\r\n.page-choose-template .skn-cba2.document thead,\r\n.page-choose-template .skn-cba2.document tr,\r\n.page-choose-template .skn-cba2.document th,\r\n.page-choose-template .skn-cba2.document td {\r\n    /*margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n     background: transparent; */\r\n}\r\n\r\n.page-choose-template .skn-cba2.document #SECTION_CERT {\r\n    display: none\r\n}\r\n\r\n.page-choose-template .skn-cba2.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document ul,\r\n.page-choose-template .skn-cba2.document li {\r\n    list-style-type: disc;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document ul li {\r\n    margin: 0 0 0 13px;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.lowerborder {\r\n    border-bottom: 3px solid;\r\n    margin-top: 2px;\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.SECTION_CNTC,\r\n.page-choose-template .skn-cba2.document div.SECTION_ALNK {\r\n    padding-bottom: 10px;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.name {\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    font-weight: bold;\r\n    padding: 0 0 1px 0;\r\n    border-top: 1px solid;\r\n    border-bottom: 1px solid;\r\n    text-align: center;\r\n    font-variant: small-caps;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.heading {\r\n    clear: both;\r\n    text-align: center;\r\n    font-weight: normal;\r\n    font-variant: small-caps;\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.heading:before {\r\n    border-top: 1px solid black;\r\n    content: '';\r\n    display: block;\r\n    height: 1px;\r\n    position: absolute;\r\n    top: 50%;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document .section {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.sectiontitle {\r\n    display: inline-block;\r\n    position: relative;\r\n    z-index: 5;\r\n    background: #fff !important;\r\n    padding: 0 10px;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.address {\r\n    position: relative;\r\n    text-align: center;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin-top: 11px;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document .adnlLnks {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.address li,\r\n.page-choose-template .skn-cba2.document div.address ul,\r\n.page-choose-template .skn-cba2.document div.adnlLnks li,\r\n.page-choose-template .skn-cba2.document div.adnlLnks ul {\r\n    display: inline;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.address li:before,\r\n.page-choose-template .skn-cba2.document div.adnlLnks li:before {\r\n    content: '◆ ';\r\n    vertical-align: bottom;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.address li.first:before,\r\n.page-choose-template .skn-cba2.document div.adnlLnks li.first:before {\r\n    content: '';\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document span.jobtitle,\r\n.page-choose-template .skn-cba2.document span.companyname,\r\n.page-choose-template .skn-cba2.document span.degree {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document table.twocol td {\r\n    width: 50%;\r\n    vertical-align: top;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document table.skills,\r\n.page-choose-template .skn-cba2.document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document table.skills th,\r\n.page-choose-template .skn-cba2.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document table.skills .skillname,\r\n.page-choose-template .skn-cba2.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document table.skills .skillyears,\r\n.page-choose-template .skn-cba2.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document table.skills .pad2,\r\n.page-choose-template .skn-cba2.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document td.twocol_2 {\r\n    border-left: 1px solid #fefdfd;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-cba2.document .signPic>.field_sign {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-cba2.document .disclaim .singlecolumn li,\r\n.page-choose-template .skn-cba2.document .disclaim .singlecolumn p,\r\n.page-choose-template .skn-cba2.document .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document {\r\n    line-height: 18px;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document table {\r\n    line-height: 18px;\r\n}\r\n\r\n/* .page-choose-template .skn-cba2.pagesize {\r\n    width: 576px;\r\n}\r\n\r\n.page-choose-template .skn-cba2.vmargins {\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n\r\n.page-choose-template .skn-cba2.hmargins {\r\n    padding-left: 42px;\r\n    padding-right: 42px;\r\n} */\r\n\r\n.page-choose-template .skn-cba2.document .section {\r\n    margin-top: 12px;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 60px;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.sectiontitle {\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.heading {\r\n    margin-bottom: 6px;\r\n}\r\n\r\n/* .page-choose-template .skn-cba2.document  div.paragraph{\r\n    margin-top: 12px;\r\n} */\r\n.page-choose-template .skn-cba2.document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n/* .page-choose-template .skn-cba2.document .singlecolumn,\r\n.page-choose-template .skn-cba2.document .maincolumn {\r\n    margin-left: 0;\r\n    width: 576px;\r\n} */\r\n\r\n.page-choose-template .skn-cba2.document table.skills td {\r\n    padding-top: 6px;\r\n}\r\n\r\n.page-choose-template .skn-cba2.fontsize {\r\n    font-size: 12px;\r\n}\r\n\r\n.page-choose-template .skn-cba2.fontface {\r\n    font-family: 'Times New Roman', sans-serif;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.name {\r\n    font-size: 24px;\r\n    line-height: 48px;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.address {\r\n    font-size: 11px;\r\n    line-height: 17px;\r\n    margin-top: 8px;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.address li:before {\r\n    font-size: 10px;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.name,\r\n.page-choose-template .skn-cba2.document div.sectiontitle {\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.lowerborder,\r\n.page-choose-template .skn-cba2.document div.heading:before {\r\n    border-color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.address2 {\r\n    font-size: 12px;\r\n    line-height: 18px;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document body {\r\n    font-feature-settings: 'liga' 0;\r\n    -moz-font-feature-settings: 'liga' off;\r\n}\r\n\r\n.page-choose-template .skn-cba2.document div.disclaim div.heading {\r\n    margin-bottom: 6px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document html,\r\n.page-choose-template .skn-cba3.document body,\r\n.page-choose-template .skn-cba3.document div,\r\n.page-choose-template .skn-cba3.document span,\r\n.page-choose-template .skn-cba3.document applet,\r\n.page-choose-template .skn-cba3.document object,\r\n.page-choose-template .skn-cba3.document iframe,\r\n.page-choose-template .skn-cba3.document h1,\r\n.page-choose-template .skn-cba3.document h2,\r\n.page-choose-template .skn-cba3.document h3,\r\n.page-choose-template .skn-cba3.document h4,\r\n.page-choose-template .skn-cba3.document h5,\r\n.page-choose-template .skn-cba3.document h6,\r\n.page-choose-template .skn-cba3.document p,\r\n.page-choose-template .skn-cba3.document blockquote,\r\n.page-choose-template .skn-cba3.document pre,\r\n.page-choose-template .skn-cba3.document a,\r\n.page-choose-template .skn-cba3.document abbr,\r\n.page-choose-template .skn-cba3.document acronym,\r\n.page-choose-template .skn-cba3.document address,\r\n.page-choose-template .skn-cba3.document big,\r\n.page-choose-template .skn-cba3.document cite,\r\n.page-choose-template .skn-cba3.document code,\r\n.page-choose-template .skn-cba3.document del,\r\n.page-choose-template .skn-cba3.document dfn,\r\n.page-choose-template .skn-cba3.document em,\r\n.page-choose-template .skn-cba3.document font,\r\n.page-choose-template .skn-cba3.document img,\r\n.page-choose-template .skn-cba3.document ins,\r\n.page-choose-template .skn-cba3.document kbd,\r\n.page-choose-template .skn-cba3.document q,\r\n.page-choose-template .skn-cba3.document s,\r\n.page-choose-template .skn-cba3.document samp,\r\n.page-choose-template .skn-cba3.document small,\r\n.page-choose-template .skn-cba3.document strike,\r\n.page-choose-template .skn-cba3.document strong,\r\n.page-choose-template .skn-cba3.document sub,\r\n.page-choose-template .skn-cba3.document sup,\r\n.page-choose-template .skn-cba3.document tt,\r\n.page-choose-template .skn-cba3.document var,\r\n.page-choose-template .skn-cba3.document b,\r\n.page-choose-template .skn-cba3.document u,\r\n.page-choose-template .skn-cba3.document i,\r\n.page-choose-template .skn-cba3.document center,\r\n.page-choose-template .skn-cba3.document dl,\r\n.page-choose-template .skn-cba3.document dt,\r\n.page-choose-template .skn-cba3.document dd,\r\n.page-choose-template .skn-cba3.document ol,\r\n.page-choose-template .skn-cba3.document ul,\r\n.page-choose-template .skn-cba3.document li,\r\n.page-choose-template .skn-cba3.document fieldset,\r\n.page-choose-template .skn-cba3.document form,\r\n.page-choose-template .skn-cba3.document label,\r\n.page-choose-template .skn-cba3.document legend,\r\n.page-choose-template .skn-cba3.document table,\r\n.page-choose-template .skn-cba3.document caption,\r\n.page-choose-template .skn-cba3.document tbody,\r\n.page-choose-template .skn-cba3.document tfoot,\r\n.page-choose-template .skn-cba3.document thead,\r\n.page-choose-template .skn-cba3.document tr,\r\n.page-choose-template .skn-cba3.document th,\r\n.page-choose-template .skn-cba3.document td {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    /* background: transparent; */\r\n}\r\n\r\n.page-choose-template .skn-cba3.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document ul,\r\n.page-choose-template .skn-cba3.document li {\r\n    list-style-type: disc;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document ul li {\r\n    margin: 0 0 0 13px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.lowerborder {\r\n    border-bottom: 3px solid #39c;\r\n    margin-top: 2px;\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document .section-prfl,\r\n.page-choose-template .skn-cba3.document .section-clprfl {\r\n    padding-bottom: 10px;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.name {\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    font-weight: bold;\r\n    padding: 0 0 1px 0;\r\n    border-top: 1px solid #39c;\r\n    border-bottom: 1px solid #39c;\r\n    text-align: center;\r\n    font-variant: small-caps;\r\n    color: #39c;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.heading {\r\n    clear: both;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-variant: small-caps;\r\n    position: relative;\r\n    color: #39c;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.heading:before {\r\n    border-top: 1px solid #39c;\r\n    content: '';\r\n    display: block;\r\n    height: 1px;\r\n    position: absolute;\r\n    top: 50%;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document .section {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.sectiontitle {\r\n    display: inline-block;\r\n    position: relative;\r\n    z-index: 5;\r\n    background: #fff !important;\r\n    padding: 0 10px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.address {\r\n    position: relative;\r\n    text-align: center;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin-top: 11px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.adnlLnks {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.address li,\r\n.page-choose-template .skn-cba3.document div.address ul,\r\n.page-choose-template .skn-cba3.document div.adnlLnks li,\r\n.page-choose-template .skn-cba3.document div.adnlLnks ul {\r\n    display: inline;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.address li:before,\r\n.page-choose-template .skn-cba3.document div.adnlLnks li:before {\r\n    content: '◆ ';\r\n    vertical-align: bottom;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.address li.first:before,\r\n.page-choose-template .skn-cba3.document div.adnlLnks li.first:before {\r\n    content: '';\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.adnlLnks li:before {\r\n    margin: 0 5px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document span.jobtitle,\r\n.page-choose-template .skn-cba3.document span.companyname,\r\n.page-choose-template .skn-cba3.document span.degree {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document table.twocol td {\r\n    width: 50%;\r\n    vertical-align: top;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document table.skills {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document table.skills th,\r\n.page-choose-template .skn-cba3.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document table.skills .skillname,\r\n.page-choose-template .skn-cba3.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document table.skills .skillyears,\r\n.page-choose-template .skn-cba3.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document table.skills .pad2,\r\n.page-choose-template .skn-cba3.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-cba3.document .signPic>.field_sign {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-cba3.document .disclaim .singlecolumn li,\r\n.page-choose-template .skn-cba3.document .disclaim .singlecolumn p,\r\n.page-choose-template .skn-cba3.document .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document {\r\n    line-height: 16px;\r\n}\r\n\r\n/*\r\n.page-choose-template .skn-cba3.document table {\r\n    line-height: 16px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.pagesize {\r\n    width: 576px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.vmargins {\r\n    padding-top: 26px;\r\n    padding-bottom: 26px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.hmargins {\r\n    padding-left: 42px;\r\n    padding-right: 42px;\r\n} */\r\n\r\n.page-choose-template .skn-cba3.document .section {\r\n    margin-top: 12px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 60px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.sectiontitle {\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.heading {\r\n    margin-bottom: 6px;\r\n}\r\n\r\n/* .page-choose-template .skn-cba3.document  div.paragraph{\r\n    margin-top: 12px;\r\n} */\r\n.page-choose-template .skn-cba3.document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document .singlecolumn,\r\n.page-choose-template .skn-cba3.document .maincolumn {\r\n    margin-left: 0;\r\n    width: 576px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document table.skills td {\r\n    padding-top: 6px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.fontsize {\r\n    font-size: 12px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.fontface {\r\n    font-family: 'Times New Roman', sans-serif;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.name {\r\n    font-size: 24px;\r\n    line-height: 40px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.address {\r\n    font-size: 11px;\r\n    line-height: 15px;\r\n    margin-top: 6px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.address li:before {\r\n    font-size: 10px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.name,\r\n.page-choose-template .skn-cba3.document div.sectiontitle {\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.name,\r\n.page-choose-template .skn-cba3.document div.lowerborder,\r\n.page-choose-template .skn-cba3.document div.heading:before {\r\n    border-color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.address2 {\r\n    font-size: 12px;\r\n    line-height: 16px;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document body {\r\n    font-feature-settings: 'liga' 0;\r\n    -moz-font-feature-settings: 'liga' off;\r\n}\r\n\r\n.page-choose-template .skn-cba3.document div.disclaim div.heading {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document html,\r\n.page-choose-template .skn-cna1.document body,\r\n.page-choose-template .skn-cna1.document div,\r\n.page-choose-template .skn-cna1.document span,\r\n.page-choose-template .skn-cna1.document applet,\r\n.page-choose-template .skn-cna1.document object,\r\n.page-choose-template .skn-cna1.document iframe,\r\n.page-choose-template .skn-cna1.document h1,\r\n.page-choose-template .skn-cna1.document h2,\r\n.page-choose-template .skn-cna1.document h3,\r\n.page-choose-template .skn-cna1.document h4,\r\n.page-choose-template .skn-cna1.document h5,\r\n.page-choose-template .skn-cna1.document h6,\r\n.page-choose-template .skn-cna1.document p,\r\n.page-choose-template .skn-cna1.document blockquote,\r\n.page-choose-template .skn-cna1.document pre,\r\n.page-choose-template .skn-cna1.document a,\r\n.page-choose-template .skn-cna1.document abbr,\r\n.page-choose-template .skn-cna1.document acronym,\r\n.page-choose-template .skn-cna1.document address,\r\n.page-choose-template .skn-cna1.document big,\r\n.page-choose-template .skn-cna1.document cite,\r\n.page-choose-template .skn-cna1.document code,\r\n.page-choose-template .skn-cna1.document del,\r\n.page-choose-template .skn-cna1.document dfn,\r\n.page-choose-template .skn-cna1.document em,\r\n.page-choose-template .skn-cna1.document font,\r\n.page-choose-template .skn-cna1.document img,\r\n.page-choose-template .skn-cna1.document ins,\r\n.page-choose-template .skn-cna1.document kbd,\r\n.page-choose-template .skn-cna1.document q,\r\n.page-choose-template .skn-cna1.document s,\r\n.page-choose-template .skn-cna1.document samp,\r\n.page-choose-template .skn-cna1.document small,\r\n.page-choose-template .skn-cna1.document strike,\r\n.page-choose-template .skn-cna1.document strong,\r\n.page-choose-template .skn-cna1.document sub,\r\n.page-choose-template .skn-cna1.document sup,\r\n.page-choose-template .skn-cna1.document tt,\r\n.page-choose-template .skn-cna1.document var,\r\n.page-choose-template .skn-cna1.document b,\r\n.page-choose-template .skn-cna1.document u,\r\n.page-choose-template .skn-cna1.document i,\r\n.page-choose-template .skn-cna1.document center,\r\n.page-choose-template .skn-cna1.document dl,\r\n.page-choose-template .skn-cna1.document dt,\r\n.page-choose-template .skn-cna1.document dd,\r\n.page-choose-template .skn-cna1.document ol,\r\n.page-choose-template .skn-cna1.document ul,\r\n.page-choose-template .skn-cna1.document li,\r\n.page-choose-template .skn-cna1.document fieldset,\r\n.page-choose-template .skn-cna1.document form,\r\n.page-choose-template .skn-cna1.document label,\r\n.page-choose-template .skn-cna1.document legend,\r\n.page-choose-template .skn-cna1.document table,\r\n.page-choose-template .skn-cna1.document caption,\r\n.page-choose-template .skn-cna1.document tbody,\r\n.page-choose-template .skn-cna1.document tfoot,\r\n.page-choose-template .skn-cna1.document thead,\r\n.page-choose-template .skn-cna1.document tr,\r\n.page-choose-template .skn-cna1.document th,\r\n.page-choose-template .skn-cna1.document td {\r\n    /* margin: 0; */\r\n    /* padding: 0; */\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    /* background: transparent; */\r\n}\r\n\r\n.page-choose-template .skn-cna1.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.mes .page-choose-template .skn-cna1.document #SECTION_EDUC,\r\n.mes .page-choose-template .skn-cna1.document #SECTION_CERT {\r\n    display: none;\r\n}\r\n\r\n.mit .page-choose-template .skn-cna1.document #SECTION_EDUC,\r\n.mit .page-choose-template .skn-cna1.document #SECTION_CERT {\r\n    display: none;\r\n}\r\n\r\n.mfr .page-choose-template .skn-cna1.document #SECTION_EDUC,\r\n.mfr .page-choose-template .skn-cna1.document #SECTION_AWAR,\r\n.mfr .page-choose-template .skn-cna1.document #SECTION_CERT {\r\n    display: none\r\n}\r\n\r\n.page-choose-template .skn-cna1.document ul {\r\n    margin-left: 10px;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document ul li {\r\n    margin-left: 13px;\r\n    list-style-type: disc;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.name {\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    line-height: 17px;\r\n    border-top: 6px solid #58585b;\r\n    padding: 18px 0 0 0;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.heading {\r\n    clear: both;\r\n    color: #231f20;\r\n    text-transform: uppercase;\r\n    font-style: italic;\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.address,\r\n.page-choose-template .skn-cna1.document div.address2 {\r\n    position: relative;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    color: #808284;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.address {\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.adnlLnks {\r\n    margin-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.adnlLnks ul,\r\n.page-choose-template .skn-cna1.document div.adnlLnks li {\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.adnlLnks li {\r\n    display: inline;\r\n    margin-right: 10px;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .grayItl {\r\n    font-style: italic;\r\n    color: #c3c3c3;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document span.companyname,\r\n.page-choose-template .skn-cna1.document span.degree,\r\n.page-choose-template .skn-cna1.document span.smry,\r\n.page-choose-template .skn-cna1.document span.skils {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document span.companyname,\r\n.page-choose-template .skn-cna1.document span.degree {\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document span.email {\r\n    color: #00adef;\r\n    text-transform: lowercase;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document table.twocol td {\r\n    width: 50%;\r\n    vertical-align: top;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document {\r\n    color: #666;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document td.twocol_2 {\r\n    border-left: 1px solid #fff;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .sectionCL {\r\n    border: none !important;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document body {\r\n    font-feature-settings: 'liga' 0;\r\n    -moz-font-feature-settings: 'liga' off;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-cna1.document .signPic>.field_sign {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-cna1.document .disclaim .singlecolumn li,\r\n.page-choose-template .skn-cna1.document .disclaim .singlecolumn p,\r\n.page-choose-template .skn-cna1.document .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document [id*=\"SECTION_SGTR\"] {\r\n    border-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document {\r\n    line-height: 17px;\r\n    color: #404041;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document table {\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .section {\r\n    margin-top: 5px;\r\n    border-top: 1px solid #b2b0bf;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 40px;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.firstsection {\r\n    margin-top: 0;\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .section-prfl,\r\n.page-choose-template .skn-cna1.document .section-clprfl {\r\n    margin-top: 0;\r\n    padding-bottom: 6px;\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.heading {\r\n    margin-bottom: 7px;\r\n}\r\n\r\n/* .page-choose-template .skn-cna1.document  div.paragraph{\r\n    margin-top: 14px;\r\n} */\r\n.page-choose-template .skn-cna1.document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .singlecolumn,\r\n.page-choose-template .skn-cna1.document .maincolumn {\r\n    margin-left: 0;\r\n    width: 564px;\r\n}\r\n\r\n.page-choose-template .skn-cna1.fontsize {\r\n    font-size: 11px;\r\n}\r\n\r\n.page-choose-template .skn-cna1.fontface {\r\n    font-family: 'Century Gothic', sans-serif;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.sectiontitle {\r\n    font-size: 14px;\r\n    line-height: 28px;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.name {\r\n    font-size: 22px;\r\n    line-height: 34px;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.address {\r\n    font-size: 10px;\r\n    line-height: 23px;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.smry {\r\n    font-size: 12px;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document table.skills td {\r\n    padding-top: 7px;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.name,\r\n.page-choose-template .skn-cna1.document div.sectiontitle {\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.name {\r\n    border-top-color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.address2 {\r\n    font-size: 11px;\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .sectionDateCL {\r\n    padding-top: 8px;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document .disclaim {\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-cna1.document div.disclaim div.heading {\r\n    margin-bottom: 6px;\r\n    border-top: 1px solid #b2b0bf;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document html,\r\n.page-choose-template .skn-cna3.document body,\r\n.page-choose-template .skn-cna3.document div,\r\n.page-choose-template .skn-cna3.document span,\r\n.page-choose-template .skn-cna3.document applet,\r\n.page-choose-template .skn-cna3.document object,\r\n.page-choose-template .skn-cna3.document iframe,\r\n.page-choose-template .skn-cna3.document h1,\r\n.page-choose-template .skn-cna3.document h2,\r\n.page-choose-template .skn-cna3.document h3,\r\n.page-choose-template .skn-cna3.document h4,\r\n.page-choose-template .skn-cna3.document h5,\r\n.page-choose-template .skn-cna3.document h6,\r\n.page-choose-template .skn-cna3.document p,\r\n.page-choose-template .skn-cna3.document blockquote,\r\n.page-choose-template .skn-cna3.document pre,\r\n.page-choose-template .skn-cna3.document a,\r\n.page-choose-template .skn-cna3.document abbr,\r\n.page-choose-template .skn-cna3.document acronym,\r\n.page-choose-template .skn-cna3.document address,\r\n.page-choose-template .skn-cna3.document big,\r\n.page-choose-template .skn-cna3.document cite,\r\n.page-choose-template .skn-cna3.document code,\r\n.page-choose-template .skn-cna3.document del,\r\n.page-choose-template .skn-cna3.document dfn,\r\n.page-choose-template .skn-cna3.document em,\r\n.page-choose-template .skn-cna3.document font,\r\n.page-choose-template .skn-cna3.document img,\r\n.page-choose-template .skn-cna3.document ins,\r\n.page-choose-template .skn-cna3.document kbd,\r\n.page-choose-template .skn-cna3.document q,\r\n.page-choose-template .skn-cna3.document s,\r\n.page-choose-template .skn-cna3.document samp,\r\n.page-choose-template .skn-cna3.document small,\r\n.page-choose-template .skn-cna3.document strike,\r\n.page-choose-template .skn-cna3.document strong,\r\n.page-choose-template .skn-cna3.document sub,\r\n.page-choose-template .skn-cna3.document sup,\r\n.page-choose-template .skn-cna3.document tt,\r\n.page-choose-template .skn-cna3.document var,\r\n.page-choose-template .skn-cna3.document b,\r\n.page-choose-template .skn-cna3.document u,\r\n.page-choose-template .skn-cna3.document i,\r\n.page-choose-template .skn-cna3.document center,\r\n.page-choose-template .skn-cna3.document dl,\r\n.page-choose-template .skn-cna3.document dt,\r\n.page-choose-template .skn-cna3.document dd,\r\n.page-choose-template .skn-cna3.document ol,\r\n.page-choose-template .skn-cna3.document ul,\r\n.page-choose-template .skn-cna3.document li,\r\n.page-choose-template .skn-cna3.document fieldset,\r\n.page-choose-template .skn-cna3.document form,\r\n.page-choose-template .skn-cna3.document label,\r\n.page-choose-template .skn-cna3.document legend,\r\n.page-choose-template .skn-cna3.document table,\r\n.page-choose-template .skn-cna3.document caption,\r\n.page-choose-template .skn-cna3.document tbody,\r\n.page-choose-template .skn-cna3.document tfoot,\r\n.page-choose-template .skn-cna3.document thead,\r\n.page-choose-template .skn-cna3.document tr,\r\n.page-choose-template .skn-cna3.document th,\r\n.page-choose-template .skn-cna3.document td {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    /* background: transparent; */\r\n}\r\n\r\n.page-choose-template .skn-cna3.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document #SECTION_AWAR,\r\n.page-choose-template .skn-cna3.document #SECTION_CERT {\r\n    display: none\r\n}\r\n\r\n.mbr .page-choose-template .skn-cna3.document #SECTION_EDUC {\r\n    display: none;\r\n}\r\n\r\n.mes .page-choose-template .skn-cna3.document #SECTION_EDUC {\r\n    display: none;\r\n}\r\n\r\n.mit .page-choose-template .skn-cna3.document #SECTION_EDUC,\r\n.mit .page-choose-template .skn-cna3.document #SECTION_AWAR,\r\n.mit .page-choose-template .skn-cna3.document #SECTION_CERT {\r\n    display: none\r\n}\r\n\r\n.page-choose-template .skn-cna3.document ul {\r\n    margin-left: 10px;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document ul li {\r\n    margin-left: 13px;\r\n    list-style: disc;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.name {\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    padding: 0;\r\n    width: 210px;\r\n    color: #2c96dd;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.heading {\r\n    clear: both;\r\n    color: #2c96dd;\r\n    text-transform: uppercase;\r\n    width: 210px;\r\n    border-bottom-color: #2c96dd !important;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document .address:before {\r\n    border-top-width: 2px;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.address,\r\n.page-choose-template .skn-cna3.document div.address2,\r\n.page-choose-template .skn-cna3.document div.adnlLnks {\r\n    position: relative;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.adnlLnks ul,\r\n.page-choose-template .skn-cna3.document div.adnlLnks li {\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.adnlLnks li {\r\n    display: inline;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.adnlLnks li:before {\r\n    content: '|';\r\n    margin: 0 5px;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.adnlLnks li:first-child:before {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document span.jobtitle,\r\n.page-choose-template .skn-cna3.document span.companyname,\r\n.page-choose-template .skn-cna3.document span.degree,\r\n.page-choose-template .skn-cna3.document span.programline,\r\n.page-choose-template .skn-cna3.document span.joblocation {\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document .dateyear {\r\n    color: #c3c3c3;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document table.twocol td {\r\n    width: 50%;\r\n    vertical-align: top;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document table.skills,\r\n.page-choose-template .skn-cna3.document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document table.skills th,\r\n.page-choose-template .skn-cna3.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document table.skills .skillname,\r\n.page-choose-template .skn-cna3.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document table.skills .skillyears,\r\n.page-choose-template .skn-cna3.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document table.skills .pad2,\r\n.page-choose-template .skn-cna3.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document {\r\n    color: #666;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document td.twocol_2 {\r\n    border-left: 1px solid #fff;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document body {\r\n    font-feature-settings: 'liga' 0;\r\n    -moz-font-feature-settings: 'liga' off;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-cna3.document .signPic>.field_sign {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-cna3.document .disclaim .singlecolumn li,\r\n.page-choose-template .skn-cna3.document .disclaim .singlecolumn p,\r\n.page-choose-template .skn-cna3.document .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document {\r\n    line-height: 17px;\r\n    color: #333;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document table {\r\n    line-height: 17px;\r\n}\r\n\r\n/* .page-choose-template .skn-cna3.pagesize{\r\n    width: 560px;\r\n}\r\n.page-choose-template .skn-cna3.vmargins{\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n}\r\n.page-choose-template .skn-cna3.hmargins{\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n} */\r\n.page-choose-template .skn-cna3.document .section {\r\n    margin-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document .SECTION_ALNK {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 50px;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document .section-prfl,\r\n.page-choose-template .skn-cna3.document .section-clprfl {\r\n    margin-top: 0;\r\n    padding-bottom: 0;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.heading {\r\n    margin-bottom: 8px;\r\n    border-bottom: 2px dotted;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.paragraph {\r\n    margin-top: 16px;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document .singlecolumn,\r\n.page-choose-template .skn-cna3.document .maincolumn {\r\n    margin-left: 0;\r\n    width: 560px;\r\n}\r\n\r\n.page-choose-template .skn-cna3.fontsize {\r\n    font-size: 11px;\r\n}\r\n\r\n.page-choose-template .skn-cna3.fontface {\r\n    font-family: 'Century Gothic', sans-serif;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.sectiontitle {\r\n    font-size: 13px;\r\n    line-height: 20px;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.name {\r\n    font-size: 30px;\r\n    line-height: 40px;\r\n    /* border-bottom:2px dotted; */\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.address {\r\n    font-size: 9px;\r\n    line-height: 30px;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document table.skills td {\r\n    padding-top: 8px;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.name,\r\n.page-choose-template .skn-cna3.document div.sectiontitle {\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.heading {\r\n    border-bottom-color: SDCL !important;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.address2 {\r\n    font-size: 11px;\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-cna3.document div.disclaim div.heading {\r\n    margin-bottom: 6px;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document html,\r\n.page-choose-template .skn-hda2#document body,\r\n.page-choose-template .skn-hda2#document div,\r\n.page-choose-template .skn-hda2#document span,\r\n.page-choose-template .skn-hda2#document applet,\r\n.page-choose-template .skn-hda2#document object,\r\n.page-choose-template .skn-hda2#document iframe,\r\n.page-choose-template .skn-hda2#document h1,\r\n.page-choose-template .skn-hda2#document h2,\r\n.page-choose-template .skn-hda2#document h3,\r\n.page-choose-template .skn-hda2#document h4,\r\n.page-choose-template .skn-hda2#document h5,\r\n.page-choose-template .skn-hda2#document h6,\r\n.page-choose-template .skn-hda2#document p,\r\n.page-choose-template .skn-hda2#document blockquote,\r\n.page-choose-template .skn-hda2#document pre,\r\n.page-choose-template .skn-hda2#document a,\r\n.page-choose-template .skn-hda2#document abbr,\r\n.page-choose-template .skn-hda2#document acronym,\r\n.page-choose-template .skn-hda2#document address,\r\n.page-choose-template .skn-hda2#document big,\r\n.page-choose-template .skn-hda2#document cite,\r\n.page-choose-template .skn-hda2#document code,\r\n.page-choose-template .skn-hda2#document del,\r\n.page-choose-template .skn-hda2#document dfn,\r\n.page-choose-template .skn-hda2#document em,\r\n.page-choose-template .skn-hda2#document font,\r\n.page-choose-template .skn-hda2#document img,\r\n.page-choose-template .skn-hda2#document ins,\r\n.page-choose-template .skn-hda2#document kbd,\r\n.page-choose-template .skn-hda2#document q,\r\n.page-choose-template .skn-hda2#document s,\r\n.page-choose-template .skn-hda2#document samp,\r\n.page-choose-template .skn-hda2#document small,\r\n.page-choose-template .skn-hda2#document strike,\r\n.page-choose-template .skn-hda2#document strong,\r\n.page-choose-template .skn-hda2#document sub,\r\n.page-choose-template .skn-hda2#document sup,\r\n.page-choose-template .skn-hda2#document tt,\r\n.page-choose-template .skn-hda2#document var,\r\n.page-choose-template .skn-hda2#document b,\r\n.page-choose-template .skn-hda2#document u,\r\n.page-choose-template .skn-hda2#document i,\r\n.page-choose-template .skn-hda2#document center,\r\n.page-choose-template .skn-hda2#document dl,\r\n.page-choose-template .skn-hda2#document dt,\r\n.page-choose-template .skn-hda2#document dd,\r\n.page-choose-template .skn-hda2#document ol,\r\n.page-choose-template .skn-hda2#document ul,\r\n.page-choose-template .skn-hda2#document li,\r\n.page-choose-template .skn-hda2#document fieldset,\r\n.page-choose-template .skn-hda2#document form,\r\n.page-choose-template .skn-hda2#document label,\r\n.page-choose-template .skn-hda2#document legend,\r\n.page-choose-template .skn-hda2#document table,\r\n.page-choose-template .skn-hda2#document caption,\r\n.page-choose-template .skn-hda2#document tbody,\r\n.page-choose-template .skn-hda2#document tfoot,\r\n.page-choose-template .skn-hda2#document thead,\r\n.page-choose-template .skn-hda2#document tr,\r\n.page-choose-template .skn-hda2#document th,\r\n.page-choose-template .skn-hda2#document td {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    background: transparent;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document body {\r\n    line-height: 1;\r\n    background: #fff;\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document ol,\r\n.page-choose-template .skn-hda2#document ul {\r\n    list-style: none;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document blockquote,\r\n.page-choose-template .skn-hda2#document q {\r\n    quotes: none;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document blockquote:before,\r\n.page-choose-template .skn-hda2#document blockquote:after,\r\n.page-choose-template .skn-hda2#document q:before,\r\n.page-choose-template .skn-hda2#document q:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document :focus {\r\n    outline: 0;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document ins {\r\n    text-decoration: none;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document del {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document a img {\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document ul,\r\n.page-choose-template .skn-hda2#document li {\r\n    list-style-type: disc;\r\n    margin: 0 0 0 7px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document ul li {\r\n    padding-left: 2px;\r\n    padding-bottom: 3px;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document .clear {\r\n    clear: both;\r\n    height: 0;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document br.clear {\r\n    line-height: 0;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document {\r\n    color: #494c4e;\r\n    background-color: #fff !important;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document .section {\r\n    overflow: hidden;\r\n    clear: both;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document div.firstsection,\r\n.page-choose-template .skn-hda2#document div.address,\r\n.page-choose-template .skn-hda2#document div.SECTION_ALNK {\r\n    background: #434d54;\r\n    border: 1px solid #434d54;\r\n    clear: inherit;\r\n    overflow: inherit;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document div.name {\r\n    letter-spacing: 0.5px;\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    font-weight: bold;\r\n    padding: 0;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document div.heading {\r\n    clear: both;\r\n    font-weight: bold;\r\n    float: left;\r\n    word-wrap: break-word;\r\n    color: #434d54;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document div.address,\r\n.page-choose-template .skn-hda2#document .adnlLnks {\r\n    position: relative;\r\n    text-align: center;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin: 0;\r\n    color: #fff;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document .datesWrapper {\r\n    float: right;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document table.twocol td {\r\n    width: 50%;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document table.skills,\r\n.page-choose-template .skn-hda2#document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document table.skills th,\r\n.page-choose-template .skn-hda2#document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document table.skills .skillname,\r\n.page-choose-template .skn-hda2#document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document table.skills .skillyears,\r\n.page-choose-template .skn-hda2#document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document table.skills .pad2,\r\n.page-choose-template .skn-hda2#document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document div.sectiontitle {\r\n    letter-spacing: 0.5px;\r\n    text-transform: uppercase;\r\n    border: 1px solid #434d54;\r\n    margin-right: 25px;\r\n    padding: 5px;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document .jobtitle,\r\n.page-choose-template .skn-hda2#document .degree {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document .sprtr {\r\n    margin: 0 3px;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document .jobline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document .field-listing {\r\n    margin-top: 3px;\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document .sectionCL .paragraph {\r\n    padding-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document div.address {\r\n    padding-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document .sprtr+.sprtr {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document {\r\n    line-height: 13px;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document table {\r\n    line-height: 13px;\r\n}\r\n\r\n.page-choose-template .skn-hda2.pagesize {\r\n    width: 588px;\r\n}\r\n\r\n.page-choose-template .skn-hda2.vmargins {\r\n    padding-top: 0;\r\n    padding-bottom: 25px;\r\n}\r\n\r\n.page-choose-template .skn-hda2.hmargins {\r\n    padding-left: 36px;\r\n    padding-right: 36px;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document .section {\r\n    padding-top: 30px !important;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document div.firstsection,\r\n.page-choose-template .skn-hda2#document div.SECTION_ALNK {\r\n    padding-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document div.firstsection {\r\n    padding-top: 22px !important;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document div.heading {\r\n    width: 170px;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document div.paragraph {\r\n    margin-top: 15px;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document .singlecolumn,\r\n.page-choose-template .skn-hda2#document .maincolumn {\r\n    margin-left: 170px;\r\n    width: 418px;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document div.sectiontitle {\r\n    font-size: 11px;\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document table.skills td {\r\n    padding-top: 7.5px;\r\n}\r\n\r\n.page-choose-template .skn-hda2.fontsize {\r\n    font-size: 10px;\r\n}\r\n\r\n.page-choose-template .skn-hda2.fontface {\r\n    font-family: 'Century Gothic', sans-serif;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document div.name {\r\n    font-size: 35px;\r\n    line-height: 41px;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document div.address,\r\n.page-choose-template .skn-hda2#document .adnlLnks {\r\n    font-size: 10px;\r\n    line-height: 14.5px;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document .jobline {\r\n    padding-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document div.firstsection,\r\n.page-choose-template .skn-hda2#document div.address,\r\n.page-choose-template .skn-hda2#document div.SECTION_ALNK {\r\n    margin-left: -36px !important;\r\n    margin-right: -36px !important;\r\n    padding-left: 36px;\r\n    padding-right: 36px;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-hda2#document div.address2 {\r\n    font-size: 10px;\r\n    line-height: 13px;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document html,\r\n.page-choose-template .skn-hra1.document body,\r\n.page-choose-template .skn-hra1.document div,\r\n.page-choose-template .skn-hra1.document span,\r\n.page-choose-template .skn-hra1.document applet,\r\n.page-choose-template .skn-hra1.document object,\r\n.page-choose-template .skn-hra1.document iframe,\r\n.page-choose-template .skn-hra1.document h1,\r\n.page-choose-template .skn-hra1.document h2,\r\n.page-choose-template .skn-hra1.document h3,\r\n.page-choose-template .skn-hra1.document h4,\r\n.page-choose-template .skn-hra1.document h5,\r\n.page-choose-template .skn-hra1.document h6,\r\n.page-choose-template .skn-hra1.document p,\r\n.page-choose-template .skn-hra1.document blockquote,\r\n.page-choose-template .skn-hra1.document pre,\r\n.page-choose-template .skn-hra1.document a,\r\n.page-choose-template .skn-hra1.document abbr,\r\n.page-choose-template .skn-hra1.document acronym,\r\n.page-choose-template .skn-hra1.document address,\r\n.page-choose-template .skn-hra1.document big,\r\n.page-choose-template .skn-hra1.document cite,\r\n.page-choose-template .skn-hra1.document code,\r\n.page-choose-template .skn-hra1.document del,\r\n.page-choose-template .skn-hra1.document dfn,\r\n.page-choose-template .skn-hra1.document em,\r\n.page-choose-template .skn-hra1.document font,\r\n.page-choose-template .skn-hra1.document img,\r\n.page-choose-template .skn-hra1.document ins,\r\n.page-choose-template .skn-hra1.document kbd,\r\n.page-choose-template .skn-hra1.document q,\r\n.page-choose-template .skn-hra1.document s,\r\n.page-choose-template .skn-hra1.document samp,\r\n.page-choose-template .skn-hra1.document small,\r\n.page-choose-template .skn-hra1.document strike,\r\n.page-choose-template .skn-hra1.document strong,\r\n.page-choose-template .skn-hra1.document sub,\r\n.page-choose-template .skn-hra1.document sup,\r\n.page-choose-template .skn-hra1.document tt,\r\n.page-choose-template .skn-hra1.document var,\r\n.page-choose-template .skn-hra1.document b,\r\n.page-choose-template .skn-hra1.document u,\r\n.page-choose-template .skn-hra1.document i,\r\n.page-choose-template .skn-hra1.document center,\r\n.page-choose-template .skn-hra1.document dl,\r\n.page-choose-template .skn-hra1.document dt,\r\n.page-choose-template .skn-hra1.document dd,\r\n.page-choose-template .skn-hra1.document ol,\r\n.page-choose-template .skn-hra1.document ul,\r\n.page-choose-template .skn-hra1.document li,\r\n.page-choose-template .skn-hra1.document fieldset,\r\n.page-choose-template .skn-hra1.document form,\r\n.page-choose-template .skn-hra1.document label,\r\n.page-choose-template .skn-hra1.document legend,\r\n.page-choose-template .skn-hra1.document table,\r\n.page-choose-template .skn-hra1.document caption,\r\n.page-choose-template .skn-hra1.document tbody,\r\n.page-choose-template .skn-hra1.document tfoot,\r\n.page-choose-template .skn-hra1.document thead,\r\n.page-choose-template .skn-hra1.document tr,\r\n.page-choose-template .skn-hra1.document th,\r\n.page-choose-template .skn-hra1.document td {\r\n    /* margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    background: transparent; */\r\n}\r\n\r\n.page-choose-template .skn-hra1.document #SECTION_CERT {\r\n    display: none\r\n}\r\n\r\n.page-choose-template .skn-hra1.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document ul,\r\n.page-choose-template .skn-hra1.document li {\r\n    list-style-type: disc;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document ul li {\r\n    margin: 0 0 0 13px;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document div.name {\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    font-weight: bold;\r\n    padding: 0;\r\n    text-align: center;\r\n    font-variant: small-caps;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document div.paragraph {\r\n    position: relative;\r\n    clear: both;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document div.heading {\r\n    clear: both;\r\n    font-weight: bold;\r\n    font-variant: small-caps;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document div.sectiontitle {\r\n    background-color: #fff !important;\r\n    padding: 0 10px 1px 0;\r\n    position: absolute;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document div.address {\r\n    position: relative;\r\n    text-align: center;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin-top: 11px;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document div.adnlLnks {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document div.adnlLnks ul {\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document div.adnlLnks li {\r\n    list-style: none;\r\n    display: inline;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document span.paddedline,\r\n.page-choose-template .skn-hra1.document span.dates_wrapper {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document span.dates_wrapper {\r\n    float: left;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document span.jobtitle,\r\n.page-choose-template .skn-hra1.document span.companyname,\r\n.page-choose-template .skn-hra1.document span.degree,\r\n.page-choose-template .skn-hra1.document span.programline {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document table.twocol td {\r\n    width: 50%;\r\n    vertical-align: top;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document table.skills,\r\n.page-choose-template .skn-hra1.document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document table.skills th,\r\n.page-choose-template .skn-hra1.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document table.skills .skillname,\r\n.page-choose-template .skn-hra1.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document table.skills .skillyears,\r\n.page-choose-template .skn-hra1.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document table.skills .pad2,\r\n.page-choose-template .skn-hra1.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document .section {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document td.twocol_2 {\r\n    border-left: 1px solid #fefdfd;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document body {\r\n    font-feature-settings: 'liga' 0;\r\n    -moz-font-feature-settings: 'liga' off;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-hra1.document .signPic>.field_sign {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-hra1.document .disclaim .singlecolumn li,\r\n.page-choose-template .skn-hra1.document .disclaim .singlecolumn p,\r\n.page-choose-template .skn-hra1.document .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document {\r\n    line-height: 18px;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document table {\r\n    line-height: 18px;\r\n}\r\n\r\n/* .page-choose-template .skn-hra1.pagesize {\r\n    width: 576px;\r\n}\r\n\r\n.page-choose-template .skn-hra1.vmargins {\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n\r\n.page-choose-template .skn-hra1.hmargins {\r\n    padding-left: 42px;\r\n    padding-right: 42px;\r\n} */\r\n\r\n.page-choose-template .skn-hra1.document .section {\r\n    margin-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 70px;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document div.SECTION_CNTC {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document div.heading {\r\n    margin-bottom: 5px;\r\n    height: 18px;\r\n}\r\n\r\n/* .page-choose-template .skn-hra1.document  div.paragraph{\r\n    margin-top: 14px;\r\n} */\r\n.page-choose-template .skn-hra1.document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n/* .page-choose-template .skn-hra1.document .singlecolumn,\r\n.page-choose-template .skn-hra1.document .maincolumn {\r\n    margin-left: 105px;\r\n} */\r\n\r\n.page-choose-template .skn-hra1.document span.dates_wrapper {\r\n    width: 105px;\r\n}\r\n\r\n.page-choose-template .skn-hra1.fontsize {\r\n    font-size: 12px;\r\n}\r\n\r\n.page-choose-template .skn-hra1.fontface {\r\n    font-family: 'Times New Roman', sans-serif;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document .bottomborder {\r\n    border-bottom: 1px solid SDCL;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document div.sectiontitle {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    border-bottom: 1px solid #fff;\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document div.name {\r\n    color: SDCL;\r\n    font-size: 24px;\r\n    line-height: 36px;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document div.address {\r\n    font-size: 12px;\r\n    line-height: 18px;\r\n    margin-top: 8px;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document table.skills td {\r\n    padding-top: 7px;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document div.address2 {\r\n    font-size: 12px;\r\n    line-height: 18px;\r\n}\r\n\r\n.page-choose-template .skn-hra1.document div.disclaim div.heading {\r\n    margin-bottom: 6px;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document html,\r\n.page-choose-template .skn-hra2.document body,\r\n.page-choose-template .skn-hra2.document div,\r\n.page-choose-template .skn-hra2.document span,\r\n.page-choose-template .skn-hra2.document applet,\r\n.page-choose-template .skn-hra2.document object,\r\n.page-choose-template .skn-hra2.document iframe,\r\n.page-choose-template .skn-hra2.document h1,\r\n.page-choose-template .skn-hra2.document h2,\r\n.page-choose-template .skn-hra2.document h3,\r\n.page-choose-template .skn-hra2.document h4,\r\n.page-choose-template .skn-hra2.document h5,\r\n.page-choose-template .skn-hra2.document h6,\r\n.page-choose-template .skn-hra2.document p,\r\n.page-choose-template .skn-hra2.document blockquote,\r\n.page-choose-template .skn-hra2.document pre,\r\n.page-choose-template .skn-hra2.document a,\r\n.page-choose-template .skn-hra2.document abbr,\r\n.page-choose-template .skn-hra2.document acronym,\r\n.page-choose-template .skn-hra2.document address,\r\n.page-choose-template .skn-hra2.document big,\r\n.page-choose-template .skn-hra2.document cite,\r\n.page-choose-template .skn-hra2.document code,\r\n.page-choose-template .skn-hra2.document del,\r\n.page-choose-template .skn-hra2.document dfn,\r\n.page-choose-template .skn-hra2.document em,\r\n.page-choose-template .skn-hra2.document font,\r\n.page-choose-template .skn-hra2.document img,\r\n.page-choose-template .skn-hra2.document ins,\r\n.page-choose-template .skn-hra2.document kbd,\r\n.page-choose-template .skn-hra2.document q,\r\n.page-choose-template .skn-hra2.document s,\r\n.page-choose-template .skn-hra2.document samp,\r\n.page-choose-template .skn-hra2.document small,\r\n.page-choose-template .skn-hra2.document strike,\r\n.page-choose-template .skn-hra2.document strong,\r\n.page-choose-template .skn-hra2.document sub,\r\n.page-choose-template .skn-hra2.document sup,\r\n.page-choose-template .skn-hra2.document tt,\r\n.page-choose-template .skn-hra2.document var,\r\n.page-choose-template .skn-hra2.document b,\r\n.page-choose-template .skn-hra2.document u,\r\n.page-choose-template .skn-hra2.document i,\r\n.page-choose-template .skn-hra2.document center,\r\n.page-choose-template .skn-hra2.document dl,\r\n.page-choose-template .skn-hra2.document dt,\r\n.page-choose-template .skn-hra2.document dd,\r\n.page-choose-template .skn-hra2.document ol,\r\n.page-choose-template .skn-hra2.document ul,\r\n.page-choose-template .skn-hra2.document li,\r\n.page-choose-template .skn-hra2.document fieldset,\r\n.page-choose-template .skn-hra2.document form,\r\n.page-choose-template .skn-hra2.document label,\r\n.page-choose-template .skn-hra2.document legend,\r\n.page-choose-template .skn-hra2.document table,\r\n.page-choose-template .skn-hra2.document caption,\r\n.page-choose-template .skn-hra2.document tbody,\r\n.page-choose-template .skn-hra2.document tfoot,\r\n.page-choose-template .skn-hra2.document thead,\r\n.page-choose-template .skn-hra2.document tr,\r\n.page-choose-template .skn-hra2.document th,\r\n.page-choose-template .skn-hra2.document td {\r\n    /*margin: 0;\r\n    padding: 0; \r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    background: transparent; */\r\n}\r\n\r\n.page-choose-template .skn-hra2.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document #SECTION_CERT {\r\n    display: none\r\n}\r\n\r\n.mes .page-choose-template .skn-hra2.document #SECTION_AWAR,\r\n.mes .page-choose-template .skn-hra2.document #SECTION_CERT {\r\n    display: none\r\n}\r\n\r\n.page-choose-template .skn-hra2.document ul,\r\n.page-choose-template .skn-hra2.document li {\r\n    list-style-type: disc;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document ul li {\r\n    margin: 0 0 0 13px;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.name {\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    font-weight: bold;\r\n    padding: 0;\r\n    text-align: center;\r\n    font-variant: small-caps;\r\n    color: #030;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.heading {\r\n    clear: both;\r\n    font-weight: bold;\r\n    font-variant: small-caps;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.address {\r\n    position: relative;\r\n    text-align: center;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin-top: 11px;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.adnlLnks {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.adnlLnks ul {\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.adnlLnks li {\r\n    list-style: none;\r\n    display: inline;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document span.jobtitle,\r\n.page-choose-template .skn-hra2.document span.companyname,\r\n.page-choose-template .skn-hra2.document span.degree,\r\n.page-choose-template .skn-hra2.document span.programline {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document span.degree,\r\n.page-choose-template .skn-hra2.document span.programline,\r\n.page-choose-template .skn-hra2.document span.jobtitle {\r\n    color: #030;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document span.companyname,\r\n.page-choose-template .skn-hra2.document span.jobcity,\r\n.page-choose-template .skn-hra2.document span.jobstate {\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document span.dates_wrapper {\r\n    display: block;\r\n    float: left;\r\n    color: #999;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document table.twocol td {\r\n    width: 50%;\r\n    vertical-align: top;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document table.skills,\r\n.page-choose-template .skn-hra2.document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document table.skills th,\r\n.page-choose-template .skn-hra2.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document table.skills .skillname,\r\n.page-choose-template .skn-hra2.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document table.skills .skillyears,\r\n.page-choose-template .skn-hra2.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document table.skills .pad2,\r\n.page-choose-template .skn-hra2.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document .topborder {\r\n    padding-top: 2px;\r\n    border-color: #030 !important;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.sectiontitle {\r\n    color: #030;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document td.twocol_2 {\r\n    border-left: 1px solid #fefdfd;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document body {\r\n    font-feature-settings: 'liga' 0;\r\n    -moz-font-feature-settings: 'liga' off;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-hra2.document .signPic>.field_sign {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-hra2.document .disclaim .singlecolumn li,\r\n.page-choose-template .skn-hra2.document .disclaim .singlecolumn p,\r\n.page-choose-template .skn-hra2.document .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document {\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document table {\r\n    line-height: 17px;\r\n}\r\n\r\n/* .page-choose-template .skn-hra2.pagesize {\r\n    width: 568px;\r\n}\r\n\r\n.page-choose-template .skn-hra2.vmargins {\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n\r\n.page-choose-template .skn-hra2.hmargins {\r\n    padding-left: 46px;\r\n    padding-right: 46px;\r\n} */\r\n\r\n.page-choose-template .skn-hra2.document .section {\r\n    margin-top: 14px;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 70px;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.SECTION_CNTC {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.heading {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n/* .page-choose-template .skn-hra2.document  div.paragraph{\r\n    margin-top: 14px;\r\n} */\r\n.page-choose-template .skn-hra2.document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n/* .page-choose-template .skn-hra2.document .singlecolumn,\r\n.page-choose-template .skn-hra2.document .maincolumn {\r\n    margin-left: 100px;\r\n} */\r\n\r\n.page-choose-template .skn-hra2.document span.dates_wrapper {\r\n    width: 100px;\r\n    font-size: 10px;\r\n}\r\n\r\n.page-choose-template .skn-hra2.fontsize {\r\n    font-size: 11px;\r\n}\r\n\r\n.page-choose-template .skn-hra2.fontface {\r\n    font-family: Georgia, serif;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document .topborder {\r\n    border-top: 2px dotted;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.sectiontitle {\r\n    font-size: 13px;\r\n    line-height: 19px;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.name {\r\n    font-size: 23px;\r\n    line-height: 35px;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.address {\r\n    font-size: 11px;\r\n    line-height: 17px;\r\n    margin-top: 8px;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document table.skills td {\r\n    padding-top: 7px;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.name,\r\n.page-choose-template .skn-hra2.document div.sectiontitle {\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document .topborder {\r\n    border-color: SDCL !important;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.address2 {\r\n    font-size: 11px;\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-hra2.document div.disclaim div.heading {\r\n    margin-bottom: 6px;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document html,\r\n.page-choose-template .skn-ima1.document body,\r\n.page-choose-template .skn-ima1.document div,\r\n.page-choose-template .skn-ima1.document span,\r\n.page-choose-template .skn-ima1.document applet,\r\n.page-choose-template .skn-ima1.document object,\r\n.page-choose-template .skn-ima1.document iframe,\r\n.page-choose-template .skn-ima1.document h1,\r\n.page-choose-template .skn-ima1.document h2,\r\n.page-choose-template .skn-ima1.document h3,\r\n.page-choose-template .skn-ima1.document h4,\r\n.page-choose-template .skn-ima1.document h5,\r\n.page-choose-template .skn-ima1.document h6,\r\n.page-choose-template .skn-ima1.document p,\r\n.page-choose-template .skn-ima1.document blockquote,\r\n.page-choose-template .skn-ima1.document pre,\r\n.page-choose-template .skn-ima1.document a,\r\n.page-choose-template .skn-ima1.document abbr,\r\n.page-choose-template .skn-ima1.document acronym,\r\n.page-choose-template .skn-ima1.document address,\r\n.page-choose-template .skn-ima1.document big,\r\n.page-choose-template .skn-ima1.document cite,\r\n.page-choose-template .skn-ima1.document code,\r\n.page-choose-template .skn-ima1.document del,\r\n.page-choose-template .skn-ima1.document dfn,\r\n.page-choose-template .skn-ima1.document em,\r\n.page-choose-template .skn-ima1.document font,\r\n.page-choose-template .skn-ima1.document img,\r\n.page-choose-template .skn-ima1.document ins,\r\n.page-choose-template .skn-ima1.document kbd,\r\n.page-choose-template .skn-ima1.document q,\r\n.page-choose-template .skn-ima1.document s,\r\n.page-choose-template .skn-ima1.document samp,\r\n.page-choose-template .skn-ima1.document small,\r\n.page-choose-template .skn-ima1.document strike,\r\n.page-choose-template .skn-ima1.document strong,\r\n.page-choose-template .skn-ima1.document sub,\r\n.page-choose-template .skn-ima1.document sup,\r\n.page-choose-template .skn-ima1.document tt,\r\n.page-choose-template .skn-ima1.document var,\r\n.page-choose-template .skn-ima1.document b,\r\n.page-choose-template .skn-ima1.document u,\r\n.page-choose-template .skn-ima1.document i,\r\n.page-choose-template .skn-ima1.document center,\r\n.page-choose-template .skn-ima1.document dl,\r\n.page-choose-template .skn-ima1.document dt,\r\n.page-choose-template .skn-ima1.document dd,\r\n.page-choose-template .skn-ima1.document ol,\r\n.page-choose-template .skn-ima1.document ul,\r\n.page-choose-template .skn-ima1.document li,\r\n.page-choose-template .skn-ima1.document fieldset,\r\n.page-choose-template .skn-ima1.document form,\r\n.page-choose-template .skn-ima1.document label,\r\n.page-choose-template .skn-ima1.document legend,\r\n.page-choose-template .skn-ima1.document table,\r\n.page-choose-template .skn-ima1.document caption,\r\n.page-choose-template .skn-ima1.document tbody,\r\n.page-choose-template .skn-ima1.document tfoot,\r\n.page-choose-template .skn-ima1.document thead,\r\n.page-choose-template .skn-ima1.document tr,\r\n.page-choose-template .skn-ima1.document th,\r\n.page-choose-template .skn-ima1.document td {\r\n    /* margin: 0; */\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    /* background: transparent; */\r\n}\r\n\r\n.page-choose-template .skn-ima1.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document #SECTION_CERT {\r\n    display: none\r\n}\r\n\r\n.mes .page-choose-template .skn-ima1.document #SECTION_CERT,\r\n.mes .page-choose-template .skn-ima1.document #SECTION_AWAR {\r\n    display: none\r\n}\r\n\r\n.mit .page-choose-template .skn-ima1.document #SECTION_CERT,\r\n.mit .page-choose-template .skn-ima1.document #SECTION_AWAR {\r\n    display: none\r\n}\r\n\r\n.page-choose-template .skn-ima1.document ul,\r\n.page-choose-template .skn-ima1.document li {\r\n    list-style-type: disc;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document ul li {\r\n    margin: 0 0 0 13px;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .lowerborder {\r\n    margin-top: 1px;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.SECTION_CNTC,\r\n.page-choose-template .skn-ima1.document div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.name {\r\n    background-color: #fff;\r\n    font-family: 'Impact', sans-serif;\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    font-weight: normal;\r\n    padding: 2px 0 0 0;\r\n    text-align: center;\r\n    color: #000;\r\n    border: 2px solid #000;\r\n    border-bottom: none;\r\n    -moz-box-shadow: 4px 4px 0 0 #000;\r\n    -webkit-box-shadow: 4px 4px 0 0 #000;\r\n    box-shadow: 4px 4px 0 0 #000;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.resumeTitle {\r\n    border-left: 2px solid #000;\r\n    border-right: 2px solid #000;\r\n    background-color: #fff;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.address {\r\n    line-height: 19;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.address,\r\n.page-choose-template .skn-ima1.document div.resumeTitle {\r\n    margin-top: -2px !important;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.heading {\r\n    clear: both;\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.sectiontitle {\r\n    font-family: 'Impact', sans-serif;\r\n    font-weight: normal;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.address {\r\n    background-color: #fff;\r\n    position: relative;\r\n    text-align: center;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin: 0;\r\n    font-weight: bold;\r\n    color: #000;\r\n    border: 2px solid #000;\r\n    padding: 0 0 2px 0;\r\n    border-top: none;\r\n    -moz-box-shadow: 4px 4px 0 0 #000;\r\n    -webkit-box-shadow: 4px 4px 0 0 #000;\r\n    box-shadow: 4px 4px 0 0 #000;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.address li,\r\n.page-choose-template .skn-ima1.document div.address ul,\r\n.page-choose-template .skn-ima1.document div.adnlLnks li,\r\n.page-choose-template .skn-ima1.document div.adnlLnks ul {\r\n    display: inline;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.adnlLnks {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.address li:before,\r\n.page-choose-template .skn-ima1.document div.adnlLnks li:before {\r\n    content: '• ';\r\n    vertical-align: bottom;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.adnlLnks li:before {\r\n    margin: 0 3px;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.address li.first:before,\r\n.page-choose-template .skn-ima1.document div.adnlLnks li.first:before {\r\n    content: '';\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document span.jobtitle,\r\n.page-choose-template .skn-ima1.document span.companyname,\r\n.page-choose-template .skn-ima1.document span.degree {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document span.companyname_educ {\r\n    font-weight: normal;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .datesWrapper {\r\n    float: right;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document table.twocol td {\r\n    width: 50%;\r\n    vertical-align: top;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document table.skills,\r\n.page-choose-template .skn-ima1.document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document table.skills th,\r\n.page-choose-template .skn-ima1.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document table.skills .skillname,\r\n.page-choose-template .skn-ima1.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document table.skills .skillyears,\r\n.page-choose-template .skn-ima1.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document table.skills .pad2,\r\n.page-choose-template .skn-ima1.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document td.twocol_2 {\r\n    border-left: 1px solid #fefdfd;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document body {\r\n    font-feature-settings: 'liga' 0;\r\n    -moz-font-feature-settings: 'liga' off;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-ima1.document .signPic>.field_sign {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-ima1.document .disclaim .singlecolumn li,\r\n.page-choose-template .skn-ima1.document .disclaim .singlecolumn p,\r\n.page-choose-template .skn-ima1.document .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document {\r\n    line-height: 19px;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document table {\r\n    line-height: 19px;\r\n}\r\n\r\n/* .page-choose-template .skn-ima1.pagesize{\r\n    width: 576px;\r\n}\r\n.page-choose-template .skn-ima1.vmargins{\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n.page-choose-template .skn-ima1.hmargins{\r\n    padding-left: 42px;\r\n    padding-right: 42px;\r\n} */\r\n.page-choose-template .skn-ima1.document .section {\r\n    margin-top: 17px;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 60px;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.heading {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.paragraph {\r\n    margin-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .singlecolumn,\r\n.page-choose-template .skn-ima1.document .maincolumn {\r\n    margin-left: 0;\r\n    width: 576px;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .bottomborder {\r\n    border-bottom: 1px solid;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .lowerborder {\r\n    border-bottom: 2px solid;\r\n    display: LNW3V;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.sectiontitle {\r\n    font-size: 15px;\r\n    line-height: 23px;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document table.skills td {\r\n    padding-top: 5px;\r\n}\r\n\r\n/* .page-choose-template .skn-ima1.fontsize{\r\n    font-size: 11px;\r\n} */\r\n/* .page-choose-template .skn-ima1.fontface{\r\n    font-family: Arial;\r\n} */\r\n.page-choose-template .skn-ima1.document div.name {\r\n    font-size: 27px;\r\n    line-height: 43px;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.address {\r\n    font-size: 11px;\r\n    line-height: 20px;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.address li:before {\r\n    font-size: 15px;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.name,\r\n.page-choose-template .skn-ima1.document div.sectiontitle {\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .address,\r\n.page-choose-template .skn-ima1.document div.name {\r\n    border-color: SDCL;\r\n    box-shadow: 4px 4px 0 0 SDCL;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .bottomborder,\r\n.page-choose-template .skn-ima1.document .lowerborder {\r\n    border-color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.address2 {\r\n    font-size: 11px;\r\n    line-height: 19px;\r\n}\r\n\r\n.page-choose-template .skn-ima1.document div.disclaim div.paragraph {\r\n    margin-top: 8px;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document html,\r\n.page-choose-template .skn-ima2.document body,\r\n.page-choose-template .skn-ima2.document div,\r\n.page-choose-template .skn-ima2.document span,\r\n.page-choose-template .skn-ima2.document applet,\r\n.page-choose-template .skn-ima2.document object,\r\n.page-choose-template .skn-ima2.document iframe,\r\n.page-choose-template .skn-ima2.document h1,\r\n.page-choose-template .skn-ima2.document h2,\r\n.page-choose-template .skn-ima2.document h3,\r\n.page-choose-template .skn-ima2.document h4,\r\n.page-choose-template .skn-ima2.document h5,\r\n.page-choose-template .skn-ima2.document h6,\r\n.page-choose-template .skn-ima2.document p,\r\n.page-choose-template .skn-ima2.document blockquote,\r\n.page-choose-template .skn-ima2.document pre,\r\n.page-choose-template .skn-ima2.document a,\r\n.page-choose-template .skn-ima2.document abbr,\r\n.page-choose-template .skn-ima2.document acronym,\r\n.page-choose-template .skn-ima2.document address,\r\n.page-choose-template .skn-ima2.document big,\r\n.page-choose-template .skn-ima2.document cite,\r\n.page-choose-template .skn-ima2.document code,\r\n.page-choose-template .skn-ima2.document del,\r\n.page-choose-template .skn-ima2.document dfn,\r\n.page-choose-template .skn-ima2.document em,\r\n.page-choose-template .skn-ima2.document font,\r\n.page-choose-template .skn-ima2.document img,\r\n.page-choose-template .skn-ima2.document ins,\r\n.page-choose-template .skn-ima2.document kbd,\r\n.page-choose-template .skn-ima2.document q,\r\n.page-choose-template .skn-ima2.document s,\r\n.page-choose-template .skn-ima2.document samp,\r\n.page-choose-template .skn-ima2.document small,\r\n.page-choose-template .skn-ima2.document strike,\r\n.page-choose-template .skn-ima2.document strong,\r\n.page-choose-template .skn-ima2.document sub,\r\n.page-choose-template .skn-ima2.document sup,\r\n.page-choose-template .skn-ima2.document tt,\r\n.page-choose-template .skn-ima2.document var,\r\n.page-choose-template .skn-ima2.document b,\r\n.page-choose-template .skn-ima2.document u,\r\n.page-choose-template .skn-ima2.document i,\r\n.page-choose-template .skn-ima2.document center,\r\n.page-choose-template .skn-ima2.document dl,\r\n.page-choose-template .skn-ima2.document dt,\r\n.page-choose-template .skn-ima2.document dd,\r\n.page-choose-template .skn-ima2.document ol,\r\n.page-choose-template .skn-ima2.document ul,\r\n.page-choose-template .skn-ima2.document li,\r\n.page-choose-template .skn-ima2.document fieldset,\r\n.page-choose-template .skn-ima2.document form,\r\n.page-choose-template .skn-ima2.document label,\r\n.page-choose-template .skn-ima2.document legend,\r\n.page-choose-template .skn-ima2.document table,\r\n.page-choose-template .skn-ima2.document caption,\r\n.page-choose-template .skn-ima2.document tbody,\r\n.page-choose-template .skn-ima2.document tfoot,\r\n.page-choose-template .skn-ima2.document thead,\r\n.page-choose-template .skn-ima2.document tr,\r\n.page-choose-template .skn-ima2.document th,\r\n.page-choose-template .skn-ima2.document td {\r\n    /* margin: 0; */\r\n    /* padding: 0; */\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    /* background: transparent; */\r\n}\r\n\r\n.mbr .page-choose-template .skn-ima2.document #SECTION_EDUC {\r\n    display: none;\r\n}\r\n\r\n.mes .page-choose-template .skn-ima2.document #SECTION_EDUC {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document ul,\r\n.page-choose-template .skn-ima2.document li {\r\n    list-style-type: disc;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document ul li {\r\n    margin: 0 0 0 13px;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document .lowerborder {\r\n    margin-top: 1px;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.SECTION_CNTC,\r\n.page-choose-template .skn-ima2.document div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.name {\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    font-weight: bold;\r\n    padding: 20px 0 0 0;\r\n    text-align: center;\r\n    font-family: 'impact', sans-serif !important;\r\n    border-top: 20px solid #333;\r\n    color: #333;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.heading {\r\n    clear: both;\r\n    font-weight: normal;\r\n    font-family: 'impact', sans-serif !important;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.address {\r\n    position: relative;\r\n    text-align: center;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin-top: 11px;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document span.jobtitle,\r\n.page-choose-template .skn-ima2.document span.degree,\r\n.page-choose-template .skn-ima2.document span.programline,\r\n.page-choose-template .skn-ima2.document span.companyname {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.adnlLnks {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.adnlLnks ul {\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.adnlLnks li {\r\n    list-style-type: disc;\r\n    display: inline !important;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.bottomborder {\r\n    border-color: #c00 !important;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document .datesWrapper {\r\n    float: right;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document .colorBlock {\r\n    height: 20px;\r\n    width: 15px;\r\n    background-color: #f00;\r\n    float: right;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document table.twocol td {\r\n    width: 50%;\r\n    vertical-align: top;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document table.skills,\r\n.page-choose-template .skn-ima2.document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document table.skills th,\r\n.page-choose-template .skn-ima2.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document table.skills .skillname,\r\n.page-choose-template .skn-ima2.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document table.skills .skillyears,\r\n.page-choose-template .skn-ima2.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document table.skills .pad2,\r\n.page-choose-template .skn-ima2.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document td.twocol_2 {\r\n    border-left: 1px solid #fefdfd;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document body {\r\n    font-feature-settings: 'liga' 0;\r\n    -moz-font-feature-settings: 'liga' off;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-ima2.document .signPic>.field_sign {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-ima2.document .disclaim .singlecolumn li,\r\n.page-choose-template .skn-ima2.document .disclaim .singlecolumn p,\r\n.page-choose-template .skn-ima2.document .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document {\r\n    line-height: 18px;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document table {\r\n    line-height: 18px;\r\n}\r\n\r\n/* .page-choose-template .skn-ima2.pagesize{\r\n    width: 576px;\r\n} */\r\n/* .page-choose-template .skn-ima2.vmargins{\r\n    padding-top: 22px;\r\n    padding-bottom: 22px;\r\n}\r\n.page-choose-template .skn-ima2.hmargins{\r\n    padding-left: 42px;\r\n    padding-right: 42px;\r\n} */\r\n.page-choose-template .skn-ima2.document .section {\r\n    margin-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 40px;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.heading {\r\n    margin-bottom: 7px;\r\n}\r\n\r\n/* .page-choose-template .skn-ima2.document  div.paragraph{\r\n    margin-top: 14px;\r\n} */\r\n.page-choose-template .skn-ima2.document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-ima2 .singlecolumn,\r\n.page-choose-template .skn-ima2 .maincolumn {\r\n    margin-left: 60px;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document .bottomborder {\r\n    border-bottom: 1px solid;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.sectiontitle {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document table.skills td {\r\n    padding-top: 7px;\r\n}\r\n\r\n.page-choose-template .skn-ima2.fontsize {\r\n    font-size: 12px;\r\n}\r\n\r\n.page-choose-template .skn-ima2.fontface {\r\n    font-family: 'Arial', serif;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.name {\r\n    font-size: 26px;\r\n    line-height: 38px;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.address {\r\n    font-size: 11px;\r\n    line-height: 17px;\r\n    margin-top: 8px;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.colorBlockWrapper {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 55px;\r\n    overflow: hidden;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.name,\r\n.page-choose-template .skn-ima2.document div.sectiontitle {\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.bottomborder {\r\n    border-color: SDCL !important;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.address2 {\r\n    font-size: 12px;\r\n    line-height: 18px;\r\n}\r\n\r\n.page-choose-template .skn-ima2.document div.disclaim div.heading {\r\n    margin-bottom: 6px;\r\n}\r\n\r\n/* .page-choose-template .skn-lca1#document html, .page-choose-template .skn-lca1#document body, .page-choose-template .skn-lca1#document div, .page-choose-template .skn-lca1#document span, .page-choose-template .skn-lca1#document applet, .page-choose-template .skn-lca1#document object, .page-choose-template .skn-lca1#document iframe, .page-choose-template .skn-lca1#document h1, .page-choose-template .skn-lca1#document h2, .page-choose-template .skn-lca1#document h3, .page-choose-template .skn-lca1#document h4, .page-choose-template .skn-lca1#document h5, .page-choose-template .skn-lca1#document h6, .page-choose-template .skn-lca1#document p, .page-choose-template .skn-lca1#document blockquote, .page-choose-template .skn-lca1#document pre, .page-choose-template .skn-lca1#document a, .page-choose-template .skn-lca1#document abbr, .page-choose-template .skn-lca1#document acronym, .page-choose-template .skn-lca1#document address, .page-choose-template .skn-lca1#document big, .page-choose-template .skn-lca1#document cite, .page-choose-template .skn-lca1#document code, .page-choose-template .skn-lca1#document del, .page-choose-template .skn-lca1#document dfn, .page-choose-template .skn-lca1#document em, .page-choose-template .skn-lca1#document font, .page-choose-template .skn-lca1#document img, .page-choose-template .skn-lca1#document ins, .page-choose-template .skn-lca1#document kbd, .page-choose-template .skn-lca1#document q, .page-choose-template .skn-lca1#document s, .page-choose-template .skn-lca1#document samp, .page-choose-template .skn-lca1#document small, .page-choose-template .skn-lca1#document strike, .page-choose-template .skn-lca1#document strong, .page-choose-template .skn-lca1#document sub, .page-choose-template .skn-lca1#document sup, .page-choose-template .skn-lca1#document tt, .page-choose-template .skn-lca1#document var, .page-choose-template .skn-lca1#document b, .page-choose-template .skn-lca1#document u, .page-choose-template .skn-lca1#document i, .page-choose-template .skn-lca1#document center, .page-choose-template .skn-lca1#document dl, .page-choose-template .skn-lca1#document dt, .page-choose-template .skn-lca1#document dd, .page-choose-template .skn-lca1#document ol, .page-choose-template .skn-lca1#document ul, .page-choose-template .skn-lca1#document li, .page-choose-template .skn-lca1#document fieldset, .page-choose-template .skn-lca1#document form, .page-choose-template .skn-lca1#document label, .page-choose-template .skn-lca1#document legend, .page-choose-template .skn-lca1#document table, .page-choose-template .skn-lca1#document caption, .page-choose-template .skn-lca1#document tbody, .page-choose-template .skn-lca1#document tfoot, .page-choose-template .skn-lca1#document thead, .page-choose-template .skn-lca1#document tr, .page-choose-template .skn-lca1#document th, .page-choose-template .skn-lca1#document td{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    background: transparent;\r\n}\r\n.mes .page-choose-template .skn-lca1#document #SECTION_CERT{\r\n    display: none;\r\n}\r\n.page-choose-template .skn-lca1#document table{\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n.page-choose-template .skn-lca1#document body{\r\n    line-height: 1;\r\n    background: #fff;\r\n    text-align: left;\r\n}\r\n.page-choose-template .skn-lca1#document ol, .page-choose-template .skn-lca1#document ul{\r\n    list-style: none;\r\n}\r\n.page-choose-template .skn-lca1#document blockquote, .page-choose-template .skn-lca1#document q{\r\n    quotes: none;\r\n}\r\n.page-choose-template .skn-lca1#document blockquote:before, .page-choose-template .skn-lca1#document blockquote:after, .page-choose-template .skn-lca1#document q:before, .page-choose-template .skn-lca1#document q:after{\r\n    content: '';\r\n    content: none;\r\n}\r\n.page-choose-template .skn-lca1#document :focus{\r\n    outline: 0;\r\n}\r\n.page-choose-template .skn-lca1#document ins{\r\n    text-decoration: none;\r\n}\r\n.page-choose-template .skn-lca1#document del{\r\n    text-decoration: line-through;\r\n}\r\n.page-choose-template .skn-lca1#document table{\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n.page-choose-template .skn-lca1#document a img{\r\n    border: none;\r\n}\r\n.page-choose-template .skn-lca1#document  ul, .page-choose-template .skn-lca1#document  li{\r\n    list-style-type: disc;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n}\r\n.page-choose-template .skn-lca1#document  ul li{\r\n    margin: 0 0 0 13px;\r\n}\r\n.page-choose-template .skn-lca1#document .clear{\r\n    clear: both;\r\n    height: 0;\r\n}\r\n.page-choose-template .skn-lca1#document br.clear{\r\n    line-height: 0;\r\n}\r\n.page-choose-template .skn-lca1#document .lowerborder{\r\n    padding-bottom: 10px;\r\n    border-bottom: 5px solid #fcc74a;\r\n}\r\n.page-choose-template .skn-lca1#document div.name{\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    font-weight: bold;\r\n    padding: 0;\r\n    text-align: left;\r\n    color: #000;\r\n}\r\n.page-choose-template .skn-lca1#document div.logo{\r\n    display: none;\r\n}\r\n.page-choose-template .skn-lca1#document div.paragraph{\r\n    position: relative;\r\n}\r\n.page-choose-template .skn-lca1#document div.heading{\r\n    clear: both;\r\n    font-weight: bold;\r\n}\r\n.page-choose-template .skn-lca1#document div.address, .page-choose-template .skn-lca1#document .adnlLnks{\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin: 0;\r\n    color: #787c85;\r\n    text-transform: uppercase;\r\n}\r\n.page-choose-template .skn-lca1#document div.address2{\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n.page-choose-template .skn-lca1#document .datesWrapper{\r\n    float: right;\r\n}\r\n.page-choose-template .skn-lca1#document .table_wrapper{\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n.page-choose-template .skn-lca1#document table.twocol td{\r\n    width: 50%;\r\n}\r\n.page-choose-template .skn-lca1#document table.skills, .page-choose-template .skn-lca1#document table.twocol{\r\n    width: 100%;\r\n}\r\n.page-choose-template .skn-lca1#document table.skills th, .page-choose-template .skn-lca1#document table.skills td{\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n.page-choose-template .skn-lca1#document table.skills th{\r\n    text-decoration: underline;\r\n}\r\n.page-choose-template .skn-lca1#document table.skills .skillname, .page-choose-template .skn-lca1#document table.skills .skillrating{\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n.page-choose-template .skn-lca1#document table.skills .skillrating{\r\n    width: 20%;\r\n}\r\n.page-choose-template .skn-lca1#document table.skills .skillyears, .page-choose-template .skn-lca1#document table.skills .skilllast{\r\n    width: 19%;\r\n}\r\n.page-choose-template .skn-lca1#document table.skills .pad1{\r\n    width: 5%;\r\n}\r\n.page-choose-template .skn-lca1#document table.skills .pad2, .page-choose-template .skn-lca1#document table.skills .pad3{\r\n    width: 1%;\r\n}\r\n.page-choose-template .skn-lca1#document span.paddedline{\r\n    display: block;\r\n}\r\n.page-choose-template .skn-lca1#document .nodisplay{\r\n    display: none;\r\n}\r\n.page-choose-template .skn-lca1#document div.sectiontitle{\r\n    text-transform: uppercase;\r\n}\r\n.page-choose-template .skn-lca1#document {\r\n    color: #000;\r\n    background-color: #fff !important;\r\n}\r\n.page-choose-template .skn-lca1#document .jobtitle, .page-choose-template .skn-lca1#document .degree{\r\n    font-weight: bold;\r\n}\r\n.page-choose-template .skn-lca1#document  .section{\r\n    clear: both;\r\n}\r\n.page-choose-template .skn-lca1#document div.heading{\r\n    float: left;\r\n    word-wrap: break-word;\r\n}\r\n.page-choose-template .skn-lca1#document  .SortableItem .wrapper div.heading{\r\n    float: none;\r\n    margin-bottom: 7px;\r\n}\r\n.page-choose-template .skn-lca1#document .grayTxt{\r\n    color: #787c85;\r\n}\r\n.page-choose-template .skn-lca1#document .jobdates{\r\n    text-transform: uppercase;\r\n}\r\n.page-choose-template .skn-lca1#document .sprtr{\r\n    margin: 0 5px;\r\n}\r\n.page-choose-template .skn-lca1#document  .section.SECTION_ALNK{\r\n    color: #787c85;\r\n}\r\n.page-choose-template .skn-lca1#document  .sectionCL .paragraph{\r\n    margin-top: 0 !important;\r\n}\r\n.page-choose-template .skn-lca1#document {\r\n    line-height: 17px;\r\n}\r\n.page-choose-template .skn-lca1#document  table{\r\n    line-height: 17px;\r\n}\r\n.page-choose-template .skn-lca1.pagesize{\r\n    width: 596px;\r\n}\r\n.page-choose-template .skn-lca1.vmargins{\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n.page-choose-template .skn-lca1.hmargins{\r\n    padding-left: 32px;\r\n    padding-right: 32px;\r\n}\r\n.page-choose-template .skn-lca1#document  .section{\r\n    padding-top: 5px !important;\r\n}\r\n.page-choose-template .skn-lca1#document body #previewResume .preview-template-contact-highlighter{\r\n    min-height: 17px;\r\n}\r\n.page-choose-template .skn-lca1#document  .SortableItem .wrapper{\r\n    margin-top: 15px;\r\n}\r\n.page-choose-template .skn-lca1#document  div.firstsection{\r\n    padding-top: 0 !important;\r\n}\r\n.page-choose-template .skn-lca1#document  div.heading{\r\n    width: 140px;\r\n} */\r\n/* .page-choose-template .skn-lca1#document  div.paragraph{\r\n    margin-top: 10px;\r\n} */\r\n/* .page-choose-template .skn-lca1#document  div.firstparagraph{\r\n    margin-top: 0;\r\n}\r\n.page-choose-template .skn-lca1#document  .singlecolumn, .page-choose-template .skn-lca1#document  .maincolumn{\r\n    margin-left: 140px;\r\n}\r\n.page-choose-template .skn-lca1#document  div.sectiontitle{\r\n    font-size: 13px;\r\n    line-height: 13px;\r\n}\r\n.page-choose-template .skn-lca1#document  table.skills td{\r\n    padding-top: 5px;\r\n}\r\n.page-choose-template .skn-lca1#document  .lowerborder{\r\n    border-color: SDCL;\r\n}\r\n.page-choose-template .skn-lca1.fontsize{\r\n    font-size: 12px;\r\n}\r\n.page-choose-template .skn-lca1.fontface{\r\n    font-family: Century Gothic;\r\n}\r\n.page-choose-template .skn-lca1#document div.name{\r\n    font-size: 37px;\r\n    line-height: 47px;\r\n}\r\n.page-choose-template .skn-lca1#document div.address, .page-choose-template .skn-lca1#document .adnlLnks{\r\n    font-size: 12px;\r\n    line-height: 22px;\r\n}\r\n.page-choose-template .skn-lca1#document  .sectionCL .singlecolumn{\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n.page-choose-template .skn-lca1#document div.address2{\r\n    font-size: 12px;\r\n    line-height: 17px;\r\n} */\r\n.page-choose-template .skn-lca3#document html,\r\n.page-choose-template .skn-lca3#document body,\r\n.page-choose-template .skn-lca3#document div,\r\n.page-choose-template .skn-lca3#document span,\r\n.page-choose-template .skn-lca3#document applet,\r\n.page-choose-template .skn-lca3#document object,\r\n.page-choose-template .skn-lca3#document iframe,\r\n.page-choose-template .skn-lca3#document h1,\r\n.page-choose-template .skn-lca3#document h2,\r\n.page-choose-template .skn-lca3#document h3,\r\n.page-choose-template .skn-lca3#document h4,\r\n.page-choose-template .skn-lca3#document h5,\r\n.page-choose-template .skn-lca3#document h6,\r\n.page-choose-template .skn-lca3#document p,\r\n.page-choose-template .skn-lca3#document blockquote,\r\n.page-choose-template .skn-lca3#document pre,\r\n.page-choose-template .skn-lca3#document a,\r\n.page-choose-template .skn-lca3#document abbr,\r\n.page-choose-template .skn-lca3#document acronym,\r\n.page-choose-template .skn-lca3#document address,\r\n.page-choose-template .skn-lca3#document big,\r\n.page-choose-template .skn-lca3#document cite,\r\n.page-choose-template .skn-lca3#document code,\r\n.page-choose-template .skn-lca3#document del,\r\n.page-choose-template .skn-lca3#document dfn,\r\n.page-choose-template .skn-lca3#document em,\r\n.page-choose-template .skn-lca3#document font,\r\n.page-choose-template .skn-lca3#document img,\r\n.page-choose-template .skn-lca3#document ins,\r\n.page-choose-template .skn-lca3#document kbd,\r\n.page-choose-template .skn-lca3#document q,\r\n.page-choose-template .skn-lca3#document s,\r\n.page-choose-template .skn-lca3#document samp,\r\n.page-choose-template .skn-lca3#document small,\r\n.page-choose-template .skn-lca3#document strike,\r\n.page-choose-template .skn-lca3#document strong,\r\n.page-choose-template .skn-lca3#document sub,\r\n.page-choose-template .skn-lca3#document sup,\r\n.page-choose-template .skn-lca3#document tt,\r\n.page-choose-template .skn-lca3#document var,\r\n.page-choose-template .skn-lca3#document b,\r\n.page-choose-template .skn-lca3#document u,\r\n.page-choose-template .skn-lca3#document i,\r\n.page-choose-template .skn-lca3#document center,\r\n.page-choose-template .skn-lca3#document dl,\r\n.page-choose-template .skn-lca3#document dt,\r\n.page-choose-template .skn-lca3#document dd,\r\n.page-choose-template .skn-lca3#document ol,\r\n.page-choose-template .skn-lca3#document ul,\r\n.page-choose-template .skn-lca3#document li,\r\n.page-choose-template .skn-lca3#document fieldset,\r\n.page-choose-template .skn-lca3#document form,\r\n.page-choose-template .skn-lca3#document label,\r\n.page-choose-template .skn-lca3#document legend,\r\n.page-choose-template .skn-lca3#document table,\r\n.page-choose-template .skn-lca3#document caption,\r\n.page-choose-template .skn-lca3#document tbody,\r\n.page-choose-template .skn-lca3#document tfoot,\r\n.page-choose-template .skn-lca3#document thead,\r\n.page-choose-template .skn-lca3#document tr,\r\n.page-choose-template .skn-lca3#document th,\r\n.page-choose-template .skn-lca3#document td {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    background: transparent;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document body {\r\n    line-height: 1;\r\n    background: #fff;\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document ol,\r\n.page-choose-template .skn-lca3#document ul {\r\n    list-style: none;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document blockquote,\r\n.page-choose-template .skn-lca3#document q {\r\n    quotes: none;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document blockquote:before,\r\n.page-choose-template .skn-lca3#document blockquote:after,\r\n.page-choose-template .skn-lca3#document q:before,\r\n.page-choose-template .skn-lca3#document q:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document :focus {\r\n    outline: 0;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document ins {\r\n    text-decoration: none;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document del {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document a img {\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document ul,\r\n.page-choose-template .skn-lca3#document li {\r\n    list-style-type: disc;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document ul li {\r\n    margin: 0 0 0 13px;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document .clear {\r\n    clear: both;\r\n    height: 0;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document br.clear {\r\n    line-height: 0;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.firstsection {\r\n    margin-top: 0;\r\n    border: none;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.name {\r\n    color: #616261;\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    padding: 0;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.heading {\r\n    clear: both;\r\n    font-weight: normal;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.address,\r\n.page-choose-template .skn-lca3#document .adnlLnks {\r\n    position: relative;\r\n    text-align: center;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.address li,\r\n.page-choose-template .skn-lca3#document div.address ul,\r\n.page-choose-template .skn-lca3#document .adnlLnks ul li {\r\n    display: inline;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.address li:before,\r\n.page-choose-template .skn-lca3#document .adnlLnks li:before {\r\n    color: #44b3e6;\r\n    content: '• ';\r\n    vertical-align: bottom;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.address li:first-child:before,\r\n.page-choose-template .skn-lca3#document .adnlLnks li:first-child:before {\r\n    content: '';\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document table.twocol td {\r\n    width: 50%;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document table.skills,\r\n.page-choose-template .skn-lca3#document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document table.skills th,\r\n.page-choose-template .skn-lca3#document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document table.skills .skillname,\r\n.page-choose-template .skn-lca3#document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document table.skills .skillyears,\r\n.page-choose-template .skn-lca3#document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document table.skills .pad2,\r\n.page-choose-template .skn-lca3#document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document td.twocol_2 {\r\n    border-left: 1px solid #fefdfd;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document {\r\n    color: #616261;\r\n    background-color: #fff !important;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.sectiontitle {\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document .txtReglr {\r\n    font-weight: 400;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document .txtSmBld {\r\n    font-weight: 600;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document span.dates_wrapper {\r\n    display: block;\r\n    float: left;\r\n    color: #999;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document .hiltSec,\r\n.page-choose-template .skn-lca3#document .parlrColmn {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document .hiltSec .heading {\r\n    float: left;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document .section.SECTION_ALNK {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document {\r\n    line-height: 16px;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document table {\r\n    line-height: 16px;\r\n}\r\n\r\n.page-choose-template .skn-lca3.pagesize {\r\n    width: 586px;\r\n}\r\n\r\n.page-choose-template .skn-lca3.vmargins {\r\n    padding-top: 37px;\r\n    padding-bottom: 37px;\r\n}\r\n\r\n.page-choose-template .skn-lca3.hmargins {\r\n    padding-left: 37px;\r\n    padding-right: 37px;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document .section {\r\n    margin-top: 15px;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.sectiontitle {\r\n    font-size: 12px;\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.heading {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.paragraph {\r\n    margin-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document .singlecolumn,\r\n.page-choose-template .skn-lca3#document .maincolumn {\r\n    margin-left: 0;\r\n    width: 586px;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document table.skills td {\r\n    padding-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-lca3.fontsize {\r\n    font-size: 11px;\r\n}\r\n\r\n.page-choose-template .skn-lca3.fontface {\r\n    font-family: 'Century Gothic', sans-serif;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.name {\r\n    font-size: 29px;\r\n    line-height: 49px;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.address,\r\n.page-choose-template .skn-lca3#document .adnlLnks {\r\n    font-size: 11px;\r\n    line-height: 16px;\r\n    margin-top: 7px;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.address li:before,\r\n.page-choose-template .skn-lca3#document .adnlLnks li:before {\r\n    font-size: 22px;\r\n    margin-right: -3px;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document .hiltSec .heading,\r\n.page-choose-template .skn-lca3#document span.dates_wrapper {\r\n    width: 150px;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document .parlrColmn .singlecolumn,\r\n.page-choose-template .skn-lca3#document .hiltSec .singlecolumn {\r\n    margin-left: 150px;\r\n    width: auto;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document .sectionCL {\r\n    border: none;\r\n    margin-top: none;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-lca3#document div.address2 {\r\n    font-size: 11px;\r\n    line-height: 16px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document html,\r\n.page-choose-template .skn-mca2.document body,\r\n.page-choose-template .skn-mca2.document div,\r\n.page-choose-template .skn-mca2.document span,\r\n.page-choose-template .skn-mca2.document applet,\r\n.page-choose-template .skn-mca2.document object,\r\n.page-choose-template .skn-mca2.document iframe,\r\n.page-choose-template .skn-mca2.document h1,\r\n.page-choose-template .skn-mca2.document h2,\r\n.page-choose-template .skn-mca2.document h3,\r\n.page-choose-template .skn-mca2.document h4,\r\n.page-choose-template .skn-mca2.document h5,\r\n.page-choose-template .skn-mca2.document h6,\r\n.page-choose-template .skn-mca2.document p,\r\n.page-choose-template .skn-mca2.document blockquote,\r\n.page-choose-template .skn-mca2.document pre,\r\n.page-choose-template .skn-mca2.document a,\r\n.page-choose-template .skn-mca2.document abbr,\r\n.page-choose-template .skn-mca2.document acronym,\r\n.page-choose-template .skn-mca2.document address,\r\n.page-choose-template .skn-mca2.document big,\r\n.page-choose-template .skn-mca2.document cite,\r\n.page-choose-template .skn-mca2.document code,\r\n.page-choose-template .skn-mca2.document del,\r\n.page-choose-template .skn-mca2.document dfn,\r\n.page-choose-template .skn-mca2.document em,\r\n.page-choose-template .skn-mca2.document font,\r\n.page-choose-template .skn-mca2.document img,\r\n.page-choose-template .skn-mca2.document ins,\r\n.page-choose-template .skn-mca2.document kbd,\r\n.page-choose-template .skn-mca2.document q,\r\n.page-choose-template .skn-mca2.document s,\r\n.page-choose-template .skn-mca2.document samp,\r\n.page-choose-template .skn-mca2.document small,\r\n.page-choose-template .skn-mca2.document strike,\r\n.page-choose-template .skn-mca2.document strong,\r\n.page-choose-template .skn-mca2.document sub,\r\n.page-choose-template .skn-mca2.document sup,\r\n.page-choose-template .skn-mca2.document tt,\r\n.page-choose-template .skn-mca2.document var,\r\n.page-choose-template .skn-mca2.document b,\r\n.page-choose-template .skn-mca2.document u,\r\n.page-choose-template .skn-mca2.document i,\r\n.page-choose-template .skn-mca2.document center,\r\n.page-choose-template .skn-mca2.document dl,\r\n.page-choose-template .skn-mca2.document dt,\r\n.page-choose-template .skn-mca2.document dd,\r\n.page-choose-template .skn-mca2.document ol,\r\n.page-choose-template .skn-mca2.document ul,\r\n.page-choose-template .skn-mca2.document li,\r\n.page-choose-template .skn-mca2.document fieldset,\r\n.page-choose-template .skn-mca2.document form,\r\n.page-choose-template .skn-mca2.document label,\r\n.page-choose-template .skn-mca2.document legend,\r\n.page-choose-template .skn-mca2.document table,\r\n.page-choose-template .skn-mca2.document caption,\r\n.page-choose-template .skn-mca2.document tbody,\r\n.page-choose-template .skn-mca2.document tfoot,\r\n.page-choose-template .skn-mca2.document thead,\r\n.page-choose-template .skn-mca2.document tr,\r\n.page-choose-template .skn-mca2.document th,\r\n.page-choose-template .skn-mca2.document td {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    background: transparent;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.mit .page-choose-template .skn-mca2.document #SECTION_EDUC,\r\n.mit .page-choose-template .skn-mca2.document #SECTION_AWAR,\r\n.mit .page-choose-template .skn-mca2.document #SECTION_CERT {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document ul {\r\n    list-style-image: url(" + c + ");\r\n}\r\n\r\n.page-choose-template .skn-mca2.document ul,\r\n.page-choose-template .skn-mca2.document li {\r\n    margin: 0 0 0 13px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document ul li {\r\n    margin: 0 0 0 16px;\r\n    padding: 0 0 0 3px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.name {\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    font-weight: normal;\r\n    padding: 0;\r\n    text-align: left;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.name span.lName {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.paragraph {\r\n    position: relative;\r\n    clear: both;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.heading {\r\n    clear: both;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.address {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.adnlLnks {\r\n    padding: 10px 0;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.adnlLnks ul,\r\n.page-choose-template .skn-mca2.document div.adnlLnks li {\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.adnlLnks li {\r\n    display: inline;\r\n    margin-right: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document span.jobtitle,\r\n.page-choose-template .skn-mca2.document span.companyname,\r\n.page-choose-template .skn-mca2.document span.degree,\r\n.page-choose-template .skn-mca2.document span.dates_wrapper {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document span.dates_wrapper {\r\n    display: block;\r\n    float: left;\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document span.cdesc {\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document table {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document table.twocol td {\r\n    width: 50%;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document table.skills {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document table.skills th,\r\n.page-choose-template .skn-mca2.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document table.skills .skillname,\r\n.page-choose-template .skn-mca2.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document table.skills .skillyears,\r\n.page-choose-template .skn-mca2.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document table.skills .pad2,\r\n.page-choose-template .skn-mca2.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.resumeTitle,\r\n.page-choose-template .skn-mca2.document div.execRsmTitle {\r\n    font-weight: bold;\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document td.twocol_2 {\r\n    border-left: 1px solid #fefdfd;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .prflPic {\r\n    float: right;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .prflPic img {\r\n    vertical-align: top;\r\n    width: 99px;\r\n    height: 128px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .nmCntc {\r\n    margin-right: 99px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .prflSection,\r\n.page-choose-template .skn-mca2.document .prflWrapper {\r\n    border-bottom: none !important;\r\n    border-top: none !important;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .PARAGRAPH_CLPRFL .myLftIndnt,\r\n.page-choose-template .skn-mca2.document .PARAGRAPH_CLPRFL .nmCntc {\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-mca2.document .signPic>.field_sign {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-mca2.document .disclaim .singlecolumn li,\r\n.page-choose-template .skn-mca2.document .disclaim .singlecolumn p,\r\n.page-choose-template .skn-mca2.document .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document {\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document table {\r\n    line-height: 17px;\r\n}\r\n\r\n/* .page-choose-template .skn-mca2.pagesize {\r\n    width: 536px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.vmargins {\r\n    padding-top: 42px;\r\n    padding-bottom: 42px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.hmargins {\r\n    padding-left: 62px;\r\n    padding-right: 62px;\r\n} */\r\n\r\n.page-choose-template .skn-mca2.document .section {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 50px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.SECTION_CNTC,\r\n.page-choose-template .skn-mca2.document div.SECTION_ALNK {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.heading {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.paragraph {\r\n    margin-top: 16px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .singlecolumn,\r\n.page-choose-template .skn-mca2.document .maincolumn,\r\n.page-choose-template .skn-mca2.document .myLftIndnt {\r\n    margin-left: 100px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document span.dates_wrapper {\r\n    width: 100px;\r\n    font-size: 11px;\r\n    line-height: 18px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.fontsize {\r\n    font-size: 11px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.fontface {\r\n    font-family: 'Century Gothic', sans-serif;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.sectiontitle {\r\n    font-size: 13px;\r\n    line-height: 19px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.name {\r\n    font-size: 21px;\r\n    line-height: 28px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .thinbottomborder {\r\n    border-bottom: 1px solid;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.address {\r\n    font-size: 11px;\r\n    line-height: 18px;\r\n    margin-top: px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document table.skills td {\r\n    padding-top: 8px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.resumeTitle {\r\n    font-size: 13px;\r\n    line-height: 25px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.noPind {\r\n    margin-left: 0;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.execRsmTitle {\r\n    font-size: 12px;\r\n    line-height: 18px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document span.compDescWrap {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.name,\r\n.page-choose-template .skn-mca2.document div.sectiontitle {\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n    font-size: 11px;\r\n}\r\n\r\n.page-choose-template .skn-mca2.document div.address2 {\r\n    font-size: 11px;\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document html,\r\n.page-choose-template .skn-mla6#document body,\r\n.page-choose-template .skn-mla6#document div,\r\n.page-choose-template .skn-mla6#document span,\r\n.page-choose-template .skn-mla6#document applet,\r\n.page-choose-template .skn-mla6#document object,\r\n.page-choose-template .skn-mla6#document iframe,\r\n.page-choose-template .skn-mla6#document h1,\r\n.page-choose-template .skn-mla6#document h2,\r\n.page-choose-template .skn-mla6#document h3,\r\n.page-choose-template .skn-mla6#document h4,\r\n.page-choose-template .skn-mla6#document h5,\r\n.page-choose-template .skn-mla6#document h6,\r\n.page-choose-template .skn-mla6#document p,\r\n.page-choose-template .skn-mla6#document blockquote,\r\n.page-choose-template .skn-mla6#document pre,\r\n.page-choose-template .skn-mla6#document a,\r\n.page-choose-template .skn-mla6#document abbr,\r\n.page-choose-template .skn-mla6#document acronym,\r\n.page-choose-template .skn-mla6#document address,\r\n.page-choose-template .skn-mla6#document big,\r\n.page-choose-template .skn-mla6#document cite,\r\n.page-choose-template .skn-mla6#document code,\r\n.page-choose-template .skn-mla6#document del,\r\n.page-choose-template .skn-mla6#document dfn,\r\n.page-choose-template .skn-mla6#document em,\r\n.page-choose-template .skn-mla6#document font,\r\n.page-choose-template .skn-mla6#document img,\r\n.page-choose-template .skn-mla6#document ins,\r\n.page-choose-template .skn-mla6#document kbd,\r\n.page-choose-template .skn-mla6#document q,\r\n.page-choose-template .skn-mla6#document s,\r\n.page-choose-template .skn-mla6#document samp,\r\n.page-choose-template .skn-mla6#document small,\r\n.page-choose-template .skn-mla6#document strike,\r\n.page-choose-template .skn-mla6#document strong,\r\n.page-choose-template .skn-mla6#document sub,\r\n.page-choose-template .skn-mla6#document sup,\r\n.page-choose-template .skn-mla6#document tt,\r\n.page-choose-template .skn-mla6#document var,\r\n.page-choose-template .skn-mla6#document b,\r\n.page-choose-template .skn-mla6#document u,\r\n.page-choose-template .skn-mla6#document i,\r\n.page-choose-template .skn-mla6#document center,\r\n.page-choose-template .skn-mla6#document dl,\r\n.page-choose-template .skn-mla6#document dt,\r\n.page-choose-template .skn-mla6#document dd,\r\n.page-choose-template .skn-mla6#document ol,\r\n.page-choose-template .skn-mla6#document ul,\r\n.page-choose-template .skn-mla6#document li,\r\n.page-choose-template .skn-mla6#document fieldset,\r\n.page-choose-template .skn-mla6#document form,\r\n.page-choose-template .skn-mla6#document label,\r\n.page-choose-template .skn-mla6#document legend,\r\n.page-choose-template .skn-mla6#document table,\r\n.page-choose-template .skn-mla6#document caption,\r\n.page-choose-template .skn-mla6#document tbody,\r\n.page-choose-template .skn-mla6#document tfoot,\r\n.page-choose-template .skn-mla6#document thead,\r\n.page-choose-template .skn-mla6#document tr,\r\n.page-choose-template .skn-mla6#document th,\r\n.page-choose-template .skn-mla6#document td {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    background: transparent;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document a img {\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document ul,\r\n.page-choose-template .skn-mla6#document li {\r\n    list-style: none;\r\n    margin: 0 0 0 8px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document ul li {\r\n    position: relative;\r\n    margin: 0 0 0 5px;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document ul li:before {\r\n    content: '● ';\r\n    position: absolute;\r\n    left: -13px;\r\n    top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document .clear {\r\n    clear: both;\r\n    height: 0;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document br.clear {\r\n    line-height: 0;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document table.skills,\r\n.page-choose-template .skn-mla6#document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document table.skills th,\r\n.page-choose-template .skn-mla6#document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document table.skills .skillname,\r\n.page-choose-template .skn-mla6#document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document table.skills .skillyears,\r\n.page-choose-template .skn-mla6#document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document table.skills .pad2,\r\n.page-choose-template .skn-mla6#document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document .paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document {\r\n    color: #4a4a4a;\r\n    line-height: 16px;\r\n    font-variant-ligatures: none;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document .parentContainer {\r\n    display: table;\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document div.heading {\r\n    padding-bottom: 10px;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document .left-box {\r\n    padding: 0 15px 0 10px;\r\n    display: table-cell;\r\n    overflow: hidden;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document .right-box {\r\n    background-color: #f5f5f5;\r\n    padding: 0 15px;\r\n    display: table-cell;\r\n    vertical-align: top;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document div.firstsection {\r\n    border: none;\r\n    background-color: #3c5769;\r\n    color: #fff;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document .left-box .section,\r\n.page-choose-template .skn-mla6#document .right-box .section {\r\n    border-top: 1px solid #c4c4c4;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document .left-box div.section:first-child,\r\n.page-choose-template .skn-mla6#document .right-box div.section:first-child {\r\n    border: none !important;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document .monogram {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document .monogram svg {\r\n    margin-top: 20px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document .name {\r\n    font-size: 30px;\r\n    line-height: 28px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    padding-bottom: 5px;\r\n    letter-spacing: 1.5px;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document .name,\r\n.page-choose-template .skn-mla6#document div.sectiontitle {\r\n    font-family: 'Georgia', serif;\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document div.sectiontitle {\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document .txtBold {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document .txtItl {\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document .jobline ul {\r\n    margin-top: 3px;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document {\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document table {\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-mla6.pagesize {\r\n    width: 624px;\r\n}\r\n\r\n.page-choose-template .skn-mla6.vmargins {\r\n    padding-top: 18px;\r\n    padding-bottom: 18px;\r\n}\r\n\r\n.page-choose-template .skn-mla6.hmargins {\r\n    padding-left: 18px;\r\n    padding-right: 18px;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document .section {\r\n    padding-top: 25px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document div.firstsection {\r\n    padding-top: 0 !important;\r\n    margin-bottom: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document div.sectiontitle {\r\n    font-size: 13px;\r\n    line-height: 18px;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document div.paragraph {\r\n    margin-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document .singlecolumn,\r\n.page-choose-template .skn-mla6#document .maincolumn {\r\n    margin-left: 0;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document table.skills td {\r\n    padding-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-mla6.fontsize {\r\n    font-size: 12px;\r\n}\r\n\r\n.page-choose-template .skn-mla6.fontface {\r\n    font-family: 'Palatino Linotype', sans-serif;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document div.name {\r\n    font-size: 28px;\r\n    line-height: 48px;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document div.address {\r\n    font-size: 12px;\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document div.address2 {\r\n    font-size: 12px;\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-mla6#document .left-box {\r\n    width: 331px;\r\n}\r\n\r\n/* \r\n.page-choose-template .skn-mla7.document html, .page-choose-template .skn-mla7.document body, .page-choose-template .skn-mla7.document div, .page-choose-template .skn-mla7.document span, .page-choose-template .skn-mla7.document applet, .page-choose-template .skn-mla7.document object, .page-choose-template .skn-mla7.document iframe, .page-choose-template .skn-mla7.document h1, .page-choose-template .skn-mla7.document h2, .page-choose-template .skn-mla7.document h3, .page-choose-template .skn-mla7.document h4, .page-choose-template .skn-mla7.document h5, .page-choose-template .skn-mla7.document h6, .page-choose-template .skn-mla7.document p, .page-choose-template .skn-mla7.document blockquote, .page-choose-template .skn-mla7.document pre, .page-choose-template .skn-mla7.document a, .page-choose-template .skn-mla7.document abbr, .page-choose-template .skn-mla7.document acronym, .page-choose-template .skn-mla7.document address, .page-choose-template .skn-mla7.document big, .page-choose-template .skn-mla7.document cite, .page-choose-template .skn-mla7.document code, .page-choose-template .skn-mla7.document del, .page-choose-template .skn-mla7.document dfn, .page-choose-template .skn-mla7.document em, .page-choose-template .skn-mla7.document font, .page-choose-template .skn-mla7.document img, .page-choose-template .skn-mla7.document ins, .page-choose-template .skn-mla7.document kbd, .page-choose-template .skn-mla7.document q, .page-choose-template .skn-mla7.document s, .page-choose-template .skn-mla7.document samp, .page-choose-template .skn-mla7.document small, .page-choose-template .skn-mla7.document strike, .page-choose-template .skn-mla7.document strong, .page-choose-template .skn-mla7.document sub, .page-choose-template .skn-mla7.document sup, .page-choose-template .skn-mla7.document tt, .page-choose-template .skn-mla7.document var, .page-choose-template .skn-mla7.document b, .page-choose-template .skn-mla7.document u, .page-choose-template .skn-mla7.document i, .page-choose-template .skn-mla7.document center, .page-choose-template .skn-mla7.document dl, .page-choose-template .skn-mla7.document dt, .page-choose-template .skn-mla7.document dd, .page-choose-template .skn-mla7.document ol, .page-choose-template .skn-mla7.document ul, .page-choose-template .skn-mla7.document li, .page-choose-template .skn-mla7.document fieldset, .page-choose-template .skn-mla7.document form, .page-choose-template .skn-mla7.document label, .page-choose-template .skn-mla7.document legend, .page-choose-template .skn-mla7.document table, .page-choose-template .skn-mla7.document caption, .page-choose-template .skn-mla7.document tbody, .page-choose-template .skn-mla7.document tfoot, .page-choose-template .skn-mla7.document thead, .page-choose-template .skn-mla7.document tr, .page-choose-template .skn-mla7.document th, .page-choose-template .skn-mla7.document td{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n}\r\n.page-choose-template .skn-mla7.document table{\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n.page-choose-template .skn-mla7.document a img{\r\n    border: none;\r\n}\r\n.page-choose-template .skn-mla7.document  ul, .page-choose-template .skn-mla7.document  li{\r\n    list-style: none;\r\n    margin: 0 0 0 8px;\r\n    padding: 0;\r\n}\r\n.page-choose-template .skn-mla7.document  ul li{\r\n    position: relative;\r\n    margin: 0 0 0 5px;\r\n}\r\n.page-choose-template .skn-mla7.document  ul li:before{\r\n    content: '● ';\r\n    position: absolute;\r\n    left: -13px;\r\n    top: 0;\r\n}\r\n.page-choose-template .skn-mla7.document .clear{\r\n    clear: both;\r\n    height: 0;\r\n}\r\n.page-choose-template .skn-mla7.document br.clear{\r\n    line-height: 0;\r\n}\r\n.page-choose-template .skn-mla7.document table{\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n.page-choose-template .skn-mla7.document table.skills, .page-choose-template .skn-mla7.document .table_wrapper{\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n.page-choose-template .skn-mla7.document table.skills th, .page-choose-template .skn-mla7.document table.skills td{\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n.page-choose-template .skn-mla7.document table.skills th{\r\n    text-decoration: underline;\r\n}\r\n.page-choose-template .skn-mla7.document table.skills .skillname, .page-choose-template .skn-mla7.document table.skills .skillrating{\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n.page-choose-template .skn-mla7.document table.skills .skillrating{\r\n    width: 20%;\r\n}\r\n.page-choose-template .skn-mla7.document table.skills .skillyears, .page-choose-template .skn-mla7.document table.skills .skilllast{\r\n    width: 19%;\r\n}\r\n.page-choose-template .skn-mla7.document table.skills .pad1{\r\n    width: 5%;\r\n}\r\n.page-choose-template .skn-mla7.document table.skills .pad2, .page-choose-template .skn-mla7.document table.skills .pad3{\r\n    width: 1%;\r\n}\r\n.page-choose-template .skn-mla7.document .paddedline{\r\n    display: block;\r\n}\r\n.page-choose-template .skn-mla7.document{\r\n    color: #4a4a4a;\r\n    line-height: 16px;\r\n    font-variant-ligatures: none;\r\n}\r\n.page-choose-template .skn-mla7.document  .parentContainer{\r\n    display: table;\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    margin-top: 20px;\r\n}\r\n.page-choose-template .skn-mla7.document .name{\r\n    border: 1px solid #505050;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    padding: 0 25px;\r\n    font-size: 30px;\r\n    line-height: 28px;\r\n    text-align: center;\r\n    letter-spacing: 0.8px;\r\n}\r\n.page-choose-template .skn-mla7.document div.address{\r\n    text-align: center;\r\n}\r\n.page-choose-template .skn-mla7.document div.heading{\r\n    margin-bottom: 10px;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n    font-style: italic;\r\n}\r\n.page-choose-template .skn-mla7.document  div.sectiontitle{\r\n    color: #3ee2db;\r\n}\r\n.page-choose-template .skn-mla7.document .left-box{\r\n    padding-right: 20px;\r\n    display: table-cell;\r\n    overflow: hidden;\r\n}\r\n.page-choose-template .skn-mla7.document .right-box{\r\n    padding-left: 20px;\r\n    display: table-cell;\r\n    vertical-align: top;\r\n}\r\n.page-choose-template .skn-mla7.document  div.firstsection{\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n.page-choose-template .skn-mla7.document  div.firstsection:after, .page-choose-template .skn-mla7.document  div.firstsection:before{\r\n    background: #3ee2db;\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    -khtml-opacity: 0.32;\r\n    -moz-opacity: 0.32;\r\n    -ms-filter: 'alpha(opacity=32)';\r\n    filter: alpha(opacity=32);\r\n    filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0.32);\r\n    opacity: 0.32;\r\n}\r\n.page-choose-template .skn-mla7.document  .jobline ul{\r\n    margin-top: 6px;\r\n}\r\n.page-choose-template .skn-mla7.document .degreeGap{\r\n    margin-top: 5px;\r\n}\r\n.page-choose-template .skn-mla7.document  div.alinkSection{\r\n    padding-top: 10px;\r\n}\r\n.page-choose-template .skn-mla7.document .txtBold{\r\n    font-weight: bold;\r\n}\r\n.page-choose-template .skn-mla7.document .txtItl{\r\n    font-style: italic;\r\n}\r\n.page-choose-template .skn-mla7.document .sprtr{\r\n    margin: 0 3px;\r\n}\r\n.page-choose-template .skn-mla7.document .txtCenter{\r\n    text-align: center;\r\n}\r\n.page-choose-template .skn-mla7.document .sprtr+.sprtr{\r\n    display: none;\r\n}\r\n.page-choose-template .skn-mla7.document {\r\n    line-height: 17px;\r\n}\r\n.page-choose-template .skn-mla7.document  table{\r\n    line-height: 17px;\r\n}\r\n.page-choose-template .skn-mla7.vmargins{\r\n    padding-bottom: 45px;\r\n}\r\n.page-choose-template .skn-mla7.hmargins{\r\n    padding-left: 45px;\r\n    padding-right: 45px;\r\n}\r\n.page-choose-template .skn-mla7.document  .section{\r\n    padding-top: 25px;\r\n}\r\n.page-choose-template .skn-mla7.document  div.SECTION_CNTC{\r\n    padding-top: 0 !important;\r\n}\r\n.page-choose-template .skn-mla7.document  div.sectiontitle{\r\n    color: SDCL;\r\n    font-size: 13px;\r\n    line-height: 20px;\r\n}\r\n.page-choose-template .skn-mla7.document  div.paragraph{\r\n    margin-top: 15px;\r\n}\r\n.page-choose-template .skn-mla7.document  div.firstparagraph{\r\n    margin-top: 0;\r\n}\r\n.page-choose-template .skn-mla7.document  .singlecolumn, .page-choose-template .skn-mla7.document  .maincolumn{\r\n    margin-left: 0;\r\n}\r\n.page-choose-template .skn-mla7.document  table.skills td{\r\n    padding-top: 7.5px;\r\n}\r\n.page-choose-template .skn-mla7.fontsize{\r\n    font-size: 12px;\r\n}\r\n.page-choose-template .skn-mla7.fontface{\r\n    font-family: Trebuchet MS;\r\n}\r\n.page-choose-template .skn-mla7.document div.name{\r\n    font-size: 34px;\r\n    line-height: 59px;\r\n}\r\n.page-choose-template .skn-mla7.document div.address{\r\n    font-size: 11px;\r\n    line-height: 17px;\r\n    padding-top: 21px;\r\n}\r\n.page-choose-template .skn-mla7.document div.address2{\r\n    font-size: 12px;\r\n    line-height: 17px;\r\n    padding-top: 21px;\r\n}\r\n.page-choose-template .skn-mla7.document .left-box{\r\n    width: 331px;\r\n}\r\n.page-choose-template .skn-mla7.document  div.firstsection{\r\n    margin-left: -45px !important;\r\n    margin-right: -45px !important;\r\n    padding-left: 45px;\r\n    padding-right: 45px;\r\n    padding-top: 45px;\r\n}\r\n.page-choose-template .skn-mla7.document  div.firstsection:after{\r\n    top: 45px;\r\n    height: 30.5px;\r\n}\r\n.page-choose-template .skn-mla7.document  div.firstsection:before{\r\n    background: #3ee2db;\r\n    height: 45px;\r\n}\r\n.page-choose-template .skn-mla7.document  div.firstsection:after, .page-choose-template .skn-mla7.document  div.firstsection:before{\r\n    background: SDCL;\r\n}\r\n.page-choose-template .skn-mla7.document  .PARAGRAPH_PRFL{\r\n    margin-left: -45px !important;\r\n    margin-right: -45px !important;\r\n    padding-left: 45px;\r\n    padding-right: 45px;\r\n} */\r\n.page-choose-template .skn-mlt6 html,\r\n.page-choose-template .skn-mlt6 body,\r\n.page-choose-template .skn-mlt6 div,\r\n.page-choose-template .skn-mlt6 span,\r\n.page-choose-template .skn-mlt6 applet,\r\n.page-choose-template .skn-mlt6 object,\r\n.page-choose-template .skn-mlt6 iframe,\r\n.page-choose-template .skn-mlt6 h1,\r\n.page-choose-template .skn-mlt6 h2,\r\n.page-choose-template .skn-mlt6 h3,\r\n.page-choose-template .skn-mlt6 h4,\r\n.page-choose-template .skn-mlt6 h5,\r\n.page-choose-template .skn-mlt6 h6,\r\n.page-choose-template .skn-mlt6 p,\r\n.page-choose-template .skn-mlt6 blockquote,\r\n.page-choose-template .skn-mlt6 pre,\r\n.page-choose-template .skn-mlt6 a,\r\n.page-choose-template .skn-mlt6 abbr,\r\n.page-choose-template .skn-mlt6 acronym,\r\n.page-choose-template .skn-mlt6 address,\r\n.page-choose-template .skn-mlt6 big,\r\n.page-choose-template .skn-mlt6 cite,\r\n.page-choose-template .skn-mlt6 code,\r\n.page-choose-template .skn-mlt6 del,\r\n.page-choose-template .skn-mlt6 dfn,\r\n.page-choose-template .skn-mlt6 em,\r\n.page-choose-template .skn-mlt6 font,\r\n.page-choose-template .skn-mlt6 img,\r\n.page-choose-template .skn-mlt6 ins,\r\n.page-choose-template .skn-mlt6 kbd,\r\n.page-choose-template .skn-mlt6 q,\r\n.page-choose-template .skn-mlt6 s,\r\n.page-choose-template .skn-mlt6 samp,\r\n.page-choose-template .skn-mlt6 small,\r\n.page-choose-template .skn-mlt6 strike,\r\n.page-choose-template .skn-mlt6 strong,\r\n.page-choose-template .skn-mlt6 sub,\r\n.page-choose-template .skn-mlt6 sup,\r\n.page-choose-template .skn-mlt6 tt,\r\n.page-choose-template .skn-mlt6 var,\r\n.page-choose-template .skn-mlt6 b,\r\n.page-choose-template .skn-mlt6 u,\r\n.page-choose-template .skn-mlt6 i,\r\n.page-choose-template .skn-mlt6 center,\r\n.page-choose-template .skn-mlt6 dl,\r\n.page-choose-template .skn-mlt6 dt,\r\n.page-choose-template .skn-mlt6 dd,\r\n.page-choose-template .skn-mlt6 ol,\r\n.page-choose-template .skn-mlt6 ul,\r\n.page-choose-template .skn-mlt6 li,\r\n.page-choose-template .skn-mlt6 fieldset,\r\n.page-choose-template .skn-mlt6 form,\r\n.page-choose-template .skn-mlt6 label,\r\n.page-choose-template .skn-mlt6 legend,\r\n.page-choose-template .skn-mlt6 table,\r\n.page-choose-template .skn-mlt6 caption,\r\n.page-choose-template .skn-mlt6 tbody,\r\n.page-choose-template .skn-mlt6 tfoot,\r\n.page-choose-template .skn-mlt6 thead,\r\n.page-choose-template .skn-mlt6 tr,\r\n.page-choose-template .skn-mlt6 th,\r\n.page-choose-template .skn-mlt6 td {\r\n    /* margin: 0; */\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    font-size: 100%;\r\n    vertical-align: baseline;\r\n    /* background: transparent; */\r\n}\r\n\r\n.mit .page-choose-template .skn-mlt6 #SECTION_AWAR {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 a img {\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 ul,\r\n.page-choose-template .skn-mlt6 li {\r\n    list-style: none;\r\n    margin: 0 0 0 8px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 ul li {\r\n    position: relative;\r\n    margin: 0 0 0 5px;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 ul li:before {\r\n    content: '● ';\r\n    position: absolute;\r\n    left: -13px;\r\n    top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .clear {\r\n    clear: both;\r\n    height: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 br.clear {\r\n    line-height: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 table.skills,\r\n.page-choose-template .skn-mlt6 .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 table.skills th,\r\n.page-choose-template .skn-mlt6 table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 table.skills .skillname,\r\n.page-choose-template .skn-mlt6 table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 table.skills .skillyears,\r\n.page-choose-template .skn-mlt6 table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 table.skills .pad2,\r\n.page-choose-template .skn-mlt6 table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 {\r\n    color: #4a4a4a;\r\n    line-height: 16px;\r\n    font-variant-ligatures: none;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .parentContainer {\r\n    display: table;\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 div.heading {\r\n    padding-bottom: 10px;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .left-box {\r\n    padding: 0 15px 0 10px;\r\n    display: table-cell;\r\n    overflow: hidden;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .right-box {\r\n    background-color: #f5f5f5;\r\n    padding: 0 15px;\r\n    display: table-cell;\r\n    vertical-align: top;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 div.firstsection {\r\n    border: none;\r\n    background-color: #3c5769;\r\n    color: #fff;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .left-box .section,\r\n.page-choose-template .skn-mlt6 .right-box .section {\r\n    border-top: 1px solid #c4c4c4;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .left-box div.section:first-child,\r\n.page-choose-template .skn-mlt6 .right-box div.section:first-child {\r\n    border: none !important;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .monogram {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .monogram svg {\r\n    margin-top: 20px;\r\n    text-transform: uppercase;\r\n    height: 40px;\r\n    width: 40px;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .name {\r\n    font-size: 30px;\r\n    line-height: 28px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    padding-bottom: 5px;\r\n    letter-spacing: 1.5px;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .name,\r\n.page-choose-template .skn-mlt6 div.sectiontitle {\r\n    font-family: 'Georgia', serif;\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 div.sectiontitle {\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .txtBold {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .txtItl {\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .jobline ul {\r\n    margin-top: 3px;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .address,\r\n.page-choose-template .skn-mlt6 .adnlLnks {\r\n    word-break: break-all;\r\n    word-break: break-word;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .address .adrsDetails {\r\n    word-break: normal;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .adnlLnks {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .disclaim .singlecolumn,\r\n.page-choose-template .skn-mlt6 .signPic>.field_sign {\r\n    margin-left: 10px !important;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .disclaim .singlecolumn,\r\n.page-choose-template .skn-mlt6 .disclaim .singlecolumn li,\r\n.page-choose-template .skn-mlt6 .disclaim .singlecolumn p,\r\n.page-choose-template .skn-mlt6 .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 div[id*=\"SECTION_SGTR\"] {\r\n    margin-bottom: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 {\r\n    line-height: 15px;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 table {\r\n    line-height: 15px;\r\n}\r\n\r\n/* .page-choose-template .skn-mlt6.pagesize{\r\n    width: 624px;\r\n} */\r\n.page-choose-template .skn-mlt6.vmargins {\r\n    padding-top: 18px;\r\n    padding-bottom: 18px;\r\n}\r\n\r\n.page-choose-template .skn-mlt6.hmargins {\r\n    padding-left: 18px;\r\n    padding-right: 18px;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .section {\r\n    padding-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    padding-top: 50px;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 div.firstsection {\r\n    padding-top: 0 !important;\r\n    background-color: SDCL;\r\n    margin-bottom: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 div.sectiontitle {\r\n    font-size: 12px;\r\n    line-height: 17px;\r\n}\r\n\r\n/* .page-choose-template .skn-mlt6  div.paragraph{\r\n    margin-top: 20px;\r\n} */\r\n.ie11.page-choose-template #document.skn-mlt6 .monogram svg,\r\n.edge.page-choose-template #document.skn-mlt6 .monogram svg {\r\n    height: 40px;\r\n    width: 40px;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .singlecolumn,\r\n.page-choose-template .skn-mlt6 .maincolumn {\r\n    margin-left: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 table.skills td {\r\n    padding-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlt6.fontsize {\r\n    font-size: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlt6.fontface {\r\n    font-family: 'Palatino Linotype', sans-serif;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 div.name {\r\n    font-size: 26px;\r\n    line-height: 46px;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 div.address {\r\n    font-size: 10px;\r\n    line-height: 15px;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 div.address2 {\r\n    font-size: 10px;\r\n    line-height: 15px;\r\n}\r\n\r\n.page-choose-template .skn-mlt6 .left-box {\r\n    width: 331px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document html,\r\n.page-choose-template .skn-mlt7.document body,\r\n.page-choose-template .skn-mlt7.document div,\r\n.page-choose-template .skn-mlt7.document span,\r\n.page-choose-template .skn-mlt7.document applet,\r\n.page-choose-template .skn-mlt7.document object,\r\n.page-choose-template .skn-mlt7.document iframe,\r\n.page-choose-template .skn-mlt7.document h1,\r\n.page-choose-template .skn-mlt7.document h2,\r\n.page-choose-template .skn-mlt7.document h3,\r\n.page-choose-template .skn-mlt7.document h4,\r\n.page-choose-template .skn-mlt7.document h5,\r\n.page-choose-template .skn-mlt7.document h6,\r\n.page-choose-template .skn-mlt7.document p,\r\n.page-choose-template .skn-mlt7.document blockquote,\r\n.page-choose-template .skn-mlt7.document pre,\r\n.page-choose-template .skn-mlt7.document a,\r\n.page-choose-template .skn-mlt7.document abbr,\r\n.page-choose-template .skn-mlt7.document acronym,\r\n.page-choose-template .skn-mlt7.document address,\r\n.page-choose-template .skn-mlt7.document big,\r\n.page-choose-template .skn-mlt7.document cite,\r\n.page-choose-template .skn-mlt7.document code,\r\n.page-choose-template .skn-mlt7.document del,\r\n.page-choose-template .skn-mlt7.document dfn,\r\n.page-choose-template .skn-mlt7.document em,\r\n.page-choose-template .skn-mlt7.document font,\r\n.page-choose-template .skn-mlt7.document img,\r\n.page-choose-template .skn-mlt7.document ins,\r\n.page-choose-template .skn-mlt7.document kbd,\r\n.page-choose-template .skn-mlt7.document q,\r\n.page-choose-template .skn-mlt7.document s,\r\n.page-choose-template .skn-mlt7.document samp,\r\n.page-choose-template .skn-mlt7.document small,\r\n.page-choose-template .skn-mlt7.document strike,\r\n.page-choose-template .skn-mlt7.document strong,\r\n.page-choose-template .skn-mlt7.document sub,\r\n.page-choose-template .skn-mlt7.document sup,\r\n.page-choose-template .skn-mlt7.document tt,\r\n.page-choose-template .skn-mlt7.document var,\r\n.page-choose-template .skn-mlt7.document b,\r\n.page-choose-template .skn-mlt7.document u,\r\n.page-choose-template .skn-mlt7.document i,\r\n.page-choose-template .skn-mlt7.document center,\r\n.page-choose-template .skn-mlt7.document dl,\r\n.page-choose-template .skn-mlt7.document dt,\r\n.page-choose-template .skn-mlt7.document dd,\r\n.page-choose-template .skn-mlt7.document ol,\r\n.page-choose-template .skn-mlt7.document ul,\r\n.page-choose-template .skn-mlt7.document li,\r\n.page-choose-template .skn-mlt7.document fieldset,\r\n.page-choose-template .skn-mlt7.document form,\r\n.page-choose-template .skn-mlt7.document label,\r\n.page-choose-template .skn-mlt7.document legend,\r\n.page-choose-template .skn-mlt7.document table,\r\n.page-choose-template .skn-mlt7.document caption,\r\n.page-choose-template .skn-mlt7.document tbody,\r\n.page-choose-template .skn-mlt7.document tfoot,\r\n.page-choose-template .skn-mlt7.document thead,\r\n.page-choose-template .skn-mlt7.document tr,\r\n.page-choose-template .skn-mlt7.document th,\r\n.page-choose-template .skn-mlt7.document td {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    font-size: 100%;\r\n    vertical-align: baseline;\r\n    /* background: transparent; */\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document a img {\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document ul,\r\n.page-choose-template .skn-mlt7.document li {\r\n    list-style: none;\r\n    margin: 0 0 0 8px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document ul li {\r\n    position: relative;\r\n    margin: 0 0 0 5px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document ul li:before {\r\n    content: '● ';\r\n    position: absolute;\r\n    left: -13px;\r\n    top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .name-contact .section-overlay {\r\n    display: none\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document ul.siteLinks,\r\n.page-choose-template .skn-mlt7.document ul.siteLinks li {\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document ul.siteLinks li {\r\n    position: relative;\r\n    margin: 0 0 0 0;\r\n    display: inline;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document ul.siteLinks li span {\r\n    padding-left: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document ul.siteLinks li:before {\r\n    left: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document ul.siteLinks li:first-child:before {\r\n    content: '';\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .clear {\r\n    clear: both;\r\n    height: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document br.clear {\r\n    line-height: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document table.skills,\r\n.page-choose-template .skn-mlt7.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document table.skills th,\r\n.page-choose-template .skn-mlt7.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document table.skills .skillname,\r\n.page-choose-template .skn-mlt7.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document table.skills .skillyears,\r\n.page-choose-template .skn-mlt7.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document table.skills .pad2,\r\n.page-choose-template .skn-mlt7.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document {\r\n    color: #4a4a4a;\r\n    line-height: 16px;\r\n    font-variant-ligatures: none;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .parentContainer {\r\n    display: table;\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    margin-top: 20px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .name {\r\n    border: 1px solid #505050;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    padding: 0 25px;\r\n    font-size: 30px;\r\n    line-height: 28px;\r\n    text-align: center;\r\n    letter-spacing: 0.8px;\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document div.address {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document div.heading {\r\n    margin-bottom: 10px;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document div.sectiontitle {\r\n    color: #3ee2db;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .left-box {\r\n    padding-right: 20px;\r\n    display: table-cell;\r\n    overflow: hidden;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .right-box {\r\n    padding-left: 20px;\r\n    display: table-cell;\r\n    vertical-align: top;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document div.firstsection {\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document div.firstsection:before {\r\n    background: #3ee2db;\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    -khtml-opacity: 0.32;\r\n    -moz-opacity: 0.32;\r\n    -ms-filter: 'alpha(opacity=32)';\r\n    filter: alpha(opacity=32);\r\n    filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0.32);\r\n    opacity: 0.32;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .PARAGRAPH_NAME {\r\n    background-image: -webkit-linear-gradient(0deg, white 50%, transparent 50%);\r\n    background-image: -moz-linear-gradient(0deg, white 50%, transparent 50%);\r\n    background-image: -o-linear-gradient(0deg, white 50%, transparent 50%);\r\n    background-image: linear-gradient(0deg, white 50%, transparent 50%);\r\n    height: 50%;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .jobline ul {\r\n    margin-top: 6px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .degreeGap {\r\n    margin-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document div.alinkSection {\r\n    padding-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .txtBold {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .txtItl {\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .sprtr {\r\n    margin: 0 3px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .txtCenter {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .sprtr+.sprtr {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-mlt7.document .signPic>.field_sign {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-mlt7.document .disclaim .singlecolumn li,\r\n.page-choose-template .skn-mlt7.document .disclaim .singlecolumn p,\r\n.page-choose-template .skn-mlt7.document .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n/* .page-choose-template .skn-mlt7.document {\r\n    line-height: 13px;\r\n} */\r\n\r\n.page-choose-template .skn-mlt7.document table {\r\n    line-height: 13px;\r\n}\r\n\r\n/* .page-choose-template .skn-mlt7.pagesize {\r\n    width: 570px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.vmargins {\r\n    padding-bottom: 45px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.hmargins {\r\n    padding-left: 45px;\r\n    padding-right: 45px;\r\n} */\r\n\r\n.page-choose-template .skn-mlt7.document .section {\r\n    padding-top: 20px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 50px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document div.SECTION_CNTC {\r\n    padding-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document div.sectiontitle {\r\n    color: SDCL;\r\n    font-size: 10px;\r\n    line-height: 15px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document div.paragraph {\r\n    margin-top: 15px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document div.firstparagraph {\r\n    margin-top: 0;\r\n    height: inherit;\r\n    box-sizing: content-box;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .singlecolumn,\r\n.page-choose-template .skn-mlt7.document .maincolumn {\r\n    margin-left: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document table.skills td {\r\n    padding-top: 7.5px;\r\n}\r\n\r\n/* .page-choose-template .skn-mlt7.fontsize {\r\n    font-size: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.fontface {\r\n    font-family: 'Trebuchet MS', sans-serif;\r\n} */\r\n\r\n.page-choose-template .skn-mlt7.document div.name {\r\n    font-size: 32px;\r\n    line-height: 49px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document div.address {\r\n    font-size: 9px;\r\n    line-height: 13px;\r\n    padding-top: 15px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document div.address2 {\r\n    font-size: 10px;\r\n    line-height: 13px;\r\n    padding-top: 15px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .left-box {\r\n    width: 331px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document div.firstsection {\r\n    margin-left: -45px !important;\r\n    margin-right: -45px !important;\r\n    padding-left: 45px;\r\n    padding-right: 45px;\r\n    padding-top: 45px;\r\n}\r\n\r\n.page-choose-template .skn-mlt7.document .PARAGRAPH_NAME {\r\n    margin-left: -45px !important;\r\n    margin-right: -45px !important;\r\n    padding-left: 45px;\r\n    padding-right: 45px;\r\n}\r\n\r\n/* .page-choose-template .skn-mlu4.document html,\r\n.page-choose-template .skn-mlu4.document body,\r\n.page-choose-template .skn-mlu4.document div,\r\n.page-choose-template .skn-mlu4.document span,\r\n.page-choose-template .skn-mlu4.document applet,\r\n.page-choose-template .skn-mlu4.document object,\r\n.page-choose-template .skn-mlu4.document iframe,\r\n.page-choose-template .skn-mlu4.document h1,\r\n.page-choose-template .skn-mlu4.document h2,\r\n.page-choose-template .skn-mlu4.document h3,\r\n.page-choose-template .skn-mlu4.document h4,\r\n.page-choose-template .skn-mlu4.document h5,\r\n.page-choose-template .skn-mlu4.document h6,\r\n.page-choose-template .skn-mlu4.document p,\r\n.page-choose-template .skn-mlu4.document blockquote,\r\n.page-choose-template .skn-mlu4.document pre,\r\n.page-choose-template .skn-mlu4.document a,\r\n.page-choose-template .skn-mlu4.document abbr,\r\n.page-choose-template .skn-mlu4.document acronym,\r\n.page-choose-template .skn-mlu4.document address,\r\n.page-choose-template .skn-mlu4.document big,\r\n.page-choose-template .skn-mlu4.document cite,\r\n.page-choose-template .skn-mlu4.document code,\r\n.page-choose-template .skn-mlu4.document del,\r\n.page-choose-template .skn-mlu4.document dfn,\r\n.page-choose-template .skn-mlu4.document em,\r\n.page-choose-template .skn-mlu4.document font,\r\n.page-choose-template .skn-mlu4.document img,\r\n.page-choose-template .skn-mlu4.document ins,\r\n.page-choose-template .skn-mlu4.document kbd,\r\n.page-choose-template .skn-mlu4.document q,\r\n.page-choose-template .skn-mlu4.document s,\r\n.page-choose-template .skn-mlu4.document samp,\r\n.page-choose-template .skn-mlu4.document small,\r\n.page-choose-template .skn-mlu4.document strike,\r\n.page-choose-template .skn-mlu4.document strong,\r\n.page-choose-template .skn-mlu4.document sub,\r\n.page-choose-template .skn-mlu4.document sup,\r\n.page-choose-template .skn-mlu4.document tt,\r\n.page-choose-template .skn-mlu4.document var,\r\n.page-choose-template .skn-mlu4.document b,\r\n.page-choose-template .skn-mlu4.document u,\r\n.page-choose-template .skn-mlu4.document i,\r\n.page-choose-template .skn-mlu4.document center,\r\n.page-choose-template .skn-mlu4.document dl,\r\n.page-choose-template .skn-mlu4.document dt,\r\n.page-choose-template .skn-mlu4.document dd,\r\n.page-choose-template .skn-mlu4.document ol,\r\n.page-choose-template .skn-mlu4.document ul,\r\n.page-choose-template .skn-mlu4.document li,\r\n.page-choose-template .skn-mlu4.document fieldset,\r\n.page-choose-template .skn-mlu4.document form,\r\n.page-choose-template .skn-mlu4.document label,\r\n.page-choose-template .skn-mlu4.document legend,\r\n.page-choose-template .skn-mlu4.document table,\r\n.page-choose-template .skn-mlu4.document caption,\r\n.page-choose-template .skn-mlu4.document tbody,\r\n.page-choose-template .skn-mlu4.document tfoot,\r\n.page-choose-template .skn-mlu4.document thead,\r\n.page-choose-template .skn-mlu4.document tr,\r\n.page-choose-template .skn-mlu4.document th,\r\n.page-choose-template .skn-mlu4.document td {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    background: transparent;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document a img {\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document ul,\r\n.page-choose-template .skn-mlu4.document li {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document ul li {\r\n    position: relative;\r\n    margin: 0;\r\n    padding-left: 8px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document ul li:before {\r\n    content: '•';\r\n    font-size: 9px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .clear {\r\n    clear: both;\r\n    height: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document br.clear {\r\n    line-height: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document table.skills,\r\n.page-choose-template .skn-mlu4.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n    word-break: break-all;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document table.skills th,\r\n.page-choose-template .skn-mlu4.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document table.skills .skillname,\r\n.page-choose-template .skn-mlu4.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document table.skills .skillyears,\r\n.page-choose-template .skn-mlu4.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document table.skills .pad2,\r\n.page-choose-template .skn-mlu4.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document {\r\n    color: #242424;\r\n    line-height: 16px;\r\n    font-variant-ligatures: none;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .name {\r\n    color: #4a4a4a;\r\n    font-weight: bold;\r\n    padding: 0 0 10px 0;\r\n    text-align: left;\r\n    position: relative;\r\n    word-break: break-word;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .address .singlecolumn,\r\n.page-choose-template .skn-mlu4.document .additional_lnk .singlecolumn {\r\n    color: #3b3b3b;\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .right-box {\r\n    padding: 25px;\r\n    display: table-cell;\r\n    vertical-align: top;\r\n    letter-spacing: 0.2px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .left-box .section[id^=\"SECTION_PICT\"]+.section {\r\n    padding-top: 20px !important;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .left-box {\r\n    background-color: #2b2b2b;\r\n    display: table-cell;\r\n    overflow: hidden;\r\n    background-size: 100%;\r\n    color: #fff;\r\n    padding: 25px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .left-box .section {\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .left-box .section:not(:empty) {\r\n    border-bottom: 1px solid #9b9b9b;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .left-box .section:first-child,\r\n.page-choose-template .skn-mlu4.document .right-box .section:first-child {\r\n    padding-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .left-box .section[id^=\"SECTION_PICT\"] {\r\n    padding-top: 0;\r\n    padding-bottom: 0 !important;\r\n    margin-bottom: 25px;\r\n    border: none;\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .left-box .section:first-child .paragraph {\r\n    padding: 0;\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .left-box .section:last-of-type {\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .prflPic,\r\n.page-choose-template .skn-mlu4.document .prflPic .field {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    height: 128px;\r\n    width: 99px;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .prflPic img {\r\n    height: 128px;\r\n    width: 99px;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .left-box .heading,\r\n.page-choose-template .skn-mlu4.document .right-box .paragraph,\r\n.page-choose-template .skn-mlu4.document .adnlLnks ul li {\r\n    padding: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .adnlLnks ul li:before {\r\n    content: '';\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .parentContainer {\r\n    display: table;\r\n    width: 100%;\r\n    min-height: inherit;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document div.heading {\r\n    font-weight: bold;\r\n    line-height: 15px;\r\n    margin-bottom: 8px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document div.sectiontitle {\r\n    word-break: break-word;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .right-box .heading {\r\n    letter-spacing: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .jobdates {\r\n    font-size: 8px;\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .firstsection,\r\n.page-choose-template .skn-mlu4.document .SECTION_CNTC,\r\n.page-choose-template .skn-mlu4.document .additional_lnk {\r\n    padding-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .section:empty {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .septr:before {\r\n    content: '|';\r\n    font-size: 9px;\r\n    vertical-align: top;\r\n    padding-left: 2px;\r\n    padding-right: 2px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .jobline ul,\r\n.page-choose-template .skn-mlu4.document .education .field ul {\r\n    margin-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .education .joblocation {\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .txtBold {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .txtItl {\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .sprtr {\r\n    margin: 0 3px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .left-box .section[id^=\"SECTION_PICT\"]:after {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .left-box .section:after {\r\n    content: '';\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document {\r\n    line-height: 15px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document table {\r\n    line-height: 15px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.pagesize {\r\n    width: 660px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .section {\r\n    padding-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .left-box .section {\r\n    padding-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .left-box .section:after {\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document div.firstparagraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document div.paragraph {\r\n    margin-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .singlecolumn,\r\n.page-choose-template .skn-mlu4.document .maincolumn {\r\n    margin-left: 0;\r\n    word-break: break-word;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .parentContainer .left-box .singlecolumn {\r\n    width: 154px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document table.skills td {\r\n    padding-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.fontsize,\r\nul li:before,\r\n.septr:before {\r\n    font-size: 11px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.fontface {\r\n    font-family: 'Trebuchet MS',sans-serif;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .name {\r\n    font-size: 34px;\r\n    line-height: 32px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document div.address2 {\r\n    font-size: 11px;\r\n    line-height: px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document div.heading {\r\n    font-size: 14px;\r\n    line-height: 12px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .left-box {\r\n    width: 174px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .jobdates {\r\n    font-size: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .right-box .firstsection+.additional_lnk+.section,\r\n.page-choose-template .skn-mlu4.document .right-box .firstsection+.section:not(.additional_lnk),\r\n.page-choose-template .skn-mlu4.document .right-box .additional_lnk+.section {\r\n    padding-top: 30px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .left-box {\r\n    background-color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .left-box .SortableItem .section {\r\n    padding-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .right-box .SortableItem .section {\r\n    padding-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlu4.document .left-box .SortableItem:first-child .section,\r\n.page-choose-template .skn-mlu4.document .right-box .SortableItem:first-child .section {\r\n    padding-top: 10px;\r\n} */\r\n\r\n.page-choose-template .skn-mlu5#document html,\r\n.page-choose-template .skn-mlu5#document body,\r\n.page-choose-template .skn-mlu5#document div,\r\n.page-choose-template .skn-mlu5#document span,\r\n.page-choose-template .skn-mlu5#document applet,\r\n.page-choose-template .skn-mlu5#document object,\r\n.page-choose-template .skn-mlu5#document iframe,\r\n.page-choose-template .skn-mlu5#document h1,\r\n.page-choose-template .skn-mlu5#document h2,\r\n.page-choose-template .skn-mlu5#document h3,\r\n.page-choose-template .skn-mlu5#document h4,\r\n.page-choose-template .skn-mlu5#document h5,\r\n.page-choose-template .skn-mlu5#document h6,\r\n.page-choose-template .skn-mlu5#document p,\r\n.page-choose-template .skn-mlu5#document blockquote,\r\n.page-choose-template .skn-mlu5#document pre,\r\n.page-choose-template .skn-mlu5#document a,\r\n.page-choose-template .skn-mlu5#document abbr,\r\n.page-choose-template .skn-mlu5#document acronym,\r\n.page-choose-template .skn-mlu5#document address,\r\n.page-choose-template .skn-mlu5#document big,\r\n.page-choose-template .skn-mlu5#document cite,\r\n.page-choose-template .skn-mlu5#document code,\r\n.page-choose-template .skn-mlu5#document del,\r\n.page-choose-template .skn-mlu5#document dfn,\r\n.page-choose-template .skn-mlu5#document em,\r\n.page-choose-template .skn-mlu5#document font,\r\n.page-choose-template .skn-mlu5#document img,\r\n.page-choose-template .skn-mlu5#document ins,\r\n.page-choose-template .skn-mlu5#document kbd,\r\n.page-choose-template .skn-mlu5#document q,\r\n.page-choose-template .skn-mlu5#document s,\r\n.page-choose-template .skn-mlu5#document samp,\r\n.page-choose-template .skn-mlu5#document small,\r\n.page-choose-template .skn-mlu5#document strike,\r\n.page-choose-template .skn-mlu5#document strong,\r\n.page-choose-template .skn-mlu5#document sub,\r\n.page-choose-template .skn-mlu5#document sup,\r\n.page-choose-template .skn-mlu5#document tt,\r\n.page-choose-template .skn-mlu5#document var,\r\n.page-choose-template .skn-mlu5#document b,\r\n.page-choose-template .skn-mlu5#document u,\r\n.page-choose-template .skn-mlu5#document i,\r\n.page-choose-template .skn-mlu5#document center,\r\n.page-choose-template .skn-mlu5#document dl,\r\n.page-choose-template .skn-mlu5#document dt,\r\n.page-choose-template .skn-mlu5#document dd,\r\n.page-choose-template .skn-mlu5#document ol,\r\n.page-choose-template .skn-mlu5#document ul,\r\n.page-choose-template .skn-mlu5#document li,\r\n.page-choose-template .skn-mlu5#document fieldset,\r\n.page-choose-template .skn-mlu5#document form,\r\n.page-choose-template .skn-mlu5#document label,\r\n.page-choose-template .skn-mlu5#document legend,\r\n.page-choose-template .skn-mlu5#document table,\r\n.page-choose-template .skn-mlu5#document caption,\r\n.page-choose-template .skn-mlu5#document tbody,\r\n.page-choose-template .skn-mlu5#document tfoot,\r\n.page-choose-template .skn-mlu5#document thead,\r\n.page-choose-template .skn-mlu5#document tr,\r\n.page-choose-template .skn-mlu5#document th,\r\n.page-choose-template .skn-mlu5#document td {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    background: transparent;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document a img {\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document ul,\r\n.page-choose-template .skn-mlu5#document li {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document ul li {\r\n    position: relative;\r\n    margin: 0;\r\n    padding-left: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document ul li:before {\r\n    content: '•';\r\n    font-size: 9px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .clear {\r\n    clear: both;\r\n    height: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document br.clear {\r\n    line-height: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document table.skills,\r\n.page-choose-template .skn-mlu5#document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n    word-break: break-all;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document table.skills th,\r\n.page-choose-template .skn-mlu5#document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document table.skills .skillname,\r\n.page-choose-template .skn-mlu5#document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document table.skills .skillyears,\r\n.page-choose-template .skn-mlu5#document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document table.skills .pad2,\r\n.page-choose-template .skn-mlu5#document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document {\r\n    color: #242424;\r\n    line-height: 16px;\r\n    font-variant-ligatures: none;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .name {\r\n    font-weight: bold;\r\n    padding: 0 0 10px 0;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    word-break: break-all;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .name>span {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .name,\r\n.page-choose-template .skn-mlu5#document .address,\r\n.page-choose-template .skn-mlu5#document .additional_lnk {\r\n    color: #4a4a4a;\r\n    letter-spacing: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .singlecolumn,\r\n.page-choose-template .skn-mlu5#document .sectiontitle {\r\n    word-break: break-word;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .address .singlecolumn,\r\n.page-choose-template .skn-mlu5#document .additional_lnk .singlecolumn {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .left-box {\r\n    background-color: #576d7b;\r\n    display: table-cell;\r\n    overflow: hidden;\r\n    background-size: 100%;\r\n    color: #fff;\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .left-box .section {\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .right-box {\r\n    padding: 30px;\r\n    display: table-cell;\r\n    vertical-align: top;\r\n    letter-spacing: 0.2px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .left-box .section:first-child {\r\n    margin-bottom: 10px;\r\n    padding-top: 35px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .right-box .section:first-child,\r\n.page-choose-template .skn-mlu5#document .left-box .section:first-child .paragraph {\r\n    padding-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .left-box .section[id^=\"SECTION_PICT\"] {\r\n    padding: 0;\r\n    position: relative;\r\n    height: 168px;\r\n    margin-top: -30px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .left-box .section[id^=\"SECTION_PICT\"]+.section {\r\n    padding-top: 20px !important;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .prflPic,\r\n.page-choose-template .skn-mlu5#document .prflPic .field {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    height: 168px;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .prflPic img {\r\n    max-height: 168px;\r\n    max-width: 224px;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document div.additional_lnk {\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document div.heading {\r\n    font-weight: bold;\r\n    line-height: 15px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .right-box .sectiontitle {\r\n    letter-spacing: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .parentContainer {\r\n    display: table;\r\n    width: 100%;\r\n    min-height: inherit;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .firstsection,\r\n.page-choose-template .skn-mlu5#document .SECTION_CNTC,\r\n.page-choose-template .skn-mlu5#document .additional_lnk {\r\n    padding-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .section:empty {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .septr:before {\r\n    content: '|';\r\n    font-size: 9px;\r\n    vertical-align: top;\r\n    padding-left: 2px;\r\n    padding-right: 2px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .jobline ul,\r\n.page-choose-template .skn-mlu5#document .education .field ul {\r\n    margin-top: 6px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .education .joblocation {\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .txtBold {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .txtItl {\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .dispBlock {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .sprtr {\r\n    margin: 0;\r\n}\r\n\r\n/* @-moz-document url() {\r\n    div: 1px;\r\n} */\r\n.page-choose-template .skn-mlu5#document {\r\n    line-height: 15px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document table {\r\n    line-height: 15px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5.pagesize {\r\n    width: 660px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .section {\r\n    padding-top: 20px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document div.firstparagraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document div.paragraph {\r\n    margin-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .singlecolumn,\r\n.page-choose-template .skn-mlu5#document .maincolumn {\r\n    margin-left: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .left-box .singlecolumn {\r\n    width: 164px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document table.skills td {\r\n    padding-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5.fontsize,\r\nul li:before,\r\n.septr:before {\r\n    font-size: 11px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5.fontface {\r\n    font-family: 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .name {\r\n    font-size: 42px;\r\n    line-height: 47px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document div.address2 {\r\n    font-size: 11px;\r\n    line-height: px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document div.sectiontitle {\r\n    font-size: 13px;\r\n    line-height: 14px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .left-box {\r\n    width: 164px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .jobdates {\r\n    font-size: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document .right-box .firstsection+.additional_lnk+.section,\r\n.page-choose-template .skn-mlu5#document .right-box .firstsection+.section:not(.additional_lnk),\r\n.page-choose-template .skn-mlu5#document .right-box .additional_lnk+.section {\r\n    padding-top: 30px;\r\n}\r\n\r\n.page-choose-template .skn-mlu5#document div.name,\r\n.page-choose-template .skn-mlu5#document .right-box div.sectiontitle {\r\n    color: SDCL;\r\n}\r\n\r\n/* .page-choose-template .skn-mlu6.document html, .page-choose-template .skn-mlu6.document body, .page-choose-template .skn-mlu6.document div, .page-choose-template .skn-mlu6.document span, .page-choose-template .skn-mlu6.document applet, .page-choose-template .skn-mlu6.document object, .page-choose-template .skn-mlu6.document iframe, .page-choose-template .skn-mlu6.document h1, .page-choose-template .skn-mlu6.document h2, .page-choose-template .skn-mlu6.document h3, .page-choose-template .skn-mlu6.document h4, .page-choose-template .skn-mlu6.document h5, .page-choose-template .skn-mlu6.document h6, .page-choose-template .skn-mlu6.document p, .page-choose-template .skn-mlu6.document blockquote, .page-choose-template .skn-mlu6.document pre, .page-choose-template .skn-mlu6.document a, .page-choose-template .skn-mlu6.document abbr, .page-choose-template .skn-mlu6.document acronym, .page-choose-template .skn-mlu6.document address, .page-choose-template .skn-mlu6.document big, .page-choose-template .skn-mlu6.document cite, .page-choose-template .skn-mlu6.document code, .page-choose-template .skn-mlu6.document del, .page-choose-template .skn-mlu6.document dfn, .page-choose-template .skn-mlu6.document em, .page-choose-template .skn-mlu6.document font, .page-choose-template .skn-mlu6.document img, .page-choose-template .skn-mlu6.document ins, .page-choose-template .skn-mlu6.document kbd, .page-choose-template .skn-mlu6.document q, .page-choose-template .skn-mlu6.document s, .page-choose-template .skn-mlu6.document samp, .page-choose-template .skn-mlu6.document small, .page-choose-template .skn-mlu6.document strike, .page-choose-template .skn-mlu6.document strong, .page-choose-template .skn-mlu6.document sub, .page-choose-template .skn-mlu6.document sup, .page-choose-template .skn-mlu6.document tt, .page-choose-template .skn-mlu6.document var, .page-choose-template .skn-mlu6.document b, .page-choose-template .skn-mlu6.document u, .page-choose-template .skn-mlu6.document i, .page-choose-template .skn-mlu6.document center, .page-choose-template .skn-mlu6.document dl, .page-choose-template .skn-mlu6.document dt, .page-choose-template .skn-mlu6.document dd, .page-choose-template .skn-mlu6.document ol, .page-choose-template .skn-mlu6.document ul, .page-choose-template .skn-mlu6.document li, .page-choose-template .skn-mlu6.document fieldset, .page-choose-template .skn-mlu6.document form, .page-choose-template .skn-mlu6.document label, .page-choose-template .skn-mlu6.document legend, .page-choose-template .skn-mlu6.document table, .page-choose-template .skn-mlu6.document caption, .page-choose-template .skn-mlu6.document tbody, .page-choose-template .skn-mlu6.document tfoot, .page-choose-template .skn-mlu6.document thead, .page-choose-template .skn-mlu6.document tr, .page-choose-template .skn-mlu6.document th, .page-choose-template .skn-mlu6.document td{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n}\r\n.page-choose-template .skn-mlu6.document table{\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n.page-choose-template .skn-mlu6.document a img{\r\n    border: none;\r\n}\r\n.page-choose-template .skn-mlu6.document  ul, .page-choose-template .skn-mlu6.document  li{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.page-choose-template .skn-mlu6.document  ul li{\r\n    position: relative;\r\n    margin: 0;\r\n    padding-left: 8px;\r\n}\r\n.page-choose-template .skn-mlu6.document  ul li:before{\r\n    content: '•';\r\n    font-size: 9px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n.page-choose-template .skn-mlu6.document .clear{\r\n    clear: both;\r\n    height: 0;\r\n}\r\n.page-choose-template .skn-mlu6.document br.clear{\r\n    line-height: 0;\r\n}\r\n.page-choose-template .skn-mlu6.document table{\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n.page-choose-template .skn-mlu6.document table.skills, .page-choose-template .skn-mlu6.document .table_wrapper{\r\n    width: 100%;\r\n    margin-top: 0;\r\n    word-break: break-all;\r\n}\r\n.page-choose-template .skn-mlu6.document table.skills th, .page-choose-template .skn-mlu6.document table.skills td{\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n.page-choose-template .skn-mlu6.document table.skills .skillname, .page-choose-template .skn-mlu6.document table.skills .skillrating{\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n.page-choose-template .skn-mlu6.document table.skills .skillrating{\r\n    width: 20%;\r\n}\r\n.page-choose-template .skn-mlu6.document table.skills .skillyears, .page-choose-template .skn-mlu6.document table.skills .skilllast{\r\n    width: 19%;\r\n}\r\n.page-choose-template .skn-mlu6.document table.skills .pad1{\r\n    width: 5%;\r\n}\r\n.page-choose-template .skn-mlu6.document table.skills .pad2, .page-choose-template .skn-mlu6.document table.skills .pad3{\r\n    width: 1%;\r\n}\r\n.page-choose-template .skn-mlu6.document {\r\n    color: #242424;\r\n    line-height: 16px;\r\n    font-variant-ligatures: none;\r\n}\r\n.page-choose-template .skn-mlu6.document  .name{\r\n    color: #4a4a4a;\r\n    font-weight: bold;\r\n    padding: 0 0 10px 0;\r\n    text-align: left;\r\n    position: relative;\r\n    word-break: break-word;\r\n}\r\n.page-choose-template .skn-mlu6.document  .address .singlecolumn, .page-choose-template .skn-mlu6.document  .additional_lnk .singlecolumn{\r\n    color: #3b3b3b;\r\n    margin-left: 0 !important;\r\n}\r\n.page-choose-template .skn-mlu6.document  .left-box{\r\n    padding: 25px;\r\n    display: table-cell;\r\n    vertical-align: top;\r\n    letter-spacing: 0.2px;\r\n}\r\n.page-choose-template .skn-mlu6.document  .right-box .section[id^=\"SECTION_PICT\"]+.section{\r\n    padding-top: 20px !important;\r\n}\r\n.page-choose-template .skn-mlu6.document  .right-box{\r\n    background-color: #4a4a4a;\r\n    display: table-cell;\r\n    overflow: hidden;\r\n    background-size: 100%;\r\n    color: #fff;\r\n    padding: 25px;\r\n}\r\n.page-choose-template .skn-mlu6.document  .right-box .section{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n.page-choose-template .skn-mlu6.document  .right-box .section:not(:empty){\r\n    border-bottom: 1px solid #9b9b9b;\r\n}\r\n.page-choose-template .skn-mlu6.document  .right-box .section:first-child, .page-choose-template .skn-mlu6.document  .left-box .section:first-child{\r\n    padding-top: 0;\r\n}\r\n.page-choose-template .skn-mlu6.document  .right-box .section[id^=\"SECTION_PICT\"]{\r\n    padding-top: 0;\r\n    padding-bottom: 0 !important;\r\n    margin-bottom: 25px;\r\n    border: none;\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n.page-choose-template .skn-mlu6.document  .right-box .section:first-child .paragraph{\r\n    padding: 0;\r\n    display: block;\r\n}\r\n.page-choose-template .skn-mlu6.document  .right-box .section:last-of-type{\r\n    border: none;\r\n}\r\n.page-choose-template .skn-mlu6.document  .prflPic, .page-choose-template .skn-mlu6.document  .prflPic .field{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    height: 128px;\r\n    width: 99px;\r\n    text-align: center;\r\n}\r\n.page-choose-template .skn-mlu6.document  .prflPic img{\r\n    height: 128px;\r\n    width: 99px;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n}\r\n.page-choose-template .skn-mlu6.document  .right-box .heading, .page-choose-template .skn-mlu6.document  .left-box .paragraph, .page-choose-template .skn-mlu6.document  .adnlLnks ul li{\r\n    padding: 0 !important;\r\n}\r\n.page-choose-template .skn-mlu6.document  .adnlLnks ul li:before{\r\n    content: '';\r\n}\r\n.page-choose-template .skn-mlu6.document  .parentContainer{\r\n    display: table;\r\n    width: 100%;\r\n    min-height: inherit;\r\n}\r\n.page-choose-template .skn-mlu6.document  div.heading{\r\n    font-weight: bold;\r\n    line-height: 15px;\r\n    margin-bottom: 10px;\r\n    text-transform: uppercase;\r\n}\r\n.page-choose-template .skn-mlu6.document  div.sectiontitle{\r\n    word-break: break-word;\r\n}\r\n.page-choose-template .skn-mlu6.document  .left-box .heading{\r\n    letter-spacing: 0;\r\n}\r\n.page-choose-template .skn-mlu6.document  .jobdates{\r\n    font-size: 8px;\r\n    font-style: italic;\r\n}\r\n.page-choose-template .skn-mlu6.document  .parentContainer{\r\n    display: table;\r\n    width: 100%;\r\n}\r\n.page-choose-template .skn-mlu6.document  .firstsection, .page-choose-template .skn-mlu6.document  .SECTION_CNTC, .page-choose-template .skn-mlu6.document  .additional_lnk{\r\n    padding-top: 0 !important;\r\n}\r\n.page-choose-template .skn-mlu6.document  .section:empty{\r\n    display: none;\r\n}\r\n.page-choose-template .skn-mlu6.document  .septr:before{\r\n    content: '|';\r\n    font-size: 9px;\r\n    vertical-align: top;\r\n    padding-left: 2px;\r\n    padding-right: 2px;\r\n}\r\n.page-choose-template .skn-mlu6.document  .jobline ul, .page-choose-template .skn-mlu6.document  .education .field ul{\r\n    margin-top: 10px;\r\n}\r\n.page-choose-template .skn-mlu6.document  .education .joblocation{\r\n    font-style: italic;\r\n}\r\n.page-choose-template .skn-mlu6.document .txtBold{\r\n    font-weight: bold;\r\n}\r\n.page-choose-template .skn-mlu6.document .txtItl{\r\n    font-style: italic;\r\n}\r\n.page-choose-template .skn-mlu6.document .paddedline{\r\n    display: block;\r\n}\r\n.page-choose-template .skn-mlu6.document .sprtr{\r\n    margin: 0 3px;\r\n}\r\n.page-choose-template .skn-mlu6.document  .right-box .section[id^=\"SECTION_PICT\"]:after{\r\n    display: none;\r\n}\r\n.page-choose-template .skn-mlu6.document  .right-box .section:after{\r\n    content: '';\r\n    display: block;\r\n}\r\n@-moz-document url() {\r\n    div: 1px;\r\n}\r\n.page-choose-template .skn-mlu6.document {\r\n    line-height: 15px;\r\n}\r\n.page-choose-template .skn-mlu6.document  table{\r\n    line-height: 15px;\r\n}\r\n.page-choose-template .skn-mlu6.pagesize{\r\n    width: 612px;\r\n}\r\n.page-choose-template .skn-mlu6.document  .section{\r\n    padding-top: 20px;\r\n}\r\n.page-choose-template .skn-mlu6.document  .right-box .section{\r\n    padding-top: 10px;\r\n}\r\n.page-choose-template .skn-mlu6.document  .right-box .section:after{\r\n    padding-bottom: 10px;\r\n}\r\n.page-choose-template .skn-mlu6.document  div.firstparagraph{\r\n    margin-top: 0 !important;\r\n}\r\n.page-choose-template .skn-mlu6.document  div.paragraph{\r\n    margin-top: 10px;\r\n}\r\n.page-choose-template .skn-mlu6.document  .singlecolumn, .page-choose-template .skn-mlu6.document  .maincolumn{\r\n    margin-left: 0;\r\n    word-break: break-word;\r\n}\r\n.page-choose-template .skn-mlu6.document  .parentContainer .right-box .singlecolumn{\r\n    width: 154px;\r\n}\r\n.page-choose-template .skn-mlu6.document  table.skills td{\r\n    padding-top: 5px;\r\n}\r\n.page-choose-template .skn-mlu6.fontsize, ul li:before, .septr:before{\r\n    font-size: 11px;\r\n}\r\n.page-choose-template .skn-mlu6.fontface{\r\n    font-family: Arial;\r\n}\r\n.page-choose-template .skn-mlu6.document  .name{\r\n    font-size: 34px;\r\n    line-height: 32px;\r\n}\r\n.page-choose-template .skn-mlu6.document div.address2{\r\n    font-size: 11px;\r\n    line-height: px;\r\n}\r\n.page-choose-template .skn-mlu6.document  div.heading{\r\n    font-size: 13px;\r\n    line-height: 17px;\r\n}\r\n.page-choose-template .skn-mlu6.document  .right-box{\r\n    width: 174px;\r\n}\r\n.page-choose-template .skn-mlu6.document  .jobdates{\r\n    font-size: 10px;\r\n}\r\n.page-choose-template .skn-mlu6.document  .left-box .firstsection+.additional_lnk+.section, .page-choose-template .skn-mlu6.document  .left-box .firstsection+.section:not(.additional_lnk), .page-choose-template .skn-mlu6.document  .left-box .additional_lnk+.section{\r\n    padding-top: 30px;\r\n}\r\n.page-choose-template .skn-mlu6.document  .right-box{\r\n    background-color: SDCL;\r\n} */\r\n/* .page-choose-template .skn-mlu7.document html, .page-choose-template .skn-mlu7.document body, .page-choose-template .skn-mlu7.document div, .page-choose-template .skn-mlu7.document span, .page-choose-template .skn-mlu7.document applet, .page-choose-template .skn-mlu7.document object, .page-choose-template .skn-mlu7.document iframe, .page-choose-template .skn-mlu7.document h1, .page-choose-template .skn-mlu7.document h2, .page-choose-template .skn-mlu7.document h3, .page-choose-template .skn-mlu7.document h4, .page-choose-template .skn-mlu7.document h5, .page-choose-template .skn-mlu7.document h6, .page-choose-template .skn-mlu7.document p, .page-choose-template .skn-mlu7.document blockquote, .page-choose-template .skn-mlu7.document pre, .page-choose-template .skn-mlu7.document a, .page-choose-template .skn-mlu7.document abbr, .page-choose-template .skn-mlu7.document acronym, .page-choose-template .skn-mlu7.document address, .page-choose-template .skn-mlu7.document big, .page-choose-template .skn-mlu7.document cite, .page-choose-template .skn-mlu7.document code, .page-choose-template .skn-mlu7.document del, .page-choose-template .skn-mlu7.document dfn, .page-choose-template .skn-mlu7.document em, .page-choose-template .skn-mlu7.document font, .page-choose-template .skn-mlu7.document img, .page-choose-template .skn-mlu7.document ins, .page-choose-template .skn-mlu7.document kbd, .page-choose-template .skn-mlu7.document q, .page-choose-template .skn-mlu7.document s, .page-choose-template .skn-mlu7.document samp, .page-choose-template .skn-mlu7.document small, .page-choose-template .skn-mlu7.document strike, .page-choose-template .skn-mlu7.document strong, .page-choose-template .skn-mlu7.document sub, .page-choose-template .skn-mlu7.document sup, .page-choose-template .skn-mlu7.document tt, .page-choose-template .skn-mlu7.document var, .page-choose-template .skn-mlu7.document b, .page-choose-template .skn-mlu7.document u, .page-choose-template .skn-mlu7.document i, .page-choose-template .skn-mlu7.document center, .page-choose-template .skn-mlu7.document dl, .page-choose-template .skn-mlu7.document dt, .page-choose-template .skn-mlu7.document dd, .page-choose-template .skn-mlu7.document ol, .page-choose-template .skn-mlu7.document ul, .page-choose-template .skn-mlu7.document li, .page-choose-template .skn-mlu7.document fieldset, .page-choose-template .skn-mlu7.document form, .page-choose-template .skn-mlu7.document label, .page-choose-template .skn-mlu7.document legend, .page-choose-template .skn-mlu7.document table, .page-choose-template .skn-mlu7.document caption, .page-choose-template .skn-mlu7.document tbody, .page-choose-template .skn-mlu7.document tfoot, .page-choose-template .skn-mlu7.document thead, .page-choose-template .skn-mlu7.document tr, .page-choose-template .skn-mlu7.document th, .page-choose-template .skn-mlu7.document td{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    background: transparent;\r\n}\r\n.page-choose-template .skn-mlu7.document table{\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n.page-choose-template .skn-mlu7.document a img{\r\n    border: none;\r\n}\r\n.page-choose-template .skn-mlu7.document  ul, .page-choose-template .skn-mlu7.document  li{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.page-choose-template .skn-mlu7.document  ul li{\r\n    position: relative;\r\n    margin: 0;\r\n    padding-left: 10px;\r\n}\r\n.page-choose-template .skn-mlu7.document  ul li:before{\r\n    content: '•';\r\n    font-size: 9px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n.page-choose-template .skn-mlu7.document .clear{\r\n    clear: both;\r\n    height: 0;\r\n}\r\n.page-choose-template .skn-mlu7.document br.clear{\r\n    line-height: 0;\r\n}\r\n.page-choose-template .skn-mlu7.document table{\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n.page-choose-template .skn-mlu7.document table.skills, .page-choose-template .skn-mlu7.document .table_wrapper{\r\n    width: 100%;\r\n    margin-top: 0;\r\n    word-break: break-all;\r\n}\r\n.page-choose-template .skn-mlu7.document table.skills th, .page-choose-template .skn-mlu7.document table.skills td{\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n.page-choose-template .skn-mlu7.document table.skills .skillname, .page-choose-template .skn-mlu7.document table.skills .skillrating{\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n.page-choose-template .skn-mlu7.document table.skills .skillrating{\r\n    width: 20%;\r\n}\r\n.page-choose-template .skn-mlu7.document table.skills .skillyears, .page-choose-template .skn-mlu7.document table.skills .skilllast{\r\n    width: 19%;\r\n}\r\n.page-choose-template .skn-mlu7.document table.skills .pad1{\r\n    width: 5%;\r\n}\r\n.page-choose-template .skn-mlu7.document table.skills .pad2, .page-choose-template .skn-mlu7.document table.skills .pad3{\r\n    width: 1%;\r\n}\r\n.page-choose-template .skn-mlu7.document {\r\n    color: #3b3b3b;\r\n    line-height: 16px;\r\n    font-variant-ligatures: none;\r\n    display: table;\r\n    min-height: 792px;\r\n}\r\n.page-choose-template .skn-mlu7.document  .name{\r\n    font-weight: bold;\r\n    padding: 0 0 10px 0;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    word-break: break-word;\r\n}\r\n.page-choose-template .skn-mlu7.document  .name>span{\r\n    display: block;\r\n}\r\n.page-choose-template .skn-mlu7.document  .name, .page-choose-template .skn-mlu7.document  .address, .page-choose-template .skn-mlu7.document  .additional_lnk{\r\n    color: #4a4a4a;\r\n    letter-spacing: 0;\r\n}\r\n.page-choose-template .skn-mlu7.document  .singlecolumn, .page-choose-template .skn-mlu7.document  .sectiontitle{\r\n    word-break: break-word;\r\n}\r\n.page-choose-template .skn-mlu7.document  .address .singlecolumn, .page-choose-template .skn-mlu7.document  .additional_lnk .singlecolumn{\r\n    margin-left: 0 !important;\r\n}\r\n.page-choose-template .skn-mlu7.document  .topsection .left-box, .page-choose-template .skn-mlu7.document  .parentContainer .left-box{\r\n    border-right: 1px solid #a9b1b5;\r\n}\r\n.page-choose-template .skn-mlu7.document  .left-box{\r\n    padding: 20px 30px;\r\n    display: table-cell;\r\n    position: relative;\r\n}\r\n.page-choose-template .skn-mlu7.document  .left-box>.section:first-child{\r\n    padding-top: 0 !important;\r\n}\r\n.page-choose-template .skn-mlu7.document  .right-box{\r\n    padding: 25px 30px 20px;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    letter-spacing: 0.2px;\r\n}\r\n.page-choose-template .skn-mlu7.document  .parentContainer{\r\n    display: table-row;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.page-choose-template .skn-mlu7.document  .parentContainer .right-box{\r\n    padding-top: 20px;\r\n    vertical-align: top;\r\n}\r\n.page-choose-template .skn-mlu7.document  .right-box>.section:first-child{\r\n    padding-top: 0 !important;\r\n}\r\n.page-choose-template .skn-mlu7.document  .right-box>.section:first-child .heading, .page-choose-template .skn-mlu7.document  .left-box>.section:first-child .heading{\r\n    margin-bottom: 10px !important;\r\n}\r\n.page-choose-template .skn-mlu7.document  .topsection{\r\n    display: table-row;\r\n    width: 100%;\r\n}\r\n.page-choose-template .skn-mlu7.document  .topsection .left-box, .page-choose-template .skn-mlu7.document  .topsection .right-box{\r\n    border-bottom: 1px solid #a9b1b5;\r\n}\r\n.page-choose-template .skn-mlu7.document  .section:empty{\r\n    display: none;\r\n}\r\n.page-choose-template .skn-mlu7.document  .PICTPic, .page-choose-template .skn-mlu7.document  .PICTPic .field{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n}\r\n.page-choose-template .skn-mlu7.document  .PICTPic img{\r\n    width: 99px;\r\n    height: 128px;\r\n    max-width: 99px;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n}\r\n.page-choose-template .skn-mlu7.document  div.SECTION_CNTC, .page-choose-template .skn-mlu7.document  div.additional_lnk{\r\n    padding: 0;\r\n}\r\n.page-choose-template .skn-mlu7.document  div.heading{\r\n    font-weight: bold;\r\n    line-height: 15px;\r\n    margin-bottom: 10px;\r\n}\r\n.page-choose-template .skn-mlu7.document  .right-box .sectiontitle{\r\n    letter-spacing: 0;\r\n}\r\n.page-choose-template .skn-mlu7.document  .septr:before{\r\n    content: '|';\r\n    font-size: 9px;\r\n    vertical-align: top;\r\n    padding-left: 2px;\r\n    padding-right: 2px;\r\n}\r\n.page-choose-template .skn-mlu7.document  .jobline ul, .page-choose-template .skn-mlu7.document  .education .field ul{\r\n    margin-top: 6px;\r\n}\r\n.page-choose-template .skn-mlu7.document .txtBold{\r\n    font-weight: bold;\r\n}\r\n.page-choose-template .skn-mlu7.document .txtItl{\r\n    font-style: italic;\r\n}\r\n.page-choose-template .skn-mlu7.document .dispBlock{\r\n    display: block;\r\n}\r\n.page-choose-template .skn-mlu7.document .sprtr{\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-mlu7.document {\r\n    line-height: 15px;\r\n}\r\n.page-choose-template .skn-mlu7.document  table{\r\n    line-height: 15px;\r\n} */\r\n/* .page-choose-template .skn-mlu7.pagesize{\r\n    width: 660px;\r\n} */\r\n/* .page-choose-template .skn-mlu7.document  .section{\r\n    padding-top: 20px;\r\n} */\r\n/* .page-choose-template .skn-mlu7.document  div.firstparagraph{\r\n    margin-top: 0 !important;\r\n}\r\n.page-choose-template .skn-mlu7.document  div.paragraph{\r\n    margin-top: 10px;\r\n}\r\n.page-choose-template .skn-mlu7.document  .singlecolumn, .page-choose-template .skn-mlu7.document  .maincolumn{\r\n    margin-left: 0;\r\n}\r\n.page-choose-template .skn-mlu7.document  .parentContainer .left-box .singlecolumn{\r\n    width: 164px;\r\n}\r\n.page-choose-template .skn-mlu7.document  table.skills td{\r\n    padding-top: 5px;\r\n}\r\n.page-choose-template .skn-mlu7.fontsize, ul li:before, .septr:before{\r\n    font-size: 11px;\r\n}\r\n.page-choose-template .skn-mlu7.fontface{\r\n    font-family: Arial;\r\n}\r\n.page-choose-template .skn-mlu7.document  .name{\r\n    font-size: 42px;\r\n    line-height: 47px;\r\n}\r\n.page-choose-template .skn-mlu7.document div.address2{\r\n    font-size: 11px;\r\n    line-height: px;\r\n}\r\n.page-choose-template .skn-mlu7.document .topsection .left-box .sortable-item{\r\n    width: auto;\r\n}\r\n.page-choose-template .skn-mlu7.document  div.sectiontitle{\r\n    font-size: 13px;\r\n    line-height: 14px;\r\n}\r\n.page-choose-template .skn-mlu7.document  .left-box{\r\n    width: 199px;\r\n}\r\n.page-choose-template .skn-mlu7.document  .jobdates{\r\n    font-size: 10px;\r\n}\r\n.page-choose-template .skn-mlu7.document  div.name, .page-choose-template .skn-mlu7.document  div.sectiontitle{\r\n    color: SDCL;\r\n} */\r\n.page-choose-template .skn-mna4 html,\r\n.page-choose-template .skn-mna4 body,\r\n.page-choose-template .skn-mna4 div,\r\n.page-choose-template .skn-mna4 span,\r\n.page-choose-template .skn-mna4 applet,\r\n.page-choose-template .skn-mna4 object,\r\n.page-choose-template .skn-mna4 iframe,\r\n.page-choose-template .skn-mna4 h1,\r\n.page-choose-template .skn-mna4 h2,\r\n.page-choose-template .skn-mna4 h3,\r\n.page-choose-template .skn-mna4 h4,\r\n.page-choose-template .skn-mna4 h5,\r\n.page-choose-template .skn-mna4 h6,\r\n.page-choose-template .skn-mna4 p,\r\n.page-choose-template .skn-mna4 blockquote,\r\n.page-choose-template .skn-mna4 pre,\r\n.page-choose-template .skn-mna4 a,\r\n.page-choose-template .skn-mna4 abbr,\r\n.page-choose-template .skn-mna4 acronym,\r\n.page-choose-template .skn-mna4 address,\r\n.page-choose-template .skn-mna4 big,\r\n.page-choose-template .skn-mna4 cite,\r\n.page-choose-template .skn-mna4 code,\r\n.page-choose-template .skn-mna4 del,\r\n.page-choose-template .skn-mna4 dfn,\r\n.page-choose-template .skn-mna4 em,\r\n.page-choose-template .skn-mna4 font,\r\n.page-choose-template .skn-mna4 img,\r\n.page-choose-template .skn-mna4 ins,\r\n.page-choose-template .skn-mna4 kbd,\r\n.page-choose-template .skn-mna4 q,\r\n.page-choose-template .skn-mna4 s,\r\n.page-choose-template .skn-mna4 samp,\r\n.page-choose-template .skn-mna4 small,\r\n.page-choose-template .skn-mna4 strike,\r\n.page-choose-template .skn-mna4 strong,\r\n.page-choose-template .skn-mna4 sub,\r\n.page-choose-template .skn-mna4 sup,\r\n.page-choose-template .skn-mna4 tt,\r\n.page-choose-template .skn-mna4 var,\r\n.page-choose-template .skn-mna4 b,\r\n.page-choose-template .skn-mna4 u,\r\n.page-choose-template .skn-mna4 i,\r\n.page-choose-template .skn-mna4 center,\r\n.page-choose-template .skn-mna4 dl,\r\n.page-choose-template .skn-mna4 dt,\r\n.page-choose-template .skn-mna4 dd,\r\n.page-choose-template .skn-mna4 ol,\r\n.page-choose-template .skn-mna4 ul,\r\n.page-choose-template .skn-mna4 li,\r\n.page-choose-template .skn-mna4 fieldset,\r\n.page-choose-template .skn-mna4 form,\r\n.page-choose-template .skn-mna4 label,\r\n.page-choose-template .skn-mna4 legend,\r\n.page-choose-template .skn-mna4 table,\r\n.page-choose-template .skn-mna4 caption,\r\n.page-choose-template .skn-mna4 tbody,\r\n.page-choose-template .skn-mna4 tfoot,\r\n.page-choose-template .skn-mna4 thead,\r\n.page-choose-template .skn-mna4 tr,\r\n.page-choose-template .skn-mna4 th,\r\n.page-choose-template .skn-mna4 td {\r\n    /* margin: 0;\r\n    padding: 0; */\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    /* background: transparent; */\r\n}\r\n\r\n.mes .page-choose-template .skn-mna4 #SECTION_CERT {\r\n    display: none;\r\n}\r\n\r\n.mfr .page-choose-template .skn-mna4 #SECTION_AWAR,\r\n.mfr .page-choose-template .skn-mna4 #SECTION_CERT {\r\n    display: none\r\n}\r\n\r\n.page-choose-template .skn-mna4 table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-mna4 body {\r\n    line-height: 1;\r\n    background: #fff;\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-mna4 ol,\r\n.page-choose-template .skn-mna4 ul {\r\n    list-style: none;\r\n}\r\n\r\n.page-choose-template .skn-mna4 blockquote,\r\n.page-choose-template .skn-mna4 q {\r\n    quotes: none;\r\n}\r\n\r\n.page-choose-template .skn-mna4 blockquote:before,\r\n.page-choose-template .skn-mna4 blockquote:after,\r\n.page-choose-template .skn-mna4 q:before,\r\n.page-choose-template .skn-mna4 q:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\n.page-choose-template .skn-mna4 :focus {\r\n    outline: 0;\r\n}\r\n\r\n.page-choose-template .skn-mna4 ins {\r\n    text-decoration: none;\r\n}\r\n\r\n.page-choose-template .skn-mna4 del {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.page-choose-template .skn-mna4 table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n.page-choose-template .skn-mna4 a img {\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-mna4 ul,\r\n.page-choose-template .skn-mna4 li {\r\n    list-style-type: disc;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-mna4 ul li {\r\n    margin: 0 0 0 15px;\r\n    padding-left: 8px;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .clear {\r\n    clear: both;\r\n    height: 0;\r\n}\r\n\r\n.page-choose-template .skn-mna4 br.clear {\r\n    line-height: 0;\r\n}\r\n\r\n.page-choose-template .skn-mna4 div.name {\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    font-weight: bold;\r\n    padding: 0;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n    letter-spacing: 1px;\r\n    top: 5px;\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-mna4 div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mna4 div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-mna4 div.heading {\r\n    clear: both;\r\n    font-weight: bold;\r\n    text-align: right;\r\n    float: left;\r\n}\r\n\r\n.page-choose-template .skn-mna4 div.address,\r\n.page-choose-template .skn-mna4 .adnlLnks {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.page-choose-template .skn-mna4 div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .datesWrapper {\r\n    float: right;\r\n    padding-left: 20px;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mna4 table.twocol td {\r\n    width: 50%;\r\n}\r\n\r\n.page-choose-template .skn-mna4 table.skills,\r\n.page-choose-template .skn-mna4 table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mna4 table.skills th,\r\n.page-choose-template .skn-mna4 table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mna4 table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-mna4 table.skills .skillname,\r\n.page-choose-template .skn-mna4 table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-mna4 table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-mna4 table.skills .skillyears,\r\n.page-choose-template .skn-mna4 table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-mna4 table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-mna4 table.skills .pad2,\r\n.page-choose-template .skn-mna4 table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-mna4 span.paddedline {\r\n    display: block;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mna4 {\r\n    color: #494c4e;\r\n    background-color: #fff !important;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .section {\r\n    clear: both;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .section:after {\r\n    content: '';\r\n    display: block;\r\n    clear: both;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .section.firstsection:after,\r\n.page-choose-template .skn-mna4 .section.SECTION_CNTC:after {\r\n    content: '';\r\n    display: block;\r\n    clear: none;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .jobtitle,\r\n.page-choose-template .skn-mna4 .degree {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-mna4 div.sectiontitle {\r\n    padding: 0;\r\n    letter-spacing: 0.52px;\r\n    text-transform: uppercase;\r\n    margin-right: 30px;\r\n    color: #4a4a4a;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .jobdates {\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .sprtr {\r\n    margin: 0 5px;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .monogram {\r\n    float: left;\r\n    margin-left: 30px;\r\n}\r\n\r\n.ie11.page-choose-template #document.skn-mna4 .monogram svg,\r\n.edge.page-choose-template #document.skn-mna4 .monogram svg {\r\n    height: 78px;\r\n    width: 78px;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .monogram svg {\r\n    overflow: visible !important;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .monogram svg rect {\r\n    stroke: #979797;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .monogram text {\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .section.SECTION_CNTC,\r\n.page-choose-template .skn-mna4 div.firstsection {\r\n    padding-top: 0 !important;\r\n    clear: inherit;\r\n    overflow: inherit;\r\n}\r\n\r\n.page-choose-template .skn-mna4 div.name,\r\n.page-choose-template .skn-mna4 div.address {\r\n    margin-left: 140px !important;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .adnlLnks {\r\n    text-align: center;\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .sectionCL .paragraph {\r\n    padding-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mna4 {\r\n    line-height: 16px;\r\n}\r\n\r\n.page-choose-template .skn-mna4 table {\r\n    line-height: 16px;\r\n}\r\n\r\n/* .page-choose-template .skn-mna4.pagesize{\r\n    width: 596px;\r\n}\r\n.page-choose-template .skn-mna4.vmargins{\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n.page-choose-template .skn-mna4.hmargins{\r\n    padding-left: 32px;\r\n    padding-right: 32px;\r\n} */\r\n.page-choose-template .skn-mna4 .section {\r\n    padding-top: 10px !important;\r\n}\r\n\r\n.page-choose-template .skn-mna4 div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mna4 div.heading {\r\n    width: 140px;\r\n}\r\n\r\n.page-choose-template .skn-mna4 div.paragraph {\r\n    margin-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mna4 div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .singlecolumn,\r\n.page-choose-template .skn-mna4 .maincolumn {\r\n    margin-left: 140px;\r\n    width: 456px;\r\n    min-height: 18px;\r\n}\r\n\r\n.page-choose-template .skn-mna4 div.sectiontitle {\r\n    font-size: 13px;\r\n    line-height: 18px;\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-mna4 table.skills td {\r\n    padding-top: 5px;\r\n}\r\n\r\n/* .page-choose-template .skn-mna4.fontsize{\r\n    font-size: 11px;\r\n}\r\n.page-choose-template .skn-mna4.fontface{\r\n    font-family: Century Gothic;\r\n} */\r\n.page-choose-template .skn-mna4 div.name {\r\n    font-size: 42px;\r\n    line-height: 39px;\r\n    margin-left: 140px;\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-mna4 div.address,\r\n.page-choose-template .skn-mna4 .adnlLnks {\r\n    font-size: 11px;\r\n    line-height: 21px;\r\n    margin-left: 140px;\r\n}\r\n\r\n.page-choose-template .skn-mna4 div.address {\r\n    margin-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .monogram svg rect {\r\n    stroke: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .monogram svg text {\r\n    fill: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-mna4 .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mna4 div.address2 {\r\n    font-size: 11px;\r\n    line-height: 16px;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 html,\r\n.page-choose-template .skn-mpa5 body,\r\n.page-choose-template .skn-mpa5 div,\r\n.page-choose-template .skn-mpa5 span,\r\n.page-choose-template .skn-mpa5 applet,\r\n.page-choose-template .skn-mpa5 object,\r\n.page-choose-template .skn-mpa5 iframe,\r\n.page-choose-template .skn-mpa5 h1,\r\n.page-choose-template .skn-mpa5 h2,\r\n.page-choose-template .skn-mpa5 h3,\r\n.page-choose-template .skn-mpa5 h4,\r\n.page-choose-template .skn-mpa5 h5,\r\n.page-choose-template .skn-mpa5 h6,\r\n.page-choose-template .skn-mpa5 p,\r\n.page-choose-template .skn-mpa5 blockquote,\r\n.page-choose-template .skn-mpa5 pre,\r\n.page-choose-template .skn-mpa5 a,\r\n.page-choose-template .skn-mpa5 abbr,\r\n.page-choose-template .skn-mpa5 acronym,\r\n.page-choose-template .skn-mpa5 address,\r\n.page-choose-template .skn-mpa5 big,\r\n.page-choose-template .skn-mpa5 cite,\r\n.page-choose-template .skn-mpa5 code,\r\n.page-choose-template .skn-mpa5 del,\r\n.page-choose-template .skn-mpa5 dfn,\r\n.page-choose-template .skn-mpa5 em,\r\n.page-choose-template .skn-mpa5 font,\r\n.page-choose-template .skn-mpa5 img,\r\n.page-choose-template .skn-mpa5 ins,\r\n.page-choose-template .skn-mpa5 kbd,\r\n.page-choose-template .skn-mpa5 q,\r\n.page-choose-template .skn-mpa5 s,\r\n.page-choose-template .skn-mpa5 samp,\r\n.page-choose-template .skn-mpa5 small,\r\n.page-choose-template .skn-mpa5 strike,\r\n.page-choose-template .skn-mpa5 strong,\r\n.page-choose-template .skn-mpa5 sub,\r\n.page-choose-template .skn-mpa5 sup,\r\n.page-choose-template .skn-mpa5 tt,\r\n.page-choose-template .skn-mpa5 var,\r\n.page-choose-template .skn-mpa5 b,\r\n.page-choose-template .skn-mpa5 u,\r\n.page-choose-template .skn-mpa5 i,\r\n.page-choose-template .skn-mpa5 center,\r\n.page-choose-template .skn-mpa5 dl,\r\n.page-choose-template .skn-mpa5 dt,\r\n.page-choose-template .skn-mpa5 dd,\r\n.page-choose-template .skn-mpa5 ol,\r\n.page-choose-template .skn-mpa5 ul,\r\n.page-choose-template .skn-mpa5 li,\r\n.page-choose-template .skn-mpa5 fieldset,\r\n.page-choose-template .skn-mpa5 form,\r\n.page-choose-template .skn-mpa5 label,\r\n.page-choose-template .skn-mpa5 legend,\r\n.page-choose-template .skn-mpa5 table,\r\n.page-choose-template .skn-mpa5 caption,\r\n.page-choose-template .skn-mpa5 tbody,\r\n.page-choose-template .skn-mpa5 tfoot,\r\n.page-choose-template .skn-mpa5 thead,\r\n.page-choose-template .skn-mpa5 tr,\r\n.page-choose-template .skn-mpa5 th,\r\n.page-choose-template .skn-mpa5 td {\r\n    /* margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline; */\r\n    /* background: transparent; */\r\n}\r\n\r\n.page-choose-template .skn-mpa5 table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 body {\r\n    line-height: 1;\r\n    background: #fff;\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 ol,\r\n.page-choose-template .skn-mpa5 ul {\r\n    list-style: none;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 blockquote,\r\n.page-choose-template .skn-mpa5 q {\r\n    quotes: none;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 blockquote:before,\r\n.page-choose-template .skn-mpa5 blockquote:after,\r\n.page-choose-template .skn-mpa5 q:before,\r\n.page-choose-template .skn-mpa5 q:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 :focus {\r\n    outline: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 ins {\r\n    text-decoration: none;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 del {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 a img {\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 ul,\r\n.page-choose-template .skn-mpa5 li {\r\n    list-style-type: disc;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 ul li {\r\n    margin: 0 0 0 13px;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 .clear {\r\n    clear: both;\r\n    height: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 br.clear {\r\n    line-height: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 div.name {\r\n    /* font-family: 'Roboto',sans-serif;\r\n    color: #424243;\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    text-align: center;\r\n    padding: 0;\r\n    border-top: 13px solid #639; */\r\n}\r\n\r\n.page-choose-template .skn-mpa5 div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 div.heading {\r\n    clear: both;\r\n    color: #231f20;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 div.address,\r\n.page-choose-template .skn-mpa5 div.address2 {\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    position: relative;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 div.septr li,\r\n.page-choose-template .skn-mpa5 div.septr ul {\r\n    display: inline;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 div.septr li:before {\r\n    content: '• ';\r\n    vertical-align: bottom;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 div.septr li.first:before {\r\n    content: '';\r\n    margin-left: -3px;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 span.septrSpace {\r\n    margin: 0 4px;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 .smryWrap .sectiontitle {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 .txtBold {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 span.email {\r\n    color: #00acec;\r\n    text-transform: lowercase;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 table.twocol td {\r\n    width: 50%;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 {\r\n    font-family: 'Roboto', sans-serif;\r\n    color: #000;\r\n    background-color: #fff !important;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 div.section,\r\n.page-choose-template .skn-mpa5 div.sectiontitle {\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 div.sectiontitle {\r\n    font-weight: 600;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 p font {\r\n    color: #000 !important;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 td.twocol_2 {\r\n    border-left: 1px solid #fff;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 .adnlLnks {\r\n    text-align: center;\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 .adnlLnks li {\r\n    display: inline-block;\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 .adnlLnks li+li:before {\r\n    content: '• ';\r\n    display: inline-block;\r\n    margin: 0 10px 0 5px;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 div.address2 {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 {\r\n    line-height: 16px;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 table {\r\n    line-height: 16px;\r\n}\r\n\r\n/* .page-choose-template .skn-mpa5.pagesize{\r\n    width: 536px;\r\n}\r\n.page-choose-template .skn-mpa5.vmargins{\r\n    padding-top: 37px;\r\n    padding-bottom: 37px;\r\n}\r\n.page-choose-template .skn-mpa5.hmargins{\r\n    padding-left: 62px;\r\n    padding-right: 62px;\r\n} */\r\n.page-choose-template .skn-mpa5 .section {\r\n    margin-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 div.firstsection,\r\n.page-choose-template .skn-mpa5 div.SECTION_CNTC {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 div.paragraph {\r\n    margin-top: 6px;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 .singlecolumn,\r\n.page-choose-template .skn-mpa5 .maincolumn {\r\n    margin-left: 0;\r\n    width: 536px;\r\n}\r\n\r\n/* .page-choose-template .skn-mpa5.fontsize{\r\n    font-size: 12px;\r\n}\r\n.page-choose-template .skn-mpa5.fontface{\r\n    font-family: Arial;\r\n} */\r\n.page-choose-template .skn-mpa5 div.sectiontitle {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 div.name {\r\n    /* font-size: 30px;\r\n    line-height: 38px;\r\n    padding-top: 6px;\r\n    border-color: SDCL;\r\n    color: SDCL; */\r\n}\r\n\r\n.page-choose-template .skn-mpa5 .PARAGRAPH_PRFL div.address,\r\n.page-choose-template .skn-mpa5 .PARAGRAPH_CLPRFL div.address {\r\n    font-size: 12px;\r\n    line-height: 16px;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 table.skills td {\r\n    padding-top: 3px;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 .smryWrap {\r\n    border-top: 2px dotted SDCL;\r\n    border-bottom: 2px dotted SDCL;\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n}\r\n\r\n.page-choose-template .skn-mpa5 div.address2 {\r\n    font-size: 12px;\r\n    line-height: 16px;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document html,\r\n.page-choose-template .skn-mpa6.document body,\r\n.page-choose-template .skn-mpa6.document div,\r\n.page-choose-template .skn-mpa6.document span,\r\n.page-choose-template .skn-mpa6.document applet,\r\n.page-choose-template .skn-mpa6.document object,\r\n.page-choose-template .skn-mpa6.document iframe,\r\n.page-choose-template .skn-mpa6.document h1,\r\n.page-choose-template .skn-mpa6.document h2,\r\n.page-choose-template .skn-mpa6.document h3,\r\n.page-choose-template .skn-mpa6.document h4,\r\n.page-choose-template .skn-mpa6.document h5,\r\n.page-choose-template .skn-mpa6.document h6,\r\n.page-choose-template .skn-mpa6.document p,\r\n.page-choose-template .skn-mpa6.document blockquote,\r\n.page-choose-template .skn-mpa6.document pre,\r\n.page-choose-template .skn-mpa6.document a,\r\n.page-choose-template .skn-mpa6.document abbr,\r\n.page-choose-template .skn-mpa6.document acronym,\r\n.page-choose-template .skn-mpa6.document address,\r\n.page-choose-template .skn-mpa6.document big,\r\n.page-choose-template .skn-mpa6.document cite,\r\n.page-choose-template .skn-mpa6.document code,\r\n.page-choose-template .skn-mpa6.document del,\r\n.page-choose-template .skn-mpa6.document dfn,\r\n.page-choose-template .skn-mpa6.document em,\r\n.page-choose-template .skn-mpa6.document font,\r\n.page-choose-template .skn-mpa6.document img,\r\n.page-choose-template .skn-mpa6.document ins,\r\n.page-choose-template .skn-mpa6.document kbd,\r\n.page-choose-template .skn-mpa6.document q,\r\n.page-choose-template .skn-mpa6.document s,\r\n.page-choose-template .skn-mpa6.document samp,\r\n.page-choose-template .skn-mpa6.document small,\r\n.page-choose-template .skn-mpa6.document strike,\r\n.page-choose-template .skn-mpa6.document strong,\r\n.page-choose-template .skn-mpa6.document sub,\r\n.page-choose-template .skn-mpa6.document sup,\r\n.page-choose-template .skn-mpa6.document tt,\r\n.page-choose-template .skn-mpa6.document var,\r\n.page-choose-template .skn-mpa6.document b,\r\n.page-choose-template .skn-mpa6.document u,\r\n.page-choose-template .skn-mpa6.document i,\r\n.page-choose-template .skn-mpa6.document center,\r\n.page-choose-template .skn-mpa6.document dl,\r\n.page-choose-template .skn-mpa6.document dt,\r\n.page-choose-template .skn-mpa6.document dd,\r\n.page-choose-template .skn-mpa6.document ol,\r\n.page-choose-template .skn-mpa6.document ul,\r\n.page-choose-template .skn-mpa6.document li,\r\n.page-choose-template .skn-mpa6.document fieldset,\r\n.page-choose-template .skn-mpa6.document form,\r\n.page-choose-template .skn-mpa6.document label,\r\n.page-choose-template .skn-mpa6.document legend,\r\n.page-choose-template .skn-mpa6.document table,\r\n.page-choose-template .skn-mpa6.document caption,\r\n.page-choose-template .skn-mpa6.document tbody,\r\n.page-choose-template .skn-mpa6.document tfoot,\r\n.page-choose-template .skn-mpa6.document thead,\r\n.page-choose-template .skn-mpa6.document tr,\r\n.page-choose-template .skn-mpa6.document th,\r\n.page-choose-template .skn-mpa6.document td {\r\n    /* margin: 0;\r\n    padding: 0; */\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    /* background: transparent; */\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document body {\r\n    line-height: 1;\r\n    background: #fff;\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document ol,\r\n.page-choose-template .skn-mpa6.document ul {\r\n    list-style: none;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document blockquote,\r\n.page-choose-template .skn-mpa6.document q {\r\n    quotes: none;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document blockquote:before,\r\n.page-choose-template .skn-mpa6.document blockquote:after,\r\n.page-choose-template .skn-mpa6.document q:before,\r\n.page-choose-template .skn-mpa6.document q:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document :focus {\r\n    outline: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document ins {\r\n    text-decoration: none;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document del {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document a img {\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document ul,\r\n.page-choose-template .skn-mpa6.document li {\r\n    list-style-type: disc;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document ul li {\r\n    margin: 0 0 0 13px;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .clear {\r\n    clear: both;\r\n    height: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document br.clear {\r\n    line-height: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.name {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.heading {\r\n    clear: both;\r\n    color: #231f20;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.address,\r\n.page-choose-template .skn-mpa6.document div.address2 {\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    color: #7f8183;\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .address.mpr6CntcSec .paddedline:nth-child(0n+2) {\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.septr li,\r\n.page-choose-template .skn-mpa6.document div.septr ul {\r\n    display: inline;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.septr li+li:before {\r\n    content: '• ';\r\n    vertical-align: bottom;\r\n    margin: 0 4px;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .txtBold {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .txtItl {\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document span.septrSpace {\r\n    margin: 0 8px;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document span.email {\r\n    color: #00acec;\r\n    text-transform: lowercase;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document table.twocol td {\r\n    width: 50%;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n/* .page-choose-template .skn-mpa6.document {\r\n    font-family: 'Roboto',sans-serif;\r\n    color: #000;\r\n    background-color: #fff !important;\r\n} */\r\n.page-choose-template .skn-mpa6.document div.section,\r\n.page-choose-template .skn-mpa6.document div.sectiontitle {\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.sectiontitle {\r\n    color: #c0c0c0;\r\n    font-weight: 600;\r\n    padding-right: 10px;\r\n    position: relative;\r\n}\r\n\r\n/* .page-choose-template .skn-mpa6.document  p font{\r\n    color: #000 !important;\r\n} */\r\n.page-choose-template .skn-mpa6.document td.twocol_1 {\r\n    padding-right: 7px;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document td.twocol_2 {\r\n    padding-left: 7px;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .mpr6NameSec,\r\n.page-choose-template .skn-mpa6.document .mpr6CntcSec {\r\n    box-sizing: border-box;\r\n    float: left;\r\n    width: 50%;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .mpr6CntcSec+div:before {\r\n    content: ' ';\r\n    display: block;\r\n    overflow: hidden;\r\n    border-top: 1px solid #666;\r\n    clear: both;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .fName {\r\n    color: #099;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document [id^=\"CNTC\"].combSection {\r\n    border-bottom: 1px solid #666;\r\n    overflow: hidden;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.heading {\r\n    float: left;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .adnlLnks.singlecolumn {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .adnlLnks li {\r\n    display: inline-block;\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .adnlLnks li+li:before {\r\n    content: '• ';\r\n    display: inline-block;\r\n    margin: 0 10px 0 5px;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.address2 {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .sectionCL {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.name {\r\n    box-sizing: border-box;\r\n    float: left;\r\n    width: 50%;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.name .field:first-child {\r\n    color: #099;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.address {\r\n    font-size: 10px;\r\n    line-height: 14px;\r\n    padding-bottom: 10px;\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document span.email {\r\n    color: #00acec;\r\n    text-transform: lowercase;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .section-prfl {\r\n    border-bottom: 1px solid #666;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .wrapper,\r\n.page-choose-template .skn-mpa6.document #dummyDocument .section-prfl .paragraph {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.section-prfl div.paragraph {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.section {\r\n    overflow: hidden;\r\n    clear: both;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document {\r\n    line-height: 14px;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document table {\r\n    line-height: 14px;\r\n}\r\n\r\n/* .page-choose-template .skn-mpa6.pagesize{\r\n    width: 536px;\r\n}\r\n.page-choose-template .skn-mpa6.vmargins{\r\n    padding-top: 37px;\r\n    padding-bottom: 37px;\r\n}\r\n.page-choose-template .skn-mpa6.hmargins{\r\n    padding-left: 62px;\r\n    padding-right: 62px;\r\n} */\r\n.page-choose-template .skn-mpa6.document .section {\r\n    margin-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.paragraph {\r\n    margin-top: 6px;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.heading {\r\n    width: 120px;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .heading~.paragraph {\r\n    /* margin-left: 120px; */\r\n}\r\n\r\n/* .page-choose-template .skn-mpa6.document.fontsize{\r\n    font-size: 10px;\r\n}\r\n.page-choose-template .skn-mpa6.document.fontface{\r\n    font-family: Arial;\r\n} */\r\n.page-choose-template .skn-mpa6.document div.sectiontitle {\r\n    font-size: 11px;\r\n    line-height: 15px;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.name {\r\n    font-size: 25px;\r\n    line-height: 29px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.address {\r\n    font-size: 10px;\r\n    line-height: 14px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document table.skills td {\r\n    padding-top: 3px;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .mpr6CntcSec+div:before {\r\n    padding-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document .heading~div .paragraph {\r\n    /* margin-left: 120px; */\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document span[id*=\"FNAM\"] {\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-mpa6.document div.address2 {\r\n    font-size: 10px;\r\n    line-height: 14px;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document html,\r\n.page-choose-template .skn-mta1.document body,\r\n.page-choose-template .skn-mta1.document div,\r\n.page-choose-template .skn-mta1.document span,\r\n.page-choose-template .skn-mta1.document applet,\r\n.page-choose-template .skn-mta1.document object,\r\n.page-choose-template .skn-mta1.document iframe,\r\n.page-choose-template .skn-mta1.document h1,\r\n.page-choose-template .skn-mta1.document h2,\r\n.page-choose-template .skn-mta1.document h3,\r\n.page-choose-template .skn-mta1.document h4,\r\n.page-choose-template .skn-mta1.document h5,\r\n.page-choose-template .skn-mta1.document h6,\r\n.page-choose-template .skn-mta1.document p,\r\n.page-choose-template .skn-mta1.document blockquote,\r\n.page-choose-template .skn-mta1.document pre,\r\n.page-choose-template .skn-mta1.document a,\r\n.page-choose-template .skn-mta1.document abbr,\r\n.page-choose-template .skn-mta1.document acronym,\r\n.page-choose-template .skn-mta1.document address,\r\n.page-choose-template .skn-mta1.document big,\r\n.page-choose-template .skn-mta1.document cite,\r\n.page-choose-template .skn-mta1.document code,\r\n.page-choose-template .skn-mta1.document del,\r\n.page-choose-template .skn-mta1.document dfn,\r\n.page-choose-template .skn-mta1.document em,\r\n.page-choose-template .skn-mta1.document font,\r\n.page-choose-template .skn-mta1.document img,\r\n.page-choose-template .skn-mta1.document ins,\r\n.page-choose-template .skn-mta1.document kbd,\r\n.page-choose-template .skn-mta1.document q,\r\n.page-choose-template .skn-mta1.document s,\r\n.page-choose-template .skn-mta1.document samp,\r\n.page-choose-template .skn-mta1.document small,\r\n.page-choose-template .skn-mta1.document strike,\r\n.page-choose-template .skn-mta1.document strong,\r\n.page-choose-template .skn-mta1.document sub,\r\n.page-choose-template .skn-mta1.document sup,\r\n.page-choose-template .skn-mta1.document tt,\r\n.page-choose-template .skn-mta1.document var,\r\n.page-choose-template .skn-mta1.document b,\r\n.page-choose-template .skn-mta1.document u,\r\n.page-choose-template .skn-mta1.document i,\r\n.page-choose-template .skn-mta1.document center,\r\n.page-choose-template .skn-mta1.document dl,\r\n.page-choose-template .skn-mta1.document dt,\r\n.page-choose-template .skn-mta1.document dd,\r\n.page-choose-template .skn-mta1.document ol,\r\n.page-choose-template .skn-mta1.document ul,\r\n.page-choose-template .skn-mta1.document li,\r\n.page-choose-template .skn-mta1.document fieldset,\r\n.page-choose-template .skn-mta1.document form,\r\n.page-choose-template .skn-mta1.document label,\r\n.page-choose-template .skn-mta1.document legend,\r\n.page-choose-template .skn-mta1.document table,\r\n.page-choose-template .skn-mta1.document caption,\r\n.page-choose-template .skn-mta1.document tbody,\r\n.page-choose-template .skn-mta1.document tfoot,\r\n.page-choose-template .skn-mta1.document thead,\r\n.page-choose-template .skn-mta1.document tr,\r\n.page-choose-template .skn-mta1.document th,\r\n.page-choose-template .skn-mta1.document td {\r\n    /* margin: 0; */\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    /* background: transparent; */\r\n}\r\n\r\n.page-choose-template .skn-mta1.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document ul,\r\n.page-choose-template .skn-mta1.document li {\r\n    list-style-type: disc;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document ul li {\r\n    margin: 0 0 0 13px;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.name {\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    font-weight: bold;\r\n    padding: 0;\r\n    text-align: right;\r\n    color: #369;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.heading {\r\n    clear: both;\r\n    font-weight: bold;\r\n    text-transform: lowercase;\r\n    color: #369;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.address {\r\n    position: relative;\r\n    text-align: right;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin-top: 11px;\r\n    color: #369;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.adnlLnks {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.adnlLnks ul,\r\n.page-choose-template .skn-mta1.document div.adnlLnks li {\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.adnlLnks li {\r\n    display: inline !important;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.adnlLnks li:before {\r\n    content: '◆';\r\n    vertical-align: bottom;\r\n    margin: 0 5px;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.adnlLnks li.first:before {\r\n    content: '';\r\n}\r\n\r\n.page-choose-template .skn-mta1.document span.jobtitle,\r\n.page-choose-template .skn-mta1.document span.companyname,\r\n.page-choose-template .skn-mta1.document span.degree,\r\n.page-choose-template .skn-mta1.document span.programline {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document span.degree,\r\n.page-choose-template .skn-mta1.document span.programline,\r\n.page-choose-template .skn-mta1.document span.jobtitle,\r\n.page-choose-template .skn-mta1.document span.jobdates {\r\n    color: #003363;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document span.companyname {\r\n    font-weight: normal !important;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document .datesWrapper {\r\n    float: right;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document table.twocol td {\r\n    width: 50%;\r\n    vertical-align: top;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document table.skills,\r\n.page-choose-template .skn-mta1.document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document table.skills th,\r\n.page-choose-template .skn-mta1.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document table.skills .skillname,\r\n.page-choose-template .skn-mta1.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document table.skills .skillyears,\r\n.page-choose-template .skn-mta1.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document table.skills .pad2,\r\n.page-choose-template .skn-mta1.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document {\r\n    color: #666;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document p font {\r\n    color: #666 !important;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document .section-prfl,\r\n.page-choose-template .skn-mta1.document .section-clprfl {\r\n    padding-bottom: 6px;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document td.twocol_2 {\r\n    border-left: 1px solid #fefdfd;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document body {\r\n    font-feature-settings: 'liga' 0;\r\n    -moz-font-feature-settings: 'liga' off;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-mta1.document .signPic>.field_sign {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-mta1.document .disclaim .singlecolumn li,\r\n.page-choose-template .skn-mta1.document .disclaim .singlecolumn p,\r\n.page-choose-template .skn-mta1.document .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document {\r\n    line-height: 19px;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document table {\r\n    line-height: 19px;\r\n}\r\n\r\n/* .page-choose-template .skn-mta1.pagesize{\r\n    width: 576px;\r\n}\r\n.page-choose-template .skn-mta1.vmargins{\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n.page-choose-template .skn-mta1.hmargins{\r\n    padding-left: 42px;\r\n    padding-right: 42px;\r\n} */\r\n.page-choose-template .skn-mta1.document .section {\r\n    margin-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 70px;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.SECTION_CNTC {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.heading {\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.paragraph {\r\n    margin-top: 14px;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document .singlecolumn,\r\n.page-choose-template .skn-mta1.document .maincolumn {\r\n    margin-left: 0;\r\n    width: 576px;\r\n}\r\n\r\n/* .page-choose-template .skn-mta1.fontsize{\r\n    font-size: 11px;\r\n} */\r\n/* .page-choose-template .skn-mta1.fontface{\r\n    font-family: Tahoma;\r\n} */\r\n.page-choose-template .skn-mta1.document div.sectiontitle {\r\n    font-size: 14px;\r\n    line-height: 22px;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.name {\r\n    font-size: 31px;\r\n    line-height: 63px;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.address {\r\n    font-size: 10px;\r\n    line-height: 18px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document table.skills td {\r\n    padding-top: 7px;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.name,\r\n.page-choose-template .skn-mta1.document div.address,\r\n.page-choose-template .skn-mta1.document div.adnlLnks ul li,\r\n.page-choose-template .skn-mta1.document div.sectiontitle,\r\n.page-choose-template .skn-mta1.document span.jobdates,\r\n.page-choose-template .skn-mta1.document span.degree,\r\n.page-choose-template .skn-mta1.document span.jobtitle {\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mta1.document div.address2 {\r\n    font-size: 11px;\r\n    line-height: 19px;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document html,\r\n.page-choose-template .skn-mta2.document body,\r\n.page-choose-template .skn-mta2.document div,\r\n.page-choose-template .skn-mta2.document span,\r\n.page-choose-template .skn-mta2.document applet,\r\n.page-choose-template .skn-mta2.document object,\r\n.page-choose-template .skn-mta2.document iframe,\r\n.page-choose-template .skn-mta2.document h1,\r\n.page-choose-template .skn-mta2.document h2,\r\n.page-choose-template .skn-mta2.document h3,\r\n.page-choose-template .skn-mta2.document h4,\r\n.page-choose-template .skn-mta2.document h5,\r\n.page-choose-template .skn-mta2.document h6,\r\n.page-choose-template .skn-mta2.document p,\r\n.page-choose-template .skn-mta2.document blockquote,\r\n.page-choose-template .skn-mta2.document pre,\r\n.page-choose-template .skn-mta2.document a,\r\n.page-choose-template .skn-mta2.document abbr,\r\n.page-choose-template .skn-mta2.document acronym,\r\n.page-choose-template .skn-mta2.document address,\r\n.page-choose-template .skn-mta2.document big,\r\n.page-choose-template .skn-mta2.document cite,\r\n.page-choose-template .skn-mta2.document code,\r\n.page-choose-template .skn-mta2.document del,\r\n.page-choose-template .skn-mta2.document dfn,\r\n.page-choose-template .skn-mta2.document em,\r\n.page-choose-template .skn-mta2.document font,\r\n.page-choose-template .skn-mta2.document img,\r\n.page-choose-template .skn-mta2.document ins,\r\n.page-choose-template .skn-mta2.document kbd,\r\n.page-choose-template .skn-mta2.document q,\r\n.page-choose-template .skn-mta2.document s,\r\n.page-choose-template .skn-mta2.document samp,\r\n.page-choose-template .skn-mta2.document small,\r\n.page-choose-template .skn-mta2.document strike,\r\n.page-choose-template .skn-mta2.document strong,\r\n.page-choose-template .skn-mta2.document sub,\r\n.page-choose-template .skn-mta2.document sup,\r\n.page-choose-template .skn-mta2.document tt,\r\n.page-choose-template .skn-mta2.document var,\r\n.page-choose-template .skn-mta2.document b,\r\n.page-choose-template .skn-mta2.document u,\r\n.page-choose-template .skn-mta2.document i,\r\n.page-choose-template .skn-mta2.document center,\r\n.page-choose-template .skn-mta2.document dl,\r\n.page-choose-template .skn-mta2.document dt,\r\n.page-choose-template .skn-mta2.document dd,\r\n.page-choose-template .skn-mta2.document ol,\r\n.page-choose-template .skn-mta2.document ul,\r\n.page-choose-template .skn-mta2.document li,\r\n.page-choose-template .skn-mta2.document fieldset,\r\n.page-choose-template .skn-mta2.document form,\r\n.page-choose-template .skn-mta2.document label,\r\n.page-choose-template .skn-mta2.document legend,\r\n.page-choose-template .skn-mta2.document table,\r\n.page-choose-template .skn-mta2.document caption,\r\n.page-choose-template .skn-mta2.document tbody,\r\n.page-choose-template .skn-mta2.document tfoot,\r\n.page-choose-template .skn-mta2.document thead,\r\n.page-choose-template .skn-mta2.document tr,\r\n.page-choose-template .skn-mta2.document th,\r\n.page-choose-template .skn-mta2.document td {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    /* background: transparent; */\r\n}\r\n\r\n.mes .page-choose-template .skn-mta2.document #SECTION_AWAR,\r\n.mes .page-choose-template .skn-mta2.document #SECTION_CERT {\r\n    display: none;\r\n}\r\n\r\n.mit .page-choose-template .skn-mta2.document #SECTION_AWAR,\r\n.mit .page-choose-template .skn-mta2.document #SECTION_CERT {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document ul,\r\n.page-choose-template .skn-mta2.document li {\r\n    list-style-type: disc;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document ul li {\r\n    margin: 0 0 0 13px;\r\n    color: #666;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document div.name {\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    font-weight: bold;\r\n    padding: 0;\r\n    text-align: right;\r\n    color: #000;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document div.heading {\r\n    clear: both;\r\n    font-weight: bold;\r\n    text-transform: lowercase;\r\n    color: #000;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document div.address {\r\n    position: relative;\r\n    text-align: right;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin-top: 11px;\r\n    color: #000;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document div.adnlLnks {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document div.adnlLnks ul,\r\n.page-choose-template .skn-mta2.document div.adnlLnks li {\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document div.adnlLnks li {\r\n    display: inline !important;\r\n    margin: 0 5px;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document span.jobtitle,\r\n.page-choose-template .skn-mta2.document span.companyname,\r\n.page-choose-template .skn-mta2.document span.degree,\r\n.page-choose-template .skn-mta2.document span.programline {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document span.degree,\r\n.page-choose-template .skn-mta2.document span.programline,\r\n.page-choose-template .skn-mta2.document span.jobtitle,\r\n.page-choose-template .skn-mta2.document span.jobdates {\r\n    color: #000;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document span.companyname {\r\n    font-weight: normal !important;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document .datesWrapper {\r\n    float: right;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document table.twocol td {\r\n    width: 50%;\r\n    vertical-align: top;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document table.skills,\r\n.page-choose-template .skn-mta2.document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document table.skills th,\r\n.page-choose-template .skn-mta2.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document table.skills th {\r\n    text-decoration: underline;\r\n    color: #666;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document table.skills td {\r\n    color: #666;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document table.skills .skillname,\r\n.page-choose-template .skn-mta2.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document table.skills .skillyears,\r\n.page-choose-template .skn-mta2.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document table.skills .pad2,\r\n.page-choose-template .skn-mta2.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document {\r\n    color: #666;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document p font {\r\n    color: #666 !important;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document .section-prfl,\r\n.page-choose-template .skn-mta2.document .section-clprfl {\r\n    padding-bottom: 6px;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document td.twocol_2 {\r\n    border-left: 1px solid #fefdfd;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document body {\r\n    font-feature-settings: 'liga' 0;\r\n    -moz-font-feature-settings: 'liga' off;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-mta2.document .signPic>.field_sign {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-mta2.document .disclaim .singlecolumn li,\r\n.page-choose-template .skn-mta2.document .disclaim .singlecolumn p,\r\n.page-choose-template .skn-mta2.document .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document {\r\n    line-height: 19px;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document table {\r\n    line-height: 19px;\r\n}\r\n\r\n/* .page-choose-template .skn-mta2.pagesize{\r\n    width: 576px;\r\n}\r\n.page-choose-template .skn-mta2.vmargins{\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n.page-choose-template .skn-mta2.hmargins{\r\n    padding-left: 42px;\r\n    padding-right: 42px;\r\n} */\r\n.page-choose-template .skn-mta2.document .section {\r\n    margin-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 60px;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document div.SECTION_CNTC {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document div.heading {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document div.paragraph {\r\n    margin-top: 12px;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document .singlecolumn,\r\n.page-choose-template .skn-mta2.document .maincolumn {\r\n    margin-left: 0;\r\n    width: 576px;\r\n}\r\n\r\n/* .page-choose-template .skn-mta2.fontsize{\r\n    font-size: 11px;\r\n}\r\n.page-choose-template .skn-mta2.fontface{\r\n    font-family: Century Gothic;\r\n} */\r\n.page-choose-template .skn-mta2.document div.sectiontitle {\r\n    font-size: 14px;\r\n    line-height: 22px;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document div.name {\r\n    font-size: 31px;\r\n    line-height: 63px;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document div.address {\r\n    font-size: 10px;\r\n    line-height: 18px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document table.skills td {\r\n    padding-top: 6px;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document div.name,\r\n.page-choose-template .skn-mta2.document div.address,\r\n.page-choose-template .skn-mta2.document div.adnlLnks ul li,\r\n.page-choose-template .skn-mta2.document div.sectiontitle,\r\n.page-choose-template .skn-mta2.document span.jobdates,\r\n.page-choose-template .skn-mta2.document span.degree,\r\n.page-choose-template .skn-mta2.document span.jobtitle {\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mta2.document div.address2 {\r\n    font-size: 11px;\r\n    line-height: 19px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document html,\r\n.page-choose-template .skn-mta3.document body,\r\n.page-choose-template .skn-mta3.document div,\r\n.page-choose-template .skn-mta3.document span,\r\n.page-choose-template .skn-mta3.document applet,\r\n.page-choose-template .skn-mta3.document object,\r\n.page-choose-template .skn-mta3.document iframe,\r\n.page-choose-template .skn-mta3.document h1,\r\n.page-choose-template .skn-mta3.document h2,\r\n.page-choose-template .skn-mta3.document h3,\r\n.page-choose-template .skn-mta3.document h4,\r\n.page-choose-template .skn-mta3.document h5,\r\n.page-choose-template .skn-mta3.document h6,\r\n.page-choose-template .skn-mta3.document p,\r\n.page-choose-template .skn-mta3.document blockquote,\r\n.page-choose-template .skn-mta3.document pre,\r\n.page-choose-template .skn-mta3.document a,\r\n.page-choose-template .skn-mta3.document abbr,\r\n.page-choose-template .skn-mta3.document acronym,\r\n.page-choose-template .skn-mta3.document address,\r\n.page-choose-template .skn-mta3.document big,\r\n.page-choose-template .skn-mta3.document cite,\r\n.page-choose-template .skn-mta3.document code,\r\n.page-choose-template .skn-mta3.document del,\r\n.page-choose-template .skn-mta3.document dfn,\r\n.page-choose-template .skn-mta3.document em,\r\n.page-choose-template .skn-mta3.document font,\r\n.page-choose-template .skn-mta3.document img,\r\n.page-choose-template .skn-mta3.document ins,\r\n.page-choose-template .skn-mta3.document kbd,\r\n.page-choose-template .skn-mta3.document q,\r\n.page-choose-template .skn-mta3.document s,\r\n.page-choose-template .skn-mta3.document samp,\r\n.page-choose-template .skn-mta3.document small,\r\n.page-choose-template .skn-mta3.document strike,\r\n.page-choose-template .skn-mta3.document strong,\r\n.page-choose-template .skn-mta3.document sub,\r\n.page-choose-template .skn-mta3.document sup,\r\n.page-choose-template .skn-mta3.document tt,\r\n.page-choose-template .skn-mta3.document var,\r\n.page-choose-template .skn-mta3.document b,\r\n.page-choose-template .skn-mta3.document u,\r\n.page-choose-template .skn-mta3.document i,\r\n.page-choose-template .skn-mta3.document center,\r\n.page-choose-template .skn-mta3.document dl,\r\n.page-choose-template .skn-mta3.document dt,\r\n.page-choose-template .skn-mta3.document dd,\r\n.page-choose-template .skn-mta3.document ol,\r\n.page-choose-template .skn-mta3.document ul,\r\n.page-choose-template .skn-mta3.document li,\r\n.page-choose-template .skn-mta3.document fieldset,\r\n.page-choose-template .skn-mta3.document form,\r\n.page-choose-template .skn-mta3.document label,\r\n.page-choose-template .skn-mta3.document legend,\r\n.page-choose-template .skn-mta3.document table,\r\n.page-choose-template .skn-mta3.document caption,\r\n.page-choose-template .skn-mta3.document tbody,\r\n.page-choose-template .skn-mta3.document tfoot,\r\n.page-choose-template .skn-mta3.document thead,\r\n.page-choose-template .skn-mta3.document tr,\r\n.page-choose-template .skn-mta3.document th,\r\n.page-choose-template .skn-mta3.document td {\r\n    /* margin: 0; */\r\n    /* padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline; */\r\n    /* background: transparent; */\r\n}\r\n\r\n.mes .page-choose-template .skn-mta3.document #SECTION_EDUC {\r\n    display: none;\r\n}\r\n\r\n.mfr .page-choose-template .skn-mta3.document #SECTION_EDUC,\r\n.mfr .page-choose-template .skn-mta3.document #SECTION_AWAR,\r\n.mfr .page-choose-template .skn-mta3.document #SECTION_CERT {\r\n    display: none\r\n}\r\n\r\n.page-choose-template .skn-mta3.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document ul {\r\n    list-style-image: url(" + c + ");\r\n}\r\n\r\n.page-choose-template .skn-mta3.document ul,\r\n.page-choose-template .skn-mta3.document li {\r\n    margin: 0 0 0 13px;\r\n    padding: 0;\r\n}\r\n\r\n/* .page-choose-template .skn-mta3.document ul li{\r\n    margin: 0 0 0 16px;\r\n    padding: 0 0 0 3px;\r\n} */\r\n.page-choose-template .skn-mta3.document .lowerborder {\r\n    padding-top: 1px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document div.SECTION_CNTC,\r\n.page-choose-template .skn-mta3.document div.SECTION_ALNK,\r\n.page-choose-template .skn-mta3.document div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document div.name {\r\n    font-size: inherit;\r\n    line-height: inherit;\r\n    font-weight: bold;\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document div.name span.fname {\r\n    text-transform: capitalize;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document div.heading {\r\n    clear: both;\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document div.address,\r\n.page-choose-template .skn-mta3.document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: inherit;\r\n    line-height: inherit;\r\n    overflow: hidden;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document div.adnlLnks {\r\n    text-align: center;\r\n    padding: 5px 0 10px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document div.adnlLnks ul,\r\n.page-choose-template .skn-mta3.document div.adnlLnks li {\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document div.adnlLnks li {\r\n    display: inline;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document div.adnlLnks li:before {\r\n    content: '•';\r\n    margin: 0 5px;\r\n    font-size: 1.25em;\r\n    position: relative;\r\n    top: 0.1em;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document div.adnlLnks li:first-child:before {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document span.jobtitle,\r\n.page-choose-template .skn-mta3.document span.degree,\r\n.page-choose-template .skn-mta3.document span.companyname_educ,\r\n.page-choose-template .skn-mta3.document span.programline,\r\n.page-choose-template .skn-mta3.document span.excComp {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document span.paddedline {\r\n    display: block;\r\n    clear: both;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document span.cdesc {\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .fltRight {\r\n    float: right;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document table {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document table.twocol td {\r\n    width: 50%;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document table.skills {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document table.skills th,\r\n.page-choose-template .skn-mta3.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document table.skills .skillname,\r\n.page-choose-template .skn-mta3.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document table.skills .skillyears,\r\n.page-choose-template .skn-mta3.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document table.skills .pad2,\r\n.page-choose-template .skn-mta3.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n/* .page-choose-template .skn-mta3.document div.resumeTitle, .page-choose-template .skn-mta3.document div.execRsmTitle{\r\n    font-weight: bold;\r\n    text-align: center;\r\n} */\r\n.page-choose-template .skn-mta3.document td.twocol_2 {\r\n    border-left: 1px solid #fefdfd;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .charspace {}\r\n\r\n.page-choose-template .skn-mta3.document .prflPic {\r\n    float: right;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .prflPic img {\r\n    vertical-align: top;\r\n    width: 99px;\r\n    height: 128px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .nmCntc {\r\n    margin-right: 99px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .prflSection,\r\n.page-choose-template .skn-mta3.document .prflWrapper {\r\n    overflow: hidden;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .prflSection {\r\n    padding: 1px 0;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .prflSection,\r\n.page-choose-template .skn-mta3.document .prflWrapper {\r\n    border-bottom: 1px solid;\r\n    border-top: 1px solid;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .cl-prfl-sec .nmCntc {\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .cl-prfl-sec .name {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .cl-prfl-sec .adrs-left,\r\n.page-choose-template .skn-mta3.document .cl-prfl-sec .adrs-right {\r\n    width: 50%;\r\n    float: left;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .cl-prfl-sec .adrs-right {\r\n    text-align: right;\r\n    float: left;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-mta3.document .signPic>.field_sign {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-mta3.document .disclaim .singlecolumn li,\r\n.page-choose-template .skn-mta3.document .disclaim .singlecolumn p,\r\n.page-choose-template .skn-mta3.document .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document {\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document table {\r\n    line-height: 17px;\r\n}\r\n\r\n/* .page-choose-template .skn-mta3.pagesize {\r\n    width: 536px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.vmargins {\r\n    padding-top: 42px;\r\n    padding-bottom: 42px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.hmargins {\r\n    padding-left: 62px;\r\n    padding-right: 62px;\r\n} */\r\n\r\n.page-choose-template .skn-mta3.document .section {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 50px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document div.heading {\r\n    margin-bottom: 0;\r\n}\r\n\r\n/* .page-choose-template .skn-mta3.document  div.paragraph{\r\n    margin-top: 5px;\r\n} */\r\n.page-choose-template .skn-mta3.document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .singlecolumn,\r\n.page-choose-template .skn-mta3.document .maincolumn {\r\n    margin-left: 0;\r\n    width: 536px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document div.sectiontitle {\r\n    font-size: 13px;\r\n    line-height: 19px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document table.skills td {\r\n    padding-top: 8px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.fontsize {\r\n    font-size: 11px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.fontface {\r\n    font-family: 'Times New Roman', serif;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document div.name {\r\n    font-size: 25px;\r\n    line-height: 49px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .thinbottomborder {\r\n    border-bottom: 1px solid;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .prflSection,\r\n.page-choose-template .skn-mta3.document .prflWrapper {\r\n    border-bottom: 1px solid;\r\n    border-top: 1px solid;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .lowerborder {}\r\n\r\n/* .page-choose-template .skn-mta3.document div.address{\r\n    font-size: 11px;\r\n    line-height: 22px;\r\n} */\r\n.page-choose-template .skn-mta3.document div.resumeTitle {\r\n    font-size: 13px;\r\n    line-height: 25px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document div.execRsmTitle {\r\n    font-size: 12px;\r\n    line-height: 18px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document span.compDescWrap {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .prflPic img {\r\n    margin: 12px 0;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document div.name,\r\n.page-choose-template .skn-mta3.document div.sectiontitle {\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .prflSection,\r\n.page-choose-template .skn-mta3.document .prflWrapper {\r\n    border-color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n    font-size: 11px;\r\n}\r\n\r\n.page-choose-template .skn-mta3.document div.address2 {\r\n    font-size: 11px;\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 html,\r\n.page-choose-template .skn-oxa1 body,\r\n.page-choose-template .skn-oxa1 div:not(.resumeTitle),\r\n.page-choose-template .skn-oxa1 span,\r\n.page-choose-template .skn-oxa1 applet,\r\n.page-choose-template .skn-oxa1 object,\r\n.page-choose-template .skn-oxa1 iframe,\r\n.page-choose-template .skn-oxa1 h1,\r\n.page-choose-template .skn-oxa1 h2,\r\n.page-choose-template .skn-oxa1 h3,\r\n.page-choose-template .skn-oxa1 h4,\r\n.page-choose-template .skn-oxa1 h5,\r\n.page-choose-template .skn-oxa1 h6,\r\n.page-choose-template .skn-oxa1 p,\r\n.page-choose-template .skn-oxa1 blockquote,\r\n.page-choose-template .skn-oxa1 pre,\r\n.page-choose-template .skn-oxa1 a,\r\n.page-choose-template .skn-oxa1 abbr,\r\n.page-choose-template .skn-oxa1 acronym,\r\n.page-choose-template .skn-oxa1 address,\r\n.page-choose-template .skn-oxa1 big,\r\n.page-choose-template .skn-oxa1 cite,\r\n.page-choose-template .skn-oxa1 code,\r\n.page-choose-template .skn-oxa1 del,\r\n.page-choose-template .skn-oxa1 dfn,\r\n.page-choose-template .skn-oxa1 em,\r\n.page-choose-template .skn-oxa1 font,\r\n.page-choose-template .skn-oxa1 img,\r\n.page-choose-template .skn-oxa1 ins,\r\n.page-choose-template .skn-oxa1 kbd,\r\n.page-choose-template .skn-oxa1 q,\r\n.page-choose-template .skn-oxa1 s,\r\n.page-choose-template .skn-oxa1 samp,\r\n.page-choose-template .skn-oxa1 small,\r\n.page-choose-template .skn-oxa1 strike,\r\n.page-choose-template .skn-oxa1 strong,\r\n.page-choose-template .skn-oxa1 sub,\r\n.page-choose-template .skn-oxa1 sup,\r\n.page-choose-template .skn-oxa1 tt,\r\n.page-choose-template .skn-oxa1 var,\r\n.page-choose-template .skn-oxa1 b,\r\n.page-choose-template .skn-oxa1 u,\r\n.page-choose-template .skn-oxa1 i,\r\n.page-choose-template .skn-oxa1 center,\r\n.page-choose-template .skn-oxa1 dl,\r\n.page-choose-template .skn-oxa1 dt,\r\n.page-choose-template .skn-oxa1 dd,\r\n.page-choose-template .skn-oxa1 ol,\r\n.page-choose-template .skn-oxa1 ul,\r\n.page-choose-template .skn-oxa1 li,\r\n.page-choose-template .skn-oxa1 fieldset,\r\n.page-choose-template .skn-oxa1 form,\r\n.page-choose-template .skn-oxa1 label,\r\n.page-choose-template .skn-oxa1 legend,\r\n.page-choose-template .skn-oxa1 table,\r\n.page-choose-template .skn-oxa1 caption,\r\n.page-choose-template .skn-oxa1 tbody,\r\n.page-choose-template .skn-oxa1 tfoot,\r\n.page-choose-template .skn-oxa1 thead,\r\n.page-choose-template .skn-oxa1 tr,\r\n.page-choose-template .skn-oxa1 th,\r\n.page-choose-template .skn-oxa1 td {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    background: transparent;\r\n}\r\n\r\n.mit .page-choose-template .skn-oxa1 #SECTION_AWAR,\r\n.mit .page-choose-template .skn-oxa1 #SECTION_CERT {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 ul,\r\n.page-choose-template .skn-oxa1 li {\r\n    list-style-type: square;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 ul li {\r\n    margin: 0 0 0 13px;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .lowerborder {\r\n    margin-top: 2px;\r\n    border-bottom: 3px solid;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.name {\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    font-weight: bold;\r\n    background-color: #000;\r\n    padding: 10px 0;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.heading {\r\n    clear: both;\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.address {\r\n    position: relative;\r\n    text-align: center;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin-top: 0;\r\n    background-color: #f1eded;\r\n    color: #000;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.address ul {\r\n    display: inline-block;\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.address ul li {\r\n    list-style: square inside none;\r\n    width: 3px;\r\n    margin: 0 2px;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.adnlLnks {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.adnlLnks ul {\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.adnlLnks li {\r\n    display: inline !important;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 span.jobtitle,\r\n.page-choose-template .skn-oxa1 span.degree {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 span.companyname,\r\n.page-choose-template .skn-oxa1 span.jobcity,\r\n.page-choose-template .skn-oxa1 span.jobstate {\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .datesWrapper {\r\n    float: right;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 table.twocol td {\r\n    width: 50%;\r\n    vertical-align: top;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 table.skills,\r\n.page-choose-template .skn-oxa1 table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 table.skills th,\r\n.page-choose-template .skn-oxa1 table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 table.skills .skillname,\r\n.page-choose-template .skn-oxa1 table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 table.skills .skillyears,\r\n.page-choose-template .skn-oxa1 table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 table.skills .pad2,\r\n.page-choose-template .skn-oxa1 table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .section-prfl,\r\n.page-choose-template .skn-oxa1 .section-clprfl {\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.thinbottomborder {\r\n    border-bottom: 1px solid !important;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.sectiontitle {\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 body {\r\n    font-feature-settings: 'liga' 0;\r\n    -moz-font-feature-settings: 'liga' off;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .disclaim .singlecolumn,\r\n.page-choose-template .skn-oxa1 .signPic>.field_sign {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .disclaim .singlecolumn,\r\n.page-choose-template .skn-oxa1 .disclaim .singlecolumn li,\r\n.page-choose-template .skn-oxa1 .disclaim .singlecolumn p,\r\n.page-choose-template .skn-oxa1 .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .lgtBg {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 {\r\n    line-height: 18px;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 table {\r\n    line-height: 18px;\r\n}\r\n\r\n/* .page-choose-template .skn-oxa1.pagesize{\r\n    width: 576px;\r\n}\r\n.page-choose-template .skn-oxa1.vmargins{\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n.page-choose-template .skn-oxa1.hmargins{\r\n    padding-left: 42px;\r\n    padding-right: 42px;\r\n} */\r\n/* .page-choose-template .skn-oxa1  .section{\r\n    margin-top: 14px;\r\n} */\r\n.page-choose-template .skn-oxa1 .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 70px;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.SECTION_CNTC,\r\n.page-choose-template .skn-oxa1 div.SECTION_ALNK {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.heading {\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.paragraph {\r\n    margin-top: 14px;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .singlecolumn,\r\n.page-choose-template .skn-oxa1 .maincolumn {\r\n    margin-left: 0;\r\n    width: 576px;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .thinbottomborder {\r\n    border-bottom: px solid;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.sectiontitle {\r\n    font-size: 13px;\r\n    line-height: 25px;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 table.skills td {\r\n    padding-top: 7px;\r\n}\r\n\r\n.page-choose-template .skn-oxa1.fontsize {\r\n    font-size: 12px;\r\n}\r\n\r\n.page-choose-template .skn-oxa1.fontface {\r\n    font-family: 'Palatino Linotype', sans-serif;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.name {\r\n    font-size: 21px;\r\n    line-height: 33px;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.address {\r\n    font-size: 12px;\r\n    line-height: 24px;\r\n    padding-top: 6px;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.name {\r\n    font-size: 21px;\r\n    line-height: 33px;\r\n    background-color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .lgtBg {\r\n    background-color: SDCL;\r\n    opacity: 0.2;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-oxa1 div.address2 {\r\n    font-size: 12px;\r\n    line-height: 18px;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document html,\r\n.page-choose-template .skn-pca1.document body,\r\n.page-choose-template .skn-pca1.document div:not(.resumeTitle),\r\n.page-choose-template .skn-pca1.document span,\r\n.page-choose-template .skn-pca1.document applet,\r\n.page-choose-template .skn-pca1.document object,\r\n.page-choose-template .skn-pca1.document iframe,\r\n.page-choose-template .skn-pca1.document h1,\r\n.page-choose-template .skn-pca1.document h2,\r\n.page-choose-template .skn-pca1.document h3,\r\n.page-choose-template .skn-pca1.document h4,\r\n.page-choose-template .skn-pca1.document h5,\r\n.page-choose-template .skn-pca1.document h6,\r\n.page-choose-template .skn-pca1.document p,\r\n.page-choose-template .skn-pca1.document blockquote,\r\n.page-choose-template .skn-pca1.document pre,\r\n.page-choose-template .skn-pca1.document a,\r\n.page-choose-template .skn-pca1.document abbr,\r\n.page-choose-template .skn-pca1.document acronym,\r\n.page-choose-template .skn-pca1.document address,\r\n.page-choose-template .skn-pca1.document big,\r\n.page-choose-template .skn-pca1.document cite,\r\n.page-choose-template .skn-pca1.document code,\r\n.page-choose-template .skn-pca1.document del,\r\n.page-choose-template .skn-pca1.document dfn,\r\n.page-choose-template .skn-pca1.document em,\r\n.page-choose-template .skn-pca1.document font,\r\n.page-choose-template .skn-pca1.document img,\r\n.page-choose-template .skn-pca1.document ins,\r\n.page-choose-template .skn-pca1.document kbd,\r\n.page-choose-template .skn-pca1.document q,\r\n.page-choose-template .skn-pca1.document s,\r\n.page-choose-template .skn-pca1.document samp,\r\n.page-choose-template .skn-pca1.document small,\r\n.page-choose-template .skn-pca1.document strike,\r\n.page-choose-template .skn-pca1.document strong,\r\n.page-choose-template .skn-pca1.document sub,\r\n.page-choose-template .skn-pca1.document sup,\r\n.page-choose-template .skn-pca1.document tt,\r\n.page-choose-template .skn-pca1.document var,\r\n.page-choose-template .skn-pca1.document b,\r\n.page-choose-template .skn-pca1.document u,\r\n.page-choose-template .skn-pca1.document i,\r\n.page-choose-template .skn-pca1.document center,\r\n.page-choose-template .skn-pca1.document dl,\r\n.page-choose-template .skn-pca1.document dt,\r\n.page-choose-template .skn-pca1.document dd,\r\n.page-choose-template .skn-pca1.document ol,\r\n.page-choose-template .skn-pca1.document ul,\r\n.page-choose-template .skn-pca1.document li,\r\n.page-choose-template .skn-pca1.document fieldset,\r\n.page-choose-template .skn-pca1.document form,\r\n.page-choose-template .skn-pca1.document label,\r\n.page-choose-template .skn-pca1.document legend,\r\n.page-choose-template .skn-pca1.document table,\r\n.page-choose-template .skn-pca1.document caption,\r\n.page-choose-template .skn-pca1.document tbody,\r\n.page-choose-template .skn-pca1.document tfoot,\r\n.page-choose-template .skn-pca1.document thead,\r\n.page-choose-template .skn-pca1.document tr,\r\n.page-choose-template .skn-pca1.document th,\r\n.page-choose-template .skn-pca1.document td {\r\n    /* margin: 0; */\r\n    /* padding: 0; */\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    /* background: transparent; */\r\n}\r\n\r\n.page-choose-template .skn-pca1.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.mes .page-choose-template .skn-pca1.document #SECTION_CERT {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document ul,\r\n.page-choose-template .skn-pca1.document li {\r\n    list-style-type: disc;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document ul li {\r\n    margin: 0 0 0 13px;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .lowerborder {\r\n    margin-top: 2px;\r\n    border-bottom: 3px solid;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.name {\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    font-weight: bold;\r\n    background-color: #1d4871;\r\n    padding: 10px 0;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.heading {\r\n    clear: both;\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.address {\r\n    position: relative;\r\n    text-align: center;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin: 0;\r\n    background-color: #d0e1f4;\r\n    color: #336;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.address li,\r\n.page-choose-template .skn-pca1.document div.address ul,\r\n.page-choose-template .skn-pca1.document div.adnlLnks li,\r\n.page-choose-template .skn-pca1.document div.adnlLnks ul {\r\n    display: inline;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.adnlLnks {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.address li:before,\r\n.page-choose-template .skn-pca1.document div.adnlLnks li:before {\r\n    content: '•';\r\n    vertical-align: bottom;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.address li.first:before,\r\n.page-choose-template .skn-pca1.document div.adnlLnks li.first:before {\r\n    content: '';\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.adnlLnks li:before {\r\n    margin-right: 3px;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document span.jobtitle,\r\n.page-choose-template .skn-pca1.document span.companyname,\r\n.page-choose-template .skn-pca1.document span.degree {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .datesWrapper {\r\n    float: right;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document table.twocol td {\r\n    width: 50%;\r\n    vertical-align: top;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document table.skills,\r\n.page-choose-template .skn-pca1.document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document table.skills th,\r\n.page-choose-template .skn-pca1.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document table.skills .skillname,\r\n.page-choose-template .skn-pca1.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document table.skills .skillyears,\r\n.page-choose-template .skn-pca1.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document table.skills .pad2,\r\n.page-choose-template .skn-pca1.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .section-prfl,\r\n.page-choose-template .skn-pca1.document .section-clprfl {\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.thinbottomborder {\r\n    border-bottom: 1px solid !important;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.sectiontitle {\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document body {\r\n    font-feature-settings: 'liga' 0;\r\n    -moz-font-feature-settings: 'liga' off;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-pca1.document .signPic>.field_sign {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-pca1.document .disclaim .singlecolumn li,\r\n.page-choose-template .skn-pca1.document .disclaim .singlecolumn p,\r\n.page-choose-template .skn-pca1.document .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .lgtBg {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document {\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document table {\r\n    line-height: 17px;\r\n}\r\n\r\n/* .page-choose-template .skn-pca1.pagesize{\r\n    width: 576px;\r\n}\r\n.page-choose-template .skn-pca1.vmargins{\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n.page-choose-template .skn-pca1.hmargins{\r\n    padding-left: 42px;\r\n    padding-right: 42px;\r\n} */\r\n.page-choose-template .skn-pca1.document .section {\r\n    margin-top: 14px;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 70px;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.SECTION_CNTC,\r\n.page-choose-template .skn-pca1.document div.SECTION_ALNK {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.heading {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.paragraph {\r\n    margin-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .singlecolumn,\r\n.page-choose-template .skn-pca1.document .maincolumn {\r\n    margin-left: 0;\r\n    width: 576px;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .thinbottomborder {\r\n    border-bottom: px solid;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.sectiontitle {\r\n    font-size: 12px;\r\n    line-height: 24px;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document table.skills td {\r\n    padding-top: 5px;\r\n}\r\n\r\n/* .page-choose-template .skn-pca1.fontsize{\r\n    font-size: 11px;\r\n}\r\n.page-choose-template .skn-pca1.fontface{\r\n    font-family: Arial;\r\n} */\r\n.page-choose-template .skn-pca1.document div.name {\r\n    font-size: 22px;\r\n    line-height: 34px;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.address {\r\n    font-size: 11px;\r\n    line-height: 23px;\r\n    padding-top: 6px;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.address li:before {\r\n    font-size: 13px;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.name {\r\n    font-size: 22px;\r\n    line-height: 34px;\r\n    background-color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .lgtBg {\r\n    background-color: SDCL;\r\n    opacity: 0.2;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-pca1.document div.address2 {\r\n    font-size: 11px;\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document html,\r\n.page-choose-template .skn-sma1.document body,\r\n.page-choose-template .skn-sma1.document div,\r\n.page-choose-template .skn-sma1.document span,\r\n.page-choose-template .skn-sma1.document applet,\r\n.page-choose-template .skn-sma1.document object,\r\n.page-choose-template .skn-sma1.document iframe,\r\n.page-choose-template .skn-sma1.document h1,\r\n.page-choose-template .skn-sma1.document h2,\r\n.page-choose-template .skn-sma1.document h3,\r\n.page-choose-template .skn-sma1.document h4,\r\n.page-choose-template .skn-sma1.document h5,\r\n.page-choose-template .skn-sma1.document h6,\r\n.page-choose-template .skn-sma1.document p,\r\n.page-choose-template .skn-sma1.document blockquote,\r\n.page-choose-template .skn-sma1.document pre,\r\n.page-choose-template .skn-sma1.document a,\r\n.page-choose-template .skn-sma1.document abbr,\r\n.page-choose-template .skn-sma1.document acronym,\r\n.page-choose-template .skn-sma1.document address,\r\n.page-choose-template .skn-sma1.document big,\r\n.page-choose-template .skn-sma1.document cite,\r\n.page-choose-template .skn-sma1.document code,\r\n.page-choose-template .skn-sma1.document del,\r\n.page-choose-template .skn-sma1.document dfn,\r\n.page-choose-template .skn-sma1.document em,\r\n.page-choose-template .skn-sma1.document font,\r\n.page-choose-template .skn-sma1.document img,\r\n.page-choose-template .skn-sma1.document ins,\r\n.page-choose-template .skn-sma1.document kbd,\r\n.page-choose-template .skn-sma1.document q,\r\n.page-choose-template .skn-sma1.document s,\r\n.page-choose-template .skn-sma1.document samp,\r\n.page-choose-template .skn-sma1.document small,\r\n.page-choose-template .skn-sma1.document strike,\r\n.page-choose-template .skn-sma1.document strong,\r\n.page-choose-template .skn-sma1.document sub,\r\n.page-choose-template .skn-sma1.document sup,\r\n.page-choose-template .skn-sma1.document tt,\r\n.page-choose-template .skn-sma1.document var,\r\n.page-choose-template .skn-sma1.document b,\r\n.page-choose-template .skn-sma1.document u,\r\n.page-choose-template .skn-sma1.document i,\r\n.page-choose-template .skn-sma1.document center,\r\n.page-choose-template .skn-sma1.document dl,\r\n.page-choose-template .skn-sma1.document dt,\r\n.page-choose-template .skn-sma1.document dd,\r\n.page-choose-template .skn-sma1.document ol,\r\n.page-choose-template .skn-sma1.document ul,\r\n.page-choose-template .skn-sma1.document li,\r\n.page-choose-template .skn-sma1.document fieldset,\r\n.page-choose-template .skn-sma1.document form,\r\n.page-choose-template .skn-sma1.document label,\r\n.page-choose-template .skn-sma1.document legend,\r\n.page-choose-template .skn-sma1.document table,\r\n.page-choose-template .skn-sma1.document caption,\r\n.page-choose-template .skn-sma1.document tbody,\r\n.page-choose-template .skn-sma1.document tfoot,\r\n.page-choose-template .skn-sma1.document thead,\r\n.page-choose-template .skn-sma1.document tr,\r\n.page-choose-template .skn-sma1.document th,\r\n.page-choose-template .skn-sma1.document td {\r\n    /* margin: 0; */\r\n    /* padding: 0; */\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    /* background: transparent; */\r\n}\r\n\r\n.page-choose-template .skn-sma1.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document body {\r\n    line-height: 1;\r\n    background: #fff;\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document ol,\r\n.page-choose-template .skn-sma1.document ul {\r\n    list-style: none;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document blockquote,\r\n.page-choose-template .skn-sma1.document q {\r\n    quotes: none;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document blockquote:before,\r\n.page-choose-template .skn-sma1.document blockquote:after,\r\n.page-choose-template .skn-sma1.document q:before,\r\n.page-choose-template .skn-sma1.document q:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document :focus {\r\n    outline: 0;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document ins {\r\n    text-decoration: none;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document del {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document a img {\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document ul,\r\n.page-choose-template .skn-sma1.document li {\r\n    list-style: none;\r\n    margin: 0 0 0 8px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document ul li {\r\n    position: relative;\r\n    margin: 0 0 0 5px;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document ul li:before {\r\n    content: '● ';\r\n    position: absolute;\r\n    left: -13px;\r\n    top: 0;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document .clear {\r\n    clear: both;\r\n    height: 0;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document br.clear {\r\n    line-height: 0;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document {\r\n    color: #231f20;\r\n    background-color: #fff !important;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document div.name {\r\n    font-family: 'Palatino Linotype', sans-serif;\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    padding: 0 0 10px 0;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    color: #000;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document div.heading {\r\n    font-family: 'Palatino Linotype', sans-serif;\r\n    clear: both;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document div.sectiontitle {\r\n    color: #000;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document div.address {\r\n    position: relative;\r\n    text-align: center;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document span.paddedline {\r\n    display: block;\r\n    clear: both;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document table.twocol td {\r\n    width: 50%;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document table.skills,\r\n.page-choose-template .skn-sma1.document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document table.skills th,\r\n.page-choose-template .skn-sma1.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document table.skills .skillname,\r\n.page-choose-template .skn-sma1.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document table.skills .skillyears,\r\n.page-choose-template .skn-sma1.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document table.skills .pad2,\r\n.page-choose-template .skn-sma1.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document td.twocol_2 {\r\n    border-left: 1px solid #fefdfd;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document div.address {\r\n    padding: 0 0 15px 0;\r\n    border-bottom: 1px dashed #ccc;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document .txtBold {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document .txtRglr {\r\n    font-weight: normal;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document .txtCaps {\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document .locationGap {\r\n    margin-bottom: 3px;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document {\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document table {\r\n    line-height: 17px;\r\n}\r\n\r\n/* .page-choose-template .skn-sma1.pagesize {\r\n    width: 596px;\r\n}\r\n\r\n.page-choose-template .skn-sma1.vmargins {\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n\r\n.page-choose-template .skn-sma1.hmargins {\r\n    padding-left: 32px;\r\n    padding-right: 32px;\r\n} */\r\n\r\n.page-choose-template .skn-sma1.document .section {\r\n    margin-top: 11px;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document div.heading {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n/* .page-choose-template .skn-sma1.document  div.paragraph{\r\n    margin-top: 10px;\r\n} */\r\n.page-choose-template .skn-sma1.document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document .singlecolumn,\r\n.page-choose-template .skn-sma1.document .maincolumn {\r\n    margin-left: 35px;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document div.sectiontitle {\r\n    font-size: 13px;\r\n    line-height: 18px;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document table.skills td {\r\n    padding-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-sma1.fontsize {\r\n    font-size: 12px;\r\n}\r\n\r\n.page-choose-template .skn-sma1.fontface {\r\n    font-family: 'Century Gothic', sans-serif;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document div.name {\r\n    font-size: 38px;\r\n    line-height: 38px;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document div.address {\r\n    font-size: 11px;\r\n    line-height: 16px;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document div.name,\r\n.page-choose-template .skn-sma1.document div.sectiontitle {\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n    font-size: 12px;\r\n}\r\n\r\n.page-choose-template .skn-sma1.document div.address2 {\r\n    font-size: 12px;\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document html,\r\n.page-choose-template .skn-sma2.document body,\r\n.page-choose-template .skn-sma2.document div,\r\n.page-choose-template .skn-sma2.document span,\r\n.page-choose-template .skn-sma2.document applet,\r\n.page-choose-template .skn-sma2.document object,\r\n.page-choose-template .skn-sma2.document iframe,\r\n.page-choose-template .skn-sma2.document h1,\r\n.page-choose-template .skn-sma2.document h2,\r\n.page-choose-template .skn-sma2.document h3,\r\n.page-choose-template .skn-sma2.document h4,\r\n.page-choose-template .skn-sma2.document h5,\r\n.page-choose-template .skn-sma2.document h6,\r\n.page-choose-template .skn-sma2.document p,\r\n.page-choose-template .skn-sma2.document blockquote,\r\n.page-choose-template .skn-sma2.document pre,\r\n.page-choose-template .skn-sma2.document a,\r\n.page-choose-template .skn-sma2.document abbr,\r\n.page-choose-template .skn-sma2.document acronym,\r\n.page-choose-template .skn-sma2.document address,\r\n.page-choose-template .skn-sma2.document big,\r\n.page-choose-template .skn-sma2.document cite,\r\n.page-choose-template .skn-sma2.document code,\r\n.page-choose-template .skn-sma2.document del,\r\n.page-choose-template .skn-sma2.document dfn,\r\n.page-choose-template .skn-sma2.document em,\r\n.page-choose-template .skn-sma2.document font,\r\n.page-choose-template .skn-sma2.document img,\r\n.page-choose-template .skn-sma2.document ins,\r\n.page-choose-template .skn-sma2.document kbd,\r\n.page-choose-template .skn-sma2.document q,\r\n.page-choose-template .skn-sma2.document s,\r\n.page-choose-template .skn-sma2.document samp,\r\n.page-choose-template .skn-sma2.document small,\r\n.page-choose-template .skn-sma2.document strike,\r\n.page-choose-template .skn-sma2.document strong,\r\n.page-choose-template .skn-sma2.document sub,\r\n.page-choose-template .skn-sma2.document sup,\r\n.page-choose-template .skn-sma2.document tt,\r\n.page-choose-template .skn-sma2.document var,\r\n.page-choose-template .skn-sma2.document b,\r\n.page-choose-template .skn-sma2.document u,\r\n.page-choose-template .skn-sma2.document i,\r\n.page-choose-template .skn-sma2.document center,\r\n.page-choose-template .skn-sma2.document dl,\r\n.page-choose-template .skn-sma2.document dt,\r\n.page-choose-template .skn-sma2.document dd,\r\n.page-choose-template .skn-sma2.document ol,\r\n.page-choose-template .skn-sma2.document ul,\r\n.page-choose-template .skn-sma2.document li,\r\n.page-choose-template .skn-sma2.document fieldset,\r\n.page-choose-template .skn-sma2.document form,\r\n.page-choose-template .skn-sma2.document label,\r\n.page-choose-template .skn-sma2.document legend,\r\n.page-choose-template .skn-sma2.document table,\r\n.page-choose-template .skn-sma2.document caption,\r\n.page-choose-template .skn-sma2.document tbody,\r\n.page-choose-template .skn-sma2.document tfoot,\r\n.page-choose-template .skn-sma2.document thead,\r\n.page-choose-template .skn-sma2.document tr,\r\n.page-choose-template .skn-sma2.document th,\r\n.page-choose-template .skn-sma2.document td {\r\n    /* margin: 0; */\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    /* background: transparent; */\r\n}\r\n\r\n.page-choose-template .skn-sma2.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document body {\r\n    line-height: 1;\r\n    background: #fff;\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document ol,\r\n.page-choose-template .skn-sma2.document ul {\r\n    list-style: none;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document blockquote,\r\n.page-choose-template .skn-sma2.document q {\r\n    quotes: none;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document blockquote:before,\r\n.page-choose-template .skn-sma2.document blockquote:after,\r\n.page-choose-template .skn-sma2.document q:before,\r\n.page-choose-template .skn-sma2.document q:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document :focus {\r\n    outline: 0;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document ins {\r\n    text-decoration: none;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document del {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document a img {\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document ul,\r\n.page-choose-template .skn-sma2.document li {\r\n    list-style: none;\r\n    margin: 0 0 0 8px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document ul li {\r\n    position: relative;\r\n    margin: 0 0 0 5px;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document ul li:before {\r\n    content: '● ';\r\n    position: absolute;\r\n    left: -13px;\r\n    top: 0;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document .clear {\r\n    clear: both;\r\n    height: 0;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document br.clear {\r\n    line-height: 0;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document {\r\n    color: #4a4a4a;\r\n    background-color: #fff !important;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document div.sectiontitle {\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document div.SECTION_CNTC,\r\n.page-choose-template .skn-sma2.document div.firstsection {\r\n    border: none;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document .sectiontitle,\r\n.page-choose-template .skn-sma2.document .singlecolumn,\r\n.page-choose-template .skn-sma2.document .maincolumn,\r\n.page-choose-template .skn-sma2.document .parlrColmn {\r\n    padding: 0 10px;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document .parlrColmn .singlecolumn {\r\n    padding: 0 0 0 10px;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document div.name {\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    padding: 0;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document div.heading {\r\n    /* background-color: #bcbfc3; */\r\n    clear: both;\r\n    font-weight: normal;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document div.address {\r\n    position: relative;\r\n    text-align: center;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document table.twocol td {\r\n    width: 50%;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document table.skills,\r\n.page-choose-template .skn-sma2.document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document table.skills th,\r\n.page-choose-template .skn-sma2.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document table.skills .skillname,\r\n.page-choose-template .skn-sma2.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document table.skills .skillyears,\r\n.page-choose-template .skn-sma2.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document table.skills .pad2,\r\n.page-choose-template .skn-sma2.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document td.twocol_2 {\r\n    border-left: 1px solid #fefdfd;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document .txtReglr {\r\n    font-weight: regular;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document .txtBold {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document .parlrColmn {\r\n    clear: both;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document span.dates_wrapper {\r\n    display: block;\r\n    float: left;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document .adnlLnks {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document .sectionCL .paragraph {\r\n    padding-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document .sprtr+.sprtr {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document {\r\n    line-height: 17px;\r\n}\r\n\r\n/*\r\n.page-choose-template .skn-sma2.document table {\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-sma2.pagesize {\r\n    width: 596px;\r\n}\r\n\r\n.page-choose-template .skn-sma2.vmargins {\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n\r\n.page-choose-template .skn-sma2.hmargins {\r\n    padding-left: 32px;\r\n    padding-right: 32px;\r\n} */\r\n\r\n.page-choose-template .skn-sma2.document .section {\r\n    padding-top: 5px !important;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document div.sectiontitle {\r\n    font-size: 13px;\r\n    line-height: 18px;\r\n}\r\n\r\n/* .page-choose-template .skn-sma2.document  div.paragraph{\r\n    padding-top: 10px !important;\r\n} */\r\n.page-choose-template .skn-sma2.document div.firstparagraph {\r\n    padding-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document .singlecolumn,\r\n.page-choose-template .skn-sma2.document .maincolumn {\r\n    margin-left: 0;\r\n    width: 576px;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document table.skills td {\r\n    padding-top: 5px;\r\n}\r\n\r\n/* .page-choose-template .skn-sma2.fontsize {\r\n    font-size: 12px;\r\n}\r\n\r\n.page-choose-template .skn-sma2.fontface {\r\n    font-family: 'Century Gothic',sans-serif;\r\n} */\r\n\r\n.page-choose-template .skn-sma2.document div.name {\r\n    font-size: 41px;\r\n    line-height: 46px;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document div.address {\r\n    font-size: 12px;\r\n    line-height: 17px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document span.dates_wrapper {\r\n    width: 185px;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document .parlrColmn .singlecolumn {\r\n    margin-left: 185px;\r\n    width: auto;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document div.heading {\r\n    /* background-color: SDCL; */\r\n}\r\n\r\n.page-choose-template .skn-sma2.document .sectionCL {\r\n    border: none;\r\n    padding-top: none;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-sma2.document div.address2 {\r\n    font-size: 12px;\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document html,\r\n.page-choose-template .skn-tma3.document body,\r\n.page-choose-template .skn-tma3.document div,\r\n.page-choose-template .skn-tma3.document span,\r\n.page-choose-template .skn-tma3.document applet,\r\n.page-choose-template .skn-tma3.document object,\r\n.page-choose-template .skn-tma3.document iframe,\r\n.page-choose-template .skn-tma3.document h1,\r\n.page-choose-template .skn-tma3.document h2,\r\n.page-choose-template .skn-tma3.document h3,\r\n.page-choose-template .skn-tma3.document h4,\r\n.page-choose-template .skn-tma3.document h5,\r\n.page-choose-template .skn-tma3.document h6,\r\n.page-choose-template .skn-tma3.document p,\r\n.page-choose-template .skn-tma3.document blockquote,\r\n.page-choose-template .skn-tma3.document pre,\r\n.page-choose-template .skn-tma3.document a,\r\n.page-choose-template .skn-tma3.document abbr,\r\n.page-choose-template .skn-tma3.document acronym,\r\n.page-choose-template .skn-tma3.document address,\r\n.page-choose-template .skn-tma3.document big,\r\n.page-choose-template .skn-tma3.document cite,\r\n.page-choose-template .skn-tma3.document code,\r\n.page-choose-template .skn-tma3.document del,\r\n.page-choose-template .skn-tma3.document dfn,\r\n.page-choose-template .skn-tma3.document em,\r\n.page-choose-template .skn-tma3.document font,\r\n.page-choose-template .skn-tma3.document img,\r\n.page-choose-template .skn-tma3.document ins,\r\n.page-choose-template .skn-tma3.document kbd,\r\n.page-choose-template .skn-tma3.document q,\r\n.page-choose-template .skn-tma3.document s,\r\n.page-choose-template .skn-tma3.document samp,\r\n.page-choose-template .skn-tma3.document small,\r\n.page-choose-template .skn-tma3.document strike,\r\n.page-choose-template .skn-tma3.document strong,\r\n.page-choose-template .skn-tma3.document sub,\r\n.page-choose-template .skn-tma3.document sup,\r\n.page-choose-template .skn-tma3.document tt,\r\n.page-choose-template .skn-tma3.document var,\r\n.page-choose-template .skn-tma3.document b,\r\n.page-choose-template .skn-tma3.document u,\r\n.page-choose-template .skn-tma3.document i,\r\n.page-choose-template .skn-tma3.document center,\r\n.page-choose-template .skn-tma3.document dl,\r\n.page-choose-template .skn-tma3.document dt,\r\n.page-choose-template .skn-tma3.document dd,\r\n.page-choose-template .skn-tma3.document ol,\r\n.page-choose-template .skn-tma3.document ul,\r\n.page-choose-template .skn-tma3.document li,\r\n.page-choose-template .skn-tma3.document fieldset,\r\n.page-choose-template .skn-tma3.document form,\r\n.page-choose-template .skn-tma3.document label,\r\n.page-choose-template .skn-tma3.document legend,\r\n.page-choose-template .skn-tma3.document table,\r\n.page-choose-template .skn-tma3.document caption,\r\n.page-choose-template .skn-tma3.document tbody,\r\n.page-choose-template .skn-tma3.document tfoot,\r\n.page-choose-template .skn-tma3.document thead,\r\n.page-choose-template .skn-tma3.document tr,\r\n.page-choose-template .skn-tma3.document th,\r\n.page-choose-template .skn-tma3.document td {\r\n    /* margin: 0; */\r\n    /* padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline; */\r\n    /* background: transparent; */\r\n}\r\n\r\n.mes .page-choose-template .skn-tma3.document #SECTION_EDUC,\r\n.mes .page-choose-template .skn-tma3.document #SECTION_AWAR,\r\n.mes .page-choose-template .skn-tma3.document #SECTION_CERT {\r\n    display: none\r\n}\r\n\r\n.mfr .page-choose-template .skn-tma3.document #SECTION_EDUC,\r\n.mfr .page-choose-template .skn-tma3.document #SECTION_AWAR,\r\n.mfr .page-choose-template .skn-tma3.document #SECTION_CERT {\r\n    display: none\r\n}\r\n\r\n.page-choose-template .skn-tma3.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document body {\r\n    line-height: 1;\r\n    background: #fff;\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document ol,\r\n.page-choose-template .skn-tma3.document ul {\r\n    list-style: none;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document blockquote,\r\n.page-choose-template .skn-tma3.document q {\r\n    quotes: none;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document blockquote:before,\r\n.page-choose-template .skn-tma3.document blockquote:after,\r\n.page-choose-template .skn-tma3.document q:before,\r\n.page-choose-template .skn-tma3.document q:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document :focus {\r\n    outline: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document ins {\r\n    text-decoration: none;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document del {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document a img {\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document ul,\r\n.page-choose-template .skn-tma3.document li {\r\n    list-style-type: disc;\r\n    margin: 5px 0 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document ul li {\r\n    margin: 0 0 0 13px;\r\n    padding: 0 0 0 10px;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document .clear {\r\n    clear: both;\r\n    height: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document br.clear {\r\n    line-height: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document {\r\n    color: #343b40;\r\n    background-color: #fff !important;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document div.name {\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    padding: 0;\r\n    text-align: left;\r\n    letter-spacing: 1px;\r\n    color: #343b40;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document div.address {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document table.twocol td {\r\n    width: 50%;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document table.skills,\r\n.page-choose-template .skn-tma3.document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document table.skills th,\r\n.page-choose-template .skn-tma3.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document table.skills .skillname,\r\n.page-choose-template .skn-tma3.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document table.skills .skillyears,\r\n.page-choose-template .skn-tma3.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document table.skills .pad2,\r\n.page-choose-template .skn-tma3.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n/* .page-choose-template .skn-tma3.document .heading {\r\n    clear: both;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    color: #343b40;\r\n} */\r\n\r\n.page-choose-template .skn-tma3.document div.sectiontitle {\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document .jobtitle,\r\n.page-choose-template .skn-tma3.document .degree {\r\n    font-weight: bold;\r\n    color: #343b40;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document .companyname,\r\n.page-choose-template .skn-tma3.document .programline {\r\n    color: #343b40;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document .datesWrapper {\r\n    float: right;\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n/* .page-choose-template .skn-tma3.document .section {\r\n    border-left: 1px solid #434d54;\r\n    padding-left: 20px;\r\n    margin-left: 17px;\r\n    position: relative;\r\n} */\r\n\r\n.page-choose-template .skn-tma3.document div.firstsection,\r\n.page-choose-template .skn-tma3.document div.SECTION_CNTC,\r\n.page-choose-template .skn-tma3.document div.firstsection,\r\n.page-choose-template .skn-tma3.document div.SECTION_ALNK {\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document div.SECTION_CNTC+.section:before,\r\n.page-choose-template .skn-tma3.document div.SECTION_ALNK+.section:before {\r\n    content: '';\r\n    top: 0;\r\n    left: -1px;\r\n    width: 2px;\r\n    height: 5px;\r\n    background: #fff;\r\n    position: absolute;\r\n    z-index: 1;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document div.firstsection {\r\n    padding-bottom: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document div.heading {\r\n    position: relative;\r\n}\r\n\r\n/* .page-choose-template .skn-tma3.document div.heading:before {\r\n    display: block;\r\n    position: absolute;\r\n    top: 4px;\r\n    left: -25px;\r\n    content: '';\r\n    height: 8px;\r\n    width: 8px;\r\n    border: 1px solid #434d54;\r\n    border-radius: 100%;\r\n    background: #fff;\r\n    z-index: 2;\r\n} */\r\n\r\n.page-choose-template .skn-tma3.document div.SortableItem:nth-of-type(0n+2) .section:before {\r\n    content: '';\r\n    top: 0;\r\n    left: -1px;\r\n    width: 2px;\r\n    height: 5px;\r\n    background: #fff;\r\n    position: absolute;\r\n    z-index: 1;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document {\r\n    line-height: 17px;\r\n}\r\n\r\n/* .page-choose-template .skn-tma3.document table {\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-tma3.pagesize {\r\n    width: 596px;\r\n}\r\n\r\n.page-choose-template .skn-tma3.vmargins {\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n\r\n.page-choose-template .skn-tma3.hmargins {\r\n    padding-left: 32px;\r\n    padding-right: 32px;\r\n} */\r\n\r\n/* .page-choose-template .skn-tma3.document .section {\r\n    padding-top: 5px !important;\r\n    border-color: SDCL;\r\n} */\r\n\r\n.page-choose-template .skn-tma3.document div.firstsection,\r\n.page-choose-template .skn-tma3.document div.SECTION_CNTC {\r\n    margin-top: 0;\r\n    padding-top: 0 !important;\r\n}\r\n\r\n/* .page-choose-template .skn-tma3.document  div.paragraph{\r\n    margin-top: 10px;\r\n} */\r\n.page-choose-template .skn-tma3.document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document .singlecolumn,\r\n.page-choose-template .skn-tma3.document .maincolumn {\r\n    margin-left: 0;\r\n    width: 539px;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document div.sectiontitle {\r\n    font-size: 13px;\r\n    line-height: 28px;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document div.heading {\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document table.skills td {\r\n    padding-top: 5px;\r\n}\r\n\r\n/* .page-choose-template .skn-tma3.fontsize {\r\n    font-size: 12px;\r\n}\r\n\r\n.page-choose-template .skn-tma3.fontface {\r\n    font-family: 'Verdana', serif;\r\n} */\r\n\r\n.page-choose-template .skn-tma3.document div.name {\r\n    font-size: 29px;\r\n    line-height: 34px;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document div.address {\r\n    font-size: 12px;\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document .heading {\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document div.address2 {\r\n    font-size: 12px;\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-tma3.document div.SortableItem:nth-of-type(0n+2) .section:before {\r\n    height: 34px;\r\n}\r\n\r\n/* .page-choose-template .skn-tma3.document  div.heading:before{\r\n    border-color: SDCL;\r\n    top: 9px;\r\n} */\r\n.page-choose-template .skn-tma3.document div.SECTION_CNTC+.section:before,\r\n.page-choose-template .skn-tma3.document div.SECTION_ALNK+.section:before {\r\n    height: 34px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document html,\r\n.page-choose-template .skn-tma4.document body,\r\n.page-choose-template .skn-tma4.document div,\r\n.page-choose-template .skn-tma4.document span,\r\n.page-choose-template .skn-tma4.document applet,\r\n.page-choose-template .skn-tma4.document object,\r\n.page-choose-template .skn-tma4.document iframe,\r\n.page-choose-template .skn-tma4.document h1,\r\n.page-choose-template .skn-tma4.document h2,\r\n.page-choose-template .skn-tma4.document h3,\r\n.page-choose-template .skn-tma4.document h4,\r\n.page-choose-template .skn-tma4.document h5,\r\n.page-choose-template .skn-tma4.document h6,\r\n.page-choose-template .skn-tma4.document p,\r\n.page-choose-template .skn-tma4.document blockquote,\r\n.page-choose-template .skn-tma4.document pre,\r\n.page-choose-template .skn-tma4.document a,\r\n.page-choose-template .skn-tma4.document abbr,\r\n.page-choose-template .skn-tma4.document acronym,\r\n.page-choose-template .skn-tma4.document address,\r\n.page-choose-template .skn-tma4.document big,\r\n.page-choose-template .skn-tma4.document cite,\r\n.page-choose-template .skn-tma4.document code,\r\n.page-choose-template .skn-tma4.document del,\r\n.page-choose-template .skn-tma4.document dfn,\r\n.page-choose-template .skn-tma4.document em,\r\n.page-choose-template .skn-tma4.document font,\r\n.page-choose-template .skn-tma4.document img,\r\n.page-choose-template .skn-tma4.document ins,\r\n.page-choose-template .skn-tma4.document kbd,\r\n.page-choose-template .skn-tma4.document q,\r\n.page-choose-template .skn-tma4.document s,\r\n.page-choose-template .skn-tma4.document samp,\r\n.page-choose-template .skn-tma4.document small,\r\n.page-choose-template .skn-tma4.document strike,\r\n.page-choose-template .skn-tma4.document strong,\r\n.page-choose-template .skn-tma4.document sub,\r\n.page-choose-template .skn-tma4.document sup,\r\n.page-choose-template .skn-tma4.document tt,\r\n.page-choose-template .skn-tma4.document var,\r\n.page-choose-template .skn-tma4.document b,\r\n.page-choose-template .skn-tma4.document u,\r\n.page-choose-template .skn-tma4.document i,\r\n.page-choose-template .skn-tma4.document center,\r\n.page-choose-template .skn-tma4.document dl,\r\n.page-choose-template .skn-tma4.document dt,\r\n.page-choose-template .skn-tma4.document dd,\r\n.page-choose-template .skn-tma4.document ol,\r\n.page-choose-template .skn-tma4.document ul,\r\n.page-choose-template .skn-tma4.document li,\r\n.page-choose-template .skn-tma4.document fieldset,\r\n.page-choose-template .skn-tma4.document form,\r\n.page-choose-template .skn-tma4.document label,\r\n.page-choose-template .skn-tma4.document legend,\r\n.page-choose-template .skn-tma4.document table,\r\n.page-choose-template .skn-tma4.document caption,\r\n.page-choose-template .skn-tma4.document tbody,\r\n.page-choose-template .skn-tma4.document tfoot,\r\n.page-choose-template .skn-tma4.document thead,\r\n.page-choose-template .skn-tma4.document tr,\r\n.page-choose-template .skn-tma4.document th,\r\n.page-choose-template .skn-tma4.document td {\r\n    /* margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline; */\r\n    /* background: transparent; */\r\n}\r\n\r\n.page-choose-template .skn-tma4.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document body {\r\n    line-height: 1;\r\n    background: #fff;\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document ol,\r\n.page-choose-template .skn-tma4.document ul {\r\n    list-style: none;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document blockquote,\r\n.page-choose-template .skn-tma4.document q {\r\n    quotes: none;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document blockquote:before,\r\n.page-choose-template .skn-tma4.document blockquote:after,\r\n.page-choose-template .skn-tma4.document q:before,\r\n.page-choose-template .skn-tma4.document q:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document :focus {\r\n    outline: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document ins {\r\n    text-decoration: none;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document del {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document a img {\r\n    border: none;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document ul,\r\n.page-choose-template .skn-tma4.document li {\r\n    list-style-type: disc;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document ul li {\r\n    margin: 0 0 0 8px;\r\n    padding-left: 8px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .clear {\r\n    clear: both;\r\n    height: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document br.clear {\r\n    line-height: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document {\r\n    color: #231f20;\r\n    background-color: #fff !important;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.name,\r\n.page-choose-template .skn-tma4.document div.address {\r\n    margin-left: 140px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.sectiontitle {\r\n    font-weight: bold;\r\n    padding: 0;\r\n    text-transform: uppercase;\r\n    color: #0c8de2;\r\n    margin-right: 15px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.name {\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    padding: 0;\r\n    text-align: left;\r\n    color: #0187de;\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .section {\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.heading {\r\n    clear: both;\r\n    text-align: right;\r\n    float: left;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.address {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.address {\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document table.twocol td {\r\n    width: 50%;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document table.skills,\r\n.page-choose-template .skn-tma4.document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document table.skills th,\r\n.page-choose-template .skn-tma4.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document table.skills .skillname,\r\n.page-choose-template .skn-tma4.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document table.skills .skillyears,\r\n.page-choose-template .skn-tma4.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document table.skills .pad2,\r\n.page-choose-template .skn-tma4.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .monogram {\r\n    float: left;\r\n    margin: 5px 0 0 70px;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .monogram text {\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .monogram svg {\r\n    box-shadow: none;\r\n    width: 54px;\r\n    height: 54px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .monogram svg circle {\r\n    stroke: #0086dd;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .degree {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .jobtitle {\r\n    color: #0c8de2;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .jobdates {\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .textBold {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .datesWrapper {\r\n    float: right;\r\n    font-style: italic;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .adnlLnks {\r\n    position: inherit;\r\n    z-index: 2;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .section:before {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    height: 100%;\r\n    border-left: 1px solid #979797;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .singlecolumn {\r\n    border-left: 1px solid #979797;\r\n    padding-left: 14px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.paragraph .singlecolumn {\r\n    padding-bottom: 10px;\r\n}\r\n\r\n/* .page-choose-template .skn-tma4.document  div.paragraph .singlecolumn, .page-choose-template .skn-tma4.document  .singlecolumn.paragraphindent, .page-choose-template .skn-tma4.document div.heading, .page-choose-template .skn-tma4.document  .section{\r\n    position: relative;\r\n} */\r\n.page-choose-template .skn-tma4.document .section:last-child div.paragraph .singlecolumn:after {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .section:last-child div.paragraph .singlecolumn:after,\r\n.page-choose-template .skn-tma4.document .section:last-child .singlecolumn.paragraphindent:after {\r\n    height: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .heading:before {\r\n    display: block;\r\n    position: absolute;\r\n    top: 4px;\r\n    right: -6px;\r\n    content: '';\r\n    height: 9px;\r\n    width: 9px;\r\n    border: 1px solid #979797;\r\n    border-radius: 100%;\r\n    background: #fff;\r\n    z-index: 10;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.SECTION_ALNK {\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.SECTION_ALNK+.section:before {\r\n    content: '';\r\n    top: 0;\r\n    width: 1px;\r\n    height: 20px;\r\n    position: absolute;\r\n    z-index: 1;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.firstsection:before,\r\n.page-choose-template .skn-tma4.document div.SECTION_ALNK:before {\r\n    border: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.SECTION_ALNK+.section:after {\r\n    content: '';\r\n    top: 0;\r\n    left: 0;\r\n    width: 1px;\r\n    height: 12px;\r\n    border-left: 1px solid #fff;\r\n    position: absolute;\r\n    z-index: 1;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .paragraph+.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .paragraph+.paragraph:before {\r\n    display: block;\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 0;\r\n    content: '';\r\n    height: 9px;\r\n    width: 9px;\r\n    border: 1px solid #979797;\r\n    border-radius: 100%;\r\n    background: #fff;\r\n    z-index: 2;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .paragraph+tr.paragraph:before {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.firstsection:after,\r\n.page-choose-template .skn-tma4.document .section.SECTION_ALNK:after {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document {\r\n    line-height: 15px;\r\n}\r\n\r\n/*\r\n.page-choose-template .skn-tma4.document table {\r\n    line-height: 16px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.pagesize {\r\n    width: 596px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.vmargins {\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.hmargins {\r\n    padding-left: 32px;\r\n    padding-right: 32px;\r\n} */\r\n\r\n.page-choose-template .skn-tma4.document div.heading {\r\n    width: 138px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .section {\r\n    min-height: 50px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .section:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 100%;\r\n    left: 138px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.paragraph .singlecolumn {\r\n    min-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.firstparagraph {\r\n    padding-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .singlecolumn,\r\n.page-choose-template .skn-tma4.document .maincolumn,\r\n.page-choose-template .skn-tma4.document .section:after {\r\n    margin-left: 138px;\r\n    width: 393px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.sectiontitle {\r\n    font-size: 12px;\r\n    line-height: 17px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document table.skills td {\r\n    padding-top: 5px;\r\n}\r\n\r\n/* .page-choose-template .skn-tma4.fontsize {\r\n    font-size: 11px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.fontface {\r\n    font-family: 'Arial',serif;\r\n} */\r\n\r\n.page-choose-template .skn-tma4.document div.name {\r\n    font-size: 34px;\r\n    line-height: 44px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.address {\r\n    font-size: 11px;\r\n    line-height: 16px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.paragraph .singlecolumn {\r\n    padding-top: 10px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.firstparagraph .singlecolumn {\r\n    padding-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .heading:before {\r\n    top: 3.5px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.name,\r\n.page-choose-template .skn-tma4.document div.sectiontitle,\r\n.page-choose-template .skn-tma4.document .jobtitle {\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .monogram svg circle {\r\n    stroke: SDCL;\r\n}\r\n\r\n.ie11.page-choose-template #document.skn-tma4 .monogram svg,\r\n.edge.page-choose-template #document.skn-tma4 .monogram svg {\r\n    height: 54px;\r\n    width: 54px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .paragraph+.paragraph:before {\r\n    left: -5px;\r\n    top: 13.5px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document div.address2 {\r\n    font-size: 11px;\r\n    line-height: 16px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document .SortableList>.SortableItem:nth-child(0n+2) .section:after {\r\n    content: '';\r\n    border-left: 5px solid #fff;\r\n    position: absolute;\r\n    top: 0;\r\n    left: -1px;\r\n    height: 12px;\r\n}\r\n\r\n.page-choose-template .skn-tma4.document [id^=\"SECTION_EXPR\"] .sortableInner,\r\n.page-choose-template .skn-tma4.document [id^=\"SECTION_EDUC\"] .sortableInner {\r\n    margin-left: 138;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document html,\r\n.page-choose-template .skn-upa1.document body,\r\n.page-choose-template .skn-upa1.document div,\r\n.page-choose-template .skn-upa1.document span,\r\n.page-choose-template .skn-upa1.document applet,\r\n.page-choose-template .skn-upa1.document object,\r\n.page-choose-template .skn-upa1.document iframe,\r\n.page-choose-template .skn-upa1.document h1,\r\n.page-choose-template .skn-upa1.document h2,\r\n.page-choose-template .skn-upa1.document h3,\r\n.page-choose-template .skn-upa1.document h4,\r\n.page-choose-template .skn-upa1.document h5,\r\n.page-choose-template .skn-upa1.document h6,\r\n.page-choose-template .skn-upa1.document p,\r\n.page-choose-template .skn-upa1.document blockquote,\r\n.page-choose-template .skn-upa1.document pre,\r\n.page-choose-template .skn-upa1.document a,\r\n.page-choose-template .skn-upa1.document abbr,\r\n.page-choose-template .skn-upa1.document acronym,\r\n.page-choose-template .skn-upa1.document address,\r\n.page-choose-template .skn-upa1.document big,\r\n.page-choose-template .skn-upa1.document cite,\r\n.page-choose-template .skn-upa1.document code,\r\n.page-choose-template .skn-upa1.document del,\r\n.page-choose-template .skn-upa1.document dfn,\r\n.page-choose-template .skn-upa1.document em,\r\n.page-choose-template .skn-upa1.document font,\r\n.page-choose-template .skn-upa1.document img,\r\n.page-choose-template .skn-upa1.document ins,\r\n.page-choose-template .skn-upa1.document kbd,\r\n.page-choose-template .skn-upa1.document q,\r\n.page-choose-template .skn-upa1.document s,\r\n.page-choose-template .skn-upa1.document samp,\r\n.page-choose-template .skn-upa1.document small,\r\n.page-choose-template .skn-upa1.document strike,\r\n.page-choose-template .skn-upa1.document strong,\r\n.page-choose-template .skn-upa1.document sub,\r\n.page-choose-template .skn-upa1.document sup,\r\n.page-choose-template .skn-upa1.document tt,\r\n.page-choose-template .skn-upa1.document var,\r\n.page-choose-template .skn-upa1.document b,\r\n.page-choose-template .skn-upa1.document u,\r\n.page-choose-template .skn-upa1.document i,\r\n.page-choose-template .skn-upa1.document center,\r\n.page-choose-template .skn-upa1.document dl,\r\n.page-choose-template .skn-upa1.document dt,\r\n.page-choose-template .skn-upa1.document dd,\r\n.page-choose-template .skn-upa1.document ol,\r\n.page-choose-template .skn-upa1.document ul,\r\n.page-choose-template .skn-upa1.document li,\r\n.page-choose-template .skn-upa1.document fieldset,\r\n.page-choose-template .skn-upa1.document form,\r\n.page-choose-template .skn-upa1.document label,\r\n.page-choose-template .skn-upa1.document legend,\r\n.page-choose-template .skn-upa1.document table,\r\n.page-choose-template .skn-upa1.document caption,\r\n.page-choose-template .skn-upa1.document tbody,\r\n.page-choose-template .skn-upa1.document tfoot,\r\n.page-choose-template .skn-upa1.document thead,\r\n.page-choose-template .skn-upa1.document tr,\r\n.page-choose-template .skn-upa1.document th,\r\n.page-choose-template .skn-upa1.document td {\r\n    /* margin: 0; */\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    /* background: transparent; */\r\n}\r\n\r\n.page-choose-template .skn-upa1.document #SECTION_CERT {\r\n    display: none;\r\n}\r\n\r\n.mfr .page-choose-template .skn-upa1.document #SECTION_AWAR,\r\n.mfr .page-choose-template .skn-upa1.document #SECTION_CERT {\r\n    display: none\r\n}\r\n\r\n.page-choose-template .skn-upa1.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document ul li {\r\n    margin: 0 0 0 13px;\r\n    list-style: disc;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document div.name {\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    font-weight: bold;\r\n    padding: 0;\r\n    text-align: right;\r\n}\r\n\r\n\r\n\r\n.page-choose-template .skn-upa1.document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document div.heading {\r\n    clear: both;\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document div.address {\r\n    position: relative;\r\n    text-align: right;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin-top: 11px;\r\n    background-color: #000;\r\n    font-weight: bold;\r\n    padding: 4px 5px;\r\n    color: #fff;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document div.adnlLnks {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document div.adnlLnks ul {\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document div.adnlLnks li {\r\n    display: inline !important;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document span.jobtitle,\r\n.page-choose-template .skn-upa1.document span.companyname,\r\n.page-choose-template .skn-upa1.document span.degree {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document .datesWrapper {\r\n    float: right;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document table.twocol td {\r\n    width: 50%;\r\n    vertical-align: top;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document table.skills,\r\n.page-choose-template .skn-upa1.document table.twocol {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document table.skills th,\r\n.page-choose-template .skn-upa1.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document table.skills .skillname,\r\n.page-choose-template .skn-upa1.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document table.skills .skillyears,\r\n.page-choose-template .skn-upa1.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document table.skills .pad2,\r\n.page-choose-template .skn-upa1.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n.page-choose-template .skn-upa1.document table {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document td.twocol_2 {\r\n    border-left: 1px solid #fefdfd;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document body {\r\n    font-feature-settings: 'liga' 0;\r\n    -moz-font-feature-settings: 'liga' off;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-upa1.document .signPic>.field_sign {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-upa1.document .disclaim .singlecolumn li,\r\n.page-choose-template .skn-upa1.document .disclaim .singlecolumn p,\r\n.page-choose-template .skn-upa1.document .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document {\r\n    line-height: 19px;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document table {\r\n    line-height: 19px;\r\n}\r\n\r\n/* .page-choose-template .skn-upa1.pagesize {\r\n    width: 576px;\r\n}\r\n\r\n.page-choose-template .skn-upa1.vmargins {\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n\r\n.page-choose-template .skn-upa1.hmargins {\r\n    padding-left: 42px;\r\n    padding-right: 42px;\r\n} */\r\n\r\n.page-choose-template .skn-upa1.document .section {\r\n    margin-top: 14px;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 70px;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document div.SECTION_CNTC {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document div.heading {\r\n    margin-bottom: 7px;\r\n}\r\n\r\n/* .page-choose-template .skn-upa1.document  div.paragraph{\r\n    margin-top: 14px;\r\n} */\r\n.page-choose-template .skn-upa1.document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document .singlecolumn,\r\n.page-choose-template .skn-upa1.document .maincolumn {\r\n    margin-left: 0;\r\n    width: 576px;\r\n}\r\n\r\n.page-choose-template .skn-upa1.fontsize {\r\n    /* font-size: 12px; */\r\n}\r\n\r\n.page-choose-template .skn-upa1.fontface {\r\n    /* font-family: 'Times New Roman', serif; */\r\n}\r\n\r\n.page-choose-template .skn-upa1.document .bottomborder {\r\n    border-bottom: 1px solid;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document div.sectiontitle {\r\n    font-size: 14px;\r\n    line-height: 21px;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document div.name {\r\n    font-size: 30px;\r\n    line-height: 44px;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document div.address {\r\n    font-size: 11px;\r\n    line-height: 25px;\r\n    margin-top: 7px;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document table.skills td {\r\n    padding-top: 7px;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document div.heading {\r\n    margin-bottom: 7px;\r\n    border-color: SDCL !important;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document div.name span.lName {\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document div.address2 {\r\n    font-size: 12px;\r\n    line-height: 19px;\r\n}\r\n\r\n.page-choose-template .skn-upa1.document div.disclaim div.heading {\r\n    margin-bottom: 7px;\r\n}\r\n\r\n/* .page-choose-template .skn-upa2.document html, .page-choose-template .skn-upa2.document body, .page-choose-template .skn-upa2.document div, .page-choose-template .skn-upa2.document span, .page-choose-template .skn-upa2.document applet, .page-choose-template .skn-upa2.document object, .page-choose-template .skn-upa2.document iframe, .page-choose-template .skn-upa2.document h1, .page-choose-template .skn-upa2.document h2, .page-choose-template .skn-upa2.document h3, .page-choose-template .skn-upa2.document h4, .page-choose-template .skn-upa2.document h5, .page-choose-template .skn-upa2.document h6, .page-choose-template .skn-upa2.document p, .page-choose-template .skn-upa2.document blockquote, .page-choose-template .skn-upa2.document pre, .page-choose-template .skn-upa2.document a, .page-choose-template .skn-upa2.document abbr, .page-choose-template .skn-upa2.document acronym, .page-choose-template .skn-upa2.document address, .page-choose-template .skn-upa2.document big, .page-choose-template .skn-upa2.document cite, .page-choose-template .skn-upa2.document code, .page-choose-template .skn-upa2.document del, .page-choose-template .skn-upa2.document dfn, .page-choose-template .skn-upa2.document em, .page-choose-template .skn-upa2.document font, .page-choose-template .skn-upa2.document img, .page-choose-template .skn-upa2.document ins, .page-choose-template .skn-upa2.document kbd, .page-choose-template .skn-upa2.document q, .page-choose-template .skn-upa2.document s, .page-choose-template .skn-upa2.document samp, .page-choose-template .skn-upa2.document small, .page-choose-template .skn-upa2.document strike, .page-choose-template .skn-upa2.document strong, .page-choose-template .skn-upa2.document sub, .page-choose-template .skn-upa2.document sup, .page-choose-template .skn-upa2.document tt, .page-choose-template .skn-upa2.document var, .page-choose-template .skn-upa2.document b, .page-choose-template .skn-upa2.document u, .page-choose-template .skn-upa2.document i, .page-choose-template .skn-upa2.document center, .page-choose-template .skn-upa2.document dl, .page-choose-template .skn-upa2.document dt, .page-choose-template .skn-upa2.document dd, .page-choose-template .skn-upa2.document ol, .page-choose-template .skn-upa2.document ul, .page-choose-template .skn-upa2.document li, .page-choose-template .skn-upa2.document fieldset, .page-choose-template .skn-upa2.document form, .page-choose-template .skn-upa2.document label, .page-choose-template .skn-upa2.document legend, .page-choose-template .skn-upa2.document table, .page-choose-template .skn-upa2.document caption, .page-choose-template .skn-upa2.document tbody, .page-choose-template .skn-upa2.document tfoot, .page-choose-template .skn-upa2.document thead, .page-choose-template .skn-upa2.document tr, .page-choose-template .skn-upa2.document th, .page-choose-template .skn-upa2.document td{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    background: transparent;\r\n} */\r\n.mit .page-choose-template .skn-upa2.document #SECTION_CERT {\r\n    display: none;\r\n}\r\n\r\n.mfr .page-choose-template .skn-upa2.document #SECTION_AWAR,\r\n.mfr .page-choose-template .skn-upa2.document #SECTION_CERT {\r\n    display: none\r\n}\r\n\r\n.page-choose-template .skn-upa2.document table {\r\n    font-size: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document ul,\r\n.page-choose-template .skn-upa2.document li {\r\n    list-style-type: disc;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document ul li {\r\n    margin: 0 0 0 13px;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document div.name {\r\n    font-size: 15px;\r\n    line-height: 17px;\r\n    font-weight: bold;\r\n    padding: 0;\r\n    text-align: left;\r\n}\r\n\r\n/* .page-choose-template .skn-upa2.document div.name span.lName{\r\n    color: #c00000;\r\n} */\r\n.page-choose-template .skn-upa2.document div.logo {\r\n    display: none;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document div.paragraph {\r\n    position: relative;\r\n}\r\n\r\n/* .page-choose-template .skn-upa2.document div.heading{\r\n    clear: both;\r\n    font-weight: normal;\r\n} */\r\n.page-choose-template .skn-upa2.document div.address {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n    margin-top: 11px;\r\n    background-color: #000;\r\n    font-weight: bold;\r\n    padding: 4px 5px;\r\n    color: #fff;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document div.address2 {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 0.917em;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document div.adnlLnks {\r\n    text-align: center;\r\n    margin-top: 5px;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document div.adnlLnks ul {\r\n    margin: 0;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document div.adnlLnks li {\r\n    display: inline !important;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document span.jobtitle,\r\n.page-choose-template .skn-upa2.document span.companyname,\r\n.page-choose-template .skn-upa2.document span.degree {\r\n    font-weight: bold;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document .datesWrapper {\r\n    float: right;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document .table_wrapper {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document table.twocol td {\r\n    width: 50%;\r\n    vertical-align: top;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document table.skills {\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document table.skills th,\r\n.page-choose-template .skn-upa2.document table.skills td {\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document table.skills th {\r\n    text-decoration: underline;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document table.skills .skillname,\r\n.page-choose-template .skn-upa2.document table.skills .skillrating {\r\n    text-align: left;\r\n    width: 35%;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document table.skills .skillrating {\r\n    width: 20%;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document table.skills .skillyears,\r\n.page-choose-template .skn-upa2.document table.skills .skilllast {\r\n    width: 19%;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document table.skills .pad1 {\r\n    width: 5%;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document table.skills .pad2,\r\n.page-choose-template .skn-upa2.document table.skills .pad3 {\r\n    width: 1%;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document span.paddedline {\r\n    display: block;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document .nodisplay {\r\n    display: none;\r\n}\r\n\r\n/* .page-choose-template .skn-upa2.document div.bottomborder{\r\n    border-color: #c00000 !important;\r\n} */\r\n.page-choose-template .skn-upa2.document td.twocol_2 {\r\n    border-left: 1px solid #fefdfd;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document .sectionCL .paragraph {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document body {\r\n    font-feature-settings: 'liga' 0;\r\n    -moz-font-feature-settings: 'liga' off;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-upa2.document .signPic>.field_sign {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document .disclaim .singlecolumn,\r\n.page-choose-template .skn-upa2.document .disclaim .singlecolumn li,\r\n.page-choose-template .skn-upa2.document .disclaim .singlecolumn p,\r\n.page-choose-template .skn-upa2.document .disclaim .singlecolumn span {\r\n    font-size: 9px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document .field_sign {\r\n    font-size: 7px !important;\r\n    color: #8a8a8a !important;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document .txtleft+.field_sign {\r\n    text-align: left;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document .txtcenter+.field_sign {\r\n    text-align: center;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document .txtright+.field_sign {\r\n    text-align: right;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document .signPic span:first-child {\r\n    padding-right: 6px;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document .signPic img {\r\n    padding-top: 5px;\r\n    max-width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document {\r\n    line-height: 18px;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document table {\r\n    line-height: 18px;\r\n}\r\n\r\n/* .page-choose-template .skn-upa2.pagesize{\r\n    width: 576px;\r\n}\r\n.page-choose-template .skn-upa2.vmargins{\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n.page-choose-template .skn-upa2.hmargins{\r\n    padding-left: 42px;\r\n    padding-right: 42px;\r\n} */\r\n.page-choose-template .skn-upa2.document .section {\r\n    margin-top: 8px;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document .disclaim {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 70px;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document div.firstsection {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document div.SECTION_CNTC,\r\n.page-choose-template .skn-upa2.document div.SECTION_ALNK {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document div.heading {\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document div.paragraph {\r\n    margin-top: 14px;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document div.firstparagraph {\r\n    margin-top: 0;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document .singlecolumn,\r\n.page-choose-template .skn-upa2.document .maincolumn {\r\n    margin-left: 0;\r\n    width: 576px;\r\n}\r\n\r\n/* .page-choose-template .skn-upa2.fontsize{\r\n    font-size: 11px;\r\n}\r\n.page-choose-template .skn-upa2.fontface{\r\n    font-family: Century Gothic;\r\n} */\r\n/* .page-choose-template .skn-upa2.document  .bottomborder{\r\n    border-bottom: 1px solid;\r\n} */\r\n.page-choose-template .skn-upa2.document div.sectiontitle {\r\n    font-size: 14px;\r\n    line-height: 21px;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document div.name {\r\n    font-size: 29px;\r\n    line-height: 43px;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document div.address {\r\n    font-size: 10px;\r\n    line-height: 24px;\r\n    margin-top: 7px;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document table.skills td {\r\n    padding-top: 7px;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document div.heading {\r\n    margin-bottom: 7px;\r\n    border-color: SDCL !important;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document div.name span.lName {\r\n    color: SDCL;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document .sectionCL .singlecolumn {\r\n    margin-left: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document div.address2 {\r\n    font-size: 11px;\r\n    line-height: 18px;\r\n}\r\n\r\n.page-choose-template .skn-upa2.document div.disclaim div.heading {\r\n    margin-bottom: 7px;\r\n}", ""]),
            t.default = m
    },
    63515: function (e, t, n) {
        var a = n(44867);
        "string" == typeof a && (a = [[e.id, a, ""]]);
        var o = {
            hmr: !0,
            transform: undefined,
            insertInto: void 0
        };
        n(53027)(a, o);
        a.locals && (e.exports = a.locals)
    },
    78879: function (e) {
        "use strict";
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNJREFUeNpiYCAAtIB4OxDfAOIoZIm9QPwfiv8AMT8TVOIvLqMMgPgqEL8F4ky8lgIEGAC+Fgk0YKVkbwAAAABJRU5ErkJggg=="
    },
    68621: function (e) {
        "use strict";
        e.exports = JSON.parse('{"v":"5.9.0","fr":60,"ip":0,"op":360,"w":96,"h":96,"nm":"Preloader","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Mask 3","td":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":379,"s":[0]},{"t":380,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[48,48.75,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":380,"s":[0,0,100]},{"t":388,"s":[80,101,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-31.75,-40],[-32,40],[31.75,40.25],[32.25,-39.75]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.239215686917,0.235294118524,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[126.472,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Base","tt":2,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":249,"s":[0]},{"t":250,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":0,"k":48,"ix":3},"y":{"a":1,"k":[{"i":{"x":[0.49],"y":[1]},"o":{"x":[0.493],"y":[0]},"t":250,"s":[80]},{"t":265,"s":[88]}],"ix":4}},"a":{"a":0,"k":[40,8,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.471,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.663,0.297,0.297],"y":[0,0,0]},"t":326,"s":[100,100,100]},{"i":{"x":[0.313,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.543,0.333,0.333],"y":[0,0,0]},"t":340,"s":[119.951,100,100]},{"t":350,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-8.25,0.25],[0,0],[-0.73,-0.48],[0,-3.495],[4.418,0],[0,0],[0,4.418],[0.034,0.59]],"o":[[0,0],[8.5,0.75],[0.117,0.056],[0,4.418],[0,0],[-4.418,0],[0,-3.532],[-0.034,-0.59]],"v":[[-32,-8],[32,-8],[40.133,-0.056],[40,0],[32,8],[-32,8],[-40,0],[-39.784,-0.34]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.937254901961,0.780392156863,0.470588235294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[40.25,8.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Arrow","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":0,"k":50,"ix":3},"y":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":251,"s":[-32]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":266,"s":[38]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.694],"y":[0]},"t":306,"s":[38]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":318,"s":[32]},{"i":{"x":[0.393],"y":[1]},"o":{"x":[0.245],"y":[0]},"t":327,"s":[32]},{"t":346,"s":[131]}],"ix":4}},"a":{"a":0,"k":[32,32,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":34,"nm":"Puppet","np":6,"mn":"ADBE FreePin3","ix":1,"en":1,"ef":[{"ty":7,"nm":"Puppet Engine","mn":"ADBE FreePin3 Puppet Engine","ix":1,"v":{"a":0,"k":2,"ix":1}},{"ty":0,"nm":"Mesh Rotation Refinement","mn":"ADBE FreePin3 Auto Rotate Pins","ix":2,"v":{"a":0,"k":20,"ix":2}},{"ty":7,"nm":"On Transparent","mn":"ADBE FreePin3 On Transparent","ix":3,"v":{"a":0,"k":0,"ix":3}},{"ty":"","nm":"arap","np":3,"mn":"ADBE FreePin3 ARAP Group","ix":4,"en":1,"ef":[{"ty":6,"nm":"Auto-traced Shapes","mn":"ADBE FreePin3 Outlines","ix":1,"v":0},{"ty":"","nm":"Mesh","np":1,"mn":"ADBE FreePin3 Mesh Group","ix":2,"en":1,"ef":[]}]}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-1.105,0],[0,0],[0,-1.105],[0,0],[0,0],[1.26,-1.26],[0,0],[1.562,1.562],[0,0],[-1.781,0],[0,0]],"o":[[0,-1.105],[0,0],[1.105,0],[0,0],[0,0],[1.781,0],[0,0],[-1.562,1.562],[0,0],[-1.26,-1.26],[0,0],[0,0]],"v":[[-12.8,-29.367],[-10.8,-31.367],[10.8,-31.367],[12.8,-29.367],[12.8,0.633],[27.172,0.633],[28.586,4.047],[2.828,29.805],[-2.828,29.805],[-28.586,4.047],[-27.172,0.633],[-12.8,0.633]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.670588235294,0.835294117647,0.862745098039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[30.096,31.617],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"TTC 21","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":231,"s":[100]},{"t":251,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":125,"s":[16]},{"t":145,"s":[16]}],"ix":3},"y":{"a":1,"k":[{"i":{"x":[0.175],"y":[1.177]},"o":{"x":[0.167],"y":[0.167]},"t":125,"s":[124]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":145,"s":[48]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":185,"s":[48]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":200,"s":[80]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":248,"s":[80]},{"t":251,"s":[80]}],"ix":4}},"a":{"a":0,"k":[8,8,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,4.418],[-4.418,0],[0,-4.418],[4.418,0]],"o":[[0,-4.418],[4.418,0],[0,4.418],[-4.418,0]],"v":[[-8,0],[0,-8],[8,0],[0,8]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.937254901961,0.780392156863,0.470588235294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[8.25,8.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"TTC 22","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":251,"s":[100]},{"t":252,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":125,"s":[58]},{"t":145,"s":[58]}],"ix":3},"y":{"a":1,"k":[{"i":{"x":[0.175],"y":[1.177]},"o":{"x":[0.167],"y":[0.167]},"t":125,"s":[124]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":145,"s":[48]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":185,"s":[48]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":200,"s":[80]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[1],"y":[0]},"t":221,"s":[80]},{"t":251,"s":[80]}],"ix":4}},"a":{"a":0,"k":[30,8,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0.001},"t":231,"s":[{"i":[[0,4.418],[-4.418,0],[0,0],[0,-4.418],[4.418,0],[0,0]],"o":[[0,-4.418],[0,0],[4.418,0],[0,4.418],[0,0],[-4.418,0]],"v":[[-30,0],[-22,-8],[22,-8],[30,0],[22,8],[-22,8]],"c":true}]},{"t":251,"s":[{"i":[[0,4.418],[-4.418,0],[0,0],[0,-4.418],[4.418,0],[0,0]],"o":[[0,-4.418],[0,0],[4.418,0],[0,4.418],[0,0],[-4.418,0]],"v":[[-50,0],[-42,-8],[22,-8],[30,0],[22,8],[-42,8]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.937254901961,0.780392156863,0.470588235294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[30.25,8.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"TTC 11","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":115,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":120,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":231,"s":[100]},{"t":251,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":115,"s":[27.25]},{"t":120,"s":[16]}],"ix":3},"y":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":115,"s":[16]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":120,"s":[16]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":215,"s":[16]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.505],"y":[-0.195]},"t":231,"s":[16]},{"t":251,"s":[80]}],"ix":4}},"a":{"a":0,"k":[8,8,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,4.418],[-4.418,0],[0,-4.418],[4.418,0]],"o":[[0,-4.418],[4.418,0],[0,4.418],[-4.418,0]],"v":[[-8,0],[0,-8],[8,0],[0,8]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.670588235294,0.835294117647,0.862745098039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[8.25,8.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"TTC 12","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":119,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":120,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":231,"s":[100]},{"t":251,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":0,"k":58,"ix":3},"y":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":215,"s":[16]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.505],"y":[-0.195]},"t":231,"s":[16]},{"t":251,"s":[80]}],"ix":4}},"a":{"a":0,"k":[30,8,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,4.418],[-4.418,0],[0,0],[0,-4.418],[4.418,0],[0,0]],"o":[[0,-4.418],[0,0],[4.418,0],[0,4.418],[0,0],[-4.418,0]],"v":[[-30,0],[-22,-8],[22,-8],[30,0],[22,8],[-22,8]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.670588235294,0.835294117647,0.862745098039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[30.25,8.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"TTC 31","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":231,"s":[100]},{"t":251,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":145,"s":[16]},{"t":165,"s":[16]}],"ix":3},"y":{"a":1,"k":[{"i":{"x":[0.175],"y":[1.307]},"o":{"x":[0.167],"y":[0.167]},"t":145,"s":[124]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":165,"s":[80]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":185,"s":[80]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":200,"s":[48]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":215,"s":[48]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.505],"y":[-0.391]},"t":231,"s":[48]},{"t":251,"s":[80]}],"ix":4}},"a":{"a":0,"k":[8,8,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,4.418],[-4.418,0],[0,-4.418],[4.418,0]],"o":[[0,-4.418],[4.418,0],[0,4.418],[-4.418,0]],"v":[[-8,0],[0,-8],[8,0],[0,8]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.937254901961,0.780392156863,0.470588235294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[8.25,8.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"TTC 32","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":231,"s":[100]},{"t":251,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":145,"s":[49]},{"t":165,"s":[49]}],"ix":3},"y":{"a":1,"k":[{"i":{"x":[0.175],"y":[1.307]},"o":{"x":[0.167],"y":[0.167]},"t":145,"s":[124]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":165,"s":[80]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":185,"s":[80]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":200,"s":[48]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":215,"s":[48]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.505],"y":[-0.391]},"t":231,"s":[48]},{"t":251,"s":[80]}],"ix":4}},"a":{"a":0,"k":[21.5,8.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,4.418],[-4.418,0],[0,0],[0,-4.418],[4.418,0],[0,0]],"o":[[0,-4.418],[0,0],[4.418,0],[0,4.418],[0,0],[-4.418,0]],"v":[[-21,0],[-13,-8],[13,-8],[21,0],[13,8],[-13,8]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.937254901961,0.780392156863,0.470588235294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[21.25,8.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Mask","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[48,48,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":80,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-31.75,-40],[-32,40],[31.75,40.25],[32.25,-39.75]],"c":true}]},{"t":90,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-40.436,-48.25],[-40.75,47.451],[39.372,47.75],[40,-47.951]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.239215686917,0.235294118524,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"CV2","tt":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":110,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":120,"s":[100]},{"t":121,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[124]},{"i":{"x":[0.332],"y":[1.233]},"o":{"x":[0.167],"y":[0.167]},"t":50,"s":[124]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":70,"s":[48]},{"t":90,"s":[48]}],"ix":3},"y":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":70,"s":[48]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":90,"s":[48]},{"t":110,"s":[48]}],"ix":4}},"a":{"a":0,"k":[24,32,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.331,0.331,0.667],"y":[1,1,1]},"o":{"x":[0.896,0.842,0.167],"y":[-0.308,-0.423,0]},"t":90,"s":[100,100,100]},{"t":110,"s":[166.66,153.125,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[41.295,53.959],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.670588254929,0.835294127464,0.86274510622,1],"ix":4},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":95,"s":[0]},{"t":110,"s":[100]}],"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":110,"s":[24.527,32.874],"to":[0,0],"ti":[0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":120,"s":[29.793,11.23],"to":[0,0],"ti":[0,0]},{"t":121,"s":[24.501,13.159]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":110,"s":[100,100]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":120,"s":[82.272,14.44]},{"t":121,"s":[91.847,17.502]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":110,"s":[{"i":[[0,2.209],[-2.209,0],[0,0],[0,-2.209],[2.209,0],[0,0]],"o":[[0,-2.209],[0,0],[2.209,0],[0,2.209],[0,0],[-2.209,0]],"v":[[-12,16],[-8,12],[8,12],[12,16],[8,20],[-8,20]],"c":true}]},{"t":120,"s":[{"i":[[0,2.209],[-2.209,0],[0,0],[0,-2.209],[2.209,0],[0,0]],"o":[[0,-2.209],[0,0],[2.209,0],[0,2.209],[0,0],[-2.209,0]],"v":[[2.487,-20.762],[4.692,-21.657],[7.341,-21.96],[9.687,-20.243],[7.185,-17.715],[4.835,-17.739]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":110,"s":[{"i":[[0,2.209],[-2.209,0],[0,0],[0,-2.209],[2.209,0],[0,0]],"o":[[0,-2.209],[0,0],[2.209,0],[0,2.209],[0,0],[-2.209,0]],"v":[[-18,0],[-14,-4],[14,-4],[18,0],[14,4],[-14,4]],"c":true}]},{"t":120,"s":[{"i":[[0,2.209],[-2.209,0],[0,0],[0,-2.209],[2.209,0],[0,0]],"o":[[0,-2.209],[0,0],[2.209,0],[0,2.209],[0,0],[-2.209,0]],"v":[[4.617,-19.469],[8.771,-21.02],[6.47,-21.293],[10.315,-19.742],[6.159,-19.17],[8.461,-18.897]],"c":true}]}],"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":110,"s":[{"i":[[-2.209,0],[0,0],[0,-2.209],[2.209,0],[0,0],[0,2.209]],"o":[[0,0],[2.209,0],[0,2.209],[0,0],[-2.209,0],[0,-2.209]],"v":[[-14,-20],[14,-20],[18,-16],[14,-12],[-14,-12],[-18,-16]],"c":true}]},{"t":120,"s":[{"i":[[-2.209,0],[0,0],[0,-2.209],[2.209,0],[0,0],[0,2.209]],"o":[[0,0],[2.209,0],[0,2.209],[0,0],[-2.209,0],[0,-2.209]],"v":[[4.149,-21.174],[7.849,-20.316],[9.292,-20.556],[6.489,-18.028],[2.789,-18.723],[2.545,-19.138]],"c":true}]}],"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[{"i":[[0,0],[0,-1.657],[0,0],[-1.657,0],[0,0],[0,1.657],[0,0],[1.657,0]],"o":[[-1.657,0],[0,0],[0,1.657],[0,0],[1.657,0],[0,0],[0,-1.657],[0,0]],"v":[[-21,-32],[-24,-29],[-24,29],[-21,32],[21,32],[24,29],[24,-29],[21,-32]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":110,"s":[{"i":[[0,0],[-0.031,-6.458],[0,0],[-1.657,0],[0,0],[-0.137,6.568],[0,0],[1.657,0]],"o":[[-1.657,0],[0,0],[0.093,6.651],[0,0],[1.657,0],[0,0],[-0.111,-6.376],[0,0]],"v":[[-17.268,-32.006],[-23.993,-24.861],[-24.006,25.275],[-17.268,31.994],[17.268,32.006],[23.994,25.275],[24.007,-24.861],[17.268,-31.994]],"c":true}]},{"t":120,"s":[{"i":[[0,0],[0.021,-5.041],[0,0],[-1.657,0],[0,0],[-0.132,4.841],[0,0],[1.657,0]],"o":[[-2.411,0.138],[0,0],[0.088,5.741],[0,0],[1.657,0],[0,0],[-0.048,-4.962],[0,0]],"v":[[-5.475,-26.85],[-12.257,-21.5],[-12.155,-21.344],[-5.565,-15.768],[17.121,-15.779],[23.845,-20.878],[23.592,-22.013],[17.211,-26.861]],"c":true}]}],"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.670588254929,0.835294127464,0.86274510622,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[24.339,32.603],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0.099,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":6,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"Mask 2","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[48,48,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-31.75,-40],[-32,40],[31.75,40.25],[32.25,-39.75]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.239215686917,0.235294118524,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"CV1","tt":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":70,"s":[100]},{"t":71,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":1,"k":[{"i":{"x":[0.332],"y":[1.233]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[124]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[48]},{"i":{"x":[0.332],"y":[1.228]},"o":{"x":[0.167],"y":[0.167]},"t":50,"s":[48]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":70,"s":[-29.5]},{"t":90,"s":[-29.5]}],"ix":3},"y":{"a":0,"k":48,"ix":4}},"a":{"a":0,"k":[24.5,32.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":34,"nm":"Puppet","np":6,"mn":"ADBE FreePin3","ix":1,"en":1,"ef":[{"ty":7,"nm":"Puppet Engine","mn":"ADBE FreePin3 Puppet Engine","ix":1,"v":{"a":0,"k":2,"ix":1}},{"ty":0,"nm":"Mesh Rotation Refinement","mn":"ADBE FreePin3 Auto Rotate Pins","ix":2,"v":{"a":0,"k":20,"ix":2}},{"ty":7,"nm":"On Transparent","mn":"ADBE FreePin3 On Transparent","ix":3,"v":{"a":0,"k":0,"ix":3}},{"ty":"","nm":"arap","np":3,"mn":"ADBE FreePin3 ARAP Group","ix":4,"en":1,"ef":[{"ty":6,"nm":"Auto-traced Shapes","mn":"ADBE FreePin3 Outlines","ix":1,"v":0},{"ty":"","nm":"Mesh","np":1,"mn":"ADBE FreePin3 Mesh Group","ix":2,"en":1,"ef":[]}]}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.209,0],[0,0],[0,-2.209],[2.209,0],[0,0],[0,2.209]],"o":[[0,0],[2.209,0],[0,2.209],[0,0],[-2.209,0],[0,-2.209]],"v":[[-14,15],[14,15],[18,19],[14,23],[-14,23],[-18,19]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,2.209],[-2.209,0],[0,0],[0,-2.209],[2.209,0],[0,0]],"o":[[0,-2.209],[0,0],[2.209,0],[0,2.209],[0,0],[-2.209,0]],"v":[[-18,3],[-14,-1],[14,-1],[18,3],[14,7],[-14,7]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,4.694],[-4.694,0],[0,-4.694],[4.694,0]],"o":[[0,-4.694],[4.694,0],[0,4.694],[-4.694,0]],"v":[[-18,-17.5],[-9.5,-26],[-1,-17.5],[-9.5,-9]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,-1.657],[0,0],[-1.657,0],[0,0],[0,1.657],[0,0],[1.657,0]],"o":[[-1.657,0],[0,0],[0,1.657],[0,0],[1.657,0],[0,0],[0,-1.657],[0,0]],"v":[[-21,-32],[-24,-29],[-24,29],[-21,32],[21,32],[24,29],[24,-29],[21,-32]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.670588254929,0.835294127464,0.86274510622,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[24.25,32.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":6,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Frame","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":110,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":111,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":387,"s":[0]},{"t":389,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[48,48,0],"ix":2,"l":2},"a":{"a":0,"k":[40.5,48.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-1.657],[0,0],[-1.657,0],[0,0],[0,1.657],[0,0],[1.657,0]],"o":[[-1.657,0],[0,0],[0,1.657],[0,0],[1.657,0],[0,0],[0,-1.657],[0,0]],"v":[[-29,-40],[-32,-37],[-32,37],[-29,40],[29,40],[32,37],[32,-37],[29,-40]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-6.075,0],[0,0],[0,-6.075],[0,0],[6.075,0],[0,0],[0,6.075],[0,0]],"o":[[0,0],[6.075,0],[0,0],[0,6.075],[0,0],[-6.075,0],[0,0],[0,-6.075]],"v":[[-29,-48],[29,-48],[40,-37],[40,37],[29,48],[-29,48],[-40,37],[-40,-37]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.937254901961,0.780392156863,0.470588235294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[40.25,48.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0}],"markers":[]}')
    }
}]);