import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const ListByGenre = ( { listMovie, consult } ) => {
    
    const scrollContainerRef = useRef(null)
    const setMainMovie = ((o)=>{
        consult(o)
        event.preventDefault()
    })

    const handleScrollLeft = (()=>{
        if(scrollContainerRef.current){
            scrollContainerRef.current.scrollLeft -= scrollContainerRef.current.offsetWidth
        }
    })

    const handleScrollRight = (()=>{
        if(scrollContainerRef.current){
            scrollContainerRef.current.scrollLeft += scrollContainerRef.current.offsetWidth
        }
    })

    return (
        <div className='movie-list-gen'>
            <div className='carrousel-section-list'>
                <button role='button' className='left-indicator'><i className="bi bi-arrow-left-circle" onClick={handleScrollLeft}></i></button>
                <div className="carrousel-container" ref={scrollContainerRef}>
                    <div className="movie">
                        {listMovie?.map((o,i)=>
                            <img role='button' className='card-movie' src={`https://image.tmdb.org/t/p/w500${o.poster}`} alt='card-movie' key={i} onClick={() => setMainMovie(o)}/>    
                        )}
                    </div>
                </div>
                <button role='button' className='right-indicator'><i className="bi bi-arrow-right-circle" onClick={handleScrollRight}></i></button>
            </div>
        </div>

    );
};


ListByGenre.propTypes = {
    listMovie: PropTypes.array.isRequired,
    consult: PropTypes.func.isRequired,
};


export default ListByGenre;
