import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { FaFilm } from 'react-icons/fa';
import { Loader } from '../Loader/Loader';
import css from './SharedLayout.module.css';
import 'react-toastify/dist/ReactToastify.css';


const SharedLayout = () => {

  return (
    <>
      <header className={css.header}>
        <nav className={css.navPage}>
          <NavLink to="/" className={({isActive}) => `${css.navLink} ${isActive ? css.active : ''}`} >
            <FaFilm className={css.logo} />
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({isActive}) => `${css.navLink} ${isActive ? css.active : ''}`}
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <div className={css.container}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
        <ToastContainer autoClose={2000} />
      </main>
    </>
  );
};

export default SharedLayout;
