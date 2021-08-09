import React, { FC } from 'react';
import { RefreshControl } from 'react-native';
import { useSelector } from 'react-redux';
import { format, fromUnixTime } from 'date-fns';
// components
import WeatherCard from '../../components/weather-card';
// selectors
import { selectWeatherLocation } from '../../weather.selectors';
// hooks
import { useWeatherWeekQuery } from '../../hooks/use-weather-week-query';

import type { WeatherCardsListProps } from './weather-cards-list.interface';
import { Root, CardWrapper } from './weather-cards-list.styled';

const WeatherCardsList: FC<WeatherCardsListProps> = () => {
  // selectors
  const weatherLocation = useSelector(selectWeatherLocation);
  // queries
  const weatherWeekQuery = useWeatherWeekQuery(
    {
      q:
        weatherLocation.name ?? `${weatherLocation.lat},${weatherLocation.lon}`,
    },
    {
      enabled:
        (!!weatherLocation.lat && !!weatherLocation.lon) ||
        !!weatherLocation.name,
    },
  );

  return (
    <Root
      refreshControl={
        <RefreshControl
          refreshing={weatherWeekQuery.isFetching}
          onRefresh={weatherWeekQuery.refetch}
        />
      }>
      {weatherWeekQuery.data?.forecast?.forecastday?.map(weather => (
        <CardWrapper key={weather.date_epoch}>
          <WeatherCard
            day={format(fromUnixTime(weather.date_epoch), 'dd, iiii')}
            celsius={weather.day.avgtemp_c ?? 0}
          />
        </CardWrapper>
      ))}
    </Root>
  );
};

export default WeatherCardsList;
