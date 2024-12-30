import React from "react";
import { useState } from "react";
import ListBox from "./ListBox";
import WatchBox from "./WatchBox";

function MainPage({tempMovieData, tempWatchedData, average}) {
  return <main className="main">
    <ListBox tempMovieData={tempMovieData} />
    <WatchBox tempWatchedData={tempWatchedData} average={average} />
  </main>;
}

export default MainPage;
