import React from "react";

const ReviewList = ({ movies }) => {
    return (
      <div>
        { movies.map((movie) => { return movie.name}) }
      </div>
    );
  };
    
  export default ReviewList;