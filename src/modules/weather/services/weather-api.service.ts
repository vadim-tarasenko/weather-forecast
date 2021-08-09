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
      '/current.json',
      {
        key: API_KEY,
        q: params.q,
      },
    );
  }

  public getWeekWeatherByCoordinates(
    params: GetWeekWeatherByCoordinatesParams,
  ) {
    return this.apiService.get<GetWeekWeatherByCoordinatesResponse>(
      '/forecast.json',
      {
        key: API_KEY,
        q: params.q,
        days: 7,
      },
    );
  }
}

export default WeatherApiService;
