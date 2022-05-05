import React from "react";

const Movie = ({ name, genre }) => {
    return (
      <div>
        <p>{name}</p>
        <p>{genre}</p>
      </div>
    );
  };
    
  export default Movie;