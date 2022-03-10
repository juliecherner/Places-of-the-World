import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../../api/Api";
import CountriesByRegion from "../../Components/countries-region";
import PlacesList from "../../Components/places-list";
import Spinner from "../../Components/spinner";
import { Button } from "@mui/material";
import "./region.css";

const Region = ({ all }) => {
  const { region } = useParams();
  const [countries, setCountries] = useState([]);
  const [shownCountries, setShownCountries] = useState(false);
  const [places, setPlaces] = useState([]);

  const allCountriesByRegion = async () => {
    const { data } = await Api.get(`api/country/region/?region=${region}`);
    setCountries(data);
    return data;
  };

  // const allPlacesByCountries = async () => {
  //   const countriesRegion = await allCountriesByRegion();
  //   if (countriesRegion.length > 0) {
  //     let promises = [];
  //     for (let i = 0; i < countriesRegion.length; i++) {
  //       const result = await Api.get(
  //         `api/places/all/?country=${countriesRegion[i].country}`
  //       );
  //       promises.push(result);
  //     }

  //     let results = await Promise.all(promises);
  //     const places = results.map((place) => place.data);
  //     setPlaces(places.flat());
  //   }
  // };

  const getRegionCountries = async () => {
    const countriesRegion = await allCountriesByRegion();
    let resultCountries = [];
    for (let i = 0; i < all.length; i++) {
      for (let j = 0; j < countriesRegion.length; j++) {
        if (all[i].country === countriesRegion[j].country) {
          resultCountries.push(all[i]);
        }
      }
    }
    setPlaces(resultCountries);
  };

  useEffect(() => {
    allCountriesByRegion();
  }, []);

  useEffect(() => {
    getRegionCountries();
  }, []);

  const changeShowMode = () => {
    setShownCountries(!shownCountries);
  };

  return (
    <div className="region-page">
      <div className="region-page-button">
        <Button variant="contained" color="info" onClick={changeShowMode}>
          All countries of {region}
        </Button>
      </div>
      {shownCountries && <CountriesByRegion countries={countries} />}
      {places.length > 0 ? (
        <PlacesList places={places} resultsAmount={places.length} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Region;
