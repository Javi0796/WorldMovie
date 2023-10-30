import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ListGen from './ListGen';
import OPTIONS from '../../models/Options';

const Consult = ( {url} , {consult} ) => {
  const [object, setObject] = useState();
  useEffect(() => {
    fetch(url , OPTIONS)
      .then(response => response.json())
      .then(response => {
        setObject(response[0])
        console.log(response)
      })
      .catch(err => console.error(err))
    },[]);

    return (
      <ListGen obj={object} func={consult}>
      </ListGen>
    )
}

Consult.propTypes = {
  url: PropTypes.string.isRequired,
  consult: PropTypes.func.isRequired,
}

export default Consult