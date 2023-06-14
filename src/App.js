import React from 'react';
import axios from 'axios';

function App() {
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=mombasa&appid=c022d502f9399fce90cb300da543a6e0';
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <h1 className="city">Mombasa</h1>
          </div>
          <div className="temp">
            <h2 className="temp">30°C</h2>
          </div>
          <div className="description">
            <p>Mawingu</p>
          </div>
          <div className="bottom">
            <div className="feels">
              <p>Feels like 40°C</p>
            </div>
            <div className="humidity">
              <p>Humidity: 80%</p>
            </div>
            <div className="wind">
              <p>Wind: 10km/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
