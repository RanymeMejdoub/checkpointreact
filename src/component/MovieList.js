import React from 'react'
import MovieCard from './MovieCard';
import '../App.css';

export const MovieList = ({movies, inputSearch, Rate}) => {
    return (
        <div className="movieList">
          {movies
          .filter(movies => movies.name.toLowerCase().includes(inputSearch.toLowerCase())
          &&
          movies.rating >= Rate
          ) 
          .map((movies) => ( <MovieCard movies={movies} key={movies.id} />))}
        </div>
      );
}