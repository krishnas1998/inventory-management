import { createTheme } from '@mui/material';

export const createAppTheme = (darkMode: boolean) =>
  createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#cadf66',
      },
      secondary: {
        main: '#FF69B4',
      },
      error: {
        main: '#FF0000',
      },
    },
  });
