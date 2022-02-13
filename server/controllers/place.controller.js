const placeService = require("../services/place.service.js");

const findAll = async (req, res) => {
  try {
    const countriesList = await placeService.all();
    res.status(200).send(countriesList);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const countriesList = await placeService.oneById(id);
    res.status(200).send(countriesList);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const findOneByCountry = async (req, res) => {
  const { country } = req.query;
  try {
    const countriesList = await placeService.onesByCountry(country);
    res.status(200).send(countriesList);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const addOne = async (req, res) => {
  const newPlace = req.body;
  try {
    const place = await placeService.newPlace(newPlace);
    res.status(200).send(place);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { findAll, findOne, findOneByCountry, addOne };
