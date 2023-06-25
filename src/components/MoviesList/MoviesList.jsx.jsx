import MovieListItem from "../MoviesListItem";
import css from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  return (
    <ul className={css.movieList}>
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesList;