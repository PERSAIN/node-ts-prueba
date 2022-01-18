"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
        // eslint-disable-next-line prefer-const
        for (var key in target.prototype) {
            console.log(key);
            var routeHandler = target.prototype[key];
            console.log('routeHandler en controller =>', routeHandler);
            var path = Reflect.getMetadata(MetaDataKeysEnum_1.MetaDataKeys.path, target.prototype, key);
            console.log('path en controller =>', path);
            var method = Reflect.getMetadata(MetaDataKeysEnum_1.MetaDataKeys.method, target.prototype, key);
            console.log('method en controller =>', method);
            var middlewares = Reflect.getMetadata(MetaDataKeysEnum_1.MetaDataKeys.middleware, target.prototype, key) || [];
            if (path) {
                router[method].apply(router, __spreadArray(__spreadArray(["".concat(routePrefix).concat(path)], middlewares, false), [routeHandler], false));
            }
        }
    };
};
exports.controller = controller;
//# sourceMappingURL=controller.decorator.js.map