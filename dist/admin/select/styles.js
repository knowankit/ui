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
  _exports.MultipleStyle = void 0;

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n  .dropdown-multiselect-menu {\n    min-width: 273px;\n    max-height: 300px;\n    overflow-y: auto\n  }\n\n  .dropdown-menu-multiselect-divider-item:hover {\n    background-color: #fff !important;\n  }\n\n  .dropdown-divider-horizontal {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var MultipleStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());
  _exports.MultipleStyle = MultipleStyle;
});