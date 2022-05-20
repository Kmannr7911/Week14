import React from 'react';
import Movie from './Movie.js';

const MovieList = ({ movies }) => {
  return (
    <div>
      { movies.map((movie) => { return <Movie name={ movie.name} genre={movie.genre} year= {movie.year}/>})}
    </div>
  );
};
  
export default MovieList;
