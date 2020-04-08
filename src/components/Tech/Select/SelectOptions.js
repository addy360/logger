import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { getTechs } from '../../../Store/actions/techsActionCreator'

const SelectOptions = props =>{
	useEffect(()=>{
		props.getTechs()
		// eslint-disable-next-line
	},[])
	const {loading, techs} = props.tech
	return(
		!loading && techs && techs.map(tech=>(
			<option key={tech.id} value={ `${tech.fname} ${tech.lname}` }>
				{ `${tech.fname} ${tech.lname}` }
			</option>
		))
	)
}

const mapStateToProps = state =>{
	return{
		tech:state.tech
	}
}
export default connect(mapStateToProps,{getTechs})(SelectOptions)