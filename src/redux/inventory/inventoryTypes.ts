import { Product } from "../../types/Product";

// Action types
export const INVENTORY_ACTIONS = {
  FETCH_PRODUCTS: 'inventory/fetchProducts',
} as const;

// State interface
export interface InventoryState {
  products: Product[];
  isAdmin: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state
export const initialState: InventoryState = {
  products: [],
  isAdmin: true,
  status: 'idle',
  error: null,
};
