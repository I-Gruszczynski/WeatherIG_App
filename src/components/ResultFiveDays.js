import React from "react";
import "./App.scss";
const ResultFiveDays = (props) => {
  const {
    err,
    temp1,
    temp2,
    temp3,
    temp4,
    temp5,
    mainName1,
    mainName2,
    mainName3,
    mainName4,
    mainName5,
  } = props.weatherFiveDays;

  let content = null;

  //let content = null;
  /*let content = (
    <React.Fragment>
      <div className="weatherResultFiveDays">
        <div className="weatherDay">
          <p>Temp. {temp1}</p>
          <p>{mainName1}</p>
        </div>
        <div className="weatherDay">
          <p>Temp. {temp2}</p>
          <p>{mainName2}</p>
        </div>
        <div className="weatherDay">
          <p>Temp. {temp3}</p>
          <p>{mainName3}</p>
        </div>
        <div className="weatherDay">
          <p>Temp. {temp4}</p>
          <p>{mainName4}</p>
        </div>
        <div className="weatherDay">
          <p>Temp. {temp5}</p>
          <p>{mainName5}</p>
        </div>
      </div>
    </React.Fragment>
  );*/
  const today = new Date();
  const date1 =
    today.getFullYear() +
    ".0" +
    (today.getMonth() + 1) +
    "." +
    (today.getDate() + 1);
  const date2 =
    today.getFullYear() +
    ".0" +
    (today.getMonth() + 1) +
    "." +
    (today.getDate() + 2);
  const date3 =
    today.getFullYear() +
    ".0" +
    (today.getMonth() + 1) +
    "." +
    (today.getDate() + 3);
  const date4 =
    today.getFullYear() +
    ".0" +
    (today.getMonth() + 1) +
    "." +
    (today.getDate() + 4);
  const date5 =
    today.getFullYear() +
    ".0" +
    (today.getMonth() + 1) +
    "." +
    (today.getDate() + 5);

  content = (
    <div className="resultFiveDays">
      <h2>5 days weather</h2>
      <div className="weatherResultFiveDays">
        <div className="weatherDay">
          <p className="weatherDay_Date">{date1}</p>
          <p>Temp. {temp1}&#176;C</p>
          <p>{mainName1}</p>
        </div>
        <div className="weatherDay">
          <p className="weatherDay_Date">{date2}</p>
          <p>Temp. {temp2}&#176;C</p>
          <p>{mainName2}</p>
        </div>
        <div className="weatherDay">
          <p className="weatherDay_Date">{date3}</p>
          <p>Temp. {temp3}&#176;C</p>
          <p>{mainName3}</p>
        </div>
        <div className="weatherDay">
          <p className="weatherDay_Date">{date4}</p>
          <p>Temp. {temp4}&#176;C</p>
          <p>{mainName4}</p>
        </div>
        <div className="weatherDay">
          <p className="weatherDay_Date">{date5}</p>
          <p>Temp. {temp5}&#176;C</p>
          <p>{mainName5}</p>
        </div>
      </div>
    </div>
  );

  return <div className="result">{err ? <p></p> : content}</div>;
};

export default ResultFiveDays;
