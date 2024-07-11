(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/badge"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/badge"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.badge);
    global.index = mod.exports;
  }
})(this, function (_exports, _badge) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _badge = _interopRequireDefault(_badge);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _badge["default"];
  _exports["default"] = _default;
});