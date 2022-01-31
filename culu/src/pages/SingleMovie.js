import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import MovieReview from "../components/MovieReview";
import SimilarMovies from "../components/SimilarMovies";


const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState("");
  const { id } = useParams();

  useEffect(() => {
    async function getSingleMovie() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=921037af097a2dc25808be5eee653fe9&language=en-US`
      );
      setSingleMovie(response.data);
    }
    getSingleMovie();
  }, [id]);

  return (
    <div className="info-wrapper">
      <div className="info-container">
        <div className="top-container">
          <div className="image-container">
            <img
              src={`https://image.tmdb.org/t/p/w400/${singleMovie.poster_path}`}
              alt='Movie Poster'
            />
          </div>
          <div className="overview-container">
            <h4 className="red-underline">OverView:</h4>
            <p>{singleMovie.overview}</p>
          </div>
        </div>
        <div className="info-card">
          <h2>{singleMovie.original_title}</h2>
          <h4>
            Where To Watch <a href={singleMovie.homepage}>Here</a>
          </h4>
          <h4 className="red-underline">Release Date:</h4>
          <p>{singleMovie.release_date}</p>
          <h4 className="red-underline">Voting Average:</h4>
          <p>{singleMovie.vote_average}</p>
        </div>
      </div>
      <MovieReview />
      <SimilarMovies />
    </div>
  );
};

export default SingleMovie;
