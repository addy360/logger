import React from 'react'
import { connect } from 'react-redux'
import { deleteTech } from '../../../../Store/actions/techsActionCreator'
const LogItem = props =>{
	const {fname, lname,id} = props.tech
	return (
		<li className="collection-item">
			{ `${id} ${fname} ${lname}` }
			<a href="!#" onClick={e => props.deleteTech(id) } className="secondary-content" >
				<i className="material-icons red-text darken-3">delete</i>
			</a>
		</li>
	)
}

export default connect(null,{deleteTech})(LogItem)