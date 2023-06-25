import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { searchMovies } from '../service/MoviesService';
import Searchbar from '../components/Searchbar';
import { Loader } from '../components/Loader/Loader';
import MoviesList from '../components/MoviesList';
import 'react-toastify/dist/ReactToastify.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(() => JSON.parse(localStorage.getItem('searchedMovies')) || []);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('searchedMovies', JSON.stringify(movies));
  }, [movies]);

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchMovies() {
      try {
        setIsLoading(true);
        const searchedMovies = await searchMovies(query);
        setMovies(searchedMovies);

        if (searchedMovies.length === 0) {
          toast.info('No movies found.');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [query]);

  const handleFormSubmit = query => {
    setQuery(query);
  };

  return (
    <main>
      <Searchbar onSubmit={handleFormSubmit} />
      {isLoading ? <Loader /> : <MoviesList movies={movies} />}
    </main>
  );
};

export default MoviesPage;
