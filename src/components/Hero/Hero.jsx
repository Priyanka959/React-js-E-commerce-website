import React from 'react'
import './Hero.css';
import hand_icon from '../assests/hand_icon.png';
import arrow_icon from '../assests/arrow_icon.png';
import hero_image from '../assests/hero_image.png';
export const Hero = () => {
  return (
    <div className='hero'>
     <div className="hero-left">
      <h2>NEW ARRIVALS ONLY</h2>
      <div>
      <div className="hand-hand-icon">
        <p>new</p>
        <img src={hand_icon} alt="" /></div>
        <p>collections</p>
        <p>for everyone</p> </div>
        <div className="hero-latest-btn"><div>Latest Collection</div>
        <img src={arrow_icon} alt="" /></div></div>
     <div className="hero-right">
      <img src={hero_image} alt="" />
     </div>
    </div>
  )
}
export default Hero