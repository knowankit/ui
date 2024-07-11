(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/upload"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/upload"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.upload);
    global.index = mod.exports;
  }
})(this, function (_exports, _upload) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _upload = _interopRequireDefault(_upload);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _upload["default"];
  _exports["default"] = _default;
});