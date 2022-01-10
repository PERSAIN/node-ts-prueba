"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("../middlewares/multer"));
var cardsController_1 = __importDefault(require("../controllers/cardsController"));
var Router_1 = require("./Router");
var CardRoutes = /** @class */ (function (_super) {
    __extends(CardRoutes, _super);
    function CardRoutes() {
        var _this = _super.call(this) || this;
        _this.routes();
        return _this;
    }
    CardRoutes.prototype.routes = function () {
        var cardsController = new cardsController_1.default();
        this.router
            .route('/cards')
            .get(cardsController.getCards)
            .post(multer_1.default.single('photo'), cardsController.createCard)
            .put(cardsController.updateCard)
            .delete(cardsController.deleteCard);
        this.router.route('/cards/:id').get(cardsController.getCard);
    };
    return CardRoutes;
}(Router_1.RouterInitializer));
var cardRoutes = new CardRoutes();
exports.default = cardRoutes.router;
//# sourceMappingURL=cards.routes.js.map