import React, { useState, useEffect } from 'react'
import Spinner from '../Spinner/Spinner'
import LogItem from './LogItem/LogItem'

const Logs = props=>{
	const [ logs, setLogs ] = useState([])
	const [ loading, setLoading ] = useState([false])

	const getLogs = async () =>{
		setLoading(true)
		const res = await fetch("/logs")
		const data = await res.json()

		setLogs(data)
		setLoading(false)
	}
	useEffect(()=>{
		getLogs()
		// eslint-disable-next-line
	},[])

	if( loading ) return <Spinner/>

	return(
		<ul className="collection with-header">
	        <li className="collection-header"><h4 className="center">Logs</h4></li>
	        { !loading && logs.length === 0 ? <h4>No <span className="purple lighten-4">logs</span> currently</h4>:(
	        		logs.map(log=><LogItem key={log.id} log={log} />)
	        	) }
      	</ul>
	)
}

export default Logs