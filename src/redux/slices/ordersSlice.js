import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.items.push(action.payload);
    }
  }
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
