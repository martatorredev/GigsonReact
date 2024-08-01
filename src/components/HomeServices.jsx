import homeServicesImg from '../assets/FormasServices.png'
import './HomeServices.css'
import Button from './Button'

function HomeServices() {
  return (
    <section className='home-services'>
        <h2 className='home-services-h2'>Tailored <span>solutions</span> for any business </h2>
        <img className='home-services-img' src={homeServicesImg} />
        <p className='home-services-p'>We are focused to leverage the technology to  your business, connecting and making it secure to align needs and business goals.</p>
        <p className='home-services-p'>And if your solution does not exist yet, let’s build it together</p>
        <Button name='DISCOVER OUR SERVICES' classStyle='home-services-btn'/>
    </section>
  )
}

export default HomeServices