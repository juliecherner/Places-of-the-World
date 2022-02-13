import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const PlaceCard = ({ place }) => {
  return (
    <div key={place._id} className="places-list-item">
      <img src={place.imgURL} alt={place.alt} />
      <div className="places-list-item-place">{place.place}</div>
      <div>Location: {place.subLocation}</div>
      <div className="places-list-item-country">Country: {place.country}</div>

      <Button variant="outlined" size="small">
        <Link to={`/places/${place._id}`}> See more</Link>
      </Button>
    </div>
  );
};

export default PlaceCard;
