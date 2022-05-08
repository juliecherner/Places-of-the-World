const axios = require("axios");

const getAll = async () => {
  try {
    const { data } = await axios({
      url: "https://restcountries.com/v3.1/all",
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

async function cleanedCountries() {
  const data = await getAll();

  const cleanedCountries = data.map((count) => {
    let country = count.name.common;
    let region = count.region;
    let subRegion = count.subregion;

    if (subRegion === undefined || region === "Americas") {
      return handleApiMistakes(country, region, subRegion);
    } else {
      return { country: country, region: region, subregion: subRegion };
    }
  });

  return cleanedCountries;
}

function handleApiMistakes(country, region, subRegion) {
  if (subRegion === undefined) {
    return { country: country, region: region, subregion: "Antarctic" };
  }
  if (region === "Americas") {
    return { country: country, region: "America", subregion: subRegion };
  }
}

async function getCountriesNames() {
  const countries = await allToMongo();
  let newCountries = countries.map((country) => country.country);
  return newCountries;
}

module.exports = { cleanedCountries, getCountriesNames, handleApiMistakes };
