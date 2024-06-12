import { Trans, useTranslation } from 'react-i18next'
import homeServicesImg from '../../assets/FormasServices.png'
import {Link} from 'react-router-dom'
import './HomeServices.css'

function HomeServices() {
  const {t} = useTranslation()
  const {servicesTitle, servicesP, servicesBtn} = t("home")
  return (
    <section className='home-services' id='homeServices'>
        <div className="home-services-bg"></div>
        <div className="home-text-container">
          <div className="services-h2-animation">
            <h2 className='home-services-h2'>
              <Trans 
                i18nKey={servicesTitle}
                components={{span: <span />}}
              />
            </h2>
          </div>
          <div className="services-h2-animation">
            <h2 className='home-services-h2'>
              <Trans 
                i18nKey={servicesTitle}
                components={{span: <span />}}
              />
            </h2>
          </div>
          <div className="services-h2-animation">
            <h2 className='home-services-h2'>
              <Trans 
                i18nKey={servicesTitle}
                components={{span: <span />}}
              />
            </h2>
          </div>
          <div className="services-h2-animation">
            <h2 className='home-services-h2'>
              <Trans 
                i18nKey={servicesTitle}
                components={{span: <span />}}
              />
            </h2>
          </div>  
        </div>
        <div className="home-services-info">
          <img className='home-services-img' src={homeServicesImg} />
          <div className="home-services-text">
            <p className='home-services-p'>{servicesP.p1}</p>
            <p className='home-services-p'>{servicesP.p2}</p>

            <Link to='/about' className='home-services-btn  button-main'>{servicesBtn}</Link>
          </div>
        </div>
    </section>
  )
}

export default HomeServices