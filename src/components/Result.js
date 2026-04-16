import React from "react";
import "./App.scss";
import { WiSunrise, WiSunset, WiWindy, WiBarometer } from "react-icons/wi";

const Result = (props) => {
  const { err, city, temp, wind, sunset, sunrise, pressure, date, mainName } =
    props.weather;

  let content = null;

  //if (!err && city) {
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
  content = (
    <React.Fragment>
      <div className="weatherResult_currentDay">
        <h1 className="weatherResult_city">{city}</h1>
        <h2 className="weatherResult_date">Date: {date}</h2>

        <div className="weatherResult_header">
          <p>{temp} &#176;C</p>
          <p>{mainName}</p>
        </div>

        <div className="weatherResult_sunset">
          <div className="weatherResult_sunset_icon">
            <WiSunset />
          </div>
          <div className="weatherResult_sunset_box">
            <p>Sunset</p>
            <p>{sunsetTime}</p>
          </div>
        </div>
        <div className="weatherResult_sunrise">
          <div className="weatherResult_sunrise_icon">
            <WiSunrise />
          </div>
          <div className="weatherResult_sunrise_box">
            <p>Sunrise</p>
            <p>{sunriseTime}</p>
          </div>
        </div>
        <div className="weatherResult_pressure">
          <div className="weatherResult_pressure_icon">
            <WiBarometer />
          </div>
          <div className="weatherResult_pressure_box">
            <p>Pressure</p>
            <p>{pressure} hPa</p>
          </div>
        </div>
        <div className="weatherResult_wind">
          <div className="weatherResult_wind_icon">
            <WiWindy />
          </div>
          <div className="weatherResult_wind_box">
            <p>Wind</p>
            <p>{wind} m/s</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
  //}

  return <div className="result">{err ? <p>City not found</p> : content}</div>;
};

export default Result;
