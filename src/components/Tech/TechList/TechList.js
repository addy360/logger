import React, { useState, useEffect } from 'react'
import TechItem from './TechItem/TechItem'

const Tech = props=>{
	const [ techs, setTechs ] = useState([])
	const [ loading, setLoading ] = useState([false])

	const getTech = async () =>{
		setLoading(true)
		const res = await fetch("/technicians")
		const data = await res.json()

		setTechs(data)
		setLoading(false)
	}
	useEffect(()=>{
		getTech()
		// eslint-disable-next-line
	},[])

	return(
		<div id="techListModal" className="modal">
		    <div className="modal-content">
		    	<h4>Available Technicians</h4>
		    	<ul className="collection">
			        { !loading && techs.length === 0 ? <h4>No <span className="purple lighten-4">techs</span> currently</h4>:(
			        		techs.map(tech=><TechItem key={tech.id} tech={tech} />)
			        	) }
		      	</ul>
		    </div> 
		  </div>
	)
}

export default Tech