import { useState, useEffect } from "react";
import AuthAPI from "../../data/apis/AuthAPI";
import IAccountSignUpDTO from "../../interfaces/IAccountSignUpDTO";
import Cookies from "universal-cookie";
import AuthDefaults from "./AuthDefaults";

const cookies = new Cookies();

const Api = new AuthAPI();

export default function AuthState() {
  // autho state
  const [Authenticated, setAuth] = useState(AuthDefaults.STATE.Authenticated);

  //form error message
  const [AuthError, setAuthError] = useState(AuthDefaults.STATE.AuthError);

  //user data state
  const [AuthData, setAuthData] = useState<IAccountSignUpDTO>(AuthDefaults.STATE.AuthData);

  //vaidate if user is loged in
  const VALIDATE_SIGNED_IN = async () => {
    const LogToken = await cookies.get("LogToken");
    if (!LogToken) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  };

  //log out function
  const SIGNOUT = async (e: React.MouseEvent) => {
    if (window.confirm("¿Are you sure that you are loging out?")) {
      const response = await Api.GET_SIGNOUT();
      setAuth(response?.success || false);
    }
  };

  //log in submision function

  const SIGNIN_SUBMIT = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await Api.POST_SIGNIN(AuthData);
    if (response?.success === true) {
      return setAuth(true);
    } else {
      setAuthError(response?.message!!);
      return setAuth(false);
    }
  };

  //register submision function

  const SIGNUP_SUBMIT = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (AuthData.password !== AuthData.confirmPassword) {
      setAuthError("The pasword does not mathc the pasword confirmed");
      return setAuth(false);
    }
    const response = await Api.POST_SIGNUP(AuthData);
    if (response?.success === true) {
      return setAuth(true);
    } else {
      setAuthError(response?.message!!);
      return setAuth(false);
    }
  };
  // to handle inpust of log in and register

  const HANDLE_AUTH_INPUT = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAuthError("");
    let { name, value } = e.target;
    setAuthData({ ...AuthData, [name]: value });
  };

  //validate log in on load
  useEffect(() => {
    VALIDATE_SIGNED_IN(); // eslint-disable-next-line
  }, []);

  //abstracting before exporting
  //the API contains all the methods to modify the state and the STATE contains all relavant pieces of stata
  const AUTH_CONTEXT = {
    STATE: {
      Authenticated,
      AuthData,
      AuthError,
    },
    API: {
      SIGNIN_SUBMIT,
      HANDLE_AUTH_INPUT,
      SIGNOUT,
      SIGNUP_SUBMIT,
    },
  };

  //Exporting all the information
  return AUTH_CONTEXT;
}
