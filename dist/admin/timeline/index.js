(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/timeline"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/timeline"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.timeline);
    global.index = mod.exports;
  }
})(this, function (_exports, _timeline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _timeline = _interopRequireDefault(_timeline);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _timeline["default"];
  _exports["default"] = _default;
});