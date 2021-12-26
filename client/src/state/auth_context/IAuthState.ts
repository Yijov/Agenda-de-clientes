export default interface IAuthState {
  STATE: {
    Authenticated: boolean;
    AuthError: string;
    AuthData: {
      name: string;
      lastName: string;
      email: string;
      password: string;
      confirmPassword: string;
    };
  };
  API: {
    SIGNIN_SUBMIT: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    HANDLE_AUTH_INPUT: (e: React.ChangeEvent<HTMLInputElement>) => void;
    SIGNOUT: (e: React.MouseEvent) => Promise<void>;
    SIGNUP_SUBMIT: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  };
}
