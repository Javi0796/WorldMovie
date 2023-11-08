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
            {isLoading? <ReactLoading className='spinLoading' type='spin' color='#0000FF'/> :
            <div className='elements-container'>
                <img className='poster-main' src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop}`} alt={`Poster movie ${movieDetail.title}`}></img>
                <div className='elements-main-movie'>
                    <h5 className='title-movie'>{movieDetail.title}</h5>
                    <p className='desc-movie'>{movieDetail.descrip}</p>
                    <p className='duration-bar'>Duration: {movieDetail.runtime} minutes</p>
                    {movieDetail.page && <a href={movieDetail.page} target='_blank' rel='noreferrer'><i className='bi bi-play-circle play-icon'></i></a>}
                </div>
                </div>
            }
        </div>
        );
}

export default MainMovie;