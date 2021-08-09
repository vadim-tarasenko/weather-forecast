export type GetCurrentWeatherByCoordinatesParams = {
  q: string;
};

export type GetCurrentWeatherByCoordinatesResponse = {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
  };
};

export type GetWeekWeatherByCoordinatesParams = {
  q: string;
};

export type GetWeekWeatherByCoordinatesResponse = {
  forecast: {
    forecastday: {
      date_epoch: number;
      day: {
        avgtemp_c: number;
      };
    }[];
  };
};
