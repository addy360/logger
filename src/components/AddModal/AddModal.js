import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddModal = props =>{
	const [message, setMessage] = useState('')
	const [tech, setTech] = useState('')
	const [attention, setAttention] = useState(false)

	const onSubmit = e =>{
		if(message === "") return M.toast({html: 'Message can not be empty!'});
		console.log(message,tech,attention)

		setAttention(false)
		setMessage('')
		setTech('')
	}
	return (
	  <div id="addModal" className="modal" style={{ width:"75%", height:"75%" }}>
	    <div className="modal-content">
	    	<div className="row">
			      <div className="row">
			        <div className="input-field col s12">
			          <input id="Message" value={message} onChange={e => setMessage(e.target.value)} name="Message" type="text" className="validate"/>
			          <label htmlFor="Message">Message</label>
			        </div>
			      </div>
			      <div className="row">
					  <div className="input-field col s12">
					    <select  value={tech} onChange={e => setTech(e.target.value)} name="Tech">
					      <option   disabled value = "">Choose your option</option>
					      <option value = "Option 1">Option 1</option>
					      <option value = "Option 2">Option 2</option>
					      <option value = "Option 3">Option 3</option>
					    </select>
					    <label>Technicians</label>
					  </div>
			      </div>
			      <div className="row">
					  <div className="input-field col s12">
				        <p>
					      <label>
					        <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e=>setAttention(!attention)}/>
					        <span>Needs Attention ?</span>
					      </label>
					    </p>
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

export default AddModal