import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchInventory } from '../../services/api';
import { INVENTORY_ACTIONS } from './inventoryTypes';

export const fetchProducts = createAsyncThunk(
  INVENTORY_ACTIONS.FETCH_PRODUCTS,
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchInventory();
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch products');
    }
  }
);