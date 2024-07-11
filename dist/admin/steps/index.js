(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/steps"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/steps"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.steps);
    global.index = mod.exports;
  }
})(this, function (_exports, _steps) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _steps = _interopRequireDefault(_steps);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _steps["default"];
  _exports["default"] = _default;
});