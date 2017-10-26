import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
        <Link to="/" className="navbtn">Home</Link>
        <Link to="/get-lucky" className="navbtn">Get Lucky!</Link>
        </nav>
    )
}

export default Navbar;
