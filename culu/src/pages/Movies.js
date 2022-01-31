import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=921037af097a2dc25808be5eee653fe9&language=en-US&page=1"
      );
      setMovies(response.data.results);
    }
    getMovies();
  }, []);
  
  return (
    <div className="main-wrapper">
      <h2>Find The Latest Trending Movies Right Now:</h2>
      <div className="main-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
