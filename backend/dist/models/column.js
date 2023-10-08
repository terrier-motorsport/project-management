"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnModel = void 0;
const mongoose_1 = require("mongoose");
const columnSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    cards: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Card' }],
});
exports.ColumnModel = (0, mongoose_1.model)('Column', columnSchema);
