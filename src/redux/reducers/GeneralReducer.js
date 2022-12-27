import GeneralAction from '../action/GeneralAction';
const initialState = {
  weather: {},
};
const GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case GeneralAction?.types?.SET_WEATHER_DATA:
      return {...state, weather: action.payload};
    default:
      return state;
  }
};

export default GeneralReducer;
