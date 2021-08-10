import React, { FC } from 'react';

import type { WeatherCardProps } from './weather-card.interface';
import { Root, DayName, Degree } from './weather-card.styled';
import { useTheme } from 'styled-components/native';

const WeatherCard: FC<WeatherCardProps> = ({ day, celsius }) => {
  const theme = useTheme();

  return (
    <Root style={theme.elevation.small}>
      <DayName>{day}</DayName>
      <Degree>{celsius}°</Degree>
    </Root>
  );
};

export default WeatherCard;
