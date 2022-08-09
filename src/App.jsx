import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieShow from "./components/MovieShow";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:imdbID" element={<MovieShow />} />
      </Routes>
    </>
  );
}

export default App;
