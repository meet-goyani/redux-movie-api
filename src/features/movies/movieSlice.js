import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../api/movieApi";
import { APIKEY } from "../../api/apiKey";
export const fetchAyncMovies = createAsyncThunk(
  "movies/fetchAyncMovies",
  async () => {
    const movieText = "harry";
    const res = await movieApi
      .get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("Error:", err);
      });
    return res.data;
    //   console.log("API Response", res);
  }
);
const initialState = {
  movies: [],
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
      console.log("Fetched Successfully");
      return { ...state, movies: payload };
    },
    [fetchAyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
