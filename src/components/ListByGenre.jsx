import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const ListByGenre = ( { listMovie } ) => {

    // const carrouselContainer = useRef(null)
    // const row = carrouselContainer.current

    // const scrollRight = () => {
    //     row.scrollRight += row.offsetWidth;
    // }

    return (
        <div className='movie-list-gen'>
            <div className='carrousel-section-list'>
                <button role='button' className='left-indicator'><i className="bi bi-arrow-left-circle"></i></button>
                <div className="carrousel-container" >
                    <div className="movie">
                        {listMovie?.map((o,i)=>
                        <a href='#' key={i} >
                            <img className='card-movie' src={`https://image.tmdb.org/t/p/original${o.poster}`} alt='card-movie' />    
                        </a>
                        )}
                    </div>
                </div>
                <button role='button' className='right-indicator'><i className="bi bi-arrow-right-circle"></i></button>
            </div>
        </div>

    );
};


ListByGenre.propTypes = {

};


export default ListByGenre;
