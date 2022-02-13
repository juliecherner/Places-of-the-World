import { Link } from "react-router-dom";
import RegionButton from "../region-button";
import "./region-buttons.css";

const RegionButtons = () => {
  const regions = [
    "Asia",
    "Europe",
    "Oceania",
    "America",
    "Africa",
    "Antarctic",
  ];
  return (
    <div className="all-page-region-buttons">
      {regions.map((region) => (
        <Link to={`region/${region}`} key={region}>
          <RegionButton
            key={region}
            name={region}
            onClick={() => console.log(region)}
            name={region}
          />
        </Link>
      ))}
    </div>
  );
};

export default RegionButtons;
