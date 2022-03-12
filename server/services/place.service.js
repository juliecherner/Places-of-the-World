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

module.exports = { all, oneById, allOfCountry, insertPlaces, newPlace };
