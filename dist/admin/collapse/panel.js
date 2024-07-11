(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/collapse"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/collapse"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.collapse);
    global.panel = mod.exports;
  }
})(this, function (_exports, _collapse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _collapse = _interopRequireDefault(_collapse);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _collapse["default"].Panel;
  _exports["default"] = _default;
});