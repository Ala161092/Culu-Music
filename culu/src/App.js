import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Movies from './pages/Movies'
import Home from './pages/Home';
import NavMenu from './components/Nav';
import SingleMovie from './pages/SingleMovie';
import TvShows from './pages/TvShows';
import SingleShow from './pages/SingleShow';
import About from './pages/About';





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

export default App;
