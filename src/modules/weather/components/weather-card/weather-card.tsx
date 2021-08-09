import React, { FC } from 'react';

import type { WeatherCardProps } from './weather-card.interface';
import { Root, DayName, Degree } from './weather-card.styled';

const WeatherCard: FC<WeatherCardProps> = ({ day, celsius }) => (
  <Root style={{ elevation: 1 }}>
    <DayName>{day}</DayName>
    <Degree>{celsius}°</Degree>
  </Root>
);

export default WeatherCard;
