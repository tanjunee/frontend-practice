import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const API_VERSION = '4';

/**
 * Get API Key from environment variables
 * Get Marvel movie list - 1
 */
export const fetchMovies = async (): Promise<any> => {
  const { data } = await axios.get<any>(
    `${BASE_URL}/${API_VERSION}/list/1?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return data;
};
