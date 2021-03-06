import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import RegionButtons from "../regionPage/components/region-buttons";
import PlacesList from "../../components/placesList";
import Spinner from "../../components/spinner";
import { Button } from "@mui/material";
import "./main-page.css";

const MainPage = ({ all }) => {
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
    <div className="main-page">
      <div className="main-page-header">
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

export default MainPage;
