import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { MapEvent } from 'react-native-maps';
import { setWeatherLocation } from '../../../weather/weather.actions';

import type { MapViewProps } from './map-view.interface';
import { Map } from './map-view.styled';

const MapView: FC<MapViewProps> = ({ children }) => {
  const dispatch = useDispatch();

  const handleLongPress = useCallback(
    (e: MapEvent<{}>) => {
      dispatch(
        setWeatherLocation({
          lon: e.nativeEvent.coordinate.longitude,
          lat: e.nativeEvent.coordinate.latitude,
        }),
      );
    },
    [dispatch],
  );
  return (
    <Map
      provider="google"
      onLongPress={handleLongPress}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {children}
    </Map>
  );
};

export default MapView;
