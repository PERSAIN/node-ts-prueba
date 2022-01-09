"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var config_1 = __importDefault(require("./config"));
var config = config_1.default.getInstance();
var Server = /** @class */ (function () {
    function Server() {
        this.port = config.port;
        this.createServer();
        this.middlewares();
        this.startServer();
    }
    Server.prototype.getApp = function () {
        return this.app;
    };
    Server.prototype.createServer = function () {
        this.app = (0, express_1.default)();
    };
    Server.prototype.middlewares = function () {
        this.app.use((0, morgan_1.default)('dev')); // we use this to see all the http querys (get,post,dekete,put)
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.json()); // Is based in bodyParser
        this.app.use((0, cors_1.default)());
        this.app.use((0, helmet_1.default)());
    };
    Server.prototype.startServer = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Listening on http://localhost:".concat(_this.port));
        });
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=Server.js.map