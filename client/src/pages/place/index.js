import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PlaceFullInfo from "../../Components/place-full-info";
import CommentsArea from "../../Components/comments-area";
import Spinner from "../../Components/spinner";
import Api from "../../api/Api";
import "./place.css";

const Place = () => {
  const { placeid } = useParams();
  const [place, setPlace] = useState([]);
  const [location, setLocation] = useState([]);

  const getPlaceInfo = async () => {
    const { data } = await Api.get(`api/places/${placeid}`);
    const place = data[0];
    setPlace(place);
    return place;
  };

  const getLocation = async () => {
    const country = await getPlaceInfo();
    const { data } = await Api.get(
      `api/country/country?country=${country.country}`
    );
    const location = data[0];
    setLocation(location);
  };

  useEffect(() => {
    getPlaceInfo();
  }, []);

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="place-page">
      <div>
        {place && location ? (
          <PlaceFullInfo place={place} location={location} />
        ) : (
          <Spinner />
        )}
      </div>
      <CommentsArea placeId={placeid} />
    </div>
  );
};

export default Place;
