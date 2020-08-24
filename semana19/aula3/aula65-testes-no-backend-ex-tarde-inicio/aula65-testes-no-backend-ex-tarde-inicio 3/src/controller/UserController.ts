import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { TokenGenerator } from "../services/tokenGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import { User } from "../model/User";
export class UserController {
  private static UserBusiness = new UserBusiness(
    new UserDatabase(),
    new HashGenerator(),
    new TokenGenerator(),
    new IdGenerator()
  );

  async signup(req: Request, res: Response) {
    try {
      const result = await UserController.UserBusiness.signup(
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.role
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  public async login(req: Request, res: Response) {
    const email = req.body.email;
    const password = req.body.password;
    try {
      const result = await UserController.UserBusiness.login(email, password);
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  public async profileById(req: Request, res: Response): Promise<any> {
    try {
      const id: string = req.params.id;
      const result = await UserController.UserBusiness.getProfileById(id);

      res.status(200).send({
        message: result,
      });
    } catch (e) {
      res.status(400).send({
        message: e.message,
      });
    }
  }

  public async getAllUsers(req: Request, res: Response): Promise<any> {
    try {
      const token = req.headers.authorization as string;
      const users = UserController.UserBusiness.getAllUsers(token);

      res.status(200).send({
        users,
      });
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
  }
}
