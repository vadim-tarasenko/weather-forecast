import { combineReducers } from 'redux';
import { ActionType, createReducer } from 'typesafe-actions';
// actions
import * as weatherActions from './weather.actions';

type WeatherLocationState = {
  name: string;
} | null;

const weatherLocationDefaultState: WeatherLocationState = null;

const weatherLocationReducer = createReducer<
  WeatherLocationState,
  ActionType<typeof weatherActions>
>(weatherLocationDefaultState).handleAction(
  weatherActions.setWeatherLocation,
  state => state,
);

export type WeatherState = {
  location: WeatherLocationState;
};

export default combineReducers({
  location: weatherLocationReducer,
});
