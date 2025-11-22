(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [387],
  {
    5409: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/about-me',
        function () {
          return t(8692);
        },
      ]);
    },
    5225: function (n, e, t) {
      'use strict';
      t.d(e, {
        Z: function () {
          return C;
        },
      });
      var r = t(5893),
        i = (t(7294), t(262)),
        o = t(63),
        a = t(4046),
        c = t(8790),
        s = t(6385);
      function u(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } }))
        );
      }
      function l() {
        var n = u([
          '\n    //background-image: linear-gradient(to right, #8E2DE2 , #4A00E0);\n    background: ',
          '\n    box-shadow: 0 2px #FFF053;\n',
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      function f() {
        var n = u([
          '\n  @media (min-width: 1025px) {\n    max-width: 960px;\n  }\n  margin-right: auto;\n  margin-left: auto;\n  padding: 0;\n  overflow: hidden;\n',
        ]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = u([
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: auto;\n  font-size: 24px;\n  margin: 6px 18px 6px 0;\n  text-decoration: none;\n  border-radius: 2px;\n  border: 3px solid #bd93f9;\n  color: inherit;\n  @media (max-width: 1024px) {\n    margin: 6px 18px 6px 16px;\n  }\n',
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = u(['\n  padding: 12px 12px 12px 0;\n  margin: auto;\n']);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function h() {
        var n = u(['\n  margin-left: ', ';\n  margin-right: ', ';\n']);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      function g() {
        var n = u([
          '\n  height: 25px;\n  width: 25px;\n  padding: 12px;\n  display: block;\n  text-align: center;\n  text-decoration: none;\n  transition: 0.5s;\n  -o-transition: 0.5s;\n  -ms-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -webkit-transition: 0.5s;\n\n  &:hover {\n    transform: scale(1.1);\n    background-color: ',
          ';\n    box-shadow: 0 0 8px 2px ',
          ';\n  }\n\n  @media (max-width: 1024px) {\n    padding: 12px 6px;\n  }\n',
        ]);
        return (
          (g = function () {
            return n;
          }),
          n
        );
      }
      function b() {
        var n = u(['\n  max-width: 100%;\n  max-height: 100%;\n']);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      function m() {
        var n = u(['\n  text-decoration: none;\n']);
        return (
          (m = function () {
            return n;
          }),
          n
        );
      }
      var x = o.ZP.div(l(), c.Z.DARK_SLATE_BLUE),
        y = (0, o.ZP)(s.X2)(f()),
        v = o.ZP.a(p()),
        j = o.ZP.div(d()),
        w = (0, o.ZP)(s.X2)(
          h(),
          function (n) {
            return n.stickRight ? 'auto' : 'unset';
          },
          function (n) {
            return n.stickLeft ? 'auto' : 'unset';
          },
        ),
        P = o.ZP.a(g(), c.Z.DARK_PURPLE, function (n) {
          return n.bgColor;
        }),
        k = o.ZP.img(b()),
        O = o.ZP.a(m()),
        _ = function (n) {
          return n.map(function (n) {
            var e = n.title,
              t = n.bgColor,
              i = n.imgUrl,
              o = n.link;
            return (0, r.jsx)(
              P,
              {
                href: o,
                bgColor: t,
                children: (0, r.jsx)(k, { alt: e, src: i, bgColor: t }),
              },
              e,
            );
          });
        };
      var E = function () {
        return (0, r.jsx)(x, {
          children: (0, r.jsxs)(y, {
            children: [
              (0, r.jsxs)(s.X2, {
                children: [
                  (0, r.jsx)(i.Link, {
                    to: 'home',
                    href: '/',
                    passHref: !0,
                    children: (0, r.jsx)(v, { children: 'K' }),
                  }),
                  ((n = a.sh),
                  n.map(function (n) {
                    var e = n.title,
                      t = n.bgColor,
                      o = n.link;
                    return (0, r.jsx)(
                      j,
                      {
                        children: (0, r.jsx)(i.Link, {
                          to: o,
                          href: o,
                          passHref: !0,
                          children: (0, r.jsx)(O, {
                            children: (0, r.jsx)(s.Dr, {
                              size: '18px',
                              color: t,
                              children: e,
                            }),
                          }),
                        }),
                      },
                      e,
                    );
                  })),
                ],
              }),
              (0, r.jsx)(w, { stickRight: !0, children: _(a.Ok) }),
            ],
          }),
        });
        var n;
      };
      var C = function (n) {
        return (0, r.jsxs)('div', { children: [(0, r.jsx)(E, {}), n.children] });
      };
    },
    9825: function (n, e, t) {
      'use strict';
      var r = t(5893),
        i = t(7294),
        o = t(5697),
        a = t.n(o),
        c = t(63),
        s = t(5711);
      function u(n) {
        if (void 0 === n)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return n;
      }
      function l(n, e) {
        for (var t = 0; t < e.length; t++) {
          var r = e[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(n, r.key, r);
        }
      }
      function f(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function p(n) {
        return (
          (p = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (n) {
                return n.__proto__ || Object.getPrototypeOf(n);
              }),
          p(n)
        );
      }
      function d(n, e) {
        return !e || ('object' !== b(e) && 'function' !== typeof e) ? u(n) : e;
      }
      function h(n, e) {
        return (
          (h =
            Object.setPrototypeOf ||
            function (n, e) {
              return (n.__proto__ = e), n;
            }),
          h(n, e)
        );
      }
      function g(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } }))
        );
      }
      var b = function (n) {
        return n && 'undefined' !== typeof Symbol && n.constructor === Symbol
          ? 'symbol'
          : typeof n;
      };
      function m(n) {
        var e = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (n) {
            return !1;
          }
        })();
        return function () {
          var t,
            r = p(n);
          if (e) {
            var i = p(this).constructor;
            t = Reflect.construct(r, arguments, i);
          } else t = r.apply(this, arguments);
          return d(this, t);
        };
      }
      function x() {
        var n = g([
          "\n    cursor: pointer;\n    & > :last-child::after {\n        content: '",
          "';\n        // animation: blinker 1.2s linear infinite;\n        color: #FFF053;\n        font-family: monospace;\n        float: ",
          ';\n        display: inline-block;\n        padding-left: 12px;\n    };\n    @keyframes blinker {\n        50% {\n            opacity: 0;\n        }\n    }\n',
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      function y() {
        var n = g(['\n  margin: ', ';\n']);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      var v = c.ZP.div(
          x(),
          function (n) {
            return !0 === n.collapsed
              ? n.style.collapsedAccordion
              : n.style.expandedAccordion;
          },
          function (n) {
            return n.style.accordionPosition;
          },
        ),
        j = (0, c.ZP)(s.S$)(y(), function (n) {
          return n.style && n.style.margin ? n.style.margin : 'inherit';
        }),
        w = (function (n) {
          !(function (n, e) {
            if ('function' !== typeof e && null !== e)
              throw new TypeError('Super expression must either be null or a function');
            (n.prototype = Object.create(e && e.prototype, {
              constructor: { value: n, writable: !0, configurable: !0 },
            })),
              e && h(n, e);
          })(a, n);
          var e,
            t,
            i,
            o = m(a);
          function a(n) {
            var e;
            !(function (n, e) {
              if (!(n instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, a),
              f(u((e = o.call(this, n))), 'toggleDetailView', function () {
                e.setState(function (n) {
                  return { collapsed: !n.collapsed };
                });
              });
            var t = n.collapsed;
            return (e.state = { collapsed: t }), e;
          }
          return (
            (e = a),
            (t = [
              {
                key: 'render',
                value: function () {
                  var n = this,
                    e = this.props,
                    t = e.header,
                    i = e.body,
                    o = e.style.global,
                    a = void 0 === o ? {} : o,
                    c = this.state.collapsed;
                  return (0, r.jsxs)(j, {
                    style: a,
                    children: [
                      (0, r.jsx)(v, {
                        onClick: function () {
                          return n.toggleDetailView();
                        },
                        collapsed: c,
                        style: a,
                        children: t,
                      }),
                      !c && i,
                    ],
                  });
                },
              },
            ]) && l(e.prototype, t),
            i && l(e, i),
            a
          );
        })(i.PureComponent);
      f(w, 'propTypes', {
        header: a().object.isRequired,
        body: a().object.isRequired,
        collapsed: a().bool,
        style: a().shape({}),
      }),
        f(w, 'defaultProps', {
          collapsed: !0,
          style: {
            global: {
              collapsedAccordion: '\u258c',
              expandedAccordion: '',
              accordionPosition: null,
            },
          },
        }),
        (e.Z = w);
    },
    6385: function (n, e, t) {
      'use strict';
      t.d(e, {
        X2: function () {
          return f;
        },
        xv: function () {
          return g;
        },
        JX: function () {
          return p;
        },
        Dr: function () {
          return b;
        },
        Vx: function () {
          return h;
        },
        Wh: function () {
          return d;
        },
      });
      var r = t(63);
      function i(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } }))
        );
      }
      function o() {
        var n = i([
          '\n  box-sizing: border-box;\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n',
        ]);
        return (
          (o = function () {
            return n;
          }),
          n
        );
      }
      function a() {
        var n = i([
          '\n  box-sizing: border-box;\n  display: flex;\n  flex: ',
          ';\n  flex-direction: column;\n\n  @media (max-width: 767px) {\n    flex-basis: ',
          ';\n  }\n',
        ]);
        return (
          (a = function () {
            return n;
          }),
          n
        );
      }
      function c() {
        var n = i([
          '\n  padding-left: ',
          ';\n  margin: 0px;\n  @media (max-width: 767px) {\n    padding-left: 12px;\n  }\n',
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function s() {
        var n = i([
          "\n  color: #54c9ff;\n  margin-bottom: 0.7em;\n  list-style: none;\n  &:before {\n    content: '~';\n    margin-right: 1rem;\n  }\n  span {\n    color: #fff;\n  }\n",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      function u() {
        var n = i(['\n  font-size: ', ';\n  color: ', ';\n']);
        return (
          (u = function () {
            return n;
          }),
          n
        );
      }
      function l() {
        var n = i(['\n  font-size: ', ';\n  color: ', ' !important;\n']);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      var f = r.ZP.div(o()),
        p = r.ZP.div(
          a(),
          function (n) {
            return n.flexValue ? n.flexValue : '0 1 auto';
          },
          function (n) {
            return n.mFlexbasis ? n.mFlexbasis : 'auto';
          },
        ),
        d = r.ZP.ul(c(), function (n) {
          return n.startPadding ? n.startPadding : '26px';
        }),
        h = r.ZP.li(s()),
        g = r.ZP.p(
          u(),
          function (n) {
            return n.size ? n.size : '18px';
          },
          function (n) {
            return n.color ? n.color : 'inherit';
          },
        ),
        b = r.ZP.span(
          l(),
          function (n) {
            return n.size ? n.size : '18px';
          },
          function (n) {
            return n.color;
          },
        );
    },
    5711: function (n, e, t) {
      'use strict';
      t.d(e, {
        S$: function () {
          return l;
        },
        PU: function () {
          return u;
        },
      });
      var r = t(63);
      function i(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } }))
        );
      }
      function o() {
        var n = i(['\n    height: inherit;\n    margin: 0 auto;\n    padding: 16px;\n']);
        return (
          (o = function () {
            return n;
          }),
          n
        );
      }
      function a() {
        var n = i([
          '\n  // controls base layout of all pages excluding nav\n  @media (min-width: 1025px) {\n    max-width: 960px;\n    padding: 0;\n  }\n  margin: auto;\n',
        ]);
        return (
          (a = function () {
            return n;
          }),
          n
        );
      }
      function c() {
        var n = i(['\n  margin-bottom: 2em !important;\n']);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      var s = r.ZP.div(o()),
        u = (0, r.ZP)(s)(a()),
        l = r.ZP.div(c());
    },
    8790: function (n, e) {
      'use strict';
      e.Z = {
        PINK: '#EA4C89',
        LIGHT_WHITE: '#E7E7E7',
        WHITE: '#FFFFFF',
        GREY: '#999999',
        LIGHT_PURPLE: '#484959',
        DARK_PURPLE: '#1b1c30',
        NEON_PURPLE: '#8728e2',
        DARK_BLUE: '#4A00E0',
        L_TINT_PURPLE: '#c3a5ff',
        NIGHT_SHADE: '#282A36',
        DARK_SLATE_BLUE: '#44475A',
        PURPLE_HIGHLIGHT: '#BD93F9',
      };
    },
    4046: function (n, e, t) {
      'use strict';
      t.d(e, {
        Ok: function () {
          return r;
        },
        sh: function () {
          return i;
        },
        XU: function () {
          return o;
        },
      });
      var r = [
          {
            title: 'linked-in',
            imgUrl: 'https://img.icons8.com/ios-glyphs/128/ffffff/linkedin.png',
            link: 'https://www.linkedin.com/in/abhishek-kasana-4a7836106',
            bgColor: '#0073a4',
          },
          {
            title: 'stackoverflow',
            imgUrl: 'https://img.icons8.com/ios/128/ffffff/stackoverflow-filled.png',
            link: 'https://stackoverflow.com/users/9057473/',
            bgColor: '#f48024',
          },
          {
            title: 'twitter',
            imgUrl: 'https://img.icons8.com/ios-glyphs/128/ffffff/twitter-circled.png',
            link: 'https://twitter.com/abhishekasana',
            bgColor: '#00aced',
          },
          {
            title: 'github',
            imgUrl: 'https://img.icons8.com/ios-glyphs/128/ffffff/github.png',
            link: 'https://github.com/abhishekasana',
            bgColor: '#24292d',
          },
        ],
        i = [{ title: 'about', imgUrl: null, link: '/about-me', bgColor: '#fff' }],
        o = [
          {
            title: 'Solving schedule collisions with geometric algorithms',
            description: 'How the Line Sweep algorithm simplified scheduling conflicts',
            link: '/blog/solving-time-collisions-with-geometric-algorithms',
            icon: 'https://img.icons8.com/ios/256/BD93F9/graph--v1.png',
            subscript: 'Quant | 15 min read',
            postedOn: '2025-05-13',
          },
          {
            title: 'Currency Arbitrage Explained',
            description:
              'Using Graph Theory to Detect Arbitrage Opportunities in Currency Markets',
            link: '/blog/currency-arbitrage',
            icon: 'https://img.icons8.com/ios/256/BD93F9/graph--v1.png',
            subscript: 'Quant | 15 min read',
            postedOn: '2024-08-16',
          },
          {
            title: 'Text Search in PostgreSQL',
            description: 'Implement wildcard & fuzzy search in PostgreSQL.',
            link: '/blog/text-search-in-postgresql',
            icon: 'https://img.icons8.com/ios/256/BD93F9/database.png',
            subscript: 'Database | 20 min read',
            postedOn: '2022-06-01',
          },
          {
            title: 'Github Pages with NextJS',
            description:
              'Setup your own free website with github pages using Next.js framework.',
            link: '/blog/github-pages-nextjs',
            icon: 'https://img.icons8.com/pastel-glyph/256/BD93F9/website--v2.png',
            subscript: 'Js | 15 min read',
            postedOn: '2022-04-25',
          },
          {
            title: 'Birthday Attack',
            description: 'What is a Birthday Attack in cryptography?',
            link: '/blog/birthday-attack',
            icon: 'https://img.icons8.com/material-sharp/256/BD93F9/cyber-security.png',
            subscript: 'Cryptography | 10 min read',
            postedOn: '2022-03-30',
          },
        ];
    },
    8692: function (n, e, t) {
      'use strict';
      t.r(e),
        t.d(e, {
          default: function () {
            return V;
          },
        });
      var r = t(5893),
        i = t(7294),
        o = t(5225),
        a = t(5697),
        c = t.n(a),
        s = t(63),
        u = t(6385),
        l = t(5711);
      function f(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } }))
        );
      }
      function p() {
        var n = f([
          '\n  font-size: 32px;\n  font-weight: normal;\n  margin: 0 0 0.5em;\n  & > :first-child {\n    color: #fff053;\n  }\n\n  @media (max-width: 767px) {\n    font-size: 26px;\n  }\n',
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = f([
          '\n  display: inline-block;\n  vertical-align: middle;\n  opacity: ',
          ';\n',
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      var h = s.ZP.h2(p()),
        g = s.ZP.span(d(), function (n) {
          return n.transparency ? n.transparency : 1;
        });
      function b(n) {
        var e = n.title;
        return (0, r.jsxs)(h, {
          children: [
            (0, r.jsx)(g, { transparency: 0.5, children: 'zd@kasana:~$' }),
            (0, r.jsxs)(g, { children: ['\xa0', e] }),
          ],
        });
      }
      (b.propTypes = { title: c().string.isRequired }), (b.defaultProps = {});
      var m = b,
        x = t(9825);
      function y(n) {
        if (void 0 === n)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return n;
      }
      function v(n, e) {
        if (!(n instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      function j(n, e) {
        for (var t = 0; t < e.length; t++) {
          var r = e[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(n, r.key, r);
        }
      }
      function w(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function P(n) {
        return (
          (P = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (n) {
                return n.__proto__ || Object.getPrototypeOf(n);
              }),
          P(n)
        );
      }
      function k(n, e) {
        return !e || ('object' !== _(e) && 'function' !== typeof e) ? y(n) : e;
      }
      function O(n, e) {
        return (
          (O =
            Object.setPrototypeOf ||
            function (n, e) {
              return (n.__proto__ = e), n;
            }),
          O(n, e)
        );
      }
      var _ = function (n) {
        return n && 'undefined' !== typeof Symbol && n.constructor === Symbol
          ? 'symbol'
          : typeof n;
      };
      function E(n) {
        var e = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (n) {
            return !1;
          }
        })();
        return function () {
          var t,
            r = P(n);
          if (e) {
            var i = P(this).constructor;
            t = Reflect.construct(r, arguments, i);
          } else t = r.apply(this, arguments);
          return k(this, t);
        };
      }
      function C() {
        var n,
          e,
          t =
            ((n = ['\n    text-decoration: none;\n']),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } }),
            ));
        return (
          (C = function () {
            return t;
          }),
          t
        );
      }
      var z = s.ZP.a(C()),
        R = (function (n) {
          !(function (n, e) {
            if ('function' !== typeof e && null !== e)
              throw new TypeError('Super expression must either be null or a function');
            (n.prototype = Object.create(e && e.prototype, {
              constructor: { value: n, writable: !0, configurable: !0 },
            })),
              e && O(n, e);
          })(a, n);
          var e,
            t,
            i,
            o = E(a);
          function a() {
            var n;
            return (
              v(this, a),
              w(y((n = o.apply(this, arguments))), 'renderTask', function (n) {
                return (0, r.jsx)(u.Wh, {
                  children: n.map(function (n) {
                    return (0, r.jsxs)(
                      u.Vx,
                      {
                        children: [
                          (0, r.jsx)(u.Dr, { children: n.title[0] }),
                          (0, r.jsx)(z, {
                            href: n.link,
                            children: (0, r.jsx)(u.Dr, {
                              size: '18px',
                              color: n.hexCode,
                              children: n.highlight,
                            }),
                          }),
                          (0, r.jsx)(u.Dr, { size: '18px', children: n.title[1] }),
                        ],
                      },
                      n.title,
                    );
                  }),
                });
              }),
              n
            );
          }
          return (
            (e = a),
            (t = [
              {
                key: 'render',
                value: function () {
                  var n = this.props,
                    e = n.listHeader,
                    t = n.taskList,
                    i = n.collapsed,
                    o = t.map(function (n) {
                      return (function (n) {
                        for (var e = 1; e < arguments.length; e++) {
                          var t = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(t);
                          'function' === typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                              Object.getOwnPropertySymbols(t).filter(function (n) {
                                return Object.getOwnPropertyDescriptor(t, n).enumerable;
                              }),
                            )),
                            r.forEach(function (e) {
                              w(n, e, t[e]);
                            });
                        }
                        return n;
                      })({}, n, { title: n.title.split(n.highlight) });
                    });
                  return (0, r.jsx)(l.S$, {
                    children: (0, r.jsx)(x.Z, {
                      header: (0, r.jsx)(m, { title: e }),
                      body: this.renderTask(o),
                      collapsed: i,
                    }),
                  });
                },
              },
            ]),
            t && j(e.prototype, t),
            i && j(e, i),
            a
          );
        })(i.PureComponent);
      w(R, 'propTypes', {
        listHeader: c().string.isRequired,
        taskList: c().arrayOf(c().object).isRequired,
        collapsed: c().bool,
      }),
        w(R, 'defaultProps', { collapsed: !0 });
      var S = R,
        D = [
          {
            title:
              '2025 / Present - Senior Software Engineer - Rippling - Bengaluru, India',
            highlight: 'Rippling',
            hexCode: '#DF5DFF',
            link: 'http://www.rippling.com',
          },
          {
            title:
              '2018 / Present - Lead Software Developer - Cuemath - Bengaluru, India',
            highlight: 'Cuemath',
            hexCode: '#DF5DFF',
            link: 'https://www.cuemath.com',
          },
          {
            title: '2017 - Software Developer Intern - Cuemath - Bengaluru, India',
            highlight: 'Cuemath',
            hexCode: '#DF5DFF',
            link: 'https://www.cuemath.com',
          },
        ],
        T = [
          {
            title: 'Languages',
            value: [
              'Python',
              'Javascript',
              'Java',
              'Node.js',
              'HTML5',
              'CSS3',
              'C++',
              'SQL',
            ],
          },
          {
            title: 'Tools/OS',
            value: [
              'Vim',
              'Bash',
              'Docker (Currently having fun with)',
              'Ubuntu(Linux)',
              'Kali',
              'Windows',
            ],
          },
          {
            title: 'Frameworks',
            value: ['Django', 'NEXT JS', 'Android', 'Flask', 'React.js'],
          },
        ];
      function F() {
        var n,
          e,
          t =
            ((n = [
              '\n    font-size: 24px;\n    margin: 0 0 0.5em;\n    color: #54C9FF;\n',
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } }),
            ));
        return (
          (F = function () {
            return t;
          }),
          t
        );
      }
      var Z = s.ZP.h3(F());
      var L = function () {
        return (0, r.jsx)(l.S$, {
          children: (0, r.jsx)(x.Z, {
            header: (0, r.jsx)(m, { title: 'cat skills.md', enterSuffix: !0 }),
            body: (0, r.jsx)(u.X2, {
              children: T.map(function (n) {
                return (0, r.jsxs)(
                  u.JX,
                  {
                    flexbasis: '33%',
                    children: [
                      (0, r.jsx)(Z, { children: n.title }),
                      (0, r.jsx)(u.Wh, {
                        startPadding: '0px',
                        children: n.value.map(function (n) {
                          return (0, r.jsx)(
                            u.Vx,
                            { children: (0, r.jsx)('span', { children: n }) },
                            n,
                          );
                        }),
                      }),
                    ],
                  },
                  n.title,
                );
              }),
            }),
          }),
        });
      };
      var A = function () {
        return (0, r.jsxs)(l.S$, {
          children: [
            (0, r.jsx)(m, { title: 'whoami' }),
            (0, r.jsxs)(u.xv, {
              children: [
                "I'm Abhishek Kasana, a programmer and tinkerer with a deep interest in operating systems, compilers, networking, and security engineering.",
                (0, r.jsx)('br', {}),
                'I enjoy untangling complexity and exploring the inner workings of systems.',
                (0, r.jsx)('br', {}),
                (0, r.jsx)('br', {}),
                "My blog is where I share insights on the complex systems I've worked on or discovered, offering a glimpse into the details for those who share my curiosity.",
              ],
            }),
          ],
        });
      };
      function I() {
        var n,
          e,
          t =
            ((n = ['\n  text-decoration: none;\n']),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } }),
            ));
        return (
          (I = function () {
            return t;
          }),
          t
        );
      }
      var U = s.ZP.a(I());
      var B = function () {
        return (0, r.jsxs)(l.S$, {
          children: [
            (0, r.jsx)(m, { title: 'cat Contact.md' }),
            (0, r.jsxs)(u.xv, {
              children: [
                'You can find me on \xa0',
                (0, r.jsx)(U, {
                  href: 'https://twitter.com/abhishekasana',
                  children: (0, r.jsx)(u.Dr, {
                    size: '18px',
                    color: '#EA4C89',
                    children: 'Twitter',
                  }),
                }),
                ', or email me at \xa0',
                (0, r.jsx)(U, {
                  href: 'mailto:abhishekasana@gmail.com',
                  children: (0, r.jsx)(u.Dr, {
                    size: '18px',
                    color: '#EA4C89',
                    children: 'abhishekasana@gmail.com',
                  }),
                }),
              ],
            }),
          ],
        });
      };
      function H() {
        var n,
          e,
          t =
            ((n = ['\n  text-decoration: none;\n']),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } }),
            ));
        return (
          (H = function () {
            return t;
          }),
          t
        );
      }
      var N = s.ZP.a(H());
      var X = function () {
        return (0, r.jsx)(l.S$, {
          children: (0, r.jsx)(x.Z, {
            header: (0, r.jsx)(m, { title: 'cat resume.pdf' }),
            body: (0, r.jsx)(N, {
              href: '/resume',
              children: (0, r.jsx)(u.Dr, {
                size: '18px',
                color: '#EA4C89',
                children: 'View Resume',
              }),
            }),
          }),
        });
      };
      var V = function () {
        return (0, r.jsx)(o.Z, {
          children: (0, r.jsxs)(l.PU, {
            children: [
              (0, r.jsx)(A, {}),
              (0, r.jsx)(X, {}),
              (0, r.jsx)(S, { listHeader: 'history', taskList: D, collapsed: !1 }),
              (0, r.jsx)(L, {}),
              (0, r.jsx)(B, {}),
            ],
          }),
        });
      };
    },
    262: function (n, e, t) {
      'use strict';
      var r = t(7018);
      n.exports = r()
        .add('about-me', '/about-me', '/about-me')
        .add('blog-b-attack', '/blog/birthday-attack', '/blog/birthday-attack')
        .add('github-pages-js', '/blog/github-pages-nextjs', '/blog/github-pages-nextjs')
        .add(
          'deepdive-in-storage',
          '/blog/deepdive-in-storage',
          '/blog/deepdive-in-storage',
        )
        .add('currency-arbitrage', '/blog/currency-arbitrage', '/blog/currency-arbitrage')
        .add(
          'text-search-in-postgres',
          '/blog/text-search-in-postgresql',
          '/blog/text-search-in-postgresql',
        )
        .add('resume', '/resume', '/resume')
        .add('home', '/', '/home');
    },
    2703: function (n, e, t) {
      'use strict';
      var r = t(414);
      function i() {}
      function o() {}
      (o.resetWarningCache = i),
        (n.exports = function () {
          function n(n, e, t, i, o, a) {
            if (a !== r) {
              var c = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
              );
              throw ((c.name = 'Invariant Violation'), c);
            }
          }
          function e() {
            return n;
          }
          n.isRequired = n;
          var t = {
            array: n,
            bigint: n,
            bool: n,
            func: n,
            number: n,
            object: n,
            string: n,
            symbol: n,
            any: n,
            arrayOf: e,
            element: n,
            elementType: n,
            instanceOf: e,
            node: n,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: o,
            resetWarningCache: i,
          };
          return (t.PropTypes = t), t;
        });
    },
    5697: function (n, e, t) {
      n.exports = t(2703)();
    },
    414: function (n) {
      'use strict';
      n.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
  },
  function (n) {
    n.O(0, [115, 774, 888, 179], function () {
      return (e = 5409), n((n.s = e));
      var e;
    });
    var e = n.O();
    _N_E = e;
  },
]);
