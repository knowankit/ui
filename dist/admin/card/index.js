(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/card"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/card"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.card);
    global.index = mod.exports;
  }
})(this, function (_exports, _card) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _card = _interopRequireDefault(_card);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _card["default"];
  _exports["default"] = _default;
});