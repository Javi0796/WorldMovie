import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Movie from  '../models/Movie';
import ConsultMoviesByGenre from './pure/ConsultMoviesByGenre';
import ReactLoading from "react-loading";
import ListByGenre from './ListByGenre';

const MoviesByGenre = () => {
    const [listMovie, setListMovie] = useState([new Movie()])
    const [isLoading, setIsLoading] = useState(true)
    const location = useLocation()
    const name = location.state.name
    const id = location.state.id
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`


    const getListMovie = ( lm ) => {
        setListMovie(lm)
        setIsLoading(false)
    }

    return (
        <section className='movie-by-genre'>
            <div className='media_list_by_gen'>
                <h3>{name} genre</h3>
                <ConsultMoviesByGenre url={url} consult={getListMovie}></ConsultMoviesByGenre>
                {isLoading? <ReactLoading className="spinLoading" type="spin" color="#0000FF"/> : <ListByGenre listMovie={listMovie}></ListByGenre> }
            </div>
        </section>
            );
    };


MoviesByGenre.propTypes = {

};


export default MoviesByGenre;
