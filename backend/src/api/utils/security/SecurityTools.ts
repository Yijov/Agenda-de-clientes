//JWR security functions
import env from "dotenv";
env.config();
import JWT from "jsonwebtoken";
import BCrypt from "bcrypt";
import { Response } from "express";
export default class SecurityTools {
  private JWTmaxAge = 1 * 24 * 60 * 60; //24 hours

  get tokenMaxAge(): number {
    return this.JWTmaxAge;
  }
  public EncriptPasword = async (password: string): Promise<string> => {
    const salt = await BCrypt.genSalt(10);
    const hashedPasword = await BCrypt.hash(password, salt);
    return hashedPasword;
  };

  public validatePasswaord = async (
    SubmitedPassword: string,
    encriptedPassword: string
  ): Promise<boolean> => {
    return await BCrypt.compare(SubmitedPassword, encriptedPassword);
  };

  public CreateToken = async (Id: string): Promise<string> => {
    let token = JWT.sign({ id: Id }, process.env.TOKEN_SECRET!!, {
      expiresIn: this.JWTmaxAge,
    });
    return token;
  };

  public validateToken = async (token: string): Promise<boolean> => {
    const verifiedToken = await JWT.verify(token, process.env.TOKEN_SECRET!!);
    return verifiedToken ? true : false;
  };

  public addCredentials = async (res: Response, token: string) => {
    res
      .cookie("AuthToken", token, {
        maxAge: this.JWTmaxAge * 1000,
        httpOnly: true,
      })
      .cookie("LogToken", true, { maxAge: this.JWTmaxAge * 1000 });
    return;
  };

  //200
  public removeCredentials = async (res: Response) => {
    res
      .cookie("AuthToken", "", { maxAge: 1, httpOnly: true })
      .cookie("LogToken", "", { maxAge: 1 });
  };
}
