let gt = !0,
  K = 0,
  G = 0,
  Mt = 0,
  V = 0,
  y = 0,
  x = 0,
  J = 0,
  zt = 0,
  z = 0,
  vt = 0,
  pt = 0,
  dt = 0,
  bt = 0,
  w = .066,
  _ = Math.PI / 180,
  Z = new DOMMatrix(),
  $ = (t, a) => a < t ? t : a,
  wt = t => t < 0 ? -t : t,
  tt = t => t < 0 ? 0 : 1 < t ? 1 : t,
  at = (t, a) => (t = t < 0 ? 0 : 1 < t ? 1 : t) + (1 - t - t) * (a < 0 ? 0 : 1 < a ? 1 : a),
  It = t => Math.atan2(Math.sin(t *= _), Math.cos(t)) / _,
  At = (t, a, e) =>
    ((t *= _) + (2 * (a = (a * _ - t) % (2 * Math.PI)) % (2 * Math.PI) - a) * (e < 0 ? 0 : 1 < e ? 1 : e)) / _,
  Pt = (t, a, e, l) => {
    let r = a - t;
    return (t += Math.sign(a - t) * $(0, (r < 0 ? -r : r) ** .9 - e) * l * 2) + (a - t) * tt(l / 7);
  },
  et = (t, e) => Array.from(Array(t), (t, a) => e(a)),
  St = (t, a, e, l) => [t, 0, 0, 0, 0, a, 0, 0, 0, 0, (l + e) / (e - l), -1, 0, 0, 2 * l * e / (e - l), 0],
  d = ({ x: t, y: a, z: e }, l) => t * l.x + a * l.y + e * l.z,
  S = ({ x: t, y: a, z: e }) => Math.hypot(t - mt.x, a - mt.y, e - mt.z) || 0,
  Yt = t => {
    let a = 0, e = 0, l = 0, r, s = t.at(-1);
    for (r of t) a += (s.y - r.y) * (s.z + r.z), e += (s.z - r.z) * (s.x + r.x), l += (s.x - r.x) * (s.y + r.y), s = r;
    return r = Math.hypot(a, e, l), a /= r, e /= r, l /= r, { x: a, y: e, z: l, w: a * s.x + e * s.y + l * s.z };
  },
  r = (t, a) => {
    let e = C;
    t *= 16,
      e[t++] = a.m11,
      e[t++] = a.m12,
      e[t++] = a.m13,
      e[t++] = a.m14,
      e[t++] = a.m21,
      e[t++] = a.m22,
      e[t++] = a.m23,
      e[t++] = a.m24,
      e[t++] = a.m31,
      e[t++] = a.m32,
      e[t++] = a.m33,
      e[t++] = a.m34,
      e[t++] = a.m41,
      e[t++] = a.m42,
      e[t++] = a.m43,
      e[t] = a.m44;
  },
  c = (t, a, e, l = 0) => 255 * l << 24 | 255 * e << 16 | 255 * a << 8 | 255 * t,
  b = (t, a, e) => (t.D = e, t.A = a, t),
  I = (t, l, a = t.A) =>
    b(
      t.map(t =>
        ((
          { x: t, y: a, z: e },
        ) => ({ x: t, y: a, z: e } = l.transformPoint({ x: t, y: a, z: e }), { x: t, y: a, z: e }))(t)
      ),
      a,
      t.D,
    ),
  o = (t, a, e) => t.map(t => I(t, a, e)),
  A = (e, l = 0) =>
    et(e, t => {
      let a = Math.cos(2 * Math.PI * t / e);
      return { x: Math.sin(2 * Math.PI * t / e), y: 0, z: (a < 0 ? -a : a) < .01 ? a : a < 0 ? a - l : a + l };
    }),
  s = (l, r, s) => l.map((t, a, { length: e }) => b([t, r[e - a - 1], r[e - (a + 1) % e - 1], l[(a + 1) % e]], l.A, s)),
  i = (
    t,
    a,
    e = 0,
    l,
  ) => (l = t.length ? t : A(t, l),
    t = I(l, Z.translate(0, 1).scale3d(0 < e ? e : 1)),
    e = I(l, Z.translate(0, -1).scale3d(e < 0 ? -e : 1)).reverse(),
    [...s(e, t, a), e, t]),
  P = (
    l,
    r = l,
    s = (
      t,
      a,
    ) => (a *= Math.PI / r,
      { x: Math.cos(t *= 2 * Math.PI / l) * Math.sin(a), y: Math.cos(a), z: Math.sin(t) * Math.sin(a) }),
  ) => {
    let n = [];
    for (let e = 0; l > e; e++) {
      for (let a = 0; r > a; a++) {
        let t = b([], 0, 1);
        n.push(t),
          t.push(s(e, a, t)),
          a && t.push(s((e + 1) % l, a, t)),
          r - 1 > a && t.push(s((e + 1) % l, a + 1 % r, t)),
          t.push(s(e, a + 1 % r, t));
      }
    }
    return n;
  },
  Y = (l, r) => {
    let s, n, o, c = r.C;
    for (let t = 0; c.length > t; ++t) {
      if ((o = d(l, c[t]) - l.w) < -8e-5 ? n = r : 8e-5 < o && (s = r), n && s) {
        n = [], o = [], c = r.C, t = r.B;
        let a = c.at(-1), e = d(l, a) - l.w;
        for (let t of c) {
          s = d(l, t) - l.w,
            e < 8e-5 && o.push(a),
            -8e-5 < e && n.push(a),
            (8e-5 < e && s < -8e-5 || e < -8e-5 && 8e-5 < s)
            && (e /= s - e,
              a = { x: a.x + (a.x - t.x) * e, y: a.y + (a.y - t.y) * e, z: a.z + (a.z - t.z) * e },
              n.push(a),
              o.push(a)),
            a = t,
            e = s;
        }
        return {
          o: 2 < n.length && { C: b(n, c.A, c.D), B: t, u: r },
          m: 2 < o.length && { C: b(o, c.A, c.D), B: t, u: r },
        };
      }
    }
    return { o: s, m: n };
  },
  n = (e, l, r = Yt(l.C)) => {
    if (e) {
      let { o: t, m: a } = Y(e, l);
      t || a || e.s.push(l), t && (e.o = n(e.o, t, r)), a && (e.m = n(e.m, a, r));
    } else e = { x: r.x, y: r.y, z: r.z, w: r.w, s: [l], o: 0, m: 0 };
    return e;
  },
  e = (a, r, s) => {
    let n = [],
      o = (t, a) => {
        let { o: e, m: l } = Y(t, a);
        e || l || (0 < s * d(t, r) ? e = a : l = a), e && (t.o ? o(t.o, e) : n.push(e)), l && t.m && o(t.m, l);
      };
    for (let t of r.s) o(a, t);
    return n;
  },
  k = (t, a) => t && (a(t), k(t.o, a), k(t.m, a)),
  F = t => t.length ? t.reduce((t, a) => n(t, { C: a, B: 0, u: 0 }), 0) : t,
  l = t => (k(t, a => {
    let t = a.m;
    a.m = a.o, a.o = t, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let t of a.s) t.B = !t.B;
  }),
    t),
  h = (...t) =>
    t.reduce((l, a) => {
      let r = [];
      if (l = F(l), a) {
        a = F(a), k(l, t => t.s = e(a, t, 1)), k(a, t => r.push([t, e(l, t, -1)]));
        for (let [a, e] of r) for (let t of e) n(l, t, a);
      }
      return l;
    }),
  f = (t, ...a) => l(h(l(F(t)), ...a)),
  m = t => {
    let e = new Map(),
      l = new Map(),
      r = a => {
        if (a.u) {
          let t = e.get(a.u);
          t ? (l.delete(t), a = r(a.u)) : e.set(a.u, a);
        }
        return a;
      };
    return k(t, a => {
      for (let t of a.s) l.set(r(t), t.B);
    }),
      Array.from(l, ([{ C: t }, a]) => {
        let e = t.map(({ x: t, y: a, z: e }) => ({ x: t, y: a, z: e }));
        return b(a ? e.reverse() : e, t.A, t.D);
      });
  },
  u = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  lt = [],
  g = (t, a = Z, e) => D.s.push(...o(t, a, e)),
  M = (t, a = 1) => {
    let e = D;
    return lt.push(D = a = { l: Z, F: lt.length, H: a, s: [] }), t(a), D = e, a;
  },
  rt = -11,
  st = 17,
  nt = -90,
  ot = 0,
  ct = 0,
  O = t => Math.sin(t * Math.PI * 2),
  it = [],
  kt = () => {
    ut || !gt ? E.disconnect() : E.connect(N.destination), b4.innerHTML = "Music: " + gt;
  },
  Ft = (t = !1) => {
    if (ut !== t) {
      ut = t, yt = 0;
      try {
        t ? document.exitPointerLock() : E.start();
      } catch {}
      document.body.className = t ? "l m" : "l", kt();
    }
  },
  ht = (t, a, e) => t + (a - t) * tt(1 - Math.exp(-e * w)),
  t = ({ j: t }) => t,
  ft = [],
  Tt = [],
  jt = () => {
    y = Tt.reduce((t, a) => t + a.j, 0),
      h3.innerHTML = " " + ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][y];
  },
  T = () => {
    jt(), localStorage.DanteSP22 = JSON.stringify([ft.map(t), Tt.map(t), J, V, bt]);
  },
  mt = { x: 0, y: 0, z: 0 },
  j = (t, a, e) =>
    Z.translate(t + Math.sin(V + 2) / 5, a + Math.sin(.8 * V) / 3, e).rotateSelf(
      2 * Math.sin(V),
      Math.sin(.7 * V),
      Math.sin(.9 * V),
    ),
  v = r => {
    let s = D,
      n = ft.length,
      o = {
        j: 0,
        h: 0,
        i: 0,
        u: s,
        g() {
          let t = o.j, a = o.h, e = o.i, l = s.l.multiply(r);
          o.I = l,
            S(l.transformPoint()) < 2.9 && it[5] && (a < .3 || .7 < a)
            && (o.j = t ? 0 : 1, n && !pt && (h4.innerHTML = "* click *", x = V + 1), J = n, T()),
            o.h = ht(a, t, 4),
            o.i = ht(e, t, 1),
            o.l = l.rotate(60 * o.h - 30, 0).translateSelf(0, 1);
        },
      };
    ft.push(o),
      g(i(5), r.translate(-.2).rotate(90, 90).scale(.4, .1, .5), c(.4, .5, .5)),
      g(i(5), r.translate(.2).rotate(90, 90).scale(.4, .1, .5), c(.4, .5, .5)),
      g(i(u), r.translate(0, -.4).scale(.5, .1, .5), c(.5, .5, .4));
  },
  p = (o, ...t) => {
    let c = -1,
      i = 0,
      h = 0,
      f = 0,
      m = 0,
      u = 0,
      g = 3,
      M = 1,
      v = {
        j: 0,
        g() {
          if (!v.j) {
            a = 1;
            let e = 1 / 0, l, t;
            for (l of d) {
              var a, r = l.w, s = Math.hypot(b - l.x, I - l.z), n = s - r;
              t ||= s < r, 0 < n && e > n && (e = n, z = l), a = a < (r = s / r) ? a : r;
            }
            if (!t) {
              r = z.w;
              let t = Math.hypot(s = b - (e = z.x), n = I - (l = z.z)), a = Math.atan2(-n, s);
              M && (h = (Math.random() - .5) * Math.PI / 2, g = $(1, g / (1 + Math.random()))),
                a += h,
                c = -Math.cos(a),
                i = Math.sin(a),
                .1 < t && (t = (r > t ? t : r) / (t || 1), b = s * t + e, I = n * t + l);
            }
            M = t,
              g = ht(g, 3 + 6 * (1 - a), 3 + a),
              A = ht(A, b = ht(b, b + c, g), g),
              P = ht(P, I = ht(I, I + i, g), g),
              f = At(f, Math.atan2(A - m, P - u) / _ - 180, 3 * w),
              m = A,
              u = P,
              a = (v.l = o.multiply(
                p.l.translate(A, 0, P).rotateSelf(0, f).skewXSelf(7 * Math.sin(2 * V)).skewYSelf(
                  7 * Math.sin(1.4 * V),
                ),
              )).transformPoint(),
              S(a) < 1.5
              && (v.j = 1,
                a = [
                  ,
                  "Mark Zuckemberg<br>made the world worse",
                  ,
                  "Andrzej Mazur<br>for the js13k competition",
                  "Donald Trump<br>lies",
                  "Kim Jong-un<br>Dictator, liked pineapple on pizza",
                  "Maxime Euziere<br>forced me to finish this game",
                  "She traded NFTs apes",
                  ,
                  "Vladimir Putin<br>evil war",
                  "He was not a good person",
                  ,
                  "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",
                ][y] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                t = y && y < 12 ? 5 : 7,
                pt || (h4.innerHTML = a, x = V + t),
                T());
          }
          v.j
            && (a = e % 4 - 2,
              v.l = lt[2].l.translate(
                e % 4 * 1.2 - 1.7 + Math.sin(V + e) / 7,
                -2,
                1.7 * (e / 4 | 0) - 5.5 + (a < 0 ? -a : a) + Math.cos(V / 1.5 + e) / 6,
              ));
        },
      },
      p = D,
      e = Tt.length,
      d = t.map(([t, a, e]) => ({ x: t, z: a, w: e })),
      z = d[0],
      { x: b, z: I } = z,
      A = b,
      P = I;
    Tt.push(v);
  },
  Ct = () => {
    for (let t of lt) t.g && (t.l = t.g(t));
    for (let t of ft) t.g();
    for (let t of Tt) t.g();
  },
  Dt = (t, a, e, l) => {
    let r = 0,
      s = 0,
      n = 0,
      o = 1 / 0,
      c = -1 / 0,
      i = 1 / 0,
      h = -1 / 0,
      f = 1 / 0,
      m = -1 / 0,
      u = 1.1 * (e - a),
      y = new DOMMatrix(St(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, a, e)).multiplySelf(t).invertSelf();
    return t = et(
      8,
      t => (t = y.transformPoint({ x: 4 & t ? 1 : -1, y: 2 & t ? 1 : -1, z: 1 & t ? 1 : -1 }),
        r -= t.x = (u * t.x | 0) / u / t.w,
        s -= t.y = (u * t.y | 0) / u / t.w,
        n -= t.z = (u * t.z | 0) / u / t.w,
        t),
    ),
      a = Z.rotate(298, 139).translateSelf(r / 8, s / 8, n / 8),
      I(t, a).map(({ x: t, y: a, z: e }) => {
        o = t > o ? o : t,
          c = c > t ? c : t,
          i = a > i ? i : a,
          h = h > a ? h : a,
          f = e > f ? f : e,
          m = m > e ? m : e;
      }),
      f *= f < 0 ? l : 1 / l,
      m *= 0 < m ? l : 1 / l,
      Z.scale(2 / (c - o), 2 / (h - i), 2 / (f - m)).translateSelf((c + o) / -2, (h + i) / -2, (f + m) / 2)
        .multiplySelf(a).toFloat32Array();
  },
  Ht = (t, a = 35633) => (a = xt.c6x(a), xt.s3c(a, t), xt.c6a(a), a),
  Qt = (t, a) => {
    let e = {}, l = xt.c1h();
    return xt.abz(l, t), xt.abz(l, Ht(a, 35632)), xt.l8l(l), t => t ? e[t] || (e[t] = xt.gan(l, t)) : xt.u7y(l);
  },
  C = new Float32Array(656),
  Bt = (t, a, e) => {
    if (ut) {
      for (var { F: l } of (e = Z.rotate(0, 40 * Math.sin(Mt) - 70), [Xt, ...Rt])) r(l - 1, e);
      xt.uae(t, !1, C), xt.d97(4, Rt[1].G - Xt.v, 5123, 2 * Xt.v);
    } else {
      for (let { H: t, F: a, l: e } of lt) t && r(a - 1, e);
      for (xt.uae(t, !1, C), xt.d97(4, (a ? Rt[1].G : Xt.v) - 3, 5123, 6), l = 0; ft.length > l; ++l) {
        r(l, ft[l].l), C[16 * l + 15] = 1 - ft[l].h;
      }
      for (xt.uae(t, !1, C), xt.das(4, H.G - H.v, 5123, 2 * H.v, ft.length), l = 0; l < 13; ++l) r(l, Tt[l].l);
      e = e ? B : Q, xt.uae(t, !1, C), xt.das(4, e.G - e.v, 5123, 2 * e.v, 13);
    }
  },
  R = new Int32Array(10725888),
  D,
  ut,
  yt,
  Ot,
  H,
  Q,
  B,
  Rt,
  Xt,
  X = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  L = (() => {
    let a = et(
        11,
        t => Z.translate(Math.sin(t / 10 * Math.PI), t / 10).rotate(+t).scale(1.0001 - t / 10, 0, 1 - t / 10),
      ),
      e = A(18);
    return et(10, t => s(I(e, a[t]).reverse(), I(e, a[t + 1]), 1)).flat();
  })(),
  q = m(
    f(
      o(i(20, 1, 1.15, 1), Z.translate(0, -3).scale(3.5, 1, 3.5), c(.7, .4, .25, .7)),
      o(i(20, 1, 1.3, 1), Z.translate(0, -2.5).scale(2.6, 1, 3), c(.7, .4, .25, .2)),
      o(i(u), Z.translate(4, -1.2).scale3d(2), c(.7, .4, .25, .3)),
    ),
  ),
  W = m(
    f(
      o(i(u), Z.translate(0, -8).scale(6, 15, 2.2)),
      o(i(u), Z.translate(0, -14.1).scale(4, 13, 4)),
      o(i(20, 1), Z.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
    ),
  ),
  N = new AudioContext(),
  E = N.createBufferSource(),
  xt = hC.getContext("webgl2");
for (let t in xt) xt[t[0] + [...t].reduce((t, a, e) => (t * e + a.charCodeAt(0)) % 434, 0).toString(36)] = xt[t];
setTimeout(() => {
  let e = 0,
    t = 6,
    a = () => {
      if (h4.innerHTML += ".", !--t) {
        let i = 0,
          h = 0,
          f = 1,
          m = 0,
          u = 0,
          g = 0,
          M = !1,
          v = { x: 0, y: 0, z: 0 },
          p = new Int32Array(256),
          e = () => {
            let { u: t, I: a } = ft[J], { x: e, y: l, z: r } = a.transformPoint({ x: 0, y: 8, z: -3 });
            mt.x = v.x = e,
              mt.y = v.y = Y = l,
              mt.z = v.z = r,
              b =
                S =
                P =
                I =
                A =
                  0,
              f = 1,
              i = h = t?.F || 1;
          },
          l = t => {
            requestAnimationFrame(l);
            let a = (t - (Ot || t)) / 1e3;
            w = ut ? it[5] = 0 : .066 < a ? .066 : a,
              V += w,
              Mt += a,
              Ot = t,
              0 < w && (xt.b6o(36160, B),
                xt.r9r(0, 0, 128, 128, 6408, 5121, d),
                xt.iay(36160, [36064]),
                (() => {
                  let a = 0,
                    e = 0,
                    t = ((() => {
                      let s = 0, n = 0, a = 0, e = 0, o = 0;
                      p.fill(0);
                      for (let t = 0; t < 31; ++t) {
                        let l = 0, r = 512 * t;
                        for (let e = 0; e < 128; e++) {
                          let t = r + 4 * e, a = (d[t] + d[1 + t]) / 255;
                          t = d[2 + t],
                            14 < e && e < 114 && (l += a),
                            t && a && (a = p[t] + 1, p[t] = a, s > a || (s = a, n = t));
                        }
                        l < 3 && 5 < t && (e += t / 32), 3 < l && (7 < t && (a += t / 15), o = 1);
                      }
                      n && (o = 1),
                        f ? n && (f = 0, h = n) : h = n || i,
                        i = n,
                        b = o,
                        I = ht(I, o ? 6.5 : 8, 4),
                        v.y += a / 41 - (o ? 1 : I) * e / 41 * I * w;
                    })(),
                      (() => {
                        for (let t = 32; t < 128; t += 2) {
                          let n = 0, o = 0, c = 0, i = 0, h = 512 * t;
                          for (let s = t >> 1 & 1; s < 128; s += 2) {
                            let t = h + 4 * s,
                              a = h + 4 * (127 - s),
                              e = d[t] / 255,
                              l = d[1 + a] / 255,
                              r = s / 63.5 - 1;
                            r = 1 - (r < 0 ? -r : r),
                              10 < s && s < 118
                              && (n = $(n, $(e * r, e * d[a] / 127.5)), o = $(o, $(l * r, l * d[1 + t] / 255))),
                              (s < 54 || 74 < s) && .001 < (t = (1 - r) * (l < e ? e : l) / 3)
                              && (s < 64 && t > c ? c = t : 64 < s && t > i && (i = t));
                          }
                          c = i - c,
                            n = o - n,
                            (c < 0 ? -c : c) > (a < 0 ? -a : a) && (a = c),
                            (n < 0 ? -n : n) > (e < 0 ? -e : e) && (e = n);
                        }
                      })(),
                      (it[0] ? 1 : 0) + (it[2] ? -1 : 0) + K),
                    l = (it[1] ? 1 : 0) + (it[3] ? -1 : 0) + G,
                    r = navigator.getGamepads()[0];
                  if (r) {
                    var n, s = t => a[t]?.pressed || 0 < a[t]?.value;
                    let a = r.buttons;
                    r = r.axes,
                      n = s(1) || s(3) || s(2) || s(0),
                      n !== M && (M = n) && (it[5] = 1),
                      t += (.2 < wt(-r[0]) ? -r[0] : 0) + (s(14) ? 1 : 0) + (s(15) ? -1 : 0),
                      l += (.2 < wt(-r[1]) ? -r[1] : 0) + (s(12) ? 1 : 0) + (s(13) ? -1 : 0),
                      yt && (.3 < wt(r[2]) && (ct += 80 * r[2] * w), .3 < wt(r[3]) && (ot += 80 * r[3] * w));
                  }
                  (l < 0 ? -l : l) < .05 && (l = 0),
                    (t < 0 ? -t : t) < .05 && (t = 0),
                    s = Math.atan2(l, t),
                    r = tt(Math.hypot(l, t)),
                    t = r * Math.cos(s),
                    l = r * Math.sin(s);
                  let y = tt(1 - 5 * $(a < 0 ? -a : a, e < 0 ? -e : e)),
                    x =
                      (h || (a += P * y * w, e += S * y * w),
                        P = ht(P, 0, b ? 8 : 4),
                        S = ht(S, 0, b ? 8 : 4),
                        A = ht(A, b ? (t || l ? b ? 7 : 4 : 0) * y : 0, b ? .1 < y ? 10 : t || l ? 5 : 7 : 1),
                        y = Math.sin(n = yt ? ct * _ : Math.PI) * A * w,
                        Math.cos(n) * A * w);
                  if (
                    a -= t * x - l * y,
                      e -= t * y + l * x,
                      (y = (n = 1 === lt[h].H && lt[h].l || Z).inverse()).m41 = 0,
                      y.m42 = 0,
                      y.m43 = 0,
                      { x: a, z: e } = y.transformPoint({ x: a, z: e, w: 0 }),
                      v.x += a,
                      v.z += e,
                      h !== W
                  ) {
                    W = h;
                    let { x: t, y: a, z: e } = n.inverse().transformPoint(mt);
                    v.x = t, v.y = a, v.z = e;
                  }
                  y = mt.x, x = mt.z;
                  let { x: o, y: c, z } = n.transformPoint(v);
                  mt.x = o,
                    mt.y = c,
                    mt.z = z,
                    n = wt(Y - c),
                    Y = ht(Y, c + .1, 50 * n + 5),
                    h && (P = (mt.x - y) / w, S = (mt.z - x) / w),
                    (t || l) && (m = 90 - s / _),
                    u = At(u, m, 8 * w),
                    g += (r - g) * tt(10 * w);
                })(),
                Ct()),
              0 < w && (k = Pt(k, mt.x, .5, w),
                F = Pt(F, mt.y, 2, w),
                T = Pt(T, mt.z, .5, w),
                yt
                  ? (rt = ht(rt, mt.x, 18 + (t = 200 * f)),
                    st = ht(st, mt.y + 1.5, 15 + t),
                    nt = ht(nt, mt.z, 18 + t),
                    ot = $(ot < 87 ? ot : 87, -87))
                  : (rt = Pt(rt, k, 1, 2 * w),
                    st = Pt(st, F + 13 + 15 * f, 4, 2 * w),
                    1 < ((t = (nt = Pt(nt, T + -18, 1, 2 * w)) - T) < 0 ? -t : t)
                    && (a = rt - k,
                      ct = 270 + Math.atan2(t, a) / _,
                      ot = 90 - Math.atan2(Math.hypot(t, a), st - F) / _)),
                ct = It(ct),
                0 < w
                && (t = at(ft[12].h, ft[13].h),
                  V > x && (h4.innerHTML = "", x = 0),
                  a = ht(vt, 0, 1),
                  vt = a + (It(vt + 60 * w) - a) * tt(ft[5].h - ft[6].i),
                  a = ht(zt, 0, 5),
                  zt = a + (It(zt + 56 * w) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
                  a = ht(z, 0, 4),
                  z = a + (It(z + 48 * w) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
                  bt = ht(bt, ft[9].i, .2 + .3 * ((t = 2 * ft[9].i - 1) < 0 ? -t : t)),
                  dt = ht(dt, pt ? dt + (-9 - dt) * tt(1.5 * w) : tt(V / 3), 1),
                  1 === ft[0].j && .8 < ft[0].h && (y < 13
                    ? (ft[0].j = 0, pt || (h4.innerHTML = "Not leaving now, there are souls to catch!", x = V + 3))
                    : pt
                      || (pt
                        || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", x = V + 1 / 0),
                        pt = 1)),
                  it[5] = 0,
                  (mt.x < -25 || mt.z < 109 ? -25 : -9) > mt.y && e())),
              t = ut
                ? Z.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + tt(hC.clientWidth / 1e3))
                : Z.rotate(-ot, -ct, -0).invertSelf().translateSelf(-rt, -st, -nt),
              0 < w
              && (H(),
                xt.b6o(36160, B),
                xt.v5y(0, 0, 128, 128),
                xt.cbf(!0, !1, !0, !1),
                xt.c4s(16640),
                xt.uae(
                  H("b"),
                  !1,
                  Z.rotate(0, 180).invertSelf().translateSelf(-mt.x, -mt.y, .3 - mt.z).toFloat32Array(),
                ),
                Bt(H("c"), 0, 1),
                xt.cbf(!1, !0, !1, !1),
                xt.c4s(16640),
                xt.cbf(!1, !0, !0, !1),
                xt.uae(H("b"), !1, Z.translate(-mt.x, -mt.y, -mt.z - .3).toFloat32Array()),
                Bt(H("c"), 0, 1),
                xt.cbf(!0, !0, !0, !0),
                1 === h && (ft[9].j = mt.x < -15 && mt.z < 0 ? 1 : 0)),
              C(),
              xt.v5y(0, 0, 2048, 2048),
              O[0](Dt(t, .3, 55, 10)),
              O[1](Dt(t, 55, 177, 11)),
              xt.b6o(36160, null),
              Q(),
              xt.v5y(0, 0, xt.drawingBufferWidth, xt.drawingBufferHeight),
              xt.c4s(16640),
              xt.uae(Q("a"), !1, St(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177)),
              xt.uae(Q("b"), !1, t.toFloat32Array()),
              xt.ubu(Q("k"), rt, st, nt),
              O[0](),
              O[1](),
              Bt(Q("c"), !yt, 0),
              D(),
              xt.ubu(D("j"), xt.drawingBufferWidth, xt.drawingBufferHeight, Mt),
              ut ? xt.ubu(D("k"), 0, 0, 0) : xt.ubu(D("k"), rt, st, nt),
              xt.uae(D("b"), !1, t.inverse().toFloat32Array()),
              xt.d97(4, 3, 5123, 0);
          },
          d = new Uint8Array(65536),
          X = 0,
          r = [],
          L = [],
          q = [],
          s = [],
          n = new Map(),
          o = new Int32Array(8),
          c = t => {
            let { x: a, y: e, z: l } = j[t], r = (R[0] = a, R[1] = e, R[2] = l, n.get(t = "" + (j.D ? E : o)));
            return void 0 !== r
              ? (a = 3 * r, s[a] = (s[a++] + o[5]) / 2, s[a] = (s[a++] + o[6]) / 2, s[a] = (s[a] + o[7]) / 2)
              : (n.set(t, r = n.size), L.push(a, e, l, R[3]), q.push(o[4]), s.push(o[5], o[6], o[7])),
              r;
          },
          W,
          b,
          I,
          A,
          P,
          S,
          Y,
          k,
          F,
          T,
          t,
          j,
          a = Ht(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[40];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`),
          C = Qt(
            Ht(`#version 300 es
in vec4 f;uniform mat4 b,c[40];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}`),
            `#version 300 es
void main(){}`,
          ),
          D = Qt(
            Ht(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
            `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
          ),
          H = Qt(
            a,
            `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}`,
          ),
          Q = Qt(
            a,
            `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
          ),
          B =
            (D(), xt.ubh(D("q"), 3), H(), xt.uae(H("a"), !1, St(1.4, .59, 1e-4, 1)), Q(), xt.ubh(Q("q"), 3), xt.c5w()),
          N = (a = xt.c3z(), xt.c25()),
          O = et(2, t => {
            let a, e = xt.c25(), l = xt.c5w(), r = Q(t ? "j" : "i");
            return Q(),
              xt.ubh(Q(t ? "h" : "g"), t),
              xt.b6o(36160, l),
              xt.d45([0]),
              xt.r9l(0),
              xt.a4v(33984 + t),
              xt.b9j(3553, e),
              xt.fas(36160, 36096, 3553, e, 0),
              xt.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              xt.t2z(3553, 10241, 9729),
              xt.t2z(3553, 10240, 9729),
              xt.t2z(3553, 34893, 515),
              xt.t2z(3553, 34892, 34894),
              xt.t2z(3553, 10243, 33071),
              xt.t2z(3553, 10242, 33071),
              t => {
                t
                  ? (a = t,
                    xt.b6o(36160, l),
                    xt.iay(36160, [36096]),
                    xt.c4s(256),
                    xt.uae(C("b"), !1, a),
                    Bt(C("c"), !yt, 0))
                  : xt.uae(r, !1, a);
              };
          }),
          E = new Int32Array(o.buffer, 0, 5),
          R = new Float32Array(o.buffer);
        for (t of lt) {
          for (j of (R[3] = t.H ? t.F : 0, t.s)) {
            let { x: t, y: a, z: e } = Yt(j);
            o[4] = 0 | j.A, o[5] = 32767 * t, o[6] = 32767 * a, o[7] = 32767 * e;
            for (let t = 2, a = c(0), e = c(1); j.length > t; ++t) r.push(a, e, e = c(t));
          }
          t.s = null, t.v = X, t.G = X = r.length;
        }
        xt.b11(34963, xt.c1b()),
          xt.b2v(34963, new Uint16Array(r), 35044),
          xt.b11(34962, xt.c1b()),
          xt.b2v(34962, new Float32Array(L), 35044),
          xt.v7s(0, 4, 5126, !1, 0, 0),
          xt.b11(34962, xt.c1b()),
          xt.b2v(34962, new Int16Array(s), 35044),
          xt.v7s(1, 3, 5122, !0, 0, 0),
          xt.b11(34962, xt.c1b()),
          xt.b2v(34962, new Uint32Array(q), 35044),
          xt.v7s(2, 4, 5121, !0, 0, 0),
          xt.e3x(0),
          xt.e3x(1),
          xt.e3x(2),
          xt.e8z(2929),
          xt.e8z(2884),
          xt.c70(1),
          xt.c7a(1029),
          xt.d4n(515),
          xt.c5t(0, 0, 0, 1),
          xt.b6o(36160, B),
          xt.bb1(36161, a),
          xt.r4v(36161, 33189, 128, 128),
          xt.f8w(36160, 36096, 36161, a),
          xt.a4v(33987),
          xt.b9j(3553, N),
          xt.fas(36160, 36064, 3553, N, 0),
          xt.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          xt.b9j(3553, xt.c25()),
          xt.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, U),
          xt.gbn(3553),
          xt.t2z(3553, 10241, 9987),
          xt.t2z(3553, 10240, 9729),
          Xt.g = () => Z.translate(mt.x, Y, mt.z).rotateSelf(0, u),
          Rt.map((t, a) => {
            t.g = () =>
              Xt.l.translate(0, g * tt(.45 * Math.sin(9.1 * V + Math.PI * a - Math.PI / 2))).rotateSelf(
                g * Math.sin(9.1 * V + Math.PI * a) * .25 / _,
                0,
              );
          });
        try {
          let [e, l, t, a, r] = JSON.parse(localStorage.DanteSP22);
          ft.map((t, a) => t.h = t.i = t.j = a ? 0 | e[a] : 0), Tt.map((t, a) => t.j = 0 | l[a]), J = t, V = a, bt = r;
        } catch {}
        dt = J < 0 ? 0 : 1 < J ? 1 : J,
          h4.innerHTML = "",
          x = 0,
          jt(),
          Ct(),
          (() => {
            let r = 0,
              s = 0,
              t = 0,
              a = () => {
                hC.width = innerWidth,
                  hC.height = innerHeight,
                  it.length = K = G = 0,
                  n = o = void 0,
                  document.hidden && Ft(!0);
              },
              n,
              o,
              c;
            b1.onclick = () => Ft(),
              b2.onclick = () => {
                Ft(), yt = 1;
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
              },
              b4.onclick = () => {
                gt = !gt, kt();
              },
              b5.onclick = () => Ft(!0),
              onclick = () => {
                c = 1, ut || (it[5] = !0, yt && hC.requestPointerLock());
              },
              document.onvisibilitychange = onresize = onblur = a,
              onkeydown = onkeyup = ({ code: t, target: a, type: e, repeat: l }) => {
                l || ((a = !!e[5] && a === document.body) && ("Escape" === t || "Enter" === t && ut)
                  ? ut && !c || Ft(!ut)
                  : 5
                      === (t = {
                        KeyA: 0,
                        ArrowLeft: 0,
                        KeyW: 1,
                        ArrowUp: 1,
                        KeyD: 2,
                        ArrowRight: 2,
                        KeyS: 3,
                        ArrowDown: 3,
                        KeyE: 5,
                        Space: 5,
                        Enter: 5,
                      }[t])
                  ? a && (it[t] = 1)
                  : it[t] = a);
              },
              onmousemove = ({ movementX: t, movementY: a }) => {
                yt && (t || a) && (ct += .1 * t, ot += .1 * a);
              },
              hC.ontouchstart = a => {
                if (!ut) {
                  for (let t of a.changedTouches) {
                    yt && t.pageX > hC.clientWidth / 2
                      ? n || (n = t, r = ct, s = ot)
                      : o = o || t;
                  }
                  t = Mt;
                }
              },
              hC.ontouchmove = ({ changedTouches: l }) => {
                if (!ut) {
                  for (
                    let { pageX: t, pageY: a, identifier: e } of l
                  ) {
                    n?.identifier === e && (ct = r + (t - n.pageX) / 3, ot = s + (a - n.pageY) / 3),
                      o?.identifier === e
                      && (K = -(t - o.pageX) / 18,
                        G = -(a - o.pageY) / 18,
                        K = (K < 0 ? -K : K) < .35 ? 0 : .8 * K,
                        G = (G < 0 ? -G : G) < .35 ? 0 : .8 * G);
                  }
                }
              },
              hC.ontouchend = a => {
                for (let t of a.changedTouches) {
                  t.identifier === n?.identifier && (n = void 0),
                    t.identifier === o?.identifier && (o = void 0, G = K = 0);
                }
                a.preventDefault(), a = Mt - t, (!t || .02 < a && a < .4) && (it[5] = !0);
              },
              oncontextmenu = () => !1,
              a(),
              Ft(!0);
          })(),
          e(),
          rt = k = mt.x,
          st = (F = mt.y) + 13,
          nt = (T = mt.z) + -18,
          requestAnimationFrame(l);
      }
    },
    l = () => {
      if (e < 5) {
        var B, Q, D = 0, H = e++;
        let [v, p, d, b, I, A, P, S, y, x, Y, , z, k, F, T, t, w, a, j, C] =
          [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, [
            "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U",
            "(059<59<A9<AE<AEHAEHMEHMQMQTY(Y",
            "(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y",
            "(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^",
            "Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]",
            "QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",
          ]], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, [
            ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5",
            "-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5",
            ",(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5",
            "*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6",
            "5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5",
            "5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",
          ]], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, [
            "9(((9(((9(((9(((9(((9(((9(((9",
            "9(((Q(((Q(((Q",
          ]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, [
            "9(9(9(9(9(9(9(999(9(9(9(999(9(9",
            "9(9(9(9(9(999(9(((((Q",
          ]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, [
            "((((Q(((((((Q(((((((Q(((((((Q",
            "Q((Q((Q((Q((Q((Q((((Q",
          ]]][H];
        x = x * x * 4;
        for (let M of [5513, 4562, 3891]) {
          let r = 0,
            s = 0,
            f = [],
            m,
            n,
            o,
            c,
            i,
            h = new Int32Array(768 * M),
            u = Math.PI * 2 ** (t - 8) / M,
            g = a * M & -2;
          for (let l = 0; l <= 11; ++l) {
            for (
              let t = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * H + l];
              t < 32;
              ++t
            ) {
              let e = (32 * l + t) * M;
              for (B = 0; B < 4; ++B) {
                if (m = 0, a && (m = C[a - 1].charCodeAt(t + 32 * B) - 40, m += 0 < m ? 106 : 0), m) {
                  if (!(Q = f[m])) {
                    let l = 0,
                      r = 0,
                      s,
                      n,
                      o = Q = m,
                      c = H < 2
                        ? t => t % 1 * 2 - 1
                        : O,
                      i = H < 2
                        ? H < 1
                          ? t => t % 1 < .5 ? 1 : -1
                          : t => (t = t % 1 * 4) < 2 ? t - 1 : 3 - t
                        : O,
                      h = new Int32Array(S + y + x);
                    for (let a = 0, e = 0; S + y + x > a; ++a, ++e) {
                      let t = 1;
                      S > a ? t = a / S : S + y > a || (t = (1 - (t = (a - S - y) / x)) * 3 ** (-Y / 16 * t)),
                        e < 0
                        || (e -= 4 * M,
                          n = .00396 * 2 ** ((o + p - 256) / 12),
                          s = .00396 * 2 ** ((o + I - 256) / 12) * (1 + (H ? 0 : 8e-4 * 9))),
                        h[a] = 80
                            * (c(l += n * t ** (d / 32)) * v + i(r += s * t ** (A / 32)) * b
                              + (P ? (2 * Math.random() - 1) * P : 0))
                            * t | 0;
                    }
                    Q = f[Q] = h;
                  }
                  for (let t = 0, a = 2 * e; Q.length > t; ++t, a += 2) h[a] += Q[t];
                }
              }
              for (let t, a = 0; M > a; ++a) {
                B = 0,
                  ((t = h[Q = 2 * (e + a)]) || i)
                  && (o = .00308 * z,
                    1 != H && 4 != H || (o *= Math.sin(2 ** (t - 9) / M * Q * Math.PI * 2) * j / 512 + .5),
                    o = 1.5 * Math.sin(o),
                    r += o * s,
                    c = (1 - k / 255) * (t - s) - r,
                    s += o * c,
                    t = 4 == H ? s : 3 == H ? c : r,
                    H || (t = (t *= 22e-5) < 1 ? -1 < t ? Math.sin(t / 4 * Math.PI * 2) : -1 : 1, t /= 22e-5),
                    t *= F / 32,
                    i = 1e-5 < t * t,
                    n = Math.sin(u * Q) * T / 512 + .5,
                    B = t * (1 - n),
                    t *= n),
                  Q < g || (B += h[Q - g + 1] * w / 255, t += h[Q - g] * w / 255),
                  R[D + Q] += h[Q] = B,
                  ++Q,
                  R[D + Q] += h[Q] = t;
              }
            }
          }
          D += h.length;
        }
        setTimeout(l);
      } else {
        for (D = N.createBuffer(2, 5362944, 44100), H = 0; H < 2; H++) {
          for (let t = H, a = D.getChannelData(H); t < 10725888; t += 2) {
            a[t >> 1] = R[t] / 65536;
          }
        }
        E.buffer = D, E.loop = !0;
      }
      a();
    },
    U = new Image();
  U.onload = U.onerror = () => {
    a();
  },
    U.src = X,
    setTimeout(l, 50),
    (() => {
      let n;
      M(() => {
        g([u.slice(1)], Z.translate(-2).scale3d(3).rotate(90, 0));
      }, 0),
        M(() => {
          let r = () => {
              let t = ft[2].i, a = 1 - ft[4].i;
              return t < a ? t : a;
            },
            t = (a, e, l) =>
              M(t => {
                t.g = () => Z.translate(r() * Math.sin(3 * a + V * a) * e),
                  u.map(({ x: t, z: a }) => {
                    g(i(11, 1), Z.translate(4 * t, 4, l + 4 * a).scale(.8, 3, .8), c(.5, .3, .7, .6)),
                      g(i(u), Z.translate(4 * t, 7, l + 4 * a).scale(1, .3), c(.5, .5, .5, .3));
                  }),
                  g(m(f(
                    o(i(u), Z.translate(0, 0, l).scale(5, 1, 5), c(.8, .8, .8, .3)),
                    ...[-1, 1].map(t =>
                      o(i(u), Z.translate(5 * t, .2, l).rotate(0, 0, -30 * t).scale(4, 1, 2), c(.8, .8, .8, .3))
                    ),
                  ))),
                  g(i(u), Z.translate(0, -3, l).scale(8, 2, 8), c(.4, .4, .4, .3));
              }),
            l = (M(t => {
              t.g = () => j(-12, 4.2, 40 * dt - 66), g(q), v(Z.translate(0, -3, 4));
            }),
              et(7, t => o(i(6, 1), Z.translate(4 * (t / 6 - .5), 3).scale(.2, 3, .2), c(.3, .3, .38))).flat()),
            a = (p(Z.translate(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              p(
                Z.translate(0, 2.8),
                [5, 10, 3],
                [-5, 10, 3],
                ...A(18).map(({ x: t, z: a }) => [7 * t, 10 * a, 4.5 - 2 * (t < 0 ? -t : t)]),
              ),
              g(i(u), Z.translate(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), c(.8, .8, .8, .2)),
              u.map(({ x: t, z: a }) => g(i(6), Z.translate(3 * t, 3, 15 * a).scale(.7, 4, .7), c(.6, .3, .3, .4))),
              [-23, 22].map(t => g(i(u), Z.translate(0, 0, t).scale(3, 1, 8), c(.9, .9, .9, .2))),
              [-15, 15].map((a, e) => {
                g(i(u), Z.translate(0, 6.3, a).scale(4, .3, 1), c(.3, .3, .3, .4)),
                  g(i(u), Z.translate(0, 1, a).scale(3, .2, .35), c(.5, .5, .5, .3)),
                  M(t => {
                    t.g = () => Z.translate(0, 4.7 * -ft[e + 1].h, a), g(l);
                  });
              }),
              et(5, a =>
                et(2, t =>
                  g(
                    L,
                    Z.translate(18.5 * (t - .5), 0, 4.8 * a - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                    c(1, 1, .8, .2),
                  ))),
              g(i(u), Z.translate(3, 1.5, -20).scale(.5, 2, 5), c(.7, .7, .7, .2)),
              g(i(u), Z.translate(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), c(.75, .75, .75, .2)),
              g(i(5), Z.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), c(.6, .3, .3, .4)),
              v(Z.translate(-5.4, 1.5, -19).rotate(0, -90)),
              g(
                i(u),
                Z.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5),
                c(.8, .2, .2, .5),
              ),
              g(m(
                f(
                  h(
                    o(i(6, 0, 0, .3), Z.translate(8, -3, -4).scale(13, 1, 13), c(.7, .7, .7, .2)),
                    o(i(6), Z.translate(0, -8).scale(9, 8, 8), c(.4, .2, .5, .5)),
                    o(i(6, 0, 0, .3), Z.translate(0, -.92).scale(13, 2, 13), c(.8, .8, .8, .2)),
                  ),
                  o(i(5), Z.scale(5, 30, 5), c(.4, .2, .6, .5)),
                  o(i(5, 0, 1.5), Z.translate(0, 1).scale(4.5, .3, 4.5), c(.7, .5, .9, .2)),
                  o(i(u), Z.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), c(.5, .5, .5, .5)),
                  o(i(6), Z.translate(15, -1.5, 4).scale(3.5, 1, 3.5), c(.5, .5, .5, .5)),
                ),
              )),
              M(t => {
                t.g = () =>
                  Z.translate(
                    0,
                    .01 < ft[3].h
                      ? (5 * Math.cos(1.5 * V) + 2) * ft[3].i * (1 - ft[2].h) + -15 * (1 - ft[3].h)
                      : -500,
                    0,
                  ),
                  v(Z.translate(0, 1.2)),
                  g(i(5), Z.translate(0, -.2).scale(5, 1, 5), c(.6, .65, .7, .3));
              }),
              v(Z.translate(15, -2, 4)),
              t(.7, 12, 35),
              t(1, 8.2, 55),
              M(t => {
                t.g = () => Z.translate(r() * Math.sin(V / 1.5 + 2) * 12),
                  g(
                    m(f(
                      h(
                        o(i(u), Z.scale(1.5, 1, 5), c(.9, .9, .9, .2)),
                        o(i(6), Z.scale(4, 1, 5), c(.9, .9, .9, .2)),
                        o(i(u), Z.translate(0, -2).scale(2, 3.2, 1.9), c(.3, .8, .5, .5)),
                        o(i(16, 1, 0, 4), Z.scale(1, 1, 1.5).rotate(0, 90), c(.9, .9, .9, .2)),
                      ),
                      o(i(u), Z.scale(1.3, 10, 1.3), c(.2, .7, .4, .6)),
                    )),
                    Z.translate(0, 0, 45),
                  ),
                  p(Z.translate(0, 2.8, 45), [0, 0, 4.5]);
              }),
              M(t => {
                t.g = () => Z.translate(9.8 * (1 - r())),
                  g(i(3), Z.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), c(.3, .6, .6, .2)),
                  g(i(8), Z.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), c(.8, .8, .8, .2)),
                  g(i(u), Z.translate(-23, -3, 55).scale(5.2, 1.7, 3), c(.5, .5, .5, .3)),
                  g(i(u), Z.translate(-23, -2.2, 62).scale(3, 1, 4), c(.5, .5, .5, .3)),
                  v(Z.translate(-23, -.5, 66.5));
              }),
              g(i(u), Z.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), c(.9, .9, .9, .2)),
              M(t => {
                t.g = () => Z.translate(0, tt(1 - 5 * r()) * at(ft[4].h, ft[5].h) * Math.sin(1.35 * V) * 4),
                  g(i(u), Z.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), c(.7, .7, .7, .2)),
                  g(
                    m(f(o(i(u), Z.scale(3, 1.4, 2.7)), o(i(u), Z.scale(1.2, 8, 1.2)))),
                    Z.translate(-33, -3, 55),
                    c(.7, .7, .7, .2),
                  );
              }),
              M(t => {
                t.g = () => Z.translate(0, 0, tt(1 - 5 * r()) * at(ft[4].h, ft[5].h) * Math.sin(.9 * V) * 8),
                  g(m(
                    f(
                      o(i(u), Z.translate(-27, -3, 55).scale(3, 1.4, 2.7), c(.9, .9, .9, .2)),
                      o(i(u), Z.translate(-27, -3, 55).scale(1, 3), c(.9, .9, .9, .2)),
                    ),
                  )),
                  g(i(u), Z.translate(-39, -3, 55).scale(3, 1.4, 2.7), c(.9, .9, .9, .2));
              }),
              M(t => {
                t.g = () => Z.translate(0, -6.5 * ft[4].i),
                  g(
                    i(6),
                    Z.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9),
                    c(.7, .7, .7, .4),
                  );
              }),
              [...o(
                m(h(
                  o(i(u), Z.translate(0, -3).scale(11, 1.4, 3), c(.9, .9, .9, .2)),
                  f(
                    o(i(6), Z.rotate(0, 0, 90).scale(6, 8, 6), c(.3, .6, .6, .3)),
                    o(i(4, 0, .01), Z.translate(0, 6).scale(12, 2, .75).rotate(0, 45), c(.3, .6, .6, .3)),
                    o(i(6), Z.rotate(0, 0, 90).scale(5, 12, 5), c(.3, .6, .6, .3)),
                    ...[5, 0, -5].map(t =>
                      o(i(5), Z.translate(t, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), c(.3, .6, .6, .3))
                    ),
                  ),
                )),
                Z,
              )]),
            e =
              (g(a, Z.translate(-53, 0, 55)),
                g(i(6), Z.translate(-61.3, -2.4, 49).scale(3, 1, 5), c(.4, .6, .6, .3)),
                g(i(7), Z.translate(-57, -2.6, 46).scale(4, 1, 4), c(.8, .8, .8, .3)),
                v(Z.translate(-55, -1.1, 46).rotate(0, 90)),
                M(t => {
                  t.g = () =>
                    Z.translate(-75, (1 - ft[5].i) * (1 - ft[6].h) * 3, 55).rotate(180 * (1 - ft[5].i) + vt, 0), g(a);
                }, 2),
                g(i(u), Z.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), c(.7, .7, .7, .2)),
                g(i(3, 0, -.5), Z.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), c(.8, .8, .8, .2)),
                g(
                  m(f(
                    h(
                      o(i(u), Z.translate(-100, -2.5, 55).scale(8, 1, 8), c(.8, .8, .8, .2)),
                      o(i(u), Z.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), c(.8, .8, .8, .2)),
                      o(i(u), Z.translate(-100, -2.6, 70).scale(3, 1.1, 7), c(.8, .8, .8, .2)),
                      o(i(u), Z.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), c(.8, .8, .8, .2)),
                      o(i(6), Z.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), c(.6, .6, .6, .3)),
                      o(i(u), Z.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), c(.8, .8, .8, .2)),
                      o(i(u), Z.translate(-100, .42, 92).scale(3, 1.1, 4.1), c(.8, .8, .8, .2)),
                    ),
                    o(i(8), Z.translate(-100, -1, 55).scale(7, .9, 7), c(.3, .3, .3, .4)),
                    o(i(8), Z.translate(-100, -2, 55).scale(4, .3, 4), c(.4, .4, .4, .5)),
                    o(i(8), Z.translate(-100, -3, 55).scale(.6, 1, .6), c(.4, .4, .4, .5)),
                  )),
                  Z,
                ),
                p(Z.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
                p(Z.translate(-89, .2, 80), [0, 0, 6]),
                g(m(
                  f(
                    o(i(u), Z.translate(-100, 1, 63).scale(7.5, 4), c(.5, .5, .5, .4)),
                    o(i(u), Z.translate(-100, 0, 70).scale(2, 2, 10), c(.5, .5, .5, .4)),
                    o(i(20, 1), Z.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), c(.5, .5, .5, .4)),
                  ),
                )),
                M(t => {
                  t.g = () => Z.translate(-99.7, 5.3 * -ft[6].h - 2, 63.5), g(l);
                }),
                u.map(({ x: a, z: e }) => {
                  g(i(6), Z.translate(7 * a - 100, -3, 7 * e + 55).scale(1, 8.1), c(.6, .15, .15, .8)),
                    [4, -.4].map(t =>
                      g(i(6), Z.translate(7 * a - 100, t, 7 * e + 55).scale(1.3, .5, 1.3), c(.4, .2, .2, .8))
                    );
                }),
                et(7, t => {
                  g(
                    i((23 * t + 1) % 5 + 5, 0, .55),
                    Z.translate(5 * Math.sin(t) - 101 + t, -2.3 - t, 44.9 - 2.8 * t).scaleSelf(
                      5 + t / 2,
                      1 + t / 6,
                      5 + t / 3,
                    ),
                    c(.5 - t / 17, .5 - (1 & t) / 9, .6, .3),
                  );
                }),
                g(i(u), Z.translate(-87, -9.5, 24).scale(7, 1, 3), c(.4, .5, .6, .4)),
                g(i(4), Z.translate(-86, -9.2, 27).scale(5, 1, 5), c(.5, .6, .7, .3)),
                g(i(18, 1), Z.translate(-86, -9, 31).scale(1.5, 1, 1.5), c(.3, .3, .4, .1)),
                v(Z.translate(-86, -7.5, 31)),
                M(t => {
                  t.g = () => Z.translate(0, 3.5 * (1 - $(ft[6].h, ft[7].h)) + at(ft[7].i, ft[6].i) * Math.sin(V) * 5),
                    [0, 12, 24].map(t =>
                      g(i(u), Z.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), c(.2, .5, .6, .2))
                    );
                }),
                M(t => {
                  t.g = () => {
                    let t = at(ft[7].i, ft[6].i);
                    return Z.translate(0, t * Math.sin(V + 3) * 6, 6 * Math.sin(.6 * V + t) * t);
                  },
                    [6, 18].map(t =>
                      g(i(u), Z.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), c(.1, .4, .5, .2))
                    );
                }),
                g(
                  m(f(
                    h(
                      o(i(u), Z.scale(11, 1, 13), c(.3, .4, .6, .3)),
                      o(i(5), Z.translate(0, 0, -7).scale(2, 1.2, 2), c(.2, .4, .7, .3)),
                      o(i(5), Z.scale(9, 1.2, 9), c(0, .2, .3, .5)),
                    ),
                    o(i(5), Z.scale(5.4, 5, 5.4), c(0, .2, .3, .5)),
                  )),
                  Z.translate(-38.9, -11.3, 17),
                ),
                v(Z.translate(-38.9, -9.6, 10)),
                M(t => {
                  t.g = () => Z.translate(0, -7.3 * ft[7].i),
                    g(
                      m(f(
                        h(
                          o(i(5), Z.translate(0, 2).scale(5, 7, 5).skewY(8), c(.2, .4, .5, .5)),
                          o(i(5), Z.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), c(.25, .35, .5, .5)),
                          o(i(5), Z.translate(0, 9).scale(.6, 7, .6).skewY(8), c(.35, .3, .5, .5)),
                        ),
                        o(i(5), Z.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), c(.2, .4, .5, .5)),
                      )),
                      Z.translate(-38.9, -11.3, 17),
                    ),
                    p(
                      Z.translate(-38.9, -.3, 17).rotate(0, 0, 10),
                      ...A(15).map(({ x: t, z: a }) => [3 * t, 3 * a, 1.5]),
                    );
                }),
                u.map(({ x: t, z: a }) => {
                  n = Z.translate(9 * t - 38.9, -7.3, 11 * a + 17),
                    g(i(18, 1), n.scale(1, 4), c(.25, .25, .25, 1)),
                    [1.5, 8].map(t => g(i(18, 1), n.translate(0, t - 4).scale(1.5, .5, 1.5), c(.6, .6, .6, .3)));
                }),
                g(
                  m(f(
                    h(
                      o(i(6), Z.translate(0, 0, -36).scale(15, 1.2, 15), c(.7, .7, .7, .3)),
                      o(i(u), Z.translate(0, 0, -18).scale(4, 1.2, 6), c(.45, .4, .6, .3)),
                    ),
                    ...et(6, a =>
                      et(6, t =>
                        o(
                          i(6),
                          Z.translate(4.6 * t - 12 + 2 * (1 & a), 0, 4.6 * a - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                          c(.7, .7, .7, .3),
                        ))).flat(),
                  )),
                  Z.translate(-38.9, -11.3, 17),
                ),
                p(Z.translate(-38.9, -8.4, -21), [0, 0, 12]),
                g(i(5), Z.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), c(.8, .1, .25, .4)),
                v(Z.translate(-84, -.5, 85).rotate(0, 45)),
                M(t => {
                  t.g = () => j(-123, 1.4, 55 + -65 * bt), v(Z.translate(0, -3, -4).rotate(0, 180)), g(q);
                }),
                p(Z.translate(-115, .2, -12), [0, 0, 3.5]),
                m(f(
                  o(i(u), Z.translate(0, -.5, 1).scale(1.15, 1.2, 6.5), c(.25, .25, .35, .3)),
                  o(i(3), Z.translate(0, 0, -5.5).scale(3, 2), c(.6, .3, .4, .3)),
                  ...[-1.2, 1.2].map(t => o(i(u), Z.translate(t, -.5, 1).scale(.14, .3, 6.5), c(.7, .2, 0, .3))),
                ))),
            s = (M(t => {
              t.g = () => {
                let t = Math.sin(1.1 * V);
                return Z.translate.call(Z, 0, -2, at(ft[10].h, ft[11].h) * (t < 0 ? -t : t) * -8.5 + 10);
              }, et(2, t => g(e, Z.translate(9 * t - 110 + (1 & t), 1.7, -12)));
            }),
              M(t => {
                t.g = () => {
                  let t = Math.sin(2.1 * V);
                  return Z.translate.call(Z, 0, -2, at(ft[10].h, ft[11].h) * (t < 0 ? -t : t) * -8.5 + 10);
                }, et(2, t => g(e, Z.translate(9 * (t + 2) - 110 + (1 & t), 1.7, -12)));
              }),
              M(t => {
                t.g = () => {
                  let t = Math.sin(1.5 * V);
                  return Z.translate.call(
                    Z,
                    0,
                    -2,
                    -8.5 * $((1 - ft[10].h) * (1 - at(ft[10].h, ft[11].h)), at(ft[10].h, ft[11].h) * (t < 0 ? -t : t))
                      + 10,
                  );
                }, et(3, t => g(e, Z.translate(9 * t - 106, 1.7, -12)));
              }),
              g(
                m(f(
                  h(
                    o(i(u), Z.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                    o(i(u), Z.translate(26.5, -.6, 10).scale(17, 2, .5)),
                  ),
                  ...et(4, t => o(i(u), Z.translate(13 + 9 * t + (1 & t), -.8, 9).scale(1.35, 1.35, 9))),
                  ...et(3, t => o(i(u), Z.translate(17 + 9 * t, -.8, 9).scale(1.35, 1.35, 9))),
                )),
                Z.translate(-123, 0, -12),
                c(.5, .5, .6, .2),
              ),
              g(i(5), Z.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), c(.25, .25, .35, 1)),
              g(i(u), Z.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), c(.8, .8, .8, .2)),
              g(i(6), Z.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), c(.6, .5, .7, .2)),
              v(Z.translate(-116, -1.4, -18).rotate(0, 180)),
              et(3, t => {
                g(W, Z.translate(12 * t - 109, -9, -12), c(.6, .6, .6, .3)),
                  g(W, Z.translate(-77, -9, -12 * t - 20).rotate(0, 90), c(.6, .6, .6, .3));
              }),
              g(m(
                f(
                  o(i(12), Z.translate(-77, -13.9, -12).scale(4, 18.2, 4), c(.7, .7, .7, .2)),
                  o(i(u), Z.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), c(.4, .5, .6, .2)),
                  o(i(u), Z.translate(-77, 0, -14).scale(1.5, 2.2, 2), c(.4, .5, .6, .2)),
                  o(i(12), Z.translate(-77, 2.8, -12).scale(3, 5, 3), c(.4, .5, .6, .2)),
                ),
              )),
              g(i(u), Z.translate(-115.5, -17, -12).scale(.5, 15, 2.2), c(.6, .6, .6, .3)),
              g(i(u), Z.translate(-77, -17, -50.5).scale(2.2, 15, .5), c(.6, .6, .6, .3)),
              g(i(u), Z.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), c(.6, .6, .6, .3)),
              g(m(
                f(
                  o(i(u), Z.translate(-93, -5.8, -40).scale(9, 1, 5), c(.8, .8, .8, .1)),
                  o(i(9), Z.translate(-98, -5.8, -40).scale(3, 8, 3), c(.7, .7, .7, .2)),
                ),
              )),
              g(i(9), Z.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), c(.5, .5, .5, .3)),
              v(Z.translate(-98, -4.4, -40).rotate(0, 90)),
              p(Z.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
              g(m(
                f(
                  h(
                    o(i(6, 0, 0, .6), Z.translate(-100, .7, 105.5).scale(8, 1, 11), c(.7, .7, .7, .2)),
                    o(i(u), Z.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), c(.7, .7, .7, .2)),
                    o(i(u), Z.translate(-91.2, .7, 107).scale(3, 1, 3.3), c(.7, .7, .7, .2)),
                  ),
                  o(i(5), Z.translate(-100, .7, 113).scale(4, 3, 4), c(.7, .7, .7, .2)),
                ),
              )),
              et(4, a =>
                M(t => {
                  t.g = () => {
                    let t = at(ft[8].i, ft[12].i);
                    return Z.translate(
                      (2 < a ? 2 * (1 - t) + t : 0) - 100,
                      t * Math.sin(1.3 * V + 1.7 * a) * (3 + a / 3) + .7,
                      115 + (1 & a ? -1 : 1) * (1 - ft[8].i) * (1 - ft[12].i) * -7
                        + (t < .05 ? .05 : t) * Math.cos(1.3 * V + 7 * a) * (4 - 2 * (1 - a / 3)),
                    );
                  },
                    g(
                      i(6),
                      Z.translate(-14.6 - 4.8 * a - (2 < a ? 2 : 0), -a / 2.3, -21.5).scale(2.6, 1, 2.5),
                      c(.5 - a / 8, a / 12 + .5, .7, .3),
                    );
                })),
              M(t => {
                t.g = () => {
                  let t = at(ft[8].i, ft[12].i);
                  return Z.translate(2.5 * (1 - t) - 139.7, -3 * (1 - ft[8].h) + t * Math.sin(.8 * V) * -1 - 1.8, 93.5)
                    .rotateSelf(Math.cos(1.3 * V) * (3 * t + 3), 0);
                },
                  g(m(
                    f(o(i(10), Z.scale(6, 2, 6), c(.1, .6, .5, .3)), o(i(10), Z.scale(3.3, 6, 3.3), c(.1, .6, .5, .5))),
                  )),
                  n = Z.translate(-7.5).rotate(0, 90),
                  g(i(15), n.scale(3, 2.3, 3), c(.4, .4, .4, .3)),
                  g(i(10), n.scale(2, 2.5, 2), c(.3, .8, .7, .3)),
                  g(i(5), n.scale(1, 3), c(.5, .5, .5, .5)),
                  v(n.translate(0, 3.4).rotate(0, 180)),
                  [-1, 1].map(t =>
                    g(
                      L,
                      Z.rotate(90 * -t, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3),
                      c(1, 1, .8, .2),
                    )
                  ),
                  p(Z.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
              }),
              [-1, 1].map(a => {
                g(i(15, 1), Z.translate(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), c(.6, .24, .2, .5)),
                  [7.2, 1.5].map(t =>
                    g(i(15, 1), Z.translate(-7.5 * a - 100, t + .7, 96).scale(1.1, .5, 1.1), c(.5, .24, .2, .4))
                  ),
                  g(L, Z.translate(-5 * a - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90), c(1, 1, .8)),
                  g(
                    m(f(
                      o(i(u), Z.translate(-4 * a, 3.5, -.5).scale(4, 4, .7), c(.5, .5, .5, .4)),
                      o(i(u), Z.scale(3, 3, 10), c(.6, .24, .2, .5)),
                      o(i(30, 1), Z.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), c(.6, .24, .2, .5)),
                      o(i(5), Z.translate(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), c(.6, .24, .2, .5)),
                      o(i(5), Z.translate(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), c(.6, .24, .2, .5)),
                    )),
                    Z.translate(a - 100, .7, 97),
                  );
              }),
              M(t => {
                t.g = () => Z.translate(-100, .6 - 6 * ft[12].h, 96.5).scale(.88, 1.2), g(l);
              }),
              [
                ...o(i(28, 1), Z.scale(8, 1, 8), c(.45, .45, .45, .2)),
                ...o(i(5), Z.translate(0, 1).scale(1, .2), c(.3, .3, .3, .2)),
              ]);
          M(t => {
            t.g = () => Z.translate(-80, 1, 106).rotate(0, 40 + zt),
              g(m(
                f(
                  o(i(28, 1), Z.scale(8, 1, 8), c(.45, .45, .45, .2)),
                  o(i(u), Z.translate(0, 0, -5.5).scale(1.5, 3, 2.5), c(.45, .45, .45, .2)),
                ),
              )),
              g(i(8), Z.translate(0, 2).scale(3, 1.5, 3), c(.7, .7, .7, .1)),
              g(i(5), Z.translate(0, 2).scale(1, 2), c(.3, .3, .3, .2)),
              p(Z.translate(0, 3), ...A(10).map(({ x: t, z: a }) => [5.6 * t, 5.6 * a, 2.5]));
          }),
            M(t => {
              t.g = () => Z.translate(-64, 1, 106).rotate(0, z),
                g(m(
                  f(
                    o(i(28, 1), Z.translate(0, 2).scale(8, 1, 8), c(.35, 0, 0, .3)),
                    o(i(u), Z.scale(9, 5, 2), c(.3, 0, 0, .3)),
                  ),
                )),
                g(s),
                [-1, 1].map(t =>
                  g(
                    L,
                    Z.rotate(0, 90).translate(-5 * t, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90),
                    c(1, 1, .8),
                  )
                );
            }),
            M(t => {
              t.g = () => Z.translate(-48, 1, 106).rotate(0, 180 - z),
                g(m(
                  f(
                    o(i(30, 1), Z.translate(0, 2).scale(8, 1, 8), c(.35, 0, 0, .3)),
                    o(i(u), Z.translate(7).scale(9, 5, 2), c(.3, 0, 0, .3)),
                    o(i(u), Z.translate(0, 0, 7).scale(2, 5, 9), c(.3, 0, 0, .3)),
                  ),
                )),
                g(s);
            }),
            M(t => {
              t.g = () => Z.translate(-48, 1, 90).rotate(0, 270 + z),
                g(m(
                  f(
                    o(i(30, 1), Z.translate(0, 2).scale(8, 1, 8), c(.35, 0, 0, .3)),
                    o(i(u), Z.translate(7).scale(9, 5, 2), c(.3, 0, 0, .3)),
                    o(i(u), Z.translate(0, 0, -7).scale(2, 5, 9), c(.3, 0, 0, .3)),
                  ),
                )),
                g(s);
            }),
            g(i(u), Z.translate(-56, 1, 106).scale(.7, .8, 2.5), c(.7, .7, .7, .2)),
            g(i(u), Z.translate(-48, 1, 98).scale(2.5, .8, .7), c(.7, .7, .7, .2)),
            g(i(u), Z.translate(-39, .4, 90).scale(2, 1, 2), c(.7, .7, .7, .3)),
            g(i(u), Z.translate(-34.2, .4, 90).scale(3, 1, 3), c(.7, .7, .7, .3)),
            v(Z.translate(-34, 2.7, 96).rotate(-12, 0)),
            g(i(5), Z.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), c(.2, .5, .5, .6)),
            [c(.1, .55, .45, .2), c(.2, .5, .5, .3), c(.3, .45, .55, .4)].map((a, e) =>
              M(t => {
                t.g = () =>
                  Z.translate(
                    0,
                    (1 - ft[13].i) * (1 - ft[14].i) * 3 + at(ft[13].i, ft[14].i) * Math.sin(1.5 * V + 1.5 * e) * 4.7,
                  ),
                  g(
                    i(8),
                    Z.translate(-23.5, e / 1.5 - .4, 90 + 6.8 * e).scale(3.6, 2 - e / 1.5, 3.6).rotate(0, 22.5),
                    a,
                  ),
                  2 === e && g(i(6), Z.translate(-29, .4, 90).scale(2.4, 1, 2.8), c(.6, .7, .6, .3)),
                  1 === e
                  && g(
                    i(u),
                    Z.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1),
                    c(.6, .6, .7, .3),
                  );
              })
            ),
            g(m(
              f(
                o(i(6, 0, 0, .3), Z.translate(0, -.92, 95).scale(14, 2, 14), c(.8, .8, .8, .2)),
                o(i(5), Z.translate(0, 0, 95).scale3d(6), c(.3, .3, .3, .5)),
              ),
            )),
            [8, -6.1].map((a, e) =>
              et(
                3,
                t =>
                  g(
                    W,
                    Z.translate(6 * t - 6, a - (1 & t), 111 - .2 * (1 & t) - e),
                    1 & t ? c(.5, .5, .5, .3) : c(.35, .35, .35, .5),
                  ),
              )
            ),
            [-1, 1].map(t => g(L, Z.translate(-8 * t, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), c(1, 1, .8))),
            v(Z.translate(0, 1.7, 82).rotate(0, 180)),
            g(i(5), Z.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), c(.5, .3, .3, .4)),
            g(m(
              f(
                h(
                  o(i(u), Z.translate(0, 16, 110.5).scale(12, 1, 3), c(.5, .3, .3, .4)),
                  o(i(u), Z.translate(0, 16, 111).scale(3, 1, 3.8), c(.5, .3, .3, .4)),
                ),
                o(i(5), Z.translate(0, 16, 103.5).scale(5.5, 5, 5.5), c(.5, .3, .3, .4)),
              ),
            )),
            M(t => {
              t.g = () => {
                let t = Math.sin(V);
                return Z.translate(-2 * t).rotate(0, 0, 25 * t);
              },
                g(i(3), Z.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), c(.5, .3, .3, .4)),
                [22, 30].map(t => {
                  g(i(6), Z.translate(0, 16, t + 95).scale(3, 1, 2.3).rotate(0, 90), c(.7, .7, .7, .4)),
                    g(i(u), Z.translate(0, 6.2, t + 95).scale(.5, 11, .5), c(.5, .3, .3, .4));
                });
            }),
            g(i(6), Z.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), c(.5, .6, .7, .3)),
            g(i(u), Z.translate(0, 16, 129).scale(1.5, 1, 2), c(.5, .6, .7, .3)),
            g(i(7), Z.translate(0, 16.2, 133).scale(5, 1, 5), c(.4, .5, .6, .4)),
            M(t => {
              t.g = () => {
                let t = at(at((ft[14].h + ft[14].i) / 2, ft[13].i), (ft[15].h + ft[15].i) / 2);
                return Z.translate(0, 16 * t, 8.5 * tt(2 * t - 1) + 95);
              },
                g(i(5), Z.scale(5, 1.1, 5), c(.5, .3, .3, .4)),
                g(i(5), Z.scale(5.5, .9, 5.5), c(.25, .25, .25, .4)),
                v(Z.translate(0, 1.5, -1).rotate(0, 180));
            }),
            p(Z.translate(0, 3, 95), ...A(9).map(({ x: t, z: a }) => [9 * t, 9 * a, 4])),
            p(Z.translate(0, 19, 134), [0, 0, 3.5]);
        }),
        Xt = M(() => {
          Rt = [-1, 1].map(t =>
            M(() => {
              g(i(10, 1), Z.translate(.3 * t, -.8).scale(.2, .7, .24), c(1, .3, .4));
            })
          ),
            [0, 180].map(t =>
              g(L, Z.rotate(0, t).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), c(1, 1, .8))
            ),
            g(P(20), Z.translate(0, 1).scale(.5, .5, .5), c(1, .3, .4));
          let a = o(
            m(f(i(15, 1), o(i(u), Z.translate(0, 0, 1).scale(2, 2, .5)))),
            Z.rotate(-90, 0).scale(.1, .05, .1),
            c(.3, .3, .3),
          );
          [-1, 1].map(t => g(a, Z.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t))),
            g(i(u), Z.translate(0, .9, .45).scale(.15, .02, .06), c(.3, .3, .3)),
            g(P(20), Z.scale(.7, .8, .55), c(1, .3, .4));
        }),
        H = M(() => {
          g(i(6, 1), Z.scale(.13, 1.4, .13), c(.3, .3, .5, .1)),
            g(i(8), Z.translate(0, 1).scale(.21, .3, .21), c(1, .5, .2)),
            g(i(3), Z.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), c(.2, .2, .2, .1));
        }, 0),
        B = M(() => {
          g(i(6), Z.scale(.8, 1, .8), c(1, .3, .5));
        }, 0),
        Q = M(() => {
          g(
            P(40, 30, (t, a, e) => {
              let l = a / 30, r = .05 * t * Math.PI, s = l ** .6 * Math.PI / 2;
              return t = l * l * Math.sin(t * Math.PI * .35) / 4,
                29 === a
                  ? { x: e.D = 0, y: -.5, z: 0 }
                  : {
                    x: Math.cos(r) * Math.sin(s),
                    y: Math.cos(l * Math.PI) - l - t,
                    z: Math.sin(r) * Math.sin(s) + Math.sin(t * Math.PI * 2) / 4,
                  };
            }),
            Z.scale3d(.7),
            c(1, 1, 1),
          ), [-1, 1].map(t => g(P(15), Z.translate(.16 * t, .4, -.36).scale3d(.09)));
        }, 0);
    })();
});
