import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import { addLog } from '../../Store/actions/actionCreators'
import SelectOptions from '../Tech/Select/SelectOptions'

const AddModal = props =>{
	const [message, setMessage] = useState('')
	const [tech, setTech] = useState('')
	const [attention, setAttention] = useState(false)

	const onSubmit = e =>{
		if(message === "") return M.toast({html: 'Message can not be empty!'});
		console.log(message,tech,attention)
		const newLog = {
			message, attention, technician:tech,
			date: new Date()
		}
		props.addLog(newLog)

		M.toast({html:"A Log added successfully"})

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
					    <select className="browser-default"  value={tech} onChange={e => setTech(e.target.value)} name="Tech">
					      <option   disabled value = "">Choose your option</option>
					      <SelectOptions/>
					    </select>
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


export default connect(null,{addLog})(AddModal)