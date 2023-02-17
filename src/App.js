import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import './App.css';


function App() {

  const [cart, setCart] = useState([])

  const handleClick = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]); 
    }
  }

  const onRemove = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }

  const cartTotal = cart.reduce((a, c) => a + c.qty * c.price, 0); 

  const countCartItems = cart.length !== 0 && <div className='count'>{cart.length}</div>
   
  
  // price multiplied by quantities 


  // return alert("You have already added this product to the cart")

  return (
    <div className="grid">
      <Router>
        <NavBar countCartItems={countCartItems} />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="/products" element={<Index
           handleClick={handleClick}
           onRemove={onRemove}
           cart={cart} 
           cartTotal={cartTotal}/>} 
           />
          <Route path="/products/new" element={<New />} />
          <Route exact path="/products/:id" element={<Show />} />
          <Route path="/products/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

