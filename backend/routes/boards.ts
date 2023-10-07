import express from 'express';
import { getBoards } from "../controllers/board";
const router = express.Router();

router.get("/", getBoards);


module.exports = router;