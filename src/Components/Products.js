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
  
    return (
        <div>
        {console.log("I render first")}
        <section>
            <table>
            <thead>
                <tr>
                <th></th>
                <th>Personal Electric Vehicles</th>
                <th>See this PEV</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                return <Product key={product.id} product={product} handleClick={handleClick}  />;
                
                })}
            </tbody>
            </table>
        </section>
    </div>
    );
}

export default Products;