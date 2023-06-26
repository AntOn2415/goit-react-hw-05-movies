import PropTypes from 'prop-types';
import MovieListItem from '../MoviesListItem';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
