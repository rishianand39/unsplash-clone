// `https://api.unsplash.com/search/photos?query=${query}&client_id=${client_id}&per_page=20import axios from "axios";

import axios from "axios";

export const actionTypes = {
    AUTH_LOADING: "AUTH_LOADING",
    AUTH_SUCCESS: "AUTH_SUCCESS",
    AUTH_FAILURE: "AUTH_FAILURE",
  };
  
  
  // REGISTER ACTION
  export const register_loading = () => {
    return {
      type: actionTypes.AUTH_LOADING,
    };
  };
  export const register_success = (data) => {
    return {
      type: actionTypes.AUTH_SUCCESS,
      payload: data,
    };
  };
  export const register_failure = () => {
    return {
      type: actionTypes.AUTH_FAILURE,
    };
  };
  
  // LOGIN ACTION
  export const login_loading = () => {
    return {
      type: actionTypes.AUTH_LOADING,
    };
  };
  export const login_success = () => {
    return {
      type: actionTypes.AUTH_SUCCESS,
    };
  };
  export const login_failure = () => {
    return {
      type: actionTypes.AUTH_FAILURE,
    };
  };
  
  
  // REGISTER
  export const register =
    ({ first_name, last_name, email, username, password }) =>
    async (dispatch) => {
      dispatch(register_loading());
      try {
         await axios.post("", {
          first_name: first_name,
          last_name: last_name,
          username: username,
          email: email,
          password: password,
        });
        return dispatch(register_success())
      } catch (error) {
        return dispatch(register_failure());
      }
    };
  
  //   LOGIN
  export const login =
    ({ email, password }) =>
    async (dispatch) => {
      dispatch(login_loading());
      try {
        const res = await axios.post("", {
          email: email,
          password: password,
        });
        return dispatch(login_success());
      } catch (error) {
        return dispatch(login_failure());
      }
    };
  