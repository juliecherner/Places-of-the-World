const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  imgURL: {
    type: String,
    unique: true,
    required: true,
  },
  alt: { type: String },
  link: { type: String },
  place: {
    type: String,
    unique: true,
    required: true,
  },
  subLocation: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
