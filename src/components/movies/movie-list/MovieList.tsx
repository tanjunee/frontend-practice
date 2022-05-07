import React, { useEffect } from 'react';
import { fetchMovies } from '../../../services/Movie.service';

const MovieList: React.FC = () => {
  const getMovies = () => {
    const movies = fetchMovies();
    console.log(movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div>MovieList</div>;
};

export default MovieList;
