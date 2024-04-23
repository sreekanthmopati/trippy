import React from 'react'
import './contact.css'
import Navbar from '../navbar/navbar'
import Hero from '../hero/hero'
import contactimg from '../assets/contact.jpg'
import Footer from '../footer/footer'
import Contactform from '../contactForm/Contactform'
const Contact = () => {
  return (
    <>
     <Navbar/>
      <Hero heroname='hero-about' title='Contact' 
      heroimg1 = {contactimg}  btnclass = 'hide' url = '/'
      />
      <Contactform/>
      <Footer/>
    </>
  )
}

export default Contact
