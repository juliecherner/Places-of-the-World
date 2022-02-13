const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  country: {
    type: String,
    unique: true,
  },
  region: { type: String },
  subregion: { type: String },
});

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;
