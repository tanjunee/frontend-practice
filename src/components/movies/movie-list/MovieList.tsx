import React, { useEffect, useState } from 'react';
import { MovieResult } from '..';
import { fetchMovies } from '../../../services/Movie.service';
import Movie from '../movie/Movie';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<MovieResult[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies();
      setMovies(data.results);
    };

    getMovies();
  }, []);

  const renderMovie = () =>
    movies.map((movie: MovieResult) => {
      return <Movie key={movie.id} movie={movie} />;
    });

  return <div>{renderMovie()}</div>;
};

export default MovieList;
