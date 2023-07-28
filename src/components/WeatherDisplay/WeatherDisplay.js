import React, {useEffect, useState} from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({weather}) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
      <div className='weather-box'>
        <div className='weather-main-box'>
          <div className='weather-icon-box'>
            <img
                className='weather-icon'
                src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                alt='Weather Icon'
            />
          </div>
          <div className='weather-main-info-box'>
            <h3 className='weather-location'>{weather.name}</h3>
            <h4 className='weather-date'>Today</h4>
            <h4 className='weather-description'>{weather.weather[0].description}</h4>
          </div>
          <div className='weather-temperature-box'>
            <h3 className='weather-temperature'>{parseInt(weather.main.feels_like - 273.15)}°C</h3>
          </div>
        </div>
        <div className='time-box'>
          <h4>{formatTime(currentTime)}</h4>
        </div>
      </div>
  );
};

export default WeatherDisplay;
