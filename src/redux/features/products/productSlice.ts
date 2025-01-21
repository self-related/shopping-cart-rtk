
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
