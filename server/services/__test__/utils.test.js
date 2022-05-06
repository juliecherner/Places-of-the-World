const utils = require("../utils");

describe("user service", () => {
  test("takes only country names from the array of objects", () => {
    const recievedArray = utils.getCountriesArray([
      {
        _id: "61fd038a1ac3fd5926478b05",
        country: "Aruba",
        region: "America",
        subregion: "Caribbean",
      },
      {
        _id: "61fd038a1ac3fd5926478b06",
        country: "Djibouti",
        region: "Africa",
        subregion: "Eastern Africa",
      },
    ]);
    expect(recievedArray).toEqual(["Aruba", "Djibouti"]);
    expect(recievedArray).not.toEqual([]);
  });

  test("doesn't take anything from array which object dosn't contain key country", () => {
    const recievedArray = utils.getCountriesArray([
      {
        _id: "61fd038a1ac3fd5926478b05",
        region: "America",
        subregion: "Caribbean",
      },
      {
        _id: "61fd038a1ac3fd5926478b06",
        region: "Africa",
        subregion: "Eastern Africa",
      },
    ]);
    expect(recievedArray).toEqual([]);
  });
});
