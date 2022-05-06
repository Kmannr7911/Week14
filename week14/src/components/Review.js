import React from "react";
import ReviewForm from "./ReviewForm";
import {
  Card,
  CardSubtitle,
  CardText,
  CardTitle,
  CardBody,
} from "reactstrap";

function Body({
  firstName,
  lastName,
  stars,
  comment,
  timestamp,
}; {
  firstName: string;
  lastName: string;
  stars: number;
  comment: string;
  timestamp: number;
});

const Review = ({ movies }) => {
    return (
      <div
        { movies.map((movie) => { return movie.name}) }
        style={{
          display: 'flex',
          justifyContent: 'Left',
          alignItems: 'Left',
          height: '100vh'
        }}
        >
        <div>
        <h1>Reviews</h1>
        
        </div>

      </div>
    );
  };
    
  export default Review;
