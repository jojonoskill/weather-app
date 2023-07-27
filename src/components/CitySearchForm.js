import React from 'react';
import addressToGeo from '../API/fetchGeocode';

const CitySearchForm = ({ placelocation, setPlacelocation, setGeolocation }) => {

  const findGeocode = async (event) => {
    event.preventDefault();
    const geolocation = await addressToGeo(placelocation);
    setGeolocation(geolocation);
  }

  return (
      <div>
        <form>
          <input
              id = 'city'
              required
              placeholder='enter name of the city'
              onChange={event => setPlacelocation(event.target.value)}
          />
          <button onClick={findGeocode}>Search for the weather</button>
        </form>
      </div>
  );
};

export default CitySearchForm;
