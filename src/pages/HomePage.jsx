import MoviesList from "../components/MoviesList";
import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../service/MoviesService";

const HomePage = () => {
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
return <>
<h1 className="title">Trending today</h1>
<MoviesList movies={movies} />
</>
}

export default HomePage;