import { combineReducers } from 'redux';
import { ActionType, createReducer } from 'typesafe-actions';
// actions
import * as weatherActions from './weather.actions';

type WeatherLocationState = {
  lon: number | null;
  lat: number | null;
};

const weatherLocationDefaultState: WeatherLocationState = {
  lon: null,
  lat: null,
};

const weatherLocationReducer = createReducer<
  WeatherLocationState,
  ActionType<typeof weatherActions>
>(weatherLocationDefaultState).handleAction(
  weatherActions.setWeatherLocation,
  (state, { payload }) => ({ ...state, ...payload }),
);

export type WeatherState = {
  location: WeatherLocationState;
};

export default combineReducers({
  location: weatherLocationReducer,
});
