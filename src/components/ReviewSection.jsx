import React from 'react'
import QuotationIcon from '../assets/images/quotes.svg'
import UserAvatar1 from '../assets/images/fannie-avatar.svg'
import UserAvatar2 from '../assets/images/albert-avatar.svg'

const ReviewSection = () => {
  return (
    <section className="review-section">
      <div className="container">
          <h2>Clients are Loving our app</h2>
          
          <div className="review-card">
              <img className="quotation-mark" src={QuotationIcon} alt="" />

              <div className="review-rating">
                  <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                  <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                  <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                  <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                  <i className="fa-regular fa-star" style={{color: "#b4b8c8"}}></i>
              </div>

              <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
              
              <div className="user-box">
                  <img src={UserAvatar1} alt="" />

                  <div className="user-info">
                      <span className="user-name">Fannie Summers</span>
                      <span className="user-occupation">Designer</span>
                  </div>
              </div>
          </div>

          <div className="review-card">
              <img className="quotation-mark" src={QuotationIcon} alt="" />

              <div className="review-rating">
                  <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                  <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                  <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                  <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                  <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
              </div>

              <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>

              <div className="user-box">
                  <img src={UserAvatar2} alt="" />

                  <div className="user-info">
                      <span className="user-name">Albert Flores</span>
                      <span className="user-occupation">Developer</span>
                  </div>
              </div>
          </div>
      </div>
  </section>
  )
}

export default ReviewSection