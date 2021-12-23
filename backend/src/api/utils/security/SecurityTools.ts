//JWR security functions
import env from "dotenv";
env.config();
import JWT from "jsonwebtoken";
import BCrypt from "bcrypt";
import { NextFunction, Response, Request } from "express";
import IJWTPayload from "./IJWTPayload";

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
    const Valid = await BCrypt.compare(SubmitedPassword, encriptedPassword);
    return Valid;
  };

  public CreateToken = async (payload: IJWTPayload): Promise<string> => {
    let token = JWT.sign(payload, process.env.TOKEN_SECRET!!, {
      expiresIn: this.JWTmaxAge,
    });
    return token;
  };

  public static AUTH = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.cookies.AuthToken;
      const verifyed = await JWT.verify(token, process.env.TOKEN_SECRET!!);
      if (token && verifyed) {
        next();
      } else {
        return res.status(401).json({ message: "You are not logged in" });
      }
      //will throw error if it fails
    } catch (error) {
      return res.status(400).json({ message: "Invalid token" });
    }
  };

  public ExtractInfoFromToken = async (token: string) => {
    const tokenData = await JWT.verify(token, process.env.TOKEN_SECRET!!);
    return <IJWTPayload>tokenData;
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
