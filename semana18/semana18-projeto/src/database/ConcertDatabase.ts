import { Concert } from "../model/Concert";
import { BaseDatabase } from "./BaseDatabase";

export class ConcertDatabase extends BaseDatabase {
  private static TABLE_NAME = "LAMA_Concerts";

  private toModel(dbModel: any): Concert | undefined {
    return (
      dbModel &&
      new Concert(
        dbModel.id,
        dbModel.week_day,
        dbModel.start_time,
        dbModel.end_time,
        dbModel.band_id
      )
    );
  }

  public async newConcert(concert: Concert): Promise<void> {
    await this.getConnection().raw(`
    INSERT INTO ${ConcertDatabase.TABLE_NAME}
    VALUES(
      "${concert.getId()}",
      "${concert.getWeekDay()}",
      ${concert.getStartTime()},
      ${concert.getEndTime()},
      "${concert.getBandId()}"
    )
    `);
  }

  public async checkDayAvailability(
    day: string,
    time: number
  ): Promise<Boolean> {
    const result = await this.getConnection().raw(`
    SELECT * FROM ${ConcertDatabase.TABLE_NAME} WHERE week_day ="${day}" AND  start_time = ${time}
    `);

    if (result[0].lenght > 0) {
      return true;
    } else {
      return false;
    }
  }

  public async getConcerts(day: string) {
    const result = await this.getConnection().raw(`
    SELECT B.name, 
    B.music_genre, 
    C.start_time 
    FROM LAMA_Concerts C JOIN LAMA_Bands B 
    WHERE C.week_day = "friday"
    ORDER BY C.start_time
    `);
    return result[0];
  }
}
