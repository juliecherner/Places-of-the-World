import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import RegionButtons from "../../Components/region-buttons";
import PlacesList from "../../Components/places-list";
import Spinner from "../../Components/spinner";
import { Button } from "@mui/material";
import "./all.css";

const All = ({ all }) => {
  const [buttonsMode, setButtonsMode] = useState(false);
  const [maxStates, setMaxStates] = useState(12);
  const [states, setStates] = useState([]);
  const html = document.querySelector("html");

  useEffect(() => {
    const id = setInterval(() => {
      if (html.scrollTop > html.scrollHeight - 2000) {
        setMaxStates(maxStates + 12);
      }
    }, 1000);
    return () => clearInterval(id);
  });

  useEffect(() => {
    const newStates = all.filter((state, index) => index < maxStates);
    setStates(newStates);
  }, [all, maxStates]);

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

      {states.length < 1 ? (
        <Spinner />
      ) : (
        <PlacesList places={states} resultsAmount={all.length} />
      )}
    </div>
  );
};

export default All;
