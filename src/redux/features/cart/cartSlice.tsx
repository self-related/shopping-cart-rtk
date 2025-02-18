import { createSlice } from "@reduxjs/toolkit";
import { CartProduct, Product } from "../../../types";

type CartState = (Product & CartProduct)[];
const initialState: CartState = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state: CartState, action) => {
            // check if item already exists
            const itemIndex = state.findIndex((product) => product.id === action.payload.id);

            if (itemIndex >= 0) {
                state[itemIndex].quantity++;
                return;
            } else {
                return [...state, {quantity: 1, ...action.payload}];
            }
            
        },
        removeFromCart: (state, action) => {

            const itemIndex = state.findIndex((product) => product.id === action.payload);
            if (itemIndex === -1 ) {
                return;
            }

            if (state[itemIndex].quantity > 1) {
                state[itemIndex].quantity--;
            } else {
                return state.filter((product) => product.id !== action.payload);
            }
        }
    },

});