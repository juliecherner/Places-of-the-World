import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PlaceFullInfo from "./components/place-full-info";
import CommentsArea from "./components/comments-area";
import Spinner from "../../components/spinner";
import Api from "../../api/Api";
import "./place.css";

const Place = () => {
  const { placeid } = useParams();
  const [place, setPlace] = useState({});

  const getPlaceInfo = async () => {
    try {
      const { data } = await Api.get(`api/places/by-id/${placeid}`);
      setPlace(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlaceInfo();
  }, []);

  return (
    <div className="place-page">
      <div>
        {Object.keys(place).length > 0 ? (
          <PlaceFullInfo place={place} />
        ) : (
          <Spinner />
        )}
      </div>
      <CommentsArea placeId={placeid} />
    </div>
  );
};

export default Place;
