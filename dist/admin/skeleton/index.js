(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/skeleton"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/skeleton"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.skeleton);
    global.index = mod.exports;
  }
})(this, function (_exports, _skeleton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _skeleton = _interopRequireDefault(_skeleton);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _skeleton["default"];
  _exports["default"] = _default;
});