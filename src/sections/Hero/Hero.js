import React from 'react'
import { PrimaryButton } from '../../componets/index'
import "./Hero.css"
const Hero = () => {
  return (
    <div className='hero-main'>
    <div className='hero-text'>
    <h6 className='hero-subtitle'> Welcome to Cybrog</h6>
    <h4 className="hero-title"><em>Browse</em>  Our Popular Games HERE</h4>
    <PrimaryButton >Browser Now</PrimaryButton>
    </div>
    </div>
  )
}

export default Hero
