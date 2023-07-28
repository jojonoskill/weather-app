import React from 'react';

const GeolocationButton = ({setGeolocation}) => {

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setGeolocation({ lat: latitude, lng: longitude });
          },
          (error) => {
            console.error('Error getting geolocation:', error.message);
          }
      );
    } else {
      console.error('Geolocation is not supported in this browser.');
    }
  };
  return (
      <div>
        <button onClick={getGeolocation}>Or just use geolocation</button>
      </div>
  );
};

export default GeolocationButton;
