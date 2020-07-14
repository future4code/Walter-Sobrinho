import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { UserDatabase } from "./data/UserDatabase";
import { IdGenerator } from "./services/IdGenerator";
import { signUp } from "./endpoints/signUp";
import { login } from "./endpoints/login";
import { Authenticator } from "./services/Authenticator";
import { getProfile } from "./endpoints/getProfile";
import { deleteUser } from "./endpoints/deleteUser";
import { getInfoById } from "./endpoints/getInfoById";

dotenv.config();

const app = express();

app.use(express.json());

const idGenerator = new IdGenerator();
const newId = idGenerator.generate();

const userGenerator = new UserDatabase();

app.post("/signup", signUp);

app.post("/login", login);

app.get("/user/profile", getProfile);

app.delete("/user/:id", deleteUser);

app.get("/user/:id", getInfoById);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
