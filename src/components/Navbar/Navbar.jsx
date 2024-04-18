import { useState } from 'react';
import logoImg from '../../assets/Gigson-logo.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuLinks = [
    {name: 'ABOUT US',  link:'about'},
    {name: 'SERVICES',  link:'services'},
    {name: 'CASES',     link:''},
    {name: 'FAQs',      link:''},
    {name: 'CONTACT US',   link:''},
    {name: 'EN / ES',   link:''}
  ]

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  

  return (
    <header className='header'>
      <div className='div-header'>
        <Link to='/'>
          <img 
            className='logo-header' 
            src={logoImg} 
            alt="Logo Gigson Solutions"
          />
        </Link>
        <nav className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <input id="menuToggle" type="checkbox" checked={isMobileMenuOpen} onChange={toggleMobileMenu} />
          <label className="menu-btn" htmlFor="menuToggle">
            <span></span>
          </label>
          <ul className="menu-box">
            {menuLinks.map(({name,link}, index) =>
              <li key={index}>
                <Link 
                  className="menu-item" 
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