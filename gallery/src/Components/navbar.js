import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery" className="nav-link">Sortiment</Link>
        </li>
        <li className="nav-item">
          <Link to="/Impressum" className="nav-link">Impressum</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">Über Uns</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
