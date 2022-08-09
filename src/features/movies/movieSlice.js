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
  "shows/fetchAyncShows",
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
const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
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
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
