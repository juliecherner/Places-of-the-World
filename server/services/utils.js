const getCountriesArray = (arrayOfObjects) => {
  const newArray = arrayOfObjects.map((object) => object.country);
  return newArray;
};

module.exports = { getCountriesArray };
