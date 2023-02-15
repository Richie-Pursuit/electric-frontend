import React from 'react';


function Cart({onRemove, cart, cartTotal}) {
    const taxPrice = cartTotal * 0.10;
    const shippingPrice = cartTotal > 2500 ? 0 : 20;
    const totalPrice = cartTotal + taxPrice + shippingPrice;

    return (
        <div>
            <h2>Cart Items:</h2>

            {cart.length === 0 && <div>Cart is empty</div>}

            {cart.map((product)=>(

                <li key={product.id}> {product.name}: ${product.price} <button className='remove'
                    key={product.id} onClick={()=> onRemove(product)}>Remove
                    </button>
                </li>
            ))}
            {cart.length !==0 ?(            <div>
            <h3>ITEM TOTAL: ${cartTotal.toFixed(2)}</h3>
            <h3>TAX: ${taxPrice.toFixed(2)}</h3>
            <h3>SHIPPING PRICE: ${shippingPrice.toFixed(2)}</h3>
            <h3>TOTAL PRICE: ${totalPrice.toFixed(2)}</h3>
            </div>) : ' '  }

            
        </div>
    );
}

export default Cart;