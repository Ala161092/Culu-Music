import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SimilarShow from "../components/SimilarTvShow";

const SingleShow = () => {
  const [singleShow, setSingleShow] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function getSingleShow() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=921037af097a2dc25808be5eee653fe9&language=en-US`
      );
      setSingleShow(response.data);
    }
    getSingleShow();
  }, [id]);

  return (
    <div className="info-wrapper">
      <div className="info-container">
        <div className="top-container">
          <div className="image-container">
            <img
              src={`https://image.tmdb.org/t/p/w500/${singleShow.poster_path}`}
              alt='Movie Poster'
            />
          </div>
          <div className="overview-container">
            <h4 className="red-underline">OverView:</h4>
            <p>{singleShow.overview}</p>
          </div>
        </div>
        <div className="info-card">
          <h2>{singleShow.original_name}</h2>
          <h4>
            Where To Watch <a href={singleShow.homepage}>Here</a>
          </h4>
          <h4 className="red-underline">First Air Date:</h4>
          <p>{singleShow.first_air_date}</p>
          <h4 className="red-underline">Number Of Seasons:</h4>
          <p>{singleShow.number_of_seasons}</p>
          <h4 className="red-underline">Number Of Episodes:</h4>
          <p>{singleShow.number_of_episodes}</p>
          <h4 className="red-underline">Voting Average:</h4>
          <p>{singleShow.vote_average}</p>
        </div>
      </div>
      <SimilarShow />
    </div>
  );
};

export default SingleShow;
