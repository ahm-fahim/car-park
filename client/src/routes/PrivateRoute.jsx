/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
      return <div  className="flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
    </div>;
  }
  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;
