(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/row"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/row"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.row);
    global.index = mod.exports;
  }
})(this, function (_exports, _row) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _row = _interopRequireDefault(_row);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _row["default"];
  _exports["default"] = _default;
});