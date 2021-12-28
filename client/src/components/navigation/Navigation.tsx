import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BsPerson, BsPlusCircle, BsBarChart, BsClockHistory, BsListCheck } from "react-icons/bs";
import { State } from "../../state/State";
import AppRoutes from "../../enums/AppRoutes";
const Navigation: React.FC = () => {
  const { AUTH_CONTEXT, CUSTOMER_PROFILE_CONTEXT } = useContext(State);

  const { pathname } = useLocation();
  const Navigate = useNavigate();

  const HandleAdd = (e: React.MouseEvent) => {
    if (pathname === "/profile") {
      CUSTOMER_PROFILE_CONTEXT.API.TOGGLE_INTERACTIONS_FORM(e);
    } else if (pathname === "/customers" || pathname === "/history") {
      Navigate("/profile/create");
    }
  };

  return (
    (AUTH_CONTEXT.STATE.Authenticated && (
      <nav className={"navigation"}>
        <Link to={AppRoutes.CUSTOMERS}>
          <BsPerson className={"icon"} />
        </Link>
        <Link to={AppRoutes.HISTORY}>
          <BsClockHistory className={"icon"} />
        </Link>

        <BsPlusCircle className={"icon"} onClick={HandleAdd} />

        <Link to={AppRoutes.APPOINTMENTS}>
          <BsListCheck className={"icon"} />
        </Link>
        <Link to={AppRoutes.STATS}>
          <BsBarChart className={"icon"} />
        </Link>
      </nav>
    )) || <></>
  );
};

export default Navigation;
