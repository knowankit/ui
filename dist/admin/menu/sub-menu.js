(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/menu"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/menu"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.menu);
    global.subMenu = mod.exports;
  }
})(this, function (_exports, _menu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _menu = _interopRequireDefault(_menu);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _menu["default"].SubMenu;
  _exports["default"] = _default;
});