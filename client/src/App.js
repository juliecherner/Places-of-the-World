import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header/index";
import All from "./pages/all";
import Error from "./pages/error";
import Home from "./pages/home";
import Region from "./pages/region";
import Country from "./pages/country";
import NewPlace from "./pages/new-place";
import Place from "./pages/place";
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
