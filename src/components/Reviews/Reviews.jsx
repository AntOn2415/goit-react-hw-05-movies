import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../service/MoviesService";
import css from "./Reviews.module.css";

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <div className={css.reviewsContainer}>
      <h2 className={css.title}>Reviews</h2>
      {reviews.length > 0 ? (
        <ul className={css.reviewList}>
          {reviews.map((review) => (
            <li key={review.id} className={css.reviewItem}>
              <p className={css.author}>Author: {review.author}</p>
              <p className={css.content}>Content: {review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className={css.emptyReviews}>We don't have any reviews for this movie.</div>
      )}
    </div>
  );
};

export default Reviews;
