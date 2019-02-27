"use strict";

exports.__esModule = true;
exports.PublicConsumer = exports.PublicProvider = exports.Consumer = exports.Provider = void 0;

var _react = require("react");

var _createContext = (0, _react.createContext)(),
    Provider = _createContext.Provider,
    Consumer = _createContext.Consumer;

exports.Consumer = Consumer;
exports.Provider = Provider;

var _createContext2 = (0, _react.createContext)(),
    PublicProvider = _createContext2.Provider,
    PublicConsumer = _createContext2.Consumer;

exports.PublicConsumer = PublicConsumer;
exports.PublicProvider = PublicProvider;