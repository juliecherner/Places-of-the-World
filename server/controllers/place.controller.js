const placeService = require("../services/place.service.js");

const findAll = async (req, res) => {
  try {
    const placesList = await placeService.all();
    res.status(200).send(placesList);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const findAllInRegion = async (req, res) => {
  const { region } = req.query;
  try {
    const placesList = await placeService.allInRegion(region);
    res.status(200).send(placesList);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const place = await placeService.oneById(id);
    res.status(200).send(place);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const findOneByCountry = async (req, res) => {
  const { country } = req.query;
  try {
    const placesList = await placeService.allOfCountry(country);
    res.status(200).send(placesList);
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

module.exports = {
  findAll,
  findAllInRegion,
  findOne,
  findOneByCountry,
  addOne,
};
