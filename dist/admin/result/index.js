(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/result"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/result"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.result);
    global.index = mod.exports;
  }
})(this, function (_exports, _result) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _result = _interopRequireDefault(_result);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _result["default"];
  _exports["default"] = _default;
});