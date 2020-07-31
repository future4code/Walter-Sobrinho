import { ConcertsBusiness } from "../business/ConcertBusiness";
import { ConcertDatabase } from "../database/ConcertDatabase";
import { HashGenerator } from "../services/HashManager";
import { TokenGenerator } from "../services/TokenGenerator";
import { IdGenerator } from "../services/IdGenerator";
import { BandDatabase } from "../database/BandDatabase";
import { Request, Response } from "express";
import { BaseDatabase } from "../database/BaseDatabase";

export class ConcertController {
  private static concertBusiness = new ConcertsBusiness(
    new ConcertDatabase(),
    new BandDatabase(),
    new TokenGenerator(),
    new IdGenerator()
  );

  public async newConcert(req: Request, res: Response) {
    try {
      const concertData = {
        token: req.headers.token as string,
        weekDay: req.body.weekDay,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        bandName: req.body.bandName,
      };
      await ConcertController.concertBusiness.newConcert(
        concertData.token,
        concertData.weekDay,
        concertData.startTime,
        concertData.endTime,
        concertData.bandName
      );
      res.status(200).send({
        message: "Concert successfully created",
      });
    } catch (error) {
      res.status(error.errocCode || 400).send(error.message);
    }

    BaseDatabase.destroyConnection();
  }

  public async getConcerts(req: Request, res: Response) {
    try {
      const token = req.headers.token as string;
      const day = req.body.day;
      const schedule = await ConcertController.concertBusiness.getConcerts(
        token,
        day
      );

      res.status(200).send(schedule);
    } catch (e) {
      res.status(e.errorCode || 400).send({
        message: e.message,
      });
    }
  }
}
