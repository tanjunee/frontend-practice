import React from 'react';
import { Link } from 'react-router-dom';
import { MovieResult } from '..';

interface Props {
  movie: MovieResult;
}

const Movie: React.FC<Props> = ({ movie }) => {
  return (
    <Link className="max-w-sm rounded overflow-hidden shadow-lg" to={`/movie/${movie.id}`}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie.title}</div>
        <p className="text-gray-700 text-base">{movie.overview}</p>
      </div>
    </Link>
  );
};

export default Movie;
