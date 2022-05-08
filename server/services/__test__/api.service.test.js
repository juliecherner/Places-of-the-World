const { handleApiMistakes } = require("../api.service");

describe("countries API typing mistakes fixing", () => {
  test("antartic subregion is added", () => {
    const fixedItem = handleApiMistakes(
      "Country in Antarctic",
      "Antarctic",
      undefined
    );
    expect(fixedItem).toEqual({
      country: "Country in Antarctic",
      region: "Antarctic",
      subregion: "Antarctic",
    });
  });

  test("americas region is corrected", () => {
    const fixedItem = handleApiMistakes(
      "Country in America",
      "Americas",
      "North"
    );
    expect(fixedItem).toEqual({
      country: "Country in America",
      region: "America",
      subregion: "North",
    });
  });
});
