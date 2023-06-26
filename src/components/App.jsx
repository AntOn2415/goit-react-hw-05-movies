import {  Route, Routes } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./SharedLayout"


const HomePage = lazy(()=> import("pages/HomePage"));
const MoviesPage = lazy(()=> import("pages/MoviesPage"));
const MovieDetails = lazy(()=> import("./MovieDetails"));
const Cast = lazy(()=> import("./Cast"));
const Reviews = lazy(()=> import("./Reviews"));

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
