import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import Stars from "./Stars";

const Movie = ({ name, genre, year }) => {
  let [reviews, setReviews] = useState([]);
  let [rating, setRating] = useState(null); 

  const starsClick = (starsRating) => {
    setRating(starsRating);
  };
  
  const submitReview = (input) => {
    const newReview = { comment: input };
    setReviews([...reviews, newReview]);
  };

  return (
    <div>
  
    <h3>Movie</h3>
      <p>{name}</p>
      <p>{genre}</p>
      <p>{year}</p>
      <p>{reviews.map((review) => {
        return (
          <div>
            <p>Comment: {review.comment}</p>
          </div>
        )
      })}</p>
      <p>{ `Rating: ${rating}` }</p>

      <Stars onClick={starsClick}></Stars>
      <ReviewForm setReviews={submitReview} />
    </div>
  );
};
    
  export default Movie;

