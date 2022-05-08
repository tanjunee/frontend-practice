import React from 'react';
import { MovieResult } from '..';

interface Props {
  movie: MovieResult;
}

const Movie: React.FC<Props> = ({ movie }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie.title}</div>
        <p className="text-gray-700 text-base">{movie.overview}</p>
      </div>
    </div>
  );
};

export default Movie;
