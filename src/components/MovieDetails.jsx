import React from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { getAllMovies, getAllShows } from "../features/movies/movieSlice";
import "./moviedetail.css";
export default function MovieDetails() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  // console.log(movies);
  return (
    <>
      <h3 className="text-white">Movies</h3>
      <div className="movie_list mt-3 d-flex flex-wrap justify-content-start col-md-12 col-lg-12">
        {movies.Response === "True"
          ? movies.Search.map((movie, index) => {
              return (
                <Card
                  key={index}
                  className="movie_card bg-dark mb-5 me-3 shadow border-0"
                >
                  <Card.Img variant="top" src={movie.Poster} />
                  <Card.Body className="p-2 card_body">
                    <p className="m-0  movie_title">{movie.Title}</p>
                    <p className="text-muted m-0 movie_year">
                      <strong>Release Year: </strong>
                      <span>{movie.Year}</span>
                    </p>
                    <p className="text-muted movie_type m-0">
                      <strong>Type: </strong>
                      <span>{movie.Type}</span>
                    </p>
                  </Card.Body>
                </Card>
              );
            })
          : null}
      </div>
      <h3 className="text-white">Series</h3>
      <div className="movie_list mt-3 d-flex flex-wrap justify-content-start col-md-12 col-lg-12">
        {shows.Response === "True"
          ? shows.Search.map((series, index) => {
              return (
                <Card
                  key={index}
                  className="movie_card bg-dark mb-5 me-3 shadow border-0"
                >
                  <Card.Img variant="top" src={series.Poster} />
                  <Card.Body className="p-2 card_body">
                    <p className="m-0  movie_title">{series.Title}</p>
                    <p className="text-muted m-0 movie_year">
                      <strong>Release Year: </strong>
                      <span>{series.Year}</span>
                    </p>
                    <p className="text-muted movie_type m-0">
                      <strong>Type: </strong>
                      <span>{series.Type}</span>
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
