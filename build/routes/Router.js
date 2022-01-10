"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterInitializer = void 0;
var express_1 = require("express");
var RouterInitializer = /** @class */ (function () {
    function RouterInitializer() {
        this.router = (0, express_1.Router)(); //inicializa la capacidad de crear rutas con express
    }
    return RouterInitializer;
}());
exports.RouterInitializer = RouterInitializer;
//# sourceMappingURL=Router.js.map