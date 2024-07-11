(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd/lib/form"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd/lib/form"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.form);
    global.index = mod.exports;
  }
})(this, function (_exports, _form) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _form = _interopRequireDefault(_form);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  // import React, { Component, Fragment } from 'react'
  // import { FormStyle } from './styles'
  // class FormComponent extends Component {
  //   render () {
  //     return (
  //       <Fragment>
  //         <FormStyle />
  //         <Form {...this.props} />
  //       </Fragment>
  //     )
  //   }
  // }
  // export default FormComponent
  var _default = _form["default"];
  _exports["default"] = _default;
});