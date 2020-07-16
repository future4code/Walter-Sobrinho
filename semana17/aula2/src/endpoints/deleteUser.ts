import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import HashManager from "../services/HashManager";

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const auth = new Authenticator();
    const tokenData = auth.verifyToken(req.headers.token as string);
    if (tokenData.role !== "ADMIN") {
      throw new Error("You do not have permission to do that!");
    }

    const userDatabase = new UserDatabase();
    await userDatabase.deleteUser(req.params.id);

    res.status(200).send({
      message: "Success!",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};
