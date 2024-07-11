(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/typography"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/typography"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.typography);
    global.index = mod.exports;
  }
})(this, function (_exports, _typography) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _typography = _interopRequireDefault(_typography);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _typography["default"];
  _exports["default"] = _default;
});