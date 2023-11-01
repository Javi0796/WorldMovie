import React from 'react';
import PropTypes from 'prop-types';


const ListByGenre = ( { listMovie } ) => {
    return (
        <div className='card_container'>
            {listMovie?.map((o,i)=>
                <div className='card_gen' key={i} >
                    <img className='card-img-top card-list' src={`https://image.tmdb.org/t/p/original${o.poster}`} alt='card' />    
                </div>
            )}
        </div>
    );
};


ListByGenre.propTypes = {

};


export default ListByGenre;
