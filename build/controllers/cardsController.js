"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardsController = /** @class */ (function () {
    function CardsController() {
    }
    CardsController.prototype.getCard = function (req, res) {
        res.json({ message: 'gettingOnecard' });
    };
    CardsController.prototype.getCards = function (req, res) {
        res.json({ message: 'gettingAllTheCards' });
    };
    CardsController.prototype.createCard = function (req, res) {
        res.json({ message: 'createCard' });
    };
    CardsController.prototype.updateCard = function (req, res) {
        res.json({ message: 'updatingCard' });
    };
    CardsController.prototype.deleteCard = function (req, res) {
        res.json({ message: 'deletingCard' });
    };
    return CardsController;
}());
exports.default = CardsController;
//# sourceMappingURL=cardsController.js.map