(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react-chartjs-2"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react-chartjs-2"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactChartjs2);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _reactChartjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var _default = _reactChartjs.HorizontalBar;
  _exports["default"] = _default;
});