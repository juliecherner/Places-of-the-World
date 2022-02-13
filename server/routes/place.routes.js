const express = require("express");
const rootRouter = express.Router();
const placeController = require("../controllers/place.controller.js");

rootRouter.get("/", placeController.findAll);
rootRouter.get("/all", placeController.findOneByCountry);
rootRouter.get("/:id", placeController.findOne);

rootRouter.post("/", placeController.addOne);

module.exports = rootRouter;
