import './App.css';
import {useEffect, useState} from 'react';
import GeolocationButton from './components/GeolocationButton';
import CitySearchForm from './components/CitySearchForm';
import fetchWeather from './API/FetchWeather';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';


function App() {
  const [placelocation, setPlacelocation] = useState('');
  const [geolocation, setGeolocation] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchAndSetWeather();
    const intervalId = setInterval(fetchAndSetWeather, 5 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [geolocation]);

  const fetchAndSetWeather = () => {
    try{
      fetchWeather(geolocation.lat, geolocation.lng).then(result=>{
        setWeather(result);
      })
    }catch (e){}
  }

  return (
        <div className="App">
          <h3>WeatherApp</h3>
          {weather && (
            <WeatherDisplay weather={weather}/>
          )}
          <CitySearchForm placelocation={placelocation} setPlacelocation={setPlacelocation} setGeolocation={setGeolocation}/>
          <GeolocationButton geolocation={geolocation} setGeolocation={setGeolocation}/>
        </div>
    );

}

export default App;
