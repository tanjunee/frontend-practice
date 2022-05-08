import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './components/movies/movie-details/MovieDetails';
import About from './pages/about/About';
import Home from './pages/home/Home';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
};

export default App;
