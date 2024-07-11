(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "chartjs-plugin-datalabels"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("chartjs-plugin-datalabels"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.chartjsPluginDatalabels);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _chartjsPluginDatalabels) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _chartjsPluginDatalabels = _interopRequireDefault(_chartjsPluginDatalabels);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _chartjsPluginDatalabels["default"];
  _exports["default"] = _default;
});