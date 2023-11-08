import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Genre from '../../models/Genre';

const ListGen = ( {list , consult} ) => {

  useEffect(() => {
      let listO = list?.map((o, i) => {
          let aux = new Genre(o.id, o.name)
          return aux
        }) ?? [];
      consult(listO)
      }, []);

    return (
      <>
      </>
    )
}

ListGen.propTypes = {
  list: PropTypes.array.isRequired,
  consult: PropTypes.func.isRequired,
}

export default ListGen

