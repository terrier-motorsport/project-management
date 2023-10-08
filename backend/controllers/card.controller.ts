import { Request, Response, NextFunction } from "express";
const Card = require("../models/Card");

export const createCard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      title,
      column,
      position,
      description,
      boardId,
      listId,
      subteam,
      dueDate,
      labels,
    } = req.body;

    const newCard = new Card({
      title,
      column,
      position,
      description,
      boardId,
      listId,
      subteam,
      dueDate,
      labels,
    });

    const savedCard = await newCard.save();

    res.status(201).json({
      message: "Card created successfully.",
      card: savedCard,
    });
  } catch (err) {
    console.error("Error creating card:", err);
    next(err);
  }
};

export const getCardsByBoard = async (req: Request, res: Response, next: NextFunction) => {
  const boardId = req.params.boardId;

  try {
    const cards = await Card.find({ boardId });
    res.status(200).json({
      message: "Success.",
      cards,
    });
  } catch (err) {
    console.error("Error fetching cards:", err);
    next(err);
  }
};

export const getCardById = async (req: Request, res: Response, next: NextFunction) => {
  const cardId = req.params.cardId;

  try {
    const card = await Card.findById(cardId);

    if (!card) {
      return res.status(404).json({ message: "Card not found." });
    }

    res.status(200).json({
      message: "Success.",
      card,
    });
  } catch (err) {
    console.error("Error fetching card:", err);
    next(err);
  }
};

export const updateCard = async (req: Request, res: Response, next: NextFunction) => {
  const cardId = req.params.cardId;

  try {
    const updatedCard = await Card.findByIdAndUpdate(cardId, req.body, {
      new: true,
    });

    if (!updatedCard) {
      return res.status(404).json({ message: "Card not found." });
    }

    res.status(200).json({
      message: "Card updated successfully.",
      card: updatedCard,
    });
  } catch (err) {
    console.error("Error updating card:", err);
    next(err);
  }
};

export const deleteCard = async (req: Request, res: Response, next: NextFunction) => {
  const cardId = req.params.cardId;

  try {
    const deletedCard = await Card.findByIdAndRemove(cardId);

    if (!deletedCard) {
      return res.status(404).json({ message: "Card not found." });
    }

    res.status(200).json({
      message: "Card deleted successfully.",
      card: deletedCard,
    });
  } catch (err) {
    console.error("Error deleting card:", err);
    next(err);
  }
};