"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var CardModel_1 = __importDefault(require("../database/models/CardModel"));
var CardsController = /** @class */ (function () {
    function CardsController() {
    }
    CardsController.prototype.getCard = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, card, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, CardModel_1.default.findById(id)];
                    case 1:
                        card = _a.sent();
                        return [2 /*return*/, res.status(200).json(card)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(404).json(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CardsController.prototype.getCards = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var cards, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, CardModel_1.default.find()];
                    case 1:
                        cards = _a.sent();
                        return [2 /*return*/, res.status(200).json(cards)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(404).json(error_2)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CardsController.prototype.createCard = function (req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, title, description, shortDescription, newCard, card;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = req.body, title = _b.title, description = _b.description, shortDescription = _b.shortDescription;
                        newCard = {
                            title: title,
                            photoPath: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path,
                            description: description,
                            shortDescription: shortDescription
                        };
                        card = new CardModel_1.default(newCard);
                        return [4 /*yield*/, card.save()];
                    case 1:
                        _c.sent();
                        return [2 /*return*/, res.status(201).json({ message: 'createdCard', card: card })];
                }
            });
        });
    };
    CardsController.prototype.updateCard = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, title, description, updatedCard, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        _a = req.body, title = _a.title, description = _a.description;
                        return [4 /*yield*/, CardModel_1.default.findByIdAndUpdate(id, {
                                title: title,
                                description: description
                            })];
                    case 1:
                        updatedCard = _b.sent();
                        return [2 /*return*/, res.status(200).json({
                                message: 'Successfully updated',
                                updatedCard: updatedCard
                            })];
                    case 2:
                        error_3 = _b.sent();
                        return [2 /*return*/, res.status(404).json(error_3)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CardsController.prototype.deleteCard = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, card, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        id = req.params.id;
                        return [4 /*yield*/, CardModel_1.default.findByIdAndRemove(id)];
                    case 1:
                        card = _a.sent();
                        if (!card) return [3 /*break*/, 3];
                        return [4 /*yield*/, fs_extra_1.default.unlink(path_1.default.resolve(card.photoPath))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, res.status(202).json({ message: 'cardDeleted', card: card })];
                    case 4:
                        error_4 = _a.sent();
                        return [2 /*return*/, res.status(404).json(error_4)];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return CardsController;
}());
exports.default = CardsController;
//# sourceMappingURL=cardsController.js.map