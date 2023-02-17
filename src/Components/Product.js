import { useState }  from 'react';
import { Link }from "react-router-dom"

 

function Product({ product, handleClick }) {
    return (
        <div >
          
          
          {product.top_speed > 30 ? (
            <span>⚠️</span>
          ) : (
            <span>&nbsp; &nbsp; &nbsp;</span>
          )}
        
          
           <h1 className='font-bold'> {product.name}</h1>
            <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs" >
            <Link to={`/products/${product.id}`}>
            <img className='block object-cover object-center w-full h-full rounded-lg' src={product.image} alt='product' />
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-blue-500 via-orange-500 to-yellow-500 hover:opacity-70"></div>
            </Link>
           
            </div>
            
        
        
            
          
        <br></br>
        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={()=> handleClick(product)}>Add To Cart</button>
        
      </div>
    );
}

export default Product;