import express from "express";
import { BandController } from "../controller/BandController";
import { ConcertController } from "../controller/ConcertController";

export const concertRouter = express.Router();

const concertController = new ConcertController();

concertRouter.post("/new", concertController.newConcert);

concertRouter.get("/day", concertController.getConcerts);
