# Sei-Project-2-CuluFlix
CuluFlix - My Second Project from the General Assembly Sei-59 Course

# Overview
My second project during the General Assembly, Software Engineering Immersive Course. This was a solo 48 hour hackathon project. 


# Brief
  • Consume a public API – this could be anything but it must make sense for your project.  
  • Have several components.  
  • The app can have a router - with several "pages", this is up to you and if it makes sense for your project.  
  • Include wireframes - that you designed before building the app.  
  • Be deployed online and accessible to the public.  

# Site Preview

![Screenshot 2022-02-01 at 16-16-50 CuluFlix](https://user-images.githubusercontent.com/77459312/152255010-45a74b04-3390-4ff5-8de1-771f8deb14b5.png)

# Deployment
This project has been deployed with Netlify
https://culuflix.netlify.app/

# My process

## Built with

#### Front-End:
- JavaScript(ES6)
- React.js 
- CSS3 + SASS

#### Dev Tools:
- GitHub
- Figma
- Notion
- Photoshop
- Firefox Developer Edition
- Insomnia



# Getting Started
I spent a few hours searching for a public API that my React app would consume. I wanted to ensure the API would be based on something that I would enjoy using, so I decided to go with the Movie Database API. 

The Movie Database Api offers extensive metadata including but not limited to; trending movies, cast information and reviews for movies, tv shows and people. 

Once I had landed on which API to use, I wanted to draw up a quick wireframe for the site. I find wireframes so useful as it allows me to not waste time procrastinating on what to include and how the site would look. This was even more imperative on this project due to the 48 hour deadline.

![Screenshot 2022-02-01 at 16 25 21](https://user-images.githubusercontent.com/77459312/152257802-14fd0672-fa17-40e3-b5c3-4a4a273eeb56.png)

# Development

## Build

To see how the data would be returned I used Insomnia to test out the API.
![Screenshot 2022-02-01 at 16 29 32](https://user-images.githubusercontent.com/77459312/152257926-05908ec8-a044-4115-8df4-025bde8b2ec4.png)

Once I had read through the Movie Database API documentation, it was finally time to start coding. I started off with creating the React App, and building my functional components. 

Movie Review:
One of the features of my site is being able to read any reviews that have been posted. The Movie DB has a separate url endpoint for the reviews, I was able to utilise this for each different movie by passing in the id in the url. 

As the database contains many reviews, I decided it was best to just display up to 3 reviews and to also limit the character count. If users want to read the full review they are able to click the link and it will direct them to the full page. I found this to be the best approach to keep the site clean. 
     
https://user-images.githubusercontent.com/77459312/152258292-b8abdbea-c319-4747-9953-f50d1d287cc4.mov

```
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

```
Next, I installed React Router, this allowed me to create the different routing paths in my app.js and display the multiple pages. 

```
function App() {
 return (
   <div className="app">
     <BrowserRouter>
   <div className='app-wrapper' >
     <NavMenu />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/movies" element={<Movies />} />
     <Route path="/movie/:id" element={<SingleMovie />} />
     <Route path ="/tvshows" element={<TvShows />}/>
     <Route path="/tvshow/:id" element={<SingleShow />} />
     <Route path="/about" element={<About />} />
    
 
  
     </Routes>
   </div>
     </BrowserRouter>
   </div>
 );
}

```

I made sure to keep the layout simple and I knew that most of the information would be displayed within the singlePage.js file. At this point most of my components that I wanted displayed such as the similar movie or tv show and the reviews had already been built, all I had to do was import it into the relevant file.  

```
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


```

https://user-images.githubusercontent.com/77459312/152258553-1f13f3ce-8c15-4184-af7a-caf8ca81d230.mov

# Challenges
  • With a 48 hour deadline I had to make sure my MVP was in fact doable, after only a week of learning React, this task really stretched the knowledge I had so far. However, being able to complete it
  and seeing the final product was worth the few hours of stress.
 
# Future Improvments
  • With more time, I would like to be able to link the suggested movie or tv show to also display on a single page with more information.  
  • I would also like to make this a full stack application, that will allow users to have their own accounts where they can add movies to their watch list, leave their own reviews etc.  
  
# Wins & Key Learnings:
  • The 48 hour hackathon really showed me how far I’d come with my coding skills. I was able to build a fully functioning site that displayed all the information I had wanted from my wireframe.   
  • As I was not able to do this on my first project, I wanted to ensure that the site is fully responsive and can be viewed perfectly on mobile devices.  

