import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const API = process.env.REACT_APP_API_URL;


function Products( { handleClick } ) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      axios
        .get(`${API}/products`)
        .then((response) => setProducts(response.data))
        .catch((c) => console.warn("catch", c));
    }, []);
  
    // className="grid grid-cols-3 grid-rows-2 "
    return (
        <div className="grid grid-cols-3 grid-rows-2 " >
            {products.map((product) => {
            return <Product key={product.id} product={product} handleClick={handleClick}  />;
            })}
         </div>
    );
}

export default Products;