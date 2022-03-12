import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../../api/Api";
import CountriesByRegion from "./components/countries-region";
import PlacesList from "../../components/placesList";
import Spinner from "../../components/spinner";
import { Button } from "@mui/material";
import "./region.css";

const Region = ({ all }) => {
  const { region } = useParams();
  const [countries, setCountries] = useState([]);
  const [shownCountries, setShownCountries] = useState(false);
  const [places, setPlaces] = useState([]);

  const allCountriesByRegion = async () => {
    try {
      const { data } = await Api.get(`api/country/region/?region=${region}`);
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPlacesInRegion = async () => {
    try {
      const { data } = await Api.get(`api/places/by-region?region=${region}`);
      setPlaces(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allCountriesByRegion();
  });

  useEffect(() => {
    getAllPlacesInRegion();
  });

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
