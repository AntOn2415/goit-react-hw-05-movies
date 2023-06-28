import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MoviesListItem.module.css';

const MovieListItem = ({ movie }) => {
  const location = useLocation();
  const moviePath =
    location.pathname === '/' ? `/movies/${movie.id}` : `${movie.id}`;
  return (
    <li>
      <Link
        to={moviePath}
        state={{ from: location }}
        className={css.movieLink}
      >
        {movie.title || movie.name}
      </Link>
    </li>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default MovieListItem;
