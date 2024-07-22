import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PaginedMovies from './PaginedMovies';
import Movie from '../../models/Movie';


const ListMovieActor = ( { obj } ) => {
    const [listMovie, setListMovie] = useState();
    useEffect(() => {
        setListMovie(obj?.map((o,i)=>{
            let aux = new Movie(o.genre_ids, o.title, o.id, o.poster_path)
            return aux
        }))
    }, []);

    return (
        <PaginedMovies items={listMovie} itemsPerPage={10} length = {obj.length}></PaginedMovies>
    );
};


ListMovieActor.propTypes = {

};


export default ListMovieActor;
