import React, { useEffect } from 'react'
import TechItem from './TechItem/TechItem'
import { connect } from 'react-redux'
import { getTechs } from '../../../Store/actions/techsActionCreator'
const Tech = props=>{

	useEffect(()=>{
		props.getTechs()
		// eslint-disable-next-line
	},[])
	const { loading, techs } = props.tech
	return(
		<div id="techListModal" className="modal">
		    <div className="modal-content">
		    	<h4>Available Technicians</h4>
		    	<ul className="collection">
			        { techs && !loading && techs.length === 0 ? <h4>No <span className="purple lighten-4">techs</span> currently</h4>:(
			        		techs && techs.map(tech=><TechItem key={tech.id} tech={tech} />)
			        	) }
		      	</ul>
		    </div> 
		  </div>
	)
}
const mapStateToProps = state =>{
	return{
		tech:state.tech
	}
}
export default connect(mapStateToProps,{getTechs})(Tech)