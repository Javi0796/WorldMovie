import React from 'react';
import ConsultActors from './pure/ConsultActors';

const Actors = () => {
    const url = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1'

    return (
        <section className='actors'>
            Actors
            <ConsultActors url={url}></ConsultActors>
        </section>
    );
}

export default Actors;
