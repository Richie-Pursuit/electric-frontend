import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;



function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
  
    const deleteProduct = () => {
      axios
        .delete(`${API}/products/${id}`)
        .then(
          () => {
            navigate(`/products`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };
  
    const handleDelete = () => {
      deleteProduct();
    };
  
    useEffect(() => {
      axios
        .get(`${API}/products/${id}`)
        .then((response) => {
          console.log(response.data);
          setProduct(response.data);
        })
        .catch((c) => {
          console.warn("catch", c);
        });
    }, [id]);



    return (
        
        <article className="pb-20 mb-20 m-10 grid grid-cols-2 grid-rows-10 gap-1" >
          
          <div className="col-span-full row-span-1 " row>
          {product.top_speed > 30 ? <div class="font-bold">⚠️ Warning! High top speed. Please check with your local laws before purchasing. ⚠️</div> : null} 
          </div>

          <div className="col-start-1 col-end-2 " >
          {product.name}
          <img className='sm:w-96 max-w-sm' src={product.image} alt='product' />
          </div>
           
          <div class="col-start-2">
          <h6>PRICE: ${product.price}</h6>
          <h6>TOP SPEED: {product.top_speed}mph</h6>
          <p>PRODUCT DESCRIPTION: {product.description}</p>
          </div>
          
            <div className="col-span-full">
              <Link to={`/products`}>
                <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >Back</button>
              </Link>
              <Link to={`/products/${product.id}/edit`}>
                <button class="shadow bg-purple-200 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Edit</button>
              </Link>      
              <button class="shadow bg-red-200 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={handleDelete}>Delete</button>
              </div>
          
        </article>
      
    );
}

export default ProductDetails;