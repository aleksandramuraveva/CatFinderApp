import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Actress, SelectedItemsState } from '../types';

const initialState: SelectedItemsState = {
  items: [],
};

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    addItem(state: SelectedItemsState, action: PayloadAction<Actress>) {
      state.items.push(action.payload);
    },
    removeItem(state: SelectedItemsState, action: PayloadAction<Actress>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearItems(state: SelectedItemsState) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItems } = selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;
