import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = process.env.REACT_APP_API_KEY;
  // TODO: file .env to API KEY
  const hookGetDataWeather = () => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=${country.capital}`
      )
      .then((response) => {
        setWeather(response.data);
        setIsLoading(false);
      });
  };
  useEffect(hookGetDataWeather, [country.capital, apiKey]);

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
};

export default Country;
