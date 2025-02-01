import { createSlice } from "@reduxjs/toolkit";

import { Product } from "../../../types";

type SliceState = Product[];

const initialState: SliceState = [
    {
        id: 1,
        name: "Product 1",
        price: 50,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        date: "2025-01-01",
    }
];

const productSlice = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {
        // TODO: define action type
        addProduct: (state: SliceState, action) => {
            const id = state.length > 0 ? state.length + 1 : 1;

            // change the state directly cuz we can call "push" method
            state.push({
                id,
                ...action.payload
            });
        },
        removeProduct: (state: SliceState, action) => {
            const id: number = Number(action.payload);
            return state.filter((product) => product.id !== id);
        },
    },
});

// 
// export const {addProduct, removeProduct} = productSlice.actions;

export { productSlice };