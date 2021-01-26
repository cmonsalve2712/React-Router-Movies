import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
export default function App () {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);
  
  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Route exact path='/' component={App}>
        <MovieList movies={movieList} />
      </Route>
      <Route exact path='/movies/:id'>
        <Movie />
      </Route>
    </div>
  );
}