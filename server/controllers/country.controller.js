const countryService = require("../services/country.service.js");

const getAllInRegion = async (req, res) => {
  const { region } = req.query;
  try {
    const countriesList = await countryService.allInRegion(region);
    res.status(200).send(countriesList);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const countriesList = await countryService.all();
    res.status(200).send(countriesList);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getByName = async (req, res) => {
  const { country } = req.query;
  try {
    const countriesList = await countryService.byName(country);
    res.status(200).send(countriesList);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { getAllInRegion, getAll, getByName };
