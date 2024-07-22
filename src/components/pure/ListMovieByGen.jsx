import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Movie from '../../models/Movie';


const ListMovieByGen = ( {object, consult }) => {
    useEffect(() => {
        let listMovie = object?.map((o,i)=>{
            let aux = new Movie(o.genre_ids, o.title, o.id, o.poster_path)
            return aux
        })
        consult(listMovie)
    }, []);
    
    return (
        <>
        </>
    );
};


ListMovieByGen.propTypes = {

};


export default ListMovieByGen;
