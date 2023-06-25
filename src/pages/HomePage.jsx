import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../service/MoviesService';
import MoviesList from '../components/MoviesList';
import { Loader } from '../components/Loader/Loader';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main>
          <h1 className="title">Trending today</h1>
          <MoviesList movies={movies} />
        </main>
      )}
    </>
  );
};

export default HomePage;
