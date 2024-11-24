import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/gallery" className="nav-link">Galería</Link>
      <Link to="/canvas" className="nav-link">Lienzo</Link>
    </nav>
  );
};

export default Navbar;
