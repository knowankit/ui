(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/pagination"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/pagination"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.pagination);
    global.index = mod.exports;
  }
})(this, function (_exports, _pagination) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _pagination = _interopRequireDefault(_pagination);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _pagination["default"];
  _exports["default"] = _default;
});