import React, { useContext } from "react";
import { State } from "../../state/State";
import { Link } from "react-router-dom";
import AppRoutes from "../../enums/routes";

const Signup: React.FC = () => {
  const { AUTH_CONTEXT } = useContext(State);

  return (
    <div className="page" id="register-page">
      <form id="register-form" method="post" onSubmit={AUTH_CONTEXT.API.SIGNUP_SUBMIT}>
        <h2>Register</h2>

        <div id="register-error">
          <span>{AUTH_CONTEXT.STATE.AuthError}</span>
        </div>

        <input
          type="text"
          name="name"
          id="register-name"
          placeholder="please type your name"
          autoComplete="on"
          onChange={AUTH_CONTEXT.API.HANDLE_AUTH_INPUT}
          value={AUTH_CONTEXT.STATE.AuthData.name}
          required
        />
        <input
          type="text"
          name="lastName"
          id="register-lastName"
          placeholder="please type your last name"
          autoComplete="on"
          onChange={AUTH_CONTEXT.API.HANDLE_AUTH_INPUT}
          value={AUTH_CONTEXT.STATE.AuthData.lastName}
          required
        />

        <input
          type="email"
          name="email"
          id="register-email"
          placeholder="please type your email"
          autoComplete="on"
          onChange={AUTH_CONTEXT.API.HANDLE_AUTH_INPUT}
          value={AUTH_CONTEXT.STATE.AuthData.email}
          required
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="please type your password"
          autoComplete="off"
          onChange={AUTH_CONTEXT.API.HANDLE_AUTH_INPUT}
          value={AUTH_CONTEXT.STATE.AuthData.password}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          id="register-password-confirm"
          placeholder="please confim your password"
          autoComplete="off"
          onChange={AUTH_CONTEXT.API.HANDLE_AUTH_INPUT}
          value={AUTH_CONTEXT.STATE.AuthData.confirmPassword}
          required
        />

        <input id="register-form-submit" type="submit" value="Register" />
        <Link id="has-account_link" to={AppRoutes.SIGNIN}>
          I have an account
        </Link>
      </form>
    </div>
  );
};

export default Signup;
