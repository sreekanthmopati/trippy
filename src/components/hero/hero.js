import React from 'react'
import './hero.css'
const Hero = (props) => {
  return (
    <div className={props.heroname}>
      <img src={props.heroimg1} alt=''/>
      <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnclass}>{props.buttontext}</a>
      </div>
    </div>
  )
}

export default Hero
