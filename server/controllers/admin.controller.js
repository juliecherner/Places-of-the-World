const { insertPlaces } = require("../services/place.service");
const { insertCountries } = require("../services/country.service");

const importPlaces = async () => {
  console.log("you tried to import places");
  insertPlaces();
  //takes 15+ min
};

const importCountries = async () => {
  console.log("you tried to import countries");
  insertCountries();
};

module.exports = { importPlaces, importCountries };
