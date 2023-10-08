import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { BoardModel } from "../models/board";

export const createBoard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Title is required.' });
    }
    const newBoard = new BoardModel({ title, description });
    const savedBoard = await newBoard.save();

    res.status(201).json({
      message: "Board created successfully.",
      board: savedBoard,
    });
  } catch (err) {
    console.error("Error creating board:", err);
    next(err);
  }
};

export const getBoards = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const boards = await BoardModel.find({});
      res.status(200).json({
        message: "Success.",
        boards,
      });
    } catch (err) {
      next(err);
    }
  };
  
  export const getBoardById = async (req: Request, res: Response, next: NextFunction) => {
    const boardId = req.params.id;
  
    try {
      const board = await BoardModel.findById(boardId);
  
      if (!board) {
        return res.status(404).json({ message: "Board not found." });
      }
  
      res.status(200).json({
        message: "Success.",
        board,
      });
    } catch (err) {
      console.error("Error fetching board:", err);
      next(err);
    }
  };


  export const updateBoard = async (req: Request, res: Response, next: NextFunction) => {
    const boardId = req.params.id;
    const { title, description } = req.body;
  
    try {
      const updatedBoard = await BoardModel.findByIdAndUpdate(
        boardId,
        { title, description },
        { new: true } 
      );
  
      if (!updatedBoard) {
        return res.status(404).json({ message: "Board not found." });
      }
  
      res.status(200).json({
        message: "Board updated successfully.",
        board: updatedBoard,
      });
    } catch (err) {
      console.error("Error updating board:", err);
      next(err);
    }
  };


  export const deleteBoard = async (req: Request, res: Response, next: NextFunction) => {
    const boardId = req.params.id;
  
    try {
      const deletedBoard = await BoardModel.findByIdAndRemove(boardId);
  
      if (!deletedBoard) {
        return res.status(404).json({ message: "Board not found." });
      }
  
      res.status(200).json({
        message: "Board deleted successfully.",
        board: deletedBoard,
      });
    } catch (err) {
      console.error("Error deleting board:", err);
      next(err);
    }
  };