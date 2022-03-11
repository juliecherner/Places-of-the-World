import "./place-full-info.css";

const PlaceFullInfo = ({ place, location }) => {
  return (
    <div className="place-full-info">
      <div className="place-full-info-text-area">
        <div className="place-full-info-text-area-title">{place.place}</div>
        <div className="place-full-info-locations">
          <div>Location: {place.subLocation}</div>
          <div>Country: {place.country}</div>
          <div>Subregion: {location.subregion}</div>
          <div>Region: {location.region}</div>
        </div>
        <div>{place.description}</div>
      </div>
      <img src={place.imgURL} alt={place.alt} loading="lazy" />
    </div>
  );
};

export default PlaceFullInfo;
