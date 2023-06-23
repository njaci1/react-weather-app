import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [location, setLocation] = React.useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c022d502f9399fce90cb300da543a6e0`;
  const [data, setData] = React.useState({});
  useEffect(() => {
    const fetchWeatherByCoordinates = (latitude, longitude) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=c022d502f9399fce90cb300da543a6e0`;

      axios.get(url).then((res) => {
        console.log(res.data.name);
        setData(res.data);
        setLocation(res.data.name);
      });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByCoordinates(latitude, longitude);
      });
    }
  }, []);

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((res) => {
        setData(res.data);
      });
    }
  };
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={searchLocation}
        ></input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <h2 className="city">{location}</h2>
          </div>
          <div className="temp">
            {data.weather ? <h3 className="temp">{data.main.temp}°C</h3> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.weather ? <p>{data.main.feels_like}°C</p> : null}

            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.weather ? <p>{data.main.humidity}%</p> : null}

            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.weather ? <p>{data.wind.speed}km/h</p> : null}

            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
