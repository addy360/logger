import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import { UpdateLog } from '../../Store/actions/actionCreators'
import SelectOptions from '../Tech/Select/SelectOptions'


const EditModal = props =>{
	const [message, setMessage] = useState('')
	const [tech, setTech] = useState('')
	const [attention, setAttention] = useState(false)
	useEffect(()=>{
		if(props.current){
			const { message, attention, technician } = props.current
			setMessage(message)
			setTech(technician)
			setAttention(attention)
		}
	// eslint-disable-next-line
	},[props.current])
	const onSubmit = e =>{
		if(message === "") return M.toast({html: 'Message can not be empty!'});
		const newLog = {
			id:props.current.id,
			message, attention, technician:tech,
			date: new Date()
		}
		props.UpdateLog(newLog)
		M.toast({html:"Log updated successfully!"})
		setAttention(false)
		setMessage('')
		setTech('')
	}
	return (
	  <div id="editModal" className="modal" style={{ width:"75%", height:"75%" }}>
	    <div className="modal-content">
	    	<h4>Edit log</h4>
	    	<div className="row">
			      <div className="row">
			        <div className="input-field col s12">
			          <input id="msg" value={message} onChange={e => setMessage(e.target.value)} name="Message" type="text" className="validate"/>
			        </div>
			      </div>
			      <div className="row">
					  <div className="input-field col s12">
					    <select  value={tech} onChange={e => setTech(e.target.value)} name="Tech" className="browser-default">
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

const mapStateToProps = state=>{
	return {
		current:state.log.current
	}
}
export default connect(mapStateToProps,{UpdateLog})(EditModal)