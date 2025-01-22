import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./features/products/productSlice";

const store = configureStore({
    reducer: {
        products: productSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store; 