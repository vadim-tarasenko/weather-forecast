import { useQuery } from 'react-query';
// services
import WeatherApiService from '../services/weather-api.service';
// hooks
import { useService } from '../../core/hooks/use-service';
// types
import type { GetWeekWeatherByCoordinatesParams } from '../types/weather-api.types';

const WEEK_WEATHER_CACHE_KEY = 'week-weather';

export const useWeekWeatherQuery = (
  params: GetWeekWeatherByCoordinatesParams,
) => {
  const weatherApiService = useService(WeatherApiService);

  return useQuery([WEEK_WEATHER_CACHE_KEY, params], () =>
    weatherApiService.getWeekWeatherByCoordinates(params),
  );
};
