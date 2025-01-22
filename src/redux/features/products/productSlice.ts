import { createSlice } from "@reduxjs/toolkit";

interface Product {
    id: number,
    name: string,
    price?: number,
    image?: string,
    date?: string
}

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
    name: "products",
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
    },
});

export const {addProduct} = productSlice.actions;

export { productSlice };