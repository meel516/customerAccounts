import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './slices/customerSlice.js';
import api from '../services/api.js';

export const store = configureStore({
  reducer: {
    customers: customerReducer,
    [api.reducerPath]: api.reducer,
  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});