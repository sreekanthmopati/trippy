import React from 'react'
import './contactform.css'

const Contactform = () => {
  return (
    <div className='form-cont'>
      <h1>Send a message to us</h1>
      <form>
        <input placeholder='Name' type='text'/>
        <input placeholder='Email' type='email'/>
        <input placeholder='Subject' type='text'/>
        <textarea placeholder='Message' rows='4'></textarea>
        <button className='show'>Send message</button>
      </form>
    </div>
  )
}

export default Contactform
