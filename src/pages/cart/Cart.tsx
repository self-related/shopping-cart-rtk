import { useAppSelector } from "../../redux/store";
import CartCard from "./CartCard";


export default function Cart() {
    const cartProducts = useAppSelector((state) => state.cart);
    console.log(cartProducts);

    
    return (
        <div className="py-8 px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8        ">
                <div className="col-span-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {
                            cartProducts.length 
                            ? cartProducts.map((product, index) => (
                                <CartCard key={index} product={product} />
                            ))
                            : <div>No product found</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}