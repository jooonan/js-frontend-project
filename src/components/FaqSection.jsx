import React from 'react'

const FaqSection = () => {
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
              <div className="faq-card">
                  <div className="question">
                      <h2>Is any of my personal information stored in the App?</h2>
                      
                      <button className="btn-question">
                          <i className="fa-solid fa-chevron-down"></i>
                      </button>
                  </div>

                  <div className="answer">
                      <div className="expandable">
                          <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                  </div>
              </div>

              <div className="faq-card">
                  <div className="question">
                      <h2>What formats can I download my transaction history in?</h2>
                      
                      <button className="btn-question">
                          <i className="fa-solid fa-chevron-down"></i>
                      </button>
                  </div>

                  <div className="answer">
                      <div className="expandable">
                          <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                      </div>
                  </div>
              </div>

              <div className="faq-card">
                  <div className="question">
                      <h2>Can I schedule future transfers?</h2>
                      
                      <button className="btn-question">
                          <i className="fa-solid fa-chevron-down"></i>
                      </button>
                  </div>

                  <div className="answer">
                      <div className="expandable">
                          <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                      </div>
                  </div>
              </div>

              <div className="faq-card">
                  <div className="question">
                      <h2>When can I use Banking App services?</h2>
                      
                      <button className="btn-question">
                          <i className="fa-solid fa-chevron-down"></i>
                      </button>
                  </div>

                  <div className="answer">
                      <div className="expandable">
                          <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                      </div>
                  </div>
              </div>

              <div className="faq-card">
                  <div className="question">
                      <h2>Can I create my own password that is easy for me to remember?</h2>
                      
                      <button className="btn-question">
                          <i className="fa-solid fa-chevron-down"></i>
                      </button>
                  </div>

                  <div className="answer">
                      <div className="expandable">
                          <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                      </div>
                  </div>
              </div>

              <div className="faq-card">
                  <div className="question">
                      <h2>What happens if I forget or lose my password?</h2>
                      
                      <button className="btn-question">
                          <i className="fa-solid fa-chevron-down"></i>
                      </button>
                  </div>

                  <div className="answer">
                      <div className="expandable">
                          <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                      </div>
                  </div>
              </div>
          </div>

      </div>
    </section>
  )
}

export default FaqSection