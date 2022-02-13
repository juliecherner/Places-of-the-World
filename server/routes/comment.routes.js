const express = require("express");
const rootRouter = express.Router();
const commentController = require("../controllers/comment.controller");

rootRouter.get("/", commentController.findByPlace);

rootRouter.post("/", commentController.addOne);

module.exports = rootRouter;
