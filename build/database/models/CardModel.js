"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var CardSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    photoPath: String,
    description: { type: String, required: true },
    shortDescription: { type: String, required: true }
}, {
    timestamps: true // add "created at and updated at"
});
CardSchema.index({ title: 'text' });
exports.default = (0, mongoose_1.model)('Card', CardSchema);
//# sourceMappingURL=CardModel.js.map