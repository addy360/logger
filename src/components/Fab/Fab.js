import React from 'react'

const Fab = props =>{
	return(
		<div className="fixed-action-btn">
		  <a href="#addModal" className="btn-floating btn-large modal-trigger purple darken-4">
		    <i className="large material-icons">add</i>
		  </a>
		  <ul>
		    <li><a href="#techListModal" className=" modal-trigger btn-floating red"><i className="material-icons">supervisor_account</i></a></li>
		    <li><a href="#techModal" className=" modal-trigger btn-floating yellow darken-1"><i className="material-icons">person_add</i></a></li>
		  </ul>
		</div>
	)
}

export default Fab