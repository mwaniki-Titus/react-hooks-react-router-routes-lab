import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
        <h1>Directors Page</h1>
      {directors.map((director) => (
        <div key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {movies
              .filter((movie) => movie.directorId === director.id)
              .map((movie) => (
                <li key={movie.id}>{movie.title}</li>
              ))}
          </ul>
        </div>
      ))}

  </div>
  );
}

export default Directors;
