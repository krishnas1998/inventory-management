import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Toolbar, Switch, FormControlLabel, CssBaseline, ThemeProvider } from '@mui/material';
import Inventory from './components/Inventory/container/Inventory';
import { RootState } from './redux/store';
import { toggleAdminView } from './redux/inventory/inventorySlice';
import './App.css';
import { createAppTheme } from './theme';

const App: React.FC = () => {
  const isAdmin = useSelector((state: RootState) => state.inventory.isAdmin);
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();

  const theme = React.useMemo(
    () => createAppTheme(darkMode),
    [darkMode],
  );

  const handleAdminToggle = () => dispatch(toggleAdminView());

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: 'flex-end' }}>
            <FormControlLabel
              control={<Switch checked={isAdmin} onChange={handleAdminToggle} />}
              label={isAdmin ? 'Admin View' : 'User View'}
            />
          </Toolbar>
        </AppBar>
        <Inventory />
      </div>
    </ThemeProvider>
  );
};

export default App;
