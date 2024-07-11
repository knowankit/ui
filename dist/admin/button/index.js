(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.button);
    global.index = mod.exports;
  }
})(this, function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _button = _interopRequireDefault(_button);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _button["default"];
  _exports["default"] = _default;
});