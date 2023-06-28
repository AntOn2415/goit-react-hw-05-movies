import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieAddInfo, getImageUrl } from '../../service/MoviesService';
import { LoaderThreeDots } from 'components/Loader/Loader';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        setIsLoading(true);
        const credits = await fetchMovieAddInfo(movieId, "credits");
        setCast(credits.cast);
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    };

    getMovieCredits();
  }, [movieId]);

  if (isLoading) {
    return <LoaderThreeDots />;
  }

  return (
    <section className={css.castInfo}>
      <h2 className={css.title}>Cast</h2>
      <ul className={css.actorsList}>
        {cast.map(actor => (
          <li key={actor.id} className={css.actorCard}>
            {actor.profile_path ? (
              <img
                src={getImageUrl(actor.profile_path)}
                className={css.actorPhoto}
                alt={actor.name}
              />
            ) : (
              <div className={css.placeholder}>No Photo</div>
            )}
            <p className={css.actorName}>{actor.name}</p>
            {actor.character && (
              <p className={css.actorRole}>Character: {actor.character}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast;
