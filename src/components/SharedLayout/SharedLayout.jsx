import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { FaFilm } from 'react-icons/fa';
import { Loader } from '../Loader/Loader';
// import './index.css';
import css from './SharedLayout.module.css';
import 'react-toastify/dist/ReactToastify.css';


const SharedLayout = () => {
  const location = useLocation();
  
  const isCurrentPage = path => {
    return location.pathname === path ? css.current : '';
  };

  return (
    <>
      <header className={css.header}>
        <nav className={css.navPage}>
          {/* <NavLink to="/" className={css.navLink}>
            <FaFilm className={css.logo} />
            Home
          </NavLink>
          <NavLink
            to="/movies"
            // className={css.navLink}
            className="navLink"
          >
            Movies
          </NavLink> */}
          <NavLink to="/" className={`${css.navLink} ${isCurrentPage('/')}`}>
            <FaFilm className={css.logo} />
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={`${css.navLink} ${isCurrentPage('/movies')}`}
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