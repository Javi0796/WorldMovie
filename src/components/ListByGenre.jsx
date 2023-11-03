import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ListByGenre = ( { listMovie, consult } ) => {
    
    const setMainMovie = ((o)=>{
        consult(o)
        event.preventDefault()
    })
    return (
        <div className='movie-list-gen'>
            <div className='carrousel-section-list'>
                <button role='button' className='left-indicator'><i className="bi bi-arrow-left-circle"></i></button>
                <div className="carrousel-container" >
                    <div className="movie">
                        {listMovie?.map((o,i)=>
                            <img role='button' className='card-movie' src={`https://image.tmdb.org/t/p/w500${o.poster}`} alt='card-movie' key={i} onClick={() => setMainMovie(o)}/>    
                        )}
                    </div>
                </div>
                <button role='button' className='right-indicator'><i className="bi bi-arrow-right-circle"></i></button>
            </div>
        </div>

    );
};


ListByGenre.propTypes = {
    listMovie: PropTypes.array.isRequired,
    consult: PropTypes.func.isRequired,
};


export default ListByGenre;
