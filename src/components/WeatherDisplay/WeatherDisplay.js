import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({weather}) => {
  return (
      <div className='weather-box'>
        <img
            className='weather-icon'
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt='Weather Icon'
        />
        <h3 className='weather-location'>{weather.name}</h3>
        <h4 className='weather-date'>Today</h4>
        <h4 className='weather-description'>{weather.weather[0].description}</h4>
        <h3 className='weather-temperature'>{parseInt(weather.main.feels_like - 273.15)}°C</h3>
      </div>
  );
};

export default WeatherDisplay;
