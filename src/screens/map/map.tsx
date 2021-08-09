import React, { FC } from 'react';
// components
import MapView from '../../modules/core/components/map-view';

import { Root } from './map.styled';

const Map: FC = () => {
  return (
    <Root>
      <MapView />
    </Root>
  );
};

export default Map;
