import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <CurrentWeather />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
