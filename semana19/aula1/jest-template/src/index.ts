import User from "./User";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { PostDatabase } from "./PostDatabase";

dotenv.config();

const app = express();

app.use(express.json());
// EXERCICIO 1
export function checkPurchase(user: User, value: number): User | undefined {
  if (user.balance >= value) {
    const newUser: User = {
      ...user,
      name: user.name,
      balance: user.balance - value,
    };
    return newUser;
  } else {
    return undefined;
  }
}

//EXERCICIO 2
export enum LOCATION {
  EUA = "EUA",
  BRAZIL = "BRAZIL",
}

export enum NATIONALITY {
  BRAZILIAN = "BRAZILIAN",
  AMERICAN = "AMERICAN",
}

export default interface CasinoUser {
  name: string;
  age: number;
  nationality: NATIONALITY;
}

export interface Casino {
  name: string;
  location: LOCATION;
}

interface Result {
  brazilians: ResultItem;
  americans: ResultItem;
}

interface ResultItem {
  allowed: string[];
  unallowed: string[];
}

export function verifyAge(casino: Casino, users: CasinoUser[]): Result {
  const allowed: CasinoUser[] = [];
  const unallowed: CasinoUser[] = [];

  for (const user of users) {
    if (casino.location === "EUA") {
      if (user.age >= 21) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    } else if (casino.location === "BRAZIL") {
      if (user.age >= 18) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
      break;
    }
  }
  return {
    brazilians: {
      allowed: allowed
        .filter((user) => user.nationality === NATIONALITY.BRAZILIAN)
        .map((u) => u.name),
      unallowed: unallowed
        .filter((user) => user.nationality === NATIONALITY.BRAZILIAN)
        .map((u) => u.name),
    },
    americans: {
      allowed: allowed
        .filter((user) => user.nationality === "AMERICAN")
        .map((u) => u.name),
      unallowed: unallowed
        .filter((user) => user.nationality === "AMERICAN")
        .map((u) => u.name),
    },
  };
}

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
