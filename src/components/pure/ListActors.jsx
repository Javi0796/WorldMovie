import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Actor from '../../models/Actor'

function ListActors( {obj, consult} ) {

	const getGender = ((genderId) => {
		let gender
		switch ( genderId ) {
			case 1:
					gender = 'Female'
					break;
			case 2:
					gender = 'Male'
					break;
			default:
					gender = 'Not specified'
					break;
		}
		return gender
	})

	useEffect(() => {
		let listActors = obj?.map((o,i) => {
				let aux = new Actor(o.id, getGender(o.gender), o.name, o.known_for, o.profile_path)
				return aux
		})
		consult(listActors)
	}, [obj])
	

  return (
    <></>
  )
}

ListActors.propTypes = {}

export default ListActors