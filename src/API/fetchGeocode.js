import axios from 'axios';
const APIKEY = process.env.REACT_APP_GEOCODE_KEY

const addressToGeo = async (address) => {
  const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${APIKEY}`);
  try{
    return response.data['results'][0].geometry.location;
  }catch (e){
    alert('This is not a city or a placE!!!!!!!!!!!')
  }

}

export const geoToAddress = async (coordinates) => {
  const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&sensor=true&key=${APIKEY}`);
  return response.data['results'][0]['formatted_address'];
}

export default addressToGeo;
