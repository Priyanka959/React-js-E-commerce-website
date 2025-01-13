import React from 'react'
import './DescriptionBox.css';
export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
          Description
        </div>
        <div className="descriptionbox-nav-box fade">
          Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>Welcome to SHOPPER Discover the latest trends and timeless classics in our exclusive collection. Shop now and elevate your style with FashionHub.

Our Story Founded in 2020, SHOPPER is dedicated to bringing you the best in fashion. Our mission is to provide high-quality, stylish clothing that makes you feel confident and unique. We believe in sustainability and ethical practices, ensuring that our products are not only fashionable but also environmentally friendly.</p>
<p>Customer Reviews: "See what our customers are saying about us! 'SHOPPER has the best collection of trendy clothes. I always find something I love!' - Priya S."</p>
      </div>
    </div>
  )
}
export default DescriptionBox;