const { cleanedCountries } = require("./api.service");
const Country = require("../models/country.model");

const insertCountries = async () => {
  const countries = await cleanedCountries();
  try {
    Country.create(countries);
  } catch (error) {
    throw new Error(error);
  }
};

const allInRegion = async (region) => {
  const countries = await Country.find({ region: region }).exec();
  if (countries.length < 1) {
    throw new Error(`There are no countries in region ${region}`);
  }
  return countries;
};

const all = async () => {
  const countries = await Country.find().exec();
  if (countries.length < 1) {
    throw new Error(`Couldn't get all countries`);
  }
  return countries;
};

const byName = async (country) => {
  const countries = await Country.find({ country: country }).exec();
  if (countries.length < 1) {
    throw new Error(`Couldn't find country ${country}`);
  }
  return countries;
};

module.exports = { insertCountries, allInRegion, all, byName };
