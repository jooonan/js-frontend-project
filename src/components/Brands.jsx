import React from 'react'
import BrandLogo1 from '../assets/images/ipsum.svg'
import BrandLogo2 from '../assets/images/ipsum1.svg'
import BrandLogo3 from '../assets/images/ipsum2.svg'
import BrandLogo4 from '../assets/images/ipsum3.svg'
import BrandLogo5 from '../assets/images/ipsum4.svg'
import BrandLogo6 from '../assets/images/ipsum5.svg'

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
          <div className="brand-box">
              <img src={BrandLogo1} alt="" />
          </div>
          <div className="brand-box">
              <img src={BrandLogo2} alt="" />
          </div>
          <div className="brand-box">
              <img src={BrandLogo3} alt="" />
          </div>
          <div className="brand-box">
              <img src={BrandLogo4} alt="" />
          </div>
          <div className="brand-box">
              <img src={BrandLogo5} alt="" />
          </div>
          <div className="brand-box">
              <img src={BrandLogo6} alt="" />
          </div>
      </div>
    </section>
  )
}

export default Brands