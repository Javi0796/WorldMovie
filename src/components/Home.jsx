import React, { useState } from 'react';
import Consult from './pure/Consult';
import Genre from '../models/Genre';
import ReactLoading from "react-loading";
import MovieListGen from './MovieListGen';


const Home = () => {
  const [obj, setObj] = useState([new Genre()])
  const [isLoading, setIsLoading] = useState(true)

  const URL = "https://api.themoviedb.org/3/genre/movie/list?language=en"

  const getGenres = ( object ) => {
    setObj(object)
    setIsLoading(false)
  }

  return (
    <section className='home'>
        <Consult url={ URL } consult= { getGenres }  ></Consult>
        <div
          className='media_genres'>
          <h3>Movie
          genres</h3>
          {isLoading?
          <div
          className='spin-container'><ReactLoading
          className='spinLoading'
          type="spin"
          color="#0000FF"/></div>
          :
          <MovieListGen
          className='container-fluid'
          listGen={obj}></MovieListGen>
          }
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
    </section>
  );
}

export default Home;