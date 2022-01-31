import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieReview = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function getMovieReviews() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=921037af097a2dc25808be5eee653fe9&language=en-US&page=1`
      );
      setMovieReviews(response.data.results);
    }

    getMovieReviews();
  }, [id]);

  return (
    <div className="review-wrapper">
      <h3>Read The Below Reviews:</h3>
      {movieReviews.length ? (
        <div className="review-container">
          {movieReviews.slice(0, 3).map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-top">
                <h4 className="author">Author: {review.author}</h4>
                <h4>
                  Rating: {review.author_details.rating || "Not Rated"} / 10
                </h4>
              </div>
              <h4 className="center-text">Review Snippet: </h4>
              <p>
                {review.content.slice(0, 800) + "..."}
                <br />
                <a href={review.url}> Read More</a>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Sadly There Are No Reviews Yet!</p>
      )}
    </div>
  );
};

export default MovieReview;
