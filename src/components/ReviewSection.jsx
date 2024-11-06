import React, {useState, useEffect} from 'react'
import ReviewItem from './ReviewItem';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);

    {/* help from chatgpt with this part */}
    useEffect(() => {
      const fetchReviews = async () => {
        try {
          const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
          if (!response.ok) {
            throw new Error('Failed to fetch testimonials');
          }
          const data = await response.json();
          setReviews(data);
        } catch (error) {
          console.error('Error fetching testimonials:', error);
        }
      };
  
      fetchReviews();
    }, []);

  return (
    <section className="review-section">
      <div className="container">
          <h2>Clients are Loving our app</h2>

            {/* help from chatgpt with this part  */}
            {reviews.map((review) => (
                <ReviewItem
                    key={review.id}
                    author={review.author}
                    jobRole={review.jobRole}
                    comment={review.comment}
                    starRating={review.starRating}
                    avatarUrl={review.avatarUrl}
                />
            ))}
      </div>
  </section>
  )
}

export default ReviewSection