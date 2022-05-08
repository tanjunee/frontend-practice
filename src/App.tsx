import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';

const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/about/About'));
const MovieDetails = lazy(() => import('./components/movies/movie-details/MovieDetails'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Suspense>
  );
};

export default App;
