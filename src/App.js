import React from 'react';

import Titles from "./components/Titles.js";
import Form from "./components/Form.js";
import Weather from "./components/Weather.js";
import './App.css';

const API_KEY="b2faccaea500e0856f550a5f79ca34c0";

class App extends React.Component{

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
    }

  getWeather = async (e) => {

    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data =await api_call.json();
    if(city && country){
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  }
  else{
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter the values.."
    }); 
  }
  }

  render(){
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 title-container">
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-lg-3"></div>
                <div className="col-xs-12 col-lg-6 form-container">
                <Form getWeather={this.getWeather}/>
                <Weather 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
                />
                <div className="col-xs-12 col-lg-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

        