import React, {useState, useEffect} from 'react'
import FaqItem from './FaqItem'

const FaqSection = () => {

    const [faqItems, setFaqItems] = useState([])

    const fetchFaq = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setFaqItems(data)
    }

    useEffect(() => {
        fetchFaq()
    }, [])


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