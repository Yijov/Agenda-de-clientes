import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { State } from "../../../state/State";
import AppRoutes from "../../../enums/AppRoutes";

const PrivateRoute = () => {
  const { AUTH_CONTEXT } = useContext(State);
  const auth = AUTH_CONTEXT.STATE.Authenticated; // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Navigate to={AppRoutes.CUSTOMERS} /> : <Outlet />;
};

export default PrivateRoute;
