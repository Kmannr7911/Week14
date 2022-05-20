import React from "react";
import "../App.css";


const Stars = ({ onClick }) => {
  const handleClick = (rating) => {
    onClick(rating);
  };
  return (
    <div className="movie-rating">
    {[...Array(5)].map((star,index)=> {
      index += 1;
      return(
        <button
        type="button"
        key={index}
        onClick={() => handleClick(index)}
        
        >
          <span className="star">&#9733;</span>
        </button>
      );
    })}
    </div>
  );
};
    
  export default Stars;