import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from 'react'

function CountryDetails({ countriesList }) {
  
  const { countryId } = useParams();

  const foundCountry = countriesList.find((oneCountry) => {
    return oneCountry.alpha3Code === countryId;
  });

  function findCountry(code3char) {
    console.log(code3char);
    const newCountry = countriesList.find((oneCountry) => {
      return oneCountry.alpha3Code === code3char;
    });
    console.log(newCountry);
    return newCountry;
  }

  return (
    <div className="col-7">
      <h1>{foundCountry.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{foundCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((element) => (
                  <li>
                    <Link to={`/${element}`}>
                      {findCountry(element).name.official}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
