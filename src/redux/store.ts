import { configureStore } from '@reduxjs/toolkit';
import { inventoryReducer } from './inventory';
import themeReducer from './theme/themeSlice';

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
