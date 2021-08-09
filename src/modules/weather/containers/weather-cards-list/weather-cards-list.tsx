import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { format, fromUnixTime } from 'date-fns';
// components
import WeatherCard from '../../components/weather-card';
// selectors
import { selectWeatherLocation } from '../../weather.selectors';
// hooks
import { useService } from '../../../core/hooks/use-service';
import { useWeatherWeekQuery } from '../../hooks/use-weather-week-query';
// services
import WeatherDataService from '../../services/weather-data.service';

import type { WeatherCardsListProps } from './weather-cards-list.interface';
import { Root, CardWrapper } from './weather-cards-list.styled';

const WeatherCardsList: FC<WeatherCardsListProps> = () => {
  // services
  const weatherDataService = useService(WeatherDataService);
  // selectors
  const weatherLocation = useSelector(selectWeatherLocation);
  // queries
  const weatherWeekQuery = useWeatherWeekQuery(
    {
      lat: weatherLocation.lat ?? 0,
      lon: weatherLocation.lon ?? 0,
    },
    {
      enabled: !!weatherLocation.lat && !!weatherLocation.lon,
    },
  );

  console.log(weatherWeekQuery.data);

  return (
    <Root>
      {weatherWeekQuery.data?.daily.map(weather => (
        <CardWrapper>
          <WeatherCard
            day={format(fromUnixTime(weather.dt), 'iiii')}
            celsius={weatherDataService.getCelsiusFromKelvins(
              weather.temp.eve ?? 0,
            )}
          />
        </CardWrapper>
      ))}
    </Root>
  );
};

export default WeatherCardsList;
