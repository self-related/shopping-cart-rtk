import { useDispatch } from "react-redux";
import { Product } from "../../redux/features/products/productSlice";

interface ProductCardProps {
    product: Product
}

export default function ProductCard( {product}: ProductCardProps) {

    const { id, name, date, image, price, description } = product ?? null;
    if (product == null) {
        console.log("Not provided");
    }

    const dispatch = useDispatch()

    const handleRemoveProduct = () => {
        dispatch({type: "products/removeProduct", payload: id});
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
                    <button className="btn btn-primary bg-blue-500 text-white hover:bg-blue-700">
                        Add
                    </button>
                    <button onClick={handleRemoveProduct} className="btn btn-primary bg-red-500 text-white hover:bg-red-700 border-none" >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}