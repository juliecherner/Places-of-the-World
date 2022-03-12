const express = require("express");
const rootRouter = express.Router();
const placeController = require("../controllers/place.controller.js");

rootRouter.get("/", placeController.findAll);
rootRouter.get("/by-region", placeController.findAllInRegion);
rootRouter.get("/by-id/:id", placeController.findOne);
rootRouter.post("/", placeController.addOne);
rootRouter.get("/by-country", placeController.findAllByCountry);

module.exports = rootRouter;
