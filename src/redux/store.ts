import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./features/products/productSlice";
import { useSelector } from "react-redux";
import { cartSlice } from "./features/cart/cartSlice";

const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store; 

export const useAppSelector = useSelector.withTypes<RootState>();