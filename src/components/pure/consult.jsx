import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ListItems from './listItems'
import OPTIONS from '../../models/Options';

const Consult = ( {url} , {consult} ) => {
  const [object, setObject] = useState();
  console.log(url)
  useEffect(() => {
    fetch(url , OPTIONS)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        // setObject(response)
      })
      .catch(err => console.error(err))
    },[]);

    return (
      <div></div>
      // <ListItems obj={object} func={consult}>
      // </ListItems>
    )
}

Consult.propTypes = {
  url: PropTypes.string.isRequired,
  consult: PropTypes.func.isRequired,
}

export default Consult