import React, {useEffect, useState} from "react";
import OPTIONS from "../../models/Options";

const ConsultActors = (  { url } ) => {
    const [object, setobject] = useState()

    useEffect(() => {
      fetch(url, OPTIONS)
        .then(response => {
            if(!response.ok) throw new Error('Request error')
            return response.json()
          })
        .then(response => console.log(response.results))
        .catch(err => console.error(err))
    }, [])
    
    return(
        <></>
    )
}

export default ConsultActors