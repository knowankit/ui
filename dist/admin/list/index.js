(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/list"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/list"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.list);
    global.index = mod.exports;
  }
})(this, function (_exports, _list) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _list = _interopRequireDefault(_list);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _list["default"];
  _exports["default"] = _default;
});