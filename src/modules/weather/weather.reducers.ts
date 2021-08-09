import { combineReducers } from 'redux';
import { ActionType, createReducer } from 'typesafe-actions';
// actions
import * as weatherActions from './weather.actions';

type WeatherLocationState = {
  name: string;
  lon: number | null;
  lat: number | null;
};

const weatherLocationDefaultState: WeatherLocationState = {
  name: '',
  lon: null,
  lat: null,
};

const weatherLocationReducer = createReducer<
  WeatherLocationState,
  ActionType<typeof weatherActions>
>(weatherLocationDefaultState)
  .handleAction(weatherActions.setWeatherLocation, (state, { payload }) => ({
    ...state,
    ...payload,
  }))
  .handleAction(weatherActions.resetWeatherLocation, () => ({
    ...weatherLocationDefaultState,
  }));

export type WeatherState = {
  location: WeatherLocationState;
};

export default combineReducers({
  location: weatherLocationReducer,
});
