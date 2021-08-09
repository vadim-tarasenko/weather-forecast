import { RootState } from '../root.reducers';

export const selectWeatherLocation = (state: RootState) =>
  state.weather.location;
