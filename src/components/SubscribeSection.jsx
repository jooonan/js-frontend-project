import React from 'react'
import NotificationBell from '../assets/images/notification-bell.svg'

const SubscribeSection = () => {
  return (
    <section class="subscribe-section">
        <div class="container">
            <div class="content">
                <img src={NotificationBell} alt=" " />
                <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
            </div>

            <form class="subs-email" id="subsEmail">  
                <label class="form-label" htmlFor="email">
                    <i class="fa-regular fa-envelope"></i>
                </label>
                <input class="form-input" type="email" name="email" id="email" required placeholder="Your Email" />
                <button class="btn-primary">Subscribe</button>
            </form>

        </div>
    </section>
  )
}

export default SubscribeSection