import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// screens
import Map from '../screens/map';
import WeatherSearch from '../screens/weather-search';
// components
import BottomTabBar from '../modules/core/components/bottom-tab-bar';

const Tab = createBottomTabNavigator();

const RootNavigation: FC = () => {
  return (
    <Tab.Navigator
      tabBar={BottomTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Search" component={WeatherSearch} />
    </Tab.Navigator>
  );
};

export default RootNavigation;
