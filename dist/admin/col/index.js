(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/col"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/col"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.col);
    global.index = mod.exports;
  }
})(this, function (_exports, _col) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _col = _interopRequireDefault(_col);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _col["default"];
  _exports["default"] = _default;
});