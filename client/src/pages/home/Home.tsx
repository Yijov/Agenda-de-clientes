import React from "react";
import Logo from "../../assets/images/CRM.png";
import { useNavigate } from "react-router";
import AppRoutes from "../../enums/routes";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate(AppRoutes.SIGNIN);
  };

  return (
    <div id="home-page" className="page">
      <div id="showcaseImage"></div>
      <img src={Logo} alt="App logo" id={"app-logo"} />

      <button onClick={goToLogin}>
        {" "}
        <p>Continue</p>{" "}
      </button>
    </div>
  );
};
export default Home;
