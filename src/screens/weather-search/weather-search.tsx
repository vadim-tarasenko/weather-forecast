import React, { FC } from 'react';
// components
import Search from '../../modules/core/components/search';
// containers
import WeatherCardsList from '../../modules/weather/containers/weather-cards-list';

import { Root, Content } from './weather-search.styled';

const WeatherSearch: FC = () => {
  return (
    <Root>
      <Content>
        <Search />
        <WeatherCardsList />
      </Content>
    </Root>
  );
};

export default WeatherSearch;
