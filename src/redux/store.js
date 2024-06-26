import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import filter from "./slices/filetrSlice";

export const store = configureStore({
  reducer: {
    cart,
    filter,
  },
});
