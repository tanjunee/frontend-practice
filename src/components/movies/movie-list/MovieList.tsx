import React, { useEffect, useState } from 'react';
import { MovieResult } from '..';
import { fetchMovies } from '../../../services/Movie.service';
import SearchFilter from '../../search-filter/SearchFilter';
import Movie from '../movie/Movie';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<MovieResult[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<MovieResult[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies();
      setMovies(data.results);
      setFilteredMovies(data.results);
    };

    getMovies();
  }, []);

  const searchMovie = (title: string) => {
    if (title) {
      const filteredData = movies.filter((movie: MovieResult) => {
        return movie.title.toLowerCase().includes(title.toLowerCase());
      });

      setFilteredMovies(filteredData);
    } else {
      setFilteredMovies(movies);
    }
  };

  const renderMovie = () =>
    filteredMovies.map((movie: MovieResult) => {
      return <Movie key={movie.id} movie={movie} />;
    });

  return (
    <div>
      <SearchFilter onChange={searchMovie} />
      <div className="flex flex-row flex-wrap justify-center">{renderMovie()}</div>
    </div>
  );
};

export default MovieList;
