import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [location, setLocation] = React.useState('');
  const [data, setData] = React.useState({});

  useEffect(() => {
    const fetchWeatherByCoordinates = (latitude, longitude) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=c022d502f9399fce90cb300da543a6e0`;

      axios.get(url).then((res) => {
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
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c022d502f9399fce90cb300da543a6e0`
        )
        .then((res) => {
          setData(res.data);
        });
    }
  };

  return (
    <div className="app bg-gray-300 min-h-screen">
      <div className="container">
        <div className="search justify-center items-center py-4">
          <input
            // className="px-1 py-1 rounded-md bg-white border border-gray-300 focus:outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={searchLocation}
          />
        </div>
        <div className="top">
          <div className="left">
            <div className="temp">
              {data.weather ? <h3>{Math.floor(data.main.temp)}°C</h3> : null}
            </div>
            <div className="location">
              <h2>{location}</h2>
            </div>
          </div>
          <div className="right">
            <div className="description">
              {data.weather ? <p>{data.weather[0].description}</p> : null}
            </div>
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
