export default function AddProduct() {

    return (
        <div className="max-w-md bg-white shadow-lg rounded-lg p-6 h-fit align-middle">
            <h2 className="text-md font-semibold my-4 text-center">Add a new product</h2>
            <form className="space-y-4">

                {/* product name */}
                <div>
                    <label htmlFor="" className="block text-sm font-medium text-gray-600">
                        Product name: 
                    </label>
                    <input type="text" name="name" id="name" placeholder="Insert a product name" className="bg-gray-50 w-full text-black mt-1 p-2 rounded-lg border-[2.3px] focus:outline-none focus:border-[2.7px] focus:border-indigo-500"/>
                </div>

                {/* category */}
                <div>
                    <label htmlFor="" className="block text-sm font-medium text-gray-600">
                        Category: 
                    </label>
                    <select name="category" id="category" className="bg-gray-50 w-full text-black mt-1 p-2 rounded-lg border-[2.3px] focus:outline-none focus:border-[2.7px] focus:border-indigo-500">
                        <option value="">Choose a category</option>
                        <option value="clothing">Clothing</option>
                        <option value="gadgets">Gadgets</option>
                        <option value="beauty">Beauty</option>                    
                    </select>
                </div>

                {/* image url */}
                <div>
                    <label htmlFor="" className="block text-sm font-medium text-gray-600">
                        Product name: 
                    </label>
                    <input type="text" name="image" id="image" placeholder="Insert image URL" className="bg-gray-50 w-full text-black mt-1 p-2 rounded-lg border-[2.3px] focus:outline-none focus:border-[2.7px] focus:border-indigo-500"/>
                </div>

                {/* price and upload date*/}
                <div className="flex gap-3">
                    <div>
                        <label htmlFor="" className="block text-sm font-medium text-gray-600">
                            Price: 
                        </label>
                        <input type="number" name="price" id="price" placeholder="$" className="bg-gray-50 w-full text-black mt-1 p-2 rounded-lg border-[2.3px] focus:outline-none focus:border-[2.7px] focus:border-indigo-500"/>
                    </div>

                    <div>
                        <label htmlFor="" className="block text-sm font-medium text-gray-600">
                            Date: 
                        </label>
                        <input type="date" name="date" id="date" className="bg-gray-50 w-full text-black mt-1 p-2 rounded-lg border-[2.3px] focus:outline-none focus:border-[2.7px] focus:border-indigo-500"/>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary text-white">Add product</button>
            </form>
        </div>
    );
}