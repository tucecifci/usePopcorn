import React from 'react'
import { useState } from "react";
import MovieList from './MovieList';

function ListBox({tempMovieData, movies}) {
    const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
    <button
      className="btn-toggle"
      onClick={() => setIsOpen1((open) => !open)}
    >
      {isOpen1 ? "–" : "+"}
    </button>
    {isOpen1 && <MovieList tempMovieData={tempMovieData} movies={movies} />}
  </div>
  )
}

export default ListBox