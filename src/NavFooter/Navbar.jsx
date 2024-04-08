import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styleNF/Navbar.css'; 

function Navbar() {
  const location = useLocation(); // Utiliser useLocation pour obtenir l'emplacement actuel
  const currentPath = location.pathname;

  return (
    <nav className="navbar">
      <div className='navbarLogo'>
        <Link to="/">
          <img src="/logo/logo.png" alt="logo"></img>
        </Link>
      </div>
      <div className="liens">
        <Link to="/" className={currentPath === '/' ? 'active' : ''}>Acceuil</Link>
        <Link to="/about" className={currentPath === '/about' ? 'active' : ''}>A propos</Link>
      </div>
    </nav>
  );
}

export default Navbar;
