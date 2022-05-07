import React from 'react';
import { MovieResult } from '..';

interface Props {
  movie: MovieResult;
}

const Movie: React.FC<Props> = ({ movie }) => {
  return <div>{movie.title}</div>;
};

export default Movie;
