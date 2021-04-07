import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="dropdown">
        <div className="settings-container">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div id="my-dropdown" className="dropdown-content">
          <a className="dropdown-link" href="#" id="fahrenheit">
            Convert to
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/006/005/original/fahrenheit.png?1616662155"
              alt="Fahrenheit icon"
              title="Icons made by Freepik -> https://www.freepik.com"
            />
          </a>
          <a className="dropdown-link" href="#" id="celsius">
            Convert to
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/006/006/original/celsius.png?1616662180"
              alt="Celsius icon"
              title="Icons made by Freepik -> https://www.freepik.com"
            />
          </a>
          <a className="dropdown-link" href="#" id="current-location">
            Current Location
            <img
              className="current-location-icon"
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/006/007/original/pin.png?1616662213"
              alt="Current location icon"
              title="Icons made by Freepik -> https://www.freepik.com"
            />
          </a>
          <a className="dropdown-link" href="#" id="random-background-color">
            Random background
            <img
              className="background-color-icon"
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/006/008/original/color-palette.png?1616662235"
              alt="Color palette icon"
              title="Icons made by Freepik -> https://www.freepik.com"
            />
          </a>
          <a className="dropdown-link" href="mailto:alessiamaschio@gmail.com">
            Say Hi
            <img
              className="email-icon"
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/006/009/original/mailbox.png?1616662254"
              alt="Mailbox icon"
              title="Icons made by Freepik -> https://www.freepik.com"
            />
          </a>
        </div>
      </div>
      <form id="search-form">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          autocomplete="off"
          autofocus="on"
          onfocus="this.value=''"
        />
        <i className="fas fa-search"></i>
      </form>
    </div>
  );
}
