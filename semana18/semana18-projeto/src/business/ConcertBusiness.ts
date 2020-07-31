import { BandDatabase } from "../database/BandDatabase";
import { TokenGenerator } from "../services/TokenGenerator";
import { IdGenerator } from "../services/IdGenerator";
import { InvalidInputError } from "../error/InvalidInputError";
import { Unauthorized } from "../error/Unauthorized";
import { ConcertDatabase } from "../database/ConcertDatabase";
import { Concert } from "../model/Concert";
import { concertRouter } from "../router/ConcertRouter";

export class ConcertsBusiness {
  constructor(
    private concertDatabase: ConcertDatabase,
    private bandDatabase: BandDatabase,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async newConcert(
    token: string,
    weekDay: string,
    startTime: number,
    endTime: number,
    bandName: string
  ) {
    const user = await this.tokenGenerator.verify(token);

    if (!user || user.role !== "ADMIN") {
      throw new Unauthorized("You do not have permission to do that!");
    }

    if (!weekDay || !startTime || !endTime || !bandName) {
      throw new InvalidInputError("There are parameters missing");
    }

    if (
      weekDay !== "friday" &&
      weekDay !== "saturday" &&
      weekDay !== "sunday"
    ) {
      throw new InvalidInputError(
        "The event occurs only between friday and sunday."
      );
    }

    if (startTime % 100 !== 0 && endTime % 100 !== 0) {
      throw new InvalidInputError("You can only use full hours");
    }

    if (startTime < 800 || endTime > 2300) {
      throw new InvalidInputError(
        "The festival happens only between 8h and 24h."
      );
    }

    const checkDate = await this.concertDatabase.checkDayAvailability(
      weekDay,
      startTime
    );
    if (!checkDate) {
      throw new InvalidInputError("The date is already taken");
    }

    const band = await this.bandDatabase.bandDetails(bandName);
    if (!band) {
      throw new InvalidInputError("Band unknown");
    }
    const bandId = (await band.getId()) as string;
    const id = await this.idGenerator.generate();

    await this.concertDatabase.newConcert(
      new Concert(id, weekDay, startTime, endTime, bandId)
    );
  }

  public async getConcerts(token: string, day: string) {
    const auth = this.tokenGenerator.verify(token);
    if (!auth) {
      throw new Unauthorized("You need to be logged to get this information");
    }

    const result = await this.concertDatabase.getConcerts(day);

    return result;
  }
}
