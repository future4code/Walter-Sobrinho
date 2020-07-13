import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { UserDatabase } from "./data/UserDatabase";
import { IdGenerator } from "./services/IdGenerator";
dotenv.config();

const app = express();

app.use(express.json());

const idGenerator = new IdGenerator();
const newId = idGenerator.generate();

const userGenerator = new UserDatabase();
const newUser = async (): Promise<any> => {
  const user = await userGenerator.createUser(
    newId as string,
    "user@email.com",
    "123456"
  );
  return user;
};

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
