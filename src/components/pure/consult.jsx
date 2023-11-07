import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ListGen from './ListGen';
import OPTIONS from '../../models/Options';

const Consult = ( {url , consult} ) => {
  
  const [object, setObject] = useState();

  useEffect(() => {
    fetch(url , OPTIONS)
      .then(response => {
        if(!response.ok) throw new Error('Request error')
        return response.json()
      })
      .then(response => {
        setObject(response.genres)
      })
      .catch(err => console.error(err))
    },[]);

    return (
      <>
        {object && <ListGen list={object} consult={consult}/>}
      </>
    )
}

Consult.propTypes = {
  url: PropTypes.string.isRequired,
  consult: PropTypes.func.isRequired,
}

export default Consult