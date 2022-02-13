const commentService = require("../services/comment.service.js");

const findByPlace = async (req, res) => {
  const { placeId } = req.query;
  try {
    const comments = await commentService.byParameter(placeId);
    res.status(200).send(comments);
  } catch (error) {
    res.status(400).send({ error: error.message });
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

module.exports = { findByPlace, addOne };
