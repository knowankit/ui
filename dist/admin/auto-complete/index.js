(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/auto-complete"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/auto-complete"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.autoComplete);
    global.index = mod.exports;
  }
})(this, function (_exports, _autoComplete) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _autoComplete = _interopRequireDefault(_autoComplete);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _autoComplete["default"];
  _exports["default"] = _default;
});