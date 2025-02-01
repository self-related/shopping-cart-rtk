import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../../types";

export default function AddProduct() {

    const [name, setName] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [date, setDate] = useState<string>("");

    type EventElement = HTMLInputElement | HTMLSelectElement;

    const handleInput = (event: React.FormEvent<EventElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
        setState(event.currentTarget.value);
    };

    const dispatch = useDispatch();

    const product: Product = {
        name,
        date,
        image,
        price: Number(price)
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch({type: "productsSlice/addProduct", payload: product});
    };

    console.log({name, category, image, price, date});

    return (
        <div className="max-w-md bg-white shadow-lg rounded-lg p-6 h-fit align-middle">
            <h2 className="text-md font-semibold my-4 text-center">Add a new product</h2>
            <form onSubmit={event => handleFormSubmit(event)} className="space-y-4">

                {/* product name */}
                <div>
                    <label htmlFor="" className="block text-sm font-medium text-gray-600">
                        Product name: 
                    </label>
                    <input onInput={event => handleInput(event, setName)} value={name} type="text" name="name" id="name" required placeholder="Insert a product name" className="bg-gray-50 w-full text-black mt-1 p-2 rounded-lg border-[2.3px] focus:outline-none focus:border-[2.7px] focus:border-indigo-500"/>
                </div>

                {/* category */}
                <div>
                    <label htmlFor="" className="block text-sm font-medium text-gray-600">
                        Category: 
                    </label>
                    <select onInput={event => handleInput(event, setCategory)} name="category" id="category" required className="bg-gray-50 w-full text-black mt-1 p-2 rounded-lg border-[2.3px] focus:outline-none focus:border-[2.7px] focus:border-indigo-500">
                        <option value="">Choose a category</option>
                        <option value="clothing">Clothing</option>
                        <option value="gadgets">Gadgets</option>
                        <option value="beauty">Beauty</option>                    
                    </select>
                </div>

                {/* image url */}
                <div>
                    <label htmlFor="" className="block text-sm font-medium text-gray-600">
                        Image: 
                    </label>
                    <input onInput={event => handleInput(event, setImage)} type="text" name="image" id="image" placeholder="Insert image URL" className="bg-gray-50 w-full text-black mt-1 p-2 rounded-lg border-[2.3px] focus:outline-none focus:border-[2.7px] focus:border-indigo-500"/>
                </div>

                {/* price and upload date*/}
                <div className="flex gap-3">
                    <div>
                        <label htmlFor="" className="block text-sm font-medium text-gray-600">
                            Price: 
                        </label>
                        <input onInput={event => handleInput(event, setPrice)} value={price} type="number" required name="price" id="price" placeholder="$" className="bg-gray-50 w-full text-black mt-1 p-2 rounded-lg border-[2.3px] focus:outline-none focus:border-[2.7px] focus:border-indigo-500"/>
                    </div>

                    <div>
                        <label htmlFor="" className="block text-sm font-medium text-gray-600">
                            Date: 
                        </label>
                        <input onInput={event => handleInput(event, setDate)} type="date" name="date" id="date" required className="bg-gray-50 w-full text-black mt-1 p-2 rounded-lg border-[2.3px] focus:outline-none focus:border-[2.7px] focus:border-indigo-500"/>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary text-white">Add product</button>
            </form>
        </div>
    );
}