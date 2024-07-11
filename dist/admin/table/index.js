(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./styles", "antd/lib/table", "antd/lib/row", "antd/lib/col", "antd/lib/pagination", "../../lib/locale"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./styles"), require("antd/lib/table"), require("antd/lib/row"), require("antd/lib/col"), require("antd/lib/pagination"), require("../../lib/locale"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.styles, global.table, global.row, global.col, global.pagination, global.locale);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _styles, _table, _row, _col, _pagination, _locale) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireWildcard(_react);
  _table = _interopRequireDefault(_table);
  _row = _interopRequireDefault(_row);
  _col = _interopRequireDefault(_col);
  _pagination = _interopRequireDefault(_pagination);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var TableComponent = /*#__PURE__*/function (_Component) {
    _inherits(TableComponent, _Component);

    var _super = _createSuper(TableComponent);

    function TableComponent() {
      _classCallCheck(this, TableComponent);

      return _super.apply(this, arguments);
    }

    _createClass(TableComponent, [{
      key: "calculateFirstRecord",
      value: function calculateFirstRecord(currentPage, pageSize, totalRecords) {
        if (totalRecords === 0) return totalRecords;
        var previousPage = currentPage - 1;
        return pageSize * previousPage + 1;
      }
    }, {
      key: "calculateLastRecord",
      value: function calculateLastRecord(currentPage, pageSize, totalRecords) {
        return currentPage * pageSize > totalRecords ? totalRecords : currentPage * pageSize;
      }
    }, {
      key: "renderPagination",
      value: function renderPagination() {
        var _this$props = this.props,
            pagination = _this$props.pagination,
            current = _this$props.current,
            defaultCurrent = _this$props.defaultCurrent,
            total = _this$props.total,
            pageSize = _this$props.pageSize,
            paginationOnChange = _this$props.paginationOnChange,
            pageSizeOptions = _this$props.pageSizeOptions,
            paginationOnShowSizeChange = _this$props.paginationOnShowSizeChange;
        if (pagination === false) return null;
        return /*#__PURE__*/_react["default"].createElement(_pagination["default"], {
          className: "ant-table-pagination",
          pageSizeOptions: pageSizeOptions || ['25', '50', '100'],
          showSizeChanger: true,
          current: current,
          defaultCurrent: defaultCurrent,
          total: total,
          pageSize: pageSize,
          onChange: paginationOnChange,
          onShowSizeChange: paginationOnShowSizeChange
        });
      }
    }, {
      key: "renderPaginationText",
      value: function renderPaginationText() {
        var _this$props2 = this.props,
            pagination = _this$props2.pagination,
            paginationText = _this$props2.paginationText,
            paginationLocale = _this$props2.paginationLocale,
            current = _this$props2.current,
            pageSize = _this$props2.pageSize,
            total = _this$props2.total;
        if (pagination === false) return null;

        if (paginationText) {
          return /*#__PURE__*/_react["default"].createElement(_styles.TablePaginationTextStyle, null, paginationText);
        }

        return /*#__PURE__*/_react["default"].createElement(_styles.TablePaginationTextStyle, null, (0, _locale.i18nToString)(paginationLocale, {
          start: this.calculateFirstRecord(current, pageSize, total),
          end: this.calculateLastRecord(current, pageSize, total),
          total: total
        }));
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_table["default"], _extends({}, this.props, {
          pagination: false
        })), /*#__PURE__*/_react["default"].createElement(_styles.PaginationWrapperStyles, null, /*#__PURE__*/_react["default"].createElement(_row["default"], {
          type: "flex",
          justify: "space-between"
        }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
          span: 8
        }, this.renderPaginationText()), /*#__PURE__*/_react["default"].createElement(_col["default"], {
          span: 16
        }, this.renderPagination()))));
      }
    }]);

    return TableComponent;
  }(_react.Component);

  var _default = TableComponent;
  _exports["default"] = _default;
});