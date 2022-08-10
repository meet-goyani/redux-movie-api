import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAyncMovieOrShows,
  getAllMoviOrShows,
  removeMovieOrShows,
} from "../features/movies/movieSlice";
export default function MovieShow() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAllMoviOrShows);
  // console.log(data);
  useEffect(() => {
    dispatch(fetchAyncMovieOrShows(imdbID));
    return () => {
      removeMovieOrShows();
    };
  }, [dispatch, imdbID]);

  return (
    <>
      <div className="movie_show container text-white">
        <h2>Movie Show</h2>
        <div classNam e="d-flex ">
          <div className="col-md-8">
            <div className="movie_detail">
              <h3 className="text-muted">{data.Title}</h3>
              <div className="d-flex">
                <p className="m-4">IMDB Rating:{data.imdbRating}</p>
                <p className="m-4">IMDB Votes:{data.imdbVotes}</p>
                <p className="m-4">Runtime:{data.Runtime}</p>
                <p className="m-4">Released:{data.Released}</p>
              </div>
              <div className="content">
                <p>{data.Plot}</p>
                <div className="detail">
                  <p className="h6">
                    Language:
                    <span className="text-muted">{data.Language}</span>
                  </p>
                  <p className="h6">
                    Director:
                    <span className="text-muted">{data.Director}</span>
                  </p>
                  <p className="h6">
                    Writer:
                    <span className="text-muted">{data.Writer}</span>
                  </p>
                  <p className="h6">
                    Country:
                    <span className="text-muted">{data.Country}</span>
                  </p>
                  <p className="h6">
                    BoxOffice:
                    <span className="text-muted">{data.BoxOffice}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </div>
      </div>
    </>
  );
}
