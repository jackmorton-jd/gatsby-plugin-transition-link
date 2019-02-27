"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _reactTransitionGroup = require("react-transition-group");

var _createTransitionContext = require("../context/createTransitionContext");

var _delayTransitionRender = _interopRequireDefault(require("./delayTransitionRender"));

var _returnTransitionState = require("../utils/returnTransitionState");

var _router = require("@reach/router");

var _secondsMs = require("../utils/secondsMs");

var _onEnter2 = require("../functions/onEnter");

var _onExit2 = require("../functions/onExit");

var _Layout = require("./Layout");

require("../style.css");

var _jsxFileName = "/home/ceephax/workspace/jackmorton/gatsby-plugin-transition-link/src/components/TransitionHandler.js";
var DelayedTransition = (0, _delayTransitionRender.default)(_reactTransitionGroup.Transition);

var TransitionHandler =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(TransitionHandler, _Component);

  function TransitionHandler() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TransitionHandler.prototype;

  _proto.render = function render() {
    var props = this.props;
    var children = props.children;
    return _react.default.createElement(_createTransitionContext.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, function (_ref) {
      var exitDelay = _ref.exitDelay,
          exitLength = _ref.exitLength,
          exitState = _ref.exitState,
          entryDelay = _ref.entryDelay,
          entryLength = _ref.entryLength,
          entryState = _ref.entryState,
          entryTrigger = _ref.entryTrigger,
          entryProps = _ref.entryProps,
          exitTrigger = _ref.exitTrigger,
          exitProps = _ref.exitProps,
          transitionIdHistory = _ref.transitionIdHistory,
          inTransition = _ref.inTransition,
          updateContext = _ref.updateContext,
          e = _ref.e;
      return _react.default.createElement(_router.Location, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, function (_ref2) {
        var _ref2$location = _ref2.location,
            action = _ref2$location.action,
            pathname = _ref2$location.pathname;
        return _react.default.createElement(_Layout.LayoutComponent, (0, _extends2.default)({}, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }), _react.default.createElement("div", {
          className: "tl-edges",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, _react.default.createElement(_reactTransitionGroup.TransitionGroup, {
          component: null,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, _react.default.createElement(DelayedTransition, {
          key: pathname // we're using seconds but transitiongroup uses ms
          ,
          delay: (0, _secondsMs.getMs)(entryDelay),
          timeout: {
            enter: (0, _secondsMs.getMs)(entryLength),
            exit: (0, _secondsMs.getMs)(exitLength)
          },
          onEnter: function onEnter(node) {
            return !!node && (0, _onEnter2.onEnter)({
              node: node,
              action: action,
              inTransition: inTransition,
              entryTrigger: entryTrigger,
              entryProps: entryProps,
              exitProps: exitProps,
              pathname: pathname,
              updateContext: updateContext,
              e: e
            });
          },
          onExit: function onExit(node) {
            return !!node && (0, _onExit2.onExit)({
              node: node,
              inTransition: inTransition,
              exitTrigger: exitTrigger,
              entryProps: entryProps,
              exitProps: exitProps,
              e: e
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, function (transitionStatus) {
          var mount = transitionStatus === "entering" || transitionStatus === "entered";
          var states = {
            entry: {
              state: entryState,
              delay: entryDelay,
              length: entryLength
            },
            exit: {
              state: exitState,
              delay: exitDelay,
              length: exitLength
            }
          };
          var current = mount ? states.entry : states.exit;
          var transitionState = (0, _returnTransitionState.returnTransitionState)((0, _extends2.default)({
            inTransition: inTransition,
            location: props.location,
            transitionIdHistory: transitionIdHistory,
            transitionStatus: transitionStatus,
            current: current,
            mount: mount
          }, states));
          var exitZindex = exitProps.zIndex || 0;
          var entryZindex = entryProps.zIndex || 1;
          return _react.default.createElement("div", {
            className: "tl-wrapper " + (mount ? "tl-wrapper--mount" : "tl-wrapper--unmount") + " tl-wrapper-status--" + transitionStatus,
            style: {
              zIndex: mount ? entryZindex : exitZindex
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            },
            __self: this
          }, _react.default.createElement(_createTransitionContext.PublicProvider, {
            value: (0, _extends2.default)({}, transitionState),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121
            },
            __self: this
          }, _react.default.cloneElement(children, (0, _extends2.default)({}, transitionState))));
        }))));
      });
    });
  };

  return TransitionHandler;
}(_react.Component);

exports.default = TransitionHandler;