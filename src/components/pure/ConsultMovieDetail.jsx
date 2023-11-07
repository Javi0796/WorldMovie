import React, {useState, useEffect} from "react";
import OPTIONS from "../../models/Options";
import GetMovieDetail from "./GetMovieDetail";

const ConsultMovieDetail = (({url, consult})=>{

    const [object, setObject] = useState()

    useEffect(()=>{
        fetch(url, OPTIONS)
            .then(response => {
                if(!response.ok) throw new Error('Request error')
                return response.json()
            })
            .then(response => setObject(response))
            .catch(err => console.error(err))
    },[url])

    return (
        <>
            {object && <GetMovieDetail obj={object} consult={consult}></GetMovieDetail>}
        </>
    )
})

export default ConsultMovieDetail;