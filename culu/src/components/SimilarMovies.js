import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";



const SimilarMovies = () => {
  const [similarMovies, setsimilarMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getSimilarMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=921037af097a2dc25808be5eee653fe9&language=en-US&page=1`
      );
      setsimilarMovies(response.data.results);
    }

    getSimilarMovies();
  }, [id]);

  return (
    <div>
      <h3>See Similar Movie Suggestions Below:</h3>
      <div className="similar-wrapper">
        {similarMovies.slice(0, 4).map((similar) => (
          <div key={similar.id} className="similar-container">
            <img
              src={`https://image.tmdb.org/t/p/w300/${similar.poster_path}`}
              alt='Movie Poster'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
