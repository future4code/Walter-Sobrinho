import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../database/UserDatabase";
import { HashGenerator } from "../services/HashManager";
import { TokenGenerator } from "../services/TokenGenerator";
import { IdGenerator } from "../services/IdGenerator";
import { Request, Response } from "express";
import { BaseDatabase } from "../database/BaseDatabase";

export class UserController {
  private static UserBusiness = new UserBusiness(
    new UserDatabase(),
    new HashGenerator(),
    new TokenGenerator(),
    new IdGenerator()
  );

  async signUp(req: Request, res: Response) {
    try {
      const result = await UserController.UserBusiness.signup(
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.role
      );

      res.status(200).send(result);
    } catch (error) {
      res.status(error.errorCode || 400).send({
        message: error.message,
      });
    }
    BaseDatabase.destroyConnection();
  }

  async login(req: Request, res: Response) {
    try {
      const token = await UserController.UserBusiness.login(
        req.body.email,
        req.body.password
      );

      res.status(200).send({
        token: token,
      });
    } catch (error) {
      res.status(error.errorCode || 400).send({
        message: error.message,
      });
    }
    BaseDatabase.destroyConnection();
  }
}
