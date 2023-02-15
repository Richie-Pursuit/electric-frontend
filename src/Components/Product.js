import { useState }  from 'react';
import { Link }from "react-router-dom"
 

function Product({ product, handleClick }) {
    return (
        <tr>
        <td>
          {product.top_speed > 30 ? (
            <span>⚠️</span>
          ) : (
            <span>&nbsp; &nbsp; &nbsp;</span>
          )}
        </td>
        <td>
            {product.name}
        </td>
        <td>
            
          <Link to={`/products/${product.id}`}>View</Link>
        </td>
        <td><button onClick={()=> handleClick(product)}>Add To Cart</button></td>
      </tr>
    );
}

export default Product;