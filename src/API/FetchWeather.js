import axios from 'axios';
const APIKEY = process.env.REACT_APP_WEATHER_KEY

const fetchWeather = async (lat, lng) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${APIKEY}`)
  return response.data;
}

export default fetchWeather;

