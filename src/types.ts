export interface Product {
    name: string,
    category?: string,
    id?: number,
    price?: number,
    image?: string,
    date?: string,
    description?: string
}


export interface CartProduct {
    quantity: number,
}