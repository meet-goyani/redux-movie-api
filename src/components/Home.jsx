import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchAyncMovies, fetchAyncShows } from "../features/movies/movieSlice";
import MovieDetails from "./MovieDetails";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAyncMovies());
    dispatch(fetchAyncShows());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <MovieDetails />
      </div>
    </>
  );
}
