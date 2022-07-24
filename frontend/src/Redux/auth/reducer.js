import { actionTypes } from "./action";

export const initialState = {
    isLoading:false,
    isError:false,
    status:false,
    data:JSON.parse(localStorage.getItem("data")) || [],
}

export const authReducer=(state=initialState,{type,payload})=>{

    switch(type){
        case actionTypes.AUTH_LOADING:{
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
        }
        case actionTypes.AUTH_SUCCESS:{
            localStorage.setItem("data", JSON.stringify(payload));
            console.log(payload)
            return{
                ...state,
                isLoading:false,
                isError:false,
                data:payload
            }
        }
        case actionTypes.AUTH_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        }
        case actionTypes.AUTH_STATUS:{
            return{
                ...state,
                status:true
            }
        }
        default:{
            return state
        }
    }
}