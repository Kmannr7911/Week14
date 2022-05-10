import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import ReviewList from './components/ReviewList';
import Review from './components/Review';
import Stars from './components/Stars';
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
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: "center",
  //   },
  //   text: {
  //     fontSize: 16
  //   },
  //   wrapperCustom: {
  //     borderRadius: 8,
  //     padding: 6
  //   },
  //   logBox: {
  //     padding: 20,
  //     margin: 10,
  //     borderWidth: StyleSheet.hairlineWidth,
  //     borderColor: '#f0f0f0',
  //     backgroundColor: '#f9f9f9'
  //   }
  // });
}

export default App;
