import React, { useState } from 'react';
import './Navbar.css';
import logoImg from '../assets/Gigson-logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuLinks = [
    {name: 'ABOUT US',  link:'about'},
    {name: 'SERVICES',  link:''},
    {name: 'CASES',     link:''},
    {name: 'FAQs',      link:''},
    {name: 'CONTACT',   link:''},
    {name: 'EN / ES',   link:''}
  ]

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  

  return (
    <header className='header'>
      <div className='div-header'>
        <img className='logo-header' src={logoImg} alt="Logo"/>
        <nav className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <input id="menu__toggle" type="checkbox" checked={isMobileMenuOpen} onChange={toggleMobileMenu} />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <ul className="menu__box">
            {menuLinks.map(({name,link}, index) =>
              <li key={index}>
                <Link 
                  className="menu__item" 
                  to={link} 
                  onClick={closeMobileMenu}
                >{name}</Link>
              </li>
            )}            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
