(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/select"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/select"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.select);
    global.option = mod.exports;
  }
})(this, function (_exports, _select) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _select = _interopRequireDefault(_select);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _select["default"].Option;
  _exports["default"] = _default;
});