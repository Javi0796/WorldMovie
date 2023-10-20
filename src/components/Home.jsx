import React from 'react';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjYxMzE5ZDA0NGU5MDQ0ODIyMWM2ZWNlYzA5MzJkNiIsInN1YiI6IjY1MjlhNDRkMzU4ZGE3MDBlM2JjYWU3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nukD30TYN4lUcelIQMKhC3iiYiToktPUtPLFm1p2njo'
    }
  };

const obj = fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

console.log(options);
console.log(obj);

const Home = () => {
    return (
        <div>
            Home
        </div>
    );
}

export default Home;
