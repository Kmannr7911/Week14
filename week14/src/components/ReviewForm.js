import React from "react";

const ReviewForm = ({ movies }) => {
    return (
      <div>
        { movies.map((movie) => { return movie.name}) }
      </div>
    );
  };
    
  export default ReviewForm;