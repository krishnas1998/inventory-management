import { createTheme } from '@mui/material';

export const createAppTheme = (darkMode: boolean) =>
  createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#4CAF50', // green for edit
      },
      secondary: {
        main: '#FF69B4', // pink for visibility
      },
      error: {
        main: '#FF0000', // red for delete
      },
    },
  });
