import axios from 'axios';
import APIS from '../contants/AipContants';
const weatherData = async city => {
  try {
    let weather = await axios?.get(APIS?.WEATHER_API, {
      params: {
        key: '9c0f6404d230435880970547222812',
        q: `${city}`,
        aqi: 'no',
      },
    });
    return weather?.data;
  } catch (error) {
    console?.log(error);
  }
};
export default weatherData;
