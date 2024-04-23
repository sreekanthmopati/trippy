import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
       <div className='top'>
      <div>
        <h1>Trippy</h1>
        <p>Choose your favourite destination</p>
      </div>
      <div>
        <a href='/'><i class="fa-brands fa-square-facebook"></i></a>
        <a href='/'><i class="fa-brands fa-square-instagram"></i></a>
        <a href='/'><i class="fa-brands fa-square-behance"></i></a>
        <a href='/'><i class="fa-brands fa-square-x-twitter"></i></a>
      </div>
      </div>
      <div className='bottom'>
      <div>
        <h4>Project</h4>
        <a href='/'>Change log</a>
        <a href='/'>Status</a>
        <a href='/'>Licenses</a>
        <a href='/'>All versions</a>
      </div>



      <div>
        <h4>Community</h4>
        <a href='/'>Git hub</a>
        <a href='/'>Issues</a>
        <a href='/'>Projects</a>
        <a href='/'>Twitter</a>
      </div>

      <div>
        <h4>Help</h4>
        <a href='/'>Support</a>
        <a href='/'>Trouble Shooting</a>
        <a href='/'>Contact Us</a>
      </div>

      <div>
        <h4>Others</h4>
        <a href='/'>Terms of service</a>
        <a href='/'>Privacy Policy</a>
        <a href='/'>Licenses</a>
       
      </div>

     
      </div>
    </div>
  )
}

export default Footer
