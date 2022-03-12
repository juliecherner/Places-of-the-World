const express = require("express");
const rootRouter = express.Router();
const commentController = require("../controllers/comment.controller");

rootRouter.get("/", commentController.findAllByPlace);

rootRouter.post("/", commentController.addOne);

module.exports = rootRouter;
