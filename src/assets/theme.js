import * as React from 'react';
import { DefaultTheme } from '@react-navigation/native';

/* TODO: change header color for navigators */
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    border: '#fff',
  },
};

export default theme;