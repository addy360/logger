import React, {useState} from 'react'
import { connect } from 'react-redux'
import { SearchLog } from '../../Store/actions/actionCreators'
const Search = props=>{
	const [query , setQuery]=useState('')
	const onChange = e=>{
		setQuery(e.target.value)
		props.SearchLog(query)
	}
	return(
	  <nav style={{ marginBottom:"30px" }} className="purple darken-4">
	    <div className="nav-wrapper">
	      <form>
	        <div className="input-field">
	          <input id="search" type="search" value={query} onChange={onChange} required/>
	          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
	          <i className="material-icons">close</i>
	        </div>
	      </form>
	    </div>
	  </nav>
	)
}

export default connect(null,{SearchLog})(Search)