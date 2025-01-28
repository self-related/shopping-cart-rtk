import { useAppSelector } from "../../redux/store";
import AddProduct from "../products/AddProduct";
import ProductCard from "../products/ProductCard";

export default function Home() {
    const products = useAppSelector((state) => state.products);
    console.log(products);

    
    return (
        <div className="py-8 px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8        ">
                <div className="col-span-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {
                            products.length 
                            ? products.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))
                            : <div>No product found</div>
                        }
                    </div>
                </div>
                <AddProduct />
            </div>
        </div>
    );
}