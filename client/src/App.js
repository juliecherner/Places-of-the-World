import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/index";
import MainPage from "./screens/mainPage";
import Error from "./screens/errorBoundries";
import Home from "./screens/homePage";
import Region from "./screens/regionPage";
import Country from "./screens/byCountrySearchPage";
import NewPlace from "./screens/addPlacePage";
import Place from "./screens/placePage";
import LoginPage from "./screens/loginPage";
import LoginSuccess from "./screens/loginPage/components/loginSuccess";
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
          <Route path="/all" element={<MainPage all={allPlaces} />} />
          <Route
            path="all/region/:region"
            element={<Region all={allPlaces} />}
          />
          <Route path="/new-place" element={<NewPlace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/result" element={<LoginSuccess />} />
          <Route path="/country" element={<Country />} />
          <Route path="/places/:placeid" element={<Place />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
