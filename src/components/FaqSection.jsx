import React, {useState} from 'react'
import FaqItem from './FaqItem'

const FaqSection = () => {

    const [faqItems, setFaqItems] = useState([
        { title: "Is any of my personal information stored in the App?", content: "No, the app does not store any personal information. All data is encrypted and stored securely on our servers. You have full control over your data at all times." },
        { title: "What formats can I download my transaction history in?", content: "You can download your transaction history in various formats such as PDF, CSV, and Excel. This allows you to easily manage and review your transactions." },
        { title: "Can I schedule future transfers?", content: "Yes, you can schedule future transfers. Simply choose the date and time for the transfer and the app will handle the rest, ensuring that your transfer is processed on time." },
        { title: "When can I use Banking App services?", content: "Our banking services are available 24/7, so you can access your account and make transactions anytime, from anywhere." },
        { title: "Can I create my own password that is easy for me to remember?", content: "Yes, you can create your own password following our security guidelines. We recommend using a combination of letters, numbers, and special characters for a strong and memorable password." },
        { title: "What happens if I forget or lose my password?", content: "If you forget your password, you can reset it using the 'Forgot Password' feature. A verification code will be sent to your registered email or phone number to help you reset your password." },
    ])


  return (
    <section className="faq-section">
      <div className="container">
          <div className="faq-info">

              <h2 className="faq-title">Any Questions?</h2>
              <h3 className="faq-title"> Check out the FAQs</h3>
              <h4>Still have unanswered questions and need to get in touch?</h4>

              <div className="contact-us">
                  <div className="contact-us-box contact-phone">
                      <i className="fa-solid fa-phone-volume fa-xl"></i>
                      <p>Still have questions?</p>
                      <a href="#">
                          <span>Contact us</span>
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </a>
                  </div>

                  <div className="contact-us-box contact-chat">
                      <i className="fa-solid fa-comment-dots fa-flip-horizontal fa-xl"></i>
                      <p>Don't like phone calls?</p>
                      <a href="#">
                          <span>Contact us</span>
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </a>
                  </div>
              </div>
          </div>

          <div className="faq-questions">

                {
                    faqItems.map((item, index) => <FaqItem key={index} item={item} />)
                }

          </div>

      </div>
    </section>
  )
}

export default FaqSection