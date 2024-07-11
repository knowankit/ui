(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/tree"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/tree"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.tree);
    global.index = mod.exports;
  }
})(this, function (_exports, _tree) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _tree = _interopRequireDefault(_tree);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _tree["default"];
  _exports["default"] = _default;
});