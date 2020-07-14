import { Authenticator } from "../services/Authenticator";
import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";

export const getProfile = async (req: Request, res: Response) => {
  try {
    const token = req.headers.token as string;

    const authenticator = new Authenticator();
    const tokenData = authenticator.verifyToken(req.headers.token as string);
    if (tokenData.role !== "NORMAL") {
      throw new Error("You do not have permission to do that!");
    }

    const userDb = new UserDatabase();
    const user = await userDb.getUserById(tokenData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};
