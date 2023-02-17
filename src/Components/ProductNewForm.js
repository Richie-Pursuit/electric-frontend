import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function ProductNewForm() {

    let navigate = useNavigate();

    const [product, setProduct] = useState({
      name: "",
      image: "",
      price: "",
      top_speed: "",
      description: "",
    });

    const addProduct = (newProduct) => {
        axios
          .post(`${API}/products`, newProduct)
          .then(
            () => {
              navigate(`/products`);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
      };
    
    //   const handleCheckboxChange = () => {
    //     setProduct({ ...product, is_favorite: !product.is_favorite });
    //   };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        addProduct(product);
      };
    
      const handleTextChange = (event) => {
        setProduct({ ...product, [event.target.id]: event.target.value });
      };
    
    
    return (
        <div className="flex m-auto w-2/5">
            <form  className="bg-orange-300 p-5 rounded w-full" onSubmit={handleSubmit}>
              <h1>ADD A NEW PRODUCT</h1>
            <label className="bg-orange-100 m-5 p-3  block font-bold mb-2" htmlFor="name">Name:</label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
            value={product.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Product"
            required
            />
            <label className="bg-orange-100 m-5 p-3  block font-bold mb-2" htmlFor="image">Image Link:</label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="image"
            type="text"
            pattern="http[s]*://.+"
            required
            value={product.image}
            placeholder="http://"
            onChange={handleTextChange}
            />
            <label className="bg-orange-100 m-5 p-3  block font-bold mb-2" htmlFor="price">Price:</label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="price"
            type="number"
            name="price"
            min='100'
            value={product.price}
            placeholder="$"
            onChange={handleTextChange}
            />
            <label className="bg-orange-100 m-5 p-3  block font-bold mb-2" htmlFor="top_speed">Top Speed Mph:</label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="top_speed"
            type="number"
            min= "0"
            onChange={handleTextChange}
            checked={product.top_speed}
            />
            <label className="bg-orange-100 m-5 p-3  block font-bold mb-2" htmlFor="description">Description:</label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="description"
            value={product.description}
            type="text"
            onChange={handleTextChange}
            placeholder="Description of Product"
            required
            />

            <br />
            <input class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"  type="submit" />
        </form>
            
        </div>
    );
}

export default ProductNewForm;