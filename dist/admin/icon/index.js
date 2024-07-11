(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/icon"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/icon"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.icon);
    global.index = mod.exports;
  }
})(this, function (_exports, _icon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _icon = _interopRequireDefault(_icon);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _icon["default"];
  _exports["default"] = _default;
});