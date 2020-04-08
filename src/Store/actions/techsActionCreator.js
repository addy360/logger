import { SET_LOADING, TECHS_ERROR, GET_TECHS, ADD_TECH, DELETE_TECH} from './types'

export const setLoading =()=>{
	return {
		type:SET_LOADING
	}
}

export const getTechs = ()=>{
	return async dispatch=>{
		try{
			setLoading()
			const res = await fetch('/technicians')
			const data = await res.json()
			dispatch({
				type:GET_TECHS,
				payload:data
			})
		} catch(err){
			dispatch({
				type:TECHS_ERROR,
				payload:err.response.data
			})
		}
	}
}

export const addTech = (tech)=>{
	return async dispatch=>{
		try{
			setLoading()
			const res = await fetch('/technicians',{
				method:"POST",
				headers:{
					'Content-Type':'application/json'
				},
				body:JSON.stringify(tech)
			})
			const data = await res.json()
			dispatch({
				type:ADD_TECH,
				payload:data
			})
		} catch(err){
			dispatch({
				type:TECHS_ERROR,
				payload:err.response.data
			})
		}
	}
}

export const deleteTech = (id)=>{
	return async dispatch=>{
		try{
			setLoading()
			await fetch(`/technicians/${id}`,{
				method:"DELETE",
			})
			dispatch({
				type:DELETE_TECH,
				payload:id
			})
		} catch(err){
			dispatch({
				type:TECHS_ERROR,
				payload:err.response.data
			})
		}
	}
}
