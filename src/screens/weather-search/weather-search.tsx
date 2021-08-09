import React, { FC } from 'react';
// components
import Search from '../../modules/core/components/search';

import { Root, Content } from './weather-search.styled';

const WeatherSearch: FC = () => {
  return (
    <Root>
      <Content>
        <Search />
      </Content>
    </Root>
  );
};

export default WeatherSearch;
