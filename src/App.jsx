import "./App.css";
import React, { useEffect, useState } from "react";
// import countries from "./countries.json";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [countriesList, setCountriesList] = useState([]);

  // WITH FETCH

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://ih-countries-api.herokuapp.com/countries"
  //     );
  //     console.log(response);
  //     const parsed = await response.json();
  //     console.log(parsed);
  //     setCountriesList(parsed);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // WITH AXIOS

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      console.log(response);
      console.log(response.status);
      if (response.status === 200) {
        setCountriesList(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(countriesList);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countriesList={countriesList} />
        </div>
      </div>
      <Routes>
        <Route
          path="/:countryId"
          element={<CountryDetails countriesList={countriesList} />}
        />
      </Routes>
    </div>
  );
}
export default App;
