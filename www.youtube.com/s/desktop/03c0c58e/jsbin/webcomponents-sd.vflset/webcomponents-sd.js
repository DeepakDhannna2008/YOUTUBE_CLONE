(function() {
    /*

    Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    var k;

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }

    function ba(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }

    function p(a) {
        if (!(a instanceof Array)) {
            a = ba(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = ca(this);

    function fa() {}
    fa.prototype.toJSON = function() {
        return {}
    };

    function q(a) {
        a.__shady || (a.__shady = new fa);
        return a.__shady
    }

    function r(a) {
        return a && a.__shady
    };
    var u = window.ShadyDOM || {};
    u.Jb = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
    var ha = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
    u.j = !!(ha && ha.configurable && ha.get);
    u.inUse = u.force || !u.Jb;
    u.noPatch = u.noPatch || !1;
    u.O = u.preferPerformance;
    u.ma = "on-demand" === u.noPatch;
    var ia = navigator.userAgent.match("Trident");
    u.La = ia;

    function ja() {
        return Document.prototype.msElementsFromPoint ? "msElementsFromPoint" : "elementsFromPoint"
    }

    function v(a) {
        return (a = r(a)) && void 0 !== a.firstChild
    }

    function w(a) {
        return a instanceof ShadowRoot
    }

    function ka(a) {
        return (a = (a = r(a)) && a.root) && a.ta()
    }
    var x = Element.prototype,
        la = x.matches || x.matchesSelector || x.mozMatchesSelector || x.msMatchesSelector || x.oMatchesSelector || x.webkitMatchesSelector,
        ma = document.createTextNode(""),
        na = 0,
        oa = [];
    (new MutationObserver(function() {
        for (; oa.length;) try {
            oa.shift()()
        } catch (a) {
            throw ma.textContent = na++, a;
        }
    })).observe(ma, {
        characterData: !0
    });

    function pa(a) {
        oa.push(a);
        ma.textContent = na++
    }
    var qa = document.contains ? function(a, b) {
        return a.__shady_native_contains(b)
    } : function(a, b) {
        return a === b || a.documentElement && a.documentElement.__shady_native_contains(b)
    };

    function ra(a, b) {
        for (; b;) {
            if (b == a) return !0;
            b = b.__shady_parentNode
        }
        return !1
    }

    function sa(a) {
        for (var b = a.length - 1; 0 <= b; b--) {
            var c = a[b],
                d = c.getAttribute("id") || c.getAttribute("name");
            d && "length" !== d && isNaN(d) && (a[d] = c)
        }
        a.item = function(e) {
            return a[e]
        };
        a.namedItem = function(e) {
            if ("length" !== e && isNaN(e) && a[e]) return a[e];
            for (var f = ba(a), g = f.next(); !g.done; g = f.next())
                if (g = g.value, (g.getAttribute("id") || g.getAttribute("name")) == e) return g;
            return null
        };
        return a
    }

    function ta(a) {
        var b = [];
        for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) b.push(a);
        return b
    }

    function ua(a) {
        var b = [];
        for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b.push(a);
        return b
    }

    function va(a, b, c) {
        c.configurable = !0;
        if (c.value) a[b] = c.value;
        else try {
            Object.defineProperty(a, b, c)
        } catch (d) {}
    }

    function y(a, b, c, d) {
        c = void 0 === c ? "" : c;
        for (var e in b) d && 0 <= d.indexOf(e) || va(a, c + e, b[e])
    }

    function wa(a, b) {
        for (var c in b) c in a && va(a, c, b[c])
    }

    function z(a) {
        var b = {};
        Object.getOwnPropertyNames(a).forEach(function(c) {
            b[c] = Object.getOwnPropertyDescriptor(a, c)
        });
        return b
    }

    function xa(a, b) {
        for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length; d++) e = c[d], a[e] = b[e]
    }

    function ya(a) {
        return a instanceof Node ? a : document.createTextNode("" + a)
    }

    function B(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        if (1 === b.length) return ya(b[0]);
        c = document.createDocumentFragment();
        b = ba(b);
        for (var d = b.next(); !d.done; d = b.next()) c.appendChild(ya(d.value));
        return c
    };
    var za = [],
        Aa;

    function Ba(a) {
        Aa || (Aa = !0, pa(Ca));
        za.push(a)
    }

    function Ca() {
        Aa = !1;
        for (var a = !!za.length; za.length;) za.shift()();
        return a
    }
    Ca.list = za;

    function Da() {
        this.V = !1;
        this.addedNodes = [];
        this.removedNodes = [];
        this.Z = new Set
    }

    function Ea(a) {
        a.V || (a.V = !0, pa(function() {
            a.flush()
        }))
    }
    Da.prototype.flush = function() {
        if (this.V) {
            this.V = !1;
            var a = this.takeRecords();
            a.length && this.Z.forEach(function(b) {
                b(a)
            })
        }
    };
    Da.prototype.takeRecords = function() {
        if (this.addedNodes.length || this.removedNodes.length) {
            var a = [{
                addedNodes: this.addedNodes,
                removedNodes: this.removedNodes
            }];
            this.addedNodes = [];
            this.removedNodes = [];
            return a
        }
        return []
    };

    function Fa(a, b) {
        var c = q(a);
        c.N || (c.N = new Da);
        c.N.Z.add(b);
        var d = c.N;
        return {
            Sa: b,
            ob: d,
            nb: a,
            takeRecords: function() {
                return d.takeRecords()
            }
        }
    }

    function Ga(a) {
        var b = a && a.ob;
        b && (b.Z.delete(a.Sa), b.Z.size || (q(a.nb).N = null))
    }

    function Ha(a, b) {
        var c = b.getRootNode();
        return a.map(function(d) {
            var e = c === d.target.getRootNode();
            if (e && d.addedNodes) {
                if (e = [].slice.call(d.addedNodes).filter(function(f) {
                        return c === f.getRootNode()
                    }), e.length) return d = Object.create(d), Object.defineProperty(d, "addedNodes", {
                    value: e,
                    configurable: !0
                }), d
            } else if (e) return d
        }).filter(function(d) {
            return d
        })
    };
    var Ia = /[&\u00A0"]/g,
        Ja = /[&\u00A0<>]/g;

    function Ka(a) {
        switch (a) {
            case "&":
                return "&amp;";
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case '"':
                return "&quot;";
            case "\u00a0":
                return "&nbsp;"
        }
    }

    function La(a) {
        for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;
        return b
    }
    var Ma = La("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
        Na = La("style script xmp iframe noembed noframes plaintext noscript".split(" "));

    function Oa(a, b) {
        "template" === a.localName && (a = a.content);
        for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
            a: {
                var h = g;
                var m = a,
                    l = b;
                switch (h.nodeType) {
                    case Node.ELEMENT_NODE:
                        m = h.localName;
                        for (var n = "<" + m, t = h.attributes, A = 0, da; da = t[A]; A++) n += " " + da.name + '="' + da.value.replace(Ia, Ka) + '"';
                        n += ">";
                        h = Ma[m] ? n : n + Oa(h, l) + "</" + m + ">";
                        break a;
                    case Node.TEXT_NODE:
                        h = h.data;
                        h = m && Na[m.localName] ? h : h.replace(Ja, Ka);
                        break a;
                    case Node.COMMENT_NODE:
                        h = "\x3c!--" + h.data + "--\x3e";
                        break a;
                    default:
                        throw window.console.error(h),
                            Error("not implemented");
                }
            }
            c += h
        }
        return c
    };
    var Pa = u.j,
        Qa = {
            querySelector: function(a) {
                return this.__shady_native_querySelector(a)
            },
            querySelectorAll: function(a) {
                return this.__shady_native_querySelectorAll(a)
            }
        },
        Ra = {};

    function Sa(a) {
        Ra[a] = function(b) {
            return b["__shady_native_" + a]
        }
    }

    function Ta(a, b) {
        y(a, b, "__shady_native_");
        for (var c in b) Sa(c)
    }

    function C(a, b) {
        b = void 0 === b ? [] : b;
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Object.getOwnPropertyDescriptor(a, d);
            e && (Object.defineProperty(a, "__shady_native_" + d, e), e.value ? Qa[d] || (Qa[d] = e.value) : Sa(d))
        }
    }
    var D = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
        E = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
        Ua = document.implementation.createHTMLDocument("inert");

    function Va(a) {
        for (var b; b = a.__shady_native_firstChild;) a.__shady_native_removeChild(b)
    }
    var Wa = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
        Xa = ["querySelector", "querySelectorAll", "append", "prepend", "replaceChildren"];

    function Ya() {
        var a = ["dispatchEvent", "addEventListener", "removeEventListener"];
        window.EventTarget ? (C(window.EventTarget.prototype, a), void 0 === window.__shady_native_addEventListener && C(Window.prototype, a)) : (C(Node.prototype, a), C(Window.prototype, a));
        Pa ? C(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : Ta(Node.prototype, {
            parentNode: {
                get: function() {
                    D.currentNode = this;
                    return D.parentNode()
                }
            },
            firstChild: {
                get: function() {
                    D.currentNode =
                        this;
                    return D.firstChild()
                }
            },
            lastChild: {
                get: function() {
                    D.currentNode = this;
                    return D.lastChild()
                }
            },
            previousSibling: {
                get: function() {
                    D.currentNode = this;
                    return D.previousSibling()
                }
            },
            nextSibling: {
                get: function() {
                    D.currentNode = this;
                    return D.nextSibling()
                }
            },
            childNodes: {
                get: function() {
                    var b = [];
                    D.currentNode = this;
                    for (var c = D.firstChild(); c;) b.push(c), c = D.nextSibling();
                    return b
                }
            },
            parentElement: {
                get: function() {
                    E.currentNode = this;
                    return E.parentNode()
                }
            },
            textContent: {
                get: function() {
                    switch (this.nodeType) {
                        case Node.ELEMENT_NODE:
                        case Node.DOCUMENT_FRAGMENT_NODE:
                            for (var b =
                                    document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), c = "", d; d = b.nextNode();) c += d.nodeValue;
                            return c;
                        default:
                            return this.nodeValue
                    }
                },
                set: function(b) {
                    if ("undefined" === typeof b || null === b) b = "";
                    switch (this.nodeType) {
                        case Node.ELEMENT_NODE:
                        case Node.DOCUMENT_FRAGMENT_NODE:
                            Va(this);
                            (0 < b.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(b), void 0);
                            break;
                        default:
                            this.nodeValue = b
                    }
                }
            }
        });
        C(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
        C(HTMLElement.prototype, ["parentElement", "contains"]);
        a = {
            firstElementChild: {
                get: function() {
                    E.currentNode = this;
                    return E.firstChild()
                }
            },
            lastElementChild: {
                get: function() {
                    E.currentNode = this;
                    return E.lastChild()
                }
            },
            children: {
                get: function() {
                    var b = [];
                    E.currentNode = this;
                    for (var c = E.firstChild(); c;) b.push(c), c = E.nextSibling();
                    return sa(b)
                }
            },
            childElementCount: {
                get: function() {
                    return this.children ? this.children.length : 0
                }
            }
        };
        Pa ? (C(Element.prototype, Wa), C(Element.prototype, ["previousElementSibling", "nextElementSibling",
            "innerHTML", "className"
        ]), C(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (Ta(Element.prototype, a), Ta(Element.prototype, {
            previousElementSibling: {
                get: function() {
                    E.currentNode = this;
                    return E.previousSibling()
                }
            },
            nextElementSibling: {
                get: function() {
                    E.currentNode = this;
                    return E.nextSibling()
                }
            },
            innerHTML: {
                get: function() {
                    return Oa(this, ta)
                },
                set: function(b) {
                    var c = "template" === this.localName ? this.content : this;
                    Va(c);
                    var d = this.localName || "div";
                    d = this.namespaceURI && this.namespaceURI !== Ua.namespaceURI ?
                        Ua.createElementNS(this.namespaceURI, d) : Ua.createElement(d);
                    d.innerHTML = b;
                    for (b = "template" === this.localName ? d.content : d; d = b.__shady_native_firstChild;) c.__shady_native_insertBefore(d, void 0)
                }
            },
            className: {
                get: function() {
                    return this.getAttribute("class") || ""
                },
                set: function(b) {
                    this.setAttribute("class", b)
                }
            }
        }));
        C(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));
        C(Element.prototype, Xa);
        C(HTMLElement.prototype, ["focus", "blur"]);
        window.HTMLTemplateElement &&
            C(window.HTMLTemplateElement.prototype, ["innerHTML"]);
        Pa ? C(DocumentFragment.prototype, Wa) : Ta(DocumentFragment.prototype, a);
        C(DocumentFragment.prototype, Xa);
        Pa ? (C(Document.prototype, Wa), C(Document.prototype, ["activeElement"])) : Ta(Document.prototype, a);
        C(Document.prototype, ["importNode", "getElementById", "elementFromPoint", ja()]);
        C(Document.prototype, Xa)
    };
    var Za = z({
            get childNodes() {
                return this.__shady_childNodes
            },
            get firstChild() {
                return this.__shady_firstChild
            },
            get lastChild() {
                return this.__shady_lastChild
            },
            get childElementCount() {
                return this.__shady_childElementCount
            },
            get children() {
                return this.__shady_children
            },
            get firstElementChild() {
                return this.__shady_firstElementChild
            },
            get lastElementChild() {
                return this.__shady_lastElementChild
            },
            get shadowRoot() {
                return this.__shady_shadowRoot
            }
        }),
        $a = z({
            get textContent() {
                return this.__shady_textContent
            },
            set textContent(a) {
                this.__shady_textContent =
                    a
            },
            get innerHTML() {
                return this.__shady_innerHTML
            },
            set innerHTML(a) {
                this.__shady_innerHTML = a
            }
        }),
        ab = z({
            get parentElement() {
                return this.__shady_parentElement
            },
            get parentNode() {
                return this.__shady_parentNode
            },
            get nextSibling() {
                return this.__shady_nextSibling
            },
            get previousSibling() {
                return this.__shady_previousSibling
            },
            get nextElementSibling() {
                return this.__shady_nextElementSibling
            },
            get previousElementSibling() {
                return this.__shady_previousElementSibling
            },
            get className() {
                return this.__shady_className
            },
            set className(a) {
                this.__shady_className =
                    a
            }
        });

    function bb(a) {
        for (var b in a) {
            var c = a[b];
            c && (c.enumerable = !1)
        }
    }
    bb(Za);
    bb($a);
    bb(ab);
    var cb = u.j || !0 === u.noPatch,
        db = cb ? function() {} : function(a) {
            var b = q(a);
            b.Oa || (b.Oa = !0, wa(a, ab))
        },
        eb = cb ? function() {} : function(a) {
            var b = q(a);
            b.Na || (b.Na = !0, wa(a, Za), window.customElements && window.customElements.polyfillWrapFlushCallback && !u.noPatch || wa(a, $a))
        };
    var fb = "__eventWrappers" + Date.now(),
        gb = function() {
            var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed");
            return a ? function(b) {
                return a.get.call(b)
            } : null
        }(),
        hb = function() {
            function a() {}
            var b = !1,
                c = {
                    get capture() {
                        b = !0;
                        return !1
                    }
                };
            window.addEventListener("test", a, c);
            window.removeEventListener("test", a, c);
            return b
        }();

    function ib(a) {
        if (null === a || "object" !== typeof a && "function" !== typeof a) {
            var b = !!a;
            var c = !1
        } else {
            b = !!a.capture;
            c = !!a.once;
            var d = a.G
        }
        return {
            Ia: d,
            capture: b,
            once: c,
            Ha: hb ? a : b
        }
    }
    var jb = {
            blur: !0,
            focus: !0,
            focusin: !0,
            focusout: !0,
            click: !0,
            dblclick: !0,
            mousedown: !0,
            mouseenter: !0,
            mouseleave: !0,
            mousemove: !0,
            mouseout: !0,
            mouseover: !0,
            mouseup: !0,
            wheel: !0,
            beforeinput: !0,
            input: !0,
            keydown: !0,
            keyup: !0,
            compositionstart: !0,
            compositionupdate: !0,
            compositionend: !0,
            touchstart: !0,
            touchend: !0,
            touchmove: !0,
            touchcancel: !0,
            pointerover: !0,
            pointerenter: !0,
            pointerdown: !0,
            pointermove: !0,
            pointerup: !0,
            pointercancel: !0,
            pointerout: !0,
            pointerleave: !0,
            gotpointercapture: !0,
            lostpointercapture: !0,
            dragstart: !0,
            drag: !0,
            dragenter: !0,
            dragleave: !0,
            dragover: !0,
            drop: !0,
            dragend: !0,
            DOMActivate: !0,
            DOMFocusIn: !0,
            DOMFocusOut: !0,
            keypress: !0
        },
        kb = {
            DOMAttrModified: !0,
            DOMAttributeNameChanged: !0,
            DOMCharacterDataModified: !0,
            DOMElementNameChanged: !0,
            DOMNodeInserted: !0,
            DOMNodeInsertedIntoDocument: !0,
            DOMNodeRemoved: !0,
            DOMNodeRemovedFromDocument: !0,
            DOMSubtreeModified: !0
        };

    function lb(a) {
        return a instanceof Node ? a.__shady_getRootNode() : a
    }

    function mb(a, b) {
        var c = [],
            d = a;
        for (a = lb(a); d;) c.push(d), d = d.__shady_assignedSlot ? d.__shady_assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.__shady_parentNode;
        c[c.length - 1] === document && c.push(window);
        return c
    }

    function nb(a) {
        a.__composedPath || (a.__composedPath = mb(a.target, !0));
        return a.__composedPath
    }

    function ob(a, b) {
        if (!w) return a;
        a = mb(a, !0);
        for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++)
            if (d = b[c], f = lb(d), f !== e && (g = a.indexOf(f), e = f), !w(f) || -1 < g) return d
    }
    var pb = {
            get composed() {
                void 0 === this.__composed && (gb ? this.__composed = "focusin" === this.type || "focusout" === this.type || gb(this) : !1 !== this.isTrusted && (this.__composed = jb[this.type]));
                return this.__composed || !1
            },
            composedPath: function() {
                this.__composedPath || (this.__composedPath = mb(this.__target, this.composed));
                return this.__composedPath
            },
            get target() {
                return ob(this.currentTarget || this.__previousCurrentTarget, this.composedPath())
            },
            get relatedTarget() {
                if (!this.__relatedTarget) return null;
                this.__relatedTargetComposedPath ||
                    (this.__relatedTargetComposedPath = mb(this.__relatedTarget, !0));
                return ob(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath)
            },
            stopPropagation: function() {
                Event.prototype.stopPropagation.call(this);
                this.ca = !0
            },
            stopImmediatePropagation: function() {
                Event.prototype.stopImmediatePropagation.call(this);
                this.ca = this.__immediatePropagationStopped = !0
            }
        },
        qb = u.j && Object.getOwnPropertyDescriptor(Event.prototype, "eventPhase");
    qb && (Object.defineProperty(pb, "eventPhase", {
        get: function() {
            return this.currentTarget === this.target ? Event.AT_TARGET : this.__shady_native_eventPhase
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(pb, "__shady_native_eventPhase", qb));

    function rb(a) {
        function b(c, d) {
            c = new a(c, d);
            c.__composed = d && !!d.composed;
            return c
        }
        b.__proto__ = a;
        b.prototype = a.prototype;
        return b
    }
    var sb = {
        focus: !0,
        blur: !0
    };

    function tb(a) {
        return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget
    }

    function ub(a, b, c) {
        if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c])
            for (var d = 0, e;
                (e = c[d]) && (!tb(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.__immediatePropagationStopped); d++);
    }

    function vb(a) {
        var b = a.composedPath(),
            c = b.map(function(m) {
                return ob(m, b)
            }),
            d = a.bubbles;
        Object.defineProperty(a, "currentTarget", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return g
            }
        });
        var e = Event.CAPTURING_PHASE;
        Object.defineProperty(a, "eventPhase", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return e
            }
        });
        for (var f = b.length - 1; 0 <= f; f--) {
            var g = b[f];
            e = g === c[f] ? Event.AT_TARGET : Event.CAPTURING_PHASE;
            ub(a, g, "capture");
            if (a.ca) return
        }
        for (f = 0; f < b.length; f++) {
            g = b[f];
            var h = g === c[f];
            if (h || d)
                if (e = h ? Event.AT_TARGET :
                    Event.BUBBLING_PHASE, ub(a, g, "bubble"), a.ca) return
        }
        e = 0;
        g = null
    }

    function wb(a, b, c, d) {
        for (var e = 0; e < a.length; e++) {
            var f = a[e],
                g = f.type,
                h = f.capture;
            if (b === f.node && c === g && d === h) return e
        }
        return -1
    }

    function xb(a) {
        Ca();
        return !u.O && this instanceof Node && !qa(document, this) ? (a.__target || yb(a, this), vb(a)) : this.__shady_native_dispatchEvent(a)
    }

    function zb(a, b, c) {
        var d = this,
            e = ib(c),
            f = e.capture,
            g = e.once,
            h = e.Ia;
        e = e.Ha;
        if (b) {
            var m = typeof b;
            if ("function" === m || "object" === m)
                if ("object" !== m || b.handleEvent && "function" === typeof b.handleEvent) {
                    if (kb[a]) return this.__shady_native_addEventListener(a, b, e);
                    var l = h || this;
                    if (h = b[fb]) {
                        if (-1 < wb(h, l, a, f)) return
                    } else b[fb] = [];
                    h = function(n) {
                        g && d.__shady_removeEventListener(a, b, c);
                        n.__target || yb(n);
                        if (l !== d) {
                            var t = Object.getOwnPropertyDescriptor(n, "currentTarget");
                            Object.defineProperty(n, "currentTarget", {
                                get: function() {
                                    return l
                                },
                                configurable: !0
                            });
                            var A = Object.getOwnPropertyDescriptor(n, "eventPhase");
                            Object.defineProperty(n, "eventPhase", {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return f ? Event.CAPTURING_PHASE : Event.BUBBLING_PHASE
                                }
                            })
                        }
                        n.__previousCurrentTarget = n.currentTarget;
                        if (!w(l) && "slot" !== l.localName || -1 != n.composedPath().indexOf(l))
                            if (n.composed || -1 < n.composedPath().indexOf(l))
                                if (tb(n) && n.target === n.relatedTarget) n.eventPhase === Event.BUBBLING_PHASE && n.stopImmediatePropagation();
                                else if (n.eventPhase === Event.CAPTURING_PHASE ||
                            n.bubbles || n.target === l || l instanceof Window) {
                            var da = "function" === m ? b.call(l, n) : b.handleEvent && b.handleEvent(n);
                            l !== d && (t ? (Object.defineProperty(n, "currentTarget", t), t = null) : delete n.currentTarget, A ? (Object.defineProperty(n, "eventPhase", A), A = null) : delete n.eventPhase);
                            return da
                        }
                    };
                    b[fb].push({
                        node: l,
                        type: a,
                        capture: f,
                        Wb: h
                    });
                    this.__handlers = this.__handlers || {};
                    this.__handlers[a] = this.__handlers[a] || {
                        capture: [],
                        bubble: []
                    };
                    this.__handlers[a][f ? "capture" : "bubble"].push(h);
                    sb[a] || this.__shady_native_addEventListener(a,
                        h, e)
                }
        }
    }

    function Ab(a, b, c) {
        if (b) {
            var d = ib(c);
            c = d.capture;
            var e = d.Ia;
            d = d.Ha;
            if (kb[a]) return this.__shady_native_removeEventListener(a, b, d);
            var f = e || this;
            e = void 0;
            var g = null;
            try {
                g = b[fb]
            } catch (h) {}
            g && (f = wb(g, f, a, c), -1 < f && (e = g.splice(f, 1)[0].Wb, g.length || (b[fb] = void 0)));
            this.__shady_native_removeEventListener(a, e || b, d);
            e && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][c ? "capture" : "bubble"], b = a.indexOf(e), -1 < b && a.splice(b, 1))
        }
    }

    function Bb() {
        for (var a in sb) window.__shady_native_addEventListener(a, function(b) {
            b.__target || (yb(b), vb(b))
        }, !0)
    }
    var Cb = z(pb);

    function yb(a, b) {
        b = void 0 === b ? a.target : b;
        a.__target = b;
        a.__relatedTarget = a.relatedTarget;
        if (u.j) {
            b = Object.getPrototypeOf(a);
            if (!b.hasOwnProperty("__shady_patchedProto")) {
                var c = Object.create(b);
                c.__shady_sourceProto = b;
                y(c, Cb);
                b.__shady_patchedProto = c
            }
            a.__proto__ = b.__shady_patchedProto
        } else y(a, Cb)
    }
    var Db = rb(Event),
        Eb = rb(CustomEvent),
        Fb = rb(MouseEvent);

    function Gb() {
        if (!gb && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
            var a = function() {
                var b = new MouseEvent("click", {
                    bubbles: !0,
                    cancelable: !0,
                    composed: !0
                });
                this.__shady_dispatchEvent(b)
            };
            Element.prototype.click ? Element.prototype.click = a : HTMLElement.prototype.click && (HTMLElement.prototype.click = a)
        }
    }
    var Hb = Object.getOwnPropertyNames(Element.prototype).filter(function(a) {
            return "on" === a.substring(0, 2)
        }),
        Ib = Object.getOwnPropertyNames(HTMLElement.prototype).filter(function(a) {
            return "on" === a.substring(0, 2)
        });

    function Jb(a) {
        return {
            set: function(b) {
                var c = q(this),
                    d = a.substring(2);
                c.F || (c.F = {});
                c.F[a] && this.removeEventListener(d, c.F[a]);
                this.__shady_addEventListener(d, b);
                c.F[a] = b
            },
            get: function() {
                var b = r(this);
                return b && b.F && b.F[a]
            },
            configurable: !0
        }
    };

    function Kb(a, b) {
        return {
            index: a,
            P: [],
            Y: b
        }
    }

    function Lb(a, b, c, d) {
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            m = Math.min(b - e, d - f);
        if (0 == e && 0 == f) a: {
            for (g = 0; g < m; g++)
                if (a[g] !== c[g]) break a;g = m
        }
        if (b == a.length && d == c.length) {
            h = a.length;
            for (var l = c.length, n = 0; n < m - g && Mb(a[--h], c[--l]);) n++;
            h = n
        }
        e += g;
        f += g;
        b -= h;
        d -= h;
        if (0 == b - e && 0 == d - f) return [];
        if (e == b) {
            for (b = Kb(e, 0); f < d;) b.P.push(c[f++]);
            return [b]
        }
        if (f == d) return [Kb(e, b - e)];
        m = e;
        g = f;
        d = d - g + 1;
        h = b - m + 1;
        b = Array(d);
        for (l = 0; l < d; l++) b[l] = Array(h), b[l][0] = l;
        for (l = 0; l < h; l++) b[0][l] = l;
        for (l = 1; l < d; l++)
            for (n = 1; n < h; n++)
                if (a[m + n - 1] === c[g + l - 1]) b[l][n] =
                    b[l - 1][n - 1];
                else {
                    var t = b[l - 1][n] + 1,
                        A = b[l][n - 1] + 1;
                    b[l][n] = t < A ? t : A
                }
        m = b.length - 1;
        g = b[0].length - 1;
        d = b[m][g];
        for (a = []; 0 < m || 0 < g;) 0 == m ? (a.push(2), g--) : 0 == g ? (a.push(3), m--) : (h = b[m - 1][g - 1], l = b[m - 1][g], n = b[m][g - 1], t = l < n ? l < h ? l : h : n < h ? n : h, t == h ? (h == d ? a.push(0) : (a.push(1), d = h), m--, g--) : t == l ? (a.push(3), m--, d = l) : (a.push(2), g--, d = n));
        a.reverse();
        b = void 0;
        m = [];
        for (g = 0; g < a.length; g++) switch (a[g]) {
            case 0:
                b && (m.push(b), b = void 0);
                e++;
                f++;
                break;
            case 1:
                b || (b = Kb(e, 0));
                b.Y++;
                e++;
                b.P.push(c[f]);
                f++;
                break;
            case 2:
                b || (b = Kb(e, 0));
                b.Y++;
                e++;
                break;
            case 3:
                b || (b = Kb(e, 0)), b.P.push(c[f]), f++
        }
        b && m.push(b);
        return m
    }

    function Mb(a, b) {
        return a === b
    };
    var Nb = z({
        dispatchEvent: xb,
        addEventListener: zb,
        removeEventListener: Ab
    });
    var Ob = null;

    function F() {
        Ob || (Ob = window.ShadyCSS && window.ShadyCSS.ScopingShim);
        return Ob || null
    }

    function Pb(a, b, c) {
        var d = F();
        return d && "class" === b ? (d.setElementClass(a, c), !0) : !1
    }

    function Qb(a, b) {
        var c = F();
        c && c.unscopeNode(a, b)
    }

    function Rb(a, b) {
        var c = F();
        if (!c) return !0;
        if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            c = !0;
            for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) c = c && Rb(a, b);
            return c
        }
        return a.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a) === b
    }

    function Sb(a) {
        if (a.nodeType !== Node.ELEMENT_NODE) return "";
        var b = F();
        return b ? b.currentScopeForNode(a) : ""
    }

    function Tb(a, b) {
        if (a)
            for (a.nodeType === Node.ELEMENT_NODE && b(a), a = a.__shady_firstChild; a; a = a.__shady_nextSibling) a.nodeType === Node.ELEMENT_NODE && Tb(a, b)
    };
    var Ub = window.document,
        Vb = u.O,
        Wb = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
        Xb = Wb && Wb.get;

    function Yb(a) {
        for (var b; b = a.__shady_firstChild;) a.__shady_removeChild(b)
    }

    function Zb(a) {
        var b = r(a);
        if (b && void 0 !== b.ba)
            for (b = a.__shady_firstChild; b; b = b.__shady_nextSibling) Zb(b);
        if (a = r(a)) a.ba = void 0
    }

    function $b(a) {
        var b = a;
        if (a && "slot" === a.localName) {
            var c = r(a);
            (c = c && c.K) && (b = c.length ? c[0] : $b(a.__shady_nextSibling))
        }
        return b
    }

    function ac(a, b, c) {
        if (a = (a = r(a)) && a.N) {
            if (b)
                if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
                    for (var d = 0, e = b.childNodes.length; d < e; d++) a.addedNodes.push(b.childNodes[d]);
                else a.addedNodes.push(b);
            c && a.removedNodes.push(c);
            Ea(a)
        }
    }
    var dc = z({
        get parentNode() {
            var a = r(this);
            a = a && a.parentNode;
            return void 0 !== a ? a : this.__shady_native_parentNode
        },
        get firstChild() {
            var a = r(this);
            a = a && a.firstChild;
            return void 0 !== a ? a : this.__shady_native_firstChild
        },
        get lastChild() {
            var a = r(this);
            a = a && a.lastChild;
            return void 0 !== a ? a : this.__shady_native_lastChild
        },
        get nextSibling() {
            var a = r(this);
            a = a && a.nextSibling;
            return void 0 !== a ? a : this.__shady_native_nextSibling
        },
        get previousSibling() {
            var a = r(this);
            a = a && a.previousSibling;
            return void 0 !== a ? a : this.__shady_native_previousSibling
        },
        get childNodes() {
            if (v(this)) {
                var a = r(this);
                if (!a.childNodes) {
                    a.childNodes = [];
                    for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) a.childNodes.push(b)
                }
                var c = a.childNodes
            } else c = this.__shady_native_childNodes;
            c.item = function(d) {
                return c[d]
            };
            return c
        },
        get parentElement() {
            var a = r(this);
            (a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);
            return void 0 !== a ? a : this.__shady_native_parentElement
        },
        get isConnected() {
            if (Xb && Xb.call(this)) return !0;
            if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
            var a = this.ownerDocument;
            if (null === a || qa(a, this)) return !0;
            for (a = this; a && !(a instanceof Document);) a = a.__shady_parentNode || (w(a) ? a.host : void 0);
            return !!(a && a instanceof Document)
        },
        get textContent() {
            if (v(this)) {
                for (var a = [], b = this.__shady_firstChild; b; b = b.__shady_nextSibling) b.nodeType !== Node.COMMENT_NODE && a.push(b.__shady_textContent);
                return a.join("")
            }
            return this.__shady_native_textContent
        },
        set textContent(a) {
            if ("undefined" === typeof a || null === a) a = "";
            switch (this.nodeType) {
                case Node.ELEMENT_NODE:
                case Node.DOCUMENT_FRAGMENT_NODE:
                    if (!v(this) &&
                        u.j) {
                        var b = this.__shady_firstChild;
                        (b != this.__shady_lastChild || b && b.nodeType != Node.TEXT_NODE) && Yb(this);
                        this.__shady_native_textContent = a
                    } else Yb(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a));
                    break;
                default:
                    this.nodeValue = a
            }
        },
        insertBefore: function(a, b) {
            if (this.ownerDocument !== Ub && a.ownerDocument !== Ub) return this.__shady_native_insertBefore(a, b), a;
            if (a === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
            if (b) {
                var c = r(b);
                c = c && c.parentNode;
                if (void 0 !== c && c !== this || void 0 === c && b.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
            }
            if (b === a) return a;
            ac(this, a);
            var d = [],
                e = (c = G(this)) ? c.host.localName : Sb(this),
                f = a.__shady_parentNode;
            if (f) {
                var g = Sb(a);
                var h = !!c || !G(a) || Vb && void 0 !== this.__noInsertionPoint;
                f.__shady_removeChild(a, h)
            }
            f = !0;
            var m = (!Vb || void 0 === a.__noInsertionPoint && void 0 ===
                    this.__noInsertionPoint) && !Rb(a, e),
                l = c && !a.__noInsertionPoint && (!Vb || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
            if (l || m) m && (g = g || Sb(a)), Tb(a, function(n) {
                l && "slot" === n.localName && d.push(n);
                if (m) {
                    var t = g;
                    F() && (t && Qb(n, t), (t = F()) && t.scopeNode(n, e))
                }
            });
            d.length && (c.pa(d), c.s());
            v(this) && (bc(a, this, b), h = r(this), h.root ? (f = !1, ka(this) && h.root.s()) : c && "slot" === this.localName && (f = !1, c.s()));
            f ? (c = w(this) ? this.host : this, b ? (b = $b(b), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a)) : a.ownerDocument !==
                this.ownerDocument && this.ownerDocument.adoptNode(a);
            return a
        },
        appendChild: function(a) {
            if (this != a || !w(a)) return this.__shady_insertBefore(a)
        },
        removeChild: function(a, b) {
            b = void 0 === b ? !1 : b;
            if (this.ownerDocument !== Ub) return this.__shady_native_removeChild(a);
            if (a.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a);
            ac(this, null, a);
            var c = G(a),
                d = c && c.rb(a),
                e = r(this);
            if (v(this) && (cc(a, this), ka(this))) {
                e.root.s();
                var f = !0
            }
            if (F() && !b && c && a.nodeType !== Node.TEXT_NODE) {
                var g =
                    Sb(a);
                Tb(a, function(h) {
                    Qb(h, g)
                })
            }
            Zb(a);
            c && ((b = "slot" === this.localName) && (f = !0), (d || b) && c.s());
            f || (f = w(this) ? this.host : this, (!e.root && "slot" !== a.localName || f === a.__shady_native_parentNode) && f.__shady_native_removeChild(a));
            return a
        },
        replaceChild: function(a, b) {
            this.__shady_insertBefore(a, b);
            this.__shady_removeChild(b);
            return a
        },
        cloneNode: function(a) {
            if ("template" == this.localName) return this.__shady_native_cloneNode(a);
            var b = this.__shady_native_cloneNode(!1);
            if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
                a =
                    this.__shady_firstChild;
                for (var c; a; a = a.__shady_nextSibling) c = a.__shady_cloneNode(!0), b.__shady_appendChild(c)
            }
            return b
        },
        getRootNode: function(a) {
            if (this && this.nodeType) {
                var b = q(this),
                    c = b.ba;
                void 0 === c && (w(this) ? (c = this, b.ba = c) : (c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this, document.documentElement.__shady_native_contains(this) && (b.ba = c)));
                return c
            }
        },
        contains: function(a) {
            return ra(this, a)
        }
    });
    var ec = z({
        get assignedSlot() {
            var a = this.__shady_parentNode;
            (a = a && a.__shady_shadowRoot) && a.U();
            return (a = r(this)) && a.assignedSlot || null
        }
    });

    function fc(a, b, c) {
        var d = [];
        gc(a, b, c, d);
        return d
    }

    function gc(a, b, c, d) {
        for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
            var e;
            if (e = a.nodeType === Node.ELEMENT_NODE) {
                e = a;
                var f = b,
                    g = c,
                    h = d,
                    m = f(e);
                m && h.push(e);
                g && g(m) ? e = m : (gc(e, f, g, h), e = void 0)
            }
            if (e) break
        }
    }
    var hc = {
            get firstElementChild() {
                var a = r(this);
                if (a && void 0 !== a.firstChild) {
                    for (a = this.__shady_firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;
                    return a
                }
                return this.__shady_native_firstElementChild
            },
            get lastElementChild() {
                var a = r(this);
                if (a && void 0 !== a.lastChild) {
                    for (a = this.__shady_lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;
                    return a
                }
                return this.__shady_native_lastElementChild
            },
            get children() {
                return v(this) ? sa(Array.prototype.filter.call(ua(this), function(a) {
                    return a.nodeType ===
                        Node.ELEMENT_NODE
                })) : this.__shady_native_children
            },
            get childElementCount() {
                var a = this.__shady_children;
                return a ? a.length : 0
            }
        },
        H = z((hc.append = function(a) {
            for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
            this.__shady_insertBefore(B.apply(null, p(b)), null)
        }, hc.prepend = function(a) {
            for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
            this.__shady_insertBefore(B.apply(null, p(b)), this.__shady_firstChild)
        }, hc.replaceChildren = function(a) {
            for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
            for (; null !== (c = this.__shady_firstChild);) this.__shady_removeChild(c);
            this.__shady_insertBefore(B.apply(null, p(b)), null)
        }, hc)),
        ic = z({
            querySelector: function(a) {
                return fc(this, function(b) {
                    return la.call(b, a)
                }, function(b) {
                    return !!b
                })[0] || null
            },
            querySelectorAll: function(a, b) {
                if (b) {
                    b = Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));
                    var c = this.__shady_getRootNode();
                    return sa(b.filter(function(d) {
                        return d.__shady_getRootNode() == c
                    }))
                }
                return sa(fc(this, function(d) {
                    return la.call(d, a)
                }))
            }
        }),
        jc = u.O && !u.noPatch ? xa({}, H) : H;
    xa(H, ic);
    /*

    Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    var kc = z({
        after: function(a) {
            for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
            c = this.__shady_parentNode;
            if (null !== c) {
                var d = this.__shady_nextSibling;
                c.__shady_insertBefore(B.apply(null, p(b)), d)
            }
        },
        before: function(a) {
            for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
            c = this.__shady_parentNode;
            null !== c && c.__shady_insertBefore(B.apply(null, p(b)), this)
        },
        remove: function() {
            var a = this.__shady_parentNode;
            null !== a && a.__shady_removeChild(this)
        },
        replaceWith: function(a) {
            for (var b = [], c = 0; c < arguments.length; ++c) b[c -
                0] = arguments[c];
            c = this.__shady_parentNode;
            if (null !== c) {
                var d = this.__shady_nextSibling;
                c.__shady_removeChild(this);
                c.__shady_insertBefore(B.apply(null, p(b)), d)
            }
        }
    });
    var lc = window.document;

    function mc(a, b) {
        "slot" === b ? (a = a.__shady_parentNode, ka(a) && r(a).root.s()) : "slot" === a.localName && "name" === b && (b = G(a)) && (b.Eb(a), b.s())
    }
    var nc = z({
        get previousElementSibling() {
            var a = r(this);
            if (a && void 0 !== a.previousSibling) {
                for (a = this.__shady_previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;
                return a
            }
            return this.__shady_native_previousElementSibling
        },
        get nextElementSibling() {
            var a = r(this);
            if (a && void 0 !== a.nextSibling) {
                for (a = this.__shady_nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;
                return a
            }
            return this.__shady_native_nextElementSibling
        },
        get slot() {
            return this.getAttribute("slot")
        },
        set slot(a) {
            this.__shady_setAttribute("slot", a)
        },
        get className() {
            return this.getAttribute("class") || ""
        },
        set className(a) {
            this.__shady_setAttribute("class", a)
        },
        setAttribute: function(a, b) {
            this.ownerDocument !== lc ? this.__shady_native_setAttribute(a, b) : Pb(this, a, b) || (this.__shady_native_setAttribute(a, b), mc(this, a))
        },
        removeAttribute: function(a) {
            this.ownerDocument !== lc ? this.__shady_native_removeAttribute(a) : Pb(this, a, "") ? "" === this.getAttribute(a) && this.__shady_native_removeAttribute(a) : (this.__shady_native_removeAttribute(a),
                mc(this, a))
        }
    });
    u.O || Hb.forEach(function(a) {
        nc[a] = Jb(a)
    });
    var rc = z({
        attachShadow: function(a) {
            if (!this) throw Error("Must provide a host.");
            if (!a) throw Error("Not enough arguments.");
            if (a.shadyUpgradeFragment && !u.La) {
                var b = a.shadyUpgradeFragment;
                b.__proto__ = ShadowRoot.prototype;
                b.va(this, a);
                oc(b, b);
                a = b.__noInsertionPoint ? null : b.querySelectorAll("slot");
                b.__noInsertionPoint = void 0;
                a && a.length && (b.pa(a), b.s());
                b.host.__shady_native_appendChild(b)
            } else b = new pc(qc, this, a);
            return this.__CE_shadowRoot = b
        },
        get shadowRoot() {
            var a = r(this);
            return a && a.Ob || null
        }
    });
    xa(nc, rc);
    var sc = document.implementation.createHTMLDocument("inert"),
        tc = z({
            get innerHTML() {
                return v(this) ? Oa("template" === this.localName ? this.content : this, ua) : this.__shady_native_innerHTML
            },
            set innerHTML(a) {
                if ("template" === this.localName) this.__shady_native_innerHTML = a;
                else {
                    Yb(this);
                    var b = this.localName || "div";
                    b = this.namespaceURI && this.namespaceURI !== sc.namespaceURI ? sc.createElementNS(this.namespaceURI, b) : sc.createElement(b);
                    for (u.j ? b.__shady_native_innerHTML = a : b.innerHTML = a; a = b.__shady_firstChild;) this.__shady_insertBefore(a)
                }
            }
        });
    var uc = z({
        blur: function() {
            var a = r(this);
            (a = (a = a && a.root) && a.activeElement) ? a.__shady_blur(): this.__shady_native_blur()
        }
    });
    u.O || Ib.forEach(function(a) {
        uc[a] = Jb(a)
    });
    var vc = z({
        assignedNodes: function(a) {
            if ("slot" === this.localName) {
                var b = this.__shady_getRootNode();
                b && w(b) && b.U();
                return (b = r(this)) ? (a && a.flatten ? b.K : b.assignedNodes) || [] : []
            }
        },
        addEventListener: function(a, b, c) {
            if ("slot" !== this.localName || "slotchange" === a) zb.call(this, a, b, c);
            else {
                "object" !== typeof c && (c = {
                    capture: !!c
                });
                var d = this.__shady_parentNode;
                if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
                c.G = this;
                d.__shady_addEventListener(a, b, c)
            }
        },
        removeEventListener: function(a,
            b, c) {
            if ("slot" !== this.localName || "slotchange" === a) Ab.call(this, a, b, c);
            else {
                "object" !== typeof c && (c = {
                    capture: !!c
                });
                var d = this.__shady_parentNode;
                if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
                c.G = this;
                d.__shady_removeEventListener(a, b, c)
            }
        }
    });
    var wc = z({
        getElementById: function(a) {
            return "" === a ? null : fc(this, function(b) {
                return b.id == a
            }, function(b) {
                return !!b
            })[0] || null
        }
    });

    function xc(a, b) {
        for (var c; b && !a.has(c = b.__shady_getRootNode());) b = c.host;
        return b
    }

    function yc(a) {
        var b = new Set;
        for (b.add(a); w(a) && a.host;) a = a.host.__shady_getRootNode(), b.add(a);
        return b
    }
    var zc = "__shady_native_" + ja(),
        Ac = z({
            get activeElement() {
                var a = u.j ? document.__shady_native_activeElement : document.activeElement;
                if (!a || !a.nodeType) return null;
                var b = !!w(this);
                if (!(this === document || b && this.host !== a && this.host.__shady_native_contains(a))) return null;
                for (b = G(a); b && b !== this;) a = b.host, b = G(a);
                return this === document ? b ? null : a : b === this ? a : null
            },
            elementsFromPoint: function(a, b) {
                a = document[zc](a, b);
                if (this === document && u.useNativeDocumentEFP) return a;
                a = [].slice.call(a);
                b = yc(this);
                for (var c = new Set,
                        d = 0; d < a.length; d++) c.add(xc(b, a[d]));
                var e = [];
                c.forEach(function(f) {
                    return e.push(f)
                });
                return e
            },
            elementFromPoint: function(a, b) {
                return this === document && u.useNativeDocumentEFP ? this.__shady_native_elementFromPoint(a, b) : this.__shady_elementsFromPoint(a, b)[0] || null
            }
        });
    var Bc = window.document,
        Cc = z({
            importNode: function(a, b) {
                if (a.ownerDocument !== Bc || "template" === a.localName) return this.__shady_native_importNode(a, b);
                var c = this.__shady_native_importNode(a, !1);
                if (b)
                    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b = this.__shady_importNode(a, !0), c.__shady_appendChild(b);
                return c
            }
        });
    var Dc = z({
        dispatchEvent: xb,
        addEventListener: zb.bind(window),
        removeEventListener: Ab.bind(window)
    });
    var I = {};
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (I.parentElement = dc.parentElement);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (I.contains = dc.contains);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (I.children = H.children);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (I.innerHTML = tc.innerHTML);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (I.className = nc.className);
    var J = {
            EventTarget: [Nb],
            Node: [dc, window.EventTarget ? null : Nb],
            Text: [ec],
            Comment: [ec],
            CDATASection: [ec],
            ProcessingInstruction: [ec],
            Element: [nc, H, kc, ec, !u.j || "innerHTML" in Element.prototype ? tc : null, window.HTMLSlotElement ? null : vc],
            HTMLElement: [uc, I],
            HTMLSlotElement: [vc],
            DocumentFragment: [jc, wc],
            Document: [Cc, jc, wc, Ac],
            Window: [Dc],
            CharacterData: [kc]
        },
        Ec = u.j ? null : ["innerHTML", "textContent"];

    function K(a, b, c, d) {
        b.forEach(function(e) {
            return a && e && y(a, e, c, d)
        })
    }

    function Fc(a) {
        var b = a ? null : Ec,
            c;
        for (c in J) K(window[c] && window[c].prototype, J[c], a, b)
    }["Text", "Comment", "CDATASection", "ProcessingInstruction"].forEach(function(a) {
        var b = window[a],
            c = Object.create(b.prototype);
        c.__shady_protoIsPatched = !0;
        K(c, J.EventTarget);
        K(c, J.Node);
        J[a] && K(c, J[a]);
        b.prototype.__shady_patchedProto = c
    });

    function Gc(a) {
        a.__shady_protoIsPatched = !0;
        K(a, J.EventTarget);
        K(a, J.Node);
        K(a, J.Element);
        K(a, J.HTMLElement);
        K(a, J.HTMLSlotElement);
        return a
    };
    var Hc = u.ma,
        Ic = u.j;

    function Jc(a, b) {
        if (Hc && !a.__shady_protoIsPatched && !w(a)) {
            var c = Object.getPrototypeOf(a),
                d = c.hasOwnProperty("__shady_patchedProto") && c.__shady_patchedProto;
            d || (d = Object.create(c), Gc(d), c.__shady_patchedProto = d);
            Object.setPrototypeOf(a, d)
        }
        Ic || (1 === b ? db(a) : 2 === b && eb(a))
    }

    function Kc(a, b, c, d) {
        Jc(a, 1);
        d = d || null;
        var e = q(a),
            f = d ? q(d) : null;
        e.previousSibling = d ? f.previousSibling : b.__shady_lastChild;
        if (f = r(e.previousSibling)) f.nextSibling = a;
        if (f = r(e.nextSibling = d)) f.previousSibling = a;
        e.parentNode = b;
        d ? d === c.firstChild && (c.firstChild = a) : (c.lastChild = a, c.firstChild || (c.firstChild = a));
        c.childNodes = null
    }

    function bc(a, b, c) {
        Jc(b, 2);
        var d = q(b);
        void 0 !== d.firstChild && (d.childNodes = null);
        if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
            for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) Kc(a, b, d, c);
        else Kc(a, b, d, c)
    }

    function cc(a, b) {
        var c = q(a);
        b = q(b);
        a === b.firstChild && (b.firstChild = c.nextSibling);
        a === b.lastChild && (b.lastChild = c.previousSibling);
        a = c.previousSibling;
        var d = c.nextSibling;
        a && (q(a).nextSibling = d);
        d && (q(d).previousSibling = a);
        c.parentNode = c.previousSibling = c.nextSibling = void 0;
        void 0 !== b.childNodes && (b.childNodes = null)
    }

    function oc(a, b) {
        var c = q(a);
        if (b || void 0 === c.firstChild) {
            c.childNodes = null;
            var d = c.firstChild = a.__shady_native_firstChild;
            c.lastChild = a.__shady_native_lastChild;
            Jc(a, 2);
            c = d;
            for (d = void 0; c; c = c.__shady_native_nextSibling) {
                var e = q(c);
                e.parentNode = b || a;
                e.nextSibling = c.__shady_native_nextSibling;
                e.previousSibling = d || null;
                d = c;
                Jc(c, 1)
            }
        }
    };
    var Lc = z({
        addEventListener: function(a, b, c) {
            "object" !== typeof c && (c = {
                capture: !!c
            });
            c.G = c.G || this;
            this.host.__shady_addEventListener(a, b, c)
        },
        removeEventListener: function(a, b, c) {
            "object" !== typeof c && (c = {
                capture: !!c
            });
            c.G = c.G || this;
            this.host.__shady_removeEventListener(a, b, c)
        }
    });

    function Mc(a, b) {
        y(a, Lc, b);
        y(a, Ac, b);
        y(a, tc, b);
        y(a, H, b);
        u.noPatch && !b ? (y(a, dc, b), y(a, wc, b)) : u.j || (y(a, ab), y(a, Za), y(a, $a))
    };
    var qc = {},
        L = u.deferConnectionCallbacks && "loading" === document.readyState,
        Nc;

    function Oc(a) {
        var b = [];
        do b.unshift(a); while (a = a.__shady_parentNode);
        return b
    }

    function pc(a, b, c) {
        if (a !== qc) throw new TypeError("Illegal constructor");
        this.g = null;
        this.va(b, c)
    }
    k = pc.prototype;
    k.va = function(a, b) {
        this.host = a;
        this.mode = b && b.mode;
        oc(this.host);
        a = q(this.host);
        a.root = this;
        a.Ob = "closed" !== this.mode ? this : null;
        a = q(this);
        a.firstChild = a.lastChild = a.parentNode = a.nextSibling = a.previousSibling = null;
        if (u.preferPerformance)
            for (; a = this.host.__shady_native_firstChild;) this.host.__shady_native_removeChild(a);
        else this.s()
    };
    k.s = function() {
        var a = this;
        this.I || (this.I = !0, Ba(function() {
            return a.U()
        }))
    };
    k.gb = function() {
        for (var a, b = this; b;) b.I && (a = b), b = b.fb();
        return a
    };
    k.fb = function() {
        var a = this.host.__shady_getRootNode();
        if (w(a)) {
            var b = r(this.host);
            if (b && 0 < b.T) return a
        }
    };
    k.U = function() {
        var a = this.I && this.gb();
        a && a._renderSelf()
    };
    k.ab = function() {
        !this.ua && this.I && this.U()
    };
    k._renderSelf = function() {
        var a = L;
        L = !0;
        this.I = !1;
        this.g && (this.Wa(), this.Ua());
        if (!u.preferPerformance && !this.ua)
            for (var b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) {
                var c = r(b);
                b.__shady_native_parentNode !== this.host || "slot" !== b.localName && c.assignedSlot || this.host.__shady_native_removeChild(b)
            }
        this.ua = !0;
        L = a;
        Nc && Nc()
    };
    k.Wa = function() {
        this.X();
        for (var a = 0, b; a < this.g.length; a++) b = this.g[a], this.Ta(b);
        for (a = this.host.__shady_firstChild; a; a = a.__shady_nextSibling) this.ra(a);
        for (a = 0; a < this.g.length; a++) {
            b = this.g[a];
            var c = r(b);
            if (!c.assignedNodes.length)
                for (var d = b.__shady_firstChild; d; d = d.__shady_nextSibling) this.ra(d, b);
            (d = (d = r(b.__shady_parentNode)) && d.root) && (d.ta() || d.I) && d._renderSelf();
            this.oa(c.K, c.assignedNodes);
            if (d = c.za) {
                for (var e = 0; e < d.length; e++) r(d[e]).ga = null;
                c.za = null;
                d.length > c.assignedNodes.length &&
                    (c.ka = !0)
            }
            c.ka && (c.ka = !1, this.sa(b))
        }
    };
    k.ra = function(a, b) {
        var c = q(a),
            d = c.ga;
        c.ga = null;
        b || (b = (b = this.i[a.__shady_slot || "__catchall"]) && b[0]);
        b ? (q(b).assignedNodes.push(a), c.assignedSlot = b) : c.assignedSlot = void 0;
        d !== c.assignedSlot && c.assignedSlot && (q(c.assignedSlot).ka = !0)
    };
    k.Ta = function(a) {
        var b = r(a),
            c = b.assignedNodes;
        b.assignedNodes = [];
        b.K = [];
        if (b.za = c)
            for (b = 0; b < c.length; b++) {
                var d = r(c[b]);
                d.ga = d.assignedSlot;
                d.assignedSlot === a && (d.assignedSlot = null)
            }
    };
    k.oa = function(a, b) {
        for (var c = 0, d = void 0; c < b.length && (d = b[c]); c++)
            if ("slot" == d.localName) {
                var e = r(d).assignedNodes;
                e && e.length && this.oa(a, e)
            } else a.push(b[c])
    };
    k.sa = function(a) {
        a.__shady_native_dispatchEvent(new Event("slotchange"));
        a = r(a);
        a.assignedSlot && this.sa(a.assignedSlot)
    };
    k.Ua = function() {
        for (var a = this.g, b = [], c = 0; c < a.length; c++) {
            var d = a[c].__shady_parentNode,
                e = r(d);
            e && e.root || !(0 > b.indexOf(d)) || b.push(d)
        }
        for (a = 0; a < b.length; a++) c = b[a], this.Db(c === this ? this.host : c, this.Va(c))
    };
    k.Va = function(a) {
        var b = [];
        for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling)
            if (this.ib(a))
                for (var c = r(a).K, d = 0; d < c.length; d++) b.push(c[d]);
            else b.push(a);
        return b
    };
    k.ib = function(a) {
        return "slot" == a.localName
    };
    k.Db = function(a, b) {
        for (var c = ta(a), d = Lb(b, b.length, c, c.length), e = 0, f = 0, g = void 0; e < d.length && (g = d[e]); e++) {
            for (var h = 0, m = void 0; h < g.P.length && (m = g.P[h]); h++) m.__shady_native_parentNode === a && a.__shady_native_removeChild(m), c.splice(g.index + f, 1);
            f -= g.Y
        }
        e = 0;
        for (f = void 0; e < d.length && (f = d[e]); e++)
            for (g = c[f.index], h = f.index; h < f.index + f.Y; h++) m = b[h], a.__shady_native_insertBefore(m, g), c.splice(h, 0, m)
    };
    k.$a = function() {
        this.D = this.D || [];
        this.g = this.g || [];
        this.i = this.i || {}
    };
    k.pa = function(a) {
        this.$a();
        this.D.push.apply(this.D, p(a))
    };
    k.X = function() {
        this.D && this.D.length && (this.lb(this.D), this.D = [])
    };
    k.lb = function(a) {
        for (var b, c = 0; c < a.length; c++) {
            var d = a[c];
            oc(d);
            var e = d.__shady_parentNode;
            oc(e);
            e = r(e);
            e.T = (e.T || 0) + 1;
            e = this.xa(d);
            this.i[e] ? (b = b || {}, b[e] = !0, this.i[e].push(d)) : this.i[e] = [d];
            this.g.push(d)
        }
        if (b)
            for (var f in b) this.i[f] = this.Ba(this.i[f])
    };
    k.xa = function(a) {
        var b = a.name || a.getAttribute("name") || "__catchall";
        return a.Pa = b
    };
    k.Ba = function(a) {
        return a.sort(function(b, c) {
            b = Oc(b);
            for (var d = Oc(c), e = 0; e < b.length; e++) {
                c = b[e];
                var f = d[e];
                if (c !== f) return b = ua(c.__shady_parentNode), b.indexOf(c) - b.indexOf(f)
            }
        })
    };
    k.rb = function(a) {
        if (this.g) {
            this.X();
            var b = this.i,
                c;
            for (c in b)
                for (var d = b[c], e = 0; e < d.length; e++) {
                    var f = d[e];
                    if (ra(a, f)) {
                        d.splice(e, 1);
                        var g = this.g.indexOf(f);
                        0 <= g && (this.g.splice(g, 1), (g = r(f.__shady_parentNode)) && g.T && g.T--);
                        e--;
                        this.sb(f);
                        g = !0
                    }
                }
            return g
        }
    };
    k.Eb = function(a) {
        if (this.g) {
            this.X();
            var b = a.Pa,
                c = this.xa(a);
            if (c !== b) {
                b = this.i[b];
                var d = b.indexOf(a);
                0 <= d && b.splice(d, 1);
                b = this.i[c] || (this.i[c] = []);
                b.push(a);
                1 < b.length && (this.i[c] = this.Ba(b))
            }
        }
    };
    k.sb = function(a) {
        a = r(a);
        var b = a.K;
        if (b)
            for (var c = 0; c < b.length; c++) {
                var d = b[c],
                    e = d.__shady_native_parentNode;
                e && e.__shady_native_removeChild(d)
            }
        a.K = [];
        a.assignedNodes = []
    };
    k.ta = function() {
        this.X();
        return !(!this.g || !this.g.length)
    };
    (function(a) {
        a.__proto__ = DocumentFragment.prototype;
        Mc(a, "__shady_");
        Mc(a);
        Object.defineProperties(a, {
            nodeType: {
                value: Node.DOCUMENT_FRAGMENT_NODE,
                configurable: !0
            },
            nodeName: {
                value: "#document-fragment",
                configurable: !0
            },
            nodeValue: {
                value: null,
                configurable: !0
            }
        });
        ["localName", "namespaceURI", "prefix"].forEach(function(b) {
            Object.defineProperty(a, b, {
                value: void 0,
                configurable: !0
            })
        });
        ["ownerDocument", "baseURI", "isConnected"].forEach(function(b) {
            Object.defineProperty(a, b, {
                get: function() {
                    return this.host[b]
                },
                configurable: !0
            })
        })
    })(pc.prototype);
    if (window.customElements && window.customElements.define && u.inUse && !u.preferPerformance) {
        var Pc = new Map;
        Nc = function() {
            var a = [];
            Pc.forEach(function(d, e) {
                a.push([e, d])
            });
            Pc.clear();
            for (var b = 0; b < a.length; b++) {
                var c = a[b][0];
                a[b][1] ? c.__shadydom_connectedCallback() : c.__shadydom_disconnectedCallback()
            }
        };
        L && document.addEventListener("readystatechange", function() {
            L = !1;
            Nc()
        }, {
            once: !0
        });
        var Qc = function(a, b, c) {
                var d = 0,
                    e = "__isConnected" + d++;
                if (b || c) a.prototype.connectedCallback = a.prototype.__shadydom_connectedCallback =
                    function() {
                        L ? Pc.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this))
                    }, a.prototype.disconnectedCallback = a.prototype.__shadydom_disconnectedCallback = function() {
                        L ? this.isConnected || Pc.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this))
                    };
                return a
            },
            Rc = window.customElements.define,
            Sc = function(a, b) {
                var c = b.prototype.connectedCallback,
                    d = b.prototype.disconnectedCallback;
                Rc.call(window.customElements, a, Qc(b, c, d));
                b.prototype.connectedCallback = c;
                b.prototype.disconnectedCallback = d
            };
        window.customElements.define =
            Sc;
        Object.defineProperty(window.CustomElementRegistry.prototype, "define", {
            value: Sc,
            configurable: !0
        })
    }

    function G(a) {
        a = a.__shady_getRootNode();
        if (w(a)) return a
    };

    function M(a) {
        this.node = a
    }
    k = M.prototype;
    k.addEventListener = function(a, b, c) {
        return this.node.__shady_addEventListener(a, b, c)
    };
    k.removeEventListener = function(a, b, c) {
        return this.node.__shady_removeEventListener(a, b, c)
    };
    k.appendChild = function(a) {
        return this.node.__shady_appendChild(a)
    };
    k.insertBefore = function(a, b) {
        return this.node.__shady_insertBefore(a, b)
    };
    k.removeChild = function(a) {
        return this.node.__shady_removeChild(a)
    };
    k.replaceChild = function(a, b) {
        return this.node.__shady_replaceChild(a, b)
    };
    k.cloneNode = function(a) {
        return this.node.__shady_cloneNode(a)
    };
    k.getRootNode = function(a) {
        return this.node.__shady_getRootNode(a)
    };
    k.contains = function(a) {
        return this.node.__shady_contains(a)
    };
    k.dispatchEvent = function(a) {
        return this.node.__shady_dispatchEvent(a)
    };
    k.setAttribute = function(a, b) {
        this.node.__shady_setAttribute(a, b)
    };
    k.getAttribute = function(a) {
        return this.node.__shady_native_getAttribute(a)
    };
    k.hasAttribute = function(a) {
        return this.node.__shady_native_hasAttribute(a)
    };
    k.removeAttribute = function(a) {
        this.node.__shady_removeAttribute(a)
    };
    k.attachShadow = function(a) {
        return this.node.__shady_attachShadow(a)
    };
    k.focus = function() {
        this.node.__shady_native_focus()
    };
    k.blur = function() {
        this.node.__shady_blur()
    };
    k.importNode = function(a, b) {
        if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(a, b)
    };
    k.getElementById = function(a) {
        if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(a)
    };
    k.elementsFromPoint = function(a, b) {
        return this.node.__shady_elementsFromPoint(a, b)
    };
    k.elementFromPoint = function(a, b) {
        return this.node.__shady_elementFromPoint(a, b)
    };
    k.querySelector = function(a) {
        return this.node.__shady_querySelector(a)
    };
    k.querySelectorAll = function(a, b) {
        return this.node.__shady_querySelectorAll(a, b)
    };
    k.assignedNodes = function(a) {
        if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(a)
    };
    k.append = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        return this.node.__shady_append.apply(this.node, p(b))
    };
    k.prepend = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        return this.node.__shady_prepend.apply(this.node, p(b))
    };
    k.after = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        return this.node.__shady_after.apply(this.node, p(b))
    };
    k.before = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        return this.node.__shady_before.apply(this.node, p(b))
    };
    k.remove = function() {
        return this.node.__shady_remove()
    };
    k.replaceWith = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        return this.node.__shady_replaceWith.apply(this.node, p(b))
    };
    ea.Object.defineProperties(M.prototype, {
        activeElement: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (w(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement
            }
        },
        _activeElement: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.activeElement
            }
        },
        host: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (w(this.node)) return this.node.host
            }
        },
        parentNode: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_parentNode
            }
        },
        firstChild: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_firstChild
            }
        },
        lastChild: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_lastChild
            }
        },
        nextSibling: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_nextSibling
            }
        },
        previousSibling: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_previousSibling
            }
        },
        childNodes: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_childNodes
            }
        },
        parentElement: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_parentElement
            }
        },
        firstElementChild: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_firstElementChild
            }
        },
        lastElementChild: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_lastElementChild
            }
        },
        nextElementSibling: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_nextElementSibling
            }
        },
        previousElementSibling: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_previousElementSibling
            }
        },
        children: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_children
            }
        },
        childElementCount: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_childElementCount
            }
        },
        shadowRoot: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_shadowRoot
            }
        },
        assignedSlot: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_assignedSlot
            }
        },
        isConnected: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_isConnected
            }
        },
        innerHTML: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_innerHTML
            },
            set: function(a) {
                this.node.__shady_innerHTML = a
            }
        },
        textContent: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_textContent
            },
            set: function(a) {
                this.node.__shady_textContent = a
            }
        },
        slot: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_slot
            },
            set: function(a) {
                this.node.__shady_slot = a
            }
        },
        className: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_className
            },
            set: function(a) {
                this.node.__shady_className =
                    a
            }
        }
    });

    function Tc(a) {
        Object.defineProperty(M.prototype, a, {
            get: function() {
                return this.node["__shady_" + a]
            },
            set: function(b) {
                this.node["__shady_" + a] = b
            },
            configurable: !0
        })
    }
    Hb.forEach(function(a) {
        return Tc(a)
    });
    Ib.forEach(function(a) {
        return Tc(a)
    });
    var Uc = new WeakMap;

    function Vc(a) {
        if (w(a) || a instanceof M) return a;
        var b = Uc.get(a);
        b || (b = new M(a), Uc.set(a, b));
        return b
    };
    if (u.inUse) {
        var Wc = u.j ? function(a) {
                return a
            } : function(a) {
                eb(a);
                db(a);
                return a
            },
            ShadyDOM = {
                inUse: u.inUse,
                patch: Wc,
                isShadyRoot: w,
                enqueue: Ba,
                flush: Ca,
                flushInitial: function(a) {
                    a.ab()
                },
                settings: u,
                filterMutations: Ha,
                observeChildren: Fa,
                unobserveChildren: Ga,
                deferConnectionCallbacks: u.deferConnectionCallbacks,
                preferPerformance: u.preferPerformance,
                handlesDynamicScoping: !0,
                wrap: u.noPatch ? Vc : Wc,
                wrapIfNeeded: !0 === u.noPatch ? Vc : function(a) {
                    return a
                },
                Wrapper: M,
                composedPath: nb,
                noPatch: u.noPatch,
                patchOnDemand: u.ma,
                nativeMethods: Qa,
                nativeTree: Ra,
                patchElementProto: Gc
            };
        window.ShadyDOM = ShadyDOM;
        Ya();
        Fc("__shady_");
        Object.defineProperty(document, "_activeElement", Ac.activeElement);
        y(Window.prototype, Dc, "__shady_");
        u.noPatch ? u.ma && y(Element.prototype, rc) : (Fc(), Gb());
        Bb();
        window.Event = Db;
        window.CustomEvent = Eb;
        window.MouseEvent = Fb;
        window.ShadowRoot = pc
    };
    /*

    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    function Xc() {
        this.end = this.start = 0;
        this.rules = this.parent = this.previous = null;
        this.cssText = this.parsedCssText = "";
        this.atRule = !1;
        this.type = 0;
        this.parsedSelector = this.selector = this.keyframesName = ""
    }

    function Yc(a) {
        var b = a = a.replace(Zc, "").replace($c, ""),
            c = new Xc;
        c.start = 0;
        c.end = b.length;
        for (var d = c, e = 0, f = b.length; e < f; e++)
            if ("{" === b[e]) {
                d.rules || (d.rules = []);
                var g = d,
                    h = g.rules[g.rules.length - 1] || null;
                d = new Xc;
                d.start = e + 1;
                d.parent = g;
                d.previous = h;
                g.rules.push(d)
            } else "}" === b[e] && (d.end = e + 1, d = d.parent || c);
        return ad(c, a)
    }

    function ad(a, b) {
        var c = b.substring(a.start, a.end - 1);
        a.parsedCssText = a.cssText = c.trim();
        a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = _expandUnicodeEscapes$$module$third_party$javascript$polymer$v2$shadycss$src$css_parse(c), c = c.replace(bd, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = 4 : c.match(cd) && (a.type = 7, a.keyframesName = a.selector.split(bd).pop()) : a.type = 0 === c.indexOf("--") ?
            1E3 : 1);
        if (c = a.rules)
            for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++) ad(f, b);
        return a
    }

    function _expandUnicodeEscapes$$module$third_party$javascript$polymer$v2$shadycss$src$css_parse(a) {
        return a.replace(/\\([0-9a-f]{1,6})\s/gi, function(b, c) {
            b = c;
            for (c = 6 - b.length; c--;) b = "0" + b;
            return "\\" + b
        })
    }

    function dd(a, b, c) {
        c = void 0 === c ? "" : c;
        var d = "";
        if (a.cssText || a.rules) {
            var e = a.rules;
            if (e && !_hasMixinRules$$module$third_party$javascript$polymer$v2$shadycss$src$css_parse(e))
                for (var f = 0, g = e.length, h = void 0; f < g && (h = e[f]); f++) d = dd(h, b, d);
            else b ? b = a.cssText : (b = a.cssText, b = b.replace(ed, "").replace(fd, ""), b = b.replace(gd, "").replace(hd, "")), (d = b.trim()) && (d = "  " + d + "\n")
        }
        d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));
        return c
    }

    function _hasMixinRules$$module$third_party$javascript$polymer$v2$shadycss$src$css_parse(a) {
        a = a[0];
        return !!a && !!a.selector && 0 === a.selector.indexOf("--")
    }
    var Zc = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
        $c = /@import[^;]*;/gim,
        ed = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
        fd = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
        gd = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
        hd = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
        cd = /^@[^\s]*keyframes/,
        bd = /\s+/g;
    var N = !(window.ShadyDOM && window.ShadyDOM.inUse),
        id;

    function jd(a) {
        id = a && a.shimcssproperties ? !1 : N || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"))
    }
    var kd;
    window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (kd = window.ShadyCSS.cssBuild);
    var O = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
    window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? id = window.ShadyCSS.nativeCss : window.ShadyCSS ? (jd(window.ShadyCSS), window.ShadyCSS = void 0) : jd(window.WebComponents && window.WebComponents.flags);
    var P = id;
    var ld = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
        md = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
        nd = /(--[\w-]+)\s*([:,;)]|$)/gi,
        od = /(animation\s*:)|(animation-name\s*:)/,
        pd = /@media\s(.*)/,
        qd = /\{[^}]*\}/g;
    var rd = new Set;

    function Q(a, b) {
        if (!a) return "";
        "string" === typeof a && (a = Yc(a));
        b && R(a, b);
        return dd(a, P)
    }

    function sd(a) {
        !a.__cssRules && a.textContent && (a.__cssRules = Yc(a.textContent));
        return a.__cssRules || null
    }

    function td(a) {
        return !!a.parent && 7 === a.parent.type
    }

    function R(a, b, c, d) {
        if (a) {
            var e = !1,
                f = a.type;
            if (d && 4 === f) {
                var g = a.selector.match(pd);
                g && (window.matchMedia(g[1]).matches || (e = !0))
            }
            1 === f ? b(a) : c && 7 === f ? c(a) : 1E3 === f && (e = !0);
            if ((a = a.rules) && !e)
                for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) R(g, b, c, d)
        }
    }

    function ud(a, b, c, d) {
        var e = document.createElement("style");
        b && e.setAttribute("scope", b);
        e.textContent = a;
        vd(e, c, d);
        return e
    }
    var S = null;

    function wd(a) {
        a = document.createComment(" Shady DOM styles for " + a + " ");
        var b = document.head;
        b.insertBefore(a, (S ? S.nextSibling : null) || b.firstChild);
        return S = a
    }

    function vd(a, b, c) {
        b = b || document.head;
        b.insertBefore(a, c && c.nextSibling || b.firstChild);
        S ? a.compareDocumentPosition(S) === Node.DOCUMENT_POSITION_PRECEDING && (S = a) : S = a
    }

    function xd(a, b) {
        for (var c = 0, d = a.length; b < d; b++)
            if ("(" === a[b]) c++;
            else if (")" === a[b] && 0 === --c) return b;
        return -1
    }

    function yd(a, b) {
        var c = a.indexOf("var(");
        if (-1 === c) return b(a, "", "", "");
        var d = xd(a, c + 3),
            e = a.substring(c + 4, d);
        c = a.substring(0, c);
        a = yd(a.substring(d + 1), b);
        d = e.indexOf(",");
        return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a)
    }

    function zd(a, b) {
        N ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b)
    }
    var Ad = window.ShadyDOM && window.ShadyDOM.wrap || function(a) {
        return a
    };

    function T(a) {
        var b = a.localName,
            c = "";
        b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);
        return {
            is: b,
            R: c
        }
    }

    function Bd(a) {
        for (var b = [], c = "", d = 0; 0 <= d && d < a.length; d++)
            if ("(" === a[d]) {
                var e = xd(a, d);
                c += a.slice(d, e + 1);
                d = e
            } else "," === a[d] ? (b.push(c), c = "") : c += a[d];
        c && b.push(c);
        return b
    }

    function U(a) {
        if (void 0 !== kd) return kd;
        if (void 0 === a.__cssBuild) {
            var b = a.getAttribute("css-build");
            if (b) a.__cssBuild = b;
            else {
                a: {
                    b = "template" === a.localName ? a.content.firstChild : a.firstChild;
                    if (b instanceof Comment && (b = b.textContent.trim().split(":"), "css-build" === b[0])) {
                        b = b[1];
                        break a
                    }
                    b = ""
                }
                if ("" !== b) {
                    var c = "template" === a.localName ? a.content.firstChild : a.firstChild;
                    c.parentNode.removeChild(c)
                }
                a.__cssBuild = b
            }
        }
        return a.__cssBuild || ""
    }

    function Cd(a) {
        a = void 0 === a ? "" : a;
        return "" !== a && P ? N ? "shadow" === a : "shady" === a : !1
    };

    function Dd() {}

    function Ed(a, b) {
        var c = V;
        c.W(a, function(d) {
            c.element(d, b || "")
        })
    }
    k = Dd.prototype;
    k.W = function(a, b) {
        a.nodeType === Node.ELEMENT_NODE && b(a);
        if (a = "template" === a.localName ? (a.content || a._content || a).childNodes : a.children || a.childNodes)
            for (var c = 0; c < a.length; c++) this.W(a[c], b)
    };
    k.element = function(a, b, c) {
        if (b)
            if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b));
            else if (a.getAttribute) {
            var d = a.getAttribute("class");
            c ? d && (b = d.replace("style-scope", "").replace(b, ""), zd(a, b)) : zd(a, (d ? d + " " : "") + "style-scope " + b)
        }
    };

    function Fd(a, b, c) {
        var d = V;
        d.W(a, function(e) {
            d.element(e, b, !0);
            d.element(e, c)
        })
    }

    function Gd(a, b) {
        var c = V;
        c.W(a, function(d) {
            c.element(d, b || "", !0)
        })
    }

    function Hd(a, b, c, d, e) {
        var f = V;
        e = void 0 === e ? "" : e;
        "" === e && (N || "shady" === (void 0 === d ? "" : d) ? e = Q(b, c) : (a = T(a), e = Id(f, b, a.is, a.R, c) + "\n\n"));
        return e.trim()
    }

    function Id(a, b, c, d, e) {
        var f = a.da(c, d);
        c = a.qa(c);
        return Q(b, function(g) {
            g.Mb || (a.Ca(g, a.ia, c, f), g.Mb = !0);
            e && e(g, c, f)
        })
    }
    k.qa = function(a) {
        return a ? "." + a : ""
    };
    k.da = function(a, b) {
        return b ? "[is=" + a + "]" : a
    };
    k.Ca = function(a, b, c, d) {
        a.selector = a.o = this.Da(a, b, c, d)
    };
    k.Da = function(a, b, c, d) {
        var e = Bd(a.selector);
        if (!td(a)) {
            a = 0;
            for (var f = e.length, g = void 0; a < f && (g = e[a]); a++) e[a] = b.call(this, g, c, d)
        }
        return e.filter(function(h) {
            return !!h
        }).join(",")
    };
    k.Fa = function(a) {
        return a.replace(Jd, function(b, c, d) {
            -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));
            return ":" + c + "(" + d + ")"
        })
    };
    k.qb = function(a) {
        for (var b = [], c; c = a.match(Kd);) {
            var d = c.index,
                e = xd(a, d);
            if (-1 === e) throw Error(c.input + " selector missing ')'");
            c = a.slice(d, e + 1);
            a = a.replace(c, "\ue000");
            b.push(c)
        }
        return {
            na: a,
            matches: b
        }
    };
    k.ub = function(a, b) {
        var c = a.split("\ue000");
        return b.reduce(function(d, e, f) {
            return d + e + c[f + 1]
        }, c[0])
    };
    k.ia = function(a, b, c) {
        var d = this,
            e = !1;
        a = a.trim();
        var f = Jd.test(a);
        f && (a = a.replace(Jd, function(m, l, n) {
            return ":" + l + "(" + n.replace(/\s/g, "") + ")"
        }), a = this.Fa(a));
        var g = Kd.test(a);
        if (g) {
            var h = this.qb(a);
            a = h.na;
            h = h.matches
        }
        a = a.replace(Ld, ":host $1");
        a = a.replace(Md, function(m, l, n) {
            e || (m = d.Ab(n, l, b, c), e = e || m.stop, l = m.Gb, n = m.value);
            return l + n
        });
        g && (a = this.ub(a, h));
        f && (a = this.Fa(a));
        return a = a.replace(Nd, function(m, l, n, t) {
            return '[dir="' + n + '"] ' + l + t + ", " + l + '[dir="' + n + '"]' + t
        })
    };
    k.Ab = function(a, b, c, d) {
        var e = a.indexOf("::slotted");
        0 <= a.indexOf(":host") ? a = this.Cb(a, d) : 0 !== e && (a = c ? this.Ea(a, c) : a);
        c = !1;
        0 <= e && (b = "", c = !0);
        if (c) {
            var f = !0;
            c && (a = a.replace(Od, function(g, h) {
                return " > " + h
            }))
        }
        return {
            value: a,
            Gb: b,
            stop: f
        }
    };
    k.Ea = function(a, b) {
        a = a.split(/(\[.+?\])/);
        for (var c = [], d = 0; d < a.length; d++)
            if (1 === d % 2) c.push(a[d]);
            else {
                var e = a[d];
                if ("" !== e || d !== a.length - 1) e = e.split(":"), e[0] += b, c.push(e.join(":"))
            }
        return c.join("")
    };
    k.Cb = function(a, b) {
        var c = a.match(Pd);
        return (c = c && c[2].trim() || "") ? c[0].match(Qd) ? a.replace(Pd, function(d, e, f) {
            return b + f
        }) : c.split(Qd)[0] === b ? c : "should_not_match" : a.replace(":host", b)
    };

    function Rd(a) {
        ":root" === a.selector && (a.selector = "html")
    }
    k.Bb = function(a) {
        return a.match(":host") ? "" : a.match("::slotted") ? this.ia(a, ":not(.style-scope)") : this.Ea(a.trim(), ":not(.style-scope)")
    };
    ea.Object.defineProperties(Dd.prototype, {
        S: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "style-scope"
            }
        }
    });
    var Jd = /:(nth[-\w]+)\(([^)]+)\)/,
        Md = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
        Qd = /[[.:#*]/,
        Ld = RegExp("^(::slotted)"),
        Pd = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
        Od = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
        Nd = /(.*):dir\((?:(ltr|rtl))\)(.*)/,
        Kd = /:(?:matches|any|-(?:webkit|moz)-any)/,
        V = new Dd;

    function W(a, b, c, d, e) {
        this.v = a || null;
        this.placeholder = b || null;
        this.la = c || [];
        this.L = null;
        this.cssBuild = e || "";
        this.R = d || "";
        this.J = this.u = this.C = null
    }

    function X(a) {
        return a ? a.__styleInfo : null
    }

    function Sd(a, b) {
        return a.__styleInfo = b
    }
    W.prototype.hb = function() {
        return this.v
    };
    W.prototype._getStyleRules = W.prototype.hb;

    function Td(a) {
        var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;
        return b && b.call(this, a)
    }
    var Ud = /:host\s*>\s*/,
        Vd = navigator.userAgent.match("Trident");

    function Wd() {}

    function Xd(a) {
        var b = {},
            c = [],
            d = 0;
        R(a, function(f) {
            Yd(f);
            f.index = d++;
            f = f.l.cssText;
            for (var g; g = nd.exec(f);) {
                var h = g[1];
                ":" !== g[2] && (b[h] = !0)
            }
        }, function(f) {
            c.push(f)
        });
        a.jb = c;
        a = [];
        for (var e in b) a.push(e);
        return a
    }

    function Yd(a) {
        if (!a.l) {
            var b = {},
                c = {};
            Zd(a, c) && (b.B = c, a.rules = null);
            b.cssText = a.parsedCssText.replace(qd, "").replace(ld, "");
            a.l = b
        }
    }

    function Zd(a, b) {
        var c = a.l;
        if (c) {
            if (c.B) return Object.assign(b, c.B), !0
        } else {
            c = a.parsedCssText;
            for (var d; a = ld.exec(c);) {
                d = (a[2] || a[3]).trim();
                if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;
                d = !0
            }
            return d
        }
    }

    function $d(a, b, c) {
        b && (b = 0 <= b.indexOf(";") ? ae(a, b, c) : yd(b, function(d, e, f, g) {
            if (!e) return d + g;
            (e = $d(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = $d(a, c[f] || f, c) || f;
            return d + (e || "") + g
        }));
        return b && b.trim() || ""
    }

    function ae(a, b, c) {
        b = b.split(";");
        for (var d = 0, e, f; d < b.length; d++)
            if (e = b[d]) {
                md.lastIndex = 0;
                if (f = md.exec(e)) e = $d(a, c[f[1]], c);
                else if (f = e.indexOf(":"), -1 !== f) {
                    var g = e.substring(f);
                    g = g.trim();
                    g = $d(a, g, c) || g;
                    e = e.substring(0, f) + g
                }
                b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || ""
            }
        return b.join(";")
    }

    function be(a, b) {
        var c = {},
            d = [];
        R(a, function(e) {
            e.l || Yd(e);
            var f = e.o || e.parsedSelector;
            b && e.l.B && f && Td.call(b, f) && (Zd(e, c), e = e.index, f = parseInt(e / 32, 10), d[f] = (d[f] || 0) | 1 << e % 32)
        }, null, !0);
        return {
            B: c,
            key: d
        }
    }

    function ce(a, b, c, d) {
        b.l || Yd(b);
        if (b.l.B) {
            var e = T(a);
            a = e.is;
            e = e.R;
            e = a ? V.da(a, e) : "html";
            var f = b.parsedSelector;
            var g = !!f.match(Ud) || "html" === e && -1 < f.indexOf("html");
            var h = 0 === f.indexOf(":host") && !g;
            "shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));
            if (g || h) c = e, h && (b.o || (b.o = V.Da(b, V.ia, V.qa(a), e)), c = b.o || e), g && "html" === e && (c = b.o || b.Yb), d({
                na: c,
                Lb: h,
                Xb: g
            })
        }
    }

    function de(a, b, c) {
        var d = {},
            e = {};
        R(b, function(f) {
            ce(a, f, c, function(g) {
                Td.call(a._element || a, g.na) && (g.Lb ? Zd(f, d) : Zd(f, e))
            })
        }, null, !0);
        return {
            Pb: e,
            Kb: d
        }
    }

    function ee(a, b, c, d) {
        var e = T(b),
            f = V.da(e.is, e.R),
            g = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
            h = X(b);
        e = h.v;
        h = h.cssBuild;
        var m = a.Xa(b, e, d);
        return Hd(b, e, function(l) {
            var n = "";
            l.l || Yd(l);
            l.l.cssText && (n = ae(a, l.l.cssText, c));
            l.cssText = n;
            if (!N && !td(l) && l.cssText) {
                var t = n = l.cssText;
                null == l.Ga && (l.Ga = od.test(n));
                if (l.Ga)
                    if (null == l.aa) {
                        l.aa = [];
                        for (var A in m) t = m[A], t = t(n), n !== t && (n = t, l.aa.push(A))
                    } else {
                        for (A = 0; A < l.aa.length; ++A) t = m[l.aa[A]], n = t(n);
                        t = n
                    }
                l.cssText = t;
                a.yb(l, g, f, d)
            }
        }, h)
    }
    Wd.prototype.Xa = function(a, b, c) {
        a = b.jb;
        b = {};
        if (!N && a)
            for (var d = 0, e = a[d]; d < a.length; e = a[++d]) this.xb(e, c), b[e.keyframesName] = this.kb(e);
        return b
    };
    Wd.prototype.kb = function(a) {
        return function(b) {
            return b.replace(a.Nb, a.Ka)
        }
    };
    Wd.prototype.xb = function(a, b) {
        a.Nb = new RegExp("\\b" + a.keyframesName + "(?!\\B|-)", "g");
        a.Ka = a.keyframesName + "-" + b;
        a.o = a.o || a.selector;
        a.selector = a.o.replace(a.keyframesName, a.Ka)
    };
    Wd.prototype.yb = function(a, b, c, d) {
        a.o = a.o || a.selector;
        d = "." + d;
        for (var e = Bd(a.o), f = 0, g = e.length, h = void 0; f < g && (h = e[f]); f++) e[f] = h.match(b) ? h.replace(c, d) : d + " " + h;
        a.selector = e.join(",")
    };

    function fe(a, b) {
        var c = ge,
            d = sd(a);
        a.textContent = Q(d, function(e) {
            var f = e.cssText = e.parsedCssText;
            e.l && e.l.cssText && (f = f.replace(ed, "").replace(fd, ""), e.cssText = ae(c, f, b))
        })
    }
    ea.Object.defineProperties(Wd.prototype, {
        Ma: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "x-scope"
            }
        }
    });
    var ge = new Wd;
    var he = {},
        ie = window.customElements;
    if (ie && !N && !O) {
        var je = ie.define;
        ie.define = function(a, b, c) {
            he[a] || (he[a] = wd(a));
            je.call(ie, a, b, c)
        }
    };

    function ke() {
        this.cache = {};
        this.Ub = 100
    }
    ke.prototype.Fb = function(a, b, c) {
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            if (a.B[e] !== b[e]) return !1
        }
        return !0
    };
    ke.prototype.store = function(a, b, c, d) {
        var e = this.cache[a] || [];
        e.push({
            B: b,
            styleElement: c,
            u: d
        });
        e.length > this.Ub && e.shift();
        this.cache[a] = e
    };
    ke.prototype.fetch = function(a, b, c) {
        if (a = this.cache[a])
            for (var d = a.length - 1; 0 <= d; d--) {
                var e = a[d];
                if (this.Fb(e, b, c)) return e
            }
    };

    function le() {}
    var me = new RegExp(V.S + "\\s*([^\\s]*)");

    function ne(a) {
        return (a = (a.classList && a.classList.value ? a.classList.value : a.getAttribute("class") || "").match(me)) ? a[1] : ""
    }

    function oe(a) {
        var b = Ad(a).getRootNode();
        return b === a || b === a.ownerDocument ? "" : (a = b.host) ? T(a).is : ""
    }

    function pe(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (c.target !== document.documentElement && c.target !== document.head)
                for (var d = 0; d < c.addedNodes.length; d++) {
                    var e = c.addedNodes[d];
                    if (e.nodeType === Node.ELEMENT_NODE) {
                        var f = e.getRootNode(),
                            g = ne(e);
                        if (g && f === e.ownerDocument && ("style" !== e.localName && "template" !== e.localName || "" === U(e))) Gd(e, g);
                        else if (f instanceof ShadowRoot)
                            for (f = oe(e), f !== g && Fd(e, g, f), e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + V.S + ")"), g = 0; g < e.length; g++) {
                                f = e[g];
                                var h = oe(f);
                                h && V.element(f, h)
                            }
                    }
                }
        }
    }
    if (!(N || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
        var qe = new MutationObserver(pe),
            re = function(a) {
                qe.observe(a, {
                    childList: !0,
                    subtree: !0
                })
            };
        if (window.customElements && !window.customElements.polyfillWrapFlushCallback) re(document);
        else {
            var se = function() {
                re(document.body)
            };
            window.HTMLImports ? window.HTMLImports.whenReady(se) : requestAnimationFrame(function() {
                if ("loading" === document.readyState) {
                    var a = function() {
                        se();
                        document.removeEventListener("readystatechange", a)
                    };
                    document.addEventListener("readystatechange",
                        a)
                } else se()
            })
        }
        le = function() {
            pe(qe.takeRecords())
        }
    };
    var te = {};
    var ue = Promise.resolve();

    function ve(a) {
        if (a = te[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1
    }

    function we(a) {
        return a._applyShimCurrentVersion === a._applyShimNextVersion
    }

    function xe(a) {
        a._applyShimValidatingVersion = a._applyShimNextVersion;
        a._validating || (a._validating = !0, ue.then(function() {
            a._applyShimCurrentVersion = a._applyShimNextVersion;
            a._validating = !1
        }))
    };
    var ye = {},
        ze = new ke;

    function Y() {
        this.Aa = {};
        this.H = document.documentElement;
        var a = new Xc;
        a.rules = [];
        this.A = Sd(this.H, new W(a));
        this.ea = !1;
        this.h = this.m = null
    }
    k = Y.prototype;
    k.flush = function() {
        le()
    };
    k.cb = function(a) {
        var b = this.Aa[a] = (this.Aa[a] || 0) + 1;
        return a + "-" + b
    };
    k.Ib = function(a) {
        return sd(a)
    };
    k.Tb = function(a) {
        return Q(a)
    };
    k.bb = function(a) {
        var b = [];
        a = a.content.querySelectorAll("style");
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            if (d.hasAttribute("shady-unscoped")) {
                if (!N) {
                    var e = d.textContent;
                    if (!rd.has(e)) {
                        rd.add(e);
                        var f = document.createElement("style");
                        f.setAttribute("shady-unscoped", "");
                        f.textContent = e;
                        document.head.appendChild(f)
                    }
                    d.parentNode.removeChild(d)
                }
            } else b.push(d.textContent), d.parentNode.removeChild(d)
        }
        return b.join("").trim()
    };
    k.prepareTemplate = function(a, b, c) {
        this.prepareTemplateDom(a, b);
        this.prepareTemplateStyles(a, b, c)
    };
    k.prepareTemplateStyles = function(a, b, c) {
        if (!a._prepared && !O) {
            N || he[b] || (he[b] = wd(b));
            a._prepared = !0;
            a.name = b;
            a.extends = c;
            te[b] = a;
            var d = U(a),
                e = Cd(d);
            c = {
                is: b,
                extends: c
            };
            var f = this.bb(a) + (ye[b] || "");
            this.M();
            if (!e) {
                var g;
                if (g = !d) g = md.test(f) || ld.test(f), md.lastIndex = 0, ld.lastIndex = 0;
                var h = Yc(f);
                g && P && this.m && this.m.transformRules(h, b);
                a._styleAst = h
            }
            g = [];
            P || (g = Xd(a._styleAst));
            if (!g.length || P) b = this.eb(c, a._styleAst, N ? a.content : null, he[b] || null, d, e ? f : ""), a._style = b;
            a.pb = g
        }
    };
    k.prepareAdoptedCssText = function(a, b) {
        ye[b] = a.join(" ")
    };
    k.prepareTemplateDom = function(a, b) {
        if (!O) {
            var c = U(a);
            N || "shady" === c || a._domPrepared || (a._domPrepared = !0, Ed(a.content, b))
        }
    };
    k.eb = function(a, b, c, d, e, f) {
        f = Hd(a, b, null, e, f);
        return f.length ? ud(f, a.is, c, d) : null
    };
    k.ya = function(a) {
        var b = T(a),
            c = b.is;
        b = b.R;
        var d = he[c] || null,
            e = te[c];
        if (e) {
            c = e._styleAst;
            var f = e.pb;
            e = U(e);
            b = new W(c, d, f, b, e);
            Sd(a, b);
            return b
        }
    };
    k.Ya = function() {
        return !this.m && window.ShadyCSS && window.ShadyCSS.ApplyShim ? (this.m = window.ShadyCSS.ApplyShim, this.m.invalidCallback = ve, !0) : !1
    };
    k.Za = function() {
        var a = this;
        !this.h && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (this.h = window.ShadyCSS.CustomStyleInterface, this.h.transformCallback = function(b) {
            a.Ja(b)
        }, this.h.validateCallback = function() {
            requestAnimationFrame(function() {
                (a.h.enqueued || a.ea) && a.flushCustomStyles()
            })
        })
    };
    k.M = function() {
        var a = this.Ya();
        this.Za();
        return a
    };
    k.flushCustomStyles = function() {
        if (!O) {
            var a = this.M();
            if (this.h) {
                var b = this.h.processStyles();
                !a && !this.h.enqueued || Cd(this.A.cssBuild) || (P ? this.A.cssBuild || this.wb(b) : (this.tb(b), this.ja(this.H, this.A), this.Qa(b), this.ea && this.styleDocument()), this.h.enqueued = !1)
            }
        }
    };
    k.tb = function(a) {
        var b = this;
        a = a.map(function(c) {
            return b.h.getStyleForCustomStyle(c)
        }).filter(function(c) {
            return !!c
        });
        a.sort(function(c, d) {
            c = d.compareDocumentPosition(c);
            return c & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : c & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0
        });
        this.A.v.rules = a.map(function(c) {
            return sd(c)
        })
    };
    k.styleElement = function(a, b) {
        if (O) {
            if (b) {
                X(a) || Sd(a, new W(null));
                var c = X(a);
                this.wa(c, b);
                Ae(this, a, c)
            }
        } else if (c = X(a) || this.ya(a)) this.fa(a) || (this.ea = !0), b && this.wa(c, b), P ? Ae(this, a, c) : (this.flush(), this.ja(a, c), c.la && c.la.length && this.Ra(a, c))
    };
    k.wa = function(a, b) {
        a.L = a.L || {};
        Object.assign(a.L, b)
    };

    function Ae(a, b, c) {
        var d = T(b).is;
        if (c.L) {
            var e = c.L,
                f;
            for (f in e) null === f ? b.style.removeProperty(f) : b.style.setProperty(f, e[f])
        }
        if (((e = te[d]) || a.fa(b)) && (!e || "" === U(e)) && e && e._style && !we(e)) {
            if (we(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) a.M(), a.m && a.m.transformRules(e._styleAst, d), e._style.textContent = Hd(b, c.v), xe(e);
            N && (a = b.shadowRoot) && (a = a.querySelector("style")) && (a.textContent = Hd(b, c.v));
            c.v = e._styleAst
        }
    }
    k.ha = function(a) {
        return (a = Ad(a).getRootNode().host) ? X(a) || this.ya(a) ? a : this.ha(a) : this.H
    };
    k.fa = function(a) {
        return a === this.H
    };
    k.Ra = function(a, b) {
        var c = T(a).is,
            d = ze.fetch(c, b.C, b.la),
            e = d ? d.styleElement : null,
            f = b.u;
        b.u = d && d.u || this.cb(c);
        var g = b.u;
        var h = ge;
        h = e ? e.textContent || "" : ee(h, a, b.C, g);
        var m = X(a),
            l = m.J;
        l && !N && l !== e && (l._useCount--, 0 >= l._useCount && l.parentNode && l.parentNode.removeChild(l));
        N ? m.J ? (m.J.textContent = h, e = m.J) : h && (e = ud(h, g, a.shadowRoot, m.placeholder)) : e ? e.parentNode || (Vd && -1 < h.indexOf("@media") && (e.textContent = h), vd(e, null, m.placeholder)) : h && (e = ud(h, g, null, m.placeholder));
        e && (e._useCount = e._useCount || 0, m.J !=
            e && e._useCount++, m.J = e);
        g = e;
        N || (e = b.u, m = h = a.getAttribute("class") || "", f && (m = h.replace(new RegExp("\\s*x-scope\\s*" + f + "\\s*", "g"), " ")), m += (m ? " " : "") + "x-scope " + e, h !== m && zd(a, m));
        d || ze.store(c, b.C, g, b.u);
        return g
    };
    k.ja = function(a, b) {
        var c = this.ha(a),
            d = X(c),
            e = d.C;
        c === this.H || e || (this.ja(c, d), e = d.C);
        c = Object.create(e || null);
        e = de(a, b.v, b.cssBuild);
        a = be(d.v, a).B;
        Object.assign(c, e.Kb, a, e.Pb);
        this.mb(c, b.L);
        a = ge;
        d = Object.getOwnPropertyNames(c);
        e = 0;
        for (var f; e < d.length; e++) f = d[e], c[f] = $d(a, c[f], c);
        b.C = c
    };
    k.mb = function(a, b) {
        for (var c in b) {
            var d = b[c];
            if (d || 0 === d) a[c] = d
        }
    };
    k.styleDocument = function(a) {
        this.styleSubtree(this.H, a)
    };
    k.styleSubtree = function(a, b) {
        var c = Ad(a),
            d = c.shadowRoot,
            e = this.fa(a);
        (d || e) && this.styleElement(a, b);
        if (a = e ? c : d)
            for (a = Array.from(a.querySelectorAll("*")).filter(function(f) {
                    return Ad(f).shadowRoot
                }), b = 0; b < a.length; b++) this.styleSubtree(a[b])
    };
    k.wb = function(a) {
        for (var b = 0; b < a.length; b++) {
            var c = this.h.getStyleForCustomStyle(a[b]);
            c && this.vb(c)
        }
    };
    k.Qa = function(a) {
        for (var b = 0; b < a.length; b++) {
            var c = this.h.getStyleForCustomStyle(a[b]);
            c && fe(c, this.A.C)
        }
    };
    k.Ja = function(a) {
        var b = this,
            c = U(a);
        c !== this.A.cssBuild && (this.A.cssBuild = c);
        if (!Cd(c)) {
            var d = sd(a);
            R(d, function(e) {
                if (N) Rd(e);
                else {
                    var f = V;
                    e.selector = e.parsedSelector;
                    Rd(e);
                    f.Ca(e, f.Bb)
                }
                P && "" === c && (b.M(), b.m && b.m.transformRule(e))
            });
            P ? a.textContent = Q(d) : this.A.v.rules.push(d)
        }
    };
    k.vb = function(a) {
        if (P && this.m) {
            var b = sd(a);
            this.M();
            this.m.transformRules(b);
            a.textContent = Q(b)
        }
    };
    k.getComputedStyleValue = function(a, b) {
        var c;
        P || (c = (X(a) || X(this.ha(a))).C[b]);
        return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : ""
    };
    k.Sb = function(a, b) {
        var c = Ad(a).getRootNode();
        b = b ? ("string" === typeof b ? b : String(b)).split(/\s/) : [];
        c = c.host && c.host.localName;
        if (!c) {
            var d = a.getAttribute("class");
            if (d) {
                d = d.split(/\s/);
                for (var e = 0; e < d.length; e++)
                    if (d[e] === V.S) {
                        c = d[e + 1];
                        break
                    }
            }
        }
        c && b.push(V.S, c);
        P || (c = X(a)) && c.u && b.push(ge.Ma, c.u);
        zd(a, b.join(" "))
    };
    k.zb = function(a) {
        return X(a)
    };
    k.Rb = function(a, b) {
        V.element(a, b)
    };
    k.Vb = function(a, b) {
        V.element(a, b, !0)
    };
    k.Qb = function(a) {
        return oe(a)
    };
    k.Hb = function(a) {
        return ne(a)
    };
    Y.prototype.flush = Y.prototype.flush;
    Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;
    Y.prototype.styleElement = Y.prototype.styleElement;
    Y.prototype.styleDocument = Y.prototype.styleDocument;
    Y.prototype.styleSubtree = Y.prototype.styleSubtree;
    Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;
    Y.prototype.setElementClass = Y.prototype.Sb;
    Y.prototype._styleInfoForNode = Y.prototype.zb;
    Y.prototype.transformCustomStyleForDocument = Y.prototype.Ja;
    Y.prototype.getStyleAst = Y.prototype.Ib;
    Y.prototype.styleAstToString = Y.prototype.Tb;
    Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;
    Y.prototype.scopeNode = Y.prototype.Rb;
    Y.prototype.unscopeNode = Y.prototype.Vb;
    Y.prototype.scopeForNode = Y.prototype.Qb;
    Y.prototype.currentScopeForNode = Y.prototype.Hb;
    Y.prototype.prepareAdoptedCssText = Y.prototype.prepareAdoptedCssText;
    Object.defineProperties(Y.prototype, {
        nativeShadow: {
            get: function() {
                return N
            }
        },
        nativeCss: {
            get: function() {
                return P
            }
        }
    });
    var Z = new Y,
        Be, Ce;
    window.ShadyCSS && (Be = window.ShadyCSS.ApplyShim, Ce = window.ShadyCSS.CustomStyleInterface);
    window.ShadyCSS = {
        ScopingShim: Z,
        prepareTemplate: function(a, b, c) {
            Z.flushCustomStyles();
            Z.prepareTemplate(a, b, c)
        },
        prepareTemplateDom: function(a, b) {
            Z.prepareTemplateDom(a, b)
        },
        prepareTemplateStyles: function(a, b, c) {
            Z.flushCustomStyles();
            Z.prepareTemplateStyles(a, b, c)
        },
        styleSubtree: function(a, b) {
            Z.flushCustomStyles();
            Z.styleSubtree(a, b)
        },
        styleElement: function(a) {
            Z.flushCustomStyles();
            Z.styleElement(a)
        },
        styleDocument: function(a) {
            Z.flushCustomStyles();
            Z.styleDocument(a)
        },
        flushCustomStyles: function() {
            Z.flushCustomStyles()
        },
        getComputedStyleValue: function(a, b) {
            return Z.getComputedStyleValue(a, b)
        },
        nativeCss: P,
        nativeShadow: N,
        cssBuild: kd,
        disableRuntime: O
    };
    Be && (window.ShadyCSS.ApplyShim = Be);
    Ce && (window.ShadyCSS.CustomStyleInterface = Ce);
})();
//# sourceMappingURL=blaze-out/k8-opt/bin/third_party/javascript/polymer/v2/webcomponentsjs/webcomponents-sd.js.sourcemap