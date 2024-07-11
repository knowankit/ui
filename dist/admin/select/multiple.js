(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "antd/lib/divider", "antd/lib/menu", "antd/lib/dropdown", "antd/lib/input", "antd/lib/checkbox", "antd/lib/icon", "./styles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("antd/lib/divider"), require("antd/lib/menu"), require("antd/lib/dropdown"), require("antd/lib/input"), require("antd/lib/checkbox"), require("antd/lib/icon"), require("./styles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.divider, global.menu, global.dropdown, global.input, global.checkbox, global.icon, global.styles);
    global.multiple = mod.exports;
  }
})(this, function (_exports, _react, _divider, _menu, _dropdown, _input, _checkbox, _icon, _styles) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireWildcard(_react);
  _divider = _interopRequireDefault(_divider);
  _menu = _interopRequireDefault(_menu);
  _dropdown = _interopRequireDefault(_dropdown);
  _input = _interopRequireDefault(_input);
  _checkbox = _interopRequireDefault(_checkbox);
  _icon = _interopRequireDefault(_icon);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var MenuItem = _menu["default"].Item;

  var SelectMultiple =
  /*#__PURE__*/
  function (_Component) {
    _inherits(SelectMultiple, _Component);

    function SelectMultiple() {
      _classCallCheck(this, SelectMultiple);

      return _possibleConstructorReturn(this, _getPrototypeOf(SelectMultiple).apply(this, arguments));
    }

    _createClass(SelectMultiple, [{
      key: "renderCheckboxItem",
      // ToDo: Add propTypes
      value: function renderCheckboxItem(item) {
        return _react["default"].createElement(MenuItem, {
          className: "ant-dropdown-menu-item"
        }, _react["default"].createElement(_checkbox["default"], _extends({}, item.checkbox, {
          style: {
            width: '100%'
          }
        }), item.label));
      }
    }, {
      key: "renderItem",
      value: function renderItem(item) {
        return _react["default"].createElement(MenuItem, {
          className: "ant-dropdown-menu-item"
        }, item.label);
      }
    }, {
      key: "renderMenuItem",
      value: function renderMenuItem(item) {
        if (item.data === 'divider') {
          return _react["default"].createElement(MenuItem, {
            className: "dropdown-menu-multiselect-divider-item"
          }, _react["default"].createElement(_divider["default"], {
            className: "dropdown-divider-horizontal"
          }));
        }

        return item.checkbox ? this.renderCheckboxItem(item) : this.renderItem(item);
      }
    }, {
      key: "renderMenuGroup",
      value: function renderMenuGroup(group) {
        var _this = this;

        // push an additional divider item if group's showDivider flag is true
        if (group.showDivider) group.data.push({
          data: 'divider'
        });
        return group.data.map(function (item) {
          return _this.renderMenuItem(item);
        });
      }
    }, {
      key: "renderMenu",
      value: function renderMenu() {
        var _this2 = this;

        return _react["default"].createElement(_menu["default"], null, this.props.dataSourceGroups.map(function (group) {
          return _this2.renderMenuGroup(group);
        }));
      }
    }, {
      key: "renderSuffixIcon",
      value: function renderSuffixIcon() {
        var _this3 = this;

        var _this$props = this.props,
            visible = _this$props.visible,
            suffixIcon = _this$props.suffixIcon;
        var iconType = visible ? 'up' : 'down';
        if (suffixIcon === false) return null;
        return _react["default"].createElement(_icon["default"], {
          type: this.props.suffixIconType || iconType,
          onClick: function onClick(e) {
            return _this3.props.onSuffixIconClick(e);
          }
        });
      }
    }, {
      key: "render",
      value: function render() {
        return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_styles.MultipleStyle, null), _react["default"].createElement(_dropdown["default"], _extends({}, this.props, {
          trigger: [this.props.trigger, 'click'],
          overlay: this.renderMenu(),
          className: "dropdown-multiselect-menu"
        }), _react["default"].createElement(_input["default"], {
          prefix: this.props.prefixIconType,
          suffix: this.renderSuffixIcon(),
          placeholder: this.props.placeholder || 'Search ...' // ToDo: Translation
          ,
          onChange: this.props.onSearchChange.bind(this)
        })));
      }
    }]);

    return SelectMultiple;
  }(_react.Component);

  var _default = SelectMultiple;
  _exports["default"] = _default;
});