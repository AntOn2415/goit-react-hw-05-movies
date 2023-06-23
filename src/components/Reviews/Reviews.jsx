import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../service/MoviesService";

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
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>Content: {review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>We don't have any reviews for this movie.</div>
      )}
    </div>
  );
};

export default Reviews;