(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/tabs"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/tabs"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.tabs);
    global.tabPane = mod.exports;
  }
})(this, function (_exports, _tabs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _tabs = _interopRequireDefault(_tabs);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _tabs["default"].TabPane;
  _exports["default"] = _default;
});