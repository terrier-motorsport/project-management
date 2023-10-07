import { model, Schema, Document } from 'mongoose';



const boardSchema = new Schema({
  title: {
    type: String,
    required: true,
  }
});

export interface IBoard extends Document {
  title: string;
  description: String;
}



export const BoardModel = model<IBoard>('Board', boardSchema);

