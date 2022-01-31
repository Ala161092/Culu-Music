import React from "react";
import { Link } from "react-router-dom";

const TVCard = ({ id, name, poster_path, overview }) => {
  return (
    <div>
      <div className="moviecard-container" key={id}>
        <div>
          <div className="title-container">
            <Link to={`/tvshow/${id}`}>
              <h4>{name}</h4>
              <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`}  alt='Movie Poster' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVCard;
