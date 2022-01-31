import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ id, poster_path, original_title}) => {
  return (
    <div>
      <div className="card-container" key={id}>
        <div>
          <div className="title-container">
            <Link to={`/movie/${id}`}>
              <h4>{original_title}</h4>
              <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt='Movie Poster' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
