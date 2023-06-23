import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import { searchMovies } from "../service/MoviesService";
import MovieList from "../components/MoviesList";

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query === '') {
      setMovies([]);
      return;
    }

    async function fetchMovies() {
      try {
        const searchedMovies = await searchMovies(query);
        setMovies(searchedMovies);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, [query]);

  const handleFormSubmit = (query) => {
    setQuery(query);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;