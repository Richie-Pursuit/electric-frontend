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
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
            id="name"
            value={product.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Product"
            required
            />
            <label htmlFor="image">Image Link:</label>
            <input
            id="image"
            type="text"
            pattern="http[s]*://.+"
            required
            value={product.image}
            placeholder="http://"
            onChange={handleTextChange}
            />
            <label htmlFor="price">Price:</label>
            <input
            id="price"
            type="number"
            name="price"
            value={product.price}
            placeholder="$"
            onChange={handleTextChange}
            />
            <label htmlFor="top_speed">Top Speed Mph:</label>
            <input
            id="top_speed"
            type="number"
            onChange={handleTextChange}
            checked={product.top_speed}
            />
            <label htmlFor="description">Description:</label>
            <input
            id="description"
            value={product.description}
            type="text"
            onChange={handleTextChange}
            placeholder="Description of Product"
            required
            />

            <br />
            <input type="submit" />
        </form>
            
        </div>
    );
}

export default ProductNewForm;