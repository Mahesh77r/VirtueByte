import React from 'react'
import './LandingPage.css'
import heroImg from '../../images/heroImg.svg'

const LandingPage = () => {
  return (

    <div className='landing-page-container'>
      <div className="landing-content">
        <h1>Drive Your Dreams: Book Your Ride Today!</h1>
        <p>Enjoy hassle-free reservations with our easy-to-use booking system. Just a few clicks and you're on your way.</p>
      </div>
      <div className="landing-img">
        <img src={heroImg} alt="" />
      </div>
    </div>
   
  )
}

export default LandingPage
