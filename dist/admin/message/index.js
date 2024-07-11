(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/message"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/message"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.message);
    global.index = mod.exports;
  }
})(this, function (_exports, _message) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _message = _interopRequireDefault(_message);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _message["default"];
  _exports["default"] = _default;
});