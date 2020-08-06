import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import { fileRouter } from "./routes/FileRouter";

if (process.env.NODE_ENV !== "serverless") {
  dotenv.config();
}
export const app = express();
app.use(
  cors({
    origin: true,
  })
);

app.use(express.json());
app.use(fileUpload());
app.use("/files", fileRouter);

if (process.env.NODE_env !== "serverless") {
  const server = app.listen(process.env.PORT || 3333, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });
}
