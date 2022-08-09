import React from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { getAllMovies } from "../features/movies/movieSlice";
import "./moviedetail.css";
export default function MovieDetails() {
  const movies = useSelector(getAllMovies);
  // console.log(movies);
  return (
    <>
      <div className="movie_list mt-3 d-flex flex-wrap justify-content-start col-md-12 col-lg-12">
        {movies.Response === "True"
          ? movies.Search.map((movie) => {
              return (
                <Card
                  key={movie.imdbID}
                  className="movie_card mb-5 me-3 shadow border-0"
                >
                  <Card.Img variant="top" src={movie.Poster} />
                  <Card.Body className="p-2 card_body">
                    <p className="m-0 h6 movie_body">{movie.Title}</p>
                    <p className="text-muted m-0">
                      Release Date: <span>{movie.Year}</span>
                    </p>
                    <p className="text-muted m-0">
                      <strong>Type: </strong>
                      <span>{movie.Type}</span>
                    </p>
                  </Card.Body>
                </Card>
              );
            })
          : null}
      </div>
    </>
  );
}
