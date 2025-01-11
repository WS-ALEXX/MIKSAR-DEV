import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '/src/assets/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#comprar", text: "COMPRAR TICKET" },
    { href: "#detalles", text: "DETALLE DEL SORTEO" },
    { href: "#premios", text: "PREMIOS" },
    { href: "#contacto", text: "CONTACTO" }
  ];

  const NavLink = ({ href, children }) => (
    <a href={href} className="nav-link">
      {children}
    </a>
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <span>MIKSAR SORTEOS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-links-desktop">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.text}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-button">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-icon"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;