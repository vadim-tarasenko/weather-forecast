import { useQuery, UseQueryOptions } from 'react-query';
// services
import WeatherApiService from '../services/weather-api.service';
// hooks
import { useService } from '../../core/hooks/use-service';
// types
import type {
  GetCurrentWeatherByCoordinatesParams,
  GetCurrentWeatherByCoordinatesResponse,
} from '../types/weather-api.types';

const WEEK_WEATHER_CACHE_KEY = 'current-weather';

export const useCurrentWeatherQuery = (
  params: GetCurrentWeatherByCoordinatesParams,
  optionsUseQuery?: UseQueryOptions<GetCurrentWeatherByCoordinatesResponse>,
) => {
  const weatherApiService = useService(WeatherApiService);

  return useQuery(
    [WEEK_WEATHER_CACHE_KEY, params],
    () => weatherApiService.getCurrentWeatherByCoordinates(params),
    optionsUseQuery,
  );
};
