import { model, Schema, Document } from 'mongoose';
import { ICard } from './card';

const columnSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }], 
});

export interface IColumn extends Document {
  name: string;
  cards: ICard[];
}

export const ColumnModel = model<IColumn>('Column', columnSchema);
