import React from 'react';
import addressToGeo from '../../API/fetchGeocode';
import './CitySearchForm.css'

const CitySearchForm = ({setPlacelocation, setGeolocation }) => {

  const findGeocode = async (event) => {
    setPlacelocation(event.target.value)
    const geolocation = await addressToGeo(event.target.value);
    setGeolocation(geolocation);
  }

  return (
      <div className='city-input'>
        <label className="custom-field">
          <input
              onChange={findGeocode}
              id='city'
              placeholder="&nbsp;"
              autoComplete='off'
          />
          <span className="placeholder">City</span>
        </label>
      </div>
  );
};

export default CitySearchForm;
