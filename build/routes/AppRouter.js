"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var express_1 = require("express");
var Routes = /** @class */ (function () {
    function Routes() {
        this.router = (0, express_1.Router)(); //inicializa la capacidad de crear rutas con express
    }
    return Routes;
}());
exports.Routes = Routes;
var routes = new Routes();
exports.default = routes.router;
//# sourceMappingURL=AppRouter.js.map