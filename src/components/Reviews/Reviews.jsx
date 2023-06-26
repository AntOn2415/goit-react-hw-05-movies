import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../service/MoviesService';
import { LoaderThreeDots } from 'components/Loader/Loader';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    };

    getMovieReviews();
  }, [movieId]);

  if (isLoading) {
    return <LoaderThreeDots />;
  }

  return (
    <section>
      <div className={css.reviewsContainer}>
        <h2 className={css.title}>Reviews</h2>
        {reviews.length > 0 ? (
          <ul className={css.reviewList}>
            {reviews.map(review => (
              <li key={review.id} className={css.reviewItem}>
                <p className={css.author}>Author: {review.author}</p>
                <p className={css.content}>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className={css.emptyReviews}>
            We don't have any reviews for this movie.
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
