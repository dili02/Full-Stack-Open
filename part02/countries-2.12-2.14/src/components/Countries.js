import React from "react";
import Country from "./Country";

const Countries = ({ countries, handleClick }) => {
  const countriesLength = countries.length;

  if (countriesLength === 1) {
    return <Country country={countries[0]} />;
  } else if (countriesLength > 1 && countriesLength <= 10) {
    return countries.map((country) => (
      <div key={country.name}>
        {country.name}
        <button onClick={() => handleClick(country.name)}>Show More</button>
      </div>
    ));
  } else if (countriesLength > 10 && countriesLength < 250) {
    return <p>To many matches, specify another filter</p>;
  } else {
    return <div></div>;
  }
};

export default Countries;
