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
exports.deleteBoard = exports.updateBoard = exports.getBoardById = exports.getBoards = exports.createBoard = void 0;
const board_1 = require("../models/board");
const createBoard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        if (!title) {
            return res.status(400).json({ error: 'Title is required.' });
        }
        const newBoard = new board_1.BoardModel({ title, description });
        const savedBoard = yield newBoard.save();
        res.status(201).json({
            message: "Board created successfully.",
            board: savedBoard,
        });
    }
    catch (err) {
        console.error("Error creating board:", err);
        next(err);
    }
});
exports.createBoard = createBoard;
const getBoards = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const boards = yield board_1.BoardModel.find({});
        res.status(200).json({
            message: "Success.",
            boards,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getBoards = getBoards;
const getBoardById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = req.params.id;
    try {
        const board = yield board_1.BoardModel.findById(boardId);
        if (!board) {
            return res.status(404).json({ message: "Board not found." });
        }
        res.status(200).json({
            message: "Success.",
            board,
        });
    }
    catch (err) {
        console.error("Error fetching board:", err);
        next(err);
    }
});
exports.getBoardById = getBoardById;
const updateBoard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = req.params.id;
    const { title, description } = req.body;
    try {
        const updatedBoard = yield board_1.BoardModel.findByIdAndUpdate(boardId, { title, description }, { new: true });
        if (!updatedBoard) {
            return res.status(404).json({ message: "Board not found." });
        }
        res.status(200).json({
            message: "Board updated successfully.",
            board: updatedBoard,
        });
    }
    catch (err) {
        console.error("Error updating board:", err);
        next(err);
    }
});
exports.updateBoard = updateBoard;
const deleteBoard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = req.params.id;
    try {
        const deletedBoard = yield board_1.BoardModel.findByIdAndRemove(boardId);
        if (!deletedBoard) {
            return res.status(404).json({ message: "Board not found." });
        }
        res.status(200).json({
            message: "Board deleted successfully.",
            board: deletedBoard,
        });
    }
    catch (err) {
        console.error("Error deleting board:", err);
        next(err);
    }
});
exports.deleteBoard = deleteBoard;
