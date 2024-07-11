(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/layout"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/layout"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.layout);
    global.sider = mod.exports;
  }
})(this, function (_exports, _layout) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _layout = _interopRequireDefault(_layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _layout["default"].Sider;
  _exports["default"] = _default;
});