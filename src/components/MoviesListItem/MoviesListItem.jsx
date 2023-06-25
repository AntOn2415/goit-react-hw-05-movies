import { Link, useLocation } from "react-router-dom";
import css from "./MoviesListItem.module.css";

const MovieListItem = ({ movie }) => {
  const location = useLocation();
  const moviePath = location.pathname === "/" ? `/movies/${movie.id}` : `${movie.id}`;

  return (
  <li>
  <Link to={moviePath} state={{ from: location.pathname }} className={css.movieLink}>
  {movie.title || movie.name}
</Link>
  </li>
  );
};

export default MovieListItem;