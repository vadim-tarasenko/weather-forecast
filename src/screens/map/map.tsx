import React, { FC, useCallback, useEffect } from 'react';
import { Marker, Callout } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
// components
import MapView from '../../modules/core/components/map-view';
import WeatherCallout from '../../modules/weather/components/weather-callout';
// selectors
import { selectWeatherLocation } from '../../modules/weather/weather.selectors';
// hooks
import { useCurrentWeatherQuery } from '../../modules/weather/hooks/use-current-weather-query';

import { Root } from './map.styled';
import { setWeatherLocation } from '../../modules/weather/weather.actions';

const Map: FC = () => {
  // hooks
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // selectors
  const weatherLocation = useSelector(selectWeatherLocation);
  // queries
  const currentWeatherQuery = useCurrentWeatherQuery(
    {
      q: `${weatherLocation.lat},${weatherLocation.lon}`,
    },
    {
      enabled: !!weatherLocation.lat && !!weatherLocation.lon,
    },
  );

  useEffect(() => {
    if (currentWeatherQuery.data) {
      dispatch(
        setWeatherLocation({ name: currentWeatherQuery.data.location.name }),
      );
    }
  }, [currentWeatherQuery.data, dispatch]);

  const handleCalloutPress = useCallback(() => {
    navigation.navigate({ name: 'Search' });
  }, [navigation]);

  return (
    <Root>
      <MapView>
        {weatherLocation.lat && weatherLocation.lon && (
          <Marker
            tracksInfoWindowChanges={true}
            coordinate={{
              latitude: weatherLocation.lat,
              longitude: weatherLocation.lon,
            }}>
            <Callout onPress={handleCalloutPress}>
              <WeatherCallout
                locationName={currentWeatherQuery.data?.location?.name ?? ''}
                celsius={currentWeatherQuery.data?.current?.temp_c ?? 0}
              />
            </Callout>
          </Marker>
        )}
      </MapView>
    </Root>
  );
};

export default Map;
