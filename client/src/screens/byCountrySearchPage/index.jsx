import { useState, useEffect } from "react";
import Api from "../../api/Api";
import CountryInput from "./components/country-input";
import PlacesList from "../../components/placesList";
import LocationLine from "./components/location-line";
import "./country.css";

const Country = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [placesByCountry, setPlacesByCountry] = useState([]);
  const [subregion, setSubregions] = useState([
    { country: "", region: "", subregion: "" },
  ]);

  const getAll = async () => {
    const { data } = await Api.get("api/country");
    const countriesNames = data.map((item) => item.country);
    setAllCountries(countriesNames);
  };

  const findCountry = async (input) => {
    setSelectedCountry(input);
    if (input !== undefined) {
      const countries = await Api.get(
        `api/places/by-country/?country=${input}`
      );
      const subregion = await Api.get(`api/country/by-name?country=${input}`);
      setPlacesByCountry(countries.data);
      setSubregions(subregion.data);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    findCountry();
  }, []);

  return (
    <div className="country-page">
      <CountryInput findCountry={findCountry} countries={allCountries} />
      {selectedCountry !== undefined && <LocationLine subregion={subregion} />}
      <PlacesList
        places={placesByCountry}
        subregion={subregion}
        resultsAmount={placesByCountry.length}
      />
    </div>
  );
};

export default Country;
