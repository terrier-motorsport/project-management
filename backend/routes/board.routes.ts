import express from 'express';
import {
  getBoards,
  createBoard,
  getBoardById,
  updateBoard,
  deleteBoard
} from '../controllers/board.controller';

import {
  createCard,
  getCardsByBoard,
  getCardById,
  updateCard,
  deleteCard
} from '../controllers/card.controller';

import {
  createColumn,
  getColumns,
  getColumnById,
  updateColumn,
  deleteColumn
} from '../controllers/column.controller';

const router = express.Router();

// Board Routes
router.post('/boards/new', createBoard);
router.get('/boards', getBoards);
router.get('/boards/:id', getBoardById);
router.put('/boards/:id', updateBoard);
router.delete('/boards/:id', deleteBoard);

// Card Routes
router.post('/boards/:boardId/cards/new', createCard);
router.get('/boards/:boardId/cards', getCardsByBoard);
router.get('/boards/cards/:cardId', getCardById);
router.put('/boards/cards/:cardId', updateCard);
router.delete('/boards/cards/:cardId', deleteCard);

// Column Routes
router.post('/columns/new', createColumn);
router.get('/columns', getColumns);
router.get('/columns/:columnId', getColumnById);
router.put('/columns/:columnId', updateColumn);
router.delete('/columns/:columnId', deleteColumn);

module.exports = router;