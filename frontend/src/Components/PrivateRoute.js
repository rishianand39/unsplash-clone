
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const authStatus=useSelector(store=>store.auth.status)
    if(authStatus){
        return children
    }
  return <Navigate to="/" />
};

export default PrivateRoute;