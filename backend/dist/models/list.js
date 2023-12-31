"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const listSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    boardId: { type: Schema.Types.ObjectId, ref: "board", required: true },
});
module.exports = mongoose_1.default.model("List", listSchema);
