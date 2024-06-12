import { Trans, useTranslation } from 'react-i18next'
import homeServicesImg from '../../assets/FormasServices.png'
import {Link} from 'react-router-dom'
import '../Home/HomeServices.css'
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './NotFound.css'


const NotFound = () => {
  const {t} = useTranslation()
  const {banner404,title,title2,description,cta} = t("notFound")
  
  return (
    <div className="div">
      <Navbar/>
      <section className='not-home-services' id='homeServices'>
        
        <div className="not-home-services-bg"></div>
        
        <section className='not-div-about-hero'>

            <h2 className='about-hero-h1'>
                  <Trans 
                      i18nKey={title}
                      components={{span: <span />}}
                  />
            </h2>
            <h3 className='about-hero-h1'>
                  <Trans 
                      i18nKey={title2}
                  />
            </h3>
            <p className='about-hero-p'>{description}</p>
            

          <Link to='/' className='about-hero-btn button-main'>{cta}</Link>
        </section>

        <div className="home-text-container">
          <div className="services-h2-animation">
            <h2 className='not-home-services-h2'>
              <Trans 
                i18nKey={banner404}
                components={{span: <span />}}
              />
            </h2>
          </div>
          <div className="services-h2-animation">
            <h2 className='not-home-services-h2'>
              <Trans 
                i18nKey={banner404}
                components={{span: <span />}}
              />
            </h2>
          </div>
          <div className="services-h2-animation">
            <h2 className='not-home-services-h2'>
              <Trans 
                i18nKey={banner404}
                components={{span: <span />}}
              />
            </h2>
          </div>
          <div className="services-h2-animation">
            <h2 className='not-home-services-h2'>
              <Trans 
                i18nKey={banner404}
                components={{span: <span />}}
              />
            </h2>
          </div>
          <div className="services-h2-animation">
            <h2 className='not-home-services-h2'>
              <Trans 
                i18nKey={banner404}
                components={{span: <span />}}
              />
            </h2>
          </div>
          <div className="services-h2-animation">
            <h2 className='not-home-services-h2'>
              <Trans 
                i18nKey={banner404}
                components={{span: <span />}}
              />
            </h2>
          </div>
          <div className="services-h2-animation">
            <h2 className='not-home-services-h2'>
              <Trans 
                i18nKey={banner404}
                components={{span: <span />}}
              />
            </h2>
          </div>
          <div className="services-h2-animation">
            <h2 className='not-home-services-h2'>
              <Trans 
                i18nKey={banner404}
                components={{span: <span />}}
              />
            </h2>
          </div>
          <div className="services-h2-animation">
            <h2 className='not-home-services-h2'>
              <Trans 
                i18nKey={banner404}
                components={{span: <span />}}
              />
            </h2>
          </div>
          <div className="services-h2-animation">
            <h2 className='not-home-services-h2'>
              <Trans 
                i18nKey={banner404}
                components={{span: <span />}}
              />
            </h2>
          </div>
          <div className="services-h2-animation">
            <h2 className='not-home-services-h2'>
              <Trans 
                i18nKey={banner404}
                components={{span: <span />}}
              />
            </h2>
          </div>
          <div className="services-h2-animation">
            <h2 className='not-home-services-h2'>
              <Trans 
                i18nKey={banner404}
                components={{span: <span />}}
              />
            </h2>
          </div>
          <div className="services-h2-animation">
            <h2 className='not-home-services-h2'>
              <Trans 
                i18nKey={banner404}
                components={{span: <span />}}
              />
            </h2>
          </div>  
          <div className="services-h2-animation">
            <h2 className='not-home-services-h2'>
              <Trans 
                i18nKey={banner404}
                components={{span: <span />}}
              />
            </h2>
          </div>
          <div className="services-h2-animation">
            <h2 className='not-home-services-h2'>
              <Trans 
                i18nKey={banner404}
                components={{span: <span />}}
              />
            </h2>
          </div>
          <div className="services-h2-animation">
            <h2 className='not-home-services-h2'>
              <Trans 
                i18nKey={banner404}
                components={{span: <span />}}
              />
            </h2>
          </div>
          <div className="services-h2-animation">
            <h2 className='not-home-services-h2'>
              <Trans 
                i18nKey={banner404}
                components={{span: <span />}}
              />
            </h2>
          </div>

        </div>
        
      </section>
      
    <Footer/>
    </div>
    
  )
}

export default NotFound