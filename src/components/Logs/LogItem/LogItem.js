import React from 'react'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deleteLog, setCurrent } from '../../../Store/actions/actionCreators'
import M from "materialize-css/dist/js/materialize.min.js";


const LogItem = props =>{
	const onDelete = e=>{
		e.preventDefault()
		props.deleteLog(props.log.id)
		M.toast({html:"A Log Deleted successfully"})
	}
	return (
		<li className="collection-item">
			<div>
				<a href="#editModal" onClick={e => props.setCurrent(props.log) } className={ `modal-trigger ${ props.log.attention ? 'red-text' : 'purple-text' } darken-1` }>
					{ props.log.message } 
				</a>
				<br/>
				<span className="grey-text">
					<span className="black-text">ID #{ props.log.id }</span>{'  '} Last updated <span className="new badge indigo lighten-3" data-badge-caption={props.log.technician}></span> <Moment fromNow>{ new Date(props.log.date)}</Moment>
				</span>
				<a href="!#" onClick={onDelete} className="secondary-content" >
					<i className="material-icons red-text darken-3">delete</i>
				</a>
			</div> 
		</li>
	)
}


export default connect(null,{deleteLog, setCurrent})(LogItem)