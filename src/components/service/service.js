import React from 'react'
import './service.css'
import Navbar from '../navbar/navbar'
import Hero from '../hero/hero'
import serviceimg from '../assets/service.jpg'
import Footer from '../footer/footer'
import Trip from '../trip/trip'
const Service = () => {
  return (
    <>
     <Navbar/>
      <Hero heroname='hero-about' title='Services' 
      heroimg1 = {serviceimg}  btnclass = 'hide' url = '/'
      />
      <Trip/>
      <Footer/>
    </>
  )
}

export default Service
