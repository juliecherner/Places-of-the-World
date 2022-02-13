const express = require("express");
const rootRouter = express.Router();
const adminController = require("../controllers/admin.controller.js");

//rootRouter.get("/import-countries", adminController.importCountries);

//rootRouter.post("import-places", adminController.importPlaces);

module.exports = rootRouter;
