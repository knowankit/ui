(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/divider"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/divider"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.divider);
    global.index = mod.exports;
  }
})(this, function (_exports, _divider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _divider = _interopRequireDefault(_divider);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _divider["default"];
  _exports["default"] = _default;
});