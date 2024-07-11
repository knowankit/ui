(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/spin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/spin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.spin);
    global.index = mod.exports;
  }
})(this, function (_exports, _spin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _spin = _interopRequireDefault(_spin);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _spin["default"];
  _exports["default"] = _default;
});