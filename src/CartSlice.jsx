import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const itemToAdd = state.items.find(({itemDetails, quantity}) => quantity > 0 && action.payload.name === itemDetails.name )
      if(!itemToAdd) {
        state.items.push({ quantity: 1, cost: action.payload.cost.replace('$', '').trim(), itemDetails: action.payload });
      }
      return state;
    },
    removeItem: (state, action) => {
      const itemToRemoveIndex = state.items.findIndex(({itemDetails}) => action.payload.name === itemDetails.name)
      if(itemToRemoveIndex >= 0) {
        state.items.splice(itemToRemoveIndex, 1);
      }
      return state;
    },
    updateQuantity: (state, action) => {
      const itemToUpdateQuantiyIndex = state.items.findIndex(({itemDetails}) => action.payload.name === itemDetails.name )
      if(itemToUpdateQuantiyIndex >= 0 ) {
        state.items[itemToUpdateQuantiyIndex].quantity = action.payload.quantity;
      }
      return state;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
