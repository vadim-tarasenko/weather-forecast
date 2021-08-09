import React from 'react';
import 'reflect-metadata';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';

import RootNavigation from './src/navigation/root-navigation';
import { theme } from './src/styles/theme';
import { store } from './src/modules/core/services/store.service';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>
);

export default App;
