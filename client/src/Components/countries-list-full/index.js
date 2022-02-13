import "./countries-list-full.css";
const CountriesListFull = ({ places, subregion }) => {
  return (
    <div>
      {places.length > 1 ? (
        <div>
          {places.map((place) => {
            return (
              <div key={place._id} className="countries-list-full">
                <img src={place.imgURL} alt={place.alt} />
                <div>Place {place.place}</div>
                <div>Location {place.subLocation}</div>
                <div>Country {place.country}</div>
                <div>Subregion {subregion[0].subregion}</div>
                <div>Region {subregion[0].region}</div>
                <div>{place.description}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No places found</div>
      )}
    </div>
  );
};

export default CountriesListFull;
