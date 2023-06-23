import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { fetchMovieDetails, getImageUrl } from "../../service/MoviesService";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";
import css from "./MovieDetails.module.css"

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  console.log('movieId:',movieId);
  console.log("useParams:", useParams());
  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const details = await fetchMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieDetails;

  const imageUrl = getImageUrl(poster_path);

  return (
    <section className={css.movieDetails}>
        <Link to="/" className={css.goBack}>
        <FiArrowLeft className={css.icon} />
        Go back
        </Link>
      <section className={css.basicInfo}>
      <div className={css.imageContainer}>
        <img src={imageUrl} alt={title} className={css.image} />
      </div>
      <div className={css.detailsContainer}>
        <h2 className={css.title}>{title} ({release_date.slice(0, 4)})</h2>
        <p className={css.userScore}>User Score: {Math.round(vote_average * 10)}%</p>
        <p className={css.overview}>Overview: {overview}</p>
        <p className={css.genres}>Genres: {genres.map((genre) => genre.name).join(", ")}</p>
        </div>
        </section>
        <section className={css.addInfo}>
          <h2>Additional information</h2>
          <Link to="cast" className={css.link}>
            Cast
          </Link>
          <Link to="reviews" className={css.link}>
            Reviews
          </Link>
      </section>
      <Cast movieId={movieId} />
      <Reviews movieId={movieId} />
    </section>
  );
};

export default MovieDetails;
