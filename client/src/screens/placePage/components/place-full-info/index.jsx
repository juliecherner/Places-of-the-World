import "./place-full-info.css";

const PlaceFullInfo = ({ place }) => {
  return (
    <div className="place-full-info">
      <div className="place-full-info-text-area">
        <div className="place-full-info-text-area-title">
          {place.place.place}
        </div>
        <div className="place-full-info-locations">
          <div>Location: {place.place.subLocation}</div>
          <div>Country: {place.place.country}</div>
          <div>Subregion: {place.placeLocation.subregion}</div>
          <div>Region: {place.placeLocation.region}</div>
        </div>
        <div>{place.place.description}</div>
      </div>
      <img src={place.place.imgURL} alt={place.place.alt} loading="lazy" />
    </div>
  );
};

export default PlaceFullInfo;
