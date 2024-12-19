import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import { fetchInventory } from '../services/api';

// New async thunk
export const fetchProducts = createAsyncThunk(
  'inventory/fetchProducts',
  async () => {
    const data = await fetchInventory();
    return data;
  }
);

interface InventoryState {
  products: Product[];
  isAdmin: boolean;
}

const initialState: InventoryState = {
  products: [],
  isAdmin: true,
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    updateProduct: (state, action: PayloadAction<{ product: Product; index: number }>) => {
      const { product, index } = action.payload;
      if (index >= 0 && index < state.products.length) {
        state.products[index] = product;
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products.splice(action.payload, 1);
    },
    toggleProductDisable: (state, action: PayloadAction<number>) => {
      const product = state.products[action.payload];
      if (product) {
        product.disabled = !product.disabled;
      }
    },
    toggleAdminView: (state) => {
      state.isAdmin = !state.isAdmin;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { setProducts, updateProduct, deleteProduct, toggleProductDisable, toggleAdminView } = inventorySlice.actions;

export default inventorySlice.reducer;
