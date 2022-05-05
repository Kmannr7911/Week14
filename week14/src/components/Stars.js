import React from "react";

const Stars = ({ movies }) => {
    return (
      <div>
        { movies.map((movie) => { return movie.name}) }
      </div>
    );
  };
    
  export default Stars;