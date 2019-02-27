"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.triggerTransition = void 0;

var _gatsby = require("gatsby");

var _random = _interopRequireDefault(require("lodash/random"));

var _requestanimationframeTimer = require("requestanimationframe-timer");

var _secondsMs = require("./secondsMs");

var triggerTransition = function triggerTransition(_ref) {
  var to = _ref.to,
      _ref$event = _ref.event,
      event = _ref$event === void 0 ? null : _ref$event,
      _ref$exit = _ref.exit,
      exit = _ref$exit === void 0 ? {} : _ref$exit,
      _ref$entry = _ref.entry,
      entry = _ref$entry === void 0 ? {} : _ref$entry,
      inTransition = _ref.inTransition,
      transitionIdHistory = _ref.transitionIdHistory,
      updateContext = _ref.updateContext;
  event.persist();
  event.preventDefault();
  if (inTransition) return false;
  updateContext({
    inTransition: true,
    exitDelay: 0,
    exitLength: 0,
    exitState: {}
  });

  var _exit$length = exit.length,
      exitLength = _exit$length === void 0 ? 0 : _exit$length,
      _exit$delay = exit.delay,
      exitDelay = _exit$delay === void 0 ? 0 : _exit$delay,
      _exit$state = exit.state,
      exitState = _exit$state === void 0 ? {} : _exit$state,
      _exit$trigger = exit.trigger,
      _exitTrigger = _exit$trigger === void 0 ? function () {} : _exit$trigger;

  var _entry$length = entry.length,
      entryLength = _entry$length === void 0 ? 1 : _entry$length,
      _entry$delay = entry.delay,
      entryDelay = _entry$delay === void 0 ? 0 : _entry$delay,
      _entry$state = entry.state,
      entryState = _entry$state === void 0 ? {} : _entry$state,
      _entry$trigger = entry.trigger,
      _entryTrigger = _entry$trigger === void 0 ? function () {} : _entry$trigger;

  updateContext({
    entryLength: entryLength,
    entryDelay: entryDelay,
    exitLength: exitLength,
    exitDelay: exitDelay,
    entryProps: entry,
    exitProps: exit,
    exitTrigger: function exitTrigger(exit, node, e) {
      return _exitTrigger(exit, node, e);
    },
    entryTrigger: function entryTrigger(entry, node, e) {
      return _entryTrigger(entry, node, e);
    },
    e: event
  });
  (0, _requestanimationframeTimer.setTimeout)(function () {
    // after exitDelay
    var transitionId = (0, _random.default)(10000, 99999, false);
    (0, _gatsby.navigate)(to, {
      state: {
        transitionId: transitionId
      }
    });
    updateContext({
      exitState: exitState,
      transitionIdHistory: [].concat(transitionIdHistory, [transitionId])
    });
  }, (0, _secondsMs.getMs)(exitDelay));
  (0, _requestanimationframeTimer.setTimeout)(function () {
    // wait for entryDelay before we add entry state
    updateContext({
      entryState: entryState
    });
  }, (0, _secondsMs.getMs)(exitDelay + entryDelay)); // reset entry animation times so they dont apply when using browser back/forward.
  //  this will be replaced with a better solution in the future

  (0, _requestanimationframeTimer.setTimeout)(function () {
    return updateContext({
      entryDelay: 0,
      entryLength: 0
    });
  }, (0, _secondsMs.getMs)(exitDelay + entryDelay + entryLength));
  var finalResetSeconds = exitDelay + Math.max(exitLength, entryDelay + entryLength); // reset exit animation times so they dont apply when using browser back/forward.
  //  this will be replaced with a better solution in the future

  (0, _requestanimationframeTimer.setTimeout)(function () {
    return updateContext({
      exitDelay: 0,
      exitLength: 0,
      // Once all animation is finished, it's safe to start a new animation since we're no longer inTransition.
      inTransition: false
    });
  }, (0, _secondsMs.getMs)(finalResetSeconds) + 1);
};

exports.triggerTransition = triggerTransition;