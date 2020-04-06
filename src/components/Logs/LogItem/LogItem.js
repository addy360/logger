import React from 'react'
import Moment from 'react-moment'

const LogItem = props =>{
	return (
		<li className="collection-item">
			<div>
				<a href="#modalEdit" className={ `modal-trigger ${ props.log.attention ? 'red-text' : 'purple-text' } darken-1` }>
					{ props.log.message } 
				</a>
				<br/>
				<span className="grey-text">
					<span className="black-text">ID #{ props.log.id }</span>{'  '} Last updated <span className="new badge indigo lighten-3" data-badge-caption={props.log.technician}></span> <Moment fromNow>{ new Date(props.log.date)}</Moment>
				</span>
				<a href="!#" className="secondary-content" >
					<i className="material-icons red-text darken-3">delete</i>
				</a>
			</div> 
		</li>
	)
}

export default LogItem