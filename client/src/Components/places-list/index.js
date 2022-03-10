import PlaceCard from "../place-card";
import "./places-list.css";

const PlacesList = ({ places, resultsAmount }) => {
  return (
    <div>
      {resultsAmount === 1 ? (
        <div className="places-list-results">1 result</div>
      ) : (
        <div className="places-list-results">{resultsAmount} results</div>
      )}

      {places.length > 0 ? (
        <div className="places-list">
          {places.map((place) => {
            return <PlaceCard place={place} key={place._id} />;
          })}
        </div>
      ) : (
        <div>No places found</div>
      )}
    </div>
  );
};

export default PlacesList;
