import React from 'react';
import Products from '../Components/Products';
import Cart from '../Components/Cart';

const Index = ({ handleClick, cart, onRemove, cartTotal }) => {
    return (
        <div>
            <h2>Index</h2>
            <Cart 
            onRemove={onRemove}
            cart={cart}
            cartTotal={cartTotal} />
            
            <Products handleClick={handleClick}  />

            
        </div>
    );
};

export default Index;