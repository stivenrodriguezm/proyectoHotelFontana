import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>HOTEL FONTANA BOGOTÁ</h1>
      </div>
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="#home" onClick={closeMenu}>Inicio</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>Nosotros</a>
          </li>
          <li>
            <a href="#rooms" onClick={closeMenu}>Habitaciones</a>
          </li>
          <li>
            <a href="#contact" className="contact-btn" onClick={closeMenu}>Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
}

export default Header;

