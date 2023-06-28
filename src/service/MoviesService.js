import axiosInstance from './ApiConfig';

async function fetchTrendingMovies() {
  try {
    const response = await axiosInstance.get('trending/all/day?language=en-US');
    return response.data.results;
  } catch (error) {
    throw error;
  }
}

async function searchMovies(query) {
  try {
    const response = await axiosInstance.get(
      `search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    throw error;
  }
}

async function fetchMovieDetails(movieId) {
  try {
    const response = await axiosInstance.get(`movie/${movieId}?language=en-US`);
    return response.data;
  } catch (error) {
    
    throw new Error(`Failed to fetch details for movie with ID: ${movieId}`);
  }
}

async function fetchMovieAddInfo(movieId, paramInfo) {
  try {
    const response = await axiosInstance.get(
      `movie/${movieId}/${paramInfo}?language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

const getImageUrl = (path) => {
  if (!path) return null;
  return `https://image.tmdb.org/t/p/original${path}`;
};

export {
  fetchTrendingMovies,
  searchMovies,
  fetchMovieDetails,
  fetchMovieAddInfo,
  getImageUrl
};
