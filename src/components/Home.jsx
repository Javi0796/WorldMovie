import React, { useState, useEffect } from 'react';
import Consult from './pure/Consult';

const Home = () => {
  const [obj, setObj] = useState()

  const URL = "https://api.themoviedb.org/3/genre/movie/list?language=en"

  const getGenrers = ( object ) => {
    setObj(object)
  }

  return (
    <div>
        Home
        <Consult url={ URL } consult={ getGenrers }  ></Consult>
    </div>
  );
}

export default Home;