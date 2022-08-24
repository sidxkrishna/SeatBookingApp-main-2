import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = (props) => {
    const isAuthenticated = localStorage.getItem("user"); //TODO : make an API call to the backend to validate the user with the token , this is just a band-aid  solution for now
    console.log({isAuthenticated})
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }else{
        return props.children;
    }
   
  };
export default ProtectedRoute;