import axios from "axios";

export const actionTypes = {
  PHOTO_LOADING: "PHOTO_LOADING",
  PHOTO_SUCCESS: "PHOTO_SUCCESS",
  PHOTO_FAILURE: "PHOTO_FAILURE",
};

export const get_loading=()=>{
    return{
        type:actionTypes.PHOTO_LOADING,

    }
}
export const get_success=(data)=>{
    return{
        type:actionTypes.PHOTO_SUCCESS,
        payload: data,
    }
}
export const get_failure=()=>{
    return{
        type:actionTypes.PHOTO_FAILURE,
        
    }
}


export const fetch=({query,page,per_page})=>async(dispatch)=>{
    dispatch(get_loading())
    try {
        const res=await axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=UMJfJaH8pEAREFEdkf_xW_Vc93KBw7fcVbYXY8H7GXk&per_page=${per_page}&page=${page}`)
        dispatch(get_success(res.data.results))
    } catch (error) {
        dispatch(get_failure())
    }

}
