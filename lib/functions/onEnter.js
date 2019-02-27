"use strict";

exports.__esModule = true;
exports.onEnter = void 0;

var onEnter = function onEnter(_ref) {
  var node = _ref.node,
      inTransition = _ref.inTransition,
      entryTrigger = _ref.entryTrigger,
      entryProps = _ref.entryProps,
      exitProps = _ref.exitProps,
      pathname = _ref.pathname,
      e = _ref.e;

  if (inTransition) {
    window.scrollTo(0, 0);
  } else {
    var _window;

    var storageKey = "@@scroll|" + pathname;
    var savedPosition = sessionStorage.getItem(storageKey);

    (_window = window).scrollTo.apply(_window, JSON.parse(savedPosition));
  }

  if (!inTransition) return;
  entryTrigger && typeof entryTrigger === "function" && entryTrigger({
    entry: entryProps,
    exit: exitProps,
    node: node,
    e: e
  });
};

exports.onEnter = onEnter;