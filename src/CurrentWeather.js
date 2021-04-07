import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="current-weather">
      <img
        src="https://openweathermap.org/img/wn/04d@2x.png"
        alt="Current weather icon"
        className="current-weather-icon"
      />
      <h2 className="current-weather-desc">Clouds</h2>
      <h3 className="city city-update">Madrid</h3>
      <h3 className="last-updated">Last updated: 10:45</h3>
      <h3 className="current-temp">
        <span className="temp">15</span>
        <span id="celsius-symbol">°C</span>
        <span id="fahrenheit-symbol" className="hide">
          F
        </span>
      </h3>
      <h4 className="feels-like">Feels like: 15°</h4>

      <section className="wind-humidity">
        <h4>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/006/003/original/wind.png?1616662071"
            alt="Wind icon"
            className="wind-humidity-icon"
          />
          <span id="wind">5 km/h</span>
        </h4>
        <h4>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/006/004/original/humidity.png?1616662111"
            alt="Humidity icon"
            className="wind-humidity-icon"
          />
          <span id="humidity">10%</span>
        </h4>
      </section>
    </div>
  );
}
