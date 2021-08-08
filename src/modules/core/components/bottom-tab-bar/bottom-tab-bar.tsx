import React, { FC } from 'react';
import { Text } from 'react-native';

import type { TabBarProps } from './bottom-tab-bar.interface';
import { Root, Tab } from './bottom-tab-bar.styled';

const BottomTabBar: FC<TabBarProps> = ({ state, navigation }) => {
  return (
    <Root>
      {state.routes.map(route => (
        <Tab key={route.key} onPress={() => navigation.navigate(route)}>
          <Text>{route.name}</Text>
        </Tab>
      ))}
    </Root>
  );
};

export default BottomTabBar;
