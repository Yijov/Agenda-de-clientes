import React, { FormEvent, ChangeEvent } from "react";
import IAuthState from "./IAuthState";

const AuthDefaults: IAuthState = {
  STATE: {
    Authenticated: false,
    AuthData: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    AuthError: "",
  },
  API: {
    SIGNIN_SUBMIT: function (e: FormEvent<HTMLFormElement>): Promise<void> {
      throw new Error("Function not implemented.");
    },
    HANDLE_AUTH_INPUT: function (e: ChangeEvent<HTMLInputElement>): void {
      throw new Error("Function not implemented.");
    },
    SIGNOUT: function (e: React.MouseEvent): Promise<void> {
      throw new Error("Function not implemented.");
    },
    SIGNUP_SUBMIT: function (e: FormEvent<HTMLFormElement>): Promise<void> {
      throw new Error("Function not implemented.");
    },
  },
};

export default AuthDefaults;
