import axios from "axios";
export const actionTypes = {
  AUTH_LOADING: "AUTH_LOADING",
  AUTH_SUCCESS: "AUTH_SUCCESS",
  AUTH_FAILURE: "AUTH_FAILURE",
  AUTH_STATUS:"AUTH_STATUS"
};

// REGISTER ACTION
export const register_loading = () => {
  return {
    type: actionTypes.AUTH_LOADING,
  };
};
export const register_status = () => {
  return {
    type: actionTypes.AUTH_STATUS,
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
export const login_success = (data) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: data,
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
      await axios.post(
        "https://unsplash-clone-application.herokuapp.com/api/auth/register",
        {
          first_name: first_name,
          last_name: last_name,
          username: username,
          email: email,
          password: password,
        }
      );
       dispatch(register_status())
    } catch (error) {
       dispatch(register_failure());
    }
  };







//   LOGIN
export const login =({ email, password }) =>async (dispatch) => {

  dispatch(login_loading())
    try {
      const res = await axios.post(
        "https://unsplash-clone-application.herokuapp.com/api/auth/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(res.data)
       dispatch(login_success(res.data));
    } catch (error) {
       dispatch(login_failure());
    }
  };
