import { useState } from 'react';
import logoImg from '../../assets/Logo.svg';
import { Link, NavLink } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector.jsx'
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {t} = useTranslation()

  const {about, services, cases, faqs, contact} = t("menu")
  
  const menuLinks = [
    {name: about,     link:'about'},
    {name: services,  link:'services'},
    {name: cases,     link:'cases'},
    {name: faqs,      link:'faqs'},
    {name: contact,   link:'contact'},
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
            <Link to='/' onClick={closeMobileMenu}>
              <img 
                className='logo-header-hamburger' 
                src={logoImg} 
                alt="Logo Gigson Solutions"
              />
            </Link>
            {menuLinks.map(({name, link}, index) => 
              <li key={index}>
                  <NavLink 
                    className="menu-item" 
                    to={link} 
                    onClick={closeMobileMenu}
                  >{name}</NavLink>
              </li>
            )}
            <LanguageSelector closeMobileMenu={closeMobileMenu}/>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;