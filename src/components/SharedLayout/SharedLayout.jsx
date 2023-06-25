import { Outlet } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFilm } from 'react-icons/fa';
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  const location = useLocation();

  const isCurrentPage = (path) => {
    return location.pathname === path ? css.current : "";
  };

  return (
    <>
      <header className={css.header}>
        <nav className={css.navPage}>
          <NavLink to="/" className={`${css.navLink} ${isCurrentPage("/")}`}>
            <FaFilm className={css.logo} />
            Home
          </NavLink>
          <NavLink to="/movies" className={`${css.navLink} ${isCurrentPage("/movies")}`}>
            Movies
          </NavLink>
        </nav>
      </header>
      <div className={css.container}>
        <Outlet />
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
}

export default SharedLayout;

