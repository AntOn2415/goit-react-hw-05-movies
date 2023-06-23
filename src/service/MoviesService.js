import axiosInstance from './ApiConfig';

async function fetchTrendingMovies() {
  try {
    const response = await axiosInstance.get('trending/all/day?language=en-US');
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch trending movies');
  }
}

async function searchMovies(query) {
  try {
    const response = await axiosInstance.get(
      `search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to search movies');
  }
}

async function fetchMovieDetails(movieId) {
  try {
    const response = await axiosInstance.get(`movie/${movieId}?language=en-US`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch details for movie with ID: ${movieId}`);
  }
}

async function fetchMovieCredits(movieId) {
  try {
    const response = await axiosInstance.get(
      `movie/${movieId}/credits?language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch credits for movie with ID: ${movieId}`);
  }
}

async function fetchMovieReviews(movieId) {
  try {
    const response = await axiosInstance.get(
      `movie/${movieId}/reviews?language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch reviews for movie with ID: ${movieId}`);
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
  fetchMovieCredits,
  fetchMovieReviews,
  getImageUrl
};
