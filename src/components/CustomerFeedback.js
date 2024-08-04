import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar as solidStar, faStar as emptyStar } from '@fortawesome/free-solid-svg-icons';
import '../css/Feedback.css';

const CustomerFeedback = ({ feedback }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i <= rating ? solidStar : emptyStar}
          className="star-icon"
        />
      );
    }
    return stars;
  };

  return (
    <div className="feedback-container">
      <h3>Customer's Feedback</h3>
      {feedback.map((item, index) => (
        <div key={index} className="feedback-item">
          <div className="feedback-header">
            <div className="feedback-profile-icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <h4>{item.customer}</h4>
          </div>
          <div className="feedback-rating">
            {renderStars(item.rating)}
          </div>
          <div className="feedback-comment">
            <p>{item.comment}</p>
          </div>
          {index !== feedback.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
