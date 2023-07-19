import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    menuItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.menuItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1; // increment the quantity of existing item
        state.total += existingItem.price;
      } else {
        state.menuItems.push(action.payload);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;