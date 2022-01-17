"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var Router_1 = __importDefault(require("../../routes/Router"));
var MetaDataKeysEnum_1 = require("./enums/MetaDataKeysEnum");
//Remeber, when u create a decorator for a complete CLASS, you will recive ass a targe not the prototype
// u will get the constructor of the class
var controller = function (routePrefix) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        var router = Router_1.default.getInstance();
        console.log('controller target =>', target);
        // eslint-disable-next-line prefer-const
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(MetaDataKeysEnum_1.MetaDataKeys.path, target.prototype, key);
            var method = Reflect.getMetadata(MetaDataKeysEnum_1.MetaDataKeys.method, target.prototype, key);
            if (path) {
                router[method]("".concat(routePrefix).concat(path), routeHandler);
            }
        }
    };
};
exports.controller = controller;
//# sourceMappingURL=controller.decorator.js.map