import './Navbar.css'
import logoImg from '../assets/solutions.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <header className='header'>
        <img className='logo-header' src={logoImg}/>
        <nav className="nav-container">
            <ul className="nav-links">
                <li><Link to='/about'>ABOUT US</Link></li>
                <li><Link to='/'>SERVICES</Link></li>
                <li><Link to='/'>CASES</Link></li>
                <li><Link to='/'>FAQs</Link></li>
                <li><Link to='/'>CONTACT</Link></li>
                <li><Link to='/'>EN / ES</Link></li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" className='mobile-icon' viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        </nav>
    </header>
  )
}

export default Navbar