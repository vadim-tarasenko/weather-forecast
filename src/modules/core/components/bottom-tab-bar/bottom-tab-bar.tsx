import React, { FC } from 'react';

import type { TabBarProps } from './bottom-tab-bar.interface';
import { Root, Tab, TabText } from './bottom-tab-bar.styled';

const BottomTabBar: FC<TabBarProps> = ({ state, navigation, ...props }) => {
  return (
    <Root>
      {state.routes.map(route => (
        <Tab key={route.key} onPress={() => navigation.navigate(route)}>
          <TabText>{route.name}</TabText>
        </Tab>
      ))}
    </Root>
  );
};

export default BottomTabBar;
