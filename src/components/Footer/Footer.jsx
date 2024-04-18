import logoImg from '../../assets/Gigson-logo.svg'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    const menuLinks = [
        {name: 'ABOUT US',  link:'about'},
        {name: 'FAQs',      link:'services'},
        {name: 'SERVICES',  link:''},
        {name: 'CONTACT US',   link:''},
        {name: 'CASES',     link:''},
        {name: 'EN / ES',   link:''}
    ]

  return (
    <footer className='footer'>
        <nav className="footer-nav-container">
            <ul className="footer-nav-links">
                {menuLinks.map(({name, link}, index) => 
                    <li key={index}>
                        <Link to={link}>{name}</Link>
                    </li>
                )}
            </ul>            
        </nav>
        <div className='footer-mid'>
            <img className='logo-footer' src={logoImg}/>

            <svg className='mobile-icon' viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.6493 29.6887L26.9042 10.2882L3.0549 34L0 30.7662L23.8493 7.05488L4.43488 3.42941L7.68698 0L29.8609 4.01718L34 26.2593L30.6493 29.6887Z"/>
            </svg>
        </div>

        <span>Developed by gigson © 2024 </span>
        <ul className='footer-policy'>
            <li><a href="">Legal Policy</a></li>
            <li><a href="">Cookies Policy</a></li>
            <li><a href="">Legal Notice</a></li>    
        </ul>        
    </footer>
  )
}

export default Footer