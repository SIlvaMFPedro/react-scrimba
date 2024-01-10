import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import './App.css';

const API_URL = 'https://omdbapi.com?apikey=fe2f6c44';
const search_icon = "https://media.geeksforgeeks.org/wp-content/uploads/20230626112934/search.png";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  async function searchMovies(title) {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('SpiderMan');
  }, []);

  return (
    <div className="App">
      <h1>React Movie App</h1>
      <div className="search">
        <input placeholder='Search for Movie' value={movieSearch} onChange={(e) => {setMovieSearch(e.target.value)}}/>
        <img src={search_icon} alt="search icon" onClick={() => searchMovies(movieSearch)}/>
      </div>
      {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found :( </h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
