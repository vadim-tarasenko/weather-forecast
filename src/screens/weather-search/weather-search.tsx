import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
// components
import Search from '../../modules/core/components/search';
// containers
import WeatherCardsList from '../../modules/weather/containers/weather-cards-list';
// selectors
import { selectWeatherLocation } from '../../modules/weather/weather.selectors';
// actions
import {
  resetWeatherLocation,
  setWeatherLocation,
} from '../../modules/weather/weather.actions';

import { Root, Content } from './weather-search.styled';

const WeatherSearch: FC = () => {
  // hooks
  const dispatch = useDispatch();
  // state
  const [searchText, setSearchText] = useState('');
  // selectors
  const weatherLocation = useSelector(selectWeatherLocation);

  useEffect(() => {
    if (weatherLocation.name) {
      setSearchText(weatherLocation.name);
    }
  }, [weatherLocation.name]);

  const handleSearchPress = useCallback(() => {
    dispatch(
      setWeatherLocation({
        name: searchText,
      }),
    );
  }, [dispatch, searchText]);

  const handleSearchInputChange = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setSearchText(e.nativeEvent.text);
    },
    [],
  );

  const handleSearchInputFocus = useCallback(() => {
    dispatch(resetWeatherLocation());
  }, [dispatch]);

  return (
    <Root>
      <Content>
        <Search
          onSearchPress={handleSearchPress}
          inputProps={{
            placeholder: 'Type city name...',
            value: searchText,
            onChange: handleSearchInputChange,
            onFocus: handleSearchInputFocus,
          }}
        />
        <WeatherCardsList />
      </Content>
    </Root>
  );
};

export default WeatherSearch;
