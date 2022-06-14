import { actionTypes } from "./action"

export const initialState = {
    isLoading:false,
    isError:false,
    data:[]
}

export const photoReducer=(state=initialState,{type,payload})=>{

    switch(type){
        case actionTypes.PHOTO_LOADING:{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case actionTypes.PHOTO_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                data:payload
            }
        }
        case actionTypes.PHOTO_FAILURE:{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }
        default:{
            return state
        }
    }
}