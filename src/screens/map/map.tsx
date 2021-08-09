import React, { FC, useCallback } from 'react';
import { Marker, Callout } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
// components
import MapView from '../../modules/core/components/map-view';
import WeatherCallout from '../../modules/weather/components/weather-callout';
// selectors
import { selectWeatherLocation } from '../../modules/weather/weather.selectors';
// hooks
import { useService } from '../../modules/core/hooks/use-service';
import { useCurrentWeatherQuery } from '../../modules/weather/hooks/use-current-weather-query';
// services
import WeatherDataService from '../../modules/weather/services/weather-data.service';

import { Root } from './map.styled';

const Map: FC = () => {
  // hooks
  const navigation = useNavigation();
  // selectors
  const weatherLocation = useSelector(selectWeatherLocation);
  // services
  const weatherDataService = useService(WeatherDataService);
  // queries
  const currentWeatherQuery = useCurrentWeatherQuery(
    {
      lat: weatherLocation.lat ?? 0,
      lon: weatherLocation.lon ?? 0,
    },
    {
      enabled: !!weatherLocation.lat && !!weatherLocation.lon,
    },
  );

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
            }}
            title={currentWeatherQuery.data?.name}
            description={'some text'}>
            <Callout onPress={handleCalloutPress}>
              <WeatherCallout
                locationName={currentWeatherQuery.data?.name ?? ''}
                celsius={weatherDataService.getCelsiusFromKelvins(
                  currentWeatherQuery.data?.main?.temp ?? 0,
                )}
              />
            </Callout>
          </Marker>
        )}
      </MapView>
    </Root>
  );
};

export default Map;
