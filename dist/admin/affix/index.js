(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/affix"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/affix"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.affix);
    global.index = mod.exports;
  }
})(this, function (_exports, _affix) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _affix = _interopRequireDefault(_affix);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _affix["default"];
  _exports["default"] = _default;
});