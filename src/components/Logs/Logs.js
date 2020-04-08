import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Spinner from '../Spinner/Spinner'
import LogItem from './LogItem/LogItem'

// actioncreators
import { getLogs } from '../../Store/actions/actionCreators'

const Logs = props=>{
	const {loading, logs} = props.log
	useEffect(()=>{
		props.getLogs()
		// eslint-disable-next-line
	},[])

	if( loading || !logs ) return <Spinner/>

	return(
		<ul className="collection with-header">
	        <li className="collection-header"><h4 className="center">Logs</h4></li>
	        { !loading && logs.length === 0 ? <h4 className="red-text lighten-4">No <span className="purple-text lighten-4">logs</span> currently</h4>:(
	        		logs.map(log=><LogItem key={log.id} log={log} />)
	        	) }
      	</ul>
	)
}

const mapStateToProps = state=>{
  return{
    log:state.log,
  }
}

export default connect(mapStateToProps,{getLogs})(Logs)