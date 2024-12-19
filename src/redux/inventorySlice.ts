import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/Product';

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
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
    toggleProductDisable: (state, action: PayloadAction<number>) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        product.disabled = !product.disabled;
      }
    },
    toggleAdminView: (state) => {
      state.isAdmin = !state.isAdmin;
    },
  },
});

export const { setProducts, updateProduct, deleteProduct, toggleProductDisable, toggleAdminView } = inventorySlice.actions;

export default inventorySlice.reducer;
