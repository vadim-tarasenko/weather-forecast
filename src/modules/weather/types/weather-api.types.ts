export type GetCurrentWeatherByCoordinatesParams = {
  lat: number;
  lon: number;
};

export type GetCurrentWeatherByCoordinatesResponse = {
  name: string;
  main: {
    temp: number;
  };
};

export type GetWeekWeatherByCoordinatesParams = {
  lat: number;
  lon: number;
};

export type GetWeekWeatherByCoordinatesResponse = {
  daily: {
    dt: number;
    temp: {
      eve: number;
    };
  }[];
};
