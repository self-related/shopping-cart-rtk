export default function AddProduct() {

    return (
        <div className="max-w-md bg-white shadow-lg rounded-lg p-6 h-fit align-middle">
            <h2 className="text-md font-semibold my-4 text-center">Add a new product</h2>
            <form action="">
                <div>
                    <label htmlFor="" className="block text-sm font-medium text-gray-600">
                        Product name: 
                    </label>
                    <input type="text" name="name" id="name" placeholder="product" className="bg-gray-50 w-full text-black mt-1 p-2 rounded-lg border-[2.3px] focus:outline-none focus:border-[2.7px] focus:border-indigo-500"/>
                </div>
            </form>
        </div>
    );
}