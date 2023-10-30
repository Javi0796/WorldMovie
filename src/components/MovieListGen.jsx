import React from 'react';
import PropTypes from 'prop-types';

const MovieListGen = ( { listGen } ) => {
    return (
        <div className='card_container row row-cols-2'>
            {listGen?.map((o,i)=>
                <div className='card_gen col-md' key={i}>
                    <img className='card-img-top' src='/' alt='card'/>
                    <div className='card-body'>
                    <p className='card-text'>{`${o.name}`}</p>
                </div>
              </div>
            )}
        </div>
    );
};


MovieListGen.propTypes = {
    listGen: PropTypes.array.isRequired,
};


export default MovieListGen;
