import Connection from "../connection/Connection";
import IAccountSignUpDTO from "../../interfaces/IAccountSignUpDTO";
import IAccountSignInDTO from "../../interfaces/IAccountSignInDTO";

export default class AuthAPI extends Connection {
  private routes = {
    signin: `${this.API_DOMAIN}/account/signin`,
    singup: `${this.API_DOMAIN}/account/signin`,
    signout: `${this.API_DOMAIN}/account/signin`,
  };
  public POST_SIGNIN = async (DTO: IAccountSignInDTO) => {
    const reponse = await this.POST_REQUEST(this.routes.signin, DTO);
    return reponse;
  };
  public GET_SIGNOUT = async () => {
    const reponse = await this.GET_REQUEST(this.routes.signout);
    return reponse;
  };
  public POST_SIGNUP = async (DTO: IAccountSignUpDTO) => {
    const reponse = await this.POST_REQUEST(this.routes.singup, DTO);
    return reponse;
  };
}
