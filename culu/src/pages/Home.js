import React from "react";

import mainImage from "../assets/main.png";

const Home = () => {
  return (
    <div className="home-wrapper">
      <h1>Welcome To CuluFlix</h1>
      <h2>Find Your Next Movie and Tv Show To Binge:</h2>
      <ol className="site-list">
        <li>Find A New Movie Or Tv Show</li>
        <li>Read The Latest Reviews</li>
        <li>When You're Done, Come & Find Your Next Choice</li>
      </ol>
      <img src={mainImage} alt='Home Logo'/>
    </div>
  );
};

export default Home;
