import React from 'react'
import AppChart from '../assets/images/app-chart.svg'
import AppContacts from '../assets/images/app-contacts.svg'

const AppDescription = () => {
  return (
    <section className="app-description">
      <div className="container">
        <div className="description-top-box">
          <div className="content">
              <h2>Make your money transfer simple and clear</h2>

              <div className="description-text-box">
                  <i className="fa-solid fa-check"></i>
                  <p>Banking transactions are free for you</p>
              </div>

              <div className="description-text-box">
                  <i className="fa-solid fa-check"></i>
                  <p>No monthly cash commission</p>
              </div>

              <div className="description-text-box">
                  <i className="fa-solid fa-check"></i>
                  <p>Manage payments and transactions online</p>
              </div>

              <div className="learn-more">
                  <a className="btn-primary" href="#">
                      <span>Learn More</span>
                      <i className="fa-sharp fa-regular fa-arrow-right"></i>
                  </a>
              </div>
          </div>
          
          <div className="apps-preview">
              <img src={AppChart} alt="App charts preview" />
          </div>
        </div>

        <div className="description-bottom-box">
          <div className="apps-preview">
              <img src={AppContacts} alt="App contacts preview" />
          </div>

          <div className="content">
              <h2>Receive payment from international bank details</h2>
              <div className="description-box">
                  <div className="description-text-box">
                      <img src="./icons/easy-payments.svg" alt="Card icon" />
                      <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                  </div>

                  <div className="description-text-box">
                      <img src="./icons/cashback.svg" alt="Wallet icon" />
                      <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                  </div>
              </div>

              <div className="learn-more">
                  <a className="btn-primary" href="#">
                      <span>Learn More</span>
                      <i className="fa-sharp fa-regular fa-arrow-right"></i>
                  </a>
              </div>
          </div>
        </div>
      </div>
  </section>
  )
}

export default AppDescription