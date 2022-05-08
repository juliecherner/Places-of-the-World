const { clarifyLocation, checkLocation } = require("../scraper.service");

test("clarify location", async () => {
  const updatedObject = await clarifyLocation({ place: "Wow" }, "Canada");
  expect(updatedObject).toEqual({ place: "Wow", country: "Canada" });
});

test("check location", async () => {
  const updatedObject = await checkLocation(
    { country: "Canada", subLocation: "South" },
    "Canada2"
  );
  expect(updatedObject).toEqual({
    country: "Canada2",
    subLocation: "South, Canada",
  });
});
