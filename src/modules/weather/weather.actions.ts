import { createAction } from 'typesafe-actions';

export const setWeatherLocation = createAction(
  '@weather/SET_WEATHER_LOCATION',
)<void>();