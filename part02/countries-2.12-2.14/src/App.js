import React, { useState, useEffect } from "react";
import axios from "axios";

import Search from "./components/Search";
import Countries from "./components/Countries";

/* const Search = ({ handleSearch }) => (
  <div>
    Find Countries:
    <input onChange={handleSearch} />
  </div>
); */

/* const Country = ({ country }) => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const hookGetDataWeather = () => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=944057aed0edca7d3c0d529ac3fd5ff7&query=${country.capital}`
      )
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
        setIsLoading(false);
      });
  };
  useEffect(hookGetDataWeather, [country.capital]);
  console.log(weather);

  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Spoken Languages:</h3>
      <ul>
        {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img
        src={country.flag}
        alt={`Flag to ${country.name}`}
        height="auto"
        width="480px"
      />
      {isLoading ? (
        <div>Cargando ...</div>
      ) : (
        <div>
          <h3>Weather in {country.capital}</h3>
          <p>
            <span style={{ fontWeight: "bold" }}>Temeperature: </span>
            {weather.current.temperature} Celsius
          </p>
          <img src={weather.current.weather_icons[0]} alt="weather icon" />
          <p>
            <span style={{ fontWeight: "bold" }}>Wind: </span>
            {weather.current.wind_speed} mph, direction{" "}
            {weather.current.wind_dir}
          </p>
        </div>
      )}
    </div>
  );
}; */

/* const Countries = ({ countries, handleClick }) => {
  const countriesLength = countries.length;
  if (countriesLength === 1) {
    console.log("1 result");
    return <Country country={countries[0]} />;
  } else if (countriesLength > 1 && countriesLength <= 10) {
    console.log("1 to 10 results");
    return countries.map((country) => (
      <div key={country.name}>
        {country.name}
        <button onClick={() => handleClick(country.name)}>Show More</button>
      </div>
    ));
  } else if (countriesLength > 10 && countriesLength < 250) {
    console.log("11 to n-1 results");
    return <p>To many matches, specify another filter</p>;
  } else {
    console.log("Nothing");
    return <div></div>;
  }
}; */

const App = () => {
  const [countries, setCountries] = useState([]);
  const [keyToSearch, setKeyToSearch] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const hookGetData = () => {
    axios
      .get(`https://restcountries.eu/rest/v2/${keyToSearch}`)
      .then((response) => {
        setCountries(response.data);
        setIsLoading(false);
      });
  };
  useEffect(hookGetData, [keyToSearch]);

  const handleSearch = (event) => {
    let key = event.target.value;
    if (key === "") {
      setKeyToSearch("all");
    } else {
      setKeyToSearch(`name/${key}`);
    }
  };

  const handleClick = (country) => {
    setKeyToSearch(`name/${country}`);
  };

  return (
    <div>
      <h1>COUNTRIES</h1>
      <Search handleSearch={handleSearch} />
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <Countries countries={countries} handleClick={handleClick} />
      )}
    </div>
  );
};

export default App;
