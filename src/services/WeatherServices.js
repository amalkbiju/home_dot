import axios from 'axios';
const weatherData = async city => {
  try {
    let weather = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: `${city}`,
          appid: '9ef0090699e22f4c44d595de3b463228',
        },
      },
    );
    return weather?.data;
  } catch (error) {
    console?.log(error);
  }
};
export default weatherData;
