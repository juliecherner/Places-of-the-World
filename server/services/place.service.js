const mongoose = require("mongoose");
const Place = require("../models/place.model");
const scraper = require("./scraper.service.js");
const countryService = require("./country.service.js");
const { getCountriesArray } = require("./utils");

const all = async () => {
  try {
    const places = await Place.find().exec();
    return places;
  } catch {
    throw new Error("Couldn't get all users from mongo");
  }
};

const allInRegion = async (region) => {
  const countriesInRegion = await countryService.allInRegion(region);
  const countriesArray = getCountriesArray(countriesInRegion);
  try {
    const places = await Place.find({
      country: { $in: countriesArray },
    }).exec();
    return places;
  } catch {
    throw new Error("Couldn't get all users from mongo");
  }
};

const oneById = async (id) => {
  try {
    const place = await Place.findOne({ _id: id }).exec();
    const countryName = place.country;
    const [placeLocation] = await countryService.byName(countryName);
    return { place, placeLocation };
  } catch {
    throw new Error(`Couldn't get a place with id ${id}`);
  }
};

const allOfCountry = async (country) => {
  try {
    const places = await Place.find({ country: country }).exec();
    return places;
  } catch {
    throw new Error(`Couldn't find any places in country ${country}`);
  }
};

const newPlace = async (place) => {
  place.alt = place.place;
  const placeNew = await Place.create(place);
  if (!placeNew) {
    throw new Error(`New place is not created`);
  }
  return placeNew;
};

const insertPlaces = async () => {
  const places = await scraper();
  try {
    Place.insertMany(places);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  all,
  allInRegion,
  oneById,
  allOfCountry,
  insertPlaces,
  newPlace,
};
