"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = DefaultTransition;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Cover = _interopRequireDefault(require("./Cover"));

var _Fade = _interopRequireDefault(require("./Fade"));

var _PaintDrip = _interopRequireDefault(require("./PaintDrip"));

var _Swipe = _interopRequireDefault(require("./Swipe"));

var _ = _interopRequireDefault(require("../"));

var _jsxFileName = "/home/ceephax/workspace/jackmorton/gatsby-plugin-transition-link/src/AniLink/index.js";

function DefaultTransition(props) {
  return _react.default.createElement(_react.default.Fragment, null, props.cover && _react.default.createElement(_Cover.default, (0, _extends2.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), props.children), props.fade && _react.default.createElement(_Fade.default, (0, _extends2.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), props.children), props.paintDrip && _react.default.createElement(_PaintDrip.default, (0, _extends2.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), props.children), props.swipe && _react.default.createElement(_Swipe.default, (0, _extends2.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), props.children), !props.cover && !props.fade && !props.paintDrip && !props.swipe && _react.default.createElement(_.default, (0, _extends2.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), props.children));
}