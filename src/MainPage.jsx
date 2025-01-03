import React from "react";
import { useState } from "react";
import ListBox from "./ListBox";
import WatchBox from "./WatchBox";

function MainPage({tempMovieData, tempWatchedData, average, movies}) {
  return <main className="main">
    <ListBox tempMovieData={tempMovieData} movies={movies} />
    <WatchBox tempWatchedData={tempWatchedData} average={average} />
  </main>;
}

export default MainPage;
