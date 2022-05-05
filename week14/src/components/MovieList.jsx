import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <div>
      { movies.map((movie) => { return <Movie name={ movie.name} genre={movie.genre}/>})}
    </div>
  );
};
  
export default MovieList;