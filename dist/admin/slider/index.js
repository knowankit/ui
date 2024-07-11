(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/slider"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/slider"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.slider);
    global.index = mod.exports;
  }
})(this, function (_exports, _slider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _slider = _interopRequireDefault(_slider);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _slider["default"];
  _exports["default"] = _default;
});