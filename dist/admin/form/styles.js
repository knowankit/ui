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
})(this, function (_exports, _styledComponents) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.FormStyle = void 0;

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n  .ant-form-item-label {\n    label {\n      &:before,\n      &:after {\n        content: \"\";\n      }\n    }\n  }\n  .ant-list-item-meta-content {\n    flex: 1 0 auto; // IE fix for List.Meta, where flex-basis is set to 0px if not defined\n  }\n  label.ant-form-item-required {\n    &:after {\n      content: \"*\";\n      color: #03a9f4;\n      font-size: 18px;\n    }\n  }\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var FormStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());
  _exports.FormStyle = FormStyle;
});