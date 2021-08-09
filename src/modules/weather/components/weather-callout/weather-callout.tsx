import React, { FC } from 'react';

import type { WeatherCalloutProps } from './weather-callout.interface';
import { Root, Text } from './weather-callout.styled';

const WeatherCallout: FC<WeatherCalloutProps> = ({ locationName, celsius }) => (
  <Root>
    <Text>{locationName}</Text>
    <Text>{celsius}°</Text>
  </Root>
);

export default WeatherCallout;
