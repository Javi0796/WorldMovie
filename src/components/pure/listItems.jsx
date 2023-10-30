import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const ListGen = ( {obj} , {func} ) => {
  const [genrer, setGenrer] = useState()

  useEffect(() => {
      let listO = obj?.map((o, i) => {
          let aux = new Img(o.id, o.name);
          return aux;
        }) ?? [];
      setGenrer(listO)
  }, []);

  return (
    <>
    </>
  )
}

listGen.propTypes = {

}

export default ListGen

