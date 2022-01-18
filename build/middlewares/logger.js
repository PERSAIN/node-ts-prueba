"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    console.log('our decorator middleware is working!');
    next();
};
exports.default = logger;
//# sourceMappingURL=logger.js.map