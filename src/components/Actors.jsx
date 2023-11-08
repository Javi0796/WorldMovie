import React, { useState } from 'react';
import ConsultActors from './pure/ConsultActors';
import Actor from '../models/Actor'

const Actors = () => {
    const url = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1'
    const [listActors, setListActors] = useState([new Actor()])
    const [isLoading, setIsLoading] = useState(true)

    const getListActors = (( listActors ) => {
        setListActors(listActors)
        setIsLoading(false)
    })

    return (
        <section className='actors'>
            {listActors && <></>}
            <ConsultActors url={url} consult={getListActors}></ConsultActors>
        </section>
    );
}

export default Actors;
