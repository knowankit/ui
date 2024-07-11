(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/popconfirm"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/popconfirm"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.popconfirm);
    global.confirm = mod.exports;
  }
})(this, function (_exports, _popconfirm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _popconfirm = _interopRequireDefault(_popconfirm);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _popconfirm["default"];
  _exports["default"] = _default;
});