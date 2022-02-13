const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  placeId: {
    type: String,
    required: true,
  },
  user: { type: String, required: true },
  rate: { type: Number, required: true },
  text: { type: String, required: true },
  updated: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
