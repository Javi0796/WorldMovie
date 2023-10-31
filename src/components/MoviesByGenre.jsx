import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import OPTIONS from '../models/Options';


const MoviesByGenre = () => {
    const location = useLocation()
    const name = location.state.name
    const id = location.state.id
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`
    useEffect(() => {
        fetch(url, OPTIONS)
        .then(response => response.json())
        .then(response => console.log(response.results))
        .catch(err => console.error(err));
    }, [url]);
    return (
        <div>
            <h1>Movies by genre {name}</h1>
        </div>
            );
    };


MoviesByGenre.propTypes = {

};


export default MoviesByGenre;
