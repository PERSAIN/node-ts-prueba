"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
require("reflect-metadata");
var get = function (path) {
    return function (target, key, desc) {
        Reflect.defineMetadata('path', path, target, key);
    };
};
exports.get = get;
//# sourceMappingURL=routes.js.map