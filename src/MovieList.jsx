import React from 'react'
import { useState } from "react";
import Movie from './Movie';

function MovieList({tempMovieData, movies}) {

  return (
    <ul className="list">
        {movies?.map((movie) => (
         <Movie movie={movie} key={movie.imdbID} />
        ))}
      </ul>
  )
}

export default MovieList