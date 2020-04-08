import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG , SEARCH_LOGS} from './types'

export const getLogs = () =>{
	return async dispatch =>{
		setLoading()
		try{
			const res = await fetch('/logs')
			const logs = await res.json()
			dispatch({
				type:GET_LOGS,
				payload:logs
			})
		} catch (err){
			dispatch({
				type:LOGS_ERROR,
				payload:err.response.data
			})
		}

	}
}

export const SearchLog = (query) =>{
	return async dispatch =>{
		setLoading()
		try{
			const res = await fetch(`/logs?q=${query}`)
			const logs = await res.json()
			dispatch({
				type:SEARCH_LOGS,
				payload:logs
			})
		} catch (err){
			dispatch({
				type:LOGS_ERROR,
				payload:err.response.data
			})
		}

	}
}

export const addLog = log =>{
	return async dispatch =>{
		setLoading()
		try{
			const bdy = {
				method:"POST",
				headers:{
					'Content-Type':'application/json'
				},
				body:JSON.stringify(log)
			}
			const res = await fetch('/logs',bdy)
			const logs = await res.json()
			dispatch({
				type:ADD_LOG,
				payload:logs
			})
		} catch (err){
			dispatch({
				type:LOGS_ERROR,
				payload:err.response.data
			})
		}

	}
}

export const deleteLog = id =>{
	return async dispatch =>{
		setLoading()
		try{
			await fetch(`/logs/${id}`,{
				method:"DELETE"
			})
			dispatch({
				type:DELETE_LOG,
				payload:id
			})
		} catch (err){
			dispatch({
				type:LOGS_ERROR,
				payload:err.response.data
			})
		}

	}
}

export const UpdateLog = log =>{
	return async dispatch =>{
		setLoading()
		try{
			const res = await fetch(`/logs/${log.id}`,{
				method:"PUT",
				headers:{
					'Content-Type':'application/json'
				},
				body:JSON.stringify(log)
			})
			const data = await res.json()
			dispatch({
				type:UPDATE_LOG,
				payload:data
			})
		} catch (err){
			dispatch({
				type:LOGS_ERROR,
				payload:err.response.data
			})
		}

	}
}


export const setCurrent = log =>{
	return {
		type:SET_CURRENT,
		payload:log
	}
}

export const clearCurrent = ()=>{
	return{
		type:CLEAR_CURRENT
	}
}
export const setLoading = ()=>{
	return {
		type:SET_LOADING
	}
}