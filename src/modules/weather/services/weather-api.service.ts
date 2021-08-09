import { injectable, singleton } from 'tsyringe';
import { API_KEY } from '@env';
// services
import ApiService from '../../core/services/api.service';
// types
import type { GetWeekWeatherByCoordinatesParams } from '../types/weather-api.types';

@injectable()
@singleton()
class WeatherApiService {
  constructor(private readonly apiService: ApiService) {}

  public getWeekWeatherByCoordinates(
    params: GetWeekWeatherByCoordinatesParams,
  ) {
    return this.apiService.get('/data/2.5/onecall', {
      appid: API_KEY,
      lat: params.lat,
      lon: params.lon,
    });
  }
}

export default WeatherApiService;
