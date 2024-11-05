import React, { useState, useEffect } from 'react';

const FaqItem = ({item}) => {

  return (
    <div className="faq-card">
        <div className="question">
            <h2>{item.title}</h2>
            
            <button className="btn-question">
                <i className="fa-solid fa-chevron-down"></i>
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