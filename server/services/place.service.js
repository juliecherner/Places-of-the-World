const mongoose = require("mongoose");
const Place = require("../models/place.model");
const scraper = require("./scraper.service.js");

const all = async () => {
  try {
    const places = await Place.find().exec();
    return places;
  } catch {
    throw new Error("Couldn't get all users from mongo");
  }
};

const oneById = async (id) => {
  try {
    const place = await Place.find({ _id: id }).exec();
    return place;
  } catch {
    throw new Error(`Couldn't get a place with id ${id}`);
  }
};

const onesByCountry = async (country) => {
  try {
    const place = await Place.find({ country: country }).exec();
    return place;
  } catch {
    throw new Error(`Couldn't get a place in country ${id}`);
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
  console.log(places.length);
  try {
    Place.insertMany(places);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { all, oneById, onesByCountry, insertPlaces, newPlace };
