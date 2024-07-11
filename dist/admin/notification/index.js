(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/notification"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/notification"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.notification);
    global.index = mod.exports;
  }
})(this, function (_exports, _notification) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _notification = _interopRequireDefault(_notification);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _notification["default"];
  _exports["default"] = _default;
});