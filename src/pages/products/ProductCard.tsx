import { Product } from "../../redux/features/products/productSlice";

interface ProductCardProps {
    product: Product
}

export default function ProductCard( {product}: ProductCardProps) {

    
    return (
        <div>name:{product.name} id:{product.id}</div>
    );
}