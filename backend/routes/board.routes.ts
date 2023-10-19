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
router.post('/new', createBoard);
router.get('/', getBoards);
router.get('/:id', getBoardById);
router.put('/:id', updateBoard);
router.delete('/:id', deleteBoard);

// Card Routes
router.post('/:boardId/cards/new', createCard);
router.get('/:boardId/cards', getCardsByBoard);
router.get('/cards/:cardId', getCardById);
router.put('/cards/:cardId', updateCard);
router.delete('/cards/:cardId', deleteCard);

// Column Routes
router.post('/columns/new', createColumn);
router.get('/columns', getColumns);
router.get('/columns/:columnId', getColumnById);
router.put('/columns/:columnId', updateColumn);
router.delete('/columns/:columnId', deleteColumn);

module.exports = router;