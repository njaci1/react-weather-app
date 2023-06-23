const weather = {
  coord: { lon: 39.6636, lat: -4.0547 },
  weather: [
    {
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d',
    },
  ],
  base: 'stations',
  main: {
    temp: 301.38,
    feels_like: 304.13,
    temp_min: 301.38,
    temp_max: 301.38,
    pressure: 1016,
    humidity: 69,
  },
  visibility: 10000,
  wind: { speed: 2.57, deg: 210 },
  clouds: { all: 40 },
  dt: 1686730462,
  sys: {
    type: 1,
    id: 2556,
    country: 'KE',
    sunrise: 1686713096,
    sunset: 1686755893,
  },
  timezone: 10800,
  id: 186301,
  name: 'Mombasa',
  cod: 200,
};
export default weather;
