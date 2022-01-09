"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
// We create a singleton class here
var Config = /** @class */ (function () {
    function Config() {
        dotenv_1.default.config();
    }
    Config.getInstance = function () {
        // Lazytest
        if (!this.instance) {
            this.instance = new Config();
        }
        return this.instance;
    };
    Object.defineProperty(Config.prototype, "port", {
        get: function () {
            return process.env.PORT || '3000';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "Cors", {
        get: function () {
            return process.env.CORS || '*';
        },
        enumerable: false,
        configurable: true
    });
    return Config;
}());
exports.default = Config;
//# sourceMappingURL=index.js.map