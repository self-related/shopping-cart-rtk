import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./features/products/productSlice";
import { useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        products: productSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store; 

export const useAppSelector = useSelector.withTypes<RootState>();