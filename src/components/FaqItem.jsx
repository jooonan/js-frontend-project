import React, {useState} from 'react';

const FaqItem = ({item}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(prev => !prev);
    };
  
    return (
      <div className={`faq-card ${isOpen ? 'open' : ''}`}>
        <div className="question" onClick={handleClick}>
          <h2>{item.title}</h2>
          <button className="btn-question">
            <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </button>
        </div>
          <div className="answer">
            <div className="expandable">
              <p>{item.content}</p>
            </div>
          </div>
      </div>
  )
}

export default FaqItem