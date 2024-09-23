import { createSlice } from '@reduxjs/toolkit';

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItems } = selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;
