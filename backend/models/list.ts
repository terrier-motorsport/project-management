import mongoose from "mongoose";

const Schema = mongoose.Schema;

const listSchema = new mongoose.Schema({
  title: { type: String, required: true },
  boardId: { type: Schema.Types.ObjectId, ref: "board", required: true },
});

module.exports = mongoose.model("List", listSchema);