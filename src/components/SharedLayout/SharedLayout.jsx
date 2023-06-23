import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFilm } from 'react-icons/fa';
import css from "./SharedLayout.module.css";

const SharedLayout = () => {

  return (
    <>
    <header className={css.header}>
        <nav className={css.navPage}>
          <NavLink to="/"   className={css.navLink}>
            <FaFilm className={css.logo} />
            Home
          </NavLink>
          <NavLink to="/movies" className={css.navLink}>
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
