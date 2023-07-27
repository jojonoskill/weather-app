import React from 'react';

const GeolocationButton = ({geolocation, setGeolocation}) => {

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
        {geolocation && (
            <p>
              Latitude: {geolocation.lat}, Longitude: {geolocation.lng}
            </p>
        )}
      </div>
  );
};

export default GeolocationButton;
