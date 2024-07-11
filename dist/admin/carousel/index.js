(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/carousel"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/carousel"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.carousel);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _carousel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _carousel = _interopRequireDefault(_carousel);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _carousel["default"];
  _exports["default"] = _default;
});