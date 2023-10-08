import { model, Schema, Document } from 'mongoose';
import { IColumn } from './column'; 

const boardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {type: String,},
  columns: [{ type: Schema.Types.ObjectId, ref: 'Column' }],
});

export interface IBoard extends Document {
  title: string;
  description: string;
  columns: IColumn[];
}

export const BoardModel = model<IBoard>('Board', boardSchema);
