import React from 'react';
import PropTypes from 'prop-types';

const MovieListGen = ( { listGen } ) => {
    var image = ''

    const getImg = (i) => {
        image =`src/assets/${i+1}.jpg`
    }

    return (
        <div className='card_container'>
            {listGen?.map((o,i)=>
                <div className='card_gen' key={i}>
                    {getImg(i)}
                    <img className='card-img-top' src={image} alt='card'/>
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
