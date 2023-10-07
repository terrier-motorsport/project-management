"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardModel = void 0;
const mongoose_1 = require("mongoose");
const boardSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    }
});
exports.BoardModel = (0, mongoose_1.model)('Board', boardSchema);
