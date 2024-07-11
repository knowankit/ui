(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/empty"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/empty"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.empty);
    global.index = mod.exports;
  }
})(this, function (_exports, _empty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _empty = _interopRequireDefault(_empty);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _empty["default"];
  _exports["default"] = _default;
});