import { useAppSelector } from "../redux/store";

export default function Home() {
    const products = useAppSelector((state) => state.products);
    console.log(products);

    
    return (
        <div className="py-8 px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8        ">
                <div className="col-span-2">
                    <div>
                        {
                            products.length 
                            ? products.map((product, index) => (
                                <div key={index}>Product {index + 1}</div>
                            ))
                            : <div>No product found</div>
                        }
                    </div>
                </div>
                <div>Add new product</div>
            </div>
        </div>
    );
}