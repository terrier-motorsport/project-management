import mongoose, { Document, Schema, Model } from 'mongoose';

export interface ICard extends Document {
  title: string;
  column: string;
  position: number;
  description?: string;
  boardId: Schema.Types.ObjectId;
  subteam: Schema.Types.ObjectId;
  dueDate?: Date;
  labels: string[];
}

const cardSchema: Schema<ICard> = new mongoose.Schema({
  title: { type: String, required: true },
  column: { type: String, required: true },
  position: { type: Number, required: true },
  description: { type: String },
  boardId: { type: Schema.Types.ObjectId, ref: "Board", required: true },
  subteam: { type: Schema.Types.ObjectId, ref: "Subteam", required: true },
  dueDate: { type: Date },
  labels: [{ type: String }],
});

export const CardModel: Model<ICard> = mongoose.model<ICard>('Card', cardSchema);
