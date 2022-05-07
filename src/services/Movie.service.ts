import axios from 'axios';
import { Movies } from '../components/movies';

const BASE_URL = 'https://api.themoviedb.org';
const API_VERSION = '4';

/**
 * Get API Key from environment variables
 * Get Marvel movie list - 1
 */
export const fetchMovies = async (): Promise<Movies> => {
  const { data } = await axios.get<Movies>(
    `${BASE_URL}/${API_VERSION}/list/1?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return data;
};
