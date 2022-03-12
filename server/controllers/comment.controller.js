const commentService = require("../services/comment.service.js");

const findAllByPlace = async (req, res) => {
  const { placeId } = req.query;
  //add check
  try {
    const comments = await commentService.allByPlace(placeId);
    res.status(200).send(comments);
  } catch (error) {
    res.status(204).send({ error: error.message });
  }
};

const addOne = async (req, res) => {
  const newComment = req.body;
  try {
    const comment = await commentService.add(newComment);
    res.status(200).send(comment);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { findAllByPlace, addOne };
