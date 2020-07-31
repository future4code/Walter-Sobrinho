import { BandBusiness } from "../business/BandBusiness";
import { TokenGenerator } from "../services/TokenGenerator";
import { IdGenerator } from "../services/IdGenerator";
import { BandDatabase } from "../database/BandDatabase";
import e, { Request, Response } from "express";
import { BaseDatabase } from "../database/BaseDatabase";
import { Band } from "../model/Band";

export class BandController {
  private static bandBusiness = new BandBusiness(
    new BandDatabase(),
    new TokenGenerator(),
    new IdGenerator()
  );

  public async newBand(req: Request, res: Response) {
    try {
      const token = req.headers.token as string;
      const bandData = {
        name: req.body.name,
        musicGenre: req.body.music_genre,
        responsible: req.body.responsible,
      };
      await BandController.bandBusiness.newBand(
        token,
        bandData.name,
        bandData.musicGenre,
        bandData.responsible
      );

      res.status(200).send({
        message: `${bandData.name} succesfully added`,
      });
    } catch (error) {
      res.status(error.errorCode || 400).send({
        message: error.message,
      });
    }
    BaseDatabase.destroyConnection();
  }

  public async bandDetails(req: Request, res: Response) {
    try {
      const data = {
        input: req.body.info,
        token: req.headers.token,
      };
      const band = await BandController.bandBusiness.bandInfo(
        data.token,
        data.input
      );

      res.status(200).send(band);
    } catch (error) {
      res.status(error.errorCode || 400).send({
        message: error.message,
      });
    }
    BaseDatabase.destroyConnection();
  }
}
