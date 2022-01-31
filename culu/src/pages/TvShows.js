import React, { useState, useEffect } from "react";
import axios from "axios";
import TVCard from "../components/TVCard";

const TvShows = () => {
  const [tvshows, settvshows] = useState([]);
  useEffect(() => {
    async function getTvShows() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/tv/day?api_key=921037af097a2dc25808be5eee653fe9"
      );

      settvshows(response.data.results);
    }
    getTvShows();
  }, []);

  return (
    <div className="main-wrapper">
      <h2>Need A New Show To Binge?</h2>
      <h2>Checkout Out These Trending Shows:</h2>
      <div className="main-container">
        {tvshows.length &&
          tvshows.map((show) => <TVCard key={show.id} {...show} />)}
      </div>
    </div>
  );
};

export default TvShows;
