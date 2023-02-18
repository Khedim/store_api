import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./silces/cartSlice";
import productsSlice from "./silces/productsSlice";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice
    }
})