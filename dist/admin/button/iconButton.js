(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "antd/lib/button", "antd/lib/icon"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("antd/lib/button"), require("antd/lib/icon"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.button, global.icon);
    global.iconButton = mod.exports;
  }
})(this, function (_exports, _react, _button, _icon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireWildcard(_react);
  _button = _interopRequireDefault(_button);
  _icon = _interopRequireDefault(_icon);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var ButtonGroup = _button["default"].Group;

  var ButtonComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(ButtonComponent, _Component);

    function ButtonComponent() {
      _classCallCheck(this, ButtonComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(ButtonComponent).apply(this, arguments));
    }

    _createClass(ButtonComponent, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            type = _this$props.type,
            icon = _this$props.icon,
            value = _this$props.value,
            position = _this$props.position;
        var iconPosition = position;
        var button;

        if (iconPosition === 'right') {
          button = _react["default"].createElement(_button["default"], {
            type: type
          }, value, _react["default"].createElement(_icon["default"], {
            type: icon
          }));
        } else {
          button = _react["default"].createElement(_button["default"], {
            type: type
          }, _react["default"].createElement(_icon["default"], {
            type: icon
          }), value);
        }

        return _react["default"].createElement(ButtonGroup, this.props, button);
      }
    }]);

    return ButtonComponent;
  }(_react.Component);

  var _default = ButtonComponent;
  _exports["default"] = _default;
});