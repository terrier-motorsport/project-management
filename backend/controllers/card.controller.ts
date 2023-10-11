import { Request, Response, NextFunction } from "express";
import { ICard, CardModel } from "../models/card";

export const createCard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      title,
      column,
      position,
      description,
      boardId,
      subteam,
      dueDate,
      labels,
    } = req.body;

    const newCard: ICard = new CardModel({
      title,
      column,
      position,
      description,
      boardId,
      subteam,
      dueDate,
      labels,
    });

    const savedCard: ICard = await newCard.save();

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
    const cards: ICard[] = await CardModel.find({ boardId });
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
    const card: ICard | null = await CardModel.findById(cardId);

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
    const updatedCard: ICard | null = await CardModel.findByIdAndUpdate(
      cardId,
      req.body,
      { new: true }
    );

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
    const deletedCard: ICard | null = await CardModel.findByIdAndRemove(cardId);

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
