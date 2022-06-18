import { createSlice } from "@reduxjs/toolkit";
const initState = {
  cart: [],
};
const productSlice = createSlice({
  name: "productSlice",
  initialState: initState,
  reducers: {
    addProduct: (state, action) => {
      const isExist = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (isExist) {
        state.cart = state.cart.map((item) => {
          if (item._id === action.payload._id) {
            item.quantity += 1;
          }
          return item;
        });
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});
export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
