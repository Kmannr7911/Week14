import './App.css';
import MovieList from './components/MovieList';

function App() {
  // expected output:
  // three movie components with <p> for name and genre
  // each movie component has two reviews (<div>s) and ratings that are hardcoded.
  // the reviews are the same for each movie
  const movies = [
    {name: 'The Adam Project', genre: 'Sci-Fi Action/Adventure', Year: '2022'},
    {name: 'Turning Red', genre: 'Animated, Family', Year: '2022' },
    {name: 'IP Man', genre: 'Foreign', Year: '2010'}
  ];
  return (
    <div className="App">
      <MovieList movies={movies}/>
      
    </div>
  );
}

export default App;
