import React from 'react'
import Navbar from '../navbar/navbar'
import './home.css'
import Hero from '../hero/hero'
import heroimg1 from '../assets/hero1.jpg'
import Destination from '../destination/destination'
import Trip from '../trip/trip'
import Footer from '../footer/footer'
const Home = () => {
  return (
    <>
    
       <Navbar/>
      <Hero heroname='hero' title='Your Journey Your Story' text='Choose your Favourite Destination'
      heroimg1 = {heroimg1} buttontext = "Travel Plan" btnclass = 'show' url = '/'
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  )
}

export default Home
