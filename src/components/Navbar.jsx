import './Navbar.css'
import logoImg from '../assets/solutions.png'


const Navbar = () => {
  return (
    <header className='header'>
        <img className='logo-header' src={logoImg}/>
        <nav className="nav-container">
            <ul className="nav-links">
                <li><a href="">ABOUT US</a></li>
                <li><a href="">SERVICES</a></li>
                <li><a href="">CASES</a></li>
                <li><a href="">FAQs</a></li>
                <li><a href="">CONTACT</a></li>
                <li><a href="">EN / ES</a></li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" className='mobile-icon' viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        </nav>
    </header>
  )
}

export default Navbar