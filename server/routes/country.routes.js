const express = require("express");
const rootRouter = express.Router();
const countryController = require("../controllers/country.controller");

rootRouter.get("/region", countryController.getByRegion);

rootRouter.get("/", countryController.getAll);

rootRouter.get("/country", countryController.getByName);

module.exports = rootRouter;
