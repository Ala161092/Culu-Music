import { Link } from "react-router-dom";

import cinemaImage from "../assets/Cinema.png";

function NavMenu() {
  return (
    <div>
      <div className="logo-container">
      <Link to="/"><img src={cinemaImage} alt="Popcorn Logo"/></Link>
      </div>
    <ul className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
      <li>
        <Link to="/TVShows">TV Shows</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    </div>
  );
}

export default NavMenu;
