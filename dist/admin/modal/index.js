(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/modal"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/modal"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.modal);
    global.index = mod.exports;
  }
})(this, function (_exports, _modal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _modal = _interopRequireDefault(_modal);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _modal["default"];
  _exports["default"] = _default;
});