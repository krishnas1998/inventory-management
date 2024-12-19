import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Toolbar, Switch, FormControlLabel, CssBaseline, ThemeProvider } from '@mui/material';
import AdminView from './components/AdminView/container/AdminView';
import UserView from './components/UserView';
import { fetchInventory } from './services/api';
import { RootState } from './redux/store';
import { setProducts, toggleAdminView } from './redux/inventorySlice';
// import { toggleDarkMode } from './redux/themeSlice';
import './App.css';
import { createAppTheme } from './theme';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state: RootState) => state.inventory.isAdmin);
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const theme = React.useMemo(
    () => createAppTheme(darkMode),
    [darkMode],
  );

  const loadProducts = async () => {
    const data = await fetchInventory();
    dispatch(setProducts(data));
  };

  useEffect(() => {
    loadProducts();
  }, [dispatch]);

  const handleAdminToggle = () => dispatch(toggleAdminView());
  // const handleDarkModeToggle = () => dispatch(toggleDarkMode());

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: 'flex-end' }}>
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Inventory Management
            </Typography> */}
            <FormControlLabel
              control={<Switch checked={isAdmin} onChange={handleAdminToggle} />}
              label={isAdmin ? 'Admin View' : 'User View'}
            />
            {/* Disabled for now, add dark mode toggle */}
            {/* <FormControlLabel
              control={<Switch checked={darkMode} onChange={handleDarkModeToggle} />}
              label="Dark Mode"
            /> */}
          </Toolbar>
        </AppBar>
        {isAdmin ? <AdminView /> : <UserView />}
      </div>
    </ThemeProvider>
  );
};

export default App;
