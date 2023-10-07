import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    boardId: { type: Schema.Types.ObjectId, ref: "board", required: true },
    listId: { type: Schema.Types.ObjectId, ref: "list", required: true },
    subteam: {type: Schema.Types.String, ref: "subteams", required: true}
  });
  
  module.exports = mongoose.model("Card", cardSchema);