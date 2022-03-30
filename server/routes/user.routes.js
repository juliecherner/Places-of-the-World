const express = require("express");
const rootRouter = express.Router();
const userController = require("../controllers/user.controller.js");

rootRouter.post("/signup", userController.addOne);
rootRouter.post("/login", userController.findOne);

module.exports = rootRouter;
