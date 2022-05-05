import React from "react";

const Review = ({ movies }) => {
    return (
      <div>
        { movies.map((movie) => { return movie.name}) }
      </div>
    );
  };
    
  export default Review;