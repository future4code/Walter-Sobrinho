import { Band } from "../model/Band";
import { InvalidInputError } from "../error/InvalidInputError";
import { TokenGenerator } from "../services/TokenGenerator";
import { Unauthorized } from "../error/Unauthorized";
import { BandDatabase } from "../database/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";

export class BandBusiness {
  constructor(
    private bandDatabase: BandDatabase,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async newBand(
    token: string,
    name: string,
    music_genre: string,
    responsible: string
  ): Promise<void> {
    if (!name || !music_genre || !responsible) {
      throw new InvalidInputError("You need all parameters to log in!");
    }

    const user = await this.tokenGenerator.verify(token);

    if (!user || user.role !== "ADMIN") {
      throw new Unauthorized("You do not have permission to do that!");
    }

    const id: string = await this.idGenerator.generate();

    await this.bandDatabase.newBand(
      new Band(id, name, music_genre, responsible)
    );
  }

  public async bandInfo(token: any, input: string): Promise<Band | undefined> {
    if (!input) {
      throw new InvalidInputError("The search requires at least one parameter");
    }

    const user = await this.tokenGenerator.verify(token);
    if (!user) {
      throw new Unauthorized("You need to be logged to do that.");
    }
    const band = await this.bandDatabase.bandDetails(input);

    return band;
  }
}
