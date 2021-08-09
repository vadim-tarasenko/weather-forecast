import React, { FC } from 'react';

import type { WeatherCardProps } from './weather-card.interface';
import { Root, DayName, Degree } from './weather-card.styled';

const WeatherCard: FC<WeatherCardProps> = () => (
  <Root style={{ elevation: 1 }}>
    <DayName>Monday</DayName>
    <Degree>+3°</Degree>
  </Root>
);

export default WeatherCard;
