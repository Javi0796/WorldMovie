import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MovieDetail from '../models/MovieDetail';
import ConsultMovieDetail from './pure/ConsultMovieDetail';
import ReactLoading from "react-loading";

const MainMovie = ( {movie} ) => {
    
    const url = `https://api.themoviedb.org/3/movie/${movie.id}`
    const [movieDetail, setMovieDetail] = useState(new MovieDetail())
    const [isLoading, setIsLoading] = useState(true)

    const getMovieDetail = (( movieD ) => {
        setMovieDetail(movieD)
        setIsLoading(false)
    })

    return (
        <div className='main-movie-container'>
            <ConsultMovieDetail url={url} consult={getMovieDetail}></ConsultMovieDetail>
            {isLoading? <ReactLoading className="spinLoading" type="spin" color="#0000FF"/> :
            <img className='poster-main' src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop}`} alt={`Poster movie ${movie.title}`}></img>
            }
        </div>
        );
}

export default MainMovie;