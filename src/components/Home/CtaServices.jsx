import React from 'react'
import {Link} from 'react-router-dom'
import './CtaServices.css'
import cono from '../../assets/Cono.svg'
import cubo from '../../assets/Cubo.svg'



export const CtaServices = () => {
  return (
    <div className='cta-why-gigson'>
        <div className="cta-img-container-cube">
            <img className='cta-services-img-cube' src={cubo} alt="" />
        </div>
        <div className='internal-cta-container'>
            <div className='cta-button-container'>
                <h2>Simplifying a needless complex world.</h2>            
                <Link to='/services' className='button-main cta-why-gigson-btn'>SEE SERVICES</Link>
            </div>
        </div>
        <div className="cta-img-container-tria">
            <img className='cta-services-img' src={cono} alt="" />
        </div>
        
    </div>
  )
}
