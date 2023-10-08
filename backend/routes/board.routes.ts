import express from 'express';
import { getBoards, createBoard, getBoardById, updateBoard, deleteBoard} from "../controllers/board.controller";

import { createCard, getCardsByBoard, getCardById, updateCard, deleteCard} from "../controllers/card.controller"

const router = express.Router();

router.post("/new", createBoard);
router.get("/", getBoards);
router.get("/:id", getBoardById);
router.put("/:id", updateBoard);
router.delete("/:id", deleteBoard);

router.post("/:boardId/cards", createCard);
router.post("/:boardId/cards", getCardsByBoard);
router.get("/cards/:cardId", getCardById);
router.put("/cards/:cardId", updateCard);
router.delete("/cards/:cardId", deleteCard);


module.exports = router;