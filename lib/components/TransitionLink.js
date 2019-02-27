"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TransitionLink = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gatsby = require("gatsby");

var _triggerTransition = require("../utils/triggerTransition");

var _createTransitionContext = require("../context/createTransitionContext");

var _jsxFileName = "/home/ceephax/workspace/jackmorton/gatsby-plugin-transition-link/src/components/TransitionLink.js";

var TransitionLink = function TransitionLink(_ref) {
  var to = _ref.to,
      children = _ref.children,
      exit = _ref.exit,
      entry = _ref.entry,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      className = _ref.className,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["to", "children", "exit", "entry", "activeStyle", "style", "className"]);
  return _react.default.createElement(_createTransitionContext.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, function (_ref2) {
    var context = (0, _extends2.default)({}, _ref2);
    return _react.default.createElement(_gatsby.Link, (0, _extends2.default)({
      activeStyle: activeStyle,
      style: style,
      className: className,
      onClick: function onClick(event) {
        return (0, _triggerTransition.triggerTransition)((0, _extends2.default)({
          event: event,
          to: to,
          exit: exit,
          entry: entry
        }, context));
      },
      to: to // use gatsby link so prefetching still happens. this is prevent defaulted in triggertransition

    }, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), children);
  });
};

exports.TransitionLink = TransitionLink;
TransitionLink.propTypes = {
  to: _propTypes.default.string.isRequired,
  exitLength: _propTypes.default.number,
  entryDelay: _propTypes.default.number,
  exitFn: _propTypes.default.func,
  entryState: _propTypes.default.object
};