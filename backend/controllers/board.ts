import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { BoardModel } from "../models/board";


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
  
