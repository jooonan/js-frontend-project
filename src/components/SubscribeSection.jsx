import React, { useState } from 'react'
import NotificationBell from '../assets/images/notification-bell.svg'

const SubscribeSection = () => {

    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [touched, setTouched] = useState(false);

     // CODE WITH COMMENTS IS HELP FROM CHATGPT
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    // Step 2: Update email state when typing
    const handleChange = (e) => {
      const newEmail = e.target.value;
      setEmail(newEmail);
      
      // Clear error message if email becomes valid and form has been touched
      if (touched && isValidEmail(newEmail)) {
        setErrorMessage('');
      }
      
      setSuccessMessage('');
    };

    // Step 3: Prevent form submission and log email
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent default form POST behavior

      setTouched(true); // Set touched to true on submission attempt

      if (!isValidEmail(email)) {
        setErrorMessage('Please enter a valid email address.');
        setSuccessMessage('');
        return;
      }

      const payload = {email}; // or simply email if using ES6 shorthand syntax


      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'accept': '*/*', // This matches the header in your curl command
          },
          body: JSON.stringify(payload), // Convert the payload to a JSON string
        });
    
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        } else {
          console.log('Form submitted successfully');
          setSuccessMessage('Thank you for subscribing!');
          setEmail('')
          setErrorMessage('');
          setTouched(false); // Reset touched after successful submission
        }
      } catch (error) {
          console.error('Error submitting form:', error);
          setErrorMessage('Failed to subscribe. Please try again later.');
          setSuccessMessage('');
        }
    };
  

    return (
      <section className="subscribe-section">
          <div className="container">
            <div className="content">
              <img src={NotificationBell} alt=" " />
              <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
            </div>

            <div className="form-box">
              <form className="subs-email" id="subsEmail" onSubmit={handleSubmit} noValidate>  
                <label className="form-label" htmlFor="email">
                  <i className="fa-regular fa-envelope"></i>
                </label>
                <input className="form-input" type="email" name="email" id="email" onChange={handleChange} value={email} required placeholder="Your Email" />
                <button className="btn-primary">Subscribe</button>
              </form>

              {successMessage && <p className="success-message">{successMessage}</p>}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
          </div>
      </section>
    )
}


export default SubscribeSection