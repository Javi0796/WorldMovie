import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, Link } from 'react-router-dom';

const PopularActors = ( { listActors } ) => {
    var image = ''

    return (
        <div className='card_container'>
            {listActors?.map((o,i)=>
                <div className='card_gen' key={i} >
                    <Link className='' to='#'
                        state={{ name: o.name, id: o.id }}>
                        <img className='card-img-top' src={`https://image.tmdb.org/t/p/w500${o.profile}`} alt='card' />
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

PopularActors.propTypes = {
    listActors: PropTypes.array.isRequired,
};


export default PopularActors;
