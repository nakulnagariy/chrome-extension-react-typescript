import React, { useState } from "react";
import { IExtendedForecastData, IWeatherData } from '../api/types';
import DisplayWeather from "./displayWeather";
import "./weather.css";

export const Weather: React.FC = (props: any) => {
  const [weather, setWeather] = useState({});
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const APIKEY = "9c81c3969ed61b7e4bfc01c7112c2b06";
  const weatherData = async(e: any) => {
    e.preventDefault();
    if (form.city == "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({
          data: data
      });
    }
  }

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
    if (name == "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <div className="weather">
      <span className="title">Weather App</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        
        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>

      {/* {console.log(weather)} */}
      {/* {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null} */}
    </div>
  );
}
