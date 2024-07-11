(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/alert"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/alert"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.alert);
    global.index = mod.exports;
  }
})(this, function (_exports, _alert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _alert = _interopRequireDefault(_alert);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _alert["default"];
  _exports["default"] = _default;
});