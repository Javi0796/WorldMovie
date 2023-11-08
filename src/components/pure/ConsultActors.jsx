import React, {useEffect, useState} from "react";
import OPTIONS from "../../models/Options";
import ListActors from "./ListActors";

const ConsultActors = (  { url, consult } ) => {
  const [object, setobject] = useState()

  useEffect(() => {
    fetch(url, OPTIONS)
      .then(response => {
          if(!response.ok) throw new Error('Request error')
          return response.json()
        })
      .then(response => setobject(response.results))
      .catch(err => console.error(err))
    }, [])
    
  return(
      <>
        {object && <ListActors obj={object} consult={consult}></ListActors>}
      </>
  )
}

export default ConsultActors