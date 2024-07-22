import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import OPTIONS from "../../models/Options";
import ListMovieActor from "./ListMovieActor";

const ConsultMoviesActor = ({ url }) => {

const [object, setObject] = useState();
    useEffect(() => {
        fetch(url, OPTIONS)
        .then(response => {
            if(!response.ok) throw new Error('Request error')
            return response.json()
        })
        .then(response => {
            setObject(response.cast)
        })
        .catch(err => console.error(err))
    }, []);
    return (
        <>
            {object && <ListMovieActor obj={object} ></ListMovieActor>}
        </>
    );
};


ConsultMoviesActor.propTypes = {

};


export default ConsultMoviesActor;
