(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js":
/*!********************************************************************************!*\
  !*** ../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (n, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function () {
  return function (n) {
    var t = {};

    function e(o) {
      if (t[o]) return t[o].exports;
      var r = t[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return n[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
    }

    return e.m = n, e.c = t, e.d = function (n, t, o) {
      e.o(n, t) || Object.defineProperty(n, t, {
        enumerable: !0,
        get: o
      });
    }, e.r = function (n) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(n, "__esModule", {
        value: !0
      });
    }, e.t = function (n, t) {
      if (1 & t && (n = e(n)), 8 & t) return n;
      if (4 & t && "object" == _typeof(n) && n && n.__esModule) return n;
      var o = Object.create(null);
      if (e.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: n
      }), 2 & t && "string" != typeof n) for (var r in n) {
        e.d(o, r, function (t) {
          return n[t];
        }.bind(null, r));
      }
      return o;
    }, e.n = function (n) {
      var t = n && n.__esModule ? function () {
        return n.default;
      } : function () {
        return n;
      };
      return e.d(t, "a", t), t;
    }, e.o = function (n, t) {
      return Object.prototype.hasOwnProperty.call(n, t);
    }, e.p = "", e(e.s = 0);
  }([function (n, t, e) {
    "use strict";

    e.r(t);
    e(1);
    !function (n) {
      var t = {
        maxItems: 1 / 0,
        minItems: 0,
        selectionText: "item",
        textPlural: "items",
        controls: {
          position: "right",
          displayCls: "iqdropdown-content",
          controlsCls: "iqdropdown-item-controls",
          counterCls: "counter"
        },
        items: {},
        onChange: function onChange() {},
        beforeDecrement: function beforeDecrement() {
          return !0;
        },
        beforeIncrement: function beforeIncrement() {
          return !0;
        }
      };

      n.fn.iqDropdown = function (e) {
        return this.each(function () {
          var o = n(this),
              r = o.find("p.iqdropdown-selection").last(),
              i = o.find("div.iqdropdown-menu").find("div.iqdropdown-menu-option"),
              u = n.extend(!0, {}, t, e),
              c = {},
              a = 0;

          function l() {
            var n = 1 !== a && u.textPlural.length > 0 ? u.textPlural : u.selectionText;
            r.html("".concat(a, " ").concat(n));
          }

          o.click(function () {
            o.toggleClass("menu-open");
          }), i.each(function () {
            var t = n(this),
                e = t.data("id"),
                o = Number(t.data("defaultcount") || "0");
            c[e] = o, a += o, function (n, t) {
              var e = Number(t.data("mincount")),
                  o = Number(t.data("maxcount"));
              u.items[n] = {
                minCount: Number.isNaN(Number(e)) ? 0 : e,
                maxCount: Number.isNaN(Number(o)) ? 1 / 0 : o
              };
            }(e, t), function (t, e) {
              var o = n("<div />").addClass(u.controls.controlsCls),
                  r = n('\n          <button class="button-decrement">\n            <i class="icon-decrement"></i>\n          </button>\n        '),
                  i = n('\n          <button class="button-increment">\n            <i class="icon-decrement icon-increment"></i>\n          </button>\n        '),
                  s = n("<span>".concat(c[t], "</span>")).addClass(u.controls.counterCls);
              e.children("div").addClass(u.controls.displayCls), o.append(r, s, i), "right" === u.controls.position ? e.append(o) : e.prepend(o), r.click(function (n) {
                var e = u.items,
                    o = u.minItems,
                    r = u.beforeDecrement,
                    i = u.onChange;
                r(t, c) && a > o && c[t] > e[t].minCount && (c[t] -= 1, a -= 1, s.html(c[t]), l(), i(t, c[t], a)), n.preventDefault();
              }), i.click(function (n) {
                var e = u.items,
                    o = u.maxItems,
                    r = u.beforeIncrement,
                    i = u.onChange;
                r(t, c) && a < o && c[t] < e[t].maxCount && (c[t] += 1, a += 1, s.html(c[t]), l(), i(t, c[t], a)), n.preventDefault();
              }), e.click(function (n) {
                return n.stopPropagation();
              });
            }(e, t);
          }), l();
        }), this;
      };
    }(jQuery);
  }, function (n, t, e) {}]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=1.js.map