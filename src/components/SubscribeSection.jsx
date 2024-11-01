import React from 'react'
import NotificationBell from '../assets/images/notification-bell.svg'

const SubscribeSection = () => {
  return (
    <section className="subscribe-section">
        <div className="container">
            <div className="content">
                <img src={NotificationBell} alt=" " />
                <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
            </div>

            <form className="subs-email" id="subsEmail">  
                <label className="form-label" htmlFor="email">
                    <i className="fa-regular fa-envelope"></i>
                </label>
                <input className="form-input" type="email" name="email" id="email" required placeholder="Your Email" />
                <button className="btn-primary">Subscribe</button>
            </form>

        </div>
    </section>
  )
}

export default SubscribeSection