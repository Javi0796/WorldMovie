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
        <div className='media_genres'>
          <h3>Movie genres</h3>
          {isLoading? 
            <div className='spin-container'><ReactLoading className='spinLoading' type="spin" color="#0000FF"/></div> 
            :
            <MovieListGen className='container-fluid' listGen={obj}></MovieListGen>
          }
        </div>
    </section>
  );
}

export default Home;