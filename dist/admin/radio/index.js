(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/radio"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/radio"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.radio);
    global.index = mod.exports;
  }
})(this, function (_exports, _radio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _radio = _interopRequireDefault(_radio);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _radio["default"];
  _exports["default"] = _default;
});