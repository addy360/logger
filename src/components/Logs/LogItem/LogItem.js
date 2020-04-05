import React from 'react'

const LogItem = props =>{
	return (
		<li className="collection-item">{ props.log.message }</li>
	)
}

export default LogItem