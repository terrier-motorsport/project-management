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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteColumn = exports.updateColumn = exports.getColumnById = exports.getColumns = exports.createColumn = void 0;
const column_1 = require("../models/column");
const createColumn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const newColumn = new column_1.ColumnModel({
            name,
            cards: [],
        });
        const savedColumn = yield newColumn.save();
        res.status(201).json({
            message: "Column created successfully.",
            column: savedColumn,
        });
    }
    catch (err) {
        console.error("Error creating column:", err);
        next(err);
    }
});
exports.createColumn = createColumn;
const getColumns = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const columns = yield column_1.ColumnModel.find({});
        res.status(200).json({
            message: "Success.",
            columns,
        });
    }
    catch (err) {
        console.error("Error fetching columns:", err);
        next(err);
    }
});
exports.getColumns = getColumns;
const getColumnById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const columnId = req.params.columnId;
    try {
        const column = yield column_1.ColumnModel.findById(columnId).populate("cards");
        if (!column) {
            return res.status(404).json({ message: "Column not found." });
        }
        res.status(200).json({
            message: "Success.",
            column,
        });
    }
    catch (err) {
        console.error("Error fetching column:", err);
        next(err);
    }
});
exports.getColumnById = getColumnById;
const updateColumn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const columnId = req.params.columnId;
    try {
        const updatedColumn = yield column_1.ColumnModel.findByIdAndUpdate(columnId, req.body, { new: true });
        if (!updatedColumn) {
            return res.status(404).json({ message: "Column not found." });
        }
        res.status(200).json({
            message: "Column updated successfully.",
            column: updatedColumn,
        });
    }
    catch (err) {
        console.error("Error updating column:", err);
        next(err);
    }
});
exports.updateColumn = updateColumn;
const deleteColumn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const columnId = req.params.columnId;
    try {
        const deletedColumn = yield column_1.ColumnModel.findByIdAndRemove(columnId);
        if (!deletedColumn) {
            return res.status(404).json({ message: "Column not found." });
        }
        res.status(200).json({
            message: "Column deleted successfully.",
            column: deletedColumn,
        });
    }
    catch (err) {
        console.error("Error deleting column:", err);
        next(err);
    }
});
exports.deleteColumn = deleteColumn;
