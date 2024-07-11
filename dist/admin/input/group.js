(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/input"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/input"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.input);
    global.group = mod.exports;
  }
})(this, function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _input = _interopRequireDefault(_input);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _input["default"].Group;
  _exports["default"] = _default;
});