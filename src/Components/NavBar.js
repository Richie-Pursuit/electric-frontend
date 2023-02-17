import React from 'react';
import { Link } from "react-router-dom"
import "./NavBar.css"


const NavBar = ({ countCartItems }) => {
    return (
        <nav className="bar bg-yellow-500 flex justify-between p-5  text-slate-100">
            
            <h2>
                <Link to="/"> 
                <img src='https://banner2.cleanpng.com/20180330/rve/kisspng-electricity-computer-icons-symbol-company-electric-electric-5abdc00c68c5a8.0630823215223849084292.jpg' alt="Logo"/>
                </Link>
            </h2>
            <h2 className="navTitle font-bold ... ">
                <Link to="/products">PRODUCTS</Link>
            </h2>

            <h2 className="addNav font-bold ... ">
                <Link to="/products/new" >ADD PRODUCT</Link>
            </h2>

            <Link className='navTitle navTitle font-bold ...' to="/products">CART {' '}
            {countCartItems ? (
            <button className="count font-bold ... ">{countCartItems}</button>
          ) : ('')}
            
            </Link>
            <h2 className='about font-bold ...'>
            <Link to="/About">
              ABOUT
              </Link>
              </h2>
        </nav>
    );
};

export default NavBar;