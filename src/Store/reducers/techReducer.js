import { SET_LOADING, TECHS_ERROR, GET_TECHS, ADD_TECH, DELETE_TECH} from '../actions/types'

const initialState = {
	techs:null,
	loading:false,
	error:null
}

export default (state=initialState, action) =>{
	switch(action.type){
		case SET_LOADING:
			return{
				...state,
				loading:true
			}
		case GET_TECHS:
			return{
				...state,
				loading:false,
				techs:action.payload
			}
		case TECHS_ERROR:
			return{
				...state,
				loading:false,
				error:action.payload
			}
		case ADD_TECH:
			return{
				...state,
				loading:false,
				techs:[...state.techs, action.payload]
			}
		case DELETE_TECH:
			return{
				...state,
				loading:false,
				techs:state.techs.filter(tech=>tech.id !== action.payload)
			}
		default:
			return state
	}
}