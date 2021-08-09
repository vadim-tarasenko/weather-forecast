import React, { FC } from 'react';
// components
import Search from '../../modules/core/components/search';
import WeatherCard from '../../modules/weather/components/weather-card';

import { Root, Content } from './weather-search.styled';

const WeatherSearch: FC = () => {
  return (
    <Root>
      <Content>
        <Search />
        <WeatherCard />
      </Content>
    </Root>
  );
};

export default WeatherSearch;
