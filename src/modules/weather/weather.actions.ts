import { createAction } from 'typesafe-actions';

export const setWeatherLocation = createAction(
  '@weather/SET_WEATHER_LOCATION',
)<{ lon?: number; lat?: number; name?: string }>();

export const resetWeatherLocation = createAction(
  '@weather/RESET_WEATHER_LOCATION',
)<void>();
