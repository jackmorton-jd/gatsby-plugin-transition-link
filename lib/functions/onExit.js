"use strict";

exports.__esModule = true;
exports.onExit = void 0;

var onExit = function onExit(_ref) {
  var node = _ref.node,
      inTransition = _ref.inTransition,
      exitTrigger = _ref.exitTrigger,
      entryProps = _ref.entryProps,
      exitProps = _ref.exitProps,
      e = _ref.e;
  if (!inTransition) return;
  return exitTrigger && typeof exitTrigger === "function" && exitTrigger({
    entry: entryProps,
    exit: exitProps,
    node: node,
    e: e
  });
};

exports.onExit = onExit;