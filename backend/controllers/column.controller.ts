import { Request, Response, NextFunction } from "express";
import { IColumn, ColumnModel } from "../models/column";

export const createColumn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;

    const newColumn: IColumn = new ColumnModel({
      name,
      cards: [],
    });

    const savedColumn: IColumn = await newColumn.save();

    res.status(201).json({
      message: "Column created successfully.",
      column: savedColumn,
    });
  } catch (err) {
    console.error("Error creating column:", err);
    next(err);
  }
};

export const getColumns = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const columns: IColumn[] = await ColumnModel.find({});
    res.status(200).json({
      message: "Success.",
      columns,
    });
  } catch (err) {
    console.error("Error fetching columns:", err);
    next(err);
  }
};

export const getColumnById = async (req: Request, res: Response, next: NextFunction) => {
  const columnId = req.params.columnId;

  try {
    const column: IColumn | null = await ColumnModel.findById(columnId).populate("cards");

    if (!column) {
      return res.status(404).json({ message: "Column not found." });
    }

    res.status(200).json({
      message: "Success.",
      column,
    });
  } catch (err) {
    console.error("Error fetching column:", err);
    next(err);
  }
};

export const updateColumn = async (req: Request, res: Response, next: NextFunction) => {
  const columnId = req.params.columnId;

  try {
    const updatedColumn: IColumn | null = await ColumnModel.findByIdAndUpdate(
      columnId,
      req.body,
      { new: true }
    );

    if (!updatedColumn) {
      return res.status(404).json({ message: "Column not found." });
    }

    res.status(200).json({
      message: "Column updated successfully.",
      column: updatedColumn,
    });
  } catch (err) {
    console.error("Error updating column:", err);
    next(err);
  }
};

export const deleteColumn = async (req: Request, res: Response, next: NextFunction) => {
  const columnId = req.params.columnId;

  try {
    const deletedColumn: IColumn | null = await ColumnModel.findByIdAndRemove(columnId);

    if (!deletedColumn) {
      return res.status(404).json({ message: "Column not found." });
    }

    res.status(200).json({
      message: "Column deleted successfully.",
      column: deletedColumn,
    });
  } catch (err) {
    console.error("Error deleting column:", err);
    next(err);
  }
};
