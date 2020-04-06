import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const TechAddModal = props =>{
	const [fname, setFname] = useState('')
	const [lname, setLname] = useState('')
	
	const onSubmit = e =>{
		if(fname === "" && lname === "") return M.toast({html: 'All fields are required!'});
		console.log(fname, lname)

		setFname('')
		setLname('')
	}
	return (
	  <div id="techModal" className="modal">
	    <div className="modal-content">
	    	<h4>Add A Technician</h4>
	    	<div className="row">
			      <div className="row">
			        <div className="input-field col s12">
			          <input id="fname" value={fname} onChange={e => setFname(e.target.value)} name="fname" type="text" className="validate"/>
			          <label htmlFor="fname">First Name</label>
			        </div>
			      </div>
			      <div className="row">
			        <div className="input-field col s12">
			          <input id="lname" value={lname} onChange={e => setLname(e.target.value)} name="lname" type="text" className="validate"/>
			          <label htmlFor="lname">Last Name</label>
			        </div>
			      </div>
			      
			  </div>
			  <div className="modal-footer">
		        <a href="#!" onClick = {onSubmit} className="modal-close waves-effect waves-purple btn-flat green lighten-1">Save</a>
		      </div>
			 </div>
	    </div>
	)
}

export default TechAddModal