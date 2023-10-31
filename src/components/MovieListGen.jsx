import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, Link } from 'react-router-dom';

const MovieListGen = ( { listGen } ) => {
    var image = ''

    const getImg = (i) => {
        image =`src/assets/${i+1}.jpg`
    }

    return (
        <div className='card_container'>
            {listGen?.map((o,i)=>
                <div className='card_gen' key={i} >
                    {getImg(i)}
                    <Link  to='/movie-genre-list'
                        state={{ name: o.name, id: o.id }}>
                        <img className='card-img-top' src={image} alt='card' />
                        <div className='card-body' >
                        <p className='card-text' >{`${o.name}`}</p>
                        </div>      
                    </Link>
              </div>
            )}
            <Outlet></Outlet>
        </div>
    );
};


MovieListGen.propTypes = {
    listGen: PropTypes.array.isRequired,
};


export default MovieListGen;
