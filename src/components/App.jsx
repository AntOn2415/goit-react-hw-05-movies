import {  Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import MovieDetails from "./MovieDetails";
import Cast from "./Cast";
import Reviews from "./Reviews";
import HomePage from "pages/HomePage";
import MoviesPage from "pages/MoviesPage";

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage/>} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        </Route>
      </Routes>
  );
};
