import React from 'react'
import Hero from './Hero'
import HomeServices from './HomeServices'
import Form from '../Form'
import  { CtaServices } from './CtaServices'
import Cases from '../Pages/Cases/Cases'


const Home = () => {
  return (
    <div className='home-content'>
        <Hero/>
        <HomeServices/>
        <Cases/>
        <CtaServices/>
        <Form/>
    </div>
  )
}

export default Home