import React from 'react';
import Products from '../Components/Products';
import Cart from '../Components/Cart';
import '../Components/indexShow.css'

const Index = ({ handleClick, cart, onRemove, cartTotal }) => {
    return (
        <div className='background grid grid-cols-3 grid-rows-4 gap-1'>
            <div className='col-span-1 row-span-2'>
            <Cart 
            onRemove={onRemove}
            cart={cart}
            cartTotal={cartTotal} />
            </div>
            <div className='col-span-2 row-span-4'>
            <Products handleClick={handleClick}  />
            </div>

            

            
        </div>
    );
};

export default Index;