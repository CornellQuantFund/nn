(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5557: function (e, t, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function () {
                    return i(6062);
                }
            ]);
        },
        3193: function (e, t, i) {
            "use strict";
            i.d(t, {
                $: function () {
                    return o;
                },
                r: function () {
                    return a;
                }
            });

            var n = i(5893),
                s = i(7294),
                r = i(1664),
                a = function (e) {
                    var t = e.title,
                        i = e.description,
                        s = e.buttons;

                    return (0, n.jsx)("div", {
                        id: "contact",
                        className: "bg-white py-5 px-5",
                        children: (0, n.jsxs)("div", {
                            className: "container",
                            children: [
                                (0, n.jsx)("h1", {
                                    className: "text-primary fw-bold",
                                    children: t
                                }),
                                (0, n.jsxs)("div", {
                                    className: "px-sm-5",
                                    children: [
                                        (0, n.jsx)("p", {
                                            children: i
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "",
                                            children: s.map(function (e, t) {
                                                return e.isPrimary ?
                                                    (0, n.jsx)(r, {
                                                        href: e.link,
                                                        children: (0, n.jsx)("a", {
                                                            className: "btn btn-primary my-1 mx-3",
                                                            children: e.title
                                                        })
                                                    }, t) :
                                                    (0, n.jsx)(r, {
                                                        href: e.link,
                                                        children: (0, n.jsx)("a", {
                                                            className: "btn btn-outline-primary my-1 mx-3",
                                                            children: e.title
                                                        })
                                                    }, t);
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    });
                },
                o = function () {
                    return (0, n.jsx)("footer", {
                        className: "bg-secondary text-center py-2 px-5",
                        children: (0, n.jsx)("div", {
                            className: "container text-muted",
                            children: (0, n.jsxs)("small", {
                                children: [
                                    "© 2021 ",
                                    " ",
                                    (0, n.jsx)(r, {
                                        href: "https://github.com/hashirshoaeb",
                                        children: (0, n.jsx)("a", {
                                            children: "hashirshoaeb"
                                        })
                                    }),
                                    ". Open sourced with love under ",
                                    " ",
                                    (0, n.jsx)(r, {
                                        href: "https://github.com/hashirshoaeb/portfolio/blob/main/LICENSE",
                                        children: (0, n.jsx)("a", {
                                            children: "MIT"
                                        })
                                    }),
                                    " ",
                                    " License"
                                ]
                            })
                        })
                    });
                }
        },
        7673: function (e, t, i) {
            "use strict";
            i.d(t, {
                h: function () {
                    return a;
                }
            });

            var n = i(5893),
                s = i(9008),
                r = i.n(s),
                a = function (e) {
                    var t = e.seo;
                    return (0, n.jsxs)(r(), {
                        children: [
                            (0, n.jsx)("title", {
                                children: t.title
                            }),
                            (0, n.jsx)("meta", {
                                name: "description",
                                content: t.description
                            }),
                            (0, n.jsx)("meta", {
                                property: "og:title",
                                content: t.title
                            }),
                            (0, n.jsx)("meta", {
                                property: "og:description",
                                content: t.description
                            }),
                            (0, n.jsx)("meta", {
                                property: "og:image",
                                content: t.image
                            }),
                            (0, n.jsx)("meta", {
                                property: "og:type",
                                content: "website"
                            })
                        ]
                    });
                }
        },
        6062: function (e, t, i) {
            "use strict";
            i.r(t);
            i.d(t, {
                default: function () {
                    return b;
                }
            });

            var n = i(5893),
                s = i(7294),
                r = i(1664),
                a = function (e) {
                    var t = e.title,
                        i = e.links,
                        r = (0, s.useState)(!0),
                        a = r[0],
                        o = r[1];

                    return (0, n.jsx)("nav", {
                        className: "navbar navbar-expand-sm navbar-light bg-secondary",
                        children: (0, n.jsxs)("div", {
                            className: "container",
                            children: [
                                (0, n.jsx)(r, {
                                    href: "/",
                                    children: (0, n.jsx)("a", {
                                        className: "navbar-brand",
                                        children: (0, n.jsx)("span", {
                                            className: "",
                                            children: t
                                        })
                                    })
                                }),
                                (0, n.jsx)("button", {
                                    className: "custom-toggler navbar-toggler",
                                    type: "button",
                                    "data-toggle": "collapse",
                                    "data-target": "#navbarsExample09",
                                    "aria-controls": "navbarsExample09",
                                    "aria-expanded": !a,
                                    "aria-label": "Toggle navigation",
                                    onClick: function () {
                                        return o(!a);
                                    },
                                    children: (0, n.jsx)("span", {
                                        className: "navbar-toggler-icon"
                                    })
                                }),
                                (0, n.jsx)("div", {
                                    className: "".concat(a ? "collapse" : "", " navbar-collapse"),
                                    id: "navbarsExample09",
                                    children: (0, n.jsx)("div", {
                                        className: "navbar-nav",
                                        children: i.map(function (e, t) {
                                            return (0, n.jsx)(r, {
                                                href: e.link,
                                                children: (0, n.jsx)("a", {
                                                    className: "nav-link",
                                                    children: e.title
                                                })
                                            }, t);
                                        })
                                    })
                                })
                            ]
                        })
                    });
                };

            function b() {
                return (0, n.jsxs)(s.Fragment, {
                    children: [
                        (0, n.jsx)(f.h, {
                            seo: g.HJ
                        }),
                        (0, n.jsx)(o, {
                            title: g.G.name,
                            links: g.G.links
                        }),
                        (0, n.jsx)(c, {
                            title: g.mf.title,
                            description: g.mf.description,
                            image: g.mf.image,
                            buttons: g.mf.buttons
                        }),
                        (0, n.jsx)(d, {
                            title: g.jZ.title,
                            description: g.jZ.description
                        }),
                        (0, n.jsx)(p, {
                            title: g.ZT.title,
                            cards: g.ZT.cards
                        }),
                        (0, n.jsx)(m, {
                            title: g.q.title,
                            cards: g.q.cards
                        }),
                        (0, n.jsx)(x.r, {
                            title: g.PX.title,
                            description: g.PX.description,
                            buttons: g.PX.buttons
                        }),
                        (0, n.jsx)(x.$, {})
                    ]
                });
            }
        }
    },
    function (e) {
        e.O(0, [948, 574, 603, 774, 888, 179], function () {
            return t = 5557, e(e.s = t);
            var t;
        });
        var t = e.O();
        _N_E = t;
    }
]);
