import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../types";

const initialState: Product[] = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => ([...state, action.payload]),
        removeFromCart: (state, action) => state.filter((product) => product.id !== action.payload)
    },

});