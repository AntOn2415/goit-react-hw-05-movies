import { useEffect, useState } from "react";
import { fetchMovieCredits, getImageUrl } from "../../service/MoviesService";
import css from "./Cast.module.css"

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const credits = await fetchMovieCredits(movieId);
        setCast(credits.cast);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieCredits();
  }, [movieId]);

  return (
    <section className={css.castInfo}>
      <h2 className={css.title}>Cast</h2>
      <ul className={css.actorsList}>
        {cast.map((actor) => (
          <li key={actor.id} className={css.actorCard}>
            {actor.profile_path ? (
              <img src={getImageUrl(actor.profile_path)} className={css.actorPhoto} alt={actor.name} />
            ) : (
              <div className={css.placeholder}>No Photo</div>
            )}
            <p className={css.actorName}>{actor.name}</p>
            {actor.character && <p className={css.actorRole}>Character: {actor.character}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast;