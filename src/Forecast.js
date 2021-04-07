import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <ul className="main-list forecast">
      <li>
        <ul className="sub-list">
          <li>12:00</li>
          <li>
            <img
              src="https://openweathermap.org/img/wn/04d@2x.png"
              alt="Forecast weather icon"
              className="forecast-weather-icon"
            />
          </li>
          <li>12°</li>
        </ul>
      </li>
      <li>
        <ul className="sub-list">
          <li>15:00</li>
          <li>
            <img
              src="https://openweathermap.org/img/wn/01d@2x.png"
              alt="Forecast weather icon"
              className="forecast-weather-icon"
            />
          </li>
          <li>12°</li>
        </ul>
      </li>
      <li>
        <ul className="sub-list">
          <li>18:00</li>
          <li>
            <img
              src="https://openweathermap.org/img/wn/02d@2x.png"
              alt="Forecast weather icon"
              className="forecast-weather-icon"
            />
          </li>
          <li>10°</li>
        </ul>
      </li>
      <li>
        <ul className="sub-list">
          <li>21:00</li>
          <li>
            <img
              src="https://openweathermap.org/img/wn/03d@2x.png"
              alt="Forecast weather icon"
              className="forecast-weather-icon"
            />
          </li>
          <li>8°</li>
        </ul>
      </li>
      <li>
        <ul className="sub-list">
          <li>00:00</li>
          <li>
            <img
              src="https://openweathermap.org/img/wn/04d@2x.png"
              alt="Forecast weather icon"
              className="forecast-weather-icon"
            />
          </li>
          <li>6°</li>
        </ul>
      </li>
    </ul>
  );
}
