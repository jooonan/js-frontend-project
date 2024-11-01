import React from 'react'
import GooglePlayLogo from '../assets/images/Google.svg'
import HeroImage from '../assets/images/double.svg'


const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
          <div className="headline">
              <h1>Manage All Your Money In One App</h1>
          </div>
          <div className="content">
              <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
              <div className="buttons">
                  <a className="btn-store-app" href="https://www.apple.com/store" target="_blank">
                      <i className="fa-brands fa-apple"></i>
                      <div className="btn-store-text apple">
                          <span className="download-text">Download on the</span>
                          <span className="store-text">App Store</span>
                      </div>
                  </a>
                  <a className="btn-store-app" href="https://play.google.com/store/games?hl=en" target="_blank">
                      <img src={GooglePlayLogo} />
                      <div className="btn-store-text">
                          <span className="download-text">GET IT ON</span>
                          <span className="store-text">Google Play</span>
                      </div>
                  </a>
              </div>

              <a href="#" className="discover-more">
                  <span className="btn-circle">
                      <i className="fa-solid fa-chevron-down"></i>
                  </span>
                  <span>Discover more</span>
              </a>
          </div>

          <div className="images">
              <img className="hero-img" src={HeroImage} alt="Iphone cards and budget app preview" />
          </div>
      </div>
    </section>
  )
}

export default Hero