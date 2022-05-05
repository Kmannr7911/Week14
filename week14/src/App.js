import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
function App() {
  const movies = [
    {name: 'The Adam Project', genre: 'Sci-Fi Action/Adventure'},
    {name: 'Turning Red', genre: 'Animated, Family'},
    {name: 'IP Man', genre: 'Foreign'}
  ];
  return (
    <div className="App">
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
