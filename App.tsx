import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import { theme } from './src/styles/theme';
import RootNavigation from './src/navigation/root-navigation';

const App = () => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
