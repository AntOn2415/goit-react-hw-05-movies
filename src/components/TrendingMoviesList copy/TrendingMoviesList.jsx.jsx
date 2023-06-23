import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from '../../service/MoviesService';
import MovieListItem from "components/MoviesListItem/MoviesListItem";

function TrendingMoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default TrendingMoviesList;