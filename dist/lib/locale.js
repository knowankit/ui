(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "lodash/forEach"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("lodash/forEach"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.forEach);
    global.locale = mod.exports;
  }
})(this, function (_exports, _forEach) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.i18nToString = void 0;
  _forEach = _interopRequireDefault(_forEach);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var i18nToString = function i18nToString(str) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _forEach["default"])(props, function (v, k) {
      str = String(str.replace("{{".concat(k, "}}"), v));
    });
    return str;
  };

  _exports.i18nToString = i18nToString;
});