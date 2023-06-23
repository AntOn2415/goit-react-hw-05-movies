import { Link, useLocation } from "react-router-dom";
import css from "./MoviesListItem.module.css";

const MovieListItem = ({ movie }) => {
  const location = useLocation();

  const moviePath = location.pathname === "/" ? `/movies/${movie.id}` : `${movie.id}`;

  return (
    <Link to={moviePath} className={css.movieListItem}>
      {movie.title || movie.name}
    </Link>
  );
};

export default MovieListItem;