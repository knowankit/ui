(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/switch"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/switch"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._switch);
    global.index = mod.exports;
  }
})(this, function (_exports, _switch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _switch = _interopRequireDefault(_switch);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _switch["default"];
  _exports["default"] = _default;
});