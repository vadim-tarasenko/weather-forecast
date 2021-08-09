import React, { FC } from 'react';
// components
import WeatherCard from '../../components/weather-card';

import type { WeatherCardsListProps } from './weather-cards-list.interface';
import { Root, CardWrapper } from './weather-cards-list.styled';

const WeatherCardsList: FC<WeatherCardsListProps> = () => (
  <Root>
    <CardWrapper>
      <WeatherCard />
    </CardWrapper>
    <CardWrapper>
      <WeatherCard />
    </CardWrapper>
  </Root>
);

export default WeatherCardsList;
