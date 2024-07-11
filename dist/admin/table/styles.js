(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "styled-components"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("styled-components"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledComponents);
    global.styles = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _styledComponents) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.PaginationWrapperStyles = _exports.TablePaginationTextStyle = void 0;
  _styledComponents = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _templateObject2() {
    var data = _taggedTemplateLiteral(["\n  margin-top: 16px;\n"]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n  text-align: left;\n  padding-top: 20px;\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var TablePaginationTextStyle = _styledComponents["default"].div(_templateObject());

  _exports.TablePaginationTextStyle = TablePaginationTextStyle;

  var PaginationWrapperStyles = _styledComponents["default"].div(_templateObject2());

  _exports.PaginationWrapperStyles = PaginationWrapperStyles;
});