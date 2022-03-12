const express = require("express");
const rootRouter = express.Router();
const countryController = require("../controllers/country.controller");

rootRouter.get("/", countryController.getAll);
rootRouter.get("/country", countryController.getByName);
rootRouter.get("/region", countryController.getAllInRegion);

module.exports = rootRouter;
