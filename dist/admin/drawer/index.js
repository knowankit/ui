(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/drawer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/drawer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.drawer);
    global.index = mod.exports;
  }
})(this, function (_exports, _drawer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _drawer = _interopRequireDefault(_drawer);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _drawer["default"];
  _exports["default"] = _default;
});