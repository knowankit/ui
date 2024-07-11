(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/tag"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/tag"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.tag);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _tag) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _tag = _interopRequireDefault(_tag);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _tag["default"];
  _exports["default"] = _default;
});