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
        <>
        <article>

          {product.top_speed > 30 ? <span>⭐️</span> : null} {product.name}
          <img className='pic' src={product.image} alt='product' />
          <h5>
            <span>
              {product.name}
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {product.image}
          </h5>
          <h6>{product.price}</h6>
          <p>{product.description}</p>
          <div className="showNavigation">
            <>
              <Link to={`/products`}>
                <button>Back</button>
              </Link>
            </>
            <>
              <Link to={`/products/${product.id}/edit`}>
                <button>Edit</button>
              </Link>
            </>
            <>
              <button onClick={handleDelete}>Delete</button>
            </>
          </div>
        </article>
      </>
    );
}

export default ProductDetails;