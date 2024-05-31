import logoFooter from '../../assets/LogoFooter.svg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Footer.css'
import LanguageSelector from '../LanguageSelector/LanguageSelector'

const Footer = () => {
    const {t} = useTranslation()

    const {about, services, cases, faqs, contact, legal, cookies, notice } = t("menu")
    
    const menuLinks = [
      {name: about,     link:'about'},
      {name: services,  link:'services'},
      {name: cases,     link:'cases'},
      {name: faqs,      link:'faqs'},
      {name: contact,   link:'contact'},
    ]

  return (
    <footer className='footer'>
        <div className="footer-maxwidth">
            <nav className="footer-nav-container">
                <ul className="footer-nav-links">
                    {menuLinks.map(({name, link}, index) =>      
                        <li key={index} >
                            <Link to={link}>{name}</Link>
                        </li>
                    )}
                        <li>
                            <LanguageSelector/>
                        </li>
                </ul>            
            </nav>
            <div className='footer-mid'>
                <img className='logo-footer' src={logoFooter}/>

                <svg className='footer-icon' viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.6493 29.6887L26.9042 10.2882L3.0549 34L0 30.7662L23.8493 7.05488L4.43488 3.42941L7.68698 0L29.8609 4.01718L34 26.2593L30.6493 29.6887Z"/>
                </svg>
            </div>
            
            <div className="footer-policy">
                <span href="">Developed by gigson © 2024 </span>
                <ul className='footer-policy-links'>
                    <li><Link to='/'>{legal}</Link></li>
                    <li><Link to='/'>{cookies}</Link></li>
                    <li><Link to='/'>{notice}</Link></li>    
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer