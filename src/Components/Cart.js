import React from 'react';
import { Link }from "react-router-dom"


function Cart({onRemove, cart, cartTotal}) {
    const taxPrice = cartTotal * 0.10;
    const shippingPrice = cartTotal > 2500 ? 0 : 20;
    const totalPrice = cartTotal + taxPrice + shippingPrice;
    const sixMonthsTotal = totalPrice/6
    const twelveMonths = totalPrice/12
    const submitForm = (e) => {
        e.preventDefault()
        alert('You have submitted a purchase request. Thank you!')
        document.querySelector(`form`).reset()
    }

    


    return (
        <div >
            <hr></hr>
            
            

            {cart.length === 0 && <div className='bg-white '>Cart is empty</div>}

            {cart.map((product)=>(
            

                <div key={product.id} className="row"> 
                
        
                
                <div className='text-blue-800 col-1'><Link to={`/products/${product.id}`}>{product.name}:</Link></div> 
                
                <div className='col-2'>${product.price} <button className=" bg-red-500 rounded text-lg pl-1.5 pr-1.5 space-x-1 > * + *"key={product.id} onClick={()=> onRemove(product)}> -
                    </button></div>
                    

                </div>
                
                
                
            ))}
            {cart.length !==0 ?(
            <section>
            <hr></hr>
            <div className='row'>
            <div className="col-1">ITEM TOTAL:</div> 
            <div className="col-2">${cartTotal.toFixed(2)}</div>
            </div>
            <div className="row">
            <div className="col-1">TAX: </div>
            <div className="col-2">${taxPrice.toFixed(2)}</div>
            </div>
            <div className='row'>
            <div className="col-1">SHIPPING PRICE: </div>
            <div className="col-2">${shippingPrice.toFixed(2)}</div>
            </div>
            <hr></hr>
            <div className='row'>
            <div className="decoration-blue-500 col-1">TOTAL PRICE: </div>
            <div className="decoration-blue-500 col-2">${totalPrice.toFixed(2)}</div>
            </div>
            <br></br>
            <hr></hr>

            <div>
                <br></br>
                <p>THAT IS ${sixMonthsTotal.toFixed(2)} A MONTH WHEN FINANCED IN 6 MONTHS OR ${twelveMonths.toFixed(2)} A MONTH IF FINANCED IN 12 MONTHS. </p>
            </div>
            <br></br>
            <hr></hr>
            <br></br>

        <div className='grid grid-cols-1 gap-1'> 
        <form  onSubmit={submitForm}>
        <label htmlFor="fName">Full Name: </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" id="fName" />

        <label htmlFor="email">Email: </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="email" id="email" />
                
        <label htmlFor="zip">Zipcode: </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" id="zip" />
        

        <button className="shadow mt-5 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
      </div>

            </section>) : ' '  }
            
            

            
        </div>
    );
}

export default Cart;