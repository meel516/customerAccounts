// In reducers/counterSlice.js (example of a counter slice)

import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  customerData: [],
};

// Slice
export const customerSlice = createSlice({
  name: 'customerSlice',
  initialState,
  reducers: {
    updateData: (state,action) => {
      state.customerData =action.payload;
    }
  },
});

// Actions generated from the slice
export const { updateData } = customerSlice.actions;

// Selector
export const getData = (state) => state.customerSlice.customerData;

// Reducer
export default customerSlice.reducer;
