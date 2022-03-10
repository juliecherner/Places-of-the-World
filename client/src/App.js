import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/index";
import All from "./screens/mainPage";
import Error from "./screens/errorBoundries";
import Home from "./screens/homePage";
import Region from "./screens/regionPage";
import Country from "./screens/byCountrySearchPage";
import NewPlace from "./screens/addPlacePage";
import Place from "./screens/placePage";
import Api from "./api/Api";
import "./App.css";
import "./normalize.css";

function App() {
  const [allPlaces, setAllPlaces] = useState([]);

  const getAll = async () => {
    const { data } = await Api.get("api/places");
    setAllPlaces(data);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<All all={allPlaces} />} />
          <Route
            path="all/region/:region"
            element={<Region all={allPlaces} />}
          />
          <Route path="/new-place" element={<NewPlace />} />
          <Route path="/country" element={<Country />} />
          <Route path="/places/:placeid" element={<Place />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
