const types = {
  SET_WEATHER_DATA: 'SET_WEATHER_DATA',
};
const setWeather = weather => {
  return {
    type: types?.SET_WEATHER_DATA,
    payload: weather,
  };
};

export default {
  setWeather,
  types,
};
