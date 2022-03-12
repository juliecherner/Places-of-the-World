const Comment = require("../models/comment.model");

const allByPlace = async (placeId) => {
  const comments = await Comment.find({ placeId: placeId }).exec();
  if (comments.length < 1) {
    throw new Error(`There are no comments to place with id ${placeId}`);
  }
  return comments;
};

const add = async (newComment) => {
  const comment = await Comment.create(newComment);
  if (!comment) {
    throw new Error(`New comment is not added`);
  }
  return comment;
};

module.exports = { allByPlace, add };
