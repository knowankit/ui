(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/input-number"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/input-number"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.inputNumber);
    global.index = mod.exports;
  }
})(this, function (_exports, _inputNumber) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _inputNumber = _interopRequireDefault(_inputNumber);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _inputNumber["default"];
  _exports["default"] = _default;
});