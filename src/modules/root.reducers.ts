import { combineReducers } from 'redux';
// reducers
import weatherReducer, { WeatherState } from './weather/weather.reducers';

export type RootState = {
  weather: WeatherState;
};

export const rootReducers = combineReducers({
  weather: weatherReducer,
});
