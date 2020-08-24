import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import HashManager from "../services/HashManager";
import { hash } from "bcryptjs";

export const login = async (req: Request, res: Response) => {
  try {
    if (req.body.email === "") {
      throw new Error("Please inform a valid email");
    }
    if (req.body.email.indexOf("@") === -1) {
      throw new Error("Please inform a valid email");
    }
    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };
    const userDatabase = new UserDatabase();
    const user = await userDatabase.userInfo(userData.email);

    const hashManager = new HashManager();
    const correctPassword = await hashManager.compare(
      req.body.password,
      user.password
    );

    if (!correctPassword) {
      throw new Error("Informed password does not match the username");
    }

    const auth = new Authenticator();
    const token = auth.generateToken({
      id: user.id,
      role: userData.role,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.sqlMessage || err.message,
    });
  }
};
