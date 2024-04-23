import React from 'react'
import Navbar from '../navbar/navbar'
import Hero from '../hero/hero'
import aboutimg from '../assets/about.jpg'
import './about.css'
import Footer from '../footer/footer'
const About = () => {
  return (
    <>
     <Navbar/>
      <Hero heroname='hero-about' title='About' 
      heroimg1 = {aboutimg}  btnclass = 'hide' url = '/'
      />
<div className='about-us'>
  <h1>Our History</h1>
  <p>
    Trippy is a  travelling platform which is owned and guides by  Trippy.in.pvt.ltd
    owned and guides by  Trippy.in.pvt.ltd,Our History  and guides by  Trippy.in.pvt.ltd
    and guides by  Trippy.in.pvt.ltd  travelling platform Trippy.in.pvt.ltd, which
    and guides by  Trippy.in.pvt.ltd  travelling platform Trippy.in.pvt.ltd, which
    travelling platform which Trippy.in.pvt.ltd,Trippy.in.pvt.ltd,
  </p>

  <h1>Our Vision</h1>
  <p>
    our vision is Trippy is a  travelling platform which is owned and guides by  Trippy.in.pvt.ltd
    owned and guides by  Trippy.in.pvt.ltd,Our History  and guides by  Trippy.in.pvt.ltd
    and guides by  Trippy.in.pvt.ltd  travelling platform Trippy.in.pvt.ltd, which
    and guides by  Trippy.in.pvt.ltd   which
    travelling platform which Trippy.in.pvt.ltd,Trippy.in.pvt.ltd,
  </p>

  <h1>Our Mission</h1>
  <p>
    our mission is Trippy is a  travelling platform which is owned and guides by  Trippy.in.pvt.ltd
    owned and guides by  Trippy.in.pvt.ltd,Our History  and guides by  Trippy.in.pvt.ltd
    and guides by  Trippy.in.pvt.ltd  travelling platform Trippy.in.pvt.ltd, which
    and guides by  Trippy.in.pvt.ltd  travelling platform Trippy.in.pvt.ltd, which
    travelling platform which Trippy.in.pvt.ltd.
  </p>
</div>

      <Footer/>
    </>
  )
}

export default About
