import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/Product';
import { initialState } from './inventoryTypes';
import { fetchProducts } from './inventoryActions';
import { inventoryUtils } from './inventoryUtils';

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    updateProduct: (state, action: PayloadAction<{ product: Product; index: number }>) => {
      const { product, index } = action.payload;
      state.products = inventoryUtils.updateProductInList(state.products, product, index);
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = inventoryUtils.removeProduct(state.products, action.payload);
    },
    toggleProductDisable: (state, action: PayloadAction<number>) => {
      state.products = inventoryUtils.toggleProductDisableState(state.products, action.payload);
    },
    toggleAdminView: (state) => {
      state.isAdmin = !state.isAdmin;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const {
  setProducts,
  updateProduct,
  deleteProduct,
  toggleProductDisable,
  toggleAdminView
} = inventorySlice.actions;

export default inventorySlice.reducer;
