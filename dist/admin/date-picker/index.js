(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/date-picker"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/date-picker"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.datePicker);
    global.index = mod.exports;
  }
})(this, function (_exports, _datePicker) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _datePicker = _interopRequireDefault(_datePicker);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _datePicker["default"];
  _exports["default"] = _default;
});