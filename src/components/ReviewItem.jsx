import React from 'react'

{/* help from chatgpt with rewriting this part */}
const ReviewItem = ({ author, jobRole, comment, starRating, avatarUrl }) => {
  return (
    <div className="review-card">
      <img className="quotation-mark" src="./icons/quotes.svg" alt="Quotation mark" />

      <div className="review-rating">
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className={`fa-${index < starRating ? 'solid' : 'regular'} fa-star`}
            style={{ color: index < starRating ? '#FFD43B' : '#b4b8c8' }}
          ></i>
        ))}
      </div>

      <p>{comment}</p>

      <div className="user-box">
        <img src={avatarUrl} alt={`${author}'s avatar`} />
        <div className="user-info">
          <span className="user-name">{author}</span>
          <span className="user-occupation">{jobRole}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem