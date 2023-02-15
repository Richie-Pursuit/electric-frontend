import React from 'react';
import { Link } from "react-router-dom"


const NavBar = ({ countCartItems }) => {
    return (
        <nav>
            <h1>
                <Link to="/products">products</Link>
            </h1>
            <button>
                <Link to="/products/new">New products</Link>
            </button>
            <Link to="/products">Cart{' '}
            {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : ('')}
            
            </Link>
            <Link to="#/signin">SignIn</Link>
        </nav>
    );
};

export default NavBar;