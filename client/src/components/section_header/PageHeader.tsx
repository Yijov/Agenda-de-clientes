import React, { useContext } from "react";
import { State } from "../../state/State";
import { FiLogOut } from "react-icons/fi";
import IPageTitle from "./IPageHeader";

const PageTitle: React.FC<IPageTitle> = ({ title }) => {
  //using genetal  state containr
  const { AUTH_CONTEXT } = useContext(State);

  const handleLogOut = (e: React.MouseEvent) => {
    AUTH_CONTEXT.API.SIGNOUT(e);
  };
  return (
    <header className="page-title">
      <h2>{title.toUpperCase()}</h2>
      {AUTH_CONTEXT.STATE.Authenticated && <FiLogOut className="icon" onClick={handleLogOut} />}
    </header>
  );
};

export default PageTitle;
