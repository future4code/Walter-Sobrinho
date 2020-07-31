import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { userRouter } from "./router/UserRouter";
import { bandRouter } from "./router/BandRouter";
import { concertRouter } from "./router/ConcertRouter";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.use("/band", bandRouter);

app.use("/concert", concertRouter);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
