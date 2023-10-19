"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const board_controller_1 = require("../controllers/board.controller");
const card_controller_1 = require("../controllers/card.controller");
const column_controller_1 = require("../controllers/column.controller");
const router = express_1.default.Router();
// Board Routes
router.post('/new', board_controller_1.createBoard);
router.get('/', board_controller_1.getBoards);
router.get('/:id', board_controller_1.getBoardById);
router.put('/:id', board_controller_1.updateBoard);
router.delete('/:id', board_controller_1.deleteBoard);
// Card Routes
router.post('/:boardId/cards/new', card_controller_1.createCard);
router.get('/:boardId/cards', card_controller_1.getCardsByBoard);
router.get('/cards/:cardId', card_controller_1.getCardById);
router.put('/cards/:cardId', card_controller_1.updateCard);
router.delete('/cards/:cardId', card_controller_1.deleteCard);
// Column Routes
router.post('/columns/new', column_controller_1.createColumn);
router.get('/columns', column_controller_1.getColumns);
router.get('/columns/:columnId', column_controller_1.getColumnById);
router.put('/columns/:columnId', column_controller_1.updateColumn);
router.delete('/columns/:columnId', column_controller_1.deleteColumn);
module.exports = router;
