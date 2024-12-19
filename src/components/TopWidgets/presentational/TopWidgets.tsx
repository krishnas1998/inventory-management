import React from 'react';
import { Grid2 as Grid, Paper, Typography, Box } from '@mui/material';
import { RemoveShoppingCart, CurrencyExchange, Category, ShoppingCart } from '@mui/icons-material';

interface TopWidgetsProps {
  totalProducts: number;
  totalStoreValue: number;
  outOfStock: number;
  categories: number;
}

const TopWidgets: React.FC<TopWidgetsProps> = ({ totalProducts, totalStoreValue, outOfStock, categories }) => {
  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      {[
        { label: 'Total Products', value: totalProducts, icon: <ShoppingCart /> },
        { label: 'Total Store Value', value: `$${totalStoreValue.toFixed(2)}`, icon: <CurrencyExchange /> },
        { label: 'Out of Stock', value: outOfStock, icon: <RemoveShoppingCart /> },
        { label: 'Categories', value: categories, icon: <Category /> },
      ].map((widget, index) => (
        <Grid size={3} key={index}>
          <Paper sx={{ p: 1, paddingLeft: 3, paddingRight: 3, borderRadius: 2, backgroundColor: '#243325' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {widget.icon}
              <Box sx={{ textAlign: 'left', marginLeft: 2 }}>
                <Typography variant="subtitle2">{widget.label}</Typography>
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
