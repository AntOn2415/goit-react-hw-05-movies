import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { searchMovies } from '../service/MoviesService';
import Searchbar from '../components/Searchbar';
import { Loader } from '../components/Loader/Loader';
import MoviesList from '../components/MoviesList';
import 'react-toastify/dist/ReactToastify.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const savedQuery = searchParams.get('query');
    if (savedQuery) {
      setQuery(savedQuery);
    }
  }, [searchParams]);

  useEffect(() => {
    async function fetchMovies() {
      if (query === '') {
        return;
      }

      try {
        setIsLoading(true);
        const searchedMovies = await searchMovies(query);
        setMovies(searchedMovies);

        if (searchedMovies.length === 0) {
          toast.info('No movies found.');
        }
      } catch (error) {
        throw new Error('Failed to search movies');
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [query]);

  const handleFormSubmit = query => {
    setSearchParams({ query });
    setQuery(query);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {isLoading ? <Loader /> : <MoviesList movies={movies} />}
    </div>
  );
};

export default MoviesPage;