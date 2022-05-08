const puppeteer = require("puppeteer-extra");
const AdblockerPlugin = require("puppeteer-extra-plugin-adblocker");
puppeteer.use(AdblockerPlugin());

const { getCountriesNames } = require("./api.service.js");
const { states, statesUK } = require("../constants/constants");

const url2018 = "https://time.com/collection/worlds-greatest-places-2018/";
const url2019 = "https://time.com/collection/worlds-greatest-places-2019/";
const url2021 = "https://time.com/collection/worlds-greatest-places-2021/";

async function scraper() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 800,
  });
  let allInfo = [];
  let allRegular = [];
  const results2019 = await getDataRegular(page, url2019);
  const results2018 = await getDataRegular(page, url2018);
  const results2021 = await getData2021(page);

  allRegular = results2019.concat(results2018);

  const allInfoRegular = await addInfoRegural(page, allRegular);
  const allInfo2021 = await addInfo2021(page, results2021);

  allInfo = allInfo2021.concat(allInfoRegular);
  await browser.close();
  return allInfo;
}

async function addInfo2021(page, array) {
  let fullData = [];
  for (let i = 0; i < array.length; i++) {
    array[i].description = array[i].alt;
    fullData.push(array[i]);
  }
  return fullData;
}

async function addInfoRegural(page, array) {
  let fullData = [];
  for (let i = 0; i < array.length; i++) {
    await page.goto(array[i].link);
    await scrollToBottom(page);

    const results = await page.evaluate(async () => {
      const block = document.querySelector("article p").innerText;
      return block;
    });
    //evaluate is in built function and doesn't take arguments from outside

    array[i].description = await results;
    fullData.push(array[i]);
  }
  return fullData;
}

async function getData2021(page) {
  await page.goto(url2021);
  await scrollToBottom(page);

  const results = await page.evaluate(async () => {
    let results = [];
    const blocks = document.querySelectorAll(".section-list__item article");

    for (let i = 0; i < blocks.length; i++) {
      let block = blocks[i];
      let imgURL = block
        .querySelector("a div div div div")
        .getAttribute("data-src");
      let alt = block
        .querySelector("a div div div div")
        .getAttribute("data-alt");
      let link = block.querySelector("a").href;

      const country = block.querySelector("a h3").innerText;

      if (country.includes(", ")) {
        const locationArray = country.split(", ");
        results.push({
          imgURL: imgURL,
          alt: alt,
          link: link,
          place: locationArray[0],
          subLocation: locationArray[0],
          country: locationArray[1],
        });
      } else if (country === "Antarctic" || country === "Antarctica") {
        const locationArray = country.split(", ");
        results.push({
          imgURL: imgURL,
          alt: alt,
          link: link,
          place: locationArray[0],
          subLocation: "Antarctica",
          country: "French Southern and Antarctic Lands",
        });
      } else {
        continue;
      }
    }
    return results;
  });
  //evaluate is in built function and doesn't take arguments from outside
  const filteredResults = await filterResults(results);

  return filteredResults;
}

async function getDataRegular(page, urlYear) {
  await page.goto(urlYear);
  await scrollToBottom(page);

  const results = await page.evaluate(async () => {
    let results = [];
    const blocks = document.querySelectorAll("._1pBCtbMd");

    for (let i = 0; i < blocks.length; i++) {
      let block = blocks[i];
      let imgURL = block.querySelector("a img").getAttribute("src");
      let alt = block.querySelector("a img").getAttribute("alt");
      let link = block.querySelector(" div > div > a").href;

      let place = block.querySelector("div > div > a > div").innerText;
      const country = block.querySelector(
        "div > div > a > .secondary-mobile-font-size "
      ).innerText;

      if (country.includes(", ")) {
        const locationArray = country.split(", ");
        results.push({
          imgURL: imgURL,
          alt: alt,
          link: link,
          place: place,
          subLocation: locationArray[0],
          country: locationArray[1],
        });
      } else if (country === "Antarctic" || country === "Antarctica") {
        const locationArray = country.split(", ");
        results.push({
          imgURL: imgURL,
          alt: alt,
          link: link,
          place: locationArray[0],
          subLocation: "Antarctica",
          country: "French Southern and Antarctic Lands",
        });
      }
      {
        continue;
      }
    }
    return results;
  });
  //evaluate is in built function and doesn't take arguments from outside
  const filteredResults = await filterResults(results);

  return filteredResults;
}

const filterResults = async (resultsArray) => {
  const countriesArray = await getCountriesNames();
  const USstates = states;
  const UKstates = statesUK;
  let filteredResults = [];
  for (let i = 0; i < resultsArray.length; i++) {
    if (countriesArray.includes(resultsArray[i].country)) {
      filteredResults.push(resultsArray[i]);
    } else if (USstates.includes(resultsArray[i].country)) {
      let updatedObject = await checkLocation(resultsArray[i], "United States");
      filteredResults.push(updatedObject);
    } else if (UKstates.includes(resultsArray[i].country)) {
      const updatedObject = await checkLocation(
        resultsArray[i],
        "United Kingdom"
      );
      filteredResults.push(updatedObject);
    } else if (
      resultsArray[i].country === "UK" ||
      resultsArray[i].country === "U.K."
    ) {
      const updatedObject = await clarifyLocation(
        resultsArray[i],
        "United Kingdom"
      );
      filteredResults.push(updatedObject);
    } else if (
      resultsArray[i].country === "UAE" ||
      resultsArray[i].country === "United Emirates"
    ) {
      const updatedObject = await clarifyLocation(
        resultsArray[i],
        "United Arab Emirates"
      );
      filteredResults.push(updatedObject);
    }
  }
  return filteredResults;
};

async function checkLocation(object, newLocation) {
  let updatedObject = Object.assign(object);
  updatedObject.subLocation = object.subLocation + ", " + object.country;
  updatedObject.country = newLocation;
  return updatedObject;
}

async function clarifyLocation(object, locationName) {
  let updatedObject = Object.assign(object);
  updatedObject.country = locationName;
  return updatedObject;
}

async function scrollToBottom(page) {
  const distance = 100; // distance to scroll by
  const delay = 100; // delay in ms
  while (
    await page.evaluate(
      () =>
        document.scrollingElement.scrollTop + window.innerHeight <
        document.scrollingElement.scrollHeight
    ) // while bottom is not reached scroll
  ) {
    await page.evaluate((y) => {
      document.scrollingElement.scrollBy(0, y);
    }, distance);
    await page.waitForTimeout(delay);
  }
}

module.exports = { scraper, checkLocation, clarifyLocation };
