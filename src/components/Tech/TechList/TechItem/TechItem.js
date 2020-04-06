import React from 'react'
const LogItem = props =>{
	const {fname, lname,id} = props.tech
	return (
		<li className="collection-item">
			{ `${id} ${fname} ${lname}` }
			<a href="!#" className="secondary-content" >
				<i className="material-icons red-text darken-3">delete</i>
			</a>
		</li>
	)
}

export default LogItem