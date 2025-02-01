import { useDispatch } from "react-redux";
import { Product } from "../../types";

interface ProductCardProps {
    product: Product
}

export default function CartCard( {product}: ProductCardProps) {

    const { id, name, image, price, description } = product ?? null;
    if (product == null) {
        console.log("Not provided");
    }

    const dispatch = useDispatch()

    const handleRemoveProduct = () => {
        dispatch({type: "cartSlice/removeFromCart", payload: id});
    };

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white">
                    {name}
                </h2>
                <p>
                    {description ?? "No description"}
                </p>
                <div className="card-actions justify-end items-center">
                    <p className="text-gray-200 font-semibold">
                        ${price}
                    </p>
                    <button onClick={handleRemoveProduct} className="btn btn-primary bg-red-500 text-white hover:bg-red-700 border-none" >
                        Remove from cart
                    </button>
                </div>
            </div>
        </div>
    );
}