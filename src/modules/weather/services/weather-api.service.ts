import { injectable, singleton } from 'tsyringe';
import { API_KEY } from '@env';
// services
import ApiService from '../../core/services/api.service';
// types
import type {
  GetCurrentWeatherByCoordinatesParams,
  GetCurrentWeatherByCoordinatesResponse,
  GetWeekWeatherByCoordinatesParams,
  GetWeekWeatherByCoordinatesResponse,
} from '../types/weather-api.types';

@injectable()
@singleton()
class WeatherApiService {
  constructor(private readonly apiService: ApiService) {}

  public getCurrentWeatherByCoordinates(
    params: GetCurrentWeatherByCoordinatesParams,
  ) {
    return this.apiService.get<GetCurrentWeatherByCoordinatesResponse>(
      '/data/2.5/weather',
      {
        appid: API_KEY,
        lat: params.lat,
        lon: params.lon,
      },
    );
  }

  public getWeekWeatherByCoordinates(
    params: GetWeekWeatherByCoordinatesParams,
  ) {
    return this.apiService.get<GetWeekWeatherByCoordinatesResponse>(
      '/data/2.5/onecall',
      {
        appid: API_KEY,
        lat: params.lat,
        lon: params.lon,
      },
    );
  }
}

export default WeatherApiService;
