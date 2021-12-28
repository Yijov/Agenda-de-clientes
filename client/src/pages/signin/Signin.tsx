import React, { useContext } from "react";
import { State } from "../../state/State";
import { Link } from "react-router-dom";
import AppRoutes from "../../enums/AppRoutes";
export const Signin: React.FC = () => {
  const { AUTH_CONTEXT } = useContext(State);

  return (
    <div className="page" id="login-page">
      <form id="login-form" onSubmit={AUTH_CONTEXT.API.SIGNIN_SUBMIT}>
        <h2>Sign In</h2>

        <input
          type="email"
          name="email"
          id="login-email"
          placeholder="please type your email"
          autoComplete="on"
          onChange={AUTH_CONTEXT.API.HANDLE_AUTH_INPUT}
          value={AUTH_CONTEXT.STATE.AuthData.email}
          required
        />
        <input
          type="password"
          name="password"
          id="login-password"
          placeholder="please type your password"
          autoComplete="on"
          onChange={AUTH_CONTEXT.API.HANDLE_AUTH_INPUT}
          value={AUTH_CONTEXT.STATE.AuthData.password}
          required
        />
        <div id="login-error">
          <span>{AUTH_CONTEXT.STATE.AuthError}</span>
        </div>
        <input id="login-form-submit" type="submit" value="LogIn" />
        <Link id="reset-pasword_link" to="/">
          Forgot my password
        </Link>
        <Link id="create-account_link" to={AppRoutes.SIGNUP}>
          Create an account
        </Link>
      </form>
    </div>
  );
};
export default Signin;
