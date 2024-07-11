(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/tooltip"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/tooltip"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.tooltip);
    global.index = mod.exports;
  }
})(this, function (_exports, _tooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _tooltip = _interopRequireDefault(_tooltip);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _tooltip["default"];
  _exports["default"] = _default;
});