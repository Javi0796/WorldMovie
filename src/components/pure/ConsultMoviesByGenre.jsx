import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import OPTIONS from '../../models/Options';
import ListMovieByGen from './ListMovieByGen';


const ConsultMoviesByGenre = ( {url, consult} ) => {
    const [object, setObject] = useState();
    useEffect(() => {
        fetch(url, OPTIONS)
        .then(response => {
            if(!response.ok) throw new Error('Request error')
            return response.json()
        })
        .then(response => {
            setObject(response.results)
        })
        .catch(err => console.error(err))
    }, []);

    return (
        <>
            {object && <ListMovieByGen object={object} consult={consult}></ListMovieByGen>}
        </>
    );
};


ConsultMoviesByGenre.propTypes = {
    url: PropTypes.string.isRequired,
    consult: PropTypes.func.isRequired,
};


export default ConsultMoviesByGenre;
