import React from 'react';
import '../Components/indexShow.css'
import { Link } from "react-router-dom"


const Home = () => {
    return (
        <div className=" justify-center">
        
        <h2>Welcome To Electric</h2>
       
        <Link to="/products">CLICK TO VIEW </Link>
       
     

      
            
     </div>
    );
};

export default Home;