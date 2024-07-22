import React from 'react';
import { useLocation } from 'react-router-dom';
import ConsultMoviesActor from './pure/ConsultMoviesActor';

export default () => {
  const location = useLocation();
  const name = location.state.name;
  const id = location.state.id;
  const url = `https://api.themoviedb.org/3/person/${id}/movie_credits`;

  return (
      <section>
          <div className='media_page'>
              <h3>{name}</h3>
              <ConsultMoviesActor url = {url} ></ConsultMoviesActor>
          </div>
      </section>
  );
}