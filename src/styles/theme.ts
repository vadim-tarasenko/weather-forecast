import type { ViewStyle } from 'react-native';

export type Theme = {
  palette: {
    primary: string;
    gray: string;
    lightGray: string;
  };
  elevation: {
    small: Partial<ViewStyle>;
  };
};

export const theme: Theme = {
  palette: {
    primary: '#2799fb',
    gray: 'gray',
    lightGray: '#DADADA',
  },
  elevation: {
    small: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
  },
};
