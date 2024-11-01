import React, { useState } from 'react'
import YourCards from '../assets/images/page-2-preview.svg'
import CardIcon from '../assets/images/easy-payments.svg'
import SecurityIcon from '../assets/images/data-security.svg'
import StatisticsIcon from '../assets/images/cost-stats.svg'
import SupportIcon from '../assets/images/support.svg'
import WalletIcon from '../assets/images/cashback.svg'
import SmileyIcon from '../assets/images/top-standards.svg'

const AppFeatures = () => {
  return (
    <section className="app-features">
      <div className="container">
          <img className="your-cards" src={YourCards} alt="" />

          <div className="content">
              <h2>App Features</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
              <div className="app-pros">
                  <div className="pros-box">
                      <img src={CardIcon} alt="Card icon" />
                      <div className="pros-textbox">
                          <h3>Easy Payments</h3>
                          <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                      </div>
                  </div>
                  <div className="pros-box">
                      <img src={SecurityIcon} alt="Security icon" />
                      <div className="pros-textbox">
                          <h3>Data Security</h3>
                          <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                      </div>
                  </div>
                  <div className="pros-box">
                      <img src={StatisticsIcon} alt="Statistics icon" />
                      <div className="pros-textbox">
                          <h3>Cost Statistict</h3>
                          <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                      </div>
                  </div>
                  <div className="pros-box">
                      <img src={SupportIcon} alt="Support icon"/>
                      <div className="pros-textbox">
                          <h3>Support 24/7</h3>
                          <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                      </div>
                  </div>
                  <div className="pros-box">
                      <img src={WalletIcon} alt="Wallet icon"/>
                      <div className="pros-textbox">
                          <h3>Regular Cashback</h3>
                          <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                      </div>
                  </div>
                  <div className="pros-box">
                      <img src={SmileyIcon} alt="Smiley icon"/>
                      <div className="pros-textbox">
                          <h3>Top Standards</h3>
                          <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                      </div>
                  </div>
              </div>
          </div>

      </div>
    </section>
  )
}

export default AppFeatures