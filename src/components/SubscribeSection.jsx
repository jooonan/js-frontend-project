import React, { useState } from 'react'
import NotificationBell from '../assets/images/notification-bell.svg'

const SubscribeSection = () => {

    // HELP FROM CHATGPT
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false)

    // Step 2: Update email state when typing
    const handleChange = (e) => {
      setEmail(e.target.value);
    };

    // Step 3: Prevent form submission and log email
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form POST behavior

        const payload = {
            email: email, // or simply email if using ES6 shorthand syntax
        };

        try {
            const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json', // Ensures the request is sent as JSON
                'accept': '*/*', // This matches the header in your curl command
              },
              body: JSON.stringify(payload), // Convert the payload to a JSON string
            });
      
            if (!response.ok) {
              throw new Error(`Server error: ${response.status}`);
            }
      
            if (response.ok) {
                setSubmitted(true)
                setEmail('')
                console.log('Form submitted successfully');
            }
          } catch (error) {
            console.error('Error submitting form:', error);
          }
        };
  

    return (
        <section className="subscribe-section">
            <div className="container">
                <div className="content">
                    <img src={NotificationBell} alt=" " />
                    <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
                </div>

                <form className="subs-email" id="subsEmail" onSubmit={handleSubmit} noValidate>  
                    <label className="form-label" htmlFor="email">
                        <i className="fa-regular fa-envelope"></i>
                    </label>
                    <input className="form-input" type="email" name="email" id="email" onChange={handleChange} value={email} required placeholder="Your Email" />
                    <button className="btn-primary">Subscribe</button>
                </form>
            </div>
        </section>
    )
}


export default SubscribeSection