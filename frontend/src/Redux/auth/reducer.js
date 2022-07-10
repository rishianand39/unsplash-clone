import { actionTypes } from "./action";

export const initialState = {
    status:false,
    token:null,
    isLoading:false,
    isError:false,
    data:[]
}

export const authReducer=(state=initialState,{type,payload})=>{

    switch(type){
        case actionTypes.LOADING:{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case actionTypes.SUCCESS:{
            return{
                ...state,
                status:true,
                isLoading:false,
                isError:false,
                data:payload
            }
        }
        case actionTypes.FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        }
        default:{
            return state
        }
    }
}