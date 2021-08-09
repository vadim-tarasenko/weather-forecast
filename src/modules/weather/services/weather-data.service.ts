import { injectable, singleton } from 'tsyringe';

@injectable()
@singleton()
class WeatherDataService {
  public getCelsiusFromKelvins(tKelvins: number) {
    return Math.round(tKelvins - 273.15);
  }
}

export default WeatherDataService;
