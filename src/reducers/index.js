import { combineReducers } from 'redux';
import WeatherReducder from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducder
});

export default rootReducer;
