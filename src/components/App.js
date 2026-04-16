import { Component } from "react";
import "./App.scss";
import Form from "./Form";
import Result from "./Result";
import ResultFiveDays from "./ResultFiveDays";

const apiKey = "52a0f9976b21d92eb4392ee274271ddd";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    mainName: "",
    err: "",
    temp1: "",
    temp2: "",
    temp3: "",
    temp4: "",
    temp5: "",
    mainName1: "",
    mainName2: "",
    mainName3: "",
    mainName4: "",
    mainName5: "",
    empty: true,
  };

  /*
  stateFiveDays = {
    temp1: "",
    temp2: "",
    temp3: "",
    temp4: "",
    temp5: "",
    mainName1: "",
    mainName2: "",
    mainName3: "",
    mainName4: "",
    mainName5: "",
    err: "",
  };
*/
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleCitySubmit = (e) => {
    e.preventDefault();
    this.setState({ empty: false });

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${apiKey}&units=metric`;

    const apiFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.value}&appid=${apiKey}&units=metric`;

    fetch(api)
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw Error("Nie udało się");
      })
      .then((res) => res.json())
      .then((data) => {
        const date = new Date().toLocaleDateString();
        this.setState({
          err: false,
          date: date,
          city: this.state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          mainName: data.weather[0].main,
        });
        //console.log(data);
        //console.log("Przypisana pierwsza wiatr: " + this.state.wind);
      })
      .catch((err) => {
        this.setState({
          err: true,
          city: this.state.value,
        });
        //console.log(err);
      });

    fetch(apiFiveDays)
      .then((res2) => {
        if (res2.ok) {
          return res2;
        }
        throw Error("Nie udało się");
      })
      .then((res2) => res2.json())
      .then((data2) => {
        this.setState({
          err: false,
          temp1: data2.list[0].main.temp,
          temp2: data2.list[1].main.temp,
          temp3: data2.list[2].main.temp,
          temp4: data2.list[3].main.temp,
          temp5: data2.list[4].main.temp,
          mainName1: data2.list[0].weather[0].main,
          mainName2: data2.list[1].weather[0].main,
          mainName3: data2.list[2].weather[0].main,
          mainName4: data2.list[3].weather[0].main,
          mainName5: data2.list[4].weather[0].main,
        });
      })
      .catch((err) => {
        this.setState({
          err: true,
          city: this.state.value,
        });
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="App_seachbar">
          <p>WeatherIG</p>
          <Form
            value={this.state.value}
            onChange={this.handleInputChange}
            submit={this.handleCitySubmit}
            name="textBox"
          />
        </div>
        {this.state.empty === false ? (
          <div className="weatherResult">
            <Result weather={this.state} />
            <ResultFiveDays weatherFiveDays={this.state} />
          </div>
        ) : (
          <div className="weatherResult_empty">
            <p>Put the interesting you city and check the weather</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
