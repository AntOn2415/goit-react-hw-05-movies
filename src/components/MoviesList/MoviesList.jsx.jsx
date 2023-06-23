import MovieListItem from "../MoviesListItem";
import css from "./MoviesList.module.css";

const MovieList = ({ movies }) => {
  return (
    <div className={css.movieList}>
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;