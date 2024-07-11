(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/checkbox"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/checkbox"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.checkbox);
    global.index = mod.exports;
  }
})(this, function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _checkbox = _interopRequireDefault(_checkbox);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _checkbox["default"];
  _exports["default"] = _default;
});