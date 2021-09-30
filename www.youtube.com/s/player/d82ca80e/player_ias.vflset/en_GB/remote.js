(function(g) {
    var window = this;
    'use strict';
    var fRa = function(a, b) {
            return g.Ob(a, b)
        },
        gRa = function(a, b) {
            b = b instanceof g.Kc ? b : g.Qc(b, /^data:image\//i.test(b));
            a.src = g.Lc(b)
        },
        N6 = function(a) {
            g.Tj(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Oa()).toString(36));
            return a
        },
        O6 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Yj(a.u, b, c)
        },
        hRa = function(a) {
            if (a instanceof g.co) return a;
            if ("function" == typeof a.Gg) return a.Gg(!1);
            if (g.Ja(a)) {
                var b = 0,
                    c = new g.co;
                c.i = function() {
                    for (;;) {
                        if (b >= a.length) throw g.Tq;
                        if (b in a) return a[b++];
                        b++
                    }
                };
                c.next = c.i.bind(c);
                return c
            }
            throw Error("Not implemented");
        },
        iRa = function(a, b, c) {
            if (g.Ja(a)) try {
                g.Cb(a, b, c)
            } catch (d) {
                if (d !== g.Tq) throw d;
            } else {
                a = hRa(a);
                try {
                    for (;;) b.call(c, a.i(), void 0, a)
                } catch (d) {
                    if (d !== g.Tq) throw d;
                }
            }
        },
        jRa = function(a, b) {
            var c = [];
            iRa(b, function(d) {
                try {
                    var e = g.sr.prototype.u.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.rr(e) && c.push(d)
            }, a);
            return c
        },
        kRa = function(a, b) {
            jRa(a, b).forEach(function(c) {
                g.sr.prototype.remove.call(this, c)
            }, a)
        },
        lRa = function(a) {
            if (a.ma) {
                if (a.ma.locationOverrideToken) return {
                    locationOverrideToken: a.ma.locationOverrideToken
                };
                if (null != a.ma.latitudeE7 && null != a.ma.longitudeE7) return {
                    latitudeE7: a.ma.latitudeE7,
                    longitudeE7: a.ma.longitudeE7
                }
            }
            return null
        },
        mRa = function(a, b) {
            g.gb(a, b) || a.push(b)
        },
        P6 = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        nRa = function(a) {
            try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        Q6 = function(a) {
            if (g.C.JSON) try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            return nRa(a)
        },
        oRa = function(a, b, c, d) {
            var e = new g.Lj(null, void 0);
            a && g.Mj(e, a);
            b && g.Nj(e, b);
            c && g.Oj(e, c);
            d && (e.K = d);
            return e
        },
        R6 = function(a, b) {
            g.$u[a] = !0;
            var c = g.Yu();
            c && c.publish.apply(c, arguments);
            g.$u[a] = !1
        },
        S6 = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.Uq;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username =
                a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", pRa(this, a.capabilities || ""), qRa(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "",
                this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        pRa = function(a, b) {
            a.capabilities.clear();
            g.Co(b.split(","), g.Na(fRa, rRa)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        qRa = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        T6 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        U6 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        sRa = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        tRa = function(a) {
            return new T6(a)
        },
        uRa = function(a) {
            return Array.isArray(a) ? g.lm(a, tRa) : []
        },
        V6 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        W6 = function(a) {
            return Array.isArray(a) ? "[" + g.lm(a, V6).join(",") + "]" : "null"
        },
        X6 = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        vRa = function(a) {
            return g.lm(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        Y6 = function(a, b) {
            return g.db(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        Z6 = function(a, b) {
            return g.db(a, function(c) {
                return U6(c, b)
            })
        },
        wRa = function() {
            var a = (0, g.Qz)();
            a && kRa(a, a.i.Gg(!0))
        },
        $6 = function() {
            var a = g.Tz("yt-remote-connected-devices") || [];
            g.zb(a);
            return a
        },
        xRa = function(a) {
            if (g.ib(a)) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.lm(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        yRa = function(a) {
            g.Sz("yt-remote-connected-devices", a, 86400)
        },
        b7 = function() {
            if (a7) return a7;
            var a = g.Tz("yt-remote-device-id");
            a || (a = X6(), g.Sz("yt-remote-device-id", a, 31536E3));
            for (var b = $6(), c = 1, d = a; g.gb(b, d);) c++, d = a + "#" + c;
            return a7 = d
        },
        c7 = function() {
            var a = $6(),
                b = b7();
            g.gb(a, b);
            g.Wz() && g.Bb(a, b);
            a = xRa(a);
            if (g.ib(a)) try {
                g.Jt("remote_sid")
            } catch (c) {} else try {
                g.Ht("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        zRa = function() {
            return g.Tz("yt-remote-session-browser-channel")
        },
        ARa = function() {
            return g.Tz("yt-remote-local-screens") || []
        },
        BRa = function() {
            g.Sz("yt-remote-lounge-token-expiration", !0, 86400)
        },
        CRa = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.lm(ARa(), function(d) {
                    return d.loungeToken
                }),
                c = g.lm(a, function(d) {
                    return d.loungeToken
                });
            g.mm(c, function(d) {
                return !g.gb(b, d)
            }) && BRa();
            g.Sz("yt-remote-local-screens", a, 31536E3)
        },
        DRa = function(a, b) {
            g.Sz("yt-remote-session-browser-channel", a);
            g.Sz("yt-remote-session-screen-id", b);
            a = $6();
            b = b7();
            g.gb(a, b) || a.push(b);
            yRa(a);
            c7()
        },
        d7 = function(a) {
            a || (g.Vz("yt-remote-session-screen-id"), g.Vz("yt-remote-session-video-id"));
            c7();
            a = $6();
            g.nb(a, b7());
            yRa(a)
        },
        ERa = function() {
            if (!e7) {
                var a = g.Cr();
                a && (e7 = new g.mr(a))
            }
        },
        FRa = function() {
            ERa();
            return e7 ? !!e7.get("yt-remote-use-staging-server") : !1
        },
        f7 = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        GRa = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        HRa = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        g7 = function(a) {
            a.length ? IRa(a.shift(), function() {
                g7(a)
            }) : h7()
        },
        JRa = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        IRa = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.Nk(d, g.br(a));
            (document.head || document.documentElement).appendChild(d)
        },
        KRa = function() {
            var a = f7(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        h7 = function() {
            var a = HRa();
            a && a(!1, "No cast extension found")
        },
        i7 = function() {
            if (LRa) {
                var a = 2,
                    b = HRa(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                IRa("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", h7, c)
            }
        },
        MRa = function() {
            i7();
            var a = KRa();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            g7(a)
        },
        ORa = function() {
            i7();
            var a = KRa();
            a.push.apply(a, g.v(NRa.map(JRa)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            g7(a)
        },
        j7 = function(a, b, c) {
            g.I.call(this);
            this.J = null != c ? (0, g.D)(a, c) : a;
            this.Nf = b;
            this.D = (0, g.D)(this.oP, this);
            this.i = !1;
            this.u = 0;
            this.B = this.Kb = null;
            this.C = []
        },
        k7 = function(a, b, c) {
            g.I.call(this);
            this.C = null != c ? a.bind(c) : a;
            this.Nf = b;
            this.B = null;
            this.i = !1;
            this.u = 0;
            this.Kb = null
        },
        l7 = function(a) {
            a.Kb = g.th(function() {
                a.Kb = null;
                a.i && !a.u && (a.i = !1, l7(a))
            }, a.Nf);
            var b = a.B;
            a.B = null;
            a.C.apply(null, b)
        },
        m7 = function() {},
        n7 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.C.setTimeout(function() {
                a()
            }, b)
        },
        p7 = function(a) {
            o7.dispatchEvent(new PRa(o7, a))
        },
        PRa = function(a, b) {
            g.vf.call(this, "statevent", a);
            this.stat = b
        },
        q7 = function(a, b, c, d) {
            this.i = a;
            this.B = b;
            this.S = c;
            this.K = d || 1;
            this.u = 45E3;
            this.C = new g.Zj(this);
            this.J = new g.sh;
            this.J.setInterval(250)
        },
        RRa = function(a, b, c) {
            a.Rs = 1;
            a.Hm = N6(b.clone());
            a.aq = c;
            a.D = !0;
            QRa(a, null)
        },
        r7 = function(a, b, c, d, e) {
            a.Rs = 1;
            a.Hm = N6(b.clone());
            a.aq = null;
            a.D = c;
            e && (a.BM = !1);
            QRa(a, d)
        },
        QRa = function(a, b) {
            a.Fs = Date.now();
            s7(a);
            a.Vn = a.Hm.clone();
            O6(a.Vn, "t", a.K);
            a.HA = 0;
            a.Ef = a.i.wC(a.i.Fw() ? b : null);
            0 < a.vB && (a.Uz = new k7((0, g.D)(a.CN, a, a.Ef), a.vB));
            a.C.Ra(a.Ef, "readystatechange", a.pP);
            b = a.Fo ? g.Zb(a.Fo) : {};
            a.aq ? (a.EA = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.Ef.send(a.Vn, a.EA, a.aq, b)) : (a.EA = "GET", a.BM && !g.vg && (b.Connection = "close"), a.Ef.send(a.Vn, a.EA, null, b));
            a.i.mj(1)
        },
        TRa = function(a, b) {
            var c = a.HA,
                d = b.indexOf("\n", c);
            if (-1 == d) return t7;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return SRa;
            d += 1;
            if (d + c > b.length) return t7;
            b = b.substr(d, c);
            a.HA = d + c;
            return b
        },
        VRa = function(a, b) {
            a.Fs = Date.now();
            s7(a);
            var c = b ? window.location.hostname : "";
            a.Vn = a.Hm.clone();
            g.Tj(a.Vn, "DOMAIN", c);
            g.Tj(a.Vn, "t", a.K);
            try {
                a.Dj = new ActiveXObject("htmlfile")
            } catch (m) {
                u7(a);
                a.Bm = 7;
                p7(22);
                v7(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in w7) f = w7[f];
                        else if (f in URa) f = w7[f] = URa[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                w7[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            d += "</body></html>";
            c = g.kd(g.mc("b/12014412"), d);
            a.Dj.open();
            a.Dj.write(g.gd(c));
            a.Dj.close();
            a.Dj.parentWindow.m = (0, g.D)(a.kV, a);
            a.Dj.parentWindow.d = (0, g.D)(a.OL, a, !0);
            a.Dj.parentWindow.rpcClose = (0, g.D)(a.OL, a, !1);
            c = a.Dj.createElement("DIV");
            a.Dj.parentWindow.document.body.appendChild(c);
            d = g.Pc(a.Vn.toString());
            d = g.td(g.Lc(d));
            d = g.kd(g.mc("b/12014412"), '<iframe src="' + d + '"></iframe>');
            g.nd(c, d);
            a.i.mj(1)
        },
        s7 = function(a) {
            a.YF = Date.now() +
                a.u;
            WRa(a, a.u)
        },
        WRa = function(a, b) {
            if (null != a.gt) throw Error("WatchDog timer not null");
            a.gt = n7((0, g.D)(a.rV, a), b)
        },
        x7 = function(a) {
            a.gt && (g.C.clearTimeout(a.gt), a.gt = null)
        },
        v7 = function(a) {
            a.i.cf() || a.Uo || a.i.lx(a)
        },
        u7 = function(a) {
            x7(a);
            g.sf(a.Uz);
            a.Uz = null;
            a.J.stop();
            g.bk(a.C);
            if (a.Ef) {
                var b = a.Ef;
                a.Ef = null;
                b.abort();
                b.dispose()
            }
            a.Dj && (a.Dj = null)
        },
        y7 = function(a, b) {
            try {
                a.i.HL(a, b), a.i.mj(4)
            } catch (c) {}
        },
        YRa = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                XRa(a, b, function(h) {
                    h ? c(!0) : g.C.setTimeout(function() {
                        YRa(a, b, c, d, f)
                    }, f)
                })
            }
        },
        XRa = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    z7(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    z7(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    z7(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    z7(d), c(!1)
                } catch (e) {}
            };
            g.C.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            gRa(d, a)
        },
        z7 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        ZRa = function(a) {
            this.i = a;
            this.u = new m7
        },
        $Ra = function(a) {
            var b = A7(a.i, a.nu, "/mail/images/cleardot.gif");
            N6(b);
            YRa(b.toString(), 5E3, (0, g.D)(a.gQ, a), 3, 2E3);
            a.mj(1)
        },
        C7 = function(a) {
            var b = a.i.V;
            if (null != b) p7(5), b ? (p7(11), B7(a.i, a, !1)) : (p7(12), B7(a.i, a, !0));
            else if (a.fh = new q7(a, void 0, void 0, void 0), a.fh.Fo = a.wB, b = a.i, b = A7(b, b.Fw() ? a.Mt : null, a.xB), p7(5), !g.ie || g.ae(10)) O6(b, "TYPE", "xmlhttp"), r7(a.fh, b, !1, a.Mt, !1);
            else {
                O6(b, "TYPE", "html");
                var c = a.fh;
                a = !!a.Mt;
                c.Rs = 3;
                c.Hm = N6(b.clone());
                VRa(c, a)
            }
        },
        D7 = function(a, b, c) {
            this.i = 1;
            this.u = [];
            this.C = [];
            this.D = new m7;
            this.S = a || null;
            this.V = null != b ? b : null;
            this.J = c || !1
        },
        aSa = function(a, b) {
            this.i = a;
            this.map = b;
            this.context = null
        },
        bSa = function(a, b, c, d) {
            g.vf.call(this, "timingevent", a);
            this.size = b;
            this.xw = d
        },
        cSa = function(a) {
            g.vf.call(this, "serverreachability", a)
        },
        fSa = function(a) {
            dSa(a);
            if (3 == a.i) {
                var b = a.Ov++,
                    c = a.Vx.clone();
                g.Tj(c, "SID", a.B);
                g.Tj(c, "RID", b);
                g.Tj(c, "TYPE", "terminate");
                E7(a, c);
                b = new q7(a, a.B, b, void 0);
                b.Rs = 2;
                b.Hm = N6(c.clone());
                gRa(new Image, b.Hm.toString());
                b.Fs = Date.now();
                s7(b)
            }
            eSa(a)
        },
        gSa = function(a) {
            a.GQ(1, 0);
            a.Vx = A7(a, null, a.yB);
            F7(a)
        },
        dSa = function(a) {
            a.Lm && (a.Lm.abort(), a.Lm = null);
            a.Ae && (a.Ae.cancel(), a.Ae = null);
            a.ql && (g.C.clearTimeout(a.ql), a.ql = null);
            G7(a);
            a.Qg && (a.Qg.cancel(), a.Qg = null);
            a.Vm && (g.C.clearTimeout(a.Vm), a.Vm = null)
        },
        hSa = function(a, b) {
            if (0 == a.i) throw Error("Invalid operation: sending map when state is closed");
            a.u.push(new aSa(a.lS++, b));
            2 != a.i && 3 != a.i || F7(a)
        },
        iSa = function(a) {
            var b = 0;
            a.Ae && b++;
            a.Qg && b++;
            return b
        },
        F7 = function(a) {
            a.Qg || a.Vm || (a.Vm = n7((0, g.D)(a.ML, a), 0), a.Ar = 0)
        },
        kSa = function(a, b) {
            if (1 == a.i) {
                if (!b) {
                    a.Ov = Math.floor(1E5 * Math.random());
                    b = a.Ov++;
                    var c = new q7(a, "", b, void 0);
                    c.Fo = a.Pj;
                    var d = H7(a),
                        e = a.Vx.clone();
                    g.Tj(e, "RID", b);
                    g.Tj(e, "CVER", "1");
                    E7(a, e);
                    RRa(c, e, d);
                    a.Qg = c;
                    a.i = 2
                }
            } else 3 == a.i && (b ? jSa(a, b) : 0 == a.u.length || a.Qg || jSa(a))
        },
        jSa = function(a, b) {
            if (b)
                if (6 < a.Vo) {
                    a.u = a.C.concat(a.u);
                    a.C.length = 0;
                    var c = a.Ov - 1;
                    b = H7(a)
                } else c = b.S, b = b.aq;
            else c = a.Ov++, b = H7(a);
            var d = a.Vx.clone();
            g.Tj(d, "SID", a.B);
            g.Tj(d, "RID", c);
            g.Tj(d, "AID", a.Vr);
            E7(a, d);
            c = new q7(a, a.B, c, a.Ar + 1);
            c.Fo = a.Pj;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Qg = c;
            RRa(c, d, b)
        },
        E7 = function(a, b) {
            a.Ff && (a = a.Ff.hJ()) && g.Eb(a, function(c, d) {
                g.Tj(b, d, c)
            })
        },
        H7 = function(a) {
            var b = Math.min(a.u.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Vo && 0 < b) {
                var d = a.u[0].i;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    Eq: e.Eq
                }, f++) {
                e.Eq = a.u[f].i;
                var h = a.u[f].map;
                e.Eq = 6 >= a.Vo ? f : e.Eq - d;
                try {
                    g.Eb(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.Eq + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.Eq + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.C = a.C.concat(a.u.splice(0, b));
            return c.join("&")
        },
        lSa = function(a) {
            a.Ae || a.ql || (a.K = 1, a.ql = n7((0, g.D)(a.LL, a), 0), a.Yq = 0)
        },
        I7 = function(a) {
            if (a.Ae || a.ql || 3 <= a.Yq) return !1;
            a.K++;
            a.ql = n7((0, g.D)(a.LL, a), mSa(a, a.Yq));
            a.Yq++;
            return !0
        },
        B7 = function(a, b, c) {
            a.CA = c;
            a.Qj = b.Uk;
            a.J || gSa(a)
        },
        G7 = function(a) {
            null != a.gp && (g.C.clearTimeout(a.gp), a.gp = null)
        },
        mSa = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        J7 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Ff && (c = null);
                var d = (0, g.D)(a.rW, a);
                c || (c = new g.Lj("//www.google.com/images/cleardot.gif"), N6(c));
                XRa(c.toString(), 1E4, d)
            } else p7(2);
            nSa(a, b)
        },
        nSa = function(a, b) {
            a.i = 0;
            a.Ff && a.Ff.tI(b);
            eSa(a);
            dSa(a)
        },
        eSa = function(a) {
            a.i = 0;
            a.Qj = -1;
            if (a.Ff)
                if (0 == a.C.length && 0 == a.u.length) a.Ff.jC();
                else {
                    g.rb(a.C);
                    var b = g.rb(a.u);
                    a.C.length = 0;
                    a.u.length = 0;
                    a.Ff.jC(b)
                }
        },
        A7 = function(a, b, c) {
            var d = g.Uj(c);
            if ("" != d.i) b && g.Nj(d, b + "." + d.i), g.Oj(d, d.B);
            else {
                var e = window.location;
                d = oRa(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.Mu && g.Eb(a.Mu, function(f, h) {
                g.Tj(d, h, f)
            });
            g.Tj(d, "VER", a.Vo);
            E7(a, d);
            return d
        },
        oSa = function() {},
        pSa = function() {
            this.i = [];
            this.u = []
        },
        qSa = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        K7 = function(a, b) {
            g.I.call(this);
            this.i = new g.M(this.cV, 0, this);
            g.J(this, this.i);
            this.Nf = 5E3;
            this.u = 0;
            if ("function" === typeof a) b && (a = (0, g.D)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.D)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.B = a
        },
        L7 = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.xa = a;
            this.J = b;
            this.B = new g.lr;
            this.u = new K7(this.VV, this);
            this.i = null;
            this.ea = !1;
            this.D = null;
            this.V = "";
            this.S = this.C = 0;
            this.K = [];
            this.Aa = c;
            this.ma = d;
            this.Ba = e
        },
        rSa = function(a) {
            return {
                firstTestResults: [""],
                secondTestResults: !a.i.CA,
                sessionId: a.i.B,
                arrayId: a.i.Vr
            }
        },
        sSa = function(a, b) {
            a.S = b || 0;
            a.u.stop();
            M7(a);
            a.i && (3 == a.i.getState() && kSa(a.i), fSa(a.i));
            a.S = 0
        },
        N7 = function(a) {
            return !!a.i && 3 == a.i.getState()
        },
        M7 = function(a) {
            if (a.i) {
                var b = a.ma(),
                    c = a.i.Pj || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.i.Pj = c
            }
        },
        O7 = function(a) {
            this.port = this.domain = "";
            this.i = "/api/lounge";
            this.u = !0;
            a = a || document.location.href;
            var b = Number(g.ci(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.di(a) || "";
            a = g.$c;
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.Ic(a, "10.0") && (this.u = !1))
        },
        P7 = function(a, b) {
            var c = a.i;
            a.u && (c = "https://" + a.domain + a.port + a.i);
            return g.oi(c + b, {})
        },
        Q7 = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Na(a.C, d, !0),
                onError: g.Na(a.B, e),
                onTimeout: g.Na(a.D, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.vt(b, a)
        },
        wSa = function() {
            var a = tSa;
            uSa();
            R7.push(a);
            vSa()
        },
        S7 = function(a, b) {
            uSa();
            var c = xSa(a, String(b));
            g.ib(R7) ? ySa(c) : (vSa(), g.Cb(R7, function(d) {
                d(c)
            }))
        },
        uSa = function() {
            R7 || (R7 = g.Fa("yt.mdx.remote.debug.handlers_") || [], g.Ea("yt.mdx.remote.debug.handlers_", R7, void 0))
        },
        ySa = function(a) {
            var b = (T7 + 1) % 50;
            T7 = b;
            U7[b] = a;
            V7 || (V7 = 49 == b)
        },
        vSa = function() {
            var a = R7;
            if (U7[0]) {
                var b = V7 ? T7 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = U7[b];
                    g.Cb(a, function(d) {
                        d(c)
                    })
                } while (b != T7);
                U7 = Array(50);
                T7 = -1;
                V7 = !1
            }
        },
        xSa = function(a, b) {
            var c = (Date.now() - zSa) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        W7 = function(a) {
            g.R.call(this);
            this.J = a;
            this.screens = []
        },
        ASa = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        BSa = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.Co(a.screens, function(f) {
                return !!Y6(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = ASa(a, b[d]) || c;
            return c
        },
        CSa = function(a, b) {
            var c = a.screens.length;
            a.screens = g.Co(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        X7 = function(a, b, c, d, e) {
            g.R.call(this);
            this.B = a;
            this.K = b;
            this.C = c;
            this.J = d;
            this.D = e;
            this.u = 0;
            this.i = null;
            this.Kb = NaN
        },
        Z7 = function(a) {
            W7.call(this, "LocalScreenService");
            this.u = a;
            this.i = NaN;
            Y7(this);
            this.info("Initializing with " + W6(this.screens))
        },
        DSa = function(a) {
            if (a.screens.length) {
                var b = g.lm(a.screens, function(d) {
                        return d.id
                    }),
                    c = P7(a.u, "/pairing/get_lounge_token_batch");
                Q7(a.u, c, {
                    screen_ids: b.join(",")
                }, (0, g.D)(a.cR, a), (0, g.D)(a.bR, a))
            }
        },
        Y7 = function(a) {
            if (g.ts("deprecate_pair_servlet_enabled")) return BSa(a, []);
            var b = uRa(ARa());
            b = g.Co(b, function(c) {
                return !c.uuid
            });
            return BSa(a, b)
        },
        $7 = function(a, b) {
            CRa(g.lm(a.screens, sRa));
            b && BRa()
        },
        b8 = function(a, b) {
            g.R.call(this);
            this.J = b;
            b = (b = g.Tz("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.J(), e = 0, f = d.length; e < f; ++e) {
                var h = d[e].id;
                c[h] = g.gb(b, h)
            }
            this.i = c;
            this.D = a;
            this.B = this.C = NaN;
            this.u = null;
            a8("Initialized with " + g.Uh(this.i))
        },
        c8 = function(a, b, c) {
            var d = P7(a.D, "/pairing/get_screen_availability");
            Q7(a.D, d, {
                lounge_token: b.token
            }, (0, g.D)(function(e) {
                e = e.screens || [];
                for (var f = 0, h = e.length; f < h; ++f)
                    if (e[f].loungeToken == b.token) {
                        c("online" == e[f].status);
                        return
                    }
                c(!1)
            }, a), (0, g.D)(function() {
                c(!1)
            }, a))
        },
        d8 = function(a, b) {
            a: if (P6(b) != P6(a.i)) var c = !1;
                else {
                    c = g.Mb(b);
                    for (var d = 0, e = c.length; d < e; ++d)
                        if (!a.i[c[d]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (a8("Updated online screens: " + g.Uh(a.i)), a.i = b, a.Z("screenChange"));ESa(a)
        },
        e8 = function(a) {
            isNaN(a.B) || g.pt(a.B);
            a.B = g.nt((0, g.D)(a.UE, a), 0 < a.C && a.C < g.Oa() ? 2E4 : 1E4)
        },
        a8 = function(a) {
            S7("OnlineScreenService", a)
        },
        FSa = function(a) {
            var b = {};
            g.Cb(a.J(), function(c) {
                c.token ? b[c.token] = c.id : this.Xd("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        ESa = function(a) {
            a = g.Mb(g.Fb(a.i, function(b) {
                return b
            }));
            g.zb(a);
            a.length ? g.Sz("yt-remote-online-screen-ids", a.join(","), 60) : g.Vz("yt-remote-online-screen-ids")
        },
        f8 = function(a, b) {
            b = void 0 === b ? !1 : b;
            W7.call(this, "ScreenService");
            this.C = a;
            this.K = b;
            this.i = this.u = null;
            this.B = [];
            this.D = {};
            GSa(this)
        },
        ISa = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.D[b]);
            var h = a.yh(),
                l = c ? Z6(h, c) : null;
            c && (a.K || l) || (l = Z6(h, b));
            if (l) {
                l.uuid = b;
                var m = g8(a, l);
                c8(a.i, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? HSa(a, c, (0, g.D)(function(n) {
                var p = g8(this, new T6({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                c8(this.i, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        JSa = function(a, b) {
            for (var c = 0, d = a.screens.length; c < d; ++c)
                if (a.screens[c].name == b) return a.screens[c];
            return null
        },
        KSa = function(a, b, c) {
            c8(a.i, b, c)
        },
        HSa = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.vt(P7(a.C, "/pairing/get_lounge_token_batch"), e)
        },
        LSa = function(a) {
            a.screens = a.u.yh();
            var b = a.D,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = 0;
            for (d = a.screens.length; b < d; ++b) {
                var e = a.screens[b];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + W6(a.screens))
        },
        GSa = function(a) {
            h8(a);
            a.u = new Z7(a.C);
            a.u.subscribe("screenChange", (0, g.D)(a.lR, a));
            LSa(a);
            a.K || (a.B = uRa(g.Tz("yt-remote-automatic-screen-cache") || []));
            h8(a);
            a.info("Initializing automatic screens: " + W6(a.B));
            a.i = new b8(a.C, (0, g.D)(a.yh, a, !0));
            a.i.subscribe("screenChange", (0, g.D)(function() {
                this.Z("onlineScreenChange")
            }, a))
        },
        g8 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = Z6(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), a.K || MSa(a));
            h8(a);
            a.D[b.uuid] = b.id;
            g.Sz("yt-remote-device-id-map", a.D, 31536E3);
            return b
        },
        MSa = function(a) {
            a = g.Co(a.B, function(b) {
                return "shortLived" != b.idType
            });
            g.Sz("yt-remote-automatic-screen-cache", g.lm(a, sRa))
        },
        h8 = function(a) {
            a.D = g.Tz("yt-remote-device-id-map") || {}
        },
        i8 = function(a, b, c) {
            g.R.call(this);
            this.Ba = c;
            this.B = a;
            this.i = b;
            this.C = null
        },
        j8 = function(a, b) {
            a.C = b;
            a.Z("sessionScreen", a.C)
        },
        NSa = function(a, b) {
            a.C && (a.C.token = b, g8(a.B, a.C));
            a.Z("sessionScreen", a.C)
        },
        k8 = function(a, b) {
            S7(a.Ba, b)
        },
        l8 = function(a, b, c) {
            i8.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.u = null;
            this.ma = (0, g.D)(this.uP, this);
            this.Aa = (0, g.D)(this.vV, this);
            this.ea = g.nt(function() {
                OSa(d, null)
            }, 12E4);
            this.K = this.D = this.J = this.S = 0;
            this.xa = !1;
            this.V = "unknown"
        },
        m8 = function(a, b) {
            g.pt(a.K);
            a.K = 0;
            0 == b ? PSa(a) : a.K = g.nt(function() {
                PSa(a)
            }, b)
        },
        PSa = function(a) {
            QSa(a, "getLoungeToken");
            g.pt(a.D);
            a.D = g.nt(function() {
                RSa(a, null)
            }, 3E4)
        },
        QSa = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Uh(void 0));
            var c = {};
            c.type = b;
            a.u ? a.u.sendMessage("urn:x-cast:com.google.youtube.mdx", c, g.Ga, (0, g.D)(function() {
                k8(this, "Failed to send message: " + b + ".")
            }, a)) : k8(a, "Sending yt message without session: " + g.Uh(c))
        },
        n8 = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.getScreen() && a.getScreen().id == b || a.vJ(b, function(c) {
                j8(a, c)
            }, function() {
                return a.rg()
            }, 5)) : a.rg(Error("Waiting for session status timed out."))
        },
        TSa = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new T6(b);
            SSa(a, d, function(e) {
                e ? (a.xa = !0, g8(a.B, d), j8(a, d), a.V = "unknown", m8(a, c)) : (g.xs(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.rg())
            }, 5)
        },
        OSa = function(a, b) {
            g.pt(a.ea);
            a.ea = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.getScreen() && a.getScreen().uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? TSa(a, {
                name: a.i.friendlyName,
                screenId: b.screenId,
                loungeToken: b.loungeToken,
                dialId: b.deviceId,
                screenIdType: "shortLived"
            }, b.loungeTokenRefreshIntervalMs) : (g.xs(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), n8(a, b.screenId))) : (g.xs(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) +
                ".")), n8(a, b.screenId)) : n8(a, b.screenId) : a.rg(Error("Waiting for session status timed out."))
        },
        RSa = function(a, b) {
            g.pt(a.D);
            a.D = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.V = c, m8(a, 3E4)) : (NSa(a, b.loungeToken), a.xa = !1, a.V = "unknown", m8(a, b.loungeTokenRefreshIntervalMs))
        },
        SSa = function(a, b, c, d) {
            g.pt(a.J);
            a.J = 0;
            KSa(a.B, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.nt(function() {
                    SSa(a, b, c, d - 1)
                }, 300)
            })
        },
        USa = function(a) {
            g.pt(a.S);
            a.S = 0;
            g.pt(a.J);
            a.J = 0;
            g.pt(a.ea);
            a.ea = 0;
            g.pt(a.D);
            a.D = 0;
            g.pt(a.K);
            a.K = 0
        },
        o8 = function(a, b, c, d) {
            i8.call(this, a, b, "DialSession");
            this.config_ = d;
            this.u = this.S = null;
            this.Aa = "";
            this.Ka = c;
            this.La = null;
            this.ea = g.Ga;
            this.V = NaN;
            this.Ga = (0, g.D)(this.vP, this);
            this.D = g.Ga;
            this.K = this.J = 0;
            this.ma = !1;
            this.xa = "unknown"
        },
        p8 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.u) ? 0 : b.getDialAppInfo))
        },
        VSa = function(a) {
            a.D = a.B.aH(a.Aa, a.i.label, a.i.friendlyName, p8(a), function(b, c) {
                a.D = g.Ga;
                a.ma = !0;
                j8(a, b);
                "shortLived" == b.idType && 0 < c && q8(a, c)
            }, function(b) {
                a.D = g.Ga;
                a.rg(b)
            })
        },
        WSa = function(a) {
            var b = {};
            b.pairingCode = a.Aa;
            b.theme = a.Ka;
            FRa() && (b.env_useStageMdx = 1);
            return g.mi(b)
        },
        r8 = function(a) {
            return new Promise(function(b) {
                a.Aa = X6();
                if (a.La) {
                    var c = new chrome.cast.DialLaunchResponse(!0, WSa(a));
                    b(c);
                    VSa(a)
                } else a.ea = function() {
                    g.pt(a.V);
                    a.ea = function() {};
                    a.V = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, WSa(a));
                    b(d);
                    VSa(a)
                }, a.V = g.nt(function() {
                    a.ea()
                }, 100)
            })
        },
        YSa = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new T6(b);
            return (new Promise(function(e) {
                XSa(a, d, function(f) {
                    f ? (a.ma = !0, g8(a.B, d), j8(a, d), q8(a, c)) : g.xs(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : r8(a)
            })
        },
        ZSa = function(a, b) {
            var c = a.S.receiver.label,
                d = a.i.friendlyName;
            return (new Promise(function(e) {
                ISa(a.B, c, b, d, function(f) {
                    f && f.token && j8(a, f);
                    e(f)
                }, function(f) {
                    k8(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : r8(a)
            })
        },
        XSa = function(a, b, c, d) {
            g.pt(a.J);
            a.J = 0;
            KSa(a.B, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.nt(function() {
                    XSa(a, b, c, d - 1)
                }, 300)
            })
        },
        q8 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            p8(a) && (g.pt(a.K), a.K = 0, 0 == b ? $Sa(a) : a.K = g.nt(function() {
                $Sa(a)
            }, b))
        },
        $Sa = function(a) {
            p8(a) && a.u.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.xa = c, q8(a, 3E4)) : (a.ma = !1, a.xa = "unknown", NSa(a, b.loungeToken), q8(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.xa = "noLoungeTokenResponse";
                q8(a, 3E4)
            })
        },
        aTa = function(a) {
            g.pt(a.J);
            a.J = 0;
            g.pt(a.K);
            a.K = 0;
            a.D();
            a.D = function() {};
            g.pt(a.V)
        },
        s8 = function(a, b) {
            i8.call(this, a, b, "ManualSession");
            this.u = g.nt((0, g.D)(this.Wr, this, null), 150)
        },
        t8 = function(a, b) {
            g.R.call(this);
            this.config_ = b;
            this.u = a;
            this.S = b.appId || "233637DE";
            this.C = b.theme || "cl";
            this.V = b.disableCastApi || !1;
            this.J = b.forceMirroring || !1;
            this.i = null;
            this.K = !1;
            this.B = [];
            this.D = (0, g.D)(this.qU, this)
        },
        bTa = function(a, b) {
            return b ? g.db(a.B, function(c) {
                return U6(b, c.label)
            }, a) : null
        },
        u8 = function(a) {
            S7("Controller", a)
        },
        tSa = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        v8 = function(a) {
            return a.K || !!a.B.length || !!a.i
        },
        w8 = function(a, b, c) {
            b != a.i && (g.sf(a.i), (a.i = b) ? (c ? a.Z("yt-remote-cast2-receiver-resumed",
                b.i) : a.Z("yt-remote-cast2-receiver-selected", b.i), b.subscribe("sessionScreen", (0, g.D)(a.KL, a, b)), b.subscribe("sessionFailed", function() {
                return cTa(a, b)
            }), b.getScreen() ? a.Z("yt-remote-cast2-session-change", b.getScreen()) : c && a.i.Wr(null)) : a.Z("yt-remote-cast2-session-change", null))
        },
        cTa = function(a, b) {
            a.i == b && a.Z("yt-remote-cast2-session-failed")
        },
        dTa = function(a) {
            var b = a.u.ZG(),
                c = a.i && a.i.i;
            a = g.lm(b, function(d) {
                c && U6(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = bTa(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        iTa = function(a, b, c, d) {
            d.disableCastApi ? x8("Cannot initialize because disabled by Mdx config.") : eTa() ? fTa(b, d) && (y8(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? gTa(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? gTa(a, c) : (z8("Failed to load cast API: " + f), A8(!1), y8(!1), g.Vz("yt-remote-cast-available"), g.Vz("yt-remote-cast-receiver"),
                    hTa(), c(!1))
            }, d.loadCastApiSetupScript ? g.Xz("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= f7() && MRa() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? h7() : 89 <= f7() ? ORa() : (i7(), g7(NRa.map(JRa))))) : x8("Cannot initialize because not running Chrome")
        },
        hTa = function() {
            x8("dispose");
            var a = B8();
            a && a.dispose();
            g.Ea("yt.mdx.remote.cloudview.instance_", null, void 0);
            jTa(!1);
            g.cv(C8);
            C8.length = 0
        },
        D8 = function() {
            return !!g.Tz("yt-remote-cast-installed")
        },
        kTa = function() {
            var a = g.Tz("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        lTa = function() {
            x8("clearCurrentReceiver");
            g.Vz("yt-remote-cast-receiver")
        },
        mTa = function() {
            return D8() ? B8() ? B8().getCastSession() : (z8("getCastSelector: Cast is not initialized."), null) : (z8("getCastSelector: Cast API is not installed!"), null)
        },
        F8 = function() {
            D8() ? B8() ? E8() ? (x8("Requesting cast selector."), B8().requestSession()) : (x8("Wait for cast API to be ready to request the session."), C8.push(g.bv("yt-remote-cast2-api-ready", F8))) : z8("requestCastSelector: Cast is not initialized.") : z8("requestCastSelector: Cast API is not installed!")
        },
        G8 =
        function(a, b) {
            E8() ? B8().setConnectedScreenStatus(a, b) : z8("setConnectedScreenStatus called before ready.")
        },
        eTa = function() {
            var a = 0 <= g.$c.search(/ (CrMo|Chrome|CriOS)\//);
            return g.Zi || a
        },
        nTa = function(a, b) {
            B8().init(a, b)
        },
        fTa = function(a, b) {
            var c = !1;
            B8() || (a = new t8(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.Sz("yt-remote-cast-available", d);
                R6("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                x8("onReceiverSelected: " + d.friendlyName);
                g.Sz("yt-remote-cast-receiver", d);
                R6("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                x8("onReceiverResumed: " + d.friendlyName);
                g.Sz("yt-remote-cast-receiver", d);
                R6("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                x8("onSessionChange: " + V6(d));
                d || g.Vz("yt-remote-cast-receiver");
                R6("yt-remote-cast2-session-change", d)
            }), g.Ea("yt.mdx.remote.cloudview.instance_", a, void 0), c = !0);
            x8("cloudview.createSingleton_: " + c);
            return c
        },
        B8 = function() {
            return g.Fa("yt.mdx.remote.cloudview.instance_")
        },
        gTa = function(a, b) {
            A8(!0);
            y8(!1);
            nTa(a, function(c) {
                c ? (jTa(!0), g.dv("yt-remote-cast2-api-ready")) : (z8("Failed to initialize cast API."), A8(!1), g.Vz("yt-remote-cast-available"), g.Vz("yt-remote-cast-receiver"), hTa());
                b(c)
            })
        },
        x8 = function(a) {
            S7("cloudview", a)
        },
        z8 = function(a) {
            S7("cloudview", a)
        },
        A8 = function(a) {
            x8("setCastInstalled_ " + a);
            g.Sz("yt-remote-cast-installed", a)
        },
        E8 = function() {
            return !!g.Fa("yt.mdx.remote.cloudview.apiReady_")
        },
        jTa = function(a) {
            x8("setApiReady_ " + a);
            g.Ea("yt.mdx.remote.cloudview.apiReady_", a, void 0)
        },
        y8 = function(a) {
            g.Ea("yt.mdx.remote.cloudview.initializing_", a, void 0)
        },
        H8 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.J = this.K = 0;
            this.trackData = null;
            this.hasNext = this.rk = !1;
            this.S = this.D = this.i = this.C = 0;
            this.B = NaN;
            this.u = !1;
            this.reset(a)
        },
        I8 = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.rk = !1;
            a.hasNext = !1;
            a.K = 0;
            a.J = g.Oa();
            a.C = 0;
            a.i = 0;
            a.D = 0;
            a.S = 0;
            a.B = NaN;
            a.u = !1
        },
        J8 = function(a) {
            return a.wc() ? (g.Oa() - a.J) / 1E3 : 0
        },
        K8 = function(a, b) {
            a.K = b;
            a.J = g.Oa()
        },
        L8 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Oa() - a.J) / 1E3 + a.K;
                case -1E3:
                    return 0
            }
            return a.K
        },
        M8 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && I8(a)
        },
        N8 = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.$b(a.trackData);
            b.hasPrevious = a.rk;
            b.hasNext = a.hasNext;
            b.playerTime = a.K;
            b.playerTimeAt = a.J;
            b.seekableStart = a.C;
            b.seekableEnd = a.i;
            b.duration = a.D;
            b.loadedTime = a.S;
            b.liveIngestionTime = a.B;
            return b
        },
        P8 = function(a, b) {
            g.R.call(this);
            this.B = 0;
            this.C = a;
            this.J = [];
            this.D = new pSa;
            this.u = this.i = null;
            this.V = (0, g.D)(this.VS, this);
            this.K = (0, g.D)(this.Uv, this);
            this.S = (0, g.D)(this.US, this);
            this.ea = (0, g.D)(this.cT, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.jF, this), oTa(this))) : c = 3;
            0 != c && (b ? this.jF(c) : g.nt((0, g.D)(function() {
                this.jF(c)
            }, this), 0));
            (a = mTa()) && O8(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.ea)
        },
        Q8 = function(a) {
            return new H8(a.C.getPlayerContextData())
        },
        oTa = function(a) {
            g.Cb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled".split(" "), function(b) {
                this.J.push(this.C.subscribe(b, g.Na(this.oU, b), this))
            }, a)
        },
        pTa = function(a) {
            g.Cb(a.J, function(b) {
                this.C.unsubscribeByKey(b)
            }, a);
            a.J.length = 0
        },
        R8 = function(a) {
            return 1 == a.getState()
        },
        S8 = function(a, b) {
            var c = a.D;
            50 > c.i.length + c.u.length && a.D.u.push(b)
        },
        U8 = function(a, b, c) {
            var d = Q8(a);
            K8(d, c); - 1E3 != d.playerState && (d.playerState = b);
            T8(a, d)
        },
        V8 = function(a, b, c) {
            a.C.sendMessage(b, c)
        },
        T8 = function(a, b) {
            pTa(a);
            a.C.setPlayerContextData(N8(b));
            oTa(a)
        },
        O8 = function(a, b) {
            a.u && (a.u.removeUpdateListener(a.V), a.u.removeMediaListener(a.K), a.Uv(null));
            a.u = b;
            a.u && (S7("CP", "Setting cast session: " + a.u.sessionId), a.u.addUpdateListener(a.V), a.u.addMediaListener(a.K), a.u.media.length && a.Uv(a.u.media[0]))
        },
        qTa = function(a) {
            var b = a.i.media,
                c = a.i.customData;
            if (b && c) {
                var d = Q8(a);
                b.contentId != d.videoId && S7("CP", "Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                K8(d, a.i.getEstimatedTime());
                T8(a, d)
            } else S7("CP", "No cast media video. Ignoring state update.")
        },
        W8 = function(a, b, c) {
            return (0, g.D)(function(d) {
                this.Xd("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.Xd("Retrying " + b + " using MDx browser channel."), V8(this, b, c))
            }, a)
        },
        X8 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.R.call(this);
            this.D = NaN;
            this.xa = !1;
            this.S = this.K = this.ea = this.ma = NaN;
            this.V = [];
            this.C = this.J = this.B = this.hc = this.i = null;
            this.Ga = a;
            this.Ba = d;
            this.V.push(g.uu(window, "beforeunload", (0, g.D)(this.XQ, this)));
            this.u = [];
            this.hc = new H8;
            this.La = b.id;
            this.Aa = b.idType;
            this.i = rTa(this, c);
            this.i.subscribe("handlerOpened", this.ZS, this);
            this.i.subscribe("handlerClosed", this.WS, this);
            this.i.subscribe("handlerError", this.XS, this);
            this.i.subscribe("handlerMessage", this.YS, this);
            this.i.gA(b.token);
            this.subscribe("remoteQueueChange",
                function() {
                    var e = this.hc.videoId;
                    g.Wz() && g.Sz("yt-remote-session-video-id", e)
                }, this)
        },
        sTa = function(a) {
            return g.db(a.u, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        Y8 = function(a) {
            S7("conn", a)
        },
        rTa = function(a, b) {
            return new L7(P7(a.Ga, "/bc"), b, !1, function() {
                return a.eH()
            }, "shortLived" == a.Aa)
        },
        Z8 = function(a, b) {
            a.Z("proxyStateChange", b)
        },
        tTa = function(a) {
            a.D = g.nt((0, g.D)(function() {
                Y8("Connecting timeout");
                this.wr(1)
            }, a), 2E4)
        },
        $8 = function(a) {
            g.pt(a.D);
            a.D = NaN
        },
        a9 = function(a) {
            g.pt(a.ma);
            a.ma = NaN
        },
        uTa = function(a) {
            b9(a);
            a.ea = g.nt((0, g.D)(function() {
                c9(this, "getNowPlaying")
            }, a), 2E4)
        },
        b9 = function(a) {
            g.pt(a.ea);
            a.ea = NaN
        },
        wTa = function(a, b) {
            var c = null;
            if (b) {
                var d = sTa(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ea("yt.mdx.remote.remoteClient_", c, void 0);
            b && ($8(a), a9(a));
            c = N7(a.i) && isNaN(a.D);
            b == c ? b && (Z8(a, 1), c9(a, "getSubtitlesTrack")) : b ? (a.uJ() && a.hc.reset(), Z8(a, 1), c9(a, "getNowPlaying"), vTa(a)) : a.wr(1)
        },
        xTa = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.hc.videoId && (g.Vb(b.params) ? a.hc.trackData = null : a.hc.trackData = b.params, a.Z("remotePlayerChange"))
        },
        yTa = function(a, b) {
            var c = b.params.videoId || b.params.video_id,
                d = parseInt(b.params.currentIndex, 10);
            a.hc.listId = b.params.listId || a.hc.listId;
            M8(a.hc, c, d);
            a.Z("remoteQueueChange")
        },
        ATa = function(a, b) {
            b.params = b.params || {};
            yTa(a, b);
            zTa(a, b);
            a.Z("autoplayDismissed")
        },
        zTa = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            K8(a.hc, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.hc.playerState && (c = -1E3);
            a.hc.playerState = c;
            c = Number(b.params.loadedTime);
            a.hc.S = isNaN(c) ? 0 : c;
            a.hc.yj(Number(b.params.duration));
            c = a.hc;
            var d = Number(b.params.liveIngestionTime);
            c.B = d;
            c.u = isNaN(d) ? !1 : !0;
            c = a.hc;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.C = isNaN(d) ? 0 : d;
            c.i = isNaN(b) ? 0 : b;
            1 == a.hc.playerState ? uTa(a) : b9(a);
            a.Z("remotePlayerChange")
        },
        BTa = function(a, b) {
            if (-1E3 != a.hc.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.hc.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                K8(a.hc, isNaN(b) ? 0 : b);
                a.Z("remotePlayerChange")
            }
        },
        CTa = function(a, b) {
            var c = "true" == b.params.muted;
            a.hc.volume = parseInt(b.params.volume, 10);
            a.hc.muted = c;
            a.Z("remotePlayerChange")
        },
        DTa = function(a, b) {
            a.J = b.params.videoId;
            a.Z("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        ETa = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.hc.rk = "true" == b.params.hasPrevious;
            a.hc.hasNext = c;
            a.Z("previousNextChange")
        },
        vTa = function(a) {
            g.pt(a.S);
            a.S = g.nt((0, g.D)(a.wr, a, 1), 864E5)
        },
        c9 = function(a, b, c) {
            c ? Y8("Sending: action=" + b + ", params=" + g.Uh(c)) : Y8("Sending: action=" + b);
            a.i.sendMessage(b, c)
        },
        d9 = function(a) {
            W7.call(this, "ScreenServiceProxy");
            this.Je = a;
            this.i = [];
            this.i.push(this.Je.$_s("screenChange", (0, g.D)(this.zP, this)));
            this.i.push(this.Je.$_s("onlineScreenChange", (0, g.D)(this.TT, this)))
        },
        ITa = function(a, b) {
            ERa();
            if (!e7 || !e7.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.P("MDX_CONFIG") || b;
                wRa();
                c7();
                e9 || (e9 = new O7(b ? b.loungeApiHost : void 0), FRa() && (e9.i = "/api/loungedev"));
                f9 || (f9 = g.Fa("yt.mdx.remote.deferredProxies_") || [], g.Ea("yt.mdx.remote.deferredProxies_", f9, void 0));
                FTa();
                var c = g9();
                if (!c) {
                    var d = new f8(e9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ea("yt.mdx.remote.screenService_", d, void 0);
                    c = g9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ea("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1, void 0);
                    iTa(a, d, function(f) {
                        f ? h9() && G8(h9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            R6("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Fa("yt.mdx.remote.initialized_") && (g.Ea("yt.mdx.remote.initialized_", !0, void 0), i9("Initializing: " +
                        g.Uh(b)), j9.push(g.bv("yt-remote-cast2-api-ready", function() {
                        R6("yt-remote-api-ready")
                    })), j9.push(g.bv("yt-remote-cast2-availability-change", function() {
                        R6("yt-remote-receiver-availability-change")
                    })), j9.push(g.bv("yt-remote-cast2-receiver-selected", function() {
                        k9(null);
                        R6("yt-remote-auto-connect", "cast-selector-receiver")
                    })), j9.push(g.bv("yt-remote-cast2-receiver-resumed", function() {
                        R6("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), j9.push(g.bv("yt-remote-cast2-session-change", GTa)), j9.push(g.bv("yt-remote-connection-change", function(f) {
                        f ? G8(h9(), "YouTube TV") : l9() || (G8(null, null), lTa())
                    })), j9.push(g.bv("yt-remote-cast2-session-failed", function() {
                        R6("yt-remote-connection-failed")
                    })), a = m9(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.ts("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), i9(" -- with channel params: " + g.Uh(a)), a ? (g.Sz("yt-remote-session-app", a.app), g.Sz("yt-remote-session-name", a.name)) : (g.Vz("yt-remote-session-app"), g.Vz("yt-remote-session-name")), g.Ea("yt.mdx.remote.channelParams_", a, void 0), c.start(), h9() || HTa())
            }
        },
        JTa = function() {
            var a = g9().Je.$_gos();
            var b = n9();
            b && o9() && (Y6(a, b) || a.push(b));
            return vRa(a)
        },
        p9 = function() {
            var a = KTa();
            !a && D8() && kTa() && (a = {
                key: "cast-selector-receiver",
                name: kTa()
            });
            return a
        },
        KTa = function() {
            var a = JTa(),
                b = n9();
            b || (b = l9());
            return g.db(a, function(c) {
                return b && U6(b, c.key) ? !0 : !1
            })
        },
        n9 = function() {
            var a = h9();
            if (!a) return null;
            var b = g9().yh();
            return Z6(b, a)
        },
        GTa = function(a) {
            i9("remote.onCastSessionChange_: " + V6(a));
            if (a) {
                var b = n9();
                if (b && b.id == a.id) {
                    if (G8(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) q9 && (q9.token = a), (b = o9()) && b.gA(a)
                } else b && r9(), s9(a, 1)
            } else o9() && r9()
        },
        r9 = function() {
            E8() ? B8().stopSession() : z8("stopSession called before API ready.");
            var a = o9();
            a && (a.disconnect(1), t9(null))
        },
        u9 = function() {
            var a = o9();
            return !!a && 3 != a.getProxyState()
        },
        i9 = function(a) {
            S7("remote", a)
        },
        g9 = function() {
            if (!v9) {
                var a = g.Fa("yt.mdx.remote.screenService_");
                v9 = a ? new d9(a) : null
            }
            return v9
        },
        h9 = function() {
            return g.Fa("yt.mdx.remote.currentScreenId_")
        },
        LTa = function(a) {
            g.Ea("yt.mdx.remote.currentScreenId_", a, void 0)
        },
        MTa = function() {
            return g.Fa("yt.mdx.remote.connectData_")
        },
        k9 = function(a) {
            g.Ea("yt.mdx.remote.connectData_", a, void 0)
        },
        o9 = function() {
            return g.Fa("yt.mdx.remote.connection_")
        },
        t9 = function(a) {
            var b = o9();
            k9(null);
            a || LTa("");
            g.Ea("yt.mdx.remote.connection_", a, void 0);
            f9 && (g.Cb(f9, function(c) {
                c(a)
            }), f9.length = 0);
            b && !a ? R6("yt-remote-connection-change", !1) : !b && a && R6("yt-remote-connection-change", !0)
        },
        l9 = function() {
            var a = g.Wz();
            if (!a) return null;
            var b = g9();
            if (!b) return null;
            b = b.yh();
            return Z6(b, a)
        },
        s9 = function(a, b) {
            h9();
            n9() && n9();
            if (w9) q9 = a;
            else {
                LTa(a.id);
                var c = g.Fa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new X8(e9, a, m9(), c);
                a.connect(b, MTa());
                a.subscribe("beforeDisconnect", function(d) {
                    R6("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    o9() && (o9(), t9(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = n9();
                    d && "shortLived" == d.idType && (E8() ? B8().handleBrowserChannelAuthError() : z8("refreshLoungeToken called before API ready."))
                });
                t9(a)
            }
        },
        HTa = function() {
            var a = l9();
            a ? (i9("Resume connection to: " + V6(a)), s9(a, 0)) : (d7(), lTa(), i9("Skipping connecting because no session screen found."))
        },
        FTa = function() {
            var a = m9();
            if (g.Vb(a)) {
                a = b7();
                var b = g.Tz("yt-remote-session-name") || "",
                    c = g.Tz("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                g.Ea("yt.mdx.remote.channelParams_", a, void 0)
            }
        },
        m9 = function() {
            return g.Fa("yt.mdx.remote.channelParams_") || {}
        },
        x9 = function(a, b, c) {
            g.I.call(this);
            var d = this;
            this.u = a;
            this.I = b;
            this.Qb = c;
            this.events = new g.BD(this);
            this.ea = this.events.T(this.I, "onVolumeChange", function(e) {
                NTa(d, e)
            });
            this.D = !1;
            this.J = new g.ZJ(64);
            this.i = new g.M(this.LM, 500, this);
            this.B = new g.M(this.MM, 1E3, this);
            this.S = new j7(this.JW, 0, this);
            this.C = {};
            this.V = new g.M(this.uN, 1E3, this);
            this.K = new k7(this.seekTo, 1E3, this);
            this.ma = g.Ga;
            g.J(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.CT);
            this.events.T(b, "captionschanged", this.RS);
            this.events.T(b, "captionssettingschanged", this.TM);
            this.events.T(b, "videoplayerreset", this.Bz);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Qb.QI()
            });
            a = this.Qb;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.GL, this);
            a.subscribe("remotePlayerChange", this.Yv, this);
            a.subscribe("remoteQueueChange", this.Bz, this);
            a.subscribe("previousNextChange", this.DL, this);
            a.subscribe("nowAutoplaying", this.xL, this);
            a.subscribe("autoplayDismissed", this.aL, this);
            g.J(this, this.i);
            g.J(this, this.B);
            g.J(this, this.S);
            g.J(this, this.V);
            g.J(this, this.K);
            this.TM();
            this.Bz();
            this.Yv()
        },
        NTa = function(a, b) {
            if (y9(a)) {
                a.Qb.unsubscribe("remotePlayerChange", a.Yv, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = Q8(a.Qb);
                if (c !== d.volume || b !== d.muted) a.Qb.setVolume(c, b), a.V.start();
                a.Qb.subscribe("remotePlayerChange", a.Yv, a)
            }
        },
        OTa = function(a) {
            a.Nb(0);
            a.i.stop();
            a.Rb(new g.ZJ(64))
        },
        z9 = function(a, b) {
            if (y9(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.I.getSubtitlesUserSettings()
                }, g.dc(c, b));
                a.Qb.dH(a.I.getVideoData(1).videoId, c);
                a.C = Q8(a.Qb).trackData
            }
        },
        A9 = function(a, b) {
            var c = a.I.getPlaylist();
            if (null === c || void 0 === c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.I.getVideoData(1);
            a.Qb.playVideo(c.videoId, b, d, e, c.playerParams, c.Wa, lRa(c));
            a.Rb(new g.ZJ(1))
        },
        PTa = function(a, b) {
            if (b) {
                var c = a.I.getOption("captions", "tracklist", {
                    SJ: 1
                });
                c && c.length ? (a.I.setOption("captions", "track", b), a.D = !1) : (a.I.loadModule("captions"), a.D = !0)
            } else a.I.setOption("captions", "track", {})
        },
        y9 = function(a) {
            return Q8(a.Qb).videoId === a.I.getVideoData(1).videoId
        },
        B9 = function() {
            g.U.call(this, {
                G: "div",
                L: "ytp-mdx-manual-pairing-popup-dialog",
                X: {
                    role: "dialog"
                },
                U: [{
                    G: "div",
                    L: "ytp-mdx-manual-pairing-popup-dialog-inner-content",
                    U: [{
                        G: "div",
                        L: "ytp-mdx-manual-pairing-popup-title",
                        va: "Connecting to your TV on web using a code will be going away soon"
                    }, {
                        G: "div",
                        L: "ytp-mdx-manual-pairing-popup-buttons",
                        U: [{
                            G: "button",
                            Ha: ["ytp-button", "ytp-mdx-manual-pairing-popup-learn-more"],
                            va: "Learn more"
                        }, {
                            G: "button",
                            Ha: ["ytp-button", "ytp-mdx-manual-pairing-popup-ok"],
                            va: "OK"
                        }]
                    }]
                }]
            });
            this.i = new g.EL(this, 250);
            this.learnMoreButton =
                this.Fa("ytp-mdx-manual-pairing-popup-learn-more");
            this.okButton = this.Fa("ytp-mdx-manual-pairing-popup-ok");
            g.J(this, this.i);
            this.T(this.learnMoreButton, "click", this.u);
            this.T(this.okButton, "click", this.B)
        },
        C9 = function() {
            g.U.call(this, {
                G: "div",
                L: "ytp-mdx-popup-dialog",
                X: {
                    role: "dialog"
                },
                U: [{
                    G: "div",
                    L: "ytp-mdx-popup-dialog-inner-content",
                    U: [{
                        G: "div",
                        L: "ytp-mdx-popup-title",
                        va: "You're signed out"
                    }, {
                        G: "div",
                        L: "ytp-mdx-popup-description",
                        va: "Videos that you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        G: "div",
                        L: "ytp-mdx-privacy-popup-buttons",
                        U: [{
                            G: "button",
                            Ha: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            va: "Cancel"
                        }, {
                            G: "button",
                            Ha: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            va: "Confirm"
                        }]
                    }]
                }]
            });
            this.i = new g.EL(this, 250);
            this.cancelButton = this.Fa("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Fa("ytp-mdx-privacy-popup-confirm");
            g.J(this, this.i);
            this.T(this.cancelButton, "click", this.u);
            this.T(this.confirmButton, "click", this.B)
        },
        D9 = function(a) {
            g.U.call(this, {
                G: "div",
                L: "ytp-remote",
                U: [{
                    G: "div",
                    L: "ytp-remote-display-status",
                    U: [{
                        G: "div",
                        L: "ytp-remote-display-status-icon",
                        U: [g.wsa()]
                    }, {
                        G: "div",
                        L: "ytp-remote-display-status-text",
                        va: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.i = new g.EL(this, 250);
            g.J(this, this.i);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            QTa(this, a.vb())
        },
        QTa = function(a, b) {
            if (3 === a.api.getPresentingPlayerType()) {
                var c = {
                    RECEIVER_NAME: a.api.getOption("remote", "currentReceiver").name
                };
                b = g.T(b, 128) ? g.wI("Error on $RECEIVER_NAME", c) : b.wc() || g.T(b, 4) ? g.wI("Playing on $RECEIVER_NAME", c) : g.wI("Connected to $RECEIVER_NAME", c);
                a.Ta("statustext", b);
                a.i.show()
            } else a.i.hide()
        },
        E9 = function(a, b) {
            g.RP.call(this, "Play on", 0, a, b);
            this.I = a;
            this.Sn = {};
            this.T(a, "onMdxReceiversChange", this.D);
            this.T(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        F9 = function(a) {
            g.cN.call(this, a);
            this.jj = {
                key: X6(),
                name: "This computer"
            };
            this.Vh = null;
            this.subscriptions = [];
            this.HE = this.Qb = null;
            this.Sn = [this.jj];
            this.Nm = this.jj;
            this.od = new g.ZJ(64);
            this.sK = 0;
            this.jf = -1;
            this.ds = null;
            this.ew = this.Yy = !1;
            this.cm = this.As = null;
            if (!g.kF(this.player.W()) && !g.lF(this.player.W())) {
                a = this.player;
                var b = g.HM(a);
                b && (b = b.jn()) && (b = new E9(a, b), g.J(this, b));
                b = new D9(a);
                g.J(this, b);
                g.RM(a, b.element, 4);
                this.As = new C9;
                g.J(this, this.As);
                g.RM(a, this.As.element, 4);
                this.player.W().N("pair_servlet_deprecation_warning_enabled") &&
                    !this.player.W().N("deprecate_pair_servlet_enabled") && (this.ds = new B9, g.J(this, this.ds), g.RM(a, this.ds.element, 4));
                this.ew = !!l9();
                this.Yy = !!g.Tz("yt-remote-manual-pairing-warning-shown")
            }
        },
        G9 = function(a) {
            a.cm && (a.player.removeEventListener("presentingplayerstatechange", a.cm), a.cm = null)
        },
        RTa = function(a, b, c) {
            a.od = c;
            a.player.Z("presentingplayerstatechange", new g.iI(c, b))
        },
        STa = function(a, b, c) {
            var d = !1;
            1 === b ? d = !a.ew : 2 === b && (d = !a.Yy);
            d && g.kI(c, 8) && (a.player.pauseVideo(), G9(a))
        },
        H9 = function(a, b) {
            if (b.key !== a.Nm.key)
                if (b.key === a.jj.key) r9();
                else {
                    if (a.ds && !a.Yy && b !== a.jj && "cast-selector-receiver" !== b.key && g.BF(a.player.W())) TTa(a);
                    else {
                        var c;
                        (c = !a.player.W().N("mdx_enable_privacy_disclosure_ui")) || (c = ((c = g.P("PLAYER_CONFIG")) && c.args && void 0 !== c.args.authuser ? !0 : !(!g.P("SESSION_INDEX") && !g.P("LOGGED_IN"))) || a.ew || !a.As);
                        (c ? 0 : g.BF(a.player.W()) || g.EF(a.player.W())) && UTa(a)
                    }
                    a.Nm = b;
                    if (!a.player.W().N("disable_mdx_connection_in_mdx_module_for_music_web") || !g.lF(a.player.W())) {
                        var d = a.player.getPlaylistId();
                        c = a.player.getVideoData(1);
                        var e =
                            c.videoId;
                        if (!d && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.W().N("should_clear_video_data_on_player_cued_unstarted")) a = null;
                        else {
                            var f = a.player.getPlaylist();
                            if (f) {
                                var h = [];
                                for (var l = 0; l < f.length; l++) h[l] = g.XM(f, l).videoId
                            } else h = [e];
                            f = a.player.getCurrentTime(1);
                            a = {
                                videoIds: h,
                                listId: d,
                                videoId: e,
                                playerParams: c.playerParams,
                                clickTrackingParams: c.Wa,
                                index: Math.max(a.player.getPlaylistIndex(), 0),
                                currentTime: 0 === f ? void 0 : f
                            };
                            (c = lRa(c)) && (a.locationInfo = c)
                        }
                        i9("Connecting to: " +
                            g.Uh(b));
                        "cast-selector-receiver" == b.key ? (k9(a || null), b = a || null, E8() ? B8().setLaunchParams(b) : z8("setLaunchParams called before ready.")) : !a && u9() && h9() == b.key ? R6("yt-remote-connection-change", !0) : (r9(), k9(a || null), a = g9().yh(), (b = Z6(a, b.key)) && s9(b, 1))
                    }
                }
        },
        UTa = function(a) {
            a.player.vb().wc() ? a.player.pauseVideo() : (a.cm = function(b) {
                STa(a, 1, b)
            }, a.player.addEventListener("presentingplayerstatechange", a.cm));
            a.As && a.As.Zc();
            o9() || (w9 = !0)
        },
        TTa = function(a) {
            a.player.vb().wc() ? a.player.pauseVideo() : (a.cm = function(b) {
                STa(a, 2, b)
            }, a.player.addEventListener("presentingplayerstatechange", a.cm));
            a.ds && a.ds.Zc();
            o9() || (w9 = !0)
        },
        URa = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        w7 = {
            "'": "\\'"
        },
        rRa = {
            IX: "atp",
            m8: "ska",
            a7: "que",
            X4: "mus",
            l8: "sus",
            h1: "dsp",
            v7: "seq",
            A4: "mic",
            d0: "dpa",
            XX: "cds",
            V4: "mlm"
        },
        e7, a7 = "",
        LRa = GRa("loadCastFramework") || GRa("loadCastApplicationFramework"),
        NRa = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    g.Pa(j7, g.I);
    g.k = j7.prototype;
    g.k.nP = function(a) {
        this.C = arguments;
        this.i = !1;
        this.Kb ? this.B = g.Oa() + this.Nf : this.Kb = g.th(this.D, this.Nf)
    };
    g.k.stop = function() {
        this.Kb && (g.C.clearTimeout(this.Kb), this.Kb = null);
        this.B = null;
        this.i = !1;
        this.C = []
    };
    g.k.pause = function() {
        ++this.u
    };
    g.k.resume = function() {
        this.u && (--this.u, !this.u && this.i && (this.i = !1, this.J.apply(null, this.C)))
    };
    g.k.ya = function() {
        this.stop();
        j7.Wd.ya.call(this)
    };
    g.k.oP = function() {
        this.Kb && (g.C.clearTimeout(this.Kb), this.Kb = null);
        this.B ? (this.Kb = g.th(this.D, this.B - g.Oa()), this.B = null) : this.u ? this.i = !0 : (this.i = !1, this.J.apply(null, this.C))
    };
    g.w(k7, g.I);
    g.k = k7.prototype;
    g.k.YG = function(a) {
        this.B = arguments;
        this.Kb || this.u ? this.i = !0 : l7(this)
    };
    g.k.stop = function() {
        this.Kb && (g.C.clearTimeout(this.Kb), this.Kb = null, this.i = !1, this.B = null)
    };
    g.k.pause = function() {
        this.u++
    };
    g.k.resume = function() {
        this.u--;
        this.u || !this.i || this.Kb || (this.i = !1, l7(this))
    };
    g.k.ya = function() {
        g.I.prototype.ya.call(this);
        this.stop()
    };
    m7.prototype.stringify = function(a) {
        return g.C.JSON.stringify(a, void 0)
    };
    m7.prototype.parse = function(a) {
        return g.C.JSON.parse(a, void 0)
    };
    var o7 = new g.Uf;
    g.w(PRa, g.vf);
    g.k = q7.prototype;
    g.k.Fo = null;
    g.k.nm = !1;
    g.k.gt = null;
    g.k.YF = null;
    g.k.Fs = null;
    g.k.Rs = null;
    g.k.Hm = null;
    g.k.Vn = null;
    g.k.aq = null;
    g.k.Ef = null;
    g.k.HA = 0;
    g.k.Dj = null;
    g.k.EA = null;
    g.k.Bm = null;
    g.k.Lt = -1;
    g.k.BM = !0;
    g.k.Uo = !1;
    g.k.vB = 0;
    g.k.Uz = null;
    var SRa = {},
        t7 = {};
    g.k = q7.prototype;
    g.k.setTimeout = function(a) {
        this.u = a
    };
    g.k.pP = function(a) {
        a = a.target;
        var b = this.Uz;
        b && 3 == g.Bi(a) ? b.YG() : this.CN(a)
    };
    g.k.CN = function(a) {
        try {
            if (a == this.Ef) a: {
                var b = g.Bi(this.Ef),
                    c = this.Ef.u,
                    d = this.Ef.getStatus();
                if (g.ie && !g.ae(10) || g.vg && !g.$d("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.Gi(this.Ef)) break a;this.Uo || 4 != b || 7 == c || (8 == c || 0 >= d ? this.i.mj(3) : this.i.mj(2));x7(this);
                var e = this.Ef.getStatus();this.Lt = e;
                var f = g.Gi(this.Ef);
                if (this.nm = 200 == e) {
                    4 == b && u7(this);
                    if (this.D) {
                        for (a = !0; !this.Uo && this.HA < f.length;) {
                            var h = TRa(this, f);
                            if (h == t7) {
                                4 == b && (this.Bm = 4, p7(15), a = !1);
                                break
                            } else if (h == SRa) {
                                this.Bm = 4;
                                p7(16);
                                a = !1;
                                break
                            } else y7(this, h)
                        }
                        4 == b && 0 == f.length && (this.Bm = 1, p7(17), a = !1);
                        this.nm = this.nm && a;
                        a || (u7(this), v7(this))
                    } else y7(this, f);
                    this.nm && !this.Uo && (4 == b ? this.i.lx(this) : (this.nm = !1, s7(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Bm = 3, p7(13)) : (this.Bm = 0, p7(14)),
                u7(this),
                v7(this)
            }
        } catch (l) {
            this.Ef && g.Gi(this.Ef)
        } finally {}
    };
    g.k.kV = function(a) {
        n7((0, g.D)(this.jV, this, a), 0)
    };
    g.k.jV = function(a) {
        this.Uo || (x7(this), y7(this, a), s7(this))
    };
    g.k.OL = function(a) {
        n7((0, g.D)(this.iV, this, a), 0)
    };
    g.k.iV = function(a) {
        this.Uo || (u7(this), this.nm = a, this.i.lx(this), this.i.mj(4))
    };
    g.k.cancel = function() {
        this.Uo = !0;
        u7(this)
    };
    g.k.rV = function() {
        this.gt = null;
        var a = Date.now();
        0 <= a - this.YF ? (2 != this.Rs && this.i.mj(3), u7(this), this.Bm = 2, p7(18), v7(this)) : WRa(this, this.YF - a)
    };
    g.k.getLastError = function() {
        return this.Bm
    };
    g.k = ZRa.prototype;
    g.k.wB = null;
    g.k.fh = null;
    g.k.Vz = !1;
    g.k.OM = null;
    g.k.Ux = null;
    g.k.JD = null;
    g.k.xB = null;
    g.k.Sh = null;
    g.k.Uk = -1;
    g.k.Mt = null;
    g.k.nu = null;
    g.k.connect = function(a) {
        this.xB = a;
        a = A7(this.i, null, this.xB);
        p7(3);
        this.OM = Date.now();
        var b = this.i.S;
        null != b ? (this.Mt = b[0], (this.nu = b[1]) ? (this.Sh = 1, $Ra(this)) : (this.Sh = 2, C7(this))) : (O6(a, "MODE", "init"), this.fh = new q7(this, void 0, void 0, void 0), this.fh.Fo = this.wB, r7(this.fh, a, !1, null, !0), this.Sh = 0)
    };
    g.k.gQ = function(a) {
        if (a) this.Sh = 2, C7(this);
        else {
            p7(4);
            var b = this.i;
            b.Qj = b.Lm.Uk;
            J7(b, 9)
        }
        a && this.mj(2)
    };
    g.k.wC = function(a) {
        return this.i.wC(a)
    };
    g.k.abort = function() {
        this.fh && (this.fh.cancel(), this.fh = null);
        this.Uk = -1
    };
    g.k.cf = function() {
        return !1
    };
    g.k.HL = function(a, b) {
        this.Uk = a.Lt;
        if (0 == this.Sh)
            if (b) {
                try {
                    var c = this.u.parse(b)
                } catch (d) {
                    a = this.i;
                    a.Qj = this.Uk;
                    J7(a, 2);
                    return
                }
                this.Mt = c[0];
                this.nu = c[1]
            } else a = this.i, a.Qj = this.Uk, J7(a, 2);
        else if (2 == this.Sh)
            if (this.Vz) p7(7), this.JD = Date.now();
            else if ("11111" == b) {
            if (p7(6), this.Vz = !0, this.Ux = Date.now(), a = this.Ux - this.OM, !g.ie || g.ae(10) || 500 > a) this.Uk = 200, this.fh.cancel(), p7(12), B7(this.i, this, !0)
        } else p7(8), this.Ux = this.JD = Date.now(), this.Vz = !1
    };
    g.k.lx = function() {
        this.Uk = this.fh.Lt;
        if (this.fh.nm) 0 == this.Sh ? this.nu ? (this.Sh = 1, $Ra(this)) : (this.Sh = 2, C7(this)) : 2 == this.Sh && ((!g.ie || g.ae(10) ? !this.Vz : 200 > this.JD - this.Ux) ? (p7(11), B7(this.i, this, !1)) : (p7(12), B7(this.i, this, !0)));
        else {
            0 == this.Sh ? p7(9) : 2 == this.Sh && p7(10);
            var a = this.i;
            this.fh.getLastError();
            a.Qj = this.Uk;
            J7(a, 2)
        }
    };
    g.k.Fw = function() {
        return this.i.Fw()
    };
    g.k.isActive = function() {
        return this.i.isActive()
    };
    g.k.mj = function(a) {
        this.i.mj(a)
    };
    g.k = D7.prototype;
    g.k.Pj = null;
    g.k.Mu = null;
    g.k.Qg = null;
    g.k.Ae = null;
    g.k.yB = null;
    g.k.Vx = null;
    g.k.dI = null;
    g.k.mx = null;
    g.k.Ov = 0;
    g.k.lS = 0;
    g.k.Ff = null;
    g.k.Vm = null;
    g.k.ql = null;
    g.k.gp = null;
    g.k.Lm = null;
    g.k.CA = null;
    g.k.Vr = -1;
    g.k.rK = -1;
    g.k.Qj = -1;
    g.k.Ar = 0;
    g.k.Yq = 0;
    g.k.Vo = 8;
    g.Pa(bSa, g.vf);
    g.Pa(cSa, g.vf);
    g.k = D7.prototype;
    g.k.connect = function(a, b, c, d, e) {
        p7(0);
        this.yB = b;
        this.Mu = c || {};
        d && void 0 !== e && (this.Mu.OSID = d, this.Mu.OAID = e);
        this.J ? (n7((0, g.D)(this.zI, this, a), 100), gSa(this)) : this.zI(a)
    };
    g.k.zI = function(a) {
        this.Lm = new ZRa(this);
        this.Lm.wB = this.Pj;
        this.Lm.u = this.D;
        this.Lm.connect(a)
    };
    g.k.cf = function() {
        return 0 == this.i
    };
    g.k.getState = function() {
        return this.i
    };
    g.k.ML = function(a) {
        this.Vm = null;
        kSa(this, a)
    };
    g.k.LL = function() {
        this.ql = null;
        this.Ae = new q7(this, this.B, "rpc", this.K);
        this.Ae.Fo = this.Pj;
        this.Ae.vB = 0;
        var a = this.dI.clone();
        g.Tj(a, "RID", "rpc");
        g.Tj(a, "SID", this.B);
        g.Tj(a, "CI", this.CA ? "0" : "1");
        g.Tj(a, "AID", this.Vr);
        E7(this, a);
        if (!g.ie || g.ae(10)) g.Tj(a, "TYPE", "xmlhttp"), r7(this.Ae, a, !0, this.mx, !1);
        else {
            g.Tj(a, "TYPE", "html");
            var b = this.Ae,
                c = !!this.mx;
            b.Rs = 3;
            b.Hm = N6(a.clone());
            VRa(b, c)
        }
    };
    g.k.HL = function(a, b) {
        if (0 != this.i && (this.Ae == a || this.Qg == a))
            if (this.Qj = a.Lt, this.Qg == a && 3 == this.i)
                if (7 < this.Vo) {
                    try {
                        var c = this.D.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.ql) {
                                if (this.Ae)
                                    if (this.Ae.Fs + 3E3 < this.Qg.Fs) G7(this), this.Ae.cancel(), this.Ae = null;
                                    else break a;
                                I7(this);
                                p7(19)
                            }
                        }
                    else this.rK = a[1], 0 < this.rK - this.Vr && 37500 > a[2] && this.CA && 0 == this.Yq && !this.gp && (this.gp = n7((0, g.D)(this.OS, this), 6E3));
                    else J7(this, 11)
                } else null != b && J7(this, 11);
        else if (this.Ae ==
            a && G7(this), !g.wc(b))
            for (a = this.D.parse(b), b = 0; b < a.length; b++) c = a[b], this.Vr = c[0], c = c[1], 2 == this.i ? "c" == c[0] ? (this.B = c[1], this.mx = c[2], c = c[3], null != c ? this.Vo = c : this.Vo = 6, this.i = 3, this.Ff && this.Ff.vI(), this.dI = A7(this, this.Fw() ? this.mx : null, this.yB), lSa(this)) : "stop" == c[0] && J7(this, 7) : 3 == this.i && ("stop" == c[0] ? J7(this, 7) : "noop" != c[0] && this.Ff && this.Ff.uI(c), this.Yq = 0)
    };
    g.k.OS = function() {
        null != this.gp && (this.gp = null, this.Ae.cancel(), this.Ae = null, I7(this), p7(20))
    };
    g.k.lx = function(a) {
        if (this.Ae == a) {
            G7(this);
            this.Ae = null;
            var b = 2
        } else if (this.Qg == a) this.Qg = null, b = 1;
        else return;
        this.Qj = a.Lt;
        if (0 != this.i)
            if (a.nm)
                if (1 == b) {
                    b = Date.now() - a.Fs;
                    var c = o7;
                    c.dispatchEvent(new bSa(c, a.aq ? a.aq.length : 0, b, this.Ar));
                    F7(this);
                    this.C.length = 0
                } else lSa(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Qj)) {
                if (d = 1 == b) this.Qg || this.Vm || 1 == this.i || 2 <= this.Ar ? d = !1 : (this.Vm = n7((0, g.D)(this.ML, this, a), mSa(this, this.Ar)), this.Ar++, d = !0);
                d = !(d || 2 == b && I7(this))
            }
            if (d) switch (c) {
                case 1:
                    J7(this,
                        5);
                    break;
                case 4:
                    J7(this, 10);
                    break;
                case 3:
                    J7(this, 6);
                    break;
                case 7:
                    J7(this, 12);
                    break;
                default:
                    J7(this, 2)
            }
        }
    };
    g.k.GQ = function(a) {
        if (!g.gb(arguments, this.i)) throw Error("Unexpected channel state: " + this.i);
    };
    g.k.rW = function(a) {
        a ? p7(2) : (p7(1), nSa(this, 8))
    };
    g.k.wC = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.vi;
        a.S = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Ff && this.Ff.isActive(this)
    };
    g.k.mj = function(a) {
        var b = o7;
        b.dispatchEvent(new cSa(b, a))
    };
    g.k.Fw = function() {
        return !(!g.ie || g.ae(10))
    };
    g.k = oSa.prototype;
    g.k.vI = function() {};
    g.k.uI = function() {};
    g.k.tI = function() {};
    g.k.jC = function() {};
    g.k.hJ = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = pSa.prototype;
    g.k.isEmpty = function() {
        return 0 === this.i.length && 0 === this.u.length
    };
    g.k.clear = function() {
        this.i = [];
        this.u = []
    };
    g.k.contains = function(a) {
        return g.gb(this.i, a) || g.gb(this.u, a)
    };
    g.k.remove = function(a) {
        var b = this.i;
        var c = (0, g.xLa)(b, a);
        0 <= c ? (g.lb(b, c), b = !0) : b = !1;
        return b || g.nb(this.u, a)
    };
    g.k.wp = function() {
        for (var a = [], b = this.i.length - 1; 0 <= b; --b) a.push(this.i[b]);
        var c = this.u.length;
        for (b = 0; b < c; ++b) a.push(this.u[b]);
        return a
    };
    g.Pa(K7, g.I);
    g.k = K7.prototype;
    g.k.cV = function() {
        this.Nf = Math.min(3E5, 2 * this.Nf);
        this.B();
        this.u && this.start()
    };
    g.k.start = function() {
        var a = this.Nf + 15E3 * Math.random();
        g.Cq(this.i, a);
        this.u = Date.now() + a
    };
    g.k.stop = function() {
        this.i.stop();
        this.u = 0
    };
    g.k.isActive = function() {
        return this.i.isActive()
    };
    g.k.reset = function() {
        this.i.stop();
        this.Nf = 5E3
    };
    g.Pa(L7, oSa);
    g.k = L7.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.B.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.B.unsubscribe(a, b, c)
    };
    g.k.Vf = function(a) {
        return this.B.Vf(a)
    };
    g.k.Z = function(a, b) {
        return this.B.Z.apply(this.B, arguments)
    };
    g.k.dispose = function() {
        this.ea || (this.ea = !0, g.sf(this.B), sSa(this), g.sf(this.u), this.u = null, this.ma = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ea
    };
    g.k.connect = function(a, b, c) {
        if (!this.i || 2 != this.i.getState()) {
            this.V = "";
            this.u.stop();
            this.D = a || null;
            this.C = b || 0;
            a = this.xa + "/test";
            b = this.xa + "/bind";
            var d = new D7(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Aa),
                e = this.i;
            e && (e.Ff = null);
            d.Ff = this;
            this.i = d;
            M7(this);
            if (this.i) {
                d = g.P("ID_TOKEN");
                var f = this.i.Pj || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.i.Pj = f
            }
            e ? (3 != e.getState() && 0 == iSa(e) || e.getState(), this.i.connect(a, b, this.J, e.B, e.Vr)) : c ? this.i.connect(a,
                b, this.J, c.sessionId, c.arrayId) : this.i.connect(a, b, this.J)
        }
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.dc(a, b);
        this.u.isActive() || 2 == (this.i ? this.i.getState() : 0) ? this.K.push(a) : N7(this) && (M7(this), hSa(this.i, a))
    };
    g.k.vI = function() {
        this.u.reset();
        this.D = null;
        this.C = 0;
        if (this.K.length) {
            var a = this.K;
            this.K = [];
            for (var b = 0, c = a.length; b < c; ++b) hSa(this.i, a[b])
        }
        this.Z("handlerOpened")
    };
    g.k.tI = function(a) {
        var b = 2 == a && 401 == this.i.Qj;
        4 == a || b || this.u.start();
        this.Z("handlerError", a, b)
    };
    g.k.jC = function(a) {
        if (!this.u.isActive()) this.Z("handlerClosed");
        else if (a)
            for (var b = 0, c = a.length; b < c; ++b) {
                var d = a[b].map;
                d && this.K.push(d)
            }
    };
    g.k.hJ = function() {
        var a = {
            v: 2
        };
        this.V && (a.gsessionid = this.V);
        0 != this.C && (a.ui = "" + this.C);
        0 != this.S && (a.ui = "" + this.S);
        this.D && g.dc(a, this.D);
        return a
    };
    g.k.uI = function(a) {
        "S" == a[0] ? this.V = a[1] : "gracefulReconnect" == a[0] ? (this.u.start(), fSa(this.i)) : this.Z("handlerMessage", new qSa(a[0], a[1]))
    };
    g.k.gA = function(a) {
        (this.J.loungeIdToken = a) || this.u.stop();
        if (this.Ba && this.i) {
            var b = this.i.Pj || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.i.Pj = b
        }
    };
    g.k.VV = function() {
        this.u.isActive();
        0 == iSa(this.i) && this.connect(this.D, this.C)
    };
    O7.prototype.C = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    O7.prototype.B = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    O7.prototype.D = function(a) {
        a(Error("request timed out"))
    };
    var zSa = Date.now(),
        R7 = null,
        U7 = Array(50),
        T7 = -1,
        V7 = !1;
    g.Pa(W7, g.R);
    W7.prototype.yh = function() {
        return this.screens
    };
    W7.prototype.contains = function(a) {
        return !!Y6(this.screens, a)
    };
    W7.prototype.get = function(a) {
        return a ? Z6(this.screens, a) : null
    };
    W7.prototype.info = function(a) {
        S7(this.J, a)
    };
    g.w(X7, g.R);
    g.k = X7.prototype;
    g.k.start = function() {
        !this.i && isNaN(this.Kb) && this.WL()
    };
    g.k.stop = function() {
        this.i && (this.i.abort(), this.i = null);
        isNaN(this.Kb) || (g.pt(this.Kb), this.Kb = NaN)
    };
    g.k.ya = function() {
        this.stop();
        g.R.prototype.ya.call(this)
    };
    g.k.WL = function() {
        this.Kb = NaN;
        this.i = g.vt(P7(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.K
            },
            timeout: 5E3,
            onSuccess: (0, g.D)(this.rP, this),
            onError: (0, g.D)(this.qP, this),
            onTimeout: (0, g.D)(this.sP, this)
        })
    };
    g.k.rP = function(a, b) {
        this.i = null;
        a = b.screen || {};
        a.dialId = this.C;
        a.name = this.J;
        b = -1;
        this.D && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.Z("pairingComplete", new T6(a), b)
    };
    g.k.qP = function(a) {
        this.i = null;
        a.status && 404 == a.status ? this.u >= VTa.length ? this.Z("pairingFailed", Error("DIAL polling timed out")) : (a = VTa[this.u], this.Kb = g.nt((0, g.D)(this.WL, this), a), this.u++) : this.Z("pairingFailed", Error("Server error " + a.status))
    };
    g.k.sP = function() {
        this.i = null;
        this.Z("pairingFailed", Error("Server not responding"))
    };
    var VTa = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Pa(Z7, W7);
    g.k = Z7.prototype;
    g.k.start = function() {
        Y7(this) && this.Z("screenChange");
        !g.Tz("yt-remote-lounge-token-expiration") && DSa(this);
        g.pt(this.i);
        this.i = g.nt((0, g.D)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        Y7(this);
        ASa(this, a);
        $7(this, !1);
        this.Z("screenChange");
        b(a);
        a.token || DSa(this)
    };
    g.k.remove = function(a, b) {
        var c = Y7(this);
        CSa(this, a) && ($7(this, !1), c = !0);
        b(a);
        c && this.Z("screenChange")
    };
    g.k.AA = function(a, b, c, d) {
        var e = Y7(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, $7(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.Z("screenChange")
    };
    g.k.ya = function() {
        g.pt(this.i);
        Z7.Wd.ya.call(this)
    };
    g.k.cR = function(a) {
        Y7(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        $7(this, !b);
        b && S7(this.J, "Missed " + b + " lounge tokens.")
    };
    g.k.bR = function(a) {
        S7(this.J, "Requesting lounge tokens failed: " + a)
    };
    g.w(b8, g.R);
    g.k = b8.prototype;
    g.k.start = function() {
        var a = parseInt(g.Tz("yt-remote-fast-check-period") || "0", 10);
        (this.C = g.Oa() - 144E5 < a ? 0 : a) ? e8(this): (this.C = g.Oa() + 3E5, g.Sz("yt-remote-fast-check-period", this.C), this.UE())
    };
    g.k.isEmpty = function() {
        return g.Vb(this.i)
    };
    g.k.update = function() {
        a8("Updating availability on schedule.");
        var a = this.J(),
            b = g.Fb(this.i, function(c, d) {
                return c && !!Z6(a, d)
            }, this);
        d8(this, b)
    };
    g.k.ya = function() {
        g.pt(this.B);
        this.B = NaN;
        this.u && (this.u.abort(), this.u = null);
        g.R.prototype.ya.call(this)
    };
    g.k.UE = function() {
        g.pt(this.B);
        this.B = NaN;
        this.u && this.u.abort();
        var a = FSa(this);
        if (P6(a)) {
            var b = P7(this.D, "/pairing/get_screen_availability");
            this.u = Q7(this.D, b, {
                lounge_token: g.Mb(a).join(",")
            }, (0, g.D)(this.JU, this, a), (0, g.D)(this.IU, this))
        } else d8(this, {}), e8(this)
    };
    g.k.JU = function(a, b) {
        this.u = null;
        var c = g.Mb(FSa(this));
        if (g.Ab(c, g.Mb(a))) {
            b = b.screens || [];
            c = {};
            for (var d = 0, e = b.length; d < e; ++d) c[a[b[d].loungeToken]] = "online" == b[d].status;
            d8(this, c);
            e8(this)
        } else this.Xd("Changing Screen set during request."), this.UE()
    };
    g.k.IU = function(a) {
        this.Xd("Screen availability failed: " + a);
        this.u = null;
        e8(this)
    };
    g.k.Xd = function(a) {
        S7("OnlineScreenService", a)
    };
    g.Pa(f8, W7);
    g.k = f8.prototype;
    g.k.start = function() {
        this.u.start();
        this.i.start();
        this.screens.length && (this.Z("screenChange"), this.i.isEmpty() || this.Z("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.u.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.u.remove(a, b, c);
        this.i.update()
    };
    g.k.AA = function(a, b, c, d) {
        this.u.contains(a) ? this.u.AA(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, S7(this.J, a), d(Error(a)))
    };
    g.k.yh = function(a) {
        return a ? this.screens : g.qb(this.screens, g.Co(this.B, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.ZG = function() {
        return g.Co(this.yh(!0), function(a) {
            return !!this.i.i[a.id]
        }, this)
    };
    g.k.aH = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new X7(this.C, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.sf(l);
            e(g8(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.sf(l);
            f(m)
        });
        l.start();
        return (0, g.D)(l.stop, l)
    };
    g.k.tP = function(a, b, c, d) {
        g.vt(P7(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.D)(function(e, f) {
                e = new T6(f.screen || {});
                if (!e.name || JSa(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); JSa(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(g8(this, e))
            }, this),
            onError: (0, g.D)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.D)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.ya = function() {
        g.sf(this.u);
        g.sf(this.i);
        f8.Wd.ya.call(this)
    };
    g.k.lR = function() {
        LSa(this);
        this.Z("screenChange");
        this.i.update()
    };
    f8.prototype.dispose = f8.prototype.dispose;
    g.Pa(i8, g.R);
    g.k = i8.prototype;
    g.k.getScreen = function() {
        return this.C
    };
    g.k.rg = function(a) {
        this.isDisposed() || (a && (k8(this, "" + a), this.Z("sessionFailed")), this.C = null, this.Z("sessionScreen", null))
    };
    g.k.info = function(a) {
        S7(this.Ba, a)
    };
    g.k.bH = function() {
        return null
    };
    g.k.hF = function(a) {
        var b = this.i;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.D)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.D)(function() {
            k8(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.ya = function() {
        this.hF("");
        i8.Wd.ya.call(this)
    };
    g.w(l8, i8);
    g.k = l8.prototype;
    g.k.gF = function(a) {
        if (this.u) {
            if (this.u == a) return;
            k8(this, "Overriding cast session with new session object");
            USa(this);
            this.xa = !1;
            this.V = "unknown";
            this.u.removeUpdateListener(this.ma);
            this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa)
        }
        this.u = a;
        this.u.addUpdateListener(this.ma);
        this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa);
        QSa(this, "getMdxSessionStatus")
    };
    g.k.Wr = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Uh(a))
    };
    g.k.stop = function() {
        this.u ? this.u.stop((0, g.D)(function() {
            this.rg()
        }, this), (0, g.D)(function() {
            this.rg(Error("Failed to stop receiver app."))
        }, this)) : this.rg(Error("Stopping cast device without session."))
    };
    g.k.hF = function() {};
    g.k.ya = function() {
        this.info("disposeInternal");
        USa(this);
        this.u && (this.u.removeUpdateListener(this.ma), this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa));
        this.u = null;
        i8.prototype.ya.call(this)
    };
    g.k.vV = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = Q6(b), g.Ka(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Uh(b)), a) {
                    case "mdxSessionStatus":
                        OSa(this, b);
                        break;
                    case "loungeToken":
                        RSa(this, b);
                        break;
                    default:
                        k8(this, "Unknown youtube message: " + a)
                } else k8(this, "Unable to parse message.");
                else k8(this, "No data in message.")
    };
    g.k.vJ = function(a, b, c, d) {
        g.pt(this.S);
        this.S = 0;
        ISa(this.B, this.i.label, a, this.i.friendlyName, (0, g.D)(function(e) {
            e ? b(e) : 0 <= d ? (k8(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.S = g.nt((0, g.D)(this.vJ, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.bH = function() {
        return this.u
    };
    g.k.uP = function(a) {
        this.isDisposed() || a || (k8(this, "Cast session died."), this.rg())
    };
    g.w(o8, i8);
    g.k = o8.prototype;
    g.k.gF = function(a) {
        this.u = a;
        this.u.addUpdateListener(this.Ga)
    };
    g.k.Wr = function(a) {
        this.La = a;
        this.ea()
    };
    g.k.stop = function() {
        aTa(this);
        this.u ? this.u.stop((0, g.D)(this.rg, this, null), (0, g.D)(this.rg, this, "Failed to stop DIAL device.")) : this.rg()
    };
    g.k.ya = function() {
        aTa(this);
        this.u && this.u.removeUpdateListener(this.Ga);
        this.u = null;
        i8.prototype.ya.call(this)
    };
    g.k.vP = function(a) {
        this.isDisposed() || a || (k8(this, "DIAL session died."), this.D(), this.D = g.Ga, this.rg())
    };
    g.w(s8, i8);
    s8.prototype.stop = function() {
        this.rg()
    };
    s8.prototype.gF = function() {};
    s8.prototype.Wr = function() {
        g.pt(this.u);
        this.u = NaN;
        var a = Z6(this.B.yh(), this.i.label);
        a ? j8(this, a) : this.rg(Error("No such screen"))
    };
    s8.prototype.ya = function() {
        g.pt(this.u);
        this.u = NaN;
        i8.prototype.ya.call(this)
    };
    g.w(t8, g.R);
    g.k = t8.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.S, [chrome.cast.Capability.AUDIO_OUT]);
        this.V || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.J ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.D)(this.tU, this);
        c = new chrome.cast.ApiConfig(c, (0, g.D)(this.IL, this), e, d, a);
        c.customDialLaunchCallback = (0, g.D)(this.kT, this);
        chrome.cast.initialize(c, (0, g.D)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.D), wSa(), this.u.subscribe("onlineScreenChange", (0, g.D)(this.cH, this)), this.B = dTa(this), chrome.cast.setCustomReceivers(this.B, g.Ga, (0, g.D)(function(f) {
                this.Xd("Failed to set initial custom receivers: " + g.Uh(f))
            }, this)), this.Z("yt-remote-cast2-availability-change", v8(this)), b(!0))
        }, this), (0, g.D)(function(f) {
            this.Xd("Failed to initialize API: " + g.Uh(f));
            b(!1)
        }, this))
    };
    g.k.aW = function(a, b) {
        u8("Setting connected screen ID: " + a + " -> " + b);
        if (this.i) {
            var c = this.i.getScreen();
            if (!a || c && c.id != a) u8("Unsetting old screen status: " + this.i.i.friendlyName), w8(this, null)
        }
        if (a && b) {
            if (!this.i) {
                c = Z6(this.u.yh(), a);
                if (!c) {
                    u8("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    u8("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = bTa(this, c);
                a || (u8("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.B.push(a), chrome.cast.setCustomReceivers(this.B, g.Ga, (0, g.D)(function(d) {
                    this.Xd("Failed to set initial custom receivers: " + g.Uh(d))
                }, this)));
                u8("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                w8(this, new s8(this.u, a), !0)
            }
            this.i.hF(b)
        } else u8("setConnectedScreenStatus: no screen.")
    };
    g.k.bW = function(a) {
        this.isDisposed() ? this.Xd("Setting connection data on disposed cast v2") : this.i ? this.i.Wr(a) : this.Xd("Setting connection data without a session")
    };
    g.k.xP = function() {
        this.isDisposed() ? this.Xd("Stopping session on disposed cast v2") : this.i ? (this.i.stop(), w8(this, null)) : u8("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.D)(this.IL, this), (0, g.D)(this.MU, this))
    };
    g.k.ya = function() {
        this.u.unsubscribe("onlineScreenChange", (0, g.D)(this.cH, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.D);
        var a = tSa,
            b = g.Fa("yt.mdx.remote.debug.handlers_");
        g.nb(b || [], a);
        g.sf(this.i);
        g.R.prototype.ya.call(this)
    };
    g.k.Xd = function(a) {
        S7("Controller", a)
    };
    g.k.KL = function(a, b) {
        this.i == a && (b || w8(this, null), this.Z("yt-remote-cast2-session-change", b))
    };
    g.k.qU = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), u8("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.i)
                        if (this.i.i.label != a.label) u8("onReceiverAction_: Stopping active receiver: " + this.i.i.friendlyName), this.i.stop();
                        else {
                            u8("onReceiverAction_: Casting to active receiver.");
                            this.i.getScreen() && this.Z("yt-remote-cast2-session-change", this.i.getScreen());
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            w8(this,
                                new s8(this.u, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            w8(this, new o8(this.u, a, this.C, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            w8(this, new l8(this.u, a, this.config_));
                            break;
                        default:
                            this.Xd("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.i && this.i.i.label == a.label ? this.i.stop() : this.Xd("Stopping receiver w/o session: " + a.friendlyName)
            } else this.Xd("onReceiverAction_ called without receiver.")
    };
    g.k.kT = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.Xd("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.i ? this.i.i : null;
        if (!c || c.label != b.label) return this.Xd("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.i.getScreen()) return u8("Reselecting dial screen."),
                this.Z("yt-remote-cast2-session-change", this.i.getScreen()), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.Xd('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            w8(this, new o8(this.u, b, this.C, this.config_))
        }
        b = this.i;
        b.S = a;
        b.S.appState == chrome.cast.DialAppState.RUNNING ? (a = b.S.extraData || {}, c = a.screenId || null, p8(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = YSa(b, {
            name: b.i.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.S.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.xs(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = ZSa(b, c)) : a = ZSa(b, c)) : a = r8(b);
        return a
    };
    g.k.IL = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.J) {
            u8("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.i)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) u8("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), w8(this, new l8(this.u, c, this.config_), !0);
                    else {
                        this.Xd("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.i.i,
                    e = Z6(this.u.yh(),
                        d.label);
                e && U6(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (u8("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.sf(this.i), this.i = new l8(this.u, c, this.config_), this.i.subscribe("sessionScreen", (0, g.D)(this.KL, this, this.i)), this.i.subscribe("sessionFailed", function() {
                    return cTa(b, b.i)
                }), this.i.Wr(null));
                this.i.gF(a)
            }
        }
    };
    g.k.wP = function() {
        return this.i ? this.i.bH() : null
    };
    g.k.MU = function(a) {
        this.isDisposed() || (this.Xd("Failed to estabilish a session: " + g.Uh(a)), a.code != chrome.cast.ErrorCode.CANCEL && w8(this, null), this.Z("yt-remote-cast2-session-failed"))
    };
    g.k.tU = function(a) {
        u8("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = v8(this);
            this.K = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            v8(this) != b && this.Z("yt-remote-cast2-availability-change", v8(this))
        }
    };
    g.k.cH = function() {
        this.isDisposed() || (this.B = dTa(this), u8("Updating custom receivers: " + g.Uh(this.B)), chrome.cast.setCustomReceivers(this.B, g.Ga, (0, g.D)(function() {
            this.Xd("Failed to set custom receivers.")
        }, this)), this.Z("yt-remote-cast2-availability-change", v8(this)))
    };
    t8.prototype.setLaunchParams = t8.prototype.bW;
    t8.prototype.setConnectedScreenStatus = t8.prototype.aW;
    t8.prototype.stopSession = t8.prototype.xP;
    t8.prototype.getCastSession = t8.prototype.wP;
    t8.prototype.requestSession = t8.prototype.requestSession;
    t8.prototype.init = t8.prototype.init;
    t8.prototype.dispose = t8.prototype.dispose;
    var C8 = [];
    g.k = H8.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        I8(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.rk = a.hasPrevious, this.hasNext = a.hasNext, this.K = a.playerTime, this.J = a.playerTimeAt, this.C = a.seekableStart, this.i = a.seekableEnd, this.D = a.duration, this.S = a.loadedTime, this.B = a.liveIngestionTime, this.u = !isNaN(this.B))
    };
    g.k.wc = function() {
        return 1 == this.playerState
    };
    g.k.isAdPlaying = function() {
        return 1081 == this.playerState
    };
    g.k.yj = function(a) {
        this.D = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.u ? this.D + J8(this) : this.D
    };
    g.k.clone = function() {
        return new H8(N8(this))
    };
    g.w(P8, g.R);
    g.k = P8.prototype;
    g.k.getState = function() {
        return this.B
    };
    g.k.play = function() {
        R8(this) ? (this.i ? this.i.play(null, g.Ga, W8(this, "play")) : V8(this, "play"), U8(this, 1, L8(Q8(this))), this.Z("remotePlayerChange")) : S8(this, this.play)
    };
    g.k.pause = function() {
        R8(this) ? (this.i ? this.i.pause(null, g.Ga, W8(this, "pause")) : V8(this, "pause"), U8(this, 2, L8(Q8(this))), this.Z("remotePlayerChange")) : S8(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (R8(this)) {
            if (this.i) {
                var b = Q8(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.wc() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.i.seek(c, g.Ga, W8(this, "seekTo", {
                    newTime: a
                }))
            } else V8(this, "seekTo", {
                newTime: a
            });
            U8(this, 3, a);
            this.Z("remotePlayerChange")
        } else S8(this, g.Na(this.seekTo, a))
    };
    g.k.stop = function() {
        if (R8(this)) {
            this.i ? this.i.stop(null, g.Ga, W8(this, "stopVideo")) : V8(this, "stopVideo");
            var a = Q8(this);
            a.index = -1;
            a.videoId = "";
            I8(a);
            T8(this, a);
            this.Z("remotePlayerChange")
        } else S8(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (R8(this)) {
            var c = Q8(this);
            if (this.u) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.u.setReceiverVolumeLevel(d, (0, g.D)(function() {
                        S7("CP", "set receiver volume: " + d)
                    }, this), (0, g.D)(function() {
                        this.Xd("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.u.setReceiverMuted(b, (0, g.D)(function() {
                    S7("CP", "set receiver muted: " + b)
                }, this), (0, g.D)(function() {
                    this.Xd("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                V8(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            T8(this, c)
        } else S8(this, g.Na(this.setVolume, a, b))
    };
    g.k.dH = function(a, b) {
        if (R8(this)) {
            var c = Q8(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Uh(b.style), g.dc(a, c.trackData));
            V8(this, "setSubtitlesTrack", a);
            T8(this, c)
        } else S8(this, g.Na(this.dH, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        R8(this) ? (b = b.getLanguageInfo().getId(), V8(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = Q8(this), a.audioTrackId = b, T8(this, a)) : S8(this, g.Na(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = Q8(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        M8(l, a, c || 0);
        void 0 !== b && (K8(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Uh(h));
        V8(this, "setPlaylist", m);
        d || T8(this, l)
    };
    g.k.Oz = function(a, b) {
        if (R8(this)) {
            if (a && b) {
                var c = Q8(this);
                M8(c, a, b);
                T8(this, c)
            }
            V8(this, "previous")
        } else S8(this, g.Na(this.Oz, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (R8(this)) {
            if (a && b) {
                var c = Q8(this);
                M8(c, a, b);
                T8(this, c)
            }
            V8(this, "next")
        } else S8(this, g.Na(this.nextVideo, a, b))
    };
    g.k.QI = function() {
        R8(this) ? V8(this, "dismissAutoplay") : S8(this, this.QI)
    };
    g.k.dispose = function() {
        if (3 != this.B) {
            var a = this.B;
            this.B = 3;
            this.Z("proxyStateChange", a, this.B)
        }
        g.R.prototype.dispose.call(this)
    };
    g.k.ya = function() {
        pTa(this);
        this.C = null;
        this.D.clear();
        O8(this, null);
        g.R.prototype.ya.call(this)
    };
    g.k.jF = function(a) {
        if ((a != this.B || 2 == a) && 3 != this.B && 0 != a) {
            var b = this.B;
            this.B = a;
            this.Z("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.D.isEmpty();) b = a = this.D, 0 === b.i.length && (b.i = b.u, b.i.reverse(), b.u = []), a.i.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.oU = function(a, b) {
        this.Z(a, b)
    };
    g.k.VS = function(a) {
        if (!a) this.Uv(null), O8(this, null);
        else if (this.u.receiver.volume) {
            a = this.u.receiver.volume;
            var b = Q8(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) S7("CP", "Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, T8(this, b)
        }
    };
    g.k.Uv = function(a) {
        S7("CP", "Cast media: " + !!a);
        this.i && this.i.removeUpdateListener(this.S);
        if (this.i = a) this.i.addUpdateListener(this.S), qTa(this), this.Z("remotePlayerChange")
    };
    g.k.US = function(a) {
        a ? (qTa(this), this.Z("remotePlayerChange")) : this.Uv(null)
    };
    g.k.CF = function() {
        V8(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.cT = function() {
        var a = mTa();
        a && O8(this, a)
    };
    g.k.Xd = function(a) {
        S7("CP", a)
    };
    g.w(X8, g.R);
    g.k = X8.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Ba && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.hc.listId = c);
            this.hc.videoId = d;
            this.hc.index = l || 0;
            this.hc.state = 3;
            K8(this.hc,
                n);
            this.C = "UNSUPPORTED";
            c = this.Ba ? "setInitialState" : "setPlaylist";
            Y8("Connecting with " + c + " and params: " + g.Uh(m));
            this.i.connect({
                method: c,
                params: g.Uh(m)
            }, a, zRa())
        } else Y8("Connecting without params"), this.i.connect({}, a, zRa());
        tTa(this)
    };
    g.k.gA = function(a) {
        this.i.gA(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Ea("yt.mdx.remote.remoteClient_", null, void 0), this.Z("beforeDispose"), Z8(this, 3));
        g.R.prototype.dispose.call(this)
    };
    g.k.ya = function() {
        $8(this);
        b9(this);
        a9(this);
        g.pt(this.K);
        this.K = NaN;
        g.pt(this.S);
        this.S = NaN;
        this.B = null;
        g.vu(this.V);
        this.V.length = 0;
        this.i.dispose();
        g.R.prototype.ya.call(this);
        this.C = this.J = this.u = this.hc = this.i = null
    };
    g.k.XQ = function() {
        this.wr(2)
    };
    g.k.ZS = function() {
        Y8("Channel opened");
        this.xa && (this.xa = !1, a9(this), this.ma = g.nt((0, g.D)(function() {
            Y8("Timing out waiting for a screen.");
            this.wr(1)
        }, this), 15E3));
        DRa(rSa(this.i), this.La)
    };
    g.k.WS = function() {
        Y8("Channel closed");
        isNaN(this.D) ? d7(!0) : d7();
        this.dispose()
    };
    g.k.XS = function(a, b) {
        d7();
        isNaN(this.hv()) ? (b && "shortLived" == this.Aa && this.Z("browserChannelAuthError", a), Y8("Channel error: " + a + " without reconnection"), this.dispose()) : (this.xa = !0, Y8("Channel error: " + a + " with reconnection in " + this.hv() + " ms"), Z8(this, 2))
    };
    g.k.dK = function(a) {
        if (!this.u || 0 === this.u.length) return !1;
        for (var b = g.r(this.u), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.YS = function(a) {
        a.params ? Y8("Received: action=" + a.action + ", params=" + g.Uh(a.params)) : Y8("Received: action=" + a.action + " {}");
        switch (a.action) {
            case "loungeStatus":
                a = Q6(a.params.devices);
                this.u = g.lm(a, function(c) {
                    return new S6(c)
                });
                a = !!g.db(this.u, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                wTa(this, a);
                a = this.dK("mlm");
                this.Z("multiStateLoopEnabled", a);
                break;
            case "loungeScreenDisconnected":
                g.ob(this.u, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                wTa(this, !1);
                break;
            case "remoteConnected":
                var b = new S6(Q6(a.params.device));
                g.db(this.u, function(c) {
                    return b ? c.id == b.id : !1
                }) || mRa(this.u, b);
                break;
            case "remoteDisconnected":
                b = new S6(Q6(a.params.device));
                g.ob(this.u, function(c) {
                    return b ? c.id == b.id : !1
                });
                break;
            case "gracefulDisconnect":
                break;
            case "playlistModified":
                yTa(this, a);
                break;
            case "nowPlaying":
                ATa(this, a);
                break;
            case "onStateChange":
                zTa(this, a);
                break;
            case "onAdStateChange":
                BTa(this, a);
                break;
            case "onVolumeChanged":
                CTa(this, a);
                break;
            case "onSubtitlesTrackChanged":
                xTa(this, a);
                break;
            case "nowAutoplaying":
                DTa(this, a);
                break;
            case "autoplayDismissed":
                this.Z("autoplayDismissed");
                break;
            case "autoplayUpNext":
                this.J = a.params.videoId || null;
                this.Z("autoplayUpNext", this.J);
                break;
            case "onAutoplayModeChanged":
                this.C =
                    a.params.autoplayMode;
                this.Z("autoplayModeChange", this.C);
                "DISABLED" == this.C && this.Z("autoplayDismissed");
                break;
            case "onHasPreviousNextChanged":
                ETa(this, a);
                break;
            case "requestAssistedSignIn":
                this.Z("assistedSignInRequested", a.params.authCode);
                break;
            case "onLoopModeChanged":
                this.Z("loopModeChange", a.params.loopMode);
                break;
            default:
                Y8("Unrecognized action: " + a.action)
        }
    };
    g.k.PV = function() {
        if (this.B) {
            var a = this.B;
            this.B = null;
            this.hc.videoId != a && c9(this, "getNowPlaying")
        }
    };
    g.k.UQ = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.hv()) ? N7(this.i) && isNaN(this.D) && (a = 1) : a = 2);
        return a
    };
    g.k.wr = function(a) {
        Y8("Disconnecting with " + a);
        g.Ea("yt.mdx.remote.remoteClient_", null, void 0);
        $8(this);
        this.Z("beforeDisconnect", a);
        1 == a && d7();
        sSa(this.i, a);
        this.dispose()
    };
    g.k.SQ = function() {
        var a = this.hc;
        this.B && (a = this.hc.clone(), M8(a, this.B, a.index));
        return N8(a)
    };
    g.k.cW = function(a) {
        var b = new H8(a);
        b.videoId && b.videoId != this.hc.videoId && (this.B = b.videoId, g.pt(this.K), this.K = g.nt((0, g.D)(this.PV, this), 5E3));
        var c = [];
        this.hc.listId == b.listId && this.hc.videoId == b.videoId && this.hc.index == b.index || c.push("remoteQueueChange");
        this.hc.playerState == b.playerState && this.hc.volume == b.volume && this.hc.muted == b.muted && L8(this.hc) == L8(b) && g.Uh(this.hc.trackData) == g.Uh(b.trackData) || c.push("remotePlayerChange");
        this.hc.reset(a);
        g.Cb(c, function(d) {
            this.Z(d)
        }, this)
    };
    g.k.uJ = function() {
        var a = this.i.J.id,
            b = g.db(this.u, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.hv = function() {
        var a = this.i;
        return a.u.isActive() ? a.u.u - Date.now() : NaN
    };
    g.k.PQ = function() {
        return this.C || "UNSUPPORTED"
    };
    g.k.QQ = function() {
        return this.J || ""
    };
    g.k.yP = function() {
        if (!isNaN(this.hv())) {
            var a = this.i.u;
            g.Dq(a.i);
            a.start()
        }
    };
    g.k.ZV = function(a, b) {
        c9(this, a, b);
        vTa(this)
    };
    g.k.eH = function() {
        var a = g.It("SID", "") || "",
            b = g.It("SAPISID", "") || "",
            c = g.It("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.de(g.Wa(a), 2);
        b = g.de(g.Wa(b), 2);
        c = g.de(g.Wa(c), 2);
        return g.de(g.Wa(a + "," + b + "," + c), 2)
    };
    X8.prototype.subscribe = X8.prototype.subscribe;
    X8.prototype.unsubscribeByKey = X8.prototype.Vf;
    X8.prototype.getProxyState = X8.prototype.UQ;
    X8.prototype.disconnect = X8.prototype.wr;
    X8.prototype.getPlayerContextData = X8.prototype.SQ;
    X8.prototype.setPlayerContextData = X8.prototype.cW;
    X8.prototype.getOtherConnectedRemoteId = X8.prototype.uJ;
    X8.prototype.getReconnectTimeout = X8.prototype.hv;
    X8.prototype.getAutoplayMode = X8.prototype.PQ;
    X8.prototype.getAutoplayVideoId = X8.prototype.QQ;
    X8.prototype.reconnect = X8.prototype.yP;
    X8.prototype.sendMessage = X8.prototype.ZV;
    X8.prototype.getXsrfToken = X8.prototype.eH;
    X8.prototype.isCapabilitySupportedOnConnectedDevices = X8.prototype.dK;
    g.w(d9, W7);
    g.k = d9.prototype;
    g.k.yh = function(a) {
        return this.Je.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.Je.$_c(a)
    };
    g.k.get = function(a) {
        return this.Je.$_g(a)
    };
    g.k.start = function() {
        this.Je.$_st()
    };
    g.k.add = function(a, b, c) {
        this.Je.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.Je.$_r(a, b, c)
    };
    g.k.AA = function(a, b, c, d) {
        this.Je.$_un(a, b, c, d)
    };
    g.k.ya = function() {
        for (var a = 0, b = this.i.length; a < b; ++a) this.Je.$_ubk(this.i[a]);
        this.i.length = 0;
        this.Je = null;
        W7.prototype.ya.call(this)
    };
    g.k.zP = function() {
        this.Z("screenChange")
    };
    g.k.TT = function() {
        this.Z("onlineScreenChange")
    };
    f8.prototype.$_st = f8.prototype.start;
    f8.prototype.$_gspc = f8.prototype.tP;
    f8.prototype.$_gsppc = f8.prototype.aH;
    f8.prototype.$_c = f8.prototype.contains;
    f8.prototype.$_g = f8.prototype.get;
    f8.prototype.$_a = f8.prototype.add;
    f8.prototype.$_un = f8.prototype.AA;
    f8.prototype.$_r = f8.prototype.remove;
    f8.prototype.$_gs = f8.prototype.yh;
    f8.prototype.$_gos = f8.prototype.ZG;
    f8.prototype.$_s = f8.prototype.subscribe;
    f8.prototype.$_ubk = f8.prototype.Vf;
    var q9 = null,
        w9 = !1,
        e9 = null,
        f9 = null,
        v9 = null,
        j9 = [];
    g.w(x9, g.I);
    g.k = x9.prototype;
    g.k.ya = function() {
        g.I.prototype.ya.call(this);
        this.i.stop();
        this.B.stop();
        this.S.stop();
        this.ma();
        var a = this.Qb;
        a.unsubscribe("proxyStateChange", this.GL, this);
        a.unsubscribe("remotePlayerChange", this.Yv, this);
        a.unsubscribe("remoteQueueChange", this.Bz, this);
        a.unsubscribe("previousNextChange", this.DL, this);
        a.unsubscribe("nowAutoplaying", this.xL, this);
        a.unsubscribe("autoplayDismissed", this.aL, this);
        this.Qb = this.u = null
    };
    g.k.cj = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (2 != this.Qb.B)
            if (y9(this)) {
                if (!Q8(this.Qb).isAdPlaying() || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        Q8(this.Qb).wc() ? this.Qb.pause() : this.Qb.play();
                        break;
                    case "control_play":
                        this.Qb.play();
                        break;
                    case "control_pause":
                        this.Qb.pause();
                        break;
                    case "control_seek":
                        this.K.YG(c[0], c[1]);
                        break;
                    case "control_subtitles_set_track":
                        z9(this, c[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(c[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    c =
                        this.I.getCurrentTime();
                    A9(this, 0 === c ? void 0 : c);
                    break;
                case "control_seek":
                    A9(this, c[0]);
                    break;
                case "control_subtitles_set_track":
                    z9(this, c[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(c[0])
            }
    };
    g.k.RS = function(a) {
        this.S.nP(a)
    };
    g.k.JW = function(a) {
        this.cj("control_subtitles_set_track", g.Vb(a) ? null : a)
    };
    g.k.TM = function() {
        var a = this.I.getOption("captions", "track");
        g.Vb(a) || z9(this, a)
    };
    g.k.Nb = function(a) {
        this.u.Nb(a, this.I.getVideoData().lengthSeconds)
    };
    g.k.CT = function() {
        g.Vb(this.C) || PTa(this, this.C);
        this.D = !1
    };
    g.k.GL = function(a, b) {
        this.B.stop();
        2 === b && this.MM()
    };
    g.k.Yv = function() {
        if (y9(this)) {
            this.i.stop();
            var a = Q8(this.Qb);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.u.jf = 1;
                    break;
                case 1082:
                case 1083:
                    this.u.jf = 0;
                    break;
                default:
                    this.u.jf = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Rb(new g.ZJ(8));
                    this.LM();
                    break;
                case 1085:
                case 3:
                    this.Rb(new g.ZJ(9));
                    break;
                case 1083:
                case 0:
                    this.Rb(new g.ZJ(2));
                    this.K.stop();
                    this.Nb(this.I.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Rb(new g.ZJ(4));
                    break;
                case 2:
                    this.Rb(new g.ZJ(4));
                    this.Nb(L8(a));
                    break;
                case -1:
                    this.Rb(new g.ZJ(64));
                    break;
                case -1E3:
                    this.Rb(new g.ZJ(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback."
                    }))
            }
            a = Q8(this.Qb).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, PTa(this, a));
            a = Q8(this.Qb); - 1 === a.volume || Math.round(this.I.getVolume()) === a.volume && this.I.isMuted() === a.muted || this.V.isActive() || this.uN()
        } else OTa(this)
    };
    g.k.DL = function() {
        this.I.Z("mdxpreviousnextchange")
    };
    g.k.Bz = function() {
        y9(this) || OTa(this)
    };
    g.k.xL = function(a) {
        isNaN(a) || this.I.Z("mdxnowautoplaying", a)
    };
    g.k.aL = function() {
        this.I.Z("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        y9(this) && this.Qb.setAudioTrack(this.I.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === Q8(this.Qb).playerState ? A9(this, a) : b && this.Qb.seekTo(a)
    };
    g.k.uN = function() {
        var a = this;
        if (y9(this)) {
            var b = Q8(this.Qb);
            this.events.jc(this.ea);
            b.muted ? this.I.mute() : this.I.unMute();
            this.I.setVolume(b.volume);
            this.ea = this.events.T(this.I, "onVolumeChange", function(c) {
                NTa(a, c)
            })
        }
    };
    g.k.LM = function() {
        this.i.stop();
        if (!this.Qb.isDisposed()) {
            var a = Q8(this.Qb);
            a.wc() && this.Rb(new g.ZJ(8));
            this.Nb(L8(a));
            this.i.start()
        }
    };
    g.k.MM = function() {
        this.B.stop();
        this.i.stop();
        var a = this.Qb.C.getReconnectTimeout();
        2 == this.Qb.B && !isNaN(a) && this.B.start()
    };
    g.k.Rb = function(a) {
        this.B.stop();
        var b = this.J;
        if (!g.dK(b, a)) {
            var c = g.T(a, 2);
            c !== g.T(this.J, 2) && this.I.Js(c);
            this.J = a;
            RTa(this.u, b, a)
        }
    };
    g.w(B9, g.U);
    B9.prototype.Zc = function() {
        this.i.show()
    };
    B9.prototype.Db = function() {
        this.i.hide()
    };
    B9.prototype.u = function() {
        g.GJ("https://support.google.com/youtube/answer/7640706")
    };
    B9.prototype.B = function() {
        R6("mdx-manual-pairing-popup-ok");
        this.Db()
    };
    g.w(C9, g.U);
    C9.prototype.Zc = function() {
        this.i.show()
    };
    C9.prototype.Db = function() {
        this.i.hide()
    };
    C9.prototype.u = function() {
        R6("mdx-privacy-popup-cancel");
        this.Db()
    };
    C9.prototype.B = function() {
        R6("mdx-privacy-popup-confirm");
        this.Db()
    };
    g.w(D9, g.U);
    D9.prototype.onStateChange = function(a) {
        QTa(this, a.state)
    };
    g.w(E9, g.RP);
    E9.prototype.D = function() {
        var a = this.I.getOption("remote", "receivers");
        a && 1 < a.length && !this.I.getOption("remote", "quickCast") ? (this.Sn = g.Db(a, this.i, this), g.SP(this, g.lm(a, this.i)), a = this.I.getOption("remote", "currentReceiver"), a = this.i(a), this.options[a] && this.Rh(a), this.enable(!0)) : this.enable(!1)
    };
    E9.prototype.i = function(a) {
        return a.key
    };
    E9.prototype.Ui = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.Sn[a].name
    };
    E9.prototype.tf = function(a) {
        g.RP.prototype.tf.call(this, a);
        this.I.setOption("remote", "currentReceiver", this.Sn[a]);
        this.Ab.Db()
    };
    g.w(F9, g.cN);
    g.k = F9.prototype;
    g.k.create = function() {
        var a = this.player.W(),
            b = g.iF(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.N("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.N("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.N("enable_cast_short_lived_lounge_token")
        };
        ITa(b, a);
        this.subscriptions.push(g.bv("yt-remote-before-disconnect", this.QS, this));
        this.subscriptions.push(g.bv("yt-remote-connection-change", this.uU, this));
        this.subscriptions.push(g.bv("yt-remote-receiver-availability-change", this.FL,
            this));
        this.subscriptions.push(g.bv("yt-remote-auto-connect", this.sU, this));
        this.subscriptions.push(g.bv("yt-remote-receiver-resumed", this.rU, this));
        this.subscriptions.push(g.bv("mdx-privacy-popup-confirm", this.FV, this));
        this.subscriptions.push(g.bv("mdx-privacy-popup-cancel", this.EV, this));
        this.subscriptions.push(g.bv("mdx-manual-pairing-popup-ok", this.VR, this));
        this.FL()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.cN.prototype.load.call(this);
        this.Vh = new x9(this, this.player, this.Qb);
        var a = (a = MTa()) ? a.currentTime : 0;
        var b = u9() ? new P8(o9(), void 0) : null;
        0 == a && b && (a = L8(Q8(b)));
        0 !== a && this.Nb(a);
        RTa(this, this.od, this.od);
        this.player.Lk(6)
    };
    g.k.unload = function() {
        this.player.Z("mdxautoplaycanceled");
        this.Nm = this.jj;
        g.tf(this.Vh, this.Qb);
        this.Qb = this.Vh = null;
        g.cN.prototype.unload.call(this);
        this.player.Lk(5);
        G9(this)
    };
    g.k.ya = function() {
        g.cv(this.subscriptions);
        g.cN.prototype.ya.call(this)
    };
    g.k.Ck = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        this.loaded && this.Vh.cj.apply(this.Vh, [a].concat(g.v(c)))
    };
    g.k.getAdState = function() {
        return this.jf
    };
    g.k.rk = function() {
        return this.Qb ? Q8(this.Qb).rk : !1
    };
    g.k.hasNext = function() {
        return this.Qb ? Q8(this.Qb).hasNext : !1
    };
    g.k.Nb = function(a, b) {
        this.sK = a || 0;
        this.player.Z("progresssync", a, b);
        this.player.Na("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.sK
    };
    g.k.getProgressState = function() {
        var a = Q8(this.Qb),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: this.player.W().N("web_player_mdx_allow_seeking_change_killswitch") ? this.player.df() : !a.isAdPlaying() && this.player.df(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.u ? a.B + J8(a) : a.B,
            isAtLiveHead: 1 >= (a.u ? a.i + J8(a) : a.i) - this.getCurrentTime(),
            loaded: a.S,
            seekableEnd: a.u ? a.i + J8(a) : a.i,
            seekableStart: 0 <
                a.C ? a.C + J8(a) : a.C
        }
    };
    g.k.nextVideo = function() {
        this.Qb && this.Qb.nextVideo()
    };
    g.k.Oz = function() {
        this.Qb && this.Qb.Oz()
    };
    g.k.QS = function(a) {
        1 === a && (this.HE = this.Qb ? Q8(this.Qb) : null)
    };
    g.k.uU = function() {
        var a = u9() ? new P8(o9(), void 0) : null;
        if (a) {
            var b = this.Nm;
            this.loaded && this.unload();
            this.Qb = a;
            this.HE = null;
            b.key !== this.jj.key && (this.Nm = b, this.load())
        } else g.sf(this.Qb), this.Qb = null, this.loaded && (this.unload(), (a = this.HE) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, L8(a)));
        this.player.Z("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.FL = function() {
        var a = [this.jj],
            b = a.concat,
            c = JTa();
        D8() && g.Tz("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Sn = b.call(a, c);
        a = p9() || this.jj;
        H9(this, a);
        this.player.Na("onMdxReceiversChange")
    };
    g.k.sU = function() {
        var a = p9();
        H9(this, a)
    };
    g.k.rU = function() {
        this.Nm = p9()
    };
    g.k.FV = function() {
        this.ew = !0;
        G9(this);
        w9 = !1;
        q9 && s9(q9, 1);
        q9 = null
    };
    g.k.EV = function() {
        this.ew = !1;
        G9(this);
        H9(this, this.jj);
        this.Nm = this.jj;
        w9 = !1;
        q9 = null;
        this.player.playVideo()
    };
    g.k.VR = function() {
        this.Yy = !0;
        G9(this);
        g.Sz("yt-remote-manual-pairing-warning-shown", !0, 2592E3);
        w9 = !1;
        q9 && s9(q9, 1);
        q9 = null
    };
    g.k.We = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Sn;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? F8() : H9(this, b)), this.loaded ? this.Nm : this.jj;
            case "quickCast":
                return 2 === this.Sn.length && "cast-selector-receiver" === this.Sn[1].key ? (b && F8(), !0) : !1
        }
    };
    g.k.CF = function() {
        this.Qb.CF()
    };
    g.k.Di = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.bN("remote", F9);
})(_yt_player);