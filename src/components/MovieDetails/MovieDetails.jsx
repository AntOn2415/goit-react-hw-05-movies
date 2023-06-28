
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getImageUrl } from '../../service/MoviesService';
import { FiArrowLeft } from 'react-icons/fi';
import css from './MovieDetails.module.css';

const MovieDetails = ({ movieDetails, previousPath }) => {
  
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;
  
  const imageUrl = poster_path ? getImageUrl(poster_path) : null;

  return (
    <section className={css.movieDetails}>
      <Link to={previousPath} className={css.goBack}>
        <FiArrowLeft className={css.icon} />
        Go back
      </Link>
      <section className={css.basicInfo}>
        <div className={css.imageContainer}>
          {imageUrl ? (
            <img src={imageUrl} alt={title} className={css.image} />
          ) : (
            <div className={css.placeholder}>No Image</div>
          )}
        </div>
        <div className={css.detailsContainer}>
          <h2 className={css.title}>
            {title} ({release_date.slice(0, 4)})
          </h2>
          <p className={css.userScore}>
            User Score: {Math.round(vote_average * 10)}%
          </p>
          <p className={css.overview}>Overview: {overview}</p>
          <p className={css.genres}>
            Genres: {genres.map(genre => genre.name).join(', ')}
          </p>
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
        <Outlet />
    </section>
  );
};

export default MovieDetails;
