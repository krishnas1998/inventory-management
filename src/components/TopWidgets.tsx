import React from 'react';
import { useSelector } from 'react-redux';
import { Grid2 as Grid, Paper, Typography, Box } from '@mui/material';
import { RemoveShoppingCart, CurrencyExchange, Category, ShoppingCart } from '@mui/icons-material';
import { RootState } from '../redux/store';

const TopWidgets: React.FC = () => {
  const products = useSelector((state: RootState) => state.inventory.products);

  const totalProducts = products.length;
  const totalStoreValue = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const outOfStock = products.filter(product => product.quantity === 0).length;
  const categories = new Set(products.map(product => product.category)).size;

  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      {[
        { label: 'Total Products', value: totalProducts, icon: <ShoppingCart /> },
        { label: 'Total Store Value', value: `$${totalStoreValue.toFixed(2)}`, icon: <CurrencyExchange /> },
        { label: 'Out of Stock', value: outOfStock, icon: <RemoveShoppingCart /> },
        { label: 'Categories', value: categories, icon: <Category /> },
      ].map((widget, index) => (
        <Grid size={3} key={index}>
          <Paper sx={{ p: 1, paddingLeft: 3, paddingRight: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {widget.icon}
              <Box sx={{ textAlign: 'left', marginLeft: 2 }}>
                <Typography variant="h6">{widget.label}</Typography>
                <Typography variant="h4">{widget.value}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopWidgets;
