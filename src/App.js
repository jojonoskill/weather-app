import {useEffect, useState} from 'react';
import GeolocationButton from './components/GeolocationButton/GeolocationButton';
import CitySearchForm from './components/CitySearchForm/CitySearchForm';
import fetchWeather from './API/FetchWeather';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import './App.css'

function App() {
  const [placelocation, setPlacelocation] = useState('');
  const [geolocation, setGeolocation] = useState(JSON.parse(localStorage.getItem('geolocation')));
  const [weather, setWeather] = useState(null);

  const fetchAndSetWeather = () => {
    try{
      fetchWeather(geolocation.lat, geolocation.lng).then(result=>{
        setWeather(result);
        localStorage.setItem('geolocation', JSON.stringify(geolocation))
      })
    }catch (e){}
  }

  useEffect(() => {
    fetchAndSetWeather();
    const intervalId = setInterval(fetchAndSetWeather, 5 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [geolocation]);

  return (
      <div className="App">
        <h3 className='header'>WeatherApp</h3>
        {weather
            ? <WeatherDisplay weather={weather}/>
            :<div className='empty-square'/>}
        <CitySearchForm placelocation={placelocation} setPlacelocation={setPlacelocation} setGeolocation={setGeolocation}/>
        <GeolocationButton geolocation={geolocation} setGeolocation={setGeolocation}/>
      </div>
  );

}

export default App;
