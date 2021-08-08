import React, { FC } from 'react';

import Input from '../../modules/core/components/input';
import { Root, Content } from './weather-search.styled';

const WeatherSearch: FC = () => {
  return (
    <Root>
      <Content>
        <Input />
      </Content>
    </Root>
  );
};

export default WeatherSearch;
