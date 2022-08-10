import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../api/movieApi";
import { APIKEY } from "../../api/apiKey";
export const fetchAyncMovies = createAsyncThunk(
  "movies/fetchAyncMovies",
  async () => {
    const movieText = "Harry";
    const res = await movieApi
      .get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("Error:", err);
      });
    return res.data;
    // console.log("API Response", res);
  }
);
export const fetchAyncShows = createAsyncThunk(
  "movies/fetchAyncShows",
  async () => {
    const seriesText = "friends";
    const res = await movieApi
      .get(`?apiKey=${APIKEY}&s=${seriesText}&type=series`)
      .catch((err) => {
        console.log("Error:", err);
      });
    return res.data;
    // console.log("API Response", res);
  }
);
export const fetchAyncMovieOrShows = createAsyncThunk(
  "movies/fetchAyncMovieOrShows",
  async (id) => {
    const res = await movieApi
      .get(`?apiKey=${APIKEY}&i=${id}&Plot=full`)
      .catch((err) => {
        console.log("Error:", err);
      });
    return res.data;
    // console.log("API Response", res);
  }
);
const initialState = {
  movies: {},
  shows: {},
  movieOrShows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeMovieOrShows: (state) => {
      state.movieOrShows = {};
    },
  },
  extraReducers: {
    [fetchAyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Movie Fetched Successfully");
      return { ...state, movies: payload };
    },
    [fetchAyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAyncShows.fulfilled]: (state, { payload }) => {
      console.log("Series Fetched Successfully");
      return { ...state, shows: payload };
    },
    [fetchAyncMovieOrShows.fulfilled]: (state, { payload }) => {
      console.log("Movie or shows Fetched Successfully");
      return { ...state, movieOrShows: payload };
    },
  },
});

export const { removeMovieOrShows } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllMoviOrShows = (state) => state.movies.movieOrShows;
export default movieSlice.reducer;
