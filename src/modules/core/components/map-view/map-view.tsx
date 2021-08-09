import React, { FC } from 'react';

import type { MapViewProps } from './map-view.interface';
import { Map } from './map-view.styled';

const MapView: FC<MapViewProps> = () => {
  return (
    <Map
      provider="google"
      mapType="standard"
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default MapView;
