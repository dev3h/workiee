import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initState = {
  cart: [],
};
const productSlice = createSlice({
  name: "productSlice",
  initialState: initState,
  reducers: {
    addProduct: (state, action) => {
      const isExist = state.cart.find((item) => item.id === action.payload.id);
      if (isExist) {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += 1;
            toast.info(`increase ${item.name}  cart quantity`, {
              position: "bottom-left",
            });
          }
          return item;
        });
      } else {
        state.cart.unshift({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-left",
        });
      }
    },
    changeQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = action.payload.quantity;
        }
        return item;
      });
    },

    removeProduct: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { addProduct, changeQuantity, removeProduct } =
  productSlice.actions;

export default productSlice.reducer;
