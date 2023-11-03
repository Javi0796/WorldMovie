import React, { useEffect } from "react";
import MovieDetail from "../../models/MovieDetail";

const GetMovieDetail = ( ( {obj, consult} )=>{

    useEffect(() =>{
        let aux = new MovieDetail(obj.id, obj.original_title, obj.backdrop_path, obj.homepage, obj.overview, obj.runtime)
        consult(aux)
    },[obj])
})

export default GetMovieDetail;