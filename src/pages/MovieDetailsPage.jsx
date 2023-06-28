import React, { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../service/MoviesService';
import MovieDetails from '../components/MovieDetails';
import { Loader } from '../components/Loader/Loader';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');
  const previousPath = backLinkLocation.current;
  // const previousPath = location.state?.from ?? '/';

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setIsLoading(true);
        const details = await fetchMovieDetails(movieId);
      
        setMovieDetails(details);
      } catch (error) {
        console.error(error);
        setError('The resource you requested could not be found.');
      } finally {
        setIsLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <section>
        <p>{error}</p>
        <Link to={previousPath}>Go back</Link>
      </section>
    );
  }

  if (!movieDetails) {
    return null;
  }

  return (
    <MovieDetails movieDetails={movieDetails} previousPath={previousPath} />
  );
};

export default MovieDetailsPage;
