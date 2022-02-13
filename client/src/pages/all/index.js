import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RegionButtons from "../../Components/region-buttons";
import PlacesList from "../../Components/places-list";

import Spinner from "../../Components/spinner";

import { Button } from "@mui/material";
import "./all.css";

const All = ({ all }) => {
  const [buttonsMode, setButtonsMode] = useState(false);

  const showButtons = () => {
    setButtonsMode(!buttonsMode);
  };

  return (
    <div className="all-page">
      <div className="all-page-header">
        <Button variant="contained" color="info" onClick={showButtons}>
          Find by region
        </Button>

        <Button Button variant="contained" color="success">
          <Link to="/new-place">Add new place</Link>
        </Button>
      </div>
      <div>{buttonsMode && <RegionButtons />}</div>

      {all.length < 1 ? <Spinner /> : <PlacesList places={all} />}
    </div>
  );
};

export default All;
