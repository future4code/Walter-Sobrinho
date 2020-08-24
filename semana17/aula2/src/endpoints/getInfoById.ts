import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export const getInfoById = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    authenticator.verifyToken(token);
    const userDB = new UserDatabase();
    const user = await userDB.getInfoById(req.params.id);

    res.status(200).send({
      user,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};
