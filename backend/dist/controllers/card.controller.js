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
exports.deleteCard = exports.updateCard = exports.getCardById = exports.getCardsByBoard = exports.createCard = void 0;
const card_1 = require("../models/card");
const createCard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, column, position, description, boardId, subteam, dueDate, labels, } = req.body;
        const newCard = new card_1.CardModel({
            title,
            column,
            position,
            description,
            boardId,
            subteam,
            dueDate,
            labels,
        });
        // Check References, Form will send strings with names. Object takes ID.
        // Update Note: We will force ID. 
        // In front-end, column and subteam will be a dropdown select.
        // Board will be done by context
        const savedCard = yield newCard.save();
        res.status(201).json({
            message: "Card created successfully.",
            card: savedCard,
        });
    }
    catch (err) {
        console.error("Error creating card:", err);
        next(err);
    }
});
exports.createCard = createCard;
const getCardsByBoard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = req.params.boardId;
    try {
        const cards = yield card_1.CardModel.find({ boardId });
        res.status(200).json({
            message: "Success.",
            cards,
        });
    }
    catch (err) {
        console.error("Error fetching cards:", err);
        next(err);
    }
});
exports.getCardsByBoard = getCardsByBoard;
const getCardById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const cardId = req.params.cardId;
    try {
        const card = yield card_1.CardModel.findById(cardId);
        if (!card) {
            return res.status(404).json({ message: "Card not found." });
        }
        res.status(200).json({
            message: "Success.",
            card,
        });
    }
    catch (err) {
        console.error("Error fetching card:", err);
        next(err);
    }
});
exports.getCardById = getCardById;
const updateCard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const cardId = req.params.cardId;
    try {
        const updatedCard = yield card_1.CardModel.findByIdAndUpdate(cardId, req.body, { new: true });
        if (!updatedCard) {
            return res.status(404).json({ message: "Card not found." });
        }
        res.status(200).json({
            message: "Card updated successfully.",
            card: updatedCard,
        });
    }
    catch (err) {
        console.error("Error updating card:", err);
        next(err);
    }
});
exports.updateCard = updateCard;
const deleteCard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const cardId = req.params.cardId;
    try {
        const deletedCard = yield card_1.CardModel.findByIdAndRemove(cardId);
        if (!deletedCard) {
            return res.status(404).json({ message: "Card not found." });
        }
        res.status(200).json({
            message: "Card deleted successfully.",
            card: deletedCard,
        });
    }
    catch (err) {
        console.error("Error deleting card:", err);
        next(err);
    }
});
exports.deleteCard = deleteCard;
