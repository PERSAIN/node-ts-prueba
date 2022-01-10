"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = __importDefault(require("../config"));
var config = config_1.default.getInstance();
mongoose_1.default.connect(config.mongoUri);
var connection = mongoose_1.default.connection;
connection.once("open", function () {
    console.log("conexion establecida con la base de datos");
});
connection.on("error", function (err) {
    console.log(err);
    process.exit(0);
});
//# sourceMappingURL=dataBase.js.map