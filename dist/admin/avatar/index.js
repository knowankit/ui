(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/avatar"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/avatar"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.avatar);
    global.index = mod.exports;
  }
})(this, function (_exports, _avatar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _avatar = _interopRequireDefault(_avatar);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _avatar["default"];
  _exports["default"] = _default;
});